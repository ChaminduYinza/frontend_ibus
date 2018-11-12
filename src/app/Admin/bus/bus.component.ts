import { Component, OnInit } from '@angular/core';
import { BusService } from '../../services/bus-service.service'
import { Router } from '@angular/router';
import { RouteServiceService } from '../../services/route-service.service';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-bus',
    templateUrl: './bus.component.html',
    styleUrls: ['./bus.component.scss']
})
export class BusComponent implements OnInit {

    busList: any;
    constructor(private routeService: RouteServiceService, private busService: BusService, private router: Router) { }
    routeList: any;
    ngOnInit() {
        this.getBuses();
        this.getRoutes();
        
    }
    getRoutes() {
        this.routeService.getRoutes().subscribe((data) => {
            console.log(data)
            this.routeList = data.data;
        })
    }
    getBuses() {
        this.busService.getBus().subscribe((data) => {
            console.log(data)
            this.busList = data.data;
        })
    }
    getBusByRouteId(query) {

        console.log(query)


        return this.busList.filter(function (el) {
            return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
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
