import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../interfaces/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit, DoCheck, OnDestroy {
  books!: Observable<Book[]>;
  // subscrption: Subscription = new Subscription();

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    // this.books = this.bookService.getBooks();
    this.books = this.activatedRoute.data.pipe(map((data) => data.books));

    // this.subscrption.add(this.bookService.getBooks().subscribe((data) => this.books = data));
  }

  onDeleteBook(id: number): void {
    this.bookService.deleteBook(id);
    // this.getBooks();
  }

  onMouseOver(msg: string): void {
    console.log(msg);
  }

  ngDoCheck(): void {
    // if (this.books.length < 2) {
    //   console.log('il ne reste plus que 2 livres');
    // }
  }

  ngOnDestroy(): void {
    // this.subscrption.unsubscribe()
  }
}
