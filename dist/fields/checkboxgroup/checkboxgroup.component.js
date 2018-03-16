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
var CheckboxgroupComponent = /** @class */ (function (_super) {
    __extends(CheckboxgroupComponent, _super);
    function CheckboxgroupComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxgroupComponent.prototype.enumNames = function (index) {
        return typeof (this.schema.enumNames) === 'undefined'
            ? this.schema.enum[index]
            : this.schema.enumNames[index];
    };
    CheckboxgroupComponent.decorators = [
        { type: Component, args: [{
                    template: "\n    <div class=\"checkbox-group form-group\">\n      <label\n        [attr.class]=\"schema.key\"\n        [ngClass]=\"{required: isRequired()}\"\n        *ngFor=\"let enum of this.schema.enum; let i = index\">\n        <button *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n        <input type=\"checkbox\"\n          [checked]=\"control.value === enum\"\n          [name]=\"schema.key\"\n          [formControl]=\"control\"\n          [value]=\"enum\" />\n          {{enumNames(i)}}\n        <sup *ngIf=\"isRequired()\">*</sup>\n      </label>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    CheckboxgroupComponent.ctorParameters = function () { return []; };
    return CheckboxgroupComponent;
}(CommonComponent));
export { CheckboxgroupComponent };
