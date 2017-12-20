import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { AppSettings } from './app-settings';
import 'rxjs/add/operator/map';

@Injectable()

export class LoginService{

    apiUrl;

    constructor(public http:Http,public appSettings:AppSettings){
        this.apiUrl = this.appSettings.getApiUrl();
    }

    signup(credentials:any){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.apiUrl+'login',JSON.stringify(credentials),{headers: headers})
        .map(response => response.json());
    }

    login(registerCredentials:any){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.apiUrl+'signin',JSON.stringify(registerCredentials),{headers:headers}).map(response=>response.json());
    }

}