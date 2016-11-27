"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var toast_model_1 = require("../../models/toast.model");
var appointment_service_1 = require("../../services/appointment.service");
var AppointmentComponent = (function () {
    function AppointmentComponent(formBuilder, appointmentService) {
        this.formBuilder = formBuilder;
        this.appointmentService = appointmentService;
    }
    AppointmentComponent.prototype.ngOnInit = function () {
        this.appointmentForm = this.formBuilder.group({
            startDateTime: this.formBuilder.group({
                date: ["", forms_1.Validators.required],
                time: ["", forms_1.Validators.required]
            }),
            endDateTime: this.formBuilder.group({
                date: ["", forms_1.Validators.required],
                time: ["", forms_1.Validators.required]
            }),
            description: [null, forms_1.Validators.required]
        });
        this.toast = new toast_model_1.Toast();
    };
    AppointmentComponent.prototype.createAppointment = function (appoinment, isValid) {
        var start = appoinment.startDateTime.date;
        start.setTime(appoinment.startDateTime.time.getTime());
        var end = appoinment.endDateTime.date;
        end.setTime(appoinment.endDateTime.time.getTime());
        console.log(start, end);
        //this.appointmentService.createNewAppointment(appoinment)
        //    .subscribe(isAppointmentCreated => {
        //        this.toast.errorToast("Appointment is created!", "caption");
        //    }, error => { this.toast.errorToast(error, "Error!"); });
    };
    AppointmentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "appoitnment",
            templateUrl: "appointment.component.html"
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, appointment_service_1.AppointmentService])
    ], AppointmentComponent);
    return AppointmentComponent;
}());
exports.AppointmentComponent = AppointmentComponent;
//# sourceMappingURL=appointment.component.js.map