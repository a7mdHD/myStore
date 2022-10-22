import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-shopping-receipt',
  templateUrl: './shopping-receipt.component.html',
  styleUrls: ['./shopping-receipt.component.css']
})
export class ShoppingReceiptComponent implements OnInit {
  totalPrice: number;
  userName: string = '';
  userAddress: string = '';
  userCardNumber: number = 0;
  constructor(private cartService: CartService) {
    this.totalPrice = 0;
   }

  ngOnInit(): void {
    this.totalPrice = this.cartService.calculateTotalPrice();
    this.userName = this.cartService.userName;
    this.userAddress = this.cartService.userAddress;
    this.userCardNumber = this.cartService.userCardNumber;
  }

}
