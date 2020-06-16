import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Router } from '@angular/router';

import { map, catchError } from 'rxjs/operators';

import { DataService } from './shared-data.service';
import { Observable, throwError } from 'rxjs';


@Injectable()
export class ApiService {
  post(arg0: string, arg1: string, UserDetail: any): Observable<any> {
    throw new Error("Method not implemented.");
  }
  public token = 'randomToken';
  public header:  HttpHeaders;
  public bodyData: string;
  public httpService: HttpClient;
  public options: any;
  public service: any;

  constructor(private http: HttpClient, private router: Router, private dataService: DataService) {
    this.httpService = http;
  }

  request(url: string, type: string, data?: any, useToken?: boolean,
          headers?: any, noStringify?: any): Observable<any> {
    this.bodyData = data;

    this.token = this.dataService.getData('token') || 'bankcall';
     // While Implementing the token based authentication, we then go ahead and add the token to the Headers
     
    this.header = new  HttpHeaders(headers || {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization' : 'Bearer ' + this.token
    });
    
    this.options = { headers: this.header };
    if (type.toLowerCase() === 'get') {
      this.service = this.httpService.get(url, this.options);
    } else  {
            if (type.toLowerCase() === 'post') {
                this.service = this.httpService.post(url, this.bodyData, this.options);
                
            } else {
              this.service = this.httpService.put(url, this.bodyData);
            }
    }
    return this.service.pipe(
        map((res: any) =>  res ),
        catchError((error: any) => {
              if (error.status === 401) {
                let  requestError  = {reason : 'Session Expired' , status: 'Your Session has expired'};
                if(error.error.message == 'TOKEN EXPIRED'){

                }
                if(error.error.message == 'Unauthorized Access'){
                  requestError.reason = 'Unauthorised Access';
                  requestError.status = 'You are not allowed to view this page';

                }
                sessionStorage.clear();
                // this.errorservice.openDialog(requestError);
                this.router.navigate(['/login']);
              } else {
                  let  requestError  = {};
                  requestError = {reason : 'Network Error' , status: 'Could not connect to server' };
                  // this.errorservice.openDialog(requestError);
                return throwError(requestError || 'Server error');
              }
          })
    );
  }




}


