import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoged: boolean = false;
  isAdmin: boolean = false;

  constructor() { }

  login(user: string, password: string): boolean {
    if (user == 'admin' && password == 'admin') {
      this.isLoged = true;
      this.isAdmin = true;
    } else if (user == 'rypsk' && password == 'rypsk') {
      this.isLoged = true;
      this.isAdmin = false;
    }else{
      this.isLoged = false;
      this.isAdmin = false;
    }
    return this.isLoged;
  }

  logout(): boolean{
    this.isLoged = false;
    this.isAdmin = false;
    return this.isLoged;
  }

}
