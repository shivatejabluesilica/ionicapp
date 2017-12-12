import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    templateUrl:'medicalhistory.html'
})

export class MedicalHistoryPage{
    public data:Array<any>;
    public patientid:any;
    public records:Array<any>;

    constructor(public http:Http){}

    getPatient(){
      if(this.patientid == ""|| this.patientid == null){
          this.records = [];
      }
      else{
          this.http.get('assets/json/patient.json')
          .subscribe(res => {this.data = res.json();
          for(let i=0; i<this.data.length; i++){
              if(this.patientid=== this.data[i].patientid){
                this.records = this.data[i].medicalrecords;
              }
          }
          });
      }
    }

}