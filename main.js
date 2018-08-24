(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-tru-forms/fesm5/trufla-ngx-tru-forms.js":
/*!**********************************************************!*\
  !*** ./dist/ngx-tru-forms/fesm5/trufla-ngx-tru-forms.js ***!
  \**********************************************************/
/*! exports provided: JsonFormFieldsService, JsonFormModule, JsonFormBootstrap4Module, JsonFormMaterialModule, JsonFormComponent, JsonFormDefaultsService, JsonFormMaterial, JsonFormBootstrap4, JsonFormValidatorsService, CommonComponent, ɵbt, ɵbb, ɵbp, ɵj, ɵbc, ɵbs, ɵbd, ɵbo, ɵo, ɵw, ɵbq, ɵm, ɵy, ɵbr, ɵz, ɵq, ɵbe, ɵbn, ɵp, ɵba, ɵbm, ɵi, ɵbf, ɵbl, ɵk, ɵbg, ɵbk, ɵn, ɵv, ɵbj, ɵh, ɵu, ɵbh, ɵg, ɵx, ɵbi, ɵl, ɵs, ɵt, ɵb, ɵc, ɵd, ɵe, ɵr, ɵf, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonFormFieldsService", function() { return JsonFormFieldsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonFormModule", function() { return JsonFormModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonFormBootstrap4Module", function() { return JsonFormBootstrap4Module; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonFormMaterialModule", function() { return JsonFormMaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonFormComponent", function() { return JsonFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonFormDefaultsService", function() { return JsonFormDefaultsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonFormMaterial", function() { return JsonFormMaterial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonFormBootstrap4", function() { return JsonFormBootstrap4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonFormValidatorsService", function() { return JsonFormValidatorsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonComponent", function() { return CommonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbt", function() { return ArrayMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return BooleanComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbp", function() { return BooleanMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return BooleanViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function() { return ButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbs", function() { return ButtonMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function() { return CheckboxgroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbo", function() { return CheckboxgroupMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return CheckboxgroupViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return DateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbq", function() { return DateMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return DateViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return ErrorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbr", function() { return ErrorMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return MoneyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return MoneyViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbe", function() { return MultiselectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbn", function() { return MultiselectMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return MultiselectViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return NumberComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbm", function() { return NumberMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return NumberViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbf", function() { return PhotoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbl", function() { return PhotoMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return PhotoViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbg", function() { return RadiogroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbk", function() { return RadiogroupMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return RadiogroupViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return SelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbj", function() { return SelectMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return SelectViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return StringComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbh", function() { return StringMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return StringViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return TextareaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbi", function() { return TextareaMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return TextareaViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return ArrayComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return ArrayViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ChooserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return FieldComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return FormButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return InfoButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return ObjectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return WorkingSpinnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var lodash_startcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.startcase */ "./node_modules/lodash.startcase/index.js");
/* harmony import */ var lodash_startcase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_startcase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! text-mask-addons/dist/createNumberMask */ "./node_modules/text-mask-addons/dist/createNumberMask.js");
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CommonComponent = /** @class */ (function () {
    function CommonComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @return {?}
     */
    CommonComponent.prototype.isRequired = /**
     * @return {?}
     */
    function () {
        return this.control.validator !== null;
    };
    /**
     * @return {?}
     */
    CommonComponent.prototype.title = /**
     * @return {?}
     */
    function () {
        return typeof this.schema.title === 'undefined'
            ? this.strToUpperCase(this.schema.key) : this.schema.title;
    };
    /**
     * @param {?} str
     * @return {?}
     */
    CommonComponent.prototype.strToUpperCase = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return lodash_startcase__WEBPACK_IMPORTED_MODULE_2___default()(str);
    };
    /**
     * @return {?}
     */
    CommonComponent.prototype.placeholder = /**
     * @return {?}
     */
    function () {
        return this.schema.title || this.strToUpperCase(this.schema.key);
    };
    /**
     * @return {?}
     */
    CommonComponent.prototype.type = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ format = this.schema.format || 'text';
        switch (format) {
            case 'photo':
                format = 'file';
        }
        return format;
    };
    /**
     * @param {?=} i
     * @return {?}
     */
    CommonComponent.prototype.id = /**
     * @param {?=} i
     * @return {?}
     */
    function (i) {
        return this.schema.key + '-' + Math.random().toString(36).substring(7) + '-' + i;
    };
    /**
     * @param {?=} defaultClass
     * @return {?}
     */
    CommonComponent.prototype.getClass = /**
     * @param {?=} defaultClass
     * @return {?}
     */
    function (defaultClass) {
        return this.style && this.style.hasOwnProperty('default') ?
            this.style['default'] : (defaultClass || '');
    };
    /**
     * @return {?}
     */
    CommonComponent.prototype.getMask = /**
     * @return {?}
     */
    function () {
        if (this.schema.hasOwnProperty('mask')) {
            var /** @type {?} */ mask_1 = [];
            this.schema.mask.forEach(function (el) {
                mask_1.push(/^\/.*\/$/.test(el) ? new RegExp(el.replace(/^\/|\/$/g, '')) : el);
            });
            return mask_1;
        }
        return false;
    };
    /**
     * @param {?} image
     * @return {?}
     */
    CommonComponent.prototype.makeTrustedImage = /**
     * @param {?} image
     * @return {?}
     */
    function (image) {
        var /** @type {?} */ imageString = JSON.stringify(image).replace(/\\n/g, '');
        var /** @type {?} */ style = 'url(' + imageString + ')';
        return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CommonComponent.prototype.enumNames = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return typeof (this.schema.enumNames) === 'undefined'
            ? this.schema.enum[index]
            : this.schema.enumNames[index];
    };
    CommonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'jf-component',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    CommonComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
    ]; };
    return CommonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var StringComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(StringComponent, _super);
    function StringComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <label [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\" *ngIf=\"type() !== 'hidden'\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <input\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [attr.type]=\"type()\"\n      [formControl]=\"control\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.minLength]=\"schema.minLength || null\"\n      [attr.placeholder]=\"placeholder()\"\n      [textMask]=\"{ mask: getMask() }\"\n    />\n    <jf-error [control]=\"control\"></jf-error>\n  "
                },] },
    ];
    return StringComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var StringViewComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(StringViewComponent, _super);
    function StringViewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n  <p><span>{{title()}}</span> <span>{{control.value}}</span></p>\n  "
                },] },
    ];
    return StringViewComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectViewComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(SelectViewComponent, _super);
    function SelectViewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    SelectViewComponent.prototype.enumNames = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return typeof (this.schema.enumNames) === 'undefined'
            ? this.schema.enum[index]
            : this.schema.enumNames[index];
    };
    /**
     * @return {?}
     */
    SelectViewComponent.prototype.emptyOption = /**
     * @return {?}
     */
    function () {
        return _super.prototype.title.call(this).replace(/[^A-Z0-9]+$/ig, '');
    };
    SelectViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <p><span>{{title()}}</span> <span>{{control.value}}</span></p>\n  "
                },] },
    ];
    return SelectViewComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NumberViewComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(NumberViewComponent, _super);
    function NumberViewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <p>{{title()}}: {{control.value}}</p>\n  "
                },] },
    ];
    return NumberViewComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BooleanViewComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(BooleanViewComponent, _super);
    function BooleanViewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BooleanViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n  <p><span>{{title()}}</span> <span>{{control.value}}</span></p>\n  "
                },] },
    ];
    return BooleanViewComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PhotoViewComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(PhotoViewComponent, _super);
    function PhotoViewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhotoViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <p>{{title()}}</p>\n    <img src=\"{{control.value}}\" class=\"img-thumbnail\" />\n  "
                },] },
    ];
    return PhotoViewComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TextareaViewComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(TextareaViewComponent, _super);
    function TextareaViewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextareaViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n  <p><span>{{title()}}</span> <span>{{control.value}}</span></p>\n  "
                },] },
    ];
    return TextareaViewComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DateViewComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(DateViewComponent, _super);
    function DateViewComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numberMask = text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_4___default()({ allowDecimal: false, prefix: '' });
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    DateViewComponent.prototype.cleanMask = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.control.setValue(value.replace(/\D/g, ''));
    };
    DateViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n  <p><span>{{title()}}</span> <span>{{control.value}}</span></p>\n  "
                },] },
    ];
    return DateViewComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RadiogroupViewComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(RadiogroupViewComponent, _super);
    function RadiogroupViewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadiogroupViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n  <p><span>{{title()}}</span> <span>{{control.value}}</span></p>\n  "
                },] },
    ];
    return RadiogroupViewComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CheckboxgroupViewComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(CheckboxgroupViewComponent, _super);
    function CheckboxgroupViewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxgroupViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <p>{{title()}}</p>\n    <ul *ngFor=\"let selected of control.value\">\n      <li>{{selected}}</li>\n    </ul>\n  "
                },] },
    ];
    return CheckboxgroupViewComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MultiselectViewComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(MultiselectViewComponent, _super);
    function MultiselectViewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    MultiselectViewComponent.prototype.enumNames = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return typeof (this.schema.enumNames) === 'undefined'
            ? this.schema.enum[index]
            : this.schema.enumNames[index];
    };
    MultiselectViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <p>{{title()}}</p>\n    <ul *ngFor=\"let selected of control.value\">\n      <li>{{selected}}</li>\n    </ul>\n  "
                },] },
    ];
    return MultiselectViewComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MoneyViewComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(MoneyViewComponent, _super);
    function MoneyViewComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numberMask = text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_4___default()({ allowDecimal: false, prefix: '' });
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    MoneyViewComponent.prototype.cleanMask = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.control.setValue(value.replace(/\D/g, ''));
    };
    MoneyViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n  <p><span>{{title()}}</span> <span>{{control.value}}</span></p>\n  "
                },] },
    ];
    return MoneyViewComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.color = '';
        this.handleButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'jf-button',
                    template: "\n    <button\n      *ngIf=\"isVisible\"\n      [type]=\"type\"\n      [ngClass]=\"class\"\n      [disabled]=\"disabled\"\n      (click)=\"handleButtonClick\">\n      {{label}}\n    </button>\n  "
                },] },
    ];
    ButtonComponent.propDecorators = {
        isVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isWorking: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        submit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        handleButtonClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SchemaFormControl = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(SchemaFormControl, _super);
    function SchemaFormControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SchemaFormControl;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ObjectComponent = /** @class */ (function () {
    function ObjectComponent() {
    }
    ObjectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <div [ngClass]=\"['object', control.schema.key]\"\n      jf-component-chooser\n      [form]=\"control\"\n      [schema]=\"control.schema\"\n      [nested]=\"true\">\n    </div>"
                },] },
    ];
    ObjectComponent.propDecorators = {
        control: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return ObjectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SchemaFormArray = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(SchemaFormArray, _super);
    function SchemaFormArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SchemaFormArray;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArray"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SchemaFormGroup = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(SchemaFormGroup, _super);
    function SchemaFormGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SchemaFormGroup;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ArrayComponent = /** @class */ (function () {
    function ArrayComponent() {
    }
    /**
     * @param {?} control
     * @return {?}
     */
    ArrayComponent.prototype.getLegend = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return (control && control.schema && control.schema.key) ?
            this.strToUpperCase(control.schema.key) : '';
    };
    /**
     * @param {?} str
     * @return {?}
     */
    ArrayComponent.prototype.strToUpperCase = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.toLowerCase().replace(/_/g, ' ').split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    };
    /**
     * @param {?} control
     * @return {?}
     */
    ArrayComponent.prototype.getEnabledControls = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        if (Array.isArray(control.controls)) {
            return control.controls.filter(function (c) { return c.enabled; });
        }
        return control;
    };
    /**
     * @param {?} control
     * @return {?}
     */
    ArrayComponent.prototype.cloneControl = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        var _this = this;
        var /** @type {?} */ newControl;
        if (control instanceof SchemaFormGroup) {
            var /** @type {?} */ formGroup_1 = new SchemaFormGroup({}, control.validator, control.asyncValidator);
            var /** @type {?} */ controls_1 = control.controls;
            formGroup_1.schema = control.schema;
            Object.keys(controls_1).forEach(function (key) {
                formGroup_1.addControl(key, _this.cloneControl(controls_1[key]));
            });
            newControl = formGroup_1;
        }
        else if (control instanceof SchemaFormArray) {
            var /** @type {?} */ formArray_1 = new SchemaFormArray([], control.validator, control.asyncValidator);
            control.controls.forEach(function (formControl) {
                formArray_1.push(_this.cloneControl(formControl));
                return formArray_1;
            });
            newControl = formArray_1;
            (/** @type {?} */ (newControl)).schema = control.schema;
        }
        else if (control instanceof SchemaFormControl) {
            newControl = new SchemaFormControl(control.value, control.validator, control.asyncValidator);
            (/** @type {?} */ (newControl)).schema = control.schema;
        }
        else {
            throw new Error('Error: unexpected control value');
        }
        if (control.disabled) {
            newControl.disable({ emitEvent: false });
        }
        return newControl;
    };
    /**
     * @param {?} formArray
     * @return {?}
     */
    ArrayComponent.prototype.addControl = /**
     * @param {?} formArray
     * @return {?}
     */
    function (formArray) {
        formArray.push(this.cloneControl(formArray.controls[0]));
    };
    /**
     * @param {?} formArray
     * @param {?} index
     * @return {?}
     */
    ArrayComponent.prototype.removeControl = /**
     * @param {?} formArray
     * @param {?} index
     * @return {?}
     */
    function (formArray, index) {
        if (formArray.length === 1) {
            formArray.controls[0].reset();
            formArray.controls[0].disable();
        }
        else {
            formArray.removeAt(index);
        }
    };
    ArrayComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <div [ngClass]=\"['array', control.schema.key]\">\n      <h6 *ngIf=\"getLegend(control).length\">{{getLegend(control)}}</h6>\n      <div *ngFor=\"let arrControl of getEnabledControls(control); let i = index;\">\n        <div class=\"row\">\n          <div class=\"control\" jf-component-chooser [form]=\"arrControl\"></div>\n          <div class=\"remove\" *ngIf=\"control.controls.length > 1\">\n            <input type=\"button\" (click)=\"removeControl(control, i)\" class=\"btn btn-success btn-sm\" value=\"Remove\"/>\n          </div>\n        </div>\n      </div>\n      <div class=\"row add\">\n        <div class=\"col-12\">\n          <input type=\"button\" (click)=\"addControl(control)\" class=\"btn btn-success btn-sm\" value=\"Add\"/>\n        </div>\n      </div>\n    </div>\n  "
                },] },
    ];
    ArrayComponent.propDecorators = {
        control: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return ArrayComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ArrayViewComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(ArrayViewComponent, _super);
    function ArrayViewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrayViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <div [ngClass]=\"['array', control.schema.key]\">\n      <h6 *ngIf=\"getLegend(control).length\">{{getLegend(control)}}</h6>\n      <div *ngFor=\"let arrControl of getEnabledControls(control); let i = index;\">\n        <div class=\"row\">\n          <div class=\"control\" jf-component-chooser [form]=\"arrControl\"></div>\n        </div>\n      </div>\n    </div>\n  "
                },] },
    ];
    return ArrayViewComponent;
}(ArrayComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var JsonFormFieldsService = /** @class */ (function () {
    function JsonFormFieldsService(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.fieldTypes = {};
        this.defaultFieldType = StringComponent;
        this.viewOnly = false;
        this.viewTypes = {
            string: StringViewComponent,
            select: SelectViewComponent,
            number: NumberViewComponent,
            boolean: BooleanViewComponent,
            photo: PhotoViewComponent,
            textarea: TextareaViewComponent,
            object: ObjectComponent,
            array: ArrayViewComponent,
            date: DateViewComponent,
            radiogroup: RadiogroupViewComponent,
            checkboxgroup: CheckboxgroupViewComponent,
            multiselect: MultiselectViewComponent,
            money: MoneyViewComponent,
            button: ButtonComponent
        };
    }
    /**
     * @param {?} viewContainerRef
     * @return {?}
     */
    JsonFormFieldsService.prototype.setRootViewContainerRef = /**
     * @param {?} viewContainerRef
     * @return {?}
     */
    function (viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    };
    /**
     * @param {?} control
     * @return {?}
     */
    JsonFormFieldsService.prototype.addDynamicComponent = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        var /** @type {?} */ componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.get(control));
        var /** @type {?} */ componentRef = this.rootViewContainer.createComponent(componentFactory);
        componentRef.instance.control = control;
        componentRef.instance.schema = control.schema;
        componentRef.instance.style = control.style;
    };
    /**
     * @param {?} type
     * @return {?}
     */
    JsonFormFieldsService.prototype.has = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this.fieldTypes.hasOwnProperty(type);
    };
    /**
     * @param {?} type
     * @param {?} field
     * @return {?}
     */
    JsonFormFieldsService.prototype.register = /**
     * @param {?} type
     * @param {?} field
     * @return {?}
     */
    function (type, field) {
        this.fieldTypes[type] = field;
    };
    /**
     * @param {?} control
     * @return {?}
     */
    JsonFormFieldsService.prototype.get = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        var /** @type {?} */ types = this.viewOnly ? this.viewTypes : this.fieldTypes;
        if (typeof (control) === 'string' && this.has(control)) {
            return this.fieldTypes[control];
        }
        // check if a field is getting overridden by format
        if (typeof (control.schema.format) !== 'undefined' && this.has(control.schema.format)) {
            return types[control.schema.format];
        }
        if (typeof (control.schema.enum) !== 'undefined' && control.schema.type === 'array') {
            return types['checkboxgroup'];
        }
        else if (typeof (control.schema.enum) !== 'undefined') {
            return types['select'];
        }
        else if (this.has(control.schema.format)) {
            return types[control.schema.format];
        }
        else if (this.has(control.schema.type)) {
            return types[control.schema.type];
        }
        return this.defaultFieldType;
    };
    JsonFormFieldsService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    JsonFormFieldsService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }
    ]; };
    return JsonFormFieldsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var JsonFormValidatorsService = /** @class */ (function () {
    function JsonFormValidatorsService() {
        this.validators = [];
    }
    /**
     * @param {?} prop
     * @param {?} schema
     * @param {?} path
     * @return {?}
     */
    JsonFormValidatorsService.prototype.get = /**
     * @param {?} prop
     * @param {?} schema
     * @param {?} path
     * @return {?}
     */
    function (prop, schema, path) {
        var /** @type {?} */ required = schema.required || [];
        var /** @type {?} */ field = schema.properties[prop];
        var /** @type {?} */ varPath = [].concat(path, prop).join('.');
        if (schema.properties[prop].type === 'boolean' && required.indexOf(prop) > -1) {
            return _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('true');
        }
        return _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose(this.validators.concat([
            (this.has(varPath) ? this.validators[varPath] : null),
            (required.indexOf(prop) > -1 ? _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required : null),
            (field.hasOwnProperty('minLength') ? _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(field.minLength) : null),
            (field.hasOwnProperty('maxLength') ? _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(field.maxLength) : null),
            (field.hasOwnProperty('format') && field.format === 'email' ? _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email : null),
            (field.hasOwnProperty('minimum') ? _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(field.minimum) : null),
            (field.hasOwnProperty('maximum') ? _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].max(field.maximum) : null),
            (field.pattern ? _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(field.pattern) : null)
        ]));
    };
    /**
     * @param {?} field
     * @param {?} validator
     * @return {?}
     */
    JsonFormValidatorsService.prototype.register = /**
     * @param {?} field
     * @param {?} validator
     * @return {?}
     */
    function (field, validator) {
        this.validators[field] = validator;
    };
    /**
     * @param {?} str
     * @return {?}
     */
    JsonFormValidatorsService.prototype.has = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return this.validators.hasOwnProperty(str);
    };
    JsonFormValidatorsService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    JsonFormValidatorsService.ctorParameters = function () { return []; };
    return JsonFormValidatorsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var JsonFormDefaultsService = /** @class */ (function () {
    function JsonFormDefaultsService() {
        this.defaultTypes = this.defaultTypes || {};
    }
    /**
     * @param {?} prop
     * @param {?} schema
     * @param {?} data
     * @return {?}
     */
    JsonFormDefaultsService.prototype.get = /**
     * @param {?} prop
     * @param {?} schema
     * @param {?} data
     * @return {?}
     */
    function (prop, schema, data) {
        var /** @type {?} */ defaultString = (prop.hasOwnProperty('format') && prop.format === 'multiselect') ? [] : '';
        var /** @type {?} */ defaultValue = schema.properties[prop].default || defaultString;
        if (this.has(schema.properties[prop].default)) {
            defaultValue = this.eval(schema.properties[prop].default)();
        }
        // data override defaults
        if (data && data.hasOwnProperty(prop)) {
            defaultValue = data[prop];
        }
        return defaultValue;
    };
    /**
     * @param {?} str
     * @return {?}
     */
    JsonFormDefaultsService.prototype.eval = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return this.defaultTypes[str];
    };
    /**
     * @param {?} str
     * @return {?}
     */
    JsonFormDefaultsService.prototype.has = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return this.defaultTypes.hasOwnProperty(str);
    };
    /**
     * @param {?} str
     * @param {?} callback
     * @return {?}
     */
    JsonFormDefaultsService.prototype.register = /**
     * @param {?} str
     * @param {?} callback
     * @return {?}
     */
    function (str, callback) {
        this.defaultTypes[str] = callback;
    };
    JsonFormDefaultsService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    JsonFormDefaultsService.ctorParameters = function () { return []; };
    return JsonFormDefaultsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var JsonFormComponent = /** @class */ (function () {
    function JsonFormComponent(fb, vl, df, jf) {
        this.fb = fb;
        this.vl = vl;
        this.df = df;
        this.jf = jf;
        this.data = {};
        this.style = {};
        this.continue = 'Continue';
        this.isWorking = false;
        this.isMultiStep = false;
        this.activeStep = null;
        this.state = false;
        this.id = '';
        this.fields = {};
        this.viewOnly = false;
        this.handleStep = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.handleSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.handleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.handleCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.control = { key: '', value: '', isPartOf: false };
        this.changeDetected = false;
        this.oldActiveStep = '';
        this.steps = [];
        this.multiStepData = {};
        this.activeSchema = {};
        this.activeStyle = {};
    }
    /**
     * @return {?}
     */
    JsonFormComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        this.changeDetected = false;
        if (this.oldSchema !== JSON.stringify(this.schema)) {
            this.oldSchema = JSON.stringify(this.schema);
            this.changeDetected = true;
        }
        if (this.oldData !== JSON.stringify(this.data)) {
            this.oldData = JSON.stringify(this.data);
            this.changeDetected = true;
        }
        if (this.oldActiveStep !== this.activeStep) {
            this.oldActiveStep = this.activeStep;
            this.changeDetected = true;
        }
        if (this.changeDetected) {
            this.appendFields();
            this.constructForm();
            this.jf[0].viewOnly = this.viewOnly;
            this.cancel = this.viewOnly ? '' : this.cancel;
            this.submit = this.viewOnly ? '' : this.submit;
        }
    };
    /**
     * @return {?}
     */
    JsonFormComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.form) {
            this.form.valueChanges.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    JsonFormComponent.prototype.appendFields = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(this.fields).forEach(function (f) {
            _this.jf[0].register(f, _this.fields[f]);
        });
    };
    /**
     * @return {?}
     */
    JsonFormComponent.prototype.constructForm = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.model = {};
        if (this.isValidSchema()) {
            this.activeSchema = this.schema;
            this.activeStyle = this.style;
            // emit the initial step for the event
            if (this.steps.length === 0 && this.isMultiStep) {
                this.steps = this.getSteps(this.schema, this.activeStep);
                this.handleStep.emit({ id: this.id, data: null, steps: this.steps });
            }
            if (this.steps.length > 0 && this.isMultiStep) {
                var /** @type {?} */ visibleStepName = this.activeStep > 0 ? this.activeStep : this.steps.find(function (s) { return s.visible; }).name;
                this.activeSchema = this.schema.properties[visibleStepName];
                this.activeStyle = this.style.hasOwnProperty(visibleStepName) ? this.style[visibleStepName] : {};
                this.data = this.state && this.multiStepData.hasOwnProperty(visibleStepName)
                    ? this.multiStepData[visibleStepName] : this.data;
            }
            this.activeSchema = this.subRefs(this.activeSchema);
            this.model = this.generateForm(this.activeSchema, {}, this.data, this.activeStyle);
            this.form = this.fb.group(this.model);
            this.form.valueChanges.subscribe(function (data) {
                if (_this.control.isPartOf) {
                    _this.data = data;
                    _this.constructForm();
                }
                _this.handleChange.emit({ id: _this.id, control: _this.control, data: data });
            });
        }
    };
    /**
     * @param {?} schema
     * @param {?} activeStep
     * @return {?}
     */
    JsonFormComponent.prototype.getSteps = /**
     * @param {?} schema
     * @param {?} activeStep
     * @return {?}
     */
    function (schema, activeStep) {
        var _this = this;
        return Object.keys(schema.properties).map(function (name, index) {
            var /** @type {?} */ type = 'step';
            if (index === 0) {
                _this.activeStep = _this.activeStep || name;
                type = 'first';
            }
            else if (index === Object.keys(schema.properties).length - 1) {
                type = 'last';
            }
            return {
                index: index,
                name: name,
                visible: activeStep ? activeStep === name : index === 0,
                type: type,
                title: schema.properties[name].hasOwnProperty('title') ? schema.properties[name].title : name
            };
        });
    };
    /**
     * @return {?}
     */
    JsonFormComponent.prototype.isValidSchema = /**
     * @return {?}
     */
    function () {
        return typeof (this.schema) === 'object' && Object.keys(this.schema).length > 0;
    };
    /**
     * @param {?} schema
     * @param {?=} group
     * @param {?=} data
     * @param {?=} style
     * @param {?=} path
     * @return {?}
     */
    JsonFormComponent.prototype.generateForm = /**
     * @param {?} schema
     * @param {?=} group
     * @param {?=} data
     * @param {?=} style
     * @param {?=} path
     * @return {?}
     */
    function (schema, group, data, style, path) {
        var _this = this;
        if (!this.isVisible(schema)) {
            return group;
        }
        if (!path) {
            path = [];
        }
        Object.keys(schema.properties).forEach(function (prop) {
            if (schema.properties[prop].type === 'object') {
                var /** @type {?} */ groupData = data && data.hasOwnProperty(prop) ? data[prop] : {};
                var /** @type {?} */ groupStyle = style && style.hasOwnProperty(prop) ? style[prop] : {};
                group[prop] = new SchemaFormGroup(_this.generateForm(schema.properties[prop], {}, groupData, groupStyle, [].concat(path, prop)));
                group[prop].schema = schema.properties[prop];
                group[prop].schema.key = prop;
                group[prop].style = groupStyle;
            }
            else if (schema.properties[prop].type === 'array' && !_this.isFormat(schema.properties[prop], 'multiselect')) {
                path.push(prop);
                var /** @type {?} */ arrayData = data && data.hasOwnProperty(prop) ? data[prop] : [{}];
                var /** @type {?} */ arrayStyle = style && style.hasOwnProperty(prop) ? style[prop] : {};
                var /** @type {?} */ fbArray = [];
                if (schema.properties[prop].enum) {
                    fbArray = schema.properties[prop].enum.map(function (e) {
                        var /** @type {?} */ control = new SchemaFormControl();
                        control.schema = Object.assign({}, schema.properties[prop]);
                        control.schema.key = prop;
                        control.valueChanges.subscribe(function (event) { return _this.handleOnChange(prop, event); });
                        return control;
                    });
                }
                else {
                    fbArray = arrayData.map(function (dataAtIndex) {
                        var /** @type {?} */ g = new SchemaFormGroup(_this.generateForm(schema.properties[prop].items, {}, dataAtIndex, {}, [].concat(path, prop)));
                        g.schema = schema.properties[prop];
                        return g;
                    });
                }
                group[prop] = new SchemaFormArray(fbArray);
                group[prop].schema = schema.properties[prop];
                group[prop].schema.key = prop;
                group[prop].style = arrayStyle;
            }
            else if (_this.isVisible(schema.properties[prop])) {
                if (_this.isOneOf(schema, prop)) {
                    return;
                }
                var /** @type {?} */ control = new SchemaFormControl(_this.df.get(prop, schema, data), _this.vl.get(prop, schema, path));
                control.schema = Object.assign({}, schema.properties[prop]);
                control.schema.key = prop;
                control.style = (style && style.hasOwnProperty(prop)) ? style[prop] : {};
                control.valueChanges.subscribe(function (event) { return _this.handleOnChange(prop, event, _this.inOneOf(schema, prop)); });
                group[prop] = control;
            }
        });
        return group;
    };
    /**
     * @param {?} schema
     * @param {?} prop
     * @return {?}
     */
    JsonFormComponent.prototype.isOneOf = /**
     * @param {?} schema
     * @param {?} prop
     * @return {?}
     */
    function (schema, prop) {
        var _this = this;
        if (typeof (schema.oneOf) !== 'undefined') {
            return schema.oneOf.filter(function (p) {
                var /** @type {?} */ key = Object.keys(p.properties)[0];
                if (p.properties[key].required.indexOf(prop) > -1) {
                    var /** @type {?} */ value = _this.data[key];
                    if (schema.properties[key].type === 'boolean') {
                        value = _this.data[key] === 'true';
                    }
                    else if (schema.properties[key].type === 'number') {
                        value = +_this.data[key];
                    }
                    return _this.data.hasOwnProperty(key) === false || p.properties[key].enum.indexOf(value) === -1;
                }
                return false;
            }).length > 0;
        }
        return false;
    };
    /**
     * @param {?} schema
     * @param {?} prop
     * @return {?}
     */
    JsonFormComponent.prototype.inOneOf = /**
     * @param {?} schema
     * @param {?} prop
     * @return {?}
     */
    function (schema, prop) {
        if (typeof (schema.oneOf) !== 'undefined') {
            return schema.oneOf.filter(function (p) {
                var /** @type {?} */ key = Object.keys(p.properties)[0];
                return key === prop;
            }).length > 0;
        }
        return false;
    };
    /**
     * @param {?} prop
     * @return {?}
     */
    JsonFormComponent.prototype.isVisible = /**
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        return prop.hasOwnProperty('visible') === false || (prop.hasOwnProperty('visible') && prop.visible === true);
    };
    /**
     * @param {?} prop
     * @param {?} format
     * @return {?}
     */
    JsonFormComponent.prototype.isFormat = /**
     * @param {?} prop
     * @param {?} format
     * @return {?}
     */
    function (prop, format) {
        return prop.hasOwnProperty('format') && prop.format === format;
    };
    /**
     * External method for ensuring the form is valid
     */
    /**
     * External method for ensuring the form is valid
     * @return {?}
     */
    JsonFormComponent.prototype.isValid = /**
     * External method for ensuring the form is valid
     * @return {?}
     */
    function () {
        return this.form.valid;
    };
    /**
     * Trigger external submission
     */
    /**
     * Trigger external submission
     * @return {?}
     */
    JsonFormComponent.prototype.submitForm = /**
     * Trigger external submission
     * @return {?}
     */
    function () {
        this.userForm.ngSubmit.emit();
    };
    /**
     * @return {?}
     */
    JsonFormComponent.prototype.handleOnSubmit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.touchAll(this.form.controls);
        if (this.form.valid && this.isMultiStep) {
            var /** @type {?} */ prev = this.steps.findIndex(function (s) { return s.visible; });
            this.multiStepData[this.activeStep] = this.form.value;
            var /** @type {?} */ current = this.steps.findIndex(function (s) { return s.name === _this.activeStep; });
            var /** @type {?} */ next = current + 1;
            if (typeof (this.steps[next]) !== 'undefined') {
                this.steps[prev].visible = false;
                this.steps[next].visible = true;
                this.activeStep = this.steps[next].name;
                this.handleStep.emit({
                    dir: 'next',
                    id: this.id,
                    data: (_a = {}, _a[this.steps[prev].name] = this.multiStepData[this.steps[prev].name], _a),
                    steps: this.steps
                });
                this.constructForm();
            }
            else {
                this.handleSubmit.emit(this.multiStepData);
            }
        }
        else if (this.form.valid) {
            this.handleSubmit.emit(this.form.value);
        }
        var _a;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @param {?=} isPartOf
     * @return {?}
     */
    JsonFormComponent.prototype.handleOnChange = /**
     * @param {?} key
     * @param {?} value
     * @param {?=} isPartOf
     * @return {?}
     */
    function (key, value, isPartOf) {
        if (isPartOf === void 0) { isPartOf = false; }
        this.control = { key: key, value: value, isPartOf: isPartOf };
    };
    /**
     * @return {?}
     */
    JsonFormComponent.prototype.handleOnCancel = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isMultiStep) {
            var /** @type {?} */ prev = this.steps.findIndex(function (s) { return s.visible; });
            this.steps[prev].visible = false;
            var /** @type {?} */ current = this.steps.findIndex(function (s) { return s.name === _this.activeStep; });
            var /** @type {?} */ next = current - 1;
            if (typeof (this.steps[next]) !== 'undefined') {
                this.steps[next].visible = true;
                this.activeStep = this.steps[next].name;
                this.handleStep.emit({
                    dir: 'prev',
                    id: this.id,
                    data: (_a = {}, _a[this.steps[current].name] = this.multiStepData[this.steps[prev].name], _a),
                    steps: this.steps
                });
                this.constructForm();
            }
            else {
                this.handleCancel.emit(this.form.value);
            }
        }
        else if (this.form.valid) {
            this.handleCancel.emit(this.form.value);
        }
        var _a;
    };
    /**
     * @param {?} controls
     * @return {?}
     */
    JsonFormComponent.prototype.touchAll = /**
     * @param {?} controls
     * @return {?}
     */
    function (controls) {
        var _this = this;
        Object.keys(controls).forEach(function (key) {
            if (controls[key].hasOwnProperty('controls')) {
                _this.touchAll(controls[key].controls);
            }
            controls[key].markAsTouched();
        });
    };
    /**
     * @param {?} schema
     * @return {?}
     */
    JsonFormComponent.prototype.subRefs = /**
     * @param {?} schema
     * @return {?}
     */
    function (schema) {
        var _this = this;
        Object.keys(schema.properties).forEach(function (prop) {
            if (schema.properties[prop].hasOwnProperty('$ref')) {
                schema.properties[prop] = _this.schema.definitions[schema.properties[prop]['$ref'].replace('#/definitions/', '')];
            }
        });
        return schema;
    };
    JsonFormComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'jf-form, tru-form',
                    template: "\n    <form\n      #userForm=\"ngForm\"\n      [formGroup]=\"form\"\n      (ngSubmit)=\"handleOnSubmit()\"\n      *ngIf=\"isValidSchema()\"\n      [ngClass]=\"{ 'view-only': viewOnly }\"\n    >\n      <div\n        jf-component-chooser\n        [ngClass]=\"[outerClass || '', this.activeStyle['default'] ? this.activeStyle['default'] : '']\"\n        [form]=\"form\"\n        [schema]=\"activeSchema\">\n      </div>\n      <div #ref>\n        <ng-content></ng-content>\n      </div>\n      <div\n        #buttons\n        *ngIf=\"ref.children.length == 0 && (submit || cancel)\"\n        [ngClass]=\"{ 'margin-top--double': true, 'page-actions--edges': (cancel && submit), 'page-actions--center': (!cancel || !submit)}\">\n        <jf-form-button\n          *ngIf=\"cancel\"\n          [cancel]=\"cancel\"\n          [steps]=\"steps\"\n          [isMultiStep]=\"isMultiStep\"\n          [isWorking]=\"isWorking\"\n          (handleClick)=\"handleOnCancel()\"\n          [submitClass]=\"submitClass\"\n          [cancelClass]=\"cancelClass\">\n        </jf-form-button>\n        <jf-form-button\n          *ngIf=\"submit\"\n          [submitClass]=\"submitClass\"\n          [cancelClass]=\"cancelClass\"\n          [submit]=\"submit\"\n          [steps]=\"steps\"\n          [continue]=\"continue\"\n          [isMultiStep]=\"isMultiStep\"\n          [isWorking]=\"isWorking\"\n          [isFormValid]=\"this.form.valid\">\n        </jf-form-button>\n      </div>\n    </form>\n  "
                },] },
    ];
    /** @nocollapse */
    JsonFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: JsonFormValidatorsService },
        { type: JsonFormDefaultsService },
        { type: JsonFormFieldsService }
    ]; };
    JsonFormComponent.propDecorators = {
        schema: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        continue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        submit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        submitClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cancelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        outerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isWorking: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isMultiStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        activeStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fields: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        viewOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        handleStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        handleSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        handleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        handleCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        userForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['userForm',] }]
    };
    return JsonFormComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CheckboxgroupComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(CheckboxgroupComponent, _super);
    function CheckboxgroupComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.checkboxGroupValues = [];
        _this.randomSuffix = Math.random().toString(36).substring(7);
        return _this;
    }
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    CheckboxgroupComponent.prototype.setValue = /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        if (this.checkboxGroupValues.length === 0) {
            this.checkboxGroupValues = new Array(this.control['controls'].length).fill(null);
        }
        if (this.checkboxGroupValues[index] === null) {
            event.target.value = this.schema.enum[index];
            this.checkboxGroupValues[index] = event.target.value;
        }
        else {
            this.checkboxGroupValues[index] = null;
        }
        this.control.setValue(this.checkboxGroupValues);
    };
    /**
     * @param {?} i
     * @param {?} val
     * @return {?}
     */
    CheckboxgroupComponent.prototype.getId = /**
     * @param {?} i
     * @param {?} val
     * @return {?}
     */
    function (i, val) {
        return i + "-" + val.replace(/[\W_]+/g, '') + "+" + this.randomSuffix;
    };
    CheckboxgroupComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <label [attr.class]=\"schema.key\" [ngClass]=\"{'margin-bottom--half': true, required: isRequired()}\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup></label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <div [class]=\"getClass('checkbox-group')\">\n      <div *ngFor=\"let child of this.control['controls']; let i = index\"\n           [ngClass]=\"{'checkbox-container': true, 'checked': child.value === schema.enum[i]}\">\n        <input\n          type=\"checkbox\"\n          [attr.id]=\"getId(i, schema.enum[i])\"\n          [checked]=\"child.value === schema.enum[i]\"\n          [name]=\"schema.key\"\n          [formControl]=\"child\"\n          (change)=\"setValue($event, i)\"\n          [value]=\"schema.enum[i]\" />\n        <label\n          [attr.for]=\"getId(i, schema.enum[i])\"\n          [attr.class]=\"schema.key\">\n          {{enumNames(i)}}\n        </label>\n      </div>\n    </div>\n  "
                },] },
    ];
    return CheckboxgroupComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MultiselectComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(MultiselectComponent, _super);
    function MultiselectComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    MultiselectComponent.prototype.enumNames = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return typeof (this.schema.enumNames) === 'undefined'
            ? this.schema.enum[index]
            : this.schema.enumNames[index];
    };
    MultiselectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <label [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <button type=\"button\" *ngIf=\"schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <select\n      class=\"form-control\"\n      name=\"name\"\n      [formControl]=\"control\"\n      multiple=\"multiple\"\n    >\n      <option\n        *ngFor=\"let en of schema.enum; let i = index\"\n        [selected]=\"control.value === en\"\n        [ngValue]=\"en\">\n        {{enumNames(i)}}\n      </option>\n    </select>\n  "
                },] },
    ];
    return MultiselectComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TextareaComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(TextareaComponent, _super);
    function TextareaComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextareaComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <label ngClass=\"{required: isRequired()}\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <textarea\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [formControl]=\"control\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.minLength]=\"schema.minLength || null\"\n      [attr.placeholder]=\"placeholder()\"\n    ></textarea>\n    <jf-error [control]=\"control\"></jf-error>\n  "
                },] },
    ];
    return TextareaComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(SelectComponent, _super);
    function SelectComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    SelectComponent.prototype.emptyOption = /**
     * @return {?}
     */
    function () {
        return _super.prototype.title.call(this).replace(/[^A-Z0-9]+$/ig, '');
    };
    SelectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <div class=\"select-container\">\n      <label [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n        {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n      </label>\n      <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n      <select\n        class=\"form-control\"\n        name=\"name\"\n        [formControl]=\"control\"\n      >\n        <option value=\"\" [selected]=\"control.value === ''\" [disabled]=\"true\">\n          {{emptyOption()}}\n        </option>\n        <option\n          *ngFor=\"let en of this.schema.enum; let i = index\"\n          [selected]=\"control.value === en\"\n          [ngValue]=\"en\">\n          {{enumNames(i)}}\n        </option>\n      </select>\n    </div>\n    <jf-error [control]=\"control\"></jf-error>\n  "
                },] },
    ];
    return SelectComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BooleanComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(BooleanComponent, _super);
    function BooleanComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BooleanComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <div [class]=\"getClass('checkbox-group')\">\n      <div class=\"checkbox-container\">\n        <input\n          [id]=\"schema.key\"\n          [name]=\"schema.key\"\n          type=\"checkbox\"\n          [formControl]=\"control\"\n        />\n        <label [attr.for]=\"schema.key\" [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n          {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n        </label>\n      </div>\n    </div>\n    <jf-error [control]=\"control\"></jf-error>\n  "
                },] },
    ];
    return BooleanComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NumberComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(NumberComponent, _super);
    function NumberComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <label [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\" *ngIf=\"type() !== 'hidden'\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <input\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [attr.type]=\"'number'\"\n      [formControl]=\"control\"\n      [attr.placeholder]=\"placeholder()\"\n    />\n    <jf-error [control]=\"control\"></jf-error>\n  "
                },] },
    ];
    return NumberComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PhotoComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(PhotoComponent, _super);
    function PhotoComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    PhotoComponent.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        var /** @type {?} */ file = event.target.files[0];
        var /** @type {?} */ reader = new FileReader();
        reader.onloadend = function () {
            _this.processFile(reader.result, file.type)
                .then(function (data) {
                _this.photoData = data.toString();
                _this.control.setValue(_this.photoData);
            });
        };
        reader.onerror = function () {
            console.log('There was an error reading the file!');
        };
        if (typeof (file) !== 'undefined') {
            reader.readAsDataURL(file);
        }
    };
    /**
     * @return {?}
     */
    PhotoComponent.prototype.previewSrcExists = /**
     * @return {?}
     */
    function () {
        return typeof (this.photoData) === 'string';
    };
    /**
     * @return {?}
     */
    PhotoComponent.prototype.clearPhoto = /**
     * @return {?}
     */
    function () {
        this.photoData = null;
        this.control.reset();
    };
    /**
     * @param {?} dataURL
     * @param {?} fileType
     * @return {?}
     */
    PhotoComponent.prototype.processFile = /**
     * @param {?} dataURL
     * @param {?} fileType
     * @return {?}
     */
    function (dataURL, fileType) {
        var /** @type {?} */ maxWidth = 800;
        var /** @type {?} */ maxHeight = 800;
        var /** @type {?} */ image = new Image();
        image.src = dataURL;
        return new Promise(function (resolve, reject) {
            image.onload = function () {
                var /** @type {?} */ width = image.width;
                var /** @type {?} */ height = image.height;
                var /** @type {?} */ shouldResize = (width > maxWidth) || (height > maxHeight);
                if (!shouldResize) {
                    resolve(dataURL);
                }
                var /** @type {?} */ newWidth;
                var /** @type {?} */ newHeight;
                if (width > height) {
                    newHeight = height * (maxWidth / width);
                    newWidth = maxWidth;
                }
                else {
                    newWidth = width * (maxHeight / height);
                    newHeight = maxHeight;
                }
                var /** @type {?} */ canvas = document.createElement('canvas');
                canvas.width = newWidth;
                canvas.height = newHeight;
                var /** @type {?} */ context = canvas.getContext('2d');
                context.drawImage(image, 0, 0, newWidth, newHeight);
                resolve(canvas.toDataURL(fileType));
            };
            image.onerror = function (err) { return reject(err); };
        });
    };
    PhotoComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <label [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <div *ngIf=\"previewSrcExists()\" class=\"photo-preview\">\n      <img [attr.src]=\"photoData\" />\n      <span href=\"#\" style=\"cursor: pointer;\" (click)=\"clearPhoto()\">\n        <i class=\"la la-close\"></i>\n      </span>\n    </div>\n    <div>\n      <input\n        *ngIf=\"!previewSrcExists()\"\n        type=\"file\"\n        (change)=\"onChange($event)\"\n      />\n      <input type=\"hidden\" [name]=\"schema.key\" [formControl]=\"control\" />\n    </div>\n  "
                },] },
    ];
    return PhotoComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RadiogroupComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(RadiogroupComponent, _super);
    function RadiogroupComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.randomSuffix = Math.random().toString(36).substring(7);
        return _this;
    }
    /**
     * @param {?} i
     * @param {?} val
     * @return {?}
     */
    RadiogroupComponent.prototype.getId = /**
     * @param {?} i
     * @param {?} val
     * @return {?}
     */
    function (i, val) {
        return i + "-" + val.toString().replace(/[\W_]+/g, '') + "+" + this.randomSuffix;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    RadiogroupComponent.prototype.getName = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return key + "-" + this.randomSuffix;
    };
    RadiogroupComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <label [attr.class]=\"schema.key\" [ngClass]=\"{'margin-bottom--half': true, required: isRequired()}\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup></label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <div [class]=\"getClass('radio-group')\">\n      <div *ngFor=\"let enum of this.schema.enum; let i = index\"\n           [ngClass]=\"{'radio-container': true, 'checked': control.value === enum}\">\n        <input\n          type=\"radio\"\n          [attr.id]=\"getId(i, enum)\"\n          [checked]=\"control.value === enum\"\n          [name]=\"getName(schema.key)\"\n          [formControl]=\"control\"\n          [value]=\"enum\" />\n        <label\n          [attr.for]=\"getId(i, enum)\"\n          [attr.class]=\"schema.key\">\n           {{enumNames(i)}}\n        </label>\n      </div>\n    </div>\n  "
                },] },
    ];
    return RadiogroupComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DateComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(DateComponent, _super);
    function DateComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numberMask = text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_4___default()({ allowDecimal: false, prefix: '' });
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    DateComponent.prototype.cleanMask = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.control.setValue(value.replace(/\D/g, ''));
    };
    DateComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <label [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <input\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [attr.type]=\"'date'\"\n      [formControl]=\"control\"\n      [placeholder]=\"placeholder()\"\n      [textMask]=\"{ mask: numberMask}\"\n      (input)=cleanMask($event.target.value)\n    />\n    <jf-error [control]=\"control\"></jf-error>\n  "
                },] },
    ];
    return DateComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MoneyComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(MoneyComponent, _super);
    function MoneyComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numberMask = text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_4___default()({ allowDecimal: false, prefix: '' });
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    MoneyComponent.prototype.cleanMask = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.control.setValue(value.replace(/\D/g, ''));
    };
    MoneyComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <label [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <input\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [attr.type]=\"'text'\"\n      [formControl]=\"control\"\n      [placeholder]=\"placeholder()\"\n      [textMask]=\"{ mask: numberMask}\"\n      (input)=cleanMask($event.target.value)\n    />\n    <jf-error [control]=\"control\"></jf-error>\n  "
                },] },
    ];
    return MoneyComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var JsonFormBootstrap4 = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(JsonFormBootstrap4, _super);
    function JsonFormBootstrap4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fieldTypes = {
            string: StringComponent,
            select: SelectComponent,
            number: NumberComponent,
            boolean: BooleanComponent,
            photo: PhotoComponent,
            textarea: TextareaComponent,
            object: ObjectComponent,
            array: ArrayComponent,
            date: DateComponent,
            radiogroup: RadiogroupComponent,
            checkboxgroup: CheckboxgroupComponent,
            multiselect: MultiselectComponent,
            money: MoneyComponent,
            button: ButtonComponent
        };
        return _this;
    }
    JsonFormBootstrap4.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return JsonFormBootstrap4;
}(JsonFormFieldsService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ChooserComponent = /** @class */ (function () {
    function ChooserComponent() {
        this.nested = false;
        this.keys = Object.keys;
    }
    ChooserComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'jf-component-chooser, [jf-component-chooser]',
                    template: "\n    <h2 *ngIf=\"schema && schema.hasOwnProperty('title') && !nested\">\n      {{schema.title}}\n    </h2>\n    <h4 *ngIf=\"schema && schema.hasOwnProperty('title') && nested\">\n      {{schema.title}}\n    </h4>\n    <div [ngClass]=\"['form-container']\">\n      <div class=\"description\" *ngIf=\"schema && schema.hasOwnProperty('description')\" [innerHTML]=\"schema.description\"></div>\n      <div *ngFor=\"let control of keys(form.controls)\" jf-field [control]=\"form.get(control)\"></div>\n    </div>\n  "
                },] },
    ];
    ChooserComponent.propDecorators = {
        form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        schema: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        nested: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return ChooserComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FieldComponent = /** @class */ (function () {
    function FieldComponent(jsonFormFieldsService, el) {
        this.jsonFormFieldsService = jsonFormFieldsService;
        this.el = el;
        this.patterns = {};
    }
    /**
     * @return {?}
     */
    FieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.generateField();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FieldComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.generateField();
    };
    /**
     * @return {?}
     */
    FieldComponent.prototype.generateField = /**
     * @return {?}
     */
    function () {
        this.container.clear();
        this.jsonFormFieldsService[0].setRootViewContainerRef(this.container);
        this.jsonFormFieldsService[0].addDynamicComponent(this.control);
        this.el.nativeElement.className = "field margin-bottom " + this.getClass() + " form-group";
    };
    /**
     * @param {?=} defaultClass
     * @return {?}
     */
    FieldComponent.prototype.getClass = /**
     * @param {?=} defaultClass
     * @return {?}
     */
    function (defaultClass) {
        if (defaultClass === void 0) { defaultClass = ''; }
        var /** @type {?} */ fieldClass = [defaultClass];
        fieldClass.push(this.control.schema.type);
        fieldClass.push(this.control.schema.key);
        if (this.control.schema.hasOwnProperty('description')) {
            fieldClass.push('has-info');
        }
        if (this.control.schema.hasOwnProperty('format')) {
            fieldClass.push(this.control.schema.format);
        }
        if (this.control.style && this.control.style.default && ['radiogroup', 'checkboxgroup'].indexOf(this.control.schema.format) === -1) {
            fieldClass.push(this.control.style.default);
        }
        return fieldClass.filter(function (d) { return d; }).join(' ');
    };
    FieldComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'jf-field, [jf-field]',
                    template: "\n    <ng-content></ng-content>\n    <ng-container #container></ng-container>\n  "
                },] },
    ];
    /** @nocollapse */
    FieldComponent.ctorParameters = function () { return [
        { type: JsonFormFieldsService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    FieldComponent.propDecorators = {
        container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },] }],
        control: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return FieldComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormButtonComponent = /** @class */ (function () {
    function FormButtonComponent(componentFactoryResolver, jsonFormFieldsService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.jsonFormFieldsService = jsonFormFieldsService;
        this.isFormValid = true;
        this.label = '';
        this.isMultiStep = false;
        this.steps = [];
        this.submit = '';
        this.continue = '';
        this.cancel = '';
        this.isWorking = false;
        this.handleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    FormButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.button.clear();
        var /** @type {?} */ componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.jsonFormFieldsService[0].get('button'));
        var /** @type {?} */ componentRef = this.button.createComponent(componentFactory);
        (/** @type {?} */ (componentRef.instance)).type = this.getType();
        (/** @type {?} */ (componentRef.instance)).isVisible = this.isVisible();
        (/** @type {?} */ (componentRef.instance)).class = this.getClass();
        (/** @type {?} */ (componentRef.instance)).disabled = this.isWorking;
        (/** @type {?} */ (componentRef.instance)).isWorking = this.isWorking;
        (/** @type {?} */ (componentRef.instance)).label = this.getLabel();
        (/** @type {?} */ (componentRef.instance)).handleButtonClick = this.handleClick;
        (/** @type {?} */ (componentRef.instance)).color = this.submit ? 'primary' : '';
    };
    /**
     * @return {?}
     */
    FormButtonComponent.prototype.getClass = /**
     * @return {?}
     */
    function () {
        return (this.cancel.length > 0)
            ? ['btn btn-default button', this.cancelClass || '']
            : ['btn btn-primary button button--accept', this.submitClass || '', (this.isFormValid ? 'valid' : 'invalid')];
    };
    /**
     * @return {?}
     */
    FormButtonComponent.prototype.isVisible = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ step = this.steps.findIndex(function (s) { return s.visible; });
        if (this.isMultiStep && this.cancel.length > 0 && this.steps[step]) {
            return this.steps[step].type !== 'first';
        }
        return true;
    };
    /**
     * @return {?}
     */
    FormButtonComponent.prototype.getLabel = /**
     * @return {?}
     */
    function () {
        if (this.isMultiStep && this.cancel.length > 0) {
            var /** @type {?} */ step = this.steps.findIndex(function (s) { return s.visible; });
            if (this.steps[step] && this.steps[step].type !== 'first') {
                return this.cancel;
            }
        }
        else if (this.isMultiStep) {
            var /** @type {?} */ step = this.steps.findIndex(function (s) { return s.visible; });
            if (this.steps[step] && this.steps[step].type !== 'last') {
                return this.continue;
            }
            return this.submit;
        }
        else if (this.cancel.length > 0) {
            return this.cancel;
        }
        return this.submit;
    };
    /**
     * @return {?}
     */
    FormButtonComponent.prototype.getType = /**
     * @return {?}
     */
    function () {
        if (this.cancel) {
            return 'button';
        }
        return 'submit';
    };
    /**
     * @return {?}
     */
    FormButtonComponent.prototype.handleButtonClick = /**
     * @return {?}
     */
    function () {
        if (this.cancel.length > 0) {
            this.handleClick.emit();
        }
    };
    FormButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'jf-form-button',
                    template: "\n    <ng-container #button></ng-container>\n  "
                },] },
    ];
    /** @nocollapse */
    FormButtonComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: JsonFormFieldsService }
    ]; };
    FormButtonComponent.propDecorators = {
        isFormValid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isMultiStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        submit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        continue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        submitClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cancelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isWorking: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        handleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['button', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },] }]
    };
    return FormButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InfoButtonComponent = /** @class */ (function () {
    function InfoButtonComponent() {
    }
    InfoButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'jf-info-button',
                    template: "\n    <a\n      [attr.href]=\"'javascript:void(0)'\"\n      *ngIf=\"title\"\n      [attr.class]=\"'btn btn-link info'\" [attr.title]=\"title\">Info</a>\n  "
                },] },
    ];
    InfoButtonComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return InfoButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WorkingSpinnerComponent = /** @class */ (function () {
    function WorkingSpinnerComponent() {
        this.isWorking = false;
    }
    WorkingSpinnerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'jf-working-spinner',
                    template: "\n    <svg *ngIf=\"isWorking\" width=\"38\" height=\"38\" viewBox=\"0 0 38 38\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"#fff\">\n      <g fill=\"none\" fill-rule=\"evenodd\">\n        <g transform=\"translate(1 1)\" stroke-width=\"2\">\n          <circle stroke-opacity=\".5\" cx=\"18\" cy=\"18\" r=\"18\"/>\n          <path d=\"M36 18c0-9.94-8.06-18-18-18\">\n            <animateTransform\n              attributeName=\"transform\"\n              type=\"rotate\"\n              from=\"0 18 18\"\n              to=\"360 18 18\"\n              dur=\"1s\"\n              repeatCount=\"indefinite\"/>\n          </path>\n        </g>\n      </g>\n    </svg>\n  "
                },] },
    ];
    WorkingSpinnerComponent.propDecorators = {
        isWorking: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return WorkingSpinnerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                        angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                    ],
                    declarations: [
                        JsonFormComponent,
                        CommonComponent,
                        ChooserComponent,
                        FieldComponent,
                        FormButtonComponent,
                        InfoButtonComponent,
                        WorkingSpinnerComponent,
                        StringViewComponent,
                        SelectViewComponent,
                        NumberViewComponent,
                        BooleanViewComponent,
                        PhotoViewComponent,
                        TextareaViewComponent,
                        DateViewComponent,
                        RadiogroupViewComponent,
                        CheckboxgroupViewComponent,
                        MultiselectViewComponent,
                        MoneyViewComponent,
                        ObjectComponent,
                        ArrayComponent,
                        ArrayViewComponent
                    ],
                    entryComponents: [
                        JsonFormComponent,
                        CommonComponent,
                        ChooserComponent,
                        FieldComponent,
                        FormButtonComponent,
                        InfoButtonComponent,
                        WorkingSpinnerComponent,
                        StringViewComponent,
                        SelectViewComponent,
                        NumberViewComponent,
                        BooleanViewComponent,
                        PhotoViewComponent,
                        TextareaViewComponent,
                        DateViewComponent,
                        RadiogroupViewComponent,
                        CheckboxgroupViewComponent,
                        MultiselectViewComponent,
                        MoneyViewComponent,
                        ObjectComponent,
                        ArrayComponent,
                        ArrayViewComponent
                    ],
                    exports: [
                        ChooserComponent,
                        FieldComponent,
                        FormButtonComponent,
                        InfoButtonComponent,
                        WorkingSpinnerComponent,
                        JsonFormComponent,
                        CommonComponent,
                        ArrayComponent,
                        ObjectComponent
                    ]
                },] },
    ];
    return SharedModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var JsonFormModule = /** @class */ (function () {
    function JsonFormModule() {
    }
    /**
     * @param {...?} frameworks
     * @return {?}
     */
    JsonFormModule.forRoot = /**
     * @param {...?} frameworks
     * @return {?}
     */
    function () {
        var frameworks = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            frameworks[_i] = arguments[_i];
        }
        var /** @type {?} */ loadFramework = frameworks.length
            ? frameworks.map(function (framework) { return framework.forRoot().providers[0]; })
            : [{ provide: JsonFormFieldsService, useClass: JsonFormBootstrap4, multi: true }];
        return {
            ngModule: JsonFormModule,
            providers: Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spread"])([
                JsonFormDefaultsService,
                JsonFormValidatorsService
            ], loadFramework)
        };
    };
    JsonFormModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                        SharedModule
                    ],
                    exports: [
                        CommonComponent,
                        JsonFormComponent
                    ],
                    entryComponents: [
                        JsonFormComponent,
                    ],
                    providers: [
                        JsonFormDefaultsService,
                        JsonFormValidatorsService
                    ]
                },] },
    ];
    return JsonFormModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ErrorComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(ErrorComponent, _super);
    function ErrorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'jf-error, [jf-error]',
                    template: "\n    <div *ngIf=\"control.invalid && (control.dirty || control.touched)\" class=\"invalid-feedback\">\n      <ng-container *ngIf=\"control.errors && control.errors['required']\">\n        This field is required.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['pattern']\">\n        Input value is invalid.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['minlength']\">\n        Input has to be a minimum of {{control.errors['minlength']['requiredLength']}} characters.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['maxlength']\">\n        Input can contain a maximum of {{control.errors['maxlength']['requiredLength']}} characters.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['min']\">\n        Enter a value greater than or equal to {{control.errors['min']['min']}}.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['max']\">\n        Enter a value less than or equal to {{control.errors['max']['max']}}.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['customError']\">\n        {{control.errors['customError']}}\n      </ng-container>\n    </div>\n  "
                },] },
    ];
    ErrorComponent.propDecorators = {
        control: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return ErrorComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var JsonFormBootstrap4Module = /** @class */ (function () {
    function JsonFormBootstrap4Module() {
    }
    /**
     * @return {?}
     */
    JsonFormBootstrap4Module.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: JsonFormBootstrap4Module,
            providers: [
                {
                    provide: JsonFormFieldsService,
                    useClass: JsonFormBootstrap4,
                    multi: true
                }
            ]
        };
    };
    JsonFormBootstrap4Module.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                        angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"],
                        SharedModule
                    ],
                    declarations: [
                        StringComponent,
                        SelectComponent,
                        DateComponent,
                        TextareaComponent,
                        ErrorComponent,
                        MoneyComponent,
                        NumberComponent,
                        BooleanComponent,
                        ButtonComponent,
                        CheckboxgroupComponent,
                        MultiselectComponent,
                        PhotoComponent,
                        RadiogroupComponent
                    ],
                    entryComponents: [
                        StringComponent,
                        SelectComponent,
                        DateComponent,
                        TextareaComponent,
                        ErrorComponent,
                        MoneyComponent,
                        NumberComponent,
                        BooleanComponent,
                        ButtonComponent,
                        CheckboxgroupComponent,
                        MultiselectComponent,
                        PhotoComponent,
                        RadiogroupComponent
                    ]
                },] },
    ];
    return JsonFormBootstrap4Module;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var StringMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(StringMaterialComponent, _super);
    function StringMaterialComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <mat-form-field>\n      <input\n        matInput\n        [name]=\"schema.key\"\n        [attr.type]=\"type()\"\n        [formControl]=\"control\"\n        [attr.maxLength]=\"schema.maxLength || null\"\n        [attr.minLength]=\"schema.minLength || null\"\n        [attr.placeholder]=\"placeholder()\"\n        [textMask]=\"{ mask: getMask() }\"\n        [placeholder]=\"title()\"\n      />\n      <mat-error jf-error [control]=\"control\"></mat-error>\n    </mat-form-field>\n  "
                },] },
    ];
    return StringMaterialComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TextareaMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(TextareaMaterialComponent, _super);
    function TextareaMaterialComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextareaMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <mat-form-field class=\"example-full-width\">\n      <textarea\n          matInput\n          [name]=\"schema.key\"\n          [formControl]=\"control\"\n          [attr.maxLength]=\"schema.maxLength || null\"\n          [attr.minLength]=\"schema.minLength || null\"\n          [attr.placeholder]=\"placeholder()\"\n          [placeholder]=\"title()\">\n      </textarea>\n      <mat-error jf-error [control]=\"control\"></mat-error>\n    </mat-form-field>\n  "
                },] },
    ];
    return TextareaMaterialComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(SelectMaterialComponent, _super);
    function SelectMaterialComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    SelectMaterialComponent.prototype.emptyOption = /**
     * @return {?}
     */
    function () {
        return _super.prototype.title.call(this).replace(/[^A-Z0-9]+$/ig, '');
    };
    SelectMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n\n  <mat-form-field>\n    <mat-select\n      class=\"form-control\"\n      name=\"name\"\n      [formControl]=\"control\"\n      placeholder=\"{{emptyOption()}}\"\n    >\n      <mat-option [disabled]=\"true\">\n          {{emptyOption()}}\n      </mat-option>\n      <mat-option *ngFor=\"let en of this.schema.enum; let i = index\" [value]=\"en\">\n          {{enumNames(i)}}\n      </mat-option>\n    </mat-select>\n    <mat-error jf-error [control]=\"control\"></mat-error>\n  </mat-form-field>\n\n  "
                },] },
    ];
    return SelectMaterialComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RadiogroupMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(RadiogroupMaterialComponent, _super);
    function RadiogroupMaterialComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadiogroupMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <div>\n      <label [attr.class]=\"schema.key\" [ngClass]=\"{'margin-bottom--half': true, required: isRequired()}\">\n        {{title()}}<sup *ngIf=\"isRequired()\">*</sup></label>\n\n      <mat-radio-group [formControl]=\"control\" *ngFor=\"let enum of this.schema.enum; let i = index\">\n        <mat-radio-button\n          [checked]=\"control.value === enum.toString()\"\n          [value]=\"enum.toString()\"\n        >\n          {{enumNames(i)}}\n        </mat-radio-button>\n      </mat-radio-group>\n    </div>\n  "
                },] },
    ];
    return RadiogroupMaterialComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PhotoMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(PhotoMaterialComponent, _super);
    function PhotoMaterialComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    PhotoMaterialComponent.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        var /** @type {?} */ file = event.target.files[0];
        var /** @type {?} */ reader = new FileReader();
        reader.onloadend = function () {
            _this.processFile(reader.result, file.type)
                .then(function (data) {
                _this.photoData = data.toString();
                _this.control.setValue(_this.photoData);
            });
        };
        reader.onerror = function () {
            console.log('There was an error reading the file!');
        };
        if (typeof (file) !== 'undefined') {
            reader.readAsDataURL(file);
        }
    };
    /**
     * @return {?}
     */
    PhotoMaterialComponent.prototype.previewSrcExists = /**
     * @return {?}
     */
    function () {
        return typeof (this.photoData) === 'string';
    };
    /**
     * @return {?}
     */
    PhotoMaterialComponent.prototype.clearPhoto = /**
     * @return {?}
     */
    function () {
        this.photoData = null;
        this.control.reset();
    };
    /**
     * @param {?} dataURL
     * @param {?} fileType
     * @return {?}
     */
    PhotoMaterialComponent.prototype.processFile = /**
     * @param {?} dataURL
     * @param {?} fileType
     * @return {?}
     */
    function (dataURL, fileType) {
        var /** @type {?} */ maxWidth = 800;
        var /** @type {?} */ maxHeight = 800;
        var /** @type {?} */ image = new Image();
        image.src = dataURL;
        return new Promise(function (resolve, reject) {
            image.onload = function () {
                var /** @type {?} */ width = image.width;
                var /** @type {?} */ height = image.height;
                var /** @type {?} */ shouldResize = (width > maxWidth) || (height > maxHeight);
                if (!shouldResize) {
                    resolve(dataURL);
                }
                var /** @type {?} */ newWidth;
                var /** @type {?} */ newHeight;
                if (width > height) {
                    newHeight = height * (maxWidth / width);
                    newWidth = maxWidth;
                }
                else {
                    newWidth = width * (maxHeight / height);
                    newHeight = maxHeight;
                }
                var /** @type {?} */ canvas = document.createElement('canvas');
                canvas.width = newWidth;
                canvas.height = newHeight;
                var /** @type {?} */ context = canvas.getContext('2d');
                context.drawImage(image, 0, 0, newWidth, newHeight);
                resolve(canvas.toDataURL(fileType));
            };
            image.onerror = function (err) { return reject(err); };
        });
    };
    PhotoMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <label [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <div *ngIf=\"previewSrcExists(); else addImage\" class=\"photo-preview\">\n      <button\n        class=\"photo-add\"\n        mat-button\n        color=\"primary\"\n        [style.background-image]=\"makeTrustedImage(photoData)\"\n        [style.background-size]=\"'cover'\"\n        [style.background-repeat]=\"'no-repeat'\"\n        (click)=\"$event.preventDefault(); fileInput.click();\"\n      >\n        <mat-icon>add</mat-icon>\n      </button>\n      <button\n        class=\"photo-remove\"\n        mat-mini-fab\n        color=\"warn\"\n        (click)=\"clearPhoto()\"\n      >\n        <mat-icon>close</mat-icon>\n      </button>\n    </div>\n    <ng-template #addImage>\n      <button\n        class=\"photo-add\"\n        mat-button\n        color=\"primary\"\n        (click)=\"$event.preventDefault(); fileInput.click();\"\n      >\n        <mat-icon>add</mat-icon>\n      </button>\n    </ng-template>\n    <input #fileInput type=\"file\" [name]=\"schema.key\" (change)=\"onChange($event)\" style=\"display:none;\"/>\n    <input type=\"hidden\" [name]=\"schema.key\" [formControl]=\"control\" />\n  "
                },] },
    ];
    return PhotoMaterialComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NumberMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(NumberMaterialComponent, _super);
    function NumberMaterialComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <mat-form-field>\n      <input\n        matInput\n        [name]=\"schema.key\"\n        [attr.type]=\"'number'\"\n        [formControl]=\"control\"\n        [attr.placeholder]=\"placeholder()\"\n        [placeholder]=\"title()\"\n      />\n      <mat-error jf-error [control]=\"control\"></mat-error>\n    </mat-form-field>\n  "
                },] },
    ];
    return NumberMaterialComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MultiselectMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(MultiselectMaterialComponent, _super);
    function MultiselectMaterialComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    MultiselectMaterialComponent.prototype.enumNames = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return typeof (this.schema.enumNames) === 'undefined'
            ? this.schema.enum[index]
            : this.schema.enumNames[index];
    };
    MultiselectMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n  <mat-form-field>\n    <mat-select [formControl]=\"control\" name=\"name\" multiple>\n      <mat-option *ngFor=\"let en of schema.enum; let i = index\" [value]=\"en\">{{enumNames(i)}}</mat-option>\n    </mat-select>\n    <mat-error jf-error [control]=\"control\"></mat-error>\n  </mat-form-field>\n  "
                },] },
    ];
    return MultiselectMaterialComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CheckboxgroupMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(CheckboxgroupMaterialComponent, _super);
    function CheckboxgroupMaterialComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.checkboxGroupValues = [];
        _this.randomSuffix = Math.random().toString(36).substring(7);
        return _this;
    }
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    CheckboxgroupMaterialComponent.prototype.setValue = /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        if (this.checkboxGroupValues.length === 0) {
            this.checkboxGroupValues = new Array(this.control['controls'].length).fill(null);
        }
        if (this.checkboxGroupValues[index] === null) {
            event.target.value = this.schema.enum[index];
            this.checkboxGroupValues[index] = event.target.value;
        }
        else {
            this.checkboxGroupValues[index] = null;
        }
        this.control.setValue(this.checkboxGroupValues);
    };
    /**
     * @param {?} i
     * @param {?} val
     * @return {?}
     */
    CheckboxgroupMaterialComponent.prototype.getId = /**
     * @param {?} i
     * @param {?} val
     * @return {?}
     */
    function (i, val) {
        return i + "-" + val.replace(/[\W_]+/g, '') + "+" + this.randomSuffix;
    };
    CheckboxgroupMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <mat-checkbox\n    *ngFor=\"let child of this.control['controls']; let i = index\"\n    [attr.id]=\"getId(i, schema.enum[i])\"\n    [checked]=\"child.value === schema.enum[i]\"\n    [name]=\"schema.key\"\n    [formControl]=\"child\"\n    (change)=\"setValue($event, i)\"\n    [value]=\"schema.enum[i]\"\n    >\n        {{enumNames(i)}}\n    </mat-checkbox>\n  "
                },] },
    ];
    return CheckboxgroupMaterialComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BooleanMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(BooleanMaterialComponent, _super);
    function BooleanMaterialComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BooleanMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n  <mat-slide-toggle\n  [id]=\"schema.key\"\n  [name]=\"schema.key\"\n  [formControl]=\"control\">\n    {{title()}}\n  </mat-slide-toggle>\n  "
                },] },
    ];
    return BooleanMaterialComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DateMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(DateMaterialComponent, _super);
    function DateMaterialComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <mat-form-field>\n      <input\n        matInput\n        [matDatepicker]='myDatepicker'\n        [formControl]='control'\n        [placeholder]='title()'\n      >\n      <mat-datepicker-toggle matSuffix [for]='myDatepicker'></mat-datepicker-toggle>\n      <mat-datepicker #myDatepicker></mat-datepicker>\n      <mat-error jf-error [control]='control'></mat-error>\n    </mat-form-field>\n  "
                },] },
    ];
    return DateMaterialComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ButtonMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(ButtonMaterialComponent, _super);
    function ButtonMaterialComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'jf-button',
                    template: "\n    <button\n      mat-raised-button\n      [color]=\"color\"\n      *ngIf=\"isVisible\"\n      [type]=\"type\"\n      [ngClass]=\"class\"\n      [disabled]=\"disabled\"\n      (click)=\"handleButtonClick\">\n      {{label}}\n    </button>\n  "
                },] },
    ];
    return ButtonMaterialComponent;
}(ButtonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ArrayMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(ArrayMaterialComponent, _super);
    function ArrayMaterialComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrayMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <mat-card [ngClass]=\"['object', control.schema.key]\">\n      <h6 *ngIf=\"getLegend(control).length\">{{getLegend(control)}}</h6>\n      <div *ngFor=\"let arrControl of getEnabledControls(control); let i = index;\">\n        <div class=\"row\">\n          <div jf-component-chooser [form]=\"arrControl\"></div>\n          <button\n            *ngIf=\"control.controls.length > 1\"\n            mat-icon-button\n            (click)=\"$event.preventDefault(); removeControl(control, i)\"\n            color=\"warn\"\n            class=\"remove\"\n          >\n            <mat-icon>remove_circle_outline</mat-icon>\n          </button>\n        </div>\n      </div>\n      <div class=\"row\">\n        <button mat-button color=\"primary\" (click)=\"$event.preventDefault(); addControl(control)\">Add</button>\n      </div>\n    </mat-card>\n  "
                },] },
    ];
    return ArrayMaterialComponent;
}(ArrayComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var JsonFormMaterial = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(JsonFormMaterial, _super);
    function JsonFormMaterial() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fieldTypes = {
            string: StringMaterialComponent,
            select: SelectMaterialComponent,
            number: NumberMaterialComponent,
            boolean: BooleanMaterialComponent,
            photo: PhotoMaterialComponent,
            textarea: TextareaMaterialComponent,
            object: ObjectComponent,
            array: ArrayMaterialComponent,
            date: DateMaterialComponent,
            radiogroup: RadiogroupMaterialComponent,
            checkboxgroup: CheckboxgroupMaterialComponent,
            multiselect: MultiselectMaterialComponent,
            money: MoneyComponent,
            button: ButtonMaterialComponent
        };
        return _this;
    }
    JsonFormMaterial.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return JsonFormMaterial;
}(JsonFormFieldsService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ErrorMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(ErrorMaterialComponent, _super);
    function ErrorMaterialComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'jf-error, [jf-error]',
                    template: "\n    <ng-container *ngIf=\"control.invalid && (control.dirty || control.touched)\">\n      <ng-container *ngIf=\"control.errors && control.errors['required']\">\n        This field is required.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['pattern']\">\n        Input value is invalid.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['minlength']\">\n        Input has to be a minimum of {{control.errors['minlength']['requiredLength']}} characters.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['maxlength']\">\n        Input can contain a maximum of {{control.errors['maxlength']['requiredLength']}} characters.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['min']\">\n        Enter a value greater than or equal to {{control.errors['min']['min']}}.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['max']\">\n        Enter a value less than or equal to {{control.errors['max']['max']}}.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['customError']\">\n        {{control.errors['customError']}}\n      </ng-container>\n    </ng-container>\n  "
                },] },
    ];
    ErrorMaterialComponent.propDecorators = {
        control: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return ErrorMaterialComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var JsonFormMaterialModule = /** @class */ (function () {
    function JsonFormMaterialModule() {
    }
    /**
     * @return {?}
     */
    JsonFormMaterialModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: JsonFormMaterialModule,
            providers: [
                {
                    provide: JsonFormFieldsService,
                    useClass: JsonFormMaterial,
                    multi: true
                }
            ]
        };
    };
    JsonFormMaterialModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                        angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                        SharedModule
                    ],
                    declarations: [
                        StringMaterialComponent,
                        TextareaMaterialComponent,
                        SelectMaterialComponent,
                        RadiogroupMaterialComponent,
                        PhotoMaterialComponent,
                        NumberMaterialComponent,
                        MultiselectMaterialComponent,
                        CheckboxgroupMaterialComponent,
                        BooleanMaterialComponent,
                        DateMaterialComponent,
                        ErrorMaterialComponent,
                        ButtonMaterialComponent,
                        ArrayMaterialComponent
                    ],
                    entryComponents: [
                        StringMaterialComponent,
                        TextareaMaterialComponent,
                        SelectMaterialComponent,
                        RadiogroupMaterialComponent,
                        PhotoMaterialComponent,
                        NumberMaterialComponent,
                        MultiselectMaterialComponent,
                        CheckboxgroupMaterialComponent,
                        BooleanMaterialComponent,
                        DateMaterialComponent,
                        ErrorMaterialComponent,
                        ButtonMaterialComponent,
                        ArrayMaterialComponent
                    ]
                },] },
    ];
    return JsonFormMaterialModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1ZmxhLW5neC10cnUtZm9ybXMuanMubWFwIiwic291cmNlcyI6WyJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2NvbW1vbi9jb21tb24uY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvc3RyaW5nL3N0cmluZy52aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvc2VsZWN0L3NlbGVjdC52aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvbnVtYmVyL251bWJlci52aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvYm9vbGVhbi9ib29sZWFuLnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9waG90by9waG90by52aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvdGV4dGFyZWEvdGV4dGFyZWEudmlldy5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2RhdGUvZGF0ZS52aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvcmFkaW9ncm91cC9yYWRpb2dyb3VwLnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9jaGVja2JveGdyb3VwL2NoZWNrYm94Z3JvdXAudmlldy5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL211bHRpc2VsZWN0L211bHRpc2VsZWN0LnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9tb25leS9tb25leS52aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvbW9kZWxzL3NjaGVtYS1mb3JtLWNvbnRyb2wudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZnJhbWV3b3JrL3NoYXJlZC9jb21wb25lbnRzL29iamVjdC9vYmplY3QuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL21vZGVscy9zY2hlbWEtZm9ybS1hcnJheS50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9tb2RlbHMvc2NoZW1hLWZvcm0tZ3JvdXAudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZnJhbWV3b3JrL3NoYXJlZC9jb21wb25lbnRzL2FycmF5L2FycmF5LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvc2hhcmVkL2NvbXBvbmVudHMvYXJyYXkvYXJyYXkudmlldy5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZnJhbWV3b3JrL2pzb24tZm9ybS1maWVsZHMuc2VydmljZS50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9zZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvc2VydmljZXMvZGVmYXVsdHMuc2VydmljZS50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9qc29uLWZvcm0uY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9jaGVja2JveGdyb3VwL2NoZWNrYm94Z3JvdXAuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9tdWx0aXNlbGVjdC9tdWx0aXNlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2Jvb2xlYW4vYm9vbGVhbi5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL251bWJlci9udW1iZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9waG90by9waG90by5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL3JhZGlvZ3JvdXAvcmFkaW9ncm91cC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2RhdGUvZGF0ZS5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL21vbmV5L21vbmV5LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvYm9vdHN0cmFwNC9qc29uLWZvcm0tYm9vdHN0cmFwNC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvc2hhcmVkL2NvbXBvbmVudHMvY2hvb3Nlci9jaG9vc2VyLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvc2hhcmVkL2NvbXBvbmVudHMvZmllbGQvZmllbGQuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZyYW1ld29yay9zaGFyZWQvY29tcG9uZW50cy9mb3JtLWJ1dHRvbi9mb3JtLWJ1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZnJhbWV3b3JrL3NoYXJlZC9jb21wb25lbnRzL2luZm8tYnV0dG9uL2luZm8tYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvc2hhcmVkL2NvbXBvbmVudHMvd29ya2luZy1zcGlubmVyL3dvcmtpbmctc3Bpbm5lci5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZnJhbWV3b3JrL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2pzb24tZm9ybS5tb2R1bGUudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvYm9vdHN0cmFwNC9qc29uLWZvcm0tYm9vdHN0cmFwNC5tb2R1bGUudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL3N0cmluZy9zdHJpbmcubWF0ZXJpYWwuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy90ZXh0YXJlYS90ZXh0YXJlYS5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL3NlbGVjdC9zZWxlY3QubWF0ZXJpYWwuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9yYWRpb2dyb3VwL3JhZGlvZ3JvdXAubWF0ZXJpYWwuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9waG90by9waG90by5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL251bWJlci9udW1iZXIubWF0ZXJpYWwuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9tdWx0aXNlbGVjdC9tdWx0aXNlbGVjdC5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2NoZWNrYm94Z3JvdXAvY2hlY2tib3hncm91cC5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2Jvb2xlYW4vYm9vbGVhbi5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2RhdGUvZGF0ZS5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2J1dHRvbi9idXR0b24ubWF0ZXJpYWwuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9hcnJheS9hcnJheS5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZnJhbWV3b3JrL21hdGVyaWFsL2pzb24tZm9ybS1tYXRlcmlhbC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvZXJyb3IvZXJyb3IubWF0ZXJpYWwuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZyYW1ld29yay9tYXRlcmlhbC9qc29uLWZvcm0tbWF0ZXJpYWwubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSB9IGZyb20gJy4uLy4uL21vZGVscy9zY2hlbWEnO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbnRyb2wgfSBmcm9tICcuLi8uLi9tb2RlbHMvc2NoZW1hLWZvcm0tY29udHJvbCc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHN0YXJ0Q2FzZSBmcm9tICdsb2Rhc2guc3RhcnRjYXNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamYtY29tcG9uZW50JyxcbiAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbkNvbXBvbmVudCB7XG4gIHB1YmxpYyBjb250cm9sOiBTY2hlbWFGb3JtQ29udHJvbDtcbiAgcHVibGljIHNjaGVtYTogU2NoZW1hO1xuICBwdWJsaWMgc3R5bGU6IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplclxuICApIHt9XG5cbiAgaXNSZXF1aXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLnZhbGlkYXRvciAhPT0gbnVsbDtcbiAgfVxuXG4gIHRpdGxlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5zY2hlbWEudGl0bGUgPT09ICd1bmRlZmluZWQnXG4gICAgICA/IHRoaXMuc3RyVG9VcHBlckNhc2UodGhpcy5zY2hlbWEua2V5KSA6IHRoaXMuc2NoZW1hLnRpdGxlO1xuICB9XG5cbiAgc3RyVG9VcHBlckNhc2Uoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RhcnRDYXNlKHN0cik7XG4gIH1cblxuICBwbGFjZWhvbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEudGl0bGUgfHwgdGhpcy5zdHJUb1VwcGVyQ2FzZSh0aGlzLnNjaGVtYS5rZXkpO1xuICB9XG5cbiAgdHlwZSgpIHtcbiAgICBsZXQgZm9ybWF0ID0gdGhpcy5zY2hlbWEuZm9ybWF0IHx8ICd0ZXh0JztcblxuICAgIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgICBjYXNlICdwaG90byc6XG4gICAgICAgIGZvcm1hdCA9ICdmaWxlJztcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0O1xuICB9XG5cbiAgaWQoaT8pIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEua2V5ICsgJy0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpICsgJy0nICsgaTtcbiAgfVxuXG4gIGdldENsYXNzKGRlZmF1bHRDbGFzcz8pIHtcbiAgICByZXR1cm4gdGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgP1xuICAgICAgdGhpcy5zdHlsZVsnZGVmYXVsdCddIDogKGRlZmF1bHRDbGFzcyB8fCAnJyk7XG4gIH1cblxuICBnZXRNYXNrKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnbWFzaycpKSB7XG4gICAgICBjb25zdCBtYXNrOiBBcnJheTxzdHJpbmcgfCBSZWdFeHA+ID0gW107XG4gICAgICB0aGlzLnNjaGVtYS5tYXNrLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIG1hc2sucHVzaCgvXlxcLy4qXFwvJC8udGVzdChlbCkgPyBuZXcgUmVnRXhwKGVsLnJlcGxhY2UoL15cXC98XFwvJC9nLCAnJykpIDogZWwpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBtYXNrO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG1ha2VUcnVzdGVkSW1hZ2UoaW1hZ2UpOiBhbnkge1xuICAgIGNvbnN0IGltYWdlU3RyaW5nID0gIEpTT04uc3RyaW5naWZ5KGltYWdlKS5yZXBsYWNlKC9cXFxcbi9nLCAnJyk7XG4gICAgY29uc3Qgc3R5bGUgPSAndXJsKCcgKyBpbWFnZVN0cmluZyArICcpJztcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHN0eWxlKTtcbiAgfVxuXG4gIGVudW1OYW1lcyhpbmRleCkge1xuICAgIHJldHVybiB0eXBlb2YodGhpcy5zY2hlbWEuZW51bU5hbWVzKSA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gdGhpcy5zY2hlbWEuZW51bVtpbmRleF1cbiAgICAgIDogdGhpcy5zY2hlbWEuZW51bU5hbWVzW2luZGV4XTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxsYWJlbCBbbmdDbGFzc109XCJbJ2pmLWxhYmVsJywgc2NoZW1hLmtleSwgKGlzUmVxdWlyZWQoKSA/ICdyZXF1aXJlZCcgOiAnJyldXCIgKm5nSWY9XCJ0eXBlKCkgIT09ICdoaWRkZW4nXCI+XG4gICAgICB7e3RpdGxlKCl9fTxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+XG4gICAgPC9sYWJlbD5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCIgW2F0dHIuY2xhc3NdPVwiJ2luZm8nXCIgW2F0dHIudGl0bGVdPVwidGhpcy5zY2hlbWEuZGVzY3JpcHRpb25cIj5JbmZvPC9idXR0b24+XG4gICAgPGlucHV0XG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICBbbmFtZV09XCJzY2hlbWEua2V5XCJcbiAgICAgIFthdHRyLnR5cGVdPVwidHlwZSgpXCJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgICAgW2F0dHIubWluTGVuZ3RoXT1cInNjaGVtYS5taW5MZW5ndGggfHwgbnVsbFwiXG4gICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlcigpXCJcbiAgICAgIFt0ZXh0TWFza109XCJ7IG1hc2s6IGdldE1hc2soKSB9XCJcbiAgICAvPlxuICAgIDxqZi1lcnJvciBbY29udHJvbF09XCJjb250cm9sXCI+PC9qZi1lcnJvcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBTdHJpbmdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gIDxwPjxzcGFuPnt7dGl0bGUoKX19PC9zcGFuPiA8c3Bhbj57e2NvbnRyb2wudmFsdWV9fTwvc3Bhbj48L3A+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU3RyaW5nVmlld0NvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD48c3Bhbj57e3RpdGxlKCl9fTwvc3Bhbj4gPHNwYW4+e3tjb250cm9sLnZhbHVlfX08L3NwYW4+PC9wPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdFZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICBlbnVtTmFtZXMoaW5kZXgpIHtcbiAgICByZXR1cm4gdHlwZW9mKHRoaXMuc2NoZW1hLmVudW1OYW1lcykgPT09ICd1bmRlZmluZWQnXG4gICAgICA/IHRoaXMuc2NoZW1hLmVudW1baW5kZXhdXG4gICAgICA6IHRoaXMuc2NoZW1hLmVudW1OYW1lc1tpbmRleF07XG4gIH1cblxuICBlbXB0eU9wdGlvbigpIHtcbiAgICByZXR1cm4gc3VwZXIudGl0bGUoKS5yZXBsYWNlKC9bXkEtWjAtOV0rJC9pZywgJycpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+e3t0aXRsZSgpfX06IHt7Y29udHJvbC52YWx1ZX19PC9wPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlclZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gIDxwPjxzcGFuPnt7dGl0bGUoKX19PC9zcGFuPiA8c3Bhbj57e2NvbnRyb2wudmFsdWV9fTwvc3Bhbj48L3A+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQm9vbGVhblZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge31cbiIsImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxwPnt7dGl0bGUoKX19PC9wPlxuICAgIDxpbWcgc3JjPVwie3tjb250cm9sLnZhbHVlfX1cIiBjbGFzcz1cImltZy10aHVtYm5haWxcIiAvPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFBob3RvVmlld0NvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7fVxuXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gIDxwPjxzcGFuPnt7dGl0bGUoKX19PC9zcGFuPiA8c3Bhbj57e2NvbnRyb2wudmFsdWV9fTwvc3Bhbj48L3A+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgVGV4dGFyZWFWaWV3Q29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHsgfVxuXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcbmltcG9ydCBjcmVhdGVOdW1iZXJNYXNrIGZyb20gJ3RleHQtbWFzay1hZGRvbnMvZGlzdC9jcmVhdGVOdW1iZXJNYXNrJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gIDxwPjxzcGFuPnt7dGl0bGUoKX19PC9zcGFuPiA8c3Bhbj57e2NvbnRyb2wudmFsdWV9fTwvc3Bhbj48L3A+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICBudW1iZXJNYXNrID0gY3JlYXRlTnVtYmVyTWFzayh7IGFsbG93RGVjaW1hbDogZmFsc2UsIHByZWZpeDogJycgfSk7XG5cbiAgY2xlYW5NYXNrKHZhbHVlKSB7XG4gICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJykpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gIDxwPjxzcGFuPnt7dGl0bGUoKX19PC9zcGFuPiA8c3Bhbj57e2NvbnRyb2wudmFsdWV9fTwvc3Bhbj48L3A+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9ncm91cFZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+e3t0aXRsZSgpfX08L3A+XG4gICAgPHVsICpuZ0Zvcj1cImxldCBzZWxlY3RlZCBvZiBjb250cm9sLnZhbHVlXCI+XG4gICAgICA8bGk+e3tzZWxlY3RlZH19PC9saT5cbiAgICA8L3VsPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94Z3JvdXBWaWV3Q29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD57e3RpdGxlKCl9fTwvcD5cbiAgICA8dWwgKm5nRm9yPVwibGV0IHNlbGVjdGVkIG9mIGNvbnRyb2wudmFsdWVcIj5cbiAgICAgIDxsaT57e3NlbGVjdGVkfX08L2xpPlxuICAgIDwvdWw+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlzZWxlY3RWaWV3Q29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHtcbiAgZW51bU5hbWVzKGluZGV4KSB7XG4gICAgcmV0dXJuIHR5cGVvZih0aGlzLnNjaGVtYS5lbnVtTmFtZXMpID09PSAndW5kZWZpbmVkJ1xuICAgICAgPyB0aGlzLnNjaGVtYS5lbnVtW2luZGV4XVxuICAgICAgOiB0aGlzLnNjaGVtYS5lbnVtTmFtZXNbaW5kZXhdO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcbmltcG9ydCBjcmVhdGVOdW1iZXJNYXNrIGZyb20gJ3RleHQtbWFzay1hZGRvbnMvZGlzdC9jcmVhdGVOdW1iZXJNYXNrJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gIDxwPjxzcGFuPnt7dGl0bGUoKX19PC9zcGFuPiA8c3Bhbj57e2NvbnRyb2wudmFsdWV9fTwvc3Bhbj48L3A+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTW9uZXlWaWV3Q29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHtcbiAgbnVtYmVyTWFzayA9IGNyZWF0ZU51bWJlck1hc2soeyBhbGxvd0RlY2ltYWw6IGZhbHNlLCBwcmVmaXg6ICcnIH0pO1xuXG4gIGNsZWFuTWFzayh2YWx1ZSkge1xuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamYtYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uXG4gICAgICAqbmdJZj1cImlzVmlzaWJsZVwiXG4gICAgICBbdHlwZV09XCJ0eXBlXCJcbiAgICAgIFtuZ0NsYXNzXT1cImNsYXNzXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAoY2xpY2spPVwiaGFuZGxlQnV0dG9uQ2xpY2tcIj5cbiAgICAgIHt7bGFiZWx9fVxuICAgIDwvYnV0dG9uPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGlzVmlzaWJsZTtcbiAgQElucHV0KCkgdHlwZTtcbiAgQElucHV0KCkgY2xhc3M7XG4gIEBJbnB1dCgpIGlzV29ya2luZztcbiAgQElucHV0KCkgZGlzYWJsZWQ7XG4gIEBJbnB1dCgpIHN1Ym1pdDtcbiAgQElucHV0KCkgbGFiZWw7XG4gIEBJbnB1dCgpIGNvbG9yID0gJyc7XG4gIEBPdXRwdXQoKSBoYW5kbGVCdXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbn1cbiIsImltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5leHBvcnQgY2xhc3MgU2NoZW1hRm9ybUNvbnRyb2wgZXh0ZW5kcyBGb3JtQ29udHJvbCB7XG4gIHB1YmxpYyBzY2hlbWE6IFNjaGVtYTtcbiAgcHVibGljIHN0eWxlOiBhbnk7XG4gIHB1YmxpYyB2aWV3T25seTogYm9vbGVhbjtcbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NjaGVtYUZvcm1Db250cm9sfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvc2NoZW1hLWZvcm0tY29udHJvbCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW25nQ2xhc3NdPVwiWydvYmplY3QnLCBjb250cm9sLnNjaGVtYS5rZXldXCJcbiAgICAgIGpmLWNvbXBvbmVudC1jaG9vc2VyXG4gICAgICBbZm9ybV09XCJjb250cm9sXCJcbiAgICAgIFtzY2hlbWFdPVwiY29udHJvbC5zY2hlbWFcIlxuICAgICAgW25lc3RlZF09XCJ0cnVlXCI+XG4gICAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBPYmplY3RDb21wb25lbnQge1xuICBASW5wdXQoKSBjb250cm9sOiBTY2hlbWFGb3JtQ29udHJvbDtcbn1cblxuIiwiaW1wb3J0IHsgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5leHBvcnQgY2xhc3MgU2NoZW1hRm9ybUFycmF5IGV4dGVuZHMgRm9ybUFycmF5IHtcbiAgcHVibGljIHNjaGVtYTogU2NoZW1hO1xuICBwdWJsaWMgc3R5bGU6IGFueTtcbn1cbiIsImltcG9ydCB7IEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5leHBvcnQgY2xhc3MgU2NoZW1hRm9ybUdyb3VwIGV4dGVuZHMgRm9ybUdyb3VwIHtcbiAgcHVibGljIHNjaGVtYTogU2NoZW1hO1xuICBwdWJsaWMgc3R5bGU6IGFueTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNjaGVtYUZvcm1Db250cm9sIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL3NjaGVtYS1mb3JtLWNvbnRyb2wnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQXJyYXkgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvc2NoZW1hLWZvcm0tYXJyYXknO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUdyb3VwIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL3NjaGVtYS1mb3JtLWdyb3VwJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbbmdDbGFzc109XCJbJ2FycmF5JywgY29udHJvbC5zY2hlbWEua2V5XVwiPlxuICAgICAgPGg2ICpuZ0lmPVwiZ2V0TGVnZW5kKGNvbnRyb2wpLmxlbmd0aFwiPnt7Z2V0TGVnZW5kKGNvbnRyb2wpfX08L2g2PlxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgYXJyQ29udHJvbCBvZiBnZXRFbmFibGVkQ29udHJvbHMoY29udHJvbCk7IGxldCBpID0gaW5kZXg7XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiIGpmLWNvbXBvbmVudC1jaG9vc2VyIFtmb3JtXT1cImFyckNvbnRyb2xcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVtb3ZlXCIgKm5nSWY9XCJjb250cm9sLmNvbnRyb2xzLmxlbmd0aCA+IDFcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInJlbW92ZUNvbnRyb2woY29udHJvbCwgaSlcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tc21cIiB2YWx1ZT1cIlJlbW92ZVwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWRkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJhZGRDb250cm9sKGNvbnRyb2wpXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIgdmFsdWU9XCJBZGRcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlDb21wb25lbnQge1xuICBASW5wdXQoKSBjb250cm9sOiBTY2hlbWFGb3JtQXJyYXk7XG5cbiAgZ2V0TGVnZW5kKGNvbnRyb2wpIHtcbiAgICByZXR1cm4gKGNvbnRyb2wgJiYgY29udHJvbC5zY2hlbWEgJiYgY29udHJvbC5zY2hlbWEua2V5KSA/XG4gICAgICB0aGlzLnN0clRvVXBwZXJDYXNlKGNvbnRyb2wuc2NoZW1hLmtleSkgOiAnJztcbiAgfVxuXG4gIHN0clRvVXBwZXJDYXNlKHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL18vZywgJyAnKS5zcGxpdCgnICcpLm1hcCgod29yZCkgPT5cbiAgICAgICh3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSlcbiAgICApLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGdldEVuYWJsZWRDb250cm9scyhjb250cm9sKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29udHJvbC5jb250cm9scykpIHtcbiAgICAgIHJldHVybiBjb250cm9sLmNvbnRyb2xzLmZpbHRlcigoYykgPT4gYy5lbmFibGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbDtcbiAgfVxuXG4gIGNsb25lQ29udHJvbChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcbiAgICBsZXQgbmV3Q29udHJvbDogQWJzdHJhY3RDb250cm9sO1xuXG4gICAgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBTY2hlbWFGb3JtR3JvdXApIHtcbiAgICAgIGNvbnN0IGZvcm1Hcm91cCA9IG5ldyBTY2hlbWFGb3JtR3JvdXAoe30sIGNvbnRyb2wudmFsaWRhdG9yLCBjb250cm9sLmFzeW5jVmFsaWRhdG9yKTtcbiAgICAgIGNvbnN0IGNvbnRyb2xzID0gY29udHJvbC5jb250cm9scztcbiAgICAgIGZvcm1Hcm91cC5zY2hlbWEgPSBjb250cm9sLnNjaGVtYTtcblxuICAgICAgT2JqZWN0LmtleXMoY29udHJvbHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBmb3JtR3JvdXAuYWRkQ29udHJvbChrZXksIHRoaXMuY2xvbmVDb250cm9sKGNvbnRyb2xzW2tleV0pKTtcbiAgICAgIH0pO1xuXG4gICAgICBuZXdDb250cm9sID0gZm9ybUdyb3VwO1xuICAgIH0gZWxzZSBpZiAoY29udHJvbCBpbnN0YW5jZW9mIFNjaGVtYUZvcm1BcnJheSkge1xuICAgICAgY29uc3QgZm9ybUFycmF5ID0gbmV3IFNjaGVtYUZvcm1BcnJheShbXSwgY29udHJvbC52YWxpZGF0b3IsIGNvbnRyb2wuYXN5bmNWYWxpZGF0b3IpO1xuICAgICAgY29udHJvbC5jb250cm9scy5mb3JFYWNoKChmb3JtQ29udHJvbCkgPT4ge1xuICAgICAgICBmb3JtQXJyYXkucHVzaCh0aGlzLmNsb25lQ29udHJvbChmb3JtQ29udHJvbCkpO1xuICAgICAgICByZXR1cm4gZm9ybUFycmF5O1xuICAgICAgfSk7XG5cbiAgICAgIG5ld0NvbnRyb2wgPSBmb3JtQXJyYXk7XG4gICAgICAoPFNjaGVtYUZvcm1BcnJheT5uZXdDb250cm9sKS5zY2hlbWEgPSBjb250cm9sLnNjaGVtYTtcbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBTY2hlbWFGb3JtQ29udHJvbCkge1xuICAgICAgbmV3Q29udHJvbCA9IG5ldyBTY2hlbWFGb3JtQ29udHJvbChjb250cm9sLnZhbHVlLCBjb250cm9sLnZhbGlkYXRvciwgY29udHJvbC5hc3luY1ZhbGlkYXRvcik7XG4gICAgICAoPFNjaGVtYUZvcm1Db250cm9sPm5ld0NvbnRyb2wpLnNjaGVtYSA9IGNvbnRyb2wuc2NoZW1hO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yOiB1bmV4cGVjdGVkIGNvbnRyb2wgdmFsdWUnKTtcbiAgICB9XG5cbiAgICBpZiAoY29udHJvbC5kaXNhYmxlZCkge1xuICAgICAgbmV3Q29udHJvbC5kaXNhYmxlKHtlbWl0RXZlbnQ6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0NvbnRyb2w7XG4gIH1cblxuICBhZGRDb250cm9sKGZvcm1BcnJheTogRm9ybUFycmF5KSB7XG4gICAgZm9ybUFycmF5LnB1c2godGhpcy5jbG9uZUNvbnRyb2woZm9ybUFycmF5LmNvbnRyb2xzWzBdKSk7XG4gIH1cblxuICByZW1vdmVDb250cm9sKGZvcm1BcnJheTogRm9ybUFycmF5LCBpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKGZvcm1BcnJheS5sZW5ndGggPT09IDEpIHtcbiAgICAgIGZvcm1BcnJheS5jb250cm9sc1swXS5yZXNldCgpO1xuICAgICAgZm9ybUFycmF5LmNvbnRyb2xzWzBdLmRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybUFycmF5LnJlbW92ZUF0KGluZGV4KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXJyYXlDb21wb25lbnQgfSBmcm9tICcuL2FycmF5LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW25nQ2xhc3NdPVwiWydhcnJheScsIGNvbnRyb2wuc2NoZW1hLmtleV1cIj5cbiAgICAgIDxoNiAqbmdJZj1cImdldExlZ2VuZChjb250cm9sKS5sZW5ndGhcIj57e2dldExlZ2VuZChjb250cm9sKX19PC9oNj5cbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGFyckNvbnRyb2wgb2YgZ2V0RW5hYmxlZENvbnRyb2xzKGNvbnRyb2wpOyBsZXQgaSA9IGluZGV4O1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIiBqZi1jb21wb25lbnQtY2hvb3NlciBbZm9ybV09XCJhcnJDb250cm9sXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlWaWV3Q29tcG9uZW50IGV4dGVuZHMgQXJyYXlDb21wb25lbnQge31cbiIsImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbnRyb2wgfSBmcm9tICcuLi9tb2RlbHMvc2NoZW1hLWZvcm0tY29udHJvbCc7XG5pbXBvcnQgeyBTdHJpbmdDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvc3RyaW5nL3N0cmluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RyaW5nVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdFZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvc2VsZWN0L3NlbGVjdC52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdW1iZXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGRzL251bWJlci9udW1iZXIudmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQm9vbGVhblZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvYm9vbGVhbi9ib29sZWFuLnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFBob3RvVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkcy9waG90by9waG90by52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0YXJlYVZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvdGV4dGFyZWEvdGV4dGFyZWEudmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvZGF0ZS9kYXRlLnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFJhZGlvZ3JvdXBWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGRzL3JhZGlvZ3JvdXAvcmFkaW9ncm91cC52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGVja2JveGdyb3VwVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkcy9jaGVja2JveGdyb3VwL2NoZWNrYm94Z3JvdXAudmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXVsdGlzZWxlY3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGRzL211bHRpc2VsZWN0L211bHRpc2VsZWN0LnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE1vbmV5Vmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkcy9tb25leS9tb25leS52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgT2JqZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQvY29tcG9uZW50cy9vYmplY3Qvb2JqZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcnJheVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC9jb21wb25lbnRzL2FycmF5L2FycmF5LnZpZXcuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpzb25Gb3JtRmllbGRzU2VydmljZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgcm9vdFZpZXdDb250YWluZXI7XG4gIHB1YmxpYyBmaWVsZFR5cGVzOiB7IFt0eXBlOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICBwcml2YXRlIGRlZmF1bHRGaWVsZFR5cGUgPSBTdHJpbmdDb21wb25lbnQ7XG4gIHByaXZhdGUgdmlld09ubHkgPSBmYWxzZTtcbiAgcHJpdmF0ZSB2aWV3VHlwZXM6IE9iamVjdCA9IHtcbiAgICBzdHJpbmc6IFN0cmluZ1ZpZXdDb21wb25lbnQsXG4gICAgc2VsZWN0OiBTZWxlY3RWaWV3Q29tcG9uZW50LFxuICAgIG51bWJlcjogTnVtYmVyVmlld0NvbXBvbmVudCxcbiAgICBib29sZWFuOiBCb29sZWFuVmlld0NvbXBvbmVudCxcbiAgICBwaG90bzogUGhvdG9WaWV3Q29tcG9uZW50LFxuICAgIHRleHRhcmVhOiBUZXh0YXJlYVZpZXdDb21wb25lbnQsXG4gICAgb2JqZWN0OiBPYmplY3RDb21wb25lbnQsXG4gICAgYXJyYXk6IEFycmF5Vmlld0NvbXBvbmVudCxcbiAgICBkYXRlOiBEYXRlVmlld0NvbXBvbmVudCxcbiAgICByYWRpb2dyb3VwOiBSYWRpb2dyb3VwVmlld0NvbXBvbmVudCxcbiAgICBjaGVja2JveGdyb3VwOiBDaGVja2JveGdyb3VwVmlld0NvbXBvbmVudCxcbiAgICBtdWx0aXNlbGVjdDogTXVsdGlzZWxlY3RWaWV3Q29tcG9uZW50LFxuICAgIG1vbmV5OiBNb25leVZpZXdDb21wb25lbnQsXG4gICAgYnV0dG9uOiBCdXR0b25Db21wb25lbnRcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICkge31cblxuICBzZXRSb290Vmlld0NvbnRhaW5lclJlZih2aWV3Q29udGFpbmVyUmVmKSB7XG4gICAgdGhpcy5yb290Vmlld0NvbnRhaW5lciA9IHZpZXdDb250YWluZXJSZWY7XG4gIH1cblxuICBhZGREeW5hbWljQ29tcG9uZW50KGNvbnRyb2w6IFNjaGVtYUZvcm1Db250cm9sKSB7XG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuZ2V0KGNvbnRyb2wpKTtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnJvb3RWaWV3Q29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuY29udHJvbCA9IGNvbnRyb2w7XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLnNjaGVtYSA9IGNvbnRyb2wuc2NoZW1hO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5zdHlsZSA9IGNvbnRyb2wuc3R5bGU7XG4gIH1cblxuICBoYXModHlwZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZmllbGRUeXBlcy5oYXNPd25Qcm9wZXJ0eSh0eXBlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyKHR5cGU6IHN0cmluZywgZmllbGQ6IGFueSkge1xuICAgIHRoaXMuZmllbGRUeXBlc1t0eXBlXSA9IGZpZWxkO1xuICB9XG5cbiAgZ2V0KGNvbnRyb2wpOiBhbnkge1xuICAgIGNvbnN0IHR5cGVzOiBPYmplY3QgPSB0aGlzLnZpZXdPbmx5ID8gdGhpcy52aWV3VHlwZXMgOiB0aGlzLmZpZWxkVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mKGNvbnRyb2wpID09PSAnc3RyaW5nJyAmJiB0aGlzLmhhcyhjb250cm9sKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZmllbGRUeXBlc1tjb250cm9sXTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBhIGZpZWxkIGlzIGdldHRpbmcgb3ZlcnJpZGRlbiBieSBmb3JtYXRcbiAgICBpZiAodHlwZW9mKGNvbnRyb2wuc2NoZW1hLmZvcm1hdCkgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuaGFzKGNvbnRyb2wuc2NoZW1hLmZvcm1hdCkpIHtcbiAgICAgIHJldHVybiB0eXBlc1tjb250cm9sLnNjaGVtYS5mb3JtYXRdO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YoY29udHJvbC5zY2hlbWEuZW51bSkgIT09ICd1bmRlZmluZWQnICYmIGNvbnRyb2wuc2NoZW1hLnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgIHJldHVybiB0eXBlc1snY2hlY2tib3hncm91cCddO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mKGNvbnRyb2wuc2NoZW1hLmVudW0pICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHR5cGVzWydzZWxlY3QnXTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGFzKGNvbnRyb2wuc2NoZW1hLmZvcm1hdCkpIHtcbiAgICAgIHJldHVybiB0eXBlc1tjb250cm9sLnNjaGVtYS5mb3JtYXRdO1xuICAgIH0gZWxzZSBpZiAodGhpcy5oYXMoY29udHJvbC5zY2hlbWEudHlwZSkpIHtcbiAgICAgIHJldHVybiB0eXBlc1tjb250cm9sLnNjaGVtYS50eXBlXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdEZpZWxkVHlwZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmFsaWRhdG9yRm4sIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpzb25Gb3JtVmFsaWRhdG9yc1NlcnZpY2Uge1xuICB2YWxpZGF0b3JzOiBBcnJheTxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudmFsaWRhdG9ycyA9IFtdO1xuICB9XG5cbiAgcHVibGljIGdldChwcm9wLCBzY2hlbWEsIHBhdGgpIHtcbiAgICBjb25zdCByZXF1aXJlZCA9IHNjaGVtYS5yZXF1aXJlZCB8fCBbXTtcbiAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdO1xuICAgIGNvbnN0IHZhclBhdGggPSBbXS5jb25jYXQocGF0aCwgcHJvcCkuam9pbignLicpO1xuXG4gICAgaWYgKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLnR5cGUgPT09ICdib29sZWFuJyAmJiByZXF1aXJlZC5pbmRleE9mKHByb3ApID4gLTEpIHtcbiAgICAgIHJldHVybiBWYWxpZGF0b3JzLnBhdHRlcm4oJ3RydWUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gVmFsaWRhdG9ycy5jb21wb3NlKHRoaXMudmFsaWRhdG9ycy5jb25jYXQoW1xuICAgICAgKHRoaXMuaGFzKHZhclBhdGgpID8gdGhpcy52YWxpZGF0b3JzW3ZhclBhdGhdIDogbnVsbCksXG4gICAgICAocmVxdWlyZWQuaW5kZXhPZihwcm9wKSA+IC0xID8gVmFsaWRhdG9ycy5yZXF1aXJlZCA6IG51bGwpLFxuICAgICAgKGZpZWxkLmhhc093blByb3BlcnR5KCdtaW5MZW5ndGgnKSA/IFZhbGlkYXRvcnMubWluTGVuZ3RoKGZpZWxkLm1pbkxlbmd0aCkgOiBudWxsKSxcbiAgICAgIChmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnbWF4TGVuZ3RoJykgPyBWYWxpZGF0b3JzLm1heExlbmd0aChmaWVsZC5tYXhMZW5ndGgpIDogbnVsbCksXG4gICAgICAoZmllbGQuaGFzT3duUHJvcGVydHkoJ2Zvcm1hdCcpICYmIGZpZWxkLmZvcm1hdCA9PT0gJ2VtYWlsJyA/IFZhbGlkYXRvcnMuZW1haWwgOiBudWxsKSxcbiAgICAgIChmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnbWluaW11bScpID8gVmFsaWRhdG9ycy5taW4oZmllbGQubWluaW11bSkgOiBudWxsKSxcbiAgICAgIChmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnbWF4aW11bScpID8gVmFsaWRhdG9ycy5tYXgoZmllbGQubWF4aW11bSkgOiBudWxsKSxcbiAgICAgIChmaWVsZC5wYXR0ZXJuID8gVmFsaWRhdG9ycy5wYXR0ZXJuKGZpZWxkLnBhdHRlcm4pIDogbnVsbClcbiAgICBdKSk7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXIoZmllbGQ6IGFueSwgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbikge1xuICAgIHRoaXMudmFsaWRhdG9yc1tmaWVsZF0gPSB2YWxpZGF0b3I7XG4gIH1cblxuICBwdWJsaWMgaGFzKHN0cikge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcnMuaGFzT3duUHJvcGVydHkoc3RyKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSnNvbkZvcm1EZWZhdWx0c1NlcnZpY2Uge1xuICBwcml2YXRlIGRlZmF1bHRUeXBlczogeyBbdHlwZTogc3RyaW5nXTogYW55IH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kZWZhdWx0VHlwZXMgPSB0aGlzLmRlZmF1bHRUeXBlcyB8fCB7fTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQocHJvcCwgc2NoZW1hLCBkYXRhKSB7XG4gICAgY29uc3QgZGVmYXVsdFN0cmluZyA9IChwcm9wLmhhc093blByb3BlcnR5KCdmb3JtYXQnKSAmJiBwcm9wLmZvcm1hdCA9PT0gJ211bHRpc2VsZWN0JykgPyBbXSA6ICcnO1xuICAgIGxldCBkZWZhdWx0VmFsdWUgPSBzY2hlbWEucHJvcGVydGllc1twcm9wXS5kZWZhdWx0IHx8IGRlZmF1bHRTdHJpbmc7XG4gICAgaWYgKHRoaXMuaGFzKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLmRlZmF1bHQpKSB7XG4gICAgICBkZWZhdWx0VmFsdWUgPSB0aGlzLmV2YWwoc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0uZGVmYXVsdCkoKTtcbiAgICB9XG5cbiAgICAvLyBkYXRhIG92ZXJyaWRlIGRlZmF1bHRzXG4gICAgaWYgKGRhdGEgJiYgZGF0YS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgZGVmYXVsdFZhbHVlID0gZGF0YVtwcm9wXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBldmFsKHN0cikge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRUeXBlc1tzdHJdO1xuICB9XG5cbiAgcHVibGljIGhhcyhzdHIpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0VHlwZXMuaGFzT3duUHJvcGVydHkoc3RyKTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3RlcihzdHI6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgdGhpcy5kZWZhdWx0VHlwZXNbc3RyXSA9IGNhbGxiYWNrO1xuICB9XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgRG9DaGVjaywgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgTmdGb3JtfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBKc29uRm9ybVZhbGlkYXRvcnNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbnRyb2wgfSBmcm9tICcuL21vZGVscy9zY2hlbWEtZm9ybS1jb250cm9sJztcbmltcG9ydCB7IEpzb25Gb3JtRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kZWZhdWx0cy5zZXJ2aWNlJztcbmltcG9ydCB7IFNjaGVtYUZvcm1Hcm91cCB9IGZyb20gJy4vbW9kZWxzL3NjaGVtYS1mb3JtLWdyb3VwJztcbmltcG9ydCB7IFNjaGVtYUZvcm1BcnJheSB9IGZyb20gJy4vbW9kZWxzL3NjaGVtYS1mb3JtLWFycmF5JztcbmltcG9ydCB7IEpzb25Gb3JtRmllbGRzU2VydmljZSB9IGZyb20gJy4vZnJhbWV3b3JrL2pzb24tZm9ybS1maWVsZHMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pmLWZvcm0sIHRydS1mb3JtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8Zm9ybVxuICAgICAgI3VzZXJGb3JtPVwibmdGb3JtXCJcbiAgICAgIFtmb3JtR3JvdXBdPVwiZm9ybVwiXG4gICAgICAobmdTdWJtaXQpPVwiaGFuZGxlT25TdWJtaXQoKVwiXG4gICAgICAqbmdJZj1cImlzVmFsaWRTY2hlbWEoKVwiXG4gICAgICBbbmdDbGFzc109XCJ7ICd2aWV3LW9ubHknOiB2aWV3T25seSB9XCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGpmLWNvbXBvbmVudC1jaG9vc2VyXG4gICAgICAgIFtuZ0NsYXNzXT1cIltvdXRlckNsYXNzIHx8ICcnLCB0aGlzLmFjdGl2ZVN0eWxlWydkZWZhdWx0J10gPyB0aGlzLmFjdGl2ZVN0eWxlWydkZWZhdWx0J10gOiAnJ11cIlxuICAgICAgICBbZm9ybV09XCJmb3JtXCJcbiAgICAgICAgW3NjaGVtYV09XCJhY3RpdmVTY2hlbWFcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiAjcmVmPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgI2J1dHRvbnNcbiAgICAgICAgKm5nSWY9XCJyZWYuY2hpbGRyZW4ubGVuZ3RoID09IDAgJiYgKHN1Ym1pdCB8fCBjYW5jZWwpXCJcbiAgICAgICAgW25nQ2xhc3NdPVwieyAnbWFyZ2luLXRvcC0tZG91YmxlJzogdHJ1ZSwgJ3BhZ2UtYWN0aW9ucy0tZWRnZXMnOiAoY2FuY2VsICYmIHN1Ym1pdCksICdwYWdlLWFjdGlvbnMtLWNlbnRlcic6ICghY2FuY2VsIHx8ICFzdWJtaXQpfVwiPlxuICAgICAgICA8amYtZm9ybS1idXR0b25cbiAgICAgICAgICAqbmdJZj1cImNhbmNlbFwiXG4gICAgICAgICAgW2NhbmNlbF09XCJjYW5jZWxcIlxuICAgICAgICAgIFtzdGVwc109XCJzdGVwc1wiXG4gICAgICAgICAgW2lzTXVsdGlTdGVwXT1cImlzTXVsdGlTdGVwXCJcbiAgICAgICAgICBbaXNXb3JraW5nXT1cImlzV29ya2luZ1wiXG4gICAgICAgICAgKGhhbmRsZUNsaWNrKT1cImhhbmRsZU9uQ2FuY2VsKClcIlxuICAgICAgICAgIFtzdWJtaXRDbGFzc109XCJzdWJtaXRDbGFzc1wiXG4gICAgICAgICAgW2NhbmNlbENsYXNzXT1cImNhbmNlbENsYXNzXCI+XG4gICAgICAgIDwvamYtZm9ybS1idXR0b24+XG4gICAgICAgIDxqZi1mb3JtLWJ1dHRvblxuICAgICAgICAgICpuZ0lmPVwic3VibWl0XCJcbiAgICAgICAgICBbc3VibWl0Q2xhc3NdPVwic3VibWl0Q2xhc3NcIlxuICAgICAgICAgIFtjYW5jZWxDbGFzc109XCJjYW5jZWxDbGFzc1wiXG4gICAgICAgICAgW3N1Ym1pdF09XCJzdWJtaXRcIlxuICAgICAgICAgIFtzdGVwc109XCJzdGVwc1wiXG4gICAgICAgICAgW2NvbnRpbnVlXT1cImNvbnRpbnVlXCJcbiAgICAgICAgICBbaXNNdWx0aVN0ZXBdPVwiaXNNdWx0aVN0ZXBcIlxuICAgICAgICAgIFtpc1dvcmtpbmddPVwiaXNXb3JraW5nXCJcbiAgICAgICAgICBbaXNGb3JtVmFsaWRdPVwidGhpcy5mb3JtLnZhbGlkXCI+XG4gICAgICAgIDwvamYtZm9ybS1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBzY2hlbWE7XG4gIEBJbnB1dCgpIGRhdGEgPSB7fTtcbiAgQElucHV0KCkgc3R5bGUgPSB7fTtcbiAgQElucHV0KCkgY29udGludWUgPSAnQ29udGludWUnO1xuICBASW5wdXQoKSBzdWJtaXQ6IHN0cmluZztcbiAgQElucHV0KCkgY2FuY2VsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN1Ym1pdENsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNhbmNlbENsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG91dGVyQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgaXNXb3JraW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzTXVsdGlTdGVwID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFjdGl2ZVN0ZXAgPSBudWxsO1xuICBASW5wdXQoKSBzdGF0ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBpZCA9ICcnO1xuICBASW5wdXQoKSBmaWVsZHMgPSB7fTtcbiAgQElucHV0KCkgdmlld09ubHkgPSBmYWxzZTtcbiAgQE91dHB1dCgpIGhhbmRsZVN0ZXAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBoYW5kbGVTdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBoYW5kbGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBoYW5kbGVDYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBWaWV3Q2hpbGQoJ3VzZXJGb3JtJykgdXNlckZvcm06IE5nRm9ybTtcblxuICBwdWJsaWMgZm9ybTtcbiAgcHVibGljIG1vZGVsO1xuICBwdWJsaWMgY29udHJvbCA9IHsga2V5OiAnJywgdmFsdWU6ICcnLCBpc1BhcnRPZjogZmFsc2UgfTtcbiAgcHVibGljIG9sZFNjaGVtYTogc3RyaW5nO1xuICBwdWJsaWMgb2xkRGF0YTogc3RyaW5nO1xuICBwdWJsaWMgY2hhbmdlRGV0ZWN0ZWQgPSBmYWxzZTtcbiAgcHVibGljIG9sZEFjdGl2ZVN0ZXAgPSAnJztcbiAgcHVibGljIHN0ZXBzID0gW107XG4gIHB1YmxpYyBtdWx0aVN0ZXBEYXRhID0ge307XG4gIHB1YmxpYyBhY3RpdmVTY2hlbWEgPSB7fTtcbiAgcHVibGljIGFjdGl2ZVN0eWxlID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSB2bDogSnNvbkZvcm1WYWxpZGF0b3JzU2VydmljZSxcbiAgICBwcml2YXRlIGRmOiBKc29uRm9ybURlZmF1bHRzU2VydmljZSxcbiAgICBwcml2YXRlIGpmOiBKc29uRm9ybUZpZWxkc1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZURldGVjdGVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5vbGRTY2hlbWEgIT09IEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hKSkge1xuICAgICAgdGhpcy5vbGRTY2hlbWEgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnNjaGVtYSk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vbGREYXRhICE9PSBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKSB7XG4gICAgICB0aGlzLm9sZERhdGEgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub2xkQWN0aXZlU3RlcCAhPT0gdGhpcy5hY3RpdmVTdGVwKSB7XG4gICAgICB0aGlzLm9sZEFjdGl2ZVN0ZXAgPSB0aGlzLmFjdGl2ZVN0ZXA7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jaGFuZ2VEZXRlY3RlZCkge1xuICAgICAgdGhpcy5hcHBlbmRGaWVsZHMoKTtcbiAgICAgIHRoaXMuY29uc3RydWN0Rm9ybSgpO1xuICAgICAgdGhpcy5qZlswXS52aWV3T25seSA9IHRoaXMudmlld09ubHk7XG4gICAgICB0aGlzLmNhbmNlbCA9IHRoaXMudmlld09ubHkgPyAnJyA6IHRoaXMuY2FuY2VsO1xuICAgICAgdGhpcy5zdWJtaXQgPSB0aGlzLnZpZXdPbmx5ID8gJycgOiB0aGlzLnN1Ym1pdDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mb3JtKSB7XG4gICAgICB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgYXBwZW5kRmllbGRzKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZmllbGRzKS5mb3JFYWNoKChmKSA9PiB7XG4gICAgICB0aGlzLmpmWzBdLnJlZ2lzdGVyKGYsIHRoaXMuZmllbGRzW2ZdKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdEZvcm0oKSB7XG4gICAgdGhpcy5tb2RlbCA9IHt9O1xuXG4gICAgaWYgKHRoaXMuaXNWYWxpZFNjaGVtYSgpKSB7XG4gICAgICB0aGlzLmFjdGl2ZVNjaGVtYSA9IHRoaXMuc2NoZW1hO1xuICAgICAgdGhpcy5hY3RpdmVTdHlsZSA9IHRoaXMuc3R5bGU7XG5cbiAgICAgIC8vIGVtaXQgdGhlIGluaXRpYWwgc3RlcCBmb3IgdGhlIGV2ZW50XG4gICAgICBpZiAodGhpcy5zdGVwcy5sZW5ndGggPT09IDAgJiYgdGhpcy5pc011bHRpU3RlcCkge1xuICAgICAgICB0aGlzLnN0ZXBzID0gdGhpcy5nZXRTdGVwcyh0aGlzLnNjaGVtYSwgdGhpcy5hY3RpdmVTdGVwKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdGVwLmVtaXQoeyBpZDogdGhpcy5pZCwgZGF0YTogbnVsbCwgc3RlcHM6IHRoaXMuc3RlcHMgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnN0ZXBzLmxlbmd0aCA+IDAgJiYgdGhpcy5pc011bHRpU3RlcCkge1xuICAgICAgICBjb25zdCB2aXNpYmxlU3RlcE5hbWUgPSB0aGlzLmFjdGl2ZVN0ZXAgPiAwID8gdGhpcy5hY3RpdmVTdGVwIDogdGhpcy5zdGVwcy5maW5kKChzKSA9PiBzLnZpc2libGUpLm5hbWU7XG4gICAgICAgIHRoaXMuYWN0aXZlU2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydGllc1t2aXNpYmxlU3RlcE5hbWVdO1xuICAgICAgICB0aGlzLmFjdGl2ZVN0eWxlID0gdGhpcy5zdHlsZS5oYXNPd25Qcm9wZXJ0eSh2aXNpYmxlU3RlcE5hbWUpID8gdGhpcy5zdHlsZVt2aXNpYmxlU3RlcE5hbWVdIDoge307XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuc3RhdGUgJiYgdGhpcy5tdWx0aVN0ZXBEYXRhLmhhc093blByb3BlcnR5KHZpc2libGVTdGVwTmFtZSlcbiAgICAgICAgICA/IHRoaXMubXVsdGlTdGVwRGF0YVt2aXNpYmxlU3RlcE5hbWVdIDogdGhpcy5kYXRhO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFjdGl2ZVNjaGVtYSA9IHRoaXMuc3ViUmVmcyh0aGlzLmFjdGl2ZVNjaGVtYSk7XG4gICAgICB0aGlzLm1vZGVsID0gdGhpcy5nZW5lcmF0ZUZvcm0odGhpcy5hY3RpdmVTY2hlbWEsIHt9LCB0aGlzLmRhdGEsIHRoaXMuYWN0aXZlU3R5bGUpO1xuICAgICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh0aGlzLm1vZGVsKTtcblxuICAgICAgdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY29udHJvbC5pc1BhcnRPZikge1xuICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3RGb3JtKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZS5lbWl0KHsgaWQ6IHRoaXMuaWQsIGNvbnRyb2w6IHRoaXMuY29udHJvbCwgZGF0YSB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFN0ZXBzKHNjaGVtYSwgYWN0aXZlU3RlcCk6IEFycmF5PGFueT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcykubWFwKChuYW1lLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IHR5cGUgPSAnc3RlcCc7XG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgdGhpcy5hY3RpdmVTdGVwID0gdGhpcy5hY3RpdmVTdGVwIHx8IG5hbWU7XG4gICAgICAgIHR5cGUgPSAnZmlyc3QnO1xuICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdHlwZSA9ICdsYXN0JztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHZpc2libGU6IGFjdGl2ZVN0ZXAgPyBhY3RpdmVTdGVwID09PSBuYW1lIDogaW5kZXggPT09IDAsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIHRpdGxlOiBzY2hlbWEucHJvcGVydGllc1tuYW1lXS5oYXNPd25Qcm9wZXJ0eSgndGl0bGUnKSA/IHNjaGVtYS5wcm9wZXJ0aWVzW25hbWVdLnRpdGxlIDogbmFtZVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzVmFsaWRTY2hlbWEoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiAodGhpcy5zY2hlbWEpID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYSkubGVuZ3RoID4gMDtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVGb3JtIChzY2hlbWEsIGdyb3VwPzoge30sIGRhdGE/OiB7fSwgc3R5bGU/OiB7fSwgcGF0aD86IEFycmF5PGFueT4pIHtcbiAgICBpZiAoIXRoaXMuaXNWaXNpYmxlKHNjaGVtYSkpIHtcbiAgICAgIHJldHVybiBncm91cDtcbiAgICB9XG5cbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgIHBhdGggPSBbXTtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcykuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgaWYgKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwRGF0YSA9IGRhdGEgJiYgZGF0YS5oYXNPd25Qcm9wZXJ0eShwcm9wKSA/IGRhdGFbcHJvcF0gOiB7fTtcbiAgICAgICAgY29uc3QgZ3JvdXBTdHlsZSA9IHN0eWxlICYmIHN0eWxlLmhhc093blByb3BlcnR5KHByb3ApID8gc3R5bGVbcHJvcF0gOiB7fTtcbiAgICAgICAgZ3JvdXBbcHJvcF0gPSBuZXcgU2NoZW1hRm9ybUdyb3VwKHRoaXMuZ2VuZXJhdGVGb3JtKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLCB7fSwgZ3JvdXBEYXRhLCBncm91cFN0eWxlLCBbXS5jb25jYXQocGF0aCwgcHJvcCkpKTtcbiAgICAgICAgZ3JvdXBbcHJvcF0uc2NoZW1hID0gc2NoZW1hLnByb3BlcnRpZXNbcHJvcF07XG4gICAgICAgIGdyb3VwW3Byb3BdLnNjaGVtYS5rZXkgPSBwcm9wO1xuICAgICAgICBncm91cFtwcm9wXS5zdHlsZSA9IGdyb3VwU3R5bGU7XG4gICAgICB9IGVsc2UgaWYgKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLnR5cGUgPT09ICdhcnJheScgJiYgIXRoaXMuaXNGb3JtYXQoc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0sICdtdWx0aXNlbGVjdCcpKSB7XG4gICAgICAgIHBhdGgucHVzaChwcm9wKTtcbiAgICAgICAgY29uc3QgYXJyYXlEYXRhID0gZGF0YSAmJiBkYXRhLmhhc093blByb3BlcnR5KHByb3ApID8gZGF0YVtwcm9wXSA6IFt7fV07XG4gICAgICAgIGNvbnN0IGFycmF5U3R5bGUgPSBzdHlsZSAmJiBzdHlsZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSA/IHN0eWxlW3Byb3BdIDoge307XG4gICAgICAgIGxldCBmYkFycmF5ID0gW107XG5cbiAgICAgICAgaWYgKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLmVudW0pIHtcbiAgICAgICAgICBmYkFycmF5ID0gc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0uZW51bS5tYXAoKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2wgPSBuZXcgU2NoZW1hRm9ybUNvbnRyb2woKTtcbiAgICAgICAgICAgIGNvbnRyb2wuc2NoZW1hID0gT2JqZWN0LmFzc2lnbih7fSwgc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0pO1xuICAgICAgICAgICAgY29udHJvbC5zY2hlbWEua2V5ID0gcHJvcDtcbiAgICAgICAgICAgIGNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoZXZlbnQpID0+IHRoaXMuaGFuZGxlT25DaGFuZ2UocHJvcCwgZXZlbnQpKTtcbiAgICAgICAgICAgIHJldHVybiBjb250cm9sO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZiQXJyYXkgPSBhcnJheURhdGEubWFwKChkYXRhQXRJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IG5ldyBTY2hlbWFGb3JtR3JvdXAodGhpcy5nZW5lcmF0ZUZvcm0oc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0uaXRlbXMsIHt9LCBkYXRhQXRJbmRleCwge30sIFtdLmNvbmNhdChwYXRoLCBwcm9wKSkpO1xuICAgICAgICAgICAgZy5zY2hlbWEgPSBzY2hlbWEucHJvcGVydGllc1twcm9wXTtcbiAgICAgICAgICAgIHJldHVybiBnO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JvdXBbcHJvcF0gPSBuZXcgU2NoZW1hRm9ybUFycmF5KGZiQXJyYXkpO1xuICAgICAgICBncm91cFtwcm9wXS5zY2hlbWEgPSBzY2hlbWEucHJvcGVydGllc1twcm9wXTtcbiAgICAgICAgZ3JvdXBbcHJvcF0uc2NoZW1hLmtleSA9IHByb3A7XG4gICAgICAgIGdyb3VwW3Byb3BdLnN0eWxlID0gYXJyYXlTdHlsZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1Zpc2libGUoc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0pKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT25lT2Yoc2NoZW1hLCBwcm9wKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSBuZXcgU2NoZW1hRm9ybUNvbnRyb2wodGhpcy5kZi5nZXQocHJvcCwgc2NoZW1hLCBkYXRhKSwgdGhpcy52bC5nZXQocHJvcCwgc2NoZW1hLCBwYXRoKSk7XG4gICAgICAgIGNvbnRyb2wuc2NoZW1hID0gT2JqZWN0LmFzc2lnbih7fSwgc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0pO1xuICAgICAgICBjb250cm9sLnNjaGVtYS5rZXkgPSBwcm9wO1xuICAgICAgICBjb250cm9sLnN0eWxlID0gKHN0eWxlICYmIHN0eWxlLmhhc093blByb3BlcnR5KHByb3ApKSA/IHN0eWxlW3Byb3BdIDoge307XG4gICAgICAgIGNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoZXZlbnQpID0+IHRoaXMuaGFuZGxlT25DaGFuZ2UocHJvcCwgZXZlbnQsIHRoaXMuaW5PbmVPZihzY2hlbWEsIHByb3ApKSk7XG4gICAgICAgIGdyb3VwW3Byb3BdID0gY29udHJvbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBncm91cDtcbiAgfVxuXG4gIGlzT25lT2Yoc2NoZW1hLCBwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiAoc2NoZW1hLm9uZU9mKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBzY2hlbWEub25lT2YuZmlsdGVyKChwKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKHAucHJvcGVydGllcylbMF07XG5cbiAgICAgICAgaWYgKHAucHJvcGVydGllc1trZXldLnJlcXVpcmVkLmluZGV4T2YocHJvcCkgPiAtMSkge1xuICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZGF0YVtrZXldO1xuICAgICAgICAgIGlmIChzY2hlbWEucHJvcGVydGllc1trZXldLnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmRhdGFba2V5XSA9PT0gJ3RydWUnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc2NoZW1hLnByb3BlcnRpZXNba2V5XS50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdmFsdWUgPSArdGhpcy5kYXRhW2tleV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpID09PSBmYWxzZSB8fCBwLnByb3BlcnRpZXNba2V5XS5lbnVtLmluZGV4T2YodmFsdWUpID09PSAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaW5PbmVPZihzY2hlbWEsIHByb3ApIHtcbiAgICBpZiAodHlwZW9mIChzY2hlbWEub25lT2YpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHNjaGVtYS5vbmVPZi5maWx0ZXIoKHApID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMocC5wcm9wZXJ0aWVzKVswXTtcbiAgICAgICAgcmV0dXJuIGtleSA9PT0gcHJvcDtcbiAgICAgIH0pLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNWaXNpYmxlIChwcm9wKSB7XG4gICAgcmV0dXJuIHByb3AuaGFzT3duUHJvcGVydHkoJ3Zpc2libGUnKSA9PT0gZmFsc2UgfHwgKHByb3AuaGFzT3duUHJvcGVydHkoJ3Zpc2libGUnKSAmJiBwcm9wLnZpc2libGUgPT09IHRydWUpO1xuICB9XG5cbiAgaXNGb3JtYXQocHJvcCwgZm9ybWF0KSB7XG4gICAgcmV0dXJuIHByb3AuaGFzT3duUHJvcGVydHkoJ2Zvcm1hdCcpICYmIHByb3AuZm9ybWF0ID09PSBmb3JtYXQ7XG4gIH1cblxuICAvKipcbiAgICogRXh0ZXJuYWwgbWV0aG9kIGZvciBlbnN1cmluZyB0aGUgZm9ybSBpcyB2YWxpZFxuICAgKi9cbiAgaXNWYWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLnZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgZXh0ZXJuYWwgc3VibWlzc2lvblxuICAgKi9cbiAgc3VibWl0Rm9ybSgpIHtcbiAgICB0aGlzLnVzZXJGb3JtLm5nU3VibWl0LmVtaXQoKTtcbiAgfVxuXG4gIGhhbmRsZU9uU3VibWl0KCkge1xuICAgIHRoaXMudG91Y2hBbGwodGhpcy5mb3JtLmNvbnRyb2xzKTtcblxuICAgIGlmICh0aGlzLmZvcm0udmFsaWQgJiYgdGhpcy5pc011bHRpU3RlcCkge1xuICAgICAgY29uc3QgcHJldiA9IHRoaXMuc3RlcHMuZmluZEluZGV4KChzKSA9PiBzLnZpc2libGUpO1xuICAgICAgdGhpcy5tdWx0aVN0ZXBEYXRhW3RoaXMuYWN0aXZlU3RlcF0gPSB0aGlzLmZvcm0udmFsdWU7XG4gICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5zdGVwcy5maW5kSW5kZXgoKHMpID0+IHMubmFtZSA9PT0gdGhpcy5hY3RpdmVTdGVwKTtcbiAgICAgIGNvbnN0IG5leHQgPSBjdXJyZW50ICsgMTtcblxuICAgICAgaWYgKHR5cGVvZiAodGhpcy5zdGVwc1tuZXh0XSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuc3RlcHNbcHJldl0udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0ZXBzW25leHRdLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGl2ZVN0ZXAgPSB0aGlzLnN0ZXBzW25leHRdLm5hbWU7XG4gICAgICAgIHRoaXMuaGFuZGxlU3RlcC5lbWl0KHtcbiAgICAgICAgICBkaXI6ICduZXh0JyxcbiAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICBkYXRhOiB7IFt0aGlzLnN0ZXBzW3ByZXZdLm5hbWVdOiB0aGlzLm11bHRpU3RlcERhdGFbdGhpcy5zdGVwc1twcmV2XS5uYW1lXSB9LFxuICAgICAgICAgIHN0ZXBzOiB0aGlzLnN0ZXBzXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbnN0cnVjdEZvcm0oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0LmVtaXQodGhpcy5tdWx0aVN0ZXBEYXRhKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLmhhbmRsZVN1Ym1pdC5lbWl0KHRoaXMuZm9ybS52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlT25DaGFuZ2Uoa2V5LCB2YWx1ZSwgaXNQYXJ0T2YgPSBmYWxzZSkge1xuICAgIHRoaXMuY29udHJvbCA9IHsga2V5LCB2YWx1ZSwgaXNQYXJ0T2YgfTtcbiAgfVxuXG4gIGhhbmRsZU9uQ2FuY2VsKCkge1xuICAgIGlmICh0aGlzLmlzTXVsdGlTdGVwKSB7XG4gICAgICBjb25zdCBwcmV2ID0gdGhpcy5zdGVwcy5maW5kSW5kZXgoKHMpID0+IHMudmlzaWJsZSk7XG4gICAgICB0aGlzLnN0ZXBzW3ByZXZdLnZpc2libGUgPSBmYWxzZTtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLnN0ZXBzLmZpbmRJbmRleCgocykgPT4gcy5uYW1lID09PSB0aGlzLmFjdGl2ZVN0ZXApO1xuICAgICAgY29uc3QgbmV4dCA9IGN1cnJlbnQgLSAxO1xuXG4gICAgICBpZiAodHlwZW9mICh0aGlzLnN0ZXBzW25leHRdKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zdGVwc1tuZXh0XS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hY3RpdmVTdGVwID0gdGhpcy5zdGVwc1tuZXh0XS5uYW1lO1xuICAgICAgICB0aGlzLmhhbmRsZVN0ZXAuZW1pdCh7XG4gICAgICAgICAgZGlyOiAncHJldicsXG4gICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgZGF0YTogeyBbdGhpcy5zdGVwc1tjdXJyZW50XS5uYW1lXTogdGhpcy5tdWx0aVN0ZXBEYXRhW3RoaXMuc3RlcHNbcHJldl0ubmFtZV0gfSxcbiAgICAgICAgICBzdGVwczogdGhpcy5zdGVwc1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RGb3JtKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhbmRsZUNhbmNlbC5lbWl0KHRoaXMuZm9ybS52YWx1ZSk7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgdGhpcy5oYW5kbGVDYW5jZWwuZW1pdCh0aGlzLmZvcm0udmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHRvdWNoQWxsKGNvbnRyb2xzKSB7XG4gICAgT2JqZWN0LmtleXMoY29udHJvbHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGNvbnRyb2xzW2tleV0uaGFzT3duUHJvcGVydHkoJ2NvbnRyb2xzJykpIHtcbiAgICAgICAgdGhpcy50b3VjaEFsbChjb250cm9sc1trZXldLmNvbnRyb2xzKTtcbiAgICAgIH1cbiAgICAgIGNvbnRyb2xzW2tleV0ubWFya0FzVG91Y2hlZCgpO1xuICAgIH0pO1xuICB9XG5cbiAgc3ViUmVmcyhzY2hlbWEpIHtcbiAgICBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcykuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgaWYgKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLmhhc093blByb3BlcnR5KCckcmVmJykpIHtcbiAgICAgICAgc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0gPSB0aGlzLnNjaGVtYS5kZWZpbml0aW9uc1tzY2hlbWEucHJvcGVydGllc1twcm9wXVsnJHJlZiddLnJlcGxhY2UoJyMvZGVmaW5pdGlvbnMvJywgJycpXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzY2hlbWE7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8bGFiZWwgW2F0dHIuY2xhc3NdPVwic2NoZW1hLmtleVwiIFtuZ0NsYXNzXT1cInsnbWFyZ2luLWJvdHRvbS0taGFsZic6IHRydWUsIHJlcXVpcmVkOiBpc1JlcXVpcmVkKCl9XCI+XG4gICAgICB7e3RpdGxlKCl9fTxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+PC9sYWJlbD5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCIgW2F0dHIuY2xhc3NdPVwiJ2luZm8nXCIgW2F0dHIudGl0bGVdPVwidGhpcy5zY2hlbWEuZGVzY3JpcHRpb25cIj5JbmZvPC9idXR0b24+XG4gICAgPGRpdiBbY2xhc3NdPVwiZ2V0Q2xhc3MoJ2NoZWNrYm94LWdyb3VwJylcIj5cbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGNoaWxkIG9mIHRoaXMuY29udHJvbFsnY29udHJvbHMnXTsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgIFtuZ0NsYXNzXT1cInsnY2hlY2tib3gtY29udGFpbmVyJzogdHJ1ZSwgJ2NoZWNrZWQnOiBjaGlsZC52YWx1ZSA9PT0gc2NoZW1hLmVudW1baV19XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgW2F0dHIuaWRdPVwiZ2V0SWQoaSwgc2NoZW1hLmVudW1baV0pXCJcbiAgICAgICAgICBbY2hlY2tlZF09XCJjaGlsZC52YWx1ZSA9PT0gc2NoZW1hLmVudW1baV1cIlxuICAgICAgICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxuICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJjaGlsZFwiXG4gICAgICAgICAgKGNoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQsIGkpXCJcbiAgICAgICAgICBbdmFsdWVdPVwic2NoZW1hLmVudW1baV1cIiAvPlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBbYXR0ci5mb3JdPVwiZ2V0SWQoaSwgc2NoZW1hLmVudW1baV0pXCJcbiAgICAgICAgICBbYXR0ci5jbGFzc109XCJzY2hlbWEua2V5XCI+XG4gICAgICAgICAge3tlbnVtTmFtZXMoaSl9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hncm91cENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIGNoZWNrYm94R3JvdXBWYWx1ZXMgPSBbXTtcbiAgcmFuZG9tU3VmZml4ID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xuXG4gIHNldFZhbHVlKGV2ZW50LCBpbmRleCkge1xuICAgIGlmICh0aGlzLmNoZWNrYm94R3JvdXBWYWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmNoZWNrYm94R3JvdXBWYWx1ZXMgPSBuZXcgQXJyYXkodGhpcy5jb250cm9sWydjb250cm9scyddLmxlbmd0aCkuZmlsbChudWxsKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jaGVja2JveEdyb3VwVmFsdWVzW2luZGV4XSA9PT0gbnVsbCkge1xuICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gdGhpcy5zY2hlbWEuZW51bVtpbmRleF07XG4gICAgICB0aGlzLmNoZWNrYm94R3JvdXBWYWx1ZXNbaW5kZXhdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoZWNrYm94R3JvdXBWYWx1ZXNbaW5kZXhdID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodGhpcy5jaGVja2JveEdyb3VwVmFsdWVzKTtcbiAgfVxuXG4gIGdldElkKGksIHZhbCkge1xuICAgIHJldHVybiBgJHtpfS0ke3ZhbC5yZXBsYWNlKC9bXFxXX10rL2csICcnKX0rJHt0aGlzLnJhbmRvbVN1ZmZpeH1gO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsIFthdHRyLmNsYXNzXT1cInNjaGVtYS5rZXlcIiBbbmdDbGFzc109XCJ7cmVxdWlyZWQ6IGlzUmVxdWlyZWQoKX1cIj5cbiAgICAgIHt7dGl0bGUoKX19PHN1cCAqbmdJZj1cImlzUmVxdWlyZWQoKVwiPio8L3N1cD5cbiAgICA8L2xhYmVsPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwic2NoZW1hLmRlc2NyaXB0aW9uXCIgW2F0dHIuY2xhc3NdPVwiJ2luZm8nXCIgW2F0dHIudGl0bGVdPVwidGhpcy5zY2hlbWEuZGVzY3JpcHRpb25cIj5JbmZvPC9idXR0b24+XG4gICAgPHNlbGVjdFxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgbXVsdGlwbGU9XCJtdWx0aXBsZVwiXG4gICAgPlxuICAgICAgPG9wdGlvblxuICAgICAgICAqbmdGb3I9XCJsZXQgZW4gb2Ygc2NoZW1hLmVudW07IGxldCBpID0gaW5kZXhcIlxuICAgICAgICBbc2VsZWN0ZWRdPVwiY29udHJvbC52YWx1ZSA9PT0gZW5cIlxuICAgICAgICBbbmdWYWx1ZV09XCJlblwiPlxuICAgICAgICB7e2VudW1OYW1lcyhpKX19XG4gICAgICA8L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aXNlbGVjdENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIGVudW1OYW1lcyhpbmRleCkge1xuICAgIHJldHVybiB0eXBlb2YodGhpcy5zY2hlbWEuZW51bU5hbWVzKSA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gdGhpcy5zY2hlbWEuZW51bVtpbmRleF1cbiAgICAgIDogdGhpcy5zY2hlbWEuZW51bU5hbWVzW2luZGV4XTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxsYWJlbCBuZ0NsYXNzPVwie3JlcXVpcmVkOiBpc1JlcXVpcmVkKCl9XCI+XG4gICAgICB7e3RpdGxlKCl9fTxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+XG4gICAgPC9sYWJlbD5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCIgW2F0dHIuY2xhc3NdPVwiJ2luZm8nXCIgW2F0dHIudGl0bGVdPVwidGhpcy5zY2hlbWEuZGVzY3JpcHRpb25cIj5JbmZvPC9idXR0b24+XG4gICAgPHRleHRhcmVhXG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICBbbmFtZV09XCJzY2hlbWEua2V5XCJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgICAgW2F0dHIubWluTGVuZ3RoXT1cInNjaGVtYS5taW5MZW5ndGggfHwgbnVsbFwiXG4gICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlcigpXCJcbiAgICA+PC90ZXh0YXJlYT5cbiAgICA8amYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvamYtZXJyb3I+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgVGV4dGFyZWFDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgeyB9XG5cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0LWNvbnRhaW5lclwiPlxuICAgICAgPGxhYmVsIFthdHRyLmNsYXNzXT1cInNjaGVtYS5rZXlcIiBbbmdDbGFzc109XCJ7cmVxdWlyZWQ6IGlzUmVxdWlyZWQoKX1cIj5cbiAgICAgICAge3t0aXRsZSgpfX08c3VwICpuZ0lmPVwiaXNSZXF1aXJlZCgpXCI+Kjwvc3VwPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwidGhpcy5zY2hlbWEuZGVzY3JpcHRpb25cIiBbYXR0ci5jbGFzc109XCInaW5mbydcIiBbYXR0ci50aXRsZV09XCJ0aGlzLnNjaGVtYS5kZXNjcmlwdGlvblwiPkluZm88L2J1dHRvbj5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgID5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIFtzZWxlY3RlZF09XCJjb250cm9sLnZhbHVlID09PSAnJ1wiIFtkaXNhYmxlZF09XCJ0cnVlXCI+XG4gICAgICAgICAge3tlbXB0eU9wdGlvbigpfX1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb25cbiAgICAgICAgICAqbmdGb3I9XCJsZXQgZW4gb2YgdGhpcy5zY2hlbWEuZW51bTsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgW3NlbGVjdGVkXT1cImNvbnRyb2wudmFsdWUgPT09IGVuXCJcbiAgICAgICAgICBbbmdWYWx1ZV09XCJlblwiPlxuICAgICAgICAgIHt7ZW51bU5hbWVzKGkpfX1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgICA8amYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvamYtZXJyb3I+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHtcbiAgZW1wdHlPcHRpb24oKSB7XG4gICAgcmV0dXJuIHN1cGVyLnRpdGxlKCkucmVwbGFjZSgvW15BLVowLTldKyQvaWcsICcnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW2NsYXNzXT1cImdldENsYXNzKCdjaGVja2JveC1ncm91cCcpXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3gtY29udGFpbmVyXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIFtpZF09XCJzY2hlbWEua2V5XCJcbiAgICAgICAgICBbbmFtZV09XCJzY2hlbWEua2V5XCJcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsIFthdHRyLmZvcl09XCJzY2hlbWEua2V5XCIgW2F0dHIuY2xhc3NdPVwic2NoZW1hLmtleVwiIFtuZ0NsYXNzXT1cIntyZXF1aXJlZDogaXNSZXF1aXJlZCgpfVwiPlxuICAgICAgICAgIHt7dGl0bGUoKX19PHN1cCAqbmdJZj1cImlzUmVxdWlyZWQoKVwiPio8L3N1cD5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxqZi1lcnJvciBbY29udHJvbF09XCJjb250cm9sXCI+PC9qZi1lcnJvcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCb29sZWFuQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsIFtuZ0NsYXNzXT1cIlsnamYtbGFiZWwnLCBzY2hlbWEua2V5LCAoaXNSZXF1aXJlZCgpID8gJ3JlcXVpcmVkJyA6ICcnKV1cIiAqbmdJZj1cInR5cGUoKSAhPT0gJ2hpZGRlbidcIj5cbiAgICAgIHt7dGl0bGUoKX19PHN1cCAqbmdJZj1cImlzUmVxdWlyZWQoKVwiPio8L3N1cD5cbiAgICA8L2xhYmVsPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwidGhpcy5zY2hlbWEuZGVzY3JpcHRpb25cIiBbYXR0ci5jbGFzc109XCInaW5mbydcIiBbYXR0ci50aXRsZV09XCJ0aGlzLnNjaGVtYS5kZXNjcmlwdGlvblwiPkluZm88L2J1dHRvbj5cbiAgICA8aW5wdXRcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxuICAgICAgW2F0dHIudHlwZV09XCInbnVtYmVyJ1wiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiXG4gICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlcigpXCJcbiAgICAvPlxuICAgIDxqZi1lcnJvciBbY29udHJvbF09XCJjb250cm9sXCI+PC9qZi1lcnJvcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgeyB9XG4iLCJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8bGFiZWwgW2F0dHIuY2xhc3NdPVwic2NoZW1hLmtleVwiIFtuZ0NsYXNzXT1cIntyZXF1aXJlZDogaXNSZXF1aXJlZCgpfVwiPlxuICAgICAge3t0aXRsZSgpfX08c3VwICpuZ0lmPVwiaXNSZXF1aXJlZCgpXCI+Kjwvc3VwPlxuICAgIDwvbGFiZWw+XG4gICAgPGRpdiAqbmdJZj1cInByZXZpZXdTcmNFeGlzdHMoKVwiIGNsYXNzPVwicGhvdG8tcHJldmlld1wiPlxuICAgICAgPGltZyBbYXR0ci5zcmNdPVwicGhvdG9EYXRhXCIgLz5cbiAgICAgIDxzcGFuIGhyZWY9XCIjXCIgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCIgKGNsaWNrKT1cImNsZWFyUGhvdG8oKVwiPlxuICAgICAgICA8aSBjbGFzcz1cImxhIGxhLWNsb3NlXCI+PC9pPlxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8aW5wdXRcbiAgICAgICAgKm5nSWY9XCIhcHJldmlld1NyY0V4aXN0cygpXCJcbiAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIlxuICAgICAgLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgW25hbWVdPVwic2NoZW1hLmtleVwiIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCIgLz5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBQaG90b0NvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIHB1YmxpYyBwaG90b0RhdGE6IHN0cmluZztcblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb2Nlc3NGaWxlKHJlYWRlci5yZXN1bHQsIGZpbGUudHlwZSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLnBob3RvRGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodGhpcy5waG90b0RhdGEpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIHJlYWRpbmcgdGhlIGZpbGUhJyk7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YoZmlsZSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICB9XG4gIH1cblxuICBwcmV2aWV3U3JjRXhpc3RzKCkge1xuICAgIHJldHVybiB0eXBlb2YgKHRoaXMucGhvdG9EYXRhKSA9PT0gJ3N0cmluZyc7XG4gIH1cblxuICBjbGVhclBob3RvKCkge1xuICAgIHRoaXMucGhvdG9EYXRhID0gbnVsbDtcbiAgICB0aGlzLmNvbnRyb2wucmVzZXQoKTtcbiAgfVxuXG4gIHByb2Nlc3NGaWxlKGRhdGFVUkwsIGZpbGVUeXBlKSB7XG4gICAgY29uc3QgbWF4V2lkdGggPSA4MDA7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gODAwO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBkYXRhVVJMO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBpbWFnZS53aWR0aDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xuICAgICAgICBjb25zdCBzaG91bGRSZXNpemUgPSAod2lkdGggPiBtYXhXaWR0aCkgfHwgKGhlaWdodCA+IG1heEhlaWdodCk7XG5cbiAgICAgICAgaWYgKCFzaG91bGRSZXNpemUpIHtcbiAgICAgICAgICByZXNvbHZlKGRhdGFVUkwpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld1dpZHRoO1xuICAgICAgICBsZXQgbmV3SGVpZ2h0O1xuXG4gICAgICAgIGlmICh3aWR0aCA+IGhlaWdodCkge1xuICAgICAgICAgIG5ld0hlaWdodCA9IGhlaWdodCAqIChtYXhXaWR0aCAvIHdpZHRoKTtcbiAgICAgICAgICBuZXdXaWR0aCA9IG1heFdpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1dpZHRoID0gd2lkdGggKiAobWF4SGVpZ2h0IC8gaGVpZ2h0KTtcbiAgICAgICAgICBuZXdIZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gbmV3V2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIG5ld1dpZHRoLCBuZXdIZWlnaHQpO1xuXG4gICAgICAgIHJlc29sdmUoY2FudmFzLnRvRGF0YVVSTChmaWxlVHlwZSkpO1xuICAgICAgfTtcblxuICAgICAgaW1hZ2Uub25lcnJvciA9IChlcnIpID0+IHJlamVjdChlcnIpO1xuICAgIH0pO1xuICB9XG59XG5cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8bGFiZWwgW2F0dHIuY2xhc3NdPVwic2NoZW1hLmtleVwiIFtuZ0NsYXNzXT1cInsnbWFyZ2luLWJvdHRvbS0taGFsZic6IHRydWUsIHJlcXVpcmVkOiBpc1JlcXVpcmVkKCl9XCI+XG4gICAgICB7e3RpdGxlKCl9fTxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+PC9sYWJlbD5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCIgW2F0dHIuY2xhc3NdPVwiJ2luZm8nXCIgW2F0dHIudGl0bGVdPVwidGhpcy5zY2hlbWEuZGVzY3JpcHRpb25cIj5JbmZvPC9idXR0b24+XG4gICAgPGRpdiBbY2xhc3NdPVwiZ2V0Q2xhc3MoJ3JhZGlvLWdyb3VwJylcIj5cbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGVudW0gb2YgdGhpcy5zY2hlbWEuZW51bTsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgIFtuZ0NsYXNzXT1cInsncmFkaW8tY29udGFpbmVyJzogdHJ1ZSwgJ2NoZWNrZWQnOiBjb250cm9sLnZhbHVlID09PSBlbnVtfVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgIFthdHRyLmlkXT1cImdldElkKGksIGVudW0pXCJcbiAgICAgICAgICBbY2hlY2tlZF09XCJjb250cm9sLnZhbHVlID09PSBlbnVtXCJcbiAgICAgICAgICBbbmFtZV09XCJnZXROYW1lKHNjaGVtYS5rZXkpXCJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiXG4gICAgICAgICAgW3ZhbHVlXT1cImVudW1cIiAvPlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBbYXR0ci5mb3JdPVwiZ2V0SWQoaSwgZW51bSlcIlxuICAgICAgICAgIFthdHRyLmNsYXNzXT1cInNjaGVtYS5rZXlcIj5cbiAgICAgICAgICAge3tlbnVtTmFtZXMoaSl9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9ncm91cENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIHJhbmRvbVN1ZmZpeCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcblxuICBnZXRJZChpLCB2YWwpIHtcbiAgICAgIHJldHVybiBgJHtpfS0ke3ZhbC50b1N0cmluZygpLnJlcGxhY2UoL1tcXFdfXSsvZywgJycpfSske3RoaXMucmFuZG9tU3VmZml4fWA7XG4gIH1cblxuICBnZXROYW1lKGtleSkge1xuICAgIHJldHVybiBgJHtrZXl9LSR7dGhpcy5yYW5kb21TdWZmaXh9YDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgY3JlYXRlTnVtYmVyTWFzayBmcm9tICd0ZXh0LW1hc2stYWRkb25zL2Rpc3QvY3JlYXRlTnVtYmVyTWFzayc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxsYWJlbCBbbmdDbGFzc109XCJbJ2pmLWxhYmVsJywgc2NoZW1hLmtleSwgKGlzUmVxdWlyZWQoKSA/ICdyZXF1aXJlZCcgOiAnJyldXCI+XG4gICAgICB7e3RpdGxlKCl9fTxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+XG4gICAgPC9sYWJlbD5cbiAgICA8aW5wdXRcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxuICAgICAgW2F0dHIudHlwZV09XCInZGF0ZSdcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyKClcIlxuICAgICAgW3RleHRNYXNrXT1cInsgbWFzazogbnVtYmVyTWFza31cIlxuICAgICAgKGlucHV0KT1jbGVhbk1hc2soJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAvPlxuICAgIDxqZi1lcnJvciBbY29udHJvbF09XCJjb250cm9sXCI+PC9qZi1lcnJvcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHtcbiAgbnVtYmVyTWFzayA9IGNyZWF0ZU51bWJlck1hc2soeyBhbGxvd0RlY2ltYWw6IGZhbHNlLCBwcmVmaXg6ICcnIH0pO1xuXG4gIGNsZWFuTWFzayh2YWx1ZSkge1xuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgY3JlYXRlTnVtYmVyTWFzayBmcm9tICd0ZXh0LW1hc2stYWRkb25zL2Rpc3QvY3JlYXRlTnVtYmVyTWFzayc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxsYWJlbCBbbmdDbGFzc109XCJbJ2pmLWxhYmVsJywgc2NoZW1hLmtleSwgKGlzUmVxdWlyZWQoKSA/ICdyZXF1aXJlZCcgOiAnJyldXCI+XG4gICAgICB7e3RpdGxlKCl9fTxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+XG4gICAgPC9sYWJlbD5cbiAgICA8aW5wdXRcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxuICAgICAgW2F0dHIudHlwZV09XCIndGV4dCdcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyKClcIlxuICAgICAgW3RleHRNYXNrXT1cInsgbWFzazogbnVtYmVyTWFza31cIlxuICAgICAgKGlucHV0KT1jbGVhbk1hc2soJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAvPlxuICAgIDxqZi1lcnJvciBbY29udHJvbF09XCJjb250cm9sXCI+PC9qZi1lcnJvcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBNb25leUNvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIG51bWJlck1hc2sgPSBjcmVhdGVOdW1iZXJNYXNrKHsgYWxsb3dEZWNpbWFsOiBmYWxzZSwgcHJlZml4OiAnJyB9KTtcblxuICBjbGVhbk1hc2sodmFsdWUpIHtcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUucmVwbGFjZSgvXFxEL2csICcnKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtKc29uRm9ybUZpZWxkc1NlcnZpY2V9IGZyb20gJy4uL2pzb24tZm9ybS1maWVsZHMuc2VydmljZSc7XG5pbXBvcnQge0NoZWNrYm94Z3JvdXBDb21wb25lbnR9IGZyb20gJy4uLy4uL2ZpZWxkcy9jaGVja2JveGdyb3VwL2NoZWNrYm94Z3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7TXVsdGlzZWxlY3RDb21wb25lbnR9IGZyb20gJy4uLy4uL2ZpZWxkcy9tdWx0aXNlbGVjdC9tdWx0aXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHtUZXh0YXJlYUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vZmllbGRzL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudCc7XG5pbXBvcnQge1NlbGVjdENvbXBvbmVudH0gZnJvbSAnLi4vLi4vZmllbGRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7Qm9vbGVhbkNvbXBvbmVudH0gZnJvbSAnLi4vLi4vZmllbGRzL2Jvb2xlYW4vYm9vbGVhbi5jb21wb25lbnQnO1xuaW1wb3J0IHtOdW1iZXJDb21wb25lbnR9IGZyb20gJy4uLy4uL2ZpZWxkcy9udW1iZXIvbnVtYmVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1Bob3RvQ29tcG9uZW50fSBmcm9tICcuLi8uLi9maWVsZHMvcGhvdG8vcGhvdG8uY29tcG9uZW50JztcbmltcG9ydCB7UmFkaW9ncm91cENvbXBvbmVudH0gZnJvbSAnLi4vLi4vZmllbGRzL3JhZGlvZ3JvdXAvcmFkaW9ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHtTdHJpbmdDb21wb25lbnR9IGZyb20gJy4uLy4uL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQge0RhdGVDb21wb25lbnR9IGZyb20gJy4uLy4uL2ZpZWxkcy9kYXRlL2RhdGUuY29tcG9uZW50JztcbmltcG9ydCB7QnV0dG9uQ29tcG9uZW50fSBmcm9tICcuLi8uLi9maWVsZHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9uZXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbW9uZXkvbW9uZXkuY29tcG9uZW50JztcbmltcG9ydCB7IE9iamVjdENvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9jb21wb25lbnRzL29iamVjdC9vYmplY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEFycmF5Q29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmVkL2NvbXBvbmVudHMvYXJyYXkvYXJyYXkuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpzb25Gb3JtQm9vdHN0cmFwNCBleHRlbmRzIEpzb25Gb3JtRmllbGRzU2VydmljZSB7XG4gIGZpZWxkVHlwZXMgPSB7XG4gICAgc3RyaW5nOiBTdHJpbmdDb21wb25lbnQsXG4gICAgc2VsZWN0OiBTZWxlY3RDb21wb25lbnQsXG4gICAgbnVtYmVyOiBOdW1iZXJDb21wb25lbnQsXG4gICAgYm9vbGVhbjogQm9vbGVhbkNvbXBvbmVudCxcbiAgICBwaG90bzogUGhvdG9Db21wb25lbnQsXG4gICAgdGV4dGFyZWE6IFRleHRhcmVhQ29tcG9uZW50LFxuICAgIG9iamVjdDogT2JqZWN0Q29tcG9uZW50LFxuICAgIGFycmF5OiBBcnJheUNvbXBvbmVudCxcbiAgICBkYXRlOiBEYXRlQ29tcG9uZW50LFxuICAgIHJhZGlvZ3JvdXA6IFJhZGlvZ3JvdXBDb21wb25lbnQsXG4gICAgY2hlY2tib3hncm91cDogQ2hlY2tib3hncm91cENvbXBvbmVudCxcbiAgICBtdWx0aXNlbGVjdDogTXVsdGlzZWxlY3RDb21wb25lbnQsXG4gICAgbW9uZXk6IE1vbmV5Q29tcG9uZW50LFxuICAgIGJ1dHRvbjogQnV0dG9uQ29tcG9uZW50XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY2hlbWFGb3JtR3JvdXAgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvc2NoZW1hLWZvcm0tZ3JvdXAnO1xuaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pmLWNvbXBvbmVudC1jaG9vc2VyLCBbamYtY29tcG9uZW50LWNob29zZXJdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aDIgKm5nSWY9XCJzY2hlbWEgJiYgc2NoZW1hLmhhc093blByb3BlcnR5KCd0aXRsZScpICYmICFuZXN0ZWRcIj5cbiAgICAgIHt7c2NoZW1hLnRpdGxlfX1cbiAgICA8L2gyPlxuICAgIDxoNCAqbmdJZj1cInNjaGVtYSAmJiBzY2hlbWEuaGFzT3duUHJvcGVydHkoJ3RpdGxlJykgJiYgbmVzdGVkXCI+XG4gICAgICB7e3NjaGVtYS50aXRsZX19XG4gICAgPC9oND5cbiAgICA8ZGl2IFtuZ0NsYXNzXT1cIlsnZm9ybS1jb250YWluZXInXVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgKm5nSWY9XCJzY2hlbWEgJiYgc2NoZW1hLmhhc093blByb3BlcnR5KCdkZXNjcmlwdGlvbicpXCIgW2lubmVySFRNTF09XCJzY2hlbWEuZGVzY3JpcHRpb25cIj48L2Rpdj5cbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGNvbnRyb2wgb2Yga2V5cyhmb3JtLmNvbnRyb2xzKVwiIGpmLWZpZWxkIFtjb250cm9sXT1cImZvcm0uZ2V0KGNvbnRyb2wpXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ2hvb3NlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGZvcm06IFNjaGVtYUZvcm1Hcm91cDtcbiAgQElucHV0KCkgc2NoZW1hOiBTY2hlbWE7XG4gIEBJbnB1dCgpIG5lc3RlZCA9IGZhbHNlO1xuICBrZXlzID0gT2JqZWN0LmtleXM7XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbnRyb2wgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvc2NoZW1hLWZvcm0tY29udHJvbCc7XG5pbXBvcnQge0pzb25Gb3JtRmllbGRzU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vanNvbi1mb3JtLWZpZWxkcy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamYtZmllbGQsIFtqZi1maWVsZF0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8bmctY29udGFpbmVyICNjb250YWluZXI+PC9uZy1jb250YWluZXI+XG4gIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG4gIEBJbnB1dCgpIGNvbnRyb2w6IFNjaGVtYUZvcm1Db250cm9sO1xuICBwdWJsaWMgcGF0dGVybnM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGpzb25Gb3JtRmllbGRzU2VydmljZTogSnNvbkZvcm1GaWVsZHNTZXJ2aWNlLFxuICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLnBhdHRlcm5zID0ge307XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdlbmVyYXRlRmllbGQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmdlbmVyYXRlRmllbGQoKTtcbiAgfVxuXG4gIGdlbmVyYXRlRmllbGQoKSB7XG4gICAgdGhpcy5jb250YWluZXIuY2xlYXIoKTtcbiAgICB0aGlzLmpzb25Gb3JtRmllbGRzU2VydmljZVswXS5zZXRSb290Vmlld0NvbnRhaW5lclJlZih0aGlzLmNvbnRhaW5lcik7XG4gICAgdGhpcy5qc29uRm9ybUZpZWxkc1NlcnZpY2VbMF0uYWRkRHluYW1pY0NvbXBvbmVudCh0aGlzLmNvbnRyb2wpO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSBgZmllbGQgbWFyZ2luLWJvdHRvbSAke3RoaXMuZ2V0Q2xhc3MoKX0gZm9ybS1ncm91cGA7XG4gIH1cblxuICBnZXRDbGFzcyhkZWZhdWx0Q2xhc3MgPSAnJykge1xuICAgIGNvbnN0IGZpZWxkQ2xhc3MgPSBbZGVmYXVsdENsYXNzXTtcbiAgICBmaWVsZENsYXNzLnB1c2godGhpcy5jb250cm9sLnNjaGVtYS50eXBlKTtcbiAgICBmaWVsZENsYXNzLnB1c2godGhpcy5jb250cm9sLnNjaGVtYS5rZXkpO1xuXG4gICAgaWYgKHRoaXMuY29udHJvbC5zY2hlbWEuaGFzT3duUHJvcGVydHkoJ2Rlc2NyaXB0aW9uJykpIHtcbiAgICAgIGZpZWxkQ2xhc3MucHVzaCgnaGFzLWluZm8nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250cm9sLnNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnZm9ybWF0JykpIHtcbiAgICAgIGZpZWxkQ2xhc3MucHVzaCh0aGlzLmNvbnRyb2wuc2NoZW1hLmZvcm1hdCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29udHJvbC5zdHlsZSAmJiB0aGlzLmNvbnRyb2wuc3R5bGUuZGVmYXVsdCAmJiBbJ3JhZGlvZ3JvdXAnLCAnY2hlY2tib3hncm91cCddLmluZGV4T2YodGhpcy5jb250cm9sLnNjaGVtYS5mb3JtYXQpID09PSAtMSkge1xuICAgICAgZmllbGRDbGFzcy5wdXNoKHRoaXMuY29udHJvbC5zdHlsZS5kZWZhdWx0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmllbGRDbGFzcy5maWx0ZXIoKGQpID0+IGQpLmpvaW4oJyAnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0pzb25Gb3JtRmllbGRzU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vanNvbi1mb3JtLWZpZWxkcy5zZXJ2aWNlJztcbmltcG9ydCB7QnV0dG9uQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdqZi1mb3JtLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAjYnV0dG9uPjwvbmctY29udGFpbmVyPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1CdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpc0Zvcm1WYWxpZCA9IHRydWU7XG4gIEBJbnB1dCgpIGxhYmVsID0gJyc7XG4gIEBJbnB1dCgpIGlzTXVsdGlTdGVwID0gZmFsc2U7XG4gIEBJbnB1dCgpIHN0ZXBzID0gW107XG4gIEBJbnB1dCgpIHN1Ym1pdCA9ICcnO1xuICBASW5wdXQoKSBjb250aW51ZSA9ICcnO1xuICBASW5wdXQoKSBjYW5jZWwgPSAnJztcbiAgQElucHV0KCkgc3VibWl0Q2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgY2FuY2VsQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgaXNXb3JraW5nID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBoYW5kbGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQFZpZXdDaGlsZCgnYnV0dG9uJywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KSBidXR0b246IFZpZXdDb250YWluZXJSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGpzb25Gb3JtRmllbGRzU2VydmljZTogSnNvbkZvcm1GaWVsZHNTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmJ1dHRvbi5jbGVhcigpO1xuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmpzb25Gb3JtRmllbGRzU2VydmljZVswXS5nZXQoJ2J1dHRvbicpKTtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmJ1dHRvbi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG4gICAgKDxCdXR0b25Db21wb25lbnQ+IGNvbXBvbmVudFJlZi5pbnN0YW5jZSkudHlwZSA9IHRoaXMuZ2V0VHlwZSgpO1xuICAgICg8QnV0dG9uQ29tcG9uZW50PiBjb21wb25lbnRSZWYuaW5zdGFuY2UpLmlzVmlzaWJsZSA9IHRoaXMuaXNWaXNpYmxlKCk7XG4gICAgKDxCdXR0b25Db21wb25lbnQ+IGNvbXBvbmVudFJlZi5pbnN0YW5jZSkuY2xhc3MgPSB0aGlzLmdldENsYXNzKCk7XG4gICAgKDxCdXR0b25Db21wb25lbnQ+IGNvbXBvbmVudFJlZi5pbnN0YW5jZSkuZGlzYWJsZWQgPSB0aGlzLmlzV29ya2luZztcbiAgICAoPEJ1dHRvbkNvbXBvbmVudD4gY29tcG9uZW50UmVmLmluc3RhbmNlKS5pc1dvcmtpbmcgPSB0aGlzLmlzV29ya2luZztcbiAgICAoPEJ1dHRvbkNvbXBvbmVudD4gY29tcG9uZW50UmVmLmluc3RhbmNlKS5sYWJlbCA9IHRoaXMuZ2V0TGFiZWwoKTtcbiAgICAoPEJ1dHRvbkNvbXBvbmVudD4gY29tcG9uZW50UmVmLmluc3RhbmNlKS5oYW5kbGVCdXR0b25DbGljayA9IHRoaXMuaGFuZGxlQ2xpY2s7XG4gICAgKDxCdXR0b25Db21wb25lbnQ+IGNvbXBvbmVudFJlZi5pbnN0YW5jZSkuY29sb3IgPSB0aGlzLnN1Ym1pdCA/ICdwcmltYXJ5JyA6ICcnO1xuICB9XG5cbiAgZ2V0Q2xhc3MoKSB7XG4gICAgcmV0dXJuICh0aGlzLmNhbmNlbC5sZW5ndGggPiAwKVxuICAgICAgPyBbJ2J0biBidG4tZGVmYXVsdCBidXR0b24nLCB0aGlzLmNhbmNlbENsYXNzIHx8ICcnXVxuICAgICAgOiBbJ2J0biBidG4tcHJpbWFyeSBidXR0b24gYnV0dG9uLS1hY2NlcHQnLCB0aGlzLnN1Ym1pdENsYXNzIHx8ICcnLCAodGhpcy5pc0Zvcm1WYWxpZCA/ICd2YWxpZCcgOiAnaW52YWxpZCcpXTtcbiAgfVxuXG4gIGlzVmlzaWJsZSgpIHtcbiAgICBjb25zdCBzdGVwID0gdGhpcy5zdGVwcy5maW5kSW5kZXgoKHMpID0+IHMudmlzaWJsZSk7XG4gICAgaWYgKHRoaXMuaXNNdWx0aVN0ZXAgJiYgdGhpcy5jYW5jZWwubGVuZ3RoID4gMCAmJiB0aGlzLnN0ZXBzW3N0ZXBdKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGVwc1tzdGVwXS50eXBlICE9PSAnZmlyc3QnO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0TGFiZWwoKSB7XG4gICAgaWYgKHRoaXMuaXNNdWx0aVN0ZXAgJiYgdGhpcy5jYW5jZWwubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc3RlcCA9IHRoaXMuc3RlcHMuZmluZEluZGV4KChzKSA9PiBzLnZpc2libGUpO1xuICAgICAgaWYgKHRoaXMuc3RlcHNbc3RlcF0gJiYgdGhpcy5zdGVwc1tzdGVwXS50eXBlICE9PSAnZmlyc3QnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbmNlbDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNNdWx0aVN0ZXApIHtcbiAgICAgIGNvbnN0IHN0ZXAgPSB0aGlzLnN0ZXBzLmZpbmRJbmRleCgocykgPT4gcy52aXNpYmxlKTtcbiAgICAgIGlmICh0aGlzLnN0ZXBzW3N0ZXBdICYmIHRoaXMuc3RlcHNbc3RlcF0udHlwZSAhPT0gJ2xhc3QnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5zdWJtaXQ7XG4gICAgfSBlbHNlICBpZiAodGhpcy5jYW5jZWwubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FuY2VsO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN1Ym1pdDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgaWYgKHRoaXMuY2FuY2VsKSB7XG4gICAgICByZXR1cm4gJ2J1dHRvbic7XG4gICAgfVxuXG4gICAgcmV0dXJuICdzdWJtaXQnO1xuICB9XG5cbiAgaGFuZGxlQnV0dG9uQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuY2FuY2VsLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuaGFuZGxlQ2xpY2suZW1pdCgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamYtaW5mby1idXR0b24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxhXG4gICAgICBbYXR0ci5ocmVmXT1cIidqYXZhc2NyaXB0OnZvaWQoMCknXCJcbiAgICAgICpuZ0lmPVwidGl0bGVcIlxuICAgICAgW2F0dHIuY2xhc3NdPVwiJ2J0biBidG4tbGluayBpbmZvJ1wiIFthdHRyLnRpdGxlXT1cInRpdGxlXCI+SW5mbzwvYT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBJbmZvQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdGl0bGU7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pmLXdvcmtpbmctc3Bpbm5lcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZyAqbmdJZj1cImlzV29ya2luZ1wiIHdpZHRoPVwiMzhcIiBoZWlnaHQ9XCIzOFwiIHZpZXdCb3g9XCIwIDAgMzggMzhcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgc3Ryb2tlPVwiI2ZmZlwiPlxuICAgICAgPGcgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxIDEpXCIgc3Ryb2tlLXdpZHRoPVwiMlwiPlxuICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLW9wYWNpdHk9XCIuNVwiIGN4PVwiMThcIiBjeT1cIjE4XCIgcj1cIjE4XCIvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMzYgMThjMC05Ljk0LTguMDYtMTgtMTgtMThcIj5cbiAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIlxuICAgICAgICAgICAgICB0eXBlPVwicm90YXRlXCJcbiAgICAgICAgICAgICAgZnJvbT1cIjAgMTggMThcIlxuICAgICAgICAgICAgICB0bz1cIjM2MCAxOCAxOFwiXG4gICAgICAgICAgICAgIGR1cj1cIjFzXCJcbiAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIvPlxuICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFdvcmtpbmdTcGlubmVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaXNXb3JraW5nID0gZmFsc2U7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Q2hvb3NlckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2Nob29zZXIvY2hvb3Nlci5jb21wb25lbnQnO1xuaW1wb3J0IHtGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQge0Zvcm1CdXR0b25Db21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLWJ1dHRvbi9mb3JtLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtJbmZvQnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvaW5mby1idXR0b24vaW5mby1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7V29ya2luZ1NwaW5uZXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy93b3JraW5nLXNwaW5uZXIvd29ya2luZy1zcGlubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1RleHRhcmVhVmlld0NvbXBvbmVudH0gZnJvbSAnLi4vLi4vZmllbGRzL3RleHRhcmVhL3RleHRhcmVhLnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7UmFkaW9ncm91cFZpZXdDb21wb25lbnR9IGZyb20gJy4uLy4uL2ZpZWxkcy9yYWRpb2dyb3VwL3JhZGlvZ3JvdXAudmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWxlY3RWaWV3Q29tcG9uZW50fSBmcm9tICcuLi8uLi9maWVsZHMvc2VsZWN0L3NlbGVjdC52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQge0RhdGVWaWV3Q29tcG9uZW50fSBmcm9tICcuLi8uLi9maWVsZHMvZGF0ZS9kYXRlLnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7Qm9vbGVhblZpZXdDb21wb25lbnR9IGZyb20gJy4uLy4uL2ZpZWxkcy9ib29sZWFuL2Jvb2xlYW4udmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHtQaG90b1ZpZXdDb21wb25lbnR9IGZyb20gJy4uLy4uL2ZpZWxkcy9waG90by9waG90by52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQge1N0cmluZ1ZpZXdDb21wb25lbnR9IGZyb20gJy4uLy4uL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7TnVtYmVyVmlld0NvbXBvbmVudH0gZnJvbSAnLi4vLi4vZmllbGRzL251bWJlci9udW1iZXIudmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHtDaGVja2JveGdyb3VwVmlld0NvbXBvbmVudH0gZnJvbSAnLi4vLi4vZmllbGRzL2NoZWNrYm94Z3JvdXAvY2hlY2tib3hncm91cC52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPYmplY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvb2JqZWN0L29iamVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHtNb25leVZpZXdDb21wb25lbnR9IGZyb20gJy4uLy4uL2ZpZWxkcy9tb25leS9tb25leS52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQge011bHRpc2VsZWN0Vmlld0NvbXBvbmVudH0gZnJvbSAnLi4vLi4vZmllbGRzL211bHRpc2VsZWN0L211bHRpc2VsZWN0LnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7SnNvbkZvcm1Db21wb25lbnR9IGZyb20gJy4uLy4uL2pzb24tZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHtDb21tb25Db21wb25lbnR9IGZyb20gJy4uLy4uL2ZpZWxkcy9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7VGV4dE1hc2tNb2R1bGV9IGZyb20gJ2FuZ3VsYXIyLXRleHQtbWFzayc7XG5pbXBvcnQgeyBBcnJheUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcnJheS9hcnJheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXJyYXlWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FycmF5L2FycmF5LnZpZXcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUZXh0TWFza01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEpzb25Gb3JtQ29tcG9uZW50LFxuICAgIENvbW1vbkNvbXBvbmVudCxcbiAgICBDaG9vc2VyQ29tcG9uZW50LFxuICAgIEZpZWxkQ29tcG9uZW50LFxuICAgIEZvcm1CdXR0b25Db21wb25lbnQsXG4gICAgSW5mb0J1dHRvbkNvbXBvbmVudCxcbiAgICBXb3JraW5nU3Bpbm5lckNvbXBvbmVudCxcbiAgICBTdHJpbmdWaWV3Q29tcG9uZW50LFxuICAgIFNlbGVjdFZpZXdDb21wb25lbnQsXG4gICAgTnVtYmVyVmlld0NvbXBvbmVudCxcbiAgICBCb29sZWFuVmlld0NvbXBvbmVudCxcbiAgICBQaG90b1ZpZXdDb21wb25lbnQsXG4gICAgVGV4dGFyZWFWaWV3Q29tcG9uZW50LFxuICAgIERhdGVWaWV3Q29tcG9uZW50LFxuICAgIFJhZGlvZ3JvdXBWaWV3Q29tcG9uZW50LFxuICAgIENoZWNrYm94Z3JvdXBWaWV3Q29tcG9uZW50LFxuICAgIE11bHRpc2VsZWN0Vmlld0NvbXBvbmVudCxcbiAgICBNb25leVZpZXdDb21wb25lbnQsXG4gICAgT2JqZWN0Q29tcG9uZW50LFxuICAgIEFycmF5Q29tcG9uZW50LFxuICAgIEFycmF5Vmlld0NvbXBvbmVudFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBKc29uRm9ybUNvbXBvbmVudCxcbiAgICBDb21tb25Db21wb25lbnQsXG4gICAgQ2hvb3NlckNvbXBvbmVudCxcbiAgICBGaWVsZENvbXBvbmVudCxcbiAgICBGb3JtQnV0dG9uQ29tcG9uZW50LFxuICAgIEluZm9CdXR0b25Db21wb25lbnQsXG4gICAgV29ya2luZ1NwaW5uZXJDb21wb25lbnQsXG4gICAgU3RyaW5nVmlld0NvbXBvbmVudCxcbiAgICBTZWxlY3RWaWV3Q29tcG9uZW50LFxuICAgIE51bWJlclZpZXdDb21wb25lbnQsXG4gICAgQm9vbGVhblZpZXdDb21wb25lbnQsXG4gICAgUGhvdG9WaWV3Q29tcG9uZW50LFxuICAgIFRleHRhcmVhVmlld0NvbXBvbmVudCxcbiAgICBEYXRlVmlld0NvbXBvbmVudCxcbiAgICBSYWRpb2dyb3VwVmlld0NvbXBvbmVudCxcbiAgICBDaGVja2JveGdyb3VwVmlld0NvbXBvbmVudCxcbiAgICBNdWx0aXNlbGVjdFZpZXdDb21wb25lbnQsXG4gICAgTW9uZXlWaWV3Q29tcG9uZW50LFxuICAgIE9iamVjdENvbXBvbmVudCxcbiAgICBBcnJheUNvbXBvbmVudCxcbiAgICBBcnJheVZpZXdDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENob29zZXJDb21wb25lbnQsXG4gICAgRmllbGRDb21wb25lbnQsXG4gICAgRm9ybUJ1dHRvbkNvbXBvbmVudCxcbiAgICBJbmZvQnV0dG9uQ29tcG9uZW50LFxuICAgIFdvcmtpbmdTcGlubmVyQ29tcG9uZW50LFxuICAgIEpzb25Gb3JtQ29tcG9uZW50LFxuICAgIENvbW1vbkNvbXBvbmVudCxcbiAgICBBcnJheUNvbXBvbmVudCxcbiAgICBPYmplY3RDb21wb25lbnRcbiAgXVxufSlcblxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEpzb25Gb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9qc29uLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IEpzb25Gb3JtRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kZWZhdWx0cy5zZXJ2aWNlJztcbmltcG9ydCB7IEpzb25Gb3JtVmFsaWRhdG9yc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3ZhbGlkYXRvcnMuc2VydmljZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuL2ZpZWxkcy9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBKc29uRm9ybUJvb3RzdHJhcDQgfSBmcm9tICcuL2ZyYW1ld29yay9ib290c3RyYXA0L2pzb24tZm9ybS1ib290c3RyYXA0JztcbmltcG9ydCB7IEpzb25Gb3JtRmllbGRzU2VydmljZSB9IGZyb20gJy4vZnJhbWV3b3JrL2pzb24tZm9ybS1maWVsZHMuc2VydmljZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL2ZyYW1ld29yay9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ29tbW9uQ29tcG9uZW50LFxuICAgIEpzb25Gb3JtQ29tcG9uZW50XG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIEpzb25Gb3JtQ29tcG9uZW50LFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBKc29uRm9ybURlZmF1bHRzU2VydmljZSxcbiAgICBKc29uRm9ybVZhbGlkYXRvcnNTZXJ2aWNlXG4gIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBKc29uRm9ybU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KC4uLmZyYW1ld29ya3MpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICBjb25zdCBsb2FkRnJhbWV3b3JrID0gZnJhbWV3b3Jrcy5sZW5ndGhcbiAgICAgID8gZnJhbWV3b3Jrcy5tYXAoZnJhbWV3b3JrID0+IGZyYW1ld29yay5mb3JSb290KCkucHJvdmlkZXJzWzBdKVxuICAgICAgOiBbeyBwcm92aWRlOiBKc29uRm9ybUZpZWxkc1NlcnZpY2UsIHVzZUNsYXNzOiBKc29uRm9ybUJvb3RzdHJhcDQsIG11bHRpOiB0cnVlIH1dO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBKc29uRm9ybU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBKc29uRm9ybURlZmF1bHRzU2VydmljZSxcbiAgICAgICAgSnNvbkZvcm1WYWxpZGF0b3JzU2VydmljZSxcbiAgICAgICAgLi4ubG9hZEZyYW1ld29ya1xuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pmLWVycm9yLCBbamYtZXJyb3JdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICpuZ0lmPVwiY29udHJvbC5pbnZhbGlkICYmIChjb250cm9sLmRpcnR5IHx8IGNvbnRyb2wudG91Y2hlZClcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1sncmVxdWlyZWQnXVwiPlxuICAgICAgICBUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ3BhdHRlcm4nXVwiPlxuICAgICAgICBJbnB1dCB2YWx1ZSBpcyBpbnZhbGlkLlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ21pbmxlbmd0aCddXCI+XG4gICAgICAgIElucHV0IGhhcyB0byBiZSBhIG1pbmltdW0gb2Yge3tjb250cm9sLmVycm9yc1snbWlubGVuZ3RoJ11bJ3JlcXVpcmVkTGVuZ3RoJ119fSBjaGFyYWN0ZXJzLlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ21heGxlbmd0aCddXCI+XG4gICAgICAgIElucHV0IGNhbiBjb250YWluIGEgbWF4aW11bSBvZiB7e2NvbnRyb2wuZXJyb3JzWydtYXhsZW5ndGgnXVsncmVxdWlyZWRMZW5ndGgnXX19IGNoYXJhY3RlcnMuXG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1snbWluJ11cIj5cbiAgICAgICAgRW50ZXIgYSB2YWx1ZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8ge3tjb250cm9sLmVycm9yc1snbWluJ11bJ21pbiddfX0uXG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1snbWF4J11cIj5cbiAgICAgICAgRW50ZXIgYSB2YWx1ZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8ge3tjb250cm9sLmVycm9yc1snbWF4J11bJ21heCddfX0uXG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1snY3VzdG9tRXJyb3InXVwiPlxuICAgICAgICB7e2NvbnRyb2wuZXJyb3JzWydjdXN0b21FcnJvciddfX1cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY29udHJvbDtcbn1cbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN0cmluZ0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0TWFza01vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXRleHQtbWFzayc7XG5pbXBvcnQgeyBKc29uRm9ybUJvb3RzdHJhcDQgfSBmcm9tICcuL2pzb24tZm9ybS1ib290c3RyYXA0JztcbmltcG9ydCB7IEpzb25Gb3JtRmllbGRzU2VydmljZSB9IGZyb20gJy4uL2pzb24tZm9ybS1maWVsZHMuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2RhdGUvZGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvZXJyb3IvZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IEJvb2xlYW5Db21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvYm9vbGVhbi9ib29sZWFuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdW1iZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbnVtYmVyL251bWJlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRhcmVhQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9uZXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbW9uZXkvbW9uZXkuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IENoZWNrYm94Z3JvdXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvY2hlY2tib3hncm91cC9jaGVja2JveGdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNdWx0aXNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9tdWx0aXNlbGVjdC9tdWx0aXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGhvdG9Db21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvcGhvdG8vcGhvdG8uY29tcG9uZW50JztcbmltcG9ydCB7IFJhZGlvZ3JvdXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvcmFkaW9ncm91cC9yYWRpb2dyb3VwLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBUZXh0TWFza01vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU3RyaW5nQ29tcG9uZW50LFxuICAgIFNlbGVjdENvbXBvbmVudCxcbiAgICBEYXRlQ29tcG9uZW50LFxuICAgIFRleHRhcmVhQ29tcG9uZW50LFxuICAgIEVycm9yQ29tcG9uZW50LFxuICAgIE1vbmV5Q29tcG9uZW50LFxuICAgIE51bWJlckNvbXBvbmVudCxcbiAgICBCb29sZWFuQ29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBDaGVja2JveGdyb3VwQ29tcG9uZW50LFxuICAgIE11bHRpc2VsZWN0Q29tcG9uZW50LFxuICAgIFBob3RvQ29tcG9uZW50LFxuICAgIFJhZGlvZ3JvdXBDb21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgU3RyaW5nQ29tcG9uZW50LFxuICAgIFNlbGVjdENvbXBvbmVudCxcbiAgICBEYXRlQ29tcG9uZW50LFxuICAgIFRleHRhcmVhQ29tcG9uZW50LFxuICAgIEVycm9yQ29tcG9uZW50LFxuICAgIE1vbmV5Q29tcG9uZW50LFxuICAgIE51bWJlckNvbXBvbmVudCxcbiAgICBCb29sZWFuQ29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBDaGVja2JveGdyb3VwQ29tcG9uZW50LFxuICAgIE11bHRpc2VsZWN0Q29tcG9uZW50LFxuICAgIFBob3RvQ29tcG9uZW50LFxuICAgIFJhZGlvZ3JvdXBDb21wb25lbnRcbiAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEpzb25Gb3JtQm9vdHN0cmFwNE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSnNvbkZvcm1Cb290c3RyYXA0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBKc29uRm9ybUZpZWxkc1NlcnZpY2UsXG4gICAgICAgICAgdXNlQ2xhc3M6IEpzb25Gb3JtQm9vdHN0cmFwNCxcbiAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPGlucHV0XG4gICAgICAgIG1hdElucHV0XG4gICAgICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxuICAgICAgICBbYXR0ci50eXBlXT1cInR5cGUoKVwiXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgICAgIFthdHRyLm1pbkxlbmd0aF09XCJzY2hlbWEubWluTGVuZ3RoIHx8IG51bGxcIlxuICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlcigpXCJcbiAgICAgICAgW3RleHRNYXNrXT1cInsgbWFzazogZ2V0TWFzaygpIH1cIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwidGl0bGUoKVwiXG4gICAgICAvPlxuICAgICAgPG1hdC1lcnJvciBqZi1lcnJvciBbY29udHJvbF09XCJjb250cm9sXCI+PC9tYXQtZXJyb3I+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBTdHJpbmdNYXRlcmlhbENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgW25hbWVdPVwic2NoZW1hLmtleVwiXG4gICAgICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgICAgICAgIFthdHRyLm1pbkxlbmd0aF09XCJzY2hlbWEubWluTGVuZ3RoIHx8IG51bGxcIlxuICAgICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyKClcIlxuICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJ0aXRsZSgpXCI+XG4gICAgICA8L3RleHRhcmVhPlxuICAgICAgPG1hdC1lcnJvciBqZi1lcnJvciBbY29udHJvbF09XCJjb250cm9sXCI+PC9tYXQtZXJyb3I+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYU1hdGVyaWFsQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuXG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LXNlbGVjdFxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJ7e2VtcHR5T3B0aW9uKCl9fVwiXG4gICAgPlxuICAgICAgPG1hdC1vcHRpb24gW2Rpc2FibGVkXT1cInRydWVcIj5cbiAgICAgICAgICB7e2VtcHR5T3B0aW9uKCl9fVxuICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGVuIG9mIHRoaXMuc2NoZW1hLmVudW07IGxldCBpID0gaW5kZXhcIiBbdmFsdWVdPVwiZW5cIj5cbiAgICAgICAgICB7e2VudW1OYW1lcyhpKX19XG4gICAgICA8L21hdC1vcHRpb24+XG4gICAgPC9tYXQtc2VsZWN0PlxuICAgIDxtYXQtZXJyb3IgamYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvbWF0LWVycm9yPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0TWF0ZXJpYWxDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICBlbXB0eU9wdGlvbigpIHtcbiAgICByZXR1cm4gc3VwZXIudGl0bGUoKS5yZXBsYWNlKC9bXkEtWjAtOV0rJC9pZywgJycpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbCBbYXR0ci5jbGFzc109XCJzY2hlbWEua2V5XCIgW25nQ2xhc3NdPVwieydtYXJnaW4tYm90dG9tLS1oYWxmJzogdHJ1ZSwgcmVxdWlyZWQ6IGlzUmVxdWlyZWQoKX1cIj5cbiAgICAgICAge3t0aXRsZSgpfX08c3VwICpuZ0lmPVwiaXNSZXF1aXJlZCgpXCI+Kjwvc3VwPjwvbGFiZWw+XG5cbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIiAqbmdGb3I9XCJsZXQgZW51bSBvZiB0aGlzLnNjaGVtYS5lbnVtOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uXG4gICAgICAgICAgW2NoZWNrZWRdPVwiY29udHJvbC52YWx1ZSA9PT0gZW51bS50b1N0cmluZygpXCJcbiAgICAgICAgICBbdmFsdWVdPVwiZW51bS50b1N0cmluZygpXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7ZW51bU5hbWVzKGkpfX1cbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9ncm91cE1hdGVyaWFsQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxsYWJlbCBbYXR0ci5jbGFzc109XCJzY2hlbWEua2V5XCIgW25nQ2xhc3NdPVwie3JlcXVpcmVkOiBpc1JlcXVpcmVkKCl9XCI+XG4gICAgICB7e3RpdGxlKCl9fTxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+XG4gICAgPC9sYWJlbD5cbiAgICA8ZGl2ICpuZ0lmPVwicHJldmlld1NyY0V4aXN0cygpOyBlbHNlIGFkZEltYWdlXCIgY2xhc3M9XCJwaG90by1wcmV2aWV3XCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzPVwicGhvdG8tYWRkXCJcbiAgICAgICAgbWF0LWJ1dHRvblxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1pbWFnZV09XCJtYWtlVHJ1c3RlZEltYWdlKHBob3RvRGF0YSlcIlxuICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1zaXplXT1cIidjb3ZlcidcIlxuICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1yZXBlYXRdPVwiJ25vLXJlcGVhdCdcIlxuICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IGZpbGVJbnB1dC5jbGljaygpO1wiXG4gICAgICA+XG4gICAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzPVwicGhvdG8tcmVtb3ZlXCJcbiAgICAgICAgbWF0LW1pbmktZmFiXG4gICAgICAgIGNvbG9yPVwid2FyblwiXG4gICAgICAgIChjbGljayk9XCJjbGVhclBob3RvKClcIlxuICAgICAgPlxuICAgICAgICA8bWF0LWljb24+Y2xvc2U8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPG5nLXRlbXBsYXRlICNhZGRJbWFnZT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3M9XCJwaG90by1hZGRcIlxuICAgICAgICBtYXQtYnV0dG9uXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIChjbGljayk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKTsgZmlsZUlucHV0LmNsaWNrKCk7XCJcbiAgICAgID5cbiAgICAgICAgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxpbnB1dCAjZmlsZUlucHV0IHR5cGU9XCJmaWxlXCIgW25hbWVdPVwic2NoZW1hLmtleVwiIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiLz5cbiAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIFtuYW1lXT1cInNjaGVtYS5rZXlcIiBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiIC8+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgUGhvdG9NYXRlcmlhbENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIHBob3RvRGF0YTogc3RyaW5nO1xuXG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvY2Vzc0ZpbGUocmVhZGVyLnJlc3VsdCwgZmlsZS50eXBlKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMucGhvdG9EYXRhID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh0aGlzLnBob3RvRGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgcmVhZGluZyB0aGUgZmlsZSEnKTtcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZihmaWxlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH1cbiAgfVxuXG4gIHByZXZpZXdTcmNFeGlzdHMoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiAodGhpcy5waG90b0RhdGEpID09PSAnc3RyaW5nJztcbiAgfVxuXG4gIGNsZWFyUGhvdG8oKSB7XG4gICAgdGhpcy5waG90b0RhdGEgPSBudWxsO1xuICAgIHRoaXMuY29udHJvbC5yZXNldCgpO1xuICB9XG5cbiAgcHJvY2Vzc0ZpbGUoZGF0YVVSTCwgZmlsZVR5cGUpIHtcbiAgICBjb25zdCBtYXhXaWR0aCA9IDgwMDtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSA4MDA7XG5cbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IGRhdGFVUkw7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB3aWR0aCA9IGltYWdlLndpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IHNob3VsZFJlc2l6ZSA9ICh3aWR0aCA+IG1heFdpZHRoKSB8fCAoaGVpZ2h0ID4gbWF4SGVpZ2h0KTtcblxuICAgICAgICBpZiAoIXNob3VsZFJlc2l6ZSkge1xuICAgICAgICAgIHJlc29sdmUoZGF0YVVSTCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmV3V2lkdGg7XG4gICAgICAgIGxldCBuZXdIZWlnaHQ7XG5cbiAgICAgICAgaWYgKHdpZHRoID4gaGVpZ2h0KSB7XG4gICAgICAgICAgbmV3SGVpZ2h0ID0gaGVpZ2h0ICogKG1heFdpZHRoIC8gd2lkdGgpO1xuICAgICAgICAgIG5ld1dpZHRoID0gbWF4V2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3V2lkdGggPSB3aWR0aCAqIChtYXhIZWlnaHQgLyBoZWlnaHQpO1xuICAgICAgICAgIG5ld0hlaWdodCA9IG1heEhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBjYW52YXMud2lkdGggPSBuZXdXaWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IG5ld0hlaWdodDtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgbmV3V2lkdGgsIG5ld0hlaWdodCk7XG5cbiAgICAgICAgcmVzb2x2ZShjYW52YXMudG9EYXRhVVJMKGZpbGVUeXBlKSk7XG4gICAgICB9O1xuXG4gICAgICBpbWFnZS5vbmVycm9yID0gKGVycikgPT4gcmVqZWN0KGVycik7XG4gICAgfSk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBtYXRJbnB1dFxuICAgICAgICBbbmFtZV09XCJzY2hlbWEua2V5XCJcbiAgICAgICAgW2F0dHIudHlwZV09XCInbnVtYmVyJ1wiXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIoKVwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJ0aXRsZSgpXCJcbiAgICAgIC8+XG4gICAgICA8bWF0LWVycm9yIGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L21hdC1lcnJvcj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlck1hdGVyaWFsQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIiBuYW1lPVwibmFtZVwiIG11bHRpcGxlPlxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGVuIG9mIHNjaGVtYS5lbnVtOyBsZXQgaSA9IGluZGV4XCIgW3ZhbHVlXT1cImVuXCI+e3tlbnVtTmFtZXMoaSl9fTwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1zZWxlY3Q+XG4gICAgPG1hdC1lcnJvciBqZi1lcnJvciBbY29udHJvbF09XCJjb250cm9sXCI+PC9tYXQtZXJyb3I+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlzZWxlY3RNYXRlcmlhbENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIGVudW1OYW1lcyhpbmRleCkge1xuICAgIHJldHVybiB0eXBlb2YodGhpcy5zY2hlbWEuZW51bU5hbWVzKSA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gdGhpcy5zY2hlbWEuZW51bVtpbmRleF1cbiAgICAgIDogdGhpcy5zY2hlbWEuZW51bU5hbWVzW2luZGV4XTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtY2hlY2tib3hcbiAgICAqbmdGb3I9XCJsZXQgY2hpbGQgb2YgdGhpcy5jb250cm9sWydjb250cm9scyddOyBsZXQgaSA9IGluZGV4XCJcbiAgICBbYXR0ci5pZF09XCJnZXRJZChpLCBzY2hlbWEuZW51bVtpXSlcIlxuICAgIFtjaGVja2VkXT1cImNoaWxkLnZhbHVlID09PSBzY2hlbWEuZW51bVtpXVwiXG4gICAgW25hbWVdPVwic2NoZW1hLmtleVwiXG4gICAgW2Zvcm1Db250cm9sXT1cImNoaWxkXCJcbiAgICAoY2hhbmdlKT1cInNldFZhbHVlKCRldmVudCwgaSlcIlxuICAgIFt2YWx1ZV09XCJzY2hlbWEuZW51bVtpXVwiXG4gICAgPlxuICAgICAgICB7e2VudW1OYW1lcyhpKX19XG4gICAgPC9tYXQtY2hlY2tib3g+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hncm91cE1hdGVyaWFsQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHtcbiAgY2hlY2tib3hHcm91cFZhbHVlcyA9IFtdO1xuICByYW5kb21TdWZmaXggPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XG5cbiAgc2V0VmFsdWUoZXZlbnQsIGluZGV4KSB7XG4gICAgaWYgKHRoaXMuY2hlY2tib3hHcm91cFZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuY2hlY2tib3hHcm91cFZhbHVlcyA9IG5ldyBBcnJheSh0aGlzLmNvbnRyb2xbJ2NvbnRyb2xzJ10ubGVuZ3RoKS5maWxsKG51bGwpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNoZWNrYm94R3JvdXBWYWx1ZXNbaW5kZXhdID09PSBudWxsKSB7XG4gICAgICBldmVudC50YXJnZXQudmFsdWUgPSB0aGlzLnNjaGVtYS5lbnVtW2luZGV4XTtcbiAgICAgIHRoaXMuY2hlY2tib3hHcm91cFZhbHVlc1tpbmRleF0gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hlY2tib3hHcm91cFZhbHVlc1tpbmRleF0gPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh0aGlzLmNoZWNrYm94R3JvdXBWYWx1ZXMpO1xuICB9XG5cbiAgZ2V0SWQoaSwgdmFsKSB7XG4gICAgcmV0dXJuIGAke2l9LSR7dmFsLnJlcGxhY2UoL1tcXFdfXSsvZywgJycpfSske3RoaXMucmFuZG9tU3VmZml4fWA7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgPG1hdC1zbGlkZS10b2dnbGVcbiAgW2lkXT1cInNjaGVtYS5rZXlcIlxuICBbbmFtZV09XCJzY2hlbWEua2V5XCJcbiAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIj5cbiAgICB7e3RpdGxlKCl9fVxuICA8L21hdC1zbGlkZS10b2dnbGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQm9vbGVhbk1hdGVyaWFsQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcbmltcG9ydCB7RGF0ZUFkYXB0ZXIsIE1BVF9EQVRFX0ZPUk1BVFMsIE1BVF9EQVRFX0xPQ0FMRX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5jb25zdCBNWV9GT1JNQVRTID0ge1xuICBwYXJzZToge1xuICAgIGRhdGVJbnB1dDogJ0xMJyxcbiAgfSxcbiAgZGlzcGxheToge1xuICAgIGRhdGVJbnB1dDogJ0xMJyxcbiAgICBtb250aFllYXJMYWJlbDogJ01NTSBZWVlZJyxcbiAgICBkYXRlQTExeUxhYmVsOiAnTEwnLFxuICAgIG1vbnRoWWVhckExMXlMYWJlbDogJ01NTU0gWVlZWScsXG4gIH0sXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXRcbiAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgW21hdERhdGVwaWNrZXJdPSdteURhdGVwaWNrZXInXG4gICAgICAgIFtmb3JtQ29udHJvbF09J2NvbnRyb2wnXG4gICAgICAgIFtwbGFjZWhvbGRlcl09J3RpdGxlKCknXG4gICAgICA+XG4gICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT0nbXlEYXRlcGlja2VyJz48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlciAjbXlEYXRlcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG4gICAgICA8bWF0LWVycm9yIGpmLWVycm9yIFtjb250cm9sXT0nY29udHJvbCc+PC9tYXQtZXJyb3I+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlTWF0ZXJpYWxDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge31cbiIsImltcG9ydCB7Q29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0J1dHRvbkNvbXBvbmVudH0gZnJvbSAnLi9idXR0b24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamYtYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uXG4gICAgICBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAgICpuZ0lmPVwiaXNWaXNpYmxlXCJcbiAgICAgIFt0eXBlXT1cInR5cGVcIlxuICAgICAgW25nQ2xhc3NdPVwiY2xhc3NcIlxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIChjbGljayk9XCJoYW5kbGVCdXR0b25DbGlja1wiPlxuICAgICAge3tsYWJlbH19XG4gICAgPC9idXR0b24+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uTWF0ZXJpYWxDb21wb25lbnQgZXh0ZW5kcyBCdXR0b25Db21wb25lbnQge31cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcnJheUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZyYW1ld29yay9zaGFyZWQvY29tcG9uZW50cy9hcnJheS9hcnJheS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8bWF0LWNhcmQgW25nQ2xhc3NdPVwiWydvYmplY3QnLCBjb250cm9sLnNjaGVtYS5rZXldXCI+XG4gICAgICA8aDYgKm5nSWY9XCJnZXRMZWdlbmQoY29udHJvbCkubGVuZ3RoXCI+e3tnZXRMZWdlbmQoY29udHJvbCl9fTwvaDY+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBhcnJDb250cm9sIG9mIGdldEVuYWJsZWRDb250cm9scyhjb250cm9sKTsgbGV0IGkgPSBpbmRleDtcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgamYtY29tcG9uZW50LWNob29zZXIgW2Zvcm1dPVwiYXJyQ29udHJvbFwiPjwvZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICpuZ0lmPVwiY29udHJvbC5jb250cm9scy5sZW5ndGggPiAxXCJcbiAgICAgICAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpOyByZW1vdmVDb250cm9sKGNvbnRyb2wsIGkpXCJcbiAgICAgICAgICAgIGNvbG9yPVwid2FyblwiXG4gICAgICAgICAgICBjbGFzcz1cInJlbW92ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG1hdC1pY29uPnJlbW92ZV9jaXJjbGVfb3V0bGluZTwvbWF0LWljb24+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IGFkZENvbnRyb2woY29udHJvbClcIj5BZGQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWF0LWNhcmQ+XG4gIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcnJheU1hdGVyaWFsQ29tcG9uZW50IGV4dGVuZHMgQXJyYXlDb21wb25lbnQge31cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N0cmluZ01hdGVyaWFsQ29tcG9uZW50fSBmcm9tICcuLi8uLi9maWVsZHMvc3RyaW5nL3N0cmluZy5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtKc29uRm9ybUZpZWxkc1NlcnZpY2V9IGZyb20gJy4uL2pzb24tZm9ybS1maWVsZHMuc2VydmljZSc7XG5pbXBvcnQgeyBUZXh0YXJlYU1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3RleHRhcmVhL3RleHRhcmVhLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9zZWxlY3Qvc2VsZWN0Lm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSYWRpb2dyb3VwTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvcmFkaW9ncm91cC9yYWRpb2dyb3VwLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaG90b01hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3Bob3RvL3Bob3RvLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdW1iZXJNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9udW1iZXIvbnVtYmVyLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNdWx0aXNlbGVjdE1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL211bHRpc2VsZWN0L211bHRpc2VsZWN0Lm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGVja2JveGdyb3VwTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvY2hlY2tib3hncm91cC9jaGVja2JveGdyb3VwLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb29sZWFuTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvYm9vbGVhbi9ib29sZWFuLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvZGF0ZS9kYXRlLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQge0J1dHRvbk1hdGVyaWFsQ29tcG9uZW50fSBmcm9tICcuLi8uLi9maWVsZHMvYnV0dG9uL2J1dHRvbi5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9uZXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbW9uZXkvbW9uZXkuY29tcG9uZW50JztcbmltcG9ydCB7IE9iamVjdENvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9jb21wb25lbnRzL29iamVjdC9vYmplY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEFycmF5TWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvYXJyYXkvYXJyYXkubWF0ZXJpYWwuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpzb25Gb3JtTWF0ZXJpYWwgZXh0ZW5kcyBKc29uRm9ybUZpZWxkc1NlcnZpY2Uge1xuICBmaWVsZFR5cGVzID0ge1xuICAgIHN0cmluZzogU3RyaW5nTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgc2VsZWN0OiBTZWxlY3RNYXRlcmlhbENvbXBvbmVudCxcbiAgICBudW1iZXI6IE51bWJlck1hdGVyaWFsQ29tcG9uZW50LFxuICAgIGJvb2xlYW46IEJvb2xlYW5NYXRlcmlhbENvbXBvbmVudCxcbiAgICBwaG90bzogUGhvdG9NYXRlcmlhbENvbXBvbmVudCxcbiAgICB0ZXh0YXJlYTogVGV4dGFyZWFNYXRlcmlhbENvbXBvbmVudCxcbiAgICBvYmplY3Q6IE9iamVjdENvbXBvbmVudCxcbiAgICBhcnJheTogQXJyYXlNYXRlcmlhbENvbXBvbmVudCxcbiAgICBkYXRlOiBEYXRlTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgcmFkaW9ncm91cDogUmFkaW9ncm91cE1hdGVyaWFsQ29tcG9uZW50LFxuICAgIGNoZWNrYm94Z3JvdXA6IENoZWNrYm94Z3JvdXBNYXRlcmlhbENvbXBvbmVudCxcbiAgICBtdWx0aXNlbGVjdDogTXVsdGlzZWxlY3RNYXRlcmlhbENvbXBvbmVudCxcbiAgICBtb25leTogTW9uZXlDb21wb25lbnQsXG4gICAgYnV0dG9uOiBCdXR0b25NYXRlcmlhbENvbXBvbmVudFxuICB9O1xufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamYtZXJyb3IsIFtqZi1lcnJvcl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmludmFsaWQgJiYgKGNvbnRyb2wuZGlydHkgfHwgY29udHJvbC50b3VjaGVkKVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzWydyZXF1aXJlZCddXCI+XG4gICAgICAgIFRoaXMgZmllbGQgaXMgcmVxdWlyZWQuXG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1sncGF0dGVybiddXCI+XG4gICAgICAgIElucHV0IHZhbHVlIGlzIGludmFsaWQuXG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1snbWlubGVuZ3RoJ11cIj5cbiAgICAgICAgSW5wdXQgaGFzIHRvIGJlIGEgbWluaW11bSBvZiB7e2NvbnRyb2wuZXJyb3JzWydtaW5sZW5ndGgnXVsncmVxdWlyZWRMZW5ndGgnXX19IGNoYXJhY3RlcnMuXG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1snbWF4bGVuZ3RoJ11cIj5cbiAgICAgICAgSW5wdXQgY2FuIGNvbnRhaW4gYSBtYXhpbXVtIG9mIHt7Y29udHJvbC5lcnJvcnNbJ21heGxlbmd0aCddWydyZXF1aXJlZExlbmd0aCddfX0gY2hhcmFjdGVycy5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzWydtaW4nXVwiPlxuICAgICAgICBFbnRlciBhIHZhbHVlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB7e2NvbnRyb2wuZXJyb3JzWydtaW4nXVsnbWluJ119fS5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzWydtYXgnXVwiPlxuICAgICAgICBFbnRlciBhIHZhbHVlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB7e2NvbnRyb2wuZXJyb3JzWydtYXgnXVsnbWF4J119fS5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzWydjdXN0b21FcnJvciddXCI+XG4gICAgICAgIHt7Y29udHJvbC5lcnJvcnNbJ2N1c3RvbUVycm9yJ119fVxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRXJyb3JNYXRlcmlhbENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNvbnRyb2w7XG59XG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUZXh0TWFza01vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXRleHQtbWFzayc7XG5pbXBvcnQge1xuICBNYXRCdXR0b25Nb2R1bGUsXG4gIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgTWF0SW5wdXRNb2R1bGUsXG4gIE1hdFNlbGVjdE1vZHVsZSxcbiAgTWF0UmFkaW9Nb2R1bGUsXG4gIE1hdENoZWNrYm94TW9kdWxlLFxuICBNYXRJY29uTW9kdWxlLFxuICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgTWF0RGF0ZXBpY2tlck1vZHVsZSwgTWF0TmF0aXZlRGF0ZU1vZHVsZSwgTWF0Q2FyZE1vZHVsZVxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBTdHJpbmdNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBKc29uRm9ybU1hdGVyaWFsfSBmcm9tICcuL2pzb24tZm9ybS1tYXRlcmlhbCc7XG5pbXBvcnQgeyBKc29uRm9ybUZpZWxkc1NlcnZpY2UgfSBmcm9tICcuLi9qc29uLWZvcm0tZmllbGRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGV4dGFyZWFNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy90ZXh0YXJlYS90ZXh0YXJlYS5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0TWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvc2VsZWN0L3NlbGVjdC5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmFkaW9ncm91cE1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3JhZGlvZ3JvdXAvcmFkaW9ncm91cC5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGhvdG9NYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9waG90by9waG90by5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tib3hncm91cE1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2NoZWNrYm94Z3JvdXAvY2hlY2tib3hncm91cC5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVtYmVyTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbnVtYmVyL251bWJlci5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXVsdGlzZWxlY3RNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9tdWx0aXNlbGVjdC9tdWx0aXNlbGVjdC5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQm9vbGVhbk1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2Jvb2xlYW4vYm9vbGVhbi5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZU1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2RhdGUvZGF0ZS5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXJyb3JNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9lcnJvci9lcnJvci5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnV0dG9uTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvYnV0dG9uL2J1dHRvbi5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBBcnJheU1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2FycmF5L2FycmF5Lm1hdGVyaWFsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBUZXh0TWFza01vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTdHJpbmdNYXRlcmlhbENvbXBvbmVudCxcbiAgICBUZXh0YXJlYU1hdGVyaWFsQ29tcG9uZW50LFxuICAgIFNlbGVjdE1hdGVyaWFsQ29tcG9uZW50LFxuICAgIFJhZGlvZ3JvdXBNYXRlcmlhbENvbXBvbmVudCxcbiAgICBQaG90b01hdGVyaWFsQ29tcG9uZW50LFxuICAgIE51bWJlck1hdGVyaWFsQ29tcG9uZW50LFxuICAgIE11bHRpc2VsZWN0TWF0ZXJpYWxDb21wb25lbnQsXG4gICAgQ2hlY2tib3hncm91cE1hdGVyaWFsQ29tcG9uZW50LFxuICAgIEJvb2xlYW5NYXRlcmlhbENvbXBvbmVudCxcbiAgICBEYXRlTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgRXJyb3JNYXRlcmlhbENvbXBvbmVudCxcbiAgICBCdXR0b25NYXRlcmlhbENvbXBvbmVudCxcbiAgICBBcnJheU1hdGVyaWFsQ29tcG9uZW50XG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIFN0cmluZ01hdGVyaWFsQ29tcG9uZW50LFxuICAgIFRleHRhcmVhTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgU2VsZWN0TWF0ZXJpYWxDb21wb25lbnQsXG4gICAgUmFkaW9ncm91cE1hdGVyaWFsQ29tcG9uZW50LFxuICAgIFBob3RvTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgTnVtYmVyTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgTXVsdGlzZWxlY3RNYXRlcmlhbENvbXBvbmVudCxcbiAgICBDaGVja2JveGdyb3VwTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgQm9vbGVhbk1hdGVyaWFsQ29tcG9uZW50LFxuICAgIERhdGVNYXRlcmlhbENvbXBvbmVudCxcbiAgICBFcnJvck1hdGVyaWFsQ29tcG9uZW50LFxuICAgIEJ1dHRvbk1hdGVyaWFsQ29tcG9uZW50LFxuICAgIEFycmF5TWF0ZXJpYWxDb21wb25lbnRcbiAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEpzb25Gb3JtTWF0ZXJpYWxNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEpzb25Gb3JtTWF0ZXJpYWxNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEpzb25Gb3JtRmllbGRzU2VydmljZSxcbiAgICAgICAgICB1c2VDbGFzczogSnNvbkZvcm1NYXRlcmlhbCxcbiAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVBO0lBYUUseUJBQ1M7UUFBQSxjQUFTLEdBQVQsU0FBUztLQUNkOzs7O0lBRUosb0NBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUM7S0FDeEM7Ozs7SUFFRCwrQkFBSzs7O0lBQUw7UUFDRSxPQUFPLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssV0FBVztjQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDOUQ7Ozs7O0lBRUQsd0NBQWM7Ozs7SUFBZCxVQUFlLEdBQVc7UUFDeEIsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDdkI7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsRTs7OztJQUVELDhCQUFJOzs7SUFBSjtRQUNFLHFCQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUM7UUFFMUMsUUFBUSxNQUFNO1lBQ1osS0FBSyxPQUFPO2dCQUNWLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDbkI7UUFFRCxPQUFPLE1BQU0sQ0FBQztLQUNmOzs7OztJQUVELDRCQUFFOzs7O0lBQUYsVUFBRyxDQUFFO1FBQ0gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxD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

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: '<app-json-schema-examples></app-json-schema-examples>'
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _json_schema_examples_json_schema_examples_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json-schema-examples/json-schema-examples.module */ "./src/app/json-schema-examples/json-schema-examples.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _json_schema_examples_json_schema_examples_module__WEBPACK_IMPORTED_MODULE_2__["JsonSchemaExamplesModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/json-schema-examples/input-colour/input-colour.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/json-schema-examples/input-colour/input-colour.component.ts ***!
  \*****************************************************************************/
