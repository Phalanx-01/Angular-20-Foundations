import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { CartService } from '../../services/cart-service';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent {
  itemName: string ='';
  cartItems$;
  constructor(public auth: AuthService, public cart: CartService){
    this.cartItems$ = this.cart.cartItems$;
  }

    login() {
      this.auth.login('Luke Skywalker');
    }

    addItem(){
      if (this.itemName.trim()) {
        this.cart.addItem(this.itemName);
        this.itemName='';
      }
    }

    removeItem(item:string){
      this.cart.removeItem(item);
    }

}
