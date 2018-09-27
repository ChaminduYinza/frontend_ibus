import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import {BusService} from '../../../services/bus-service.service'
import {RouteService} from '../../../services/route-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.scss']
})
export class AddBusComponent implements OnInit {
  busForm: FormGroup;
  validTextType: boolean = false;
  constructor(private formBuilder: FormBuilder,private busService:BusService,private routeService:RouteService) { }

  routeList:any;


  busTypes = [
    'A/C',
    'NON A/C',
  ];

  ngOnInit() {

    this.getRoutes();

    this.busForm = this.formBuilder.group({
      busNo: [null, Validators.required],
      busType: [null, Validators.required],
      owner: [null, Validators.required],
      ownerContactNo: [null, Validators.required],
      noOfSeats: [null, Validators.required],
      routeNo: [null, Validators.required],
      driver: [null, Validators.required],
      driverContactNo: [null, Validators.required],
    });
    

    
  }

getRoutes() {
    this.routeService.getRoutes().subscribe((data) => {
        console.log(data.msg)
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

  addBus(){
    const bus = {
      busNo: this.busForm.value.busNo,
      busType: this.busForm.value.busType,
      owner: this.busForm.value.owner,
      ownerContactNo: this.busForm.value.ownerContactNo,
      noOfSeats: this.busForm.value.noOfSeats,
      routeNo: this.busForm.value.routeNo,
      driverName: this.busForm.value.driver,
      driverContact: this.busForm.value.driverContactNo,
      totalRevenue:0

    };

    this.busService.addBus(bus).subscribe((res) => {

      if (res.status) {
        Swal("Sucess!", res.msg, "success");
        this.busForm.reset();
      } else {
        Swal("Error!",res.msg, "warning");

      }

    }, (err) => {
      Swal("Error!", err.data, "warning");

    })
  }

}
