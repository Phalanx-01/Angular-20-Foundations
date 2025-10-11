import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-live-search',
  imports: [CommonModule],
  templateUrl: './live-search-component.html',
  styleUrl: './live-search-component.css'
})
export class LiveSearchComponent implements AfterViewInit{
@ViewChild('searchBox') searchBox!:ElementRef;
users$!:Observable<any[]>;

constructor(private http: HttpClient) {}

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
}
