import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {OrderRepositoryService} from '../model/order.repository.service';
import {OrderService} from '../model/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styles:[`
    input.ng-dirty.ng-invalid { border: 2px solid #ff0000 }
    input.ng-dirty.ng-valid { border: 2px solid #6bc502 }
  `]
})
export class CheckoutComponent implements OnInit {
  orderSent:boolean=false;
  submitted:boolean=false;

  constructor(public repository:OrderRepositoryService, public order:OrderService) { }

  ngOnInit() {
  }

  submitOrder(form:NgForm){
    this.submitted=true;
    if (form.valid) {
      this.repository.saveOrder(this.order).subscribe(order=>{
        this.order.clear();
        this.orderSent=true;
        this.submitted=false;
      })
    }
  }

}
