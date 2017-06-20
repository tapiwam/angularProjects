import { Component, Output } from '@angular/core';
import { LogService } from '../log.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  
  constructor(private logService: LogService, 
              private accountService: AccountService){

                // Subscribe to event emitted
                this.accountService.statusUpdated.subscribe(
                  (status: string) => alert('New status: ' + status)
                )
              }

  onCreateAccount(accountName: string, accountStatus: string) {

    this.accountService.addAccount(accountName, accountStatus);
  }
}
