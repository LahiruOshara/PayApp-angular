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

}
