import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtRoutingModule } from './art-routing.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ArtRoutingModule,
    BreadcrumbModule
  ]
})
export class ArtModule { }
