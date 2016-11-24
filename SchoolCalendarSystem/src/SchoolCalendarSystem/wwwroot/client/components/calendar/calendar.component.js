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
var auth_service_1 = require('../../services/auth.service');
var CalendarComponent = (function () {
    function CalendarComponent(authService) {
        this.authService = authService;
        if (authService.isUserNotAuthenticated()) {
            authService.redirectToLogin();
        }
    }
    CalendarComponent.prototype.ngOnInit = function () {
        this.selectedMonthName = new Date().toLocaleString("en-us", { month: "long" });
        this.selectedMonthIndex = new Date().getMonth();
        this.selectedJahr = new Date().getFullYear();
        this.setCalendarForMonth(this.selectedMonthIndex);
    };
    CalendarComponent.prototype.setCalendarForMonth = function (month) {
        var monthStartingDate = new Date(this.selectedJahr, this.selectedMonthIndex, 1).getDate();
        var monthEndindDate = new Date(this.selectedJahr, 1 + this.selectedMonthIndex, 0).getDate();
        var calendarweek = new CalendarWeek();
        this.calendarMonth = new CalendarMonth();
        for (var i = monthStartingDate; i <= monthEndindDate; i++) {
            var date = new Date(this.selectedJahr, this.selectedMonthIndex, i);
            var dayName = date.toLocaleString('en-us', { weekday: 'long' });
            switch (dayName) {
                case "Monday":
                    calendarweek.monday = date.getDate().toString();
                    break;
                case "Tuesday":
                    calendarweek.tuesday = date.getDate().toString();
                    break;
                case "Wednesday":
                    calendarweek.wednesday = date.getDate().toString();
                    break;
                case "Thursday":
                    calendarweek.thursday = date.getDate().toString();
                    break;
                case "Friday":
                    calendarweek.friday = date.getDate().toString();
                    break;
                case "Saturday":
                    calendarweek.saturday = date.getDate().toString();
                    break;
                case "Sunday":
                    calendarweek.sunday = date.getDate().toString();
                    break;
                default:
            }
            if (dayName === "Sunday") {
                this.calendarMonth.weeks.push(calendarweek);
                calendarweek = new CalendarWeek();
            }
        }
        this.calendarMonth.weeks.push(calendarweek);
    };
    CalendarComponent.prototype.setNextMonthName = function () {
        this.selectedJahr = this.selectedJahr + Math.floor((this.selectedMonthIndex + 1) / 12);
        this.selectedMonthIndex = (this.selectedMonthIndex + 1) === 12 ? (this.selectedMonthIndex + 1) % 12 : (this.selectedMonthIndex + 1);
        this.selectedMonthName = new Date(this.selectedJahr, this.selectedMonthIndex, 1).toLocaleString("en-us", { month: "long" });
        this.setCalendarForMonth(this.selectedMonthIndex);
    };
    CalendarComponent.prototype.setPreviousMonthName = function () {
        this.selectedJahr = this.selectedJahr + Math.floor((this.selectedMonthIndex - 1) / 12);
        this.selectedMonthIndex = (this.selectedMonthIndex - 1) === 12 ? (this.selectedMonthIndex - 1) % 12 : (this.selectedMonthIndex - 1);
        this.selectedMonthName = new Date(this.selectedJahr, this.selectedMonthIndex, 1).toLocaleString("en-us", { month: "long" });
        this.setCalendarForMonth(this.selectedMonthIndex);
    };
    CalendarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "calendar",
            templateUrl: "calendar.component.html",
            providers: [auth_service_1.AuthService]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], CalendarComponent);
    return CalendarComponent;
}());
exports.CalendarComponent = CalendarComponent;
var CalendarWeek = (function () {
    function CalendarWeek() {
    }
    return CalendarWeek;
}());
exports.CalendarWeek = CalendarWeek;
var CalendarMonth = (function () {
    function CalendarMonth() {
        this.weeks = new Array();
    }
    return CalendarMonth;
}());
exports.CalendarMonth = CalendarMonth;
//# sourceMappingURL=calendar.component.js.map