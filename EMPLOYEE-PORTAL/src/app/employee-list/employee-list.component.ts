import { Component, OnInit } from '@angular/core';
import { employeeModel } from '../employee.model';
import { EmpAPIService } from '../service/emp-api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

                allEmp:any=[] = []
 
  employee:employeeModel={} // to hold emp details

        constructor(private api:EmpAPIService,private route:Router){}
 
              ngOnInit(): void {
              this.viewEmp()
              }
 
     addEmp(){
           this.api.addempAPI(this.employee).subscribe({
           next:(res:any)=>{
           console.log(res);
           alert("employee details added successfully")
           this.viewEmp()
     }
    })
     console.log(this.employee);
    }
  

  viewEmp(){
    this.api.viewempAPI().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allEmp=res
        
      },
      error:(err:any)=>{
        console.log(err.message);
        
      }
    })
  }

  
}
