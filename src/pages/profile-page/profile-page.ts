import { Component } from '@angular/core';
import { NavParams, NavController} from 'ionic-angular';
import { EditProfilePage } from '../edit-profile/edit-profile';

@Component({
    templateUrl:'profile-page.html'
})

export class ProfilePage{

    profile;

    constructor(public navParams:NavParams,public navCtrl:NavController){
        this.profile = this.navParams.get('profile');
    }

    edit(){
        this.navCtrl.push(EditProfilePage,{profile:this.profile});
    }
}