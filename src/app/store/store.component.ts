import { Component, OnInit } from '@angular/core';
import {ProductRepositoryService} from '../model/product.repository.service';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public selectedCategory=null;
  public productsPerPage=4;
  public selectedPage=1;
  constructor(private repository:ProductRepositoryService) { }

  ngOnInit() {
  }

  get products(): Product[] {
    let pageIndex=(this.selectedPage-1)* this.productsPerPage
    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex+this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?:string){
    this.selectedCategory=newCategory;
  }

  changePage(newPage: number) {
    this.selectedPage=newPage;
  }

  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }
  // ngFor 지시문에는 제한이 있다. 이 지시문은 카운터를 사용하지 않고 배열이나 컬렉션에있는 객체에 대해서만 내용을 생성 할 수 있다.
  // 번호가 매겨진 페이지 탐색 버튼을 생성해야하기 때문에 다음과 같이 필요한 숫자가 포함 된 배열을 만들어야 된다.
  /*get pageNumbers():number[] {
    //fill() 메서드는 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채웁니다.
    //map( callback(처리할 현재 요소, 처리할 현재 요소의 인덱스,map()을 호출한 배열) )  return 배열의 각 요소에 대해 실행한 callback의 결과를 모은 새로운 배열.
    // console.log( Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage) )
    return Array( Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage) )
      .fill(0).map( (x, i) => {
        // console.log(x, i)
        return i + 1
      });
  }*/
  get pageCount(): number {
    return Math.ceil( this.repository.getProducts(this.selectedCategory).length / this.productsPerPage )
  }

}

