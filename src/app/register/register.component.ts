import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase } from 'angularfire2/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import * as CryptoTS from 'crypto-ts';
import { FlashMessagesService} from 'angular2-flash-messages';
import { ValidateService } from '../services/validate.service';
 


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName: String;
  middleName: String;
  lastName: String;
  accountType: String;
  address: String;
  mobileNo: String;
  email: String;
  nic: String;
  password: any;
  dob: any;
  actype: String;
  // user:any;
  constructor(
    private db: AngularFireDatabase,
    private messages: FlashMessagesService,
    private validate: ValidateService,
    ) {


  }

  ngOnInit() {
 
    
    
    
  }
  onRegisterSubmit() {

    if (this.validate.validateRegister(this.firstName, this.middleName, this.lastName, this.accountType, this.address, this.mobileNo, this.nic, this.password ) ) {
      this.messages.show( 'Enter Details', {
        cssClass: 'alert-danger',
        timeOut: 5000 });
        console.log(this.firstName, this.middleName, this.lastName, this.accountType, this.address, this.mobileNo, this.nic, this.password );
      return false;
    }

    console.log('submitted');

    // Password Encryption
    var enc_password = CryptoTS.AES.encrypt(this.password, '#453%678[]#$%^&*%69827849').toString();

    // Password Decrypt
    // var dec_userpass_array  = CryptoTS.AES.decrypt(this.current_user.password, '#453%678[]#$%^&*%69827849');
    // var dec_userpass = dec_userpass_array.toString(CryptoTS.enc.Utf8);

    // console.log(dec_userpass);


    var user = this.db.list("user")
    user.push ({
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      accountType: this.accountType,
      address: this.address,
      mobileNo: this.mobileNo,
      email: this.email,
      nic: this.nic,
      password: enc_password

    });

    
    // return this.db.
  }

}
