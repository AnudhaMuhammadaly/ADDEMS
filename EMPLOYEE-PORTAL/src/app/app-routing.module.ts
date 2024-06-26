import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes: Routes = [
 {
  path:'',component:LoginComponent},
  {
  path:'employeelist',component:EmployeeListComponent
 },
 
 {
  path:'**',redirectTo:''
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
