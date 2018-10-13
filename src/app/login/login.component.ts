import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
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
  user: any;
  accountType: string;
  users: any;

  constructor(private db: AngularFireDatabase,
    private router: Router
    ) { }
  ngOnInit() {
    this.onLoginSubmit();
    console.log(this.users);
  }

  // on click
  onLoginSubmit() {
    console.log('here');
    const users = {
      nic: this.nic,
      password: this.password,
      accountType: this.accountType
    };
    console.log('after');

   // tslint:disable-next-line:no-unused-expression
   // somehow get the user information
   this.users = this.db.list('/users/' + this.nic);

   // do the same to the other users
   if (users.accountType === 'Admin') {
    this.router.navigate(['admin']); // have to set the path in the app-routing.module
    return true;
  }

  if (users.accountType === 'Customer') {
    this.router.navigate(['cutomer']);
    return true;
  }
  if (users.accountType === 'elecBillOfficer') {
    this.router.navigate(['elecBillOfficer']);
    return true;
  }

  }
}
