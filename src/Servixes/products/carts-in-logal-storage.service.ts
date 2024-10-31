import { Injectable } from '@angular/core';
import { IproductCart } from '../../models/iproduct-cart';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartsInLogalStorageService {

  constructor() { }

  getAllCarts():IproductCart[]{
    const productsInCart=localStorage.getItem("cart");
    if(productsInCart){
      return JSON.parse(productsInCart) as IproductCart[];
    }
    return [];
  }
}
