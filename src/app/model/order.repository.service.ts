import { Injectable } from '@angular/core';
import {OrderService} from './order.service';
import {StaticDatasourceService} from './static.datasource.service';
import {Observable} from 'rxjs';
import {RestDatasourceService} from './rest.datasource.service';

@Injectable()
export class OrderRepositoryService {
  private orders: OrderService[] = [];
  private loaded: boolean = false;

  constructor(private dataSource:RestDatasourceService) { }
  loadOrders() {
    this.loaded = true;
    this.dataSource.getOrders().subscribe(orders => this.orders = orders);
  }
  getOrders(): OrderService[] {
    if (!this.loaded) {
      this.loadOrders();
    }
    return this.orders;
  }
  saveOrder(order:OrderService):Observable<OrderService>{
    // StaticDatasourceService에서 form([order])로 옵저버블화 시킴.
    return this.dataSource.saveOrder(order);
  }

  updateOrder(order: OrderService) {
    this.dataSource.updateOrder(order).subscribe(order => {
      this.orders.splice(this.orders.findIndex(o => o.id == order.id), 1, order);
    });
  }
  deleteOrder(id: number) {
    this.dataSource.deleteOrder(id).subscribe(order => {
      this.orders.splice(this.orders.findIndex(o => id == o.id));
    });
  }
}
