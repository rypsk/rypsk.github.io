import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/userAuth/userAuth.guard';
import { AdminAuthGuard } from './guards/adminAuth/admin-auth.guard';

const routes: Routes = [
  { path: 'home', data: {breadcrumbItems:'Home'}, component: HomeComponent },
  // { path: 'home', data: {breadcrumbItems:'Home'}, loadChildren: () => import('./app.module').then(m => m.AppModule)},
  { path: 'shop', canActivate: [AuthGuard], data: {breadcrumbItems:'Shop'}, loadChildren: () => import('./modules/shop/shop.module').then(m => m.ShopModule)},
  { path: 'art', canActivate: [AuthGuard], data: {breadcrumbItems:'Art'}, loadChildren: () => import('./modules/art/art.module').then(m => m.ArtModule)},
  { path: 'redata', data: {breadcrumbItems:'REData'}, loadChildren: () => import('./modules/redata/redata.module').then(m => m.RedataModule)},
  { path: 'music', canActivate: [AuthGuard], data: {breadcrumbItems:'Music'}, loadChildren: () => import('./modules/music/music.module').then(m => m.MusicModule)},  
  { path: 'dashboard', canActivate: [AdminAuthGuard] , data: {breadcrumbItems:'Dashboard'}, loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
