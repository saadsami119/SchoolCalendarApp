import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppointmentComponent } from "./components/appointment/appointment.component";
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';


    
@NgModule({
    imports: [BrowserModule,
        ReactiveFormsModule,
        NKDatetimeModule],
    declarations: [AppComponent, AppointmentComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }