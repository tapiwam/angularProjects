import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',      // Attribute
  // selector: '.app-servers',    // Class
  // selector: '.app-servers',    // Element
  
  // templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  template: `
    <app-server></app-server>
    <app-server></app-server>
    <app-server></app-server>
    <app-server></app-server>
  `
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
