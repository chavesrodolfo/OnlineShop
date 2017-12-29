import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AuthGuard } from '../../shared/services';

export const routes: Routes = [
  { path: '', redirectTo: 'products' },
  { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard] },
  { path: 'products',  component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent} ,
  { path: 'my-orders',  component: MyOrdersComponent, canActivate: [AuthGuard] },
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] }
];

@NgModule({
  exports: [
      RouterModule
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class ShoppingRoutingModule { }
