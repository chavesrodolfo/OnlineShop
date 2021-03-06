import { Component, Input } from '@angular/core';
import { Product } from '@app/shared/models';

import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'lw-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss']
})
export class ProductQuantityComponent {

  @Input('product')
  product: Product;
  @Input('shopping-cart')
  shoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart(): void {
    this.cartService.addToCart(this.product);
  }

  removeFromCart(): void {
    this.cartService.removeFromCart(this.product);
  }

}
