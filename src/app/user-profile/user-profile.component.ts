import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserProfileService } from '../services/user-profile.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less']
})
export class UserProfileComponent implements OnInit {
  constructor(private userProfileService : UserProfileService) { }
  
  user : User;

  getUsers() : void {
    this.userProfileService.getUsers()
    .subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.getUsers();
  }

}