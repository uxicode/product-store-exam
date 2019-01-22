import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreComponent} from './store.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CounterDirective} from './counter.directive';
import {CartSummaryComponent} from './cart-summary.component';
import { CartDetailComponent } from './cart-detail.component';
import { CheckoutComponent } from './checkout.component';
import {RouterModule} from '@angular/router';
import {ModelModule} from '../model/model.module';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
  exports:[StoreComponent, CartDetailComponent, CheckoutComponent],
})
export class StoreModule { }

