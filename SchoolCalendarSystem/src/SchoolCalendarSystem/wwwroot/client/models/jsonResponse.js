"use strict";
var JsonReponse = (function () {
    function JsonReponse(_data, _error, _successful) {
        this._data = _data;
        this._error = _error;
        this._successful = _successful;
        this.data = _data;
        this.error = _error;
        this.successful = _successful;
    }
    return JsonReponse;
}());
exports.JsonReponse = JsonReponse;
//# sourceMappingURL=jsonResponse.js.map