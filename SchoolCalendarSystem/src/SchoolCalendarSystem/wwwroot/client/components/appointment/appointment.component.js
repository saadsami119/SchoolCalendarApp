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
var appointment_model_1 = require("../../models/appointment.model");
var appointment_service_1 = require("../../services/appointment.service");
var auth_service_1 = require("../../services/auth.service");
var router_service_1 = require("../../services/router.service");
var alert_model_1 = require("../../models/alert.model");
var AppointmentComponent = (function () {
    function AppointmentComponent(formBuilder, appointmentService, authService, routerService) {
        this.formBuilder = formBuilder;
        this.appointmentService = appointmentService;
        this.authService = authService;
        this.routerService = routerService;
        if (!this.authService.isUserLoggedIn()) {
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
            description: ''
        });
        this.alerts = new Array();
    };
    AppointmentComponent.prototype.createAppointment = function (appoinmentVm, isValid) {
        var _this = this;
        var hours = appoinmentVm.startTime.getHours();
        var minutes = appoinmentVm.startTime.getMinutes();
        appoinmentVm.startDate.setHours(hours);
        appoinmentVm.startDate.setMinutes(minutes);
        hours = appoinmentVm.endTime.getHours();
        minutes = appoinmentVm.endDate.getMinutes();
        appoinmentVm.endDate.setHours(hours);
        appoinmentVm.endDate.setHours(minutes);
        var appointment = new appointment_model_1.default(appoinmentVm.startDate, appoinmentVm.endDate, appoinmentVm.description, this.authService.getLogedInUserId());
        this.appointmentService.createNewAppointment(appointment)
            .subscribe(function (__) {
            _this.alerts.push(new alert_model_1.default("Appointment has been created !", "success", "Success !"));
        }, function (error) {
            _this.alerts.push(new alert_model_1.default(error, "error", "Failure !"));
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