import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { RouteServiceService } from '../../../services/route-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-route',
  templateUrl: './update-route.component.html',
  styleUrls: ['./update-route.component.scss']
})
export class UpdateRouteComponent implements OnInit {

  route_id: any;
  routeForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private routeService: RouteServiceService, private router: Router,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => this.route_id = params);
    // console.log(this.route_id.route_id)
   }

  validTextType: boolean = false;
  ngOnInit() {
    this.routeForm = this.formBuilder.group({
      route_no: [null, Validators.required],
      total_km: [null, Validators.required],
      route_from: [null, Validators.required],
      route_to: [null, Validators.required],
      stations: this.formBuilder.array([])
    });

    const query = {
      "route_id": this.route_id.route_id
    };

    this.routeService.getRouteById(query).subscribe((data) => {

      this.routeForm.patchValue({
        route_no: data.msg.route_no,
        route_from: data.msg.route_from,
        route_to:data.msg.route_to,
        total_km:data.msg.total_km,
        stations:data.msg.bus_stops,
      })
      this.patchValues(data.msg)
    });


  }
  patchValues(data) {
    const control = <FormArray>this.routeForm.controls['stations'];
    data.bus_stops.forEach(x => { // iterate the array
       control.push(this.patch(x.name, x.lat,x.lng)) // push values
    });
  }

  patch(name, lat,lng) {
    return this.formBuilder.group({
      name: [name],
      lat: [lat],
      lng:[lng]
    });
  }
  
  get stationForms() {
    return this.routeForm.get('stations') as FormArray
  }
  addPhone() {

    const station = this.formBuilder.group({

      name: [null, Validators.required],
      lat: [null, Validators.required],
      lng: [null, Validators.required]

    })
    this.stationForms.push(station)
  }
  deletePhone(i) {

    this.stationForms.removeAt(i)
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

  editRoute(route_id) {

    const query = {
      "route_id": this.route_id
    };

    const routeData = {
      route_id:this.route_id.route_id,
      route_no: this.routeForm.value.route_no,
      route_from: this.routeForm.value.route_from,
      route_to: this.routeForm.value.route_to,
      total_km: this.routeForm.value.total_km,
      bus_stops: this.routeForm.value.stations,
      allocated_time:"45:00"

    };

    this.routeService.updateRoute(routeData).subscribe((res) => {

      if (res.status) {
        console.log(res);
        Swal("Sucess!", 'Bus Route record successfully updated', "success");
        // this.userEditForm.reset();
      } else {
        Swal("Error!",'Faild to update please try again', "warning");

      }

    }, (err) => {
      Swal("Error!", "Some thing went wrong please try again", "warning");

    })
  }
}
