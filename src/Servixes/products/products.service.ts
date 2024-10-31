import { Product } from './../../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.baseUrl}products`);
  }

  getProductsById(id:number): Observable<Product> {
    return this.http.get<Product>(`${environment.baseUrl}products/${id}`,)
  }
  addProduct(prd:Product):Observable<Product>{
    return this.http.post<Product>(`${environment.baseUrl}Products`,prd)
  }
}
