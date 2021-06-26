import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedataHomeComponent } from './components/redata-home/redata-home.component';

const routes: Routes = [
  {
    path: '',
    component: RedataHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedataRoutingModule { }
