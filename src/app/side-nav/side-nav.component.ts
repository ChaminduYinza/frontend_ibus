import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service.service'
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  public scrollbarOptions = { axis: "y", theme: "dark-thin" };
  userName: any;
  sideMenu: any

  timeKeeper = [{
    icon: "dashboard",
    item: "Tracking",
    routerLink: "./Livemap"
  },

  {
    icon: "assignment",
    item: "Bus Schedules",
    routerLink: "./Schedule"
  },
  {
    icon: "insert_chart",
    item: "Analytic Reports",
    routerLink: "./Reports"
  },
  {
    icon: "assignment",
    item: "Generate Schedules",
    routerLink: "./GenerateSchedule"
  },
  {
    icon: "account_circle",
    item: "Profile",
    routerLink: "./Profile"
  }
  ]

  admin = [{
    icon: "person",
    item: "Users",
    routerLink: "./User"
  },
  {
    icon: "insert_chart",
    item: "Bus Route",
    routerLink: "./Route"
  },

  {
    icon: "assignment",
    item: "Bus",
    routerLink: "./Bus"
  },

  // {
  //   icon: "assignment",
  //   item: "Generate Schedules",
  //   routerLink: "./GenerateSchedule"
  // },
  {
    icon: "assignment",
    item: "Bus Schedules",
    routerLink: "./GenerateSchedule"
  },
  {
    icon: "account_circle",
    item: "Profile",
    routerLink: "./Profile"
  },
  {
    icon: "settings",
    item: "Settings",
    routerLink: "./Settings"
  },
  {
    icon: "settings",
    item: "Passenger Count",
    routerLink: "./predictionResults"
  }
  ]
  constructor(private router: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private userService: UserService) {
    this.mobileQuery = media.matchMedia('(max-width: 700px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  @ViewChild('snav') public toggle: any;
  ngOnInit() {
    this.userName = this.userService.getLoggedInUser().loggedInUserEmail
    this.toggle.toggle();
    this.userService.getLoggedInUser().loggedInUserRole == 'Admin' ? this.sideMenu = this.admin : this.sideMenu = this.timeKeeper
  }

  signOut() {
    this.router.navigate(['/Login']);
  }

}
