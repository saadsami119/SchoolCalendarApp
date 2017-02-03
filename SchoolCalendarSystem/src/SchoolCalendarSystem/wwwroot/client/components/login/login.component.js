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
var forms_1 = require("@angular/forms");
var auth_service_1 = require("../../services/auth.service");
var router_service_1 = require("../../services/router.service");
var alert_model_1 = require("../../models/alert.model");
var LoginComponent = (function () {
    function LoginComponent(formBuilder, authService, routerService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.routerService = routerService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['saad@gmail.com', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$")])],
            password: ['saad', forms_1.Validators.required]
        });
        this.alerts = new Array();
    };
    LoginComponent.prototype.loginUser = function (user, isValid) {
        var _this = this;
        this.authService.authenticateUser(user)
            .subscribe(function (authenticatedUserId) {
            if (authenticatedUserId == null) {
                _this.alerts.push(new alert_model_1.default("Invalid username or pasword. Please try again.", "error", "Failure !"));
                return;
            }
            _this.authService.setLogedInUserInfo(authenticatedUserId, user.username);
            _this.routerService.navigateToRoute("calendar");
        }, function (error) { _this.alerts.push(new alert_model_1.default(error, "error", "Failure !")); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "login",
        templateUrl: "login.component.html"
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        auth_service_1.default,
        router_service_1.default])
], LoginComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginComponent;
//# sourceMappingURL=login.component.js.map