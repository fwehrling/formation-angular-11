import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeTexte',
})
export class ChangeTextePipe implements PipeTransform {
  transform(value: string): string {
    const texte: string[] = [];

    [...value].forEach((e, i) => {
      if (i % 2 === 0) {
        texte.push(e.toLowerCase());
      } else {
        texte.push(e.toUpperCase());
      }
    });

    return texte.join('');
  }
}
