import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output('selectedComponent') fireSelectedComponent = new EventEmitter<string>();
  componentSelection(name){
    this.fireSelectedComponent.emit(name);
  }
}