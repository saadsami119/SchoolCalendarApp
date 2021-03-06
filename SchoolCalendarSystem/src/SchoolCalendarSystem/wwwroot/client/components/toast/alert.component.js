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
var ToastComponent = (function () {
    function ToastComponent() {
        this.alerts = new Array();
    }
    Object.defineProperty(ToastComponent.prototype, "show", {
        set: function (value) {
            this.alerts = value;
        },
        enumerable: true,
        configurable: true
    });
    ToastComponent.prototype.onClose = function (alert) {
        for (var i = this.alerts.length - 1; i >= 0; i--) {
            if (this.alerts[i].id === alert.id) {
                this.alerts.splice(i, 1);
            }
        }
    };
    return ToastComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ToastComponent.prototype, "show", null);
ToastComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'alert',
        templateUrl: 'alert.component.html'
    }),
    __metadata("design:paramtypes", [])
], ToastComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ToastComponent;
//# sourceMappingURL=alert.component.js.map