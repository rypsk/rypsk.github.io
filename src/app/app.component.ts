import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rypsk';
  constructor(translate: TranslateService, private router: Router) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');
    translate.use('es');
    this.router.navigateByUrl('/home');
  }
}
