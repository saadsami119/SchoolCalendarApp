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
var core_1 = require("@angular/core");
var http_service_1 = require("../../services/http.service");
var router_service_1 = require("../../services/router.service");
var auth_service_1 = require("../../services/auth.service");
var appointment_service_1 = require("../../services/appointment.service");
var calendar_service_1 = require("../../services/calendar.service");
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable
// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators needed for THIS app.
// Statics
require("rxjs/add/observable/throw");
// Operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/toPromise");
var AppComponent = (function () {
    function AppComponent(authService, routerService) {
        this.authService = authService;
        this.routerService = routerService;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (!this.authService.isUserLoggedIn()) {
            this.routerService.navigateToRoute("login");
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: "app.component.html",
        providers: [http_service_1.default, router_service_1.default, auth_service_1.default, appointment_service_1.default, calendar_service_1.default],
    }),
    __metadata("design:paramtypes", [auth_service_1.default, router_service_1.default])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map