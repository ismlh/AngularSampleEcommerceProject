import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../Servixes/products/products.service';
import { Product } from '../../models/product';
import { TruncatePipe } from '../../Pipes/truncate.pipe';
import { CategoryComponent } from "../category/category.component";

@Component({
  selector: 'app-products-opreation',
  standalone: true,
  imports: [CommonModule, FormsModule, TruncatePipe, CategoryComponent],
  templateUrl: './products-opreation.component.html',
  styleUrl: './products-opreation.component.css'
})
export class ProductsOpreationComponent implements OnInit {

  products:Product[]=[] as Product[];
  product:Product ={} as Product;
  formData:FormData=new FormData();
  selectedData!:string|ArrayBuffer|null;
  constructor(private _prdService:ProductsService){

  }
  ngOnInit(): void {
    this._prdService.getAllProducts().subscribe((res)=>{
      this.products=res;
    })
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader= new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
      this.selectedData=reader.result;
    }
    this.formData.append('image',file);
  }
  catNameData(catName: string) {
    this.product.category = catName;
  }

  addProduct(){
    this.formData.append('title',this.product.title)
    this.formData.append('description',this.product.description)
    this.formData.append('category',this.product.category)
    this.formData.append('price',this.product.price.toString())
    this._prdService.addProduct(this.product).subscribe((res)=>{
      alert("Added succeffuly")
      
    },(err)=>{
      console.log(err);
      
    })
  }
}
