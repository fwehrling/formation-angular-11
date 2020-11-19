import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { FormulaireCodeComponent } from './formulaire-code/formulaire-code.component';
import { FormulaireTemplateComponent } from './formulaire-template/formulaire-template.component';
import { BookResolver } from './services/book.resolver';
import { LoggedInGuard } from './services/logged-in.guard';

const routes: Routes = [
  { path: '', component: BooksComponent, resolve: { books: BookResolver } },
  { path: 'book', component: BookComponent, canActivate: [LoggedInGuard] },
  { path: 'book/:id', component: BookDetailComponent },
  { path: 'formulaire-template', component: FormulaireTemplateComponent },
  { path: 'formulaire-code', component: FormulaireCodeComponent },
  {
    path: 'library',
    loadChildren: () =>
      import('./library/library.module').then((m) => m.LibraryModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
