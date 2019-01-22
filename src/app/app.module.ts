import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {StoreModule} from './store/store.module';
import {ModelModule} from './model/model.module';
import {RouterModule} from '@angular/router';
import {StoreComponent} from './store/store.component';
import {CartDetailComponent} from './store/cart-detail.component';
import {CheckoutComponent} from './store/checkout.component';
import {StoreFirstGuard} from './store-first.guard';
import {AdminModule} from './admin/admin.module';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: 'store', component: StoreComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: 'cart', component: CartDetailComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: 'checkout', component: CheckoutComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canActivate: [StoreFirstGuard]
      },
      {path: '**', redirectTo: '/store'}
    ]),
    ReactiveFormsModule
  ],
  declarations: [AppComponent],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
