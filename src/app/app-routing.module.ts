import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', data: {breadcrumbItems:'Home'}, component: HomeComponent },
  { path: 'shop', data: {breadcrumbItems:'Shop'}, loadChildren: () => import('./modules/shop/shop.module').then(m => m.ShopModule)},
  { path: 'art', data: {breadcrumbItems:'Art'}, loadChildren: () => import('./modules/art/art.module').then(m => m.ArtModule)},
  { path: 'redata', data: {breadcrumbItems:'REData'}, loadChildren: () => import('./modules/redata/redata.module').then(m => m.RedataModule)},
  { path: 'music', data: {breadcrumbItems:'Music'}, loadChildren: () => import('./modules/music/music.module').then(m => m.MusicModule)},  
  { path: 'dashboard', data: {breadcrumbItems:'Dashboard'}, loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
