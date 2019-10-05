import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {error} from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new  User();
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.userService.register(this.user).subscribe(response => {
      this.router.navigateByUrl('/login');
      // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log(error);
    });
  }
}
