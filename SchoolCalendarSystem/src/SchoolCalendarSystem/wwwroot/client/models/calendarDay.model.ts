import Appointment from "./appointment.model";

export  default class CalendarDay {
    day: number;
    date : Date;
    appointments: Array<Appointment> = new Array<Appointment>();
    totalAppintments : number;

    constructor(_day : number, _date : Date, _appointment : Array<Appointment>){
        this.day = _day
        this.date = _date;
        this.appointments = _appointment;
        this.totalAppintments = _appointment.length;
    }
}
