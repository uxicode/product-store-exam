import { Injectable } from '@angular/core';
import {StaticDatasourceService} from './static.datasource.service';
import {Product} from './product.model';
import {RestDatasourceService} from './rest.datasource.service';

@Injectable()
export class ProductRepositoryService {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSource:RestDatasourceService) {
    dataSource.getProducts().subscribe(data=>{
      this.products=data;
      //filter( callback( 처리할 현재 요소, 처리할 현재 요소의 인덱스,filter를 호출한 배열) )
      this.categories=data.map(p=>p.category)
        //indexOf() 메서드는 배열에서 지정된 요소를 찾을 수있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
        //sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다.
        .filter( (c, index, array)=>array.indexOf(c)==index).sort();
    })
  }
  getProducts(category:string=null):Product[]{
    return this.products.filter(p=> {
      // console.log( 'category='+category )
      return category == null || category == p.category
    });
  }
  getProduct(id:number):Product{
    return this.products.find(p => p.id == id);
  }

  getCategories(): string[] {
    return this.categories;
  }

  saveProduct(product: Product) {
    if (product.id == null || product.id == 0) {
      this.dataSource.saveProduct(product).subscribe(p => this.products.push(p));
    }else{
      this.dataSource.updateProduct(product).subscribe(p => {
        this.products.splice(this.products.findIndex(p => p.id == product.id), 1, product);
      });
    }
  }

  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe(p => {
      this.products.splice(this.products.findIndex(p => p.id == id), 1);
    }) ;
  }

}
