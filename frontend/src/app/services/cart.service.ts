import { Items } from './../interfaces/Items';
import { Cart } from '../interfaces/Cart';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart[] = []
  private Subject = new Subject();


  constructor() { }

  addToCart(item:Items): void{
    let indexofItemInCart = this.cart.findIndex( cart => cart.item.id === item.id)
    if (indexofItemInCart === -1){
      this.cart.push({item: item, amount: 1})
      this.Subject.next(this.cart)
      return
    }
    this.cart[indexofItemInCart].amount++
    this.Subject.next(this.cart)
  }

  removeFromCart(item:Items):void{
    let indexofItemInCart = this.cart.findIndex( cart => cart.item.id === item.id)
    this.cart[indexofItemInCart].amount--
    if (this.cart[indexofItemInCart].amount === 0){
      this.cart.splice(indexofItemInCart, 1);
    }
    this.Subject.next(this.cart)
  }

  fetchCart(){
    return this.cart
  }

  onChange(): Observable<any>{
    return this.Subject.asObservable();
  }

}
