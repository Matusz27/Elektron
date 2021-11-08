import { Items } from './../../interfaces/Items';
import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../../interfaces/Cart';
import {Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss']
})
export class CartCardComponent implements OnInit {

@Input() itemincart!: Cart;
item!:Items
amount:number = 0;
subscription: Subscription;

  constructor(private cartService: CartService) { 
      this.subscription = cartService.onChange().subscribe(() => (
      this.amount = cartService.findItemInCart(this.item).amount))
  }

  ngOnInit(): void {
    this.item = this.itemincart.item;
    this.amount = this.cartService.findItemInCart(this.item).amount
  }

}
