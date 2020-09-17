import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Book } from 'src/app/books/book.model';
import { BookService } from 'src/app/books/book.service';
import { House } from 'src/app/houses/house.model';
import { HouseService } from 'src/app/houses/house.service';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, OnDestroy {
  id: number;
  character: Character;
  books: Book[];
  povBooks: Book[];
  allegiances: House[];
  subscriptionChar: Subscription;
  subscriptionBooks: Subscription;
  subscriptionHouses: Subscription;

  constructor(private characterService: CharacterService,
    private bookService: BookService,
    private houseService: HouseService,
    private apiService: ApiService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.apiService.getCharacter(this.id.toString())
        }
      )
    this.subscriptionBooks = this.bookService.booksChanged
      .subscribe((books: Book[]) => {
        this.books = books;
      })

    this.subscriptionHouses = this.houseService.housesChanged
      .subscribe((houses: House[]) => {
        this.allegiances = houses;
      })

    this.subscriptionChar = this.characterService.characterChanged
      .subscribe((character: Character) => {
        this.character = character;

      })

  }
  ngOnDestroy(): void {
    this.subscriptionBooks.unsubscribe;
    this.subscriptionHouses.unsubscribe;
    this.subscriptionChar.unsubscribe;
  }

}
