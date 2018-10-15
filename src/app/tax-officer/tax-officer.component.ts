import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-tax-officer',
  templateUrl: './tax-officer.component.html',
  styleUrls: ['./tax-officer.component.css']
})
export class TaxOfficerComponent implements OnInit {

  state1=false;
	nic:string;
  	discription:number;
  amount:number;
  date:string;
	
  constructor(private db: AngularFireDatabase) { 
  	var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  this.date = yyyy + '/' + mm + '/' + dd;
  }

  ngOnInit() {
  }

  onClickSubmit(data) {
    this.nic=data.nic;
    this.amount=parseFloat(data.amount);
    this.discription=data.discription;
    this.changeState1();
   }
    changeState1(){
    	this.state1=!this.state1;
    }

    
    save(){
      var obj={
        amount:this.amount,
        discription:this.discription,
        date:this.date,
      }
      this.db.object('tax/' + this.nic).set(obj);

    }


}
