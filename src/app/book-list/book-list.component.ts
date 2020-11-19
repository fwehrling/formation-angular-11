import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit, OnChanges {
  // tslint:disable-next-line: no-input-rename
  @Input('bookAttribute') book!: Book;
  // tslint:disable-next-line: no-input-rename
  @Input('customInput') msg!: string;
  @Output() deleteBook = new EventEmitter<number>();
  @Output() customMouseOver = new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {}

  onDeleteBook(id: number): void {
    this.deleteBook.emit(id);
  }

  onMouseOver(): void {
    this.customMouseOver.emit(
      'Je suis un nouvel évènement custom de mouse over'
    );
  }

  onShowDetailBook(id: number): void {
    this.router.navigate(['book', id]);
  }
}
