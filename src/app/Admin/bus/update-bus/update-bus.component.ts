import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BusService } from '../../../services/bus-service.service'
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import {RouteService} from '../../../services/route-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-bus',
  templateUrl: './update-bus.component.html',
  styleUrls: ['./update-bus.component.scss']
})
export class UpdateBusComponent implements OnInit {

  bus_id: any;
  busEditForm: FormGroup;
  validTextType: boolean = false;
  routeList:any;

  constructor(private routeService:RouteService,private busService: BusService, private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => this.bus_id = params);
    // console.log(this.bus_id.bus_id)
  }

  ngOnInit() {

    this.getRoutes();

    this.busEditForm = this.formBuilder.group({
      busNo: [null, Validators.required],
      busType: [null, Validators.required],
      owner: [null, Validators.required],
      ownerContactNo: [null, Validators.required],
      noOfSeats: [null, Validators.required],
      routeNo: [null, Validators.required],
      driver: [null, Validators.required],
      driverContactNo: [null, Validators.required],
    });

    const query = {
      "bus_id": this.bus_id.bus_id
    };

    this.busService.getBusById(query).subscribe((data) => {
      // console.log(data);
      this.busEditForm.patchValue({
        busNo: data.data.busNo,
        busType: data.data.busType,
        owner: data.data.owner,
        ownerContactNo: data.data.ownerContactNo,
        noOfSeats: data.data.noOfSeats,
        routeNo: data.data.routeNo._id,
        driver: data.data.driverName,
        driverContactNo: data.data.driverContact
      })
    }, (error) => {
      console.log(error);
    });
  }
  getRoutes() {
    this.routeService.getRoutes().subscribe((data) => {
        // console.log(data.msg)
        this.routeList = data.msg;
    })
  }

  textValidationType(e) {
    if (e) {
      this.validTextType = true;
    } else {
      this.validTextType = false;
    }
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

  editBus(bus_id) {

    const query = {
      "bus_id": this.bus_id
    };

    const bus = {
      bus_id:this.bus_id.bus_id,
      busNo: this.busEditForm.value.busNo,
      busType: this.busEditForm.value.busType,
      owner: this.busEditForm.value.owner,
      ownerContactNo: this.busEditForm.value.ownerContactNo,
      noOfSeats: this.busEditForm.value.noOfSeats,
      routeNo: this.busEditForm.value.routeNo,
      driverName: this.busEditForm.value.driver,
      driverContact: this.busEditForm.value.driverContactNo,

    };
    // console.log(bus);
    this.busService.updateBus(bus).subscribe((res) => {

      if (res.status) {
        Swal("Sucess!", res.msg, "success");
        // this.userEditForm.reset();
      } else {
        Swal("Error!",res.msg, "warning");

      }

    }, (err) => {
     
      Swal("Error!", err.msg, "warning");

    })
  }


}
