import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }
  public getUsers(): any {
    const apiUrl: string = environment.apiBaseUrl + '/api/v1/users';
    return this.http.get<any[]>(apiUrl);
  }
}