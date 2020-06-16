import { Component, OnInit } from '@angular/core';
import { NewUserService } from './service/new-user.service';

@Component({
  selector: 'app-financial-report',
  templateUrl: './financial-report.component.html',
  styleUrls: ['./financial-report.component.scss']
})
export class FinancialReportComponent implements OnInit {
  public userTable = [];

  constructor(private newUserService: NewUserService) { }

  ngOnInit() {
    this.newUserService.getnewUser()
     .subscribe (data => this.userTable = data);
  }

}
