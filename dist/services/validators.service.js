import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
var JsonFormValidatorsService = /** @class */ (function () {
    function JsonFormValidatorsService() {
        this.validators = [];
    }
    JsonFormValidatorsService.prototype.get = function (prop, schema, path) {
        var required = schema.required || [];
        var field = schema.properties[prop];
        var varPath = [].concat(path, prop).join('.');
        if (schema.properties[prop].type === 'boolean' && required.indexOf(prop) > -1) {
            return Validators.pattern('true');
        }
        return Validators.compose(this.validators.concat([
            (this.has(varPath) ? this.validators[varPath] : null),
            (required.indexOf(prop) > -1 ? Validators.required : null),
            (field.hasOwnProperty('minLength') ? Validators.minLength(field.minLength) : null),
            (field.hasOwnProperty('maxLength') ? Validators.maxLength(field.maxLength) : null),
            (field.hasOwnProperty('format') && field.format === 'email' ? Validators.email : null),
            (field.hasOwnProperty('minimum') ? Validators.min(field.minimum) : null),
            (field.hasOwnProperty('maximum') ? Validators.max(field.maximum) : null),
            (field.pattern ? Validators.pattern(field.pattern) : null)
        ]));
    };
    JsonFormValidatorsService.prototype.register = function (field, validator) {
        this.validators[field] = validator;
    };
    JsonFormValidatorsService.prototype.has = function (str) {
        return this.validators.hasOwnProperty(str);
    };
    JsonFormValidatorsService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    JsonFormValidatorsService.ctorParameters = function () { return []; };
    return JsonFormValidatorsService;
}());
export { JsonFormValidatorsService };
