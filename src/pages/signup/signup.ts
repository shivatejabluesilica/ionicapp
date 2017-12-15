import { Component } from '@angular/core';
import { signupUser } from '../../providers/auth-service'
import { Http } from '@angular/http';
import { LoginService } from '../../providers/login-service';
import { ToastController} from 'ionic-angular';

@Component({
    templateUrl:'signup.html'
})

export class SignupPage{

    name:string;
    email:string;
    mobile:string;
    username:string;
    password:string;
    repassword:string;

    credentials = new signupUser("","","","","","");

    constructor(public http:Http, public loginService:LoginService,public toastCtrl:ToastController){}

    private showToast(message: string) {
        let toast = this.toastCtrl.create({
          message: message,
          duration: 3000
        });
        toast.present();
    }

    signup(credentials){
        if(credentials.password===credentials.repassword){
            this.loginService.signup(credentials).subscribe(data=>{
                this.showToast(data.msg);
                console.log(credentials);});
                this.credentials = new signupUser("","","","","","");
        }
        else{
            this.showToast("Confirm Password correctly.");
        }
    }

}