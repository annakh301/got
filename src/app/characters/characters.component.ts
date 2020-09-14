import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Character } from './character.model';
import { CharacterService } from './character.service';
import { ApiService } from '../api.service';
import { PageEvent } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { Search } from '../search.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  providers: [CharacterService, ApiService]
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters: Character[];
  subscription: Subscription;
  length: number = 2138;
  pageSize: number = 10;
  pageEvent: PageEvent;
  pageIndex: number;
  pageNumber: number;

  constructor(
    private characterService: CharacterService,
    private apiService: ApiService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.subscription = this.characterService.charactersChanged
      .subscribe(
        (characters: Character[]) => {
          this.characters = characters;
        }
      );
    this.characters = this.characterService.getCharacters();
    this.apiService.getCharacters("1", "10");
  }

  onPaginate(pageEvent: PageEvent) {
    this.pageSize = pageEvent.pageSize;
    this.pageNumber = +pageEvent.pageIndex + 1;
    this.apiService.getCharacters(this.pageNumber.toString(), this.pageSize.toString());
  }

  getPic(srcPath: string){
    this.http
        .get<Search>(srcPath)
        .subscribe(response =>{
          for (var i = 0; i < response.items.length; i++) {
            var item = response.items[i];
            // in production code, item.htmlTitle should have the HTML entities escaped.
            document.getElementById("content").innerHTML += item.link;
          }
    
        })
}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
