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
var http_service_1 = require("./http.service");
var appointment_model_1 = require("../models/appointment.model");
var AppointmentService = (function () {
    function AppointmentService(httpService) {
        this.httpService = httpService;
    }
    AppointmentService.prototype.createNewAppointment = function (appointment) {
        return this.httpService.post("/api/appointment/", appointment);
    };
    AppointmentService.prototype.getAppointmentsForMonthForUser = function (month, year, userId) {
        var url = "/api/appointment/user/" + userId + "/month/" + month + "/year/" + year;
        var appointmentsObservable = this.httpService.get(url)
            .map(function (appointments) {
            var monthlyAppointments = new Array();
            for (var _i = 0, appointments_1 = appointments; _i < appointments_1.length; _i++) {
                var appointment = appointments_1[_i];
                monthlyAppointments.push(new appointment_model_1.default(new Date(appointment.startDateTime), new Date(appointment.endDateTime), appointment.description, appointment.userId));
            }
            return monthlyAppointments;
        });
        return appointmentsObservable;
    };
    return AppointmentService;
}());
AppointmentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_service_1.default])
], AppointmentService);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppointmentService;
//# sourceMappingURL=appointment.service.js.map