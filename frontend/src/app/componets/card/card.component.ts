import { Component, OnInit, Input } from '@angular/core';
import {Subscription} from 'rxjs';
import { CartService } from '../../services/cart.service';
import { Items } from '../../interfaces/Items';
import { Cart } from '../../interfaces/Cart';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input() item!: Items;

  subscription: Subscription;
  cart:Cart[] = []

  
  itemInCart(item:Items): Cart{
    return this.cartService.findItemInCart(item)
  }
  
  constructor(private cartService:CartService) {
    this.subscription = this.cartService.onChange().subscribe(cart => (
      this.cart = cart
      ))
  }

  addToCart(item:Items){
    this.cartService.addToCart(item)
  }

  ngOnInit(): void {
    this.cart = this.cartService.fetchCart()
  }

}
