import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocationServiceService } from '../../services/location-service.service'
import { RouteServiceService } from '../../services/route-service.service'
import { Subscription } from 'rxjs';
import { config } from '../../../../config/config'
import { BlockUI, NgBlockUI } from 'ng-block-ui';
@Component({
  selector: 'app-live-tracking',
  templateUrl: './live-tracking.component.html',
  styleUrls: ['./live-tracking.component.scss']
})
export class LiveTrackingComponent implements OnInit, OnDestroy {
  @BlockUI() blockUI: NgBlockUI;
  routes: any;
  busids: any;
  subscription: Subscription;
  public scrollbarOptions = { axis: "y", theme: "dark-thin" };
  latitude: number = 8.5922;
  longitude: number = 81.19679580000002;
  zoom: number = 14;
  public origin: {}
  public destination: {}
  public renderOptions: any
  waypoints: object = []
  markers: any;
  styles = config.mapStyle;
  sortByBus: Boolean = false;
  filteredBusMarkers: any = []
  busList: any;
  icon: any = {
    url: "../../../assets/images/pin.svg",
    scaledSize: {
      width: "1px",
      height: "1px"
    }
  }

  constructor(private locationService: LocationServiceService, private routeService: RouteServiceService) {
    locationService.SendUserID("Yinza");
  }
  ngOnInit() {
    this.setDirections();
    this.routeService.getRoutes().subscribe((data) => {
      this.routes = data.data;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  setDirections() {
    this.subscription = this.locationService.getLocations().subscribe((data) => {
      // data = JSON.parse(JSON.stringify(data))
      if (Array.isArray(data['tracker'])) {
        if (!this.sortByBus) {
          this.markers = []
          data['tracker'].forEach(element => {
            this.markers.push(
              {
                lat: +element.latitude,
                lng: +element.longitude,
                icon: '../../../assets/images/pin.png',
                id: element._id,
                bus_id: element.bus
              }
            )
          });
        }
      } else {
        this.markers = []
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

  onChangeRoute(event) {
    this.routeService.getActiveBussesByRoute({ route_id: event.value, onGoingStatus: "Active" }).subscribe((data) => {
      this.busids = data.data
    })
  }
  onChangeBus(event) {
    let scope = this
    this.blockUI.start('Loading...');
    if (this.markers.length > 0) {
      this.filteredBusMarkers = []
      this.sortByBus = true;
      this.markers.forEach(function (element, idx) {
        if (element.bus_id == event.value) {
          console.log(element)
          scope.filteredBusMarkers.push(element)
        }
      });
    } else {
      this.sortByBus = false;
    }
    this.blockUI.stop();
  }
}