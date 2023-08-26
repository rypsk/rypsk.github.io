import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedataRoutingModule } from './redata-routing.module';
import { RedataHomeComponent } from './components/redata-home/redata-home.component';
import { DividerModule } from 'primeng/divider';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ChipModule } from 'primeng/chip';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';



@NgModule({
  declarations: [
    RedataHomeComponent
  ],
  imports: [
    CommonModule,
    RedataRoutingModule,
    DividerModule,
    CalendarModule,
    ButtonModule,
    FormsModule,
    TableModule,
    ChartModule,
    CardModule,
    BreadcrumbModule,
    ChipModule,
    TabViewModule,
    PanelModule
  ]
})
export class RedataModule { }
