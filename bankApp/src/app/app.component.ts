import { Component, OnInit } from '@angular/core';
import { AccountsService } from './account.service'
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  constructor(private accountsService:AccountsService){}

  accounts: {name: string, status: string}[];

  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }
}
