import { Injectable } from '@angular/core';
import { Category } from  './category.model'

@Injectable({
  providedIn: 'root'
})
export class CategoryMenuService {

  private categories: Category[] = [
    new Category (
      'Category Name 1'
    ),
    new Category (
      'Category Name 2'
    ),
    new Category (
      'Category Name 3'
    )
  ]


  constructor() { }

  

  getCategories()  {
    return this.categories.slice();
  }
}
