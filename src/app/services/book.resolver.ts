import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Book } from '../interfaces/book';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root',
})
export class BookResolver implements Resolve<Book[]> {
  constructor(private bookService: BookService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Book[]> {
    const books = this.bookService.getBooks();
    return of(books);
  }
}
