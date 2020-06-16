import { Component, OnInit } from '@angular/core';
import { CreateUserService } from './service/create-user.service';
import { DataService } from 'src/app/shared-data.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loading;
  statusMessage;
  constructor(private createuserService : CreateUserService, private ds:DataService,private router: Router) { }

  LoginForm = new FormGroup({
    name:new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  ngOnInit() {
  }

  createUser(){
    this.loading = true;
    this.createuserService.createUser(this.LoginForm.value).subscribe(res=>{
      if(res){
            this.loading = false;
            this.statusMessage = "Login Successful. Setting up your account...."
            this.router.navigateByUrl('/app/user-profile');
      }
      else (
        this.statusMessage = "Error"
      );
    })
  }
}
