import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'disp-name',
  templateUrl: './disp-name.component.html',
  styleUrls: ['./disp-name.component.css']
})
export class DispNameComponent implements OnInit {
  userName = "";
  resetButtom = true;

  constructor() { }

  ngOnInit() {
  }

  setResetButton(event: Event){
    if(this.userName.length == 0){
      this.resetButtom = true;
    }else{
      this.resetButtom = false;
    }
  }

  removeUserName(){
    this.userName = "";
  }
}
