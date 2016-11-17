﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './components/app/app.component';
import { AppointmentComponent } from "./components/appointment/appointment.component";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { NavMenuComponent } from "./components/navmenu/navmenu.component";
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    
    { path: '', redirectTo: 'calendar', pathMatch: 'full'},
    { path: 'calendar', component: CalendarComponent },
    { path: 'appointment', component: AppointmentComponent }
];
    
@NgModule({
    imports: [BrowserModule,
             ReactiveFormsModule,
             RouterModule.forRoot(appRoutes),
        NKDatetimeModule],
    declarations: [AppComponent, AppointmentComponent, CalendarComponent, NavMenuComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }