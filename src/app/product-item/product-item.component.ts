import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../models/Product';
import { IProductOrder } from '../models/productOrder';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct;
  quantity: number;
  // @Output() productToAddIntoCart: EventEmitter<IProduct> = new EventEmitter();
  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''
    },
    this.quantity = 1;
   }

  ngOnInit(): void {
  }

  //addToCart expect product of IProductOrder instead of IProduct
  addToCart(): void {
    this.cartService.addToCart({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      url: this.product.url,
      quantity: this.quantity
    });
    // console.log(this.quantity);
  }
}
