import { Component, OnInit } from '@angular/core';
import {ProductRepositoryService} from '../model/product.repository.service';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product-table',
  templateUrl: './productTable.component.html',
  styles: []
})
export class ProductTableComponent {

  constructor(private repository: ProductRepositoryService) { }
  getProducts(): Product[] {
    return this.repository.getProducts();
  }
  deleteProduct(id: number) {
    this.repository.deleteProduct(id);
  }

}
