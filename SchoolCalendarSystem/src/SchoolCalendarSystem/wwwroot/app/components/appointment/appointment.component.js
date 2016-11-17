"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var AppointmentComponent = (function () {
    function AppointmentComponent(_fb) {
        this._fb = _fb;
        this.appointmentForm = _fb.group({
            startDateTime: _fb.group({
                date: ["", forms_1.Validators.required],
                time: ["", forms_1.Validators.required]
            }),
            endDateTime: _fb.group({
                date: ["", forms_1.Validators.required],
                time: ["", forms_1.Validators.required]
            }),
            description: [null, forms_1.Validators.required]
        });
    }
    AppointmentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "nav-menu",
            templateUrl: "appointment.component.html"
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], AppointmentComponent);
    return AppointmentComponent;
}());
exports.AppointmentComponent = AppointmentComponent;
//# sourceMappingURL=appointment.component.js.map