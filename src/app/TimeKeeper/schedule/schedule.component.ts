import { Component, OnInit } from '@angular/core';
import { ScheduleServiceService } from '../../services/schedule-service.service';
import { RouteServiceService } from '../../services/route-service.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  routes = [];
  allocation: any;
  constructor(private scheduleService: ScheduleServiceService, private routeService: RouteServiceService) { }

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
}
