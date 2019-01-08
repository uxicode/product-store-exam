import { Injectable } from '@angular/core';
import {StaticDatasourceService} from './static.datasource.service';
import {Product} from './product.model';

@Injectable()
export class ProductRepositoryService {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSource:StaticDatasourceService) {
    dataSource.getProducts().subscribe(data=>{
      this.products=data;
      //filter(처리할 현재 요소, 처리할 현재 요소의 인덱스,filter를 호출한 배열)
      this.categories=data.map(p=>p.category)
        //indexOf() 메서드는 배열에서 지정된 요소를 찾을 수있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
        //sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다.
        .filter( (c, index, array)=>array.indexOf(c)==index).sort();
    })
  }
  getProducts(category:string=null):Product[]{
    return this.products.filter(p=>category==null || category==p.category );
  }
  getProduct(id:number):Product{
    return this.products.find(p => p.id == id);
  }

  getCategories(): string[] {
    return this.categories;
  }
}
