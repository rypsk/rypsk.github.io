import { Injectable } from '@angular/core';
import { HandleError, HttpErrorHandler } from '../http-error-handler/http-error-handler.service';
import { LoginService } from '../login/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  rypskApiUrl: string = environment.rypskApiUrl;
  private handleError: HandleError;

  constructor(private loginService: LoginService, private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('DashboardService')
  }

  getAllUsers(){
    console.log('token: ' + this.loginService.token);
    let resource = '/dashboard/users';
    const url = this.rypskApiUrl + resource;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.loginService.token
      }),
      withCredentials:true
    };
    return this.http.get(url, httpOptions)
      .pipe(
        catchError(this.handleError('signUp', 'Error'))
      );
  }

}
