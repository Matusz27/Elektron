import { Cart } from './../../interfaces/Cart';
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

  subscription: Subscription;
  cart_amount:number = 0

  constructor(private cartService:CartService) {
    this.subscription = this.cartService.onChange().subscribe((cart) => {
      this.cart_amount = cart.reduce((acc:number, item:Cart) => {
        return (acc + item.amount)}, 0)
      })
  }


  ngOnInit(): void {
  }

}
