import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HandleError, HttpErrorHandler } from '../http-error-handler/http-error-handler.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../login/login.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  rypskApiUrl: string = environment.rypskApiUrl;
  private handleError: HandleError;

  constructor(private loginService: LoginService, private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('LoginService')
  }

  getAllUsers(){
    console.log('token: ' + this.loginService.token);
    let resource = '/users';
    const url = this.rypskApiUrl + resource;
    const httpOptions = {
      headers: new HttpHeaders({
        'hello':'world',
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.loginService.token
      }),
      
    };
    return this.http.get(url, httpOptions)
      .pipe(
        catchError(this.handleError('signUp', 'Error'))
      );
  }
}
