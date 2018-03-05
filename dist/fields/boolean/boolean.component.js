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
var BooleanComponent = /** @class */ (function (_super) {
    __extends(BooleanComponent, _super);
    function BooleanComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BooleanComponent.decorators = [
        { type: Component, args: [{
                    template: "\n    <div [class]=\"getClass('checkbox-group')\">\n      <div class=\"checkbox-container\">\n        <input\n          [id]=\"schema.key\"\n          [name]=\"schema.key\"\n          type=\"checkbox\"\n          [formControl]=\"control\"\n        />\n        <label [attr.for]=\"schema.key\" [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n          {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n        </label>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    BooleanComponent.ctorParameters = function () { return []; };
    return BooleanComponent;
}(CommonComponent));
export { BooleanComponent };
