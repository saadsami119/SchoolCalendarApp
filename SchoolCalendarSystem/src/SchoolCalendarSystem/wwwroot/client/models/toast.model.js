"use strict";
var Toast = (function () {
    function Toast() {
    }
    Toast.prototype.errorToast = function (msg, cpt) {
        this.caption = cpt;
        this.message = msg;
        this.type = "error";
        this.show = true;
    };
    Toast.prototype.infoToast = function (msg, cpt) {
        this.caption = cpt;
        this.message = msg;
        this.type = "info";
        this.show = true;
    };
    Toast.prototype.successToast = function (msg, cpt) {
        this.caption = cpt;
        this.message = msg;
        this.type = "success";
        this.show = true;
    };
    return Toast;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Toast;
//# sourceMappingURL=toast.model.js.map