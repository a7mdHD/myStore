import { Component, OnInit, Input } from '@angular/core';
import { IProductOrder } from '../../models/productOrder';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products: IProductOrder[] = [];
  totalPrice: number = 0;
  userName: string = '';
  
  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.products = this.cartService.getProducts();
    this.totalPrice = this.cartService.calculateTotalPrice();
  }

  changeQuantity(quantity: number, product: IProductOrder): void {
    this.cartService.updateQuantity(quantity, product.id);
    this.totalPrice = this.cartService.calculateTotalPrice();
  }

  addName(name: string): void {
    this.cartService.userName = name;
  }
} 