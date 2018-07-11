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
import { NgxEchartsModule } from "ngx-echarts";
import { BusStatusComponent } from './TimeKeeper/reports/widgets/pie-charts/bus-status/bus-status.component';
import { WarningListComponent } from './TimeKeeper/reports/widgets/tables/warning-list/warning-list.component';
import { AgmDirectionModule } from 'agm-direction'

@NgModule({
    declarations: [
        AppComponent,
        SideNavComponent,
        ReportsComponent,
        ScheduleComponent,
        LiveTrackingComponent,
        LandingPageComponent,
        GenerateScheduleComponent,
        BusStatusComponent,
        WarningListComponent
    ],
    imports: [
        BrowserModule,
        MalihuScrollbarModule.forRoot(),
        MDBBootstrapModule.forRoot(),
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule,
        NgxEchartsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDN6xOeAcpl6eRmbgtccJ36KiSRXKa6X04'
        }),
        AgmDirectionModule      

    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
