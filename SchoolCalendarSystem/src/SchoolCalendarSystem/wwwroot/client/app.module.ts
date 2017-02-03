import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
import { HttpModule } from '@angular/http';
import { AppComponent } from './components/app/app.component';
import { AppointmentComponent } from "./components/appointment/appointment.component";
import { CalendarComponent } from "./components/calendar/calendar.component";
import NavMenuComponent  from "./components/navmenu/navmenu.component";
import LoginComponent from './components/login/login.component';
import  AlertComponent from "./components/alert/alert.component";
import { UnlessDirective} from "./directives/alert.directive";

const appRoutes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'calendar', component: CalendarComponent },
    { path: 'appointment', component: AppointmentComponent },
    { path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [BrowserModule, HttpModule,ReactiveFormsModule,RouterModule.forRoot(appRoutes),NKDatetimeModule],
    declarations: [AppComponent, AppointmentComponent, CalendarComponent, NavMenuComponent, LoginComponent, AlertComponent, UnlessDirective],   
    bootstrap: [AppComponent]
})

export class AppModule { }