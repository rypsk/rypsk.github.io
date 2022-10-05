import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

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
