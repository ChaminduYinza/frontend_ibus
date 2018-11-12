import { Component, OnInit } from '@angular/core';
import { UserService } from '../../app/services/user-service.service';
import { Router } from '@angular/router';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';


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
      console.log(err)
    })


  }

}
