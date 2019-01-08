import { Component, OnInit } from '@angular/core';
import {ProductRepositoryService} from '../model/product.repository.service';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private repository:ProductRepositoryService) { }

  ngOnInit() {
  }

  get products(): Product[] {
    return this.repository.getProducts();
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

}
