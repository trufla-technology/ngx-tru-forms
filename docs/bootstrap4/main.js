(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-tru-forms/fesm5/trufla-ngx-tru-forms.js":
/*!**********************************************************!*\
  !*** ./dist/ngx-tru-forms/fesm5/trufla-ngx-tru-forms.js ***!
  \**********************************************************/
/*! exports provided: MomentUtcDateAdapter, JsonFormFieldsService, JsonFormModule, JsonFormBootstrap4Module, JsonFormMaterialModule, JsonFormComponent, JsonFormDefaultsService, JsonFormMaterial, JsonFormBootstrap4, JsonFormValidatorsService, CommonComponent, ɵbs, ɵba, ɵbo, ɵi, ɵbb, ɵbr, ɵbc, ɵbn, ɵn, ɵv, ɵbp, ɵl, ɵx, ɵbq, ɵy, ɵp, ɵbd, ɵbm, ɵo, ɵz, ɵbl, ɵh, ɵbe, ɵbk, ɵj, ɵbf, ɵbj, ɵm, ɵu, ɵbi, ɵg, ɵt, ɵbg, ɵf, ɵw, ɵbh, ɵk, ɵr, ɵs, ɵb, ɵc, ɵd, ɵe, ɵq, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentUtcDateAdapter", function() { return MomentUtcDateAdapter; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbs", function() { return ArrayMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return BooleanComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbo", function() { return BooleanMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return BooleanViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return ButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbr", function() { return ButtonMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function() { return CheckboxgroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbn", function() { return CheckboxgroupMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return CheckboxgroupViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return DateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbp", function() { return DateMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return DateViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return ErrorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbq", function() { return ErrorMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return MoneyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return MoneyViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function() { return MultiselectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbm", function() { return MultiselectMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return MultiselectViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return NumberComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbl", function() { return NumberMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return NumberViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbe", function() { return PhotoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbk", function() { return PhotoMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return PhotoViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbf", function() { return RadiogroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbj", function() { return RadiogroupMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return RadiogroupViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return SelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbi", function() { return SelectMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return SelectViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return StringComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbg", function() { return StringMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return StringViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return TextareaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbh", function() { return TextareaMaterialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return TextareaViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return ArrayComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return ArrayViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ChooserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return FieldComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return FormButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return InfoButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return ObjectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! text-mask-addons/dist/createNumberMask */ "./node_modules/text-mask-addons/dist/createNumberMask.js");
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MomentUtcDateAdapter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MomentUtcDateAdapter, _super);
    function MomentUtcDateAdapter(dateLocale) {
        return _super.call(this, dateLocale) || this;
    }
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    MomentUtcDateAdapter.prototype.createDate = /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    function (year, month, date) {
        // Moment.js will create an invalid date if any of the components are out of bounds, but we
        // explicitly check each case so we can throw more descriptive errors.
        if (month < 0 || month > 11) {
            throw Error("Invalid month index \"" + month + "\". Month index has to be between 0 and 11.");
        }
        if (date < 1) {
            throw Error("Invalid date \"" + date + "\". Date has to be greater than 0.");
        }
        /** @type {?} */
        var result = Object(moment__WEBPACK_IMPORTED_MODULE_4__["utc"])({ year: year, month: month, date: date }).locale(this.locale);
        // If the result isn't valid, the date must have been out of bounds for this month.
        if (!result.isValid()) {
            throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
        }
        return result;
    };
    MomentUtcDateAdapter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    MomentUtcDateAdapter.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"],] }] }
    ]; };
    return MomentUtcDateAdapter;
}(_angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CommonComponent = /** @class */ (function () {
    function CommonComponent(sanitizer, cd) {
        this.sanitizer = sanitizer;
        this.cd = cd;
        this.disabled = false;
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
     * @param {?=} material
     * @return {?}
     */
    CommonComponent.prototype.title = /**
     * @param {?=} material
     * @return {?}
     */
    function (material) {
        if (material === void 0) { material = false; }
        /** @type {?} */
        var required = this.isRequired() && material ? '*' : '';
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
        return Object(lodash__WEBPACK_IMPORTED_MODULE_6__["startCase"])(str);
    };
    /**
     * @return {?}
     */
    CommonComponent.prototype.placeholder = /**
     * @return {?}
     */
    function () {
        return (this.schema.title || this.strToUpperCase(this.schema.key)).replace(/<.*?>/g, '');
    };
    /**
     * @return {?}
     */
    CommonComponent.prototype.type = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var format = this.schema.format || 'text';
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
            /** @type {?} */
            var mask_1 = [];
            this.schema.mask.forEach((/**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                mask_1.push(/^\/.*\/$/.test(el) ? new RegExp(el.replace(/^\/|\/$/g, '')) : el);
            }));
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
        /** @type {?} */
        var imageString = JSON.stringify(image).replace(/\\n/g, '');
        /** @type {?} */
        var style = 'url(' + imageString + ')';
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'jf-component',
                    template: ''
                },] },
    ];
    CommonComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    return CommonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StringViewComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StringViewComponent, _super);
    function StringViewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n  <p><span>{{placeholder()}}</span> <span>{{control.value}}</span></p>\n  "
                },] },
    ];
    return StringViewComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectViewComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SelectViewComponent, _super);
    function SelectViewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <p><span>{{placeholder()}}</span> <span>{{control.value}}</span></p>\n  "
                },] },
    ];
    return SelectViewComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NumberViewComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NumberViewComponent, _super);
    function NumberViewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <p><span>{{placeholder()}}</span> <span>{{control.value}}</span></p>\n  "
                },] },
    ];
    return NumberViewComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BooleanViewComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BooleanViewComponent, _super);
    function BooleanViewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BooleanViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n  <p><span>{{placeholder()}}</span> <span>{{control.value}}</span></p>\n  "
                },] },
    ];
    return BooleanViewComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PhotoViewComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PhotoViewComponent, _super);
    function PhotoViewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhotoViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <p>{{placeholder()}}</p>\n    <img src=\"{{control.value}}\" class=\"img-thumbnail\" />\n  "
                },] },
    ];
    return PhotoViewComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextareaViewComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TextareaViewComponent, _super);
    function TextareaViewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextareaViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n  <p><span>{{placeholder()}}</span> <span>{{control.value}}</span></p>\n  "
                },] },
    ];
    return TextareaViewComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DateViewComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DateViewComponent, _super);
    function DateViewComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numberMask = text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_7___default()({ allowDecimal: false, prefix: '' });
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n  <p><span>{{placeholder()}}</span> <span>{{control.value}}</span></p>\n  "
                },] },
    ];
    return DateViewComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RadiogroupViewComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RadiogroupViewComponent, _super);
    function RadiogroupViewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadiogroupViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n  <p><span>{{placeholder()}}</span> <span>{{control.value}}</span></p>\n  "
                },] },
    ];
    return RadiogroupViewComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckboxgroupViewComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CheckboxgroupViewComponent, _super);
    function CheckboxgroupViewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxgroupViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <p>{{placeholder()}}</p>\n    <ul *ngFor=\"let selected of control.value\">\n      <li>{{selected}}</li>\n    </ul>\n  "
                },] },
    ];
    return CheckboxgroupViewComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MultiselectViewComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MultiselectViewComponent, _super);
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <p>{{placeholder()}}</p>\n    <ul *ngFor=\"let selected of control.value\">\n      <li>{{selected}}</li>\n    </ul>\n  "
                },] },
    ];
    return MultiselectViewComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MoneyViewComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MoneyViewComponent, _super);
    function MoneyViewComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numberMask = text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_7___default()({ allowDecimal: false, prefix: '' });
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n  <p><span>{{placeholder()}}</span> <span>{{control.value}}</span></p>\n  "
                },] },
    ];
    return MoneyViewComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SchemaFormControl = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SchemaFormControl, _super);
    function SchemaFormControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SchemaFormControl;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ObjectComponent = /** @class */ (function () {
    function ObjectComponent() {
    }
    ObjectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <div [ngClass]=\"['object', control.schema.key]\"\n      jf-component-chooser\n      [form]=\"control\"\n      [schema]=\"control.schema\"\n      [nested]=\"true\">\n    </div>"
                },] },
    ];
    ObjectComponent.propDecorators = {
        control: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return ObjectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SchemaFormArray = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SchemaFormArray, _super);
    function SchemaFormArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SchemaFormArray;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormArray"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SchemaFormGroup = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SchemaFormGroup, _super);
    function SchemaFormGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SchemaFormGroup;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return (control && control.schema && control.schema.key) ? Object(lodash__WEBPACK_IMPORTED_MODULE_6__["startCase"])(control.schema.key) : '';
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
        return str.toLowerCase().replace(/_/g, ' ').split(' ').map((/**
         * @param {?} word
         * @return {?}
         */
        function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        })).join(' ');
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
            return control.controls.filter((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return c.enabled; }));
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
        /** @type {?} */
        var newControl;
        if (control instanceof SchemaFormGroup) {
            /** @type {?} */
            var formGroup_1 = new SchemaFormGroup({}, control.validator, control.asyncValidator);
            /** @type {?} */
            var controls_1 = control.controls;
            formGroup_1.schema = control.schema;
            Object.keys(controls_1).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                formGroup_1.addControl(key, _this.cloneControl(controls_1[key]));
            }));
            newControl = formGroup_1;
        }
        else if (control instanceof SchemaFormArray) {
            /** @type {?} */
            var formArray_1 = new SchemaFormArray([], control.validator, control.asyncValidator);
            control.controls.forEach((/**
             * @param {?} formControl
             * @return {?}
             */
            function (formControl) {
                formArray_1.push(_this.cloneControl(formControl));
                return formArray_1;
            }));
            newControl = formArray_1;
            ((/** @type {?} */ (newControl))).schema = control.schema;
        }
        else if (control instanceof SchemaFormControl) {
            newControl = new SchemaFormControl(control.value, control.validator, control.asyncValidator);
            ((/** @type {?} */ (newControl))).schema = control.schema;
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <div [ngClass]=\"['array', control.schema.key]\">\n      <h6 *ngIf=\"getLegend(control).length\">{{getLegend(control)}}</h6>\n      <div *ngFor=\"let arrControl of getEnabledControls(control); let i = index;\">\n        <div class=\"row\">\n          <div class=\"control\" jf-component-chooser [form]=\"arrControl\"></div>\n          <div class=\"remove\" *ngIf=\"control.controls.length > 1\">\n            <input type=\"button\" (click)=\"removeControl(control, i)\" class=\"btn btn-success btn-sm\" value=\"Remove\"/>\n          </div>\n        </div>\n      </div>\n      <div class=\"row add\">\n        <div class=\"col-12\">\n          <input type=\"button\" (click)=\"addControl(control)\" class=\"btn btn-success btn-sm\" value=\"Add\"/>\n        </div>\n      </div>\n    </div>\n  "
                },] },
    ];
    ArrayComponent.propDecorators = {
        control: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return ArrayComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ArrayViewComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ArrayViewComponent, _super);
    function ArrayViewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrayViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <div [ngClass]=\"['array', control.schema.key]\">\n      <h6 *ngIf=\"getLegend(control).length\">{{getLegend(control)}}</h6>\n      <div *ngFor=\"let arrControl of getEnabledControls(control); let i = index;\">\n        <div class=\"row\">\n          <div class=\"control\" jf-component-chooser [form]=\"arrControl\"></div>\n        </div>\n      </div>\n    </div>\n  "
                },] },
    ];
    return ArrayViewComponent;
}(ArrayComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JsonFormFieldsService = /** @class */ (function () {
    function JsonFormFieldsService(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.fieldTypes = {};
        this.viewOnly = false;
        this.disabled = false;
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
        /** @type {?} */
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.get(control));
        /** @type {?} */
        var componentRef = this.rootViewContainer.createComponent(componentFactory);
        componentRef.instance.control = control;
        componentRef.instance.schema = control.schema;
        componentRef.instance.style = control.style;
        componentRef.instance.disabled = this.disabled;
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
        /** @type {?} */
        var types = this.viewOnly ? this.viewTypes : this.fieldTypes;
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    JsonFormFieldsService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
    ]; };
    return JsonFormFieldsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        /** @type {?} */
        var dateValidator = (/**
         * @param {?} control
         * @return {?}
         */
        function ageRangeValidator(control) {
            if (control.value === null || (control.value !== null && isNaN(new Date(control.value).getDate()))) {
                return { customError: 'Please enter a valid date.' };
            }
            return null;
        });
        /** @type {?} */
        var required = schema.required || [];
        /** @type {?} */
        var field = schema.properties[prop];
        /** @type {?} */
        var varPath = [].concat(path, prop).join('.');
        if (schema.properties[prop].type === 'boolean' && required.indexOf(prop) > -1) {
            return _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].requiredTrue;
        }
        return _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose(this.validators.concat([
            (this.has(varPath) ? this.validators[varPath] : null),
            (required.indexOf(prop) > -1 ? _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required : null),
            (field.hasOwnProperty('minLength') ? _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(field.minLength) : null),
            (field.hasOwnProperty('maxLength') ? _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(field.maxLength) : null),
            (field.hasOwnProperty('format') && field.format === 'email' ? _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].email : null),
            (field.hasOwnProperty('minimum') ? _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(field.minimum) : null),
            (field.hasOwnProperty('maximum') ? _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(field.maximum) : null),
            (field.format && field.format === 'date' ? dateValidator : null),
            (field.pattern ? _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(field.pattern) : null)
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    JsonFormValidatorsService.ctorParameters = function () { return []; };
    return JsonFormValidatorsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        /** @type {?} */
        var defaultString = (prop.hasOwnProperty('format') && prop.format === 'multiselect') ? [] : '';
        /** @type {?} */
        var defaultValue = schema.properties[prop].default || defaultString;
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
     * @private
     * @param {?} str
     * @return {?}
     */
    JsonFormDefaultsService.prototype.eval = /**
     * @private
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    JsonFormDefaultsService.ctorParameters = function () { return []; };
    return JsonFormDefaultsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.disabled = null;
        this.handleStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.handleSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.handleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.handleCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
            this.jf[0].disabled = this.disabled;
            this.cancel = this.viewOnly || this.disabled ? '' : this.cancel;
            this.submit = this.viewOnly || this.disabled ? '' : this.submit;
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
        Object.keys(this.fields).forEach((/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
            _this.jf[0].register(f, _this.fields[f]);
        }));
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
                /** @type {?} */
                var visibleStepName = this.activeStep > 0 ? this.activeStep : this.steps.find((/**
                 * @param {?} s
                 * @return {?}
                 */
                function (s) { return s.visible; })).name;
                this.activeSchema = this.schema.properties[visibleStepName];
                this.activeStyle = this.style.hasOwnProperty(visibleStepName) ? this.style[visibleStepName] : {};
                this.data = this.state && this.multiStepData.hasOwnProperty(visibleStepName)
                    ? this.multiStepData[visibleStepName] : this.data;
            }
            this.activeSchema = this.subRefs(this.activeSchema);
            this.model = this.generateForm(this.activeSchema, {}, this.data, this.activeStyle);
            this.form = this.fb.group(this.model);
            this.form.valueChanges.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (_this.control.isPartOf) {
                    _this.data = data;
                    _this.constructForm();
                }
                _this.handleChange.emit({ id: _this.id, control: _this.control, data: data });
            }));
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
        return Object.keys(schema.properties).map((/**
         * @param {?} name
         * @param {?} index
         * @return {?}
         */
        function (name, index) {
            /** @type {?} */
            var type = 'step';
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
        }));
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
     * @private
     * @param {?} schema
     * @param {?=} group
     * @param {?=} data
     * @param {?=} style
     * @param {?=} path
     * @return {?}
     */
    JsonFormComponent.prototype.generateForm = /**
     * @private
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
        Object.keys(schema.properties).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        function (prop) {
            if (_this.isOneOf(schema, prop, path)) {
                return;
            }
            if (schema.properties[prop].type === 'object') {
                /** @type {?} */
                var groupData = data && data.hasOwnProperty(prop) ? data[prop] : {};
                /** @type {?} */
                var groupStyle = style && style.hasOwnProperty(prop) ? style[prop] : {};
                group[prop] = new SchemaFormGroup(_this.generateForm(schema.properties[prop], {}, groupData, groupStyle, [].concat(path, prop)));
                group[prop].schema = schema.properties[prop];
                group[prop].schema.key = prop;
                group[prop].schema.id = _this.id;
                group[prop].style = groupStyle;
            }
            else if (schema.properties[prop].type === 'array' && !_this.isFormat(schema.properties[prop], 'multiselect')) {
                path.push(prop);
                /** @type {?} */
                var arrayData = data && data.hasOwnProperty(prop) ? data[prop] : [{}];
                /** @type {?} */
                var arrayStyle = style && style.hasOwnProperty(prop) ? style[prop] : {};
                /** @type {?} */
                var fbArray = [];
                if (schema.properties[prop].enum) {
                    fbArray = schema.properties[prop].enum.map((/**
                     * @param {?} e
                     * @return {?}
                     */
                    function (e) {
                        /** @type {?} */
                        var control = new SchemaFormControl();
                        control.schema = Object.assign({}, schema.properties[prop]);
                        control.schema.key = prop;
                        control.schema.id = _this.id;
                        control.valueChanges.subscribe((/**
                         * @param {?} event
                         * @return {?}
                         */
                        function (event) { return _this.handleOnChange(prop, event); }));
                        control.isRequired = schema.hasOwnProperty('required') && schema.required.indexOf(prop) > -1;
                        if (control.isRequired) {
                            _this.requiredFields++;
                        }
                        return control;
                    }));
                }
                else {
                    fbArray = arrayData.map((/**
                     * @param {?} dataAtIndex
                     * @return {?}
                     */
                    function (dataAtIndex) {
                        /** @type {?} */
                        var g = new SchemaFormGroup(_this.generateForm(schema.properties[prop].items, {}, dataAtIndex, {}, [].concat(path, prop)));
                        g.schema = schema.properties[prop];
                        return g;
                    }));
                }
                group[prop] = new SchemaFormArray(fbArray);
                group[prop].schema = schema.properties[prop];
                group[prop].schema.key = prop;
                group[prop].schema.id = _this.id;
                group[prop].style = arrayStyle;
            }
            else if (_this.isVisible(schema.properties[prop])) {
                /** @type {?} */
                var control = new SchemaFormControl(_this.df.get(prop, schema, data), _this.vl.get(prop, schema, path));
                control.schema = Object.assign({}, schema.properties[prop]);
                control.schema.key = prop;
                control.schema.id = _this.id;
                control.data = _this.df.get(prop, schema, data);
                control.style = (style && style.hasOwnProperty(prop)) ? style[prop] : {};
                control.valueChanges.subscribe((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) { return _this.handleOnChange(prop, event, _this.inOneOf(schema, prop)); }));
                control.isRequired = schema.hasOwnProperty('required') && schema.required.indexOf(prop) > -1;
                if (control.isRequired) {
                    _this.requiredFields++;
                }
                group[prop] = control;
            }
        }));
        return group;
    };
    /**
     * @param {?} schema
     * @param {?} key
     * @param {?} path
     * @return {?}
     */
    JsonFormComponent.prototype.isOneOf = /**
     * @param {?} schema
     * @param {?} key
     * @param {?} path
     * @return {?}
     */
    function (schema, key, path) {
        var _this = this;
        if (!schema.oneOf) {
            return false;
        }
        return schema.oneOf.filter((/**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_6__["get"])(p, 'required', []).includes(key)) {
                /** @type {?} */
                var parent_1 = Object.keys(p.properties)[0];
                /** @type {?} */
                var dataPath = path.concat(parent_1).join('.');
                /** @type {?} */
                var value = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["get"])(_this.data, dataPath, null);
                if (schema.properties[parent_1].type === 'boolean') {
                    value = String(value) === 'true'; // material preserves string & bootstrap doesn't
                }
                else if (schema.properties[parent_1].type === 'number') {
                    value = +value;
                }
                // when returns true it will not display field, otherwise it will
                return value === null || Object(lodash__WEBPACK_IMPORTED_MODULE_6__["get"])(p.properties[parent_1], 'enum', []).indexOf(value) === -1;
            }
            return false;
        })).length > 0;
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
            return schema.oneOf.filter((/**
             * @param {?} p
             * @return {?}
             */
            function (p) {
                /** @type {?} */
                var key = Object.keys(p.properties)[0];
                return key === prop;
            })).length > 0;
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
        var _a;
        this.touchAll(this.form.controls);
        if (this.form.valid && this.isMultiStep) {
            /** @type {?} */
            var prev = this.steps.findIndex((/**
             * @param {?} s
             * @return {?}
             */
            function (s) { return s.visible; }));
            this.multiStepData[this.activeStep] = this.form.value;
            /** @type {?} */
            var current = this.steps.findIndex((/**
             * @param {?} s
             * @return {?}
             */
            function (s) { return s.name === _this.activeStep; }));
            /** @type {?} */
            var next = current + 1;
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
        var _a;
        if (this.isMultiStep) {
            /** @type {?} */
            var prev = this.steps.findIndex((/**
             * @param {?} s
             * @return {?}
             */
            function (s) { return s.visible; }));
            this.steps[prev].visible = false;
            /** @type {?} */
            var current = this.steps.findIndex((/**
             * @param {?} s
             * @return {?}
             */
            function (s) { return s.name === _this.activeStep; }));
            /** @type {?} */
            var next = current - 1;
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
        Object.keys(controls).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (controls[key].hasOwnProperty('controls')) {
                _this.touchAll(controls[key].controls);
            }
            controls[key].markAsTouched();
        }));
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
        Object.keys(schema.properties).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        function (prop) {
            if (schema.properties[prop].hasOwnProperty('$ref')) {
                schema.properties[prop] = _this.schema.definitions[schema.properties[prop]['$ref'].replace('#/definitions/', '')];
            }
        }));
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'jf-form, tru-form',
                    template: "<form\n  #userForm=\"ngForm\"\n  [formGroup]=\"form\"\n  (ngSubmit)=\"handleOnSubmit()\"\n  *ngIf=\"isValidSchema()\"\n  [ngClass]=\"{ 'view-only': viewOnly }\"\n  [id]=\"id\"\n>\n  <div #header></div>\n  <div\n    jf-component-chooser\n    [ngClass]=\"[outerClass || '', this.activeStyle['default'] ? this.activeStyle['default'] : '']\"\n    [form]=\"form\"\n    [schema]=\"activeSchema\">\n  </div>\n  <div #container>\n    <ng-content></ng-content>\n  </div>\n  <div #footer></div>\n  <div\n    #buttons\n    *ngIf=\"container.children.length == 0 && (submit || cancel)\"\n    [ngClass]=\"{ 'margin-top--double': true, 'page-actions--edges': (cancel && submit), 'page-actions--center': (!cancel || !submit)}\">\n    <jf-form-button\n      *ngIf=\"cancel\"\n      [cancel]=\"cancel\"\n      [steps]=\"steps\"\n      [isMultiStep]=\"isMultiStep\"\n      [isWorking]=\"isWorking\"\n      (handleClick)=\"handleOnCancel()\"\n      [submitClass]=\"submitClass\"\n      [cancelClass]=\"cancelClass\">\n    </jf-form-button>\n    <jf-form-button\n      *ngIf=\"submit\"\n      [submitClass]=\"submitClass\"\n      [cancelClass]=\"cancelClass\"\n      [submit]=\"submit\"\n      [steps]=\"steps\"\n      [continue]=\"continue\"\n      [isMultiStep]=\"isMultiStep\"\n      [isWorking]=\"isWorking\"\n      [isFormValid]=\"this.form.valid\">\n    </jf-form-button>\n  </div>\n</form>\n"
                },] },
    ];
    JsonFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
        { type: JsonFormValidatorsService },
        { type: JsonFormDefaultsService },
        { type: JsonFormFieldsService }
    ]; };
    JsonFormComponent.propDecorators = {
        schema: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        continue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        submit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        cancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        submitClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        cancelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        outerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        isWorking: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        isMultiStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        activeStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        fields: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        viewOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        handleStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        handleSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        handleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        handleCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        userForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['userForm',] }],
        header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['header',] }],
        footer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['footer',] }]
    };
    return JsonFormComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckboxgroupComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CheckboxgroupComponent, _super);
    function CheckboxgroupComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.checkboxGroupValues = [];
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
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    CheckboxgroupComponent.prototype.getId = /**
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    function (key, val) {
        return key + "-" + val.toString();
    };
    CheckboxgroupComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <label [attr.class]=\"schema.key\" [ngClass]=\"{'margin-bottom--half': true, required: isRequired()}\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup></label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <div [class]=\"getClass('checkbox-group')\">\n      <div *ngFor=\"let child of this.control['controls']; let i = index\"\n           [ngClass]=\"{'checkbox-container': true, 'checked': child.value === schema.enum[i]}\">\n        <input\n          type=\"checkbox\"\n          [attr.id]=\"getId(schema.key, schema.enum[i])\"\n          [attr.disabled]=\"disabled\"\n          [checked]=\"child.value === schema.enum[i]\"\n          [name]=\"schema.key\"\n          [formControl]=\"child\"\n          (change)=\"setValue($event, i)\"\n          [value]=\"schema.enum[i]\" />\n        <label\n          [attr.for]=\"getId(i, schema.enum[i])\"\n          [attr.class]=\"schema.key\">\n          {{enumNames(i)}}\n        </label>\n      </div>\n    </div>\n    <jf-error [control]=\"control\"></jf-error>\n  "
                },] },
    ];
    return CheckboxgroupComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MultiselectComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MultiselectComponent, _super);
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <label [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <button type=\"button\" *ngIf=\"schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <select\n      class=\"form-control\"\n      name=\"name\"\n      [formControl]=\"control\"\n      multiple=\"multiple\"\n      [attr.disabled]=\"disabled\"\n    >\n      <option\n        *ngFor=\"let en of schema.enum; let i = index\"\n        [selected]=\"control.value === en\"\n        [ngValue]=\"en\">\n        {{enumNames(i)}}\n      </option>\n    </select>\n  "
                },] },
    ];
    return MultiselectComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextareaComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TextareaComponent, _super);
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <label\n      [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <textarea\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [formControl]=\"control\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.minLength]=\"schema.minLength || null\"\n      [attr.placeholder]=\"placeholder()\"\n      [attr.disabled]=\"disabled\"\n    ></textarea>\n    <jf-error [control]=\"control\"></jf-error>\n  "
                },] },
    ];
    return TextareaComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SelectComponent, _super);
    function SelectComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <div class=\"select-container\">\n      <label\n        [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n        <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n      </label>\n      <button type=\"button\" *ngIf=\"schema.description\" [attr.class]=\"'info'\" [attr.title]=\"schema.description\">Info</button>\n      <select\n        class=\"form-control\"\n        [attr.name]=\"schema.key\"\n        [formControl]=\"control\"\n        [attr.disabled]=\"disabled\"\n      >\n        <option value=\"\" [selected]=\"control.value === ''\" [disabled]=\"true\">\n          {{placeholder()}}\n        </option>\n        <option\n          *ngFor=\"let en of schema.enum; let i = index\"\n          [selected]=\"control.value === en\"\n          [ngValue]=\"en\">\n          {{enumNames(i)}}\n        </option>\n      </select>\n    </div>\n    <jf-error [control]=\"control\"></jf-error>\n  "
                },] },
    ];
    return SelectComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BooleanComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BooleanComponent, _super);
    function BooleanComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BooleanComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <div [class]=\"getClass('checkbox-group')\">\n      <div class=\"checkbox-container\">\n        <input\n          [id]=\"schema.key\"\n          [name]=\"schema.key\"\n          type=\"checkbox\"\n          [formControl]=\"control\"\n          [attr.disabled]=\"disabled\"\n        />\n        <label [attr.for]=\"schema.key\" [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n          <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n        </label>\n      </div>\n    </div>\n    <jf-error [control]=\"control\"></jf-error>\n  "
                },] },
    ];
    return BooleanComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NumberComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NumberComponent, _super);
    function NumberComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <label [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\" *ngIf=\"type() !== 'hidden'\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <input\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [attr.type]=\"'number'\"\n      [formControl]=\"control\"\n      [attr.placeholder]=\"placeholder()\"\n      [attr.disabled]=\"disabled\"\n    />\n    <jf-error [control]=\"control\"></jf-error>\n  "
                },] },
    ];
    return NumberComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PhotoComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PhotoComponent, _super);
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
        /** @type {?} */
        var file = event.target.files[0];
        /** @type {?} */
        var reader = new FileReader();
        reader.onloadend = (/**
         * @return {?}
         */
        function () {
            _this.processFile(reader.result, file.type)
                .then((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.photoData = data.toString();
                _this.control.setValue(_this.photoData);
            }));
        });
        reader.onerror = (/**
         * @return {?}
         */
        function () {
            console.log('There was an error reading the file!');
        });
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
        /** @type {?} */
        var maxWidth = 800;
        /** @type {?} */
        var maxHeight = 800;
        /** @type {?} */
        var image = new Image();
        image.src = dataURL;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            image.onload = (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var width = image.width;
                /** @type {?} */
                var height = image.height;
                /** @type {?} */
                var shouldResize = (width > maxWidth) || (height > maxHeight);
                if (!shouldResize) {
                    resolve(dataURL);
                }
                /** @type {?} */
                var newWidth;
                /** @type {?} */
                var newHeight;
                if (width > height) {
                    newHeight = height * (maxWidth / width);
                    newWidth = maxWidth;
                }
                else {
                    newWidth = width * (maxHeight / height);
                    newHeight = maxHeight;
                }
                /** @type {?} */
                var canvas = document.createElement('canvas');
                canvas.width = newWidth;
                canvas.height = newHeight;
                /** @type {?} */
                var context = canvas.getContext('2d');
                context.drawImage(image, 0, 0, newWidth, newHeight);
                resolve(canvas.toDataURL(fileType));
            });
            image.onerror = (/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return reject(err); });
        }));
    };
    PhotoComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <label [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <div *ngIf=\"previewSrcExists()\" class=\"photo-preview\">\n      <img [attr.src]=\"photoData\" />\n      <span href=\"#\" style=\"cursor: pointer;\" (click)=\"clearPhoto()\">\n        <i class=\"la la-close\"></i>\n      </span>\n    </div>\n    <div>\n      <input\n        *ngIf=\"!previewSrcExists()\"\n        type=\"file\"\n        (change)=\"onChange($event)\"\n        [disabled]=\"disabled\"\n      />\n      <input type=\"hidden\" [name]=\"schema.key\" [formControl]=\"control\" />\n    </div>\n    <div>\n      <jf-error [control]=\"control\"></jf-error>\n    </div>\n  "
                },] },
    ];
    return PhotoComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RadiogroupComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RadiogroupComponent, _super);
    function RadiogroupComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.randomSuffix = Math.random().toString(36).substring(7);
        return _this;
    }
    /**
     * @param {?} key
     * @param {?} val
     * @param {?} formId
     * @return {?}
     */
    RadiogroupComponent.prototype.getId = /**
     * @param {?} key
     * @param {?} val
     * @param {?} formId
     * @return {?}
     */
    function (key, val, formId) {
        return [formId, key, val.toString()].filter((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f.length; })).join('-');
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <label\n      [ngClass]=\"['margin-bottom--half', 'jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup></label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <div [class]=\"getClass('radio-group')\">\n      <div *ngFor=\"let en of this.schema.enum; let i = index\"\n           [ngClass]=\"{'radio-container': true, 'checked': control.value === en}\">\n        <input\n          type=\"radio\"\n          [attr.id]=\"getId(schema.key, en, schema.id)\"\n          [checked]=\"control.value === en\"\n          [name]=\"getName(schema.key)\"\n          [formControl]=\"control\"\n          [attr.disabled]=\"disabled\"\n          [value]=\"en\" />\n        <label\n          [attr.for]=\"getId(schema.key, en, schema.id)\"\n          [attr.class]=\"schema.key\">\n           {{enumNames(i)}}\n        </label>\n      </div>\n    </div>\n    <jf-error [control]=\"control\"></jf-error>\n  "
                },] },
    ];
    return RadiogroupComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StringComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StringComponent, _super);
    function StringComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <label\n      [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\" *ngIf=\"type() !== 'hidden'\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <input\n      class=\"form-control\"\n      [attr.name]=\"schema.key\"\n      [attr.type]=\"type()\"\n      [formControl]=\"control\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.minLength]=\"schema.minLength || null\"\n      [attr.placeholder]=\"placeholder()\"\n      [attr.disabled]=\"disabled\"\n      [textMask]=\"{ mask: getMask() }\"\n    />\n    <jf-error [control]=\"control\"></jf-error>\n  "
                },] },
    ];
    return StringComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DateComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DateComponent, _super);
    function DateComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <label [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <input\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [formControl]=\"control\"\n      [placeholder]=\"placeholder()\"\n      [bsConfig]=\"{ containerClass: 'theme-default', dateInputFormat: 'MM/DD/YYYY' }\"\n      bsDatepicker\n      [attr.disabled]=\"disabled\"\n    />\n    <jf-error [control]=\"control\"></jf-error>\n  "
                },] },
    ];
    return DateComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.color = '';
        this.handleButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'jf-button',
                    template: "\n    <button\n      *ngIf=\"isVisible\"\n      [type]=\"type\"\n      [ngClass]=\"class\"\n      [disabled]=\"disabled\"\n      (click)=\"handleClick($event)\">\n      {{label}}\n    </button>\n  "
                },] },
    ];
    ButtonComponent.propDecorators = {
        isVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        isWorking: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        submit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        handleButtonClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return ButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MoneyComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MoneyComponent, _super);
    function MoneyComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numberMask = text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_7___default()({ allowDecimal: false, prefix: '' });
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <label [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <input\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [attr.type]=\"'text'\"\n      [formControl]=\"control\"\n      [placeholder]=\"placeholder()\"\n      [textMask]=\"{ mask: numberMask}\"\n      (input)=cleanMask($event.target.value)\n      [attr.disabled]=\"disabled\"\n    />\n    <jf-error [control]=\"control\"></jf-error>\n  "
                },] },
    ];
    return MoneyComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JsonFormBootstrap4 = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(JsonFormBootstrap4, _super);
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    return JsonFormBootstrap4;
}(JsonFormFieldsService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChooserComponent = /** @class */ (function () {
    function ChooserComponent() {
        this.nested = false;
        this.keys = Object.keys;
    }
    ChooserComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'jf-component-chooser, [jf-component-chooser]',
                    template: "\n    <h2 *ngIf=\"schema && schema.hasOwnProperty('title') && !nested\">\n      {{schema.title}}\n    </h2>\n    <h4 *ngIf=\"schema && schema.hasOwnProperty('title') && nested\">\n      {{schema.title}}\n    </h4>\n    <div [ngClass]=\"['form-container']\">\n      <div class=\"description\" *ngIf=\"schema && schema.hasOwnProperty('description')\" [innerHTML]=\"schema.description\"></div>\n      <div *ngFor=\"let control of keys(form.controls)\" jf-field [control]=\"form.get(control)\"></div>\n    </div>\n  "
                },] },
    ];
    ChooserComponent.propDecorators = {
        form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        schema: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        nested: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return ChooserComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        /** @type {?} */
        var fieldClass = [defaultClass];
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
        return fieldClass.filter((/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return d; })).join(' ');
    };
    FieldComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'jf-field, [jf-field]',
                    template: "\n    <ng-content></ng-content>\n    <ng-container #container></ng-container>\n  "
                },] },
    ];
    FieldComponent.ctorParameters = function () { return [
        { type: JsonFormFieldsService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    FieldComponent.propDecorators = {
        container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },] }],
        control: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return FieldComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.handleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FormButtonComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.drawButton();
    };
    /**
     * @return {?}
     */
    FormButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.drawButton();
    };
    /**
     * @return {?}
     */
    FormButtonComponent.prototype.drawButton = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.button.clear();
        /** @type {?} */
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.jsonFormFieldsService[0].get('button'));
        /** @type {?} */
        var componentRef = this.button.createComponent(componentFactory);
        ((/** @type {?} */ (componentRef.instance))).type = this.getType();
        ((/** @type {?} */ (componentRef.instance))).isVisible = this.isVisible();
        ((/** @type {?} */ (componentRef.instance))).class = this.getClass();
        ((/** @type {?} */ (componentRef.instance))).disabled = this.isWorking;
        ((/** @type {?} */ (componentRef.instance))).isWorking = this.isWorking;
        ((/** @type {?} */ (componentRef.instance))).label = this.getLabel();
        ((/** @type {?} */ (componentRef.instance))).handleButtonClick.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (_this.cancel.length > 0) {
                _this.handleClick.emit(event);
            }
        }));
        ((/** @type {?} */ (componentRef.instance))).color = this.submit ? 'primary' : '';
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
        /** @type {?} */
        var step = this.steps.findIndex((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.visible; }));
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
            /** @type {?} */
            var step = this.steps.findIndex((/**
             * @param {?} s
             * @return {?}
             */
            function (s) { return s.visible; }));
            if (this.steps[step] && this.steps[step].type !== 'first') {
                return this.cancel;
            }
        }
        else if (this.isMultiStep) {
            /** @type {?} */
            var step = this.steps.findIndex((/**
             * @param {?} s
             * @return {?}
             */
            function (s) { return s.visible; }));
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'jf-form-button',
                    template: "\n    <ng-container #button></ng-container>\n  "
                },] },
    ];
    FormButtonComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: JsonFormFieldsService }
    ]; };
    FormButtonComponent.propDecorators = {
        isFormValid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        isMultiStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        submit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        continue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        cancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        submitClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        cancelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        isWorking: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        handleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['button', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },] }]
    };
    return FormButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InfoButtonComponent = /** @class */ (function () {
    function InfoButtonComponent() {
    }
    InfoButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'jf-info-button',
                    template: "\n    <a\n      [attr.href]=\"'javascript:void(0)'\"\n      *ngIf=\"title\"\n      [attr.class]=\"'btn btn-link info'\" [attr.title]=\"title\">Info</a>\n  "
                },] },
    ];
    InfoButtonComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return InfoButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                        angular2_text_mask__WEBPACK_IMPORTED_MODULE_10__["TextMaskModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
                    ],
                    declarations: [
                        JsonFormComponent,
                        CommonComponent,
                        ChooserComponent,
                        FieldComponent,
                        FormButtonComponent,
                        InfoButtonComponent,
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        /** @type {?} */
        var loadFramework = frameworks.length
            ? frameworks.map((/**
             * @param {?} framework
             * @return {?}
             */
            function (framework) { return framework.forRoot().providers[0]; }))
            : [{ provide: JsonFormFieldsService, useClass: JsonFormBootstrap4, multi: true }];
        return {
            ngModule: JsonFormModule,
            providers: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([
                JsonFormDefaultsService,
                JsonFormValidatorsService
            ], loadFramework)
        };
    };
    JsonFormModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ErrorComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ErrorComponent, _super);
    function ErrorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'jf-error, [jf-error]',
                    template: "\n    <div *ngIf=\"control.invalid && (control.dirty || control.touched)\" class=\"invalid-feedback\">\n      <ng-container *ngIf=\"control.errors && control.errors['required']\">\n        This field is required.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['pattern']\">\n        Input value is invalid.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['email']\">\n        Email is invalid.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['minlength']\">\n        Input has to be a minimum of {{control.errors['minlength']['requiredLength']}} characters.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['maxlength']\">\n        Input can contain a maximum of {{control.errors['maxlength']['requiredLength']}} characters.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['min']\">\n        Enter a value greater than or equal to {{control.errors['min']['min']}}.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['max']\">\n        Enter a value less than or equal to {{control.errors['max']['max']}}.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['customError']\">\n        {{control.errors['customError']}}\n      </ng-container>\n    </div>\n  "
                },] },
    ];
    ErrorComponent.propDecorators = {
        control: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return ErrorComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                        angular2_text_mask__WEBPACK_IMPORTED_MODULE_10__["TextMaskModule"],
                        SharedModule,
                        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerModule"].forRoot()
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StringMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StringMaterialComponent, _super);
    function StringMaterialComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <mat-form-field>\n      <input\n        matInput\n        [attr.name]=\"schema.key\"\n        [attr.type]=\"type()\"\n        [formControl]=\"control\"\n        [attr.maxLength]=\"schema.maxLength || null\"\n        [attr.minLength]=\"schema.minLength || null\"\n        [attr.placeholder]=\"placeholder()\"\n        [textMask]=\"{ mask: getMask() }\"\n        [placeholder]=\"title(true)\"\n        [disabled]=\"disabled\"\n      />\n      <mat-error jf-error [control]=\"control\"></mat-error>\n    </mat-form-field>\n  "
                },] },
    ];
    return StringMaterialComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextareaMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TextareaMaterialComponent, _super);
    function TextareaMaterialComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextareaMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <mat-form-field class=\"example-full-width\">\n      <textarea\n          matInput\n          [name]=\"schema.key\"\n          [formControl]=\"control\"\n          [attr.maxLength]=\"schema.maxLength || null\"\n          [attr.minLength]=\"schema.minLength || null\"\n          [attr.placeholder]=\"placeholder()\"\n          [disabled]=\"disabled\"\n          [placeholder]=\"title(true)\">\n      </textarea>\n      <mat-error jf-error [control]=\"control\"></mat-error>\n    </mat-form-field>\n  "
                },] },
    ];
    return TextareaMaterialComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SelectMaterialComponent, _super);
    function SelectMaterialComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n\n  <mat-form-field>\n    <mat-select\n      class=\"form-control\"\n      [attr.name]=\"schema.key\"\n      [formControl]=\"control\"\n      placeholder=\"{{title(true)}}\"\n      [disabled]=\"disabled\"\n    >\n      <mat-option [disabled]=\"true\">\n          {{placeholder()}}\n      </mat-option>\n      <mat-option *ngFor=\"let en of this.schema.enum; let i = index\" [value]=\"en\">\n          {{enumNames(i)}}\n      </mat-option>\n    </mat-select>\n    <mat-error jf-error [control]=\"control\"></mat-error>\n  </mat-form-field>\n\n  "
                },] },
    ];
    return SelectMaterialComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RadiogroupMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RadiogroupMaterialComponent, _super);
    function RadiogroupMaterialComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadiogroupMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <div>\n      <label [attr.class]=\"schema.key\" [ngClass]=\"{'margin-bottom--half': true, required: isRequired()}\">\n        <span [innerHTML]=\"title(true)\"></span><sup *ngIf=\"isRequired()\">*</sup></label>\n\n      <mat-radio-group [formControl]=\"control\" *ngFor=\"let en of this.schema.enum; let i = index\">\n        <mat-radio-button\n          [checked]=\"control.value === en.toString()\"\n          [value]=\"en.toString()\"\n          [disabled]=\"disabled\"\n        >\n          {{enumNames(i)}}\n        </mat-radio-button>\n      </mat-radio-group>\n    </div>\n  "
                },] },
    ];
    return RadiogroupMaterialComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PhotoMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PhotoMaterialComponent, _super);
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
        /** @type {?} */
        var file = event.target.files[0];
        /** @type {?} */
        var reader = new FileReader();
        reader.onloadend = (/**
         * @return {?}
         */
        function () {
            _this.processFile(reader.result, file.type)
                .then((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.error = false;
                _this.photoData = data.toString();
                _this.control.setValue(_this.photoData);
            }))
                .catch((/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                _this.error = true;
            }));
        });
        reader.onerror = (/**
         * @return {?}
         */
        function () {
            _this.error = true;
        });
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
        /** @type {?} */
        var maxWidth = 1024;
        /** @type {?} */
        var maxHeight = 1024;
        /** @type {?} */
        var image = new Image();
        image.src = dataURL;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            image.onload = (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var width = image.width;
                /** @type {?} */
                var height = image.height;
                /** @type {?} */
                var shouldResize = (width > maxWidth) || (height > maxHeight);
                if (!shouldResize) {
                    resolve(dataURL);
                }
                /** @type {?} */
                var newWidth;
                /** @type {?} */
                var newHeight;
                if (width > height) {
                    newHeight = height * (maxWidth / width);
                    newWidth = maxWidth;
                }
                else {
                    newWidth = width * (maxHeight / height);
                    newHeight = maxHeight;
                }
                /** @type {?} */
                var canvas = document.createElement('canvas');
                canvas.width = newWidth;
                canvas.height = newHeight;
                /** @type {?} */
                var context = canvas.getContext('2d');
                context.drawImage(image, 0, 0, newWidth, newHeight);
                resolve(canvas.toDataURL(fileType));
            });
            image.onerror = (/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return reject(err); });
        }));
    };
    PhotoMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <label [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n      <span [innerHTML]=\"title(true)\"></span>\n    </label>\n    <div *ngIf=\"previewSrcExists(); else addImage\" class=\"photo-preview\">\n      <a\n        class=\"photo-add\"\n        mat-button\n        color=\"primary\"\n        [style.background-image]=\"makeTrustedImage(photoData)\"\n        [style.background-size]=\"'cover'\"\n        [style.background-repeat]=\"'no-repeat'\"\n        (click)=\"$event.preventDefault(); fileInput.click();\"\n        [disabled]=\"disabled\"\n      >\n        <mat-icon>add_a_photo</mat-icon>\n      </a>\n      <a\n        class=\"photo-remove\"\n        mat-mini-fab\n        color=\"warn\"\n        (click)=\"clearPhoto()\"\n      >\n        <mat-icon>close</mat-icon>\n      </a>\n    </div>\n    <ng-template #addImage>\n      <a\n        class=\"photo-add\"\n        mat-button\n        color=\"primary\"\n        (click)=\"$event.preventDefault(); fileInput.click();\"\n      >\n        <mat-icon>add_a_photo</mat-icon>\n      </a>\n    </ng-template>\n    <input #fileInput type=\"file\" [name]=\"schema.key\" (change)=\"onChange($event)\" style=\"display:none;\"/>\n    <input type=\"hidden\" [name]=\"schema.key\" [formControl]=\"control\"/>\n    <div class=\"mat-form-field-subscript-wrapper\" *ngIf=\"error\" style=\"position: relative;\">\n      <mat-error class=\"mat-error\">Please upload a valid photo format (JPG, PNG)</mat-error>\n    </div>\n    <div>\n      <jf-error [control]=\"control\"></jf-error>\n    </div>\n  "
                },] },
    ];
    return PhotoMaterialComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NumberMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NumberMaterialComponent, _super);
    function NumberMaterialComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <mat-form-field>\n      <input\n        matInput\n        [name]=\"schema.key\"\n        [attr.type]=\"'number'\"\n        [formControl]=\"control\"\n        [attr.placeholder]=\"placeholder()\"\n        [placeholder]=\"title(true)\"\n        [disabled]=\"disabled\"\n      />\n      <mat-error jf-error [control]=\"control\"></mat-error>\n    </mat-form-field>\n  "
                },] },
    ];
    return NumberMaterialComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MultiselectMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MultiselectMaterialComponent, _super);
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n  <mat-form-field>\n    <mat-select\n      [formControl]=\"control\"\n      name=\"name\"\n      [disabled]=\"disabled\"\n      multiple>\n      <mat-option\n        *ngFor=\"let en of schema.enum; let i = index\"\n        [value]=\"en\">\n        {{enumNames(i)}}\n      </mat-option>\n    </mat-select>\n    <mat-error jf-error [control]=\"control\"></mat-error>\n  </mat-form-field>\n  "
                },] },
    ];
    return MultiselectMaterialComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckboxgroupMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CheckboxgroupMaterialComponent, _super);
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <mat-checkbox\n    *ngFor=\"let child of this.control['controls']; let i = index\"\n    [attr.id]=\"getId(i, schema.enum[i])\"\n    [checked]=\"child.value === schema.enum[i]\"\n    [name]=\"schema.key\"\n    [formControl]=\"child\"\n    (change)=\"setValue($event, i)\"\n    [value]=\"schema.enum[i]\"\n    [disabled]=\"disabled\"\n    >\n        {{enumNames(i)}}\n    </mat-checkbox>\n  "
                },] },
    ];
    return CheckboxgroupMaterialComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BooleanMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BooleanMaterialComponent, _super);
    function BooleanMaterialComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BooleanMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <div class=\"slide-container\">\n      <mat-slide-toggle\n      [id]=\"schema.key\"\n      [name]=\"schema.key\"\n      color=\"primary\"\n      [disabled]=\"disabled\"\n      [formControl]=\"control\">{{title(true)}}</mat-slide-toggle>\n    </div>\n    <jf-error [control]=\"control\"></jf-error>\n  "
                },] },
    ];
    return BooleanMaterialComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DateMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DateMaterialComponent, _super);
    function DateMaterialComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    DateMaterialComponent.prototype.isMobile = /**
     * @return {?}
     */
    function () {
        return window.innerWidth <= 800;
    };
    /**
     * @return {?}
     */
    DateMaterialComponent.prototype.minDate = /**
     * @return {?}
     */
    function () {
        return isNaN(new Date(this.schema.minimum).getDate()) ? null : new Date(this.schema.minimum);
    };
    /**
     * @return {?}
     */
    DateMaterialComponent.prototype.maxDate = /**
     * @return {?}
     */
    function () {
        return isNaN(new Date(this.schema.maximum).getDate()) ? null : new Date(this.schema.maximum);
    };
    DateMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <mat-form-field>\n      <input\n        matInput\n        [matDatepicker]='myDatepicker'\n        (click)=\"myDatepicker.open()\"\n        [formControl]='control'\n        [placeholder]='title(true)'\n        [min]=\"minDate()\"\n        [max]=\"maxDate()\"\n        [disabled]=\"disabled\"\n      >\n      <mat-datepicker-toggle matSuffix [for]='myDatepicker'></mat-datepicker-toggle>\n      <mat-datepicker #myDatepicker [touchUi]=\"isMobile()\"></mat-datepicker>\n      <mat-error jf-error [control]='control'></mat-error>\n    </mat-form-field>\n  ",
                    providers: [
                        {
                            provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"],
                            useClass: MomentUtcDateAdapter
                        }
                    ]
                },] },
    ];
    return DateMaterialComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ButtonMaterialComponent, _super);
    function ButtonMaterialComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'jf-button',
                    template: "\n    <button\n      mat-raised-button\n      [color]=\"color\"\n      *ngIf=\"isVisible\"\n      [type]=\"type\"\n      [ngClass]=\"class\"\n      [disabled]=\"disabled\"\n      (click)=\"handleClick($event)\">\n      {{label}}\n    </button>\n  "
                },] },
    ];
    return ButtonMaterialComponent;
}(ButtonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ArrayMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ArrayMaterialComponent, _super);
    function ArrayMaterialComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrayMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "\n    <mat-card [ngClass]=\"['object', control.schema.key]\">\n      <h6 *ngIf=\"getLegend(control).length\">{{getLegend(control)}}</h6>\n      <div class=\"array-items\">\n        <div *ngFor=\"let arrControl of getEnabledControls(control); let i = index;\">\n          <div class=\"row\">\n            <div jf-component-chooser [form]=\"arrControl\"></div>\n            <button\n              mat-button\n              *ngIf=\"control.controls.length > 1\"\n              (click)=\"$event.preventDefault(); removeControl(control, i)\"\n              color=\"warn\"\n              class=\"remove\"\n            >Remove</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <button mat-button color=\"primary\" (click)=\"$event.preventDefault(); addControl(control)\">Add</button>\n      </div>\n    </mat-card>\n  "
                },] },
    ];
    return ArrayMaterialComponent;
}(ArrayComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JsonFormMaterial = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(JsonFormMaterial, _super);
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    return JsonFormMaterial;
}(JsonFormFieldsService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ErrorMaterialComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ErrorMaterialComponent, _super);
    function ErrorMaterialComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'jf-error, [jf-error]',
                    template: "\n    <ng-container *ngIf=\"control.invalid && (control.dirty || control.touched)\">\n      <ng-container *ngIf=\"control.errors && control.errors['required']\">\n        This field is required.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['pattern']\">\n        Input value is invalid.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['email']\">\n        Email is invalid.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['minlength']\">\n        Input has to be a minimum of {{control.errors['minlength']['requiredLength']}} characters.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['maxlength']\">\n        Input can contain a maximum of {{control.errors['maxlength']['requiredLength']}} characters.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['min']\">\n        Enter a value greater than or equal to {{control.errors['min']['min']}}.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['max']\">\n        Enter a value less than or equal to {{control.errors['max']['max']}}.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['customError']\">\n        {{control.errors['customError']}}\n      </ng-container>\n    </ng-container>\n  "
                },] },
    ];
    ErrorMaterialComponent.propDecorators = {
        control: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return ErrorMaterialComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                        angular2_text_mask__WEBPACK_IMPORTED_MODULE_10__["TextMaskModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MatMomentDateModule"],
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1ZmxhLW5neC10cnUtZm9ybXMuanMubWFwIiwic291cmNlcyI6WyJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvc2VydmljZXMvbW9tZW50LXV0Yy1hZGFwdGVyLnNlcnZpY2UudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2NvbW1vbi9jb21tb24uY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9zZWxlY3Qvc2VsZWN0LnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9udW1iZXIvbnVtYmVyLnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9ib29sZWFuL2Jvb2xlYW4udmlldy5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL3Bob3RvL3Bob3RvLnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy90ZXh0YXJlYS90ZXh0YXJlYS52aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvZGF0ZS9kYXRlLnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9yYWRpb2dyb3VwL3JhZGlvZ3JvdXAudmlldy5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2NoZWNrYm94Z3JvdXAvY2hlY2tib3hncm91cC52aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3Qudmlldy5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL21vbmV5L21vbmV5LnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL21vZGVscy9zY2hlbWEtZm9ybS1jb250cm9sLnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZyYW1ld29yay9zaGFyZWQvY29tcG9uZW50cy9vYmplY3Qvb2JqZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9tb2RlbHMvc2NoZW1hLWZvcm0tYXJyYXkudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvbW9kZWxzL3NjaGVtYS1mb3JtLWdyb3VwLnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZyYW1ld29yay9zaGFyZWQvY29tcG9uZW50cy9hcnJheS9hcnJheS5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZnJhbWV3b3JrL3NoYXJlZC9jb21wb25lbnRzL2FycmF5L2FycmF5LnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZyYW1ld29yay9qc29uLWZvcm0tZmllbGRzLnNlcnZpY2UudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvc2VydmljZXMvdmFsaWRhdG9ycy5zZXJ2aWNlLnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL3NlcnZpY2VzL2RlZmF1bHRzLnNlcnZpY2UudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvanNvbi1mb3JtLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvY2hlY2tib3hncm91cC9jaGVja2JveGdyb3VwLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3QuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy90ZXh0YXJlYS90ZXh0YXJlYS5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9ib29sZWFuL2Jvb2xlYW4uY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9udW1iZXIvbnVtYmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvcGhvdG8vcGhvdG8uY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9yYWRpb2dyb3VwL3JhZGlvZ3JvdXAuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvZGF0ZS9kYXRlLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL21vbmV5L21vbmV5LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvYm9vdHN0cmFwNC9qc29uLWZvcm0tYm9vdHN0cmFwNC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvc2hhcmVkL2NvbXBvbmVudHMvY2hvb3Nlci9jaG9vc2VyLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvc2hhcmVkL2NvbXBvbmVudHMvZmllbGQvZmllbGQuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZyYW1ld29yay9zaGFyZWQvY29tcG9uZW50cy9mb3JtLWJ1dHRvbi9mb3JtLWJ1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZnJhbWV3b3JrL3NoYXJlZC9jb21wb25lbnRzL2luZm8tYnV0dG9uL2luZm8tYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvc2hhcmVkL3NoYXJlZC5tb2R1bGUudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvanNvbi1mb3JtLm1vZHVsZS50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZyYW1ld29yay9ib290c3RyYXA0L2pzb24tZm9ybS1ib290c3RyYXA0Lm1vZHVsZS50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvc3RyaW5nL3N0cmluZy5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL3RleHRhcmVhL3RleHRhcmVhLm1hdGVyaWFsLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvc2VsZWN0L3NlbGVjdC5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL3JhZGlvZ3JvdXAvcmFkaW9ncm91cC5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL3Bob3RvL3Bob3RvLm1hdGVyaWFsLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvbnVtYmVyL251bWJlci5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL211bHRpc2VsZWN0L211bHRpc2VsZWN0Lm1hdGVyaWFsLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvY2hlY2tib3hncm91cC9jaGVja2JveGdyb3VwLm1hdGVyaWFsLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvYm9vbGVhbi9ib29sZWFuLm1hdGVyaWFsLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvZGF0ZS9kYXRlLm1hdGVyaWFsLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvYnV0dG9uL2J1dHRvbi5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2FycmF5L2FycmF5Lm1hdGVyaWFsLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvbWF0ZXJpYWwvanNvbi1mb3JtLW1hdGVyaWFsLnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9lcnJvci9lcnJvci5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZnJhbWV3b3JrL21hdGVyaWFsL2pzb24tZm9ybS1tYXRlcmlhbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNQVRfREFURV9MT0NBTEUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE1vbWVudERhdGVBZGFwdGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtbW9tZW50LWFkYXB0ZXInO1xyXG5pbXBvcnQgeyBNb21lbnQgfSBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1vbWVudFV0Y0RhdGVBZGFwdGVyIGV4dGVuZHMgTW9tZW50RGF0ZUFkYXB0ZXIge1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9EQVRFX0xPQ0FMRSkgZGF0ZUxvY2FsZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihkYXRlTG9jYWxlKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZURhdGUoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBkYXRlOiBudW1iZXIpOiBNb21lbnQge1xyXG4gICAgLy8gTW9tZW50LmpzIHdpbGwgY3JlYXRlIGFuIGludmFsaWQgZGF0ZSBpZiBhbnkgb2YgdGhlIGNvbXBvbmVudHMgYXJlIG91dCBvZiBib3VuZHMsIGJ1dCB3ZVxyXG4gICAgLy8gZXhwbGljaXRseSBjaGVjayBlYWNoIGNhc2Ugc28gd2UgY2FuIHRocm93IG1vcmUgZGVzY3JpcHRpdmUgZXJyb3JzLlxyXG4gICAgaWYgKG1vbnRoIDwgMCB8fCBtb250aCA+IDExKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIG1vbnRoIGluZGV4IFwiJHttb250aH1cIi4gTW9udGggaW5kZXggaGFzIHRvIGJlIGJldHdlZW4gMCBhbmQgMTEuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGUgPCAxKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIGRhdGUgXCIke2RhdGV9XCIuIERhdGUgaGFzIHRvIGJlIGdyZWF0ZXIgdGhhbiAwLmApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IG1vbWVudC51dGMoeyB5ZWFyLCBtb250aCwgZGF0ZSB9KS5sb2NhbGUodGhpcy5sb2NhbGUpO1xyXG5cclxuICAgIC8vIElmIHRoZSByZXN1bHQgaXNuJ3QgdmFsaWQsIHRoZSBkYXRlIG11c3QgaGF2ZSBiZWVuIG91dCBvZiBib3VuZHMgZm9yIHRoaXMgbW9udGguXHJcbiAgICBpZiAoIXJlc3VsdC5pc1ZhbGlkKCkpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgZGF0ZSBcIiR7ZGF0ZX1cIiBmb3IgbW9udGggd2l0aCBpbmRleCBcIiR7bW9udGh9XCIuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NjaGVtYSc7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db250cm9sIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NjaGVtYS1mb3JtLWNvbnRyb2wnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdG9yUmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tICdsb2Rhc2gnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdqZi1jb21wb25lbnQnLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tbW9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgY29udHJvbDogU2NoZW1hRm9ybUNvbnRyb2w7XHJcbiAgc2NoZW1hOiBTY2hlbWE7XHJcbiAgc3R5bGU6IHt9O1xyXG4gIGRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxyXG4gICAgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBpc1JlcXVpcmVkKCkge1xyXG4gICAgLy8gc29tZSBjb250cm9scyBsaWtlIGRhdGVwaWNrZXIgYWRkIHZhbGlkYXRvciB3aXRob3V0IGJlaW5nIHJlcXVpcmVkXHJcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLnZhbGlkYXRvciAhPT0gbnVsbCAmJiB0aGlzLmNvbnRyb2wuaXNSZXF1aXJlZDtcclxuICB9XHJcblxyXG4gIHRpdGxlKG1hdGVyaWFsID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IHJlcXVpcmVkID0gdGhpcy5pc1JlcXVpcmVkKCkgJiYgbWF0ZXJpYWwgPyAnKicgOiAnJztcclxuICAgIHJldHVybiAodHlwZW9mIHRoaXMuc2NoZW1hLnRpdGxlID09PSAndW5kZWZpbmVkJ1xyXG4gICAgICA/IHRoaXMuc3RyVG9VcHBlckNhc2UodGhpcy5zY2hlbWEua2V5KSA6IHRoaXMuc2NoZW1hLnRpdGxlKSArIHJlcXVpcmVkO1xyXG4gIH1cclxuXHJcbiAgc3RyVG9VcHBlckNhc2Uoc3RyOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBzdGFydENhc2Uoc3RyKTtcclxuICB9XHJcblxyXG4gIHBsYWNlaG9sZGVyKCkge1xyXG4gICAgcmV0dXJuICh0aGlzLnNjaGVtYS50aXRsZSB8fCB0aGlzLnN0clRvVXBwZXJDYXNlKHRoaXMuc2NoZW1hLmtleSkpLnJlcGxhY2UoLzwuKj8+L2csICcnKTtcclxuICB9XHJcblxyXG4gIHR5cGUoKSB7XHJcbiAgICBsZXQgZm9ybWF0ID0gdGhpcy5zY2hlbWEuZm9ybWF0IHx8ICd0ZXh0JztcclxuXHJcbiAgICBzd2l0Y2ggKGZvcm1hdCkge1xyXG4gICAgICBjYXNlICdwaG90byc6XHJcbiAgICAgICAgZm9ybWF0ID0gJ2ZpbGUnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmb3JtYXQ7XHJcbiAgfVxyXG5cclxuICBpZChpPykge1xyXG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmtleSArICctJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KSArICctJyArIGk7XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzcyhkZWZhdWx0Q2xhc3M/KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgP1xyXG4gICAgICB0aGlzLnN0eWxlWydkZWZhdWx0J10gOiAoZGVmYXVsdENsYXNzIHx8ICcnKTtcclxuICB9XHJcblxyXG4gIGdldE1hc2soKSB7XHJcbiAgICBpZiAodGhpcy5zY2hlbWEuaGFzT3duUHJvcGVydHkoJ21hc2snKSkge1xyXG4gICAgICBjb25zdCBtYXNrOiBBcnJheTxzdHJpbmcgfCBSZWdFeHA+ID0gW107XHJcbiAgICAgIHRoaXMuc2NoZW1hLm1hc2suZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBtYXNrLnB1c2goL15cXC8uKlxcLyQvLnRlc3QoZWwpID8gbmV3IFJlZ0V4cChlbC5yZXBsYWNlKC9eXFwvfFxcLyQvZywgJycpKSA6IGVsKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gbWFzaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBtYWtlVHJ1c3RlZEltYWdlKGltYWdlKTogYW55IHtcclxuICAgIGNvbnN0IGltYWdlU3RyaW5nID0gIEpTT04uc3RyaW5naWZ5KGltYWdlKS5yZXBsYWNlKC9cXFxcbi9nLCAnJyk7XHJcbiAgICBjb25zdCBzdHlsZSA9ICd1cmwoJyArIGltYWdlU3RyaW5nICsgJyknO1xyXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShzdHlsZSk7XHJcbiAgfVxyXG5cclxuICBlbnVtTmFtZXMoaW5kZXgpIHtcclxuICAgIHJldHVybiB0eXBlb2YodGhpcy5zY2hlbWEuZW51bU5hbWVzKSA9PT0gJ3VuZGVmaW5lZCdcclxuICAgICAgPyB0aGlzLnNjaGVtYS5lbnVtW2luZGV4XVxyXG4gICAgICA6IHRoaXMuc2NoZW1hLmVudW1OYW1lc1tpbmRleF07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxwPjxzcGFuPnt7cGxhY2Vob2xkZXIoKX19PC9zcGFuPiA8c3Bhbj57e2NvbnRyb2wudmFsdWV9fTwvc3Bhbj48L3A+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RyaW5nVmlld0NvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8cD48c3Bhbj57e3BsYWNlaG9sZGVyKCl9fTwvc3Bhbj4gPHNwYW4+e3tjb250cm9sLnZhbHVlfX08L3NwYW4+PC9wPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdFZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge31cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8cD48c3Bhbj57e3BsYWNlaG9sZGVyKCl9fTwvc3Bhbj4gPHNwYW4+e3tjb250cm9sLnZhbHVlfX08L3NwYW4+PC9wPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWJlclZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxwPjxzcGFuPnt7cGxhY2Vob2xkZXIoKX19PC9zcGFuPiA8c3Bhbj57e2NvbnRyb2wudmFsdWV9fTwvc3Bhbj48L3A+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm9vbGVhblZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge31cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8cD57e3BsYWNlaG9sZGVyKCl9fTwvcD5cclxuICAgIDxpbWcgc3JjPVwie3tjb250cm9sLnZhbHVlfX1cIiBjbGFzcz1cImltZy10aHVtYm5haWxcIiAvPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFBob3RvVmlld0NvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7fVxyXG5cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPHA+PHNwYW4+e3twbGFjZWhvbGRlcigpfX08L3NwYW4+IDxzcGFuPnt7Y29udHJvbC52YWx1ZX19PC9zcGFuPjwvcD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYVZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgeyB9XHJcblxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgY3JlYXRlTnVtYmVyTWFzayBmcm9tICd0ZXh0LW1hc2stYWRkb25zL2Rpc3QvY3JlYXRlTnVtYmVyTWFzayc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxwPjxzcGFuPnt7cGxhY2Vob2xkZXIoKX19PC9zcGFuPiA8c3Bhbj57e2NvbnRyb2wudmFsdWV9fTwvc3Bhbj48L3A+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xyXG4gIG51bWJlck1hc2sgPSBjcmVhdGVOdW1iZXJNYXNrKHsgYWxsb3dEZWNpbWFsOiBmYWxzZSwgcHJlZml4OiAnJyB9KTtcclxuXHJcbiAgY2xlYW5NYXNrKHZhbHVlKSB7XHJcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUucmVwbGFjZSgvXFxEL2csICcnKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxwPjxzcGFuPnt7cGxhY2Vob2xkZXIoKX19PC9zcGFuPiA8c3Bhbj57e2NvbnRyb2wudmFsdWV9fTwvc3Bhbj48L3A+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFkaW9ncm91cFZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHA+e3twbGFjZWhvbGRlcigpfX08L3A+XHJcbiAgICA8dWwgKm5nRm9yPVwibGV0IHNlbGVjdGVkIG9mIGNvbnRyb2wudmFsdWVcIj5cclxuICAgICAgPGxpPnt7c2VsZWN0ZWR9fTwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrYm94Z3JvdXBWaWV3Q29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHt9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxwPnt7cGxhY2Vob2xkZXIoKX19PC9wPlxyXG4gICAgPHVsICpuZ0Zvcj1cImxldCBzZWxlY3RlZCBvZiBjb250cm9sLnZhbHVlXCI+XHJcbiAgICAgIDxsaT57e3NlbGVjdGVkfX08L2xpPlxyXG4gICAgPC91bD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNdWx0aXNlbGVjdFZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xyXG4gIGVudW1OYW1lcyhpbmRleCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZih0aGlzLnNjaGVtYS5lbnVtTmFtZXMpID09PSAndW5kZWZpbmVkJ1xyXG4gICAgICA/IHRoaXMuc2NoZW1hLmVudW1baW5kZXhdXHJcbiAgICAgIDogdGhpcy5zY2hlbWEuZW51bU5hbWVzW2luZGV4XTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcclxuaW1wb3J0IGNyZWF0ZU51bWJlck1hc2sgZnJvbSAndGV4dC1tYXNrLWFkZG9ucy9kaXN0L2NyZWF0ZU51bWJlck1hc2snO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6IGBcclxuICA8cD48c3Bhbj57e3BsYWNlaG9sZGVyKCl9fTwvc3Bhbj4gPHNwYW4+e3tjb250cm9sLnZhbHVlfX08L3NwYW4+PC9wPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vbmV5Vmlld0NvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XHJcbiAgbnVtYmVyTWFzayA9IGNyZWF0ZU51bWJlck1hc2soeyBhbGxvd0RlY2ltYWw6IGZhbHNlLCBwcmVmaXg6ICcnIH0pO1xyXG5cclxuICBjbGVhbk1hc2sodmFsdWUpIHtcclxuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2hlbWFGb3JtQ29udHJvbCBleHRlbmRzIEZvcm1Db250cm9sIHtcclxuICBwdWJsaWMgc2NoZW1hOiBTY2hlbWE7XHJcbiAgcHVibGljIHN0eWxlOiBhbnk7XHJcbiAgcHVibGljIHZpZXdPbmx5OiBib29sZWFuO1xyXG4gIHB1YmxpYyBkYXRhOiBhbnk7XHJcbiAgcHVibGljIGlzUmVxdWlyZWQ6IGJvb2xlYW47XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtTY2hlbWFGb3JtQ29udHJvbH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL3NjaGVtYS1mb3JtLWNvbnRyb2wnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgW25nQ2xhc3NdPVwiWydvYmplY3QnLCBjb250cm9sLnNjaGVtYS5rZXldXCJcclxuICAgICAgamYtY29tcG9uZW50LWNob29zZXJcclxuICAgICAgW2Zvcm1dPVwiY29udHJvbFwiXHJcbiAgICAgIFtzY2hlbWFdPVwiY29udHJvbC5zY2hlbWFcIlxyXG4gICAgICBbbmVzdGVkXT1cInRydWVcIj5cclxuICAgIDwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIE9iamVjdENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgY29udHJvbDogU2NoZW1hRm9ybUNvbnRyb2w7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IEZvcm1BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjaGVtYUZvcm1BcnJheSBleHRlbmRzIEZvcm1BcnJheSB7XHJcbiAgcHVibGljIHNjaGVtYTogU2NoZW1hO1xyXG4gIHB1YmxpYyBzdHlsZTogYW55O1xyXG59XHJcbiIsImltcG9ydCB7IEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NoZW1hRm9ybUdyb3VwIGV4dGVuZHMgRm9ybUdyb3VwIHtcclxuICBwdWJsaWMgc2NoZW1hOiBTY2hlbWE7XHJcbiAgcHVibGljIHN0eWxlOiBhbnk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29udHJvbCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9zY2hlbWEtZm9ybS1jb250cm9sJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1BcnJheSB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9zY2hlbWEtZm9ybS1hcnJheSc7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Hcm91cCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9zY2hlbWEtZm9ybS1ncm91cCc7XHJcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gJ2xvZGFzaCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBbbmdDbGFzc109XCJbJ2FycmF5JywgY29udHJvbC5zY2hlbWEua2V5XVwiPlxyXG4gICAgICA8aDYgKm5nSWY9XCJnZXRMZWdlbmQoY29udHJvbCkubGVuZ3RoXCI+e3tnZXRMZWdlbmQoY29udHJvbCl9fTwvaDY+XHJcbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGFyckNvbnRyb2wgb2YgZ2V0RW5hYmxlZENvbnRyb2xzKGNvbnRyb2wpOyBsZXQgaSA9IGluZGV4O1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCIgamYtY29tcG9uZW50LWNob29zZXIgW2Zvcm1dPVwiYXJyQ29udHJvbFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlbW92ZVwiICpuZ0lmPVwiY29udHJvbC5jb250cm9scy5sZW5ndGggPiAxXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInJlbW92ZUNvbnRyb2woY29udHJvbCwgaSlcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tc21cIiB2YWx1ZT1cIlJlbW92ZVwiLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBhZGRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJhZGRDb250cm9sKGNvbnRyb2wpXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIgdmFsdWU9XCJBZGRcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJyYXlDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGNvbnRyb2w6IFNjaGVtYUZvcm1BcnJheTtcclxuXHJcbiAgZ2V0TGVnZW5kKGNvbnRyb2wpIHtcclxuICAgIHJldHVybiAoY29udHJvbCAmJiBjb250cm9sLnNjaGVtYSAmJiBjb250cm9sLnNjaGVtYS5rZXkpID8gc3RhcnRDYXNlKGNvbnRyb2wuc2NoZW1hLmtleSkgOiAnJztcclxuICB9XHJcblxyXG4gIHN0clRvVXBwZXJDYXNlKHN0cjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXy9nLCAnICcpLnNwbGl0KCcgJykubWFwKCh3b3JkKSA9PlxyXG4gICAgICAod29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpXHJcbiAgICApLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIGdldEVuYWJsZWRDb250cm9scyhjb250cm9sKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb250cm9sLmNvbnRyb2xzKSkge1xyXG4gICAgICByZXR1cm4gY29udHJvbC5jb250cm9scy5maWx0ZXIoKGMpID0+IGMuZW5hYmxlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbnRyb2w7XHJcbiAgfVxyXG5cclxuICBjbG9uZUNvbnRyb2woY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XHJcbiAgICBsZXQgbmV3Q29udHJvbDogQWJzdHJhY3RDb250cm9sO1xyXG5cclxuICAgIGlmIChjb250cm9sIGluc3RhbmNlb2YgU2NoZW1hRm9ybUdyb3VwKSB7XHJcbiAgICAgIGNvbnN0IGZvcm1Hcm91cCA9IG5ldyBTY2hlbWFGb3JtR3JvdXAoe30sIGNvbnRyb2wudmFsaWRhdG9yLCBjb250cm9sLmFzeW5jVmFsaWRhdG9yKTtcclxuICAgICAgY29uc3QgY29udHJvbHMgPSBjb250cm9sLmNvbnRyb2xzO1xyXG4gICAgICBmb3JtR3JvdXAuc2NoZW1hID0gY29udHJvbC5zY2hlbWE7XHJcblxyXG4gICAgICBPYmplY3Qua2V5cyhjb250cm9scykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgZm9ybUdyb3VwLmFkZENvbnRyb2woa2V5LCB0aGlzLmNsb25lQ29udHJvbChjb250cm9sc1trZXldKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbmV3Q29udHJvbCA9IGZvcm1Hcm91cDtcclxuICAgIH0gZWxzZSBpZiAoY29udHJvbCBpbnN0YW5jZW9mIFNjaGVtYUZvcm1BcnJheSkge1xyXG4gICAgICBjb25zdCBmb3JtQXJyYXkgPSBuZXcgU2NoZW1hRm9ybUFycmF5KFtdLCBjb250cm9sLnZhbGlkYXRvciwgY29udHJvbC5hc3luY1ZhbGlkYXRvcik7XHJcbiAgICAgIGNvbnRyb2wuY29udHJvbHMuZm9yRWFjaCgoZm9ybUNvbnRyb2wpID0+IHtcclxuICAgICAgICBmb3JtQXJyYXkucHVzaCh0aGlzLmNsb25lQ29udHJvbChmb3JtQ29udHJvbCkpO1xyXG4gICAgICAgIHJldHVybiBmb3JtQXJyYXk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbmV3Q29udHJvbCA9IGZvcm1BcnJheTtcclxuICAgICAgKDxTY2hlbWFGb3JtQXJyYXk+bmV3Q29udHJvbCkuc2NoZW1hID0gY29udHJvbC5zY2hlbWE7XHJcbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBTY2hlbWFGb3JtQ29udHJvbCkge1xyXG4gICAgICBuZXdDb250cm9sID0gbmV3IFNjaGVtYUZvcm1Db250cm9sKGNvbnRyb2wudmFsdWUsIGNvbnRyb2wudmFsaWRhdG9yLCBjb250cm9sLmFzeW5jVmFsaWRhdG9yKTtcclxuICAgICAgKDxTY2hlbWFGb3JtQ29udHJvbD5uZXdDb250cm9sKS5zY2hlbWEgPSBjb250cm9sLnNjaGVtYTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3I6IHVuZXhwZWN0ZWQgY29udHJvbCB2YWx1ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb250cm9sLmRpc2FibGVkKSB7XHJcbiAgICAgIG5ld0NvbnRyb2wuZGlzYWJsZSh7ZW1pdEV2ZW50OiBmYWxzZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXdDb250cm9sO1xyXG4gIH1cclxuXHJcbiAgYWRkQ29udHJvbChmb3JtQXJyYXk6IEZvcm1BcnJheSkge1xyXG4gICAgZm9ybUFycmF5LnB1c2godGhpcy5jbG9uZUNvbnRyb2woZm9ybUFycmF5LmNvbnRyb2xzWzBdKSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVDb250cm9sKGZvcm1BcnJheTogRm9ybUFycmF5LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAoZm9ybUFycmF5Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICBmb3JtQXJyYXkuY29udHJvbHNbMF0ucmVzZXQoKTtcclxuICAgICAgZm9ybUFycmF5LmNvbnRyb2xzWzBdLmRpc2FibGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvcm1BcnJheS5yZW1vdmVBdChpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBcnJheUNvbXBvbmVudCB9IGZyb20gJy4vYXJyYXkuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IFtuZ0NsYXNzXT1cIlsnYXJyYXknLCBjb250cm9sLnNjaGVtYS5rZXldXCI+XHJcbiAgICAgIDxoNiAqbmdJZj1cImdldExlZ2VuZChjb250cm9sKS5sZW5ndGhcIj57e2dldExlZ2VuZChjb250cm9sKX19PC9oNj5cclxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgYXJyQ29udHJvbCBvZiBnZXRFbmFibGVkQ29udHJvbHMoY29udHJvbCk7IGxldCBpID0gaW5kZXg7XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIiBqZi1jb21wb25lbnQtY2hvb3NlciBbZm9ybV09XCJhcnJDb250cm9sXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJyYXlWaWV3Q29tcG9uZW50IGV4dGVuZHMgQXJyYXlDb21wb25lbnQge31cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db250cm9sIH0gZnJvbSAnLi4vbW9kZWxzL3NjaGVtYS1mb3JtLWNvbnRyb2wnO1xyXG5pbXBvcnQgeyBTdHJpbmdWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGRzL3N0cmluZy9zdHJpbmcudmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWxlY3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGRzL3NlbGVjdC9zZWxlY3Qudmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOdW1iZXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGRzL251bWJlci9udW1iZXIudmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCb29sZWFuVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkcy9ib29sZWFuL2Jvb2xlYW4udmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQaG90b1ZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvcGhvdG8vcGhvdG8udmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZXh0YXJlYVZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvdGV4dGFyZWEvdGV4dGFyZWEudmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRlVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkcy9kYXRlL2RhdGUudmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSYWRpb2dyb3VwVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkcy9yYWRpb2dyb3VwL3JhZGlvZ3JvdXAudmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGVja2JveGdyb3VwVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkcy9jaGVja2JveGdyb3VwL2NoZWNrYm94Z3JvdXAudmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNdWx0aXNlbGVjdFZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3Qudmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb25leVZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvbW9uZXkvbW9uZXkudmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPYmplY3RDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC9jb21wb25lbnRzL29iamVjdC9vYmplY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXJyYXlWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQvY29tcG9uZW50cy9hcnJheS9hcnJheS52aWV3LmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBKc29uRm9ybUZpZWxkc1NlcnZpY2Uge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICByb290Vmlld0NvbnRhaW5lcjtcclxuICBwdWJsaWMgZmllbGRUeXBlczogeyBbdHlwZTogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuICBwcml2YXRlIHZpZXdPbmx5ID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdmlld1R5cGVzOiBPYmplY3QgPSB7XHJcbiAgICBzdHJpbmc6IFN0cmluZ1ZpZXdDb21wb25lbnQsXHJcbiAgICBzZWxlY3Q6IFNlbGVjdFZpZXdDb21wb25lbnQsXHJcbiAgICBudW1iZXI6IE51bWJlclZpZXdDb21wb25lbnQsXHJcbiAgICBib29sZWFuOiBCb29sZWFuVmlld0NvbXBvbmVudCxcclxuICAgIHBob3RvOiBQaG90b1ZpZXdDb21wb25lbnQsXHJcbiAgICB0ZXh0YXJlYTogVGV4dGFyZWFWaWV3Q29tcG9uZW50LFxyXG4gICAgb2JqZWN0OiBPYmplY3RDb21wb25lbnQsXHJcbiAgICBhcnJheTogQXJyYXlWaWV3Q29tcG9uZW50LFxyXG4gICAgZGF0ZTogRGF0ZVZpZXdDb21wb25lbnQsXHJcbiAgICByYWRpb2dyb3VwOiBSYWRpb2dyb3VwVmlld0NvbXBvbmVudCxcclxuICAgIGNoZWNrYm94Z3JvdXA6IENoZWNrYm94Z3JvdXBWaWV3Q29tcG9uZW50LFxyXG4gICAgbXVsdGlzZWxlY3Q6IE11bHRpc2VsZWN0Vmlld0NvbXBvbmVudCxcclxuICAgIG1vbmV5OiBNb25leVZpZXdDb21wb25lbnRcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxuICApIHt9XHJcblxyXG4gIHNldFJvb3RWaWV3Q29udGFpbmVyUmVmKHZpZXdDb250YWluZXJSZWYpIHtcclxuICAgIHRoaXMucm9vdFZpZXdDb250YWluZXIgPSB2aWV3Q29udGFpbmVyUmVmO1xyXG4gIH1cclxuXHJcbiAgYWRkRHluYW1pY0NvbXBvbmVudChjb250cm9sOiBTY2hlbWFGb3JtQ29udHJvbCkge1xyXG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuZ2V0KGNvbnRyb2wpKTtcclxuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMucm9vdFZpZXdDb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xyXG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmNvbnRyb2wgPSBjb250cm9sO1xyXG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLnNjaGVtYSA9IGNvbnRyb2wuc2NoZW1hO1xyXG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLnN0eWxlID0gY29udHJvbC5zdHlsZTtcclxuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBoYXModHlwZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5maWVsZFR5cGVzLmhhc093blByb3BlcnR5KHR5cGUpIHx8IHRoaXMudmlld1R5cGVzLmhhc093blByb3BlcnR5KHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXIodHlwZTogc3RyaW5nLCBmaWVsZDogYW55KSB7XHJcbiAgICB0aGlzLmZpZWxkVHlwZXNbdHlwZV0gPSBmaWVsZDtcclxuICAgIHRoaXMudmlld1R5cGVzW3R5cGVdID0gZmllbGQ7XHJcbiAgfVxyXG5cclxuICBnZXQoY29udHJvbCk6IGFueSB7XHJcbiAgICBjb25zdCB0eXBlczogT2JqZWN0ID0gdGhpcy52aWV3T25seSA/IHRoaXMudmlld1R5cGVzIDogdGhpcy5maWVsZFR5cGVzO1xyXG5cclxuICAgIGlmICh0eXBlb2YoY29udHJvbCkgPT09ICdzdHJpbmcnICYmIHRoaXMuaGFzKGNvbnRyb2wpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZpZWxkVHlwZXNbY29udHJvbF07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2sgaWYgYSBmaWVsZCBpcyBnZXR0aW5nIG92ZXJyaWRkZW4gYnkgZm9ybWF0XHJcbiAgICBpZiAodHlwZW9mKGNvbnRyb2wuc2NoZW1hLmZvcm1hdCkgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuaGFzKGNvbnRyb2wuc2NoZW1hLmZvcm1hdCkpIHtcclxuICAgICAgcmV0dXJuIHR5cGVzW2NvbnRyb2wuc2NoZW1hLmZvcm1hdF07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZihjb250cm9sLnNjaGVtYS5lbnVtKSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29udHJvbC5zY2hlbWEudHlwZSA9PT0gJ2FycmF5Jykge1xyXG4gICAgICByZXR1cm4gdHlwZXNbJ2NoZWNrYm94Z3JvdXAnXTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mKGNvbnRyb2wuc2NoZW1hLmVudW0pICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm4gdHlwZXNbJ3NlbGVjdCddO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmhhcyhjb250cm9sLnNjaGVtYS5mb3JtYXQpKSB7XHJcbiAgICAgIHJldHVybiB0eXBlc1tjb250cm9sLnNjaGVtYS5mb3JtYXRdO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmhhcyhjb250cm9sLnNjaGVtYS50eXBlKSkge1xyXG4gICAgICByZXR1cm4gdHlwZXNbY29udHJvbC5zY2hlbWEudHlwZV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHR5cGVzWydzdHJpbmcnXTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZuLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEpzb25Gb3JtVmFsaWRhdG9yc1NlcnZpY2Uge1xyXG4gIHZhbGlkYXRvcnM6IEFycmF5PGFueT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy52YWxpZGF0b3JzID0gW107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0KHByb3AsIHNjaGVtYSwgcGF0aCkge1xyXG4gICAgY29uc3QgZGF0ZVZhbGlkYXRvciA9IGZ1bmN0aW9uIGFnZVJhbmdlVmFsaWRhdG9yKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkge1xyXG4gICAgICBpZiAoY29udHJvbC52YWx1ZSA9PT0gbnVsbCB8fCAoY29udHJvbC52YWx1ZSAhPT0gbnVsbCAmJiBpc05hTihuZXcgRGF0ZShjb250cm9sLnZhbHVlKS5nZXREYXRlKCkpKSkge1xyXG4gICAgICAgIHJldHVybiB7IGN1c3RvbUVycm9yOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZGF0ZS4nIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlcXVpcmVkID0gc2NoZW1hLnJlcXVpcmVkIHx8IFtdO1xyXG4gICAgY29uc3QgZmllbGQgPSBzY2hlbWEucHJvcGVydGllc1twcm9wXTtcclxuICAgIGNvbnN0IHZhclBhdGggPSBbXS5jb25jYXQocGF0aCwgcHJvcCkuam9pbignLicpO1xyXG5cclxuICAgIGlmIChzY2hlbWEucHJvcGVydGllc1twcm9wXS50eXBlID09PSAnYm9vbGVhbicgJiYgcmVxdWlyZWQuaW5kZXhPZihwcm9wKSA+IC0xKSB7XHJcbiAgICAgIHJldHVybiBWYWxpZGF0b3JzLnJlcXVpcmVkVHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gVmFsaWRhdG9ycy5jb21wb3NlKHRoaXMudmFsaWRhdG9ycy5jb25jYXQoW1xyXG4gICAgICAodGhpcy5oYXModmFyUGF0aCkgPyB0aGlzLnZhbGlkYXRvcnNbdmFyUGF0aF0gOiBudWxsKSxcclxuICAgICAgKHJlcXVpcmVkLmluZGV4T2YocHJvcCkgPiAtMSA/IFZhbGlkYXRvcnMucmVxdWlyZWQgOiBudWxsKSxcclxuICAgICAgKGZpZWxkLmhhc093blByb3BlcnR5KCdtaW5MZW5ndGgnKSA/IFZhbGlkYXRvcnMubWluTGVuZ3RoKGZpZWxkLm1pbkxlbmd0aCkgOiBudWxsKSxcclxuICAgICAgKGZpZWxkLmhhc093blByb3BlcnR5KCdtYXhMZW5ndGgnKSA/IFZhbGlkYXRvcnMubWF4TGVuZ3RoKGZpZWxkLm1heExlbmd0aCkgOiBudWxsKSxcclxuICAgICAgKGZpZWxkLmhhc093blByb3BlcnR5KCdmb3JtYXQnKSAmJiBmaWVsZC5mb3JtYXQgPT09ICdlbWFpbCcgPyBWYWxpZGF0b3JzLmVtYWlsIDogbnVsbCksXHJcbiAgICAgIChmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnbWluaW11bScpID8gVmFsaWRhdG9ycy5taW4oZmllbGQubWluaW11bSkgOiBudWxsKSxcclxuICAgICAgKGZpZWxkLmhhc093blByb3BlcnR5KCdtYXhpbXVtJykgPyBWYWxpZGF0b3JzLm1heChmaWVsZC5tYXhpbXVtKSA6IG51bGwpLFxyXG4gICAgICAoZmllbGQuZm9ybWF0ICYmIGZpZWxkLmZvcm1hdCA9PT0gJ2RhdGUnID8gZGF0ZVZhbGlkYXRvciA6IG51bGwpLFxyXG4gICAgICAoZmllbGQucGF0dGVybiA/IFZhbGlkYXRvcnMucGF0dGVybihmaWVsZC5wYXR0ZXJuKSA6IG51bGwpXHJcbiAgICBdKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVnaXN0ZXIoZmllbGQ6IGFueSwgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbikge1xyXG4gICAgdGhpcy52YWxpZGF0b3JzW2ZpZWxkXSA9IHZhbGlkYXRvcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYXMoc3RyKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3JzLmhhc093blByb3BlcnR5KHN0cik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEpzb25Gb3JtRGVmYXVsdHNTZXJ2aWNlIHtcclxuICBwcml2YXRlIGRlZmF1bHRUeXBlczogeyBbdHlwZTogc3RyaW5nXTogYW55IH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5kZWZhdWx0VHlwZXMgPSB0aGlzLmRlZmF1bHRUeXBlcyB8fCB7fTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQocHJvcCwgc2NoZW1hLCBkYXRhKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0U3RyaW5nID0gKHByb3AuaGFzT3duUHJvcGVydHkoJ2Zvcm1hdCcpICYmIHByb3AuZm9ybWF0ID09PSAnbXVsdGlzZWxlY3QnKSA/IFtdIDogJyc7XHJcbiAgICBsZXQgZGVmYXVsdFZhbHVlID0gc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0uZGVmYXVsdCB8fCBkZWZhdWx0U3RyaW5nO1xyXG4gICAgaWYgKHRoaXMuaGFzKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLmRlZmF1bHQpKSB7XHJcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IHRoaXMuZXZhbChzY2hlbWEucHJvcGVydGllc1twcm9wXS5kZWZhdWx0KSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRhdGEgb3ZlcnJpZGUgZGVmYXVsdHNcclxuICAgIGlmIChkYXRhICYmIGRhdGEuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgZGVmYXVsdFZhbHVlID0gZGF0YVtwcm9wXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvcC5oYXNPd25Qcm9wZXJ0eSgnZm9ybWF0JykgJiYgcHJvcC5mb3JtYXQgPT09ICdkYXRlJyAmJiBkZWZhdWx0VmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICBkZWZhdWx0VmFsdWUgPSBuZXcgRGF0ZShkZWZhdWx0VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV2YWwoc3RyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0VHlwZXNbc3RyXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYXMoc3RyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0VHlwZXMuaGFzT3duUHJvcGVydHkoc3RyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWdpc3RlcihzdHI6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLmRlZmF1bHRUeXBlc1tzdHJdID0gY2FsbGJhY2s7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRG9DaGVjaywgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgTmdGb3JtfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEpzb25Gb3JtVmFsaWRhdG9yc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3ZhbGlkYXRvcnMuc2VydmljZSc7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db250cm9sIH0gZnJvbSAnLi9tb2RlbHMvc2NoZW1hLWZvcm0tY29udHJvbCc7XHJcbmltcG9ydCB7IEpzb25Gb3JtRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kZWZhdWx0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUdyb3VwIH0gZnJvbSAnLi9tb2RlbHMvc2NoZW1hLWZvcm0tZ3JvdXAnO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtQXJyYXkgfSBmcm9tICcuL21vZGVscy9zY2hlbWEtZm9ybS1hcnJheSc7XHJcbmltcG9ydCB7IEpzb25Gb3JtRmllbGRzU2VydmljZSB9IGZyb20gJy4vZnJhbWV3b3JrL2pzb24tZm9ybS1maWVsZHMuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnamYtZm9ybSwgdHJ1LWZvcm0nLFxyXG4gIHRlbXBsYXRlOiBgPGZvcm1cclxuICAjdXNlckZvcm09XCJuZ0Zvcm1cIlxyXG4gIFtmb3JtR3JvdXBdPVwiZm9ybVwiXHJcbiAgKG5nU3VibWl0KT1cImhhbmRsZU9uU3VibWl0KClcIlxyXG4gICpuZ0lmPVwiaXNWYWxpZFNjaGVtYSgpXCJcclxuICBbbmdDbGFzc109XCJ7ICd2aWV3LW9ubHknOiB2aWV3T25seSB9XCJcclxuICBbaWRdPVwiaWRcIlxyXG4+XHJcbiAgPGRpdiAjaGVhZGVyPjwvZGl2PlxyXG4gIDxkaXZcclxuICAgIGpmLWNvbXBvbmVudC1jaG9vc2VyXHJcbiAgICBbbmdDbGFzc109XCJbb3V0ZXJDbGFzcyB8fCAnJywgdGhpcy5hY3RpdmVTdHlsZVsnZGVmYXVsdCddID8gdGhpcy5hY3RpdmVTdHlsZVsnZGVmYXVsdCddIDogJyddXCJcclxuICAgIFtmb3JtXT1cImZvcm1cIlxyXG4gICAgW3NjaGVtYV09XCJhY3RpdmVTY2hlbWFcIj5cclxuICA8L2Rpdj5cclxuICA8ZGl2ICNjb250YWluZXI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAjZm9vdGVyPjwvZGl2PlxyXG4gIDxkaXZcclxuICAgICNidXR0b25zXHJcbiAgICAqbmdJZj1cImNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPT0gMCAmJiAoc3VibWl0IHx8IGNhbmNlbClcIlxyXG4gICAgW25nQ2xhc3NdPVwieyAnbWFyZ2luLXRvcC0tZG91YmxlJzogdHJ1ZSwgJ3BhZ2UtYWN0aW9ucy0tZWRnZXMnOiAoY2FuY2VsICYmIHN1Ym1pdCksICdwYWdlLWFjdGlvbnMtLWNlbnRlcic6ICghY2FuY2VsIHx8ICFzdWJtaXQpfVwiPlxyXG4gICAgPGpmLWZvcm0tYnV0dG9uXHJcbiAgICAgICpuZ0lmPVwiY2FuY2VsXCJcclxuICAgICAgW2NhbmNlbF09XCJjYW5jZWxcIlxyXG4gICAgICBbc3RlcHNdPVwic3RlcHNcIlxyXG4gICAgICBbaXNNdWx0aVN0ZXBdPVwiaXNNdWx0aVN0ZXBcIlxyXG4gICAgICBbaXNXb3JraW5nXT1cImlzV29ya2luZ1wiXHJcbiAgICAgIChoYW5kbGVDbGljayk9XCJoYW5kbGVPbkNhbmNlbCgpXCJcclxuICAgICAgW3N1Ym1pdENsYXNzXT1cInN1Ym1pdENsYXNzXCJcclxuICAgICAgW2NhbmNlbENsYXNzXT1cImNhbmNlbENsYXNzXCI+XHJcbiAgICA8L2pmLWZvcm0tYnV0dG9uPlxyXG4gICAgPGpmLWZvcm0tYnV0dG9uXHJcbiAgICAgICpuZ0lmPVwic3VibWl0XCJcclxuICAgICAgW3N1Ym1pdENsYXNzXT1cInN1Ym1pdENsYXNzXCJcclxuICAgICAgW2NhbmNlbENsYXNzXT1cImNhbmNlbENsYXNzXCJcclxuICAgICAgW3N1Ym1pdF09XCJzdWJtaXRcIlxyXG4gICAgICBbc3RlcHNdPVwic3RlcHNcIlxyXG4gICAgICBbY29udGludWVdPVwiY29udGludWVcIlxyXG4gICAgICBbaXNNdWx0aVN0ZXBdPVwiaXNNdWx0aVN0ZXBcIlxyXG4gICAgICBbaXNXb3JraW5nXT1cImlzV29ya2luZ1wiXHJcbiAgICAgIFtpc0Zvcm1WYWxpZF09XCJ0aGlzLmZvcm0udmFsaWRcIj5cclxuICAgIDwvamYtZm9ybS1idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvZm9ybT5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSnNvbkZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrLCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIHNjaGVtYTtcclxuICBASW5wdXQoKSBkYXRhID0ge307XHJcbiAgQElucHV0KCkgc3R5bGUgPSB7fTtcclxuICBASW5wdXQoKSBjb250aW51ZSA9ICdDb250aW51ZSc7XHJcbiAgQElucHV0KCkgc3VibWl0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY2FuY2VsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3VibWl0Q2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBjYW5jZWxDbGFzczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG91dGVyQ2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBpc1dvcmtpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBpc011bHRpU3RlcCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGFjdGl2ZVN0ZXAgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHN0YXRlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaWQgPSAnJztcclxuICBASW5wdXQoKSBmaWVsZHMgPSB7fTtcclxuICBASW5wdXQoKSB2aWV3T25seSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gbnVsbDtcclxuICBAT3V0cHV0KCkgaGFuZGxlU3RlcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgaGFuZGxlU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBoYW5kbGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGhhbmRsZUNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAVmlld0NoaWxkKCd1c2VyRm9ybScpIHVzZXJGb3JtOiBOZ0Zvcm07XHJcbiAgQFZpZXdDaGlsZCgnaGVhZGVyJykgaGVhZGVyOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2Zvb3RlcicpIGZvb3RlcjogRWxlbWVudFJlZjtcclxuXHJcbiAgcHVibGljIGZvcm07XHJcbiAgcHVibGljIG1vZGVsO1xyXG4gIHB1YmxpYyBjb250cm9sID0geyBrZXk6ICcnLCB2YWx1ZTogJycsIGlzUGFydE9mOiBmYWxzZSB9O1xyXG4gIHB1YmxpYyBvbGRTY2hlbWE6IHN0cmluZztcclxuICBwdWJsaWMgb2xkRGF0YTogc3RyaW5nO1xyXG4gIHB1YmxpYyBjaGFuZ2VEZXRlY3RlZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBvbGRBY3RpdmVTdGVwID0gJyc7XHJcbiAgcHVibGljIHN0ZXBzID0gW107XHJcbiAgcHVibGljIG11bHRpU3RlcERhdGEgPSB7fTtcclxuICBwdWJsaWMgYWN0aXZlU2NoZW1hID0ge307XHJcbiAgcHVibGljIGFjdGl2ZVN0eWxlID0ge307XHJcbiAgcHVibGljIHJlcXVpcmVkRmllbGRzID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgdmw6IEpzb25Gb3JtVmFsaWRhdG9yc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRmOiBKc29uRm9ybURlZmF1bHRzU2VydmljZSxcclxuICAgIHByaXZhdGUgamY6IEpzb25Gb3JtRmllbGRzU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RlZCA9IGZhbHNlO1xyXG5cclxuICAgIGlmICh0aGlzLm9sZFNjaGVtYSAhPT0gSlNPTi5zdHJpbmdpZnkodGhpcy5zY2hlbWEpKSB7XHJcbiAgICAgIHRoaXMub2xkU2NoZW1hID0gSlNPTi5zdHJpbmdpZnkodGhpcy5zY2hlbWEpO1xyXG4gICAgICB0aGlzLmNoYW5nZURldGVjdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5vbGREYXRhICE9PSBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKSB7XHJcbiAgICAgIHRoaXMub2xkRGF0YSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSk7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm9sZEFjdGl2ZVN0ZXAgIT09IHRoaXMuYWN0aXZlU3RlcCkge1xyXG4gICAgICB0aGlzLm9sZEFjdGl2ZVN0ZXAgPSB0aGlzLmFjdGl2ZVN0ZXA7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNoYW5nZURldGVjdGVkKSB7XHJcbiAgICAgIHRoaXMucmVxdWlyZWRGaWVsZHMgPSAwO1xyXG4gICAgICB0aGlzLmFwcGVuZEZpZWxkcygpO1xyXG4gICAgICB0aGlzLmNvbnN0cnVjdEZvcm0oKTtcclxuICAgICAgdGhpcy5qZlswXS52aWV3T25seSA9IHRoaXMudmlld09ubHk7XHJcbiAgICAgIHRoaXMuamZbMF0uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xyXG4gICAgICB0aGlzLmNhbmNlbCA9IHRoaXMudmlld09ubHkgfHwgdGhpcy5kaXNhYmxlZCA/ICcnIDogdGhpcy5jYW5jZWw7XHJcbiAgICAgIHRoaXMuc3VibWl0ID0gdGhpcy52aWV3T25seSB8fCB0aGlzLmRpc2FibGVkID8gJycgOiB0aGlzLnN1Ym1pdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZm9ybSkge1xyXG4gICAgICB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhcHBlbmRGaWVsZHMoKSB7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLmZpZWxkcykuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICB0aGlzLmpmWzBdLnJlZ2lzdGVyKGYsIHRoaXMuZmllbGRzW2ZdKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0Rm9ybSgpIHtcclxuICAgIHRoaXMubW9kZWwgPSB7fTtcclxuXHJcbiAgICBpZiAodGhpcy5pc1ZhbGlkU2NoZW1hKCkpIHtcclxuICAgICAgdGhpcy5hY3RpdmVTY2hlbWEgPSB0aGlzLnNjaGVtYTtcclxuICAgICAgdGhpcy5hY3RpdmVTdHlsZSA9IHRoaXMuc3R5bGU7XHJcblxyXG4gICAgICAvLyBlbWl0IHRoZSBpbml0aWFsIHN0ZXAgZm9yIHRoZSBldmVudFxyXG4gICAgICBpZiAodGhpcy5zdGVwcy5sZW5ndGggPT09IDAgJiYgdGhpcy5pc011bHRpU3RlcCkge1xyXG4gICAgICAgIHRoaXMuc3RlcHMgPSB0aGlzLmdldFN0ZXBzKHRoaXMuc2NoZW1hLCB0aGlzLmFjdGl2ZVN0ZXApO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3RlcC5lbWl0KHsgaWQ6IHRoaXMuaWQsIGRhdGE6IG51bGwsIHN0ZXBzOiB0aGlzLnN0ZXBzIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5zdGVwcy5sZW5ndGggPiAwICYmIHRoaXMuaXNNdWx0aVN0ZXApIHtcclxuICAgICAgICBjb25zdCB2aXNpYmxlU3RlcE5hbWUgPSB0aGlzLmFjdGl2ZVN0ZXAgPiAwID8gdGhpcy5hY3RpdmVTdGVwIDogdGhpcy5zdGVwcy5maW5kKChzKSA9PiBzLnZpc2libGUpLm5hbWU7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVTY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3Zpc2libGVTdGVwTmFtZV07XHJcbiAgICAgICAgdGhpcy5hY3RpdmVTdHlsZSA9IHRoaXMuc3R5bGUuaGFzT3duUHJvcGVydHkodmlzaWJsZVN0ZXBOYW1lKSA/IHRoaXMuc3R5bGVbdmlzaWJsZVN0ZXBOYW1lXSA6IHt9O1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuc3RhdGUgJiYgdGhpcy5tdWx0aVN0ZXBEYXRhLmhhc093blByb3BlcnR5KHZpc2libGVTdGVwTmFtZSlcclxuICAgICAgICAgID8gdGhpcy5tdWx0aVN0ZXBEYXRhW3Zpc2libGVTdGVwTmFtZV0gOiB0aGlzLmRhdGE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYWN0aXZlU2NoZW1hID0gdGhpcy5zdWJSZWZzKHRoaXMuYWN0aXZlU2NoZW1hKTtcclxuICAgICAgdGhpcy5tb2RlbCA9IHRoaXMuZ2VuZXJhdGVGb3JtKHRoaXMuYWN0aXZlU2NoZW1hLCB7fSwgdGhpcy5kYXRhLCB0aGlzLmFjdGl2ZVN0eWxlKTtcclxuICAgICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh0aGlzLm1vZGVsKTtcclxuXHJcbiAgICAgIHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udHJvbC5pc1BhcnRPZikge1xyXG4gICAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICAgIHRoaXMuY29uc3RydWN0Rm9ybSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UuZW1pdCh7IGlkOiB0aGlzLmlkLCBjb250cm9sOiB0aGlzLmNvbnRyb2wsIGRhdGEgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U3RlcHMoc2NoZW1hLCBhY3RpdmVTdGVwKTogQXJyYXk8YW55PiB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLm1hcCgobmFtZSwgaW5kZXgpID0+IHtcclxuICAgICAgbGV0IHR5cGUgPSAnc3RlcCc7XHJcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlU3RlcCA9IHRoaXMuYWN0aXZlU3RlcCB8fCBuYW1lO1xyXG4gICAgICAgIHR5cGUgPSAnZmlyc3QnO1xyXG4gICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcykubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIHR5cGUgPSAnbGFzdCc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICB2aXNpYmxlOiBhY3RpdmVTdGVwID8gYWN0aXZlU3RlcCA9PT0gbmFtZSA6IGluZGV4ID09PSAwLFxyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgdGl0bGU6IHNjaGVtYS5wcm9wZXJ0aWVzW25hbWVdLmhhc093blByb3BlcnR5KCd0aXRsZScpID8gc2NoZW1hLnByb3BlcnRpZXNbbmFtZV0udGl0bGUgOiBuYW1lXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzVmFsaWRTY2hlbWEoKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mICh0aGlzLnNjaGVtYSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hKS5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZUZvcm0gKHNjaGVtYSwgZ3JvdXA/OiB7fSwgZGF0YT86IHt9LCBzdHlsZT86IHt9LCBwYXRoPzogQXJyYXk8YW55Pikge1xyXG4gICAgaWYgKCF0aGlzLmlzVmlzaWJsZShzY2hlbWEpKSB7XHJcbiAgICAgIHJldHVybiBncm91cDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXBhdGgpIHtcclxuICAgICAgcGF0aCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKS5mb3JFYWNoKChwcm9wKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmlzT25lT2Yoc2NoZW1hLCBwcm9wLCBwYXRoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLnR5cGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgY29uc3QgZ3JvdXBEYXRhID0gZGF0YSAmJiBkYXRhLmhhc093blByb3BlcnR5KHByb3ApID8gZGF0YVtwcm9wXSA6IHt9O1xyXG4gICAgICAgIGNvbnN0IGdyb3VwU3R5bGUgPSBzdHlsZSAmJiBzdHlsZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSA/IHN0eWxlW3Byb3BdIDoge307XHJcbiAgICAgICAgZ3JvdXBbcHJvcF0gPSBuZXcgU2NoZW1hRm9ybUdyb3VwKHRoaXMuZ2VuZXJhdGVGb3JtKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLCB7fSwgZ3JvdXBEYXRhLCBncm91cFN0eWxlLCBbXS5jb25jYXQocGF0aCwgcHJvcCkpKTtcclxuICAgICAgICBncm91cFtwcm9wXS5zY2hlbWEgPSBzY2hlbWEucHJvcGVydGllc1twcm9wXTtcclxuICAgICAgICBncm91cFtwcm9wXS5zY2hlbWEua2V5ID0gcHJvcDtcclxuICAgICAgICBncm91cFtwcm9wXS5zY2hlbWEuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIGdyb3VwW3Byb3BdLnN0eWxlID0gZ3JvdXBTdHlsZTtcclxuICAgICAgfSBlbHNlIGlmIChzY2hlbWEucHJvcGVydGllc1twcm9wXS50eXBlID09PSAnYXJyYXknICYmICF0aGlzLmlzRm9ybWF0KHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLCAnbXVsdGlzZWxlY3QnKSkge1xyXG4gICAgICAgIHBhdGgucHVzaChwcm9wKTtcclxuICAgICAgICBjb25zdCBhcnJheURhdGEgPSBkYXRhICYmIGRhdGEuaGFzT3duUHJvcGVydHkocHJvcCkgPyBkYXRhW3Byb3BdIDogW3t9XTtcclxuICAgICAgICBjb25zdCBhcnJheVN0eWxlID0gc3R5bGUgJiYgc3R5bGUuaGFzT3duUHJvcGVydHkocHJvcCkgPyBzdHlsZVtwcm9wXSA6IHt9O1xyXG4gICAgICAgIGxldCBmYkFycmF5ID0gW107XHJcblxyXG4gICAgICAgIGlmIChzY2hlbWEucHJvcGVydGllc1twcm9wXS5lbnVtKSB7XHJcbiAgICAgICAgICBmYkFycmF5ID0gc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0uZW51bS5tYXAoKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29udHJvbCA9IG5ldyBTY2hlbWFGb3JtQ29udHJvbCgpO1xyXG4gICAgICAgICAgICBjb250cm9sLnNjaGVtYSA9IE9iamVjdC5hc3NpZ24oe30sIHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdKTtcclxuICAgICAgICAgICAgY29udHJvbC5zY2hlbWEua2V5ID0gcHJvcDtcclxuICAgICAgICAgICAgY29udHJvbC5zY2hlbWEuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgICAgICBjb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKGV2ZW50KSA9PiB0aGlzLmhhbmRsZU9uQ2hhbmdlKHByb3AsIGV2ZW50KSk7XHJcbiAgICAgICAgICAgIGNvbnRyb2wuaXNSZXF1aXJlZCA9IHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgncmVxdWlyZWQnKSAmJiBzY2hlbWEucmVxdWlyZWQuaW5kZXhPZihwcm9wKSA+IC0xO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbnRyb2wuaXNSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgIHRoaXMucmVxdWlyZWRGaWVsZHMrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY29udHJvbDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmYkFycmF5ID0gYXJyYXlEYXRhLm1hcCgoZGF0YUF0SW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZyA9IG5ldyBTY2hlbWFGb3JtR3JvdXAodGhpcy5nZW5lcmF0ZUZvcm0oc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0uaXRlbXMsIHt9LCBkYXRhQXRJbmRleCwge30sIFtdLmNvbmNhdChwYXRoLCBwcm9wKSkpO1xyXG4gICAgICAgICAgICBnLnNjaGVtYSA9IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdO1xyXG4gICAgICAgICAgICByZXR1cm4gZztcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ3JvdXBbcHJvcF0gPSBuZXcgU2NoZW1hRm9ybUFycmF5KGZiQXJyYXkpO1xyXG4gICAgICAgIGdyb3VwW3Byb3BdLnNjaGVtYSA9IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdO1xyXG4gICAgICAgIGdyb3VwW3Byb3BdLnNjaGVtYS5rZXkgPSBwcm9wO1xyXG4gICAgICAgIGdyb3VwW3Byb3BdLnNjaGVtYS5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgZ3JvdXBbcHJvcF0uc3R5bGUgPSBhcnJheVN0eWxlO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNWaXNpYmxlKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdKSkge1xyXG5cclxuICAgICAgICBjb25zdCBjb250cm9sID0gbmV3IFNjaGVtYUZvcm1Db250cm9sKHRoaXMuZGYuZ2V0KHByb3AsIHNjaGVtYSwgZGF0YSksIHRoaXMudmwuZ2V0KHByb3AsIHNjaGVtYSwgcGF0aCkpO1xyXG4gICAgICAgIGNvbnRyb2wuc2NoZW1hID0gT2JqZWN0LmFzc2lnbih7fSwgc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0pO1xyXG4gICAgICAgIGNvbnRyb2wuc2NoZW1hLmtleSA9IHByb3A7XHJcbiAgICAgICAgY29udHJvbC5zY2hlbWEuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIGNvbnRyb2wuZGF0YSA9IHRoaXMuZGYuZ2V0KHByb3AsIHNjaGVtYSwgZGF0YSk7XHJcbiAgICAgICAgY29udHJvbC5zdHlsZSA9IChzdHlsZSAmJiBzdHlsZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgPyBzdHlsZVtwcm9wXSA6IHt9O1xyXG4gICAgICAgIGNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoZXZlbnQpID0+IHRoaXMuaGFuZGxlT25DaGFuZ2UocHJvcCwgZXZlbnQsIHRoaXMuaW5PbmVPZihzY2hlbWEsIHByb3ApKSk7XHJcbiAgICAgICAgY29udHJvbC5pc1JlcXVpcmVkID0gc2NoZW1hLmhhc093blByb3BlcnR5KCdyZXF1aXJlZCcpICYmIHNjaGVtYS5yZXF1aXJlZC5pbmRleE9mKHByb3ApID4gLTE7XHJcbiAgICAgICAgaWYgKGNvbnRyb2wuaXNSZXF1aXJlZCkge1xyXG4gICAgICAgICAgdGhpcy5yZXF1aXJlZEZpZWxkcysrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ3JvdXBbcHJvcF0gPSBjb250cm9sO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZ3JvdXA7XHJcbiAgfVxyXG5cclxuICBpc09uZU9mKHNjaGVtYSwga2V5LCBwYXRoKSB7XHJcbiAgICBpZiAoIXNjaGVtYS5vbmVPZikge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNjaGVtYS5vbmVPZi5maWx0ZXIoKHApID0+IHtcclxuICAgICAgaWYgKF8uZ2V0KHAsICdyZXF1aXJlZCcsIFtdKS5pbmNsdWRlcyhrZXkpKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IE9iamVjdC5rZXlzKHAucHJvcGVydGllcylbMF07XHJcbiAgICAgICAgY29uc3QgZGF0YVBhdGggPSBwYXRoLmNvbmNhdChwYXJlbnQpLmpvaW4oJy4nKTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBfLmdldCh0aGlzLmRhdGEsIGRhdGFQYXRoLCBudWxsKTtcclxuXHJcbiAgICAgICAgaWYgKHNjaGVtYS5wcm9wZXJ0aWVzW3BhcmVudF0udHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSkgPT09ICd0cnVlJzsgLy8gbWF0ZXJpYWwgcHJlc2VydmVzIHN0cmluZyAmIGJvb3RzdHJhcCBkb2Vzbid0XHJcbiAgICAgICAgfSBlbHNlIGlmIChzY2hlbWEucHJvcGVydGllc1twYXJlbnRdLnR5cGUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICB2YWx1ZSA9ICt2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHdoZW4gcmV0dXJucyB0cnVlIGl0IHdpbGwgbm90IGRpc3BsYXkgZmllbGQsIG90aGVyd2lzZSBpdCB3aWxsXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IF8uZ2V0KHAucHJvcGVydGllc1twYXJlbnRdLCAnZW51bScsIFtdKS5pbmRleE9mKHZhbHVlKSA9PT0gLTE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICBpbk9uZU9mKHNjaGVtYSwgcHJvcCkge1xyXG4gICAgaWYgKHR5cGVvZiAoc2NoZW1hLm9uZU9mKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuIHNjaGVtYS5vbmVPZi5maWx0ZXIoKHApID0+IHtcclxuICAgICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhwLnByb3BlcnRpZXMpWzBdO1xyXG4gICAgICAgIHJldHVybiBrZXkgPT09IHByb3A7XHJcbiAgICAgIH0pLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaXNWaXNpYmxlIChwcm9wKSB7XHJcbiAgICByZXR1cm4gcHJvcC5oYXNPd25Qcm9wZXJ0eSgndmlzaWJsZScpID09PSBmYWxzZSB8fCAocHJvcC5oYXNPd25Qcm9wZXJ0eSgndmlzaWJsZScpICYmIHByb3AudmlzaWJsZSA9PT0gdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBpc0Zvcm1hdChwcm9wLCBmb3JtYXQpIHtcclxuICAgIHJldHVybiBwcm9wLmhhc093blByb3BlcnR5KCdmb3JtYXQnKSAmJiBwcm9wLmZvcm1hdCA9PT0gZm9ybWF0O1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlT25TdWJtaXQoKSB7XHJcbiAgICB0aGlzLnRvdWNoQWxsKHRoaXMuZm9ybS5jb250cm9scyk7XHJcblxyXG4gICAgaWYgKHRoaXMuZm9ybS52YWxpZCAmJiB0aGlzLmlzTXVsdGlTdGVwKSB7XHJcbiAgICAgIGNvbnN0IHByZXYgPSB0aGlzLnN0ZXBzLmZpbmRJbmRleCgocykgPT4gcy52aXNpYmxlKTtcclxuICAgICAgdGhpcy5tdWx0aVN0ZXBEYXRhW3RoaXMuYWN0aXZlU3RlcF0gPSB0aGlzLmZvcm0udmFsdWU7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLnN0ZXBzLmZpbmRJbmRleCgocykgPT4gcy5uYW1lID09PSB0aGlzLmFjdGl2ZVN0ZXApO1xyXG4gICAgICBjb25zdCBuZXh0ID0gY3VycmVudCArIDE7XHJcblxyXG4gICAgICBpZiAodHlwZW9mICh0aGlzLnN0ZXBzW25leHRdKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB0aGlzLnN0ZXBzW3ByZXZdLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0ZXBzW25leHRdLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlU3RlcCA9IHRoaXMuc3RlcHNbbmV4dF0ubmFtZTtcclxuICAgICAgICB0aGlzLmhhbmRsZVN0ZXAuZW1pdCh7XHJcbiAgICAgICAgICBkaXI6ICduZXh0JyxcclxuICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgZGF0YTogeyBbdGhpcy5zdGVwc1twcmV2XS5uYW1lXTogdGhpcy5tdWx0aVN0ZXBEYXRhW3RoaXMuc3RlcHNbcHJldl0ubmFtZV0gfSxcclxuICAgICAgICAgIHN0ZXBzOiB0aGlzLnN0ZXBzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RGb3JtKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQuZW1pdCh0aGlzLm11bHRpU3RlcERhdGEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcclxuICAgICAgdGhpcy5oYW5kbGVTdWJtaXQuZW1pdCh0aGlzLmZvcm0udmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlT25DaGFuZ2Uoa2V5LCB2YWx1ZSwgaXNQYXJ0T2YgPSBmYWxzZSkge1xyXG4gICAgdGhpcy5jb250cm9sID0geyBrZXksIHZhbHVlLCBpc1BhcnRPZiB9O1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlT25DYW5jZWwoKSB7XHJcbiAgICBpZiAodGhpcy5pc011bHRpU3RlcCkge1xyXG4gICAgICBjb25zdCBwcmV2ID0gdGhpcy5zdGVwcy5maW5kSW5kZXgoKHMpID0+IHMudmlzaWJsZSk7XHJcbiAgICAgIHRoaXMuc3RlcHNbcHJldl0udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5zdGVwcy5maW5kSW5kZXgoKHMpID0+IHMubmFtZSA9PT0gdGhpcy5hY3RpdmVTdGVwKTtcclxuICAgICAgY29uc3QgbmV4dCA9IGN1cnJlbnQgLSAxO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiAodGhpcy5zdGVwc1tuZXh0XSkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdGhpcy5zdGVwc1tuZXh0XS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFjdGl2ZVN0ZXAgPSB0aGlzLnN0ZXBzW25leHRdLm5hbWU7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdGVwLmVtaXQoe1xyXG4gICAgICAgICAgZGlyOiAncHJldicsXHJcbiAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgIGRhdGE6IHsgW3RoaXMuc3RlcHNbY3VycmVudF0ubmFtZV06IHRoaXMubXVsdGlTdGVwRGF0YVt0aGlzLnN0ZXBzW3ByZXZdLm5hbWVdIH0sXHJcbiAgICAgICAgICBzdGVwczogdGhpcy5zdGVwc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY29uc3RydWN0Rm9ybSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2FuY2VsLmVtaXQodGhpcy5mb3JtLnZhbHVlKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtLnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlQ2FuY2VsLmVtaXQodGhpcy5mb3JtLnZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvdWNoQWxsKGNvbnRyb2xzKSB7XHJcbiAgICBPYmplY3Qua2V5cyhjb250cm9scykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgIGlmIChjb250cm9sc1trZXldLmhhc093blByb3BlcnR5KCdjb250cm9scycpKSB7XHJcbiAgICAgICAgdGhpcy50b3VjaEFsbChjb250cm9sc1trZXldLmNvbnRyb2xzKTtcclxuICAgICAgfVxyXG4gICAgICBjb250cm9sc1trZXldLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3ViUmVmcyhzY2hlbWEpIHtcclxuICAgIE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKS5mb3JFYWNoKChwcm9wKSA9PiB7XHJcbiAgICAgIGlmIChzY2hlbWEucHJvcGVydGllc1twcm9wXS5oYXNPd25Qcm9wZXJ0eSgnJHJlZicpKSB7XHJcbiAgICAgICAgc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0gPSB0aGlzLnNjaGVtYS5kZWZpbml0aW9uc1tzY2hlbWEucHJvcGVydGllc1twcm9wXVsnJHJlZiddLnJlcGxhY2UoJyMvZGVmaW5pdGlvbnMvJywgJycpXTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNjaGVtYTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFQSTogZXh0ZXJuYWwgbWV0aG9kIGZvciBlbnN1cmluZyB0aGUgZm9ybSBpcyB2YWxpZFxyXG4gICAqL1xyXG4gIGlzVmFsaWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLnZhbGlkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQVBJOiB0cmlnZ2VyIGV4dGVybmFsIHN1Ym1pc3Npb25cclxuICAgKi9cclxuICBzdWJtaXRGb3JtKCkge1xyXG4gICAgdGhpcy51c2VyRm9ybS5uZ1N1Ym1pdC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBUEk6IHNldCBoZWFkZXIgb2YgdGhlIGZvcm1cclxuICAgKi9cclxuICBzZXRIZWFkZXIodmFsKSB7XHJcbiAgICB0aGlzLmhlYWRlci5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IHZhbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFQSTogc2V0IGZvb3RlciBvZiB0aGUgZm9ybVxyXG4gICAqL1xyXG4gIHNldEZvb3Rlcih2YWwpIHtcclxuICAgIHRoaXMuZm9vdGVyLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gdmFsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQVBJOiBnZXQgcmVxdWlyZWQgZmllbGRzIGNvdW50XHJcbiAgICovXHJcbiAgZ2V0UmVxdWlyZWRGaWVsZENvdW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWlyZWRGaWVsZHM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGxhYmVsIFthdHRyLmNsYXNzXT1cInNjaGVtYS5rZXlcIiBbbmdDbGFzc109XCJ7J21hcmdpbi1ib3R0b20tLWhhbGYnOiB0cnVlLCByZXF1aXJlZDogaXNSZXF1aXJlZCgpfVwiPlxyXG4gICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cInRpdGxlKClcIj48L3NwYW4+PHN1cCAqbmdJZj1cImlzUmVxdWlyZWQoKVwiPio8L3N1cD48L2xhYmVsPlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJ0aGlzLnNjaGVtYS5kZXNjcmlwdGlvblwiIFthdHRyLmNsYXNzXT1cIidpbmZvJ1wiIFthdHRyLnRpdGxlXT1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCI+SW5mbzwvYnV0dG9uPlxyXG4gICAgPGRpdiBbY2xhc3NdPVwiZ2V0Q2xhc3MoJ2NoZWNrYm94LWdyb3VwJylcIj5cclxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgY2hpbGQgb2YgdGhpcy5jb250cm9sWydjb250cm9scyddOyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgICAgICBbbmdDbGFzc109XCJ7J2NoZWNrYm94LWNvbnRhaW5lcic6IHRydWUsICdjaGVja2VkJzogY2hpbGQudmFsdWUgPT09IHNjaGVtYS5lbnVtW2ldfVwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgIFthdHRyLmlkXT1cImdldElkKHNjaGVtYS5rZXksIHNjaGVtYS5lbnVtW2ldKVwiXHJcbiAgICAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICBbY2hlY2tlZF09XCJjaGlsZC52YWx1ZSA9PT0gc2NoZW1hLmVudW1baV1cIlxyXG4gICAgICAgICAgW25hbWVdPVwic2NoZW1hLmtleVwiXHJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiY2hpbGRcIlxyXG4gICAgICAgICAgKGNoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQsIGkpXCJcclxuICAgICAgICAgIFt2YWx1ZV09XCJzY2hlbWEuZW51bVtpXVwiIC8+XHJcbiAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICBbYXR0ci5mb3JdPVwiZ2V0SWQoaSwgc2NoZW1hLmVudW1baV0pXCJcclxuICAgICAgICAgIFthdHRyLmNsYXNzXT1cInNjaGVtYS5rZXlcIj5cclxuICAgICAgICAgIHt7ZW51bU5hbWVzKGkpfX1cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L2pmLWVycm9yPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrYm94Z3JvdXBDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xyXG4gIGNoZWNrYm94R3JvdXBWYWx1ZXMgPSBbXTtcclxuXHJcbiAgc2V0VmFsdWUoZXZlbnQsIGluZGV4KSB7XHJcbiAgICBpZiAodGhpcy5jaGVja2JveEdyb3VwVmFsdWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmNoZWNrYm94R3JvdXBWYWx1ZXMgPSBuZXcgQXJyYXkodGhpcy5jb250cm9sWydjb250cm9scyddLmxlbmd0aCkuZmlsbChudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jaGVja2JveEdyb3VwVmFsdWVzW2luZGV4XSA9PT0gbnVsbCkge1xyXG4gICAgICBldmVudC50YXJnZXQudmFsdWUgPSB0aGlzLnNjaGVtYS5lbnVtW2luZGV4XTtcclxuICAgICAgdGhpcy5jaGVja2JveEdyb3VwVmFsdWVzW2luZGV4XSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hHcm91cFZhbHVlc1tpbmRleF0gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh0aGlzLmNoZWNrYm94R3JvdXBWYWx1ZXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SWQoa2V5LCB2YWwpIHtcclxuICAgIHJldHVybiBgJHtrZXl9LSR7dmFsLnRvU3RyaW5nKCl9YDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bGFiZWwgW2F0dHIuY2xhc3NdPVwic2NoZW1hLmtleVwiIFtuZ0NsYXNzXT1cIntyZXF1aXJlZDogaXNSZXF1aXJlZCgpfVwiPlxyXG4gICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cInRpdGxlKClcIj48L3NwYW4+PHN1cCAqbmdJZj1cImlzUmVxdWlyZWQoKVwiPio8L3N1cD5cclxuICAgIDwvbGFiZWw+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIFthdHRyLmNsYXNzXT1cIidpbmZvJ1wiIFthdHRyLnRpdGxlXT1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCI+SW5mbzwvYnV0dG9uPlxyXG4gICAgPHNlbGVjdFxyXG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxyXG4gICAgICBtdWx0aXBsZT1cIm11bHRpcGxlXCJcclxuICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgPlxyXG4gICAgICA8b3B0aW9uXHJcbiAgICAgICAgKm5nRm9yPVwibGV0IGVuIG9mIHNjaGVtYS5lbnVtOyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgICBbc2VsZWN0ZWRdPVwiY29udHJvbC52YWx1ZSA9PT0gZW5cIlxyXG4gICAgICAgIFtuZ1ZhbHVlXT1cImVuXCI+XHJcbiAgICAgICAge3tlbnVtTmFtZXMoaSl9fVxyXG4gICAgICA8L29wdGlvbj5cclxuICAgIDwvc2VsZWN0PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE11bHRpc2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHtcclxuICBlbnVtTmFtZXMoaW5kZXgpIHtcclxuICAgIHJldHVybiB0eXBlb2YodGhpcy5zY2hlbWEuZW51bU5hbWVzKSA9PT0gJ3VuZGVmaW5lZCdcclxuICAgICAgPyB0aGlzLnNjaGVtYS5lbnVtW2luZGV4XVxyXG4gICAgICA6IHRoaXMuc2NoZW1hLmVudW1OYW1lc1tpbmRleF07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGxhYmVsXHJcbiAgICAgIFtuZ0NsYXNzXT1cIlsnamYtbGFiZWwnLCBzY2hlbWEua2V5LCAoaXNSZXF1aXJlZCgpID8gJ3JlcXVpcmVkJyA6ICcnKV1cIj5cclxuICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJ0aXRsZSgpXCI+PC9zcGFuPjxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+XHJcbiAgICA8L2xhYmVsPlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJ0aGlzLnNjaGVtYS5kZXNjcmlwdGlvblwiIFthdHRyLmNsYXNzXT1cIidpbmZvJ1wiIFthdHRyLnRpdGxlXT1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCI+SW5mbzwvYnV0dG9uPlxyXG4gICAgPHRleHRhcmVhXHJcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgW25hbWVdPVwic2NoZW1hLmtleVwiXHJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcclxuICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXHJcbiAgICAgIFthdHRyLm1pbkxlbmd0aF09XCJzY2hlbWEubWluTGVuZ3RoIHx8IG51bGxcIlxyXG4gICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlcigpXCJcclxuICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgPjwvdGV4dGFyZWE+XHJcbiAgICA8amYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvamYtZXJyb3I+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGV4dGFyZWFDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xyXG4gIHJhbmRvbVN1ZmZpeCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcclxuXHJcbiAgZ2V0SWQoaSwgdmFsKSB7XHJcbiAgICByZXR1cm4gYCR7aX0tJHt2YWwudG9TdHJpbmcoKS5yZXBsYWNlKC9bXFxXX10rL2csICcnKX0rJHt0aGlzLnJhbmRvbVN1ZmZpeH1gO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZShrZXkpIHtcclxuICAgIHJldHVybiBgJHtrZXl9LSR7dGhpcy5yYW5kb21TdWZmaXh9YDtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdC1jb250YWluZXJcIj5cclxuICAgICAgPGxhYmVsXHJcbiAgICAgICAgW25nQ2xhc3NdPVwiWydqZi1sYWJlbCcsIHNjaGVtYS5rZXksIChpc1JlcXVpcmVkKCkgPyAncmVxdWlyZWQnIDogJycpXVwiPlxyXG4gICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwidGl0bGUoKVwiPjwvc3Bhbj48c3VwICpuZ0lmPVwiaXNSZXF1aXJlZCgpXCI+Kjwvc3VwPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIFthdHRyLmNsYXNzXT1cIidpbmZvJ1wiIFthdHRyLnRpdGxlXT1cInNjaGVtYS5kZXNjcmlwdGlvblwiPkluZm88L2J1dHRvbj5cclxuICAgICAgPHNlbGVjdFxyXG4gICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICBbYXR0ci5uYW1lXT1cInNjaGVtYS5rZXlcIlxyXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcclxuICAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgID5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgW3NlbGVjdGVkXT1cImNvbnRyb2wudmFsdWUgPT09ICcnXCIgW2Rpc2FibGVkXT1cInRydWVcIj5cclxuICAgICAgICAgIHt7cGxhY2Vob2xkZXIoKX19XHJcbiAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGVuIG9mIHNjaGVtYS5lbnVtOyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgICAgIFtzZWxlY3RlZF09XCJjb250cm9sLnZhbHVlID09PSBlblwiXHJcbiAgICAgICAgICBbbmdWYWx1ZV09XCJlblwiPlxyXG4gICAgICAgICAge3tlbnVtTmFtZXMoaSl9fVxyXG4gICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L2pmLWVycm9yPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7fVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgW2NsYXNzXT1cImdldENsYXNzKCdjaGVja2JveC1ncm91cCcpXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveC1jb250YWluZXJcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIFtpZF09XCJzY2hlbWEua2V5XCJcclxuICAgICAgICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxyXG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcclxuICAgICAgICAgIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwic2NoZW1hLmtleVwiIFthdHRyLmNsYXNzXT1cInNjaGVtYS5rZXlcIiBbbmdDbGFzc109XCJ7cmVxdWlyZWQ6IGlzUmVxdWlyZWQoKX1cIj5cclxuICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwidGl0bGUoKVwiPjwvc3Bhbj48c3VwICpuZ0lmPVwiaXNSZXF1aXJlZCgpXCI+Kjwvc3VwPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8amYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvamYtZXJyb3I+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm9vbGVhbkNvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7fVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxsYWJlbCBbbmdDbGFzc109XCJbJ2pmLWxhYmVsJywgc2NoZW1hLmtleSwgKGlzUmVxdWlyZWQoKSA/ICdyZXF1aXJlZCcgOiAnJyldXCIgKm5nSWY9XCJ0eXBlKCkgIT09ICdoaWRkZW4nXCI+XHJcbiAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwidGl0bGUoKVwiPjwvc3Bhbj48c3VwICpuZ0lmPVwiaXNSZXF1aXJlZCgpXCI+Kjwvc3VwPlxyXG4gICAgPC9sYWJlbD5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwidGhpcy5zY2hlbWEuZGVzY3JpcHRpb25cIiBbYXR0ci5jbGFzc109XCInaW5mbydcIiBbYXR0ci50aXRsZV09XCJ0aGlzLnNjaGVtYS5kZXNjcmlwdGlvblwiPkluZm88L2J1dHRvbj5cclxuICAgIDxpbnB1dFxyXG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxyXG4gICAgICBbYXR0ci50eXBlXT1cIidudW1iZXInXCJcclxuICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxyXG4gICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlcigpXCJcclxuICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgLz5cclxuICAgIDxqZi1lcnJvciBbY29udHJvbF09XCJjb250cm9sXCI+PC9qZi1lcnJvcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOdW1iZXJDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGxhYmVsIFthdHRyLmNsYXNzXT1cInNjaGVtYS5rZXlcIiBbbmdDbGFzc109XCJ7cmVxdWlyZWQ6IGlzUmVxdWlyZWQoKX1cIj5cclxuICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJ0aXRsZSgpXCI+PC9zcGFuPjxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+XHJcbiAgICA8L2xhYmVsPlxyXG4gICAgPGRpdiAqbmdJZj1cInByZXZpZXdTcmNFeGlzdHMoKVwiIGNsYXNzPVwicGhvdG8tcHJldmlld1wiPlxyXG4gICAgICA8aW1nIFthdHRyLnNyY109XCJwaG90b0RhdGFcIiAvPlxyXG4gICAgICA8c3BhbiBocmVmPVwiI1wiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiIChjbGljayk9XCJjbGVhclBob3RvKClcIj5cclxuICAgICAgICA8aSBjbGFzcz1cImxhIGxhLWNsb3NlXCI+PC9pPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgICpuZ0lmPVwiIXByZXZpZXdTcmNFeGlzdHMoKVwiXHJcbiAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgLz5cclxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBbbmFtZV09XCJzY2hlbWEua2V5XCIgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8amYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvamYtZXJyb3I+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaG90b0NvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XHJcbiAgcHVibGljIHBob3RvRGF0YTogc3RyaW5nO1xyXG5cclxuICBvbkNoYW5nZShldmVudCkge1xyXG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9jZXNzRmlsZShyZWFkZXIucmVzdWx0LCBmaWxlLnR5cGUpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHRoaXMucGhvdG9EYXRhID0gZGF0YS50b1N0cmluZygpO1xyXG4gICAgICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHRoaXMucGhvdG9EYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgcmVhZGluZyB0aGUgZmlsZSEnKTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHR5cGVvZihmaWxlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmV2aWV3U3JjRXhpc3RzKCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiAodGhpcy5waG90b0RhdGEpID09PSAnc3RyaW5nJztcclxuICB9XHJcblxyXG4gIGNsZWFyUGhvdG8oKSB7XHJcbiAgICB0aGlzLnBob3RvRGF0YSA9IG51bGw7XHJcbiAgICB0aGlzLmNvbnRyb2wucmVzZXQoKTtcclxuICB9XHJcblxyXG4gIHByb2Nlc3NGaWxlKGRhdGFVUkwsIGZpbGVUeXBlKSB7XHJcbiAgICBjb25zdCBtYXhXaWR0aCA9IDgwMDtcclxuICAgIGNvbnN0IG1heEhlaWdodCA9IDgwMDtcclxuXHJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uuc3JjID0gZGF0YVVSTDtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSBpbWFnZS53aWR0aDtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XHJcbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzaXplID0gKHdpZHRoID4gbWF4V2lkdGgpIHx8IChoZWlnaHQgPiBtYXhIZWlnaHQpO1xyXG5cclxuICAgICAgICBpZiAoIXNob3VsZFJlc2l6ZSkge1xyXG4gICAgICAgICAgcmVzb2x2ZShkYXRhVVJMKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBuZXdXaWR0aDtcclxuICAgICAgICBsZXQgbmV3SGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAod2lkdGggPiBoZWlnaHQpIHtcclxuICAgICAgICAgIG5ld0hlaWdodCA9IGhlaWdodCAqIChtYXhXaWR0aCAvIHdpZHRoKTtcclxuICAgICAgICAgIG5ld1dpZHRoID0gbWF4V2lkdGg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5ld1dpZHRoID0gd2lkdGggKiAobWF4SGVpZ2h0IC8gaGVpZ2h0KTtcclxuICAgICAgICAgIG5ld0hlaWdodCA9IG1heEhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IG5ld1dpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBuZXdIZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBuZXdXaWR0aCwgbmV3SGVpZ2h0KTtcclxuXHJcbiAgICAgICAgcmVzb2x2ZShjYW52YXMudG9EYXRhVVJMKGZpbGVUeXBlKSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpbWFnZS5vbmVycm9yID0gKGVycikgPT4gcmVqZWN0KGVycik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGxhYmVsXHJcbiAgICAgIFtuZ0NsYXNzXT1cIlsnbWFyZ2luLWJvdHRvbS0taGFsZicsICdqZi1sYWJlbCcsIHNjaGVtYS5rZXksIChpc1JlcXVpcmVkKCkgPyAncmVxdWlyZWQnIDogJycpXVwiPlxyXG4gICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cInRpdGxlKClcIj48L3NwYW4+PHN1cCAqbmdJZj1cImlzUmVxdWlyZWQoKVwiPio8L3N1cD48L2xhYmVsPlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJ0aGlzLnNjaGVtYS5kZXNjcmlwdGlvblwiIFthdHRyLmNsYXNzXT1cIidpbmZvJ1wiIFthdHRyLnRpdGxlXT1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCI+SW5mbzwvYnV0dG9uPlxyXG4gICAgPGRpdiBbY2xhc3NdPVwiZ2V0Q2xhc3MoJ3JhZGlvLWdyb3VwJylcIj5cclxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZW4gb2YgdGhpcy5zY2hlbWEuZW51bTsgbGV0IGkgPSBpbmRleFwiXHJcbiAgICAgICAgICAgW25nQ2xhc3NdPVwieydyYWRpby1jb250YWluZXInOiB0cnVlLCAnY2hlY2tlZCc6IGNvbnRyb2wudmFsdWUgPT09IGVufVwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgIFthdHRyLmlkXT1cImdldElkKHNjaGVtYS5rZXksIGVuLCBzY2hlbWEuaWQpXCJcclxuICAgICAgICAgIFtjaGVja2VkXT1cImNvbnRyb2wudmFsdWUgPT09IGVuXCJcclxuICAgICAgICAgIFtuYW1lXT1cImdldE5hbWUoc2NoZW1hLmtleSlcIlxyXG4gICAgICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxyXG4gICAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgW3ZhbHVlXT1cImVuXCIgLz5cclxuICAgICAgICA8bGFiZWxcclxuICAgICAgICAgIFthdHRyLmZvcl09XCJnZXRJZChzY2hlbWEua2V5LCBlbiwgc2NoZW1hLmlkKVwiXHJcbiAgICAgICAgICBbYXR0ci5jbGFzc109XCJzY2hlbWEua2V5XCI+XHJcbiAgICAgICAgICAge3tlbnVtTmFtZXMoaSl9fVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8amYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvamYtZXJyb3I+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFkaW9ncm91cENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XHJcbiAgcmFuZG9tU3VmZml4ID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xyXG5cclxuICBnZXRJZChrZXksIHZhbCwgZm9ybUlkKSB7XHJcbiAgICAgIHJldHVybiBbZm9ybUlkLCBrZXksIHZhbC50b1N0cmluZygpXS5maWx0ZXIoKGYpID0+IGYubGVuZ3RoKS5qb2luKCctJyk7XHJcbiAgfVxyXG5cclxuICBnZXROYW1lKGtleSkge1xyXG4gICAgcmV0dXJuIGAke2tleX0tJHt0aGlzLnJhbmRvbVN1ZmZpeH1gO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxsYWJlbFxyXG4gICAgICBbbmdDbGFzc109XCJbJ2pmLWxhYmVsJywgc2NoZW1hLmtleSwgKGlzUmVxdWlyZWQoKSA/ICdyZXF1aXJlZCcgOiAnJyldXCIgKm5nSWY9XCJ0eXBlKCkgIT09ICdoaWRkZW4nXCI+XHJcbiAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwidGl0bGUoKVwiPjwvc3Bhbj48c3VwICpuZ0lmPVwiaXNSZXF1aXJlZCgpXCI+Kjwvc3VwPlxyXG4gICAgPC9sYWJlbD5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwidGhpcy5zY2hlbWEuZGVzY3JpcHRpb25cIiBbYXR0ci5jbGFzc109XCInaW5mbydcIiBbYXR0ci50aXRsZV09XCJ0aGlzLnNjaGVtYS5kZXNjcmlwdGlvblwiPkluZm88L2J1dHRvbj5cclxuICAgIDxpbnB1dFxyXG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgIFthdHRyLm5hbWVdPVwic2NoZW1hLmtleVwiXHJcbiAgICAgIFthdHRyLnR5cGVdPVwidHlwZSgpXCJcclxuICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxyXG4gICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcclxuICAgICAgW2F0dHIubWluTGVuZ3RoXT1cInNjaGVtYS5taW5MZW5ndGggfHwgbnVsbFwiXHJcbiAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyKClcIlxyXG4gICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFt0ZXh0TWFza109XCJ7IG1hc2s6IGdldE1hc2soKSB9XCJcclxuICAgIC8+XHJcbiAgICA8amYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvamYtZXJyb3I+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RyaW5nQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxsYWJlbCBbbmdDbGFzc109XCJbJ2pmLWxhYmVsJywgc2NoZW1hLmtleSwgKGlzUmVxdWlyZWQoKSA/ICdyZXF1aXJlZCcgOiAnJyldXCI+XHJcbiAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwidGl0bGUoKVwiPjwvc3Bhbj48c3VwICpuZ0lmPVwiaXNSZXF1aXJlZCgpXCI+Kjwvc3VwPlxyXG4gICAgPC9sYWJlbD5cclxuICAgIDxpbnB1dFxyXG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxyXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiXHJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlcigpXCJcclxuICAgICAgW2JzQ29uZmlnXT1cInsgY29udGFpbmVyQ2xhc3M6ICd0aGVtZS1kZWZhdWx0JywgZGF0ZUlucHV0Rm9ybWF0OiAnTU0vREQvWVlZWScgfVwiXHJcbiAgICAgIGJzRGF0ZXBpY2tlclxyXG4gICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAvPlxyXG4gICAgPGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L2pmLWVycm9yPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge31cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnamYtYnV0dG9uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICAqbmdJZj1cImlzVmlzaWJsZVwiXHJcbiAgICAgIFt0eXBlXT1cInR5cGVcIlxyXG4gICAgICBbbmdDbGFzc109XCJjbGFzc1wiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIChjbGljayk9XCJoYW5kbGVDbGljaygkZXZlbnQpXCI+XHJcbiAgICAgIHt7bGFiZWx9fVxyXG4gICAgPC9idXR0b24+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBpc1Zpc2libGU7XHJcbiAgQElucHV0KCkgdHlwZTtcclxuICBASW5wdXQoKSBjbGFzcztcclxuICBASW5wdXQoKSBpc1dvcmtpbmc7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ7XHJcbiAgQElucHV0KCkgc3VibWl0O1xyXG4gIEBJbnB1dCgpIGxhYmVsO1xyXG4gIEBJbnB1dCgpIGNvbG9yID0gJyc7XHJcbiAgQE91dHB1dCgpIGhhbmRsZUJ1dHRvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBoYW5kbGVDbGljayhldmVudCkge1xyXG4gICAgdGhpcy5oYW5kbGVCdXR0b25DbGljay5lbWl0KGV2ZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcclxuaW1wb3J0IGNyZWF0ZU51bWJlck1hc2sgZnJvbSAndGV4dC1tYXNrLWFkZG9ucy9kaXN0L2NyZWF0ZU51bWJlck1hc2snO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxsYWJlbCBbbmdDbGFzc109XCJbJ2pmLWxhYmVsJywgc2NoZW1hLmtleSwgKGlzUmVxdWlyZWQoKSA/ICdyZXF1aXJlZCcgOiAnJyldXCI+XHJcbiAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwidGl0bGUoKVwiPjwvc3Bhbj48c3VwICpuZ0lmPVwiaXNSZXF1aXJlZCgpXCI+Kjwvc3VwPlxyXG4gICAgPC9sYWJlbD5cclxuICAgIDxpbnB1dFxyXG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxyXG4gICAgICBbYXR0ci50eXBlXT1cIid0ZXh0J1wiXHJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcclxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyKClcIlxyXG4gICAgICBbdGV4dE1hc2tdPVwieyBtYXNrOiBudW1iZXJNYXNrfVwiXHJcbiAgICAgIChpbnB1dCk9Y2xlYW5NYXNrKCRldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgIC8+XHJcbiAgICA8amYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvamYtZXJyb3I+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9uZXlDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xyXG4gIG51bWJlck1hc2sgPSBjcmVhdGVOdW1iZXJNYXNrKHsgYWxsb3dEZWNpbWFsOiBmYWxzZSwgcHJlZml4OiAnJyB9KTtcclxuXHJcbiAgY2xlYW5NYXNrKHZhbHVlKSB7XHJcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUucmVwbGFjZSgvXFxEL2csICcnKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSnNvbkZvcm1GaWVsZHNTZXJ2aWNlIH0gZnJvbSAnLi4vanNvbi1mb3JtLWZpZWxkcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2hlY2tib3hncm91cENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9jaGVja2JveGdyb3VwL2NoZWNrYm94Z3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXVsdGlzZWxlY3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGV4dGFyZWFDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvdGV4dGFyZWEvdGV4dGFyZWEuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQm9vbGVhbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9ib29sZWFuL2Jvb2xlYW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL251bWJlci9udW1iZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGhvdG9Db21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvcGhvdG8vcGhvdG8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmFkaW9ncm91cENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9yYWRpb2dyb3VwL3JhZGlvZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3RyaW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3N0cmluZy9zdHJpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9kYXRlL2RhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9uZXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbW9uZXkvbW9uZXkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT2JqZWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmVkL2NvbXBvbmVudHMvb2JqZWN0L29iamVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcnJheUNvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9jb21wb25lbnRzL2FycmF5L2FycmF5LmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBKc29uRm9ybUJvb3RzdHJhcDQgZXh0ZW5kcyBKc29uRm9ybUZpZWxkc1NlcnZpY2Uge1xyXG4gIGZpZWxkVHlwZXMgPSB7XHJcbiAgICBzdHJpbmc6IFN0cmluZ0NvbXBvbmVudCxcclxuICAgIHNlbGVjdDogU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgbnVtYmVyOiBOdW1iZXJDb21wb25lbnQsXHJcbiAgICBib29sZWFuOiBCb29sZWFuQ29tcG9uZW50LFxyXG4gICAgcGhvdG86IFBob3RvQ29tcG9uZW50LFxyXG4gICAgdGV4dGFyZWE6IFRleHRhcmVhQ29tcG9uZW50LFxyXG4gICAgb2JqZWN0OiBPYmplY3RDb21wb25lbnQsXHJcbiAgICBhcnJheTogQXJyYXlDb21wb25lbnQsXHJcbiAgICBkYXRlOiBEYXRlQ29tcG9uZW50LFxyXG4gICAgcmFkaW9ncm91cDogUmFkaW9ncm91cENvbXBvbmVudCxcclxuICAgIGNoZWNrYm94Z3JvdXA6IENoZWNrYm94Z3JvdXBDb21wb25lbnQsXHJcbiAgICBtdWx0aXNlbGVjdDogTXVsdGlzZWxlY3RDb21wb25lbnQsXHJcbiAgICBtb25leTogTW9uZXlDb21wb25lbnQsXHJcbiAgICBidXR0b246IEJ1dHRvbkNvbXBvbmVudFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtR3JvdXAgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvc2NoZW1hLWZvcm0tZ3JvdXAnO1xyXG5pbXBvcnQgeyBTY2hlbWEgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvc2NoZW1hJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnamYtY29tcG9uZW50LWNob29zZXIsIFtqZi1jb21wb25lbnQtY2hvb3Nlcl0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8aDIgKm5nSWY9XCJzY2hlbWEgJiYgc2NoZW1hLmhhc093blByb3BlcnR5KCd0aXRsZScpICYmICFuZXN0ZWRcIj5cclxuICAgICAge3tzY2hlbWEudGl0bGV9fVxyXG4gICAgPC9oMj5cclxuICAgIDxoNCAqbmdJZj1cInNjaGVtYSAmJiBzY2hlbWEuaGFzT3duUHJvcGVydHkoJ3RpdGxlJykgJiYgbmVzdGVkXCI+XHJcbiAgICAgIHt7c2NoZW1hLnRpdGxlfX1cclxuICAgIDwvaDQ+XHJcbiAgICA8ZGl2IFtuZ0NsYXNzXT1cIlsnZm9ybS1jb250YWluZXInXVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiAqbmdJZj1cInNjaGVtYSAmJiBzY2hlbWEuaGFzT3duUHJvcGVydHkoJ2Rlc2NyaXB0aW9uJylcIiBbaW5uZXJIVE1MXT1cInNjaGVtYS5kZXNjcmlwdGlvblwiPjwvZGl2PlxyXG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjb250cm9sIG9mIGtleXMoZm9ybS5jb250cm9scylcIiBqZi1maWVsZCBbY29udHJvbF09XCJmb3JtLmdldChjb250cm9sKVwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hvb3NlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZm9ybTogU2NoZW1hRm9ybUdyb3VwO1xyXG4gIEBJbnB1dCgpIHNjaGVtYTogU2NoZW1hO1xyXG4gIEBJbnB1dCgpIG5lc3RlZCA9IGZhbHNlO1xyXG4gIGtleXMgPSBPYmplY3Qua2V5cztcclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29udHJvbCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9zY2hlbWEtZm9ybS1jb250cm9sJztcclxuaW1wb3J0IHtKc29uRm9ybUZpZWxkc1NlcnZpY2V9IGZyb20gJy4uLy4uLy4uL2pzb24tZm9ybS1maWVsZHMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2pmLWZpZWxkLCBbamYtZmllbGRdJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPG5nLWNvbnRhaW5lciAjY29udGFpbmVyPjwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7cmVhZDogVmlld0NvbnRhaW5lclJlZn0pIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuICBASW5wdXQoKSBjb250cm9sOiBTY2hlbWFGb3JtQ29udHJvbDtcclxuICBwdWJsaWMgcGF0dGVybnM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGpzb25Gb3JtRmllbGRzU2VydmljZTogSnNvbkZvcm1GaWVsZHNTZXJ2aWNlLFxyXG4gICAgcHVibGljIGVsOiBFbGVtZW50UmVmXHJcbiAgKSB7XHJcbiAgICB0aGlzLnBhdHRlcm5zID0ge307XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZ2VuZXJhdGVGaWVsZCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5nZW5lcmF0ZUZpZWxkKCk7XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZUZpZWxkKCkge1xyXG4gICAgdGhpcy5jb250YWluZXIuY2xlYXIoKTtcclxuICAgIHRoaXMuanNvbkZvcm1GaWVsZHNTZXJ2aWNlWzBdLnNldFJvb3RWaWV3Q29udGFpbmVyUmVmKHRoaXMuY29udGFpbmVyKTtcclxuICAgIHRoaXMuanNvbkZvcm1GaWVsZHNTZXJ2aWNlWzBdLmFkZER5bmFtaWNDb21wb25lbnQodGhpcy5jb250cm9sKTtcclxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSBgZmllbGQgbWFyZ2luLWJvdHRvbSAke3RoaXMuZ2V0Q2xhc3MoKX0gZm9ybS1ncm91cGA7XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzcyhkZWZhdWx0Q2xhc3MgPSAnJykge1xyXG4gICAgY29uc3QgZmllbGRDbGFzcyA9IFtkZWZhdWx0Q2xhc3NdO1xyXG4gICAgZmllbGRDbGFzcy5wdXNoKHRoaXMuY29udHJvbC5zY2hlbWEudHlwZSk7XHJcbiAgICBmaWVsZENsYXNzLnB1c2godGhpcy5jb250cm9sLnNjaGVtYS5rZXkpO1xyXG5cclxuICAgIGlmICh0aGlzLmNvbnRyb2wuc2NoZW1hLmhhc093blByb3BlcnR5KCdkZXNjcmlwdGlvbicpKSB7XHJcbiAgICAgIGZpZWxkQ2xhc3MucHVzaCgnaGFzLWluZm8nKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb250cm9sLnNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnZm9ybWF0JykpIHtcclxuICAgICAgZmllbGRDbGFzcy5wdXNoKHRoaXMuY29udHJvbC5zY2hlbWEuZm9ybWF0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb250cm9sLnN0eWxlICYmIHRoaXMuY29udHJvbC5zdHlsZS5kZWZhdWx0ICYmIFsncmFkaW9ncm91cCcsICdjaGVja2JveGdyb3VwJ10uaW5kZXhPZih0aGlzLmNvbnRyb2wuc2NoZW1hLmZvcm1hdCkgPT09IC0xKSB7XHJcbiAgICAgIGZpZWxkQ2xhc3MucHVzaCh0aGlzLmNvbnRyb2wuc3R5bGUuZGVmYXVsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkQ2xhc3MuZmlsdGVyKChkKSA9PiBkKS5qb2luKCcgJyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIE9uSW5pdCxcclxuICBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtKc29uRm9ybUZpZWxkc1NlcnZpY2V9IGZyb20gJy4uLy4uLy4uL2pzb24tZm9ybS1maWVsZHMuc2VydmljZSc7XHJcbmltcG9ydCB7QnV0dG9uQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdqZi1mb3JtLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgI2J1dHRvbj48L25nLWNvbnRhaW5lcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGlzRm9ybVZhbGlkID0gdHJ1ZTtcclxuICBASW5wdXQoKSBsYWJlbCA9ICcnO1xyXG4gIEBJbnB1dCgpIGlzTXVsdGlTdGVwID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc3RlcHMgPSBbXTtcclxuICBASW5wdXQoKSBzdWJtaXQgPSAnJztcclxuICBASW5wdXQoKSBjb250aW51ZSA9ICcnO1xyXG4gIEBJbnB1dCgpIGNhbmNlbCA9ICcnO1xyXG4gIEBJbnB1dCgpIHN1Ym1pdENsYXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY2FuY2VsQ2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBpc1dvcmtpbmcgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgaGFuZGxlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQFZpZXdDaGlsZCgnYnV0dG9uJywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KSBidXR0b246IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUganNvbkZvcm1GaWVsZHNTZXJ2aWNlOiBKc29uRm9ybUZpZWxkc1NlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJhd0J1dHRvbigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyYXdCdXR0b24oKTtcclxuICB9XHJcblxyXG4gIGRyYXdCdXR0b24oKSB7XHJcbiAgICB0aGlzLmJ1dHRvbi5jbGVhcigpO1xyXG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuanNvbkZvcm1GaWVsZHNTZXJ2aWNlWzBdLmdldCgnYnV0dG9uJykpO1xyXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5idXR0b24uY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xyXG4gICAgKDxCdXR0b25Db21wb25lbnQ+IGNvbXBvbmVudFJlZi5pbnN0YW5jZSkudHlwZSA9IHRoaXMuZ2V0VHlwZSgpO1xyXG4gICAgKDxCdXR0b25Db21wb25lbnQ+IGNvbXBvbmVudFJlZi5pbnN0YW5jZSkuaXNWaXNpYmxlID0gdGhpcy5pc1Zpc2libGUoKTtcclxuICAgICg8QnV0dG9uQ29tcG9uZW50PiBjb21wb25lbnRSZWYuaW5zdGFuY2UpLmNsYXNzID0gdGhpcy5nZXRDbGFzcygpO1xyXG4gICAgKDxCdXR0b25Db21wb25lbnQ+IGNvbXBvbmVudFJlZi5pbnN0YW5jZSkuZGlzYWJsZWQgPSB0aGlzLmlzV29ya2luZztcclxuICAgICg8QnV0dG9uQ29tcG9uZW50PiBjb21wb25lbnRSZWYuaW5zdGFuY2UpLmlzV29ya2luZyA9IHRoaXMuaXNXb3JraW5nO1xyXG4gICAgKDxCdXR0b25Db21wb25lbnQ+IGNvbXBvbmVudFJlZi5pbnN0YW5jZSkubGFiZWwgPSB0aGlzLmdldExhYmVsKCk7XHJcbiAgICAoPEJ1dHRvbkNvbXBvbmVudD4gY29tcG9uZW50UmVmLmluc3RhbmNlKS5oYW5kbGVCdXR0b25DbGljay5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNhbmNlbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljay5lbWl0KGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAoPEJ1dHRvbkNvbXBvbmVudD4gY29tcG9uZW50UmVmLmluc3RhbmNlKS5jb2xvciA9IHRoaXMuc3VibWl0ID8gJ3ByaW1hcnknIDogJyc7XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzcygpIHtcclxuICAgIHJldHVybiAodGhpcy5jYW5jZWwubGVuZ3RoID4gMClcclxuICAgICAgPyBbJ2J0biBidG4tZGVmYXVsdCBidXR0b24nLCB0aGlzLmNhbmNlbENsYXNzIHx8ICcnXVxyXG4gICAgICA6IFsnYnRuIGJ0bi1wcmltYXJ5IGJ1dHRvbiBidXR0b24tLWFjY2VwdCcsIHRoaXMuc3VibWl0Q2xhc3MgfHwgJycsICh0aGlzLmlzRm9ybVZhbGlkID8gJ3ZhbGlkJyA6ICdpbnZhbGlkJyldO1xyXG4gIH1cclxuXHJcbiAgaXNWaXNpYmxlKCkge1xyXG4gICAgY29uc3Qgc3RlcCA9IHRoaXMuc3RlcHMuZmluZEluZGV4KChzKSA9PiBzLnZpc2libGUpO1xyXG4gICAgaWYgKHRoaXMuaXNNdWx0aVN0ZXAgJiYgdGhpcy5jYW5jZWwubGVuZ3RoID4gMCAmJiB0aGlzLnN0ZXBzW3N0ZXBdKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0ZXBzW3N0ZXBdLnR5cGUgIT09ICdmaXJzdCc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXRMYWJlbCgpIHtcclxuICAgIGlmICh0aGlzLmlzTXVsdGlTdGVwICYmIHRoaXMuY2FuY2VsLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3Qgc3RlcCA9IHRoaXMuc3RlcHMuZmluZEluZGV4KChzKSA9PiBzLnZpc2libGUpO1xyXG4gICAgICBpZiAodGhpcy5zdGVwc1tzdGVwXSAmJiB0aGlzLnN0ZXBzW3N0ZXBdLnR5cGUgIT09ICdmaXJzdCcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW5jZWw7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc011bHRpU3RlcCkge1xyXG4gICAgICBjb25zdCBzdGVwID0gdGhpcy5zdGVwcy5maW5kSW5kZXgoKHMpID0+IHMudmlzaWJsZSk7XHJcbiAgICAgIGlmICh0aGlzLnN0ZXBzW3N0ZXBdICYmIHRoaXMuc3RlcHNbc3RlcF0udHlwZSAhPT0gJ2xhc3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnN1Ym1pdDtcclxuICAgIH0gZWxzZSAgaWYgKHRoaXMuY2FuY2VsLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2FuY2VsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnN1Ym1pdDtcclxuICB9XHJcblxyXG4gIGdldFR5cGUoKSB7XHJcbiAgICBpZiAodGhpcy5jYW5jZWwpIHtcclxuICAgICAgcmV0dXJuICdidXR0b24nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAnc3VibWl0JztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnamYtaW5mby1idXR0b24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YVxyXG4gICAgICBbYXR0ci5ocmVmXT1cIidqYXZhc2NyaXB0OnZvaWQoMCknXCJcclxuICAgICAgKm5nSWY9XCJ0aXRsZVwiXHJcbiAgICAgIFthdHRyLmNsYXNzXT1cIididG4gYnRuLWxpbmsgaW5mbydcIiBbYXR0ci50aXRsZV09XCJ0aXRsZVwiPkluZm88L2E+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5mb0J1dHRvbkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgdGl0bGU7XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ2hvb3NlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaG9vc2VyL2Nob29zZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLWJ1dHRvbi9mb3JtLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbmZvQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2luZm8tYnV0dG9uL2luZm8tYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRleHRhcmVhVmlld0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy90ZXh0YXJlYS90ZXh0YXJlYS52aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJhZGlvZ3JvdXBWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3JhZGlvZ3JvdXAvcmFkaW9ncm91cC52aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlbGVjdFZpZXdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvc2VsZWN0L3NlbGVjdC52aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGVWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2RhdGUvZGF0ZS52aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJvb2xlYW5WaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2Jvb2xlYW4vYm9vbGVhbi52aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBob3RvVmlld0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9waG90by9waG90by52aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN0cmluZ1ZpZXdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvc3RyaW5nL3N0cmluZy52aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE51bWJlclZpZXdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbnVtYmVyL251bWJlci52aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoZWNrYm94Z3JvdXBWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2NoZWNrYm94Z3JvdXAvY2hlY2tib3hncm91cC52aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9iamVjdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9vYmplY3Qvb2JqZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vbmV5Vmlld0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9tb25leS9tb25leS52aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE11bHRpc2VsZWN0Vmlld0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9tdWx0aXNlbGVjdC9tdWx0aXNlbGVjdC52aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEpzb25Gb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vanNvbi1mb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFRleHRNYXNrTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdGV4dC1tYXNrJztcclxuaW1wb3J0IHsgQXJyYXlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXJyYXkvYXJyYXkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXJyYXlWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FycmF5L2FycmF5LnZpZXcuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgVGV4dE1hc2tNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEpzb25Gb3JtQ29tcG9uZW50LFxyXG4gICAgQ29tbW9uQ29tcG9uZW50LFxyXG4gICAgQ2hvb3NlckNvbXBvbmVudCxcclxuICAgIEZpZWxkQ29tcG9uZW50LFxyXG4gICAgRm9ybUJ1dHRvbkNvbXBvbmVudCxcclxuICAgIEluZm9CdXR0b25Db21wb25lbnQsXHJcbiAgICBTdHJpbmdWaWV3Q29tcG9uZW50LFxyXG4gICAgU2VsZWN0Vmlld0NvbXBvbmVudCxcclxuICAgIE51bWJlclZpZXdDb21wb25lbnQsXHJcbiAgICBCb29sZWFuVmlld0NvbXBvbmVudCxcclxuICAgIFBob3RvVmlld0NvbXBvbmVudCxcclxuICAgIFRleHRhcmVhVmlld0NvbXBvbmVudCxcclxuICAgIERhdGVWaWV3Q29tcG9uZW50LFxyXG4gICAgUmFkaW9ncm91cFZpZXdDb21wb25lbnQsXHJcbiAgICBDaGVja2JveGdyb3VwVmlld0NvbXBvbmVudCxcclxuICAgIE11bHRpc2VsZWN0Vmlld0NvbXBvbmVudCxcclxuICAgIE1vbmV5Vmlld0NvbXBvbmVudCxcclxuICAgIE9iamVjdENvbXBvbmVudCxcclxuICAgIEFycmF5Q29tcG9uZW50LFxyXG4gICAgQXJyYXlWaWV3Q29tcG9uZW50XHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIEpzb25Gb3JtQ29tcG9uZW50LFxyXG4gICAgQ29tbW9uQ29tcG9uZW50LFxyXG4gICAgQ2hvb3NlckNvbXBvbmVudCxcclxuICAgIEZpZWxkQ29tcG9uZW50LFxyXG4gICAgRm9ybUJ1dHRvbkNvbXBvbmVudCxcclxuICAgIEluZm9CdXR0b25Db21wb25lbnQsXHJcbiAgICBTdHJpbmdWaWV3Q29tcG9uZW50LFxyXG4gICAgU2VsZWN0Vmlld0NvbXBvbmVudCxcclxuICAgIE51bWJlclZpZXdDb21wb25lbnQsXHJcbiAgICBCb29sZWFuVmlld0NvbXBvbmVudCxcclxuICAgIFBob3RvVmlld0NvbXBvbmVudCxcclxuICAgIFRleHRhcmVhVmlld0NvbXBvbmVudCxcclxuICAgIERhdGVWaWV3Q29tcG9uZW50LFxyXG4gICAgUmFkaW9ncm91cFZpZXdDb21wb25lbnQsXHJcbiAgICBDaGVja2JveGdyb3VwVmlld0NvbXBvbmVudCxcclxuICAgIE11bHRpc2VsZWN0Vmlld0NvbXBvbmVudCxcclxuICAgIE1vbmV5Vmlld0NvbXBvbmVudCxcclxuICAgIE9iamVjdENvbXBvbmVudCxcclxuICAgIEFycmF5Q29tcG9uZW50LFxyXG4gICAgQXJyYXlWaWV3Q29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBDaG9vc2VyQ29tcG9uZW50LFxyXG4gICAgRmllbGRDb21wb25lbnQsXHJcbiAgICBGb3JtQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgSW5mb0J1dHRvbkNvbXBvbmVudCxcclxuICAgIEpzb25Gb3JtQ29tcG9uZW50LFxyXG4gICAgQ29tbW9uQ29tcG9uZW50LFxyXG4gICAgQXJyYXlDb21wb25lbnQsXHJcbiAgICBPYmplY3RDb21wb25lbnRcclxuICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHt9XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEpzb25Gb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9qc29uLWZvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgSnNvbkZvcm1EZWZhdWx0c1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RlZmF1bHRzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBKc29uRm9ybVZhbGlkYXRvcnNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuL2ZpZWxkcy9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEpzb25Gb3JtQm9vdHN0cmFwNCB9IGZyb20gJy4vZnJhbWV3b3JrL2Jvb3RzdHJhcDQvanNvbi1mb3JtLWJvb3RzdHJhcDQnO1xyXG5pbXBvcnQgeyBKc29uRm9ybUZpZWxkc1NlcnZpY2UgfSBmcm9tICcuL2ZyYW1ld29yay9qc29uLWZvcm0tZmllbGRzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL2ZyYW1ld29yay9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFNoYXJlZE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQ29tbW9uQ29tcG9uZW50LFxyXG4gICAgSnNvbkZvcm1Db21wb25lbnRcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgSnNvbkZvcm1Db21wb25lbnQsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEpzb25Gb3JtRGVmYXVsdHNTZXJ2aWNlLFxyXG4gICAgSnNvbkZvcm1WYWxpZGF0b3JzU2VydmljZVxyXG4gIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBKc29uRm9ybU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoLi4uZnJhbWV3b3Jrcyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgY29uc3QgbG9hZEZyYW1ld29yayA9IGZyYW1ld29ya3MubGVuZ3RoXHJcbiAgICAgID8gZnJhbWV3b3Jrcy5tYXAoZnJhbWV3b3JrID0+IGZyYW1ld29yay5mb3JSb290KCkucHJvdmlkZXJzWzBdKVxyXG4gICAgICA6IFt7IHByb3ZpZGU6IEpzb25Gb3JtRmllbGRzU2VydmljZSwgdXNlQ2xhc3M6IEpzb25Gb3JtQm9vdHN0cmFwNCwgbXVsdGk6IHRydWUgfV07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEpzb25Gb3JtTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBKc29uRm9ybURlZmF1bHRzU2VydmljZSxcclxuICAgICAgICBKc29uRm9ybVZhbGlkYXRvcnNTZXJ2aWNlLFxyXG4gICAgICAgIC4uLmxvYWRGcmFtZXdvcmtcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2pmLWVycm9yLCBbamYtZXJyb3JdJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiAqbmdJZj1cImNvbnRyb2wuaW52YWxpZCAmJiAoY29udHJvbC5kaXJ0eSB8fCBjb250cm9sLnRvdWNoZWQpXCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1sncmVxdWlyZWQnXVwiPlxyXG4gICAgICAgIFRoaXMgZmllbGQgaXMgcmVxdWlyZWQuXHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ3BhdHRlcm4nXVwiPlxyXG4gICAgICAgIElucHV0IHZhbHVlIGlzIGludmFsaWQuXHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ2VtYWlsJ11cIj5cclxuICAgICAgICBFbWFpbCBpcyBpbnZhbGlkLlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzWydtaW5sZW5ndGgnXVwiPlxyXG4gICAgICAgIElucHV0IGhhcyB0byBiZSBhIG1pbmltdW0gb2Yge3tjb250cm9sLmVycm9yc1snbWlubGVuZ3RoJ11bJ3JlcXVpcmVkTGVuZ3RoJ119fSBjaGFyYWN0ZXJzLlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzWydtYXhsZW5ndGgnXVwiPlxyXG4gICAgICAgIElucHV0IGNhbiBjb250YWluIGEgbWF4aW11bSBvZiB7e2NvbnRyb2wuZXJyb3JzWydtYXhsZW5ndGgnXVsncmVxdWlyZWRMZW5ndGgnXX19IGNoYXJhY3RlcnMuXHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ21pbiddXCI+XHJcbiAgICAgICAgRW50ZXIgYSB2YWx1ZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8ge3tjb250cm9sLmVycm9yc1snbWluJ11bJ21pbiddfX0uXHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ21heCddXCI+XHJcbiAgICAgICAgRW50ZXIgYSB2YWx1ZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8ge3tjb250cm9sLmVycm9yc1snbWF4J11bJ21heCddfX0uXHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ2N1c3RvbUVycm9yJ11cIj5cclxuICAgICAgICB7e2NvbnRyb2wuZXJyb3JzWydjdXN0b21FcnJvciddfX1cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFcnJvckNvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgY29udHJvbDtcclxufVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdHJpbmdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvc3RyaW5nL3N0cmluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZXh0TWFza01vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXRleHQtbWFzayc7XHJcbmltcG9ydCB7IEpzb25Gb3JtQm9vdHN0cmFwNCB9IGZyb20gJy4vanNvbi1mb3JtLWJvb3RzdHJhcDQnO1xyXG5pbXBvcnQgeyBKc29uRm9ybUZpZWxkc1NlcnZpY2UgfSBmcm9tICcuLi9qc29uLWZvcm0tZmllbGRzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2RhdGUvZGF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFcnJvckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9lcnJvci9lcnJvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCb29sZWFuQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2Jvb2xlYW4vYm9vbGVhbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOdW1iZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbnVtYmVyL251bWJlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZXh0YXJlYUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy90ZXh0YXJlYS90ZXh0YXJlYS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb25leUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9tb25leS9tb25leS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XHJcbmltcG9ydCB7IENoZWNrYm94Z3JvdXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvY2hlY2tib3hncm91cC9jaGVja2JveGdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE11bHRpc2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL211bHRpc2VsZWN0L211bHRpc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBob3RvQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3Bob3RvL3Bob3RvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJhZGlvZ3JvdXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvcmFkaW9ncm91cC9yYWRpb2dyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvZGF0ZXBpY2tlcic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBUZXh0TWFza01vZHVsZSxcclxuICAgIFNoYXJlZE1vZHVsZSxcclxuICAgIEJzRGF0ZXBpY2tlck1vZHVsZS5mb3JSb290KClcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU3RyaW5nQ29tcG9uZW50LFxyXG4gICAgU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgRGF0ZUNvbXBvbmVudCxcclxuICAgIFRleHRhcmVhQ29tcG9uZW50LFxyXG4gICAgRXJyb3JDb21wb25lbnQsXHJcbiAgICBNb25leUNvbXBvbmVudCxcclxuICAgIE51bWJlckNvbXBvbmVudCxcclxuICAgIEJvb2xlYW5Db21wb25lbnQsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICBDaGVja2JveGdyb3VwQ29tcG9uZW50LFxyXG4gICAgTXVsdGlzZWxlY3RDb21wb25lbnQsXHJcbiAgICBQaG90b0NvbXBvbmVudCxcclxuICAgIFJhZGlvZ3JvdXBDb21wb25lbnRcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgU3RyaW5nQ29tcG9uZW50LFxyXG4gICAgU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgRGF0ZUNvbXBvbmVudCxcclxuICAgIFRleHRhcmVhQ29tcG9uZW50LFxyXG4gICAgRXJyb3JDb21wb25lbnQsXHJcbiAgICBNb25leUNvbXBvbmVudCxcclxuICAgIE51bWJlckNvbXBvbmVudCxcclxuICAgIEJvb2xlYW5Db21wb25lbnQsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICBDaGVja2JveGdyb3VwQ29tcG9uZW50LFxyXG4gICAgTXVsdGlzZWxlY3RDb21wb25lbnQsXHJcbiAgICBQaG90b0NvbXBvbmVudCxcclxuICAgIFJhZGlvZ3JvdXBDb21wb25lbnRcclxuICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSnNvbkZvcm1Cb290c3RyYXA0TW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBKc29uRm9ybUJvb3RzdHJhcDRNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEpzb25Gb3JtRmllbGRzU2VydmljZSxcclxuICAgICAgICAgIHVzZUNsYXNzOiBKc29uRm9ybUJvb3RzdHJhcDQsXHJcbiAgICAgICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBtYXRJbnB1dFxyXG4gICAgICAgIFthdHRyLm5hbWVdPVwic2NoZW1hLmtleVwiXHJcbiAgICAgICAgW2F0dHIudHlwZV09XCJ0eXBlKClcIlxyXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcclxuICAgICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcclxuICAgICAgICBbYXR0ci5taW5MZW5ndGhdPVwic2NoZW1hLm1pbkxlbmd0aCB8fCBudWxsXCJcclxuICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlcigpXCJcclxuICAgICAgICBbdGV4dE1hc2tdPVwieyBtYXNrOiBnZXRNYXNrKCkgfVwiXHJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInRpdGxlKHRydWUpXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAvPlxyXG4gICAgICA8bWF0LWVycm9yIGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L21hdC1lcnJvcj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RyaW5nTWF0ZXJpYWxDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XHJcbiAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgbWF0SW5wdXRcclxuICAgICAgICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxyXG4gICAgICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxyXG4gICAgICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXHJcbiAgICAgICAgICBbYXR0ci5taW5MZW5ndGhdPVwic2NoZW1hLm1pbkxlbmd0aCB8fCBudWxsXCJcclxuICAgICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyKClcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJ0aXRsZSh0cnVlKVwiPlxyXG4gICAgICA8L3RleHRhcmVhPlxyXG4gICAgICA8bWF0LWVycm9yIGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L21hdC1lcnJvcj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGV4dGFyZWFNYXRlcmlhbENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiBgXHJcblxyXG4gIDxtYXQtZm9ybS1maWVsZD5cclxuICAgIDxtYXQtc2VsZWN0XHJcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgW2F0dHIubmFtZV09XCJzY2hlbWEua2V5XCJcclxuICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxyXG4gICAgICBwbGFjZWhvbGRlcj1cInt7dGl0bGUodHJ1ZSl9fVwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICA+XHJcbiAgICAgIDxtYXQtb3B0aW9uIFtkaXNhYmxlZF09XCJ0cnVlXCI+XHJcbiAgICAgICAgICB7e3BsYWNlaG9sZGVyKCl9fVxyXG4gICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBlbiBvZiB0aGlzLnNjaGVtYS5lbnVtOyBsZXQgaSA9IGluZGV4XCIgW3ZhbHVlXT1cImVuXCI+XHJcbiAgICAgICAgICB7e2VudW1OYW1lcyhpKX19XHJcbiAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgIDwvbWF0LXNlbGVjdD5cclxuICAgIDxtYXQtZXJyb3IgamYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvbWF0LWVycm9yPlxyXG4gIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdE1hdGVyaWFsQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHt9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdj5cclxuICAgICAgPGxhYmVsIFthdHRyLmNsYXNzXT1cInNjaGVtYS5rZXlcIiBbbmdDbGFzc109XCJ7J21hcmdpbi1ib3R0b20tLWhhbGYnOiB0cnVlLCByZXF1aXJlZDogaXNSZXF1aXJlZCgpfVwiPlxyXG4gICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwidGl0bGUodHJ1ZSlcIj48L3NwYW4+PHN1cCAqbmdJZj1cImlzUmVxdWlyZWQoKVwiPio8L3N1cD48L2xhYmVsPlxyXG5cclxuICAgICAgPG1hdC1yYWRpby1ncm91cCBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiICpuZ0Zvcj1cImxldCBlbiBvZiB0aGlzLnNjaGVtYS5lbnVtOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgPG1hdC1yYWRpby1idXR0b25cclxuICAgICAgICAgIFtjaGVja2VkXT1cImNvbnRyb2wudmFsdWUgPT09IGVuLnRvU3RyaW5nKClcIlxyXG4gICAgICAgICAgW3ZhbHVlXT1cImVuLnRvU3RyaW5nKClcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7e2VudW1OYW1lcyhpKX19XHJcbiAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICA8L21hdC1yYWRpby1ncm91cD5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFJhZGlvZ3JvdXBNYXRlcmlhbENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bGFiZWwgW2F0dHIuY2xhc3NdPVwic2NoZW1hLmtleVwiIFtuZ0NsYXNzXT1cIntyZXF1aXJlZDogaXNSZXF1aXJlZCgpfVwiPlxyXG4gICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cInRpdGxlKHRydWUpXCI+PC9zcGFuPlxyXG4gICAgPC9sYWJlbD5cclxuICAgIDxkaXYgKm5nSWY9XCJwcmV2aWV3U3JjRXhpc3RzKCk7IGVsc2UgYWRkSW1hZ2VcIiBjbGFzcz1cInBob3RvLXByZXZpZXdcIj5cclxuICAgICAgPGFcclxuICAgICAgICBjbGFzcz1cInBob3RvLWFkZFwiXHJcbiAgICAgICAgbWF0LWJ1dHRvblxyXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtaW1hZ2VdPVwibWFrZVRydXN0ZWRJbWFnZShwaG90b0RhdGEpXCJcclxuICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1zaXplXT1cIidjb3ZlcidcIlxyXG4gICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLXJlcGVhdF09XCInbm8tcmVwZWF0J1wiXHJcbiAgICAgICAgKGNsaWNrKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBmaWxlSW5wdXQuY2xpY2soKTtcIlxyXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgID5cclxuICAgICAgICA8bWF0LWljb24+YWRkX2FfcGhvdG88L21hdC1pY29uPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgY2xhc3M9XCJwaG90by1yZW1vdmVcIlxyXG4gICAgICAgIG1hdC1taW5pLWZhYlxyXG4gICAgICAgIGNvbG9yPVwid2FyblwiXHJcbiAgICAgICAgKGNsaWNrKT1cImNsZWFyUGhvdG8oKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8bWF0LWljb24+Y2xvc2U8L21hdC1pY29uPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxuZy10ZW1wbGF0ZSAjYWRkSW1hZ2U+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgY2xhc3M9XCJwaG90by1hZGRcIlxyXG4gICAgICAgIG1hdC1idXR0b25cclxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgIChjbGljayk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKTsgZmlsZUlucHV0LmNsaWNrKCk7XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxtYXQtaWNvbj5hZGRfYV9waG90bzwvbWF0LWljb24+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8aW5wdXQgI2ZpbGVJbnB1dCB0eXBlPVwiZmlsZVwiIFtuYW1lXT1cInNjaGVtYS5rZXlcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIi8+XHJcbiAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIFtuYW1lXT1cInNjaGVtYS5rZXlcIiBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiLz5cclxuICAgIDxkaXYgY2xhc3M9XCJtYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlclwiICpuZ0lmPVwiZXJyb3JcIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTtcIj5cclxuICAgICAgPG1hdC1lcnJvciBjbGFzcz1cIm1hdC1lcnJvclwiPlBsZWFzZSB1cGxvYWQgYSB2YWxpZCBwaG90byBmb3JtYXQgKEpQRywgUE5HKTwvbWF0LWVycm9yPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8amYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvamYtZXJyb3I+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaG90b01hdGVyaWFsQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHtcclxuICBwaG90b0RhdGE6IHN0cmluZztcclxuICBlcnJvciA9IGZhbHNlO1xyXG5cclxuICBvbkNoYW5nZShldmVudCkge1xyXG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9jZXNzRmlsZShyZWFkZXIucmVzdWx0LCBmaWxlLnR5cGUpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMucGhvdG9EYXRhID0gZGF0YS50b1N0cmluZygpO1xyXG4gICAgICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHRoaXMucGhvdG9EYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodHlwZW9mKGZpbGUpICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZpZXdTcmNFeGlzdHMoKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mICh0aGlzLnBob3RvRGF0YSkgPT09ICdzdHJpbmcnO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJQaG90bygpIHtcclxuICAgIHRoaXMucGhvdG9EYXRhID0gbnVsbDtcclxuICAgIHRoaXMuY29udHJvbC5yZXNldCgpO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc0ZpbGUoZGF0YVVSTCwgZmlsZVR5cGUpIHtcclxuICAgIGNvbnN0IG1heFdpZHRoID0gMTAyNDtcclxuICAgIGNvbnN0IG1heEhlaWdodCA9IDEwMjQ7XHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLnNyYyA9IGRhdGFVUkw7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gaW1hZ2Uud2lkdGg7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IHNob3VsZFJlc2l6ZSA9ICh3aWR0aCA+IG1heFdpZHRoKSB8fCAoaGVpZ2h0ID4gbWF4SGVpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYgKCFzaG91bGRSZXNpemUpIHtcclxuICAgICAgICAgIHJlc29sdmUoZGF0YVVSTCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbmV3V2lkdGg7XHJcbiAgICAgICAgbGV0IG5ld0hlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKHdpZHRoID4gaGVpZ2h0KSB7XHJcbiAgICAgICAgICBuZXdIZWlnaHQgPSBoZWlnaHQgKiAobWF4V2lkdGggLyB3aWR0aCk7XHJcbiAgICAgICAgICBuZXdXaWR0aCA9IG1heFdpZHRoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXdXaWR0aCA9IHdpZHRoICogKG1heEhlaWdodCAvIGhlaWdodCk7XHJcbiAgICAgICAgICBuZXdIZWlnaHQgPSBtYXhIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBuZXdXaWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gbmV3SGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgbmV3V2lkdGgsIG5ld0hlaWdodCk7XHJcblxyXG4gICAgICAgIHJlc29sdmUoY2FudmFzLnRvRGF0YVVSTChmaWxlVHlwZSkpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgaW1hZ2Uub25lcnJvciA9IChlcnIpID0+IHJlamVjdChlcnIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgbWF0SW5wdXRcclxuICAgICAgICBbbmFtZV09XCJzY2hlbWEua2V5XCJcclxuICAgICAgICBbYXR0ci50eXBlXT1cIidudW1iZXInXCJcclxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiXHJcbiAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIoKVwiXHJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInRpdGxlKHRydWUpXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAvPlxyXG4gICAgICA8bWF0LWVycm9yIGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L21hdC1lcnJvcj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnVtYmVyTWF0ZXJpYWxDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxtYXQtZm9ybS1maWVsZD5cclxuICAgIDxtYXQtc2VsZWN0XHJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcclxuICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBtdWx0aXBsZT5cclxuICAgICAgPG1hdC1vcHRpb25cclxuICAgICAgICAqbmdGb3I9XCJsZXQgZW4gb2Ygc2NoZW1hLmVudW07IGxldCBpID0gaW5kZXhcIlxyXG4gICAgICAgIFt2YWx1ZV09XCJlblwiPlxyXG4gICAgICAgIHt7ZW51bU5hbWVzKGkpfX1cclxuICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgPG1hdC1lcnJvciBqZi1lcnJvciBbY29udHJvbF09XCJjb250cm9sXCI+PC9tYXQtZXJyb3I+XHJcbiAgPC9tYXQtZm9ybS1maWVsZD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNdWx0aXNlbGVjdE1hdGVyaWFsQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHtcclxuICBlbnVtTmFtZXMoaW5kZXgpIHtcclxuICAgIHJldHVybiB0eXBlb2YodGhpcy5zY2hlbWEuZW51bU5hbWVzKSA9PT0gJ3VuZGVmaW5lZCdcclxuICAgICAgPyB0aGlzLnNjaGVtYS5lbnVtW2luZGV4XVxyXG4gICAgICA6IHRoaXMuc2NoZW1hLmVudW1OYW1lc1tpbmRleF07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1jaGVja2JveFxyXG4gICAgKm5nRm9yPVwibGV0IGNoaWxkIG9mIHRoaXMuY29udHJvbFsnY29udHJvbHMnXTsgbGV0IGkgPSBpbmRleFwiXHJcbiAgICBbYXR0ci5pZF09XCJnZXRJZChpLCBzY2hlbWEuZW51bVtpXSlcIlxyXG4gICAgW2NoZWNrZWRdPVwiY2hpbGQudmFsdWUgPT09IHNjaGVtYS5lbnVtW2ldXCJcclxuICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxyXG4gICAgW2Zvcm1Db250cm9sXT1cImNoaWxkXCJcclxuICAgIChjaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50LCBpKVwiXHJcbiAgICBbdmFsdWVdPVwic2NoZW1hLmVudW1baV1cIlxyXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgID5cclxuICAgICAgICB7e2VudW1OYW1lcyhpKX19XHJcbiAgICA8L21hdC1jaGVja2JveD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveGdyb3VwTWF0ZXJpYWxDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xyXG4gIGNoZWNrYm94R3JvdXBWYWx1ZXMgPSBbXTtcclxuICByYW5kb21TdWZmaXggPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XHJcblxyXG4gIHNldFZhbHVlKGV2ZW50LCBpbmRleCkge1xyXG4gICAgaWYgKHRoaXMuY2hlY2tib3hHcm91cFZhbHVlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5jaGVja2JveEdyb3VwVmFsdWVzID0gbmV3IEFycmF5KHRoaXMuY29udHJvbFsnY29udHJvbHMnXS5sZW5ndGgpLmZpbGwobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY2hlY2tib3hHcm91cFZhbHVlc1tpbmRleF0gPT09IG51bGwpIHtcclxuICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gdGhpcy5zY2hlbWEuZW51bVtpbmRleF07XHJcbiAgICAgIHRoaXMuY2hlY2tib3hHcm91cFZhbHVlc1tpbmRleF0gPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNoZWNrYm94R3JvdXBWYWx1ZXNbaW5kZXhdID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodGhpcy5jaGVja2JveEdyb3VwVmFsdWVzKTtcclxuICB9XHJcblxyXG4gIGdldElkKGksIHZhbCkge1xyXG4gICAgcmV0dXJuIGAke2l9LSR7dmFsLnJlcGxhY2UoL1tcXFdfXSsvZywgJycpfSske3RoaXMucmFuZG9tU3VmZml4fWA7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInNsaWRlLWNvbnRhaW5lclwiPlxyXG4gICAgICA8bWF0LXNsaWRlLXRvZ2dsZVxyXG4gICAgICBbaWRdPVwic2NoZW1hLmtleVwiXHJcbiAgICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxyXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiPnt7dGl0bGUodHJ1ZSl9fTwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L2pmLWVycm9yPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEJvb2xlYW5NYXRlcmlhbENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7fVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRlQWRhcHRlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgTW9tZW50VXRjRGF0ZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tb21lbnQtdXRjLWFkYXB0ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1lZGlhTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xyXG5cclxuY29uc3QgTVlfRk9STUFUUyA9IHtcclxuICBwYXJzZToge1xyXG4gICAgZGF0ZUlucHV0OiAnTEwnLFxyXG4gIH0sXHJcbiAgZGlzcGxheToge1xyXG4gICAgZGF0ZUlucHV0OiAnTEwnLFxyXG4gICAgbW9udGhZZWFyTGFiZWw6ICdNTU0gWVlZWScsXHJcbiAgICBkYXRlQTExeUxhYmVsOiAnTEwnLFxyXG4gICAgbW9udGhZZWFyQTExeUxhYmVsOiAnTU1NTSBZWVlZJyxcclxuICB9LFxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgbWF0SW5wdXRcclxuICAgICAgICBbbWF0RGF0ZXBpY2tlcl09J215RGF0ZXBpY2tlcidcclxuICAgICAgICAoY2xpY2spPVwibXlEYXRlcGlja2VyLm9wZW4oKVwiXHJcbiAgICAgICAgW2Zvcm1Db250cm9sXT0nY29udHJvbCdcclxuICAgICAgICBbcGxhY2Vob2xkZXJdPSd0aXRsZSh0cnVlKSdcclxuICAgICAgICBbbWluXT1cIm1pbkRhdGUoKVwiXHJcbiAgICAgICAgW21heF09XCJtYXhEYXRlKClcIlxyXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgID5cclxuICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09J215RGF0ZXBpY2tlcic+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XHJcbiAgICAgIDxtYXQtZGF0ZXBpY2tlciAjbXlEYXRlcGlja2VyIFt0b3VjaFVpXT1cImlzTW9iaWxlKClcIj48L21hdC1kYXRlcGlja2VyPlxyXG4gICAgICA8bWF0LWVycm9yIGpmLWVycm9yIFtjb250cm9sXT0nY29udHJvbCc+PC9tYXQtZXJyb3I+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IERhdGVBZGFwdGVyLFxyXG4gICAgICB1c2VDbGFzczogTW9tZW50VXRjRGF0ZUFkYXB0ZXJcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlTWF0ZXJpYWxDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xyXG4gIGlzTW9iaWxlKCkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIDw9IDgwMDtcclxuICB9XHJcblxyXG4gIG1pbkRhdGUoKSB7XHJcbiAgICByZXR1cm4gaXNOYU4obmV3IERhdGUodGhpcy5zY2hlbWEubWluaW11bSkuZ2V0RGF0ZSgpKSA/IG51bGwgOiBuZXcgRGF0ZSh0aGlzLnNjaGVtYS5taW5pbXVtKTtcclxuICB9XHJcblxyXG4gIG1heERhdGUoKSB7XHJcbiAgICByZXR1cm4gaXNOYU4obmV3IERhdGUodGhpcy5zY2hlbWEubWF4aW11bSkuZ2V0RGF0ZSgpKSA/IG51bGwgOiBuZXcgRGF0ZSh0aGlzLnNjaGVtYS5tYXhpbXVtKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtCdXR0b25Db21wb25lbnR9IGZyb20gJy4vYnV0dG9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2pmLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxidXR0b25cclxuICAgICAgbWF0LXJhaXNlZC1idXR0b25cclxuICAgICAgW2NvbG9yXT1cImNvbG9yXCJcclxuICAgICAgKm5nSWY9XCJpc1Zpc2libGVcIlxyXG4gICAgICBbdHlwZV09XCJ0eXBlXCJcclxuICAgICAgW25nQ2xhc3NdPVwiY2xhc3NcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAoY2xpY2spPVwiaGFuZGxlQ2xpY2soJGV2ZW50KVwiPlxyXG4gICAgICB7e2xhYmVsfX1cclxuICAgIDwvYnV0dG9uPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbk1hdGVyaWFsQ29tcG9uZW50IGV4dGVuZHMgQnV0dG9uQ29tcG9uZW50IHt9XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFycmF5Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZnJhbWV3b3JrL3NoYXJlZC9jb21wb25lbnRzL2FycmF5L2FycmF5LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG1hdC1jYXJkIFtuZ0NsYXNzXT1cIlsnb2JqZWN0JywgY29udHJvbC5zY2hlbWEua2V5XVwiPlxyXG4gICAgICA8aDYgKm5nSWY9XCJnZXRMZWdlbmQoY29udHJvbCkubGVuZ3RoXCI+e3tnZXRMZWdlbmQoY29udHJvbCl9fTwvaDY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhcnJheS1pdGVtc1wiPlxyXG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGFyckNvbnRyb2wgb2YgZ2V0RW5hYmxlZENvbnRyb2xzKGNvbnRyb2wpOyBsZXQgaSA9IGluZGV4O1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGpmLWNvbXBvbmVudC1jaG9vc2VyIFtmb3JtXT1cImFyckNvbnRyb2xcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG1hdC1idXR0b25cclxuICAgICAgICAgICAgICAqbmdJZj1cImNvbnRyb2wuY29udHJvbHMubGVuZ3RoID4gMVwiXHJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpOyByZW1vdmVDb250cm9sKGNvbnRyb2wsIGkpXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cIndhcm5cIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwicmVtb3ZlXCJcclxuICAgICAgICAgICAgPlJlbW92ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKTsgYWRkQ29udHJvbChjb250cm9sKVwiPkFkZDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFycmF5TWF0ZXJpYWxDb21wb25lbnQgZXh0ZW5kcyBBcnJheUNvbXBvbmVudCB7fVxyXG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1N0cmluZ01hdGVyaWFsQ29tcG9uZW50fSBmcm9tICcuLi8uLi9maWVsZHMvc3RyaW5nL3N0cmluZy5tYXRlcmlhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0pzb25Gb3JtRmllbGRzU2VydmljZX0gZnJvbSAnLi4vanNvbi1mb3JtLWZpZWxkcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGV4dGFyZWFNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy90ZXh0YXJlYS90ZXh0YXJlYS5tYXRlcmlhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWxlY3RNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9zZWxlY3Qvc2VsZWN0Lm1hdGVyaWFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJhZGlvZ3JvdXBNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9yYWRpb2dyb3VwL3JhZGlvZ3JvdXAubWF0ZXJpYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGhvdG9NYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9waG90by9waG90by5tYXRlcmlhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOdW1iZXJNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9udW1iZXIvbnVtYmVyLm1hdGVyaWFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE11bHRpc2VsZWN0TWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3QubWF0ZXJpYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hlY2tib3hncm91cE1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2NoZWNrYm94Z3JvdXAvY2hlY2tib3hncm91cC5tYXRlcmlhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCb29sZWFuTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvYm9vbGVhbi9ib29sZWFuLm1hdGVyaWFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGVNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9kYXRlL2RhdGUubWF0ZXJpYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtCdXR0b25NYXRlcmlhbENvbXBvbmVudH0gZnJvbSAnLi4vLi4vZmllbGRzL2J1dHRvbi9idXR0b24ubWF0ZXJpYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9uZXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbW9uZXkvbW9uZXkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT2JqZWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmVkL2NvbXBvbmVudHMvb2JqZWN0L29iamVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcnJheU1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2FycmF5L2FycmF5Lm1hdGVyaWFsLmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBKc29uRm9ybU1hdGVyaWFsIGV4dGVuZHMgSnNvbkZvcm1GaWVsZHNTZXJ2aWNlIHtcclxuICBmaWVsZFR5cGVzID0ge1xyXG4gICAgc3RyaW5nOiBTdHJpbmdNYXRlcmlhbENvbXBvbmVudCxcclxuICAgIHNlbGVjdDogU2VsZWN0TWF0ZXJpYWxDb21wb25lbnQsXHJcbiAgICBudW1iZXI6IE51bWJlck1hdGVyaWFsQ29tcG9uZW50LFxyXG4gICAgYm9vbGVhbjogQm9vbGVhbk1hdGVyaWFsQ29tcG9uZW50LFxyXG4gICAgcGhvdG86IFBob3RvTWF0ZXJpYWxDb21wb25lbnQsXHJcbiAgICB0ZXh0YXJlYTogVGV4dGFyZWFNYXRlcmlhbENvbXBvbmVudCxcclxuICAgIG9iamVjdDogT2JqZWN0Q29tcG9uZW50LFxyXG4gICAgYXJyYXk6IEFycmF5TWF0ZXJpYWxDb21wb25lbnQsXHJcbiAgICBkYXRlOiBEYXRlTWF0ZXJpYWxDb21wb25lbnQsXHJcbiAgICByYWRpb2dyb3VwOiBSYWRpb2dyb3VwTWF0ZXJpYWxDb21wb25lbnQsXHJcbiAgICBjaGVja2JveGdyb3VwOiBDaGVja2JveGdyb3VwTWF0ZXJpYWxDb21wb25lbnQsXHJcbiAgICBtdWx0aXNlbGVjdDogTXVsdGlzZWxlY3RNYXRlcmlhbENvbXBvbmVudCxcclxuICAgIG1vbmV5OiBNb25leUNvbXBvbmVudCxcclxuICAgIGJ1dHRvbjogQnV0dG9uTWF0ZXJpYWxDb21wb25lbnRcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnamYtZXJyb3IsIFtqZi1lcnJvcl0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5pbnZhbGlkICYmIChjb250cm9sLmRpcnR5IHx8IGNvbnRyb2wudG91Y2hlZClcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzWydyZXF1aXJlZCddXCI+XHJcbiAgICAgICAgVGhpcyBmaWVsZCBpcyByZXF1aXJlZC5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1sncGF0dGVybiddXCI+XHJcbiAgICAgICAgSW5wdXQgdmFsdWUgaXMgaW52YWxpZC5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1snZW1haWwnXVwiPlxyXG4gICAgICAgIEVtYWlsIGlzIGludmFsaWQuXHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ21pbmxlbmd0aCddXCI+XHJcbiAgICAgICAgSW5wdXQgaGFzIHRvIGJlIGEgbWluaW11bSBvZiB7e2NvbnRyb2wuZXJyb3JzWydtaW5sZW5ndGgnXVsncmVxdWlyZWRMZW5ndGgnXX19IGNoYXJhY3RlcnMuXHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ21heGxlbmd0aCddXCI+XHJcbiAgICAgICAgSW5wdXQgY2FuIGNvbnRhaW4gYSBtYXhpbXVtIG9mIHt7Y29udHJvbC5lcnJvcnNbJ21heGxlbmd0aCddWydyZXF1aXJlZExlbmd0aCddfX0gY2hhcmFjdGVycy5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1snbWluJ11cIj5cclxuICAgICAgICBFbnRlciBhIHZhbHVlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB7e2NvbnRyb2wuZXJyb3JzWydtaW4nXVsnbWluJ119fS5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1snbWF4J11cIj5cclxuICAgICAgICBFbnRlciBhIHZhbHVlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB7e2NvbnRyb2wuZXJyb3JzWydtYXgnXVsnbWF4J119fS5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1snY3VzdG9tRXJyb3InXVwiPlxyXG4gICAgICAgIHt7Y29udHJvbC5lcnJvcnNbJ2N1c3RvbUVycm9yJ119fVxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEVycm9yTWF0ZXJpYWxDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGNvbnRyb2w7XHJcbn1cclxuIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgVGV4dE1hc2tNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi10ZXh0LW1hc2snO1xyXG5pbXBvcnQge1xyXG4gIE1hdEJ1dHRvbk1vZHVsZSxcclxuICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgTWF0U2VsZWN0TW9kdWxlLFxyXG4gIE1hdFJhZGlvTW9kdWxlLFxyXG4gIE1hdENoZWNrYm94TW9kdWxlLFxyXG4gIE1hdEljb25Nb2R1bGUsXHJcbiAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcbiAgTWF0RGF0ZXBpY2tlck1vZHVsZSwgTWF0TmF0aXZlRGF0ZU1vZHVsZSwgTWF0Q2FyZE1vZHVsZVxyXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgU3RyaW5nTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvc3RyaW5nL3N0cmluZy5tYXRlcmlhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBKc29uRm9ybU1hdGVyaWFsfSBmcm9tICcuL2pzb24tZm9ybS1tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEpzb25Gb3JtRmllbGRzU2VydmljZSB9IGZyb20gJy4uL2pzb24tZm9ybS1maWVsZHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFRleHRhcmVhTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvdGV4dGFyZWEvdGV4dGFyZWEubWF0ZXJpYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VsZWN0TWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvc2VsZWN0L3NlbGVjdC5tYXRlcmlhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSYWRpb2dyb3VwTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvcmFkaW9ncm91cC9yYWRpb2dyb3VwLm1hdGVyaWFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBob3RvTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvcGhvdG8vcGhvdG8ubWF0ZXJpYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hlY2tib3hncm91cE1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2NoZWNrYm94Z3JvdXAvY2hlY2tib3hncm91cC5tYXRlcmlhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOdW1iZXJNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9udW1iZXIvbnVtYmVyLm1hdGVyaWFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE11bHRpc2VsZWN0TWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3QubWF0ZXJpYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQm9vbGVhbk1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2Jvb2xlYW4vYm9vbGVhbi5tYXRlcmlhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRlTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvZGF0ZS9kYXRlLm1hdGVyaWFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVycm9yTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvZXJyb3IvZXJyb3IubWF0ZXJpYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnV0dG9uTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvYnV0dG9uL2J1dHRvbi5tYXRlcmlhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGV9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgQXJyYXlNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9hcnJheS9hcnJheS5tYXRlcmlhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRNb21lbnREYXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtbW9tZW50LWFkYXB0ZXInO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgVGV4dE1hc2tNb2R1bGUsXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgIE1hdFNlbGVjdE1vZHVsZSxcclxuICAgIE1hdFJhZGlvTW9kdWxlLFxyXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXHJcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxyXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuICAgIE1hdENhcmRNb2R1bGUsXHJcbiAgICBNYXRNb21lbnREYXRlTW9kdWxlLFxyXG4gICAgU2hhcmVkTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFN0cmluZ01hdGVyaWFsQ29tcG9uZW50LFxyXG4gICAgVGV4dGFyZWFNYXRlcmlhbENvbXBvbmVudCxcclxuICAgIFNlbGVjdE1hdGVyaWFsQ29tcG9uZW50LFxyXG4gICAgUmFkaW9ncm91cE1hdGVyaWFsQ29tcG9uZW50LFxyXG4gICAgUGhvdG9NYXRlcmlhbENvbXBvbmVudCxcclxuICAgIE51bWJlck1hdGVyaWFsQ29tcG9uZW50LFxyXG4gICAgTXVsdGlzZWxlY3RNYXRlcmlhbENvbXBvbmVudCxcclxuICAgIENoZWNrYm94Z3JvdXBNYXRlcmlhbENvbXBvbmVudCxcclxuICAgIEJvb2xlYW5NYXRlcmlhbENvbXBvbmVudCxcclxuICAgIERhdGVNYXRlcmlhbENvbXBvbmVudCxcclxuICAgIEVycm9yTWF0ZXJpYWxDb21wb25lbnQsXHJcbiAgICBCdXR0b25NYXRlcmlhbENvbXBvbmVudCxcclxuICAgIEFycmF5TWF0ZXJpYWxDb21wb25lbnRcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgU3RyaW5nTWF0ZXJpYWxDb21wb25lbnQsXHJcbiAgICBUZXh0YXJlYU1hdGVyaWFsQ29tcG9uZW50LFxyXG4gICAgU2VsZWN0TWF0ZXJpYWxDb21wb25lbnQsXHJcbiAgICBSYWRpb2dyb3VwTWF0ZXJpYWxDb21wb25lbnQsXHJcbiAgICBQaG90b01hdGVyaWFsQ29tcG9uZW50LFxyXG4gICAgTnVtYmVyTWF0ZXJpYWxDb21wb25lbnQsXHJcbiAgICBNdWx0aXNlbGVjdE1hdGVyaWFsQ29tcG9uZW50LFxyXG4gICAgQ2hlY2tib3hncm91cE1hdGVyaWFsQ29tcG9uZW50LFxyXG4gICAgQm9vbGVhbk1hdGVyaWFsQ29tcG9uZW50LFxyXG4gICAgRGF0ZU1hdGVyaWFsQ29tcG9uZW50LFxyXG4gICAgRXJyb3JNYXRlcmlhbENvbXBvbmVudCxcclxuICAgIEJ1dHRvbk1hdGVyaWFsQ29tcG9uZW50LFxyXG4gICAgQXJyYXlNYXRlcmlhbENvbXBvbmVudFxyXG4gIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBKc29uRm9ybU1hdGVyaWFsTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBKc29uRm9ybU1hdGVyaWFsTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBKc29uRm9ybUZpZWxkc1NlcnZpY2UsXHJcbiAgICAgICAgICB1c2VDbGFzczogSnNvbkZvcm1NYXRlcmlhbCxcclxuICAgICAgICAgIG11bHRpOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJtb21lbnQudXRjIiwiXy5nZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU8wQ0Esd0NBQWlCO0lBRXpELDhCQUFpRCxVQUFrQjtlQUNqRSxrQkFBTSxVQUFVLENBQUM7S0FDbEI7Ozs7Ozs7SUFFRCx5Q0FBVTs7Ozs7O0lBQVYsVUFBVyxJQUFZLEVBQUUsS0FBYSxFQUFFLElBQVk7OztRQUdsRCxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRTtZQUMzQixNQUFNLEtBQUssQ0FBQywyQkFBd0IsS0FBSyxnREFBNEMsQ0FBQyxDQUFDO1NBQ3hGO1FBRUQsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1osTUFBTSxLQUFLLENBQUMsb0JBQWlCLElBQUksdUNBQW1DLENBQUMsQ0FBQztTQUN2RTs7WUFFSyxNQUFNLEdBQUdDLEdBQVUs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

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

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

module.exports = ".main-container{\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.header{\r\n  width: 100%;\r\n  height: 80px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  background-color: #e18c15;\r\n}\r\n\r\n.logo{\r\n  display: flex;\r\n  height: 100%;\r\n  align-items: center;\r\n  padding: 10px;\r\n}\r\n\r\n.logo img{\r\n  width: auto;\r\n  height: 60px;\r\n}\r\n\r\n.right-side{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 8%;\r\n  font-size: 20px;\r\n  height: 100%;\r\n  align-items: center;\r\n  margin: 0 20px;\r\n}\r\n\r\n.right-side p{\r\n  margin: 0;\r\n  color: #FFF;\r\n}\r\n\r\n.right-side i{\r\n  color: #FFF;\r\n  font-size: 35px;\r\n}\r\n\r\n.content, .intro{\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.intro img{\r\n  max-width: 300px;\r\n  margin: 50px 0;\r\n}\r\n\r\n.intro h4{\r\n  font-weight: bold;\r\n  color: #404040;\r\n  font-size: 2em;\r\n}\r\n\r\n.intro h1{\r\n  text-transform: uppercase;\r\n}\r\n\r\n.action-btns{\r\n  display: flex;\r\n  width: 35%;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n.action-btns .btn{\r\n  min-width: 150px;\r\n  background-color: #e08d33;\r\n  color: #FFF;\r\n  text-transform: uppercase;\r\n  border-radius: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-json-schema-examples></app-json-schema-examples>\r\n"

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

module.exports = "textarea.has-danger {\r\n  border: solid 1px #f4516c !important;\r\n}\r\n\r\n.form-builder a.has-danger:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n.form-builder form,\r\n.form-builder form div {\r\n  height: 95%;\r\n}\r\n\r\n.form-builder > .col-md-6 textarea {\r\n  width: 95%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/json-schema-examples/json-schema-examples.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/json-schema-examples/json-schema-examples.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <br />\r\n  <div class=\"row form-builder\">\r\n    <div class=\"col-md-6\">\r\n      <h6>Schema Samples:</h6>\r\n      <div class=\"form-group\">\r\n        <select style=\"float:left;\" class=\"form-control\" (change)=\"handleSchemaUpdate($event.target.value)\">\r\n          <option *ngFor=\"let schema of getSchemaSamples()\" [value]=\"schema\">\r\n            {{jsonSchemaExamplesSamples.json[schema].title}}\r\n          </option>\r\n        </select>\r\n        <select style=\"float:left; margin-left: 10px;\" class=\"form-control\" (change)=\"handleFrameworkUpdate($event.target.value)\" >\r\n          <option value=\"material\">Material Design</option>\r\n          <option value=\"bootstrap\">Bootstrap 4</option>\r\n        </select>\r\n        <div style=\"clear:both;\"></div>\r\n      </div>\r\n      <h6>JSON Schema:\r\n        <span class=\"text-danger\" *ngIf=\"(schemaControl.touched || schemaControl.dirty) && schemaControl.invalid\">\r\n          {{schemaControl.errors['invalidJSON']}}\r\n        </span>\r\n        <a href=\"javascript:void(0)\" class=\"text-danger\"\r\n           *ngIf=\"(schemaControl.touched || schemaControl.dirty) && schemaControl.invalid\"\r\n           (click)=\"goToError(schemaControl.errors['invalidJSON'])\">\r\n          <i class=\"fa fa-exclamation-triangle\"></i>\r\n        </a>\r\n      </h6>\r\n      <form [formGroup]=\"form\">\r\n        <div class=\"form-group\" [ngClass]=\"{\r\n          'has-danger': schemaControl.invalid && (schemaControl.dirty || schemaControl.touched)\r\n          }\">\r\n          <textarea class=\"form-control schema\" style=\"height: 100%\" [formControl]=\"schemaControl\" (keyup)=\"handleSchemaUpdate()\"\r\n                    (keydown.Enter)=\"onEnterKey($event)\" (keydown.Tab)=\"onTabKey($event)\" #jsonSchema\r\n                    [ngClass]=\"{\r\n              'has-danger': schemaControl.invalid && (schemaControl.dirty || schemaControl.touched)\r\n            }\"></textarea>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <h6>Form:</h6>\r\n      <jf-form\r\n        #jfForm\r\n        [id]=\"'exampleform'\"\r\n        [cancel]=\"cancel\"\r\n        [submit]=\"'Submit'\"\r\n        [schema]=\"schema\"\r\n        [isMultiStep]=\"isMultiStep\"\r\n        [state]=\"state\"\r\n        [fields]=\"fields\"\r\n        [viewOnly]=\"viewOnly\"\r\n        [data]=\"data\"\r\n        (handleCancel)=\"handleCancel($event)\"\r\n        (handleChange)=\"handleChange($event)\"\r\n        (handleSubmit)=\"handleSubmit($event)\">\r\n      </jf-form>\r\n\r\n      <jf-form\r\n        *ngIf=\"this.selectedSchema === 'multiple_forms'\"\r\n        [id]=\"'exampleform'\"\r\n        [cancel]=\"cancel\"\r\n        [submit]=\"'Submit'\"\r\n        [schema]=\"schema\"\r\n        [isMultiStep]=\"isMultiStep\"\r\n        [state]=\"state\"\r\n        [fields]=\"fields\"\r\n        (handleSubmit)=\"handleSubmit($event)\">\r\n      </jf-form>\r\n      <p></p>\r\n      <h6 *ngIf=\"!this.viewOnly\">Data: (click Submit to preview form data)</h6>\r\n      <h6 *ngIf=\"this.viewOnly\">Data: <pre>{{formattedData(data)}}</pre></h6>\r\n      <pre *ngIf=\"!this.viewOnly\" #formResponse>&#123;&#125;</pre>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
                    },
                    do_not_contact: {
                        type: 'boolean'
                    }
                },
                required: ['year', 'effective_date']
            },
            photo_example: {
                title: 'Photo example',
                description: 'Photos are common to forms',
                type: 'object',
                properties: {
                    test_photo: {
                        type: 'string',
                        format: 'photo'
                    }
                },
                required: ['test_photo']
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
                description: 'Form composed of nested allSchemaTitles and displayed as steps',
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
                description: 'Form composed of nested allSchemaTitles and displayed as steps that can go back',
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
                description: 'Form composed of nested allSchemaTitles and displayed as steps that can go back with state preserved',
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
                    meal: {
                        type: 'object',
                        properties: {
                            food_like: {
                                type: 'string',
                                enum: [
                                    'Hot Dog',
                                    'Pizza',
                                    'Hamburger'
                                ]
                            },
                            drink: {
                                type: 'string',
                                enum: [
                                    'Pepsi',
                                    'Coke',
                                    'Sprite'
                                ]
                            }
                        },
                        oneOf: [
                            {
                                properties: {
                                    'food_like': {
                                        enum: [
                                            'Hamburger'
                                        ]
                                    }
                                },
                                required: [
                                    'drink'
                                ]
                            },
                            {
                                properties: {
                                    'food_like': {
                                        enum: [
                                            'Pizza'
                                        ]
                                    }
                                }
                            },
                            {
                                properties: {
                                    'food_like': {
                                        enum: [
                                            'Hot Dog'
                                        ]
                                    }
                                }
                            },
                        ]
                    }
                }
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
                                enum: ['Pizza']
                            }
                        },
                        required: ['pizza_type']
                    },
                    {
                        properties: {
                            food_like: {
                                enum: ['Hamburger']
                            }
                        },
                        required: ['hamburger_meat']
                    },
                    {
                        properties: {
                            food_like: {
                                enum: ['Hot Dog']
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

module.exports = __webpack_require__(/*! D:\workspace\ngx-tru-forms\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
