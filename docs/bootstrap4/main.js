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
                    template: "\n    <form\n      #userForm=\"ngForm\"\n      [formGroup]=\"form\"\n      (ngSubmit)=\"handleOnSubmit()\"\n      *ngIf=\"isValidSchema()\"\n      [ngClass]=\"{ 'view-only': viewOnly }\"\n      [id]=\"id\"\n    >\n      <div\n        jf-component-chooser\n        [ngClass]=\"[outerClass || '', this.activeStyle['default'] ? this.activeStyle['default'] : '']\"\n        [form]=\"form\"\n        [schema]=\"activeSchema\">\n      </div>\n      <div #ref>\n        <ng-content></ng-content>\n      </div>\n      <div\n        #buttons\n        *ngIf=\"ref.children.length == 0 && (submit || cancel)\"\n        [ngClass]=\"{ 'margin-top--double': true, 'page-actions--edges': (cancel && submit), 'page-actions--center': (!cancel || !submit)}\">\n        <jf-form-button\n          *ngIf=\"cancel\"\n          [cancel]=\"cancel\"\n          [steps]=\"steps\"\n          [isMultiStep]=\"isMultiStep\"\n          [isWorking]=\"isWorking\"\n          (handleClick)=\"handleOnCancel()\"\n          [submitClass]=\"submitClass\"\n          [cancelClass]=\"cancelClass\">\n        </jf-form-button>\n        <jf-form-button\n          *ngIf=\"submit\"\n          [submitClass]=\"submitClass\"\n          [cancelClass]=\"cancelClass\"\n          [submit]=\"submit\"\n          [steps]=\"steps\"\n          [continue]=\"continue\"\n          [isMultiStep]=\"isMultiStep\"\n          [isWorking]=\"isWorking\"\n          [isFormValid]=\"this.form.valid\">\n        </jf-form-button>\n      </div>\n    </form>\n  "
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
                    template: "\n    <label [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <div *ngIf=\"previewSrcExists(); else addImage\" class=\"photo-preview\">\n      <button\n        class=\"photo-add\"\n        mat-button\n        color=\"primary\"\n        [style.background-image]=\"makeTrustedImage(photoData)\"\n        [style.background-size]=\"'cover'\"\n        [style.background-repeat]=\"'no-repeat'\"\n        (click)=\"$event.preventDefault(); fileInput.click();\"\n      >\n        <mat-icon>add_a_photo</mat-icon>\n      </button>\n      <button\n        class=\"photo-remove\"\n        mat-mini-fab\n        color=\"warn\"\n        (click)=\"clearPhoto()\"\n      >\n        <mat-icon>close</mat-icon>\n      </button>\n    </div>\n    <ng-template #addImage>\n      <button\n        class=\"photo-add\"\n        mat-button\n        color=\"primary\"\n        (click)=\"$event.preventDefault(); fileInput.click();\"\n      >\n        <mat-icon>add_a_photo</mat-icon>\n      </button>\n    </ng-template>\n    <input #fileInput type=\"file\" [name]=\"schema.key\" (change)=\"onChange($event)\" style=\"display:none;\"/>\n    <input type=\"hidden\" [name]=\"schema.key\" [formControl]=\"control\" />\n  "
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1ZmxhLW5neC10cnUtZm9ybXMuanMubWFwIiwic291cmNlcyI6WyJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2NvbW1vbi9jb21tb24uY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9zZWxlY3Qvc2VsZWN0LnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9udW1iZXIvbnVtYmVyLnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9ib29sZWFuL2Jvb2xlYW4udmlldy5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL3Bob3RvL3Bob3RvLnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy90ZXh0YXJlYS90ZXh0YXJlYS52aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvZGF0ZS9kYXRlLnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9yYWRpb2dyb3VwL3JhZGlvZ3JvdXAudmlldy5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2NoZWNrYm94Z3JvdXAvY2hlY2tib3hncm91cC52aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3Qudmlldy5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL21vbmV5L21vbmV5LnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL21vZGVscy9zY2hlbWEtZm9ybS1jb250cm9sLnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZyYW1ld29yay9zaGFyZWQvY29tcG9uZW50cy9vYmplY3Qvb2JqZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9tb2RlbHMvc2NoZW1hLWZvcm0tYXJyYXkudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvbW9kZWxzL3NjaGVtYS1mb3JtLWdyb3VwLnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZyYW1ld29yay9zaGFyZWQvY29tcG9uZW50cy9hcnJheS9hcnJheS5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZnJhbWV3b3JrL3NoYXJlZC9jb21wb25lbnRzL2FycmF5L2FycmF5LnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZyYW1ld29yay9qc29uLWZvcm0tZmllbGRzLnNlcnZpY2UudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvc2VydmljZXMvdmFsaWRhdG9ycy5zZXJ2aWNlLnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL3NlcnZpY2VzL2RlZmF1bHRzLnNlcnZpY2UudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvanNvbi1mb3JtLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvY2hlY2tib3hncm91cC9jaGVja2JveGdyb3VwLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3QuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy90ZXh0YXJlYS90ZXh0YXJlYS5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9ib29sZWFuL2Jvb2xlYW4uY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9udW1iZXIvbnVtYmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvcGhvdG8vcGhvdG8uY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9yYWRpb2dyb3VwL3JhZGlvZ3JvdXAuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvZGF0ZS9kYXRlLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL21vbmV5L21vbmV5LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvYm9vdHN0cmFwNC9qc29uLWZvcm0tYm9vdHN0cmFwNC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvc2hhcmVkL2NvbXBvbmVudHMvY2hvb3Nlci9jaG9vc2VyLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvc2hhcmVkL2NvbXBvbmVudHMvZmllbGQvZmllbGQuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZyYW1ld29yay9zaGFyZWQvY29tcG9uZW50cy9mb3JtLWJ1dHRvbi9mb3JtLWJ1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZnJhbWV3b3JrL3NoYXJlZC9jb21wb25lbnRzL2luZm8tYnV0dG9uL2luZm8tYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvc2hhcmVkL2NvbXBvbmVudHMvd29ya2luZy1zcGlubmVyL3dvcmtpbmctc3Bpbm5lci5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZnJhbWV3b3JrL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2pzb24tZm9ybS5tb2R1bGUudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvYm9vdHN0cmFwNC9qc29uLWZvcm0tYm9vdHN0cmFwNC5tb2R1bGUudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL3N0cmluZy9zdHJpbmcubWF0ZXJpYWwuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy90ZXh0YXJlYS90ZXh0YXJlYS5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL3NlbGVjdC9zZWxlY3QubWF0ZXJpYWwuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9yYWRpb2dyb3VwL3JhZGlvZ3JvdXAubWF0ZXJpYWwuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9waG90by9waG90by5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL251bWJlci9udW1iZXIubWF0ZXJpYWwuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9tdWx0aXNlbGVjdC9tdWx0aXNlbGVjdC5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2NoZWNrYm94Z3JvdXAvY2hlY2tib3hncm91cC5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2Jvb2xlYW4vYm9vbGVhbi5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2RhdGUvZGF0ZS5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2J1dHRvbi9idXR0b24ubWF0ZXJpYWwuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9hcnJheS9hcnJheS5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZnJhbWV3b3JrL21hdGVyaWFsL2pzb24tZm9ybS1tYXRlcmlhbC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvZXJyb3IvZXJyb3IubWF0ZXJpYWwuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZyYW1ld29yay9tYXRlcmlhbC9qc29uLWZvcm0tbWF0ZXJpYWwubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSB9IGZyb20gJy4uLy4uL21vZGVscy9zY2hlbWEnO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbnRyb2wgfSBmcm9tICcuLi8uLi9tb2RlbHMvc2NoZW1hLWZvcm0tY29udHJvbCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdG9yUmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCBzdGFydENhc2UgZnJvbSAnbG9kYXNoLnN0YXJ0Y2FzZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pmLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBDb21tb25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgcHVibGljIGNvbnRyb2w6IFNjaGVtYUZvcm1Db250cm9sO1xuICBwdWJsaWMgc2NoZW1hOiBTY2hlbWE7XG4gIHB1YmxpYyBzdHlsZToge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGlzUmVxdWlyZWQoKSB7XG4gICAgLy8gc29tZSBjb250cm9scyBsaWtlIGRhdGVwaWNrZXIgYWRkIHZhbGlkYXRvciB3aXRob3V0IGJlaW5nIHJlcXVpcmVkXG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC52YWxpZGF0b3IgIT09IG51bGwgJiYgdGhpcy5jb250cm9sLmlzUmVxdWlyZWQ7XG4gIH1cblxuICB0aXRsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuc2NoZW1hLnRpdGxlID09PSAndW5kZWZpbmVkJ1xuICAgICAgPyB0aGlzLnN0clRvVXBwZXJDYXNlKHRoaXMuc2NoZW1hLmtleSkgOiB0aGlzLnNjaGVtYS50aXRsZTtcbiAgfVxuXG4gIHN0clRvVXBwZXJDYXNlKHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0YXJ0Q2FzZShzdHIpO1xuICB9XG5cbiAgcGxhY2Vob2xkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLnRpdGxlIHx8IHRoaXMuc3RyVG9VcHBlckNhc2UodGhpcy5zY2hlbWEua2V5KTtcbiAgfVxuXG4gIHR5cGUoKSB7XG4gICAgbGV0IGZvcm1hdCA9IHRoaXMuc2NoZW1hLmZvcm1hdCB8fCAndGV4dCc7XG5cbiAgICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgICAgY2FzZSAncGhvdG8nOlxuICAgICAgICBmb3JtYXQgPSAnZmlsZSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfVxuXG4gIGlkKGk/KSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmtleSArICctJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KSArICctJyArIGk7XG4gIH1cblxuICBnZXRDbGFzcyhkZWZhdWx0Q2xhc3M/KSB7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGUgJiYgdGhpcy5zdHlsZS5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpID9cbiAgICAgIHRoaXMuc3R5bGVbJ2RlZmF1bHQnXSA6IChkZWZhdWx0Q2xhc3MgfHwgJycpO1xuICB9XG5cbiAgZ2V0TWFzaygpIHtcbiAgICBpZiAodGhpcy5zY2hlbWEuaGFzT3duUHJvcGVydHkoJ21hc2snKSkge1xuICAgICAgY29uc3QgbWFzazogQXJyYXk8c3RyaW5nIHwgUmVnRXhwPiA9IFtdO1xuICAgICAgdGhpcy5zY2hlbWEubWFzay5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBtYXNrLnB1c2goL15cXC8uKlxcLyQvLnRlc3QoZWwpID8gbmV3IFJlZ0V4cChlbC5yZXBsYWNlKC9eXFwvfFxcLyQvZywgJycpKSA6IGVsKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbWFzaztcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBtYWtlVHJ1c3RlZEltYWdlKGltYWdlKTogYW55IHtcbiAgICBjb25zdCBpbWFnZVN0cmluZyA9ICBKU09OLnN0cmluZ2lmeShpbWFnZSkucmVwbGFjZSgvXFxcXG4vZywgJycpO1xuICAgIGNvbnN0IHN0eWxlID0gJ3VybCgnICsgaW1hZ2VTdHJpbmcgKyAnKSc7XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShzdHlsZSk7XG4gIH1cblxuICBlbnVtTmFtZXMoaW5kZXgpIHtcbiAgICByZXR1cm4gdHlwZW9mKHRoaXMuc2NoZW1hLmVudW1OYW1lcykgPT09ICd1bmRlZmluZWQnXG4gICAgICA/IHRoaXMuc2NoZW1hLmVudW1baW5kZXhdXG4gICAgICA6IHRoaXMuc2NoZW1hLmVudW1OYW1lc1tpbmRleF07XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgPHA+PHNwYW4+e3t0aXRsZSgpfX08L3NwYW4+IDxzcGFuPnt7Y29udHJvbC52YWx1ZX19PC9zcGFuPjwvcD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBTdHJpbmdWaWV3Q29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxwPjxzcGFuPnt7dGl0bGUoKX19PC9zcGFuPiA8c3Bhbj57e2NvbnRyb2wudmFsdWV9fTwvc3Bhbj48L3A+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Vmlld0NvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIGVudW1OYW1lcyhpbmRleCkge1xuICAgIHJldHVybiB0eXBlb2YodGhpcy5zY2hlbWEuZW51bU5hbWVzKSA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gdGhpcy5zY2hlbWEuZW51bVtpbmRleF1cbiAgICAgIDogdGhpcy5zY2hlbWEuZW51bU5hbWVzW2luZGV4XTtcbiAgfVxuXG4gIGVtcHR5T3B0aW9uKCkge1xuICAgIHJldHVybiBzdXBlci50aXRsZSgpLnJlcGxhY2UoL1teQS1aMC05XSskL2lnLCAnJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD57e3RpdGxlKCl9fToge3tjb250cm9sLnZhbHVlfX08L3A+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyVmlld0NvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgPHA+PHNwYW4+e3t0aXRsZSgpfX08L3NwYW4+IDxzcGFuPnt7Y29udHJvbC52YWx1ZX19PC9zcGFuPjwvcD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCb29sZWFuVmlld0NvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7fVxuIiwiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+e3t0aXRsZSgpfX08L3A+XG4gICAgPGltZyBzcmM9XCJ7e2NvbnRyb2wudmFsdWV9fVwiIGNsYXNzPVwiaW1nLXRodW1ibmFpbFwiIC8+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgUGhvdG9WaWV3Q29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHt9XG5cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgPHA+PHNwYW4+e3t0aXRsZSgpfX08L3NwYW4+IDxzcGFuPnt7Y29udHJvbC52YWx1ZX19PC9zcGFuPjwvcD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYVZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgeyB9XG5cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuaW1wb3J0IGNyZWF0ZU51bWJlck1hc2sgZnJvbSAndGV4dC1tYXNrLWFkZG9ucy9kaXN0L2NyZWF0ZU51bWJlck1hc2snO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgPHA+PHNwYW4+e3t0aXRsZSgpfX08L3NwYW4+IDxzcGFuPnt7Y29udHJvbC52YWx1ZX19PC9zcGFuPjwvcD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlVmlld0NvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIG51bWJlck1hc2sgPSBjcmVhdGVOdW1iZXJNYXNrKHsgYWxsb3dEZWNpbWFsOiBmYWxzZSwgcHJlZml4OiAnJyB9KTtcblxuICBjbGVhbk1hc2sodmFsdWUpIHtcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUucmVwbGFjZSgvXFxEL2csICcnKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgPHA+PHNwYW4+e3t0aXRsZSgpfX08L3NwYW4+IDxzcGFuPnt7Y29udHJvbC52YWx1ZX19PC9zcGFuPjwvcD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb2dyb3VwVmlld0NvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD57e3RpdGxlKCl9fTwvcD5cbiAgICA8dWwgKm5nRm9yPVwibGV0IHNlbGVjdGVkIG9mIGNvbnRyb2wudmFsdWVcIj5cbiAgICAgIDxsaT57e3NlbGVjdGVkfX08L2xpPlxuICAgIDwvdWw+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hncm91cFZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge31cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxwPnt7dGl0bGUoKX19PC9wPlxuICAgIDx1bCAqbmdGb3I9XCJsZXQgc2VsZWN0ZWQgb2YgY29udHJvbC52YWx1ZVwiPlxuICAgICAgPGxpPnt7c2VsZWN0ZWR9fTwvbGk+XG4gICAgPC91bD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aXNlbGVjdFZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICBlbnVtTmFtZXMoaW5kZXgpIHtcbiAgICByZXR1cm4gdHlwZW9mKHRoaXMuc2NoZW1hLmVudW1OYW1lcykgPT09ICd1bmRlZmluZWQnXG4gICAgICA/IHRoaXMuc2NoZW1hLmVudW1baW5kZXhdXG4gICAgICA6IHRoaXMuc2NoZW1hLmVudW1OYW1lc1tpbmRleF07XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuaW1wb3J0IGNyZWF0ZU51bWJlck1hc2sgZnJvbSAndGV4dC1tYXNrLWFkZG9ucy9kaXN0L2NyZWF0ZU51bWJlck1hc2snO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgPHA+PHNwYW4+e3t0aXRsZSgpfX08L3NwYW4+IDxzcGFuPnt7Y29udHJvbC52YWx1ZX19PC9zcGFuPjwvcD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBNb25leVZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICBudW1iZXJNYXNrID0gY3JlYXRlTnVtYmVyTWFzayh7IGFsbG93RGVjaW1hbDogZmFsc2UsIHByZWZpeDogJycgfSk7XG5cbiAgY2xlYW5NYXNrKHZhbHVlKSB7XG4gICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJykpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuZXhwb3J0IGNsYXNzIFNjaGVtYUZvcm1Db250cm9sIGV4dGVuZHMgRm9ybUNvbnRyb2wge1xuICBwdWJsaWMgc2NoZW1hOiBTY2hlbWE7XG4gIHB1YmxpYyBzdHlsZTogYW55O1xuICBwdWJsaWMgdmlld09ubHk6IGJvb2xlYW47XG4gIHB1YmxpYyBkYXRhOiBhbnk7XG4gIHB1YmxpYyBpc1JlcXVpcmVkOiBib29sZWFuO1xufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2NoZW1hRm9ybUNvbnRyb2x9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9zY2hlbWEtZm9ybS1jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbbmdDbGFzc109XCJbJ29iamVjdCcsIGNvbnRyb2wuc2NoZW1hLmtleV1cIlxuICAgICAgamYtY29tcG9uZW50LWNob29zZXJcbiAgICAgIFtmb3JtXT1cImNvbnRyb2xcIlxuICAgICAgW3NjaGVtYV09XCJjb250cm9sLnNjaGVtYVwiXG4gICAgICBbbmVzdGVkXT1cInRydWVcIj5cbiAgICA8L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIE9iamVjdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNvbnRyb2w6IFNjaGVtYUZvcm1Db250cm9sO1xufVxuXG4iLCJpbXBvcnQgeyBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFGb3JtQXJyYXkgZXh0ZW5kcyBGb3JtQXJyYXkge1xuICBwdWJsaWMgc2NoZW1hOiBTY2hlbWE7XG4gIHB1YmxpYyBzdHlsZTogYW55O1xufVxuIiwiaW1wb3J0IHsgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFGb3JtR3JvdXAgZXh0ZW5kcyBGb3JtR3JvdXAge1xuICBwdWJsaWMgc2NoZW1hOiBTY2hlbWE7XG4gIHB1YmxpYyBzdHlsZTogYW55O1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbnRyb2wgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvc2NoZW1hLWZvcm0tY29udHJvbCc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFNjaGVtYUZvcm1BcnJheSB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9zY2hlbWEtZm9ybS1hcnJheSc7XG5pbXBvcnQgeyBTY2hlbWFGb3JtR3JvdXAgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvc2NoZW1hLWZvcm0tZ3JvdXAnO1xuaW1wb3J0IHN0YXJ0Q2FzZSBmcm9tICdsb2Rhc2guc3RhcnRjYXNlJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbbmdDbGFzc109XCJbJ2FycmF5JywgY29udHJvbC5zY2hlbWEua2V5XVwiPlxuICAgICAgPGg2ICpuZ0lmPVwiZ2V0TGVnZW5kKGNvbnRyb2wpLmxlbmd0aFwiPnt7Z2V0TGVnZW5kKGNvbnRyb2wpfX08L2g2PlxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgYXJyQ29udHJvbCBvZiBnZXRFbmFibGVkQ29udHJvbHMoY29udHJvbCk7IGxldCBpID0gaW5kZXg7XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiIGpmLWNvbXBvbmVudC1jaG9vc2VyIFtmb3JtXT1cImFyckNvbnRyb2xcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVtb3ZlXCIgKm5nSWY9XCJjb250cm9sLmNvbnRyb2xzLmxlbmd0aCA+IDFcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInJlbW92ZUNvbnRyb2woY29udHJvbCwgaSlcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tc21cIiB2YWx1ZT1cIlJlbW92ZVwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWRkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJhZGRDb250cm9sKGNvbnRyb2wpXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIgdmFsdWU9XCJBZGRcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlDb21wb25lbnQge1xuICBASW5wdXQoKSBjb250cm9sOiBTY2hlbWFGb3JtQXJyYXk7XG5cbiAgZ2V0TGVnZW5kKGNvbnRyb2wpIHtcbiAgICByZXR1cm4gKGNvbnRyb2wgJiYgY29udHJvbC5zY2hlbWEgJiYgY29udHJvbC5zY2hlbWEua2V5KSA/IHN0YXJ0Q2FzZShjb250cm9sLnNjaGVtYS5rZXkpIDogJyc7XG4gIH1cblxuICBzdHJUb1VwcGVyQ2FzZShzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9fL2csICcgJykuc3BsaXQoJyAnKS5tYXAoKHdvcmQpID0+XG4gICAgICAod29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpXG4gICAgKS5qb2luKCcgJyk7XG4gIH1cblxuICBnZXRFbmFibGVkQ29udHJvbHMoY29udHJvbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnRyb2wuY29udHJvbHMpKSB7XG4gICAgICByZXR1cm4gY29udHJvbC5jb250cm9scy5maWx0ZXIoKGMpID0+IGMuZW5hYmxlZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2w7XG4gIH1cblxuICBjbG9uZUNvbnRyb2woY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XG4gICAgbGV0IG5ld0NvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcblxuICAgIGlmIChjb250cm9sIGluc3RhbmNlb2YgU2NoZW1hRm9ybUdyb3VwKSB7XG4gICAgICBjb25zdCBmb3JtR3JvdXAgPSBuZXcgU2NoZW1hRm9ybUdyb3VwKHt9LCBjb250cm9sLnZhbGlkYXRvciwgY29udHJvbC5hc3luY1ZhbGlkYXRvcik7XG4gICAgICBjb25zdCBjb250cm9scyA9IGNvbnRyb2wuY29udHJvbHM7XG4gICAgICBmb3JtR3JvdXAuc2NoZW1hID0gY29udHJvbC5zY2hlbWE7XG5cbiAgICAgIE9iamVjdC5rZXlzKGNvbnRyb2xzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgZm9ybUdyb3VwLmFkZENvbnRyb2woa2V5LCB0aGlzLmNsb25lQ29udHJvbChjb250cm9sc1trZXldKSk7XG4gICAgICB9KTtcblxuICAgICAgbmV3Q29udHJvbCA9IGZvcm1Hcm91cDtcbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBTY2hlbWFGb3JtQXJyYXkpIHtcbiAgICAgIGNvbnN0IGZvcm1BcnJheSA9IG5ldyBTY2hlbWFGb3JtQXJyYXkoW10sIGNvbnRyb2wudmFsaWRhdG9yLCBjb250cm9sLmFzeW5jVmFsaWRhdG9yKTtcbiAgICAgIGNvbnRyb2wuY29udHJvbHMuZm9yRWFjaCgoZm9ybUNvbnRyb2wpID0+IHtcbiAgICAgICAgZm9ybUFycmF5LnB1c2godGhpcy5jbG9uZUNvbnRyb2woZm9ybUNvbnRyb2wpKTtcbiAgICAgICAgcmV0dXJuIGZvcm1BcnJheTtcbiAgICAgIH0pO1xuXG4gICAgICBuZXdDb250cm9sID0gZm9ybUFycmF5O1xuICAgICAgKDxTY2hlbWFGb3JtQXJyYXk+bmV3Q29udHJvbCkuc2NoZW1hID0gY29udHJvbC5zY2hlbWE7XG4gICAgfSBlbHNlIGlmIChjb250cm9sIGluc3RhbmNlb2YgU2NoZW1hRm9ybUNvbnRyb2wpIHtcbiAgICAgIG5ld0NvbnRyb2wgPSBuZXcgU2NoZW1hRm9ybUNvbnRyb2woY29udHJvbC52YWx1ZSwgY29udHJvbC52YWxpZGF0b3IsIGNvbnRyb2wuYXN5bmNWYWxpZGF0b3IpO1xuICAgICAgKDxTY2hlbWFGb3JtQ29udHJvbD5uZXdDb250cm9sKS5zY2hlbWEgPSBjb250cm9sLnNjaGVtYTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvcjogdW5leHBlY3RlZCBjb250cm9sIHZhbHVlJyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRyb2wuZGlzYWJsZWQpIHtcbiAgICAgIG5ld0NvbnRyb2wuZGlzYWJsZSh7ZW1pdEV2ZW50OiBmYWxzZX0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdDb250cm9sO1xuICB9XG5cbiAgYWRkQ29udHJvbChmb3JtQXJyYXk6IEZvcm1BcnJheSkge1xuICAgIGZvcm1BcnJheS5wdXNoKHRoaXMuY2xvbmVDb250cm9sKGZvcm1BcnJheS5jb250cm9sc1swXSkpO1xuICB9XG5cbiAgcmVtb3ZlQ29udHJvbChmb3JtQXJyYXk6IEZvcm1BcnJheSwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmIChmb3JtQXJyYXkubGVuZ3RoID09PSAxKSB7XG4gICAgICBmb3JtQXJyYXkuY29udHJvbHNbMF0ucmVzZXQoKTtcbiAgICAgIGZvcm1BcnJheS5jb250cm9sc1swXS5kaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1BcnJheS5yZW1vdmVBdChpbmRleCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFycmF5Q29tcG9uZW50IH0gZnJvbSAnLi9hcnJheS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtuZ0NsYXNzXT1cIlsnYXJyYXknLCBjb250cm9sLnNjaGVtYS5rZXldXCI+XG4gICAgICA8aDYgKm5nSWY9XCJnZXRMZWdlbmQoY29udHJvbCkubGVuZ3RoXCI+e3tnZXRMZWdlbmQoY29udHJvbCl9fTwvaDY+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBhcnJDb250cm9sIG9mIGdldEVuYWJsZWRDb250cm9scyhjb250cm9sKTsgbGV0IGkgPSBpbmRleDtcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCIgamYtY29tcG9uZW50LWNob29zZXIgW2Zvcm1dPVwiYXJyQ29udHJvbFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFycmF5Vmlld0NvbXBvbmVudCBleHRlbmRzIEFycmF5Q29tcG9uZW50IHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNjaGVtYUZvcm1Db250cm9sIH0gZnJvbSAnLi4vbW9kZWxzL3NjaGVtYS1mb3JtLWNvbnRyb2wnO1xuaW1wb3J0IHsgU3RyaW5nVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdFZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvc2VsZWN0L3NlbGVjdC52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdW1iZXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGRzL251bWJlci9udW1iZXIudmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQm9vbGVhblZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvYm9vbGVhbi9ib29sZWFuLnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFBob3RvVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkcy9waG90by9waG90by52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0YXJlYVZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvdGV4dGFyZWEvdGV4dGFyZWEudmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvZGF0ZS9kYXRlLnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFJhZGlvZ3JvdXBWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGRzL3JhZGlvZ3JvdXAvcmFkaW9ncm91cC52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGVja2JveGdyb3VwVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkcy9jaGVja2JveGdyb3VwL2NoZWNrYm94Z3JvdXAudmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXVsdGlzZWxlY3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGRzL211bHRpc2VsZWN0L211bHRpc2VsZWN0LnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE1vbmV5Vmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkcy9tb25leS9tb25leS52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPYmplY3RDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC9jb21wb25lbnRzL29iamVjdC9vYmplY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEFycmF5Vmlld0NvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkL2NvbXBvbmVudHMvYXJyYXkvYXJyYXkudmlldy5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSnNvbkZvcm1GaWVsZHNTZXJ2aWNlIHtcbiAgbmFtZTogc3RyaW5nO1xuICByb290Vmlld0NvbnRhaW5lcjtcbiAgcHVibGljIGZpZWxkVHlwZXM6IHsgW3R5cGU6IHN0cmluZ106IGFueSB9ID0ge307XG4gIHByaXZhdGUgdmlld09ubHkgPSBmYWxzZTtcbiAgcHJpdmF0ZSB2aWV3VHlwZXM6IE9iamVjdCA9IHtcbiAgICBzdHJpbmc6IFN0cmluZ1ZpZXdDb21wb25lbnQsXG4gICAgc2VsZWN0OiBTZWxlY3RWaWV3Q29tcG9uZW50LFxuICAgIG51bWJlcjogTnVtYmVyVmlld0NvbXBvbmVudCxcbiAgICBib29sZWFuOiBCb29sZWFuVmlld0NvbXBvbmVudCxcbiAgICBwaG90bzogUGhvdG9WaWV3Q29tcG9uZW50LFxuICAgIHRleHRhcmVhOiBUZXh0YXJlYVZpZXdDb21wb25lbnQsXG4gICAgb2JqZWN0OiBPYmplY3RDb21wb25lbnQsXG4gICAgYXJyYXk6IEFycmF5Vmlld0NvbXBvbmVudCxcbiAgICBkYXRlOiBEYXRlVmlld0NvbXBvbmVudCxcbiAgICByYWRpb2dyb3VwOiBSYWRpb2dyb3VwVmlld0NvbXBvbmVudCxcbiAgICBjaGVja2JveGdyb3VwOiBDaGVja2JveGdyb3VwVmlld0NvbXBvbmVudCxcbiAgICBtdWx0aXNlbGVjdDogTXVsdGlzZWxlY3RWaWV3Q29tcG9uZW50LFxuICAgIG1vbmV5OiBNb25leVZpZXdDb21wb25lbnRcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICkge31cblxuICBzZXRSb290Vmlld0NvbnRhaW5lclJlZih2aWV3Q29udGFpbmVyUmVmKSB7XG4gICAgdGhpcy5yb290Vmlld0NvbnRhaW5lciA9IHZpZXdDb250YWluZXJSZWY7XG4gIH1cblxuICBhZGREeW5hbWljQ29tcG9uZW50KGNvbnRyb2w6IFNjaGVtYUZvcm1Db250cm9sKSB7XG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuZ2V0KGNvbnRyb2wpKTtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnJvb3RWaWV3Q29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuY29udHJvbCA9IGNvbnRyb2w7XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLnNjaGVtYSA9IGNvbnRyb2wuc2NoZW1hO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5zdHlsZSA9IGNvbnRyb2wuc3R5bGU7XG4gIH1cblxuICBoYXModHlwZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZmllbGRUeXBlcy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSB8fCB0aGlzLnZpZXdUeXBlcy5oYXNPd25Qcm9wZXJ0eSh0eXBlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyKHR5cGU6IHN0cmluZywgZmllbGQ6IGFueSkge1xuICAgIHRoaXMuZmllbGRUeXBlc1t0eXBlXSA9IGZpZWxkO1xuICAgIHRoaXMudmlld1R5cGVzW3R5cGVdID0gZmllbGQ7XG4gIH1cblxuICBnZXQoY29udHJvbCk6IGFueSB7XG4gICAgY29uc3QgdHlwZXM6IE9iamVjdCA9IHRoaXMudmlld09ubHkgPyB0aGlzLnZpZXdUeXBlcyA6IHRoaXMuZmllbGRUeXBlcztcblxuICAgIGlmICh0eXBlb2YoY29udHJvbCkgPT09ICdzdHJpbmcnICYmIHRoaXMuaGFzKGNvbnRyb2wpKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWVsZFR5cGVzW2NvbnRyb2xdO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIGEgZmllbGQgaXMgZ2V0dGluZyBvdmVycmlkZGVuIGJ5IGZvcm1hdFxuICAgIGlmICh0eXBlb2YoY29udHJvbC5zY2hlbWEuZm9ybWF0KSAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5oYXMoY29udHJvbC5zY2hlbWEuZm9ybWF0KSkge1xuICAgICAgcmV0dXJuIHR5cGVzW2NvbnRyb2wuc2NoZW1hLmZvcm1hdF07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZihjb250cm9sLnNjaGVtYS5lbnVtKSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29udHJvbC5zY2hlbWEudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgcmV0dXJuIHR5cGVzWydjaGVja2JveGdyb3VwJ107XG4gICAgfSBlbHNlIGlmICh0eXBlb2YoY29udHJvbC5zY2hlbWEuZW51bSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdHlwZXNbJ3NlbGVjdCddO1xuICAgIH0gZWxzZSBpZiAodGhpcy5oYXMoY29udHJvbC5zY2hlbWEuZm9ybWF0KSkge1xuICAgICAgcmV0dXJuIHR5cGVzW2NvbnRyb2wuc2NoZW1hLmZvcm1hdF07XG4gICAgfSBlbHNlIGlmICh0aGlzLmhhcyhjb250cm9sLnNjaGVtYS50eXBlKSkge1xuICAgICAgcmV0dXJuIHR5cGVzW2NvbnRyb2wuc2NoZW1hLnR5cGVdO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlc1snc3RyaW5nJ107XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZhbGlkYXRvckZuLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKc29uRm9ybVZhbGlkYXRvcnNTZXJ2aWNlIHtcbiAgdmFsaWRhdG9yczogQXJyYXk8YW55PjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnZhbGlkYXRvcnMgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQocHJvcCwgc2NoZW1hLCBwYXRoKSB7XG4gICAgY29uc3QgcmVxdWlyZWQgPSBzY2hlbWEucmVxdWlyZWQgfHwgW107XG4gICAgY29uc3QgZmllbGQgPSBzY2hlbWEucHJvcGVydGllc1twcm9wXTtcbiAgICBjb25zdCB2YXJQYXRoID0gW10uY29uY2F0KHBhdGgsIHByb3ApLmpvaW4oJy4nKTtcblxuICAgIGlmIChzY2hlbWEucHJvcGVydGllc1twcm9wXS50eXBlID09PSAnYm9vbGVhbicgJiYgcmVxdWlyZWQuaW5kZXhPZihwcm9wKSA+IC0xKSB7XG4gICAgICByZXR1cm4gVmFsaWRhdG9ycy5wYXR0ZXJuKCd0cnVlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFZhbGlkYXRvcnMuY29tcG9zZSh0aGlzLnZhbGlkYXRvcnMuY29uY2F0KFtcbiAgICAgICh0aGlzLmhhcyh2YXJQYXRoKSA/IHRoaXMudmFsaWRhdG9yc1t2YXJQYXRoXSA6IG51bGwpLFxuICAgICAgKHJlcXVpcmVkLmluZGV4T2YocHJvcCkgPiAtMSA/IFZhbGlkYXRvcnMucmVxdWlyZWQgOiBudWxsKSxcbiAgICAgIChmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnbWluTGVuZ3RoJykgPyBWYWxpZGF0b3JzLm1pbkxlbmd0aChmaWVsZC5taW5MZW5ndGgpIDogbnVsbCksXG4gICAgICAoZmllbGQuaGFzT3duUHJvcGVydHkoJ21heExlbmd0aCcpID8gVmFsaWRhdG9ycy5tYXhMZW5ndGgoZmllbGQubWF4TGVuZ3RoKSA6IG51bGwpLFxuICAgICAgKGZpZWxkLmhhc093blByb3BlcnR5KCdmb3JtYXQnKSAmJiBmaWVsZC5mb3JtYXQgPT09ICdlbWFpbCcgPyBWYWxpZGF0b3JzLmVtYWlsIDogbnVsbCksXG4gICAgICAoZmllbGQuaGFzT3duUHJvcGVydHkoJ21pbmltdW0nKSA/IFZhbGlkYXRvcnMubWluKGZpZWxkLm1pbmltdW0pIDogbnVsbCksXG4gICAgICAoZmllbGQuaGFzT3duUHJvcGVydHkoJ21heGltdW0nKSA/IFZhbGlkYXRvcnMubWF4KGZpZWxkLm1heGltdW0pIDogbnVsbCksXG4gICAgICAoZmllbGQucGF0dGVybiA/IFZhbGlkYXRvcnMucGF0dGVybihmaWVsZC5wYXR0ZXJuKSA6IG51bGwpXG4gICAgXSkpO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyKGZpZWxkOiBhbnksIHZhbGlkYXRvcjogVmFsaWRhdG9yRm4pIHtcbiAgICB0aGlzLnZhbGlkYXRvcnNbZmllbGRdID0gdmFsaWRhdG9yO1xuICB9XG5cbiAgcHVibGljIGhhcyhzdHIpIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3JzLmhhc093blByb3BlcnR5KHN0cik7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpzb25Gb3JtRGVmYXVsdHNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkZWZhdWx0VHlwZXM6IHsgW3R5cGU6IHN0cmluZ106IGFueSB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGVmYXVsdFR5cGVzID0gdGhpcy5kZWZhdWx0VHlwZXMgfHwge307XG4gIH1cblxuICBwdWJsaWMgZ2V0KHByb3AsIHNjaGVtYSwgZGF0YSkge1xuICAgIGNvbnN0IGRlZmF1bHRTdHJpbmcgPSAocHJvcC5oYXNPd25Qcm9wZXJ0eSgnZm9ybWF0JykgJiYgcHJvcC5mb3JtYXQgPT09ICdtdWx0aXNlbGVjdCcpID8gW10gOiAnJztcbiAgICBsZXQgZGVmYXVsdFZhbHVlID0gc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0uZGVmYXVsdCB8fCBkZWZhdWx0U3RyaW5nO1xuICAgIGlmICh0aGlzLmhhcyhzY2hlbWEucHJvcGVydGllc1twcm9wXS5kZWZhdWx0KSkge1xuICAgICAgZGVmYXVsdFZhbHVlID0gdGhpcy5ldmFsKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLmRlZmF1bHQpKCk7XG4gICAgfVxuXG4gICAgLy8gZGF0YSBvdmVycmlkZSBkZWZhdWx0c1xuICAgIGlmIChkYXRhICYmIGRhdGEuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IGRhdGFbcHJvcF07XG4gICAgfVxuXG4gICAgaWYgKHByb3AuaGFzT3duUHJvcGVydHkoJ2Zvcm1hdCcpICYmIHByb3AuZm9ybWF0ID09PSAnZGF0ZScgJiYgZGVmYXVsdFZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IG5ldyBEYXRlKGRlZmF1bHRWYWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZXZhbChzdHIpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0VHlwZXNbc3RyXTtcbiAgfVxuXG4gIHB1YmxpYyBoYXMoc3RyKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFR5cGVzLmhhc093blByb3BlcnR5KHN0cik7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXIoc3RyOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgIHRoaXMuZGVmYXVsdFR5cGVzW3N0cl0gPSBjYWxsYmFjaztcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBEb0NoZWNrLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgTmdGb3JtfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBKc29uRm9ybVZhbGlkYXRvcnNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbnRyb2wgfSBmcm9tICcuL21vZGVscy9zY2hlbWEtZm9ybS1jb250cm9sJztcbmltcG9ydCB7IEpzb25Gb3JtRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kZWZhdWx0cy5zZXJ2aWNlJztcbmltcG9ydCB7IFNjaGVtYUZvcm1Hcm91cCB9IGZyb20gJy4vbW9kZWxzL3NjaGVtYS1mb3JtLWdyb3VwJztcbmltcG9ydCB7IFNjaGVtYUZvcm1BcnJheSB9IGZyb20gJy4vbW9kZWxzL3NjaGVtYS1mb3JtLWFycmF5JztcbmltcG9ydCB7IEpzb25Gb3JtRmllbGRzU2VydmljZSB9IGZyb20gJy4vZnJhbWV3b3JrL2pzb24tZm9ybS1maWVsZHMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pmLWZvcm0sIHRydS1mb3JtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8Zm9ybVxuICAgICAgI3VzZXJGb3JtPVwibmdGb3JtXCJcbiAgICAgIFtmb3JtR3JvdXBdPVwiZm9ybVwiXG4gICAgICAobmdTdWJtaXQpPVwiaGFuZGxlT25TdWJtaXQoKVwiXG4gICAgICAqbmdJZj1cImlzVmFsaWRTY2hlbWEoKVwiXG4gICAgICBbbmdDbGFzc109XCJ7ICd2aWV3LW9ubHknOiB2aWV3T25seSB9XCJcbiAgICAgIFtpZF09XCJpZFwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBqZi1jb21wb25lbnQtY2hvb3NlclxuICAgICAgICBbbmdDbGFzc109XCJbb3V0ZXJDbGFzcyB8fCAnJywgdGhpcy5hY3RpdmVTdHlsZVsnZGVmYXVsdCddID8gdGhpcy5hY3RpdmVTdHlsZVsnZGVmYXVsdCddIDogJyddXCJcbiAgICAgICAgW2Zvcm1dPVwiZm9ybVwiXG4gICAgICAgIFtzY2hlbWFdPVwiYWN0aXZlU2NoZW1hXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgI3JlZj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgICNidXR0b25zXG4gICAgICAgICpuZ0lmPVwicmVmLmNoaWxkcmVuLmxlbmd0aCA9PSAwICYmIChzdWJtaXQgfHwgY2FuY2VsKVwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInsgJ21hcmdpbi10b3AtLWRvdWJsZSc6IHRydWUsICdwYWdlLWFjdGlvbnMtLWVkZ2VzJzogKGNhbmNlbCAmJiBzdWJtaXQpLCAncGFnZS1hY3Rpb25zLS1jZW50ZXInOiAoIWNhbmNlbCB8fCAhc3VibWl0KX1cIj5cbiAgICAgICAgPGpmLWZvcm0tYnV0dG9uXG4gICAgICAgICAgKm5nSWY9XCJjYW5jZWxcIlxuICAgICAgICAgIFtjYW5jZWxdPVwiY2FuY2VsXCJcbiAgICAgICAgICBbc3RlcHNdPVwic3RlcHNcIlxuICAgICAgICAgIFtpc011bHRpU3RlcF09XCJpc011bHRpU3RlcFwiXG4gICAgICAgICAgW2lzV29ya2luZ109XCJpc1dvcmtpbmdcIlxuICAgICAgICAgIChoYW5kbGVDbGljayk9XCJoYW5kbGVPbkNhbmNlbCgpXCJcbiAgICAgICAgICBbc3VibWl0Q2xhc3NdPVwic3VibWl0Q2xhc3NcIlxuICAgICAgICAgIFtjYW5jZWxDbGFzc109XCJjYW5jZWxDbGFzc1wiPlxuICAgICAgICA8L2pmLWZvcm0tYnV0dG9uPlxuICAgICAgICA8amYtZm9ybS1idXR0b25cbiAgICAgICAgICAqbmdJZj1cInN1Ym1pdFwiXG4gICAgICAgICAgW3N1Ym1pdENsYXNzXT1cInN1Ym1pdENsYXNzXCJcbiAgICAgICAgICBbY2FuY2VsQ2xhc3NdPVwiY2FuY2VsQ2xhc3NcIlxuICAgICAgICAgIFtzdWJtaXRdPVwic3VibWl0XCJcbiAgICAgICAgICBbc3RlcHNdPVwic3RlcHNcIlxuICAgICAgICAgIFtjb250aW51ZV09XCJjb250aW51ZVwiXG4gICAgICAgICAgW2lzTXVsdGlTdGVwXT1cImlzTXVsdGlTdGVwXCJcbiAgICAgICAgICBbaXNXb3JraW5nXT1cImlzV29ya2luZ1wiXG4gICAgICAgICAgW2lzRm9ybVZhbGlkXT1cInRoaXMuZm9ybS52YWxpZFwiPlxuICAgICAgICA8L2pmLWZvcm0tYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEpzb25Gb3JtQ29tcG9uZW50IGltcGxlbWVudHMgRG9DaGVjaywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgc2NoZW1hO1xuICBASW5wdXQoKSBkYXRhID0ge307XG4gIEBJbnB1dCgpIHN0eWxlID0ge307XG4gIEBJbnB1dCgpIGNvbnRpbnVlID0gJ0NvbnRpbnVlJztcbiAgQElucHV0KCkgc3VibWl0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNhbmNlbDogc3RyaW5nO1xuICBASW5wdXQoKSBzdWJtaXRDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBjYW5jZWxDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBvdXRlckNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlzV29ya2luZyA9IGZhbHNlO1xuICBASW5wdXQoKSBpc011bHRpU3RlcCA9IGZhbHNlO1xuICBASW5wdXQoKSBhY3RpdmVTdGVwID0gbnVsbDtcbiAgQElucHV0KCkgc3RhdGUgPSBmYWxzZTtcbiAgQElucHV0KCkgaWQgPSAnJztcbiAgQElucHV0KCkgZmllbGRzID0ge307XG4gIEBJbnB1dCgpIHZpZXdPbmx5ID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBoYW5kbGVTdGVwID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaGFuZGxlU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaGFuZGxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaGFuZGxlQ2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAVmlld0NoaWxkKCd1c2VyRm9ybScpIHVzZXJGb3JtOiBOZ0Zvcm07XG5cbiAgcHVibGljIGZvcm07XG4gIHB1YmxpYyBtb2RlbDtcbiAgcHVibGljIGNvbnRyb2wgPSB7IGtleTogJycsIHZhbHVlOiAnJywgaXNQYXJ0T2Y6IGZhbHNlIH07XG4gIHB1YmxpYyBvbGRTY2hlbWE6IHN0cmluZztcbiAgcHVibGljIG9sZERhdGE6IHN0cmluZztcbiAgcHVibGljIGNoYW5nZURldGVjdGVkID0gZmFsc2U7XG4gIHB1YmxpYyBvbGRBY3RpdmVTdGVwID0gJyc7XG4gIHB1YmxpYyBzdGVwcyA9IFtdO1xuICBwdWJsaWMgbXVsdGlTdGVwRGF0YSA9IHt9O1xuICBwdWJsaWMgYWN0aXZlU2NoZW1hID0ge307XG4gIHB1YmxpYyBhY3RpdmVTdHlsZSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgdmw6IEpzb25Gb3JtVmFsaWRhdG9yc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBkZjogSnNvbkZvcm1EZWZhdWx0c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBqZjogSnNvbkZvcm1GaWVsZHNTZXJ2aWNlXG4gICkge31cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMub2xkU2NoZW1hICE9PSBKU09OLnN0cmluZ2lmeSh0aGlzLnNjaGVtYSkpIHtcbiAgICAgIHRoaXMub2xkU2NoZW1hID0gSlNPTi5zdHJpbmdpZnkodGhpcy5zY2hlbWEpO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub2xkRGF0YSAhPT0gSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSkge1xuICAgICAgdGhpcy5vbGREYXRhID0gSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9sZEFjdGl2ZVN0ZXAgIT09IHRoaXMuYWN0aXZlU3RlcCkge1xuICAgICAgdGhpcy5vbGRBY3RpdmVTdGVwID0gdGhpcy5hY3RpdmVTdGVwO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2hhbmdlRGV0ZWN0ZWQpIHtcbiAgICAgIHRoaXMuYXBwZW5kRmllbGRzKCk7XG4gICAgICB0aGlzLmNvbnN0cnVjdEZvcm0oKTtcbiAgICAgIHRoaXMuamZbMF0udmlld09ubHkgPSB0aGlzLnZpZXdPbmx5O1xuICAgICAgdGhpcy5jYW5jZWwgPSB0aGlzLnZpZXdPbmx5ID8gJycgOiB0aGlzLmNhbmNlbDtcbiAgICAgIHRoaXMuc3VibWl0ID0gdGhpcy52aWV3T25seSA/ICcnIDogdGhpcy5zdWJtaXQ7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZm9ybSkge1xuICAgICAgdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIGFwcGVuZEZpZWxkcygpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmZpZWxkcykuZm9yRWFjaCgoZikgPT4ge1xuICAgICAgdGhpcy5qZlswXS5yZWdpc3RlcihmLCB0aGlzLmZpZWxkc1tmXSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RGb3JtKCkge1xuICAgIHRoaXMubW9kZWwgPSB7fTtcblxuICAgIGlmICh0aGlzLmlzVmFsaWRTY2hlbWEoKSkge1xuICAgICAgdGhpcy5hY3RpdmVTY2hlbWEgPSB0aGlzLnNjaGVtYTtcbiAgICAgIHRoaXMuYWN0aXZlU3R5bGUgPSB0aGlzLnN0eWxlO1xuXG4gICAgICAvLyBlbWl0IHRoZSBpbml0aWFsIHN0ZXAgZm9yIHRoZSBldmVudFxuICAgICAgaWYgKHRoaXMuc3RlcHMubGVuZ3RoID09PSAwICYmIHRoaXMuaXNNdWx0aVN0ZXApIHtcbiAgICAgICAgdGhpcy5zdGVwcyA9IHRoaXMuZ2V0U3RlcHModGhpcy5zY2hlbWEsIHRoaXMuYWN0aXZlU3RlcCk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3RlcC5lbWl0KHsgaWQ6IHRoaXMuaWQsIGRhdGE6IG51bGwsIHN0ZXBzOiB0aGlzLnN0ZXBzIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zdGVwcy5sZW5ndGggPiAwICYmIHRoaXMuaXNNdWx0aVN0ZXApIHtcbiAgICAgICAgY29uc3QgdmlzaWJsZVN0ZXBOYW1lID0gdGhpcy5hY3RpdmVTdGVwID4gMCA/IHRoaXMuYWN0aXZlU3RlcCA6IHRoaXMuc3RlcHMuZmluZCgocykgPT4gcy52aXNpYmxlKS5uYW1lO1xuICAgICAgICB0aGlzLmFjdGl2ZVNjaGVtYSA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbdmlzaWJsZVN0ZXBOYW1lXTtcbiAgICAgICAgdGhpcy5hY3RpdmVTdHlsZSA9IHRoaXMuc3R5bGUuaGFzT3duUHJvcGVydHkodmlzaWJsZVN0ZXBOYW1lKSA/IHRoaXMuc3R5bGVbdmlzaWJsZVN0ZXBOYW1lXSA6IHt9O1xuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLnN0YXRlICYmIHRoaXMubXVsdGlTdGVwRGF0YS5oYXNPd25Qcm9wZXJ0eSh2aXNpYmxlU3RlcE5hbWUpXG4gICAgICAgICAgPyB0aGlzLm11bHRpU3RlcERhdGFbdmlzaWJsZVN0ZXBOYW1lXSA6IHRoaXMuZGF0YTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hY3RpdmVTY2hlbWEgPSB0aGlzLnN1YlJlZnModGhpcy5hY3RpdmVTY2hlbWEpO1xuICAgICAgdGhpcy5tb2RlbCA9IHRoaXMuZ2VuZXJhdGVGb3JtKHRoaXMuYWN0aXZlU2NoZW1hLCB7fSwgdGhpcy5kYXRhLCB0aGlzLmFjdGl2ZVN0eWxlKTtcbiAgICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAodGhpcy5tb2RlbCk7XG5cbiAgICAgIHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2wuaXNQYXJ0T2YpIHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICAgIHRoaXMuY29uc3RydWN0Rm9ybSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UuZW1pdCh7IGlkOiB0aGlzLmlkLCBjb250cm9sOiB0aGlzLmNvbnRyb2wsIGRhdGEgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRTdGVwcyhzY2hlbWEsIGFjdGl2ZVN0ZXApOiBBcnJheTxhbnk+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLm1hcCgobmFtZSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCB0eXBlID0gJ3N0ZXAnO1xuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlU3RlcCA9IHRoaXMuYWN0aXZlU3RlcCB8fCBuYW1lO1xuICAgICAgICB0eXBlID0gJ2ZpcnN0JztcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKS5sZW5ndGggLSAxKSB7XG4gICAgICAgIHR5cGUgPSAnbGFzdCc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluZGV4LFxuICAgICAgICBuYW1lLFxuICAgICAgICB2aXNpYmxlOiBhY3RpdmVTdGVwID8gYWN0aXZlU3RlcCA9PT0gbmFtZSA6IGluZGV4ID09PSAwLFxuICAgICAgICB0eXBlLFxuICAgICAgICB0aXRsZTogc2NoZW1hLnByb3BlcnRpZXNbbmFtZV0uaGFzT3duUHJvcGVydHkoJ3RpdGxlJykgPyBzY2hlbWEucHJvcGVydGllc1tuYW1lXS50aXRsZSA6IG5hbWVcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBpc1ZhbGlkU2NoZW1hKCkge1xuICAgIHJldHVybiB0eXBlb2YgKHRoaXMuc2NoZW1hKSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXModGhpcy5zY2hlbWEpLmxlbmd0aCA+IDA7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlRm9ybSAoc2NoZW1hLCBncm91cD86IHt9LCBkYXRhPzoge30sIHN0eWxlPzoge30sIHBhdGg/OiBBcnJheTxhbnk+KSB7XG4gICAgaWYgKCF0aGlzLmlzVmlzaWJsZShzY2hlbWEpKSB7XG4gICAgICByZXR1cm4gZ3JvdXA7XG4gICAgfVxuXG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICBwYXRoID0gW107XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgIGlmICh0aGlzLmlzT25lT2Yoc2NoZW1hLCBwcm9wKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChzY2hlbWEucHJvcGVydGllc1twcm9wXS50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBncm91cERhdGEgPSBkYXRhICYmIGRhdGEuaGFzT3duUHJvcGVydHkocHJvcCkgPyBkYXRhW3Byb3BdIDoge307XG4gICAgICAgIGNvbnN0IGdyb3VwU3R5bGUgPSBzdHlsZSAmJiBzdHlsZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSA/IHN0eWxlW3Byb3BdIDoge307XG4gICAgICAgIGdyb3VwW3Byb3BdID0gbmV3IFNjaGVtYUZvcm1Hcm91cCh0aGlzLmdlbmVyYXRlRm9ybShzY2hlbWEucHJvcGVydGllc1twcm9wXSwge30sIGdyb3VwRGF0YSwgZ3JvdXBTdHlsZSwgW10uY29uY2F0KHBhdGgsIHByb3ApKSk7XG4gICAgICAgIGdyb3VwW3Byb3BdLnNjaGVtYSA9IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdO1xuICAgICAgICBncm91cFtwcm9wXS5zY2hlbWEua2V5ID0gcHJvcDtcbiAgICAgICAgZ3JvdXBbcHJvcF0uc3R5bGUgPSBncm91cFN0eWxlO1xuICAgICAgfSBlbHNlIGlmIChzY2hlbWEucHJvcGVydGllc1twcm9wXS50eXBlID09PSAnYXJyYXknICYmICF0aGlzLmlzRm9ybWF0KHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLCAnbXVsdGlzZWxlY3QnKSkge1xuICAgICAgICBwYXRoLnB1c2gocHJvcCk7XG4gICAgICAgIGNvbnN0IGFycmF5RGF0YSA9IGRhdGEgJiYgZGF0YS5oYXNPd25Qcm9wZXJ0eShwcm9wKSA/IGRhdGFbcHJvcF0gOiBbe31dO1xuICAgICAgICBjb25zdCBhcnJheVN0eWxlID0gc3R5bGUgJiYgc3R5bGUuaGFzT3duUHJvcGVydHkocHJvcCkgPyBzdHlsZVtwcm9wXSA6IHt9O1xuICAgICAgICBsZXQgZmJBcnJheSA9IFtdO1xuXG4gICAgICAgIGlmIChzY2hlbWEucHJvcGVydGllc1twcm9wXS5lbnVtKSB7XG4gICAgICAgICAgZmJBcnJheSA9IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLmVudW0ubWFwKChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250cm9sID0gbmV3IFNjaGVtYUZvcm1Db250cm9sKCk7XG4gICAgICAgICAgICBjb250cm9sLnNjaGVtYSA9IE9iamVjdC5hc3NpZ24oe30sIHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdKTtcbiAgICAgICAgICAgIGNvbnRyb2wuc2NoZW1hLmtleSA9IHByb3A7XG4gICAgICAgICAgICBjb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKGV2ZW50KSA9PiB0aGlzLmhhbmRsZU9uQ2hhbmdlKHByb3AsIGV2ZW50KSk7XG4gICAgICAgICAgICBjb250cm9sLmlzUmVxdWlyZWQgPSBzY2hlbWEuaGFzT3duUHJvcGVydHkoJ3JlcXVpcmVkJykgJiYgc2NoZW1hLnJlcXVpcmVkLmluZGV4T2YocHJvcCkgPiAtMTtcbiAgICAgICAgICAgIHJldHVybiBjb250cm9sO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZiQXJyYXkgPSBhcnJheURhdGEubWFwKChkYXRhQXRJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IG5ldyBTY2hlbWFGb3JtR3JvdXAodGhpcy5nZW5lcmF0ZUZvcm0oc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0uaXRlbXMsIHt9LCBkYXRhQXRJbmRleCwge30sIFtdLmNvbmNhdChwYXRoLCBwcm9wKSkpO1xuICAgICAgICAgICAgZy5zY2hlbWEgPSBzY2hlbWEucHJvcGVydGllc1twcm9wXTtcbiAgICAgICAgICAgIHJldHVybiBnO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JvdXBbcHJvcF0gPSBuZXcgU2NoZW1hRm9ybUFycmF5KGZiQXJyYXkpO1xuICAgICAgICBncm91cFtwcm9wXS5zY2hlbWEgPSBzY2hlbWEucHJvcGVydGllc1twcm9wXTtcbiAgICAgICAgZ3JvdXBbcHJvcF0uc2NoZW1hLmtleSA9IHByb3A7XG4gICAgICAgIGdyb3VwW3Byb3BdLnN0eWxlID0gYXJyYXlTdHlsZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1Zpc2libGUoc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0pKSB7XG5cbiAgICAgICAgY29uc3QgY29udHJvbCA9IG5ldyBTY2hlbWFGb3JtQ29udHJvbCh0aGlzLmRmLmdldChwcm9wLCBzY2hlbWEsIGRhdGEpLCB0aGlzLnZsLmdldChwcm9wLCBzY2hlbWEsIHBhdGgpKTtcbiAgICAgICAgY29udHJvbC5zY2hlbWEgPSBPYmplY3QuYXNzaWduKHt9LCBzY2hlbWEucHJvcGVydGllc1twcm9wXSk7XG4gICAgICAgIGNvbnRyb2wuc2NoZW1hLmtleSA9IHByb3A7XG4gICAgICAgIGNvbnRyb2wuZGF0YSA9IHRoaXMuZGYuZ2V0KHByb3AsIHNjaGVtYSwgZGF0YSk7XG4gICAgICAgIGNvbnRyb2wuc3R5bGUgPSAoc3R5bGUgJiYgc3R5bGUuaGFzT3duUHJvcGVydHkocHJvcCkpID8gc3R5bGVbcHJvcF0gOiB7fTtcbiAgICAgICAgY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChldmVudCkgPT4gdGhpcy5oYW5kbGVPbkNoYW5nZShwcm9wLCBldmVudCwgdGhpcy5pbk9uZU9mKHNjaGVtYSwgcHJvcCkpKTtcbiAgICAgICAgY29udHJvbC5pc1JlcXVpcmVkID0gc2NoZW1hLmhhc093blByb3BlcnR5KCdyZXF1aXJlZCcpICYmIHNjaGVtYS5yZXF1aXJlZC5pbmRleE9mKHByb3ApID4gLTE7XG5cbiAgICAgICAgZ3JvdXBbcHJvcF0gPSBjb250cm9sO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGdyb3VwO1xuICB9XG5cbiAgaXNPbmVPZihzY2hlbWEsIHByb3ApIHtcbiAgICBpZiAodHlwZW9mIChzY2hlbWEub25lT2YpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHNjaGVtYS5vbmVPZi5maWx0ZXIoKHApID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMocC5wcm9wZXJ0aWVzKVswXTtcblxuICAgICAgICBpZiAocC5wcm9wZXJ0aWVzW2tleV0ucmVxdWlyZWQuaW5kZXhPZihwcm9wKSA+IC0xKSB7XG4gICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5kYXRhW2tleV07XG4gICAgICAgICAgaWYgKHNjaGVtYS5wcm9wZXJ0aWVzW2tleV0udHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IFN0cmluZyh0aGlzLmRhdGFba2V5XSkgPT09ICd0cnVlJzsgLy8gbWF0ZXJpYWwgcHJlc2VydmVzIHN0cmluZyAmIGJvb3RzdHJhcCBkb2Vzbid0XG4gICAgICAgICAgfSBlbHNlIGlmIChzY2hlbWEucHJvcGVydGllc1trZXldLnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB2YWx1ZSA9ICt0aGlzLmRhdGFba2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmhhc093blByb3BlcnR5KGtleSkgPT09IGZhbHNlIHx8IHAucHJvcGVydGllc1trZXldLmVudW0uaW5kZXhPZih2YWx1ZSkgPT09IC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSkubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpbk9uZU9mKHNjaGVtYSwgcHJvcCkge1xuICAgIGlmICh0eXBlb2YgKHNjaGVtYS5vbmVPZikgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gc2NoZW1hLm9uZU9mLmZpbHRlcigocCkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhwLnByb3BlcnRpZXMpWzBdO1xuICAgICAgICByZXR1cm4ga2V5ID09PSBwcm9wO1xuICAgICAgfSkubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc1Zpc2libGUgKHByb3ApIHtcbiAgICByZXR1cm4gcHJvcC5oYXNPd25Qcm9wZXJ0eSgndmlzaWJsZScpID09PSBmYWxzZSB8fCAocHJvcC5oYXNPd25Qcm9wZXJ0eSgndmlzaWJsZScpICYmIHByb3AudmlzaWJsZSA9PT0gdHJ1ZSk7XG4gIH1cblxuICBpc0Zvcm1hdChwcm9wLCBmb3JtYXQpIHtcbiAgICByZXR1cm4gcHJvcC5oYXNPd25Qcm9wZXJ0eSgnZm9ybWF0JykgJiYgcHJvcC5mb3JtYXQgPT09IGZvcm1hdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRlcm5hbCBtZXRob2QgZm9yIGVuc3VyaW5nIHRoZSBmb3JtIGlzIHZhbGlkXG4gICAqL1xuICBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvcm0udmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBleHRlcm5hbCBzdWJtaXNzaW9uXG4gICAqL1xuICBzdWJtaXRGb3JtKCkge1xuICAgIHRoaXMudXNlckZvcm0ubmdTdWJtaXQuZW1pdCgpO1xuICB9XG5cbiAgaGFuZGxlT25TdWJtaXQoKSB7XG4gICAgdGhpcy50b3VjaEFsbCh0aGlzLmZvcm0uY29udHJvbHMpO1xuXG4gICAgaWYgKHRoaXMuZm9ybS52YWxpZCAmJiB0aGlzLmlzTXVsdGlTdGVwKSB7XG4gICAgICBjb25zdCBwcmV2ID0gdGhpcy5zdGVwcy5maW5kSW5kZXgoKHMpID0+IHMudmlzaWJsZSk7XG4gICAgICB0aGlzLm11bHRpU3RlcERhdGFbdGhpcy5hY3RpdmVTdGVwXSA9IHRoaXMuZm9ybS52YWx1ZTtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLnN0ZXBzLmZpbmRJbmRleCgocykgPT4gcy5uYW1lID09PSB0aGlzLmFjdGl2ZVN0ZXApO1xuICAgICAgY29uc3QgbmV4dCA9IGN1cnJlbnQgKyAxO1xuXG4gICAgICBpZiAodHlwZW9mICh0aGlzLnN0ZXBzW25leHRdKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zdGVwc1twcmV2XS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RlcHNbbmV4dF0udmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWN0aXZlU3RlcCA9IHRoaXMuc3RlcHNbbmV4dF0ubmFtZTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdGVwLmVtaXQoe1xuICAgICAgICAgIGRpcjogJ25leHQnLFxuICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgIGRhdGE6IHsgW3RoaXMuc3RlcHNbcHJldl0ubmFtZV06IHRoaXMubXVsdGlTdGVwRGF0YVt0aGlzLnN0ZXBzW3ByZXZdLm5hbWVdIH0sXG4gICAgICAgICAgc3RlcHM6IHRoaXMuc3RlcHNcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29uc3RydWN0Rm9ybSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQuZW1pdCh0aGlzLm11bHRpU3RlcERhdGEpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcbiAgICAgIHRoaXMuaGFuZGxlU3VibWl0LmVtaXQodGhpcy5mb3JtLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVPbkNoYW5nZShrZXksIHZhbHVlLCBpc1BhcnRPZiA9IGZhbHNlKSB7XG4gICAgdGhpcy5jb250cm9sID0geyBrZXksIHZhbHVlLCBpc1BhcnRPZiB9O1xuICB9XG5cbiAgaGFuZGxlT25DYW5jZWwoKSB7XG4gICAgaWYgKHRoaXMuaXNNdWx0aVN0ZXApIHtcbiAgICAgIGNvbnN0IHByZXYgPSB0aGlzLnN0ZXBzLmZpbmRJbmRleCgocykgPT4gcy52aXNpYmxlKTtcbiAgICAgIHRoaXMuc3RlcHNbcHJldl0udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuc3RlcHMuZmluZEluZGV4KChzKSA9PiBzLm5hbWUgPT09IHRoaXMuYWN0aXZlU3RlcCk7XG4gICAgICBjb25zdCBuZXh0ID0gY3VycmVudCAtIDE7XG5cbiAgICAgIGlmICh0eXBlb2YgKHRoaXMuc3RlcHNbbmV4dF0pICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnN0ZXBzW25leHRdLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGl2ZVN0ZXAgPSB0aGlzLnN0ZXBzW25leHRdLm5hbWU7XG4gICAgICAgIHRoaXMuaGFuZGxlU3RlcC5lbWl0KHtcbiAgICAgICAgICBkaXI6ICdwcmV2JyxcbiAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICBkYXRhOiB7IFt0aGlzLnN0ZXBzW2N1cnJlbnRdLm5hbWVdOiB0aGlzLm11bHRpU3RlcERhdGFbdGhpcy5zdGVwc1twcmV2XS5uYW1lXSB9LFxuICAgICAgICAgIHN0ZXBzOiB0aGlzLnN0ZXBzXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbnN0cnVjdEZvcm0oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2FuY2VsLmVtaXQodGhpcy5mb3JtLnZhbHVlKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLmhhbmRsZUNhbmNlbC5lbWl0KHRoaXMuZm9ybS52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdG91Y2hBbGwoY29udHJvbHMpIHtcbiAgICBPYmplY3Qua2V5cyhjb250cm9scykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoY29udHJvbHNba2V5XS5oYXNPd25Qcm9wZXJ0eSgnY29udHJvbHMnKSkge1xuICAgICAgICB0aGlzLnRvdWNoQWxsKGNvbnRyb2xzW2tleV0uY29udHJvbHMpO1xuICAgICAgfVxuICAgICAgY29udHJvbHNba2V5XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfSk7XG4gIH1cblxuICBzdWJSZWZzKHNjaGVtYSkge1xuICAgIE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICBpZiAoc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0uaGFzT3duUHJvcGVydHkoJyRyZWYnKSkge1xuICAgICAgICBzY2hlbWEucHJvcGVydGllc1twcm9wXSA9IHRoaXMuc2NoZW1hLmRlZmluaXRpb25zW3NjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdWyckcmVmJ10ucmVwbGFjZSgnIy9kZWZpbml0aW9ucy8nLCAnJyldO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNjaGVtYTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxsYWJlbCBbYXR0ci5jbGFzc109XCJzY2hlbWEua2V5XCIgW25nQ2xhc3NdPVwieydtYXJnaW4tYm90dG9tLS1oYWxmJzogdHJ1ZSwgcmVxdWlyZWQ6IGlzUmVxdWlyZWQoKX1cIj5cbiAgICAgIHt7dGl0bGUoKX19PHN1cCAqbmdJZj1cImlzUmVxdWlyZWQoKVwiPio8L3N1cD48L2xhYmVsPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwidGhpcy5zY2hlbWEuZGVzY3JpcHRpb25cIiBbYXR0ci5jbGFzc109XCInaW5mbydcIiBbYXR0ci50aXRsZV09XCJ0aGlzLnNjaGVtYS5kZXNjcmlwdGlvblwiPkluZm88L2J1dHRvbj5cbiAgICA8ZGl2IFtjbGFzc109XCJnZXRDbGFzcygnY2hlY2tib3gtZ3JvdXAnKVwiPlxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgY2hpbGQgb2YgdGhpcy5jb250cm9sWydjb250cm9scyddOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgICAgW25nQ2xhc3NdPVwieydjaGVja2JveC1jb250YWluZXInOiB0cnVlLCAnY2hlY2tlZCc6IGNoaWxkLnZhbHVlID09PSBzY2hlbWEuZW51bVtpXX1cIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBbYXR0ci5pZF09XCJnZXRJZChpLCBzY2hlbWEuZW51bVtpXSlcIlxuICAgICAgICAgIFtjaGVja2VkXT1cImNoaWxkLnZhbHVlID09PSBzY2hlbWEuZW51bVtpXVwiXG4gICAgICAgICAgW25hbWVdPVwic2NoZW1hLmtleVwiXG4gICAgICAgICAgW2Zvcm1Db250cm9sXT1cImNoaWxkXCJcbiAgICAgICAgICAoY2hhbmdlKT1cInNldFZhbHVlKCRldmVudCwgaSlcIlxuICAgICAgICAgIFt2YWx1ZV09XCJzY2hlbWEuZW51bVtpXVwiIC8+XG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgIFthdHRyLmZvcl09XCJnZXRJZChpLCBzY2hlbWEuZW51bVtpXSlcIlxuICAgICAgICAgIFthdHRyLmNsYXNzXT1cInNjaGVtYS5rZXlcIj5cbiAgICAgICAgICB7e2VudW1OYW1lcyhpKX19XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8amYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvamYtZXJyb3I+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hncm91cENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIGNoZWNrYm94R3JvdXBWYWx1ZXMgPSBbXTtcbiAgcmFuZG9tU3VmZml4ID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xuXG4gIHNldFZhbHVlKGV2ZW50LCBpbmRleCkge1xuICAgIGlmICh0aGlzLmNoZWNrYm94R3JvdXBWYWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmNoZWNrYm94R3JvdXBWYWx1ZXMgPSBuZXcgQXJyYXkodGhpcy5jb250cm9sWydjb250cm9scyddLmxlbmd0aCkuZmlsbChudWxsKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jaGVja2JveEdyb3VwVmFsdWVzW2luZGV4XSA9PT0gbnVsbCkge1xuICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gdGhpcy5zY2hlbWEuZW51bVtpbmRleF07XG4gICAgICB0aGlzLmNoZWNrYm94R3JvdXBWYWx1ZXNbaW5kZXhdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoZWNrYm94R3JvdXBWYWx1ZXNbaW5kZXhdID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodGhpcy5jaGVja2JveEdyb3VwVmFsdWVzKTtcbiAgfVxuXG4gIGdldElkKGksIHZhbCkge1xuICAgIHJldHVybiBgJHtpfS0ke3ZhbC5yZXBsYWNlKC9bXFxXX10rL2csICcnKX0rJHt0aGlzLnJhbmRvbVN1ZmZpeH1gO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsIFthdHRyLmNsYXNzXT1cInNjaGVtYS5rZXlcIiBbbmdDbGFzc109XCJ7cmVxdWlyZWQ6IGlzUmVxdWlyZWQoKX1cIj5cbiAgICAgIHt7dGl0bGUoKX19PHN1cCAqbmdJZj1cImlzUmVxdWlyZWQoKVwiPio8L3N1cD5cbiAgICA8L2xhYmVsPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwic2NoZW1hLmRlc2NyaXB0aW9uXCIgW2F0dHIuY2xhc3NdPVwiJ2luZm8nXCIgW2F0dHIudGl0bGVdPVwidGhpcy5zY2hlbWEuZGVzY3JpcHRpb25cIj5JbmZvPC9idXR0b24+XG4gICAgPHNlbGVjdFxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgbXVsdGlwbGU9XCJtdWx0aXBsZVwiXG4gICAgPlxuICAgICAgPG9wdGlvblxuICAgICAgICAqbmdGb3I9XCJsZXQgZW4gb2Ygc2NoZW1hLmVudW07IGxldCBpID0gaW5kZXhcIlxuICAgICAgICBbc2VsZWN0ZWRdPVwiY29udHJvbC52YWx1ZSA9PT0gZW5cIlxuICAgICAgICBbbmdWYWx1ZV09XCJlblwiPlxuICAgICAgICB7e2VudW1OYW1lcyhpKX19XG4gICAgICA8L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aXNlbGVjdENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIGVudW1OYW1lcyhpbmRleCkge1xuICAgIHJldHVybiB0eXBlb2YodGhpcy5zY2hlbWEuZW51bU5hbWVzKSA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gdGhpcy5zY2hlbWEuZW51bVtpbmRleF1cbiAgICAgIDogdGhpcy5zY2hlbWEuZW51bU5hbWVzW2luZGV4XTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxsYWJlbFxuICAgICAgW25nQ2xhc3NdPVwiWydqZi1sYWJlbCcsIHNjaGVtYS5rZXksIChpc1JlcXVpcmVkKCkgPyAncmVxdWlyZWQnIDogJycpXVwiPlxuICAgICAge3t0aXRsZSgpfX08c3VwICpuZ0lmPVwiaXNSZXF1aXJlZCgpXCI+Kjwvc3VwPlxuICAgIDwvbGFiZWw+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJ0aGlzLnNjaGVtYS5kZXNjcmlwdGlvblwiIFthdHRyLmNsYXNzXT1cIidpbmZvJ1wiIFthdHRyLnRpdGxlXT1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCI+SW5mbzwvYnV0dG9uPlxuICAgIDx0ZXh0YXJlYVxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgW25hbWVdPVwic2NoZW1hLmtleVwiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiXG4gICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICAgIFthdHRyLm1pbkxlbmd0aF09XCJzY2hlbWEubWluTGVuZ3RoIHx8IG51bGxcIlxuICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIoKVwiXG4gICAgPjwvdGV4dGFyZWE+XG4gICAgPGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L2pmLWVycm9yPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFRleHRhcmVhQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHtcbiAgcmFuZG9tU3VmZml4ID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xuXG4gIGdldElkKGksIHZhbCkge1xuICAgIHJldHVybiBgJHtpfS0ke3ZhbC50b1N0cmluZygpLnJlcGxhY2UoL1tcXFdfXSsvZywgJycpfSske3RoaXMucmFuZG9tU3VmZml4fWA7XG4gIH1cblxuICBnZXROYW1lKGtleSkge1xuICAgIHJldHVybiBgJHtrZXl9LSR7dGhpcy5yYW5kb21TdWZmaXh9YDtcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdC1jb250YWluZXJcIj5cbiAgICAgIDxsYWJlbFxuICAgICAgICBbbmdDbGFzc109XCJbJ2pmLWxhYmVsJywgc2NoZW1hLmtleSwgKGlzUmVxdWlyZWQoKSA/ICdyZXF1aXJlZCcgOiAnJyldXCI+XG4gICAgICAgIHt7dGl0bGUoKX19PHN1cCAqbmdJZj1cImlzUmVxdWlyZWQoKVwiPio8L3N1cD5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCIgW2F0dHIuY2xhc3NdPVwiJ2luZm8nXCIgW2F0dHIudGl0bGVdPVwidGhpcy5zY2hlbWEuZGVzY3JpcHRpb25cIj5JbmZvPC9idXR0b24+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiXG4gICAgICA+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBbc2VsZWN0ZWRdPVwiY29udHJvbC52YWx1ZSA9PT0gJydcIiBbZGlzYWJsZWRdPVwidHJ1ZVwiPlxuICAgICAgICAgIHt7ZW1wdHlPcHRpb24oKX19XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGVuIG9mIHRoaXMuc2NoZW1hLmVudW07IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgIFtzZWxlY3RlZF09XCJjb250cm9sLnZhbHVlID09PSBlblwiXG4gICAgICAgICAgW25nVmFsdWVdPVwiZW5cIj5cbiAgICAgICAgICB7e2VudW1OYW1lcyhpKX19XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gICAgPGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L2pmLWVycm9yPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIGVtcHR5T3B0aW9uKCkge1xuICAgIHJldHVybiBzdXBlci50aXRsZSgpLnJlcGxhY2UoL1teQS1aMC05XSskL2lnLCAnJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtjbGFzc109XCJnZXRDbGFzcygnY2hlY2tib3gtZ3JvdXAnKVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94LWNvbnRhaW5lclwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBbaWRdPVwic2NoZW1hLmtleVwiXG4gICAgICAgICAgW25hbWVdPVwic2NoZW1hLmtleVwiXG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwic2NoZW1hLmtleVwiIFthdHRyLmNsYXNzXT1cInNjaGVtYS5rZXlcIiBbbmdDbGFzc109XCJ7cmVxdWlyZWQ6IGlzUmVxdWlyZWQoKX1cIj5cbiAgICAgICAgICB7e3RpdGxlKCl9fTxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8amYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvamYtZXJyb3I+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQm9vbGVhbkNvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxsYWJlbCBbbmdDbGFzc109XCJbJ2pmLWxhYmVsJywgc2NoZW1hLmtleSwgKGlzUmVxdWlyZWQoKSA/ICdyZXF1aXJlZCcgOiAnJyldXCIgKm5nSWY9XCJ0eXBlKCkgIT09ICdoaWRkZW4nXCI+XG4gICAgICB7e3RpdGxlKCl9fTxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+XG4gICAgPC9sYWJlbD5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCIgW2F0dHIuY2xhc3NdPVwiJ2luZm8nXCIgW2F0dHIudGl0bGVdPVwidGhpcy5zY2hlbWEuZGVzY3JpcHRpb25cIj5JbmZvPC9idXR0b24+XG4gICAgPGlucHV0XG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICBbbmFtZV09XCJzY2hlbWEua2V5XCJcbiAgICAgIFthdHRyLnR5cGVdPVwiJ251bWJlcidcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIoKVwiXG4gICAgLz5cbiAgICA8amYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvamYtZXJyb3I+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsIFthdHRyLmNsYXNzXT1cInNjaGVtYS5rZXlcIiBbbmdDbGFzc109XCJ7cmVxdWlyZWQ6IGlzUmVxdWlyZWQoKX1cIj5cbiAgICAgIHt7dGl0bGUoKX19PHN1cCAqbmdJZj1cImlzUmVxdWlyZWQoKVwiPio8L3N1cD5cbiAgICA8L2xhYmVsPlxuICAgIDxkaXYgKm5nSWY9XCJwcmV2aWV3U3JjRXhpc3RzKClcIiBjbGFzcz1cInBob3RvLXByZXZpZXdcIj5cbiAgICAgIDxpbWcgW2F0dHIuc3JjXT1cInBob3RvRGF0YVwiIC8+XG4gICAgICA8c3BhbiBocmVmPVwiI1wiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiIChjbGljayk9XCJjbGVhclBob3RvKClcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJsYSBsYS1jbG9zZVwiPjwvaT5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPGlucHV0XG4gICAgICAgICpuZ0lmPVwiIXByZXZpZXdTcmNFeGlzdHMoKVwiXG4gICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIC8+XG4gICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIFtuYW1lXT1cInNjaGVtYS5rZXlcIiBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiIC8+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgUGhvdG9Db21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICBwdWJsaWMgcGhvdG9EYXRhOiBzdHJpbmc7XG5cbiAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9jZXNzRmlsZShyZWFkZXIucmVzdWx0LCBmaWxlLnR5cGUpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5waG90b0RhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHRoaXMucGhvdG9EYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciByZWFkaW5nIHRoZSBmaWxlIScpO1xuICAgIH07XG5cbiAgICBpZiAodHlwZW9mKGZpbGUpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfVxuICB9XG5cbiAgcHJldmlld1NyY0V4aXN0cygpIHtcbiAgICByZXR1cm4gdHlwZW9mICh0aGlzLnBob3RvRGF0YSkgPT09ICdzdHJpbmcnO1xuICB9XG5cbiAgY2xlYXJQaG90bygpIHtcbiAgICB0aGlzLnBob3RvRGF0YSA9IG51bGw7XG4gICAgdGhpcy5jb250cm9sLnJlc2V0KCk7XG4gIH1cblxuICBwcm9jZXNzRmlsZShkYXRhVVJMLCBmaWxlVHlwZSkge1xuICAgIGNvbnN0IG1heFdpZHRoID0gODAwO1xuICAgIGNvbnN0IG1heEhlaWdodCA9IDgwMDtcblxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gZGF0YVVSTDtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gaW1hZ2Uud2lkdGg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGltYWdlLmhlaWdodDtcbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzaXplID0gKHdpZHRoID4gbWF4V2lkdGgpIHx8IChoZWlnaHQgPiBtYXhIZWlnaHQpO1xuXG4gICAgICAgIGlmICghc2hvdWxkUmVzaXplKSB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhVVJMKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBuZXdXaWR0aDtcbiAgICAgICAgbGV0IG5ld0hlaWdodDtcblxuICAgICAgICBpZiAod2lkdGggPiBoZWlnaHQpIHtcbiAgICAgICAgICBuZXdIZWlnaHQgPSBoZWlnaHQgKiAobWF4V2lkdGggLyB3aWR0aCk7XG4gICAgICAgICAgbmV3V2lkdGggPSBtYXhXaWR0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdXaWR0aCA9IHdpZHRoICogKG1heEhlaWdodCAvIGhlaWdodCk7XG4gICAgICAgICAgbmV3SGVpZ2h0ID0gbWF4SGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IG5ld1dpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBuZXdXaWR0aCwgbmV3SGVpZ2h0KTtcblxuICAgICAgICByZXNvbHZlKGNhbnZhcy50b0RhdGFVUkwoZmlsZVR5cGUpKTtcbiAgICAgIH07XG5cbiAgICAgIGltYWdlLm9uZXJyb3IgPSAoZXJyKSA9PiByZWplY3QoZXJyKTtcbiAgICB9KTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsXG4gICAgICBbbmdDbGFzc109XCJbJ21hcmdpbi1ib3R0b20tLWhhbGYnLCAnamYtbGFiZWwnLCBzY2hlbWEua2V5LCAoaXNSZXF1aXJlZCgpID8gJ3JlcXVpcmVkJyA6ICcnKV1cIj5cbiAgICAgIHt7dGl0bGUoKX19PHN1cCAqbmdJZj1cImlzUmVxdWlyZWQoKVwiPio8L3N1cD48L2xhYmVsPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwidGhpcy5zY2hlbWEuZGVzY3JpcHRpb25cIiBbYXR0ci5jbGFzc109XCInaW5mbydcIiBbYXR0ci50aXRsZV09XCJ0aGlzLnNjaGVtYS5kZXNjcmlwdGlvblwiPkluZm88L2J1dHRvbj5cbiAgICA8ZGl2IFtjbGFzc109XCJnZXRDbGFzcygncmFkaW8tZ3JvdXAnKVwiPlxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZW51bSBvZiB0aGlzLnNjaGVtYS5lbnVtOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgICAgW25nQ2xhc3NdPVwieydyYWRpby1jb250YWluZXInOiB0cnVlLCAnY2hlY2tlZCc6IGNvbnRyb2wudmFsdWUgPT09IGVudW19XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgW2F0dHIuaWRdPVwiZ2V0SWQoaSwgZW51bSlcIlxuICAgICAgICAgIFtjaGVja2VkXT1cImNvbnRyb2wudmFsdWUgPT09IGVudW1cIlxuICAgICAgICAgIFtuYW1lXT1cImdldE5hbWUoc2NoZW1hLmtleSlcIlxuICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgICAgICBbdmFsdWVdPVwiZW51bVwiIC8+XG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgIFthdHRyLmZvcl09XCJnZXRJZChpLCBlbnVtKVwiXG4gICAgICAgICAgW2F0dHIuY2xhc3NdPVwic2NoZW1hLmtleVwiPlxuICAgICAgICAgICB7e2VudW1OYW1lcyhpKX19XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8amYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvamYtZXJyb3I+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9ncm91cENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIHJhbmRvbVN1ZmZpeCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcblxuICBnZXRJZChpLCB2YWwpIHtcbiAgICAgIHJldHVybiBgJHtpfS0ke3ZhbC50b1N0cmluZygpLnJlcGxhY2UoL1tcXFdfXSsvZywgJycpfSske3RoaXMucmFuZG9tU3VmZml4fWA7XG4gIH1cblxuICBnZXROYW1lKGtleSkge1xuICAgIHJldHVybiBgJHtrZXl9LSR7dGhpcy5yYW5kb21TdWZmaXh9YDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxsYWJlbFxuICAgICAgW25nQ2xhc3NdPVwiWydqZi1sYWJlbCcsIHNjaGVtYS5rZXksIChpc1JlcXVpcmVkKCkgPyAncmVxdWlyZWQnIDogJycpXVwiICpuZ0lmPVwidHlwZSgpICE9PSAnaGlkZGVuJ1wiPlxuICAgICAge3t0aXRsZSgpfX08c3VwICpuZ0lmPVwiaXNSZXF1aXJlZCgpXCI+Kjwvc3VwPlxuICAgIDwvbGFiZWw+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJ0aGlzLnNjaGVtYS5kZXNjcmlwdGlvblwiIFthdHRyLmNsYXNzXT1cIidpbmZvJ1wiIFthdHRyLnRpdGxlXT1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCI+SW5mbzwvYnV0dG9uPlxuICAgIDxpbnB1dFxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgW25hbWVdPVwic2NoZW1hLmtleVwiXG4gICAgICBbYXR0ci50eXBlXT1cInR5cGUoKVwiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiXG4gICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICAgIFthdHRyLm1pbkxlbmd0aF09XCJzY2hlbWEubWluTGVuZ3RoIHx8IG51bGxcIlxuICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIoKVwiXG4gICAgICBbdGV4dE1hc2tdPVwieyBtYXNrOiBnZXRNYXNrKCkgfVwiXG4gICAgLz5cbiAgICA8amYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvamYtZXJyb3I+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU3RyaW5nQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxsYWJlbCBbbmdDbGFzc109XCJbJ2pmLWxhYmVsJywgc2NoZW1hLmtleSwgKGlzUmVxdWlyZWQoKSA/ICdyZXF1aXJlZCcgOiAnJyldXCI+XG4gICAgICB7e3RpdGxlKCl9fTxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+XG4gICAgPC9sYWJlbD5cbiAgICA8aW5wdXRcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyKClcIlxuICAgICAgW2JzQ29uZmlnXT1cInsgY29udGFpbmVyQ2xhc3M6ICd0aGVtZS1kZWZhdWx0JywgZGF0ZUlucHV0Rm9ybWF0OiAnTU0vREQvWVlZWScgfVwiXG4gICAgICBic0RhdGVwaWNrZXJcbiAgICAvPlxuICAgIDxqZi1lcnJvciBbY29udHJvbF09XCJjb250cm9sXCI+PC9qZi1lcnJvcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHt9XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdqZi1idXR0b24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b25cbiAgICAgICpuZ0lmPVwiaXNWaXNpYmxlXCJcbiAgICAgIFt0eXBlXT1cInR5cGVcIlxuICAgICAgW25nQ2xhc3NdPVwiY2xhc3NcIlxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIChjbGljayk9XCJoYW5kbGVDbGljaygkZXZlbnQpXCI+XG4gICAgICB7e2xhYmVsfX1cbiAgICA8L2J1dHRvbj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQge1xuICBASW5wdXQoKSBpc1Zpc2libGU7XG4gIEBJbnB1dCgpIHR5cGU7XG4gIEBJbnB1dCgpIGNsYXNzO1xuICBASW5wdXQoKSBpc1dvcmtpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkO1xuICBASW5wdXQoKSBzdWJtaXQ7XG4gIEBJbnB1dCgpIGxhYmVsO1xuICBASW5wdXQoKSBjb2xvciA9ICcnO1xuICBAT3V0cHV0KCkgaGFuZGxlQnV0dG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrLmVtaXQoZXZlbnQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcbmltcG9ydCBjcmVhdGVOdW1iZXJNYXNrIGZyb20gJ3RleHQtbWFzay1hZGRvbnMvZGlzdC9jcmVhdGVOdW1iZXJNYXNrJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsIFtuZ0NsYXNzXT1cIlsnamYtbGFiZWwnLCBzY2hlbWEua2V5LCAoaXNSZXF1aXJlZCgpID8gJ3JlcXVpcmVkJyA6ICcnKV1cIj5cbiAgICAgIHt7dGl0bGUoKX19PHN1cCAqbmdJZj1cImlzUmVxdWlyZWQoKVwiPio8L3N1cD5cbiAgICA8L2xhYmVsPlxuICAgIDxpbnB1dFxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgW25hbWVdPVwic2NoZW1hLmtleVwiXG4gICAgICBbYXR0ci50eXBlXT1cIid0ZXh0J1wiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIoKVwiXG4gICAgICBbdGV4dE1hc2tdPVwieyBtYXNrOiBudW1iZXJNYXNrfVwiXG4gICAgICAoaW5wdXQpPWNsZWFuTWFzaygkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIC8+XG4gICAgPGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L2pmLWVycm9yPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE1vbmV5Q29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHtcbiAgbnVtYmVyTWFzayA9IGNyZWF0ZU51bWJlck1hc2soeyBhbGxvd0RlY2ltYWw6IGZhbHNlLCBwcmVmaXg6ICcnIH0pO1xuXG4gIGNsZWFuTWFzayh2YWx1ZSkge1xuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSnNvbkZvcm1GaWVsZHNTZXJ2aWNlIH0gZnJvbSAnLi4vanNvbi1mb3JtLWZpZWxkcy5zZXJ2aWNlJztcbmltcG9ydCB7IENoZWNrYm94Z3JvdXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvY2hlY2tib3hncm91cC9jaGVja2JveGdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNdWx0aXNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9tdWx0aXNlbGVjdC9tdWx0aXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dGFyZWFDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvdGV4dGFyZWEvdGV4dGFyZWEuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb29sZWFuQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2Jvb2xlYW4vYm9vbGVhbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL251bWJlci9udW1iZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBob3RvQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3Bob3RvL3Bob3RvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSYWRpb2dyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3JhZGlvZ3JvdXAvcmFkaW9ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RyaW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3N0cmluZy9zdHJpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvZGF0ZS9kYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9uZXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbW9uZXkvbW9uZXkuY29tcG9uZW50JztcbmltcG9ydCB7IE9iamVjdENvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9jb21wb25lbnRzL29iamVjdC9vYmplY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEFycmF5Q29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmVkL2NvbXBvbmVudHMvYXJyYXkvYXJyYXkuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpzb25Gb3JtQm9vdHN0cmFwNCBleHRlbmRzIEpzb25Gb3JtRmllbGRzU2VydmljZSB7XG4gIGZpZWxkVHlwZXMgPSB7XG4gICAgc3RyaW5nOiBTdHJpbmdDb21wb25lbnQsXG4gICAgc2VsZWN0OiBTZWxlY3RDb21wb25lbnQsXG4gICAgbnVtYmVyOiBOdW1iZXJDb21wb25lbnQsXG4gICAgYm9vbGVhbjogQm9vbGVhbkNvbXBvbmVudCxcbiAgICBwaG90bzogUGhvdG9Db21wb25lbnQsXG4gICAgdGV4dGFyZWE6IFRleHRhcmVhQ29tcG9uZW50LFxuICAgIG9iamVjdDogT2JqZWN0Q29tcG9uZW50LFxuICAgIGFycmF5OiBBcnJheUNvbXBvbmVudCxcbiAgICBkYXRlOiBEYXRlQ29tcG9uZW50LFxuICAgIHJhZGlvZ3JvdXA6IFJhZGlvZ3JvdXBDb21wb25lbnQsXG4gICAgY2hlY2tib3hncm91cDogQ2hlY2tib3hncm91cENvbXBvbmVudCxcbiAgICBtdWx0aXNlbGVjdDogTXVsdGlzZWxlY3RDb21wb25lbnQsXG4gICAgbW9uZXk6IE1vbmV5Q29tcG9uZW50LFxuICAgIGJ1dHRvbjogQnV0dG9uQ29tcG9uZW50XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY2hlbWFGb3JtR3JvdXAgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvc2NoZW1hLWZvcm0tZ3JvdXAnO1xuaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pmLWNvbXBvbmVudC1jaG9vc2VyLCBbamYtY29tcG9uZW50LWNob29zZXJdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aDIgKm5nSWY9XCJzY2hlbWEgJiYgc2NoZW1hLmhhc093blByb3BlcnR5KCd0aXRsZScpICYmICFuZXN0ZWRcIj5cbiAgICAgIHt7c2NoZW1hLnRpdGxlfX1cbiAgICA8L2gyPlxuICAgIDxoNCAqbmdJZj1cInNjaGVtYSAmJiBzY2hlbWEuaGFzT3duUHJvcGVydHkoJ3RpdGxlJykgJiYgbmVzdGVkXCI+XG4gICAgICB7e3NjaGVtYS50aXRsZX19XG4gICAgPC9oND5cbiAgICA8ZGl2IFtuZ0NsYXNzXT1cIlsnZm9ybS1jb250YWluZXInXVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgKm5nSWY9XCJzY2hlbWEgJiYgc2NoZW1hLmhhc093blByb3BlcnR5KCdkZXNjcmlwdGlvbicpXCIgW2lubmVySFRNTF09XCJzY2hlbWEuZGVzY3JpcHRpb25cIj48L2Rpdj5cbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGNvbnRyb2wgb2Yga2V5cyhmb3JtLmNvbnRyb2xzKVwiIGpmLWZpZWxkIFtjb250cm9sXT1cImZvcm0uZ2V0KGNvbnRyb2wpXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ2hvb3NlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGZvcm06IFNjaGVtYUZvcm1Hcm91cDtcbiAgQElucHV0KCkgc2NoZW1hOiBTY2hlbWE7XG4gIEBJbnB1dCgpIG5lc3RlZCA9IGZhbHNlO1xuICBrZXlzID0gT2JqZWN0LmtleXM7XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbnRyb2wgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvc2NoZW1hLWZvcm0tY29udHJvbCc7XG5pbXBvcnQge0pzb25Gb3JtRmllbGRzU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vanNvbi1mb3JtLWZpZWxkcy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamYtZmllbGQsIFtqZi1maWVsZF0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8bmctY29udGFpbmVyICNjb250YWluZXI+PC9uZy1jb250YWluZXI+XG4gIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG4gIEBJbnB1dCgpIGNvbnRyb2w6IFNjaGVtYUZvcm1Db250cm9sO1xuICBwdWJsaWMgcGF0dGVybnM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGpzb25Gb3JtRmllbGRzU2VydmljZTogSnNvbkZvcm1GaWVsZHNTZXJ2aWNlLFxuICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLnBhdHRlcm5zID0ge307XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdlbmVyYXRlRmllbGQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmdlbmVyYXRlRmllbGQoKTtcbiAgfVxuXG4gIGdlbmVyYXRlRmllbGQoKSB7XG4gICAgdGhpcy5jb250YWluZXIuY2xlYXIoKTtcbiAgICB0aGlzLmpzb25Gb3JtRmllbGRzU2VydmljZVswXS5zZXRSb290Vmlld0NvbnRhaW5lclJlZih0aGlzLmNvbnRhaW5lcik7XG4gICAgdGhpcy5qc29uRm9ybUZpZWxkc1NlcnZpY2VbMF0uYWRkRHluYW1pY0NvbXBvbmVudCh0aGlzLmNvbnRyb2wpO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSBgZmllbGQgbWFyZ2luLWJvdHRvbSAke3RoaXMuZ2V0Q2xhc3MoKX0gZm9ybS1ncm91cGA7XG4gIH1cblxuICBnZXRDbGFzcyhkZWZhdWx0Q2xhc3MgPSAnJykge1xuICAgIGNvbnN0IGZpZWxkQ2xhc3MgPSBbZGVmYXVsdENsYXNzXTtcbiAgICBmaWVsZENsYXNzLnB1c2godGhpcy5jb250cm9sLnNjaGVtYS50eXBlKTtcbiAgICBmaWVsZENsYXNzLnB1c2godGhpcy5jb250cm9sLnNjaGVtYS5rZXkpO1xuXG4gICAgaWYgKHRoaXMuY29udHJvbC5zY2hlbWEuaGFzT3duUHJvcGVydHkoJ2Rlc2NyaXB0aW9uJykpIHtcbiAgICAgIGZpZWxkQ2xhc3MucHVzaCgnaGFzLWluZm8nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250cm9sLnNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnZm9ybWF0JykpIHtcbiAgICAgIGZpZWxkQ2xhc3MucHVzaCh0aGlzLmNvbnRyb2wuc2NoZW1hLmZvcm1hdCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29udHJvbC5zdHlsZSAmJiB0aGlzLmNvbnRyb2wuc3R5bGUuZGVmYXVsdCAmJiBbJ3JhZGlvZ3JvdXAnLCAnY2hlY2tib3hncm91cCddLmluZGV4T2YodGhpcy5jb250cm9sLnNjaGVtYS5mb3JtYXQpID09PSAtMSkge1xuICAgICAgZmllbGRDbGFzcy5wdXNoKHRoaXMuY29udHJvbC5zdHlsZS5kZWZhdWx0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmllbGRDbGFzcy5maWx0ZXIoKGQpID0+IGQpLmpvaW4oJyAnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0pzb25Gb3JtRmllbGRzU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vanNvbi1mb3JtLWZpZWxkcy5zZXJ2aWNlJztcbmltcG9ydCB7QnV0dG9uQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdqZi1mb3JtLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAjYnV0dG9uPjwvbmctY29udGFpbmVyPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1CdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpc0Zvcm1WYWxpZCA9IHRydWU7XG4gIEBJbnB1dCgpIGxhYmVsID0gJyc7XG4gIEBJbnB1dCgpIGlzTXVsdGlTdGVwID0gZmFsc2U7XG4gIEBJbnB1dCgpIHN0ZXBzID0gW107XG4gIEBJbnB1dCgpIHN1Ym1pdCA9ICcnO1xuICBASW5wdXQoKSBjb250aW51ZSA9ICcnO1xuICBASW5wdXQoKSBjYW5jZWwgPSAnJztcbiAgQElucHV0KCkgc3VibWl0Q2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgY2FuY2VsQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgaXNXb3JraW5nID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBoYW5kbGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQFZpZXdDaGlsZCgnYnV0dG9uJywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KSBidXR0b246IFZpZXdDb250YWluZXJSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGpzb25Gb3JtRmllbGRzU2VydmljZTogSnNvbkZvcm1GaWVsZHNTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmJ1dHRvbi5jbGVhcigpO1xuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmpzb25Gb3JtRmllbGRzU2VydmljZVswXS5nZXQoJ2J1dHRvbicpKTtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmJ1dHRvbi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG4gICAgKDxCdXR0b25Db21wb25lbnQ+IGNvbXBvbmVudFJlZi5pbnN0YW5jZSkudHlwZSA9IHRoaXMuZ2V0VHlwZSgpO1xuICAgICg8QnV0dG9uQ29tcG9uZW50PiBjb21wb25lbnRSZWYuaW5zdGFuY2UpLmlzVmlzaWJsZSA9IHRoaXMuaXNWaXNpYmxlKCk7XG4gICAgKDxCdXR0b25Db21wb25lbnQ+IGNvbXBvbmVudFJlZi5pbnN0YW5jZSkuY2xhc3MgPSB0aGlzLmdldENsYXNzKCk7XG4gICAgKDxCdXR0b25Db21wb25lbnQ+IGNvbXBvbmVudFJlZi5pbnN0YW5jZSkuZGlzYWJsZWQgPSB0aGlzLmlzV29ya2luZztcbiAgICAoPEJ1dHRvbkNvbXBvbmVudD4gY29tcG9uZW50UmVmLmluc3RhbmNlKS5pc1dvcmtpbmcgPSB0aGlzLmlzV29ya2luZztcbiAgICAoPEJ1dHRvbkNvbXBvbmVudD4gY29tcG9uZW50UmVmLmluc3RhbmNlKS5sYWJlbCA9IHRoaXMuZ2V0TGFiZWwoKTtcbiAgICAoPEJ1dHRvbkNvbXBvbmVudD4gY29tcG9uZW50UmVmLmluc3RhbmNlKS5oYW5kbGVCdXR0b25DbGljay5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5jYW5jZWwubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrLmVtaXQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgICg8QnV0dG9uQ29tcG9uZW50PiBjb21wb25lbnRSZWYuaW5zdGFuY2UpLmNvbG9yID0gdGhpcy5zdWJtaXQgPyAncHJpbWFyeScgOiAnJztcbiAgfVxuXG4gIGdldENsYXNzKCkge1xuICAgIHJldHVybiAodGhpcy5jYW5jZWwubGVuZ3RoID4gMClcbiAgICAgID8gWydidG4gYnRuLWRlZmF1bHQgYnV0dG9uJywgdGhpcy5jYW5jZWxDbGFzcyB8fCAnJ11cbiAgICAgIDogWydidG4gYnRuLXByaW1hcnkgYnV0dG9uIGJ1dHRvbi0tYWNjZXB0JywgdGhpcy5zdWJtaXRDbGFzcyB8fCAnJywgKHRoaXMuaXNGb3JtVmFsaWQgPyAndmFsaWQnIDogJ2ludmFsaWQnKV07XG4gIH1cblxuICBpc1Zpc2libGUoKSB7XG4gICAgY29uc3Qgc3RlcCA9IHRoaXMuc3RlcHMuZmluZEluZGV4KChzKSA9PiBzLnZpc2libGUpO1xuICAgIGlmICh0aGlzLmlzTXVsdGlTdGVwICYmIHRoaXMuY2FuY2VsLmxlbmd0aCA+IDAgJiYgdGhpcy5zdGVwc1tzdGVwXSkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RlcHNbc3RlcF0udHlwZSAhPT0gJ2ZpcnN0JztcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldExhYmVsKCkge1xuICAgIGlmICh0aGlzLmlzTXVsdGlTdGVwICYmIHRoaXMuY2FuY2VsLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHN0ZXAgPSB0aGlzLnN0ZXBzLmZpbmRJbmRleCgocykgPT4gcy52aXNpYmxlKTtcbiAgICAgIGlmICh0aGlzLnN0ZXBzW3N0ZXBdICYmIHRoaXMuc3RlcHNbc3RlcF0udHlwZSAhPT0gJ2ZpcnN0Jykge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW5jZWw7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzTXVsdGlTdGVwKSB7XG4gICAgICBjb25zdCBzdGVwID0gdGhpcy5zdGVwcy5maW5kSW5kZXgoKHMpID0+IHMudmlzaWJsZSk7XG4gICAgICBpZiAodGhpcy5zdGVwc1tzdGVwXSAmJiB0aGlzLnN0ZXBzW3N0ZXBdLnR5cGUgIT09ICdsYXN0Jykge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuc3VibWl0O1xuICAgIH0gZWxzZSAgaWYgKHRoaXMuY2FuY2VsLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbmNlbDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zdWJtaXQ7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIGlmICh0aGlzLmNhbmNlbCkge1xuICAgICAgcmV0dXJuICdidXR0b24nO1xuICAgIH1cblxuICAgIHJldHVybiAnc3VibWl0JztcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamYtaW5mby1idXR0b24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxhXG4gICAgICBbYXR0ci5ocmVmXT1cIidqYXZhc2NyaXB0OnZvaWQoMCknXCJcbiAgICAgICpuZ0lmPVwidGl0bGVcIlxuICAgICAgW2F0dHIuY2xhc3NdPVwiJ2J0biBidG4tbGluayBpbmZvJ1wiIFthdHRyLnRpdGxlXT1cInRpdGxlXCI+SW5mbzwvYT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBJbmZvQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdGl0bGU7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pmLXdvcmtpbmctc3Bpbm5lcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZyAqbmdJZj1cImlzV29ya2luZ1wiIHdpZHRoPVwiMzhcIiBoZWlnaHQ9XCIzOFwiIHZpZXdCb3g9XCIwIDAgMzggMzhcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgc3Ryb2tlPVwiI2ZmZlwiPlxuICAgICAgPGcgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxIDEpXCIgc3Ryb2tlLXdpZHRoPVwiMlwiPlxuICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLW9wYWNpdHk9XCIuNVwiIGN4PVwiMThcIiBjeT1cIjE4XCIgcj1cIjE4XCIvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMzYgMThjMC05Ljk0LTguMDYtMTgtMTgtMThcIj5cbiAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIlxuICAgICAgICAgICAgICB0eXBlPVwicm90YXRlXCJcbiAgICAgICAgICAgICAgZnJvbT1cIjAgMTggMThcIlxuICAgICAgICAgICAgICB0bz1cIjM2MCAxOCAxOFwiXG4gICAgICAgICAgICAgIGR1cj1cIjFzXCJcbiAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIvPlxuICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFdvcmtpbmdTcGlubmVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaXNXb3JraW5nID0gZmFsc2U7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENob29zZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hvb3Nlci9jaG9vc2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC9maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLWJ1dHRvbi9mb3JtLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5mb0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbmZvLWJ1dHRvbi9pbmZvLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgV29ya2luZ1NwaW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvd29ya2luZy1zcGlubmVyL3dvcmtpbmctc3Bpbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dGFyZWFWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3RleHRhcmVhL3RleHRhcmVhLnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFJhZGlvZ3JvdXBWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3JhZGlvZ3JvdXAvcmFkaW9ncm91cC52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3NlbGVjdC9zZWxlY3Qudmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVZpZXdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvZGF0ZS9kYXRlLnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEJvb2xlYW5WaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2Jvb2xlYW4vYm9vbGVhbi52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaG90b1ZpZXdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvcGhvdG8vcGhvdG8udmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RyaW5nVmlld0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE51bWJlclZpZXdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbnVtYmVyL251bWJlci52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGVja2JveGdyb3VwVmlld0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9jaGVja2JveGdyb3VwL2NoZWNrYm94Z3JvdXAudmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT2JqZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29iamVjdC9vYmplY3QuY29tcG9uZW50JztcbmltcG9ydCB7IE1vbmV5Vmlld0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9tb25leS9tb25leS52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNdWx0aXNlbGVjdFZpZXdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3Qudmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSnNvbkZvcm1Db21wb25lbnQgfSBmcm9tICcuLi8uLi9qc29uLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVGV4dE1hc2tNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi10ZXh0LW1hc2snO1xuaW1wb3J0IHsgQXJyYXlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXJyYXkvYXJyYXkuY29tcG9uZW50JztcbmltcG9ydCB7IEFycmF5Vmlld0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcnJheS9hcnJheS52aWV3LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVGV4dE1hc2tNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBKc29uRm9ybUNvbXBvbmVudCxcbiAgICBDb21tb25Db21wb25lbnQsXG4gICAgQ2hvb3NlckNvbXBvbmVudCxcbiAgICBGaWVsZENvbXBvbmVudCxcbiAgICBGb3JtQnV0dG9uQ29tcG9uZW50LFxuICAgIEluZm9CdXR0b25Db21wb25lbnQsXG4gICAgV29ya2luZ1NwaW5uZXJDb21wb25lbnQsXG4gICAgU3RyaW5nVmlld0NvbXBvbmVudCxcbiAgICBTZWxlY3RWaWV3Q29tcG9uZW50LFxuICAgIE51bWJlclZpZXdDb21wb25lbnQsXG4gICAgQm9vbGVhblZpZXdDb21wb25lbnQsXG4gICAgUGhvdG9WaWV3Q29tcG9uZW50LFxuICAgIFRleHRhcmVhVmlld0NvbXBvbmVudCxcbiAgICBEYXRlVmlld0NvbXBvbmVudCxcbiAgICBSYWRpb2dyb3VwVmlld0NvbXBvbmVudCxcbiAgICBDaGVja2JveGdyb3VwVmlld0NvbXBvbmVudCxcbiAgICBNdWx0aXNlbGVjdFZpZXdDb21wb25lbnQsXG4gICAgTW9uZXlWaWV3Q29tcG9uZW50LFxuICAgIE9iamVjdENvbXBvbmVudCxcbiAgICBBcnJheUNvbXBvbmVudCxcbiAgICBBcnJheVZpZXdDb21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgSnNvbkZvcm1Db21wb25lbnQsXG4gICAgQ29tbW9uQ29tcG9uZW50LFxuICAgIENob29zZXJDb21wb25lbnQsXG4gICAgRmllbGRDb21wb25lbnQsXG4gICAgRm9ybUJ1dHRvbkNvbXBvbmVudCxcbiAgICBJbmZvQnV0dG9uQ29tcG9uZW50LFxuICAgIFdvcmtpbmdTcGlubmVyQ29tcG9uZW50LFxuICAgIFN0cmluZ1ZpZXdDb21wb25lbnQsXG4gICAgU2VsZWN0Vmlld0NvbXBvbmVudCxcbiAgICBOdW1iZXJWaWV3Q29tcG9uZW50LFxuICAgIEJvb2xlYW5WaWV3Q29tcG9uZW50LFxuICAgIFBob3RvVmlld0NvbXBvbmVudCxcbiAgICBUZXh0YXJlYVZpZXdDb21wb25lbnQsXG4gICAgRGF0ZVZpZXdDb21wb25lbnQsXG4gICAgUmFkaW9ncm91cFZpZXdDb21wb25lbnQsXG4gICAgQ2hlY2tib3hncm91cFZpZXdDb21wb25lbnQsXG4gICAgTXVsdGlzZWxlY3RWaWV3Q29tcG9uZW50LFxuICAgIE1vbmV5Vmlld0NvbXBvbmVudCxcbiAgICBPYmplY3RDb21wb25lbnQsXG4gICAgQXJyYXlDb21wb25lbnQsXG4gICAgQXJyYXlWaWV3Q29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDaG9vc2VyQ29tcG9uZW50LFxuICAgIEZpZWxkQ29tcG9uZW50LFxuICAgIEZvcm1CdXR0b25Db21wb25lbnQsXG4gICAgSW5mb0J1dHRvbkNvbXBvbmVudCxcbiAgICBXb3JraW5nU3Bpbm5lckNvbXBvbmVudCxcbiAgICBKc29uRm9ybUNvbXBvbmVudCxcbiAgICBDb21tb25Db21wb25lbnQsXG4gICAgQXJyYXlDb21wb25lbnQsXG4gICAgT2JqZWN0Q29tcG9uZW50XG4gIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge31cbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBKc29uRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vanNvbi1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBKc29uRm9ybURlZmF1bHRzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGVmYXVsdHMuc2VydmljZSc7XG5pbXBvcnQgeyBKc29uRm9ybVZhbGlkYXRvcnNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZHMvY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSnNvbkZvcm1Cb290c3RyYXA0IH0gZnJvbSAnLi9mcmFtZXdvcmsvYm9vdHN0cmFwNC9qc29uLWZvcm0tYm9vdHN0cmFwNCc7XG5pbXBvcnQgeyBKc29uRm9ybUZpZWxkc1NlcnZpY2UgfSBmcm9tICcuL2ZyYW1ld29yay9qc29uLWZvcm0tZmllbGRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9mcmFtZXdvcmsvc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENvbW1vbkNvbXBvbmVudCxcbiAgICBKc29uRm9ybUNvbXBvbmVudFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBKc29uRm9ybUNvbXBvbmVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgSnNvbkZvcm1EZWZhdWx0c1NlcnZpY2UsXG4gICAgSnNvbkZvcm1WYWxpZGF0b3JzU2VydmljZVxuICBdXG59KVxuXG5leHBvcnQgY2xhc3MgSnNvbkZvcm1Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCguLi5mcmFtZXdvcmtzKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgY29uc3QgbG9hZEZyYW1ld29yayA9IGZyYW1ld29ya3MubGVuZ3RoXG4gICAgICA/IGZyYW1ld29ya3MubWFwKGZyYW1ld29yayA9PiBmcmFtZXdvcmsuZm9yUm9vdCgpLnByb3ZpZGVyc1swXSlcbiAgICAgIDogW3sgcHJvdmlkZTogSnNvbkZvcm1GaWVsZHNTZXJ2aWNlLCB1c2VDbGFzczogSnNvbkZvcm1Cb290c3RyYXA0LCBtdWx0aTogdHJ1ZSB9XTtcblxuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSnNvbkZvcm1Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSnNvbkZvcm1EZWZhdWx0c1NlcnZpY2UsXG4gICAgICAgIEpzb25Gb3JtVmFsaWRhdG9yc1NlcnZpY2UsXG4gICAgICAgIC4uLmxvYWRGcmFtZXdvcmtcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pmLWVycm9yLCBbamYtZXJyb3JdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICpuZ0lmPVwiY29udHJvbC5pbnZhbGlkICYmIChjb250cm9sLmRpcnR5IHx8IGNvbnRyb2wudG91Y2hlZClcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1sncmVxdWlyZWQnXVwiPlxuICAgICAgICBUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ3BhdHRlcm4nXVwiPlxuICAgICAgICBJbnB1dCB2YWx1ZSBpcyBpbnZhbGlkLlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ21pbmxlbmd0aCddXCI+XG4gICAgICAgIElucHV0IGhhcyB0byBiZSBhIG1pbmltdW0gb2Yge3tjb250cm9sLmVycm9yc1snbWlubGVuZ3RoJ11bJ3JlcXVpcmVkTGVuZ3RoJ119fSBjaGFyYWN0ZXJzLlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ21heGxlbmd0aCddXCI+XG4gICAgICAgIElucHV0IGNhbiBjb250YWluIGEgbWF4aW11bSBvZiB7e2NvbnRyb2wuZXJyb3JzWydtYXhsZW5ndGgnXVsncmVxdWlyZWRMZW5ndGgnXX19IGNoYXJhY3RlcnMuXG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1snbWluJ11cIj5cbiAgICAgICAgRW50ZXIgYSB2YWx1ZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8ge3tjb250cm9sLmVycm9yc1snbWluJ11bJ21pbiddfX0uXG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1snbWF4J11cIj5cbiAgICAgICAgRW50ZXIgYSB2YWx1ZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8ge3tjb250cm9sLmVycm9yc1snbWF4J11bJ21heCddfX0uXG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1snY3VzdG9tRXJyb3InXVwiPlxuICAgICAgICB7e2NvbnRyb2wuZXJyb3JzWydjdXN0b21FcnJvciddfX1cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY29udHJvbDtcbn1cbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN0cmluZ0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0TWFza01vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXRleHQtbWFzayc7XG5pbXBvcnQgeyBKc29uRm9ybUJvb3RzdHJhcDQgfSBmcm9tICcuL2pzb24tZm9ybS1ib290c3RyYXA0JztcbmltcG9ydCB7IEpzb25Gb3JtRmllbGRzU2VydmljZSB9IGZyb20gJy4uL2pzb24tZm9ybS1maWVsZHMuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2RhdGUvZGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvZXJyb3IvZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IEJvb2xlYW5Db21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvYm9vbGVhbi9ib29sZWFuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdW1iZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbnVtYmVyL251bWJlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRhcmVhQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9uZXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbW9uZXkvbW9uZXkuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IENoZWNrYm94Z3JvdXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvY2hlY2tib3hncm91cC9jaGVja2JveGdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNdWx0aXNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9tdWx0aXNlbGVjdC9tdWx0aXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGhvdG9Db21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvcGhvdG8vcGhvdG8uY29tcG9uZW50JztcbmltcG9ydCB7IFJhZGlvZ3JvdXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvcmFkaW9ncm91cC9yYWRpb2dyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgVGV4dE1hc2tNb2R1bGUsXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIEJzRGF0ZXBpY2tlck1vZHVsZS5mb3JSb290KClcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU3RyaW5nQ29tcG9uZW50LFxuICAgIFNlbGVjdENvbXBvbmVudCxcbiAgICBEYXRlQ29tcG9uZW50LFxuICAgIFRleHRhcmVhQ29tcG9uZW50LFxuICAgIEVycm9yQ29tcG9uZW50LFxuICAgIE1vbmV5Q29tcG9uZW50LFxuICAgIE51bWJlckNvbXBvbmVudCxcbiAgICBCb29sZWFuQ29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBDaGVja2JveGdyb3VwQ29tcG9uZW50LFxuICAgIE11bHRpc2VsZWN0Q29tcG9uZW50LFxuICAgIFBob3RvQ29tcG9uZW50LFxuICAgIFJhZGlvZ3JvdXBDb21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgU3RyaW5nQ29tcG9uZW50LFxuICAgIFNlbGVjdENvbXBvbmVudCxcbiAgICBEYXRlQ29tcG9uZW50LFxuICAgIFRleHRhcmVhQ29tcG9uZW50LFxuICAgIEVycm9yQ29tcG9uZW50LFxuICAgIE1vbmV5Q29tcG9uZW50LFxuICAgIE51bWJlckNvbXBvbmVudCxcbiAgICBCb29sZWFuQ29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBDaGVja2JveGdyb3VwQ29tcG9uZW50LFxuICAgIE11bHRpc2VsZWN0Q29tcG9uZW50LFxuICAgIFBob3RvQ29tcG9uZW50LFxuICAgIFJhZGlvZ3JvdXBDb21wb25lbnRcbiAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEpzb25Gb3JtQm9vdHN0cmFwNE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSnNvbkZvcm1Cb290c3RyYXA0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBKc29uRm9ybUZpZWxkc1NlcnZpY2UsXG4gICAgICAgICAgdXNlQ2xhc3M6IEpzb25Gb3JtQm9vdHN0cmFwNCxcbiAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPGlucHV0XG4gICAgICAgIG1hdElucHV0XG4gICAgICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxuICAgICAgICBbYXR0ci50eXBlXT1cInR5cGUoKVwiXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgICAgIFthdHRyLm1pbkxlbmd0aF09XCJzY2hlbWEubWluTGVuZ3RoIHx8IG51bGxcIlxuICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlcigpXCJcbiAgICAgICAgW3RleHRNYXNrXT1cInsgbWFzazogZ2V0TWFzaygpIH1cIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwidGl0bGUoKVwiXG4gICAgICAvPlxuICAgICAgPG1hdC1lcnJvciBqZi1lcnJvciBbY29udHJvbF09XCJjb250cm9sXCI+PC9tYXQtZXJyb3I+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBTdHJpbmdNYXRlcmlhbENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgW25hbWVdPVwic2NoZW1hLmtleVwiXG4gICAgICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgICAgICAgIFthdHRyLm1pbkxlbmd0aF09XCJzY2hlbWEubWluTGVuZ3RoIHx8IG51bGxcIlxuICAgICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyKClcIlxuICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJ0aXRsZSgpXCI+XG4gICAgICA8L3RleHRhcmVhPlxuICAgICAgPG1hdC1lcnJvciBqZi1lcnJvciBbY29udHJvbF09XCJjb250cm9sXCI+PC9tYXQtZXJyb3I+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYU1hdGVyaWFsQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuXG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LXNlbGVjdFxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJ7e2VtcHR5T3B0aW9uKCl9fVwiXG4gICAgPlxuICAgICAgPG1hdC1vcHRpb24gW2Rpc2FibGVkXT1cInRydWVcIj5cbiAgICAgICAgICB7e2VtcHR5T3B0aW9uKCl9fVxuICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGVuIG9mIHRoaXMuc2NoZW1hLmVudW07IGxldCBpID0gaW5kZXhcIiBbdmFsdWVdPVwiZW5cIj5cbiAgICAgICAgICB7e2VudW1OYW1lcyhpKX19XG4gICAgICA8L21hdC1vcHRpb24+XG4gICAgPC9tYXQtc2VsZWN0PlxuICAgIDxtYXQtZXJyb3IgamYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvbWF0LWVycm9yPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0TWF0ZXJpYWxDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICBlbXB0eU9wdGlvbigpIHtcbiAgICByZXR1cm4gc3VwZXIudGl0bGUoKS5yZXBsYWNlKC9bXkEtWjAtOV0rJC9pZywgJycpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbCBbYXR0ci5jbGFzc109XCJzY2hlbWEua2V5XCIgW25nQ2xhc3NdPVwieydtYXJnaW4tYm90dG9tLS1oYWxmJzogdHJ1ZSwgcmVxdWlyZWQ6IGlzUmVxdWlyZWQoKX1cIj5cbiAgICAgICAge3t0aXRsZSgpfX08c3VwICpuZ0lmPVwiaXNSZXF1aXJlZCgpXCI+Kjwvc3VwPjwvbGFiZWw+XG5cbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIiAqbmdGb3I9XCJsZXQgZW51bSBvZiB0aGlzLnNjaGVtYS5lbnVtOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uXG4gICAgICAgICAgW2NoZWNrZWRdPVwiY29udHJvbC52YWx1ZSA9PT0gZW51bS50b1N0cmluZygpXCJcbiAgICAgICAgICBbdmFsdWVdPVwiZW51bS50b1N0cmluZygpXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7ZW51bU5hbWVzKGkpfX1cbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9ncm91cE1hdGVyaWFsQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxsYWJlbCBbYXR0ci5jbGFzc109XCJzY2hlbWEua2V5XCIgW25nQ2xhc3NdPVwie3JlcXVpcmVkOiBpc1JlcXVpcmVkKCl9XCI+XG4gICAgICB7e3RpdGxlKCl9fTxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+XG4gICAgPC9sYWJlbD5cbiAgICA8ZGl2ICpuZ0lmPVwicHJldmlld1NyY0V4aXN0cygpOyBlbHNlIGFkZEltYWdlXCIgY2xhc3M9XCJwaG90by1wcmV2aWV3XCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzPVwicGhvdG8tYWRkXCJcbiAgICAgICAgbWF0LWJ1dHRvblxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1pbWFnZV09XCJtYWtlVHJ1c3RlZEltYWdlKHBob3RvRGF0YSlcIlxuICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1zaXplXT1cIidjb3ZlcidcIlxuICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1yZXBlYXRdPVwiJ25vLXJlcGVhdCdcIlxuICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IGZpbGVJbnB1dC5jbGljaygpO1wiXG4gICAgICA+XG4gICAgICAgIDxtYXQtaWNvbj5hZGRfYV9waG90bzwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3M9XCJwaG90by1yZW1vdmVcIlxuICAgICAgICBtYXQtbWluaS1mYWJcbiAgICAgICAgY29sb3I9XCJ3YXJuXCJcbiAgICAgICAgKGNsaWNrKT1cImNsZWFyUGhvdG8oKVwiXG4gICAgICA+XG4gICAgICAgIDxtYXQtaWNvbj5jbG9zZTwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8bmctdGVtcGxhdGUgI2FkZEltYWdlPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzcz1cInBob3RvLWFkZFwiXG4gICAgICAgIG1hdC1idXR0b25cbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgKGNsaWNrKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBmaWxlSW5wdXQuY2xpY2soKTtcIlxuICAgICAgPlxuICAgICAgICA8bWF0LWljb24+YWRkX2FfcGhvdG88L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8aW5wdXQgI2ZpbGVJbnB1dCB0eXBlPVwiZmlsZVwiIFtuYW1lXT1cInNjaGVtYS5rZXlcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIi8+XG4gICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBbbmFtZV09XCJzY2hlbWEua2V5XCIgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIiAvPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFBob3RvTWF0ZXJpYWxDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICBwaG90b0RhdGE6IHN0cmluZztcblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb2Nlc3NGaWxlKHJlYWRlci5yZXN1bHQsIGZpbGUudHlwZSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLnBob3RvRGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodGhpcy5waG90b0RhdGEpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIHJlYWRpbmcgdGhlIGZpbGUhJyk7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YoZmlsZSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICB9XG4gIH1cblxuICBwcmV2aWV3U3JjRXhpc3RzKCkge1xuICAgIHJldHVybiB0eXBlb2YgKHRoaXMucGhvdG9EYXRhKSA9PT0gJ3N0cmluZyc7XG4gIH1cblxuICBjbGVhclBob3RvKCkge1xuICAgIHRoaXMucGhvdG9EYXRhID0gbnVsbDtcbiAgICB0aGlzLmNvbnRyb2wucmVzZXQoKTtcbiAgfVxuXG4gIHByb2Nlc3NGaWxlKGRhdGFVUkwsIGZpbGVUeXBlKSB7XG4gICAgY29uc3QgbWF4V2lkdGggPSA4MDA7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gODAwO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBkYXRhVVJMO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBpbWFnZS53aWR0aDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xuICAgICAgICBjb25zdCBzaG91bGRSZXNpemUgPSAod2lkdGggPiBtYXhXaWR0aCkgfHwgKGhlaWdodCA+IG1heEhlaWdodCk7XG5cbiAgICAgICAgaWYgKCFzaG91bGRSZXNpemUpIHtcbiAgICAgICAgICByZXNvbHZlKGRhdGFVUkwpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld1dpZHRoO1xuICAgICAgICBsZXQgbmV3SGVpZ2h0O1xuXG4gICAgICAgIGlmICh3aWR0aCA+IGhlaWdodCkge1xuICAgICAgICAgIG5ld0hlaWdodCA9IGhlaWdodCAqIChtYXhXaWR0aCAvIHdpZHRoKTtcbiAgICAgICAgICBuZXdXaWR0aCA9IG1heFdpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1dpZHRoID0gd2lkdGggKiAobWF4SGVpZ2h0IC8gaGVpZ2h0KTtcbiAgICAgICAgICBuZXdIZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gbmV3V2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIG5ld1dpZHRoLCBuZXdIZWlnaHQpO1xuXG4gICAgICAgIHJlc29sdmUoY2FudmFzLnRvRGF0YVVSTChmaWxlVHlwZSkpO1xuICAgICAgfTtcblxuICAgICAgaW1hZ2Uub25lcnJvciA9IChlcnIpID0+IHJlamVjdChlcnIpO1xuICAgIH0pO1xuICB9XG59XG5cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXRcbiAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgW25hbWVdPVwic2NoZW1hLmtleVwiXG4gICAgICAgIFthdHRyLnR5cGVdPVwiJ251bWJlcidcIlxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiXG4gICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyKClcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwidGl0bGUoKVwiXG4gICAgICAvPlxuICAgICAgPG1hdC1lcnJvciBqZi1lcnJvciBbY29udHJvbF09XCJjb250cm9sXCI+PC9tYXQtZXJyb3I+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJNYXRlcmlhbENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtc2VsZWN0IFtmb3JtQ29udHJvbF09XCJjb250cm9sXCIgbmFtZT1cIm5hbWVcIiBtdWx0aXBsZT5cbiAgICAgIDxtYXQtb3B0aW9uXG4gICAgICAgICpuZ0Zvcj1cImxldCBlbiBvZiBzY2hlbWEuZW51bTsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgIFt2YWx1ZV09XCJlblwiPlxuICAgICAgICB7e2VudW1OYW1lcyhpKX19XG4gICAgICA8L21hdC1vcHRpb24+XG4gICAgPC9tYXQtc2VsZWN0PlxuICAgIDxtYXQtZXJyb3IgamYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvbWF0LWVycm9yPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpc2VsZWN0TWF0ZXJpYWxDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICBlbnVtTmFtZXMoaW5kZXgpIHtcbiAgICByZXR1cm4gdHlwZW9mKHRoaXMuc2NoZW1hLmVudW1OYW1lcykgPT09ICd1bmRlZmluZWQnXG4gICAgICA/IHRoaXMuc2NoZW1hLmVudW1baW5kZXhdXG4gICAgICA6IHRoaXMuc2NoZW1hLmVudW1OYW1lc1tpbmRleF07XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8bWF0LWNoZWNrYm94XG4gICAgKm5nRm9yPVwibGV0IGNoaWxkIG9mIHRoaXMuY29udHJvbFsnY29udHJvbHMnXTsgbGV0IGkgPSBpbmRleFwiXG4gICAgW2F0dHIuaWRdPVwiZ2V0SWQoaSwgc2NoZW1hLmVudW1baV0pXCJcbiAgICBbY2hlY2tlZF09XCJjaGlsZC52YWx1ZSA9PT0gc2NoZW1hLmVudW1baV1cIlxuICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxuICAgIFtmb3JtQ29udHJvbF09XCJjaGlsZFwiXG4gICAgKGNoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQsIGkpXCJcbiAgICBbdmFsdWVdPVwic2NoZW1hLmVudW1baV1cIlxuICAgID5cbiAgICAgICAge3tlbnVtTmFtZXMoaSl9fVxuICAgIDwvbWF0LWNoZWNrYm94PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94Z3JvdXBNYXRlcmlhbENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIGNoZWNrYm94R3JvdXBWYWx1ZXMgPSBbXTtcbiAgcmFuZG9tU3VmZml4ID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xuXG4gIHNldFZhbHVlKGV2ZW50LCBpbmRleCkge1xuICAgIGlmICh0aGlzLmNoZWNrYm94R3JvdXBWYWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmNoZWNrYm94R3JvdXBWYWx1ZXMgPSBuZXcgQXJyYXkodGhpcy5jb250cm9sWydjb250cm9scyddLmxlbmd0aCkuZmlsbChudWxsKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jaGVja2JveEdyb3VwVmFsdWVzW2luZGV4XSA9PT0gbnVsbCkge1xuICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gdGhpcy5zY2hlbWEuZW51bVtpbmRleF07XG4gICAgICB0aGlzLmNoZWNrYm94R3JvdXBWYWx1ZXNbaW5kZXhdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoZWNrYm94R3JvdXBWYWx1ZXNbaW5kZXhdID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodGhpcy5jaGVja2JveEdyb3VwVmFsdWVzKTtcbiAgfVxuXG4gIGdldElkKGksIHZhbCkge1xuICAgIHJldHVybiBgJHtpfS0ke3ZhbC5yZXBsYWNlKC9bXFxXX10rL2csICcnKX0rJHt0aGlzLnJhbmRvbVN1ZmZpeH1gO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gIDxtYXQtc2xpZGUtdG9nZ2xlXG4gIFtpZF09XCJzY2hlbWEua2V5XCJcbiAgW25hbWVdPVwic2NoZW1hLmtleVwiXG4gIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCI+XG4gICAge3t0aXRsZSgpfX1cbiAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEJvb2xlYW5NYXRlcmlhbENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0RhdGVBZGFwdGVyLCBNQVRfREFURV9GT1JNQVRTLCBNQVRfREFURV9MT0NBTEV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuY29uc3QgTVlfRk9STUFUUyA9IHtcbiAgcGFyc2U6IHtcbiAgICBkYXRlSW5wdXQ6ICdMTCcsXG4gIH0sXG4gIGRpc3BsYXk6IHtcbiAgICBkYXRlSW5wdXQ6ICdMTCcsXG4gICAgbW9udGhZZWFyTGFiZWw6ICdNTU0gWVlZWScsXG4gICAgZGF0ZUExMXlMYWJlbDogJ0xMJyxcbiAgICBtb250aFllYXJBMTF5TGFiZWw6ICdNTU1NIFlZWVknLFxuICB9LFxufTtcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPGlucHV0XG4gICAgICAgIG1hdElucHV0XG4gICAgICAgIFttYXREYXRlcGlja2VyXT0nbXlEYXRlcGlja2VyJ1xuICAgICAgICBbZm9ybUNvbnRyb2xdPSdjb250cm9sJ1xuICAgICAgICBbcGxhY2Vob2xkZXJdPSd0aXRsZSgpJ1xuICAgICAgPlxuICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09J215RGF0ZXBpY2tlcic+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgICA8bWF0LWRhdGVwaWNrZXIgI215RGF0ZXBpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuICAgICAgPG1hdC1lcnJvciBqZi1lcnJvciBbY29udHJvbF09J2NvbnRyb2wnPjwvbWF0LWVycm9yPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZU1hdGVyaWFsQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHt9XG4iLCJpbXBvcnQge0NvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCdXR0b25Db21wb25lbnR9IGZyb20gJy4vYnV0dG9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pmLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvblxuICAgICAgbWF0LXJhaXNlZC1idXR0b25cbiAgICAgIFtjb2xvcl09XCJjb2xvclwiXG4gICAgICAqbmdJZj1cImlzVmlzaWJsZVwiXG4gICAgICBbdHlwZV09XCJ0eXBlXCJcbiAgICAgIFtuZ0NsYXNzXT1cImNsYXNzXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAoY2xpY2spPVwiaGFuZGxlQ2xpY2soJGV2ZW50KVwiPlxuICAgICAge3tsYWJlbH19XG4gICAgPC9idXR0b24+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uTWF0ZXJpYWxDb21wb25lbnQgZXh0ZW5kcyBCdXR0b25Db21wb25lbnQge31cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcnJheUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZyYW1ld29yay9zaGFyZWQvY29tcG9uZW50cy9hcnJheS9hcnJheS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8bWF0LWNhcmQgW25nQ2xhc3NdPVwiWydvYmplY3QnLCBjb250cm9sLnNjaGVtYS5rZXldXCI+XG4gICAgICA8aDYgKm5nSWY9XCJnZXRMZWdlbmQoY29udHJvbCkubGVuZ3RoXCI+e3tnZXRMZWdlbmQoY29udHJvbCl9fTwvaDY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYXJyYXktaXRlbXNcIj5cbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgYXJyQ29udHJvbCBvZiBnZXRFbmFibGVkQ29udHJvbHMoY29udHJvbCk7IGxldCBpID0gaW5kZXg7XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBqZi1jb21wb25lbnQtY2hvb3NlciBbZm9ybV09XCJhcnJDb250cm9sXCI+PC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG1hdC1idXR0b25cbiAgICAgICAgICAgICAgKm5nSWY9XCJjb250cm9sLmNvbnRyb2xzLmxlbmd0aCA+IDFcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IHJlbW92ZUNvbnRyb2woY29udHJvbCwgaSlcIlxuICAgICAgICAgICAgICBjb2xvcj1cIndhcm5cIlxuICAgICAgICAgICAgICBjbGFzcz1cInJlbW92ZVwiXG4gICAgICAgICAgICA+UmVtb3ZlPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IGFkZENvbnRyb2woY29udHJvbClcIj5BZGQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWF0LWNhcmQ+XG4gIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcnJheU1hdGVyaWFsQ29tcG9uZW50IGV4dGVuZHMgQXJyYXlDb21wb25lbnQge31cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N0cmluZ01hdGVyaWFsQ29tcG9uZW50fSBmcm9tICcuLi8uLi9maWVsZHMvc3RyaW5nL3N0cmluZy5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtKc29uRm9ybUZpZWxkc1NlcnZpY2V9IGZyb20gJy4uL2pzb24tZm9ybS1maWVsZHMuc2VydmljZSc7XG5pbXBvcnQgeyBUZXh0YXJlYU1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3RleHRhcmVhL3RleHRhcmVhLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9zZWxlY3Qvc2VsZWN0Lm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSYWRpb2dyb3VwTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvcmFkaW9ncm91cC9yYWRpb2dyb3VwLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaG90b01hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3Bob3RvL3Bob3RvLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdW1iZXJNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9udW1iZXIvbnVtYmVyLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNdWx0aXNlbGVjdE1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL211bHRpc2VsZWN0L211bHRpc2VsZWN0Lm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGVja2JveGdyb3VwTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvY2hlY2tib3hncm91cC9jaGVja2JveGdyb3VwLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb29sZWFuTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvYm9vbGVhbi9ib29sZWFuLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvZGF0ZS9kYXRlLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQge0J1dHRvbk1hdGVyaWFsQ29tcG9uZW50fSBmcm9tICcuLi8uLi9maWVsZHMvYnV0dG9uL2J1dHRvbi5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9uZXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbW9uZXkvbW9uZXkuY29tcG9uZW50JztcbmltcG9ydCB7IE9iamVjdENvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9jb21wb25lbnRzL29iamVjdC9vYmplY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEFycmF5TWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvYXJyYXkvYXJyYXkubWF0ZXJpYWwuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpzb25Gb3JtTWF0ZXJpYWwgZXh0ZW5kcyBKc29uRm9ybUZpZWxkc1NlcnZpY2Uge1xuICBmaWVsZFR5cGVzID0ge1xuICAgIHN0cmluZzogU3RyaW5nTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgc2VsZWN0OiBTZWxlY3RNYXRlcmlhbENvbXBvbmVudCxcbiAgICBudW1iZXI6IE51bWJlck1hdGVyaWFsQ29tcG9uZW50LFxuICAgIGJvb2xlYW46IEJvb2xlYW5NYXRlcmlhbENvbXBvbmVudCxcbiAgICBwaG90bzogUGhvdG9NYXRlcmlhbENvbXBvbmVudCxcbiAgICB0ZXh0YXJlYTogVGV4dGFyZWFNYXRlcmlhbENvbXBvbmVudCxcbiAgICBvYmplY3Q6IE9iamVjdENvbXBvbmVudCxcbiAgICBhcnJheTogQXJyYXlNYXRlcmlhbENvbXBvbmVudCxcbiAgICBkYXRlOiBEYXRlTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgcmFkaW9ncm91cDogUmFkaW9ncm91cE1hdGVyaWFsQ29tcG9uZW50LFxuICAgIGNoZWNrYm94Z3JvdXA6IENoZWNrYm94Z3JvdXBNYXRlcmlhbENvbXBvbmVudCxcbiAgICBtdWx0aXNlbGVjdDogTXVsdGlzZWxlY3RNYXRlcmlhbENvbXBvbmVudCxcbiAgICBtb25leTogTW9uZXlDb21wb25lbnQsXG4gICAgYnV0dG9uOiBCdXR0b25NYXRlcmlhbENvbXBvbmVudFxuICB9O1xufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamYtZXJyb3IsIFtqZi1lcnJvcl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmludmFsaWQgJiYgKGNvbnRyb2wuZGlydHkgfHwgY29udHJvbC50b3VjaGVkKVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzWydyZXF1aXJlZCddXCI+XG4gICAgICAgIFRoaXMgZmllbGQgaXMgcmVxdWlyZWQuXG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1sncGF0dGVybiddXCI+XG4gICAgICAgIElucHV0IHZhbHVlIGlzIGludmFsaWQuXG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1snbWlubGVuZ3RoJ11cIj5cbiAgICAgICAgSW5wdXQgaGFzIHRvIGJlIGEgbWluaW11bSBvZiB7e2NvbnRyb2wuZXJyb3JzWydtaW5sZW5ndGgnXVsncmVxdWlyZWRMZW5ndGgnXX19IGNoYXJhY3RlcnMuXG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1snbWF4bGVuZ3RoJ11cIj5cbiAgICAgICAgSW5wdXQgY2FuIGNvbnRhaW4gYSBtYXhpbXVtIG9mIHt7Y29udHJvbC5lcnJvcnNbJ21heGxlbmd0aCddWydyZXF1aXJlZExlbmd0aCddfX0gY2hhcmFjdGVycy5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzWydtaW4nXVwiPlxuICAgICAgICBFbnRlciBhIHZhbHVlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB7e2NvbnRyb2wuZXJyb3JzWydtaW4nXVsnbWluJ119fS5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzWydtYXgnXVwiPlxuICAgICAgICBFbnRlciBhIHZhbHVlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB7e2NvbnRyb2wuZXJyb3JzWydtYXgnXVsnbWF4J119fS5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzWydjdXN0b21FcnJvciddXCI+XG4gICAgICAgIHt7Y29udHJvbC5lcnJvcnNbJ2N1c3RvbUVycm9yJ119fVxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRXJyb3JNYXRlcmlhbENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNvbnRyb2w7XG59XG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUZXh0TWFza01vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXRleHQtbWFzayc7XG5pbXBvcnQge1xuICBNYXRCdXR0b25Nb2R1bGUsXG4gIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgTWF0SW5wdXRNb2R1bGUsXG4gIE1hdFNlbGVjdE1vZHVsZSxcbiAgTWF0UmFkaW9Nb2R1bGUsXG4gIE1hdENoZWNrYm94TW9kdWxlLFxuICBNYXRJY29uTW9kdWxlLFxuICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgTWF0RGF0ZXBpY2tlck1vZHVsZSwgTWF0TmF0aXZlRGF0ZU1vZHVsZSwgTWF0Q2FyZE1vZHVsZVxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBTdHJpbmdNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLm1hdGVyaWFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBKc29uRm9ybU1hdGVyaWFsfSBmcm9tICcuL2pzb24tZm9ybS1tYXRlcmlhbCc7XG5pbXBvcnQgeyBKc29uRm9ybUZpZWxkc1NlcnZpY2UgfSBmcm9tICcuLi9qc29uLWZvcm0tZmllbGRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGV4dGFyZWFNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy90ZXh0YXJlYS90ZXh0YXJlYS5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0TWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvc2VsZWN0L3NlbGVjdC5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmFkaW9ncm91cE1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3JhZGlvZ3JvdXAvcmFkaW9ncm91cC5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGhvdG9NYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9waG90by9waG90by5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tib3hncm91cE1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2NoZWNrYm94Z3JvdXAvY2hlY2tib3hncm91cC5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVtYmVyTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbnVtYmVyL251bWJlci5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXVsdGlzZWxlY3RNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9tdWx0aXNlbGVjdC9tdWx0aXNlbGVjdC5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQm9vbGVhbk1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2Jvb2xlYW4vYm9vbGVhbi5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZU1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2RhdGUvZGF0ZS5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXJyb3JNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9lcnJvci9lcnJvci5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnV0dG9uTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvYnV0dG9uL2J1dHRvbi5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBBcnJheU1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2FycmF5L2FycmF5Lm1hdGVyaWFsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBUZXh0TWFza01vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTdHJpbmdNYXRlcmlhbENvbXBvbmVudCxcbiAgICBUZXh0YXJlYU1hdGVyaWFsQ29tcG9uZW50LFxuICAgIFNlbGVjdE1hdGVyaWFsQ29tcG9uZW50LFxuICAgIFJhZGlvZ3JvdXBNYXRlcmlhbENvbXBvbmVudCxcbiAgICBQaG90b01hdGVyaWFsQ29tcG9uZW50LFxuICAgIE51bWJlck1hdGVyaWFsQ29tcG9uZW50LFxuICAgIE11bHRpc2VsZWN0TWF0ZXJpYWxDb21wb25lbnQsXG4gICAgQ2hlY2tib3hncm91cE1hdGVyaWFsQ29tcG9uZW50LFxuICAgIEJvb2xlYW5NYXRlcmlhbENvbXBvbmVudCxcbiAgICBEYXRlTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgRXJyb3JNYXRlcmlhbENvbXBvbmVudCxcbiAgICBCdXR0b25NYXRlcmlhbENvbXBvbmVudCxcbiAgICBBcnJheU1hdGVyaWFsQ29tcG9uZW50XG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIFN0cmluZ01hdGVyaWFsQ29tcG9uZW50LFxuICAgIFRleHRhcmVhTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgU2VsZWN0TWF0ZXJpYWxDb21wb25lbnQsXG4gICAgUmFkaW9ncm91cE1hdGVyaWFsQ29tcG9uZW50LFxuICAgIFBob3RvTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgTnVtYmVyTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgTXVsdGlzZWxlY3RNYXRlcmlhbENvbXBvbmVudCxcbiAgICBDaGVja2JveGdyb3VwTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgQm9vbGVhbk1hdGVyaWFsQ29tcG9uZW50LFxuICAgIERhdGVNYXRlcmlhbENvbXBvbmVudCxcbiAgICBFcnJvck1hdGVyaWFsQ29tcG9uZW50LFxuICAgIEJ1dHRvbk1hdGVyaWFsQ29tcG9uZW50LFxuICAgIEFycmF5TWF0ZXJpYWxDb21wb25lbnRcbiAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEpzb25Gb3JtTWF0ZXJpYWxNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEpzb25Gb3JtTWF0ZXJpYWxNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEpzb25Gb3JtRmllbGRzU2VydmljZSxcbiAgICAgICAgICB1c2VDbGFzczogSnNvbkZvcm1NYXRlcmlhbCxcbiAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQWFFLHlCQUNTLFdBQ0E7UUFEQSxjQUFTLEdBQVQsU0FBUztRQUNULE9BQUUsR0FBRixFQUFFO0tBQ1A7Ozs7SUFFSix5Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3pCOzs7O0lBRUQsb0NBQVU7OztJQUFWOztRQUVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0tBQ25FOzs7O0lBRUQsK0JBQUs7OztJQUFMO1FBQ0UsT0FBTyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLFdBQVc7Y0FDM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQzlEOzs7OztJQUVELHdDQUFjOzs7O0lBQWQsVUFBZSxHQUFXO1FBQ3hCLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3ZCOzs7O0lBRUQscUNBQVc7OztJQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFN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

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

