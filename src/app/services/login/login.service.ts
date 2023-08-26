import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { HandleError, HttpErrorHandler } from '../http-error-handler/http-error-handler.service';
import { environment } from 'src/environments/environment';
import * as bcrypt from 'bcryptjs';
import { SignResponse } from 'src/app/models/signResponse';
import { SignInRequest } from 'src/app/models/signInRequest';
import { SignUpRequest } from 'src/app/models/signUpRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  rypskApiUrl: string = environment.rypskApiUrl;
  isLogged: boolean = false;
  isEnabled: boolean = false;
  isAdmin: boolean = false;
  username: string = '';
  email: string = '';
  token: string = '';
  authorities: string[] = [];
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('LoginService')
  }

  signIn(username: string, password: string): Observable<any> {
    let resource = '/auth/signin';
    const url = this.rypskApiUrl + resource;
    let signInRequest: SignInRequest = new SignInRequest(username,password);
    let payload = JSON.stringify(signInRequest);


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    // const httpOptions = {
    //   headers: new HttpParams({
    //     'Content-Type':  'application/json',
    //     Authorization: 'my-auth-token'
    //   })
    // };

    return this.http.post(url, payload, httpOptions)
      .pipe(
        catchError(this.handleError('signIn', null))
      );
  }

  signUp(username: string, email: string, password: string, front: boolean){
    let resource = '/auth/signup';
    const url = this.rypskApiUrl + resource;
    let signUpRequest: SignUpRequest = new SignUpRequest(username, email, password, front);
    let payload = JSON.stringify(signUpRequest);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(url, payload, httpOptions)
      .pipe(
        catchError(this.handleError('signUp', 'Error'))
      );
  }

  users(){
    console.log('token: ' + this.token);
    let resource = '/users';
    const url = this.rypskApiUrl + resource;
    const httpOptions = {
      headers: new HttpHeaders({
        'hello':'world',
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.token
      }),
      
    };
    return this.http.get(url, httpOptions)
      .pipe(
        catchError(this.handleError('signUp', 'Error'))
      );
  }

  dashboardsUsers(){
    console.log('token: ' + this.token);
    let resource = '/dashboard/users';
    const url = this.rypskApiUrl + resource;
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'world',
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.token
      }),
      
    };
    return this.http.get(url, httpOptions)
      .pipe(
        catchError(this.handleError('signUp', 'Error'))
      );
  }

  logout(): boolean {
    this.isLogged = false;
    this.isEnabled = false;
    this.email = '';
    this.token = '';
    this.authorities = [];
    this.username = '';
    this.isAdmin = false;
    return this.isLogged;
  }

  setUserLogged(signResponse: SignResponse) {
    this.isLogged = true;
    this.isEnabled = signResponse.isEnabled;
    this.email = signResponse.email;
    this.token = signResponse.token;
    this.authorities = signResponse.authorities;
    this.username = signResponse.username;
    this.isAdmin = signResponse.authorities[0] == 'ROLE_ADMIN';
  }

}
