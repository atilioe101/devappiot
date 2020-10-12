import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirResalta]'
})
export class Resaltar {

  constructor(private elemento: ElementRef) {
    elemento.nativeElement.style.backgroundColor = '#dddddd';
    elemento.nativeElement.style.padding = '0.2rem';
  }

}