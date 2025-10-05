import { Component } from '@angular/core';
import { interval, merge, Observable } from 'rxjs';

@Component({
  selector: 'app-simple-timer',
  standalone: true,
  imports: [],
  templateUrl: './simple-timer-component.html',
  styleUrl: './simple-timer-component.css'
})
export class SimpleTimerComponent {

  count = 0;
  sum = 0;

  ngOnInit() {
    const timer$: Observable<number> = interval(1000);
    const secondTimer$: Observable<number> = interval(2000);
    const merged$ = merge(timer$, secondTimer$);

    timer$.subscribe(value => {this.count = value;});
    merged$.subscribe(val => {console.log(val), this.sum = val;});

  }

}
