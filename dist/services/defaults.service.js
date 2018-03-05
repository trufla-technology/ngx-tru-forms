import { Injectable } from '@angular/core';
var JsonFormDefaultsService = /** @class */ (function () {
    function JsonFormDefaultsService() {
        this.defaultTypes = this.defaultTypes || {};
    }
    JsonFormDefaultsService.prototype.get = function (prop, schema, data) {
        var defaultValue = schema.properties[prop].default || '';
        if (this.has(schema.properties[prop].default)) {
            defaultValue = this.eval(schema.properties[prop].default)();
        }
        // data override defaults
        if (data && data.hasOwnProperty(prop)) {
            defaultValue = data[prop];
        }
        return defaultValue;
    };
    JsonFormDefaultsService.prototype.eval = function (str) {
        return this.defaultTypes[str];
    };
    JsonFormDefaultsService.prototype.has = function (str) {
        return this.defaultTypes.hasOwnProperty(str);
    };
    JsonFormDefaultsService.prototype.register = function (str, callback) {
        this.defaultTypes[str] = callback;
    };
    JsonFormDefaultsService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    JsonFormDefaultsService.ctorParameters = function () { return []; };
    return JsonFormDefaultsService;
}());
export { JsonFormDefaultsService };
