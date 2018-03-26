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
                    template: "\n    <label [attr.class]=\"schema.key\" [ngClass]=\"{'margin-bottom--half': true, required: isRequired()}\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup></label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <div [class]=\"getClass('checkbox-group')\">\n      <div *ngFor=\"let child of this.control.controls; let i = index\"\n           [ngClass]=\"{'checkbox-container': true, 'checked': child.value === schema.enum[i]}\">\n        <input type=\"checkbox\"\n           [id]=\"id(i)\"\n           [checked]=\"child.value === schema.enum\"\n           [name]=\"schema.key\"\n           [formControl]=\"child\"\n           [value]=\"schema.enum[i]\" />\n        <label\n          [attr.for]=\"id(i)\"\n          [attr.class]=\"schema.key\">\n          {{enumNames(i)}}\n        </label>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    CheckboxgroupComponent.ctorParameters = function () { return []; };
    return CheckboxgroupComponent;
}(CommonComponent));
export { CheckboxgroupComponent };
