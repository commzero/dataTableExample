import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(
    private http: HttpClient,
  ) { }
  public getTrips(): any {
    const apiUrl: string = environment.apiBaseUrl + '/api/v1/trip';
    return this.http.get<any[]>(apiUrl);
  }
}