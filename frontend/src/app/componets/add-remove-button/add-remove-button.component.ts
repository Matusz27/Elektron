import { Component, OnInit, Input } from '@angular/core';
import {Subscription} from 'rxjs';
import { CartService } from '../../services/cart.service';
import { Items } from '../../interfaces/Items';
import { Cart } from '../../interfaces/Cart';

@Component({
  selector: 'app-add-remove-button',
  templateUrl: './add-remove-button.component.html',
  styleUrls: ['./add-remove-button.component.scss']
})
export class AddRemoveButtonComponent implements OnInit {

  @Input() item!: Items;
  @Input() amount!: number;
  subscription: Subscription;
  cart:Cart[] = []

  constructor(private cartService:CartService) {
    this.subscription = this.cartService.onChange().subscribe(cart => (this.cart = cart))
  }
  
  addToCart(item:Items){
    return this.cartService.addToCart(item)
  }

  removeFromCart(item:Items){
    this.cartService.removeFromCart(item)
  }


  ngOnInit(): void {
  }

}
