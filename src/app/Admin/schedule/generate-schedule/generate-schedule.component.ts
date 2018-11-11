import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { RouteServiceService } from '../../../services/route-service.service';
import { ScheduleServiceService } from '../../../services/schedule-service.service'
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { config } from '../../../../../config/config'
import swal from 'sweetalert2';
import { Router } from '@angular/router'


@Component({
  selector: 'app-generate-schedule',
  templateUrl: './generate-schedule.component.html',
  styleUrls: ['./generate-schedule.component.scss']
})
export class GenerateScheduleAdminComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  scheduleForm: FormGroup;
  validTextType: any;
  routeList: any;
  constructor(private formBuilder: FormBuilder, private routeService: RouteServiceService, private scheduleService: ScheduleServiceService, private router: Router) { }


  ngOnInit() {

    this.getRoutes();

    this.scheduleForm = this.formBuilder.group({
      generation: [null, Validators],
      population: [null, Validators],
      crossover: [null, Validators],
      mutation: [null, Validators],
      route_no: [null, Validators.required],
    });

  }
  getRoutes() {
    this.routeService.getRoutes().subscribe((data) => {
      this.routeList = data.data;
    })
  }
  settings() {

    this.scheduleForm.patchValue({
      generation: 250,
      population: 15,
      crossover: 0.6,
      mutation: 0.1
    });


  }
  textValidationType(e) {
    e ? (this.validTextType = true) : (this.validTextType = false);
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


  generateSchedule() {



    this.blockUI.start('Resouce allocation is being executing, Please wait!');
    let requestBody = this.scheduleForm.value;
    requestBody.recreate = false;
    requestBody.type = "GA";
    requestBody.date = new Date().setHours(0, 0, 0, 0);
    this.scheduleService.generateSchedule(requestBody).subscribe((data) => {
      this.showAlert('Success', 'Schedule created successfully.', 'success', "btn btn-success");
      this.blockUI.stop();
    }, (error) => {
      this.blockUI.stop();
      if (error.msg == config.scheduleAlreadyExsits) {
        swal({
          title: 'Are you sure?',
          text: "There is already a schedule available for today, Do you want to re-create?",
          type: 'warning',
          showCancelButton: true,
          confirmButtonClass: 'btn btn-success',
          cancelButtonClass: 'btn btn-danger',
          confirmButtonText: 'Yes, re-create it!',
          buttonsStyling: false
        }).then((result) => {
          if (result.value) {
            this.blockUI.start('Resouce allocation is being executing, Please wait!');
            requestBody.recreate = true;
            this.scheduleService.generateSchedule(requestBody).subscribe((data) => {
              this.showAlert('Success', 'Schedule created successfully.', 'success', "btn btn-success");
              this.blockUI.stop();
            }, (error) => {
              this.showAlert('oops!', error.msg, 'error', "btn btn-danger");
            })
          }
        });
      }
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
