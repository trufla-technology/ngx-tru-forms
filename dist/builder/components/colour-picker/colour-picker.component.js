var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component } from '@angular/core';
import { CommonComponent } from '../../../fields/common/common.component';
var ColourPickerComponent = /** @class */ (function (_super) {
    __extends(ColourPickerComponent, _super);
    function ColourPickerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColourPickerComponent.decorators = [
        { type: Component, args: [{
                    template: "\n    <label [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <input\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [attr.type]=\"type()\"\n      [formControl]=\"control\"\n      [style.background]=\"color\"\n      [style.color]=\"color\"\n      [style.width]=\"'40px'\"\n    />\n  "
                },] },
    ];
    /** @nocollapse */
    ColourPickerComponent.ctorParameters = function () { return []; };
    return ColourPickerComponent;
}(CommonComponent));
export { ColourPickerComponent };
