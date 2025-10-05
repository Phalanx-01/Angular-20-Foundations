import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './message-component.html',
  styleUrl: './message-component.css'
})
export class MessageComponent {

  message$:Observable<string> = of('Welcome to RxJS!');

}
