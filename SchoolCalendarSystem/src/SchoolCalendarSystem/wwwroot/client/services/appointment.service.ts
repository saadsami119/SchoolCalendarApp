import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { JsonReponse } from "../models/jsonResponse";
import { Observable } from "rxjs/Observable";
import { Appointment } from "../models/appointment.model";

@Injectable()
export class AppointmentService {

    constructor(private httpService: HttpService) {
    }

    createNewAppointment(appointment : Appointment): Observable<boolean> {
        return this.httpService.post("/api/appointment/", appointment);
    }
}