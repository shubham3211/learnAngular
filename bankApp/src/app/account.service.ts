import { LoggingService } from './loggin.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AccountsService{
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingServive: LoggingService){}

  addAccount(name: string, status: string){
    this.accounts.push({'name': name, 'status': status})
    this.loggingServive.logStatusChange(status)
  }

  updateStatus(id: number, status: string){
    this.accounts[id].status = status;
    this.loggingServive.logStatusChange(status)
  }
}