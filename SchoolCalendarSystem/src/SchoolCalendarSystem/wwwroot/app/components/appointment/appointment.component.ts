import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: "nav-menu",
    templateUrl: "appointment.component.html"
})

export class AppointmentComponent {

    public appointmentForm: FormGroup;

    constructor(private _fb: FormBuilder) {

        this.appointmentForm = _fb.group({
            startDateTime: _fb.group({
                date: ["", Validators.required],
                time: ["", Validators.required]
            }),
            endDateTime: _fb.group({
                date: ["", Validators.required],
                time: ["", Validators.required]
            }),
            description : [null,Validators.required]
        });
    }

}
