import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { map, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import * as CounterActions from '../actions/counter-actions';

@Injectable()
export class MyEffects {
   // Example effect that logs when increment action is dispatched
  logIncrement$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CounterActions.increment),
      tap(() => console.log('Counter incremented!')),
      map(() => ({ type: '[Counter] Increment Logged' }))
    );
  });

  // Example effect that logs when decrement action is dispatched
  logDecrement$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CounterActions.decrement),
      tap(() => console.log('Counter decremented!'))
    );
}, { dispatch: false }); // This effect doesn't dispatch a new action

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}
}