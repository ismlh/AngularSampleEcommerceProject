import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../Servixes/products/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  constructor(
    private productsService: ProductsService,
    private activeRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      const id = params['id'];
      this.productsService.getProductsById(id).subscribe((prd) => {
        this.product = prd;
      });
    });
  }
}
