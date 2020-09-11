import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Character } from './character.model';

@Injectable()
export class CharacterService {

    charactersChanged = new Subject<Character[]>();
    private characters: Character[] = [];
    constructor() { }

    setCharacters(characters: Character[]) {
        this.characters = characters;
        this.charactersChanged.next(this.characters.slice());
    }

    getCharacters() {
        return this.characters.slice();
    }

    getCharacter(index: number) {
        return this.characters[index];
    }
}