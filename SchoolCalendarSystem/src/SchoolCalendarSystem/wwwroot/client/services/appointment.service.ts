import { Injectable } from "@angular/core";
import  HttpService  from "./http.service";
import  JsonReponse  from "../models/jsonResponse";
import { Observable } from "rxjs/Observable";
import Appointment  from "../models/appointment.model";

@Injectable()
export default class AppointmentService {

    constructor(private httpService: HttpService) {
    }

    createNewAppointment(appointment : Appointment): Observable<boolean> {
        return this.httpService.post("/api/appointment/", appointment);
    }

    getAppointmentsForMonthForUser(month : number , year : number , userId : number) : Observable<Appointment[]>{
        let url : string = "/api/appointment/user/"+userId+"/month/"+ month + "/year/" + year;     
        let appointmentsObservable =  this.httpService.get(url)
            .map(appointments=>{
                   let monthlyAppointments = new Array<Appointment>();
                    for (let appointment  of appointments){
                       monthlyAppointments.push(new Appointment(new Date(appointment.startDateTime) , 
                                                                new Date(appointment.endDateTime),  
                                                                appointment.description,
                                                                appointment.userId));                       
                    }
            return monthlyAppointments;
        });      
       
        return appointmentsObservable;
    }
}