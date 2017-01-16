"use strict";
var CalendarDay = (function () {
    function CalendarDay(_day, _date, _appointment) {
        this.appointments = new Array();
        this.day = _day;
        this.date = _date;
        this.appointments = _appointment;
        this.totalAppintments = _appointment.length;
    }
    return CalendarDay;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CalendarDay;
//# sourceMappingURL=calendarDay.model.js.map