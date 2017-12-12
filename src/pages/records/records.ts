import { Component } from '@angular/core';
import { NavParams,ViewController } from 'ionic-angular';

@Component({
    templateUrl:'records.html'
})

export class RecordsPage{

    record;

    constructor(public navParams:NavParams,public viewCtrl:ViewController){
        this.record = this.navParams.get('item');
        console.log(this.record);
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }

}