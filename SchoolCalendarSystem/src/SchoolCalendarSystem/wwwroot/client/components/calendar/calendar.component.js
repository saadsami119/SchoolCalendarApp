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
var calendarMonth_model_1 = require("../../models/calendarMonth.model");
var core_1 = require("@angular/core");
var auth_service_1 = require("../../services/auth.service");
var appointment_service_1 = require("../../services/appointment.service");
var calendar_service_1 = require("../../services/calendar.service");
var CalendarComponent = (function () {
    function CalendarComponent(authService, appointmentService, calendarService) {
        this.authService = authService;
        this.appointmentService = appointmentService;
        this.calendarService = calendarService;
    }
    CalendarComponent.prototype.ngOnInit = function () {
        //   if (!this.authService.isUserAuthenticated()) {
        //     //this.routerService.navigateToRoute("login");
        //     return;
        // }
        this.calendarMonth = new calendarMonth_model_1.default();
        this._currentMonth = this.getCurrentMonth();
        this.currentMonthName = this.getCurrentMonthName();
        this.currentYear = this.getCurrentYear();
        this.initilizeMonthlyCalendar();
    };
    CalendarComponent.prototype.initilizeMonthlyCalendar = function () {
        var _this = this;
        this.appointmentService.getAppointmentsForMonth(12, 2016)
            .subscribe(function (monthlyAppointments) {
            _this.calendarMonth = _this.calendarService.initilizeCalendarForMonth(_this._currentMonth, _this.currentYear, monthlyAppointments);
        });
    };
    CalendarComponent.prototype.initCalendarForNextMonth = function () {
        if (this._currentMonth === 11) {
            this.currentYear = this.currentYear + 1;
            this._currentMonth = 0;
        }
        else {
            this._currentMonth = this._currentMonth + 1;
        }
        this.currentMonthName = new Date(this.currentYear, this._currentMonth, 1).toLocaleString("en-us", { month: "long" });
        this.initilizeMonthlyCalendar();
    };
    CalendarComponent.prototype.initCalendarForPreviousMonth = function () {
        if (this._currentMonth === 0) {
            this.currentYear = this.currentYear - 1;
            this._currentMonth = 11;
        }
        else {
            this._currentMonth = this._currentMonth - 1;
        }
        this.currentMonthName = new Date(this.currentYear, this._currentMonth, 1).toLocaleString("en-us", { month: "long" });
        this.initilizeMonthlyCalendar();
    };
    CalendarComponent.prototype.getCurrentMonth = function () {
        return new Date().getMonth();
    };
    CalendarComponent.prototype.getCurrentYear = function () {
        return new Date().getFullYear();
    };
    CalendarComponent.prototype.getCurrentMonthName = function () {
        return new Date().toLocaleString("en-us", { month: "long" }); // TODO : chnage culture..
    };
    return CalendarComponent;
}());
CalendarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "calendar",
        templateUrl: "calendar.component.html",
        providers: [auth_service_1.default, appointment_service_1.default, calendar_service_1.default]
    }),
    __metadata("design:paramtypes", [auth_service_1.default,
        appointment_service_1.default,
        calendar_service_1.default])
], CalendarComponent);
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=calendar.component.js.map