import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicRoutingModule } from './music-routing.module';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MusicRoutingModule,
    CardModule
  ]
})
export class MusicModule { }