/*! exports provided: InputColourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputColourComponent", function() { return InputColourComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trufla/ngx-tru-forms */ "./dist/ngx-tru-forms/fesm5/trufla-ngx-tru-forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var InputColourComponent = /** @class */ (function (_super) {
    __extends(InputColourComponent, _super);
    function InputColourComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputColourComponent.prototype.handleColorPickerChange = function (val) {
        this.control.setValue(val);
    };
    InputColourComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <label [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <input\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [attr.type]=\"type()\"\n      [formControl]=\"control\"\n      [(colorPicker)]=\"color\"\n      [style.background]=\"color\"\n      [style.color]=\"color\"\n      [style.width]=\"'40px'\"\n      (colorPickerChange)=\"handleColorPickerChange($event)\"\n    />\n  "
        })
    ], InputColourComponent);
    return InputColourComponent;
}(_trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__["CommonComponent"]));



/***/ }),

/***/ "./src/app/json-schema-examples/json-schema-examples.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/json-schema-examples/json-schema-examples.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea.has-danger {\n  border: solid 1px #f4516c !important;\n}\n\n.form-builder a.has-danger:hover {\n  text-decoration: none;\n}\n\n.form-builder form,\n.form-builder form div {\n  height: 95%;\n}\n"

/***/ }),

