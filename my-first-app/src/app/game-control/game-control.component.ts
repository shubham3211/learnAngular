import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  startGame(){
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber++);
    } ,1000);
  }

  pauseGame() {
    clearInterval(this.interval);
  }
}
