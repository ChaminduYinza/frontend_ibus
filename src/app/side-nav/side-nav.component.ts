import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  public scrollbarOptions = { axis: "y", theme: "dark-thin" };

  constructor(private router: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 700px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  @ViewChild('snav') public toggle: any;
  ngOnInit() {
    this.toggle.toggle();
  }

  signOut() {
    this.router.navigate(['/SignIn']);
  }


  sideMenu = [{
    icon: "dashboard",
    item: "Tracking",
    routerLink: "./Livemap"
  },
  {
    icon: "insert_chart",
    item: "Analytic Reports",
    routerLink: "./Reports"
  },
  {
    icon: "assignment",
    item: "Bus Schedules",
    routerLink: "./Schedule"
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

}
