import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav,Events } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { ActionSheetPage } from '../pages/actionsheets/actionsheet';
import { ConsultantPage } from '../pages/consultant/consultant';
import { PatientPage } from '../pages/patient/patient';
import { ProfilePage } from '../pages/profile-page/profile-page';
import { FeedbackPage } from '../pages/feedback/feedback';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DummyPage } from '../pages/dummy/dummy';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = PatientPage;
  pages: Array<{title: string, component: any}>;
  menus: Array<{title: string, component: any}>;
  profile;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public events:Events,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();
    this.menus = [
      { title: 'Consultant', component: ConsultantPage },
      { title: 'Patient', component: PatientPage },
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'ActionSheet', component: ActionSheetPage }
    ];
    this.pages = [
      { title: 'Profile', component: ProfilePage },
      { title: 'Feedback', component: FeedbackPage },
      { title: 'dummy', component: DummyPage},
      { title:'Logout', component: PatientPage }
    ];
    this.events.subscribe('pro',(profile,profileNumber)=>{
      this.profile = profile;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.menu.close();
    this.nav.push(page.component,{profile:this.profile});
  }

  openMenu(men){
    this.menu.close();
    this.nav.setRoot(men.component);
  }

}
