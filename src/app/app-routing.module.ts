import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingReceiptComponent } from './shopping-receipt/shopping-receipt.component';

const routes: Routes = [
  {path: '', component:ProductsComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'product-details/:id', component: ProductItemDetailComponent},
  {path: 'order-confirmed', component: ShoppingReceiptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
