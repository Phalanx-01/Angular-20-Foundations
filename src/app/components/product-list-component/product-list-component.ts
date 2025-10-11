import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css'
})
export class ProductListComponent {
  products$: Observable<any[]>;

  constructor(private http: HttpClient) {
    this.products$ = this.http.get<any[]>('https://fakestoreapi.com/products');
  }

}
