import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <h1>Dashboard</h1>
    <p>Status: {{ status }}</p>
    <br/>

    <div>
      <label for="">Complete Message</label>
      <input type="text" [(ngModel)]="loadState"/>
    </div>

    <button (click)="onButtonClick()">Finish</button>
  `
})
export class DashboardComponent {
  loadState: String = 'finished';
  status: String = 'loading';

  onButtonClick() {
    this.status = this.loadState;
  }
}
