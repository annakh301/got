import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { BookService } from './books/book.service';
import { HouseService } from './houses/house.service';
import { CharacterService } from './characters/character.service';

import { Character } from './characters/character.model';
import { Book } from './books/book.model';
import { House } from './houses/house.model';
import { JsonPipe } from '@angular/common';


@Injectable({ providedIn: 'root' })

export class ApiService {
    constructor(
        private http: HttpClient,
        private bookService: BookService,
        private characterService: CharacterService,
        private houseService: HouseService) { }

    getBooks(pageNumber?: string, pageSize?: string) {

        const searchParams = new HttpParams()
            .set('page', pageNumber)
            .set('pageSize', pageSize);
        this.http
            .get<Book[]>('https://anapioficeandfire.com/api/books',
                { params: searchParams })
            .subscribe(books => {
                this.bookService.setBooks(books);
                console.log(books)

            });
    }

    getCharacters(pageNumber?: string, pageSize?: string) {
        const searchParams = new HttpParams()
            .set('page', pageNumber)
            .set('pageSize', pageSize);
        this.http
            .get<Character[]>('https://anapioficeandfire.com/api/characters',
                { params: searchParams })
            .subscribe(characters => {
                this.characterService.setCharacters(characters);
            })
    }

    getCharacter(id: string) {
        this.http
            .get<Character>('https://anapioficeandfire.com/api/characters/'+id)
            .subscribe(character => {
                this.characterService.setCharacter(character);
            })
    }

    getHouses(pageNumber?: string, pageSize?: string) {
        const searchParams = new HttpParams()
            .set('page', pageNumber)
            .set('pageSize', pageSize);
        this.http
            .get<House[]>('https://anapioficeandfire.com/api/houses',
                { params: searchParams })
            .subscribe(houses => {
                this.houseService.setHouses(houses);
            })
    }
}