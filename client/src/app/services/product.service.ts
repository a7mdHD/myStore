import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = "https://localhost:7012/api";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseUrl + '/products');
  }
}