/***/ "./src/app/json-schema-examples/json-schema-examples.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/json-schema-examples/json-schema-examples.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <br />\n  <div class=\"row form-builder\">\n    <div class=\"col-md-6\">\n      <h6>Schema Samples:</h6>\n      <div class=\"form-group\">\n        <select class=\"form-control\" (change)=\"handleSchemaUpdate($event.target.value)\">\n          <option *ngFor=\"let schema of getSchemaSamples()\" [value]=\"schema\">\n            {{jsonSchemaExamplesSamples.json[schema].title}}\n          </option>\n        </select>\n      </div>\n      <h6>JSON Schema:\n        <span class=\"text-danger\" *ngIf=\"(schemaControl.touched || schemaControl.dirty) && schemaControl.invalid\">\n          {{schemaControl.errors['invalidJSON']}}\n        </span>\n        <a href=\"javascript:void(0)\" class=\"text-danger\"\n           *ngIf=\"(schemaControl.touched || schemaControl.dirty) && schemaControl.invalid\"\n           (click)=\"goToError(schemaControl.errors['invalidJSON'])\">\n          <i class=\"fa fa-exclamation-triangle\"></i>\n        </a>\n      </h6>\n      <form [formGroup]=\"form\">\n        <div class=\"form-group\" [ngClass]=\"{\n          'has-danger': schemaControl.invalid && (schemaControl.dirty || schemaControl.touched)\n          }\">\n          <textarea class=\"form-control schema\" style=\"height: 100%\" [formControl]=\"schemaControl\" (keyup)=\"handleSchemaUpdate()\"\n                    (keydown.Enter)=\"onEnterKey($event)\" (keydown.Tab)=\"onTabKey($event)\" #jsonSchema\n                    [ngClass]=\"{\n              'has-danger': schemaControl.invalid && (schemaControl.dirty || schemaControl.touched)\n            }\"></textarea>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-md-6\">\n      <h6>Form:</h6>\n      <jf-form\n        [id]=\"'exampleform'\"\n        [cancel]=\"cancel\"\n        [submit]=\"'Submit'\"\n        [schema]=\"schema\"\n        [isMultiStep]=\"isMultiStep\"\n        [state]=\"state\"\n        [fields]=\"fields\"\n        [viewOnly]=\"viewOnly\"\n        [data]=\"data\"\n        (handleChange)=\"handleChange($event)\"\n        (handleSubmit)=\"handleSubmit($event)\">\n      </jf-form>\n\n      <jf-form\n        *ngIf=\"this.selectedSchema === 'multiple_forms'\"\n        [id]=\"'exampleform'\"\n        [cancel]=\"cancel\"\n        [submit]=\"'Submit'\"\n        [schema]=\"schema\"\n        [isMultiStep]=\"isMultiStep\"\n        [state]=\"state\"\n        [fields]=\"fields\"\n        (handleSubmit)=\"handleSubmit($event)\">\n      </jf-form>\n      <p></p>\n      <h6 *ngIf=\"!this.viewOnly\">Data: (click Submit to preview form data)</h6>\n      <h6 *ngIf=\"this.viewOnly\">Data: <pre>{{formattedData(data)}}</pre></h6>\n      <pre *ngIf=\"!this.viewOnly\" #formResponse>&#123;&#125;</pre>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/json-schema-examples/json-schema-examples.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/json-schema-examples/json-schema-examples.component.ts ***!
  \************************************************************************/
