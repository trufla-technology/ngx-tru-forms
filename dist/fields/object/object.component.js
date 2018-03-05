import { Component, Input } from '@angular/core';
import { SchemaFormControl } from '../../models/schema-form-control';
var ObjectComponent = /** @class */ (function () {
    function ObjectComponent() {
    }
    ObjectComponent.decorators = [
        { type: Component, args: [{
                    template: '<div jf-component-chooser [form]="control"></div>'
                },] },
    ];
    /** @nocollapse */
    ObjectComponent.ctorParameters = function () { return []; };
    ObjectComponent.propDecorators = {
        "control": [{ type: Input },],
    };
    return ObjectComponent;
}());
export { ObjectComponent };
