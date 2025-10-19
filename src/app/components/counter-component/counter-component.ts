import { Component, signal, computed, effect } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../store/actions/counter-actions';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter-component.html',
  styleUrl: './counter-component.css'
})
export class CounterComponent {
  counter = signal(0);
  counter2 = signal(2);
  total = computed(() => this.counter()*this.counter2());
  /* countyList = toSignal(
    this.http.get('/api/countries'),
    {initialValue: []}
  ); */
  counter3$: Observable<number>;

  constructor(private store: Store<{counter:number}>) {
    effect(()=> console.log('Counter changed:',this.counter()));
    this.counter3$ = this.store.select('counter');
  }
  

  increment(){
    this.counter.update(v => v+1);
  }

  decrement(){
    this.counter.update(v => v-1);
  }

  delete(){
    this.counter.set(0);
  }

  inc() {this.store.dispatch(increment());}
  dec() {this.store.dispatch(decrement());}
  resetCounter() {this.store.dispatch(reset());}

}
