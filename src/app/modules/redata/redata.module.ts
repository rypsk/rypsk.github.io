import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedataRoutingModule } from './redata-routing.module';
import { RedataHomeComponent } from './components/redata-home/redata-home.component';


@NgModule({
  declarations: [
    RedataHomeComponent
  ],
  imports: [
    CommonModule,
    RedataRoutingModule
  ]
})
export class RedataModule { }
