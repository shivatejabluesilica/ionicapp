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
        return this.http.post(this.apiUrl+'signin',JSON.stringify(registerCredentials),{headers:headers})
        .map(response=>response.json());
    }

    online(data:any,id){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.apiUrl+'signin/'+id,JSON.stringify(data),{headers:headers})
        .map(response =>{response.json().onlineconsult});
    }

    appointment(obj:any,id){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.apiUrl+'sign/'+id,JSON.stringify(obj),{headers:headers})
        .map(response =>{response.json().appointments});
    }

    profile(pro:any, id){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.apiUrl+'profile/'+id,JSON.stringify(pro),{headers:headers})
        .map(response =>{response.json().profile}); 
    }

    feed(fb:any, id){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.apiUrl+'feed/'+id, JSON.stringify(fb), {headers:headers})
        .map(response =>{response.json().feedbacks});
    }

}