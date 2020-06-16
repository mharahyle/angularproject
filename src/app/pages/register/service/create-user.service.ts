import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Observable} from 'rxjs';
import { EndPoints  }   from 'src/app/constant';

export interface UserDetail {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  baseUrl = EndPoints.USERS;

  constructor(private api : ApiService) { }

    public createUser(user):Observable<any>{
      return this.api.request(this.baseUrl + '/' + 'createUser', 'post', user);
    }  
  }