/*! exports provided: JsonSchemaExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaExamplesComponent", function() { return JsonSchemaExamplesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_examples_samples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json-schema-examples.samples */ "./src/app/json-schema-examples/json-schema-examples.samples.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _input_colour_input_colour_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-colour/input-colour.component */ "./src/app/json-schema-examples/input-colour/input-colour.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JsonSchemaExamplesComponent = /** @class */ (function () {
    function JsonSchemaExamplesComponent(jsonSchemaExamplesSamples) {
        this.jsonSchemaExamplesSamples = jsonSchemaExamplesSamples;
        this.isMultiStep = false;
        this.cancel = '';
        this.state = false;
        this.fields = {};
        this.selectedSchema = 'simple_input';
        this.viewOnly = false;
        this.data = {};
    }
    JsonSchemaExamplesComponent.prototype.ngOnInit = function () {
        this.fields = {
            'colour': _input_colour_input_colour_component__WEBPACK_IMPORTED_MODULE_3__["InputColourComponent"]
        };
        var ValidatorJSON = function (control) {
            try {
                JSON.parse(control.value);
                return null;
            }
            catch (err) {
                return { invalidJSON: err.message };
            }
        };
        this.schema = this.jsonSchemaExamplesSamples.json[this.selectedSchema];
        this.schemaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', ValidatorJSON);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({ schema: this.schemaControl });
        this.schemaControl.setValue(JSON.stringify(this.schema, null, '\t'));
    };
    JsonSchemaExamplesComponent.prototype.handleSubmit = function (data) {
        this.formResponse.nativeElement.innerHTML = JSON.stringify(data, null, 2);
    };
    JsonSchemaExamplesComponent.prototype.handleChange = function (data) {
        if (this.selectedSchema === 'onchange') {
            this.formResponse.nativeElement.innerHTML = JSON.stringify(data, null, 2);
        }
    };
    JsonSchemaExamplesComponent.prototype.handleSchemaUpdate = function (value) {
        this.isMultiStep = false;
        this.selectedSchema = value;
        if (typeof (this.selectedSchema) !== 'undefined') {
            this.schemaControl.setValue(JSON.stringify(this.jsonSchemaExamplesSamples.json[this.selectedSchema], null, '\t'));
            if (this.selectedSchema === 'multistep') {
                this.isMultiStep = true;
            }
            else if (this.selectedSchema === 'multistep_back') {
                this.isMultiStep = true;
                this.cancel = 'Go Back';
            }
            else if (this.selectedSchema === 'multistep_back_with_state') {
                this.isMultiStep = true;
                this.cancel = 'Go Back';
                this.state = true;
            }
            if (this.selectedSchema === 'viewOnly') {
                this.viewOnly = true;
                this.data = {
                    first_name: 'John',
                    last_name: 'Doe'
                };
            }
            else {
                this.viewOnly = false;
                this.data = {};
            }
        }
        try {
            this.schema = JSON.parse(this.schemaControl.value);
        }
        catch (_a) { }
    };
    JsonSchemaExamplesComponent.prototype.getSchemaSamples = function () {
        return Object.keys(this.jsonSchemaExamplesSamples.json);
    };
    JsonSchemaExamplesComponent.prototype.onTabKey = function (event) {
        event.preventDefault();
        var start = this.jsonSchema.nativeElement.selectionStart;
        var end = this.jsonSchema.nativeElement.selectionEnd;
        this.schemaControl.setValue(this.schemaControl.value.substring(0, start) + '\t' +
            this.schemaControl.value.substring(end));
        this.jsonSchema.nativeElement.selectionStart =
            this.jsonSchema.nativeElement.selectionEnd = start + '\t'.length;
    };
    JsonSchemaExamplesComponent.prototype.onEnterKey = function (event) {
        event.preventDefault();
        var start = this.jsonSchema.nativeElement.selectionStart;
        var end = this.jsonSchema.nativeElement.selectionEnd;
        var matches = [];
        var reg = /\t+/g;
        var string = this.schemaControl.value.substr(0, start);
        var reg2 = /\t+/;
        var m;
        var spaces = '';
        while ((m = reg.exec(string)) !== null) {
            matches.push(string.substring(m.index).match(reg2)[0]);
        }
        if (matches.length) {
            spaces = matches[matches.length - 1];
        }
        this.schemaControl.setValue(this.schemaControl.value.substring(0, start) + '\n' + spaces +
            this.schemaControl.value.substring(end));
        this.jsonSchema.nativeElement.selectionStart =
            this.jsonSchema.nativeElement.selectionEnd = start + '\n'.length + spaces.length;
    };
    JsonSchemaExamplesComponent.prototype.goToError = function (string) {
        var position = string.split(' ');
        var col = +position[position.length - 1];
        this.jsonSchema.nativeElement.selectionStart = col;
        this.jsonSchema.nativeElement.focus();
    };
    JsonSchemaExamplesComponent.prototype.formattedData = function (data) {
        return JSON.stringify(data, null, 2);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('jsonSchema'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], JsonSchemaExamplesComponent.prototype, "jsonSchema", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('formResponse'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], JsonSchemaExamplesComponent.prototype, "formResponse", void 0);
    JsonSchemaExamplesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-json-schema-examples',
            template: __webpack_require__(/*! ./json-schema-examples.component.html */ "./src/app/json-schema-examples/json-schema-examples.component.html"),
            styles: [__webpack_require__(/*! ./json-schema-examples.component.css */ "./src/app/json-schema-examples/json-schema-examples.component.css")]
        }),
        __metadata("design:paramtypes", [_json_schema_examples_samples__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaExamplesSamples"]])
    ], JsonSchemaExamplesComponent);
    return JsonSchemaExamplesComponent;
}());



