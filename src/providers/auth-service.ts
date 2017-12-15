import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
export class User {
  username: string;
  password: string;
 
  constructor(username: string, password: string) {
    this.username = name;
    this.password = password;
  }
}

export class signupUser{
  name:string;
  email:string;
  mobile:string;
  username:string;
  password:string;
  repassword:string;

  constructor(name:string,email:string,mobile:string,username: string, password: string,repassword:string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.name = name;
    this.password = password;
    this.repassword = repassword;
    this.mobile = mobile;
  }
}
 
@Injectable()
export class AuthService {
  

  constructor(public http:Http){}
 
  public login() {
    return this.http.get('assets/json/patient.json')
                .map(response => response.json());
  }
 
  /*public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }*/
}