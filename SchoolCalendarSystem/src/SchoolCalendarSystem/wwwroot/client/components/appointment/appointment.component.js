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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var toast_model_1 = require("../../models/toast.model");
var appointment_model_1 = require("../../models/appointment.model");
var appointment_service_1 = require("../../services/appointment.service");
var auth_service_1 = require("../../services/auth.service");
var router_service_1 = require("../../services/router.service");
var AppointmentComponent = (function () {
    function AppointmentComponent(formBuilder, appointmentService, authService, routerService) {
        this.formBuilder = formBuilder;
        this.appointmentService = appointmentService;
        this.authService = authService;
        this.routerService = routerService;
        if (!this.authService.isUserAuthenticated()) {
            this.routerService.navigateToRoute("login");
            return;
        }
    }
    AppointmentComponent.prototype.ngOnInit = function () {
        this.appointmentForm = this.formBuilder.group({
            startDate: [null, forms_1.Validators.required],
            startTime: [null, forms_1.Validators.required],
            endDate: [null, forms_1.Validators.required],
            endTime: [null, forms_1.Validators.required],
            description: [null, forms_1.Validators.required]
        });
        this.toast = new toast_model_1.default();
    };
    AppointmentComponent.prototype.createAppointment = function (appoinmentVm, isValid) {
        var _this = this;
        var time = appoinmentVm.startDate.getTime();
        appoinmentVm.startDate.setTime(time);
        time = appoinmentVm.endTime.getTime();
        appoinmentVm.endDate.setTime(time);
        var appointment = new appointment_model_1.default(appoinmentVm.startDate, appoinmentVm.endDate, appoinmentVm.description);
        this.appointmentService.createNewAppointment(appointment)
            .subscribe(function (__) {
            _this.toast.successToast("Appointment is created!", "Info!");
        }, function (error) {
            alert(error);
            _this.toast.errorToast(error, "Error!");
        });
    };
    return AppointmentComponent;
}());
AppointmentComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "appoitnment",
        templateUrl: "appointment.component.html"
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        appointment_service_1.default,
        auth_service_1.default,
        router_service_1.default])
], AppointmentComponent);
exports.AppointmentComponent = AppointmentComponent;
var AppointmentViewModel = (function () {
    function AppointmentViewModel() {
    }
    return AppointmentViewModel;
}());
exports.AppointmentViewModel = AppointmentViewModel;
//# sourceMappingURL=appointment.component.js.map