import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodHomeComponent } from './components/food-home/food-home.component';

const routes: Routes = [{
  path: '',
  component: FoodHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
