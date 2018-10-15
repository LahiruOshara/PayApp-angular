import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { FlashMessagesService} from 'angular2-flash-messages';
import { ValidateService } from '../services/validate.service';
import {AuthenticationService} from '../services/authentication.service';
import * as CryptoTS from 'crypto-ts';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  f_nic: string;
  f_password: string;
  current_user: any;

  constructor(private db: AngularFireDatabase,
    private router: Router,
    private messages: FlashMessagesService,
    private validate: ValidateService,
    private authService: AuthenticationService,
    ) { }
  ngOnInit() {
  }

  // on click
  onLoginSubmit() {

    if (this.validate.validateSignIn(this.f_nic, this.f_password)) {
      this.messages.show( 'Enter Details', {
        cssClass: 'alert-danger',
        timeOut: 5000 });
        console.log('Empty!!');
      return false;
    }

   this.db.list('/user', ref => ref.orderByChild('nic').equalTo(this.f_nic)).valueChanges().subscribe(x => {
    this.current_user = x[0];
    if (this.current_user != null) {
      // saving to the session storage
      this.authService.storeUserdata(this.current_user);
      // console.log(this.current_user);

      // Decript & Validating Password
      const dec_userpass_array  = CryptoTS.AES.decrypt(this.current_user.password, '#453%678[]#$%^&*%69827849');
      const dec_userpass = dec_userpass_array.toString(CryptoTS.enc.Utf8);

      if (this.current_user.accountType === 'Admin' && this.f_password === dec_userpass) {
        console.log('Admin');
        this.router.navigate(['admin-home']); // have to set the path in the app-routing.module
        return true;
      } else if (this.current_user.accountType === 'Customer' && this.f_password === dec_userpass) {
        console.log('Customer');
        // this.router.navigate(['customer']);
        this.router.navigate(['customer']);
        return true;
      } else if (this.current_user.accountType === 'Elec. Bill Officer' && this.f_password === dec_userpass) {
        this.router.navigate(['elecBillOfficer']);
        return true;
      } else {
        this.messages.show( 'Incorrect password', {
          cssClass: 'alert-danger',
          timeOut: 5000 });
          // console.log('Empty!!');
          console.log('Incorrect password');
        return false;
      }
    } else {
      this.messages.show( 'Incorrect NIC', {
        cssClass: 'alert-danger',
        timeOut: 5000 });
      return false;
      // console.log('Incorrect NIC');
    }
    });
  }
}
