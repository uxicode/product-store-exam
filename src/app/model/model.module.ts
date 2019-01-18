import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductRepositoryService} from './product.repository.service';
import {StaticDatasourceService} from './static.datasource.service';
import {CartService} from './cart.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[ProductRepositoryService, StaticDatasourceService, CartService]
})
export class ModelModule { }
