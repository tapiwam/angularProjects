
import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class AccountService {

  constructor(private logService: LogService){}

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

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.logService.logStatus(status);
  }

  updateStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;

    
    this.logService.logStatus(newStatus);
  }
}