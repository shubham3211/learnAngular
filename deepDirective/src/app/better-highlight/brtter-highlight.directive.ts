import { Directive, Renderer2, ElementRef, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBrtterHighlight]'
})
export class BrtterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input('appBrtterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroudColor: string  = this.defaultColor;
  constructor(private elRef: ElementRef, private renderer: Renderer2){}
  
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroudColor = this.defaultColor;
  }
  
  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroudColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'purple')
    this.backgroudColor = this.defaultColor
  }
}
