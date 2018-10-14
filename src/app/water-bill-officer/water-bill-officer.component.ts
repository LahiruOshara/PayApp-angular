import { Component, OnInit } from '@angular/core';

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
	
  constructor() { 
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
    this.cal();
    this.changeState1();
   }
    changeState1(){
    	this.state1=!this.state1;
    }

    cal(){

    }
    save(){
    
    }


}
