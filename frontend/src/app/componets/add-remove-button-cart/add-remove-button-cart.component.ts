import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Items } from '../../interfaces/Items';

@Component({
  selector: 'app-add-remove-button-cart',
  templateUrl: './add-remove-button-cart.component.html',
  styleUrls: ['./add-remove-button-cart.component.scss']
})
export class AddRemoveButtonCartComponent implements OnInit {

  @Input() item!: Items;
  @Input() amount!: number;

  constructor(private cartService:CartService) {
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
