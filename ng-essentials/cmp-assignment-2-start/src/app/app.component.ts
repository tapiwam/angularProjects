import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rootItems: String[] = ['Apples', 'Bananas', 'Cherries'];

  onPostedItem(event) {
    console.log('Received new item from cart: ' + event);
    this.rootItems.push(event);

    console.log('Now data array: ' + this.rootItems);
  }
}
