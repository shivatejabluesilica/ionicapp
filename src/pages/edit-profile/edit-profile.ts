import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ProfilePage } from '../profile-page/profile-page';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { LoginService } from '../../providers/login-service';

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
    bgs:Array<any> = ['0+','O-','A+','A-','B+','B-','AB+','AB-'];
    data;
    profile;
    name;
    msg: String;
    obj;

    constructor(public navParams:NavParams, public navCtrl:NavController, public loginService: LoginService){
        this.data = this.navParams.get('profile');
        this.profile = this.data.profile;
        this.msg ='';
    }

    file(event){
        var file = event.target.files[0];
        console.log(file);
    }

    save(){
        var profile = {
            name:this.name,
            fathername:this.fathername,
            mothername:this.mothername,
            mobile:this.mobileno,
            address:this.address,
            dob:this.dob,
            email:this.email,
            bloodgroup:this.bloodgroup
        }
        this.loginService.profile(profile,this.data._id).subscribe(data => {
            this.navCtrl.push(ProfilePage,{ profile: this.data});
        });
    }                   
}