import { Injectable } from '@angular/core';
import { IProductOrder } from '../models/productOrder';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsInCart: IProductOrder[] = [];
  userName: string = '';
  userAddress: string = '';
  userCardNumber: number = 0;
  constructor() {
   }

  addToCart(product: IProductOrder): void {
    let productItem = this.productsInCart.find(p => p.id == product.id);
    if(productItem) {
      let newAddedQuantity = Number(productItem?.quantity) + Number(product.quantity);
      this.updateQuantity(newAddedQuantity, productItem.id);
      alert(product.name + ' added to cart!');
    } else
    {
      this.productsInCart.push(product);
      alert(product.name + ' added to cart!');
    }
  }

  getProducts() {
    return this.productsInCart;
  }

  calculateTotalPrice(): number {
    let totalPrice = 0;
    this.productsInCart.map(product => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
  }

  updateQuantity(newValue: number, id: number) {
    // console.log(newValue);
    this.productsInCart.map(product => {
      if(product.id == id) {
        product.quantity = newValue;
      }
    });
    
    if(newValue < 1) {
      let removedItemIndex = this.productsInCart.findIndex(p => p.id == id);
      this.productsInCart.splice(removedItemIndex, 1);
      alert('Removed from cart!');
    }
  }
}