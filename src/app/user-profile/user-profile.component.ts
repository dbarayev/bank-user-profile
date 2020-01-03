import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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

  //Edit Mode
  openEditMode : boolean = false;
  //Create reactive form group
  userEditForm = new FormGroup({
    address1: new FormControl(''),
    address2: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl('')
  });

  getUsers() : void {
    this.userProfileService.getUsers()
    .subscribe(user => {
      this.user = user; 
      this.userEditForm.setValue({
        address1: user[0].address1,
        address2: user[0].address2,
        phone: user[0].phone,
        email: user[0].email
      });
    });
  }

  editUserInfo() : void {
    this.openEditMode = true;
  }

  ngOnInit() {
    this.getUsers();
  }

}