import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ProfilePage } from '../profile-page/profile-page';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@Component({
    templateUrl: 'edit-profile.html'
})

export class EditProfilePage{
    fathername;
    mothername;
    mobileno;
    email;
    dob;
    address;
    bloodgroup;
    bgs:Array<any>=["0+","O-","A+","A-","B+","B-","AB+","AB-"];
    profile;

    constructor(public navParams:NavParams, public navCtrl:NavController){
        this.profile = this.navParams.get('profile');
    }

    save(){
        var profile = {
            name:this.profile.name,
            src:this.profile.src, 
            fathername:this.fathername,
            mothername:this.mothername,
            mobileno:this.mobileno,
            address:this.address,
            dob:this.dob,
            email:this.email,
            bloodgroup:this.bloodgroup
        }
        this.navCtrl.push(ProfilePage,{profile:profile});
    }                   
}