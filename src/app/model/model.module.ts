import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductRepositoryService} from './product.repository.service';
import {StaticDatasourceService} from './static.datasource.service';
import {CartService} from './cart.service';
import {OrderService} from './order.service';
import {OrderRepositoryService} from './order.repository.service';
import {HttpClientModule} from '@angular/common/http';
import {RestDatasourceService} from './rest.datasource.service';
import {AuthService} from './auth.service';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule
  ],
  declarations: [],
  providers:[ProductRepositoryService,  CartService,
    OrderService, OrderRepositoryService,
    {provide: StaticDatasourceService , useClass:RestDatasourceService},
  RestDatasourceService, AuthService]
})
export class ModelModule { }
