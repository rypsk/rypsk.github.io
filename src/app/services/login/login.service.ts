import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { HandleError, HttpErrorHandler } from '../http-error-handler/http-error-handler.service';
import { environment } from 'src/environments/environment';
import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto-js';
import { SignResponse } from 'src/app/models/signResponse';
import { SignInRequest } from 'src/app/models/signInRequest';
import { SignUpRequest } from 'src/app/models/signUpRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  rypskApiUrl: string = environment.rypskApiUrl;
  secret: string = environment.secret;
  isLogged: boolean = false;
  isEnabled: boolean = false;
  isAdmin: boolean = false;
  username: any = '';
  email: any = '';
  token: any = '';
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
    localStorage.clear();
    return this.isLogged;
  }

  encryptToAes(param: string): string{
    return crypto.AES.encrypt(param,this.secret).toString();
  }

  decryptFromAes(param: any): string{
    return crypto.AES.decrypt(param,this.secret).toString(crypto.enc.Utf8);
  }

  setUserLogged(signResponse: SignResponse) {    
    this.isLogged = true;
    this.isEnabled = signResponse.isEnabled;
    this.email = signResponse.email;
    this.token = signResponse.token;
    this.authorities = signResponse.authorities;
    this.username = signResponse.username;
    this.isAdmin = signResponse.authorities[0] == 'ROLE_ADMIN';

    localStorage.setItem('isLogged', this.isLogged?this.encryptToAes('true'):this.encryptToAes('false'));
    localStorage.setItem('isEnabled', this.isEnabled?this.encryptToAes('true'):this.encryptToAes('false'));
    localStorage.setItem('email',this.encryptToAes(this.email));
    localStorage.setItem('token',this.token);
    localStorage.setItem('authorities',this.encryptToAes(this.authorities[0]));
    localStorage.setItem('username',this.encryptToAes(this.username));
    localStorage.setItem('isAdmin',this.isAdmin?this.encryptToAes('true'):this.encryptToAes('false'));
  }

  setUserLoggedFromLocalStorage(){
    this.isLogged = this.decryptFromAes(localStorage.getItem('isLogged')) == 'true';
    this.isEnabled = this.decryptFromAes(localStorage.getItem('isEnabled')) == 'true';
    this.email = this.decryptFromAes(localStorage.getItem('email')) != null?this.decryptFromAes(localStorage.getItem('email')):'';
    this.token = localStorage.getItem('token') != null?localStorage.getItem('token'):'';
    let auths: any = [this.decryptFromAes(localStorage.getItem('authorities')) != null?this.decryptFromAes(localStorage.getItem('authorities')):''];
    this.authorities = auths;
    this.username = this.decryptFromAes(localStorage.getItem('username')) != null?this.decryptFromAes(localStorage.getItem('username')):'';
    this.isAdmin = auths == 'ROLE_ADMIN';
  }

}
