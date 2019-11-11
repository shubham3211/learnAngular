import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../loggin.service'
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private loggingSservice: LoggingService, 
              private accountsService: AccountsService) {
                this.accountsService.statusUpdated.subscribe(
                  (status: string) => alert('New Status '+ status)
                )
              }

  onCreateAccount(accountName: string, accountStatus: string) {

    // this.loggingSservice.logStatusChange(accountStatus)
    this.accountsService.addAccount(accountName, accountStatus);
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
  }
}
