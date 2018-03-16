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
var NumberComponent = /** @class */ (function (_super) {
    __extends(NumberComponent, _super);
    function NumberComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberComponent.decorators = [
        { type: Component, args: [{
                    template: "\n    <label [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\" *ngIf=\"type() !== 'hidden'\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <button *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <input\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [attr.type]=\"'number'\"\n      [formControl]=\"control\"\n      [attr.placeholder]=\"placeholder()\"\n    />\n  "
                },] },
    ];
    /** @nocollapse */
    NumberComponent.ctorParameters = function () { return []; };
    return NumberComponent;
}(CommonComponent));
export { NumberComponent };
