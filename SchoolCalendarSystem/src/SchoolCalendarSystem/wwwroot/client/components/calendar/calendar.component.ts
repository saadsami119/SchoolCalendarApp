import CalendarMonth from "../../models/calendarMonth.model";
import { Component, OnInit } from '@angular/core';
import Appointment from "../../models/appointment.model";
import AuthService from '../../services/auth.service';
import AppointmentService from "../../services/appointment.service";
import CalendarService from "../../services/calendar.service";
import RouterService from "../../services/router.service";

@Component({
    moduleId: module.id,
    selector: "calendar",
    templateUrl: "calendar.component.html"
})

export class CalendarComponent implements OnInit {

    public calendarMonth: CalendarMonth;
    public currentMonthName: string;
    public currentYear: number;
    private _currentMonth: number;
    public appointmentsPerDay: Array<Appointment>;
    public appointmentPerMonth: Array<Appointment>;
    public selectedDate: string;

    constructor(private authService: AuthService,
        private appointmentService: AppointmentService,
        private calendarService: CalendarService,
        private routerService: RouterService) {
    }

    ngOnInit() {
          if (!this.authService.isUserLoggedIn()) {
            this.routerService.navigateToRoute("login");
            return;
        }
        this.calendarMonth = new CalendarMonth();
        this._currentMonth = this.getCurrentMonth();
        this.currentMonthName = this.getCurrentMonthName();
        this.currentYear = this.getCurrentYear();

        this.initilizeMonthlyCalendar();
    }

    initilizeMonthlyCalendar(): void {
        this.appointmentService.getAppointmentsForMonthForUser(this._currentMonth + 1, this.currentYear,this.authService.getLogedInUserId())
            .subscribe(monthlyAppointments => {
                this.appointmentPerMonth = new Array<Appointment>();
                this.appointmentPerMonth = monthlyAppointments;
                this.calendarMonth = this.calendarService.initilizeCalendarForMonth(this._currentMonth, this.currentYear, this.appointmentPerMonth);
            });
    }

    initCalendarForNextMonth(): void {
        if (this._currentMonth === 11) {
            this.currentYear = this.currentYear + 1;
            this._currentMonth = 0;
        } else {
            this._currentMonth = this._currentMonth + 1;
        }
        this.currentMonthName = new Date(this.currentYear, this._currentMonth, 1).toLocaleString("en-us", { month: "long" });
        this.initilizeMonthlyCalendar();
    }

    initCalendarForPreviousMonth(): void {
        if (this._currentMonth === 0) {
            this.currentYear = this.currentYear - 1;
            this._currentMonth = 11;
        } else {
            this._currentMonth = this._currentMonth - 1;
        }

        this.currentMonthName = new Date(this.currentYear, this._currentMonth, 1).toLocaleString("en-us", { month: "long" });
        this.initilizeMonthlyCalendar();
    }

    filterAllAppointmentsForDate(date: Date): void {
        this.appointmentsPerDay = new Array<Appointment>();
        this.selectedDate = date.toDateString();

        for (let appointment of this.appointmentPerMonth) {
            if (appointment.start.getDate() === date.getDate()) {
                this.appointmentsPerDay.push(appointment);
            }
        }
    }

    private getCurrentMonth(): number {
        return new Date().getMonth();
    }

    private getCurrentYear(): number {
        return new Date().getFullYear();
    }

    private getCurrentMonthName(): string {
        return new Date().toLocaleString("en-us", { month: "long" }); // TODO : chnage culture..
    }
}