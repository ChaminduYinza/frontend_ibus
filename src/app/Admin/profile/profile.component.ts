import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service.service'
import Swal from 'sweetalert2'

import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UserService,private router: Router) { }
  userID: any;
  emailID:any;
  userEditForm: FormGroup;

  ngOnInit() {


    this.userEditForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      contactNo: [null, Validators.required],
      role: [null, Validators.required]


    });
    this.userID = this.userService.getLoggedInUser().loggedInUserId
    this.emailID = this.userService.getLoggedInUser().loggedInUserEmail
    const query = {
      "user_id": this.userID
    };

    this.userService.getUserbyId(query).subscribe((data) => {
      this.userEditForm.patchValue({
        firstName: data.data.first_name,
        lastName: data.data.last_name,
        email: data.data.email,
        contactNo: data.data.contact_no,
        role: data.data.role
      })
    });

  }
  editProfile() {


    const user = {
      user_id: this.userID,
      first_name: this.userEditForm.value.firstName,
      last_name: this.userEditForm.value.lastName,
      email: this.userEditForm.value.email,
      contact_no: this.userEditForm.value.contactNo,
    };

    this.userService.updateUser(user).subscribe((res) => {

      if (res.status) {
        Swal("Sucess!", res.msg, "success");
        // this.userEditForm.reset();
      } else {
        Swal("Error!", res.msg, "warning");

      }

    }, (err) => {
      Swal("Error!", err.msg, "warning");

    })
  }
  changePsw(email) {
    console.log(email)
    this.router.navigate(['Admin/ChangePassword', email]);
  }

}
