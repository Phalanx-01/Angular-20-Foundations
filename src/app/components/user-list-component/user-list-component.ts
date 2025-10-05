import { AsyncPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Observable } from "rxjs";


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './user-list-component.html',
  styleUrl: './user-list-component.css'
})
export class UserListComponent {
  users$: Observable<any[]>;

  constructor(private http: HttpClient) {
    this.users$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }
}
