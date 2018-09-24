import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.scss']
})
export class AddBusComponent implements OnInit {
  busForm: FormGroup;
  validTextType: boolean = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.busForm = this.formBuilder.group({
      busNo: [null, Validators.required],
      busType: [null, Validators.required],
      owner: [null, Validators.required],
      ownerContactNo: [null, Validators.required],
      noOfSeats: [null, Validators.required],
      routeNo: [null, Validators.required],
      driver: [null, Validators.required],
      driverContactNo: [null, Validators.required],
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

  addBus(){
    console.log(this.busForm.value.status)
  }

}
