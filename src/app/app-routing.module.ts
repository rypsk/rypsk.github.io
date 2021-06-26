import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shop', loadChildren: () => import('./modules/shop/shop.module').then(m => m.ShopModule)},
  { path: 'redata', loadChildren: () => import('./modules/redata/redata.module').then(m => m.RedataModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
