import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import Appointment from "../../models/appointment.model";
import AppointmentService from "../../services/appointment.service";
import AuthService from '../../services/auth.service';
import RouterService from "../../services/router.service";
import Alert from "../../models/alert.model"

@Component({
    moduleId: module.id,
    selector: "appoitnment",
    templateUrl: "appointment.component.html"
})

export class AppointmentComponent implements OnInit {
    appointmentForm: FormGroup;
    startDatePickerOption: any;
    alerts: Array<Alert>;

    constructor(private formBuilder: FormBuilder,
        private appointmentService: AppointmentService,
        private authService: AuthService,
        private routerService: RouterService) {
        if (!this.authService.isUserLoggedIn()) {
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
            description: ''
            //description: ['', Validators.required]
        });

        this.startDatePickerOption = {
            startDate: new Date(2016, 5, 10),
            autoclose: true,
            todayBtn: 'linked',
            todayHighlight: true,
            assumeNearbyYear: true,
            format: 'D, d MM yyyy',
            placeholder:'Start on'
        }
        this.alerts = new Array<Alert>();
    }

    createAppointment(appoinmentVm: AppointmentViewModel, isValid: boolean): void {

        let hours: number = appoinmentVm.startTime.getHours();
        let minutes: number = appoinmentVm.startTime.getMinutes();

        appoinmentVm.startDate.setHours(hours);
        appoinmentVm.startDate.setMinutes(minutes);

        hours = appoinmentVm.endTime.getHours();
        minutes = appoinmentVm.endDate.getMinutes();

        appoinmentVm.endDate.setHours(hours);
        appoinmentVm.endDate.setHours(minutes);

        let appointment: Appointment = new Appointment(appoinmentVm.startDate,
            appoinmentVm.endDate,
            appoinmentVm.description,
            this.authService.getLogedInUserId());

        this.appointmentService.createNewAppointment(appointment)
            .subscribe(__ => {
                this.alerts.push(new Alert("Appointment has been created !", "success", "Success !"));
            }, error => {
                this.alerts.push(new Alert(error, "error", "Failure !"));
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