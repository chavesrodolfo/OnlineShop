import { Component, Input } from '@angular/core';
import { ShoppingCart } from '@app/shared/models';

@Component({
  selector: 'lw-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.scss']
})
export class ShoppingCartSummaryComponent {

  @Input('shopping-cart')
  cart: ShoppingCart;

  constructor() { }


}
