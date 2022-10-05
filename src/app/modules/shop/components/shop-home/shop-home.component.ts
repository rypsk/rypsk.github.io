import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.scss']
})
export class ShopHomeComponent implements OnInit {

  breadcrumbItems!: MenuItem[];
  home!: MenuItem;

  constructor(private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.data.subscribe(data=>{
      this.breadcrumbItems = [{label:data.breadcrumbItems}];
      console.log(data)});
  }

  ngOnInit(): void {  
    this.home = {icon: 'pi pi-home', routerLink: '/home'};    
    
  }

}
