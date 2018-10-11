import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';
import { ValidateService } from '../services/validate.service';
// import {AngularFireDatabaseModule } 'angularfire2/database';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private messages: FlashMessagesService,
    private validate: ValidateService
  ) { }

  ngOnInit() {
  }

  // on click
  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    if (this.validate.validateSignIn(user)) {
      this.messages.show( 'Enter Details', {
        cssClass: 'alert-danger',
        timeOut: 5000 });
      return false;
    }

    this.authenticationService.authenticateUser(user).subscribe(data => {
      // console.log(data);
      if (data.success) {
        // console.log(data.token);
        this.authenticationService.storeUserdata(data.token, data.user);
        if (data.user.accountType === 'Admin') {
          this.router.navigate(['admin']);
          return true;
        }
        if (data.user.accountType === 'Teacher') {
          this.router.navigate(['teachers']);
          return true;
        }


        if (data.user.accountType === 'parent' || data.user.accountType === 'Parent' ) {

          this.router.navigate(['parent']);

          return true;
        }
      } else {
        this.messages.show(data.msg, {
          cssClass: 'alert-danger',
          timeOut: 5000 });
      }
    });
  }



}


