import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    templateUrl:'profile-page.html'
})

export class ProfilePage{

    profile;

    constructor(public navParams:NavParams){
        this.profile = this.navParams.get('profile');
    }
}