/***/ }),

/***/ "./src/app/json-schema-examples/json-schema-examples.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/json-schema-examples/json-schema-examples.module.ts ***!
  \*********************************************************************/
/*! exports provided: JsonSchemaExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaExamplesModule", function() { return JsonSchemaExamplesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _json_schema_examples_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json-schema-examples.component */ "./src/app/json-schema-examples/json-schema-examples.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @trufla/ngx-tru-forms */ "./dist/ngx-tru-forms/fesm5/trufla-ngx-tru-forms.js");
/* harmony import */ var _json_schema_examples_samples__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./json-schema-examples.samples */ "./src/app/json-schema-examples/json-schema-examples.samples.ts");
/* harmony import */ var _input_colour_input_colour_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-colour/input-colour.component */ "./src/app/json-schema-examples/input-colour/input-colour.component.ts");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var JsonSchemaExamplesModule = /** @class */ (function () {
    function JsonSchemaExamplesModule() {
    }
    JsonSchemaExamplesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__["JsonFormBootstrap4Module"],
                _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__["JsonFormMaterialModule"],
                _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__["JsonFormModule"].forRoot(_trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__["JsonFormMaterialModule"]),
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_7__["ColorPickerModule"]
            ],
            declarations: [
                _json_schema_examples_component__WEBPACK_IMPORTED_MODULE_2__["JsonSchemaExamplesComponent"],
                _input_colour_input_colour_component__WEBPACK_IMPORTED_MODULE_6__["InputColourComponent"]
            ],
            providers: [
                _json_schema_examples_samples__WEBPACK_IMPORTED_MODULE_5__["JsonSchemaExamplesSamples"],
                _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__["JsonFormMaterial"]
            ],
            exports: [
                _json_schema_examples_component__WEBPACK_IMPORTED_MODULE_2__["JsonSchemaExamplesComponent"]
            ],
            entryComponents: [
                _input_colour_input_colour_component__WEBPACK_IMPORTED_MODULE_6__["InputColourComponent"]
            ]
        })
    ], JsonSchemaExamplesModule);
    return JsonSchemaExamplesModule;
}());



