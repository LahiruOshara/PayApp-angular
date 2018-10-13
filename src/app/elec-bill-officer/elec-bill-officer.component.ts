import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-elec-bill-officer',
  templateUrl: './elec-bill-officer.component.html',
  styleUrls: ['./elec-bill-officer.component.css']
})
export class ElecBillOfficerComponent implements OnInit {

  constructor() { 
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  this.date = yyyy + '/' + mm + '/' + dd;
  }

  id:string;
  val:number;
  units:number;
  name:string;
  amount:number;
  type:string;
  date:string;
  peak:number;
  day:number;
  offpeak:number;

  state1=false;
state2=true;

  calamount(){

  }
  ngOnInit() {
  }

  cal(){
    if(this.type=="domestic"){
        if(this.units<=60){
          if(this.units<=30){
            this.amount = (this.units*2.50)+30; 
          }
          else{
            this.amount = ((30*2.50)+(this.units-30)*4.85)+60;
          }
        }
        else if(this.units<=90){
          this.amount = ((60*7.85)+(this.units-60)*10.00)+90;
        }
        else if(this.units<=120){
          this.amount = ((60*7.85)+(30*10.00)+(this.units-90)*27.75)+480;
        }
        else if(this.units<=180){
          this.amount = ((60*7.85)+(30*10.00)+(30*27.75)+(this.units-120)*32.00)+480;
        }
        else if(this.units>180){
          this.amount = ((60*7.85)+(30*10.00)+(30*27.75)+(30*32.00)+(this.units-120)*45.00)+540;
        }
        
    }
    else if(this.type=="G-1"){
      if(this.units<=300){
        this.amount=(this.units*18.30)+240;
      }
      else{
        this.amount=(this.units*22.85)+240;
      }
    }
    else if(this.type=="G-2"){
      this.amount=(this.peak*26.60)+(this.day*21.80)+(this.offpeak*15.40)+4100;
    }
    else if(this.type=="G-3"){
      this.amount=(this.peak*25.50)+(this.day*20.70)+(this.offpeak*14.35)+4000;
    }
  }


  onClickSubmit(data) {
    this.id=data.id;
    this.type=data.type;
    if(this.type=="G-2" || this.type=="G-3"){
      this.peak=parseInt(data.peak);
      this.day=parseInt(data.day);
      this.offpeak=parseInt(data.offpeak);
    }
    else{
      this.val=parseInt(data.reading);
    }
      this.cal();
    }

changeState1(){
  this.changeState2();
  this.state1=!this.state1;
}
changeState2(){
  if(this.type=="G-2" || this.type=="G-3"){
    this.state2=false;
  }
  else{
    this.state2=true;
  }
}

onChange(deviceValue) {
    this.type=deviceValue;
}



  save(){
    this.changeState1();
    

  }
 

 




  }
