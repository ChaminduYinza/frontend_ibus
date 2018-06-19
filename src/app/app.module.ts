import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "../app/material.module";
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ReportsComponent } from './TimeKeeper/reports/reports.component';
import { ScheduleComponent } from './TimeKeeper/schedule/schedule.component';
import { LiveTrackingComponent } from './TimeKeeper/live-tracking/live-tracking.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from "../app/app-routing.module";
import { AgmCoreModule } from '@agm/core';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { GenerateScheduleComponent } from './TimeKeeper/generate-schedule/generate-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ReportsComponent,
    ScheduleComponent,
    LiveTrackingComponent,
    LandingPageComponent,
    GenerateScheduleComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    MalihuScrollbarModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDN6xOeAcpl6eRmbgtccJ36KiSRXKa6X04'
    })

  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
