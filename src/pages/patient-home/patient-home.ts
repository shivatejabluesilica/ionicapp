import { Component } from '@angular/core';
import { App, NavParams, Platform, MenuController, Events} from 'ionic-angular';
import { MyHomePage } from '../myhome/myhome';
import { OnlineConsultationPage } from '../online-consultation/online-consultation';
import { AppointmentPage } from '../appointment/appointment';


@Component({
    templateUrl:'patient-home.html'
})

export class PatientHomePage {

    selectedItem;
    chatParams;
    
    constructor( navParams: NavParams, platform: Platform, app: App, menu: MenuController,public events:Events){
        
        this.selectedItem = navParams.get('item');
        let item = this.selectedItem;
        let profile = this.selectedItem.profile;
        this.events.publish("pro",profile,11);
        this.events.publish("Item",item,10);
        menu.enable(true,'menu2');
        menu.enable(false,'menu1');
        this.chatParams = this.selectedItem;

    }

    tab1 = MyHomePage;
    tab2 = OnlineConsultationPage;
    tab3 = AppointmentPage;

}