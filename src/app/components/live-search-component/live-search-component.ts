import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, Observable, switchMap } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

@Component({
  selector: 'app-live-search',
  imports: [CommonModule],
  templateUrl: './live-search-component.html',
  styleUrl: './live-search-component.css'
})
export class LiveSearchComponent implements AfterViewInit{
@ViewChild('searchBox') searchBox!:ElementRef;
users$!:Observable<any[]>;
socket$ = webSocket({
  url: `wss://echo.websocket.org`,
deserializer: (msg) => msg.data});

constructor(private http: HttpClient) {}

ngOnInit(): void {
  this.initWebSocket();
}

ngAfterViewInit(){
  this.users$ = fromEvent<Event>(this.searchBox.nativeElement, 'input').pipe(
    map((event:Event) => (event.target as HTMLInputElement).value),
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(query => 
      this.http.get<any[]>(`https://jsonplaceholder.typicode.com/users?q=${query}`)
    )
  );
 }

 private initWebSocket(): void {
  this.socket$.subscribe(
  msg => console.log('Received', msg), 
  err => console.error(err),
  ()=>console.log('Complete')
  );
  this.socket$.next('Hello from Angular');
 }

}
