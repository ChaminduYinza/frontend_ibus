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
  },
  {
    icon: "settings",
    item: "Settings",
    routerLink: "./Settings"
  }
  ]

  admin = [{
    icon: "person",
    item: "Users",
    routerLink: "./User"
  },

  {
    icon: "assignment",
    item: "Bus",
    routerLink: "./Bus"
  },
  {
    icon: "insert_chart",
    item: "Bus Route",
    routerLink: "./Route"
  },
  {
    icon: "assignment",
    item: "Generate Schedules",
    routerLink: "./GenerateSchedule"
  },
  {
    icon: "assignment",
    item: "Bus Schedules",
    routerLink: "./Schedule"
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
  }
  ]
  constructor(private router: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private userService: UserService) {
    this.mobileQuery = media.matchMedia('(max-width: 700px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  @ViewChild('snav') public toggle: any;
  ngOnInit() {
    this.toggle.toggle();
    console.log(this.userService.getLoggedInUser().loggedInUserRole)
    this.userService.getLoggedInUser().loggedInUserRole == '3' ? this.sideMenu = this.admin : this.sideMenu = this.timeKeeper
  }

  signOut() {
    this.router.navigate(['/SignIn']);
  }




}
