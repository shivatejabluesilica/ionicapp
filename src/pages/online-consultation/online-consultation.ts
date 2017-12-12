import { Component } from '@angular/core';
import { ModalController, Platform, ViewController,Events } from 'ionic-angular';

export class Ask{
    currentpatient:string;
    title:string;
    detail:string;
}

@Component({
    templateUrl:'online-consultation.html'
})

export class OnlineConsultationPage {
    question:Array<any>=[];

    constructor(public modalCtrl: ModalController,public events:Events) {
        this.events.subscribe('shareObject',(item,itemNumber)=>{this.question.push(item);});
    }

    openModal() {
        let modal = this.modalCtrl.create(ModalContentPage);
        modal.present();
    }
}

@Component({
    templateUrl:'consult-form.html'
})

export class ModalContentPage {

    currentpatient:string;
    title:string;
    detail:string;
    msg:String;

    constructor(public viewCtrl: ViewController,public platform:Platform,public events:Events) {}
    
    submit(){
        var date = new Date();
        var dt = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
        var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        var am_pm = date.getHours() >= 12 ? "PM" : "AM";
        var hors = hours < 10 ? "0" + hours : hours;
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var time = hors + ":" + minutes + " " + am_pm;
        let item = {date:dt,time:time,currentpatient:this.currentpatient,title:this.title,detail:this.detail};
        this.events.publish("shareObject",item,5);
        this.msg = "Sent Successfully.";
    }
    
    dismiss() {
        this.viewCtrl.dismiss();
    }
}