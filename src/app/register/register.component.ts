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
  users: any[];
  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.getusers();
  }

  getusers() {
    console.log('hello');
    return this.db.object('/users').set({name: 'Bata'});
//      console.log(this.users);

  }

}

