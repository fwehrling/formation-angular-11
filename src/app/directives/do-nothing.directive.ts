import { Directive } from '@angular/core';

@Directive({
  selector: '[appDoNothing]',
})
export class DoNothingDirective {
  constructor() {
    console.log('Do nothing directive');
  }
}
