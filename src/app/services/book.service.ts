import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books: Book[] = [
    { id: 1, title: 'livre 1' },
    { id: 2, title: 'livre 2' },
    { id: 3, title: 'livre 3' },
    { id: 4, title: 'livre 4' },
  ];

  constructor(private http: HttpClient) {}

  getBooks(): Book[] {
    return this.books;
  }

  deleteBook(id: number): void {
    this.books = this.books.filter((book: Book) => book.id !== id);
  }
}
