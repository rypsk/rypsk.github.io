import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.scss']
})
export class ShopHomeComponent implements OnInit {

  breadcrumbItems!: MenuItem[];
  home!: MenuItem;

  constructor(private activatedRoute:ActivatedRoute, public router: Router) { 
    this.activatedRoute.data.subscribe(data=>{
      this.breadcrumbItems = [{label:data.breadcrumbItems}];
      console.log(data)});
  }

  ngOnInit(): void {  
    this.home = {icon: 'pi pi-home', routerLink: '/home'};    
    
  }

  navigateTo(){
    document.location.href = 'https://teespring.com/stores/rypsk';
  }

}
