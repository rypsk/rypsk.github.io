import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LoginService } from 'src/app/services/login/login.service';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/models/user';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

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
  translate!: TranslateService;
  musicLabel: string = '';
  shopLabel: string = '';
  artLabel: string = '';
  homeLabel: string = '';
  dashboardLabel: string = '';
  redataLabel: string = '';

  constructor(translate: TranslateService, private loginService: LoginService, private messageService: MessageService, private router: Router) { 
    this.translate = translate;
  }

  ngOnInit(): void {
    this.translate.stream(['music','shop','art','home','dashboard','redata']).subscribe(words => {
      this.musicLabel = words['music'];
      this.shopLabel = words['shop'];
      this.artLabel = words['art'];
      this.homeLabel = words['home'];
      this.dashboardLabel = words['dashboard'];
      this.redataLabel = words['redata'];
      this.fillMenuItems();
      // this.getUsers();
    });
  }

  fillMenuItems() {    
    this.items = [
      {
        label: this.homeLabel,
        icon: 'pi pi-home',
        routerLink: ['home']
      },
      {
        label: this.shopLabel,
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: ['shop']
      },
      {
        label: this.artLabel,
        icon: 'pi pi-fw pi-palette',
        routerLink: ['art']
      },
      {
        label: this.redataLabel,
        icon: 'pi pi-fw pi-share-alt',
        routerLink: ['redata']
      },
      {
        label: this.musicLabel,
        icon: 'pi pi-fw pi-sliders-v',
        routerLink: ['music']
      },
      {
        label: this.dashboardLabel,
        icon: 'pi pi-fw pi-sitemap',
        routerLink: ['dashboard']
      }
    ];
  }

  forcedLogin(){
    this.isLoged = this.loginService.forcedLogin();
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
    this.router.navigateByUrl('/home');
  }

  showError(message: string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }

  getUsername(){
    return this.loginService.getUsernameLogged();
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

}
