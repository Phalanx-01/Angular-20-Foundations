import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<string[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addItem(item:string){
    const items = [...this.cartItemsSubject.value, item];
    this.cartItemsSubject.next(items);
  }

  removeItem(item:string){
    const items = this.cartItemsSubject.value.filter(i => i!== item);
    this.cartItemsSubject.next(items);
  }
  
}
