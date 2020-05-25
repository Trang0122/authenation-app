import { Injectable } from '@angular/core';
import { Userlogin } from '../userlogin.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserResponse} from '../user-response.model';
import { Usersignup } from '../usersignup.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  readonly rootURL = 'https://conduit.productionready.io/api';


  constructor(
    private http : HttpClient
  ) { }

  login(user : Userlogin) : Observable<UserResponse>{
    
    return this.http.post<UserResponse>(this.rootURL +'/users/login', user);
  }
  signup(user : Usersignup) : Observable<UserResponse>{
    return this.http.post<UserResponse>(this.rootURL + '/users', user);
  }
}
