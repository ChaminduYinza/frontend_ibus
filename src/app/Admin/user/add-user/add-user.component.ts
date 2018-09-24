import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user-service.service'
import Swal from 'sweetalert2'



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  validTextType: boolean = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      contactNo: [null, Validators.required],
      password: [null, Validators.required]

    });
  }


  textValidationType(e) {
    if (e) {
      this.validTextType = true;
    } else {
      this.validTextType = false;
    }
  }
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).touched;
  }
  displayFieldCss(form: FormGroup, field: string) {
    return {
      'has-error': this.isFieldValid(form, field),
      'has-feedback': this.isFieldValid(form, field)
    };
  }
  registerUser() {

    const user = {
      first_name: this.userForm.value.firstName,
      last_name: this.userForm.value.lastName,
      email: this.userForm.value.email,
      contact_no: this.userForm.value.contactNo,
      password: this.userForm.value.password,
      role:3,// role

    };

    this.userService.registerUser(user).subscribe((res) => {

      if (res.status) {
        Swal("Sucess!", res.msg, "success");
        this.userForm.reset();
      } else {
        Swal("Error!",res.msg, "warning");

      }

    }, (err) => {
      Swal("Error!", err.msg, "warning");

    })
  }
}