import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { HandleError, HttpErrorHandler } from '../handle-error/handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  hostUrl: string = 'rypsk-rest.herokuapp.com'
  apiUrl: string = '/api/login/';
  isLoged: boolean = false;
  isAdmin: boolean = false;
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('LoginService')
   }

  // login(user: string, password: string): boolean {
  //   if (user == 'admin' && password == 'admin') {
  //     this.isLoged = true;
  //     this.isAdmin = true;
  //   } else if (user == 'rypsk' && password == 'rypsk') {
  //     this.isLoged = true;
  //     this.isAdmin = false;
  //   }else{
  //     this.isLoged = false;
  //     this.isAdmin = false;
  //   }
  //   return this.isLoged;
  // }

  login(user: string, password: string): Observable<User>{
    return this.http.get<User[]>(this.hostUrl+this.apiUrl+user)
      .pipe(
        catchError(this.handleError('login', []))
      );
  }

  logout(): boolean{
    this.isLoged = false;
    this.isAdmin = false;
    return this.isLoged;
  }

}
