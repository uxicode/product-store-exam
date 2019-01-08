import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductRepositoryService} from './product.repository.service';
import {StaticDatasourceService} from './static.datasource.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[ProductRepositoryService, StaticDatasourceService]
})
export class ModelModule { }
