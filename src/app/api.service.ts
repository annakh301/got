import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BookService } from './books/book.service';
import { HouseService } from './houses/house.service';
import { CharacterService } from './characters/character.service';

import { Character } from './characters/character.model';
import { Book } from './books/book.model';
import { House } from './houses/house.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
    constructor(
        private http: HttpClient,
        private bookService: BookService,
        private characterService: CharacterService,
        private houseService: HouseService) { }

    getBooks() {
        this.http
            .get<Book[]>('https://anapioficeandfire.com/api/books/')
            .subscribe(books => {
                this.bookService.setBooks(books);
            });
    }
    getCharacters() {
        this.http
            .get<Character[]>('https://anapioficeandfire.com/api/characters/')
            .subscribe(characters => {
                this.characterService.setCharacters(characters);
            })
    }
    getHouses() {
        this.http
            .get<House[]>('https://anapioficeandfire.com/api/houses/')
            .subscribe(houses => {
                this.houseService.setHouses(houses);
            })
    }
}