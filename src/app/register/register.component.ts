import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase } from 'angularfire2/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fullname: String;
  address: String;
  nic: String;
  dob: any;
  actype: String;
  // user:any;
  constructor(
    private db: AngularFireDatabase
    ) {


  }

  ngOnInit() {
  }
  onRegisterSubmit() {
    console.log('submitted');
      const user = {
      fullName: this.fullname,
      nic: this.nic,

    };
    // return this.db.
  }

}

