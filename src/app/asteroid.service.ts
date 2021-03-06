import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError, throwError, } from 'rxjs';
import { Asteroid } from './Asteroid';

@Injectable({
  providedIn: 'root'
})
export class AsteroidService {

  constructor(private http: HttpClient) { }

  getAsteroids(startDate: Date) {
    console.log('SD', startDate)
    let params = new HttpParams();
    const year = startDate.getFullYear();
    const month = startDate.getMonth() < 10 ? `0${startDate.getMonth()}` : startDate.getMonth();
    const day = startDate.getDate() < 10 ? `0${startDate.getDate()}` : startDate.getDate();
    let formatedDate = `${year}-${month}-${day}`;
    params = params.append("startDate", formatedDate);
    // return this.http.get<Asteroid[]>("http://localhost:5000/asteroid", {responseType: 'json', params}).pipe(retry(2), catchError(this.handleError));
    return this.http.get<Asteroid[]>("https://zencosmos-backend.herokuapp.com/asteroid", {responseType: 'json', params}).pipe(retry(2), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
