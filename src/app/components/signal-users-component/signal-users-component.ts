import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-signal-users',
  imports: [],
  templateUrl: './signal-users-component.html',
  styleUrl: './signal-users-component.css'
})
export class SignalUsersComponent {
  users;

  constructor(private http: HttpClient) {
    this.users = toSignal(this.http.get<any[]>(`https://jsonplaceholder.typicode.com/users`).pipe(
      catchError(error => { return of([])})
    ), { initialValue: [] });
  }

}
