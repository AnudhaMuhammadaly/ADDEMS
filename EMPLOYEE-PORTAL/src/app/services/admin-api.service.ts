import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAPIService {

  constructor(private http:HttpClient) { }

  Authenticate(){
    //api call
    return this.http.get('http://localhost:3000/employee/1')
  }
}
