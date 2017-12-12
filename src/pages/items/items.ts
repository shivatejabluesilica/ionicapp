import { Component } from '@angular/core';

import { NavController, NavParams, Platform} from 'ionic-angular';
import { MedicalHistoryPage } from '../medicalhistory/medicalhistory';


@Component({
  selector: 'page-items',
  templateUrl: 'items.html'
})
export class ItemsPage {
  selectedItem: any;
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.isAndroid = platform.is('android');
  }
  tab1=MedicalHistoryPage;

}