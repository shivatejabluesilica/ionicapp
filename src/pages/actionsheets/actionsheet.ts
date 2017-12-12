import { Component } from '@angular/core';
import { ActionSheetController, Platform, AlertController } from 'ionic-angular';

@Component({
  selector: 'action-sheet',
  templateUrl: 'actionsheet.html'
})

export class ActionSheetPage{
    public val:Array<any> =[];
    
    constructor(
        public platform: Platform,
        public actionsheetCtrl: ActionSheetController,
        public alertCtrl: AlertController
    ){ }

    openmenu(){
        let actionsheet = this.actionsheetCtrl.create({
            title: 'Albums',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: () =>{
                        console.log("delete clicked");
                    }
                },
                {
                    text: 'Share',
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: () =>{
                        console.log("share clicked");
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: () =>{
                        console.log("cancel clicked");
                    }
                }

            ]
        });
        actionsheet.present();
    }

    showAlert(){
        let alert = this.alertCtrl.create({
            title: 'Heyy! Shivateja.',
            subTitle: 'Good Mng.Have a nice day.',
            buttons: ['Okay']
        });
        alert.present();
    }

    showPrompt(){
        let prompt = this.alertCtrl.create({
            title: 'Registration/Login',
            subTitle: 'Enter Your Details',
            inputs:[
                {
                    name: 'fullname',
                    placeholder: 'FullName'
                }
            ],
            buttons: [
                {
                    text: 'Save',
                    role: 'save',
            
                    handler: data =>{
                        this.val.push(data);
                        console.log("save clicked",this.val);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data =>{
                        console.log("cancel clicked");
                    }
                }
            ]
        });
        prompt.present();
    }

}