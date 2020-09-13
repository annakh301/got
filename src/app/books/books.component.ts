import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from './book.model';
import { BookService } from './book.service';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BookService, ApiService]
})
export class BooksComponent implements OnInit, OnDestroy {
  books: Book[];
  subscription: Subscription;
  length: number = 12;
  pageSize: number = 10;
  pageEvent: PageEvent;
  pageIndex: number;
  pageNumber: number;

  constructor(private bookService: BookService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.subscription = this.bookService.booksChanged
      .subscribe(
        (books: Book[]) => {
          this.books = books;
        }
      );
    this.books = this.bookService.getBooks();
    this.apiService.getBooks("1", "10");
  }

  onPaginate(pageEvent: PageEvent) {
    this.pageSize = pageEvent.pageSize;
    this.pageNumber = +pageEvent.pageIndex + 1;
    this.apiService.getBooks(this.pageNumber.toString(), this.pageSize.toString());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
