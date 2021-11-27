import { Component, OnInit } from '@angular/core';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import {Subscription} from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  faShoppingCart = faShoppingCart;

  subscription!: Subscription;
  cart_amount:number = this.cartService.getCartAmount()

  constructor(private cartService:CartService) {
  }

  ngOnInit(): void {
      this.subscription = this.cartService.onChange().subscribe(() => {
    this.cart_amount = this.cartService.getCartAmount()
    })
  }

}
