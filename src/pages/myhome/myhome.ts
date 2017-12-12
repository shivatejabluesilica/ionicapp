import { Component } from '@angular/core';
import { ModalController,NavParams } from 'ionic-angular';
import { RecordsPage } from '../records/records';

@Component({
    templateUrl:'myhome.html'
})

export class MyHomePage{
  
  public patientid:any;
  public data:Array<any>;
  public records:Array<any>;

  constructor(public navParams:NavParams,public modalCtrl:ModalController) { 
    this.records = navParams.data.medicalrecords;
  }
  itemSelected(record: string) {
    let modal = this.modalCtrl.create(RecordsPage,{item:record});
    modal.present();
  }
  
}