import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',      // Attribute
  // selector: '.app-servers',    // Class
  // selector: '.app-servers',    // Element
  
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  
  /*
  template: `
    <app-server></app-server>
    <app-server></app-server>
    <app-server></app-server>
    <app-server></app-server>
  `*/
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = "TestServer";
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2']

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }

  onUpdateServerName(event: any){
    console.log(event.target);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
