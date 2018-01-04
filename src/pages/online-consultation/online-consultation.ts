import { Component } from '@angular/core';
import { ModalController, Platform, ViewController,Events } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { LoginService } from '../../providers/login-service';

export class Ask{
    currentpatient:string;
    title:string;
    detail:string;
}

@Component({
    templateUrl:'online-consultation.html'
})

export class OnlineConsultationPage {

    public question: Array<any> =[];
    
    constructor(public modalCtrl: ModalController,public events:Events, public navParams:NavParams,
    public loginService:LoginService) {
        this.question = navParams.data.onlineconsult;
        this.events.subscribe('shareObject',(item,itemNumber)=>{
            const sign = {
                username: this.navParams.data.username,
                password: this.navParams.data.password
            }
            this.loginService.login(sign).subscribe(data =>{
                this.question = data[0].onlineconsult;
            })
        });
    }

    openModal() {
        let id = this.navParams.data._id;
        let modal = this.modalCtrl.create(ModalContentPage,{'id':id});
        modal.present();
    }
}

@Component({
    templateUrl:'consult-form.html'
})

export class ModalContentPage {

    currentpatient: string;
    title: string;
    detail: string;
    msg: String;
    id: String;

    constructor(public viewCtrl: ViewController,public platform: Platform,
        public events: Events, public loginService: LoginService, public navParams: NavParams) {
            this.id = this.navParams.get('id');
        }
    
    submit(){
        var date = new Date();
        var dt = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
        var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        var am_pm = date.getHours() >= 12 ? "PM" : "AM";
        var hors = hours < 10 ? "0" + hours : hours;
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var time = hors + ":" + minutes + " " + am_pm;
        let item = {date:dt,time:time,currentpatient:this.currentpatient,title:this.title,detail:this.detail};
        this.loginService.online(item,this.id).subscribe(res => {
            console.log(res);
        })
        this.events.publish("shareObject",item,5);
        this.msg = "Sent Successfully.";
    }
    
    dismiss() {
        this.viewCtrl.dismiss();
    }
}