import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-simple-timer',
  standalone: true,
  imports: [],
  templateUrl: './simple-timer-component.html',
  styleUrl: './simple-timer-component.css'
})
export class SimpleTimerComponent {

  count = 0;

  ngOnInit() {
    const timer$: Observable<number> = interval(1000);

    timer$.subscribe(value => {this.count = value;});
  }

}
