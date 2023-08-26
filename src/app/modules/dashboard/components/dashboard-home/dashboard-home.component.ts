import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api/menuitem';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  breadcrumbItems!: MenuItem[];
  home!: MenuItem;
  translate: TranslateService;
  musicLabel: string = '';
  shopLabel: string = '';
  artLabel: string = '';
  homeLabel: string = '';
  dashboardLabel: string = '';
  redataLabel: string = '';
  param = {value: 'home'};
  users: User[] = [];

  constructor(private userService: UserService, private activatedRoute:ActivatedRoute, translate: TranslateService) { 
    this.translate = translate;
    
    this.activatedRoute.data.subscribe(data=>{
      this.breadcrumbItems = [{label:data.breadcrumbItems}];
      console.log(data)});
  }

  ngOnInit(): void {  
    this.home = {icon: 'pi pi-home', routerLink: '/home'};   
    this.translate.stream(['music', 'shop', 'art', 'home', 'dashboard', 'redata']).subscribe(words => {
      this.musicLabel = words['music'];
      this.shopLabel = words['shop'];
      this.artLabel = words['art'];
      this.homeLabel = words['home'];
      this.dashboardLabel = words['dashboard'];
      this.redataLabel = words['redata'];
    }); 
    console.log(this.homeLabel);
    this.getAllUsers();
  }

  getAllUsers(){ 
    this.userService.getAllUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

}
