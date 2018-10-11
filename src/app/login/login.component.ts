import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
/*import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';
import { ValidateService } from '../services/validate.service';*/
// import {AngularFireDatabaseModule } 'angularfire2/database';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nic: string;
  password: string;

  constructor(private db: AngularFireDatabase) { }
  user: any;
  ngOnInit() {
  }

  // on click
  onLoginSubmit() {
    const user = {
      nic: this.nic,
      password: this.password
    };

   // this.db.object('/users/' + user.nic)

  }
}