module.exports = "textarea.has-danger {\n  border: solid 1px #f4516c !important;\n}\n\n.form-builder a.has-danger:hover {\n  text-decoration: none;\n}\n\n.form-builder form,\n.form-builder form div {\n  height: 95%;\n}\n"

/***/ }),

/***/ "./src/app/json-schema-examples/json-schema-examples.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/json-schema-examples/json-schema-examples.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <br />\n  <div class=\"row form-builder\">\n    <div class=\"col-md-6\">\n      <h6>Schema Samples:</h6>\n      <div class=\"form-group\">\n        <div style=\"float:left; width: 49%;\">\n          <select class=\"form-control\" (change)=\"handleSchemaUpdate($event.target.value)\">\n            <option *ngFor=\"let schema of getSchemaSamples()\" [value]=\"schema\">\n              {{jsonSchemaExamplesSamples.json[schema].title}}\n            </option>\n          </select>\n        </div>\n        <div style=\"float:right; width: 49%;\">\n          <select class=\"form-control\" (change)=\"handleFrameworkUpdate($event.target.value)\" >\n            <option value=\"material\">Material Design</option>\n            <option value=\"bootstrap\">Bootstrap 4</option>\n          </select>\n        </div>\n        <div style=\"clear:both;\"></div>\n      </div>\n      <h6>JSON Schema:\n        <span class=\"text-danger\" *ngIf=\"(schemaControl.touched || schemaControl.dirty) && schemaControl.invalid\">\n          {{schemaControl.errors['invalidJSON']}}\n        </span>\n        <a href=\"javascript:void(0)\" class=\"text-danger\"\n           *ngIf=\"(schemaControl.touched || schemaControl.dirty) && schemaControl.invalid\"\n           (click)=\"goToError(schemaControl.errors['invalidJSON'])\">\n          <i class=\"fa fa-exclamation-triangle\"></i>\n        </a>\n      </h6>\n      <form [formGroup]=\"form\">\n        <div class=\"form-group\" [ngClass]=\"{\n          'has-danger': schemaControl.invalid && (schemaControl.dirty || schemaControl.touched)\n          }\">\n          <textarea class=\"form-control schema\" style=\"height: 100%\" [formControl]=\"schemaControl\" (keyup)=\"handleSchemaUpdate()\"\n                    (keydown.Enter)=\"onEnterKey($event)\" (keydown.Tab)=\"onTabKey($event)\" #jsonSchema\n                    [ngClass]=\"{\n              'has-danger': schemaControl.invalid && (schemaControl.dirty || schemaControl.touched)\n            }\"></textarea>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-md-6\">\n      <h6>Form:</h6>\n      <jf-form\n        [id]=\"'exampleform'\"\n        [cancel]=\"cancel\"\n        [submit]=\"'Submit'\"\n        [schema]=\"schema\"\n        [isMultiStep]=\"isMultiStep\"\n        [state]=\"state\"\n        [fields]=\"fields\"\n        [viewOnly]=\"viewOnly\"\n        [data]=\"data\"\n        (handleCancel)=\"handleCancel($event)\"\n        (handleChange)=\"handleChange($event)\"\n        (handleSubmit)=\"handleSubmit($event)\">\n      </jf-form>\n\n      <jf-form\n        *ngIf=\"this.selectedSchema === 'multiple_forms'\"\n        [id]=\"'exampleform'\"\n        [cancel]=\"cancel\"\n        [submit]=\"'Submit'\"\n        [schema]=\"schema\"\n        [isMultiStep]=\"isMultiStep\"\n        [state]=\"state\"\n        [fields]=\"fields\"\n        (handleSubmit)=\"handleSubmit($event)\">\n      </jf-form>\n      <p></p>\n      <h6 *ngIf=\"!this.viewOnly\">Data: (click Submit to preview form data)</h6>\n      <h6 *ngIf=\"this.viewOnly\">Data: <pre>{{formattedData(data)}}</pre></h6>\n      <pre *ngIf=\"!this.viewOnly\" #formResponse>&#123;&#125;</pre>\n    </div>\n  </div>\n</div>\n"

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
            console.log('Material Design');
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
                _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__["JsonFormModule"].forRoot(_trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__["JsonFormBootstrap4Module"]),
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