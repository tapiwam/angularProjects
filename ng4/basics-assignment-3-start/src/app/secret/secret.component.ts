import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {

  showButton = false;
  logs: any =[];
  counter: number = 0;

  constructor() { }

  ngOnInit() {
  }

  toggleButton(){
    this.counter++;
    this.showButton = !this.showButton;
    this.logs.push(this.counter);
  }

}
