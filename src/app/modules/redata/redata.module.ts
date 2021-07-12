import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedataRoutingModule } from './redata-routing.module';
import { RedataHomeComponent } from './components/redata-home/redata-home.component';
import { DividerModule } from 'primeng/divider';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';



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
    TableModule
  ]
})
export class RedataModule { }
