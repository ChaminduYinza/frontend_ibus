import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  passwordChangeForm: FormGroup;
  validTextType: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

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
    console.log(this.passwordChangeForm.value.newPsw)
  }

}
