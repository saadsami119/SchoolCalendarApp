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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var ng2_datetime_1 = require('ng2-datetime/ng2-datetime');
var http_1 = require('@angular/http');
var http_service_1 = require('./services/http.service');
var router_service_1 = require('./services/router.service');
var auth_service_1 = require("./services/auth.service");
var app_component_1 = require('./components/app/app.component');
var appointment_component_1 = require("./components/appointment/appointment.component");
var calendar_component_1 = require("./components/calendar/calendar.component");
var navmenu_component_1 = require("./components/navmenu/navmenu.component");
var login_component_1 = require('./components/login/login.component');
var toast_component_1 = require("./components/toast/toast.component");
var alert_directive_1 = require("./directives/alert.directive");
var appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'calendar', component: calendar_component_1.CalendarComponent },
    { path: 'appointment', component: appointment_component_1.AppointmentComponent },
    { path: 'login', component: login_component_1.LoginComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot(appRoutes),
                ng2_datetime_1.NKDatetimeModule],
            declarations: [app_component_1.AppComponent, appointment_component_1.AppointmentComponent, calendar_component_1.CalendarComponent, navmenu_component_1.NavMenuComponent, login_component_1.LoginComponent, toast_component_1.ToastComponent, alert_directive_1.UnlessDirective],
            providers: [http_service_1.HttpService, router_service_1.RouterService, auth_service_1.AuthService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map