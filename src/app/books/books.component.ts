import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from './book.model';
import { BookService } from './book.service';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BookService, ApiService]
})
export class BooksComponent implements OnInit, OnDestroy {
  books: Book[];
  subscription: Subscription;

  constructor(private bookService: BookService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.subscription = this.bookService.booksChanged
      .subscribe(
        (books: Book[]) => {
          this.books = books;
        }
      );
    this.books = this.bookService.getBooks();
    this.apiService.getBooks();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
