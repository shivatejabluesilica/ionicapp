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