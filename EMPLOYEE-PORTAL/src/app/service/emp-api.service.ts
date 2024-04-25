import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employeeModel } from '../employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmpAPIService {

  constructor(private http:HttpClient) { }

  addempAPI(employee:employeeModel){
    return this.http.post('http://localhost:3000/employee',employee)
  }

  viewempAPI(){
    return this.http.get('http://localhost:3000/employee')
  }

  
}
