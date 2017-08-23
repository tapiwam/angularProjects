import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <input type="text" (input)="onUserInput($event)" [value]="name"/>
    <!--<input type="text" [(ngModel)]="name"/>-->

    <p>Hello from user {{ name }}</p>
    <button (click)="onUserClick()">Reset</button>

    <app-user-detail></app-user-detail>
  `
})
export class UserComponent {

  @Input() name: String;
  @Output() nameChanged = new EventEmitter<String>();

  onUserInput(event) {
    // this.name = event.target.value;
    this.nameChanged.emit(event.target.value);
  }

  onUserClick() {
    // this.name = 'Tapiwa';
    this.nameChanged.emit('Tapiwa');
  }
}
