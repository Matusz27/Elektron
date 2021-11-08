import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

import { Cart } from '../../interfaces/Cart';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  cart:Cart[] = []
  subscription: Subscription;

  constructor(private cartService:CartService) { 
      this.subscription = this.cartService.onChange().subscribe(cart => (
      this.cart = cart))
  }

  ngOnInit(): void {
    this.cart = this.cartService.fetchCart()
  }

}
