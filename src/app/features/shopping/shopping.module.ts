import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OffersComponent } from './components/offers/offers.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ProductsComponent } from './components/products/products.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingRoutingModule } from './shopping-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    SharedModule
  ],
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    OffersComponent
  ],
  providers: []
})
export class ShoppingModule { }
