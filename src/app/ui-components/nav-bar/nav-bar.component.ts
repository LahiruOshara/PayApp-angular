import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }
  getAuthenticationService() {
    return this.authenticationService;
  }


  onLogoutClick() {
    this.authenticationService.logOut();
    // this.messages.show('You are logged out', {cssClass: 'alert-success', timeout: 5000});
    this.router.navigate(['']);
    return false;
  }

  onClickHome() {
    const type = this.authenticationService.returnType();
    if (type === 'Admin') {
      this.router.navigate(['admin-home']);
      return true;
    }
    if (type === 'Customer') {
      this.router.navigate(['customer']);
      return true;
    }
    if (type === 'Elec. Bill Officer') {
      this.router.navigate(['elecBillOfficer']);
      return true;
    }
    if (type === 'Tax Officer') {
      this.router.navigate(['tax-officer']);
      return true;
    }
    if (type === 'Police Officer') {
      this.router.navigate(['polic-officer']);
      return true;
    }
    if (type === 'Water Bill Officer') {
      this.router.navigate(['waterBillOfficer']);
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
