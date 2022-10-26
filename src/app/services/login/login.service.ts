import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { HandleError, HttpErrorHandler } from '../http-error-handler/http-error-handler.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  rypskApiUsersUrl: string = environment.rypskApiUsersUrl;
  isLoged: boolean = false;
  isAdmin: boolean = false;
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('LoginService')
  }

  login(user: string, password: string): Observable<User> {
    const url = this.rypskApiUsersUrl;
    const httpOptions = user?{
      params: new HttpParams().set('id', user)}:{};
    console.log(url);
    return this.http.get<User>(url, httpOptions);
      // .pipe(
      //   catchError(this.handleError('login', user?: null))
      // );
  }

  getUsers(): Observable<User[]> {
    // return this.http.get<User[]>(`${this.rypskApiUsersUrl}`)
    return this.http.get<User[]>(this.rypskApiUsersUrl)
  }

  logout(): boolean {
    this.isLoged = false;
    this.isAdmin = false;
    return this.isLoged;
  }

  forcedLogin(){
    this.isLoged = true;
    this.isAdmin = false;
    return this.isLoged;
  }

  getUsernameLogged(){
    return "rypsk";
  }

}
