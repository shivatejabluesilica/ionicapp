import { Component } from '@angular/core';
import { ModalController, ViewController, Events, NavParams } from 'ionic-angular';
import { LoginService } from '../../providers/login-service';

@Component({
    templateUrl:'feedback.html'
})

export class FeedbackPage{

    profile;
    data;
    fbs:Array<any>=[];

    constructor(public modalCtrl: ModalController, public navParams: NavParams,
        public events: Events, public loginService: LoginService){
        this.data = this.navParams.get('profile');
        const sign = {
            username: this.data.username,
            password: this.data.password
        }
        this.loginService.login(sign).subscribe(data =>{
            this.profile = data[0].profile,
            this.fbs = data[0].feedbacks;
        })
        this.events.subscribe('feed',(fb,fbNumber)=>{
            this.loginService.login(sign).subscribe(data =>{
                this.fbs = data[0].feedbacks;
            });
        });
        
    }

    openModal() {
        let modal = this.modalCtrl.create(ModalFeedbackPage,{profile:this.profile,id:this.data._id});
        modal.present();
    }

}

@Component({
    templateUrl:'feedback-modal.html'
})

export class ModalFeedbackPage{

    fb:String;
    profile;
    msg :String;
    
    constructor(public viewCtrl: ViewController,public events: Events,
        public params:NavParams, public loginService: LoginService){
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
        var id = this.params.get('id');
        this.loginService.feed(fb,id).subscribe(data =>{
            this.events.publish('feed',fb,3);
            this.msg = 'Success';
        })
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}