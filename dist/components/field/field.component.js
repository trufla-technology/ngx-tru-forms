import { Component, ElementRef, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { SchemaFormControl } from '../../models/schema-form-control';
import * as RandExp from 'randexp';
import { JsonFormFieldsService } from '../../';
var FieldComponent = /** @class */ (function () {
    function FieldComponent(jsonFormFieldsService, el) {
        this.jsonFormFieldsService = jsonFormFieldsService;
        this.el = el;
        this.patterns = {};
    }
    FieldComponent.prototype.ngOnInit = function () {
        this.jsonFormFieldsService.setRootViewContainerRef(this.container);
        this.jsonFormFieldsService.addDynamicComponent(this.control);
        this.el.nativeElement.className = "field margin-bottom " + this.getClass();
    };
    FieldComponent.prototype.patternHelp = function (pattern) {
        if (this.patterns[pattern]) {
            return this.patterns[pattern];
        }
        else {
            this.patterns[pattern] = new RandExp(pattern).gen();
        }
        return this.patterns[pattern];
    };
    FieldComponent.prototype.getClass = function (defaultClass) {
        if (defaultClass === void 0) { defaultClass = ''; }
        var fieldClass = [defaultClass];
        fieldClass.push(this.control.schema.type);
        fieldClass.push(this.control.schema.key);
        if (this.control.schema.hasOwnProperty('description')) {
            fieldClass.push('has-info');
        }
        return fieldClass.filter(function (d) { return d; }).join(' ');
    };
    FieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jf-field, [jf-field]',
                    template: "\n    <ng-container #container></ng-container>\n    <div *ngIf=\"control.invalid && (control.dirty || control.touched)\" class=\"has-danger\">\n      <div *ngIf=\"control.errors && control.errors['required']\">\n        This field is required.\n      </div>\n      <div *ngIf=\"control.errors && control.errors['pattern']\">\n        Please enter a valid value, for example {{patternHelp(control.errors['pattern']['requiredPattern'])}}.\n      </div>\n      <div *ngIf=\"control.errors && control.errors['minlength']\">\n        Input has to be a minimum of {{control.errors['minlength']['requiredLength']}} characters.\n      </div>\n      <div *ngIf=\"control.errors && control.errors['maxlength']\">\n        Input can contain a maximum of {{control.errors['maxlength']['requiredLength']}} characters.\n      </div>\n      <div *ngIf=\"control.errors && control.errors['min']\">\n        Enter a value greater then {{control.errors['min']['min']}}.\n      </div>\n      <div *ngIf=\"control.errors && control.errors['max']\">\n        Enter a value less then {{control.errors['max']['max']}}.\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    FieldComponent.ctorParameters = function () { return [
        { type: JsonFormFieldsService, },
        { type: ElementRef, },
    ]; };
    FieldComponent.propDecorators = {
        "container": [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] },],
        "control": [{ type: Input },],
    };
    return FieldComponent;
}());
export { FieldComponent };
