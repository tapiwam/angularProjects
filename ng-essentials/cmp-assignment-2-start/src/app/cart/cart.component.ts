import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() items: String[];
  @Output() postItem: EventEmitter<String> = new EventEmitter<String>();
  newItem: String = '';

  constructor() {
  }

  ngOnInit() {
  }

  onUpdateInput() {
    console.log('Emitting new item: ' + this.newItem);
    this.postItem.emit(this.newItem);
  }

}
