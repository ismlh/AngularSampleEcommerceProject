import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../models/i-category';
import { CategoryService } from '../../Servixes/products/category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  categories!: ICategory[];
  selctedCatName:string="all";
  @Output() categorEvent = new EventEmitter<string>();
  constructor(private catService:CategoryService){

  }
  ngOnInit(): void {
    this.catService.getCategories().subscribe(categories => {
      this.categories = categories;
    })
  }
  catName()
  {
    this.categorEvent.emit(this.selctedCatName);
  }
  
}
