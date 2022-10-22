import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingReceiptComponent } from './shopping-receipt/shopping-receipt.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ShoppingFormComponent } from './shopping-cart/shopping-form/shopping-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    ProductItemComponent,
    ShoppingCartComponent,
    ShoppingReceiptComponent,
    ProductItemDetailComponent,
    ShoppingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
