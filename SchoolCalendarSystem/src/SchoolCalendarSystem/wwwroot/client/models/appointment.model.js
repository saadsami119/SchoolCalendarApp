"use strict";
var Appointment = (function () {
    function Appointment(startDateTime, endDateTime, desc) {
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.desc = desc;
        this.start = startDateTime;
        this.end = endDateTime;
        this.description = desc;
    }
    return Appointment;
}());
exports.Appointment = Appointment;
//# sourceMappingURL=appointment.model.js.map