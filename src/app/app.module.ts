import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from "../app/app-routing.module"
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "../app/material.module";
import { ReportsComponent } from './TimeKeeper/reports/reports.component';
import { ScehduleComponent } from './TimeKeeper/scehdule/scehdule.component';
import { LiveTrackingComponent } from './TimeKeeper/live-tracking/live-tracking.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SideNavComponent,
    ReportsComponent,
    ScehduleComponent,
    LiveTrackingComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
