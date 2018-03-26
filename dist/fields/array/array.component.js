import { Component, Input } from '@angular/core';
import { SchemaFormControl } from '../../models/schema-form-control';
import { FormGroup } from '@angular/forms';
import { SchemaFormArray } from '../../models/schema-form-array';
var ArrayComponent = /** @class */ (function () {
    function ArrayComponent() {
    }
    ArrayComponent.prototype.getLegend = function (control) {
        return (control && control.schema && control.schema.key) ?
            this.strToUpperCase(control.schema.key) : '';
    };
    ArrayComponent.prototype.strToUpperCase = function (str) {
        return str.toLowerCase().replace(/_/g, ' ').split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    };
    ArrayComponent.prototype.getEnabledControls = function (control) {
        if (Array.isArray(control.controls)) {
            return control.controls.filter(function (c) { return c.enabled; });
        }
        return control;
    };
    ArrayComponent.prototype.addControl = function (formArray) {
        var newRow = Object.keys(formArray.controls[0]['controls']).reduce(function (prev, next) {
            var formGroup = formArray.controls[0]['controls'];
            var newControl = null;
            if (formGroup[next].controls) {
                newControl = new SchemaFormArray(formGroup[next].controls);
            }
            else {
                newControl = new SchemaFormControl('', formGroup[next].validator);
            }
            newControl.schema = formGroup[next].schema;
            newControl.key = formGroup[next].key;
            prev[next] = newControl;
            return prev;
        }, {});
        formArray.push(new FormGroup(newRow));
    };
    ArrayComponent.prototype.removeControl = function (formArray, index) {
        if (formArray.length === 1) {
            formArray.controls[0].reset();
            formArray.controls[0].disable();
        }
        else {
            formArray.removeAt(index);
        }
    };
    ArrayComponent.decorators = [
        { type: Component, args: [{
                    template: "\n    <div>\n      <h6 *ngIf=\"getLegend(control).length\">{{getLegend(control)}}</h6>\n      <div *ngFor=\"let arrControl of getEnabledControls(control); let i = index;\">\n        <div class=\"row\">\n          <div class=\"col-11\" jf-component-chooser [form]=\"arrControl\" [index]=\"i\"></div>\n          <div class=\"col-1\">\n            <span href=\"#\" style=\"cursor: pointer;\" (click)=\"removeControl(control, i)\">\n              <i class=\"la la-close\"></i>\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <input type=\"button\" (click)=\"addControl(control)\" class=\"btn btn-success btn-sm\" value=\"Add\" />\n        </div>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    ArrayComponent.ctorParameters = function () { return []; };
    ArrayComponent.propDecorators = {
        "control": [{ type: Input },],
    };
    return ArrayComponent;
}());
export { ArrayComponent };
