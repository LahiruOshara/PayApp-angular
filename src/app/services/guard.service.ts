import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class GuardService implements CanActivate  {

  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }

    canActivate() {
      if (this.authenticationService.loggedIn()) {
        return true;
      } else {
        // routing to the login page
        this.router.navigate(['/login']);
        return true;
      }
    }
}
