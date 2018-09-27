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
  scheduleForm: FormGroup;
  routes = [
    '120 - Colombo - Horana',
    '120 - Colombo - Kesbewa',
    '138 - Colombo - Kottawa',
    '157 - Piliyandala - Madapatha'
  ];

  scheduleTemplate = [
    {
      "startTime": "04.00",
      "endTime": "06.30",
      "fixedInterval": "30",
      "noOfBusses": "6",
      "passengerAverage": [10, 25, 20, 30, 45]
    },
    {
      "startTime": "06.30",
      "endTime": "07.30",
      "fixedInterval": "10",
      "noOfBusses": "9",
      "passengerAverage": [50, 54, 53, 58, 70, 90]
    },
    {
      "startTime": "07.30",
      "endTime": "08.30",
      "fixedInterval": "15",
      "noOfBusses": "8",
      "passengerAverage": [85, 75, 82, 81]
    },
    {
      "startTime": "08.30",
      "endTime": "10.00",
      "fixedInterval": "20",
      "noOfBusses": "8",
      "passengerAverage": [73, 68, 47, 40, 48]
    },
    {
      "startTime": "10.00",
      "endTime": "12.30",
      "fixedInterval": "30",
      "noOfBusses": "7",
      "passengerAverage": [45, 47, 55, 62, 71]
    },
    {
      "startTime": "12.30",
      "endTime": "13.30",
      "fixedInterval": "15",
      "noOfBusses": "8",
      "passengerAverage": [77, 75, 68, 81]
    },
    {
      "startTime": "13.30",
      "endTime": "14.30",
      "fixedInterval": "10",
      "noOfBusses": "13",
      "passengerAverage": [77, 85, 90, 72, 67, 62]
    },
    {
      "startTime": "14.30",
      "endTime": "15.30",
      "fixedInterval": "15",
      "noOfBusses": "5",
      "passengerAverage": [65, 68, 59, 51]
    },
    {
      "startTime": "15.30",
      "endTime": "16.30",
      "fixedInterval": "30",
      "noOfBusses": "3",
      "passengerAverage": [50, 48]
    },
    {
      "startTime": "16.30",
      "endTime": "18.30",
      "fixedInterval": "30",
      "noOfBusses": "6",
      "passengerAverage": [50, 48, 80, 85]
    },
    {
      "startTime": "18.30",
      "endTime": "20.30",
      "fixedInterval": "30",
      "noOfBusses": "8",
      "passengerAverage": [50, 48, 80, 85]
    },
    {
      "startTime": "20.30",
      "endTime": "23.00",
      "fixedInterval": "30",
      "noOfBusses": "8",
      "passengerAverage": [65, 50, 30, 15, 5]
    }
  ]

  constructor(private formBuilder: FormBuilder, private routeService: RouteServiceService,
    private scheduleService: ScheduleServiceService, private router: Router) { }


  ngOnInit() {
    this.scheduleForm = this.formBuilder.group({
      iterationCount: [null, Validators.required],
      route_no: [null, Validators.required],
    });
    this.routeService.getRoutes().subscribe((data) => {
      this.routes = data.data
    })
  }

  generateSchedule() {
    this.blockUI.start('Resouce allocation is being executing, Please wait!');
    let requestBody = this.scheduleForm.value;
    requestBody.recreate = false;
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
