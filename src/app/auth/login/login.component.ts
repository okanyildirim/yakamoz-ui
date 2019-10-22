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
      if (response) {
        this.router.navigateByUrl('dashboard');
      } else {
        alert('Parola ve ya email yanlış gardaş');
      }
    }, error1 => {
      alert('http error');
    });
  }
}
