import { Component, OnInit } from '@angular/core';
import {RouteService} from '../../../app/services/route-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-route',
  templateUrl: './bus-route.component.html',
  styleUrls: ['./bus-route.component.scss']
})
export class BusRouteComponent implements OnInit {

  routeList: any;
  constructor(private routeService: RouteService, private router: Router) { }

  ngOnInit() {
      this.getRoutes();
  }

  getRoutes() {
      this.routeService.getRoutes().subscribe((data) => {
          console.log(data)
          this.routeList = data.msg;
      })
  }

  editRoute(route_id) {
      this.router.navigate(['Admin/editRoute',route_id]);
  }

}
