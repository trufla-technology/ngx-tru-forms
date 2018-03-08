import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
var JsonFormValidatorsService = /** @class */ (function () {
    function JsonFormValidatorsService() {
        this.validators = [];
    }
    JsonFormValidatorsService.prototype.get = function (prop, schema) {
        var required = schema.required || [];
        var field = schema.properties[prop];
        if (schema.properties[prop].type === 'boolean' && required.indexOf(prop) > -1) {
            return Validators.pattern('true');
        }
        return Validators.compose(this.validators.concat([
            (required.indexOf(prop) > -1 ? Validators.required : null),
            (field.hasOwnProperty('minLength') ? Validators.minLength(field.minLength) : null),
            (field.hasOwnProperty('maxLength') ? Validators.maxLength(field.maxLength) : null),
            (field.hasOwnProperty('format') && field.format === 'email' ? Validators.email : null),
            (field.hasOwnProperty('minimum') ? Validators.min(field.minimum) : null),
            (field.hasOwnProperty('maximum') ? Validators.max(field.maximum) : null),
            (field.pattern ? Validators.pattern(field.pattern) : null)
        ]));
    };
    JsonFormValidatorsService.prototype.register = function (validator) {
        this.validators.push(validator);
    };
    JsonFormValidatorsService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    JsonFormValidatorsService.ctorParameters = function () { return []; };
    return JsonFormValidatorsService;
}());
export { JsonFormValidatorsService };
