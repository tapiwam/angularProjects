import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<{feature: string}>();

  constructor() { }

  ngOnInit() {
  }

  onSwitch(ftr: string){
    this.featureSelected.emit({
      feature: ftr
    });
  }

}
