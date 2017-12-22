import { Component } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';

@Component({
    templateUrl:'profile-page.html'
})

export class ProfilePage{

    profile;

    constructor(public navParams:NavParams,public alertCtrl:AlertController){
        this.profile = this.navParams.get('profile');
    }

    edit(){
        let prompt = this.alertCtrl.create({
            title:'Edit Your Profile',
            inputs:[
                {
                    name:'fathername',
                    placeholder:'Father Name'
                },
                {
                    name:'mothername',
                    placeholder:'Mother Name'
                },
                {
                    name:'mobile',
                    placeholder:'Mobile Number'
                },
                {
                    name:'email',
                    placeholder:'EmailId'
                },
                {
                    name:'bloodgroup',
                    placeholder:'Blood Group'
                },
                {
                    name:'address',
                    placeholder:'Address'
                }
            ],
            buttons:[
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: data=>{
                        this.profile.fathername = data.fathername,
                        this.profile.mothername = data.mothername,
                        this.profile.mobileno = data.mobile,
                        this.profile.email = data.email,
                        this.profile.bloodgroup = data.bloodgroup,
                        this.profile.address = data.address
                    }
                }
            ]
        });
        prompt.present();
    }
}