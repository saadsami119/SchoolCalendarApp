import CalendarWeek from "./calendarWeek.model";

export default class CalendarMonth {
    weeks: Array<CalendarWeek>;

    constructor(){
        this.weeks = new Array<CalendarWeek>();
    }   

}
