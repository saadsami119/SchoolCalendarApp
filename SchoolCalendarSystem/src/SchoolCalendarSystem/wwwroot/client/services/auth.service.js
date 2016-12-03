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
var ng2_cookies_1 = require('ng2-cookies/ng2-cookies');
var http_service_1 = require("./http.service");
var http_1 = require("@angular/http");
var AuthService = (function () {
    function AuthService(httpService) {
        this.httpService = httpService;
    }
    AuthService.prototype.authenticateUser = function (user) {
        var params = new http_1.URLSearchParams();
        params.set("username", user.username);
        params.set("password", user.password);
        return this.httpService.get("/api/account/login", params);
    };
    AuthService.prototype.isUserNotAuthenticated = function () {
        return ng2_cookies_1.Cookie.get('USER_ID') === null;
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
