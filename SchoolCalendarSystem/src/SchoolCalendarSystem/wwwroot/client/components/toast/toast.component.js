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
var Rx_1 = require('rxjs/Rx');
var ToastComponent = (function () {
    function ToastComponent() {
        this.isHidden = false;
        this.cssClass = "";
    }
    Object.defineProperty(ToastComponent.prototype, "show", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this.isHidden = false;
                return;
            }
            this.isHidden = true;
            this.cssClass = this.type === "error" ? "alert alert-danger" : "alert alert-success";
            var timer = Rx_1.Observable.timer(5000, 1000)
                .timeInterval()
                .pluck('interval')
                .take(1);
            timer.subscribe(function (__) { return _this.isHidden = false; });
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ToastComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ToastComponent.prototype, "message", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ToastComponent.prototype, "caption", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], ToastComponent.prototype, "show", null);
    ToastComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'toast',
            templateUrl: 'toast.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ToastComponent);
    return ToastComponent;
}());
exports.ToastComponent = ToastComponent;
//# sourceMappingURL=toast.component.js.map