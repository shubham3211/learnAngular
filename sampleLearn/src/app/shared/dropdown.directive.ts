import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{
  constructor(){}
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') click(){
    this.isOpen = !this.isOpen;
  }
}