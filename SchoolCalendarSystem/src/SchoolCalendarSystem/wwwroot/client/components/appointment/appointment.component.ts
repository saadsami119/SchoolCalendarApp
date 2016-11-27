import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Toast } from "../../models/toast.model";
import { UiToast } from "../../interfaces/toast.interface";
import { Appointment } from "../../models/appointment.model";
import { AppointmentService } from "../../services/appointment.service";

@Component({
    moduleId: module.id,
    selector: "appoitnment",
    templateUrl: "appointment.component.html"
})

export class AppointmentComponent implements OnInit, UiToast {
    appointmentForm: FormGroup;
    toast: Toast;

    constructor(private formBuilder: FormBuilder,
        private appointmentService: AppointmentService) {
    }

    ngOnInit() {
        this.appointmentForm = this.formBuilder.group({
            startDateTime: this.formBuilder.group({
                date: ["", Validators.required],
                time: ["", Validators.required]
            }),
            endDateTime: this.formBuilder.group({
                date: ["", Validators.required],
                time: ["", Validators.required]
            }),
            description: [null, Validators.required]
        });
        this.toast = new Toast();
    }

    createAppointment(appoinment: any, isValid: boolean): void {

        let start: Date = appoinment.startDateTime.date;
        start.setTime(appoinment.startDateTime.time.getTime());

        let end: Date = appoinment.endDateTime.date;
        end.setTime(appoinment.endDateTime.time.getTime());

        console.log(start, end);

        //this.appointmentService.createNewAppointment(appoinment)
        //    .subscribe(isAppointmentCreated => {
        //        this.toast.errorToast("Appointment is created!", "caption");
        //    }, error => { this.toast.errorToast(error, "Error!"); });
    }

}
