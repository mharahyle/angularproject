import { Component, OnInit } from '@angular/core'

import { UserService } from './service/user.service';
import { DataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  
  public users = {};
  message;
  userinfo = this.ds.getUser();

  constructor(private userService: UserService, private ds: DataService) { }

  ngOnInit() {
  }

  getUser(){
    this.userService.getUser(this.userinfo.user_id).subscribe(res => {
      if(res){
      this.userinfo = res.data
      }
      else{
        this.message = 'User not found';
      }
    })
  }

}
