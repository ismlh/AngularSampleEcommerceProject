import { IproductCart } from './../../models/iproduct-cart';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CartsInLogalStorageService } from '../../Servixes/products/carts-in-logal-storage.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [JsonPipe, CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartProducts: IproductCart[] = [] as IproductCart[];

  taotal: number = 0;
  length: number = 0;

  constructor(private _cartProductsSer: CartsInLogalStorageService) {}

  ngOnInit(): void {
    let cartProductsinLocalStorage = this._cartProductsSer.getAllCarts();
    if (cartProductsinLocalStorage) {
      this.cartProducts = cartProductsinLocalStorage;
    }
    this.getTotal();
    this.length=this.cartProducts.length;
  }

  increaseCount(id: number) {
    let prd = this.cartProducts.find((p) => p.product.id == id);
    if (prd) {
      prd.count += 1;
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      this.getTotal();
      
    }
  }
  decreaseCount(id: number) {
    let prd = this.cartProducts.find((p) => p.product.id == id);
    if (prd && prd.count > 1) {
      prd.count -= 1;
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      this.getTotal();

    }
  }

  getTotal() {
    this.taotal = 0;
    if ('cart' in localStorage) {
      for (let cartPrd of this.cartProducts) {
        this.taotal += cartPrd.count * cartPrd.product.price;
      }
    }
  }

  deletePrdFromCart(id: number) {
    this.cartProducts = this.cartProducts.filter((p) => p.product.id != id);
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.getTotal();
    this.length=this.cartProducts.length;

  }

  clearShoppingCart() {
    localStorage.clear();
    this.cartProducts = [];
    this.getTotal();
    this.length=this.cartProducts.length;

  }
}
