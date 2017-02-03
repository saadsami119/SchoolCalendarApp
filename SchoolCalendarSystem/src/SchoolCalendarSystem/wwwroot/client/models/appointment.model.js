"use strict";
var Appointment = (function () {
    function Appointment(startDateTime, endDateTime, desc, userid) {
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.desc = desc;
        this.userid = userid;
        this.start = startDateTime;
        this.end = endDateTime;
        this.description = desc;
        this.userId = userid;
    }
    return Appointment;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Appointment;
//# sourceMappingURL=appointment.model.js.map