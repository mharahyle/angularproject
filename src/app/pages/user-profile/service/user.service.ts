import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { EndPoints } from 'src/app/constant';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = EndPoints.USERS;

  constructor(private api: ApiService) { }

  public getUsers():Observable<any>{
    return this.api.request(this.baseUrl + '/' + 'getUsers', 'get');
  }

  public getUser(id):Observable<any>{
    return this.api.request(this.baseUrl + '/' + 'getUser' + '/' + id, 'get');
  }

  public createUser(user):Observable<any>{
    return this.api.request(this.baseUrl + '/' + 'createUser', 'post', user);
  }

  public updateUser(id):Observable<any>{
    return this.api.request(this.baseUrl + '/' + 'updateUser', 'post', id);
  }
}
