import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'disp-para',
  templateUrl: './disp-para.component.html',
  styleUrls: ['./disp-para.component.css']
})
export class DispParaComponent implements OnInit {
  logs = [];
  showPara = false;
  constructor() { }

  ngOnInit() {
  }

  insertLog(){
    this.showPara = !this.showPara;
    this.logs.push(this.logs.length+1);
  }
}
