import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Indicator } from 'src/app/models/indicator';
import { HandleError, HttpErrorHandler } from 'src/app/services/http-error-handler/http-error-handler.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RedataService {

  private handleError: HandleError;
  private redataApiUrl = environment.redataApiUrl;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) { 
    this.handleError = httpErrorHandler.createHandleError('RedataService')
  }

  getData(requestDate: Date): Observable<any>{
    let startDate = requestDate.toLocaleDateString('en-GB') + 'T00:00:00';
    // let endDate = requestDate.toDateString() + 'T23:59:59';
    // let end_date = new Date(requestDate.getTime() + (1000 * 60 * 60 * 24));
    let end_date = new Date(requestDate.getTime());
    let endDate = end_date.toLocaleDateString('en-GB') + 'T23:59:59';
    const url = 'https://api.esios.ree.es/indicators/1001';
    // const url = 'https://apip.esios.ree.es/indicators/1001';
    const options = { 
      headers: new HttpHeaders().set('Accept', 'application/json; application/vnd.esios-api-v2+json')
      .set('Content-Type','application/json')
      // .set('Authorization','Token token=\"7084f590370f581565f184fec4930e6a4308d28d6688422a57af3e9f41084d78\"'),
      .set('x-api-key','7084f590370f581565f184fec4930e6a4308d28d6688422a57af3e9f41084d78'),
      params: new HttpParams().set('geo_ids[]','8741').set('start_date',startDate).set('end_date',endDate)
      // params: new HttpParams().set('geo_ids[]','8741').set('start_date','2023/07/07T00:00:00').set('end_date','2023/07/08T00:00:00')
    };
    console.log(url);
    return this.http.get(url, options)
      .pipe(
        catchError(this.handleError('getREData'))
      );
  }
}
