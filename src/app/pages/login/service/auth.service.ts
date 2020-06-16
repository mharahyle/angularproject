import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { EndPoints } from 'src/app/constant';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

export interface loginDetails{
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = EndPoints.LOGINURL

  constructor(private api: ApiService, private http: HttpClient) { }

  public loginUser(loginDetails):Observable<any>{
    return this.api.request(this.baseUrl + '/' + 'loginUser', 'post', loginDetails);
  }


}
