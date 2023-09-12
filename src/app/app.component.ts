import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  loginService: LoginService;

  constructor(translate: TranslateService, private router: Router, loginService: LoginService) {
    this.loginService = loginService;
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');
    translate.use('es');
  }

  ngOnInit(): void {
    let item = localStorage.getItem("isLogged");
    console.log('item: ' + item);
    let itemValue = this.loginService.decryptFromAes(item);
    console.log('itemValue: ' + itemValue);
    if(itemValue == "true"){
      this.loginService.setUserLoggedFromLocalStorage();
    }
  }
}
