import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodHomeComponent } from './components/food-home/food-home.component';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [
    FoodHomeComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
    PanelModule,
    DropdownModule,
    SelectButtonModule,
    ButtonModule,
    FormsModule,
    DividerModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class FoodModule { }
