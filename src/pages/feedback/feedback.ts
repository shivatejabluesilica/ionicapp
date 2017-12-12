import { Component } from '@angular/core';
import { ModalController, ViewController, Events, NavParams } from 'ionic-angular';

@Component({
    templateUrl:'feedback.html'
})

export class FeedbackPage{

    profile;
    fbs:Array<any>=[];

    constructor(public modalCtrl: ModalController,public navParams:NavParams,public events:Events){
        this.profile = this.navParams.get('profile');
        this.events.subscribe('feed',(fb,fbNumber)=>{this.fbs.push(fb)});
        console.log(this.fbs);
    }

    openModal() {
        let modal = this.modalCtrl.create(ModalFeedbackPage,{profile:this.profile});
        modal.present();
    }

}

@Component({
    templateUrl:'feedback-modal.html'
})

export class ModalFeedbackPage{

    fb:String;
    profile;
    
    constructor(public viewCtrl:ViewController,public events:Events,public params:NavParams){
        this.profile = this.params.get('profile');
    }

    send(){
        var date = new Date();
        var dt = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
        var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        var am_pm = date.getHours() >= 12 ? "PM" : "AM";
        var hors = hours < 10 ? "0" + hours : hours;
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var time = hors + ":" + minutes + " " + am_pm;
        let fb =  {date:dt,time:time,feedback:this.fb};
        console.log(fb);
        this.events.publish('feed',fb,3);
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}