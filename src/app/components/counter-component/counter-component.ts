import { Component, signal, computed, effect } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter-component.html',
  styleUrl: './counter-component.css'
})
export class CounterComponent {
  counter = signal(0);
  counter2 = signal(2);
  total = computed(() => this.counter()*this.counter2());
  msg = signal('Hello');
  /* countyList = toSignal(
    this.http.get('/api/countries'),
    {initialValue: []}
  ); */

  constructor() {
    effect(()=> console.log('Message changed:',this.msg()));
  }
  

  increment(){
    this.counter.update(v => v+1);
    this.msg.set('Hello, Angular');
  }

  decrement(){
    this.counter.update(v => v-1);
  }

  delete(){
    this.counter.set(0);
  }

}
