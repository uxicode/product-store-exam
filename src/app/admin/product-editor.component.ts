import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product.model';
import {ProductRepositoryService} from '../model/product.repository.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-editor',
  templateUrl:'./productEditor.component.html' ,
  styles: []
})
export class ProductEditorComponent{

  editing: boolean = false;
  product: Product = new Product();
  constructor(private repository: ProductRepositoryService, private router: Router, activeRoute: ActivatedRoute) {
    this.editing = activeRoute.snapshot.params['mode'] == 'edit';
    if (this.editing) {
      Object.assign(this.product, repository.getProduct(activeRoute.snapshot.params['id']));
    }
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }

}
