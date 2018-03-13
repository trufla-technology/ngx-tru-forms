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
var StringComponent = /** @class */ (function (_super) {
    __extends(StringComponent, _super);
    function StringComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringComponent.decorators = [
        { type: Component, args: [{
                    template: "\n    <label [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\" *ngIf=\"type() !== 'hidden'\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <a *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</a>\n    <input\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [attr.type]=\"type()\"\n      [formControl]=\"control\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.minLength]=\"schema.minLength || null\"\n      [attr.placeholder]=\"placeholder()\"\n      [textMask]=\"{ mask: getMask() }\"\n    />\n  "
                },] },
    ];
    /** @nocollapse */
    StringComponent.ctorParameters = function () { return []; };
    return StringComponent;
}(CommonComponent));
export { StringComponent };
