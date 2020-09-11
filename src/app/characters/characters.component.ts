import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Character } from './character.model';
import { CharacterService } from './character.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  providers: [CharacterService, ApiService]
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters: Character[];
  subscription: Subscription;

  constructor(
    private characterService: CharacterService,
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.subscription = this.characterService.charactersChanged
      .subscribe(
        (characters: Character[]) => {
          this.characters = characters;
        }
      );
    this.characters = this.characterService.getCharacters();
    this.apiService.getCharacters();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
