import { Component, OnInit } from '@angular/core';
import { UserService } from '../../app/services/user-service.service';
import { Router } from '@angular/router';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  validTextType: boolean = false;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {

  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],

    });
  }

  login() {

    let loginUser = {
      email: this.loginForm.value.username,
      password: this.loginForm.value.password

    };

    this.userService.attemptLogin(loginUser).subscribe((data) => {
      data.data.role == 'Admin' ? this.router.navigateByUrl('Admin/User') : this.router.navigateByUrl('TimeKeeper')
    }, (err) => {
      this.showAlert('oops!', err.msg, 'error', "btn btn-danger");
    })


  }

  /**
* show alert message
* @param title 
* @param message 
* @param type 
*/
  showAlert(title, message, type, button) {
    swal(
      {
        title: title,
        text: message,
        type: type,
        confirmButtonClass: button,
        buttonsStyling: false
      }
    )
  }

}
