import { Injectable } from '@angular/core';
import { HttpModule, Http, Response} from '@angular/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  authenticationToken: string = null

  constructor(
      public http : Http
  ) { }

  login(userName: string, userPassword: string) : Observable<any> {
    var url = "https://7iepji61g0.execute-api.us-east-1.amazonaws.com/prod/authenticate";
    var me = this;
    var login = {username: userName, password: userPassword}
    return this.http.post(url, login).map((res: Response) =>
     res.json(
       
     ))
  }

  
  setAuthenticationToken(authenticationToken: string) {
    //localStorage.setItem("authorization", authenticationToken)
    this.authenticationToken = authenticationToken
  }

  getAuthenticationToken() : string {
    //devuelve localStorage.getItem("authorization")
    return this.authenticationToken
  }

  isLoggedIn() : boolean {
    var authenticationToken = this.getAuthenticationToken()

    return authenticationToken !== undefined && authenticationToken !== null && authenticationToken.length > 0
  }

}
