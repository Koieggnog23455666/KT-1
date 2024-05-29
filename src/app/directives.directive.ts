import { Directive, ElementRef, HostBinding, HostListener, inject } from '@angular/core';
 

@Directive({
  selector: '[appDirectives]'
})

export class DirectivesDirective {
  // @HostBinding('style.backgroundColor') bgColor
  constructor(private el:ElementRef) {
    // this.bgColor='red'
    // const _host:ElementRef=inject(ElementRef)
    
    el.nativeElement.style.backgroundColor='red'
    el.nativeElement.style.color='white'
    el.nativeElement.style.width='200px'
  }
  
   @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor=('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor=('red');
  }
  @HostListener('click') onClick() {
    this.el.nativeElement.style.backgroundColor=('black');
  }

}
