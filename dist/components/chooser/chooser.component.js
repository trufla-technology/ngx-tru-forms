import { Component, Input } from '@angular/core';
import { SchemaFormGroup } from '../../models/schema-form-group';
var ChooserComponent = /** @class */ (function () {
    function ChooserComponent() {
        this.keys = Object.keys;
    }
    ChooserComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jf-component-chooser, [jf-component-chooser]',
                    template: "\n    <div\n      *ngFor=\"let control of keys(form.controls)\"\n      jf-field\n      [control]=\"form.get(control)\"\n      [submitted]=\"submitted\"\n      [index]=\"index\"\n    ></div>\n  "
                },] },
    ];
    /** @nocollapse */
    ChooserComponent.ctorParameters = function () { return []; };
    ChooserComponent.propDecorators = {
        "index": [{ type: Input },],
        "form": [{ type: Input },],
        "schema": [{ type: Input },],
        "submitted": [{ type: Input },],
    };
    return ChooserComponent;
}());
export { ChooserComponent };
