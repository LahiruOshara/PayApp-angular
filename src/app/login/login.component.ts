import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  f_nic: string;
  f_password: string;
  current_user:any;

  constructor(private db: AngularFireDatabase,
    private router: Router
    ) { }
  ngOnInit() {
  }

  // on click
  onLoginSubmit() {
    console.log('here');
    console.log('after');

   this.db.list('/user',ref=>ref.orderByChild("nic").equalTo(this.f_nic)).valueChanges().subscribe(x=>{
    this.current_user= x[0];
    if(this.current_user!=null){
      if (this.current_user.accountType === 'Admin' && this.f_password==this.current_user.password) {
        console.log("Admin");
        //this.router.navigate(['admin']); // have to set the path in the app-routing.module
        return true;
      }
    
      if (this.current_user.accountType === 'Customer' && this.f_password==this.current_user.password) {
        console.log("Customer")
        //this.router.navigate(['cutomer']);
        return true;
      }

    // do the same to the other users
    }else{
      console.log("User not found")
    }
    });
  }
}
