import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user-service.service'
import { BusService } from '../../../services/bus-service.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  user_id: any;
  userEditForm: FormGroup;
  busList:any;
  userData:any
  validTextType: boolean = false;

  constructor(private busService: BusService,private userService: UserService, private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => this.user_id = params);

  }

  ngOnInit() {

    this.userEditForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      contactNo: [null, Validators.required],
    });

    const query = {
      "user_id": this.user_id.user_id
    };

    this.userService.getUserbyId(query).subscribe((data) => {

      this.userData= data.data;
      console.log(this.userData);
      this.userEditForm.patchValue({
        firstName: data.data.first_name,
        lastName: data.data.last_name,
        email:data.data.email,
        contactNo:data.data.contact_no
      
      })
    });
    this.getBuses();

  }
  getBuses() {
    this.busService.getBus().subscribe((data) => {

      this.busList = data.data;
    })
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

  editUser(user_id) {

    const query = {
      "user_id": this.user_id
    };

    const user = {
      user_id:this.user_id.user_id,
      first_name: this.userEditForm.value.firstName,
      last_name: this.userEditForm.value.lastName,
      bus_id: this.userEditForm.value.busNo,
      contact_no: this.userEditForm.value.contactNo,

    };

    this.userService.updateUser(user).subscribe((res) => {

      if (res.status) {
        Swal("Sucess!", res.msg, "success");
        // this.userEditForm.reset();
      } else {
        Swal("Error!",res.msg, "warning");

      }

    }, (err) => {
      Swal("Error!", err.msg, "warning");

    })
  }



}
