import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtHomeComponent } from './components/art-home/art-home.component';

const routes: Routes = [{
  path: '',
  component: ArtHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtRoutingModule { }
