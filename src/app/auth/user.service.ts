import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from './user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = environment.AUTH_HOST + 'auth/users';
  constructor(private http: HttpClient) { }

  register(userRegistrationRequest: User): Observable<any> {
    return this.http.post(this.userUrl, userRegistrationRequest);
  }

  login(userLoginRequest: User) {
    return this.http.post(this.userUrl + '/login', userLoginRequest);

  }
  getUsers() {
    return this.http.get(this.userUrl);
  }

  getUser(id: number): any {
    return this.http.get<any>(this.userUrl + '/' +  id);
  }
}
