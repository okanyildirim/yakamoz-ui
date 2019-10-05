import { Component, OnInit } from '@angular/core';
import {User} from '../../auth/user';
import {UserService} from '../../auth/user.service';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {

  users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      }
    );
  }

}
