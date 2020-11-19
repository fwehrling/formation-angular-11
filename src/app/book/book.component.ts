import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Book } from '../interfaces/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  valeurInitiale = 'valeur par défaut';
  isSelected = false;
  isHidden = false;
  isDisabled = true;
  foreground = 'red';
  fontSize = 18;

  stateColor = false;
  stateWidth = false;
  stateHeight = false;

  books: Book[] = [];

  bookAsJson!: string;

  asyncTest!: Promise<string>;

  constructor(
    private _title: Title,
    private _meta: Meta,
    private _bookService: BookService,
    private _jsonPipe: JsonPipe
  ) {}

  ngOnInit(): void {
    this._title.setTitle("Le détail d'un livre");
    this._meta.addTag({ name: 'author', content: 'Franck' });
    this.books = this._bookService.getBooks();
    this.bookAsJson = this._jsonPipe.transform(this.books);

    this.asyncTest = new Promise((resolve) =>
      setTimeout(() => resolve('Je suis une Promise'), 3000)
    );
  }

  onClickButton(): void {
    this.valeurInitiale = 'Une autre valeur après le clic';
  }

  onClickDiv(): void {
    alert('Je suis la DIV');
  }

  onClickDivButton(event: Event): void {
    event.stopPropagation();
    alert('Je suis le bouton dans la DIV');
  }

  onKeydownSpace(): void {
    console.log('TOUCHE ESPACE!');
  }

  onClickMyInput(value: string): void {
    this.valeurInitiale = value;
  }

  onMoins(): void {
    this.fontSize = 18;
  }

  onPlus(): void {
    this.fontSize = 26;
  }

  onClickColor(): void {
    this.stateColor = !this.stateColor;
  }

  onClickWidth(): void {
    this.stateWidth = !this.stateWidth;
  }

  onClickHeight(): void {
    this.stateHeight = !this.stateHeight;
  }

  voir(i: number): void {
    alert(`Indice ${i}`);
  }

  deleteBook(i: number): void {
    this.books.splice(i, 1);
  }
}
