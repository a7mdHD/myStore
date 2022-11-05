import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css']
})
export class ShoppingFormComponent implements OnInit {
  name: string = '';
  address: string = '';
  cardNumber: number | null = null;
  @Output() userName: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  submitForm(): void {
    this.userName.emit(this.name);
    // console.log(this.name);
  }
}