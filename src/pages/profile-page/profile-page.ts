import { Component } from '@angular/core';
import { NavParams, NavController} from 'ionic-angular';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { LoginService } from '../../providers/login-service';

@Component({
    templateUrl:'profile-page.html'
})

export class ProfilePage{

    profile = {};
    data;
    obj;

    constructor(public navParams: NavParams, public navCtrl: NavController,
    public loginService: LoginService){
        this.data = this.navParams.get('profile');
        const signin = {
            username : this.data.username,
            password: this.data.password
        }
        this.loginService.login(signin).subscribe(data=>{
            this.obj = data[0];
            this.profile = data[0].profile;
        });
    }

    edit(){
            this.navCtrl.push(EditProfilePage,{profile:this.obj});
    }
}