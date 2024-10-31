import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../../models/i-category';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  
  constructor(private http:HttpClient) {

   }
   getCategories():Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${environment.baseUrl}products/categories`);
   }
}
