import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Character } from './character.model';

@Injectable()
export class CharacterService {

    charactersChanged = new Subject<Character[]>();
    characterChanged = new Subject<Character>();
    private characters: Character[] = [];
    private character: Character = new Character();
    constructor() { }

    setCharacters(characters: Character[]) {
        this.characters = characters;
        this.charactersChanged.next(this.characters.slice());
    }

    setCharacter(character: Character) {
        this.character = character;
        this.characterChanged.next(this.character);
    }

    getCharacters() {
        return this.characters.slice();
    }

    getCharacter(index: number) {
        return this.characters[index];
    }
}