/***/ }),

/***/ "./src/app/json-schema-examples/json-schema-examples.samples.ts":
/*!**********************************************************************!*\
  !*** ./src/app/json-schema-examples/json-schema-examples.samples.ts ***!
  \**********************************************************************/
/*! exports provided: JsonSchemaExamplesSamples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaExamplesSamples", function() { return JsonSchemaExamplesSamples; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JsonSchemaExamplesSamples = /** @class */ (function () {
    function JsonSchemaExamplesSamples() {
        this.json = {
            simple_input: {
                title: 'Simple',
                description: 'Simple form with input fields',
                type: 'object',
                properties: {
                    first_name: {
                        type: 'string'
                    },
                    last_name: {
                        type: 'string'
                    },
                    email: {
                        type: 'string'
                    },
                    phone_number: {
                        type: 'string'
                    },
                    year: {
                        type: 'number',
                        pattern: '[1-2][0-9]{3}'
                    },
                    effective_date: {
                        type: 'string',
                        format: 'date'
                    }
                },
                required: ['year', 'make', 'model', 'vin_number', 'description', 'effective_date']
            },
            array_sample: {
                title: 'Array',
                description: 'Array of fields',
                type: 'object',
                properties: {
                    employee: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                first_name: {
                                    type: 'string'
                                },
                                last_name: {
                                    type: 'string'
                                }
                            }
                        },
                        required: ['year', 'make', 'model', 'vin_number', 'description', 'effective_date']
                    }
                }
            },
            multi_select: {
                title: 'Multiple Select',
                description: 'Form allowing for single and multiple item selections',
                type: 'object',
                properties: {
                    multi_check_box: {
                        type: 'array',
                        enum: ['one', 'two', 'three'],
                        format: 'multiselect'
                    },
                    gender: {
                        type: 'string',
                        enum: ['male', 'female'],
                        enumNames: ['Male', 'Female'],
                        format: 'radiogroup'
                    },
                    insurance_duration: {
                        type: 'number',
                        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                    },
                    number_of_conviction: {
                        type: 'number',
                        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                    },
                    number_of_accidents: {
                        type: 'number',
                        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                    }
                },
                required: ['first_name', 'last_name', 'driver_license_no', 'insurance_duration', 'number_of_conviction', 'number_of_accidents',
                    'effective_date']
            },
            nested: {
                title: 'Nested',
                description: 'Form with nested data types',
                type: 'object',
                properties: {
                    employee_information: {
                        title: 'Employee Information',
                        type: 'object',
                        properties: {
                            first_name: {
                                type: 'string'
                            },
                            last_name: {
                                type: 'string'
                            },
                            phone_number: {
                                type: 'string'
                            },
                            email: {
                                type: 'string'
                            }
                        }
                    }
                }
            },
            multi_nested: {
                title: 'Multi Nested',
                description: 'Nesting can go as far as needed to achieve structure',
                type: 'object',
                properties: {
                    employee_information: {
                        type: 'object',
                        title: 'Employee Information',
                        description: 'Test',
                        properties: {
                            personal: {
                                type: 'object',
                                title: 'Personal Information',
                                properties: {
                                    first_name: {
                                        type: 'string'
                                    },
                                    last_name: {
                                        type: 'string'
                                    }
                                }
                            },
                            location: {
                                type: 'object',
                                title: 'Location',
                                properties: {
                                    phone_number: {
                                        type: 'string'
                                    },
                                    email: {
                                        type: 'string'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            required: {
                title: 'Required',
                description: 'Require first and last name',
                type: 'object',
                properties: {
                    first_name: {
                        type: 'string',
                    },
                    last_name: {
                        type: 'string',
                    }
                },
                required: ['first_name', 'last_name']
            },
            multistep: {
                title: 'Multi Step',
                description: 'Form composed of nested schemas and displayed as steps',
                type: 'object',
                properties: {
                    employee_information: {
                        type: 'object',
                        properties: {
                            first_name: {
                                type: 'string'
                            },
                            last_name: {
                                type: 'string'
                            },
                            phone_number: {
                                type: 'string'
                            },
                            email: {
                                type: 'string'
                            }
                        },
                        required: ['first_name', 'last_name']
                    },
                    bank_information: {
                        type: 'object',
                        properties: {
                            bank_name: {
                                type: 'string'
                            },
                            account_number: {
                                type: 'string'
                            }
                        },
                        required: ['bank_name', 'account_number']
                    }
                }
            },
            multistep_back: {
                title: 'Multi Step With Back',
                description: 'Form composed of nested schemas and displayed as steps that can go back',
                type: 'object',
                properties: {
                    employee_information: {
                        type: 'object',
                        properties: {
                            first_name: {
                                type: 'string'
                            },
                            last_name: {
                                type: 'string'
                            }
                        },
                        required: ['first_name', 'last_name']
                    },
                    contact_information: {
                        type: 'object',
                        properties: {
                            phone: {
                                type: 'string'
                            },
                            email: {
                                type: 'string'
                            }
                        },
                        required: ['phone', 'email']
                    }
                }
            },
            multistep_back_with_state: {
                title: 'Multi Step With Back With State',
                description: 'Form composed of nested schemas and displayed as steps that can go back with state preserved',
                type: 'object',
                properties: {
                    employee_information: {
                        type: 'object',
                        properties: {
                            first_name: {
                                type: 'string'
                            },
                            last_name: {
                                type: 'string'
                            }
                        },
                        required: ['first_name', 'last_name']
                    },
                    contact_information: {
                        type: 'object',
                        properties: {
                            phone: {
                                type: 'string'
                            },
                            email: {
                                type: 'string'
                            }
                        },
                        required: ['phone', 'email']
                    }
                }
            },
            conditional_multistep: {
                title: 'Conditional Multi Step',
                description: 'Add conditional multistep control',
                type: 'object',
                properties: {
                    foods: {
                        type: 'object',
                        properties: {
                            food_like: {
                                type: 'string',
                                enum: [
                                    'Hot Dog',
                                    'Pizza',
                                    'Hamburger'
                                ]
                            }
                        }
                    },
                    drinks: {
                        type: 'object',
                        properties: {
                            drink: {
                                type: 'string',
                                enum: [
                                    'Pepsi',
                                    'Coke',
                                    'Sprite'
                                ]
                            }
                        }
                    }
                },
                oneOf: [
                    {
                        properties: {
                            'foods.food_like': {
                                enum: [
                                    'Hamburger'
                                ],
                                required: [
                                    'drinks'
                                ]
                            }
                        }
                    }
                ]
            },
            checkbox_group: {
                title: 'Checkbox Group',
                type: 'object',
                properties: {
                    skills: {
                        title: 'Select skills with some experience',
                        type: 'array',
                        enum: ['js', 'sql', 'api'],
                        enumNames: ['NodeJS/ES6', 'MySQL/Postgres', 'REST/SOAP']
                    }
                }
            },
            pattern_validation: {
                title: 'Pattern Validation',
                description: 'Form with pattern validation',
                type: 'object',
                properties: {
                    day_of_the_month: {
                        type: 'number',
                        pattern: '[1-3]?[0-9]'
                    },
                    effective_date: {
                        type: 'string',
                        format: 'date'
                    }
                },
                required: ['day_of_the_month', 'effective_date']
            },
            complex: {
                title: 'Complex form',
                description: 'Complex form with variable inputs',
                'type': 'object',
                'properties': {
                    'photo': { 'type': 'string', 'format': 'photo' },
                    'accident_photos': {
                        'type': 'array',
                        'items': {
                            'type': 'object',
                            'properties': {
                                'photo': { 'type': 'string', 'format': 'photo' }
                            }
                        }
                    },
                    'billing_address': { 'type': 'boolean' },
                    'full_name': { 'type': 'string', 'default': 'now' },
                    'dob': { 'type': 'string', 'format': 'date' },
                    'email': {
                        'type': 'string',
                        'format': 'email'
                    },
                    'address': {
                        'type': 'object',
                        'properties': {
                            'street_1': { 'type': 'string' },
                            'street_2': { 'type': 'string' },
                            'city': { 'type': 'string' },
                            'state': {
                                'type': 'string',
                                'enum': ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE',
                                    'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA',
                                    'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS',
                                    'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
                                    'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD',
                                    'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY']
                            },
                            'zip_code': { 'type': 'string' }
                        }
                    },
                    'birthday': { 'type': 'string' },
                    'notes': { 'type': 'string' },
                    'phone_numbers': {
                        'type': 'array',
                        'items': {
                            'type': 'object',
                            'properties': {
                                'type': { 'type': 'string', 'enum': ['cell', 'home', 'work'], 'enumNames': ['Cell', 'Home', 'Work'] },
                                'number': { 'type': 'string' }
                            },
                            'required': ['type', 'number']
                        }
                    }
                },
                'required': ['full_name']
            },
            custom_control: {
                title: 'Custom Control',
                description: 'Add custom control',
                type: 'object',
                properties: {
                    favorite_colour: {
                        type: 'string',
                        format: 'colour'
                    }
                },
                required: ['favorite_colour']
            },
            conditional_control: {
                title: 'Conditional Control',
                description: 'Add conditional control',
                type: 'object',
                properties: {
                    food_like: {
                        type: 'string',
                        enum: ['Hot Dog', 'Pizza', 'Hamburger']
                    },
                    pizza_type: {
                        type: 'string',
                        enum: ['Marinara', 'Margherita', 'Vegetarian']
                    },
                    hamburger_meat: {
                        type: 'string',
                        enum: ['Chicken', 'Beef', 'Lamb', 'Vegetarian']
                    }
                },
                required: ['food_like'],
                oneOf: [
                    {
                        properties: {
                            food_like: {
                                enum: ['Pizza'],
                                required: ['pizza_type']
                            }
                        }
                    },
                    {
                        properties: {
                            food_like: {
                                enum: ['Hamburger'],
                                required: ['hamburger_meat']
                            }
                        }
                    }
                ]
            },
            multiple_conditional_control: {
                title: 'Multiple Conditional Control',
                description: 'Add multiple conditional controls',
                type: 'object',
                properties: {
                    food_like: {
                        type: 'string',
                        enum: ['Hot Dog', 'Pizza', 'Hamburger']
                    },
                    pizza_type: {
                        type: 'string',
                        enum: ['Marinara', 'Margherita', 'Vegetarian']
                    },
                    hamburger_meat: {
                        type: 'string',
                        enum: ['Chicken', 'Beef', 'Lamb', 'Vegetarian']
                    },
                    vegetable_choice: {
                        type: 'string',
                        enum: ['yes', 'no'],
                        enumNames: ['Yes', 'No'],
                        format: 'radiogroup'
                    },
                    vegetables: {
                        type: 'string',
                        enum: ['Mushrooms', 'Tomatoes', 'Lettuce'],
                    }
                },
                required: ['food_like', 'vegetable_choice'],
                oneOf: [
                    {
                        properties: {
                            food_like: {
                                enum: ['Pizza'],
                                required: ['pizza_type']
                            }
                        }
                    },
                    {
                        properties: {
                            food_like: {
                                enum: ['Hamburger'],
                                required: ['hamburger_meat']
                            }
                        }
                    },
                    {
                        properties: {
                            vegetable_choice: {
                                enum: ['yes'],
                                required: ['vegetables']
                            }
                        }
                    }
                ]
            },
            definitions: {
                definitions: {
                    person: {
                        type: 'object',
                        properties: {
                            first_name: {
                                type: 'string'
                            }
                        }
                    }
                },
                title: 'Definitions',
                description: 'Use definitions',
                type: 'object',
                properties: {
                    employee: {
                        $ref: '#/definitions/person'
                    }
                }
            },
            multiple_forms: {
                title: 'Multiple Forms',
                description: 'Multiple forms on a single page',
                type: 'object',
                properties: {
                    favorite_number: {
                        type: 'string',
                        enum: ['one', 'two', 'three'],
                        format: 'radiogroup'
                    }
                },
                required: ['favorite_number']
            },
            onchange: {
                title: 'On Change',
                description: 'Watch for on change in forms and fields',
                type: 'object',
                properties: {
                    first_name: {
                        type: 'string'
                    },
                    last_name: {
                        type: 'string'
                    }
                }
            },
            viewOnly: {
                title: 'View Only',
                description: 'Display inputs value in view mode',
                type: 'object',
                properties: {
                    first_name: {
                        type: 'string'
                    },
                    last_name: {
                        type: 'string'
                    }
                }
            },
        };
    }
    JsonSchemaExamplesSamples = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JsonSchemaExamplesSamples);
    return JsonSchemaExamplesSamples;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/boris/Documents/Trufla/projects/ngx-tru-forms-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map