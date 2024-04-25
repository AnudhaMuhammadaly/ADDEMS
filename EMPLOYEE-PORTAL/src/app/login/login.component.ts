import { Component } from '@angular/core';
import { AdminAPIService } from '../services/admin-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = ''

  constructor(private api: AdminAPIService, private route:Router) { }

  login() {
    if (this.username && this.password) {
      this.api.Authenticate().subscribe({
        next: (res: any) => {
          const { username, password } = res
          if (username == this.username && password == this.password) {
            alert("login successful")
            setTimeout(()=>{
              this.route.navigateByUrl('/employeelist')
            },1000)
          
          }
          else {
            alert("please enter valid username or password")
          }
        }
      })

    }
  }
}
