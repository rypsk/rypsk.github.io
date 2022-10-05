import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopHomeComponent } from './components/shop-home/shop-home.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';


@NgModule({
  declarations: [
    ShopHomeComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    BreadcrumbModule
  ]
})
export class ShopModule { }
