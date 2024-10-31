import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../Servixes/products/products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from '../spinner/spinner.component';
import { CategoryComponent } from '../category/category.component';
import { IproductCart } from '../../models/iproduct-cart';
import { Router } from '@angular/router';
import { CartsInLogalStorageService } from '../../Servixes/products/carts-in-logal-storage.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, SpinnerComponent, CategoryComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products!: Product[];
  reciviedCatName: string = 'all';
  cartProducts: IproductCart[]=[] as IproductCart[];
  amount: number = 1;
  selectedProduct: any;

  constructor(private prdService: ProductsService, private _router: Router, private cartProductsSer: CartsInLogalStorageService) {
    this.cartProducts = this.cartProductsSer.getAllCarts();
  }
  ngOnInit(): void {
    this.prdService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  catNameData(catName: string) {
    this.reciviedCatName = catName;
  }

  addToCartButton(prd: Product) {
    this.selectedProduct = prd;
  }

  addToCart(product: Product) {
    if ('cart' in localStorage) {
      let productExist = this.cartProducts?.find(
        (prd) => prd.product.id == product.id
      );
      if (productExist) {
        alert('Already added in Cart');
      } else {
        let productCart: IproductCart = {
          count: this.amount,
          product: product,
        };
        this.cartProducts?.push(productCart);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
        alert("Added Succeffully");
      }
    } else {
      let productCart: IproductCart = {
        count: this.amount,
        product: product,
      };
      this.cartProducts.push(productCart);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      alert("Added Succeffully");
    }
    this.selectedProduct = null;
    this.amount = 1;
  }
  goToProductDetails(id: number) {
    this._router.navigate(["Product_Detail", id]);
  }
}
