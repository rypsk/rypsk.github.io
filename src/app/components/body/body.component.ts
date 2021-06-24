import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  isLoged: boolean = false;
  isAdmin: boolean = false;

  constructor(private loginService: LoginService) {
    this.isLoged = this.loginService.isLoged;
    this.isAdmin = this.loginService.isAdmin;
   }

  ngOnInit(): void {
    
  }

}
