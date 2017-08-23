import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <input type="text" (input)="onUserInput($event)" [value]="name"/>
    <p>Hello from user {{ name }}</p>
    <button (click)="onUserClick()">Reset</button>

    <hr>
    <input type="text" [(ngModel)]="name"/>
  `
})
export class UserComponent {

  @Input() name: String;

  onUserInput(event) {
    this.name = event.target.value;
  }

  onUserClick() {
    this.name = 'Tapiwa';
  }
}
