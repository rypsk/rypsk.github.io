import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LoginService } from 'src/app/services/login/login.service';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/models/user';

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
    this.getUsers();
  }

  fillMenuItems() {
    this.items = [
      {
        label: 'RYPSK',
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
        icon: 'pi pi-fw pi-sliders-v',
        routerLink: ['music']
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
    console.log('Login() method with ' + this.user + ', ' + this.password);

    let u: any = null;
    this.loginService.login(this.user, this.password).subscribe(
      (data) => u = data
    )
    console.log(u);
    this.showDialog = false;
  }

  getUsers() {
    this.loginService.getUsers().subscribe((data: User[]) => {
      console.log(data);
    })
  }

  logout() {
    this.isLoged = this.loginService.logout();
  }

  showError(message: string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }

}
