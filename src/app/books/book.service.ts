import { Book } from "./book.model";
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class BookService {

    booksChanged = new Subject<Book[]>();
    private books: Book[] = [];
    constructor() { }

    setBooks(books: Book[]) {
        this.books = books;
        this.booksChanged.next(this.books.slice());
    }

    getBooks() {
        return this.books.slice();
    }

    getBook(index: number): Book {
        return this.books[index];
    }

}

