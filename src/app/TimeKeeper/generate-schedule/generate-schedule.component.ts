import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { RouteServiceService } from '../../services/route-service.service'
import { ScheduleServiceService } from '../../services/schedule-service.service'
import { config } from '../../../../config/config'
import swal from 'sweetalert2';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Router } from '@angular/router'

@Component({
  selector: 'app-generate-schedule',
  templateUrl: './generate-schedule.component.html',
  styleUrls: ['./generate-schedule.component.scss']
})
export class GenerateScheduleComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  minDate = new Date();
  scheduleForm: FormGroup;
  validTextType: any;
  routes = [
    '120 - Colombo - Horana',
    '120 - Colombo - Kesbewa',
    '138 - Colombo - Kottawa',
    '157 - Piliyandala - Madapatha'
  ];

  scheduleTemplate = config.timeSlotTemplate;

  constructor(private formBuilder: FormBuilder, private routeService: RouteServiceService,
    private scheduleService: ScheduleServiceService, private router: Router) { }


  ngOnInit() {
    this.scheduleForm = this.formBuilder.group({
      iterationCount: [null, Validators.required],
      route_no: [null, Validators.required],
      date: [null, Validators.required],
    });
    this.routeService.getRoutes().subscribe((data) => {
      this.routes = data.data
    })
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
    requestBody.date = new Date(requestBody.date).setHours(0, 0, 0, 0);
    this.scheduleService.generateSchedule(requestBody).subscribe((data) => {
      if (data.data == config.scheduleCreatedStatus) {
        this.blockUI.stop();
        this.router.navigateByUrl('User/Schedule')
        this.showAlert('Success', 'Schedule created successfully.', 'success', "btn btn-success");
      }
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
              this.router.navigateByUrl('User/Schedule')
              this.showAlert('Success', 'Schedule created successfully.', 'success', "btn btn-success");
              this.blockUI.stop();
              this.ngOnInit();
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
