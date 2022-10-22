import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { map } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product: IProduct;
  id: number;
  quantity: number;
  constructor(private route: ActivatedRoute, private productService: ProductService,
    private cartService: CartService) {
    this.id = this.route.snapshot.params['id'];
    this.product = {
      id: 0,
      name: '',
      url: '',
      price: 0,
      description: ''
    },
    this.quantity = 1;
   }

   // pipe to link operators(map && filter) together.
  ngOnInit(): void {
    this.productService.getProducts().pipe(map(p => p.filter(product => product.id == this.id)))
    .subscribe(res => this.product = res[0]);
  }

  addToCart(): void {
    this.cartService.addToCart({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      url: this.product.url,
      quantity: this.quantity
    });
  }
}