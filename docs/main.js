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
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");











/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CommonComponent = /** @class */ (function () {
    function CommonComponent(sanitizer, cd) {
        this.sanitizer = sanitizer;
        this.cd = cd;
    }
    /**
     * @return {?}
     */
    CommonComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    CommonComponent.prototype.isRequired = /**
     * @return {?}
     */
    function () {
        // some controls like datepicker add validator without being required
        return this.control.validator !== null && this.control.isRequired;
    };
    /**
     * @return {?}
     */
    CommonComponent.prototype.title = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ required = this.isRequired() ? '*' : '';
        return (typeof this.schema.title === 'undefined'
            ? this.strToUpperCase(this.schema.key) : this.schema.title) + required;
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
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    return CommonComponent;
}());

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
        return (control && control.schema && control.schema.key) ? lodash_startcase__WEBPACK_IMPORTED_MODULE_2___default()(control.schema.key) : '';
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
            money: MoneyViewComponent
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
        return this.fieldTypes.hasOwnProperty(type) || this.viewTypes.hasOwnProperty(type);
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
        this.viewTypes[type] = field;
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
        return types['string'];
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
        if (prop.hasOwnProperty('format') && prop.format === 'date' && defaultValue.length > 0) {
            defaultValue = new Date(defaultValue);
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
        this.requiredFields = 0;
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
            this.requiredFields = 0;
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
            if (_this.isOneOf(schema, prop)) {
                return;
            }
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
                        control.isRequired = schema.hasOwnProperty('required') && schema.required.indexOf(prop) > -1;
                        if (control.isRequired) {
                            _this.requiredFields++;
                        }
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
                var /** @type {?} */ control = new SchemaFormControl(_this.df.get(prop, schema, data), _this.vl.get(prop, schema, path));
                control.schema = Object.assign({}, schema.properties[prop]);
                control.schema.key = prop;
                control.data = _this.df.get(prop, schema, data);
                control.style = (style && style.hasOwnProperty(prop)) ? style[prop] : {};
                control.valueChanges.subscribe(function (event) { return _this.handleOnChange(prop, event, _this.inOneOf(schema, prop)); });
                control.isRequired = schema.hasOwnProperty('required') && schema.required.indexOf(prop) > -1;
                if (control.isRequired) {
                    _this.requiredFields++;
                }
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
                        value = String(_this.data[key]) === 'true'; // material preserves string & bootstrap doesn't
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
    /**
     * API: external method for ensuring the form is valid
     */
    /**
     * API: external method for ensuring the form is valid
     * @return {?}
     */
    JsonFormComponent.prototype.isValid = /**
     * API: external method for ensuring the form is valid
     * @return {?}
     */
    function () {
        return this.form.valid;
    };
    /**
     * API: trigger external submission
     */
    /**
     * API: trigger external submission
     * @return {?}
     */
    JsonFormComponent.prototype.submitForm = /**
     * API: trigger external submission
     * @return {?}
     */
    function () {
        this.userForm.ngSubmit.emit();
    };
    /**
     * API: set header of the form
     */
    /**
     * API: set header of the form
     * @param {?} val
     * @return {?}
     */
    JsonFormComponent.prototype.setHeader = /**
     * API: set header of the form
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.header.nativeElement.innerHTML = val;
    };
    /**
     * API: set footer of the form
     */
    /**
     * API: set footer of the form
     * @param {?} val
     * @return {?}
     */
    JsonFormComponent.prototype.setFooter = /**
     * API: set footer of the form
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.footer.nativeElement.innerHTML = val;
    };
    /**
     * API: get required fields count
     */
    /**
     * API: get required fields count
     * @return {?}
     */
    JsonFormComponent.prototype.getRequiredFieldCount = /**
     * API: get required fields count
     * @return {?}
     */
    function () {
        return this.requiredFields;
    };
    JsonFormComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'jf-form, tru-form',
                    template: "<form\n  #userForm=\"ngForm\"\n  [formGroup]=\"form\"\n  (ngSubmit)=\"handleOnSubmit()\"\n  *ngIf=\"isValidSchema()\"\n  [ngClass]=\"{ 'view-only': viewOnly }\"\n  [id]=\"id\"\n>\n  <div #header></div>\n  <div\n    jf-component-chooser\n    [ngClass]=\"[outerClass || '', this.activeStyle['default'] ? this.activeStyle['default'] : '']\"\n    [form]=\"form\"\n    [schema]=\"activeSchema\">\n  </div>\n  <div #container>\n    <ng-content></ng-content>\n  </div>\n  <div #footer></div>\n  <div\n    #buttons\n    *ngIf=\"container.children.length == 0 && (submit || cancel)\"\n    [ngClass]=\"{ 'margin-top--double': true, 'page-actions--edges': (cancel && submit), 'page-actions--center': (!cancel || !submit)}\">\n    <jf-form-button\n      *ngIf=\"cancel\"\n      [cancel]=\"cancel\"\n      [steps]=\"steps\"\n      [isMultiStep]=\"isMultiStep\"\n      [isWorking]=\"isWorking\"\n      (handleClick)=\"handleOnCancel()\"\n      [submitClass]=\"submitClass\"\n      [cancelClass]=\"cancelClass\">\n    </jf-form-button>\n    <jf-form-button\n      *ngIf=\"submit\"\n      [submitClass]=\"submitClass\"\n      [cancelClass]=\"cancelClass\"\n      [submit]=\"submit\"\n      [steps]=\"steps\"\n      [continue]=\"continue\"\n      [isMultiStep]=\"isMultiStep\"\n      [isWorking]=\"isWorking\"\n      [isFormValid]=\"this.form.valid\">\n    </jf-form-button>\n  </div>\n</form>\n"
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
        userForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['userForm',] }],
        header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['header',] }],
        footer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['footer',] }]
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
                    template: "\n    <label [attr.class]=\"schema.key\" [ngClass]=\"{'margin-bottom--half': true, required: isRequired()}\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup></label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <div [class]=\"getClass('checkbox-group')\">\n      <div *ngFor=\"let child of this.control['controls']; let i = index\"\n           [ngClass]=\"{'checkbox-container': true, 'checked': child.value === schema.enum[i]}\">\n        <input\n          type=\"checkbox\"\n          [attr.id]=\"getId(i, schema.enum[i])\"\n          [checked]=\"child.value === schema.enum[i]\"\n          [name]=\"schema.key\"\n          [formControl]=\"child\"\n          (change)=\"setValue($event, i)\"\n          [value]=\"schema.enum[i]\" />\n        <label\n          [attr.for]=\"getId(i, schema.enum[i])\"\n          [attr.class]=\"schema.key\">\n          {{enumNames(i)}}\n        </label>\n      </div>\n    </div>\n    <jf-error [control]=\"control\"></jf-error>\n  "
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.randomSuffix = Math.random().toString(36).substring(7);
        return _this;
    }
    /**
     * @param {?} i
     * @param {?} val
     * @return {?}
     */
    TextareaComponent.prototype.getId = /**
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
    TextareaComponent.prototype.getName = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return key + "-" + this.randomSuffix;
    };
    TextareaComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <label\n      [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <textarea\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [formControl]=\"control\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.minLength]=\"schema.minLength || null\"\n      [attr.placeholder]=\"placeholder()\"\n    ></textarea>\n    <jf-error [control]=\"control\"></jf-error>\n  "
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
                    template: "\n    <div class=\"select-container\">\n      <label\n        [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n        {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n      </label>\n      <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n      <select\n        class=\"form-control\"\n        name=\"name\"\n        [formControl]=\"control\"\n      >\n        <option value=\"\" [selected]=\"control.value === ''\" [disabled]=\"true\">\n          {{emptyOption()}}\n        </option>\n        <option\n          *ngFor=\"let en of this.schema.enum; let i = index\"\n          [selected]=\"control.value === en\"\n          [ngValue]=\"en\">\n          {{enumNames(i)}}\n        </option>\n      </select>\n    </div>\n    <jf-error [control]=\"control\"></jf-error>\n  "
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
                    template: "\n    <label\n      [ngClass]=\"['margin-bottom--half', 'jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup></label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <div [class]=\"getClass('radio-group')\">\n      <div *ngFor=\"let enum of this.schema.enum; let i = index\"\n           [ngClass]=\"{'radio-container': true, 'checked': control.value === enum}\">\n        <input\n          type=\"radio\"\n          [attr.id]=\"getId(i, enum)\"\n          [checked]=\"control.value === enum\"\n          [name]=\"getName(schema.key)\"\n          [formControl]=\"control\"\n          [value]=\"enum\" />\n        <label\n          [attr.for]=\"getId(i, enum)\"\n          [attr.class]=\"schema.key\">\n           {{enumNames(i)}}\n        </label>\n      </div>\n    </div>\n    <jf-error [control]=\"control\"></jf-error>\n  "
                },] },
    ];
    return RadiogroupComponent;
}(CommonComponent));

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
                    template: "\n    <label\n      [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\" *ngIf=\"type() !== 'hidden'\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <input\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [attr.type]=\"type()\"\n      [formControl]=\"control\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.minLength]=\"schema.minLength || null\"\n      [attr.placeholder]=\"placeholder()\"\n      [textMask]=\"{ mask: getMask() }\"\n    />\n    <jf-error [control]=\"control\"></jf-error>\n  "
                },] },
    ];
    return StringComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DateComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(DateComponent, _super);
    function DateComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <label [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <input\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [formControl]=\"control\"\n      [placeholder]=\"placeholder()\"\n      [bsConfig]=\"{ containerClass: 'theme-default', dateInputFormat: 'MM/DD/YYYY' }\"\n      bsDatepicker\n    />\n    <jf-error [control]=\"control\"></jf-error>\n  "
                },] },
    ];
    return DateComponent;
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
    /**
     * @param {?} event
     * @return {?}
     */
    ButtonComponent.prototype.handleClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleButtonClick.emit(event);
    };
    ButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'jf-button',
                    template: "\n    <button\n      *ngIf=\"isVisible\"\n      [type]=\"type\"\n      [ngClass]=\"class\"\n      [disabled]=\"disabled\"\n      (click)=\"handleClick($event)\">\n      {{label}}\n    </button>\n  "
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
        var _this = this;
        this.button.clear();
        var /** @type {?} */ componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.jsonFormFieldsService[0].get('button'));
        var /** @type {?} */ componentRef = this.button.createComponent(componentFactory);
        (/** @type {?} */ (componentRef.instance)).type = this.getType();
        (/** @type {?} */ (componentRef.instance)).isVisible = this.isVisible();
        (/** @type {?} */ (componentRef.instance)).class = this.getClass();
        (/** @type {?} */ (componentRef.instance)).disabled = this.isWorking;
        (/** @type {?} */ (componentRef.instance)).isWorking = this.isWorking;
        (/** @type {?} */ (componentRef.instance)).label = this.getLabel();
        (/** @type {?} */ (componentRef.instance)).handleButtonClick.subscribe(function (event) {
            if (_this.cancel.length > 0) {
                _this.handleClick.emit(event);
            }
        });
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
                        SharedModule,
                        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot()
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
        return _super.prototype.title.call(this).replace(/[^A-Z0-9*]+$/ig, '');
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.error = false;
        return _this;
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
                _this.error = false;
                _this.photoData = data.toString();
                _this.control.setValue(_this.photoData);
            })
                .catch(function (err) {
                _this.error = true;
            });
        };
        reader.onerror = function () {
            _this.error = true;
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
                    template: "\n    <label [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <div *ngIf=\"previewSrcExists(); else addImage\" class=\"photo-preview\">\n      <button\n        class=\"photo-add\"\n        mat-button\n        color=\"primary\"\n        [style.background-image]=\"makeTrustedImage(photoData)\"\n        [style.background-size]=\"'cover'\"\n        [style.background-repeat]=\"'no-repeat'\"\n        (click)=\"$event.preventDefault(); fileInput.click();\"\n      >\n        <mat-icon>add_a_photo</mat-icon>\n      </button>\n      <button\n        class=\"photo-remove\"\n        mat-mini-fab\n        color=\"warn\"\n        (click)=\"clearPhoto()\"\n      >\n        <mat-icon>close</mat-icon>\n      </button>\n    </div>\n    <ng-template #addImage>\n      <button\n        class=\"photo-add\"\n        mat-button\n        color=\"primary\"\n        (click)=\"$event.preventDefault(); fileInput.click();\"\n      >\n        <mat-icon>add_a_photo</mat-icon>\n      </button>\n    </ng-template>\n    <input #fileInput type=\"file\" [name]=\"schema.key\" (change)=\"onChange($event)\" style=\"display:none;\"/>\n    <input type=\"hidden\" [name]=\"schema.key\" [formControl]=\"control\" />\n    <div class=\"mat-form-field-subscript-wrapper\" *ngIf=\"error\" style=\"position: relative;\">\n      <mat-error class=\"mat-error\">Please upload a valid photo format (JPG, PNG)</mat-error>\n    </div>\n\n  "
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
                    template: "\n  <mat-form-field>\n    <mat-select [formControl]=\"control\" name=\"name\" multiple>\n      <mat-option\n        *ngFor=\"let en of schema.enum; let i = index\"\n        [value]=\"en\">\n        {{enumNames(i)}}\n      </mat-option>\n    </mat-select>\n    <mat-error jf-error [control]=\"control\"></mat-error>\n  </mat-form-field>\n  "
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
                    template: "\n    <button\n      mat-raised-button\n      [color]=\"color\"\n      *ngIf=\"isVisible\"\n      [type]=\"type\"\n      [ngClass]=\"class\"\n      [disabled]=\"disabled\"\n      (click)=\"handleClick($event)\">\n      {{label}}\n    </button>\n  "
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
                    template: "\n    <mat-card [ngClass]=\"['object', control.schema.key]\">\n      <h6 *ngIf=\"getLegend(control).length\">{{getLegend(control)}}</h6>\n      <div class=\"array-items\">\n        <div *ngFor=\"let arrControl of getEnabledControls(control); let i = index;\">\n          <div class=\"row\">\n            <div jf-component-chooser [form]=\"arrControl\"></div>\n            <button\n              mat-button\n              *ngIf=\"control.controls.length > 1\"\n              (click)=\"$event.preventDefault(); removeControl(control, i)\"\n              color=\"warn\"\n              class=\"remove\"\n            >Remove</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <button mat-button color=\"primary\" (click)=\"$event.preventDefault(); addControl(control)\">Add</button>\n      </div>\n    </mat-card>\n  "
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
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1ZmxhLW5neC10cnUtZm9ybXMuanMubWFwIiwic291cmNlcyI6WyJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2NvbW1vbi9jb21tb24uY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9zZWxlY3Qvc2VsZWN0LnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9udW1iZXIvbnVtYmVyLnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9ib29sZWFuL2Jvb2xlYW4udmlldy5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL3Bob3RvL3Bob3RvLnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy90ZXh0YXJlYS90ZXh0YXJlYS52aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvZGF0ZS9kYXRlLnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9yYWRpb2dyb3VwL3JhZGlvZ3JvdXAudmlldy5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2NoZWNrYm94Z3JvdXAvY2hlY2tib3hncm91cC52aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3Qudmlldy5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL21vbmV5L21vbmV5LnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL21vZGVscy9zY2hlbWEtZm9ybS1jb250cm9sLnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZyYW1ld29yay9zaGFyZWQvY29tcG9uZW50cy9vYmplY3Qvb2JqZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9tb2RlbHMvc2NoZW1hLWZvcm0tYXJyYXkudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvbW9kZWxzL3NjaGVtYS1mb3JtLWdyb3VwLnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZyYW1ld29yay9zaGFyZWQvY29tcG9uZW50cy9hcnJheS9hcnJheS5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZnJhbWV3b3JrL3NoYXJlZC9jb21wb25lbnRzL2FycmF5L2FycmF5LnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZyYW1ld29yay9qc29uLWZvcm0tZmllbGRzLnNlcnZpY2UudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvc2VydmljZXMvdmFsaWRhdG9ycy5zZXJ2aWNlLnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL3NlcnZpY2VzL2RlZmF1bHRzLnNlcnZpY2UudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvanNvbi1mb3JtLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvY2hlY2tib3hncm91cC9jaGVja2JveGdyb3VwLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3QuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy90ZXh0YXJlYS90ZXh0YXJlYS5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9ib29sZWFuL2Jvb2xlYW4uY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9udW1iZXIvbnVtYmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvcGhvdG8vcGhvdG8uY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9yYWRpb2dyb3VwL3JhZGlvZ3JvdXAuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvZGF0ZS9kYXRlLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL21vbmV5L21vbmV5LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvYm9vdHN0cmFwNC9qc29uLWZvcm0tYm9vdHN0cmFwNC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvc2hhcmVkL2NvbXBvbmVudHMvY2hvb3Nlci9jaG9vc2VyLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvc2hhcmVkL2NvbXBvbmVudHMvZmllbGQvZmllbGQuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZyYW1ld29yay9zaGFyZWQvY29tcG9uZW50cy9mb3JtLWJ1dHRvbi9mb3JtLWJ1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZnJhbWV3b3JrL3NoYXJlZC9jb21wb25lbnRzL2luZm8tYnV0dG9uL2luZm8tYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvc2hhcmVkL2NvbXBvbmVudHMvd29ya2luZy1zcGlubmVyL3dvcmtpbmctc3Bpbm5lci5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZnJhbWV3b3JrL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2pzb24tZm9ybS5tb2R1bGUudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvYm9vdHN0cmFwNC9qc29uLWZvcm0tYm9vdHN0cmFwNC5tb2R1bGUudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL3N0cmluZy9zdHJpbmcubWF0ZXJpYWwuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy90ZXh0YXJlYS90ZXh0YXJlYS5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL3NlbGVjdC9zZWxlY3QubWF0ZXJpYWwuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9yYWRpb2dyb3VwL3JhZGlvZ3JvdXAubWF0ZXJpYWwuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9waG90by9waG90by5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL251bWJlci9udW1iZXIubWF0ZXJpYWwuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9tdWx0aXNlbGVjdC9tdWx0aXNlbGVjdC5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2NoZWNrYm94Z3JvdXAvY2hlY2tib3hncm91cC5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2Jvb2xlYW4vYm9vbGVhbi5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2RhdGUvZGF0ZS5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2J1dHRvbi9idXR0b24ubWF0ZXJpYWwuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9hcnJheS9hcnJheS5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZnJhbWV3b3JrL21hdGVyaWFsL2pzb24tZm9ybS1tYXRlcmlhbC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvZXJyb3IvZXJyb3IubWF0ZXJpYWwuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZyYW1ld29yay9tYXRlcmlhbC9qc29uLWZvcm0tbWF0ZXJpYWwubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSB9IGZyb20gJy4uLy4uL21vZGVscy9zY2hlbWEnO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbnRyb2wgfSBmcm9tICcuLi8uLi9tb2RlbHMvc2NoZW1hLWZvcm0tY29udHJvbCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdG9yUmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCBzdGFydENhc2UgZnJvbSAnbG9kYXNoLnN0YXJ0Y2FzZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pmLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgcHVibGljIGNvbnRyb2w6IFNjaGVtYUZvcm1Db250cm9sO1xuICBwdWJsaWMgc2NoZW1hOiBTY2hlbWE7XG4gIHB1YmxpYyBzdHlsZToge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGlzUmVxdWlyZWQoKSB7XG4gICAgLy8gc29tZSBjb250cm9scyBsaWtlIGRhdGVwaWNrZXIgYWRkIHZhbGlkYXRvciB3aXRob3V0IGJlaW5nIHJlcXVpcmVkXG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC52YWxpZGF0b3IgIT09IG51bGwgJiYgdGhpcy5jb250cm9sLmlzUmVxdWlyZWQ7XG4gIH1cblxuICB0aXRsZSgpIHtcbiAgICBjb25zdCByZXF1aXJlZCA9IHRoaXMuaXNSZXF1aXJlZCgpID8gJyonIDogJyc7XG4gICAgcmV0dXJuICh0eXBlb2YgdGhpcy5zY2hlbWEudGl0bGUgPT09ICd1bmRlZmluZWQnXG4gICAgICA/IHRoaXMuc3RyVG9VcHBlckNhc2UodGhpcy5zY2hlbWEua2V5KSA6IHRoaXMuc2NoZW1hLnRpdGxlKSArIHJlcXVpcmVkO1xuICB9XG5cbiAgc3RyVG9VcHBlckNhc2Uoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RhcnRDYXNlKHN0cik7XG4gIH1cblxuICBwbGFjZWhvbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEudGl0bGUgfHwgdGhpcy5zdHJUb1VwcGVyQ2FzZSh0aGlzLnNjaGVtYS5rZXkpO1xuICB9XG5cbiAgdHlwZSgpIHtcbiAgICBsZXQgZm9ybWF0ID0gdGhpcy5zY2hlbWEuZm9ybWF0IHx8ICd0ZXh0JztcblxuICAgIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgICBjYXNlICdwaG90byc6XG4gICAgICAgIGZvcm1hdCA9ICdmaWxlJztcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0O1xuICB9XG5cbiAgaWQoaT8pIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEua2V5ICsgJy0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpICsgJy0nICsgaTtcbiAgfVxuXG4gIGdldENsYXNzKGRlZmF1bHRDbGFzcz8pIHtcbiAgICByZXR1cm4gdGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgP1xuICAgICAgdGhpcy5zdHlsZVsnZGVmYXVsdCddIDogKGRlZmF1bHRDbGFzcyB8fCAnJyk7XG4gIH1cblxuICBnZXRNYXNrKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnbWFzaycpKSB7XG4gICAgICBjb25zdCBtYXNrOiBBcnJheTxzdHJpbmcgfCBSZWdFeHA+ID0gW107XG4gICAgICB0aGlzLnNjaGVtYS5tYXNrLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIG1hc2sucHVzaCgvXlxcLy4qXFwvJC8udGVzdChlbCkgPyBuZXcgUmVnRXhwKGVsLnJlcGxhY2UoL15cXC98XFwvJC9nLCAnJykpIDogZWwpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBtYXNrO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG1ha2VUcnVzdGVkSW1hZ2UoaW1hZ2UpOiBhbnkge1xuICAgIGNvbnN0IGltYWdlU3RyaW5nID0gIEpTT04uc3RyaW5naWZ5KGltYWdlKS5yZXBsYWNlKC9cXFxcbi9nLCAnJyk7XG4gICAgY29uc3Qgc3R5bGUgPSAndXJsKCcgKyBpbWFnZVN0cmluZyArICcpJztcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHN0eWxlKTtcbiAgfVxuXG4gIGVudW1OYW1lcyhpbmRleCkge1xuICAgIHJldHVybiB0eXBlb2YodGhpcy5zY2hlbWEuZW51bU5hbWVzKSA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gdGhpcy5zY2hlbWEuZW51bVtpbmRleF1cbiAgICAgIDogdGhpcy5zY2hlbWEuZW51bU5hbWVzW2luZGV4XTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICA8cD48c3Bhbj57e3RpdGxlKCl9fTwvc3Bhbj4gPHNwYW4+e3tjb250cm9sLnZhbHVlfX08L3NwYW4+PC9wPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFN0cmluZ1ZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+PHNwYW4+e3t0aXRsZSgpfX08L3NwYW4+IDxzcGFuPnt7Y29udHJvbC52YWx1ZX19PC9zcGFuPjwvcD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RWaWV3Q29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHtcbiAgZW51bU5hbWVzKGluZGV4KSB7XG4gICAgcmV0dXJuIHR5cGVvZih0aGlzLnNjaGVtYS5lbnVtTmFtZXMpID09PSAndW5kZWZpbmVkJ1xuICAgICAgPyB0aGlzLnNjaGVtYS5lbnVtW2luZGV4XVxuICAgICAgOiB0aGlzLnNjaGVtYS5lbnVtTmFtZXNbaW5kZXhdO1xuICB9XG5cbiAgZW1wdHlPcHRpb24oKSB7XG4gICAgcmV0dXJuIHN1cGVyLnRpdGxlKCkucmVwbGFjZSgvW15BLVowLTldKyQvaWcsICcnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxwPnt7dGl0bGUoKX19OiB7e2NvbnRyb2wudmFsdWV9fTwvcD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJWaWV3Q29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICA8cD48c3Bhbj57e3RpdGxlKCl9fTwvc3Bhbj4gPHNwYW4+e3tjb250cm9sLnZhbHVlfX08L3NwYW4+PC9wPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEJvb2xlYW5WaWV3Q29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHt9XG4iLCJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD57e3RpdGxlKCl9fTwvcD5cbiAgICA8aW1nIHNyYz1cInt7Y29udHJvbC52YWx1ZX19XCIgY2xhc3M9XCJpbWctdGh1bWJuYWlsXCIgLz5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBQaG90b1ZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge31cblxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICA8cD48c3Bhbj57e3RpdGxlKCl9fTwvc3Bhbj4gPHNwYW4+e3tjb250cm9sLnZhbHVlfX08L3NwYW4+PC9wPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFRleHRhcmVhVmlld0NvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7IH1cblxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgY3JlYXRlTnVtYmVyTWFzayBmcm9tICd0ZXh0LW1hc2stYWRkb25zL2Rpc3QvY3JlYXRlTnVtYmVyTWFzayc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICA8cD48c3Bhbj57e3RpdGxlKCl9fTwvc3Bhbj4gPHNwYW4+e3tjb250cm9sLnZhbHVlfX08L3NwYW4+PC9wPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIERhdGVWaWV3Q29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHtcbiAgbnVtYmVyTWFzayA9IGNyZWF0ZU51bWJlck1hc2soeyBhbGxvd0RlY2ltYWw6IGZhbHNlLCBwcmVmaXg6ICcnIH0pO1xuXG4gIGNsZWFuTWFzayh2YWx1ZSkge1xuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICA8cD48c3Bhbj57e3RpdGxlKCl9fTwvc3Bhbj4gPHNwYW4+e3tjb250cm9sLnZhbHVlfX08L3NwYW4+PC9wPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvZ3JvdXBWaWV3Q29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxwPnt7dGl0bGUoKX19PC9wPlxuICAgIDx1bCAqbmdGb3I9XCJsZXQgc2VsZWN0ZWQgb2YgY29udHJvbC52YWx1ZVwiPlxuICAgICAgPGxpPnt7c2VsZWN0ZWR9fTwvbGk+XG4gICAgPC91bD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveGdyb3VwVmlld0NvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+e3t0aXRsZSgpfX08L3A+XG4gICAgPHVsICpuZ0Zvcj1cImxldCBzZWxlY3RlZCBvZiBjb250cm9sLnZhbHVlXCI+XG4gICAgICA8bGk+e3tzZWxlY3RlZH19PC9saT5cbiAgICA8L3VsPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpc2VsZWN0Vmlld0NvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIGVudW1OYW1lcyhpbmRleCkge1xuICAgIHJldHVybiB0eXBlb2YodGhpcy5zY2hlbWEuZW51bU5hbWVzKSA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gdGhpcy5zY2hlbWEuZW51bVtpbmRleF1cbiAgICAgIDogdGhpcy5zY2hlbWEuZW51bU5hbWVzW2luZGV4XTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgY3JlYXRlTnVtYmVyTWFzayBmcm9tICd0ZXh0LW1hc2stYWRkb25zL2Rpc3QvY3JlYXRlTnVtYmVyTWFzayc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICA8cD48c3Bhbj57e3RpdGxlKCl9fTwvc3Bhbj4gPHNwYW4+e3tjb250cm9sLnZhbHVlfX08L3NwYW4+PC9wPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE1vbmV5Vmlld0NvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIG51bWJlck1hc2sgPSBjcmVhdGVOdW1iZXJNYXNrKHsgYWxsb3dEZWNpbWFsOiBmYWxzZSwgcHJlZml4OiAnJyB9KTtcblxuICBjbGVhbk1hc2sodmFsdWUpIHtcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUucmVwbGFjZSgvXFxEL2csICcnKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5leHBvcnQgY2xhc3MgU2NoZW1hRm9ybUNvbnRyb2wgZXh0ZW5kcyBGb3JtQ29udHJvbCB7XG4gIHB1YmxpYyBzY2hlbWE6IFNjaGVtYTtcbiAgcHVibGljIHN0eWxlOiBhbnk7XG4gIHB1YmxpYyB2aWV3T25seTogYm9vbGVhbjtcbiAgcHVibGljIGRhdGE6IGFueTtcbiAgcHVibGljIGlzUmVxdWlyZWQ6IGJvb2xlYW47XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTY2hlbWFGb3JtQ29udHJvbH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL3NjaGVtYS1mb3JtLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtuZ0NsYXNzXT1cIlsnb2JqZWN0JywgY29udHJvbC5zY2hlbWEua2V5XVwiXG4gICAgICBqZi1jb21wb25lbnQtY2hvb3NlclxuICAgICAgW2Zvcm1dPVwiY29udHJvbFwiXG4gICAgICBbc2NoZW1hXT1cImNvbnRyb2wuc2NoZW1hXCJcbiAgICAgIFtuZXN0ZWRdPVwidHJ1ZVwiPlxuICAgIDwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgT2JqZWN0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY29udHJvbDogU2NoZW1hRm9ybUNvbnRyb2w7XG59XG5cbiIsImltcG9ydCB7IEZvcm1BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuZXhwb3J0IGNsYXNzIFNjaGVtYUZvcm1BcnJheSBleHRlbmRzIEZvcm1BcnJheSB7XG4gIHB1YmxpYyBzY2hlbWE6IFNjaGVtYTtcbiAgcHVibGljIHN0eWxlOiBhbnk7XG59XG4iLCJpbXBvcnQgeyBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuZXhwb3J0IGNsYXNzIFNjaGVtYUZvcm1Hcm91cCBleHRlbmRzIEZvcm1Hcm91cCB7XG4gIHB1YmxpYyBzY2hlbWE6IFNjaGVtYTtcbiAgcHVibGljIHN0eWxlOiBhbnk7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29udHJvbCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9zY2hlbWEtZm9ybS1jb250cm9sJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUFycmF5IH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL3NjaGVtYS1mb3JtLWFycmF5JztcbmltcG9ydCB7IFNjaGVtYUZvcm1Hcm91cCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9zY2hlbWEtZm9ybS1ncm91cCc7XG5pbXBvcnQgc3RhcnRDYXNlIGZyb20gJ2xvZGFzaC5zdGFydGNhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtuZ0NsYXNzXT1cIlsnYXJyYXknLCBjb250cm9sLnNjaGVtYS5rZXldXCI+XG4gICAgICA8aDYgKm5nSWY9XCJnZXRMZWdlbmQoY29udHJvbCkubGVuZ3RoXCI+e3tnZXRMZWdlbmQoY29udHJvbCl9fTwvaDY+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBhcnJDb250cm9sIG9mIGdldEVuYWJsZWRDb250cm9scyhjb250cm9sKTsgbGV0IGkgPSBpbmRleDtcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCIgamYtY29tcG9uZW50LWNob29zZXIgW2Zvcm1dPVwiYXJyQ29udHJvbFwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZW1vdmVcIiAqbmdJZj1cImNvbnRyb2wuY29udHJvbHMubGVuZ3RoID4gMVwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwicmVtb3ZlQ29udHJvbChjb250cm9sLCBpKVwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiIHZhbHVlPVwiUmVtb3ZlXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBhZGRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImFkZENvbnRyb2woY29udHJvbClcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tc21cIiB2YWx1ZT1cIkFkZFwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcnJheUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNvbnRyb2w6IFNjaGVtYUZvcm1BcnJheTtcblxuICBnZXRMZWdlbmQoY29udHJvbCkge1xuICAgIHJldHVybiAoY29udHJvbCAmJiBjb250cm9sLnNjaGVtYSAmJiBjb250cm9sLnNjaGVtYS5rZXkpID8gc3RhcnRDYXNlKGNvbnRyb2wuc2NoZW1hLmtleSkgOiAnJztcbiAgfVxuXG4gIHN0clRvVXBwZXJDYXNlKHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL18vZywgJyAnKS5zcGxpdCgnICcpLm1hcCgod29yZCkgPT5cbiAgICAgICh3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSlcbiAgICApLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGdldEVuYWJsZWRDb250cm9scyhjb250cm9sKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29udHJvbC5jb250cm9scykpIHtcbiAgICAgIHJldHVybiBjb250cm9sLmNvbnRyb2xzLmZpbHRlcigoYykgPT4gYy5lbmFibGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbDtcbiAgfVxuXG4gIGNsb25lQ29udHJvbChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcbiAgICBsZXQgbmV3Q29udHJvbDogQWJzdHJhY3RDb250cm9sO1xuXG4gICAgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBTY2hlbWFGb3JtR3JvdXApIHtcbiAgICAgIGNvbnN0IGZvcm1Hcm91cCA9IG5ldyBTY2hlbWFGb3JtR3JvdXAoe30sIGNvbnRyb2wudmFsaWRhdG9yLCBjb250cm9sLmFzeW5jVmFsaWRhdG9yKTtcbiAgICAgIGNvbnN0IGNvbnRyb2xzID0gY29udHJvbC5jb250cm9scztcbiAgICAgIGZvcm1Hcm91cC5zY2hlbWEgPSBjb250cm9sLnNjaGVtYTtcblxuICAgICAgT2JqZWN0LmtleXMoY29udHJvbHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBmb3JtR3JvdXAuYWRkQ29udHJvbChrZXksIHRoaXMuY2xvbmVDb250cm9sKGNvbnRyb2xzW2tleV0pKTtcbiAgICAgIH0pO1xuXG4gICAgICBuZXdDb250cm9sID0gZm9ybUdyb3VwO1xuICAgIH0gZWxzZSBpZiAoY29udHJvbCBpbnN0YW5jZW9mIFNjaGVtYUZvcm1BcnJheSkge1xuICAgICAgY29uc3QgZm9ybUFycmF5ID0gbmV3IFNjaGVtYUZvcm1BcnJheShbXSwgY29udHJvbC52YWxpZGF0b3IsIGNvbnRyb2wuYXN5bmNWYWxpZGF0b3IpO1xuICAgICAgY29udHJvbC5jb250cm9scy5mb3JFYWNoKChmb3JtQ29udHJvbCkgPT4ge1xuICAgICAgICBmb3JtQXJyYXkucHVzaCh0aGlzLmNsb25lQ29udHJvbChmb3JtQ29udHJvbCkpO1xuICAgICAgICByZXR1cm4gZm9ybUFycmF5O1xuICAgICAgfSk7XG5cbiAgICAgIG5ld0NvbnRyb2wgPSBmb3JtQXJyYXk7XG4gICAgICAoPFNjaGVtYUZvcm1BcnJheT5uZXdDb250cm9sKS5zY2hlbWEgPSBjb250cm9sLnNjaGVtYTtcbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBTY2hlbWFGb3JtQ29udHJvbCkge1xuICAgICAgbmV3Q29udHJvbCA9IG5ldyBTY2hlbWFGb3JtQ29udHJvbChjb250cm9sLnZhbHVlLCBjb250cm9sLnZhbGlkYXRvciwgY29udHJvbC5hc3luY1ZhbGlkYXRvcik7XG4gICAgICAoPFNjaGVtYUZvcm1Db250cm9sPm5ld0NvbnRyb2wpLnNjaGVtYSA9IGNvbnRyb2wuc2NoZW1hO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yOiB1bmV4cGVjdGVkIGNvbnRyb2wgdmFsdWUnKTtcbiAgICB9XG5cbiAgICBpZiAoY29udHJvbC5kaXNhYmxlZCkge1xuICAgICAgbmV3Q29udHJvbC5kaXNhYmxlKHtlbWl0RXZlbnQ6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0NvbnRyb2w7XG4gIH1cblxuICBhZGRDb250cm9sKGZvcm1BcnJheTogRm9ybUFycmF5KSB7XG4gICAgZm9ybUFycmF5LnB1c2godGhpcy5jbG9uZUNvbnRyb2woZm9ybUFycmF5LmNvbnRyb2xzWzBdKSk7XG4gIH1cblxuICByZW1vdmVDb250cm9sKGZvcm1BcnJheTogRm9ybUFycmF5LCBpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKGZvcm1BcnJheS5sZW5ndGggPT09IDEpIHtcbiAgICAgIGZvcm1BcnJheS5jb250cm9sc1swXS5yZXNldCgpO1xuICAgICAgZm9ybUFycmF5LmNvbnRyb2xzWzBdLmRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybUFycmF5LnJlbW92ZUF0KGluZGV4KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXJyYXlDb21wb25lbnQgfSBmcm9tICcuL2FycmF5LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW25nQ2xhc3NdPVwiWydhcnJheScsIGNvbnRyb2wuc2NoZW1hLmtleV1cIj5cbiAgICAgIDxoNiAqbmdJZj1cImdldExlZ2VuZChjb250cm9sKS5sZW5ndGhcIj57e2dldExlZ2VuZChjb250cm9sKX19PC9oNj5cbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGFyckNvbnRyb2wgb2YgZ2V0RW5hYmxlZENvbnRyb2xzKGNvbnRyb2wpOyBsZXQgaSA9IGluZGV4O1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIiBqZi1jb21wb25lbnQtY2hvb3NlciBbZm9ybV09XCJhcnJDb250cm9sXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlWaWV3Q29tcG9uZW50IGV4dGVuZHMgQXJyYXlDb21wb25lbnQge31cbiIsImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbnRyb2wgfSBmcm9tICcuLi9tb2RlbHMvc2NoZW1hLWZvcm0tY29udHJvbCc7XG5pbXBvcnQgeyBTdHJpbmdWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGRzL3N0cmluZy9zdHJpbmcudmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0Vmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkcy9zZWxlY3Qvc2VsZWN0LnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE51bWJlclZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvbnVtYmVyL251bWJlci52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb29sZWFuVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkcy9ib29sZWFuL2Jvb2xlYW4udmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGhvdG9WaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGRzL3Bob3RvL3Bob3RvLnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRhcmVhVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkcy90ZXh0YXJlYS90ZXh0YXJlYS52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkcy9kYXRlL2RhdGUudmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmFkaW9ncm91cFZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvcmFkaW9ncm91cC9yYWRpb2dyb3VwLnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrYm94Z3JvdXBWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGRzL2NoZWNrYm94Z3JvdXAvY2hlY2tib3hncm91cC52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNdWx0aXNlbGVjdFZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3Qudmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9uZXlWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGRzL21vbmV5L21vbmV5LnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE9iamVjdENvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkL2NvbXBvbmVudHMvb2JqZWN0L29iamVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXJyYXlWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQvY29tcG9uZW50cy9hcnJheS9hcnJheS52aWV3LmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKc29uRm9ybUZpZWxkc1NlcnZpY2Uge1xuICBuYW1lOiBzdHJpbmc7XG4gIHJvb3RWaWV3Q29udGFpbmVyO1xuICBwdWJsaWMgZmllbGRUeXBlczogeyBbdHlwZTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgcHJpdmF0ZSB2aWV3T25seSA9IGZhbHNlO1xuICBwcml2YXRlIHZpZXdUeXBlczogT2JqZWN0ID0ge1xuICAgIHN0cmluZzogU3RyaW5nVmlld0NvbXBvbmVudCxcbiAgICBzZWxlY3Q6IFNlbGVjdFZpZXdDb21wb25lbnQsXG4gICAgbnVtYmVyOiBOdW1iZXJWaWV3Q29tcG9uZW50LFxuICAgIGJvb2xlYW46IEJvb2xlYW5WaWV3Q29tcG9uZW50LFxuICAgIHBob3RvOiBQaG90b1ZpZXdDb21wb25lbnQsXG4gICAgdGV4dGFyZWE6IFRleHRhcmVhVmlld0NvbXBvbmVudCxcbiAgICBvYmplY3Q6IE9iamVjdENvbXBvbmVudCxcbiAgICBhcnJheTogQXJyYXlWaWV3Q29tcG9uZW50LFxuICAgIGRhdGU6IERhdGVWaWV3Q29tcG9uZW50LFxuICAgIHJhZGlvZ3JvdXA6IFJhZGlvZ3JvdXBWaWV3Q29tcG9uZW50LFxuICAgIGNoZWNrYm94Z3JvdXA6IENoZWNrYm94Z3JvdXBWaWV3Q29tcG9uZW50LFxuICAgIG11bHRpc2VsZWN0OiBNdWx0aXNlbGVjdFZpZXdDb21wb25lbnQsXG4gICAgbW9uZXk6IE1vbmV5Vmlld0NvbXBvbmVudFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbiAgKSB7fVxuXG4gIHNldFJvb3RWaWV3Q29udGFpbmVyUmVmKHZpZXdDb250YWluZXJSZWYpIHtcbiAgICB0aGlzLnJvb3RWaWV3Q29udGFpbmVyID0gdmlld0NvbnRhaW5lclJlZjtcbiAgfVxuXG4gIGFkZER5bmFtaWNDb21wb25lbnQoY29udHJvbDogU2NoZW1hRm9ybUNvbnRyb2wpIHtcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5nZXQoY29udHJvbCkpO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMucm9vdFZpZXdDb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb250cm9sID0gY29udHJvbDtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2Uuc2NoZW1hID0gY29udHJvbC5zY2hlbWE7XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLnN0eWxlID0gY29udHJvbC5zdHlsZTtcbiAgfVxuXG4gIGhhcyh0eXBlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZFR5cGVzLmhhc093blByb3BlcnR5KHR5cGUpIHx8IHRoaXMudmlld1R5cGVzLmhhc093blByb3BlcnR5KHR5cGUpO1xuICB9XG5cbiAgcmVnaXN0ZXIodHlwZTogc3RyaW5nLCBmaWVsZDogYW55KSB7XG4gICAgdGhpcy5maWVsZFR5cGVzW3R5cGVdID0gZmllbGQ7XG4gICAgdGhpcy52aWV3VHlwZXNbdHlwZV0gPSBmaWVsZDtcbiAgfVxuXG4gIGdldChjb250cm9sKTogYW55IHtcbiAgICBjb25zdCB0eXBlczogT2JqZWN0ID0gdGhpcy52aWV3T25seSA/IHRoaXMudmlld1R5cGVzIDogdGhpcy5maWVsZFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZihjb250cm9sKSA9PT0gJ3N0cmluZycgJiYgdGhpcy5oYXMoY29udHJvbCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpZWxkVHlwZXNbY29udHJvbF07XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgYSBmaWVsZCBpcyBnZXR0aW5nIG92ZXJyaWRkZW4gYnkgZm9ybWF0XG4gICAgaWYgKHR5cGVvZihjb250cm9sLnNjaGVtYS5mb3JtYXQpICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLmhhcyhjb250cm9sLnNjaGVtYS5mb3JtYXQpKSB7XG4gICAgICByZXR1cm4gdHlwZXNbY29udHJvbC5zY2hlbWEuZm9ybWF0XTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mKGNvbnRyb2wuc2NoZW1hLmVudW0pICE9PSAndW5kZWZpbmVkJyAmJiBjb250cm9sLnNjaGVtYS50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICByZXR1cm4gdHlwZXNbJ2NoZWNrYm94Z3JvdXAnXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZihjb250cm9sLnNjaGVtYS5lbnVtKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0eXBlc1snc2VsZWN0J107XG4gICAgfSBlbHNlIGlmICh0aGlzLmhhcyhjb250cm9sLnNjaGVtYS5mb3JtYXQpKSB7XG4gICAgICByZXR1cm4gdHlwZXNbY29udHJvbC5zY2hlbWEuZm9ybWF0XTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGFzKGNvbnRyb2wuc2NoZW1hLnR5cGUpKSB7XG4gICAgICByZXR1cm4gdHlwZXNbY29udHJvbC5zY2hlbWEudHlwZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzWydzdHJpbmcnXTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmFsaWRhdG9yRm4sIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpzb25Gb3JtVmFsaWRhdG9yc1NlcnZpY2Uge1xuICB2YWxpZGF0b3JzOiBBcnJheTxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudmFsaWRhdG9ycyA9IFtdO1xuICB9XG5cbiAgcHVibGljIGdldChwcm9wLCBzY2hlbWEsIHBhdGgpIHtcbiAgICBjb25zdCByZXF1aXJlZCA9IHNjaGVtYS5yZXF1aXJlZCB8fCBbXTtcbiAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdO1xuICAgIGNvbnN0IHZhclBhdGggPSBbXS5jb25jYXQocGF0aCwgcHJvcCkuam9pbignLicpO1xuXG4gICAgaWYgKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLnR5cGUgPT09ICdib29sZWFuJyAmJiByZXF1aXJlZC5pbmRleE9mKHByb3ApID4gLTEpIHtcbiAgICAgIHJldHVybiBWYWxpZGF0b3JzLnBhdHRlcm4oJ3RydWUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gVmFsaWRhdG9ycy5jb21wb3NlKHRoaXMudmFsaWRhdG9ycy5jb25jYXQoW1xuICAgICAgKHRoaXMuaGFzKHZhclBhdGgpID8gdGhpcy52YWxpZGF0b3JzW3ZhclBhdGhdIDogbnVsbCksXG4gICAgICAocmVxdWlyZWQuaW5kZXhPZihwcm9wKSA+IC0xID8gVmFsaWRhdG9ycy5yZXF1aXJlZCA6IG51bGwpLFxuICAgICAgKGZpZWxkLmhhc093blByb3BlcnR5KCdtaW5MZW5ndGgnKSA/IFZhbGlkYXRvcnMubWluTGVuZ3RoKGZpZWxkLm1pbkxlbmd0aCkgOiBudWxsKSxcbiAgICAgIChmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnbWF4TGVuZ3RoJykgPyBWYWxpZGF0b3JzLm1heExlbmd0aChmaWVsZC5tYXhMZW5ndGgpIDogbnVsbCksXG4gICAgICAoZmllbGQuaGFzT3duUHJvcGVydHkoJ2Zvcm1hdCcpICYmIGZpZWxkLmZvcm1hdCA9PT0gJ2VtYWlsJyA/IFZhbGlkYXRvcnMuZW1haWwgOiBudWxsKSxcbiAgICAgIChmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnbWluaW11bScpID8gVmFsaWRhdG9ycy5taW4oZmllbGQubWluaW11bSkgOiBudWxsKSxcbiAgICAgIChmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnbWF4aW11bScpID8gVmFsaWRhdG9ycy5tYXgoZmllbGQubWF4aW11bSkgOiBudWxsKSxcbiAgICAgIChmaWVsZC5wYXR0ZXJuID8gVmFsaWRhdG9ycy5wYXR0ZXJuKGZpZWxkLnBhdHRlcm4pIDogbnVsbClcbiAgICBdKSk7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXIoZmllbGQ6IGFueSwgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbikge1xuICAgIHRoaXMudmFsaWRhdG9yc1tmaWVsZF0gPSB2YWxpZGF0b3I7XG4gIH1cblxuICBwdWJsaWMgaGFzKHN0cikge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcnMuaGFzT3duUHJvcGVydHkoc3RyKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSnNvbkZvcm1EZWZhdWx0c1NlcnZpY2Uge1xuICBwcml2YXRlIGRlZmF1bHRUeXBlczogeyBbdHlwZTogc3RyaW5nXTogYW55IH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kZWZhdWx0VHlwZXMgPSB0aGlzLmRlZmF1bHRUeXBlcyB8fCB7fTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQocHJvcCwgc2NoZW1hLCBkYXRhKSB7XG4gICAgY29uc3QgZGVmYXVsdFN0cmluZyA9IChwcm9wLmhhc093blByb3BlcnR5KCdmb3JtYXQnKSAmJiBwcm9wLmZvcm1hdCA9PT0gJ211bHRpc2VsZWN0JykgPyBbXSA6ICcnO1xuICAgIGxldCBkZWZhdWx0VmFsdWUgPSBzY2hlbWEucHJvcGVydGllc1twcm9wXS5kZWZhdWx0IHx8IGRlZmF1bHRTdHJpbmc7XG4gICAgaWYgKHRoaXMuaGFzKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLmRlZmF1bHQpKSB7XG4gICAgICBkZWZhdWx0VmFsdWUgPSB0aGlzLmV2YWwoc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0uZGVmYXVsdCkoKTtcbiAgICB9XG5cbiAgICAvLyBkYXRhIG92ZXJyaWRlIGRlZmF1bHRzXG4gICAgaWYgKGRhdGEgJiYgZGF0YS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgZGVmYXVsdFZhbHVlID0gZGF0YVtwcm9wXTtcbiAgICB9XG5cbiAgICBpZiAocHJvcC5oYXNPd25Qcm9wZXJ0eSgnZm9ybWF0JykgJiYgcHJvcC5mb3JtYXQgPT09ICdkYXRlJyAmJiBkZWZhdWx0VmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgZGVmYXVsdFZhbHVlID0gbmV3IERhdGUoZGVmYXVsdFZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBldmFsKHN0cikge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRUeXBlc1tzdHJdO1xuICB9XG5cbiAgcHVibGljIGhhcyhzdHIpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0VHlwZXMuaGFzT3duUHJvcGVydHkoc3RyKTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3RlcihzdHI6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgdGhpcy5kZWZhdWx0VHlwZXNbc3RyXSA9IGNhbGxiYWNrO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIERvQ2hlY2ssIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBOZ0Zvcm19IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEpzb25Gb3JtVmFsaWRhdG9yc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3ZhbGlkYXRvcnMuc2VydmljZSc7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29udHJvbCB9IGZyb20gJy4vbW9kZWxzL3NjaGVtYS1mb3JtLWNvbnRyb2wnO1xuaW1wb3J0IHsgSnNvbkZvcm1EZWZhdWx0c1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RlZmF1bHRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUdyb3VwIH0gZnJvbSAnLi9tb2RlbHMvc2NoZW1hLWZvcm0tZ3JvdXAnO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUFycmF5IH0gZnJvbSAnLi9tb2RlbHMvc2NoZW1hLWZvcm0tYXJyYXknO1xuaW1wb3J0IHsgSnNvbkZvcm1GaWVsZHNTZXJ2aWNlIH0gZnJvbSAnLi9mcmFtZXdvcmsvanNvbi1mb3JtLWZpZWxkcy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamYtZm9ybSwgdHJ1LWZvcm0nLFxuICB0ZW1wbGF0ZTogYDxmb3JtXG4gICN1c2VyRm9ybT1cIm5nRm9ybVwiXG4gIFtmb3JtR3JvdXBdPVwiZm9ybVwiXG4gIChuZ1N1Ym1pdCk9XCJoYW5kbGVPblN1Ym1pdCgpXCJcbiAgKm5nSWY9XCJpc1ZhbGlkU2NoZW1hKClcIlxuICBbbmdDbGFzc109XCJ7ICd2aWV3LW9ubHknOiB2aWV3T25seSB9XCJcbiAgW2lkXT1cImlkXCJcbj5cbiAgPGRpdiAjaGVhZGVyPjwvZGl2PlxuICA8ZGl2XG4gICAgamYtY29tcG9uZW50LWNob29zZXJcbiAgICBbbmdDbGFzc109XCJbb3V0ZXJDbGFzcyB8fCAnJywgdGhpcy5hY3RpdmVTdHlsZVsnZGVmYXVsdCddID8gdGhpcy5hY3RpdmVTdHlsZVsnZGVmYXVsdCddIDogJyddXCJcbiAgICBbZm9ybV09XCJmb3JtXCJcbiAgICBbc2NoZW1hXT1cImFjdGl2ZVNjaGVtYVwiPlxuICA8L2Rpdj5cbiAgPGRpdiAjY29udGFpbmVyPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG4gIDxkaXYgI2Zvb3Rlcj48L2Rpdj5cbiAgPGRpdlxuICAgICNidXR0b25zXG4gICAgKm5nSWY9XCJjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID09IDAgJiYgKHN1Ym1pdCB8fCBjYW5jZWwpXCJcbiAgICBbbmdDbGFzc109XCJ7ICdtYXJnaW4tdG9wLS1kb3VibGUnOiB0cnVlLCAncGFnZS1hY3Rpb25zLS1lZGdlcyc6IChjYW5jZWwgJiYgc3VibWl0KSwgJ3BhZ2UtYWN0aW9ucy0tY2VudGVyJzogKCFjYW5jZWwgfHwgIXN1Ym1pdCl9XCI+XG4gICAgPGpmLWZvcm0tYnV0dG9uXG4gICAgICAqbmdJZj1cImNhbmNlbFwiXG4gICAgICBbY2FuY2VsXT1cImNhbmNlbFwiXG4gICAgICBbc3RlcHNdPVwic3RlcHNcIlxuICAgICAgW2lzTXVsdGlTdGVwXT1cImlzTXVsdGlTdGVwXCJcbiAgICAgIFtpc1dvcmtpbmddPVwiaXNXb3JraW5nXCJcbiAgICAgIChoYW5kbGVDbGljayk9XCJoYW5kbGVPbkNhbmNlbCgpXCJcbiAgICAgIFtzdWJtaXRDbGFzc109XCJzdWJtaXRDbGFzc1wiXG4gICAgICBbY2FuY2VsQ2xhc3NdPVwiY2FuY2VsQ2xhc3NcIj5cbiAgICA8L2pmLWZvcm0tYnV0dG9uPlxuICAgIDxqZi1mb3JtLWJ1dHRvblxuICAgICAgKm5nSWY9XCJzdWJtaXRcIlxuICAgICAgW3N1Ym1pdENsYXNzXT1cInN1Ym1pdENsYXNzXCJcbiAgICAgIFtjYW5jZWxDbGFzc109XCJjYW5jZWxDbGFzc1wiXG4gICAgICBbc3VibWl0XT1cInN1Ym1pdFwiXG4gICAgICBbc3RlcHNdPVwic3RlcHNcIlxuICAgICAgW2NvbnRpbnVlXT1cImNvbnRpbnVlXCJcbiAgICAgIFtpc011bHRpU3RlcF09XCJpc011bHRpU3RlcFwiXG4gICAgICBbaXNXb3JraW5nXT1cImlzV29ya2luZ1wiXG4gICAgICBbaXNGb3JtVmFsaWRdPVwidGhpcy5mb3JtLnZhbGlkXCI+XG4gICAgPC9qZi1mb3JtLWJ1dHRvbj5cbiAgPC9kaXY+XG48L2Zvcm0+XG5gXG59KVxuZXhwb3J0IGNsYXNzIEpzb25Gb3JtQ29tcG9uZW50IGltcGxlbWVudHMgRG9DaGVjaywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgc2NoZW1hO1xuICBASW5wdXQoKSBkYXRhID0ge307XG4gIEBJbnB1dCgpIHN0eWxlID0ge307XG4gIEBJbnB1dCgpIGNvbnRpbnVlID0gJ0NvbnRpbnVlJztcbiAgQElucHV0KCkgc3VibWl0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNhbmNlbDogc3RyaW5nO1xuICBASW5wdXQoKSBzdWJtaXRDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBjYW5jZWxDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBvdXRlckNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlzV29ya2luZyA9IGZhbHNlO1xuICBASW5wdXQoKSBpc011bHRpU3RlcCA9IGZhbHNlO1xuICBASW5wdXQoKSBhY3RpdmVTdGVwID0gbnVsbDtcbiAgQElucHV0KCkgc3RhdGUgPSBmYWxzZTtcbiAgQElucHV0KCkgaWQgPSAnJztcbiAgQElucHV0KCkgZmllbGRzID0ge307XG4gIEBJbnB1dCgpIHZpZXdPbmx5ID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBoYW5kbGVTdGVwID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaGFuZGxlU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaGFuZGxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaGFuZGxlQ2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAVmlld0NoaWxkKCd1c2VyRm9ybScpIHVzZXJGb3JtOiBOZ0Zvcm07XG4gIEBWaWV3Q2hpbGQoJ2hlYWRlcicpIGhlYWRlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZm9vdGVyJykgZm9vdGVyOiBFbGVtZW50UmVmO1xuXG4gIHB1YmxpYyBmb3JtO1xuICBwdWJsaWMgbW9kZWw7XG4gIHB1YmxpYyBjb250cm9sID0geyBrZXk6ICcnLCB2YWx1ZTogJycsIGlzUGFydE9mOiBmYWxzZSB9O1xuICBwdWJsaWMgb2xkU2NoZW1hOiBzdHJpbmc7XG4gIHB1YmxpYyBvbGREYXRhOiBzdHJpbmc7XG4gIHB1YmxpYyBjaGFuZ2VEZXRlY3RlZCA9IGZhbHNlO1xuICBwdWJsaWMgb2xkQWN0aXZlU3RlcCA9ICcnO1xuICBwdWJsaWMgc3RlcHMgPSBbXTtcbiAgcHVibGljIG11bHRpU3RlcERhdGEgPSB7fTtcbiAgcHVibGljIGFjdGl2ZVNjaGVtYSA9IHt9O1xuICBwdWJsaWMgYWN0aXZlU3R5bGUgPSB7fTtcbiAgcHVibGljIHJlcXVpcmVkRmllbGRzID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIHZsOiBKc29uRm9ybVZhbGlkYXRvcnNTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGY6IEpzb25Gb3JtRGVmYXVsdHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgamY6IEpzb25Gb3JtRmllbGRzU2VydmljZVxuICApIHt9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0ZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLm9sZFNjaGVtYSAhPT0gSlNPTi5zdHJpbmdpZnkodGhpcy5zY2hlbWEpKSB7XG4gICAgICB0aGlzLm9sZFNjaGVtYSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9sZERhdGEgIT09IEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpIHtcbiAgICAgIHRoaXMub2xkRGF0YSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vbGRBY3RpdmVTdGVwICE9PSB0aGlzLmFjdGl2ZVN0ZXApIHtcbiAgICAgIHRoaXMub2xkQWN0aXZlU3RlcCA9IHRoaXMuYWN0aXZlU3RlcDtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNoYW5nZURldGVjdGVkKSB7XG4gICAgICB0aGlzLnJlcXVpcmVkRmllbGRzID0gMDtcbiAgICAgIHRoaXMuYXBwZW5kRmllbGRzKCk7XG4gICAgICB0aGlzLmNvbnN0cnVjdEZvcm0oKTtcbiAgICAgIHRoaXMuamZbMF0udmlld09ubHkgPSB0aGlzLnZpZXdPbmx5O1xuICAgICAgdGhpcy5jYW5jZWwgPSB0aGlzLnZpZXdPbmx5ID8gJycgOiB0aGlzLmNhbmNlbDtcbiAgICAgIHRoaXMuc3VibWl0ID0gdGhpcy52aWV3T25seSA/ICcnIDogdGhpcy5zdWJtaXQ7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZm9ybSkge1xuICAgICAgdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIGFwcGVuZEZpZWxkcygpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmZpZWxkcykuZm9yRWFjaCgoZikgPT4ge1xuICAgICAgdGhpcy5qZlswXS5yZWdpc3RlcihmLCB0aGlzLmZpZWxkc1tmXSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RGb3JtKCkge1xuICAgIHRoaXMubW9kZWwgPSB7fTtcblxuICAgIGlmICh0aGlzLmlzVmFsaWRTY2hlbWEoKSkge1xuICAgICAgdGhpcy5hY3RpdmVTY2hlbWEgPSB0aGlzLnNjaGVtYTtcbiAgICAgIHRoaXMuYWN0aXZlU3R5bGUgPSB0aGlzLnN0eWxlO1xuXG4gICAgICAvLyBlbWl0IHRoZSBpbml0aWFsIHN0ZXAgZm9yIHRoZSBldmVudFxuICAgICAgaWYgKHRoaXMuc3RlcHMubGVuZ3RoID09PSAwICYmIHRoaXMuaXNNdWx0aVN0ZXApIHtcbiAgICAgICAgdGhpcy5zdGVwcyA9IHRoaXMuZ2V0U3RlcHModGhpcy5zY2hlbWEsIHRoaXMuYWN0aXZlU3RlcCk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3RlcC5lbWl0KHsgaWQ6IHRoaXMuaWQsIGRhdGE6IG51bGwsIHN0ZXBzOiB0aGlzLnN0ZXBzIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zdGVwcy5sZW5ndGggPiAwICYmIHRoaXMuaXNNdWx0aVN0ZXApIHtcbiAgICAgICAgY29uc3QgdmlzaWJsZVN0ZXBOYW1lID0gdGhpcy5hY3RpdmVTdGVwID4gMCA/IHRoaXMuYWN0aXZlU3RlcCA6IHRoaXMuc3RlcHMuZmluZCgocykgPT4gcy52aXNpYmxlKS5uYW1lO1xuICAgICAgICB0aGlzLmFjdGl2ZVNjaGVtYSA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbdmlzaWJsZVN0ZXBOYW1lXTtcbiAgICAgICAgdGhpcy5hY3RpdmVTdHlsZSA9IHRoaXMuc3R5bGUuaGFzT3duUHJvcGVydHkodmlzaWJsZVN0ZXBOYW1lKSA/IHRoaXMuc3R5bGVbdmlzaWJsZVN0ZXBOYW1lXSA6IHt9O1xuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLnN0YXRlICYmIHRoaXMubXVsdGlTdGVwRGF0YS5oYXNPd25Qcm9wZXJ0eSh2aXNpYmxlU3RlcE5hbWUpXG4gICAgICAgICAgPyB0aGlzLm11bHRpU3RlcERhdGFbdmlzaWJsZVN0ZXBOYW1lXSA6IHRoaXMuZGF0YTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hY3RpdmVTY2hlbWEgPSB0aGlzLnN1YlJlZnModGhpcy5hY3RpdmVTY2hlbWEpO1xuICAgICAgdGhpcy5tb2RlbCA9IHRoaXMuZ2VuZXJhdGVGb3JtKHRoaXMuYWN0aXZlU2NoZW1hLCB7fSwgdGhpcy5kYXRhLCB0aGlzLmFjdGl2ZVN0eWxlKTtcbiAgICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAodGhpcy5tb2RlbCk7XG5cbiAgICAgIHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2wuaXNQYXJ0T2YpIHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICAgIHRoaXMuY29uc3RydWN0Rm9ybSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UuZW1pdCh7IGlkOiB0aGlzLmlkLCBjb250cm9sOiB0aGlzLmNvbnRyb2wsIGRhdGEgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRTdGVwcyhzY2hlbWEsIGFjdGl2ZVN0ZXApOiBBcnJheTxhbnk+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLm1hcCgobmFtZSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCB0eXBlID0gJ3N0ZXAnO1xuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlU3RlcCA9IHRoaXMuYWN0aXZlU3RlcCB8fCBuYW1lO1xuICAgICAgICB0eXBlID0gJ2ZpcnN0JztcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKS5sZW5ndGggLSAxKSB7XG4gICAgICAgIHR5cGUgPSAnbGFzdCc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluZGV4LFxuICAgICAgICBuYW1lLFxuICAgICAgICB2aXNpYmxlOiBhY3RpdmVTdGVwID8gYWN0aXZlU3RlcCA9PT0gbmFtZSA6IGluZGV4ID09PSAwLFxuICAgICAgICB0eXBlLFxuICAgICAgICB0aXRsZTogc2NoZW1hLnByb3BlcnRpZXNbbmFtZV0uaGFzT3duUHJvcGVydHkoJ3RpdGxlJykgPyBzY2hlbWEucHJvcGVydGllc1tuYW1lXS50aXRsZSA6IG5hbWVcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBpc1ZhbGlkU2NoZW1hKCkge1xuICAgIHJldHVybiB0eXBlb2YgKHRoaXMuc2NoZW1hKSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXModGhpcy5zY2hlbWEpLmxlbmd0aCA+IDA7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlRm9ybSAoc2NoZW1hLCBncm91cD86IHt9LCBkYXRhPzoge30sIHN0eWxlPzoge30sIHBhdGg/OiBBcnJheTxhbnk+KSB7XG4gICAgaWYgKCF0aGlzLmlzVmlzaWJsZShzY2hlbWEpKSB7XG4gICAgICByZXR1cm4gZ3JvdXA7XG4gICAgfVxuXG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICBwYXRoID0gW107XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgIGlmICh0aGlzLmlzT25lT2Yoc2NoZW1hLCBwcm9wKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChzY2hlbWEucHJvcGVydGllc1twcm9wXS50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBncm91cERhdGEgPSBkYXRhICYmIGRhdGEuaGFzT3duUHJvcGVydHkocHJvcCkgPyBkYXRhW3Byb3BdIDoge307XG4gICAgICAgIGNvbnN0IGdyb3VwU3R5bGUgPSBzdHlsZSAmJiBzdHlsZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSA/IHN0eWxlW3Byb3BdIDoge307XG4gICAgICAgIGdyb3VwW3Byb3BdID0gbmV3IFNjaGVtYUZvcm1Hcm91cCh0aGlzLmdlbmVyYXRlRm9ybShzY2hlbWEucHJvcGVydGllc1twcm9wXSwge30sIGdyb3VwRGF0YSwgZ3JvdXBTdHlsZSwgW10uY29uY2F0KHBhdGgsIHByb3ApKSk7XG4gICAgICAgIGdyb3VwW3Byb3BdLnNjaGVtYSA9IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdO1xuICAgICAgICBncm91cFtwcm9wXS5zY2hlbWEua2V5ID0gcHJvcDtcbiAgICAgICAgZ3JvdXBbcHJvcF0uc3R5bGUgPSBncm91cFN0eWxlO1xuICAgICAgfSBlbHNlIGlmIChzY2hlbWEucHJvcGVydGllc1twcm9wXS50eXBlID09PSAnYXJyYXknICYmICF0aGlzLmlzRm9ybWF0KHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLCAnbXVsdGlzZWxlY3QnKSkge1xuICAgICAgICBwYXRoLnB1c2gocHJvcCk7XG4gICAgICAgIGNvbnN0IGFycmF5RGF0YSA9IGRhdGEgJiYgZGF0YS5oYXNPd25Qcm9wZXJ0eShwcm9wKSA/IGRhdGFbcHJvcF0gOiBbe31dO1xuICAgICAgICBjb25zdCBhcnJheVN0eWxlID0gc3R5bGUgJiYgc3R5bGUuaGFzT3duUHJvcGVydHkocHJvcCkgPyBzdHlsZVtwcm9wXSA6IHt9O1xuICAgICAgICBsZXQgZmJBcnJheSA9IFtdO1xuXG4gICAgICAgIGlmIChzY2hlbWEucHJvcGVydGllc1twcm9wXS5lbnVtKSB7XG4gICAgICAgICAgZmJBcnJheSA9IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLmVudW0ubWFwKChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250cm9sID0gbmV3IFNjaGVtYUZvcm1Db250cm9sKCk7XG4gICAgICAgICAgICBjb250cm9sLnNjaGVtYSA9IE9iamVjdC5hc3NpZ24oe30sIHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdKTtcbiAgICAgICAgICAgIGNvbnRyb2wuc2NoZW1hLmtleSA9IHByb3A7XG4gICAgICAgICAgICBjb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKGV2ZW50KSA9PiB0aGlzLmhhbmRsZU9uQ2hhbmdlKHByb3AsIGV2ZW50KSk7XG4gICAgICAgICAgICBjb250cm9sLmlzUmVxdWlyZWQgPSBzY2hlbWEuaGFzT3duUHJvcGVydHkoJ3JlcXVpcmVkJykgJiYgc2NoZW1hLnJlcXVpcmVkLmluZGV4T2YocHJvcCkgPiAtMTtcblxuICAgICAgICAgICAgaWYgKGNvbnRyb2wuaXNSZXF1aXJlZCkge1xuICAgICAgICAgICAgICB0aGlzLnJlcXVpcmVkRmllbGRzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29udHJvbDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYkFycmF5ID0gYXJyYXlEYXRhLm1hcCgoZGF0YUF0SW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBuZXcgU2NoZW1hRm9ybUdyb3VwKHRoaXMuZ2VuZXJhdGVGb3JtKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLml0ZW1zLCB7fSwgZGF0YUF0SW5kZXgsIHt9LCBbXS5jb25jYXQocGF0aCwgcHJvcCkpKTtcbiAgICAgICAgICAgIGcuc2NoZW1hID0gc2NoZW1hLnByb3BlcnRpZXNbcHJvcF07XG4gICAgICAgICAgICByZXR1cm4gZztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyb3VwW3Byb3BdID0gbmV3IFNjaGVtYUZvcm1BcnJheShmYkFycmF5KTtcbiAgICAgICAgZ3JvdXBbcHJvcF0uc2NoZW1hID0gc2NoZW1hLnByb3BlcnRpZXNbcHJvcF07XG4gICAgICAgIGdyb3VwW3Byb3BdLnNjaGVtYS5rZXkgPSBwcm9wO1xuICAgICAgICBncm91cFtwcm9wXS5zdHlsZSA9IGFycmF5U3R5bGU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNWaXNpYmxlKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdKSkge1xuXG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSBuZXcgU2NoZW1hRm9ybUNvbnRyb2wodGhpcy5kZi5nZXQocHJvcCwgc2NoZW1hLCBkYXRhKSwgdGhpcy52bC5nZXQocHJvcCwgc2NoZW1hLCBwYXRoKSk7XG4gICAgICAgIGNvbnRyb2wuc2NoZW1hID0gT2JqZWN0LmFzc2lnbih7fSwgc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0pO1xuICAgICAgICBjb250cm9sLnNjaGVtYS5rZXkgPSBwcm9wO1xuICAgICAgICBjb250cm9sLmRhdGEgPSB0aGlzLmRmLmdldChwcm9wLCBzY2hlbWEsIGRhdGEpO1xuICAgICAgICBjb250cm9sLnN0eWxlID0gKHN0eWxlICYmIHN0eWxlLmhhc093blByb3BlcnR5KHByb3ApKSA/IHN0eWxlW3Byb3BdIDoge307XG4gICAgICAgIGNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoZXZlbnQpID0+IHRoaXMuaGFuZGxlT25DaGFuZ2UocHJvcCwgZXZlbnQsIHRoaXMuaW5PbmVPZihzY2hlbWEsIHByb3ApKSk7XG4gICAgICAgIGNvbnRyb2wuaXNSZXF1aXJlZCA9IHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgncmVxdWlyZWQnKSAmJiBzY2hlbWEucmVxdWlyZWQuaW5kZXhPZihwcm9wKSA+IC0xO1xuICAgICAgICBpZiAoY29udHJvbC5pc1JlcXVpcmVkKSB7XG4gICAgICAgICAgdGhpcy5yZXF1aXJlZEZpZWxkcysrO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JvdXBbcHJvcF0gPSBjb250cm9sO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGdyb3VwO1xuICB9XG5cbiAgaXNPbmVPZihzY2hlbWEsIHByb3ApIHtcbiAgICBpZiAodHlwZW9mIChzY2hlbWEub25lT2YpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHNjaGVtYS5vbmVPZi5maWx0ZXIoKHApID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMocC5wcm9wZXJ0aWVzKVswXTtcblxuICAgICAgICBpZiAocC5wcm9wZXJ0aWVzW2tleV0ucmVxdWlyZWQuaW5kZXhPZihwcm9wKSA+IC0xKSB7XG4gICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5kYXRhW2tleV07XG4gICAgICAgICAgaWYgKHNjaGVtYS5wcm9wZXJ0aWVzW2tleV0udHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IFN0cmluZyh0aGlzLmRhdGFba2V5XSkgPT09ICd0cnVlJzsgLy8gbWF0ZXJpYWwgcHJlc2VydmVzIHN0cmluZyAmIGJvb3RzdHJhcCBkb2Vzbid0XG4gICAgICAgICAgfSBlbHNlIGlmIChzY2hlbWEucHJvcGVydGllc1trZXldLnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB2YWx1ZSA9ICt0aGlzLmRhdGFba2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmhhc093blByb3BlcnR5KGtleSkgPT09IGZhbHNlIHx8IHAucHJvcGVydGllc1trZXldLmVudW0uaW5kZXhPZih2YWx1ZSkgPT09IC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSkubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpbk9uZU9mKHNjaGVtYSwgcHJvcCkge1xuICAgIGlmICh0eXBlb2YgKHNjaGVtYS5vbmVPZikgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gc2NoZW1hLm9uZU9mLmZpbHRlcigocCkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhwLnByb3BlcnRpZXMpWzBdO1xuICAgICAgICByZXR1cm4ga2V5ID09PSBwcm9wO1xuICAgICAgfSkubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc1Zpc2libGUgKHByb3ApIHtcbiAgICByZXR1cm4gcHJvcC5oYXNPd25Qcm9wZXJ0eSgndmlzaWJsZScpID09PSBmYWxzZSB8fCAocHJvcC5oYXNPd25Qcm9wZXJ0eSgndmlzaWJsZScpICYmIHByb3AudmlzaWJsZSA9PT0gdHJ1ZSk7XG4gIH1cblxuICBpc0Zvcm1hdChwcm9wLCBmb3JtYXQpIHtcbiAgICByZXR1cm4gcHJvcC5oYXNPd25Qcm9wZXJ0eSgnZm9ybWF0JykgJiYgcHJvcC5mb3JtYXQgPT09IGZvcm1hdDtcbiAgfVxuXG4gIGhhbmRsZU9uU3VibWl0KCkge1xuICAgIHRoaXMudG91Y2hBbGwodGhpcy5mb3JtLmNvbnRyb2xzKTtcblxuICAgIGlmICh0aGlzLmZvcm0udmFsaWQgJiYgdGhpcy5pc011bHRpU3RlcCkge1xuICAgICAgY29uc3QgcHJldiA9IHRoaXMuc3RlcHMuZmluZEluZGV4KChzKSA9PiBzLnZpc2libGUpO1xuICAgICAgdGhpcy5tdWx0aVN0ZXBEYXRhW3RoaXMuYWN0aXZlU3RlcF0gPSB0aGlzLmZvcm0udmFsdWU7XG4gICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5zdGVwcy5maW5kSW5kZXgoKHMpID0+IHMubmFtZSA9PT0gdGhpcy5hY3RpdmVTdGVwKTtcbiAgICAgIGNvbnN0IG5leHQgPSBjdXJyZW50ICsgMTtcblxuICAgICAgaWYgKHR5cGVvZiAodGhpcy5zdGVwc1tuZXh0XSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuc3RlcHNbcHJldl0udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0ZXBzW25leHRdLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGl2ZVN0ZXAgPSB0aGlzLnN0ZXBzW25leHRdLm5hbWU7XG4gICAgICAgIHRoaXMuaGFuZGxlU3RlcC5lbWl0KHtcbiAgICAgICAgICBkaXI6ICduZXh0JyxcbiAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICBkYXRhOiB7IFt0aGlzLnN0ZXBzW3ByZXZdLm5hbWVdOiB0aGlzLm11bHRpU3RlcERhdGFbdGhpcy5zdGVwc1twcmV2XS5uYW1lXSB9LFxuICAgICAgICAgIHN0ZXBzOiB0aGlzLnN0ZXBzXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbnN0cnVjdEZvcm0oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0LmVtaXQodGhpcy5tdWx0aVN0ZXBEYXRhKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLmhhbmRsZVN1Ym1pdC5lbWl0KHRoaXMuZm9ybS52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlT25DaGFuZ2Uoa2V5LCB2YWx1ZSwgaXNQYXJ0T2YgPSBmYWxzZSkge1xuICAgIHRoaXMuY29udHJvbCA9IHsga2V5LCB2YWx1ZSwgaXNQYXJ0T2YgfTtcbiAgfVxuXG4gIGhhbmRsZU9uQ2FuY2VsKCkge1xuICAgIGlmICh0aGlzLmlzTXVsdGlTdGVwKSB7XG4gICAgICBjb25zdCBwcmV2ID0gdGhpcy5zdGVwcy5maW5kSW5kZXgoKHMpID0+IHMudmlzaWJsZSk7XG4gICAgICB0aGlzLnN0ZXBzW3ByZXZdLnZpc2libGUgPSBmYWxzZTtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLnN0ZXBzLmZpbmRJbmRleCgocykgPT4gcy5uYW1lID09PSB0aGlzLmFjdGl2ZVN0ZXApO1xuICAgICAgY29uc3QgbmV4dCA9IGN1cnJlbnQgLSAxO1xuXG4gICAgICBpZiAodHlwZW9mICh0aGlzLnN0ZXBzW25leHRdKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zdGVwc1tuZXh0XS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hY3RpdmVTdGVwID0gdGhpcy5zdGVwc1tuZXh0XS5uYW1lO1xuICAgICAgICB0aGlzLmhhbmRsZVN0ZXAuZW1pdCh7XG4gICAgICAgICAgZGlyOiAncHJldicsXG4gICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgZGF0YTogeyBbdGhpcy5zdGVwc1tjdXJyZW50XS5uYW1lXTogdGhpcy5tdWx0aVN0ZXBEYXRhW3RoaXMuc3RlcHNbcHJldl0ubmFtZV0gfSxcbiAgICAgICAgICBzdGVwczogdGhpcy5zdGVwc1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RGb3JtKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhbmRsZUNhbmNlbC5lbWl0KHRoaXMuZm9ybS52YWx1ZSk7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgdGhpcy5oYW5kbGVDYW5jZWwuZW1pdCh0aGlzLmZvcm0udmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHRvdWNoQWxsKGNvbnRyb2xzKSB7XG4gICAgT2JqZWN0LmtleXMoY29udHJvbHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGNvbnRyb2xzW2tleV0uaGFzT3duUHJvcGVydHkoJ2NvbnRyb2xzJykpIHtcbiAgICAgICAgdGhpcy50b3VjaEFsbChjb250cm9sc1trZXldLmNvbnRyb2xzKTtcbiAgICAgIH1cbiAgICAgIGNvbnRyb2xzW2tleV0ubWFya0FzVG91Y2hlZCgpO1xuICAgIH0pO1xuICB9XG5cbiAgc3ViUmVmcyhzY2hlbWEpIHtcbiAgICBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcykuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgaWYgKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLmhhc093blByb3BlcnR5KCckcmVmJykpIHtcbiAgICAgICAgc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0gPSB0aGlzLnNjaGVtYS5kZWZpbml0aW9uc1tzY2hlbWEucHJvcGVydGllc1twcm9wXVsnJHJlZiddLnJlcGxhY2UoJyMvZGVmaW5pdGlvbnMvJywgJycpXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzY2hlbWE7XG4gIH1cblxuICAvKipcbiAgICogQVBJOiBleHRlcm5hbCBtZXRob2QgZm9yIGVuc3VyaW5nIHRoZSBmb3JtIGlzIHZhbGlkXG4gICAqL1xuICBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvcm0udmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogQVBJOiB0cmlnZ2VyIGV4dGVybmFsIHN1Ym1pc3Npb25cbiAgICovXG4gIHN1Ym1pdEZvcm0oKSB7XG4gICAgdGhpcy51c2VyRm9ybS5uZ1N1Ym1pdC5lbWl0KCk7XG4gIH1cblxuICAvKipcbiAgICogQVBJOiBzZXQgaGVhZGVyIG9mIHRoZSBmb3JtXG4gICAqL1xuICBzZXRIZWFkZXIodmFsKSB7XG4gICAgdGhpcy5oZWFkZXIubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSB2YWw7XG4gIH1cblxuICAvKipcbiAgICogQVBJOiBzZXQgZm9vdGVyIG9mIHRoZSBmb3JtXG4gICAqL1xuICBzZXRGb290ZXIodmFsKSB7XG4gICAgdGhpcy5mb290ZXIubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSB2YWw7XG4gIH1cblxuICAvKipcbiAgICogQVBJOiBnZXQgcmVxdWlyZWQgZmllbGRzIGNvdW50XG4gICAqL1xuICBnZXRSZXF1aXJlZEZpZWxkQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWlyZWRGaWVsZHM7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8bGFiZWwgW2F0dHIuY2xhc3NdPVwic2NoZW1hLmtleVwiIFtuZ0NsYXNzXT1cInsnbWFyZ2luLWJvdHRvbS0taGFsZic6IHRydWUsIHJlcXVpcmVkOiBpc1JlcXVpcmVkKCl9XCI+XG4gICAgICB7e3RpdGxlKCl9fTxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+PC9sYWJlbD5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCIgW2F0dHIuY2xhc3NdPVwiJ2luZm8nXCIgW2F0dHIudGl0bGVdPVwidGhpcy5zY2hlbWEuZGVzY3JpcHRpb25cIj5JbmZvPC9idXR0b24+XG4gICAgPGRpdiBbY2xhc3NdPVwiZ2V0Q2xhc3MoJ2NoZWNrYm94LWdyb3VwJylcIj5cbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGNoaWxkIG9mIHRoaXMuY29udHJvbFsnY29udHJvbHMnXTsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgIFtuZ0NsYXNzXT1cInsnY2hlY2tib3gtY29udGFpbmVyJzogdHJ1ZSwgJ2NoZWNrZWQnOiBjaGlsZC52YWx1ZSA9PT0gc2NoZW1hLmVudW1baV19XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgW2F0dHIuaWRdPVwiZ2V0SWQoaSwgc2NoZW1hLmVudW1baV0pXCJcbiAgICAgICAgICBbY2hlY2tlZF09XCJjaGlsZC52YWx1ZSA9PT0gc2NoZW1hLmVudW1baV1cIlxuICAgICAgICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxuICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJjaGlsZFwiXG4gICAgICAgICAgKGNoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQsIGkpXCJcbiAgICAgICAgICBbdmFsdWVdPVwic2NoZW1hLmVudW1baV1cIiAvPlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBbYXR0ci5mb3JdPVwiZ2V0SWQoaSwgc2NoZW1hLmVudW1baV0pXCJcbiAgICAgICAgICBbYXR0ci5jbGFzc109XCJzY2hlbWEua2V5XCI+XG4gICAgICAgICAge3tlbnVtTmFtZXMoaSl9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L2pmLWVycm9yPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94Z3JvdXBDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICBjaGVja2JveEdyb3VwVmFsdWVzID0gW107XG4gIHJhbmRvbVN1ZmZpeCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcblxuICBzZXRWYWx1ZShldmVudCwgaW5kZXgpIHtcbiAgICBpZiAodGhpcy5jaGVja2JveEdyb3VwVmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5jaGVja2JveEdyb3VwVmFsdWVzID0gbmV3IEFycmF5KHRoaXMuY29udHJvbFsnY29udHJvbHMnXS5sZW5ndGgpLmZpbGwobnVsbCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2hlY2tib3hHcm91cFZhbHVlc1tpbmRleF0gPT09IG51bGwpIHtcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IHRoaXMuc2NoZW1hLmVudW1baW5kZXhdO1xuICAgICAgdGhpcy5jaGVja2JveEdyb3VwVmFsdWVzW2luZGV4XSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGVja2JveEdyb3VwVmFsdWVzW2luZGV4XSA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHRoaXMuY2hlY2tib3hHcm91cFZhbHVlcyk7XG4gIH1cblxuICBnZXRJZChpLCB2YWwpIHtcbiAgICByZXR1cm4gYCR7aX0tJHt2YWwucmVwbGFjZSgvW1xcV19dKy9nLCAnJyl9KyR7dGhpcy5yYW5kb21TdWZmaXh9YDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxsYWJlbCBbYXR0ci5jbGFzc109XCJzY2hlbWEua2V5XCIgW25nQ2xhc3NdPVwie3JlcXVpcmVkOiBpc1JlcXVpcmVkKCl9XCI+XG4gICAgICB7e3RpdGxlKCl9fTxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+XG4gICAgPC9sYWJlbD5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIFthdHRyLmNsYXNzXT1cIidpbmZvJ1wiIFthdHRyLnRpdGxlXT1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCI+SW5mbzwvYnV0dG9uPlxuICAgIDxzZWxlY3RcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgIG11bHRpcGxlPVwibXVsdGlwbGVcIlxuICAgID5cbiAgICAgIDxvcHRpb25cbiAgICAgICAgKm5nRm9yPVwibGV0IGVuIG9mIHNjaGVtYS5lbnVtOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgW3NlbGVjdGVkXT1cImNvbnRyb2wudmFsdWUgPT09IGVuXCJcbiAgICAgICAgW25nVmFsdWVdPVwiZW5cIj5cbiAgICAgICAge3tlbnVtTmFtZXMoaSl9fVxuICAgICAgPC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlzZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICBlbnVtTmFtZXMoaW5kZXgpIHtcbiAgICByZXR1cm4gdHlwZW9mKHRoaXMuc2NoZW1hLmVudW1OYW1lcykgPT09ICd1bmRlZmluZWQnXG4gICAgICA/IHRoaXMuc2NoZW1hLmVudW1baW5kZXhdXG4gICAgICA6IHRoaXMuc2NoZW1hLmVudW1OYW1lc1tpbmRleF07XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8bGFiZWxcbiAgICAgIFtuZ0NsYXNzXT1cIlsnamYtbGFiZWwnLCBzY2hlbWEua2V5LCAoaXNSZXF1aXJlZCgpID8gJ3JlcXVpcmVkJyA6ICcnKV1cIj5cbiAgICAgIHt7dGl0bGUoKX19PHN1cCAqbmdJZj1cImlzUmVxdWlyZWQoKVwiPio8L3N1cD5cbiAgICA8L2xhYmVsPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwidGhpcy5zY2hlbWEuZGVzY3JpcHRpb25cIiBbYXR0ci5jbGFzc109XCInaW5mbydcIiBbYXR0ci50aXRsZV09XCJ0aGlzLnNjaGVtYS5kZXNjcmlwdGlvblwiPkluZm88L2J1dHRvbj5cbiAgICA8dGV4dGFyZWFcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgICBbYXR0ci5taW5MZW5ndGhdPVwic2NoZW1hLm1pbkxlbmd0aCB8fCBudWxsXCJcbiAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyKClcIlxuICAgID48L3RleHRhcmVhPlxuICAgIDxqZi1lcnJvciBbY29udHJvbF09XCJjb250cm9sXCI+PC9qZi1lcnJvcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYUNvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIHJhbmRvbVN1ZmZpeCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcblxuICBnZXRJZChpLCB2YWwpIHtcbiAgICByZXR1cm4gYCR7aX0tJHt2YWwudG9TdHJpbmcoKS5yZXBsYWNlKC9bXFxXX10rL2csICcnKX0rJHt0aGlzLnJhbmRvbVN1ZmZpeH1gO1xuICB9XG5cbiAgZ2V0TmFtZShrZXkpIHtcbiAgICByZXR1cm4gYCR7a2V5fS0ke3RoaXMucmFuZG9tU3VmZml4fWA7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QtY29udGFpbmVyXCI+XG4gICAgICA8bGFiZWxcbiAgICAgICAgW25nQ2xhc3NdPVwiWydqZi1sYWJlbCcsIHNjaGVtYS5rZXksIChpc1JlcXVpcmVkKCkgPyAncmVxdWlyZWQnIDogJycpXVwiPlxuICAgICAgICB7e3RpdGxlKCl9fTxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJ0aGlzLnNjaGVtYS5kZXNjcmlwdGlvblwiIFthdHRyLmNsYXNzXT1cIidpbmZvJ1wiIFthdHRyLnRpdGxlXT1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCI+SW5mbzwvYnV0dG9uPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgW3NlbGVjdGVkXT1cImNvbnRyb2wudmFsdWUgPT09ICcnXCIgW2Rpc2FibGVkXT1cInRydWVcIj5cbiAgICAgICAgICB7e2VtcHR5T3B0aW9uKCl9fVxuICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvblxuICAgICAgICAgICpuZ0Zvcj1cImxldCBlbiBvZiB0aGlzLnNjaGVtYS5lbnVtOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgICBbc2VsZWN0ZWRdPVwiY29udHJvbC52YWx1ZSA9PT0gZW5cIlxuICAgICAgICAgIFtuZ1ZhbHVlXT1cImVuXCI+XG4gICAgICAgICAge3tlbnVtTmFtZXMoaSl9fVxuICAgICAgICA8L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICAgIDxqZi1lcnJvciBbY29udHJvbF09XCJjb250cm9sXCI+PC9qZi1lcnJvcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICBlbXB0eU9wdGlvbigpIHtcbiAgICByZXR1cm4gc3VwZXIudGl0bGUoKS5yZXBsYWNlKC9bXkEtWjAtOV0rJC9pZywgJycpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbY2xhc3NdPVwiZ2V0Q2xhc3MoJ2NoZWNrYm94LWdyb3VwJylcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveC1jb250YWluZXJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgW2lkXT1cInNjaGVtYS5rZXlcIlxuICAgICAgICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgW2F0dHIuZm9yXT1cInNjaGVtYS5rZXlcIiBbYXR0ci5jbGFzc109XCJzY2hlbWEua2V5XCIgW25nQ2xhc3NdPVwie3JlcXVpcmVkOiBpc1JlcXVpcmVkKCl9XCI+XG4gICAgICAgICAge3t0aXRsZSgpfX08c3VwICpuZ0lmPVwiaXNSZXF1aXJlZCgpXCI+Kjwvc3VwPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L2pmLWVycm9yPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEJvb2xlYW5Db21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge31cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8bGFiZWwgW25nQ2xhc3NdPVwiWydqZi1sYWJlbCcsIHNjaGVtYS5rZXksIChpc1JlcXVpcmVkKCkgPyAncmVxdWlyZWQnIDogJycpXVwiICpuZ0lmPVwidHlwZSgpICE9PSAnaGlkZGVuJ1wiPlxuICAgICAge3t0aXRsZSgpfX08c3VwICpuZ0lmPVwiaXNSZXF1aXJlZCgpXCI+Kjwvc3VwPlxuICAgIDwvbGFiZWw+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJ0aGlzLnNjaGVtYS5kZXNjcmlwdGlvblwiIFthdHRyLmNsYXNzXT1cIidpbmZvJ1wiIFthdHRyLnRpdGxlXT1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCI+SW5mbzwvYnV0dG9uPlxuICAgIDxpbnB1dFxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgW25hbWVdPVwic2NoZW1hLmtleVwiXG4gICAgICBbYXR0ci50eXBlXT1cIidudW1iZXInXCJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyKClcIlxuICAgIC8+XG4gICAgPGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L2pmLWVycm9yPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlckNvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7IH1cbiIsImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxsYWJlbCBbYXR0ci5jbGFzc109XCJzY2hlbWEua2V5XCIgW25nQ2xhc3NdPVwie3JlcXVpcmVkOiBpc1JlcXVpcmVkKCl9XCI+XG4gICAgICB7e3RpdGxlKCl9fTxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+XG4gICAgPC9sYWJlbD5cbiAgICA8ZGl2ICpuZ0lmPVwicHJldmlld1NyY0V4aXN0cygpXCIgY2xhc3M9XCJwaG90by1wcmV2aWV3XCI+XG4gICAgICA8aW1nIFthdHRyLnNyY109XCJwaG90b0RhdGFcIiAvPlxuICAgICAgPHNwYW4gaHJlZj1cIiNcIiBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIiAoY2xpY2spPVwiY2xlYXJQaG90bygpXCI+XG4gICAgICAgIDxpIGNsYXNzPVwibGEgbGEtY2xvc2VcIj48L2k+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dFxuICAgICAgICAqbmdJZj1cIiFwcmV2aWV3U3JjRXhpc3RzKClcIlxuICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBbbmFtZV09XCJzY2hlbWEua2V5XCIgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIiAvPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFBob3RvQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHtcbiAgcHVibGljIHBob3RvRGF0YTogc3RyaW5nO1xuXG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvY2Vzc0ZpbGUocmVhZGVyLnJlc3VsdCwgZmlsZS50eXBlKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMucGhvdG9EYXRhID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh0aGlzLnBob3RvRGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgcmVhZGluZyB0aGUgZmlsZSEnKTtcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZihmaWxlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH1cbiAgfVxuXG4gIHByZXZpZXdTcmNFeGlzdHMoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiAodGhpcy5waG90b0RhdGEpID09PSAnc3RyaW5nJztcbiAgfVxuXG4gIGNsZWFyUGhvdG8oKSB7XG4gICAgdGhpcy5waG90b0RhdGEgPSBudWxsO1xuICAgIHRoaXMuY29udHJvbC5yZXNldCgpO1xuICB9XG5cbiAgcHJvY2Vzc0ZpbGUoZGF0YVVSTCwgZmlsZVR5cGUpIHtcbiAgICBjb25zdCBtYXhXaWR0aCA9IDgwMDtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSA4MDA7XG5cbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IGRhdGFVUkw7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB3aWR0aCA9IGltYWdlLndpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IHNob3VsZFJlc2l6ZSA9ICh3aWR0aCA+IG1heFdpZHRoKSB8fCAoaGVpZ2h0ID4gbWF4SGVpZ2h0KTtcblxuICAgICAgICBpZiAoIXNob3VsZFJlc2l6ZSkge1xuICAgICAgICAgIHJlc29sdmUoZGF0YVVSTCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmV3V2lkdGg7XG4gICAgICAgIGxldCBuZXdIZWlnaHQ7XG5cbiAgICAgICAgaWYgKHdpZHRoID4gaGVpZ2h0KSB7XG4gICAgICAgICAgbmV3SGVpZ2h0ID0gaGVpZ2h0ICogKG1heFdpZHRoIC8gd2lkdGgpO1xuICAgICAgICAgIG5ld1dpZHRoID0gbWF4V2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3V2lkdGggPSB3aWR0aCAqIChtYXhIZWlnaHQgLyBoZWlnaHQpO1xuICAgICAgICAgIG5ld0hlaWdodCA9IG1heEhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBjYW52YXMud2lkdGggPSBuZXdXaWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IG5ld0hlaWdodDtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgbmV3V2lkdGgsIG5ld0hlaWdodCk7XG5cbiAgICAgICAgcmVzb2x2ZShjYW52YXMudG9EYXRhVVJMKGZpbGVUeXBlKSk7XG4gICAgICB9O1xuXG4gICAgICBpbWFnZS5vbmVycm9yID0gKGVycikgPT4gcmVqZWN0KGVycik7XG4gICAgfSk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxsYWJlbFxuICAgICAgW25nQ2xhc3NdPVwiWydtYXJnaW4tYm90dG9tLS1oYWxmJywgJ2pmLWxhYmVsJywgc2NoZW1hLmtleSwgKGlzUmVxdWlyZWQoKSA/ICdyZXF1aXJlZCcgOiAnJyldXCI+XG4gICAgICB7e3RpdGxlKCl9fTxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+PC9sYWJlbD5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCIgW2F0dHIuY2xhc3NdPVwiJ2luZm8nXCIgW2F0dHIudGl0bGVdPVwidGhpcy5zY2hlbWEuZGVzY3JpcHRpb25cIj5JbmZvPC9idXR0b24+XG4gICAgPGRpdiBbY2xhc3NdPVwiZ2V0Q2xhc3MoJ3JhZGlvLWdyb3VwJylcIj5cbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGVudW0gb2YgdGhpcy5zY2hlbWEuZW51bTsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgIFtuZ0NsYXNzXT1cInsncmFkaW8tY29udGFpbmVyJzogdHJ1ZSwgJ2NoZWNrZWQnOiBjb250cm9sLnZhbHVlID09PSBlbnVtfVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgIFthdHRyLmlkXT1cImdldElkKGksIGVudW0pXCJcbiAgICAgICAgICBbY2hlY2tlZF09XCJjb250cm9sLnZhbHVlID09PSBlbnVtXCJcbiAgICAgICAgICBbbmFtZV09XCJnZXROYW1lKHNjaGVtYS5rZXkpXCJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiXG4gICAgICAgICAgW3ZhbHVlXT1cImVudW1cIiAvPlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBbYXR0ci5mb3JdPVwiZ2V0SWQoaSwgZW51bSlcIlxuICAgICAgICAgIFthdHRyLmNsYXNzXT1cInNjaGVtYS5rZXlcIj5cbiAgICAgICAgICAge3tlbnVtTmFtZXMoaSl9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L2pmLWVycm9yPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvZ3JvdXBDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICByYW5kb21TdWZmaXggPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XG5cbiAgZ2V0SWQoaSwgdmFsKSB7XG4gICAgICByZXR1cm4gYCR7aX0tJHt2YWwudG9TdHJpbmcoKS5yZXBsYWNlKC9bXFxXX10rL2csICcnKX0rJHt0aGlzLnJhbmRvbVN1ZmZpeH1gO1xuICB9XG5cbiAgZ2V0TmFtZShrZXkpIHtcbiAgICByZXR1cm4gYCR7a2V5fS0ke3RoaXMucmFuZG9tU3VmZml4fWA7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8bGFiZWxcbiAgICAgIFtuZ0NsYXNzXT1cIlsnamYtbGFiZWwnLCBzY2hlbWEua2V5LCAoaXNSZXF1aXJlZCgpID8gJ3JlcXVpcmVkJyA6ICcnKV1cIiAqbmdJZj1cInR5cGUoKSAhPT0gJ2hpZGRlbidcIj5cbiAgICAgIHt7dGl0bGUoKX19PHN1cCAqbmdJZj1cImlzUmVxdWlyZWQoKVwiPio8L3N1cD5cbiAgICA8L2xhYmVsPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwidGhpcy5zY2hlbWEuZGVzY3JpcHRpb25cIiBbYXR0ci5jbGFzc109XCInaW5mbydcIiBbYXR0ci50aXRsZV09XCJ0aGlzLnNjaGVtYS5kZXNjcmlwdGlvblwiPkluZm88L2J1dHRvbj5cbiAgICA8aW5wdXRcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxuICAgICAgW2F0dHIudHlwZV09XCJ0eXBlKClcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgICBbYXR0ci5taW5MZW5ndGhdPVwic2NoZW1hLm1pbkxlbmd0aCB8fCBudWxsXCJcbiAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyKClcIlxuICAgICAgW3RleHRNYXNrXT1cInsgbWFzazogZ2V0TWFzaygpIH1cIlxuICAgIC8+XG4gICAgPGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L2pmLWVycm9yPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFN0cmluZ0NvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8bGFiZWwgW25nQ2xhc3NdPVwiWydqZi1sYWJlbCcsIHNjaGVtYS5rZXksIChpc1JlcXVpcmVkKCkgPyAncmVxdWlyZWQnIDogJycpXVwiPlxuICAgICAge3t0aXRsZSgpfX08c3VwICpuZ0lmPVwiaXNSZXF1aXJlZCgpXCI+Kjwvc3VwPlxuICAgIDwvbGFiZWw+XG4gICAgPGlucHV0XG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICBbbmFtZV09XCJzY2hlbWEua2V5XCJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlcigpXCJcbiAgICAgIFtic0NvbmZpZ109XCJ7IGNvbnRhaW5lckNsYXNzOiAndGhlbWUtZGVmYXVsdCcsIGRhdGVJbnB1dEZvcm1hdDogJ01NL0REL1lZWVknIH1cIlxuICAgICAgYnNEYXRlcGlja2VyXG4gICAgLz5cbiAgICA8amYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvamYtZXJyb3I+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZUNvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7fVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamYtYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uXG4gICAgICAqbmdJZj1cImlzVmlzaWJsZVwiXG4gICAgICBbdHlwZV09XCJ0eXBlXCJcbiAgICAgIFtuZ0NsYXNzXT1cImNsYXNzXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAoY2xpY2spPVwiaGFuZGxlQ2xpY2soJGV2ZW50KVwiPlxuICAgICAge3tsYWJlbH19XG4gICAgPC9idXR0b24+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaXNWaXNpYmxlO1xuICBASW5wdXQoKSB0eXBlO1xuICBASW5wdXQoKSBjbGFzcztcbiAgQElucHV0KCkgaXNXb3JraW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZDtcbiAgQElucHV0KCkgc3VibWl0O1xuICBASW5wdXQoKSBsYWJlbDtcbiAgQElucHV0KCkgY29sb3IgPSAnJztcbiAgQE91dHB1dCgpIGhhbmRsZUJ1dHRvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5oYW5kbGVCdXR0b25DbGljay5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgY3JlYXRlTnVtYmVyTWFzayBmcm9tICd0ZXh0LW1hc2stYWRkb25zL2Rpc3QvY3JlYXRlTnVtYmVyTWFzayc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxsYWJlbCBbbmdDbGFzc109XCJbJ2pmLWxhYmVsJywgc2NoZW1hLmtleSwgKGlzUmVxdWlyZWQoKSA/ICdyZXF1aXJlZCcgOiAnJyldXCI+XG4gICAgICB7e3RpdGxlKCl9fTxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+XG4gICAgPC9sYWJlbD5cbiAgICA8aW5wdXRcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxuICAgICAgW2F0dHIudHlwZV09XCIndGV4dCdcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyKClcIlxuICAgICAgW3RleHRNYXNrXT1cInsgbWFzazogbnVtYmVyTWFza31cIlxuICAgICAgKGlucHV0KT1jbGVhbk1hc2soJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAvPlxuICAgIDxqZi1lcnJvciBbY29udHJvbF09XCJjb250cm9sXCI+PC9qZi1lcnJvcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBNb25leUNvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIG51bWJlck1hc2sgPSBjcmVhdGVOdW1iZXJNYXNrKHsgYWxsb3dEZWNpbWFsOiBmYWxzZSwgcHJlZml4OiAnJyB9KTtcblxuICBjbGVhbk1hc2sodmFsdWUpIHtcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUucmVwbGFjZSgvXFxEL2csICcnKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEpzb25Gb3JtRmllbGRzU2VydmljZSB9IGZyb20gJy4uL2pzb24tZm9ybS1maWVsZHMuc2VydmljZSc7XG5pbXBvcnQgeyBDaGVja2JveGdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2NoZWNrYm94Z3JvdXAvY2hlY2tib3hncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXVsdGlzZWxlY3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRhcmVhQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQm9vbGVhbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9ib29sZWFuL2Jvb2xlYW4uY29tcG9uZW50JztcbmltcG9ydCB7IE51bWJlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9udW1iZXIvbnVtYmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaG90b0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9waG90by9waG90by5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmFkaW9ncm91cENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9yYWRpb2dyb3VwL3JhZGlvZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cmluZ0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2RhdGUvZGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IE1vbmV5Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL21vbmV5L21vbmV5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPYmplY3RDb21wb25lbnQgfSBmcm9tICcuLi9zaGFyZWQvY29tcG9uZW50cy9vYmplY3Qvb2JqZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcnJheUNvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9jb21wb25lbnRzL2FycmF5L2FycmF5LmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKc29uRm9ybUJvb3RzdHJhcDQgZXh0ZW5kcyBKc29uRm9ybUZpZWxkc1NlcnZpY2Uge1xuICBmaWVsZFR5cGVzID0ge1xuICAgIHN0cmluZzogU3RyaW5nQ29tcG9uZW50LFxuICAgIHNlbGVjdDogU2VsZWN0Q29tcG9uZW50LFxuICAgIG51bWJlcjogTnVtYmVyQ29tcG9uZW50LFxuICAgIGJvb2xlYW46IEJvb2xlYW5Db21wb25lbnQsXG4gICAgcGhvdG86IFBob3RvQ29tcG9uZW50LFxuICAgIHRleHRhcmVhOiBUZXh0YXJlYUNvbXBvbmVudCxcbiAgICBvYmplY3Q6IE9iamVjdENvbXBvbmVudCxcbiAgICBhcnJheTogQXJyYXlDb21wb25lbnQsXG4gICAgZGF0ZTogRGF0ZUNvbXBvbmVudCxcbiAgICByYWRpb2dyb3VwOiBSYWRpb2dyb3VwQ29tcG9uZW50LFxuICAgIGNoZWNrYm94Z3JvdXA6IENoZWNrYm94Z3JvdXBDb21wb25lbnQsXG4gICAgbXVsdGlzZWxlY3Q6IE11bHRpc2VsZWN0Q29tcG9uZW50LFxuICAgIG1vbmV5OiBNb25leUNvbXBvbmVudCxcbiAgICBidXR0b246IEJ1dHRvbkNvbXBvbmVudFxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUdyb3VwIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL3NjaGVtYS1mb3JtLWdyb3VwJztcbmltcG9ydCB7IFNjaGVtYSB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdqZi1jb21wb25lbnQtY2hvb3NlciwgW2pmLWNvbXBvbmVudC1jaG9vc2VyXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGgyICpuZ0lmPVwic2NoZW1hICYmIHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgndGl0bGUnKSAmJiAhbmVzdGVkXCI+XG4gICAgICB7e3NjaGVtYS50aXRsZX19XG4gICAgPC9oMj5cbiAgICA8aDQgKm5nSWY9XCJzY2hlbWEgJiYgc2NoZW1hLmhhc093blByb3BlcnR5KCd0aXRsZScpICYmIG5lc3RlZFwiPlxuICAgICAge3tzY2hlbWEudGl0bGV9fVxuICAgIDwvaDQ+XG4gICAgPGRpdiBbbmdDbGFzc109XCJbJ2Zvcm0tY29udGFpbmVyJ11cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiICpuZ0lmPVwic2NoZW1hICYmIHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnZGVzY3JpcHRpb24nKVwiIFtpbm5lckhUTUxdPVwic2NoZW1hLmRlc2NyaXB0aW9uXCI+PC9kaXY+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjb250cm9sIG9mIGtleXMoZm9ybS5jb250cm9scylcIiBqZi1maWVsZCBbY29udHJvbF09XCJmb3JtLmdldChjb250cm9sKVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENob29zZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBmb3JtOiBTY2hlbWFGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIHNjaGVtYTogU2NoZW1hO1xuICBASW5wdXQoKSBuZXN0ZWQgPSBmYWxzZTtcbiAga2V5cyA9IE9iamVjdC5rZXlzO1xufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNjaGVtYUZvcm1Db250cm9sIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL3NjaGVtYS1mb3JtLWNvbnRyb2wnO1xuaW1wb3J0IHtKc29uRm9ybUZpZWxkc1NlcnZpY2V9IGZyb20gJy4uLy4uLy4uL2pzb24tZm9ybS1maWVsZHMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pmLWZpZWxkLCBbamYtZmllbGRdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRhaW5lciAjY29udGFpbmVyPjwvbmctY29udGFpbmVyPlxuICBgXG59KVxuXG5leHBvcnQgY2xhc3MgRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSkgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuICBASW5wdXQoKSBjb250cm9sOiBTY2hlbWFGb3JtQ29udHJvbDtcbiAgcHVibGljIHBhdHRlcm5zO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBqc29uRm9ybUZpZWxkc1NlcnZpY2U6IEpzb25Gb3JtRmllbGRzU2VydmljZSxcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5wYXR0ZXJucyA9IHt9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nZW5lcmF0ZUZpZWxkKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5nZW5lcmF0ZUZpZWxkKCk7XG4gIH1cblxuICBnZW5lcmF0ZUZpZWxkKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmNsZWFyKCk7XG4gICAgdGhpcy5qc29uRm9ybUZpZWxkc1NlcnZpY2VbMF0uc2V0Um9vdFZpZXdDb250YWluZXJSZWYodGhpcy5jb250YWluZXIpO1xuICAgIHRoaXMuanNvbkZvcm1GaWVsZHNTZXJ2aWNlWzBdLmFkZER5bmFtaWNDb21wb25lbnQodGhpcy5jb250cm9sKTtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gYGZpZWxkIG1hcmdpbi1ib3R0b20gJHt0aGlzLmdldENsYXNzKCl9IGZvcm0tZ3JvdXBgO1xuICB9XG5cbiAgZ2V0Q2xhc3MoZGVmYXVsdENsYXNzID0gJycpIHtcbiAgICBjb25zdCBmaWVsZENsYXNzID0gW2RlZmF1bHRDbGFzc107XG4gICAgZmllbGRDbGFzcy5wdXNoKHRoaXMuY29udHJvbC5zY2hlbWEudHlwZSk7XG4gICAgZmllbGRDbGFzcy5wdXNoKHRoaXMuY29udHJvbC5zY2hlbWEua2V5KTtcblxuICAgIGlmICh0aGlzLmNvbnRyb2wuc2NoZW1hLmhhc093blByb3BlcnR5KCdkZXNjcmlwdGlvbicpKSB7XG4gICAgICBmaWVsZENsYXNzLnB1c2goJ2hhcy1pbmZvJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29udHJvbC5zY2hlbWEuaGFzT3duUHJvcGVydHkoJ2Zvcm1hdCcpKSB7XG4gICAgICBmaWVsZENsYXNzLnB1c2godGhpcy5jb250cm9sLnNjaGVtYS5mb3JtYXQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnRyb2wuc3R5bGUgJiYgdGhpcy5jb250cm9sLnN0eWxlLmRlZmF1bHQgJiYgWydyYWRpb2dyb3VwJywgJ2NoZWNrYm94Z3JvdXAnXS5pbmRleE9mKHRoaXMuY29udHJvbC5zY2hlbWEuZm9ybWF0KSA9PT0gLTEpIHtcbiAgICAgIGZpZWxkQ2xhc3MucHVzaCh0aGlzLmNvbnRyb2wuc3R5bGUuZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpZWxkQ2xhc3MuZmlsdGVyKChkKSA9PiBkKS5qb2luKCcgJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtKc29uRm9ybUZpZWxkc1NlcnZpY2V9IGZyb20gJy4uLy4uLy4uL2pzb24tZm9ybS1maWVsZHMuc2VydmljZSc7XG5pbXBvcnQge0J1dHRvbkNvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamYtZm9ybS1idXR0b24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgI2J1dHRvbj48L25nLWNvbnRhaW5lcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaXNGb3JtVmFsaWQgPSB0cnVlO1xuICBASW5wdXQoKSBsYWJlbCA9ICcnO1xuICBASW5wdXQoKSBpc011bHRpU3RlcCA9IGZhbHNlO1xuICBASW5wdXQoKSBzdGVwcyA9IFtdO1xuICBASW5wdXQoKSBzdWJtaXQgPSAnJztcbiAgQElucHV0KCkgY29udGludWUgPSAnJztcbiAgQElucHV0KCkgY2FuY2VsID0gJyc7XG4gIEBJbnB1dCgpIHN1Ym1pdENsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNhbmNlbENsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlzV29ya2luZyA9IGZhbHNlO1xuICBAT3V0cHV0KCkgaGFuZGxlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBWaWV3Q2hpbGQoJ2J1dHRvbicsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSkgYnV0dG9uOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBqc29uRm9ybUZpZWxkc1NlcnZpY2U6IEpzb25Gb3JtRmllbGRzU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5idXR0b24uY2xlYXIoKTtcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5qc29uRm9ybUZpZWxkc1NlcnZpY2VbMF0uZ2V0KCdidXR0b24nKSk7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5idXR0b24uY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuICAgICg8QnV0dG9uQ29tcG9uZW50PiBjb21wb25lbnRSZWYuaW5zdGFuY2UpLnR5cGUgPSB0aGlzLmdldFR5cGUoKTtcbiAgICAoPEJ1dHRvbkNvbXBvbmVudD4gY29tcG9uZW50UmVmLmluc3RhbmNlKS5pc1Zpc2libGUgPSB0aGlzLmlzVmlzaWJsZSgpO1xuICAgICg8QnV0dG9uQ29tcG9uZW50PiBjb21wb25lbnRSZWYuaW5zdGFuY2UpLmNsYXNzID0gdGhpcy5nZXRDbGFzcygpO1xuICAgICg8QnV0dG9uQ29tcG9uZW50PiBjb21wb25lbnRSZWYuaW5zdGFuY2UpLmRpc2FibGVkID0gdGhpcy5pc1dvcmtpbmc7XG4gICAgKDxCdXR0b25Db21wb25lbnQ+IGNvbXBvbmVudFJlZi5pbnN0YW5jZSkuaXNXb3JraW5nID0gdGhpcy5pc1dvcmtpbmc7XG4gICAgKDxCdXR0b25Db21wb25lbnQ+IGNvbXBvbmVudFJlZi5pbnN0YW5jZSkubGFiZWwgPSB0aGlzLmdldExhYmVsKCk7XG4gICAgKDxCdXR0b25Db21wb25lbnQ+IGNvbXBvbmVudFJlZi5pbnN0YW5jZSkuaGFuZGxlQnV0dG9uQ2xpY2suc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY2FuY2VsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljay5lbWl0KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAoPEJ1dHRvbkNvbXBvbmVudD4gY29tcG9uZW50UmVmLmluc3RhbmNlKS5jb2xvciA9IHRoaXMuc3VibWl0ID8gJ3ByaW1hcnknIDogJyc7XG4gIH1cblxuICBnZXRDbGFzcygpIHtcbiAgICByZXR1cm4gKHRoaXMuY2FuY2VsLmxlbmd0aCA+IDApXG4gICAgICA/IFsnYnRuIGJ0bi1kZWZhdWx0IGJ1dHRvbicsIHRoaXMuY2FuY2VsQ2xhc3MgfHwgJyddXG4gICAgICA6IFsnYnRuIGJ0bi1wcmltYXJ5IGJ1dHRvbiBidXR0b24tLWFjY2VwdCcsIHRoaXMuc3VibWl0Q2xhc3MgfHwgJycsICh0aGlzLmlzRm9ybVZhbGlkID8gJ3ZhbGlkJyA6ICdpbnZhbGlkJyldO1xuICB9XG5cbiAgaXNWaXNpYmxlKCkge1xuICAgIGNvbnN0IHN0ZXAgPSB0aGlzLnN0ZXBzLmZpbmRJbmRleCgocykgPT4gcy52aXNpYmxlKTtcbiAgICBpZiAodGhpcy5pc011bHRpU3RlcCAmJiB0aGlzLmNhbmNlbC5sZW5ndGggPiAwICYmIHRoaXMuc3RlcHNbc3RlcF0pIHtcbiAgICAgIHJldHVybiB0aGlzLnN0ZXBzW3N0ZXBdLnR5cGUgIT09ICdmaXJzdCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXRMYWJlbCgpIHtcbiAgICBpZiAodGhpcy5pc011bHRpU3RlcCAmJiB0aGlzLmNhbmNlbC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzdGVwID0gdGhpcy5zdGVwcy5maW5kSW5kZXgoKHMpID0+IHMudmlzaWJsZSk7XG4gICAgICBpZiAodGhpcy5zdGVwc1tzdGVwXSAmJiB0aGlzLnN0ZXBzW3N0ZXBdLnR5cGUgIT09ICdmaXJzdCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FuY2VsO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5pc011bHRpU3RlcCkge1xuICAgICAgY29uc3Qgc3RlcCA9IHRoaXMuc3RlcHMuZmluZEluZGV4KChzKSA9PiBzLnZpc2libGUpO1xuICAgICAgaWYgKHRoaXMuc3RlcHNbc3RlcF0gJiYgdGhpcy5zdGVwc1tzdGVwXS50eXBlICE9PSAnbGFzdCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnN1Ym1pdDtcbiAgICB9IGVsc2UgIGlmICh0aGlzLmNhbmNlbC5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYW5jZWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3VibWl0O1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBpZiAodGhpcy5jYW5jZWwpIHtcbiAgICAgIHJldHVybiAnYnV0dG9uJztcbiAgICB9XG5cbiAgICByZXR1cm4gJ3N1Ym1pdCc7XG4gIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pmLWluZm8tYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YVxuICAgICAgW2F0dHIuaHJlZl09XCInamF2YXNjcmlwdDp2b2lkKDApJ1wiXG4gICAgICAqbmdJZj1cInRpdGxlXCJcbiAgICAgIFthdHRyLmNsYXNzXT1cIididG4gYnRuLWxpbmsgaW5mbydcIiBbYXR0ci50aXRsZV09XCJ0aXRsZVwiPkluZm88L2E+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgSW5mb0J1dHRvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHRpdGxlO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdqZi13b3JraW5nLXNwaW5uZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmcgKm5nSWY9XCJpc1dvcmtpbmdcIiB3aWR0aD1cIjM4XCIgaGVpZ2h0PVwiMzhcIiB2aWV3Qm94PVwiMCAwIDM4IDM4XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHN0cm9rZT1cIiNmZmZcIj5cbiAgICAgIDxnIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMSAxKVwiIHN0cm9rZS13aWR0aD1cIjJcIj5cbiAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS1vcGFjaXR5PVwiLjVcIiBjeD1cIjE4XCIgY3k9XCIxOFwiIHI9XCIxOFwiLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4XCI+XG4gICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybVxuICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCJcbiAgICAgICAgICAgICAgdHlwZT1cInJvdGF0ZVwiXG4gICAgICAgICAgICAgIGZyb209XCIwIDE4IDE4XCJcbiAgICAgICAgICAgICAgdG89XCIzNjAgMTggMThcIlxuICAgICAgICAgICAgICBkdXI9XCIxc1wiXG4gICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiLz5cbiAgICAgICAgICA8L3BhdGg+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBXb3JraW5nU3Bpbm5lckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGlzV29ya2luZyA9IGZhbHNlO1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDaG9vc2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Nob29zZXIvY2hvb3Nlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQvZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS1idXR0b24vZm9ybS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IEluZm9CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5mby1idXR0b24vaW5mby1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IFdvcmtpbmdTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3dvcmtpbmctc3Bpbm5lci93b3JraW5nLXNwaW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRhcmVhVmlld0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy90ZXh0YXJlYS90ZXh0YXJlYS52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSYWRpb2dyb3VwVmlld0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9yYWRpb2dyb3VwL3JhZGlvZ3JvdXAudmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0Vmlld0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9zZWxlY3Qvc2VsZWN0LnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2RhdGUvZGF0ZS52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb29sZWFuVmlld0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9ib29sZWFuL2Jvb2xlYW4udmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGhvdG9WaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3Bob3RvL3Bob3RvLnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cmluZ1ZpZXdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvc3RyaW5nL3N0cmluZy52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdW1iZXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL251bWJlci9udW1iZXIudmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tib3hncm91cFZpZXdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvY2hlY2tib3hncm91cC9jaGVja2JveGdyb3VwLnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE9iamVjdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vYmplY3Qvb2JqZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb25leVZpZXdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbW9uZXkvbW9uZXkudmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXVsdGlzZWxlY3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL211bHRpc2VsZWN0L211bHRpc2VsZWN0LnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEpzb25Gb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vanNvbi1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRleHRNYXNrTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdGV4dC1tYXNrJztcbmltcG9ydCB7IEFycmF5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FycmF5L2FycmF5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcnJheVZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXJyYXkvYXJyYXkudmlldy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFRleHRNYXNrTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgSnNvbkZvcm1Db21wb25lbnQsXG4gICAgQ29tbW9uQ29tcG9uZW50LFxuICAgIENob29zZXJDb21wb25lbnQsXG4gICAgRmllbGRDb21wb25lbnQsXG4gICAgRm9ybUJ1dHRvbkNvbXBvbmVudCxcbiAgICBJbmZvQnV0dG9uQ29tcG9uZW50LFxuICAgIFdvcmtpbmdTcGlubmVyQ29tcG9uZW50LFxuICAgIFN0cmluZ1ZpZXdDb21wb25lbnQsXG4gICAgU2VsZWN0Vmlld0NvbXBvbmVudCxcbiAgICBOdW1iZXJWaWV3Q29tcG9uZW50LFxuICAgIEJvb2xlYW5WaWV3Q29tcG9uZW50LFxuICAgIFBob3RvVmlld0NvbXBvbmVudCxcbiAgICBUZXh0YXJlYVZpZXdDb21wb25lbnQsXG4gICAgRGF0ZVZpZXdDb21wb25lbnQsXG4gICAgUmFkaW9ncm91cFZpZXdDb21wb25lbnQsXG4gICAgQ2hlY2tib3hncm91cFZpZXdDb21wb25lbnQsXG4gICAgTXVsdGlzZWxlY3RWaWV3Q29tcG9uZW50LFxuICAgIE1vbmV5Vmlld0NvbXBvbmVudCxcbiAgICBPYmplY3RDb21wb25lbnQsXG4gICAgQXJyYXlDb21wb25lbnQsXG4gICAgQXJyYXlWaWV3Q29tcG9uZW50XG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIEpzb25Gb3JtQ29tcG9uZW50LFxuICAgIENvbW1vbkNvbXBvbmVudCxcbiAgICBDaG9vc2VyQ29tcG9uZW50LFxuICAgIEZpZWxkQ29tcG9uZW50LFxuICAgIEZvcm1CdXR0b25Db21wb25lbnQsXG4gICAgSW5mb0J1dHRvbkNvbXBvbmVudCxcbiAgICBXb3JraW5nU3Bpbm5lckNvbXBvbmVudCxcbiAgICBTdHJpbmdWaWV3Q29tcG9uZW50LFxuICAgIFNlbGVjdFZpZXdDb21wb25lbnQsXG4gICAgTnVtYmVyVmlld0NvbXBvbmVudCxcbiAgICBCb29sZWFuVmlld0NvbXBvbmVudCxcbiAgICBQaG90b1ZpZXdDb21wb25lbnQsXG4gICAgVGV4dGFyZWFWaWV3Q29tcG9uZW50LFxuICAgIERhdGVWaWV3Q29tcG9uZW50LFxuICAgIFJhZGlvZ3JvdXBWaWV3Q29tcG9uZW50LFxuICAgIENoZWNrYm94Z3JvdXBWaWV3Q29tcG9uZW50LFxuICAgIE11bHRpc2VsZWN0Vmlld0NvbXBvbmVudCxcbiAgICBNb25leVZpZXdDb21wb25lbnQsXG4gICAgT2JqZWN0Q29tcG9uZW50LFxuICAgIEFycmF5Q29tcG9uZW50LFxuICAgIEFycmF5Vmlld0NvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ2hvb3NlckNvbXBvbmVudCxcbiAgICBGaWVsZENvbXBvbmVudCxcbiAgICBGb3JtQnV0dG9uQ29tcG9uZW50LFxuICAgIEluZm9CdXR0b25Db21wb25lbnQsXG4gICAgV29ya2luZ1NwaW5uZXJDb21wb25lbnQsXG4gICAgSnNvbkZvcm1Db21wb25lbnQsXG4gICAgQ29tbW9uQ29tcG9uZW50LFxuICAgIEFycmF5Q29tcG9uZW50LFxuICAgIE9iamVjdENvbXBvbmVudFxuICBdXG59KVxuXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSnNvbkZvcm1Db21wb25lbnQgfSBmcm9tICcuL2pzb24tZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSnNvbkZvcm1EZWZhdWx0c1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RlZmF1bHRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgSnNvbkZvcm1WYWxpZGF0b3JzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdmFsaWRhdG9ycy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4vZmllbGRzL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcbmltcG9ydCB7IEpzb25Gb3JtQm9vdHN0cmFwNCB9IGZyb20gJy4vZnJhbWV3b3JrL2Jvb3RzdHJhcDQvanNvbi1mb3JtLWJvb3RzdHJhcDQnO1xuaW1wb3J0IHsgSnNvbkZvcm1GaWVsZHNTZXJ2aWNlIH0gZnJvbSAnLi9mcmFtZXdvcmsvanNvbi1mb3JtLWZpZWxkcy5zZXJ2aWNlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vZnJhbWV3b3JrL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgU2hhcmVkTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb21tb25Db21wb25lbnQsXG4gICAgSnNvbkZvcm1Db21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgSnNvbkZvcm1Db21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEpzb25Gb3JtRGVmYXVsdHNTZXJ2aWNlLFxuICAgIEpzb25Gb3JtVmFsaWRhdG9yc1NlcnZpY2VcbiAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEpzb25Gb3JtTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoLi4uZnJhbWV3b3Jrcyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIGNvbnN0IGxvYWRGcmFtZXdvcmsgPSBmcmFtZXdvcmtzLmxlbmd0aFxuICAgICAgPyBmcmFtZXdvcmtzLm1hcChmcmFtZXdvcmsgPT4gZnJhbWV3b3JrLmZvclJvb3QoKS5wcm92aWRlcnNbMF0pXG4gICAgICA6IFt7IHByb3ZpZGU6IEpzb25Gb3JtRmllbGRzU2VydmljZSwgdXNlQ2xhc3M6IEpzb25Gb3JtQm9vdHN0cmFwNCwgbXVsdGk6IHRydWUgfV07XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEpzb25Gb3JtTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEpzb25Gb3JtRGVmYXVsdHNTZXJ2aWNlLFxuICAgICAgICBKc29uRm9ybVZhbGlkYXRvcnNTZXJ2aWNlLFxuICAgICAgICAuLi5sb2FkRnJhbWV3b3JrXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdqZi1lcnJvciwgW2pmLWVycm9yXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAqbmdJZj1cImNvbnRyb2wuaW52YWxpZCAmJiAoY29udHJvbC5kaXJ0eSB8fCBjb250cm9sLnRvdWNoZWQpXCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ3JlcXVpcmVkJ11cIj5cbiAgICAgICAgVGhpcyBmaWVsZCBpcyByZXF1aXJlZC5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzWydwYXR0ZXJuJ11cIj5cbiAgICAgICAgSW5wdXQgdmFsdWUgaXMgaW52YWxpZC5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzWydtaW5sZW5ndGgnXVwiPlxuICAgICAgICBJbnB1dCBoYXMgdG8gYmUgYSBtaW5pbXVtIG9mIHt7Y29udHJvbC5lcnJvcnNbJ21pbmxlbmd0aCddWydyZXF1aXJlZExlbmd0aCddfX0gY2hhcmFjdGVycy5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzWydtYXhsZW5ndGgnXVwiPlxuICAgICAgICBJbnB1dCBjYW4gY29udGFpbiBhIG1heGltdW0gb2Yge3tjb250cm9sLmVycm9yc1snbWF4bGVuZ3RoJ11bJ3JlcXVpcmVkTGVuZ3RoJ119fSBjaGFyYWN0ZXJzLlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ21pbiddXCI+XG4gICAgICAgIEVudGVyIGEgdmFsdWUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHt7Y29udHJvbC5lcnJvcnNbJ21pbiddWydtaW4nXX19LlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ21heCddXCI+XG4gICAgICAgIEVudGVyIGEgdmFsdWUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHt7Y29udHJvbC5lcnJvcnNbJ21heCddWydtYXgnXX19LlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ2N1c3RvbUVycm9yJ11cIj5cbiAgICAgICAge3tjb250cm9sLmVycm9yc1snY3VzdG9tRXJyb3InXX19XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBFcnJvckNvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNvbnRyb2w7XG59XG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdHJpbmdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvc3RyaW5nL3N0cmluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dE1hc2tNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi10ZXh0LW1hc2snO1xuaW1wb3J0IHsgSnNvbkZvcm1Cb290c3RyYXA0IH0gZnJvbSAnLi9qc29uLWZvcm0tYm9vdHN0cmFwNCc7XG5pbXBvcnQgeyBKc29uRm9ybUZpZWxkc1NlcnZpY2UgfSBmcm9tICcuLi9qc29uLWZvcm0tZmllbGRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9kYXRlL2RhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb29sZWFuQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2Jvb2xlYW4vYm9vbGVhbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL251bWJlci9udW1iZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0YXJlYUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy90ZXh0YXJlYS90ZXh0YXJlYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IE1vbmV5Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL21vbmV5L21vbmV5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja2JveGdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2NoZWNrYm94Z3JvdXAvY2hlY2tib3hncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXVsdGlzZWxlY3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IFBob3RvQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3Bob3RvL3Bob3RvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSYWRpb2dyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3JhZGlvZ3JvdXAvcmFkaW9ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFRleHRNYXNrTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBCc0RhdGVwaWNrZXJNb2R1bGUuZm9yUm9vdCgpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFN0cmluZ0NvbXBvbmVudCxcbiAgICBTZWxlY3RDb21wb25lbnQsXG4gICAgRGF0ZUNvbXBvbmVudCxcbiAgICBUZXh0YXJlYUNvbXBvbmVudCxcbiAgICBFcnJvckNvbXBvbmVudCxcbiAgICBNb25leUNvbXBvbmVudCxcbiAgICBOdW1iZXJDb21wb25lbnQsXG4gICAgQm9vbGVhbkNvbXBvbmVudCxcbiAgICBCdXR0b25Db21wb25lbnQsXG4gICAgQ2hlY2tib3hncm91cENvbXBvbmVudCxcbiAgICBNdWx0aXNlbGVjdENvbXBvbmVudCxcbiAgICBQaG90b0NvbXBvbmVudCxcbiAgICBSYWRpb2dyb3VwQ29tcG9uZW50XG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIFN0cmluZ0NvbXBvbmVudCxcbiAgICBTZWxlY3RDb21wb25lbnQsXG4gICAgRGF0ZUNvbXBvbmVudCxcbiAgICBUZXh0YXJlYUNvbXBvbmVudCxcbiAgICBFcnJvckNvbXBvbmVudCxcbiAgICBNb25leUNvbXBvbmVudCxcbiAgICBOdW1iZXJDb21wb25lbnQsXG4gICAgQm9vbGVhbkNvbXBvbmVudCxcbiAgICBCdXR0b25Db21wb25lbnQsXG4gICAgQ2hlY2tib3hncm91cENvbXBvbmVudCxcbiAgICBNdWx0aXNlbGVjdENvbXBvbmVudCxcbiAgICBQaG90b0NvbXBvbmVudCxcbiAgICBSYWRpb2dyb3VwQ29tcG9uZW50XG4gIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBKc29uRm9ybUJvb3RzdHJhcDRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEpzb25Gb3JtQm9vdHN0cmFwNE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogSnNvbkZvcm1GaWVsZHNTZXJ2aWNlLFxuICAgICAgICAgIHVzZUNsYXNzOiBKc29uRm9ybUJvb3RzdHJhcDQsXG4gICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBtYXRJbnB1dFxuICAgICAgICBbbmFtZV09XCJzY2hlbWEua2V5XCJcbiAgICAgICAgW2F0dHIudHlwZV09XCJ0eXBlKClcIlxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiXG4gICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgICAgICBbYXR0ci5taW5MZW5ndGhdPVwic2NoZW1hLm1pbkxlbmd0aCB8fCBudWxsXCJcbiAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIoKVwiXG4gICAgICAgIFt0ZXh0TWFza109XCJ7IG1hc2s6IGdldE1hc2soKSB9XCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInRpdGxlKClcIlxuICAgICAgLz5cbiAgICAgIDxtYXQtZXJyb3IgamYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvbWF0LWVycm9yPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU3RyaW5nTWF0ZXJpYWxDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxuICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICAgICAgICBbYXR0ci5taW5MZW5ndGhdPVwic2NoZW1hLm1pbkxlbmd0aCB8fCBudWxsXCJcbiAgICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlcigpXCJcbiAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwidGl0bGUoKVwiPlxuICAgICAgPC90ZXh0YXJlYT5cbiAgICAgIDxtYXQtZXJyb3IgamYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvbWF0LWVycm9yPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgVGV4dGFyZWFNYXRlcmlhbENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcblxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1zZWxlY3RcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgIHBsYWNlaG9sZGVyPVwie3tlbXB0eU9wdGlvbigpfX1cIlxuICAgID5cbiAgICAgIDxtYXQtb3B0aW9uIFtkaXNhYmxlZF09XCJ0cnVlXCI+XG4gICAgICAgICAge3tlbXB0eU9wdGlvbigpfX1cbiAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBlbiBvZiB0aGlzLnNjaGVtYS5lbnVtOyBsZXQgaSA9IGluZGV4XCIgW3ZhbHVlXT1cImVuXCI+XG4gICAgICAgICAge3tlbnVtTmFtZXMoaSl9fVxuICAgICAgPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LXNlbGVjdD5cbiAgICA8bWF0LWVycm9yIGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L21hdC1lcnJvcj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdE1hdGVyaWFsQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHtcbiAgZW1wdHlPcHRpb24oKSB7XG4gICAgcmV0dXJuIHN1cGVyLnRpdGxlKCkucmVwbGFjZSgvW15BLVowLTkqXSskL2lnLCAnJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsIFthdHRyLmNsYXNzXT1cInNjaGVtYS5rZXlcIiBbbmdDbGFzc109XCJ7J21hcmdpbi1ib3R0b20tLWhhbGYnOiB0cnVlLCByZXF1aXJlZDogaXNSZXF1aXJlZCgpfVwiPlxuICAgICAgICB7e3RpdGxlKCl9fTxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+PC9sYWJlbD5cblxuICAgICAgPG1hdC1yYWRpby1ncm91cCBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiICpuZ0Zvcj1cImxldCBlbnVtIG9mIHRoaXMuc2NoZW1hLmVudW07IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b25cbiAgICAgICAgICBbY2hlY2tlZF09XCJjb250cm9sLnZhbHVlID09PSBlbnVtLnRvU3RyaW5nKClcIlxuICAgICAgICAgIFt2YWx1ZV09XCJlbnVtLnRvU3RyaW5nKClcIlxuICAgICAgICA+XG4gICAgICAgICAge3tlbnVtTmFtZXMoaSl9fVxuICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb2dyb3VwTWF0ZXJpYWxDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsIFthdHRyLmNsYXNzXT1cInNjaGVtYS5rZXlcIiBbbmdDbGFzc109XCJ7cmVxdWlyZWQ6IGlzUmVxdWlyZWQoKX1cIj5cbiAgICAgIHt7dGl0bGUoKX19PHN1cCAqbmdJZj1cImlzUmVxdWlyZWQoKVwiPio8L3N1cD5cbiAgICA8L2xhYmVsPlxuICAgIDxkaXYgKm5nSWY9XCJwcmV2aWV3U3JjRXhpc3RzKCk7IGVsc2UgYWRkSW1hZ2VcIiBjbGFzcz1cInBob3RvLXByZXZpZXdcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3M9XCJwaG90by1hZGRcIlxuICAgICAgICBtYXQtYnV0dG9uXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWltYWdlXT1cIm1ha2VUcnVzdGVkSW1hZ2UocGhvdG9EYXRhKVwiXG4gICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLXNpemVdPVwiJ2NvdmVyJ1wiXG4gICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLXJlcGVhdF09XCInbm8tcmVwZWF0J1wiXG4gICAgICAgIChjbGljayk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKTsgZmlsZUlucHV0LmNsaWNrKCk7XCJcbiAgICAgID5cbiAgICAgICAgPG1hdC1pY29uPmFkZF9hX3Bob3RvPC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzcz1cInBob3RvLXJlbW92ZVwiXG4gICAgICAgIG1hdC1taW5pLWZhYlxuICAgICAgICBjb2xvcj1cIndhcm5cIlxuICAgICAgICAoY2xpY2spPVwiY2xlYXJQaG90bygpXCJcbiAgICAgID5cbiAgICAgICAgPG1hdC1pY29uPmNsb3NlPC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxuZy10ZW1wbGF0ZSAjYWRkSW1hZ2U+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzPVwicGhvdG8tYWRkXCJcbiAgICAgICAgbWF0LWJ1dHRvblxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IGZpbGVJbnB1dC5jbGljaygpO1wiXG4gICAgICA+XG4gICAgICAgIDxtYXQtaWNvbj5hZGRfYV9waG90bzwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxpbnB1dCAjZmlsZUlucHV0IHR5cGU9XCJmaWxlXCIgW25hbWVdPVwic2NoZW1hLmtleVwiIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiLz5cbiAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIFtuYW1lXT1cInNjaGVtYS5rZXlcIiBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiIC8+XG4gICAgPGRpdiBjbGFzcz1cIm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyXCIgKm5nSWY9XCJlcnJvclwiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiPlxuICAgICAgPG1hdC1lcnJvciBjbGFzcz1cIm1hdC1lcnJvclwiPlBsZWFzZSB1cGxvYWQgYSB2YWxpZCBwaG90byBmb3JtYXQgKEpQRywgUE5HKTwvbWF0LWVycm9yPlxuICAgIDwvZGl2PlxuXG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgUGhvdG9NYXRlcmlhbENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIHBob3RvRGF0YTogc3RyaW5nO1xuICBlcnJvciA9IGZhbHNlO1xuXG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvY2Vzc0ZpbGUocmVhZGVyLnJlc3VsdCwgZmlsZS50eXBlKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnBob3RvRGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodGhpcy5waG90b0RhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZihmaWxlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH1cbiAgfVxuXG4gIHByZXZpZXdTcmNFeGlzdHMoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiAodGhpcy5waG90b0RhdGEpID09PSAnc3RyaW5nJztcbiAgfVxuXG4gIGNsZWFyUGhvdG8oKSB7XG4gICAgdGhpcy5waG90b0RhdGEgPSBudWxsO1xuICAgIHRoaXMuY29udHJvbC5yZXNldCgpO1xuICB9XG5cbiAgcHJvY2Vzc0ZpbGUoZGF0YVVSTCwgZmlsZVR5cGUpIHtcbiAgICBjb25zdCBtYXhXaWR0aCA9IDgwMDtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSA4MDA7XG5cbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IGRhdGFVUkw7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB3aWR0aCA9IGltYWdlLndpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IHNob3VsZFJlc2l6ZSA9ICh3aWR0aCA+IG1heFdpZHRoKSB8fCAoaGVpZ2h0ID4gbWF4SGVpZ2h0KTtcblxuICAgICAgICBpZiAoIXNob3VsZFJlc2l6ZSkge1xuICAgICAgICAgIHJlc29sdmUoZGF0YVVSTCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmV3V2lkdGg7XG4gICAgICAgIGxldCBuZXdIZWlnaHQ7XG5cbiAgICAgICAgaWYgKHdpZHRoID4gaGVpZ2h0KSB7XG4gICAgICAgICAgbmV3SGVpZ2h0ID0gaGVpZ2h0ICogKG1heFdpZHRoIC8gd2lkdGgpO1xuICAgICAgICAgIG5ld1dpZHRoID0gbWF4V2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3V2lkdGggPSB3aWR0aCAqIChtYXhIZWlnaHQgLyBoZWlnaHQpO1xuICAgICAgICAgIG5ld0hlaWdodCA9IG1heEhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBjYW52YXMud2lkdGggPSBuZXdXaWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IG5ld0hlaWdodDtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgbmV3V2lkdGgsIG5ld0hlaWdodCk7XG5cbiAgICAgICAgcmVzb2x2ZShjYW52YXMudG9EYXRhVVJMKGZpbGVUeXBlKSk7XG4gICAgICB9O1xuXG4gICAgICBpbWFnZS5vbmVycm9yID0gKGVycikgPT4gcmVqZWN0KGVycik7XG4gICAgfSk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBtYXRJbnB1dFxuICAgICAgICBbbmFtZV09XCJzY2hlbWEua2V5XCJcbiAgICAgICAgW2F0dHIudHlwZV09XCInbnVtYmVyJ1wiXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIoKVwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJ0aXRsZSgpXCJcbiAgICAgIC8+XG4gICAgICA8bWF0LWVycm9yIGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L21hdC1lcnJvcj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlck1hdGVyaWFsQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIiBuYW1lPVwibmFtZVwiIG11bHRpcGxlPlxuICAgICAgPG1hdC1vcHRpb25cbiAgICAgICAgKm5nRm9yPVwibGV0IGVuIG9mIHNjaGVtYS5lbnVtOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgW3ZhbHVlXT1cImVuXCI+XG4gICAgICAgIHt7ZW51bU5hbWVzKGkpfX1cbiAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1zZWxlY3Q+XG4gICAgPG1hdC1lcnJvciBqZi1lcnJvciBbY29udHJvbF09XCJjb250cm9sXCI+PC9tYXQtZXJyb3I+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlzZWxlY3RNYXRlcmlhbENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIGVudW1OYW1lcyhpbmRleCkge1xuICAgIHJldHVybiB0eXBlb2YodGhpcy5zY2hlbWEuZW51bU5hbWVzKSA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gdGhpcy5zY2hlbWEuZW51bVtpbmRleF1cbiAgICAgIDogdGhpcy5zY2hlbWEuZW51bU5hbWVzW2luZGV4XTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtY2hlY2tib3hcbiAgICAqbmdGb3I9XCJsZXQgY2hpbGQgb2YgdGhpcy5jb250cm9sWydjb250cm9scyddOyBsZXQgaSA9IGluZGV4XCJcbiAgICBbYXR0ci5pZF09XCJnZXRJZChpLCBzY2hlbWEuZW51bVtpXSlcIlxuICAgIFtjaGVja2VkXT1cImNoaWxkLnZhbHVlID09PSBzY2hlbWEuZW51bVtpXVwiXG4gICAgW25hbWVdPVwic2NoZW1hLmtleVwiXG4gICAgW2Zvcm1Db250cm9sXT1cImNoaWxkXCJcbiAgICAoY2hhbmdlKT1cInNldFZhbHVlKCRldmVudCwgaSlcIlxuICAgIFt2YWx1ZV09XCJzY2hlbWEuZW51bVtpXVwiXG4gICAgPlxuICAgICAgICB7e2VudW1OYW1lcyhpKX19XG4gICAgPC9tYXQtY2hlY2tib3g+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hncm91cE1hdGVyaWFsQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHtcbiAgY2hlY2tib3hHcm91cFZhbHVlcyA9IFtdO1xuICByYW5kb21TdWZmaXggPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XG5cbiAgc2V0VmFsdWUoZXZlbnQsIGluZGV4KSB7XG4gICAgaWYgKHRoaXMuY2hlY2tib3hHcm91cFZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuY2hlY2tib3hHcm91cFZhbHVlcyA9IG5ldyBBcnJheSh0aGlzLmNvbnRyb2xbJ2NvbnRyb2xzJ10ubGVuZ3RoKS5maWxsKG51bGwpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNoZWNrYm94R3JvdXBWYWx1ZXNbaW5kZXhdID09PSBudWxsKSB7XG4gICAgICBldmVudC50YXJnZXQudmFsdWUgPSB0aGlzLnNjaGVtYS5lbnVtW2luZGV4XTtcbiAgICAgIHRoaXMuY2hlY2tib3hHcm91cFZhbHVlc1tpbmRleF0gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hlY2tib3hHcm91cFZhbHVlc1tpbmRleF0gPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh0aGlzLmNoZWNrYm94R3JvdXBWYWx1ZXMpO1xuICB9XG5cbiAgZ2V0SWQoaSwgdmFsKSB7XG4gICAgcmV0dXJuIGAke2l9LSR7dmFsLnJlcGxhY2UoL1tcXFdfXSsvZywgJycpfSske3RoaXMucmFuZG9tU3VmZml4fWA7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgPG1hdC1zbGlkZS10b2dnbGVcbiAgW2lkXT1cInNjaGVtYS5rZXlcIlxuICBbbmFtZV09XCJzY2hlbWEua2V5XCJcbiAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIj5cbiAgICB7e3RpdGxlKCl9fVxuICA8L21hdC1zbGlkZS10b2dnbGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQm9vbGVhbk1hdGVyaWFsQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcbmltcG9ydCB7RGF0ZUFkYXB0ZXIsIE1BVF9EQVRFX0ZPUk1BVFMsIE1BVF9EQVRFX0xPQ0FMRX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5jb25zdCBNWV9GT1JNQVRTID0ge1xuICBwYXJzZToge1xuICAgIGRhdGVJbnB1dDogJ0xMJyxcbiAgfSxcbiAgZGlzcGxheToge1xuICAgIGRhdGVJbnB1dDogJ0xMJyxcbiAgICBtb250aFllYXJMYWJlbDogJ01NTSBZWVlZJyxcbiAgICBkYXRlQTExeUxhYmVsOiAnTEwnLFxuICAgIG1vbnRoWWVhckExMXlMYWJlbDogJ01NTU0gWVlZWScsXG4gIH0sXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXRcbiAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgW21hdERhdGVwaWNrZXJdPSdteURhdGVwaWNrZXInXG4gICAgICAgIFtmb3JtQ29udHJvbF09J2NvbnRyb2wnXG4gICAgICAgIFtwbGFjZWhvbGRlcl09J3RpdGxlKCknXG4gICAgICA+XG4gICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT0nbXlEYXRlcGlja2VyJz48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlciAjbXlEYXRlcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG4gICAgICA8bWF0LWVycm9yIGpmLWVycm9yIFtjb250cm9sXT0nY29udHJvbCc+PC9tYXQtZXJyb3I+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlTWF0ZXJpYWxDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge31cbiIsImltcG9ydCB7Q29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0J1dHRvbkNvbXBvbmVudH0gZnJvbSAnLi9idXR0b24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamYtYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uXG4gICAgICBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAgICpuZ0lmPVwiaXNWaXNpYmxlXCJcbiAgICAgIFt0eXBlXT1cInR5cGVcIlxuICAgICAgW25nQ2xhc3NdPVwiY2xhc3NcIlxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIChjbGljayk9XCJoYW5kbGVDbGljaygkZXZlbnQpXCI+XG4gICAgICB7e2xhYmVsfX1cbiAgICA8L2J1dHRvbj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25NYXRlcmlhbENvbXBvbmVudCBleHRlbmRzIEJ1dHRvbkNvbXBvbmVudCB7fVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFycmF5Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZnJhbWV3b3JrL3NoYXJlZC9jb21wb25lbnRzL2FycmF5L2FycmF5LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtY2FyZCBbbmdDbGFzc109XCJbJ29iamVjdCcsIGNvbnRyb2wuc2NoZW1hLmtleV1cIj5cbiAgICAgIDxoNiAqbmdJZj1cImdldExlZ2VuZChjb250cm9sKS5sZW5ndGhcIj57e2dldExlZ2VuZChjb250cm9sKX19PC9oNj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhcnJheS1pdGVtc1wiPlxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBhcnJDb250cm9sIG9mIGdldEVuYWJsZWRDb250cm9scyhjb250cm9sKTsgbGV0IGkgPSBpbmRleDtcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGpmLWNvbXBvbmVudC1jaG9vc2VyIFtmb3JtXT1cImFyckNvbnRyb2xcIj48L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgbWF0LWJ1dHRvblxuICAgICAgICAgICAgICAqbmdJZj1cImNvbnRyb2wuY29udHJvbHMubGVuZ3RoID4gMVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKTsgcmVtb3ZlQ29udHJvbChjb250cm9sLCBpKVwiXG4gICAgICAgICAgICAgIGNvbG9yPVwid2FyblwiXG4gICAgICAgICAgICAgIGNsYXNzPVwicmVtb3ZlXCJcbiAgICAgICAgICAgID5SZW1vdmU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKTsgYWRkQ29udHJvbChjb250cm9sKVwiPkFkZDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYXQtY2FyZD5cbiAgYFxufSlcblxuZXhwb3J0IGNsYXNzIEFycmF5TWF0ZXJpYWxDb21wb25lbnQgZXh0ZW5kcyBBcnJheUNvbXBvbmVudCB7fVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3RyaW5nTWF0ZXJpYWxDb21wb25lbnR9IGZyb20gJy4uLy4uL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQge0pzb25Gb3JtRmllbGRzU2VydmljZX0gZnJvbSAnLi4vanNvbi1mb3JtLWZpZWxkcy5zZXJ2aWNlJztcbmltcG9ydCB7IFRleHRhcmVhTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvdGV4dGFyZWEvdGV4dGFyZWEubWF0ZXJpYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdE1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3NlbGVjdC9zZWxlY3QubWF0ZXJpYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFJhZGlvZ3JvdXBNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9yYWRpb2dyb3VwL3JhZGlvZ3JvdXAubWF0ZXJpYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFBob3RvTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvcGhvdG8vcGhvdG8ubWF0ZXJpYWwuY29tcG9uZW50JztcbmltcG9ydCB7IE51bWJlck1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL251bWJlci9udW1iZXIubWF0ZXJpYWwuY29tcG9uZW50JztcbmltcG9ydCB7IE11bHRpc2VsZWN0TWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3QubWF0ZXJpYWwuY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrYm94Z3JvdXBNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9jaGVja2JveGdyb3VwL2NoZWNrYm94Z3JvdXAubWF0ZXJpYWwuY29tcG9uZW50JztcbmltcG9ydCB7IEJvb2xlYW5NYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9ib29sZWFuL2Jvb2xlYW4ubWF0ZXJpYWwuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9kYXRlL2RhdGUubWF0ZXJpYWwuY29tcG9uZW50JztcbmltcG9ydCB7QnV0dG9uTWF0ZXJpYWxDb21wb25lbnR9IGZyb20gJy4uLy4uL2ZpZWxkcy9idXR0b24vYnV0dG9uLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb25leUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9tb25leS9tb25leS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT2JqZWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmVkL2NvbXBvbmVudHMvb2JqZWN0L29iamVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXJyYXlNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9hcnJheS9hcnJheS5tYXRlcmlhbC5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSnNvbkZvcm1NYXRlcmlhbCBleHRlbmRzIEpzb25Gb3JtRmllbGRzU2VydmljZSB7XG4gIGZpZWxkVHlwZXMgPSB7XG4gICAgc3RyaW5nOiBTdHJpbmdNYXRlcmlhbENvbXBvbmVudCxcbiAgICBzZWxlY3Q6IFNlbGVjdE1hdGVyaWFsQ29tcG9uZW50LFxuICAgIG51bWJlcjogTnVtYmVyTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgYm9vbGVhbjogQm9vbGVhbk1hdGVyaWFsQ29tcG9uZW50LFxuICAgIHBob3RvOiBQaG90b01hdGVyaWFsQ29tcG9uZW50LFxuICAgIHRleHRhcmVhOiBUZXh0YXJlYU1hdGVyaWFsQ29tcG9uZW50LFxuICAgIG9iamVjdDogT2JqZWN0Q29tcG9uZW50LFxuICAgIGFycmF5OiBBcnJheU1hdGVyaWFsQ29tcG9uZW50LFxuICAgIGRhdGU6IERhdGVNYXRlcmlhbENvbXBvbmVudCxcbiAgICByYWRpb2dyb3VwOiBSYWRpb2dyb3VwTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgY2hlY2tib3hncm91cDogQ2hlY2tib3hncm91cE1hdGVyaWFsQ29tcG9uZW50LFxuICAgIG11bHRpc2VsZWN0OiBNdWx0aXNlbGVjdE1hdGVyaWFsQ29tcG9uZW50LFxuICAgIG1vbmV5OiBNb25leUNvbXBvbmVudCxcbiAgICBidXR0b246IEJ1dHRvbk1hdGVyaWFsQ29tcG9uZW50XG4gIH07XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdqZi1lcnJvciwgW2pmLWVycm9yXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRyb2wuaW52YWxpZCAmJiAoY29udHJvbC5kaXJ0eSB8fCBjb250cm9sLnRvdWNoZWQpXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ3JlcXVpcmVkJ11cIj5cbiAgICAgICAgVGhpcyBmaWVsZCBpcyByZXF1aXJlZC5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzWydwYXR0ZXJuJ11cIj5cbiAgICAgICAgSW5wdXQgdmFsdWUgaXMgaW52YWxpZC5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzWydtaW5sZW5ndGgnXVwiPlxuICAgICAgICBJbnB1dCBoYXMgdG8gYmUgYSBtaW5pbXVtIG9mIHt7Y29udHJvbC5lcnJvcnNbJ21pbmxlbmd0aCddWydyZXF1aXJlZExlbmd0aCddfX0gY2hhcmFjdGVycy5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzWydtYXhsZW5ndGgnXVwiPlxuICAgICAgICBJbnB1dCBjYW4gY29udGFpbiBhIG1heGltdW0gb2Yge3tjb250cm9sLmVycm9yc1snbWF4bGVuZ3RoJ11bJ3JlcXVpcmVkTGVuZ3RoJ119fSBjaGFyYWN0ZXJzLlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ21pbiddXCI+XG4gICAgICAgIEVudGVyIGEgdmFsdWUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHt7Y29udHJvbC5lcnJvcnNbJ21pbiddWydtaW4nXX19LlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ21heCddXCI+XG4gICAgICAgIEVudGVyIGEgdmFsdWUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHt7Y29udHJvbC5lcnJvcnNbJ21heCddWydtYXgnXX19LlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ2N1c3RvbUVycm9yJ11cIj5cbiAgICAgICAge3tjb250cm9sLmVycm9yc1snY3VzdG9tRXJyb3InXX19XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBFcnJvck1hdGVyaWFsQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY29udHJvbDtcbn1cbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRleHRNYXNrTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdGV4dC1tYXNrJztcbmltcG9ydCB7XG4gIE1hdEJ1dHRvbk1vZHVsZSxcbiAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICBNYXRJbnB1dE1vZHVsZSxcbiAgTWF0U2VsZWN0TW9kdWxlLFxuICBNYXRSYWRpb01vZHVsZSxcbiAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gIE1hdEljb25Nb2R1bGUsXG4gIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICBNYXREYXRlcGlja2VyTW9kdWxlLCBNYXROYXRpdmVEYXRlTW9kdWxlLCBNYXRDYXJkTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFN0cmluZ01hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3N0cmluZy9zdHJpbmcubWF0ZXJpYWwuY29tcG9uZW50JztcbmltcG9ydCB7IEpzb25Gb3JtTWF0ZXJpYWx9IGZyb20gJy4vanNvbi1mb3JtLW1hdGVyaWFsJztcbmltcG9ydCB7IEpzb25Gb3JtRmllbGRzU2VydmljZSB9IGZyb20gJy4uL2pzb24tZm9ybS1maWVsZHMuc2VydmljZSc7XG5pbXBvcnQgeyBUZXh0YXJlYU1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3RleHRhcmVhL3RleHRhcmVhLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9zZWxlY3Qvc2VsZWN0Lm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSYWRpb2dyb3VwTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvcmFkaW9ncm91cC9yYWRpb2dyb3VwLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaG90b01hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3Bob3RvL3Bob3RvLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGVja2JveGdyb3VwTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvY2hlY2tib3hncm91cC9jaGVja2JveGdyb3VwLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdW1iZXJNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9udW1iZXIvbnVtYmVyLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNdWx0aXNlbGVjdE1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL211bHRpc2VsZWN0L211bHRpc2VsZWN0Lm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb29sZWFuTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvYm9vbGVhbi9ib29sZWFuLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvZGF0ZS9kYXRlLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFcnJvck1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2Vycm9yL2Vycm9yLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25NYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9idXR0b24vYnV0dG9uLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGV9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IEFycmF5TWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvYXJyYXkvYXJyYXkubWF0ZXJpYWwuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFRleHRNYXNrTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgU2hhcmVkTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFN0cmluZ01hdGVyaWFsQ29tcG9uZW50LFxuICAgIFRleHRhcmVhTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgU2VsZWN0TWF0ZXJpYWxDb21wb25lbnQsXG4gICAgUmFkaW9ncm91cE1hdGVyaWFsQ29tcG9uZW50LFxuICAgIFBob3RvTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgTnVtYmVyTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgTXVsdGlzZWxlY3RNYXRlcmlhbENvbXBvbmVudCxcbiAgICBDaGVja2JveGdyb3VwTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgQm9vbGVhbk1hdGVyaWFsQ29tcG9uZW50LFxuICAgIERhdGVNYXRlcmlhbENvbXBvbmVudCxcbiAgICBFcnJvck1hdGVyaWFsQ29tcG9uZW50LFxuICAgIEJ1dHRvbk1hdGVyaWFsQ29tcG9uZW50LFxuICAgIEFycmF5TWF0ZXJpYWxDb21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgU3RyaW5nTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgVGV4dGFyZWFNYXRlcmlhbENvbXBvbmVudCxcbiAgICBTZWxlY3RNYXRlcmlhbENvbXBvbmVudCxcbiAgICBSYWRpb2dyb3VwTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgUGhvdG9NYXRlcmlhbENvbXBvbmVudCxcbiAgICBOdW1iZXJNYXRlcmlhbENvbXBvbmVudCxcbiAgICBNdWx0aXNlbGVjdE1hdGVyaWFsQ29tcG9uZW50LFxuICAgIENoZWNrYm94Z3JvdXBNYXRlcmlhbENvbXBvbmVudCxcbiAgICBCb29sZWFuTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgRGF0ZU1hdGVyaWFsQ29tcG9uZW50LFxuICAgIEVycm9yTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgQnV0dG9uTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgQXJyYXlNYXRlcmlhbENvbXBvbmVudFxuICBdXG59KVxuXG5leHBvcnQgY2xhc3MgSnNvbkZvcm1NYXRlcmlhbE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSnNvbkZvcm1NYXRlcmlhbE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogSnNvbkZvcm1GaWVsZHNTZXJ2aWNlLFxuICAgICAgICAgIHVzZUNsYXNzOiBKc29uRm9ybU1hdGVyaWFsLFxuICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBYUUseUJBQ1MsV0FDQTtRQURBLGNBQVMsR0FBVCxTQUFTO1FBQ1QsT0FBRSxHQUFGLEVBQUU7S0FDUDs7OztJQUVKLHlDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDekI7Ozs7SUFFRCxvQ0FBVTs7O0lBQVY7O1FBRUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7S0FDbkU7Ozs7SUFFRCwrQkFBSzs7O0lBQUw7UUFDRSxxQkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDOUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssV0FBVztjQUM1QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksUUFBUSxDQUFDO0tBQzFFOzs7OztJQUVELHdDQUFjOzs7O0lBQWQsVUFBZSxHQUFXO1FBQ3hCLE9BQU8s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

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container{\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.header{\n  width: 100%;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #e18c15;\n}\n\n.logo{\n  display: flex;\n  height: 100%;\n  align-items: center;\n  padding: 10px;\n}\n\n.logo img{\n  width: auto;\n  height: 60px;\n}\n\n.right-side{\n  display: flex;\n  justify-content: space-between;\n  width: 8%;\n  font-size: 20px;\n  height: 100%;\n  align-items: center;\n  margin: 0 20px;\n}\n\n.right-side p{\n  margin: 0;\n  color: #FFF;\n}\n\n.right-side i{\n  color: #FFF;\n  font-size: 35px;\n}\n\n.content, .intro{\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.intro img{\n  max-width: 300px;\n  margin: 50px 0;\n}\n\n.intro h4{\n  font-weight: bold;\n  color: #404040;\n  font-size: 2em;\n}\n\n.intro h1{\n  text-transform: uppercase;\n}\n\n.action-btns{\n  display: flex;\n  width: 35%;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.action-btns .btn{\n  min-width: 150px;\n  background-color: #e08d33;\n  color: #FFF;\n  text-transform: uppercase;\n  border-radius: 0;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-json-schema-examples></app-json-schema-examples>\n"

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
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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

module.exports = "textarea.has-danger {\n  border: solid 1px #f4516c !important;\n}\n\n.form-builder a.has-danger:hover {\n  text-decoration: none;\n}\n\n.form-builder form,\n.form-builder form div {\n  height: 95%;\n}\n\n.form-builder > .col-md-6 textarea {\n  width: 95%;\n}\n"

/***/ }),

/***/ "./src/app/json-schema-examples/json-schema-examples.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/json-schema-examples/json-schema-examples.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <br />\n  <div class=\"row form-builder\">\n    <div class=\"col-md-6\">\n      <h6>Schema Samples:</h6>\n      <div class=\"form-group\">\n        <select style=\"float:left;\" class=\"form-control\" (change)=\"handleSchemaUpdate($event.target.value)\">\n          <option *ngFor=\"let schema of getSchemaSamples()\" [value]=\"schema\">\n            {{jsonSchemaExamplesSamples.json[schema].title}}\n          </option>\n        </select>\n        <select style=\"float:left; margin-left: 10px;\" class=\"form-control\" (change)=\"handleFrameworkUpdate($event.target.value)\" >\n          <option value=\"material\">Material Design</option>\n          <option value=\"bootstrap\">Bootstrap 4</option>\n        </select>\n        <div style=\"clear:both;\"></div>\n      </div>\n      <h6>JSON Schema:\n        <span class=\"text-danger\" *ngIf=\"(schemaControl.touched || schemaControl.dirty) && schemaControl.invalid\">\n          {{schemaControl.errors['invalidJSON']}}\n        </span>\n        <a href=\"javascript:void(0)\" class=\"text-danger\"\n           *ngIf=\"(schemaControl.touched || schemaControl.dirty) && schemaControl.invalid\"\n           (click)=\"goToError(schemaControl.errors['invalidJSON'])\">\n          <i class=\"fa fa-exclamation-triangle\"></i>\n        </a>\n      </h6>\n      <form [formGroup]=\"form\">\n        <div class=\"form-group\" [ngClass]=\"{\n          'has-danger': schemaControl.invalid && (schemaControl.dirty || schemaControl.touched)\n          }\">\n          <textarea class=\"form-control schema\" style=\"height: 100%\" [formControl]=\"schemaControl\" (keyup)=\"handleSchemaUpdate()\"\n                    (keydown.Enter)=\"onEnterKey($event)\" (keydown.Tab)=\"onTabKey($event)\" #jsonSchema\n                    [ngClass]=\"{\n              'has-danger': schemaControl.invalid && (schemaControl.dirty || schemaControl.touched)\n            }\"></textarea>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-md-6\">\n      <h6>Form:</h6>\n      <jf-form\n        #jfForm\n        [id]=\"'exampleform'\"\n        [cancel]=\"cancel\"\n        [submit]=\"'Submit'\"\n        [schema]=\"schema\"\n        [isMultiStep]=\"isMultiStep\"\n        [state]=\"state\"\n        [fields]=\"fields\"\n        [viewOnly]=\"viewOnly\"\n        [data]=\"data\"\n        (handleCancel)=\"handleCancel($event)\"\n        (handleChange)=\"handleChange($event)\"\n        (handleSubmit)=\"handleSubmit($event)\">\n      </jf-form>\n\n      <jf-form\n        *ngIf=\"this.selectedSchema === 'multiple_forms'\"\n        [id]=\"'exampleform'\"\n        [cancel]=\"cancel\"\n        [submit]=\"'Submit'\"\n        [schema]=\"schema\"\n        [isMultiStep]=\"isMultiStep\"\n        [state]=\"state\"\n        [fields]=\"fields\"\n        (handleSubmit)=\"handleSubmit($event)\">\n      </jf-form>\n      <p></p>\n      <h6 *ngIf=\"!this.viewOnly\">Data: (click Submit to preview form data)</h6>\n      <h6 *ngIf=\"this.viewOnly\">Data: <pre>{{formattedData(data)}}</pre></h6>\n      <pre *ngIf=\"!this.viewOnly\" #formResponse>&#123;&#125;</pre>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @trufla/ngx-tru-forms */ "./dist/ngx-tru-forms/fesm5/trufla-ngx-tru-forms.js");
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
    JsonSchemaExamplesComponent.prototype.ngAfterViewInit = function () {
        this.jfForm.setHeader('<p>Please complete the following form.</p>');
        this.jfForm.setFooter('<p><small>* indicates required fields</small></p>');
    };
    JsonSchemaExamplesComponent.prototype.handleSubmit = function (data) {
        this.formResponse.nativeElement.innerHTML = JSON.stringify(data, null, 2);
    };
    JsonSchemaExamplesComponent.prototype.handleCancel = function (data) {
        this.formResponse.nativeElement.innerHTML = JSON.stringify(data, null, 2);
        window.alert('Cancel also has data');
    };
    JsonSchemaExamplesComponent.prototype.handleChange = function (data) {
        if (this.selectedSchema === 'onchange') {
            this.formResponse.nativeElement.innerHTML = JSON.stringify(data, null, 2);
        }
    };
    JsonSchemaExamplesComponent.prototype.handleSchemaUpdate = function (value) {
        var _this = this;
        this.isMultiStep = false;
        this.selectedSchema = value;
        if (typeof (this.selectedSchema) !== 'undefined') {
            this.schemaControl.setValue(JSON.stringify(this.jsonSchemaExamplesSamples.json[this.selectedSchema], null, '\t'));
            if (this.selectedSchema === 'cancel_test') {
                this.cancel = 'Cancel';
            }
            else if (this.selectedSchema === 'multistep') {
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
        setTimeout(function () {
            var footerText = '';
            if (_this.jfForm.getRequiredFieldCount() > 0) {
                footerText = '<p><small>* indicates required fields</small></p>';
            }
            _this.jfForm.setFooter(footerText);
        }, 50);
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
    JsonSchemaExamplesComponent.prototype.handleFrameworkUpdate = function (framework) {
        if (framework === 'material') {
            window.location.href = 'https://trufla-technology.github.io/ngx-tru-forms/material/';
        }
        else if (framework === 'bootstrap') {
            window.location.href = 'https://trufla-technology.github.io/ngx-tru-forms/bootstrap4/';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('jsonSchema'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], JsonSchemaExamplesComponent.prototype, "jsonSchema", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('formResponse'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], JsonSchemaExamplesComponent.prototype, "formResponse", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('jfForm'),
        __metadata("design:type", _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__["JsonFormComponent"])
    ], JsonSchemaExamplesComponent.prototype, "jfForm", void 0);
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
            cancel_test: {
                title: 'Cancel',
                description: 'Simple form with cancel and submit buttons. Cancel also contains form data.',
                type: 'object',
                properties: {
                    first_name: {
                        type: 'string'
                    },
                    last_name: {
                        type: 'string'
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

module.exports = __webpack_require__(/*! /Users/boris/Documents/trufla/ngx-tru-forms-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map