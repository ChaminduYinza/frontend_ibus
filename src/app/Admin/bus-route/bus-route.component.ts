import { Component, OnInit, ViewChild } from '@angular/core';
import { RouteServiceService } from '../../../app/services/route-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-bus-route',
    templateUrl: './bus-route.component.html',
    styleUrls: ['./bus-route.component.scss']
})
export class BusRouteComponent implements OnInit {

    routeList: any;
    constructor(private routeService: RouteServiceService, private router: Router) { }
    modalData: any = [];
    @ViewChild("orangeModalSubscription") allcoationModal;
    ngOnInit() {
        this.getRoutes();
    }

    getRoutes() {
        this.routeService.getRoutes().subscribe((data) => {
            console.log(data)
            this.routeList = data.data;
        })
    }

    editRoute(route_id) {
        this.router.navigate(['Admin/editRoute', route_id]);
    }

    deleteRoute(route_id, index) {

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
                    "route_id": route_id
                };

                this.routeService.removeRoute(query).subscribe((res) => {

                    if (res.status) {
                        Swal("Sucess!", res.msg, "success");
                        this.routeList.splice(index, 1);
                    } else {
                        Swal("Error!", res.msg, "warning");

                    }

                }, (err) => {
                    Swal("Error!", err.msg, "warning");

                })
            }

        })


    }
    openScheduleModal(data) {

        // console.log(data);
        this.modalData=data;
        this.allcoationModal.show();
    }
    onOpen(event: any) {
        console.log(event);
    }
}
