import { Component, VERSION } from '@angular/core';
import { AppUserAuth } from './app-user-auth';
import { SecurityService } from './security.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  securityObject: AppUserAuth = null;
  constructor(private securityService: SecurityService) {
    this.securityObject = securityService.securityObject;
}
logout(): void {
  this.securityService.logout();
}


}
