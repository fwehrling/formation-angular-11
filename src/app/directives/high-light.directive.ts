import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective {
  @Input('appHighLight') highlightColor!: string;

  // tslint:disable-next-line: variable-name
  private _defaultColor = 'red';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'color', this._defaultColor);
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: Event): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.highlightColor);
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: Event): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', this._defaultColor);
  }
}
