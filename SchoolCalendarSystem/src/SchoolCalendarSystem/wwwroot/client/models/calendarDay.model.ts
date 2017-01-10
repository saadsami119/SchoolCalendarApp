import Appointment from "./appointment.model";

export  default class CalendarDay {
    day: number;
    appointments: Array<Appointment> = new Array<Appointment>();
    totalAppintments : number;

    constructor(_day : number, _appointment : Array<Appointment>){
        this.day = _day
        this.appointments = _appointment;
        this.totalAppintments = _appointment.length;
    }
}
