import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocationServiceService } from '../../services/location-service.service'
import { Subscription } from 'rxjs';
import { config } from '../../../../config/config'
@Component({
  selector: 'app-live-tracking',
  templateUrl: './live-tracking.component.html',
  styleUrls: ['./live-tracking.component.scss']
})
export class LiveTrackingComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  public scrollbarOptions = { axis: "y", theme: "dark-thin" };
  lat: number = 6.91451;
  lng: number = 79.97214;
  zoom: number = 13;
  public origin: {}
  public destination: {}
  public renderOptions: any
  waypoints: object = []
  markers: any;
  styles = config.mapStyle;
  icon: any = {
    url: "../../../assets/images/pin.svg",
    scaledSize: {
      width: "1px",
      height: "1px"
    }
  }

  constructor(private locationService: LocationServiceService) {
    locationService.SendUserID("Yinza");
  }
  routes = [
    '120 - Colombo - Horana',
    '120 - Colombo - Kesbewa',
    '138 - Colombo - Kottawa',
    '157 - Piliyandala - Madapatha'
  ];
  busids = [
    'B001',
    'B002',
    'B003',
    'B004',
    'B005',
    'B006',
    'B007',
    'B008',
    'B009',
    'B0010',
    'B0011',
    'B0012'
  ];


  ngOnInit() {
    this.setDirections();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  setDirections() {
    this.subscription = this.locationService.getLocations().subscribe((data) => {
      this.markers = []
      if (data['tracker'] != 'No active trackers') {
        data['tracker'].forEach(element => {
          this.markers.push(
            {
              lat: +element.latitude,
              lng: +element.longitude,
              icon: '../../../assets/images/pin.png',
              id: element._id
            }
          )
        });
      }
    }, (err) => {
      console.log(err)
    })
    this.origin = { lat: 6.906137, lng: 79.928606 }
    this.destination = { lat: 6.9360721, lng: 79.983174 }

    this.waypoints = [
      {
        location: { lat: 6.90389, lng: 79.954812 },
        stopover: false,
      },
      {
        location: { lat: 6.90389, lng: 79.954812 },
        stopover: false,
      }]

    this.markers = [
      {
        lat: 6.914508,
        lng: 79.972141,
        icon: '../../../assets/images/pin.png'
      }
    ]

  }
}