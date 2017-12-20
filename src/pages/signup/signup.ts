import { Component } from '@angular/core';
import { signupUser } from '../../providers/auth-service'
import { Http } from '@angular/http';
import { LoginService } from '../../providers/login-service';
import { ToastController,NavController} from 'ionic-angular';
import { PatientPage } from '../patient/patient';

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

    constructor(public http:Http, public loginService:LoginService,
        public toastCtrl:ToastController, public navCtrl:NavController){}

    private showToast(message: string) {
        let toast = this.toastCtrl.create({
          message: message,
          duration: 3000
        });
        toast.present();
    }

    signup(credentials){
        if(credentials.password!==""||credentials.password!==null||
        credentials.password!==undefined&&credentials.password===credentials.repassword){
            var login = {
                username:credentials.username,
                password:credentials.password,
                profile:{
                    name:credentials.name,
                    mobile:credentials.mobile,
                    email:credentials.email
                }
            }
            this.loginService.signup(login).subscribe(data=>{
                this.showToast(data.msg);
            });
            this.credentials = new signupUser("","","","","","");
        }
        else{
            this.showToast("Confirm Password correctly.");
        }
    }

    login(){
        this.navCtrl.setRoot(PatientPage);
    }

}