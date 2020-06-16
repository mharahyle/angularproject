import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userTables } from 'src/app/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {
 
  constructor( private http: HttpClient) { }
    /**
     * newUser
     */
    private _url: string = "https://jsonplaceholder.typecode.com";
    getnewUser(): Observable<userTables[]>{
      return this.http.get<userTables[]>(this._url);
    }
   }

