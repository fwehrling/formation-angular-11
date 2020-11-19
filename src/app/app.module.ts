import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { JsonPipe } from '@angular/common';
import { FromNowPipe } from './pipes/from-now.pipe';
import { ChangeTextePipe } from './pipes/change-texte.pipe';
import { DoNothingDirective } from './directives/do-nothing.directive';
import { HighLightDirective } from './directives/high-light.directive';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ChildComponent } from './child/child.component';
import { FormulaireTemplateComponent } from './formulaire-template/formulaire-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulaireCodeComponent } from './formulaire-code/formulaire-code.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    FromNowPipe,
    ChangeTextePipe,
    DoNothingDirective,
    HighLightDirective,
    BooksComponent,
    BookListComponent,
    HeaderComponent,
    BookDetailComponent,
    ChildComponent,
    FormulaireTemplateComponent,
    FormulaireCodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [JsonPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
