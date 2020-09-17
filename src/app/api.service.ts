import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

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

    getBooks(pageNumber?: string, pageSize?: string) {

        const searchParams = new HttpParams()
            .set('page', pageNumber)
            .set('pageSize', pageSize);
        this.http
            .get<Book[]>('https://anapioficeandfire.com/api/books',
                { params: searchParams })
            .subscribe(books => {
                this.bookService.setBooks(books);
            });
    }
    getBooksFilter(urls: string[]) {
        var filtered = []
        this.http
            .get<Book[]>('https://anapioficeandfire.com/api/books')
            .subscribe(books => {
                for (let index = 0; index < urls.length; index++) {
                    var result = books.find(x => (this.getIdFromUrl(x.url) === this.getIdFromUrl(urls[index])))
                    filtered.push(result)
                }
                this.bookService.setBooks(filtered);
            });
    }

    getHousesFilter(urls: string[]) {
        var filtered = []
        this.http
            .get<House[]>('https://anapioficeandfire.com/api/houses')
            .subscribe(houses => {
                for (let index = 0; index < urls.length; index++) {
                    var result = houses.find(x => (this.getIdFromUrl(x.url) === this.getIdFromUrl(urls[index])))
                    filtered.push(result)
                    console.log(result)
                }
                this.houseService.setHouses(filtered);
            });
    }
    getCharacterFilter(urls: string[]) {
        var filtered = []
        this.http
            .get<Character[]>('https://anapioficeandfire.com/api/characters')
            .subscribe(characters => {
                for (let index = 0; index < urls.length; index++) {
                    var result = characters.find(x => { return (this.getIdFromUrl(x.url) === this.getIdFromUrl(urls[index])) })
                    filtered.push(result)
                }
                this.characterService.setCharacters(filtered);
            });
    }

    getIdFromUrl(url: string) {
        return url.substring(url.lastIndexOf('/') + 1);
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
            .get<Character>('https://anapioficeandfire.com/api/characters/' + id)
            .subscribe(character => {
                this.characterService.setCharacter(character);
                this.getBooksFilter(character.books)
                this.getHousesFilter(character.allegiances)
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