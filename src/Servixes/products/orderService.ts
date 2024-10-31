import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from '../../models/IOrder';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class orderService {
  constructor(private _http: HttpClient) {}
  getCarts(): Observable<IOrder[]> {
    return this._http.get<IOrder[]>(`${environment.baseUrl}carts`);
  }
  getCartById(id: number): Observable<IOrder> {
    return this._http.get<IOrder>(`${environment.baseUrl}Carts/${id}`);
  }
  deleteOrder(id: number): Observable<IOrder> {
    return this._http.delete<IOrder>(`${environment.baseUrl}Carts/${id}`);
  }
  getInRange(startDate:Date,endDate:Date):Observable<IOrder[]>{
    return this._http.get<IOrder[]>(`${environment.baseUrl}Carts?startdate=${startDate}&endDate=${endDate}`);
  }
}
