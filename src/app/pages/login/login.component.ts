import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  statusMessage;
  loading;

  constructor(private authService: AuthService, private ds: DataService, private router: Router) {}

  LoginForm = new FormGroup({
    email: new FormControl('ayo@gmail.com', Validators.required),
    password: new FormControl('123ayo', Validators.required)
  });

  ngOnInit() {
  }

  // https://jsonplaceholder.typicode.com/{id} -- 2
  // https://jsonplaceholder.typicode.com --- 1 
 
  loginUser(){
    this.loading = true;
    this.authService.loginUser(this.LoginForm.value).subscribe(res => {
      if(res){
               
            this.loading = false;
            this.loading = "please wait while your page is loading ";
            this.router.navigateByUrl('/app/pages/dashboard');          
          }

      else (
        this.statusMessage = "Please check your details"
      );
    });
      }
}
