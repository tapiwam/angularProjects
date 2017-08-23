import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works!';
  cuisines;

  constructor(private af: AngularFire){
  }

  ngOnInit(){
    this.cuisines = this.af.database.list('/cusines');
  }


  
}
