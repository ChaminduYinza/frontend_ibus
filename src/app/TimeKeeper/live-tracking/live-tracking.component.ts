import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-tracking',
  templateUrl: './live-tracking.component.html',
  styleUrls: ['./live-tracking.component.scss']
})
export class LiveTrackingComponent implements OnInit {
  public scrollbarOptions = { axis: "y", theme: "dark-thin" };
  lat: number = 6.91451;
  lng: number = 79.97214;
  zoom: number = 13;
  public origin: {}
  public destination: {}
  public renderOptions: any

  waypoints: object = []
  // lines = [{
  //   lat: 6.906079,
  //   lng: 79.969628
  // }, {
  //   lat: 6.930831,
  //   lng: 79.984218
  // }]


  constructor() { }
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
  setDirections() {
    this.origin = { lat: 6.906137, lng: 79.928606 }
    this.destination = { lat: 6.9360721, lng: 79.983174 }

    this.renderOptions = {
      draggable: true,
      suppressMarkers: true,
      suppressInfoWindows: false,
      markerOptions: { // effect all markers
        icon: '../../../assets/images/busMarker.png',
      },
    }
    // this.waypoints = [
    //   {
    //     location: { lat: 6.9033, lng: 79.955 },
    //     stopover: false,
    //   },
    //   {
    //     location: { lat: 6.9036, lng: 79.9547 },
    //     stopover: false,
    //   }]

  }
}
 // lines = [{
  //   lat: 6.906079,
  //   lng: 79.969628
  // }, {
  //   lat: 6.930831,
  //   lng: 79.984218
  // }]