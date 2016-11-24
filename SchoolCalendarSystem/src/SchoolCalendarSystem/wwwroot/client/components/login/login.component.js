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
var auth_service_1 = require("../../services/auth.service");
var LoginComponent = (function () {
    // TODO : ngInit
    function LoginComponent(_fb, authService) {
        this._fb = _fb;
        this._authService = authService;
        this.loginForm = _fb.group({
            username: ['asa@rer.com', forms_1.Validators.required],
            password: ['asa', forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.loginUser = function (user, isValid) {
        var _this = this;
        this._authService.authenticateUser(user)
            .subscribe(function (isUserAuthenticated) {
            if (!isUserAuthenticated) {
                _this._authService.redirectToLogin();
            }
        }, function (error) {
            alert(error);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "login",
            templateUrl: "login.component.html",
            providers: [auth_service_1.AuthService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map