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
import { CommonComponent } from '../common/common.component';
var RadiogroupComponent = /** @class */ (function (_super) {
    __extends(RadiogroupComponent, _super);
    function RadiogroupComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadiogroupComponent.prototype.enumNames = function (index) {
        return typeof (this.schema.enumNames) === 'undefined'
            ? this.schema.enum[index]
            : this.schema.enumNames[index];
    };
    RadiogroupComponent.decorators = [
        { type: Component, args: [{
                    template: "\n    <label [attr.class]=\"schema.key\" [ngClass]=\"{'margin-bottom--half': true, required: isRequired()}\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup></label>\n    <a *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</a>\n    <div [class]=\"getClass('radio-group')\">\n      <div *ngFor=\"let enum of this.schema.enum; let i = index\"\n           [ngClass]=\"{'radio-container': true, 'checked': control.value === enum}\">\n        <input type=\"radio\"\n           [id]=\"id(i)\"\n           [checked]=\"control.value === enum\"\n           [name]=\"schema.key\"\n           [formControl]=\"control\"\n           [value]=\"enum\" />\n        <label\n          [attr.for]=\"id(i)\"\n          [attr.class]=\"schema.key\">\n           {{enumNames(i)}}\n        </label>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    RadiogroupComponent.ctorParameters = function () { return []; };
    return RadiogroupComponent;
}(CommonComponent));
export { RadiogroupComponent };
