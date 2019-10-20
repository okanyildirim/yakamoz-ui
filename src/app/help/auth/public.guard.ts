import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {


constructor() {

}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return undefined;
  }
/*  constructor(private authServ: AuthService, private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(this.authServ.getUserLoggedIn());
      if (this.authServ.getUserLoggedIn() == null) {
        return true;
      }
       if(!this.authServ.getUserLoggedIn()) {
         return true;
       } else {
          this.router.navigate(['/atlas']);
          return false;
       }
  }*/
}
