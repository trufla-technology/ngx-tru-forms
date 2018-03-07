import { Component, Input } from '@angular/core';
var InfoButtonComponent = /** @class */ (function () {
    function InfoButtonComponent() {
    }
    InfoButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jf-info-button',
                    template: "\n    <a\n      [attr.href]=\"'javascript:void(0)'\"\n      *ngIf=\"title\"\n      [attr.class]=\"'btn btn-link info'\" [attr.title]=\"title\">Info</a>\n  "
                },] },
    ];
    /** @nocollapse */
    InfoButtonComponent.ctorParameters = function () { return []; };
    InfoButtonComponent.propDecorators = {
        "title": [{ type: Input },],
    };
    return InfoButtonComponent;
}());
export { InfoButtonComponent };
