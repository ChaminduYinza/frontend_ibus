import { Component, OnInit } from '@angular/core';
import { ScheduleServiceService } from '../../services/schedule-service.service';
import { RouteServiceService } from '../../services/route-service.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Router } from '@angular/router'
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import swal from 'sweetalert2';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  routes = [];
  allocation: any = []
  scheduleForm: FormGroup;
  validTextType: boolean;
  constructor(
    private scheduleService: ScheduleServiceService,
    private routeService: RouteServiceService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.scheduleForm = this.formBuilder.group({
      route: [null, Validators.required],
      date: [null, Validators.required],
    })
    this.routeService.getRoutes().subscribe((data) => {
      this.routes = data.data;
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

  viewSchedule() {

    const formValues = this.scheduleForm.value
    this.blockUI.start('Loading...');
    this.scheduleService.getSchedule({ route: formValues.route, date: new Date(formValues.date).setHours(0, 0, 0, 0) }).subscribe((data) => {
      this.blockUI.stop();
      this.allocation = data.data[0].allocation;
    }, (error) => {
      this.blockUI.stop();
      this.showAlert('oops!', error.msg, 'error', 'btn btn-danger');
    })
  }

  generateSchedule() {
    this.router.navigateByUrl('User/GenerateSchedule')
  }

  exportAsPDF() {
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options  
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });
  }

  /**
   * show alert message
   * @param title
   * @param message
   * @param type
   */
  showAlert(title, message, type, button) {
    swal({
      title: title,
      text: message,
      type: type,
      confirmButtonClass: button,
      buttonsStyling: false
    });
  }
}
