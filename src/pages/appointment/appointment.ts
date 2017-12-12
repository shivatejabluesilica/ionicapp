import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NavParams } from 'ionic-angular';

@Component({
    templateUrl:'appointment.html'
})

export class AppointmentPage{
    public doctors:Array<any> = [{"name":"Dr.Raman","department":"Cardialogy","intime":"MON-SAT|09:30AM-01:30PM","src":"assets/doctors/jdoctor.png"},{"name":"Dr.Mano","department":"Family Physician","intime":"MON-SAT|10:30AM-03:30PM","src":"assets/doctors/jdoctor.png"},
    {"name":"Dr.Surya Pawan","department":"Diabetalogy","intime":"MON-SAT|09:00AM-01:00PM","src":"assets/doctors/jdoctor.png"},{"name":"Dr.Kalpana","department":"Pediatrician","intime":"MON-SAT|08:30AM-01:30PM","src":"assets/doctors/ldoctor.jpg"},
    {"name":"Dr.Ramoji","department":"Cardialogy","intime":"MON-SAT|11:30AM-04:30PM","src":"assets/doctors/jdoctor.png"},{"name":"Dr.Umapathi","department":"Cardialogy","intime":"MON-SAT|08:00AM-12:00PM","src":"assets/doctors/jdoctor.png"},
    {"name":"Dr.Surender","department":"Dental","intime":"MON-SAT|09:30AM-01:30PM","src":"assets/doctors/jdoctor.png"},{"name":"Dr.Seeta","department":"Cardialogy","intime":"MON-SAT|08:30AM-12:30PM","src":"assets/doctors/ldoctor.jpg"},
    {"name":"Dr.Swetha","department":"Family Physician","intime":"MON-SAT|09:00AM-01:00PM","src":"assets/doctors/ldoctor.jpg"},{"name":"Dr.Madhukar","department":"Family Physician","intime":"MON-SAT|10:00AM-03:00PM","src":"assets/doctors/jdoctor.png"},
    {"name":"Dr.Manolmani","department":"Dental","intime":"MON-SAT|08:30AM-01:30PM","src":"assets/doctors/ldoctor.jpg"},{"name":"Dr.Mahalaxmi","department":"Diabetalogy","intime":"MON-SAT|09:00AM-01:00PM","src":"assets/doctors/ldoctor.jpg"},
    {"name":"Dr.Malhotra","department":"Pediatrician","intime":"MON-SAT|09:30AM-01:30PM","src":"assets/doctors/jdoctor.png"},{"name":"Dr.Komal","department":"Family Physician","intime":"MON-SAT|08:30AM-12:30PM","src":"assets/doctors/jdoctor.png"},
    {"name":"Dr.Priyanka Patil","department":"Dental","intime":"MON-SAT|08:00AM-12:00PM","src":"assets/doctors/ldoctor.jpg"},{"name":"Dr.Sandhyarani","department":"Pediatrician","intime":"MON-SAT|10:00AM-03:00PM","src":"assets/doctors/ldoctor.jpg"},
    {"name":"Dr.Maheshwar Rao","department":"Cardialogy","intime":"MON-SAT|08:00AM-12:00PM","src":"assets/doctors/jdoctor.png"},{"name":"Dr.Sandeep Sai","department":"Diabetalogy","intime":"MON-SAT|09:30AM-01:30PM","src":"assets/doctors/jdoctor.png"},
    {"name":"Dr.Samuel Thomas","department":"Dental","intime":"MON-SAT|09:30AM-01:30PM","src":"assets/doctors/jdoctor.png"},{"name":"Dr.Satish","department":"Pediatrician","intime":"MON-SAT|09:30AM-12:30PM","src":"assets/doctors/jdoctor.png"}
    ];
    public departments:Array<any>;
    public docs:Array<any>;
    public department:String;
    public doctor:String;
    public dt;
    public min;
    public timings:Array<any>=[];
    public timing;
    public msg;
    public obj;

    constructor(navParams: NavParams){
        this.obj = navParams.data;
        let t=new Date().getHours();
        for(let j=t; j<20; j++){
            this.timings.push(this.pad2(j) +':00-'+ this.pad2(j+1) +':00');
        }
        Observable.interval(1000).subscribe(()=>{
            var x= new Date();
            var y = x.getFullYear()+"-"+this.pad2(x.getMonth()+1)+"-"+this.pad2(x.getDate());
            if(x.getMinutes()==0&&x.getSeconds()==0&&this.dt==y){
                this.timings =[];
                var h = new Date().getHours();
                if(h>=8&&h<20){
                    for(let j=h;j<20;j++){
                        this.timings.push(this.pad2(j) +':00-'+ this.pad2(j+1) +':00');
                    }
                }
            }
        });
        this.min = new Date().getFullYear()+"-"+this.pad2(new Date().getMonth()+1)+"-"+this.pad2(new Date().getDate());
        this.dt = this.min;
        var dep = [];
        for(let i=0; i<this.doctors.length; i++){
            dep.push(this.doctors[i].department);
        }
        this.departments = dep.filter(function(elem, index, self) {
            return index == self.indexOf(elem);
        });
        this.docs = [];
        if(this.department==undefined||this.department==null||this.department==""){
            for(let i=0; i<this.doctors.length; i++){
                this.docs.push(this.doctors[i].name);
            }
        }
    }

    pad2(number){
        return (number < 10 ? '0' : '') + number
    }

    find(){
        this.docs = [];
        var dep = [];
        for(let i=0; i<this.doctors.length; i++){
            dep.push(this.doctors[i].department);
        }
        this.departments = dep.filter(function(elem, index, self) {
            return index == self.indexOf(elem);
        });
        if(this.department==undefined||this.department==null||this.department==""){
            for(let i=0; i<this.doctors.length; i++){
                this.docs.push(this.doctors[i].name);
            }
        }
        else{
          for(let i=0; i<this.doctors.length; i++){
            if(this.doctors[i].department === this.department){
                this.docs.push(this.doctors[i].name);
            }
          }
        }
    }

    search(){
        for(let i=0; i<this.doctors.length; i++){
            if(this.doctor===this.doctors[i].name){
                this.department=this.doctors[i].department;
            }
        }
    }

    getDate(){
        var y = new Date().getFullYear()+"-"+this.pad2(new Date().getMonth()+1)+"-"+this.pad2(new Date().getDate());
        if(this.dt!==y){
            this.timings=[];
            for(let j=8; j<20; j++){
                this.timings.push(this.pad2(j) +':00-'+ this.pad2(j+1) +':00');
            }
        }
        else{
            this.timings =[];
            let t=new Date().getHours();
            for(let j=t; j<20; j++){
                this.timings.push(this.pad2(j) +':00-'+ this.pad2(j+1) +':00');
            }  
        }
    }

    appointment(){
        if(this.doctor===null||this.doctor===""||this.dt==null||this.dt==""||this.timing==null||this.timing==""){
            this.msg ="failed";
        }
        else{
            let obj = { patid:this.obj.patientid,doc:this.doctor,dep:this.department,date:this.dt,time:this.timing};
            console.log(obj);
            this.msg ="success";
            this.doctor = "";
            this.department ="";
            this.timing = "";
        }
    }

}