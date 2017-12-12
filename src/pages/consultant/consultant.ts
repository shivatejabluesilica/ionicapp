import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ItemsPage } from '../items/items';

@Component({
  selector: 'page-op',
  templateUrl: 'consultant.html'
})

export class ConsultantPage {

  items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [{title: 'Out Patient'},{title: 'Search Doctors'}];
  }


  itemTapped(event, item) {
    this.navCtrl.push(ItemsPage, {
      item: item
    });
  }

}