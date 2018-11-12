import { Component, OnInit } from '@angular/core';
import {BusService} from '../../services/bus-service.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

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

  deleteBus(bus_id, index) {


    Swal({
        title: 'Are you sure?',
        text: "It will permanently deleted !",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.value) {

        const query = {
            "bus_id": bus_id
        };
        console.log(query)

        this.busService.removeBus(query).subscribe((res) => {

            if (res.status) {
                Swal("Sucess!", res.msg, "success");
                this.busList.splice(index, 1);
            } else {
                Swal("Error!", res.msg, "warning");

            }

        }, (err) => {
            Swal("Error!", err.msg, "warning");

        })
    }

    })


}

}
