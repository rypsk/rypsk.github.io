import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BreadcrumbModule
  ]
})
export class DashboardModule { }
