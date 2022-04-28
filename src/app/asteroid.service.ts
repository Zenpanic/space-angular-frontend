import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asteroid } from './Asteroid';

@Injectable({
  providedIn: 'root'
})
export class AsteroidService {

  constructor(private http: HttpClient) { }

  getAsteroids(startDate: Date) {
    let params = new HttpParams();
    let formatedDate = startDate.toISOString().split('T')[0];
    params = params.append("startDate", formatedDate);
    // return this.http.get<Asteroid[]>("http://localhost:5000/asteroid", {responseType: 'json', params});
    return this.http.get<Asteroid[]>("https://zencosmos-backend.herokuapp.com/asteroid", {responseType: 'json', params});
  }
}
