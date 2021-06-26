import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LoginService } from 'src/app/services/login/login.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [MessageService]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];
  isLoged: boolean = false;
  showDialog: boolean = false;
  user: string = '';
  password: string = ' ';

  constructor(private loginService: LoginService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.fillMenuItems();
  }

  fillMenuItems() {
    this.items = [
      {
        label: 'RYPSK.com',
        icon: 'pi pi-spin pi-spinner',
        routerLink: ['home'] 
      },
      {
        label: 'SHOP',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: ['shop'] 
      },
      {
        label: 'ART',
        icon: 'pi pi-fw pi-palette',
      },
      {
        label: 'REData',
        icon: 'pi pi-fw pi-share-alt',
        routerLink: ['redata'] 
      },
      {
        label: 'MUSIC',
        icon: 'pi pi-fw pi-sliders-v'
      },
      {
        label: 'DASHBOARD',
        icon: 'pi pi-fw pi-sitemap'
      }
    ];
  }

  displayDialog() {
    this.showDialog = true;
  }

  login() {
    this.isLoged = this.loginService.login(this.user, this.password);
    this.showDialog = false;
    if (!this.isLoged){
      this.showError('ERROR: User/password not found!');
    }
  }

  logout() {
    this.isLoged = this.loginService.logout();    
  }

  showError(message: string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }

}
