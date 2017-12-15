import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService,User } from '../../providers/auth-service';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { PatientHomePage } from '../patient-home/patient-home';
import { SignupPage } from '../signup/signup';

@Component({
    templateUrl:'patient.html'
})

export class PatientPage {
    public data:Array<any> =[];

    loading: Loading;
    registerCredentials = new User("","");

    constructor(private nav: NavController, private auth: AuthService, 
        private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
            this.auth.login().subscribe(response=>{
                this.data = response;
            })
         }
    
        public createAccount() {
            this.nav.push(SignupPage);
        }
         
        public login() {
            if(this.registerCredentials.username == null || this.registerCredentials.password == null){
                this.showError("Access Denined");
            }
            else{
                for(let i=0; i<this.data.length; i++){
                    if(this.data[i].username === this.registerCredentials.username && 
                    this.data[i].password === this.registerCredentials.password){
                        this.nav.setRoot(PatientHomePage,{item:this.data[i]});
                    }
                }
            }
        }
        
        showLoading() {
            this.loading = this.loadingCtrl.create({
                content: 'Please wait...',
                dismissOnPageChange: true
            });
            this.loading.present();
        }
        
        showError(text) {
            let alert = this.alertCtrl.create({
                title: 'Fail',
                subTitle: text,
                buttons: ['OK']
            });
            alert.present();
        }
}