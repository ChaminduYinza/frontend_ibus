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
import { AgmDirectionModule } from 'agm-direction';
import { UserComponent } from './Admin/user/user.component';
import { AddUserComponent } from './Admin/user/add-user/add-user.component';
import { UpdateUserComponent } from './Admin/user/update-user/update-user.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChangePasswordComponent } from './Admin/user/change-password/change-password.component';
import { BusComponent } from './Admin/bus/bus.component';
import { UpdateBusComponent } from './Admin/bus/update-bus/update-bus.component';
import { AddBusComponent } from './Admin/bus/add-bus/add-bus.component';
import { ScheduleAdminComponent } from './Admin/schedule/schedule.component';
import { GenerateScheduleAdminComponent } from './Admin/schedule/generate-schedule/generate-schedule.component';
import { UserService } from './services/user-service.service';
import { HttpModule } from '@angular/http';
import { JwtService } from '../app/services/jwt-service.service';
import { BusRouteComponent } from './Admin/bus-route/bus-route.component';
import { AddRouteComponent } from './Admin/bus-route/add-route/add-route.component';
import { BlockUIModule } from 'ng-block-ui';
import { UpdateRouteComponent } from './Admin/bus-route/update-route/update-route.component';
import { BusService } from '../app/services/bus-service.service';
import { PassengerCountPredictionComponent } from './Admin/passenger-count-prediction/passenger-count-prediction.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './Admin/profile/profile.component'

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
        WarningListComponent,
        ScheduleAdminComponent,
        UserComponent,
        AddUserComponent,
        UpdateUserComponent,
        ChangePasswordComponent,
        BusComponent,
        UpdateBusComponent,
        GenerateScheduleAdminComponent,
        AddBusComponent,
        BusRouteComponent,
        AddRouteComponent,
        UpdateRouteComponent,
        PassengerCountPredictionComponent,
        LoginComponent,
        ProfileComponent
    ],
    imports: [
        BrowserModule,
        MalihuScrollbarModule.forRoot(),
        MDBBootstrapModule.forRoot(),
        BlockUIModule.forRoot(),
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule,
        HttpModule,
        NgxEchartsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDN6xOeAcpl6eRmbgtccJ36KiSRXKa6X04'
        }),
        AgmDirectionModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule

    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [FormBuilder, UserService, JwtService, BusService],
    bootstrap: [AppComponent]
})
export class AppModule { }
