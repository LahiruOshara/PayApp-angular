import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-elec-bill-officer',
  templateUrl: './elec-bill-officer.component.html',
  styleUrls: ['./elec-bill-officer.component.css']
})
export class ElecBillOfficerComponent implements OnInit {

  constructor(private db: AngularFireDatabase) {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    this.date = yyyy + '/' + mm + '/' + dd;
  }

  id: string;
  val: number;
  units: number;
  name: string;
  amount: number;
  type: string;
  date: string;
  peak: number;
  day: number;
  offpeak: number;
  peakr: number;
  dayr: number;
  offpeakr: number;
  obj: any;

state1 = false;
state2 = true;


  ngOnInit() {

  }

  cal() {

    if (this.type === 'domestic') {

        if (this.units <= 60) {
          if (this.units <= 30) {
            this.amount = (this.units * 2.50) + 30;
          } else {
            this.amount = ((30 * 2.50) + (this.units - 30) * 4.85) + 60;
          }
        } else if (this.units <= 90) {
          this.amount = ((60 * 7.85) + (this.units - 60) * 10.00) + 90;
        } else if (this.units <= 120) {


          this.amount = ((60 * 7.85) + (30 * 10.00) + (this.units - 90) * 27.75) + 480;
        } else if (this.units <= 180) {
          this.amount = ((60 * 7.85) + (30 * 10.00) + (30 * 27.75) + (this.units - 120) * 32.00) + 480;
        } else if (this.units > 180) {

          this.amount = ((60 * 7.85) + (30 * 10.00) + (30 * 27.75) + (30 * 32.00) + (this.units - 120) * 45.00) + 540;
        }

    } else if (this.type === 'G-1') {
      if (this.units <= 300) {
        this.amount = (this.units * 18.30) + 240;
      } else {
        this.amount = (this.units * 22.85) + 240;
      }
    } else if (this.type === 'G-2') {
      this.amount = (this.peak * 26.60) + (this.day * 21.80) + (this.offpeak * 15.40) + 4100;
    } else if (this.type === 'G-3') {
      this.amount = (this.peak * 25.50) + (this.day * 20.70) + (this.offpeak * 14.35) + 4000;
    }

  }




  onClickSubmit(data) {


    this.id = data.id;
    this.type = data.type;
    if (this.type === 'G-2' || this.type === 'G-3') {
      // tslint:disable-next-line:radix
      this.peakr = parseInt(data.peak);
      // tslint:disable-next-line:radix
      this.dayr = parseInt(data.day);
      // tslint:disable-next-line:radix
      this.offpeakr = parseInt(data.offpeak);
      let users;
      users = this.db.list('/readings/' + this.id);
        users.snapshotChanges().subscribe(item => {
          // tslint:disable-next-line:radix
          this.peak = this.peakr - parseInt(item[4].payload.node_.value_);
          // tslint:disable-next-line:radix
          this.day = this.dayr - parseInt(item[2].payload.node_.value_);
          // tslint:disable-next-line:radix
          this.offpeak = this.offpeakr - parseInt(item[3].payload.node_.value_);
        });
    } else {
      // tslint:disable-next-line:radix
      this.val = parseInt(data.reading);
      let users;
      users = this.db.list('/readings/' + this.id);
      users.snapshotChanges().subscribe(item => {
        // tslint:disable-next-line:radix
        this.units = this.val - parseInt(item[3].payload.node_.value_);

      });
      }

    this.cal();


      this.changeState1();


    }





changeState1() {
  this.changeState2();
  this.state1 = !this.state1;
}
changeState2() {
  if (this.type === 'G-2' || this.type === 'G-3') {
    this.state2 = false;
  } else {
    this.state2 = true;
  }
}



onChange(deviceValue) {
    this.type = deviceValue;
}



  save() {
    if (this.type === 'G-2' || this.type === 'G-3') {
      this.obj = {
        amount: this.amount,
        peakr: this.peakr,
        dayr: this.dayr,
        offpeakr: this.offpeakr,
        date: this.date
      };
    } else {
    this.obj = {
        amount: this.amount,
        units: this.units,
        val: this.val,
        date: this.date
      };

    }
    this.changeState1();
    this.db.object('readings/' + this.id).set(this.obj);

  }


}
