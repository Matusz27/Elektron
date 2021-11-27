import { Items } from './../interfaces/Items';
import { Cart } from '../interfaces/Cart';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart[] = []
  private Subject = new Subject();


  constructor() {
    let localcart = localStorage.getItem('cart')
    console.log(localcart)
    if (localcart){
      this.cart = JSON.parse(localcart)
    }
  }

  addToCart(item:Items): void{
    let indexofItemInCart = this.cart.findIndex( cart => cart.item.id === item.id)
    if (indexofItemInCart === -1){
      this.cart.push({item: item, amount: 1})
      this.Subject.next(this.cart)
      localStorage.setItem('cart', JSON.stringify(this.cart))
      return
    }
    this.cart[indexofItemInCart].amount++
    this.Subject.next(this.cart)
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }
  

  removeFromCart(item:Items):void{
    let indexofItemInCart = this.cart.findIndex( cart => cart.item.id === item.id)
    this.cart[indexofItemInCart].amount--
    if (this.cart[indexofItemInCart].amount === 0){
      this.cart.splice(indexofItemInCart, 1);
    }
    this.Subject.next(this.cart)
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }

  clearCart(){
    this.cart.length = 0
    this.Subject.next(this.cart)
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }

  findItemInCart(item:Items): Cart {
    return this.cart.filter(i => i.item.id === item.id)[0]
    }

  getCartAmount(): number{
    return this.cart.reduce((acc:number, item:Cart) => {
      return (acc + item.amount)}, 0)
  }

  getCartTotal(): number{
    return this.cart.reduce((acc:number, item:Cart) => {
      return (acc + (item.item.price * item.amount))}, 0)
  }

  fetchCart(){
    return this.cart
  }

  onChange(): Observable<any>{
    return this.Subject.asObservable();
  }

}
