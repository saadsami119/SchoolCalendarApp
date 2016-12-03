import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Toast } from "../../models/toast.model";
import { UiToast } from "../../interfaces/toast.interface";
import { Appointment } from "../../models/appointment.model";
import { AppointmentService } from "../../services/appointment.service";
import { AuthService } from '../../services/auth.service';
import { RouterService } from "../../services/router.service";

@Component({
    moduleId: module.id,
    selector: "appoitnment",
    templateUrl: "appointment.component.html"
})

export class AppointmentComponent implements OnInit, UiToast {
    appointmentForm: FormGroup;
    toast: Toast;

    constructor(private formBuilder: FormBuilder,
        private appointmentService: AppointmentService,
        private authService: AuthService,
        private routerService: RouterService) {

          if (this.authService.isUserNotAuthenticated()) {
            this.routerService.navigateToRoute("login");
            return;
        }
    }

    ngOnInit() {
        this.appointmentForm = this.formBuilder.group({
            startDate: [null, Validators.required],
            startTime: [null, Validators.required],
            endDate: [null, Validators.required],
            endTime: [null, Validators.required],
            description: [null, Validators.required]
        });
        this.toast = new Toast();
    }

    createAppointment(appoinmentVm: AppointmentViewModel, isValid: boolean): void {

        let time: number = appoinmentVm.startDate.getTime();
        appoinmentVm.startDate.setTime(time);

        time = appoinmentVm.endTime.getTime();
        appoinmentVm.endDate.setTime(time);

        let appointment: Appointment = new Appointment(appoinmentVm.startDate, appoinmentVm.endDate, appoinmentVm.description);

        this.appointmentService.createNewAppointment(appointment)
            .subscribe(__ => {
                this.toast.successToast("Appointment is created!", "Info!");
            }, error => {
                alert(error); this.toast.errorToast(error, "Error!");
            });
    }
}

export class AppointmentViewModel {
    startDate: Date;
    startTime: Date;
    endDate: Date;
    endTime: Date;
    description: string;
}