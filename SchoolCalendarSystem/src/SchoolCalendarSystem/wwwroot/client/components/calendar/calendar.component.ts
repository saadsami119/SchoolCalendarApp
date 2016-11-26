import { Component, OnInit } from '@angular/core';
import { Appointment } from "../../models/appointment";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
    moduleId: module.id,
    selector: "calendar",
    templateUrl: "calendar.component.html",
    providers: [AuthService]
})

export class CalendarComponent implements OnInit {

    public calendarMonth: CalendarMonth;
    public selectedMonthIndex: number;
    public selectedMonthName: string;
    public selectedJahr: number;

    constructor(private authService: AuthService) {
        if (authService.isUserNotAuthenticated()) {
        }
    }

    ngOnInit() {
        this.selectedMonthName = new Date().toLocaleString("en-us", { month: "long" });
        this.selectedMonthIndex = new Date().getMonth();
        this.selectedJahr = new Date().getFullYear();
        this.setCalendarForMonth(this.selectedMonthIndex);
    }

    setCalendarForMonth(month: number): void {
        let monthStartingDate = new Date(this.selectedJahr, this.selectedMonthIndex, 1).getDate();
        let monthEndindDate = new Date(this.selectedJahr, 1 + this.selectedMonthIndex, 0).getDate();
        let calendarweek: CalendarWeek = new CalendarWeek();
        this.calendarMonth = new CalendarMonth();

        for (let i: number = monthStartingDate; i <= monthEndindDate; i++) {
            let date = new Date(this.selectedJahr, this.selectedMonthIndex, i);
            let dayName = date.toLocaleString('en-us', { weekday: 'long' });

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
    }

    setNextMonthName(): void {
        this.selectedJahr = this.selectedJahr + Math.floor((this.selectedMonthIndex + 1) / 12);
        this.selectedMonthIndex = (this.selectedMonthIndex + 1) === 12 ? (this.selectedMonthIndex + 1) % 12 : (this.selectedMonthIndex + 1);
        this.selectedMonthName = new Date(this.selectedJahr, this.selectedMonthIndex, 1).toLocaleString("en-us", { month: "long" });
        this.setCalendarForMonth(this.selectedMonthIndex);
    }

    setPreviousMonthName(): void {
        this.selectedJahr = this.selectedJahr + Math.floor((this.selectedMonthIndex - 1) / 12);
        this.selectedMonthIndex = (this.selectedMonthIndex - 1) === 12 ? (this.selectedMonthIndex - 1) % 12 : (this.selectedMonthIndex - 1);
        this.selectedMonthName = new Date(this.selectedJahr, this.selectedMonthIndex, 1).toLocaleString("en-us", { month: "long" });
        this.setCalendarForMonth(this.selectedMonthIndex);
    }

}

export class CalendarWeek {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
}

export class CalendarMonth {
    weeks: Array<CalendarWeek> = new Array<CalendarWeek>();
}