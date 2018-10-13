import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { FlashMessagesService} from 'angular2-flash-messages';
import { ValidateService } from '../services/validate.service';

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
    private validate: ValidateService
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
      if (this.current_user.accountType === 'Admin' && this.f_password === this.current_user.password) {
        console.log('Admin');
        // this.router.navigate(['admin']); // have to set the path in the app-routing.module
        return true;
      } else if (this.current_user.accountType === 'Customer' && this.f_password === this.current_user.password) {
        console.log('Customer');
        // this.router.navigate(['customer']);
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
