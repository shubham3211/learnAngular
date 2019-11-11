import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [
    `
      h3{
        color: red
      }
    `
  ]
})
export class WarningAlertComponent implements OnInit{
  constructor() {}

  ngOnInit(){

  }
}