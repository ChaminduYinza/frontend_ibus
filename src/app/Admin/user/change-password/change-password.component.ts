import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user-service.service'
import Swal from 'sweetalert2'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  passwordChangeForm: FormGroup;
  validTextType: boolean = false;
  email_id: any;
  constructor(private userService: UserService,private formBuilder: FormBuilder,private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => this.email_id = params);
    console.log(this.email_id.email_id)
   }

  ngOnInit() {
    this.passwordChangeForm = this.formBuilder.group({
      currentPsw: [null, Validators.required],
      newPsw: [null, Validators.required],
      confrimPsw: [null, Validators.required],        
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

  changePassword(){

    if(this.passwordChangeForm.value.confrimPsw !=this.passwordChangeForm.value.newPsw){

      Swal("Error!", "Confirm Password did not match !", "warning");

    }else{
      const query = {
        "email":this.email_id.email_id,
        "oldPassword": this.passwordChangeForm.value.currentPsw,
        "newPassword": this.passwordChangeForm.value.newPsw
  
      };
  
      this.userService.changePassword(query).subscribe((res) => {

          Swal("Sucess!", res.msg, "success");
  
      }, (err) => {
        Swal("Error!", err.msg, "warning");
  
      })

    }

  }

}
