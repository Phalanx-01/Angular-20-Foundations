import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { catchError, filter, interval, map, Observable, of, throwError } from 'rxjs';

@Component({
  selector: 'app-even-timer',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './even-timer-component.html',
  styleUrl: './even-timer-component.css'
})
export class EvenTimerComponent {

  even$: Observable<number>;
  api$: Observable<any>;

  constructor(){
    this.even$ = interval(1000).pipe(
      filter(value => value % 2 === 0),
      map(value => value * 2)
    );
    this.api$ = throwError(() => new Error('Oops!')).pipe(
    catchError(error => of('Fallback value'))
  );
  }

}
