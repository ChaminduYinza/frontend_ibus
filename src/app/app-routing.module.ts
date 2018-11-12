import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ReportsComponent } from './TimeKeeper/reports/reports.component';
import { ScheduleComponent } from './TimeKeeper/schedule/schedule.component';
import { LiveTrackingComponent } from './TimeKeeper/live-tracking/live-tracking.component';
import { GenerateScheduleComponent } from './TimeKeeper/generate-schedule/generate-schedule.component';
import { AddUserComponent } from './Admin/user/add-user/add-user.component';
import { UserComponent } from './Admin/user/user.component'
import { UpdateUserComponent } from './Admin/user/update-user/update-user.component'
import { ChangePasswordComponent } from './Admin/user/change-password/change-password.component';
import { AddBusComponent } from './Admin/bus/add-bus/add-bus.component';
import { UpdateBusComponent } from './Admin/bus/update-bus/update-bus.component';
import { BusComponent } from './Admin/bus/bus.component';
import { ScheduleAdminComponent } from './Admin/schedule/schedule.component';
import { GenerateScheduleAdminComponent } from './Admin/schedule/generate-schedule/generate-schedule.component';
import { AddRouteComponent } from './Admin/bus-route/add-route/add-route.component'
import { BusRouteComponent } from './Admin/bus-route/bus-route.component';
import { UpdateRouteComponent } from './Admin/bus-route/update-route/update-route.component';
import { PassengerCountPredictionComponent } from './Admin/passenger-count-prediction/passenger-count-prediction.component';
import { LoginComponent } from './login/login.component'
import { ProfileComponent } from './Admin/profile/profile.component'


const routes: Routes = [
    { path: '', redirectTo: 'Welcome', pathMatch: 'full' },
    { path: 'Welcome', component: LandingPageComponent },
    { path: 'Login', component: LoginComponent },
    {


        path: 'TimeKeeper', component: SideNavComponent,
        children: [
            { path: 'Schedule', component: ScheduleComponent },
            { path: 'Livemap', component: LiveTrackingComponent },
            { path: 'GenerateSchedule', component: GenerateScheduleComponent },
            { path: 'Profile', component: ProfileComponent },
            { path: 'ChangePassword/:email_id', component: ChangePasswordComponent },
            { path: '**', component: LiveTrackingComponent, pathMatch: 'full' }
        ]
    },
    {
        path: 'Admin', component: SideNavComponent,
        children: [
            { path: 'AddUser', component: AddUserComponent },
            { path: 'User', component: UserComponent },
            { path: 'editUser/:user_id', component: UpdateUserComponent },
            { path: 'ChangePassword/:email_id', component: ChangePasswordComponent },
            { path: 'AddBus', component: AddBusComponent },
            { path: 'editBus', component: UpdateBusComponent },
            { path: 'Bus', component: BusComponent },
            { path: 'Schedule', component: ScheduleAdminComponent },
            { path: 'GenerateSchedule', component: GenerateScheduleAdminComponent },
            { path: 'AddRoute', component: AddRouteComponent },
            { path: 'Route', component: BusRouteComponent },
            { path: 'Profile', component: ProfileComponent },
            { path: 'editRoute/:route_id', component: UpdateRouteComponent },
            { path: 'editBus/:bus_id', component: UpdateBusComponent },
            { path: 'predictionResults', component: PassengerCountPredictionComponent }
        ]
    },

];

@NgModule({
    declarations: [
    ],
    imports: [
        MaterialModule,
        RouterModule.forRoot(
            routes,
            { useHash: true }
        ),
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule { }