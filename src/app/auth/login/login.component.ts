import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new User();
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.user).subscribe(response => {
      this.router.navigateByUrl('dashboard');
      // tslint:disable-next-line:no-shadowed-variable
      this.router.navigateByUrl('dashboard');

    });
  }
}
