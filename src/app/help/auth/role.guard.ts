import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlSegment, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate, CanActivateChild {
  
  constructor(){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return undefined;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return undefined;
  }

 /* canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log("canActivateChild:");
    console.log("state:" + state.url);
    let isDealing = state.url.includes('dealing');
    console.log('isDealing:' + isDealing);
    return true;
  }

  roles = ROLE_ARRAY;

  constructor(private authServ: AuthService, private router: Router, private alert: AlertService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    var expectedRoles: string[] = next.data.expectedRoles;
    for (let value of this.authServ.getUserRole()) {
      if (expectedRoles.includes(value)) {
        return true;
      }
    }
    this.alert.error("Your access is denied for this service.");
    return false;
  }*/
}
