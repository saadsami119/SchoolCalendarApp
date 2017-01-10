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
var calendarWeek_model_1 = require("../models/calendarWeek.model");
var calendarMonth_model_1 = require("../models/calendarMonth.model");
var calendarDay_model_1 = require("../models/calendarDay.model");
var CalendarService = (function () {
    function CalendarService() {
    }
    CalendarService.prototype.initilizeCalendarForMonth = function (month, year, appointments) {
        var totalDaysInMonth = this.getTotalDayInMonth(month, year);
        var calendarMonth = new calendarMonth_model_1.default();
        var calendarWeek = new calendarWeek_model_1.default();
        for (var day = 1; day <= totalDaysInMonth; day++) {
            var currentDate = this.getDate(year, month, day);
            var dayOfWeek = currentDate.getDay();
            switch (dayOfWeek) {
                case 1:
                    calendarWeek.monday = new calendarDay_model_1.default(day, this.getAllAppointmentsForDate(currentDate, appointments));
                    break;
                case 2:
                    calendarWeek.tuesday = new calendarDay_model_1.default(day, this.getAllAppointmentsForDate(currentDate, appointments));
                    break;
                case 3:
                    calendarWeek.wednesday = new calendarDay_model_1.default(day, this.getAllAppointmentsForDate(currentDate, appointments));
                    break;
                case 4:
                    calendarWeek.thursday = new calendarDay_model_1.default(day, this.getAllAppointmentsForDate(currentDate, appointments));
                    break;
                case 5:
                    calendarWeek.friday = new calendarDay_model_1.default(day, this.getAllAppointmentsForDate(currentDate, appointments));
                    break;
                case 6:
                    calendarWeek.saturday = new calendarDay_model_1.default(day, this.getAllAppointmentsForDate(currentDate, appointments));
                    break;
                case 0:
                    calendarWeek.sunday = new calendarDay_model_1.default(day, this.getAllAppointmentsForDate(currentDate, appointments));
                    calendarMonth.weeks.push(calendarWeek);
                    calendarWeek = new calendarWeek_model_1.default();
                    break;
                default:
            }
        }
        calendarMonth.weeks.push(calendarWeek);
        return calendarMonth;
    };
    CalendarService.prototype.getTotalDayInMonth = function (month, year) {
        return new Date(year, 1 + month, 0).getDate();
    };
    CalendarService.prototype.getDate = function (year, month, day) {
        return new Date(year, month, day);
    };
    CalendarService.prototype.getAllAppointmentsForDate = function (date, monthlyAppointment) {
        var filterDates = new Array();
        var end = date;
        for (var _i = 0, monthlyAppointment_1 = monthlyAppointment; _i < monthlyAppointment_1.length; _i++) {
            var appointment = monthlyAppointment_1[_i];
            console.log(appointment.start);
            if (appointment.start >= date && appointment.start <= end) {
                filterDates.push(appointment);
            }
        }
        return filterDates;
    };
    return CalendarService;
}());
CalendarService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CalendarService);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CalendarService;
//# sourceMappingURL=calendar.service.js.map