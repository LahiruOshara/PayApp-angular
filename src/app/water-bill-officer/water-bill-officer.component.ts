import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-water-bill-officer',
  templateUrl: './water-bill-officer.component.html',
  styleUrls: ['./water-bill-officer.component.css']
})
export class WaterBillOfficerComponent implements OnInit {

	state1=false;
	id:string;
  val:number;
  units:number;
  name:string;
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
    this.id=data.id;
    this.val=parseInt(data.reading);
    var users;
    users = this.db.list('/Waterreadings/'+this.id);
    users.snapshotChanges().subscribe(item =>{
        //this.units=this.val-parseInt(item[3].payload.node_.value_);
      });

    this.cal();
    this.changeState1();
   }
    changeState1(){
    	this.state1=!this.state1;
    }

    cal(){

    }
    save(){
      var obj={
        val:this.val,
        amount:this.amount,
        date:this.date,
      }
      this.db.object('Waterreadings/' + this.id).set(obj);

    }


}
