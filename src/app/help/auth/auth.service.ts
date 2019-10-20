import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}
/*
  tokensUrl =  environment.HOST + 'tokens';
  usersUrl =  environment.HOST + 'users';
  captchaUrl = environment.HOST + 'captcha';
  private isLoggedIn: boolean;
  private userRole = '';

  constructor(private http: HttpClient,
              private router: Router) {
    this.isLoggedIn = false;
  }

  registration(inputObj): Observable<ResponseObj> {
    return this.http.post(this.usersUrl + '/', inputObj);
  }

  updateUser(id: number, inputObj): Observable<BaseApiResponse> {
    return this.http.patch<BaseApiResponse>(this.usersUrl + '/' + id, inputObj);
  }

  verifyUser(id: number): Observable<ResponseObj> {
    return this.http.put(this.usersUrl + '/' + id + '/verify/', null);
  }

  notVerifyUser(id: number): Observable<ResponseObj> {
    return this.http.delete(this.usersUrl + '/' + id + '/verify/');
  }

  loginUser(logininput): Observable<any> {
    return this.http.post(this.tokensUrl + '/', logininput);
  }

  validate(token): Observable<any> {
    return this.http.get(this.tokensUrl + '/' + token);
  }

  listusers(): Observable<any> {
    return this.http.get(this.usersUrl + '/');
  }

  getToken(): string {
    return sessionStorage.getItem('token');
  }

  logOut() {
    const token = this.getToken().replace('Bearer ', '');
    this.setUserLoggedIn(false);
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user.role');
    sessionStorage.removeItem('userID');
    sessionStorage.removeItem('email');
    this.http.delete(this.tokensUrl + '/invalidate');
    this.router.navigateByUrl('/login');
  }

  setLoggedInUserId(id) {
    localStorage.setItem('user.id', id);
  }

  getLoggedInUserId() {
    return parseInt(localStorage.getItem('user.id'));
  }

  setUserLoggedIn(isLoggedIn: boolean) {
    sessionStorage.setItem('isLoggedIn', isLoggedIn + '');
  }

  getUserLoggedIn() {
    if (sessionStorage.getItem('isLoggedIn') == null) {
      return false;
    }
    return Boolean(JSON.parse(sessionStorage.getItem('isLoggedIn')));
  }

  setUserRole(role) {
    this.userRole = role;
  }

  getUserRole(): string[] {
    return JSON.parse(sessionStorage.getItem('user.role'));
  }

  checkUserRole(role) {
    if (this.userRole === role) {
      return true;
    } else {
      return false;
    }
  }

  getCaptchaURL(captchaType: string, captchaId: string) {
    return this.http.get(this.captchaUrl + '/generate/' + captchaType + '/' + captchaId);
  }
  matchCaptcha(captcha: Captcha): Observable<boolean> {
    return this.http.get<boolean>(this.captchaUrl + '/match/' + captcha.id + '/' + captcha.challenge);
  }
*/

}
