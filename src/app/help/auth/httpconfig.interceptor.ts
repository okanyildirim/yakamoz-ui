import { Injectable, Injector } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import {  throwError } from 'rxjs';
import { AlertService } from '../main/alert.service';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return undefined;
  }
   /* constructor(
        private auth: AuthService,
        private alert: AlertService,
        private router: Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.auth.getToken()) {
            const cloned = request.clone({
               headers: new HttpHeaders({
                    'Access-Control-Allow-Origin':  '/!*',
                    'Authorization': this.auth.getToken(),
                  }),
                withCredentials:true
            });
            return next.handle(cloned).pipe(
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401) {
                        if (error.error !== null) {
                            this.alert.error(error.error.description);
                        } else {
                            this.alert.error("Unauthorized!");
                        }
                        sessionStorage.removeItem('token');
                        this.router.navigateByUrl('/login');
                        return null;
                    }
                    return throwError(error);
                }));
        } else {
            return next.handle(request).pipe(
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401) {
                        if (error.error !== null) {
                            this.alert.error(error.error.description);
                        } else {
                            this.alert.error("Unauthorized!");
                        }
                        this.router.navigateByUrl('/login');
                    }
                    if (error.error != null) {
                        console.log('err int: ', error.error);
                    }

                    return throwError(error);
                }));
        }
    }*/

}
