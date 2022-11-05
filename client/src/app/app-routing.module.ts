import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingReceiptComponent } from './components/shopping-receipt/shopping-receipt.component';

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
