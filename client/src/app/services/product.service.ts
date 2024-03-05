import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = "https://localhost:44335/api";

  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0OSIsImp0aSI6IjZmMzUyZGY0LTU0YzQtNGI5My1iYTM0LWYzNjA2Y2NlYWQzNiIsImVtYWlsIjoidGVzdDlAZ21haWwuY29tIiwidWlkIjoiNTE3MDhhYzYtODIzZC00YzIzLTk5MjgtYzJmZmYyOWY0NWUxIiwicm9sZSI6IlVzZXIiLCJleHAiOjE3MTE2OTkwODgsImlzcyI6Im15c3RvcmUiLCJhdWQiOiJteXN0b3JlIn0.kanT1DYolDDZOF6-Mnce2K99nlzCnXJUS3QH3r661q8";

  constructor(private http: HttpClient) { }
  getProducts(): Observable<IProduct[]> {
    const headers = new HttpHeaders ({
      "Authorization" : "bearer " + this.token
    });
    return this.http.get<IProduct[]>(this.baseUrl + '/products', {headers});
  }
}