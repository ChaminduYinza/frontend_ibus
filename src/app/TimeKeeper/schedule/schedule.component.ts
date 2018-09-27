import { Component, OnInit } from '@angular/core';
import { ScheduleServiceService } from '../../services/schedule-service.service';
import { RouteServiceService } from '../../services/route-service.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Router } from '@angular/router'
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  routes = [];
  allocation: any = []
  constructor(private scheduleService: ScheduleServiceService, private routeService: RouteServiceService, private router: Router) { }

  ngOnInit() {
    this.routeService.getRoutes().subscribe((data) => {
      this.routes = data.data;
    })
  }

  onChange(event) {
    this.blockUI.start('Loading...');
    this.scheduleService.getSchedule({ route: event.value, date: new Date().setHours(0, 0, 0, 0) }).subscribe((data) => {
      this.blockUI.stop();
      this.allocation = data.data[0].allocation;
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
}
