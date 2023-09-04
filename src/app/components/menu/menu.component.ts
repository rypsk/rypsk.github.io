import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { LoginService } from 'src/app/services/login/login.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import * as bcrypt from 'bcryptjs';
import { FormGroup } from '@angular/forms';
import { SignResponse } from 'src/app/models/signResponse';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [MessageService]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];
  displayDialog: boolean = false;
  translate!: TranslateService;
  musicLabel: string = '';
  foodLabel: string = '';
  shopLabel: string = '';
  artLabel: string = '';
  homeLabel: string = '';
  dashboardLabel: string = '';
  redataLabel: string = '';



  constructor(translate: TranslateService, private loginService: LoginService, private messageService: MessageService, private router: Router, private http: HttpClient) {
    this.translate = translate;
  }

  ngOnInit(): void {
    this.translate.stream(['music', 'shop', 'art', 'home', 'dashboard', 'redata', 'food']).subscribe(words => {
      this.musicLabel = words['music'];
      this.shopLabel = words['shop'];
      this.artLabel = words['art'];
      this.homeLabel = words['home'];
      this.dashboardLabel = words['dashboard'];
      this.redataLabel = words['redata'];
      this.foodLabel = words['food'];
      this.fillMenuItems();
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
        label: this.foodLabel,
        icon: 'pi pi-fw pi-chart-pie',
        routerLink: ['food']
      },
      {
        label: this.dashboardLabel,
        icon: 'pi pi-fw pi-sitemap',
        routerLink: ['dashboard']
      }
    ];
  }

  showDialog() {
    this.displayDialog = true;
  }

  onSignInFormSubmit(signInForm: FormGroup) {
    console.log('onSignInFormSubmit: ' + signInForm.value.username + '@' + signInForm.value.password);
    this.signIn(signInForm.value.username, signInForm.value.password)
  }

  signIn(username: string, password: string) {
    console.log('signIn: ' + username + '@' + password);    
    this.loginService.signIn(username, password).subscribe((data: any) => {
      let signResponse: SignResponse = data;
      console.log(signResponse.username + ' signed');
      if (signResponse == null) {
        this.showMessage('error', 'Error', 'No existe usuario con el nombre y password indicados.');
      }
      if (!signResponse.isEnabled) {
        this.showMessage('error', 'Error', 'Email no verificado. Por favor revise su bandeja de entrada.');
      } else {
        this.loginService.setUserLogged(signResponse);
      }
    });
    this.displayDialog = false;
  }

  onSignUpFormSubmit(signUpForm: FormGroup) {
    console.log('onSignUpFormSubmit: ' + signUpForm.value.username + '@' + signUpForm.value.password + '-' + signUpForm.value.email);
    if(signUpForm.value.password == signUpForm.value.passwordConfirm){
      this.signUp(signUpForm.value.username, signUpForm.value.email, this.encode(signUpForm.value.password))
    }else{
      this.showMessage('error', 'Error', 'Los passwords no son iguales');
    }    
  }

  signUp(username: string, email: string, password: string) {
    console.log('signUp() method with');
    this.loginService.signUp(username, email, password, true).subscribe((data: any) => {
      this.displayDialog = false;
      let signResponse: SignResponse = data;
      console.log(signResponse.username + ' registered');
      if (signResponse != null) {
        this.showMessage('info', 'Info', 'Se ha enviado un email a ' + signResponse.email + ', por favor revise su bandeja de entrada y active su cuenta.')
      }else{
        this.showMessage('error', 'Error', 'Ha habido un error al hacer el registro.');
      }
    });        
  }

  isLogged() {
    return this.loginService.isLogged;
  }

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/home');
  }

  showMessage(type: string, summary: string, message: string) {
    this.messageService.add({ severity: type, summary: summary, detail: message });
  }

  getUsername() {
    return this.loginService.username;
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  test1() {

    this.loginService.users().subscribe((data: any) => {
      console.log(data);
    });        

  }

  test2() {

    this.loginService.dashboardsUsers().subscribe((data: any) => {
      console.log(data);
    });        

  }

  encode(value: string): string {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(value, salt);
    return hash;
  }

}
