import { Component, OnInit } from '@angular/core';
import {BusService} from '../../services/bus-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss']
})
export class BusComponent implements OnInit {

  busList: any;
  constructor(private busService: BusService, private router: Router) { }

  ngOnInit() {
      this.getBuses();
  }

  getBuses() {
      this.busService.getBus().subscribe((data) => {
          console.log(data)
          this.busList = data.data;
      })
  }

  editBus(bus_no) {
      this.router.navigate(['Admin/editBus', bus_no]);
  }

}
