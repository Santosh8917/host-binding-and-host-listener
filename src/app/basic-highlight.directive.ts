import { Directive,HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {


  @HostBinding('style.backgroundColor') color: string | undefined;
@HostListener('mouseenter') setMouseEnter(){
  this.color = 'yellow';
}
@HostListener('mouseleave') setMouseLeave(){
  this.color = 'red';
}


  constructor() {

   }

  ngOnInit(){
    this.color = 'red';
  }

}
