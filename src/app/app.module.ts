import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { ActionSheetPage } from '../pages/actionsheets/actionsheet';
import { ConsultantPage } from '../pages/consultant/consultant';
import { ItemsPage } from '../pages/items/items';
import { MedicalHistoryPage } from '../pages/medicalhistory/medicalhistory';
import { PatientPage } from '../pages/patient/patient';
import { SignupPage } from '../pages/signup/signup';
import { PatientHomePage } from '../pages/patient-home/patient-home';
import { MyHomePage } from '../pages/myhome/myhome';
import { OnlineConsultationPage, ModalContentPage } from '../pages/online-consultation/online-consultation';
import { ProfilePage } from '../pages/profile-page/profile-page';
import { FeedbackPage,ModalFeedbackPage } from '../pages/feedback/feedback';
import { AppointmentPage } from '../pages/appointment/appointment';
import { RecordsPage } from '../pages/records/records';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthService } from '../providers/auth-service';
import { AppSettings } from '../providers/app-settings';
import { LoginService } from '../providers/login-service';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ActionSheetPage,
    ConsultantPage,
    ItemsPage,
    MedicalHistoryPage,
    PatientPage,
    SignupPage,
    PatientHomePage,
    MyHomePage,
    OnlineConsultationPage,
    ModalContentPage,
    ProfilePage,
    FeedbackPage,
    ModalFeedbackPage,
    AppointmentPage,
    RecordsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ActionSheetPage,
    ConsultantPage,
    ItemsPage,
    MedicalHistoryPage,
    PatientPage,
    SignupPage,
    PatientHomePage,
    MyHomePage,
    OnlineConsultationPage,
    ModalContentPage,
    ProfilePage,
    FeedbackPage,
    ModalFeedbackPage,
    AppointmentPage,
    RecordsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    AppSettings,
    LoginService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
