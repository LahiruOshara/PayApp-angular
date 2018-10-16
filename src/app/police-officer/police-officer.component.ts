import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-police-officer',
  templateUrl: './police-officer.component.html',
  styleUrls: ['./police-officer.component.css']
})
export class PoliceOfficerComponent implements OnInit {

  state1 = false;
  id: string;
  discription: number;
  amount: number;
  date: string;

  constructor(private db: AngularFireDatabase) {
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  this.date = yyyy + '/' + mm + '/' + dd;
  }

  ngOnInit() {
  }

onClickSubmit(data) {
    this.id = data.id;
    this.amount = parseFloat(data.amount);
    this.discription = data.discription;
    this.changeState1();
   }
    changeState1() {
      this.state1 = !this.state1;
    }


    save() {
      const obj = {
        amount: this.amount,
        discription: this.discription,
        date: this.date,
      };
      this.db.object('fine/' + this.id).set(obj);

    }



}
