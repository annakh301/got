import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  
  character: Character;
  id: number;

  constructor(private characterService: CharacterService,
    private apiService: ApiService,
    private route: ActivatedRoute) { 
    }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          //TODO: get the state to the different component
          this.apiService.getCharacter(this.id.toString())
        }
      )
  }

}
