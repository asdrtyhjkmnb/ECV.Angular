import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public oidcSecurityService: OidcSecurityService) { }

  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken }) => {
      console.log('app authenticated', isAuthenticated);
      console.log(`Current access token is '${accessToken}'`);
      console.log(userData);
    });
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  callApi() {
    this.oidcSecurityService.logoff();
  }
}
