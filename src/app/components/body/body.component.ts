import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  isLoged: boolean = false;
  isAdmin: boolean = false;
  breadcrumbItems: MenuItem[];
  home!: MenuItem;

  constructor(private loginService: LoginService) {
    this.isLoged = this.loginService.isLoged;
    this.isAdmin = this.loginService.isAdmin;
    this.breadcrumbItems = [];
   }

  ngOnInit(): void {
  //   this.items = [
  //     {label:'REData'}
  // ];
  this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

}
