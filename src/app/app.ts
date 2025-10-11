import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter-component/counter-component';
import { SimpleTimerComponent } from './components/simple-timer-component/simple-timer-component';
import { MessageComponent } from './components/message-component/message-component';
import { EvenTimerComponent } from './components/even-timer-component/even-timer-component';
import { UserListComponent } from './components/user-list-component/user-list-component';
import { ProductListComponent } from './components/product-list-component/product-list-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, SimpleTimerComponent, MessageComponent, EvenTimerComponent, UserListComponent, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-20-foundations';
}
