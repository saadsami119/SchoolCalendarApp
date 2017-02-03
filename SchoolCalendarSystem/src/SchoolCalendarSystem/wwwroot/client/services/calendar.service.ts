import { Injectable } from "@angular/core";
import CalendarWeek from "../models/calendarWeek.model";
import CalendarMonth from "../models/calendarMonth.model";
import CalendarDay from "../models/calendarDay.model";
import Appointment from "../models/appointment.model";

@Injectable()
export default class CalendarService {
      
    initilizeCalendarForMonth(month : number , year : number, appointments : Array<Appointment>) : CalendarMonth {
          
        let totalDaysInMonth =  this.getTotalDayInMonth(month,year);
        let calendarMonth = new CalendarMonth();
        let calendarWeek = new CalendarWeek();        

        for (let day: number = 1; day <= totalDaysInMonth; day++) {
                let currentDate = this.getDate(year, month, day);
                let dayOfWeek = currentDate.getDay();               
            
             switch (dayOfWeek) { // 1 is Monday and 0 is Sunday
                case 1:
                    calendarWeek.monday = new CalendarDay(day,currentDate, this.getAllAppointmentsForDate(currentDate,appointments));
                    break;
                case 2:
                    calendarWeek.tuesday  = new CalendarDay(day, currentDate,this.getAllAppointmentsForDate(currentDate,appointments));
                    break;
                case 3:
                    calendarWeek.wednesday  = new CalendarDay(day, currentDate,this.getAllAppointmentsForDate(currentDate,appointments));
                    break;
                case 4:
                    calendarWeek.thursday  = new CalendarDay(day,currentDate, this.getAllAppointmentsForDate(currentDate,appointments));
                    break;
                case 5:
                    calendarWeek.friday  = new CalendarDay(day,currentDate, this.getAllAppointmentsForDate(currentDate,appointments));
                    break;
                case 6:
                    calendarWeek.saturday  = new CalendarDay(day,currentDate, this.getAllAppointmentsForDate(currentDate,appointments));
                    break;
                case 0:
                    calendarWeek.sunday = new CalendarDay(day,currentDate, this.getAllAppointmentsForDate(currentDate,appointments));
                    calendarMonth.weeks.push(calendarWeek);
                    calendarWeek = new CalendarWeek();
                    break;
                default:
            }            
        }
        calendarMonth.weeks.push(calendarWeek);
        return calendarMonth;
    }

    private  getTotalDayInMonth(month : number , year : number) : number{
        return new Date(year, 1 + month, 0).getDate();
    }

    private getDate(year : number,month : number , day : number) : Date {
      return new Date(year, month, day);
    } 

    private getAllAppointmentsForDate(date : Date , monthlyAppointment : Array<Appointment>) : Array<Appointment>{
        let filterDates : Array<Appointment> = new Array<Appointment>();
        

        for(let appointment of monthlyAppointment){           
            if(appointment.start.getDate() === date.getDate() ){
                filterDates.push(appointment);              
            }
        }

        return filterDates;        
    }    
}
