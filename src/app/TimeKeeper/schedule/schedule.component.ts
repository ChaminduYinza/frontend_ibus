import { Component, OnInit } from '@angular/core';
import { ScheduleServiceService } from '../../services/schedule-service.service';
import { RouteServiceService } from '../../services/route-service.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  routes = [];
  allocation: any;
  constructor(private scheduleService: ScheduleServiceService, private routeService: RouteServiceService) { }

  ngOnInit() {
    this.routeService.getRoutes().subscribe((data) => {
      this.routes = data.data;
    })
  }

  onChange(event) {
    console.log(new Date())

    this.scheduleService.getSchedule({ route: event.value, date: "2018-09-24 " }).subscribe((data) => {
      console.log(data.data[0].allocation)
      this.allocation = data.data[0].allocation;
    })
  }
}
