import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreComponent} from './store.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CounterDirective} from './counter.directive';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule],
  declarations: [StoreComponent, CounterDirective],
  exports:[StoreComponent]
})
export class StoreModule { }
