import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {faTrash} from "@fortawesome/free-solid-svg-icons"
import { CartService } from '../../services/cart.service';

import { Cart } from '../../interfaces/Cart';

@Component({
  selector: 'app-cart-body',
  templateUrl: './cart-body.component.html',
  styleUrls: ['./cart-body.component.scss']
})
export class CartBodyComponent implements OnInit {


  subscription: Subscription;
  cart_amount:number = 0;
  cart_total:number = 0
  cart:Cart[] = []
  mobile: boolean = false;
  faTrash = faTrash;
  
  constructor(private cartService:CartService) {
    this.subscription = this.cartService.onChange().subscribe(cart => (
      this.cart = cart, 
      this.cart_amount = cartService.getCartAmount(),
      this.cart_total = cartService.getCartTotal()))
  }

  clearCart():void{
    this.cartService.clearCart();
  }


  ngOnInit(): void {
    this.cart = this.cartService.fetchCart();
    this.cart_amount = this.cartService.getCartAmount();
    this.cart_total = this.cartService.getCartTotal()
    if (window.screen.width < 720) {this.mobile = true;}
  }
}