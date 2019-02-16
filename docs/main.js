(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-tru-forms/fesm5/trufla-ngx-tru-forms.js":
/*!**********************************************************!*\
  !*** ./dist/ngx-tru-forms/fesm5/trufla-ngx-tru-forms.js ***!
  \**********************************************************/
/*! exports provided: JsonFormFieldsService, JsonFormModule, JsonFormBootstrap4Module, JsonFormMaterialModule, JsonFormComponent, JsonFormDefaultsService, JsonFormMaterial, JsonFormBootstrap4, JsonFormValidatorsService, CommonComponent, ɵbs, ɵba, ɵbo, ɵi, ɵbb, ɵbr, ɵbc, ɵbn, ɵn, ɵv, ɵbp, ɵl, ɵx, ɵbq, ɵy, ɵp, ɵbd, ɵbm, ɵo, ɵz, ɵbl, ɵh, ɵbe, ɵbk, ɵj, ɵbf, ɵbj, ɵm, ɵu, ɵbi, ɵg, ɵt, ɵbg, ɵf, ɵw, ɵbh, ɵk, ɵr, ɵs, ɵb, ɵc, ɵd, ɵe, ɵq, ɵa */
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! text-mask-addons/dist/createNumberMask */ "./node_modules/text-mask-addons/dist/createNumberMask.js");
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
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
     * @param {?=} material
     * @return {?}
     */
    CommonComponent.prototype.title = /**
     * @param {?=} material
     * @return {?}
     */
    function (material) {
        if (material === void 0) { material = false; }
        var /** @type {?} */ required = this.isRequired() && material ? '*' : '';
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
        return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["startCase"])(str);
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
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
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
                    template: "\n  <p><span>{{placeholder()}}</span> <span>{{control.value}}</span></p>\n  "
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
    SelectViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <p><span>{{placeholder()}}</span> <span>{{control.value}}</span></p>\n  "
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
                    template: "\n    <p><span>{{placeholder()}}</span> <span>{{control.value}}</span></p>\n  "
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
                    template: "\n  <p><span>{{placeholder()}}</span> <span>{{control.value}}</span></p>\n  "
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
                    template: "\n    <p>{{placeholder()}}</p>\n    <img src=\"{{control.value}}\" class=\"img-thumbnail\" />\n  "
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
                    template: "\n  <p><span>{{placeholder()}}</span> <span>{{control.value}}</span></p>\n  "
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
                    template: "\n  <p><span>{{placeholder()}}</span> <span>{{control.value}}</span></p>\n  "
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
                    template: "\n  <p><span>{{placeholder()}}</span> <span>{{control.value}}</span></p>\n  "
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
                    template: "\n    <p>{{placeholder()}}</p>\n    <ul *ngFor=\"let selected of control.value\">\n      <li>{{selected}}</li>\n    </ul>\n  "
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
                    template: "\n    <p>{{placeholder()}}</p>\n    <ul *ngFor=\"let selected of control.value\">\n      <li>{{selected}}</li>\n    </ul>\n  "
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
                    template: "\n  <p><span>{{placeholder()}}</span> <span>{{control.value}}</span></p>\n  "
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
    /** @nocollapse */
    ObjectComponent.propDecorators = {
        "control": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
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
        return (control && control.schema && control.schema.key) ? Object(lodash__WEBPACK_IMPORTED_MODULE_2__["startCase"])(control.schema.key) : '';
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
    /** @nocollapse */
    ArrayComponent.propDecorators = {
        "control": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
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
        var /** @type {?} */ dateValidator = function ageRangeValidator(control) {
            if (control.value === null || (control.value !== null && isNaN(new Date(control.value).getDate()))) {
                return { customError: 'Please enter a valid date.' };
            }
            return null;
        };
        var /** @type {?} */ required = schema.required || [];
        var /** @type {?} */ field = schema.properties[prop];
        var /** @type {?} */ varPath = [].concat(path, prop).join('.');
        if (schema.properties[prop].type === 'boolean' && required.indexOf(prop) > -1) {
            return _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].requiredTrue;
        }
        return _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose(this.validators.concat([
            (this.has(varPath) ? this.validators[varPath] : null),
            (required.indexOf(prop) > -1 ? _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required : null),
            (field.hasOwnProperty('minLength') ? _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(field.minLength) : null),
            (field.hasOwnProperty('maxLength') ? _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(field.maxLength) : null),
            (field.hasOwnProperty('format') && field.format === 'email' ? _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email : null),
            (field.hasOwnProperty('minimum') ? _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(field.minimum) : null),
            (field.hasOwnProperty('maximum') ? _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].max(field.maximum) : null),
            (field.format && field.format === 'date' ? dateValidator : null),
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
            if (_this.isOneOf(schema, prop, path)) {
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
        return schema.oneOf.filter(function (p) {
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(p, 'required', []).includes(key)) {
                var /** @type {?} */ parent_1 = Object.keys(p.properties)[0];
                var /** @type {?} */ dataPath = path.concat(parent_1).join('.');
                var /** @type {?} */ value = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(_this.data, dataPath, null);
                if (schema.properties[parent_1].type === 'boolean') {
                    value = String(value) === 'true'; // material preserves string & bootstrap doesn't
                }
                else if (schema.properties[parent_1].type === 'number') {
                    value = +value;
                }
                // when returns true it will not display field, otherwise it will
                return value === null || Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(p.properties[parent_1], 'enum', []).indexOf(value) === -1;
            }
            return false;
        }).length > 0;
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
        var _a;
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
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], },
        { type: JsonFormValidatorsService, },
        { type: JsonFormDefaultsService, },
        { type: JsonFormFieldsService, },
    ]; };
    JsonFormComponent.propDecorators = {
        "schema": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "data": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "style": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "continue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "submit": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "cancel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "submitClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "cancelClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "outerClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isWorking": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isMultiStep": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "activeStep": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "state": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fields": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "viewOnly": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "handleStep": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "handleSubmit": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "handleChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "handleCancel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "userForm": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['userForm',] },],
        "header": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['header',] },],
        "footer": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['footer',] },],
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <label [attr.class]=\"schema.key\" [ngClass]=\"{'margin-bottom--half': true, required: isRequired()}\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup></label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <div [class]=\"getClass('checkbox-group')\">\n      <div *ngFor=\"let child of this.control['controls']; let i = index\"\n           [ngClass]=\"{'checkbox-container': true, 'checked': child.value === schema.enum[i]}\">\n        <input\n          type=\"checkbox\"\n          [attr.id]=\"getId(schema.key, schema.enum[i])\"\n          [checked]=\"child.value === schema.enum[i]\"\n          [name]=\"schema.key\"\n          [formControl]=\"child\"\n          (change)=\"setValue($event, i)\"\n          [value]=\"schema.enum[i]\" />\n        <label\n          [attr.for]=\"getId(i, schema.enum[i])\"\n          [attr.class]=\"schema.key\">\n          {{enumNames(i)}}\n        </label>\n      </div>\n    </div>\n    <jf-error [control]=\"control\"></jf-error>\n  "
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
                    template: "\n    <label [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <button type=\"button\" *ngIf=\"schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <select\n      class=\"form-control\"\n      name=\"name\"\n      [formControl]=\"control\"\n      multiple=\"multiple\"\n    >\n      <option\n        *ngFor=\"let en of schema.enum; let i = index\"\n        [selected]=\"control.value === en\"\n        [ngValue]=\"en\">\n        {{enumNames(i)}}\n      </option>\n    </select>\n  "
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
                    template: "\n    <label\n      [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <textarea\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [formControl]=\"control\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.minLength]=\"schema.minLength || null\"\n      [attr.placeholder]=\"placeholder()\"\n    ></textarea>\n    <jf-error [control]=\"control\"></jf-error>\n  "
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
    SelectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <div class=\"select-container\">\n      <label\n        [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n        <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n      </label>\n      <button type=\"button\" *ngIf=\"schema.description\" [attr.class]=\"'info'\" [attr.title]=\"schema.description\">Info</button>\n      <select\n        class=\"form-control\"\n        [attr.name]=\"schema.key\"\n        [formControl]=\"control\"\n      >\n        <option value=\"\" [selected]=\"control.value === ''\" [disabled]=\"true\">\n          {{placeholder()}}\n        </option>\n        <option\n          *ngFor=\"let en of schema.enum; let i = index\"\n          [selected]=\"control.value === en\"\n          [ngValue]=\"en\">\n          {{enumNames(i)}}\n        </option>\n      </select>\n    </div>\n    <jf-error [control]=\"control\"></jf-error>\n  "
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
                    template: "\n    <div [class]=\"getClass('checkbox-group')\">\n      <div class=\"checkbox-container\">\n        <input\n          [id]=\"schema.key\"\n          [name]=\"schema.key\"\n          type=\"checkbox\"\n          [formControl]=\"control\"\n        />\n        <label [attr.for]=\"schema.key\" [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n          <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n        </label>\n      </div>\n    </div>\n    <jf-error [control]=\"control\"></jf-error>\n  "
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
                    template: "\n    <label [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\" *ngIf=\"type() !== 'hidden'\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <input\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [attr.type]=\"'number'\"\n      [formControl]=\"control\"\n      [attr.placeholder]=\"placeholder()\"\n    />\n    <jf-error [control]=\"control\"></jf-error>\n  "
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
                    template: "\n    <label [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <div *ngIf=\"previewSrcExists()\" class=\"photo-preview\">\n      <img [attr.src]=\"photoData\" />\n      <span href=\"#\" style=\"cursor: pointer;\" (click)=\"clearPhoto()\">\n        <i class=\"la la-close\"></i>\n      </span>\n    </div>\n    <div>\n      <input\n        *ngIf=\"!previewSrcExists()\"\n        type=\"file\"\n        (change)=\"onChange($event)\"\n      />\n      <input type=\"hidden\" [name]=\"schema.key\" [formControl]=\"control\" />\n    </div>\n    <div>\n      <jf-error [control]=\"control\"></jf-error>\n    </div>\n  "
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
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    RadiogroupComponent.prototype.getId = /**
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    function (key, val) {
        return key + "-" + val.toString();
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
                    template: "\n    <label\n      [ngClass]=\"['margin-bottom--half', 'jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup></label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <div [class]=\"getClass('radio-group')\">\n      <div *ngFor=\"let enum of this.schema.enum; let i = index\"\n           [ngClass]=\"{'radio-container': true, 'checked': control.value === enum}\">\n        <input\n          type=\"radio\"\n          [attr.id]=\"getId(schema.key, enum)\"\n          [checked]=\"control.value === enum\"\n          [name]=\"getName(schema.key)\"\n          [formControl]=\"control\"\n          [value]=\"enum\" />\n        <label\n          [attr.for]=\"getId(i, enum)\"\n          [attr.class]=\"schema.key\">\n           {{enumNames(i)}}\n        </label>\n      </div>\n    </div>\n    <jf-error [control]=\"control\"></jf-error>\n  "
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
                    template: "\n    <label\n      [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\" *ngIf=\"type() !== 'hidden'\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <input\n      class=\"form-control\"\n      [attr.name]=\"schema.key\"\n      [attr.type]=\"type()\"\n      [formControl]=\"control\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.minLength]=\"schema.minLength || null\"\n      [attr.placeholder]=\"placeholder()\"\n      [textMask]=\"{ mask: getMask() }\"\n    />\n    <jf-error [control]=\"control\"></jf-error>\n  "
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
                    template: "\n    <label [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <input\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [formControl]=\"control\"\n      [placeholder]=\"placeholder()\"\n      [bsConfig]=\"{ containerClass: 'theme-default', dateInputFormat: 'MM/DD/YYYY' }\"\n      bsDatepicker\n    />\n    <jf-error [control]=\"control\"></jf-error>\n  "
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
    /** @nocollapse */
    ButtonComponent.propDecorators = {
        "isVisible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "class": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isWorking": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "submit": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "label": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "color": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "handleButtonClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
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
                    template: "\n    <label [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <input\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [attr.type]=\"'text'\"\n      [formControl]=\"control\"\n      [placeholder]=\"placeholder()\"\n      [textMask]=\"{ mask: numberMask}\"\n      (input)=cleanMask($event.target.value)\n    />\n    <jf-error [control]=\"control\"></jf-error>\n  "
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
    /** @nocollapse */
    ChooserComponent.propDecorators = {
        "form": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "schema": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "nested": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
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
        { type: JsonFormFieldsService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    FieldComponent.propDecorators = {
        "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },] },],
        "control": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: JsonFormFieldsService, },
    ]; };
    FormButtonComponent.propDecorators = {
        "isFormValid": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "label": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isMultiStep": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "steps": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "submit": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "continue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "cancel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "submitClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "cancelClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isWorking": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "handleClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "button": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['button', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },] },],
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
    /** @nocollapse */
    InfoButtonComponent.propDecorators = {
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return InfoButtonComponent;
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
    /** @nocollapse */
    ErrorComponent.propDecorators = {
        "control": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
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
                    template: "\n    <mat-form-field>\n      <input\n        matInput\n        [attr.name]=\"schema.key\"\n        [attr.type]=\"type()\"\n        [formControl]=\"control\"\n        [attr.maxLength]=\"schema.maxLength || null\"\n        [attr.minLength]=\"schema.minLength || null\"\n        [attr.placeholder]=\"placeholder()\"\n        [textMask]=\"{ mask: getMask() }\"\n        [placeholder]=\"title(true)\"\n      />\n      <mat-error jf-error [control]=\"control\"></mat-error>\n    </mat-form-field>\n  "
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
                    template: "\n    <mat-form-field class=\"example-full-width\">\n      <textarea\n          matInput\n          [name]=\"schema.key\"\n          [formControl]=\"control\"\n          [attr.maxLength]=\"schema.maxLength || null\"\n          [attr.minLength]=\"schema.minLength || null\"\n          [attr.placeholder]=\"placeholder()\"\n          [placeholder]=\"title(true)\">\n      </textarea>\n      <mat-error jf-error [control]=\"control\"></mat-error>\n    </mat-form-field>\n  "
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
    SelectMaterialComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n\n  <mat-form-field>\n    <mat-select\n      class=\"form-control\"\n      [attr.name]=\"schema.key\"\n      [formControl]=\"control\"\n      placeholder=\"{{title(true)}}\"\n    >\n      <mat-option [disabled]=\"true\">\n          {{placeholder()}}\n      </mat-option>\n      <mat-option *ngFor=\"let en of this.schema.enum; let i = index\" [value]=\"en\">\n          {{enumNames(i)}}\n      </mat-option>\n    </mat-select>\n    <mat-error jf-error [control]=\"control\"></mat-error>\n  </mat-form-field>\n\n  "
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
                    template: "\n    <div>\n      <label [attr.class]=\"schema.key\" [ngClass]=\"{'margin-bottom--half': true, required: isRequired()}\">\n        <span [innerHTML]=\"title(true)\"></span><sup *ngIf=\"isRequired()\">*</sup></label>\n\n      <mat-radio-group [formControl]=\"control\" *ngFor=\"let enum of this.schema.enum; let i = index\">\n        <mat-radio-button\n          [checked]=\"control.value === enum.toString()\"\n          [value]=\"enum.toString()\"\n        >\n          {{enumNames(i)}}\n        </mat-radio-button>\n      </mat-radio-group>\n    </div>\n  "
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
        var /** @type {?} */ maxWidth = 1024;
        var /** @type {?} */ maxHeight = 1024;
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
                    template: "\n    <label [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n      <span [innerHTML]=\"title(true)\"></span>\n    </label>\n    <div *ngIf=\"previewSrcExists(); else addImage\" class=\"photo-preview\">\n      <button\n        class=\"photo-add\"\n        mat-button\n        color=\"primary\"\n        [style.background-image]=\"makeTrustedImage(photoData)\"\n        [style.background-size]=\"'cover'\"\n        [style.background-repeat]=\"'no-repeat'\"\n        (click)=\"$event.preventDefault(); fileInput.click();\"\n      >\n        <mat-icon>add_a_photo</mat-icon>\n      </button>\n      <button\n        class=\"photo-remove\"\n        mat-mini-fab\n        color=\"warn\"\n        (click)=\"clearPhoto()\"\n      >\n        <mat-icon>close</mat-icon>\n      </button>\n    </div>\n    <ng-template #addImage>\n      <button\n        class=\"photo-add\"\n        mat-button\n        color=\"primary\"\n        (click)=\"$event.preventDefault(); fileInput.click();\"\n      >\n        <mat-icon>add_a_photo</mat-icon>\n      </button>\n    </ng-template>\n    <input #fileInput type=\"file\" [name]=\"schema.key\" (change)=\"onChange($event)\" style=\"display:none;\"/>\n    <input type=\"hidden\" [name]=\"schema.key\" [formControl]=\"control\"/>\n    <div class=\"mat-form-field-subscript-wrapper\" *ngIf=\"error\" style=\"position: relative;\">\n      <mat-error class=\"mat-error\">Please upload a valid photo format (JPG, PNG)</mat-error>\n    </div>\n    <div>\n      <jf-error [control]=\"control\"></jf-error>\n    </div>\n  "
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
                    template: "\n    <mat-form-field>\n      <input\n        matInput\n        [name]=\"schema.key\"\n        [attr.type]=\"'number'\"\n        [formControl]=\"control\"\n        [attr.placeholder]=\"placeholder()\"\n        [placeholder]=\"title(true)\"\n      />\n      <mat-error jf-error [control]=\"control\"></mat-error>\n    </mat-form-field>\n  "
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
                    template: "\n    <div class=\"slide-container\">\n      <mat-slide-toggle\n      [id]=\"schema.key\"\n      [name]=\"schema.key\"\n      color=\"primary\"\n      [formControl]=\"control\">{{title(true)}}</mat-slide-toggle>\n    </div>\n    <jf-error [control]=\"control\"></jf-error>\n  "
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <mat-form-field>\n      <input\n        matInput\n        [matDatepicker]='myDatepicker'\n        (click)=\"myDatepicker.open()\"\n        [formControl]='control'\n        [placeholder]='title(true)'\n        [min]=\"minDate()\"\n        [max]=\"maxDate()\"\n      >\n      <mat-datepicker-toggle matSuffix [for]='myDatepicker'></mat-datepicker-toggle>\n      <mat-datepicker #myDatepicker></mat-datepicker>\n      <mat-error jf-error [control]='control'></mat-error>\n    </mat-form-field>\n  "
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
    /** @nocollapse */
    ErrorMaterialComponent.propDecorators = {
        "control": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1ZmxhLW5neC10cnUtZm9ybXMuanMubWFwIiwic291cmNlcyI6WyJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2NvbW1vbi9jb21tb24uY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9zZWxlY3Qvc2VsZWN0LnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9udW1iZXIvbnVtYmVyLnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9ib29sZWFuL2Jvb2xlYW4udmlldy5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL3Bob3RvL3Bob3RvLnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy90ZXh0YXJlYS90ZXh0YXJlYS52aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvZGF0ZS9kYXRlLnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9yYWRpb2dyb3VwL3JhZGlvZ3JvdXAudmlldy5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2NoZWNrYm94Z3JvdXAvY2hlY2tib3hncm91cC52aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3Qudmlldy5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL21vbmV5L21vbmV5LnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL21vZGVscy9zY2hlbWEtZm9ybS1jb250cm9sLnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZyYW1ld29yay9zaGFyZWQvY29tcG9uZW50cy9vYmplY3Qvb2JqZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9tb2RlbHMvc2NoZW1hLWZvcm0tYXJyYXkudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvbW9kZWxzL3NjaGVtYS1mb3JtLWdyb3VwLnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZyYW1ld29yay9zaGFyZWQvY29tcG9uZW50cy9hcnJheS9hcnJheS5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZnJhbWV3b3JrL3NoYXJlZC9jb21wb25lbnRzL2FycmF5L2FycmF5LnZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZyYW1ld29yay9qc29uLWZvcm0tZmllbGRzLnNlcnZpY2UudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvc2VydmljZXMvdmFsaWRhdG9ycy5zZXJ2aWNlLnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL3NlcnZpY2VzL2RlZmF1bHRzLnNlcnZpY2UudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvanNvbi1mb3JtLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvY2hlY2tib3hncm91cC9jaGVja2JveGdyb3VwLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3QuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy90ZXh0YXJlYS90ZXh0YXJlYS5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9ib29sZWFuL2Jvb2xlYW4uY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9udW1iZXIvbnVtYmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvcGhvdG8vcGhvdG8uY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9yYWRpb2dyb3VwL3JhZGlvZ3JvdXAuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvZGF0ZS9kYXRlLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL21vbmV5L21vbmV5LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvYm9vdHN0cmFwNC9qc29uLWZvcm0tYm9vdHN0cmFwNC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvc2hhcmVkL2NvbXBvbmVudHMvY2hvb3Nlci9jaG9vc2VyLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvc2hhcmVkL2NvbXBvbmVudHMvZmllbGQvZmllbGQuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZyYW1ld29yay9zaGFyZWQvY29tcG9uZW50cy9mb3JtLWJ1dHRvbi9mb3JtLWJ1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZnJhbWV3b3JrL3NoYXJlZC9jb21wb25lbnRzL2luZm8tYnV0dG9uL2luZm8tYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvc2hhcmVkL3NoYXJlZC5tb2R1bGUudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvanNvbi1mb3JtLm1vZHVsZS50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZyYW1ld29yay9ib290c3RyYXA0L2pzb24tZm9ybS1ib290c3RyYXA0Lm1vZHVsZS50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvc3RyaW5nL3N0cmluZy5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL3RleHRhcmVhL3RleHRhcmVhLm1hdGVyaWFsLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvc2VsZWN0L3NlbGVjdC5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL3JhZGlvZ3JvdXAvcmFkaW9ncm91cC5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL3Bob3RvL3Bob3RvLm1hdGVyaWFsLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvbnVtYmVyL251bWJlci5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL211bHRpc2VsZWN0L211bHRpc2VsZWN0Lm1hdGVyaWFsLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvY2hlY2tib3hncm91cC9jaGVja2JveGdyb3VwLm1hdGVyaWFsLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvYm9vbGVhbi9ib29sZWFuLm1hdGVyaWFsLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvZGF0ZS9kYXRlLm1hdGVyaWFsLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvYnV0dG9uL2J1dHRvbi5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2FycmF5L2FycmF5Lm1hdGVyaWFsLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9mcmFtZXdvcmsvbWF0ZXJpYWwvanNvbi1mb3JtLW1hdGVyaWFsLnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9lcnJvci9lcnJvci5tYXRlcmlhbC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZnJhbWV3b3JrL21hdGVyaWFsL2pzb24tZm9ybS1tYXRlcmlhbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NjaGVtYSc7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29udHJvbCB9IGZyb20gJy4uLy4uL21vZGVscy9zY2hlbWEtZm9ybS1jb250cm9sJztcbmltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSAnbG9kYXNoJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamYtY29tcG9uZW50JyxcbiAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBwdWJsaWMgY29udHJvbDogU2NoZW1hRm9ybUNvbnRyb2w7XG4gIHB1YmxpYyBzY2hlbWE6IFNjaGVtYTtcbiAgcHVibGljIHN0eWxlOiB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgaXNSZXF1aXJlZCgpIHtcbiAgICAvLyBzb21lIGNvbnRyb2xzIGxpa2UgZGF0ZXBpY2tlciBhZGQgdmFsaWRhdG9yIHdpdGhvdXQgYmVpbmcgcmVxdWlyZWRcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLnZhbGlkYXRvciAhPT0gbnVsbCAmJiB0aGlzLmNvbnRyb2wuaXNSZXF1aXJlZDtcbiAgfVxuXG4gIHRpdGxlKG1hdGVyaWFsID0gZmFsc2UpIHtcbiAgICBjb25zdCByZXF1aXJlZCA9IHRoaXMuaXNSZXF1aXJlZCgpICYmIG1hdGVyaWFsID8gJyonIDogJyc7XG4gICAgcmV0dXJuICh0eXBlb2YgdGhpcy5zY2hlbWEudGl0bGUgPT09ICd1bmRlZmluZWQnXG4gICAgICA/IHRoaXMuc3RyVG9VcHBlckNhc2UodGhpcy5zY2hlbWEua2V5KSA6IHRoaXMuc2NoZW1hLnRpdGxlKSArIHJlcXVpcmVkO1xuICB9XG5cbiAgc3RyVG9VcHBlckNhc2Uoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RhcnRDYXNlKHN0cik7XG4gIH1cblxuICBwbGFjZWhvbGRlcigpIHtcbiAgICByZXR1cm4gKHRoaXMuc2NoZW1hLnRpdGxlIHx8IHRoaXMuc3RyVG9VcHBlckNhc2UodGhpcy5zY2hlbWEua2V5KSkucmVwbGFjZSgvPC4qPz4vZywgJycpO1xuICB9XG5cbiAgdHlwZSgpIHtcbiAgICBsZXQgZm9ybWF0ID0gdGhpcy5zY2hlbWEuZm9ybWF0IHx8ICd0ZXh0JztcblxuICAgIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgICBjYXNlICdwaG90byc6XG4gICAgICAgIGZvcm1hdCA9ICdmaWxlJztcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0O1xuICB9XG5cbiAgaWQoaT8pIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEua2V5ICsgJy0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpICsgJy0nICsgaTtcbiAgfVxuXG4gIGdldENsYXNzKGRlZmF1bHRDbGFzcz8pIHtcbiAgICByZXR1cm4gdGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgP1xuICAgICAgdGhpcy5zdHlsZVsnZGVmYXVsdCddIDogKGRlZmF1bHRDbGFzcyB8fCAnJyk7XG4gIH1cblxuICBnZXRNYXNrKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnbWFzaycpKSB7XG4gICAgICBjb25zdCBtYXNrOiBBcnJheTxzdHJpbmcgfCBSZWdFeHA+ID0gW107XG4gICAgICB0aGlzLnNjaGVtYS5tYXNrLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIG1hc2sucHVzaCgvXlxcLy4qXFwvJC8udGVzdChlbCkgPyBuZXcgUmVnRXhwKGVsLnJlcGxhY2UoL15cXC98XFwvJC9nLCAnJykpIDogZWwpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBtYXNrO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG1ha2VUcnVzdGVkSW1hZ2UoaW1hZ2UpOiBhbnkge1xuICAgIGNvbnN0IGltYWdlU3RyaW5nID0gIEpTT04uc3RyaW5naWZ5KGltYWdlKS5yZXBsYWNlKC9cXFxcbi9nLCAnJyk7XG4gICAgY29uc3Qgc3R5bGUgPSAndXJsKCcgKyBpbWFnZVN0cmluZyArICcpJztcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHN0eWxlKTtcbiAgfVxuXG4gIGVudW1OYW1lcyhpbmRleCkge1xuICAgIHJldHVybiB0eXBlb2YodGhpcy5zY2hlbWEuZW51bU5hbWVzKSA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gdGhpcy5zY2hlbWEuZW51bVtpbmRleF1cbiAgICAgIDogdGhpcy5zY2hlbWEuZW51bU5hbWVzW2luZGV4XTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICA8cD48c3Bhbj57e3BsYWNlaG9sZGVyKCl9fTwvc3Bhbj4gPHNwYW4+e3tjb250cm9sLnZhbHVlfX08L3NwYW4+PC9wPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFN0cmluZ1ZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+PHNwYW4+e3twbGFjZWhvbGRlcigpfX08L3NwYW4+IDxzcGFuPnt7Y29udHJvbC52YWx1ZX19PC9zcGFuPjwvcD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RWaWV3Q29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+PHNwYW4+e3twbGFjZWhvbGRlcigpfX08L3NwYW4+IDxzcGFuPnt7Y29udHJvbC52YWx1ZX19PC9zcGFuPjwvcD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJWaWV3Q29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICA8cD48c3Bhbj57e3BsYWNlaG9sZGVyKCl9fTwvc3Bhbj4gPHNwYW4+e3tjb250cm9sLnZhbHVlfX08L3NwYW4+PC9wPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEJvb2xlYW5WaWV3Q29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+e3twbGFjZWhvbGRlcigpfX08L3A+XG4gICAgPGltZyBzcmM9XCJ7e2NvbnRyb2wudmFsdWV9fVwiIGNsYXNzPVwiaW1nLXRodW1ibmFpbFwiIC8+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgUGhvdG9WaWV3Q29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHt9XG5cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgPHA+PHNwYW4+e3twbGFjZWhvbGRlcigpfX08L3NwYW4+IDxzcGFuPnt7Y29udHJvbC52YWx1ZX19PC9zcGFuPjwvcD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYVZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgeyB9XG5cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuaW1wb3J0IGNyZWF0ZU51bWJlck1hc2sgZnJvbSAndGV4dC1tYXNrLWFkZG9ucy9kaXN0L2NyZWF0ZU51bWJlck1hc2snO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgPHA+PHNwYW4+e3twbGFjZWhvbGRlcigpfX08L3NwYW4+IDxzcGFuPnt7Y29udHJvbC52YWx1ZX19PC9zcGFuPjwvcD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlVmlld0NvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIG51bWJlck1hc2sgPSBjcmVhdGVOdW1iZXJNYXNrKHsgYWxsb3dEZWNpbWFsOiBmYWxzZSwgcHJlZml4OiAnJyB9KTtcblxuICBjbGVhbk1hc2sodmFsdWUpIHtcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUucmVwbGFjZSgvXFxEL2csICcnKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgPHA+PHNwYW4+e3twbGFjZWhvbGRlcigpfX08L3NwYW4+IDxzcGFuPnt7Y29udHJvbC52YWx1ZX19PC9zcGFuPjwvcD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb2dyb3VwVmlld0NvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD57e3BsYWNlaG9sZGVyKCl9fTwvcD5cbiAgICA8dWwgKm5nRm9yPVwibGV0IHNlbGVjdGVkIG9mIGNvbnRyb2wudmFsdWVcIj5cbiAgICAgIDxsaT57e3NlbGVjdGVkfX08L2xpPlxuICAgIDwvdWw+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hncm91cFZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge31cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxwPnt7cGxhY2Vob2xkZXIoKX19PC9wPlxuICAgIDx1bCAqbmdGb3I9XCJsZXQgc2VsZWN0ZWQgb2YgY29udHJvbC52YWx1ZVwiPlxuICAgICAgPGxpPnt7c2VsZWN0ZWR9fTwvbGk+XG4gICAgPC91bD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aXNlbGVjdFZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICBlbnVtTmFtZXMoaW5kZXgpIHtcbiAgICByZXR1cm4gdHlwZW9mKHRoaXMuc2NoZW1hLmVudW1OYW1lcykgPT09ICd1bmRlZmluZWQnXG4gICAgICA/IHRoaXMuc2NoZW1hLmVudW1baW5kZXhdXG4gICAgICA6IHRoaXMuc2NoZW1hLmVudW1OYW1lc1tpbmRleF07XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuaW1wb3J0IGNyZWF0ZU51bWJlck1hc2sgZnJvbSAndGV4dC1tYXNrLWFkZG9ucy9kaXN0L2NyZWF0ZU51bWJlck1hc2snO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgPHA+PHNwYW4+e3twbGFjZWhvbGRlcigpfX08L3NwYW4+IDxzcGFuPnt7Y29udHJvbC52YWx1ZX19PC9zcGFuPjwvcD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBNb25leVZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICBudW1iZXJNYXNrID0gY3JlYXRlTnVtYmVyTWFzayh7IGFsbG93RGVjaW1hbDogZmFsc2UsIHByZWZpeDogJycgfSk7XG5cbiAgY2xlYW5NYXNrKHZhbHVlKSB7XG4gICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJykpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuZXhwb3J0IGNsYXNzIFNjaGVtYUZvcm1Db250cm9sIGV4dGVuZHMgRm9ybUNvbnRyb2wge1xuICBwdWJsaWMgc2NoZW1hOiBTY2hlbWE7XG4gIHB1YmxpYyBzdHlsZTogYW55O1xuICBwdWJsaWMgdmlld09ubHk6IGJvb2xlYW47XG4gIHB1YmxpYyBkYXRhOiBhbnk7XG4gIHB1YmxpYyBpc1JlcXVpcmVkOiBib29sZWFuO1xufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2NoZW1hRm9ybUNvbnRyb2x9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9zY2hlbWEtZm9ybS1jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbbmdDbGFzc109XCJbJ29iamVjdCcsIGNvbnRyb2wuc2NoZW1hLmtleV1cIlxuICAgICAgamYtY29tcG9uZW50LWNob29zZXJcbiAgICAgIFtmb3JtXT1cImNvbnRyb2xcIlxuICAgICAgW3NjaGVtYV09XCJjb250cm9sLnNjaGVtYVwiXG4gICAgICBbbmVzdGVkXT1cInRydWVcIj5cbiAgICA8L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIE9iamVjdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNvbnRyb2w6IFNjaGVtYUZvcm1Db250cm9sO1xufVxuXG4iLCJpbXBvcnQgeyBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFGb3JtQXJyYXkgZXh0ZW5kcyBGb3JtQXJyYXkge1xuICBwdWJsaWMgc2NoZW1hOiBTY2hlbWE7XG4gIHB1YmxpYyBzdHlsZTogYW55O1xufVxuIiwiaW1wb3J0IHsgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFGb3JtR3JvdXAgZXh0ZW5kcyBGb3JtR3JvdXAge1xuICBwdWJsaWMgc2NoZW1hOiBTY2hlbWE7XG4gIHB1YmxpYyBzdHlsZTogYW55O1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbnRyb2wgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvc2NoZW1hLWZvcm0tY29udHJvbCc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFNjaGVtYUZvcm1BcnJheSB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9zY2hlbWEtZm9ybS1hcnJheSc7XG5pbXBvcnQgeyBTY2hlbWFGb3JtR3JvdXAgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvc2NoZW1hLWZvcm0tZ3JvdXAnO1xuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSAnbG9kYXNoJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbbmdDbGFzc109XCJbJ2FycmF5JywgY29udHJvbC5zY2hlbWEua2V5XVwiPlxuICAgICAgPGg2ICpuZ0lmPVwiZ2V0TGVnZW5kKGNvbnRyb2wpLmxlbmd0aFwiPnt7Z2V0TGVnZW5kKGNvbnRyb2wpfX08L2g2PlxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgYXJyQ29udHJvbCBvZiBnZXRFbmFibGVkQ29udHJvbHMoY29udHJvbCk7IGxldCBpID0gaW5kZXg7XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiIGpmLWNvbXBvbmVudC1jaG9vc2VyIFtmb3JtXT1cImFyckNvbnRyb2xcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVtb3ZlXCIgKm5nSWY9XCJjb250cm9sLmNvbnRyb2xzLmxlbmd0aCA+IDFcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInJlbW92ZUNvbnRyb2woY29udHJvbCwgaSlcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tc21cIiB2YWx1ZT1cIlJlbW92ZVwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWRkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJhZGRDb250cm9sKGNvbnRyb2wpXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIgdmFsdWU9XCJBZGRcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlDb21wb25lbnQge1xuICBASW5wdXQoKSBjb250cm9sOiBTY2hlbWFGb3JtQXJyYXk7XG5cbiAgZ2V0TGVnZW5kKGNvbnRyb2wpIHtcbiAgICByZXR1cm4gKGNvbnRyb2wgJiYgY29udHJvbC5zY2hlbWEgJiYgY29udHJvbC5zY2hlbWEua2V5KSA/IHN0YXJ0Q2FzZShjb250cm9sLnNjaGVtYS5rZXkpIDogJyc7XG4gIH1cblxuICBzdHJUb1VwcGVyQ2FzZShzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9fL2csICcgJykuc3BsaXQoJyAnKS5tYXAoKHdvcmQpID0+XG4gICAgICAod29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpXG4gICAgKS5qb2luKCcgJyk7XG4gIH1cblxuICBnZXRFbmFibGVkQ29udHJvbHMoY29udHJvbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnRyb2wuY29udHJvbHMpKSB7XG4gICAgICByZXR1cm4gY29udHJvbC5jb250cm9scy5maWx0ZXIoKGMpID0+IGMuZW5hYmxlZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2w7XG4gIH1cblxuICBjbG9uZUNvbnRyb2woY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XG4gICAgbGV0IG5ld0NvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcblxuICAgIGlmIChjb250cm9sIGluc3RhbmNlb2YgU2NoZW1hRm9ybUdyb3VwKSB7XG4gICAgICBjb25zdCBmb3JtR3JvdXAgPSBuZXcgU2NoZW1hRm9ybUdyb3VwKHt9LCBjb250cm9sLnZhbGlkYXRvciwgY29udHJvbC5hc3luY1ZhbGlkYXRvcik7XG4gICAgICBjb25zdCBjb250cm9scyA9IGNvbnRyb2wuY29udHJvbHM7XG4gICAgICBmb3JtR3JvdXAuc2NoZW1hID0gY29udHJvbC5zY2hlbWE7XG5cbiAgICAgIE9iamVjdC5rZXlzKGNvbnRyb2xzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgZm9ybUdyb3VwLmFkZENvbnRyb2woa2V5LCB0aGlzLmNsb25lQ29udHJvbChjb250cm9sc1trZXldKSk7XG4gICAgICB9KTtcblxuICAgICAgbmV3Q29udHJvbCA9IGZvcm1Hcm91cDtcbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBTY2hlbWFGb3JtQXJyYXkpIHtcbiAgICAgIGNvbnN0IGZvcm1BcnJheSA9IG5ldyBTY2hlbWFGb3JtQXJyYXkoW10sIGNvbnRyb2wudmFsaWRhdG9yLCBjb250cm9sLmFzeW5jVmFsaWRhdG9yKTtcbiAgICAgIGNvbnRyb2wuY29udHJvbHMuZm9yRWFjaCgoZm9ybUNvbnRyb2wpID0+IHtcbiAgICAgICAgZm9ybUFycmF5LnB1c2godGhpcy5jbG9uZUNvbnRyb2woZm9ybUNvbnRyb2wpKTtcbiAgICAgICAgcmV0dXJuIGZvcm1BcnJheTtcbiAgICAgIH0pO1xuXG4gICAgICBuZXdDb250cm9sID0gZm9ybUFycmF5O1xuICAgICAgKDxTY2hlbWFGb3JtQXJyYXk+bmV3Q29udHJvbCkuc2NoZW1hID0gY29udHJvbC5zY2hlbWE7XG4gICAgfSBlbHNlIGlmIChjb250cm9sIGluc3RhbmNlb2YgU2NoZW1hRm9ybUNvbnRyb2wpIHtcbiAgICAgIG5ld0NvbnRyb2wgPSBuZXcgU2NoZW1hRm9ybUNvbnRyb2woY29udHJvbC52YWx1ZSwgY29udHJvbC52YWxpZGF0b3IsIGNvbnRyb2wuYXN5bmNWYWxpZGF0b3IpO1xuICAgICAgKDxTY2hlbWFGb3JtQ29udHJvbD5uZXdDb250cm9sKS5zY2hlbWEgPSBjb250cm9sLnNjaGVtYTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvcjogdW5leHBlY3RlZCBjb250cm9sIHZhbHVlJyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRyb2wuZGlzYWJsZWQpIHtcbiAgICAgIG5ld0NvbnRyb2wuZGlzYWJsZSh7ZW1pdEV2ZW50OiBmYWxzZX0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdDb250cm9sO1xuICB9XG5cbiAgYWRkQ29udHJvbChmb3JtQXJyYXk6IEZvcm1BcnJheSkge1xuICAgIGZvcm1BcnJheS5wdXNoKHRoaXMuY2xvbmVDb250cm9sKGZvcm1BcnJheS5jb250cm9sc1swXSkpO1xuICB9XG5cbiAgcmVtb3ZlQ29udHJvbChmb3JtQXJyYXk6IEZvcm1BcnJheSwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmIChmb3JtQXJyYXkubGVuZ3RoID09PSAxKSB7XG4gICAgICBmb3JtQXJyYXkuY29udHJvbHNbMF0ucmVzZXQoKTtcbiAgICAgIGZvcm1BcnJheS5jb250cm9sc1swXS5kaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1BcnJheS5yZW1vdmVBdChpbmRleCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFycmF5Q29tcG9uZW50IH0gZnJvbSAnLi9hcnJheS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtuZ0NsYXNzXT1cIlsnYXJyYXknLCBjb250cm9sLnNjaGVtYS5rZXldXCI+XG4gICAgICA8aDYgKm5nSWY9XCJnZXRMZWdlbmQoY29udHJvbCkubGVuZ3RoXCI+e3tnZXRMZWdlbmQoY29udHJvbCl9fTwvaDY+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBhcnJDb250cm9sIG9mIGdldEVuYWJsZWRDb250cm9scyhjb250cm9sKTsgbGV0IGkgPSBpbmRleDtcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCIgamYtY29tcG9uZW50LWNob29zZXIgW2Zvcm1dPVwiYXJyQ29udHJvbFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFycmF5Vmlld0NvbXBvbmVudCBleHRlbmRzIEFycmF5Q29tcG9uZW50IHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNjaGVtYUZvcm1Db250cm9sIH0gZnJvbSAnLi4vbW9kZWxzL3NjaGVtYS1mb3JtLWNvbnRyb2wnO1xuaW1wb3J0IHsgU3RyaW5nVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdFZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvc2VsZWN0L3NlbGVjdC52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdW1iZXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGRzL251bWJlci9udW1iZXIudmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQm9vbGVhblZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvYm9vbGVhbi9ib29sZWFuLnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFBob3RvVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkcy9waG90by9waG90by52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0YXJlYVZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvdGV4dGFyZWEvdGV4dGFyZWEudmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvZGF0ZS9kYXRlLnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFJhZGlvZ3JvdXBWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGRzL3JhZGlvZ3JvdXAvcmFkaW9ncm91cC52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGVja2JveGdyb3VwVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkcy9jaGVja2JveGdyb3VwL2NoZWNrYm94Z3JvdXAudmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXVsdGlzZWxlY3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGRzL211bHRpc2VsZWN0L211bHRpc2VsZWN0LnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE1vbmV5Vmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkcy9tb25leS9tb25leS52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPYmplY3RDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC9jb21wb25lbnRzL29iamVjdC9vYmplY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEFycmF5Vmlld0NvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkL2NvbXBvbmVudHMvYXJyYXkvYXJyYXkudmlldy5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSnNvbkZvcm1GaWVsZHNTZXJ2aWNlIHtcbiAgbmFtZTogc3RyaW5nO1xuICByb290Vmlld0NvbnRhaW5lcjtcbiAgcHVibGljIGZpZWxkVHlwZXM6IHsgW3R5cGU6IHN0cmluZ106IGFueSB9ID0ge307XG4gIHByaXZhdGUgdmlld09ubHkgPSBmYWxzZTtcbiAgcHJpdmF0ZSB2aWV3VHlwZXM6IE9iamVjdCA9IHtcbiAgICBzdHJpbmc6IFN0cmluZ1ZpZXdDb21wb25lbnQsXG4gICAgc2VsZWN0OiBTZWxlY3RWaWV3Q29tcG9uZW50LFxuICAgIG51bWJlcjogTnVtYmVyVmlld0NvbXBvbmVudCxcbiAgICBib29sZWFuOiBCb29sZWFuVmlld0NvbXBvbmVudCxcbiAgICBwaG90bzogUGhvdG9WaWV3Q29tcG9uZW50LFxuICAgIHRleHRhcmVhOiBUZXh0YXJlYVZpZXdDb21wb25lbnQsXG4gICAgb2JqZWN0OiBPYmplY3RDb21wb25lbnQsXG4gICAgYXJyYXk6IEFycmF5Vmlld0NvbXBvbmVudCxcbiAgICBkYXRlOiBEYXRlVmlld0NvbXBvbmVudCxcbiAgICByYWRpb2dyb3VwOiBSYWRpb2dyb3VwVmlld0NvbXBvbmVudCxcbiAgICBjaGVja2JveGdyb3VwOiBDaGVja2JveGdyb3VwVmlld0NvbXBvbmVudCxcbiAgICBtdWx0aXNlbGVjdDogTXVsdGlzZWxlY3RWaWV3Q29tcG9uZW50LFxuICAgIG1vbmV5OiBNb25leVZpZXdDb21wb25lbnRcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICkge31cblxuICBzZXRSb290Vmlld0NvbnRhaW5lclJlZih2aWV3Q29udGFpbmVyUmVmKSB7XG4gICAgdGhpcy5yb290Vmlld0NvbnRhaW5lciA9IHZpZXdDb250YWluZXJSZWY7XG4gIH1cblxuICBhZGREeW5hbWljQ29tcG9uZW50KGNvbnRyb2w6IFNjaGVtYUZvcm1Db250cm9sKSB7XG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuZ2V0KGNvbnRyb2wpKTtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnJvb3RWaWV3Q29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuY29udHJvbCA9IGNvbnRyb2w7XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLnNjaGVtYSA9IGNvbnRyb2wuc2NoZW1hO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5zdHlsZSA9IGNvbnRyb2wuc3R5bGU7XG4gIH1cblxuICBoYXModHlwZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZmllbGRUeXBlcy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSB8fCB0aGlzLnZpZXdUeXBlcy5oYXNPd25Qcm9wZXJ0eSh0eXBlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyKHR5cGU6IHN0cmluZywgZmllbGQ6IGFueSkge1xuICAgIHRoaXMuZmllbGRUeXBlc1t0eXBlXSA9IGZpZWxkO1xuICAgIHRoaXMudmlld1R5cGVzW3R5cGVdID0gZmllbGQ7XG4gIH1cblxuICBnZXQoY29udHJvbCk6IGFueSB7XG4gICAgY29uc3QgdHlwZXM6IE9iamVjdCA9IHRoaXMudmlld09ubHkgPyB0aGlzLnZpZXdUeXBlcyA6IHRoaXMuZmllbGRUeXBlcztcblxuICAgIGlmICh0eXBlb2YoY29udHJvbCkgPT09ICdzdHJpbmcnICYmIHRoaXMuaGFzKGNvbnRyb2wpKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWVsZFR5cGVzW2NvbnRyb2xdO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIGEgZmllbGQgaXMgZ2V0dGluZyBvdmVycmlkZGVuIGJ5IGZvcm1hdFxuICAgIGlmICh0eXBlb2YoY29udHJvbC5zY2hlbWEuZm9ybWF0KSAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5oYXMoY29udHJvbC5zY2hlbWEuZm9ybWF0KSkge1xuICAgICAgcmV0dXJuIHR5cGVzW2NvbnRyb2wuc2NoZW1hLmZvcm1hdF07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZihjb250cm9sLnNjaGVtYS5lbnVtKSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29udHJvbC5zY2hlbWEudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgcmV0dXJuIHR5cGVzWydjaGVja2JveGdyb3VwJ107XG4gICAgfSBlbHNlIGlmICh0eXBlb2YoY29udHJvbC5zY2hlbWEuZW51bSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdHlwZXNbJ3NlbGVjdCddO1xuICAgIH0gZWxzZSBpZiAodGhpcy5oYXMoY29udHJvbC5zY2hlbWEuZm9ybWF0KSkge1xuICAgICAgcmV0dXJuIHR5cGVzW2NvbnRyb2wuc2NoZW1hLmZvcm1hdF07XG4gICAgfSBlbHNlIGlmICh0aGlzLmhhcyhjb250cm9sLnNjaGVtYS50eXBlKSkge1xuICAgICAgcmV0dXJuIHR5cGVzW2NvbnRyb2wuc2NoZW1hLnR5cGVdO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlc1snc3RyaW5nJ107XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm4sIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKc29uRm9ybVZhbGlkYXRvcnNTZXJ2aWNlIHtcbiAgdmFsaWRhdG9yczogQXJyYXk8YW55PjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnZhbGlkYXRvcnMgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQocHJvcCwgc2NoZW1hLCBwYXRoKSB7XG4gICAgY29uc3QgZGF0ZVZhbGlkYXRvciA9IGZ1bmN0aW9uIGFnZVJhbmdlVmFsaWRhdG9yKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkge1xuICAgICAgaWYgKGNvbnRyb2wudmFsdWUgPT09IG51bGwgfHwgKGNvbnRyb2wudmFsdWUgIT09IG51bGwgJiYgaXNOYU4obmV3IERhdGUoY29udHJvbC52YWx1ZSkuZ2V0RGF0ZSgpKSkpIHtcbiAgICAgICAgcmV0dXJuIHsgY3VzdG9tRXJyb3I6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBkYXRlLicgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBjb25zdCByZXF1aXJlZCA9IHNjaGVtYS5yZXF1aXJlZCB8fCBbXTtcbiAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdO1xuICAgIGNvbnN0IHZhclBhdGggPSBbXS5jb25jYXQocGF0aCwgcHJvcCkuam9pbignLicpO1xuXG4gICAgaWYgKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLnR5cGUgPT09ICdib29sZWFuJyAmJiByZXF1aXJlZC5pbmRleE9mKHByb3ApID4gLTEpIHtcbiAgICAgIHJldHVybiBWYWxpZGF0b3JzLnJlcXVpcmVkVHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gVmFsaWRhdG9ycy5jb21wb3NlKHRoaXMudmFsaWRhdG9ycy5jb25jYXQoW1xuICAgICAgKHRoaXMuaGFzKHZhclBhdGgpID8gdGhpcy52YWxpZGF0b3JzW3ZhclBhdGhdIDogbnVsbCksXG4gICAgICAocmVxdWlyZWQuaW5kZXhPZihwcm9wKSA+IC0xID8gVmFsaWRhdG9ycy5yZXF1aXJlZCA6IG51bGwpLFxuICAgICAgKGZpZWxkLmhhc093blByb3BlcnR5KCdtaW5MZW5ndGgnKSA/IFZhbGlkYXRvcnMubWluTGVuZ3RoKGZpZWxkLm1pbkxlbmd0aCkgOiBudWxsKSxcbiAgICAgIChmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnbWF4TGVuZ3RoJykgPyBWYWxpZGF0b3JzLm1heExlbmd0aChmaWVsZC5tYXhMZW5ndGgpIDogbnVsbCksXG4gICAgICAoZmllbGQuaGFzT3duUHJvcGVydHkoJ2Zvcm1hdCcpICYmIGZpZWxkLmZvcm1hdCA9PT0gJ2VtYWlsJyA/IFZhbGlkYXRvcnMuZW1haWwgOiBudWxsKSxcbiAgICAgIChmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnbWluaW11bScpID8gVmFsaWRhdG9ycy5taW4oZmllbGQubWluaW11bSkgOiBudWxsKSxcbiAgICAgIChmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnbWF4aW11bScpID8gVmFsaWRhdG9ycy5tYXgoZmllbGQubWF4aW11bSkgOiBudWxsKSxcbiAgICAgIChmaWVsZC5mb3JtYXQgJiYgZmllbGQuZm9ybWF0ID09PSAnZGF0ZScgPyBkYXRlVmFsaWRhdG9yIDogbnVsbCksXG4gICAgICAoZmllbGQucGF0dGVybiA/IFZhbGlkYXRvcnMucGF0dGVybihmaWVsZC5wYXR0ZXJuKSA6IG51bGwpXG4gICAgXSkpO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyKGZpZWxkOiBhbnksIHZhbGlkYXRvcjogVmFsaWRhdG9yRm4pIHtcbiAgICB0aGlzLnZhbGlkYXRvcnNbZmllbGRdID0gdmFsaWRhdG9yO1xuICB9XG5cbiAgcHVibGljIGhhcyhzdHIpIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3JzLmhhc093blByb3BlcnR5KHN0cik7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpzb25Gb3JtRGVmYXVsdHNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkZWZhdWx0VHlwZXM6IHsgW3R5cGU6IHN0cmluZ106IGFueSB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGVmYXVsdFR5cGVzID0gdGhpcy5kZWZhdWx0VHlwZXMgfHwge307XG4gIH1cblxuICBwdWJsaWMgZ2V0KHByb3AsIHNjaGVtYSwgZGF0YSkge1xuICAgIGNvbnN0IGRlZmF1bHRTdHJpbmcgPSAocHJvcC5oYXNPd25Qcm9wZXJ0eSgnZm9ybWF0JykgJiYgcHJvcC5mb3JtYXQgPT09ICdtdWx0aXNlbGVjdCcpID8gW10gOiAnJztcbiAgICBsZXQgZGVmYXVsdFZhbHVlID0gc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0uZGVmYXVsdCB8fCBkZWZhdWx0U3RyaW5nO1xuICAgIGlmICh0aGlzLmhhcyhzY2hlbWEucHJvcGVydGllc1twcm9wXS5kZWZhdWx0KSkge1xuICAgICAgZGVmYXVsdFZhbHVlID0gdGhpcy5ldmFsKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLmRlZmF1bHQpKCk7XG4gICAgfVxuXG4gICAgLy8gZGF0YSBvdmVycmlkZSBkZWZhdWx0c1xuICAgIGlmIChkYXRhICYmIGRhdGEuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IGRhdGFbcHJvcF07XG4gICAgfVxuXG4gICAgaWYgKHByb3AuaGFzT3duUHJvcGVydHkoJ2Zvcm1hdCcpICYmIHByb3AuZm9ybWF0ID09PSAnZGF0ZScgJiYgZGVmYXVsdFZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IG5ldyBEYXRlKGRlZmF1bHRWYWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZXZhbChzdHIpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0VHlwZXNbc3RyXTtcbiAgfVxuXG4gIHB1YmxpYyBoYXMoc3RyKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFR5cGVzLmhhc093blByb3BlcnR5KHN0cik7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXIoc3RyOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgIHRoaXMuZGVmYXVsdFR5cGVzW3N0cl0gPSBjYWxsYmFjaztcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBEb0NoZWNrLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgTmdGb3JtfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBKc29uRm9ybVZhbGlkYXRvcnNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbnRyb2wgfSBmcm9tICcuL21vZGVscy9zY2hlbWEtZm9ybS1jb250cm9sJztcbmltcG9ydCB7IEpzb25Gb3JtRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kZWZhdWx0cy5zZXJ2aWNlJztcbmltcG9ydCB7IFNjaGVtYUZvcm1Hcm91cCB9IGZyb20gJy4vbW9kZWxzL3NjaGVtYS1mb3JtLWdyb3VwJztcbmltcG9ydCB7IFNjaGVtYUZvcm1BcnJheSB9IGZyb20gJy4vbW9kZWxzL3NjaGVtYS1mb3JtLWFycmF5JztcbmltcG9ydCB7IEpzb25Gb3JtRmllbGRzU2VydmljZSB9IGZyb20gJy4vZnJhbWV3b3JrL2pzb24tZm9ybS1maWVsZHMuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pmLWZvcm0sIHRydS1mb3JtJyxcbiAgdGVtcGxhdGU6IGA8Zm9ybVxuICAjdXNlckZvcm09XCJuZ0Zvcm1cIlxuICBbZm9ybUdyb3VwXT1cImZvcm1cIlxuICAobmdTdWJtaXQpPVwiaGFuZGxlT25TdWJtaXQoKVwiXG4gICpuZ0lmPVwiaXNWYWxpZFNjaGVtYSgpXCJcbiAgW25nQ2xhc3NdPVwieyAndmlldy1vbmx5Jzogdmlld09ubHkgfVwiXG4gIFtpZF09XCJpZFwiXG4+XG4gIDxkaXYgI2hlYWRlcj48L2Rpdj5cbiAgPGRpdlxuICAgIGpmLWNvbXBvbmVudC1jaG9vc2VyXG4gICAgW25nQ2xhc3NdPVwiW291dGVyQ2xhc3MgfHwgJycsIHRoaXMuYWN0aXZlU3R5bGVbJ2RlZmF1bHQnXSA/IHRoaXMuYWN0aXZlU3R5bGVbJ2RlZmF1bHQnXSA6ICcnXVwiXG4gICAgW2Zvcm1dPVwiZm9ybVwiXG4gICAgW3NjaGVtYV09XCJhY3RpdmVTY2hlbWFcIj5cbiAgPC9kaXY+XG4gIDxkaXYgI2NvbnRhaW5lcj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuICA8ZGl2ICNmb290ZXI+PC9kaXY+XG4gIDxkaXZcbiAgICAjYnV0dG9uc1xuICAgICpuZ0lmPVwiY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA9PSAwICYmIChzdWJtaXQgfHwgY2FuY2VsKVwiXG4gICAgW25nQ2xhc3NdPVwieyAnbWFyZ2luLXRvcC0tZG91YmxlJzogdHJ1ZSwgJ3BhZ2UtYWN0aW9ucy0tZWRnZXMnOiAoY2FuY2VsICYmIHN1Ym1pdCksICdwYWdlLWFjdGlvbnMtLWNlbnRlcic6ICghY2FuY2VsIHx8ICFzdWJtaXQpfVwiPlxuICAgIDxqZi1mb3JtLWJ1dHRvblxuICAgICAgKm5nSWY9XCJjYW5jZWxcIlxuICAgICAgW2NhbmNlbF09XCJjYW5jZWxcIlxuICAgICAgW3N0ZXBzXT1cInN0ZXBzXCJcbiAgICAgIFtpc011bHRpU3RlcF09XCJpc011bHRpU3RlcFwiXG4gICAgICBbaXNXb3JraW5nXT1cImlzV29ya2luZ1wiXG4gICAgICAoaGFuZGxlQ2xpY2spPVwiaGFuZGxlT25DYW5jZWwoKVwiXG4gICAgICBbc3VibWl0Q2xhc3NdPVwic3VibWl0Q2xhc3NcIlxuICAgICAgW2NhbmNlbENsYXNzXT1cImNhbmNlbENsYXNzXCI+XG4gICAgPC9qZi1mb3JtLWJ1dHRvbj5cbiAgICA8amYtZm9ybS1idXR0b25cbiAgICAgICpuZ0lmPVwic3VibWl0XCJcbiAgICAgIFtzdWJtaXRDbGFzc109XCJzdWJtaXRDbGFzc1wiXG4gICAgICBbY2FuY2VsQ2xhc3NdPVwiY2FuY2VsQ2xhc3NcIlxuICAgICAgW3N1Ym1pdF09XCJzdWJtaXRcIlxuICAgICAgW3N0ZXBzXT1cInN0ZXBzXCJcbiAgICAgIFtjb250aW51ZV09XCJjb250aW51ZVwiXG4gICAgICBbaXNNdWx0aVN0ZXBdPVwiaXNNdWx0aVN0ZXBcIlxuICAgICAgW2lzV29ya2luZ109XCJpc1dvcmtpbmdcIlxuICAgICAgW2lzRm9ybVZhbGlkXT1cInRoaXMuZm9ybS52YWxpZFwiPlxuICAgIDwvamYtZm9ybS1idXR0b24+XG4gIDwvZGl2PlxuPC9mb3JtPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBKc29uRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIERvQ2hlY2ssIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHNjaGVtYTtcbiAgQElucHV0KCkgZGF0YSA9IHt9O1xuICBASW5wdXQoKSBzdHlsZSA9IHt9O1xuICBASW5wdXQoKSBjb250aW51ZSA9ICdDb250aW51ZSc7XG4gIEBJbnB1dCgpIHN1Ym1pdDogc3RyaW5nO1xuICBASW5wdXQoKSBjYW5jZWw6IHN0cmluZztcbiAgQElucHV0KCkgc3VibWl0Q2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgY2FuY2VsQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgb3V0ZXJDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBpc1dvcmtpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgaXNNdWx0aVN0ZXAgPSBmYWxzZTtcbiAgQElucHV0KCkgYWN0aXZlU3RlcCA9IG51bGw7XG4gIEBJbnB1dCgpIHN0YXRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlkID0gJyc7XG4gIEBJbnB1dCgpIGZpZWxkcyA9IHt9O1xuICBASW5wdXQoKSB2aWV3T25seSA9IGZhbHNlO1xuICBAT3V0cHV0KCkgaGFuZGxlU3RlcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGhhbmRsZVN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGhhbmRsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGhhbmRsZUNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQFZpZXdDaGlsZCgndXNlckZvcm0nKSB1c2VyRm9ybTogTmdGb3JtO1xuICBAVmlld0NoaWxkKCdoZWFkZXInKSBoZWFkZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2Zvb3RlcicpIGZvb3RlcjogRWxlbWVudFJlZjtcblxuICBwdWJsaWMgZm9ybTtcbiAgcHVibGljIG1vZGVsO1xuICBwdWJsaWMgY29udHJvbCA9IHsga2V5OiAnJywgdmFsdWU6ICcnLCBpc1BhcnRPZjogZmFsc2UgfTtcbiAgcHVibGljIG9sZFNjaGVtYTogc3RyaW5nO1xuICBwdWJsaWMgb2xkRGF0YTogc3RyaW5nO1xuICBwdWJsaWMgY2hhbmdlRGV0ZWN0ZWQgPSBmYWxzZTtcbiAgcHVibGljIG9sZEFjdGl2ZVN0ZXAgPSAnJztcbiAgcHVibGljIHN0ZXBzID0gW107XG4gIHB1YmxpYyBtdWx0aVN0ZXBEYXRhID0ge307XG4gIHB1YmxpYyBhY3RpdmVTY2hlbWEgPSB7fTtcbiAgcHVibGljIGFjdGl2ZVN0eWxlID0ge307XG4gIHB1YmxpYyByZXF1aXJlZEZpZWxkcyA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSB2bDogSnNvbkZvcm1WYWxpZGF0b3JzU2VydmljZSxcbiAgICBwcml2YXRlIGRmOiBKc29uRm9ybURlZmF1bHRzU2VydmljZSxcbiAgICBwcml2YXRlIGpmOiBKc29uRm9ybUZpZWxkc1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZURldGVjdGVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5vbGRTY2hlbWEgIT09IEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hKSkge1xuICAgICAgdGhpcy5vbGRTY2hlbWEgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnNjaGVtYSk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vbGREYXRhICE9PSBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKSB7XG4gICAgICB0aGlzLm9sZERhdGEgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub2xkQWN0aXZlU3RlcCAhPT0gdGhpcy5hY3RpdmVTdGVwKSB7XG4gICAgICB0aGlzLm9sZEFjdGl2ZVN0ZXAgPSB0aGlzLmFjdGl2ZVN0ZXA7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jaGFuZ2VEZXRlY3RlZCkge1xuICAgICAgdGhpcy5yZXF1aXJlZEZpZWxkcyA9IDA7XG4gICAgICB0aGlzLmFwcGVuZEZpZWxkcygpO1xuICAgICAgdGhpcy5jb25zdHJ1Y3RGb3JtKCk7XG4gICAgICB0aGlzLmpmWzBdLnZpZXdPbmx5ID0gdGhpcy52aWV3T25seTtcbiAgICAgIHRoaXMuY2FuY2VsID0gdGhpcy52aWV3T25seSA/ICcnIDogdGhpcy5jYW5jZWw7XG4gICAgICB0aGlzLnN1Ym1pdCA9IHRoaXMudmlld09ubHkgPyAnJyA6IHRoaXMuc3VibWl0O1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZvcm0pIHtcbiAgICAgIHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBhcHBlbmRGaWVsZHMoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcy5maWVsZHMpLmZvckVhY2goKGYpID0+IHtcbiAgICAgIHRoaXMuamZbMF0ucmVnaXN0ZXIoZiwgdGhpcy5maWVsZHNbZl0pO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3RydWN0Rm9ybSgpIHtcbiAgICB0aGlzLm1vZGVsID0ge307XG5cbiAgICBpZiAodGhpcy5pc1ZhbGlkU2NoZW1hKCkpIHtcbiAgICAgIHRoaXMuYWN0aXZlU2NoZW1hID0gdGhpcy5zY2hlbWE7XG4gICAgICB0aGlzLmFjdGl2ZVN0eWxlID0gdGhpcy5zdHlsZTtcblxuICAgICAgLy8gZW1pdCB0aGUgaW5pdGlhbCBzdGVwIGZvciB0aGUgZXZlbnRcbiAgICAgIGlmICh0aGlzLnN0ZXBzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmlzTXVsdGlTdGVwKSB7XG4gICAgICAgIHRoaXMuc3RlcHMgPSB0aGlzLmdldFN0ZXBzKHRoaXMuc2NoZW1hLCB0aGlzLmFjdGl2ZVN0ZXApO1xuICAgICAgICB0aGlzLmhhbmRsZVN0ZXAuZW1pdCh7IGlkOiB0aGlzLmlkLCBkYXRhOiBudWxsLCBzdGVwczogdGhpcy5zdGVwcyB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc3RlcHMubGVuZ3RoID4gMCAmJiB0aGlzLmlzTXVsdGlTdGVwKSB7XG4gICAgICAgIGNvbnN0IHZpc2libGVTdGVwTmFtZSA9IHRoaXMuYWN0aXZlU3RlcCA+IDAgPyB0aGlzLmFjdGl2ZVN0ZXAgOiB0aGlzLnN0ZXBzLmZpbmQoKHMpID0+IHMudmlzaWJsZSkubmFtZTtcbiAgICAgICAgdGhpcy5hY3RpdmVTY2hlbWEgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3Zpc2libGVTdGVwTmFtZV07XG4gICAgICAgIHRoaXMuYWN0aXZlU3R5bGUgPSB0aGlzLnN0eWxlLmhhc093blByb3BlcnR5KHZpc2libGVTdGVwTmFtZSkgPyB0aGlzLnN0eWxlW3Zpc2libGVTdGVwTmFtZV0gOiB7fTtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5zdGF0ZSAmJiB0aGlzLm11bHRpU3RlcERhdGEuaGFzT3duUHJvcGVydHkodmlzaWJsZVN0ZXBOYW1lKVxuICAgICAgICAgID8gdGhpcy5tdWx0aVN0ZXBEYXRhW3Zpc2libGVTdGVwTmFtZV0gOiB0aGlzLmRhdGE7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWN0aXZlU2NoZW1hID0gdGhpcy5zdWJSZWZzKHRoaXMuYWN0aXZlU2NoZW1hKTtcbiAgICAgIHRoaXMubW9kZWwgPSB0aGlzLmdlbmVyYXRlRm9ybSh0aGlzLmFjdGl2ZVNjaGVtYSwge30sIHRoaXMuZGF0YSwgdGhpcy5hY3RpdmVTdHlsZSk7XG4gICAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHRoaXMubW9kZWwpO1xuXG4gICAgICB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jb250cm9sLmlzUGFydE9mKSB7XG4gICAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdEZvcm0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlLmVtaXQoeyBpZDogdGhpcy5pZCwgY29udHJvbDogdGhpcy5jb250cm9sLCBkYXRhIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3RlcHMoc2NoZW1hLCBhY3RpdmVTdGVwKTogQXJyYXk8YW55PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKS5tYXAoKG5hbWUsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgdHlwZSA9ICdzdGVwJztcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICB0aGlzLmFjdGl2ZVN0ZXAgPSB0aGlzLmFjdGl2ZVN0ZXAgfHwgbmFtZTtcbiAgICAgICAgdHlwZSA9ICdmaXJzdCc7XG4gICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcykubGVuZ3RoIC0gMSkge1xuICAgICAgICB0eXBlID0gJ2xhc3QnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbmRleCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdmlzaWJsZTogYWN0aXZlU3RlcCA/IGFjdGl2ZVN0ZXAgPT09IG5hbWUgOiBpbmRleCA9PT0gMCxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdGl0bGU6IHNjaGVtYS5wcm9wZXJ0aWVzW25hbWVdLmhhc093blByb3BlcnR5KCd0aXRsZScpID8gc2NoZW1hLnByb3BlcnRpZXNbbmFtZV0udGl0bGUgOiBuYW1lXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgaXNWYWxpZFNjaGVtYSgpIHtcbiAgICByZXR1cm4gdHlwZW9mICh0aGlzLnNjaGVtYSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUZvcm0gKHNjaGVtYSwgZ3JvdXA/OiB7fSwgZGF0YT86IHt9LCBzdHlsZT86IHt9LCBwYXRoPzogQXJyYXk8YW55Pikge1xuICAgIGlmICghdGhpcy5pc1Zpc2libGUoc2NoZW1hKSkge1xuICAgICAgcmV0dXJuIGdyb3VwO1xuICAgIH1cblxuICAgIGlmICghcGF0aCkge1xuICAgICAgcGF0aCA9IFtdO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc09uZU9mKHNjaGVtYSwgcHJvcCwgcGF0aCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0udHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBEYXRhID0gZGF0YSAmJiBkYXRhLmhhc093blByb3BlcnR5KHByb3ApID8gZGF0YVtwcm9wXSA6IHt9O1xuICAgICAgICBjb25zdCBncm91cFN0eWxlID0gc3R5bGUgJiYgc3R5bGUuaGFzT3duUHJvcGVydHkocHJvcCkgPyBzdHlsZVtwcm9wXSA6IHt9O1xuICAgICAgICBncm91cFtwcm9wXSA9IG5ldyBTY2hlbWFGb3JtR3JvdXAodGhpcy5nZW5lcmF0ZUZvcm0oc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0sIHt9LCBncm91cERhdGEsIGdyb3VwU3R5bGUsIFtdLmNvbmNhdChwYXRoLCBwcm9wKSkpO1xuICAgICAgICBncm91cFtwcm9wXS5zY2hlbWEgPSBzY2hlbWEucHJvcGVydGllc1twcm9wXTtcbiAgICAgICAgZ3JvdXBbcHJvcF0uc2NoZW1hLmtleSA9IHByb3A7XG4gICAgICAgIGdyb3VwW3Byb3BdLnN0eWxlID0gZ3JvdXBTdHlsZTtcbiAgICAgIH0gZWxzZSBpZiAoc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0udHlwZSA9PT0gJ2FycmF5JyAmJiAhdGhpcy5pc0Zvcm1hdChzY2hlbWEucHJvcGVydGllc1twcm9wXSwgJ211bHRpc2VsZWN0JykpIHtcbiAgICAgICAgcGF0aC5wdXNoKHByb3ApO1xuICAgICAgICBjb25zdCBhcnJheURhdGEgPSBkYXRhICYmIGRhdGEuaGFzT3duUHJvcGVydHkocHJvcCkgPyBkYXRhW3Byb3BdIDogW3t9XTtcbiAgICAgICAgY29uc3QgYXJyYXlTdHlsZSA9IHN0eWxlICYmIHN0eWxlLmhhc093blByb3BlcnR5KHByb3ApID8gc3R5bGVbcHJvcF0gOiB7fTtcbiAgICAgICAgbGV0IGZiQXJyYXkgPSBbXTtcblxuICAgICAgICBpZiAoc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0uZW51bSkge1xuICAgICAgICAgIGZiQXJyYXkgPSBzY2hlbWEucHJvcGVydGllc1twcm9wXS5lbnVtLm1hcCgoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udHJvbCA9IG5ldyBTY2hlbWFGb3JtQ29udHJvbCgpO1xuICAgICAgICAgICAgY29udHJvbC5zY2hlbWEgPSBPYmplY3QuYXNzaWduKHt9LCBzY2hlbWEucHJvcGVydGllc1twcm9wXSk7XG4gICAgICAgICAgICBjb250cm9sLnNjaGVtYS5rZXkgPSBwcm9wO1xuICAgICAgICAgICAgY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChldmVudCkgPT4gdGhpcy5oYW5kbGVPbkNoYW5nZShwcm9wLCBldmVudCkpO1xuICAgICAgICAgICAgY29udHJvbC5pc1JlcXVpcmVkID0gc2NoZW1hLmhhc093blByb3BlcnR5KCdyZXF1aXJlZCcpICYmIHNjaGVtYS5yZXF1aXJlZC5pbmRleE9mKHByb3ApID4gLTE7XG5cbiAgICAgICAgICAgIGlmIChjb250cm9sLmlzUmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZXF1aXJlZEZpZWxkcysrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2w7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmJBcnJheSA9IGFycmF5RGF0YS5tYXAoKGRhdGFBdEluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gbmV3IFNjaGVtYUZvcm1Hcm91cCh0aGlzLmdlbmVyYXRlRm9ybShzY2hlbWEucHJvcGVydGllc1twcm9wXS5pdGVtcywge30sIGRhdGFBdEluZGV4LCB7fSwgW10uY29uY2F0KHBhdGgsIHByb3ApKSk7XG4gICAgICAgICAgICBnLnNjaGVtYSA9IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdO1xuICAgICAgICAgICAgcmV0dXJuIGc7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBncm91cFtwcm9wXSA9IG5ldyBTY2hlbWFGb3JtQXJyYXkoZmJBcnJheSk7XG4gICAgICAgIGdyb3VwW3Byb3BdLnNjaGVtYSA9IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdO1xuICAgICAgICBncm91cFtwcm9wXS5zY2hlbWEua2V5ID0gcHJvcDtcbiAgICAgICAgZ3JvdXBbcHJvcF0uc3R5bGUgPSBhcnJheVN0eWxlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzVmlzaWJsZShzY2hlbWEucHJvcGVydGllc1twcm9wXSkpIHtcblxuICAgICAgICBjb25zdCBjb250cm9sID0gbmV3IFNjaGVtYUZvcm1Db250cm9sKHRoaXMuZGYuZ2V0KHByb3AsIHNjaGVtYSwgZGF0YSksIHRoaXMudmwuZ2V0KHByb3AsIHNjaGVtYSwgcGF0aCkpO1xuICAgICAgICBjb250cm9sLnNjaGVtYSA9IE9iamVjdC5hc3NpZ24oe30sIHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdKTtcbiAgICAgICAgY29udHJvbC5zY2hlbWEua2V5ID0gcHJvcDtcbiAgICAgICAgY29udHJvbC5kYXRhID0gdGhpcy5kZi5nZXQocHJvcCwgc2NoZW1hLCBkYXRhKTtcbiAgICAgICAgY29udHJvbC5zdHlsZSA9IChzdHlsZSAmJiBzdHlsZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgPyBzdHlsZVtwcm9wXSA6IHt9O1xuICAgICAgICBjb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKGV2ZW50KSA9PiB0aGlzLmhhbmRsZU9uQ2hhbmdlKHByb3AsIGV2ZW50LCB0aGlzLmluT25lT2Yoc2NoZW1hLCBwcm9wKSkpO1xuICAgICAgICBjb250cm9sLmlzUmVxdWlyZWQgPSBzY2hlbWEuaGFzT3duUHJvcGVydHkoJ3JlcXVpcmVkJykgJiYgc2NoZW1hLnJlcXVpcmVkLmluZGV4T2YocHJvcCkgPiAtMTtcbiAgICAgICAgaWYgKGNvbnRyb2wuaXNSZXF1aXJlZCkge1xuICAgICAgICAgIHRoaXMucmVxdWlyZWRGaWVsZHMrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGdyb3VwW3Byb3BdID0gY29udHJvbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBncm91cDtcbiAgfVxuXG4gIGlzT25lT2Yoc2NoZW1hLCBrZXksIHBhdGgpIHtcbiAgICBpZiAoIXNjaGVtYS5vbmVPZikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWEub25lT2YuZmlsdGVyKChwKSA9PiB7XG4gICAgICBpZiAoXy5nZXQocCwgJ3JlcXVpcmVkJywgW10pLmluY2x1ZGVzKGtleSkpIHtcblxuICAgICAgICBjb25zdCBwYXJlbnQgPSBPYmplY3Qua2V5cyhwLnByb3BlcnRpZXMpWzBdO1xuICAgICAgICBjb25zdCBkYXRhUGF0aCA9IHBhdGguY29uY2F0KHBhcmVudCkuam9pbignLicpO1xuICAgICAgICBsZXQgdmFsdWUgPSBfLmdldCh0aGlzLmRhdGEsIGRhdGFQYXRoLCBudWxsKTtcblxuICAgICAgICBpZiAoc2NoZW1hLnByb3BlcnRpZXNbcGFyZW50XS50eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSkgPT09ICd0cnVlJzsgLy8gbWF0ZXJpYWwgcHJlc2VydmVzIHN0cmluZyAmIGJvb3RzdHJhcCBkb2Vzbid0XG4gICAgICAgIH0gZWxzZSBpZiAoc2NoZW1hLnByb3BlcnRpZXNbcGFyZW50XS50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHZhbHVlID0gK3ZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gd2hlbiByZXR1cm5zIHRydWUgaXQgd2lsbCBub3QgZGlzcGxheSBmaWVsZCwgb3RoZXJ3aXNlIGl0IHdpbGxcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IF8uZ2V0KHAucHJvcGVydGllc1twYXJlbnRdLCAnZW51bScsIFtdKS5pbmRleE9mKHZhbHVlKSA9PT0gLTE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KS5sZW5ndGggPiAwO1xuICB9XG5cbiAgaW5PbmVPZihzY2hlbWEsIHByb3ApIHtcbiAgICBpZiAodHlwZW9mIChzY2hlbWEub25lT2YpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHNjaGVtYS5vbmVPZi5maWx0ZXIoKHApID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMocC5wcm9wZXJ0aWVzKVswXTtcbiAgICAgICAgcmV0dXJuIGtleSA9PT0gcHJvcDtcbiAgICAgIH0pLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNWaXNpYmxlIChwcm9wKSB7XG4gICAgcmV0dXJuIHByb3AuaGFzT3duUHJvcGVydHkoJ3Zpc2libGUnKSA9PT0gZmFsc2UgfHwgKHByb3AuaGFzT3duUHJvcGVydHkoJ3Zpc2libGUnKSAmJiBwcm9wLnZpc2libGUgPT09IHRydWUpO1xuICB9XG5cbiAgaXNGb3JtYXQocHJvcCwgZm9ybWF0KSB7XG4gICAgcmV0dXJuIHByb3AuaGFzT3duUHJvcGVydHkoJ2Zvcm1hdCcpICYmIHByb3AuZm9ybWF0ID09PSBmb3JtYXQ7XG4gIH1cblxuICBoYW5kbGVPblN1Ym1pdCgpIHtcbiAgICB0aGlzLnRvdWNoQWxsKHRoaXMuZm9ybS5jb250cm9scyk7XG5cbiAgICBpZiAodGhpcy5mb3JtLnZhbGlkICYmIHRoaXMuaXNNdWx0aVN0ZXApIHtcbiAgICAgIGNvbnN0IHByZXYgPSB0aGlzLnN0ZXBzLmZpbmRJbmRleCgocykgPT4gcy52aXNpYmxlKTtcbiAgICAgIHRoaXMubXVsdGlTdGVwRGF0YVt0aGlzLmFjdGl2ZVN0ZXBdID0gdGhpcy5mb3JtLnZhbHVlO1xuICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuc3RlcHMuZmluZEluZGV4KChzKSA9PiBzLm5hbWUgPT09IHRoaXMuYWN0aXZlU3RlcCk7XG4gICAgICBjb25zdCBuZXh0ID0gY3VycmVudCArIDE7XG5cbiAgICAgIGlmICh0eXBlb2YgKHRoaXMuc3RlcHNbbmV4dF0pICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnN0ZXBzW3ByZXZdLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGVwc1tuZXh0XS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hY3RpdmVTdGVwID0gdGhpcy5zdGVwc1tuZXh0XS5uYW1lO1xuICAgICAgICB0aGlzLmhhbmRsZVN0ZXAuZW1pdCh7XG4gICAgICAgICAgZGlyOiAnbmV4dCcsXG4gICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgZGF0YTogeyBbdGhpcy5zdGVwc1twcmV2XS5uYW1lXTogdGhpcy5tdWx0aVN0ZXBEYXRhW3RoaXMuc3RlcHNbcHJldl0ubmFtZV0gfSxcbiAgICAgICAgICBzdGVwczogdGhpcy5zdGVwc1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RGb3JtKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdC5lbWl0KHRoaXMubXVsdGlTdGVwRGF0YSk7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgdGhpcy5oYW5kbGVTdWJtaXQuZW1pdCh0aGlzLmZvcm0udmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU9uQ2hhbmdlKGtleSwgdmFsdWUsIGlzUGFydE9mID0gZmFsc2UpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB7IGtleSwgdmFsdWUsIGlzUGFydE9mIH07XG4gIH1cblxuICBoYW5kbGVPbkNhbmNlbCgpIHtcbiAgICBpZiAodGhpcy5pc011bHRpU3RlcCkge1xuICAgICAgY29uc3QgcHJldiA9IHRoaXMuc3RlcHMuZmluZEluZGV4KChzKSA9PiBzLnZpc2libGUpO1xuICAgICAgdGhpcy5zdGVwc1twcmV2XS52aXNpYmxlID0gZmFsc2U7XG4gICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5zdGVwcy5maW5kSW5kZXgoKHMpID0+IHMubmFtZSA9PT0gdGhpcy5hY3RpdmVTdGVwKTtcbiAgICAgIGNvbnN0IG5leHQgPSBjdXJyZW50IC0gMTtcblxuICAgICAgaWYgKHR5cGVvZiAodGhpcy5zdGVwc1tuZXh0XSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuc3RlcHNbbmV4dF0udmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWN0aXZlU3RlcCA9IHRoaXMuc3RlcHNbbmV4dF0ubmFtZTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdGVwLmVtaXQoe1xuICAgICAgICAgIGRpcjogJ3ByZXYnLFxuICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgIGRhdGE6IHsgW3RoaXMuc3RlcHNbY3VycmVudF0ubmFtZV06IHRoaXMubXVsdGlTdGVwRGF0YVt0aGlzLnN0ZXBzW3ByZXZdLm5hbWVdIH0sXG4gICAgICAgICAgc3RlcHM6IHRoaXMuc3RlcHNcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29uc3RydWN0Rm9ybSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDYW5jZWwuZW1pdCh0aGlzLmZvcm0udmFsdWUpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcbiAgICAgIHRoaXMuaGFuZGxlQ2FuY2VsLmVtaXQodGhpcy5mb3JtLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB0b3VjaEFsbChjb250cm9scykge1xuICAgIE9iamVjdC5rZXlzKGNvbnRyb2xzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChjb250cm9sc1trZXldLmhhc093blByb3BlcnR5KCdjb250cm9scycpKSB7XG4gICAgICAgIHRoaXMudG91Y2hBbGwoY29udHJvbHNba2V5XS5jb250cm9scyk7XG4gICAgICB9XG4gICAgICBjb250cm9sc1trZXldLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN1YlJlZnMoc2NoZW1hKSB7XG4gICAgT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgIGlmIChzY2hlbWEucHJvcGVydGllc1twcm9wXS5oYXNPd25Qcm9wZXJ0eSgnJHJlZicpKSB7XG4gICAgICAgIHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdID0gdGhpcy5zY2hlbWEuZGVmaW5pdGlvbnNbc2NoZW1hLnByb3BlcnRpZXNbcHJvcF1bJyRyZWYnXS5yZXBsYWNlKCcjL2RlZmluaXRpb25zLycsICcnKV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2NoZW1hO1xuICB9XG5cbiAgLyoqXG4gICAqIEFQSTogZXh0ZXJuYWwgbWV0aG9kIGZvciBlbnN1cmluZyB0aGUgZm9ybSBpcyB2YWxpZFxuICAgKi9cbiAgaXNWYWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLnZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIEFQSTogdHJpZ2dlciBleHRlcm5hbCBzdWJtaXNzaW9uXG4gICAqL1xuICBzdWJtaXRGb3JtKCkge1xuICAgIHRoaXMudXNlckZvcm0ubmdTdWJtaXQuZW1pdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFQSTogc2V0IGhlYWRlciBvZiB0aGUgZm9ybVxuICAgKi9cbiAgc2V0SGVhZGVyKHZhbCkge1xuICAgIHRoaXMuaGVhZGVyLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gdmFsO1xuICB9XG5cbiAgLyoqXG4gICAqIEFQSTogc2V0IGZvb3RlciBvZiB0aGUgZm9ybVxuICAgKi9cbiAgc2V0Rm9vdGVyKHZhbCkge1xuICAgIHRoaXMuZm9vdGVyLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gdmFsO1xuICB9XG5cbiAgLyoqXG4gICAqIEFQSTogZ2V0IHJlcXVpcmVkIGZpZWxkcyBjb3VudFxuICAgKi9cbiAgZ2V0UmVxdWlyZWRGaWVsZENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLnJlcXVpcmVkRmllbGRzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsIFthdHRyLmNsYXNzXT1cInNjaGVtYS5rZXlcIiBbbmdDbGFzc109XCJ7J21hcmdpbi1ib3R0b20tLWhhbGYnOiB0cnVlLCByZXF1aXJlZDogaXNSZXF1aXJlZCgpfVwiPlxuICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJ0aXRsZSgpXCI+PC9zcGFuPjxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+PC9sYWJlbD5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCIgW2F0dHIuY2xhc3NdPVwiJ2luZm8nXCIgW2F0dHIudGl0bGVdPVwidGhpcy5zY2hlbWEuZGVzY3JpcHRpb25cIj5JbmZvPC9idXR0b24+XG4gICAgPGRpdiBbY2xhc3NdPVwiZ2V0Q2xhc3MoJ2NoZWNrYm94LWdyb3VwJylcIj5cbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGNoaWxkIG9mIHRoaXMuY29udHJvbFsnY29udHJvbHMnXTsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgIFtuZ0NsYXNzXT1cInsnY2hlY2tib3gtY29udGFpbmVyJzogdHJ1ZSwgJ2NoZWNrZWQnOiBjaGlsZC52YWx1ZSA9PT0gc2NoZW1hLmVudW1baV19XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgW2F0dHIuaWRdPVwiZ2V0SWQoc2NoZW1hLmtleSwgc2NoZW1hLmVudW1baV0pXCJcbiAgICAgICAgICBbY2hlY2tlZF09XCJjaGlsZC52YWx1ZSA9PT0gc2NoZW1hLmVudW1baV1cIlxuICAgICAgICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxuICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJjaGlsZFwiXG4gICAgICAgICAgKGNoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQsIGkpXCJcbiAgICAgICAgICBbdmFsdWVdPVwic2NoZW1hLmVudW1baV1cIiAvPlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBbYXR0ci5mb3JdPVwiZ2V0SWQoaSwgc2NoZW1hLmVudW1baV0pXCJcbiAgICAgICAgICBbYXR0ci5jbGFzc109XCJzY2hlbWEua2V5XCI+XG4gICAgICAgICAge3tlbnVtTmFtZXMoaSl9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L2pmLWVycm9yPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94Z3JvdXBDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICBjaGVja2JveEdyb3VwVmFsdWVzID0gW107XG5cbiAgc2V0VmFsdWUoZXZlbnQsIGluZGV4KSB7XG4gICAgaWYgKHRoaXMuY2hlY2tib3hHcm91cFZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuY2hlY2tib3hHcm91cFZhbHVlcyA9IG5ldyBBcnJheSh0aGlzLmNvbnRyb2xbJ2NvbnRyb2xzJ10ubGVuZ3RoKS5maWxsKG51bGwpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNoZWNrYm94R3JvdXBWYWx1ZXNbaW5kZXhdID09PSBudWxsKSB7XG4gICAgICBldmVudC50YXJnZXQudmFsdWUgPSB0aGlzLnNjaGVtYS5lbnVtW2luZGV4XTtcbiAgICAgIHRoaXMuY2hlY2tib3hHcm91cFZhbHVlc1tpbmRleF0gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hlY2tib3hHcm91cFZhbHVlc1tpbmRleF0gPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh0aGlzLmNoZWNrYm94R3JvdXBWYWx1ZXMpO1xuICB9XG5cbiAgZ2V0SWQoa2V5LCB2YWwpIHtcbiAgICByZXR1cm4gYCR7a2V5fS0ke3ZhbC50b1N0cmluZygpfWA7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8bGFiZWwgW2F0dHIuY2xhc3NdPVwic2NoZW1hLmtleVwiIFtuZ0NsYXNzXT1cIntyZXF1aXJlZDogaXNSZXF1aXJlZCgpfVwiPlxuICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJ0aXRsZSgpXCI+PC9zcGFuPjxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+XG4gICAgPC9sYWJlbD5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIFthdHRyLmNsYXNzXT1cIidpbmZvJ1wiIFthdHRyLnRpdGxlXT1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCI+SW5mbzwvYnV0dG9uPlxuICAgIDxzZWxlY3RcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgIG11bHRpcGxlPVwibXVsdGlwbGVcIlxuICAgID5cbiAgICAgIDxvcHRpb25cbiAgICAgICAgKm5nRm9yPVwibGV0IGVuIG9mIHNjaGVtYS5lbnVtOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgW3NlbGVjdGVkXT1cImNvbnRyb2wudmFsdWUgPT09IGVuXCJcbiAgICAgICAgW25nVmFsdWVdPVwiZW5cIj5cbiAgICAgICAge3tlbnVtTmFtZXMoaSl9fVxuICAgICAgPC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlzZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICBlbnVtTmFtZXMoaW5kZXgpIHtcbiAgICByZXR1cm4gdHlwZW9mKHRoaXMuc2NoZW1hLmVudW1OYW1lcykgPT09ICd1bmRlZmluZWQnXG4gICAgICA/IHRoaXMuc2NoZW1hLmVudW1baW5kZXhdXG4gICAgICA6IHRoaXMuc2NoZW1hLmVudW1OYW1lc1tpbmRleF07XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8bGFiZWxcbiAgICAgIFtuZ0NsYXNzXT1cIlsnamYtbGFiZWwnLCBzY2hlbWEua2V5LCAoaXNSZXF1aXJlZCgpID8gJ3JlcXVpcmVkJyA6ICcnKV1cIj5cbiAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwidGl0bGUoKVwiPjwvc3Bhbj48c3VwICpuZ0lmPVwiaXNSZXF1aXJlZCgpXCI+Kjwvc3VwPlxuICAgIDwvbGFiZWw+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJ0aGlzLnNjaGVtYS5kZXNjcmlwdGlvblwiIFthdHRyLmNsYXNzXT1cIidpbmZvJ1wiIFthdHRyLnRpdGxlXT1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCI+SW5mbzwvYnV0dG9uPlxuICAgIDx0ZXh0YXJlYVxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgW25hbWVdPVwic2NoZW1hLmtleVwiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiXG4gICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICAgIFthdHRyLm1pbkxlbmd0aF09XCJzY2hlbWEubWluTGVuZ3RoIHx8IG51bGxcIlxuICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIoKVwiXG4gICAgPjwvdGV4dGFyZWE+XG4gICAgPGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L2pmLWVycm9yPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFRleHRhcmVhQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHtcbiAgcmFuZG9tU3VmZml4ID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xuXG4gIGdldElkKGksIHZhbCkge1xuICAgIHJldHVybiBgJHtpfS0ke3ZhbC50b1N0cmluZygpLnJlcGxhY2UoL1tcXFdfXSsvZywgJycpfSske3RoaXMucmFuZG9tU3VmZml4fWA7XG4gIH1cblxuICBnZXROYW1lKGtleSkge1xuICAgIHJldHVybiBgJHtrZXl9LSR7dGhpcy5yYW5kb21TdWZmaXh9YDtcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdC1jb250YWluZXJcIj5cbiAgICAgIDxsYWJlbFxuICAgICAgICBbbmdDbGFzc109XCJbJ2pmLWxhYmVsJywgc2NoZW1hLmtleSwgKGlzUmVxdWlyZWQoKSA/ICdyZXF1aXJlZCcgOiAnJyldXCI+XG4gICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwidGl0bGUoKVwiPjwvc3Bhbj48c3VwICpuZ0lmPVwiaXNSZXF1aXJlZCgpXCI+Kjwvc3VwPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwic2NoZW1hLmRlc2NyaXB0aW9uXCIgW2F0dHIuY2xhc3NdPVwiJ2luZm8nXCIgW2F0dHIudGl0bGVdPVwic2NoZW1hLmRlc2NyaXB0aW9uXCI+SW5mbzwvYnV0dG9uPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgIFthdHRyLm5hbWVdPVwic2NoZW1hLmtleVwiXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgID5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIFtzZWxlY3RlZF09XCJjb250cm9sLnZhbHVlID09PSAnJ1wiIFtkaXNhYmxlZF09XCJ0cnVlXCI+XG4gICAgICAgICAge3twbGFjZWhvbGRlcigpfX1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb25cbiAgICAgICAgICAqbmdGb3I9XCJsZXQgZW4gb2Ygc2NoZW1hLmVudW07IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgIFtzZWxlY3RlZF09XCJjb250cm9sLnZhbHVlID09PSBlblwiXG4gICAgICAgICAgW25nVmFsdWVdPVwiZW5cIj5cbiAgICAgICAgICB7e2VudW1OYW1lcyhpKX19XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gICAgPGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L2pmLWVycm9yPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW2NsYXNzXT1cImdldENsYXNzKCdjaGVja2JveC1ncm91cCcpXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3gtY29udGFpbmVyXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIFtpZF09XCJzY2hlbWEua2V5XCJcbiAgICAgICAgICBbbmFtZV09XCJzY2hlbWEua2V5XCJcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsIFthdHRyLmZvcl09XCJzY2hlbWEua2V5XCIgW2F0dHIuY2xhc3NdPVwic2NoZW1hLmtleVwiIFtuZ0NsYXNzXT1cIntyZXF1aXJlZDogaXNSZXF1aXJlZCgpfVwiPlxuICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwidGl0bGUoKVwiPjwvc3Bhbj48c3VwICpuZ0lmPVwiaXNSZXF1aXJlZCgpXCI+Kjwvc3VwPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L2pmLWVycm9yPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEJvb2xlYW5Db21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge31cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8bGFiZWwgW25nQ2xhc3NdPVwiWydqZi1sYWJlbCcsIHNjaGVtYS5rZXksIChpc1JlcXVpcmVkKCkgPyAncmVxdWlyZWQnIDogJycpXVwiICpuZ0lmPVwidHlwZSgpICE9PSAnaGlkZGVuJ1wiPlxuICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJ0aXRsZSgpXCI+PC9zcGFuPjxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+XG4gICAgPC9sYWJlbD5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCIgW2F0dHIuY2xhc3NdPVwiJ2luZm8nXCIgW2F0dHIudGl0bGVdPVwidGhpcy5zY2hlbWEuZGVzY3JpcHRpb25cIj5JbmZvPC9idXR0b24+XG4gICAgPGlucHV0XG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICBbbmFtZV09XCJzY2hlbWEua2V5XCJcbiAgICAgIFthdHRyLnR5cGVdPVwiJ251bWJlcidcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIoKVwiXG4gICAgLz5cbiAgICA8amYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvamYtZXJyb3I+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxsYWJlbCBbYXR0ci5jbGFzc109XCJzY2hlbWEua2V5XCIgW25nQ2xhc3NdPVwie3JlcXVpcmVkOiBpc1JlcXVpcmVkKCl9XCI+XG4gICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cInRpdGxlKClcIj48L3NwYW4+PHN1cCAqbmdJZj1cImlzUmVxdWlyZWQoKVwiPio8L3N1cD5cbiAgICA8L2xhYmVsPlxuICAgIDxkaXYgKm5nSWY9XCJwcmV2aWV3U3JjRXhpc3RzKClcIiBjbGFzcz1cInBob3RvLXByZXZpZXdcIj5cbiAgICAgIDxpbWcgW2F0dHIuc3JjXT1cInBob3RvRGF0YVwiIC8+XG4gICAgICA8c3BhbiBocmVmPVwiI1wiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiIChjbGljayk9XCJjbGVhclBob3RvKClcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJsYSBsYS1jbG9zZVwiPjwvaT5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPGlucHV0XG4gICAgICAgICpuZ0lmPVwiIXByZXZpZXdTcmNFeGlzdHMoKVwiXG4gICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIC8+XG4gICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIFtuYW1lXT1cInNjaGVtYS5rZXlcIiBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxqZi1lcnJvciBbY29udHJvbF09XCJjb250cm9sXCI+PC9qZi1lcnJvcj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBQaG90b0NvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIHB1YmxpYyBwaG90b0RhdGE6IHN0cmluZztcblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb2Nlc3NGaWxlKHJlYWRlci5yZXN1bHQsIGZpbGUudHlwZSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLnBob3RvRGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodGhpcy5waG90b0RhdGEpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIHJlYWRpbmcgdGhlIGZpbGUhJyk7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YoZmlsZSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICB9XG4gIH1cblxuICBwcmV2aWV3U3JjRXhpc3RzKCkge1xuICAgIHJldHVybiB0eXBlb2YgKHRoaXMucGhvdG9EYXRhKSA9PT0gJ3N0cmluZyc7XG4gIH1cblxuICBjbGVhclBob3RvKCkge1xuICAgIHRoaXMucGhvdG9EYXRhID0gbnVsbDtcbiAgICB0aGlzLmNvbnRyb2wucmVzZXQoKTtcbiAgfVxuXG4gIHByb2Nlc3NGaWxlKGRhdGFVUkwsIGZpbGVUeXBlKSB7XG4gICAgY29uc3QgbWF4V2lkdGggPSA4MDA7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gODAwO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBkYXRhVVJMO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBpbWFnZS53aWR0aDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xuICAgICAgICBjb25zdCBzaG91bGRSZXNpemUgPSAod2lkdGggPiBtYXhXaWR0aCkgfHwgKGhlaWdodCA+IG1heEhlaWdodCk7XG5cbiAgICAgICAgaWYgKCFzaG91bGRSZXNpemUpIHtcbiAgICAgICAgICByZXNvbHZlKGRhdGFVUkwpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld1dpZHRoO1xuICAgICAgICBsZXQgbmV3SGVpZ2h0O1xuXG4gICAgICAgIGlmICh3aWR0aCA+IGhlaWdodCkge1xuICAgICAgICAgIG5ld0hlaWdodCA9IGhlaWdodCAqIChtYXhXaWR0aCAvIHdpZHRoKTtcbiAgICAgICAgICBuZXdXaWR0aCA9IG1heFdpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1dpZHRoID0gd2lkdGggKiAobWF4SGVpZ2h0IC8gaGVpZ2h0KTtcbiAgICAgICAgICBuZXdIZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gbmV3V2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIG5ld1dpZHRoLCBuZXdIZWlnaHQpO1xuXG4gICAgICAgIHJlc29sdmUoY2FudmFzLnRvRGF0YVVSTChmaWxlVHlwZSkpO1xuICAgICAgfTtcblxuICAgICAgaW1hZ2Uub25lcnJvciA9IChlcnIpID0+IHJlamVjdChlcnIpO1xuICAgIH0pO1xuICB9XG59XG5cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8bGFiZWxcbiAgICAgIFtuZ0NsYXNzXT1cIlsnbWFyZ2luLWJvdHRvbS0taGFsZicsICdqZi1sYWJlbCcsIHNjaGVtYS5rZXksIChpc1JlcXVpcmVkKCkgPyAncmVxdWlyZWQnIDogJycpXVwiPlxuICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJ0aXRsZSgpXCI+PC9zcGFuPjxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+PC9sYWJlbD5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCIgW2F0dHIuY2xhc3NdPVwiJ2luZm8nXCIgW2F0dHIudGl0bGVdPVwidGhpcy5zY2hlbWEuZGVzY3JpcHRpb25cIj5JbmZvPC9idXR0b24+XG4gICAgPGRpdiBbY2xhc3NdPVwiZ2V0Q2xhc3MoJ3JhZGlvLWdyb3VwJylcIj5cbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGVudW0gb2YgdGhpcy5zY2hlbWEuZW51bTsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgIFtuZ0NsYXNzXT1cInsncmFkaW8tY29udGFpbmVyJzogdHJ1ZSwgJ2NoZWNrZWQnOiBjb250cm9sLnZhbHVlID09PSBlbnVtfVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgIFthdHRyLmlkXT1cImdldElkKHNjaGVtYS5rZXksIGVudW0pXCJcbiAgICAgICAgICBbY2hlY2tlZF09XCJjb250cm9sLnZhbHVlID09PSBlbnVtXCJcbiAgICAgICAgICBbbmFtZV09XCJnZXROYW1lKHNjaGVtYS5rZXkpXCJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiXG4gICAgICAgICAgW3ZhbHVlXT1cImVudW1cIiAvPlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBbYXR0ci5mb3JdPVwiZ2V0SWQoaSwgZW51bSlcIlxuICAgICAgICAgIFthdHRyLmNsYXNzXT1cInNjaGVtYS5rZXlcIj5cbiAgICAgICAgICAge3tlbnVtTmFtZXMoaSl9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L2pmLWVycm9yPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvZ3JvdXBDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICByYW5kb21TdWZmaXggPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XG5cbiAgZ2V0SWQoa2V5LCB2YWwpIHtcbiAgICAgIHJldHVybiBgJHtrZXl9LSR7dmFsLnRvU3RyaW5nKCl9YDtcbiAgfVxuXG4gIGdldE5hbWUoa2V5KSB7XG4gICAgcmV0dXJuIGAke2tleX0tJHt0aGlzLnJhbmRvbVN1ZmZpeH1gO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsXG4gICAgICBbbmdDbGFzc109XCJbJ2pmLWxhYmVsJywgc2NoZW1hLmtleSwgKGlzUmVxdWlyZWQoKSA/ICdyZXF1aXJlZCcgOiAnJyldXCIgKm5nSWY9XCJ0eXBlKCkgIT09ICdoaWRkZW4nXCI+XG4gICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cInRpdGxlKClcIj48L3NwYW4+PHN1cCAqbmdJZj1cImlzUmVxdWlyZWQoKVwiPio8L3N1cD5cbiAgICA8L2xhYmVsPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwidGhpcy5zY2hlbWEuZGVzY3JpcHRpb25cIiBbYXR0ci5jbGFzc109XCInaW5mbydcIiBbYXR0ci50aXRsZV09XCJ0aGlzLnNjaGVtYS5kZXNjcmlwdGlvblwiPkluZm88L2J1dHRvbj5cbiAgICA8aW5wdXRcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgIFthdHRyLm5hbWVdPVwic2NoZW1hLmtleVwiXG4gICAgICBbYXR0ci50eXBlXT1cInR5cGUoKVwiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiXG4gICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICAgIFthdHRyLm1pbkxlbmd0aF09XCJzY2hlbWEubWluTGVuZ3RoIHx8IG51bGxcIlxuICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIoKVwiXG4gICAgICBbdGV4dE1hc2tdPVwieyBtYXNrOiBnZXRNYXNrKCkgfVwiXG4gICAgLz5cbiAgICA8amYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvamYtZXJyb3I+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU3RyaW5nQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxsYWJlbCBbbmdDbGFzc109XCJbJ2pmLWxhYmVsJywgc2NoZW1hLmtleSwgKGlzUmVxdWlyZWQoKSA/ICdyZXF1aXJlZCcgOiAnJyldXCI+XG4gICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cInRpdGxlKClcIj48L3NwYW4+PHN1cCAqbmdJZj1cImlzUmVxdWlyZWQoKVwiPio8L3N1cD5cbiAgICA8L2xhYmVsPlxuICAgIDxpbnB1dFxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgW25hbWVdPVwic2NoZW1hLmtleVwiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIoKVwiXG4gICAgICBbYnNDb25maWddPVwieyBjb250YWluZXJDbGFzczogJ3RoZW1lLWRlZmF1bHQnLCBkYXRlSW5wdXRGb3JtYXQ6ICdNTS9ERC9ZWVlZJyB9XCJcbiAgICAgIGJzRGF0ZXBpY2tlclxuICAgIC8+XG4gICAgPGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L2pmLWVycm9yPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIERhdGVDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge31cbiIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pmLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvblxuICAgICAgKm5nSWY9XCJpc1Zpc2libGVcIlxuICAgICAgW3R5cGVdPVwidHlwZVwiXG4gICAgICBbbmdDbGFzc109XCJjbGFzc1wiXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgKGNsaWNrKT1cImhhbmRsZUNsaWNrKCRldmVudClcIj5cbiAgICAgIHt7bGFiZWx9fVxuICAgIDwvYnV0dG9uPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGlzVmlzaWJsZTtcbiAgQElucHV0KCkgdHlwZTtcbiAgQElucHV0KCkgY2xhc3M7XG4gIEBJbnB1dCgpIGlzV29ya2luZztcbiAgQElucHV0KCkgZGlzYWJsZWQ7XG4gIEBJbnB1dCgpIHN1Ym1pdDtcbiAgQElucHV0KCkgbGFiZWw7XG4gIEBJbnB1dCgpIGNvbG9yID0gJyc7XG4gIEBPdXRwdXQoKSBoYW5kbGVCdXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBoYW5kbGVDbGljayhldmVudCkge1xuICAgIHRoaXMuaGFuZGxlQnV0dG9uQ2xpY2suZW1pdChldmVudCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuaW1wb3J0IGNyZWF0ZU51bWJlck1hc2sgZnJvbSAndGV4dC1tYXNrLWFkZG9ucy9kaXN0L2NyZWF0ZU51bWJlck1hc2snO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8bGFiZWwgW25nQ2xhc3NdPVwiWydqZi1sYWJlbCcsIHNjaGVtYS5rZXksIChpc1JlcXVpcmVkKCkgPyAncmVxdWlyZWQnIDogJycpXVwiPlxuICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJ0aXRsZSgpXCI+PC9zcGFuPjxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+XG4gICAgPC9sYWJlbD5cbiAgICA8aW5wdXRcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxuICAgICAgW2F0dHIudHlwZV09XCIndGV4dCdcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyKClcIlxuICAgICAgW3RleHRNYXNrXT1cInsgbWFzazogbnVtYmVyTWFza31cIlxuICAgICAgKGlucHV0KT1jbGVhbk1hc2soJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAvPlxuICAgIDxqZi1lcnJvciBbY29udHJvbF09XCJjb250cm9sXCI+PC9qZi1lcnJvcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBNb25leUNvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIG51bWJlck1hc2sgPSBjcmVhdGVOdW1iZXJNYXNrKHsgYWxsb3dEZWNpbWFsOiBmYWxzZSwgcHJlZml4OiAnJyB9KTtcblxuICBjbGVhbk1hc2sodmFsdWUpIHtcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUucmVwbGFjZSgvXFxEL2csICcnKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEpzb25Gb3JtRmllbGRzU2VydmljZSB9IGZyb20gJy4uL2pzb24tZm9ybS1maWVsZHMuc2VydmljZSc7XG5pbXBvcnQgeyBDaGVja2JveGdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2NoZWNrYm94Z3JvdXAvY2hlY2tib3hncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXVsdGlzZWxlY3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRhcmVhQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQm9vbGVhbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9ib29sZWFuL2Jvb2xlYW4uY29tcG9uZW50JztcbmltcG9ydCB7IE51bWJlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9udW1iZXIvbnVtYmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaG90b0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9waG90by9waG90by5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmFkaW9ncm91cENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9yYWRpb2dyb3VwL3JhZGlvZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cmluZ0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2RhdGUvZGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IE1vbmV5Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL21vbmV5L21vbmV5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPYmplY3RDb21wb25lbnQgfSBmcm9tICcuLi9zaGFyZWQvY29tcG9uZW50cy9vYmplY3Qvb2JqZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcnJheUNvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9jb21wb25lbnRzL2FycmF5L2FycmF5LmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKc29uRm9ybUJvb3RzdHJhcDQgZXh0ZW5kcyBKc29uRm9ybUZpZWxkc1NlcnZpY2Uge1xuICBmaWVsZFR5cGVzID0ge1xuICAgIHN0cmluZzogU3RyaW5nQ29tcG9uZW50LFxuICAgIHNlbGVjdDogU2VsZWN0Q29tcG9uZW50LFxuICAgIG51bWJlcjogTnVtYmVyQ29tcG9uZW50LFxuICAgIGJvb2xlYW46IEJvb2xlYW5Db21wb25lbnQsXG4gICAgcGhvdG86IFBob3RvQ29tcG9uZW50LFxuICAgIHRleHRhcmVhOiBUZXh0YXJlYUNvbXBvbmVudCxcbiAgICBvYmplY3Q6IE9iamVjdENvbXBvbmVudCxcbiAgICBhcnJheTogQXJyYXlDb21wb25lbnQsXG4gICAgZGF0ZTogRGF0ZUNvbXBvbmVudCxcbiAgICByYWRpb2dyb3VwOiBSYWRpb2dyb3VwQ29tcG9uZW50LFxuICAgIGNoZWNrYm94Z3JvdXA6IENoZWNrYm94Z3JvdXBDb21wb25lbnQsXG4gICAgbXVsdGlzZWxlY3Q6IE11bHRpc2VsZWN0Q29tcG9uZW50LFxuICAgIG1vbmV5OiBNb25leUNvbXBvbmVudCxcbiAgICBidXR0b246IEJ1dHRvbkNvbXBvbmVudFxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUdyb3VwIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL3NjaGVtYS1mb3JtLWdyb3VwJztcbmltcG9ydCB7IFNjaGVtYSB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdqZi1jb21wb25lbnQtY2hvb3NlciwgW2pmLWNvbXBvbmVudC1jaG9vc2VyXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGgyICpuZ0lmPVwic2NoZW1hICYmIHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgndGl0bGUnKSAmJiAhbmVzdGVkXCI+XG4gICAgICB7e3NjaGVtYS50aXRsZX19XG4gICAgPC9oMj5cbiAgICA8aDQgKm5nSWY9XCJzY2hlbWEgJiYgc2NoZW1hLmhhc093blByb3BlcnR5KCd0aXRsZScpICYmIG5lc3RlZFwiPlxuICAgICAge3tzY2hlbWEudGl0bGV9fVxuICAgIDwvaDQ+XG4gICAgPGRpdiBbbmdDbGFzc109XCJbJ2Zvcm0tY29udGFpbmVyJ11cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiICpuZ0lmPVwic2NoZW1hICYmIHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnZGVzY3JpcHRpb24nKVwiIFtpbm5lckhUTUxdPVwic2NoZW1hLmRlc2NyaXB0aW9uXCI+PC9kaXY+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjb250cm9sIG9mIGtleXMoZm9ybS5jb250cm9scylcIiBqZi1maWVsZCBbY29udHJvbF09XCJmb3JtLmdldChjb250cm9sKVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENob29zZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBmb3JtOiBTY2hlbWFGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIHNjaGVtYTogU2NoZW1hO1xuICBASW5wdXQoKSBuZXN0ZWQgPSBmYWxzZTtcbiAga2V5cyA9IE9iamVjdC5rZXlzO1xufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNjaGVtYUZvcm1Db250cm9sIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL3NjaGVtYS1mb3JtLWNvbnRyb2wnO1xuaW1wb3J0IHtKc29uRm9ybUZpZWxkc1NlcnZpY2V9IGZyb20gJy4uLy4uLy4uL2pzb24tZm9ybS1maWVsZHMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pmLWZpZWxkLCBbamYtZmllbGRdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRhaW5lciAjY29udGFpbmVyPjwvbmctY29udGFpbmVyPlxuICBgXG59KVxuXG5leHBvcnQgY2xhc3MgRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSkgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuICBASW5wdXQoKSBjb250cm9sOiBTY2hlbWFGb3JtQ29udHJvbDtcbiAgcHVibGljIHBhdHRlcm5zO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBqc29uRm9ybUZpZWxkc1NlcnZpY2U6IEpzb25Gb3JtRmllbGRzU2VydmljZSxcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5wYXR0ZXJucyA9IHt9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nZW5lcmF0ZUZpZWxkKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5nZW5lcmF0ZUZpZWxkKCk7XG4gIH1cblxuICBnZW5lcmF0ZUZpZWxkKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmNsZWFyKCk7XG4gICAgdGhpcy5qc29uRm9ybUZpZWxkc1NlcnZpY2VbMF0uc2V0Um9vdFZpZXdDb250YWluZXJSZWYodGhpcy5jb250YWluZXIpO1xuICAgIHRoaXMuanNvbkZvcm1GaWVsZHNTZXJ2aWNlWzBdLmFkZER5bmFtaWNDb21wb25lbnQodGhpcy5jb250cm9sKTtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gYGZpZWxkIG1hcmdpbi1ib3R0b20gJHt0aGlzLmdldENsYXNzKCl9IGZvcm0tZ3JvdXBgO1xuICB9XG5cbiAgZ2V0Q2xhc3MoZGVmYXVsdENsYXNzID0gJycpIHtcbiAgICBjb25zdCBmaWVsZENsYXNzID0gW2RlZmF1bHRDbGFzc107XG4gICAgZmllbGRDbGFzcy5wdXNoKHRoaXMuY29udHJvbC5zY2hlbWEudHlwZSk7XG4gICAgZmllbGRDbGFzcy5wdXNoKHRoaXMuY29udHJvbC5zY2hlbWEua2V5KTtcblxuICAgIGlmICh0aGlzLmNvbnRyb2wuc2NoZW1hLmhhc093blByb3BlcnR5KCdkZXNjcmlwdGlvbicpKSB7XG4gICAgICBmaWVsZENsYXNzLnB1c2goJ2hhcy1pbmZvJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29udHJvbC5zY2hlbWEuaGFzT3duUHJvcGVydHkoJ2Zvcm1hdCcpKSB7XG4gICAgICBmaWVsZENsYXNzLnB1c2godGhpcy5jb250cm9sLnNjaGVtYS5mb3JtYXQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnRyb2wuc3R5bGUgJiYgdGhpcy5jb250cm9sLnN0eWxlLmRlZmF1bHQgJiYgWydyYWRpb2dyb3VwJywgJ2NoZWNrYm94Z3JvdXAnXS5pbmRleE9mKHRoaXMuY29udHJvbC5zY2hlbWEuZm9ybWF0KSA9PT0gLTEpIHtcbiAgICAgIGZpZWxkQ2xhc3MucHVzaCh0aGlzLmNvbnRyb2wuc3R5bGUuZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpZWxkQ2xhc3MuZmlsdGVyKChkKSA9PiBkKS5qb2luKCcgJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0pzb25Gb3JtRmllbGRzU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vanNvbi1mb3JtLWZpZWxkcy5zZXJ2aWNlJztcbmltcG9ydCB7QnV0dG9uQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdqZi1mb3JtLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAjYnV0dG9uPjwvbmctY29udGFpbmVyPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1CdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGlzRm9ybVZhbGlkID0gdHJ1ZTtcbiAgQElucHV0KCkgbGFiZWwgPSAnJztcbiAgQElucHV0KCkgaXNNdWx0aVN0ZXAgPSBmYWxzZTtcbiAgQElucHV0KCkgc3RlcHMgPSBbXTtcbiAgQElucHV0KCkgc3VibWl0ID0gJyc7XG4gIEBJbnB1dCgpIGNvbnRpbnVlID0gJyc7XG4gIEBJbnB1dCgpIGNhbmNlbCA9ICcnO1xuICBASW5wdXQoKSBzdWJtaXRDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBjYW5jZWxDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBpc1dvcmtpbmcgPSBmYWxzZTtcbiAgQE91dHB1dCgpIGhhbmRsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAVmlld0NoaWxkKCdidXR0b24nLCB7cmVhZDogVmlld0NvbnRhaW5lclJlZn0pIGJ1dHRvbjogVmlld0NvbnRhaW5lclJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUganNvbkZvcm1GaWVsZHNTZXJ2aWNlOiBKc29uRm9ybUZpZWxkc1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmRyYXdCdXR0b24oKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZHJhd0J1dHRvbigpO1xuICB9XG5cbiAgZHJhd0J1dHRvbigpIHtcbiAgICB0aGlzLmJ1dHRvbi5jbGVhcigpO1xuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmpzb25Gb3JtRmllbGRzU2VydmljZVswXS5nZXQoJ2J1dHRvbicpKTtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmJ1dHRvbi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG4gICAgKDxCdXR0b25Db21wb25lbnQ+IGNvbXBvbmVudFJlZi5pbnN0YW5jZSkudHlwZSA9IHRoaXMuZ2V0VHlwZSgpO1xuICAgICg8QnV0dG9uQ29tcG9uZW50PiBjb21wb25lbnRSZWYuaW5zdGFuY2UpLmlzVmlzaWJsZSA9IHRoaXMuaXNWaXNpYmxlKCk7XG4gICAgKDxCdXR0b25Db21wb25lbnQ+IGNvbXBvbmVudFJlZi5pbnN0YW5jZSkuY2xhc3MgPSB0aGlzLmdldENsYXNzKCk7XG4gICAgKDxCdXR0b25Db21wb25lbnQ+IGNvbXBvbmVudFJlZi5pbnN0YW5jZSkuZGlzYWJsZWQgPSB0aGlzLmlzV29ya2luZztcbiAgICAoPEJ1dHRvbkNvbXBvbmVudD4gY29tcG9uZW50UmVmLmluc3RhbmNlKS5pc1dvcmtpbmcgPSB0aGlzLmlzV29ya2luZztcbiAgICAoPEJ1dHRvbkNvbXBvbmVudD4gY29tcG9uZW50UmVmLmluc3RhbmNlKS5sYWJlbCA9IHRoaXMuZ2V0TGFiZWwoKTtcbiAgICAoPEJ1dHRvbkNvbXBvbmVudD4gY29tcG9uZW50UmVmLmluc3RhbmNlKS5oYW5kbGVCdXR0b25DbGljay5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5jYW5jZWwubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrLmVtaXQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgICg8QnV0dG9uQ29tcG9uZW50PiBjb21wb25lbnRSZWYuaW5zdGFuY2UpLmNvbG9yID0gdGhpcy5zdWJtaXQgPyAncHJpbWFyeScgOiAnJztcbiAgfVxuXG4gIGdldENsYXNzKCkge1xuICAgIHJldHVybiAodGhpcy5jYW5jZWwubGVuZ3RoID4gMClcbiAgICAgID8gWydidG4gYnRuLWRlZmF1bHQgYnV0dG9uJywgdGhpcy5jYW5jZWxDbGFzcyB8fCAnJ11cbiAgICAgIDogWydidG4gYnRuLXByaW1hcnkgYnV0dG9uIGJ1dHRvbi0tYWNjZXB0JywgdGhpcy5zdWJtaXRDbGFzcyB8fCAnJywgKHRoaXMuaXNGb3JtVmFsaWQgPyAndmFsaWQnIDogJ2ludmFsaWQnKV07XG4gIH1cblxuICBpc1Zpc2libGUoKSB7XG4gICAgY29uc3Qgc3RlcCA9IHRoaXMuc3RlcHMuZmluZEluZGV4KChzKSA9PiBzLnZpc2libGUpO1xuICAgIGlmICh0aGlzLmlzTXVsdGlTdGVwICYmIHRoaXMuY2FuY2VsLmxlbmd0aCA+IDAgJiYgdGhpcy5zdGVwc1tzdGVwXSkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RlcHNbc3RlcF0udHlwZSAhPT0gJ2ZpcnN0JztcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldExhYmVsKCkge1xuICAgIGlmICh0aGlzLmlzTXVsdGlTdGVwICYmIHRoaXMuY2FuY2VsLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHN0ZXAgPSB0aGlzLnN0ZXBzLmZpbmRJbmRleCgocykgPT4gcy52aXNpYmxlKTtcbiAgICAgIGlmICh0aGlzLnN0ZXBzW3N0ZXBdICYmIHRoaXMuc3RlcHNbc3RlcF0udHlwZSAhPT0gJ2ZpcnN0Jykge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW5jZWw7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzTXVsdGlTdGVwKSB7XG4gICAgICBjb25zdCBzdGVwID0gdGhpcy5zdGVwcy5maW5kSW5kZXgoKHMpID0+IHMudmlzaWJsZSk7XG4gICAgICBpZiAodGhpcy5zdGVwc1tzdGVwXSAmJiB0aGlzLnN0ZXBzW3N0ZXBdLnR5cGUgIT09ICdsYXN0Jykge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuc3VibWl0O1xuICAgIH0gZWxzZSAgaWYgKHRoaXMuY2FuY2VsLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbmNlbDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zdWJtaXQ7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIGlmICh0aGlzLmNhbmNlbCkge1xuICAgICAgcmV0dXJuICdidXR0b24nO1xuICAgIH1cblxuICAgIHJldHVybiAnc3VibWl0JztcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamYtaW5mby1idXR0b24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxhXG4gICAgICBbYXR0ci5ocmVmXT1cIidqYXZhc2NyaXB0OnZvaWQoMCknXCJcbiAgICAgICpuZ0lmPVwidGl0bGVcIlxuICAgICAgW2F0dHIuY2xhc3NdPVwiJ2J0biBidG4tbGluayBpbmZvJ1wiIFthdHRyLnRpdGxlXT1cInRpdGxlXCI+SW5mbzwvYT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBJbmZvQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdGl0bGU7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENob29zZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hvb3Nlci9jaG9vc2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC9maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLWJ1dHRvbi9mb3JtLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5mb0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbmZvLWJ1dHRvbi9pbmZvLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dGFyZWFWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3RleHRhcmVhL3RleHRhcmVhLnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFJhZGlvZ3JvdXBWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3JhZGlvZ3JvdXAvcmFkaW9ncm91cC52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3NlbGVjdC9zZWxlY3Qudmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVZpZXdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvZGF0ZS9kYXRlLnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEJvb2xlYW5WaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2Jvb2xlYW4vYm9vbGVhbi52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaG90b1ZpZXdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvcGhvdG8vcGhvdG8udmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RyaW5nVmlld0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE51bWJlclZpZXdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbnVtYmVyL251bWJlci52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGVja2JveGdyb3VwVmlld0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9jaGVja2JveGdyb3VwL2NoZWNrYm94Z3JvdXAudmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT2JqZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL29iamVjdC9vYmplY3QuY29tcG9uZW50JztcbmltcG9ydCB7IE1vbmV5Vmlld0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9tb25leS9tb25leS52aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNdWx0aXNlbGVjdFZpZXdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3Qudmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSnNvbkZvcm1Db21wb25lbnQgfSBmcm9tICcuLi8uLi9qc29uLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVGV4dE1hc2tNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi10ZXh0LW1hc2snO1xuaW1wb3J0IHsgQXJyYXlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXJyYXkvYXJyYXkuY29tcG9uZW50JztcbmltcG9ydCB7IEFycmF5Vmlld0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcnJheS9hcnJheS52aWV3LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVGV4dE1hc2tNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBKc29uRm9ybUNvbXBvbmVudCxcbiAgICBDb21tb25Db21wb25lbnQsXG4gICAgQ2hvb3NlckNvbXBvbmVudCxcbiAgICBGaWVsZENvbXBvbmVudCxcbiAgICBGb3JtQnV0dG9uQ29tcG9uZW50LFxuICAgIEluZm9CdXR0b25Db21wb25lbnQsXG4gICAgU3RyaW5nVmlld0NvbXBvbmVudCxcbiAgICBTZWxlY3RWaWV3Q29tcG9uZW50LFxuICAgIE51bWJlclZpZXdDb21wb25lbnQsXG4gICAgQm9vbGVhblZpZXdDb21wb25lbnQsXG4gICAgUGhvdG9WaWV3Q29tcG9uZW50LFxuICAgIFRleHRhcmVhVmlld0NvbXBvbmVudCxcbiAgICBEYXRlVmlld0NvbXBvbmVudCxcbiAgICBSYWRpb2dyb3VwVmlld0NvbXBvbmVudCxcbiAgICBDaGVja2JveGdyb3VwVmlld0NvbXBvbmVudCxcbiAgICBNdWx0aXNlbGVjdFZpZXdDb21wb25lbnQsXG4gICAgTW9uZXlWaWV3Q29tcG9uZW50LFxuICAgIE9iamVjdENvbXBvbmVudCxcbiAgICBBcnJheUNvbXBvbmVudCxcbiAgICBBcnJheVZpZXdDb21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgSnNvbkZvcm1Db21wb25lbnQsXG4gICAgQ29tbW9uQ29tcG9uZW50LFxuICAgIENob29zZXJDb21wb25lbnQsXG4gICAgRmllbGRDb21wb25lbnQsXG4gICAgRm9ybUJ1dHRvbkNvbXBvbmVudCxcbiAgICBJbmZvQnV0dG9uQ29tcG9uZW50LFxuICAgIFN0cmluZ1ZpZXdDb21wb25lbnQsXG4gICAgU2VsZWN0Vmlld0NvbXBvbmVudCxcbiAgICBOdW1iZXJWaWV3Q29tcG9uZW50LFxuICAgIEJvb2xlYW5WaWV3Q29tcG9uZW50LFxuICAgIFBob3RvVmlld0NvbXBvbmVudCxcbiAgICBUZXh0YXJlYVZpZXdDb21wb25lbnQsXG4gICAgRGF0ZVZpZXdDb21wb25lbnQsXG4gICAgUmFkaW9ncm91cFZpZXdDb21wb25lbnQsXG4gICAgQ2hlY2tib3hncm91cFZpZXdDb21wb25lbnQsXG4gICAgTXVsdGlzZWxlY3RWaWV3Q29tcG9uZW50LFxuICAgIE1vbmV5Vmlld0NvbXBvbmVudCxcbiAgICBPYmplY3RDb21wb25lbnQsXG4gICAgQXJyYXlDb21wb25lbnQsXG4gICAgQXJyYXlWaWV3Q29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDaG9vc2VyQ29tcG9uZW50LFxuICAgIEZpZWxkQ29tcG9uZW50LFxuICAgIEZvcm1CdXR0b25Db21wb25lbnQsXG4gICAgSW5mb0J1dHRvbkNvbXBvbmVudCxcbiAgICBKc29uRm9ybUNvbXBvbmVudCxcbiAgICBDb21tb25Db21wb25lbnQsXG4gICAgQXJyYXlDb21wb25lbnQsXG4gICAgT2JqZWN0Q29tcG9uZW50XG4gIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge31cbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBKc29uRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vanNvbi1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBKc29uRm9ybURlZmF1bHRzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGVmYXVsdHMuc2VydmljZSc7XG5pbXBvcnQgeyBKc29uRm9ybVZhbGlkYXRvcnNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy92YWxpZGF0b3JzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZHMvY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSnNvbkZvcm1Cb290c3RyYXA0IH0gZnJvbSAnLi9mcmFtZXdvcmsvYm9vdHN0cmFwNC9qc29uLWZvcm0tYm9vdHN0cmFwNCc7XG5pbXBvcnQgeyBKc29uRm9ybUZpZWxkc1NlcnZpY2UgfSBmcm9tICcuL2ZyYW1ld29yay9qc29uLWZvcm0tZmllbGRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9mcmFtZXdvcmsvc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENvbW1vbkNvbXBvbmVudCxcbiAgICBKc29uRm9ybUNvbXBvbmVudFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBKc29uRm9ybUNvbXBvbmVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgSnNvbkZvcm1EZWZhdWx0c1NlcnZpY2UsXG4gICAgSnNvbkZvcm1WYWxpZGF0b3JzU2VydmljZVxuICBdXG59KVxuXG5leHBvcnQgY2xhc3MgSnNvbkZvcm1Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCguLi5mcmFtZXdvcmtzKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgY29uc3QgbG9hZEZyYW1ld29yayA9IGZyYW1ld29ya3MubGVuZ3RoXG4gICAgICA/IGZyYW1ld29ya3MubWFwKGZyYW1ld29yayA9PiBmcmFtZXdvcmsuZm9yUm9vdCgpLnByb3ZpZGVyc1swXSlcbiAgICAgIDogW3sgcHJvdmlkZTogSnNvbkZvcm1GaWVsZHNTZXJ2aWNlLCB1c2VDbGFzczogSnNvbkZvcm1Cb290c3RyYXA0LCBtdWx0aTogdHJ1ZSB9XTtcblxuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSnNvbkZvcm1Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSnNvbkZvcm1EZWZhdWx0c1NlcnZpY2UsXG4gICAgICAgIEpzb25Gb3JtVmFsaWRhdG9yc1NlcnZpY2UsXG4gICAgICAgIC4uLmxvYWRGcmFtZXdvcmtcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pmLWVycm9yLCBbamYtZXJyb3JdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICpuZ0lmPVwiY29udHJvbC5pbnZhbGlkICYmIChjb250cm9sLmRpcnR5IHx8IGNvbnRyb2wudG91Y2hlZClcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1sncmVxdWlyZWQnXVwiPlxuICAgICAgICBUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ3BhdHRlcm4nXVwiPlxuICAgICAgICBJbnB1dCB2YWx1ZSBpcyBpbnZhbGlkLlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ21pbmxlbmd0aCddXCI+XG4gICAgICAgIElucHV0IGhhcyB0byBiZSBhIG1pbmltdW0gb2Yge3tjb250cm9sLmVycm9yc1snbWlubGVuZ3RoJ11bJ3JlcXVpcmVkTGVuZ3RoJ119fSBjaGFyYWN0ZXJzLlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ21heGxlbmd0aCddXCI+XG4gICAgICAgIElucHV0IGNhbiBjb250YWluIGEgbWF4aW11bSBvZiB7e2NvbnRyb2wuZXJyb3JzWydtYXhsZW5ndGgnXVsncmVxdWlyZWRMZW5ndGgnXX19IGNoYXJhY3RlcnMuXG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1snbWluJ11cIj5cbiAgICAgICAgRW50ZXIgYSB2YWx1ZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8ge3tjb250cm9sLmVycm9yc1snbWluJ11bJ21pbiddfX0uXG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1snbWF4J11cIj5cbiAgICAgICAgRW50ZXIgYSB2YWx1ZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8ge3tjb250cm9sLmVycm9yc1snbWF4J11bJ21heCddfX0uXG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1snY3VzdG9tRXJyb3InXVwiPlxuICAgICAgICB7e2NvbnRyb2wuZXJyb3JzWydjdXN0b21FcnJvciddfX1cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY29udHJvbDtcbn1cbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN0cmluZ0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0TWFza01vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXRleHQtbWFzayc7XG5pbXBvcnQgeyBKc29uRm9ybUJvb3RzdHJhcDQgfSBmcm9tICcuL2pzb24tZm9ybS1ib290c3RyYXA0JztcbmltcG9ydCB7IEpzb25Gb3JtRmllbGRzU2VydmljZSB9IGZyb20gJy4uL2pzb24tZm9ybS1maWVsZHMuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2RhdGUvZGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvZXJyb3IvZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IEJvb2xlYW5Db21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvYm9vbGVhbi9ib29sZWFuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdW1iZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbnVtYmVyL251bWJlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRhcmVhQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9uZXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbW9uZXkvbW9uZXkuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IENoZWNrYm94Z3JvdXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvY2hlY2tib3hncm91cC9jaGVja2JveGdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNdWx0aXNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9tdWx0aXNlbGVjdC9tdWx0aXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGhvdG9Db21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvcGhvdG8vcGhvdG8uY29tcG9uZW50JztcbmltcG9ydCB7IFJhZGlvZ3JvdXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvcmFkaW9ncm91cC9yYWRpb2dyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgVGV4dE1hc2tNb2R1bGUsXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIEJzRGF0ZXBpY2tlck1vZHVsZS5mb3JSb290KClcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU3RyaW5nQ29tcG9uZW50LFxuICAgIFNlbGVjdENvbXBvbmVudCxcbiAgICBEYXRlQ29tcG9uZW50LFxuICAgIFRleHRhcmVhQ29tcG9uZW50LFxuICAgIEVycm9yQ29tcG9uZW50LFxuICAgIE1vbmV5Q29tcG9uZW50LFxuICAgIE51bWJlckNvbXBvbmVudCxcbiAgICBCb29sZWFuQ29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBDaGVja2JveGdyb3VwQ29tcG9uZW50LFxuICAgIE11bHRpc2VsZWN0Q29tcG9uZW50LFxuICAgIFBob3RvQ29tcG9uZW50LFxuICAgIFJhZGlvZ3JvdXBDb21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgU3RyaW5nQ29tcG9uZW50LFxuICAgIFNlbGVjdENvbXBvbmVudCxcbiAgICBEYXRlQ29tcG9uZW50LFxuICAgIFRleHRhcmVhQ29tcG9uZW50LFxuICAgIEVycm9yQ29tcG9uZW50LFxuICAgIE1vbmV5Q29tcG9uZW50LFxuICAgIE51bWJlckNvbXBvbmVudCxcbiAgICBCb29sZWFuQ29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBDaGVja2JveGdyb3VwQ29tcG9uZW50LFxuICAgIE11bHRpc2VsZWN0Q29tcG9uZW50LFxuICAgIFBob3RvQ29tcG9uZW50LFxuICAgIFJhZGlvZ3JvdXBDb21wb25lbnRcbiAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEpzb25Gb3JtQm9vdHN0cmFwNE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSnNvbkZvcm1Cb290c3RyYXA0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBKc29uRm9ybUZpZWxkc1NlcnZpY2UsXG4gICAgICAgICAgdXNlQ2xhc3M6IEpzb25Gb3JtQm9vdHN0cmFwNCxcbiAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPGlucHV0XG4gICAgICAgIG1hdElucHV0XG4gICAgICAgIFthdHRyLm5hbWVdPVwic2NoZW1hLmtleVwiXG4gICAgICAgIFthdHRyLnR5cGVdPVwidHlwZSgpXCJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICAgICAgW2F0dHIubWluTGVuZ3RoXT1cInNjaGVtYS5taW5MZW5ndGggfHwgbnVsbFwiXG4gICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyKClcIlxuICAgICAgICBbdGV4dE1hc2tdPVwieyBtYXNrOiBnZXRNYXNrKCkgfVwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJ0aXRsZSh0cnVlKVwiXG4gICAgICAvPlxuICAgICAgPG1hdC1lcnJvciBqZi1lcnJvciBbY29udHJvbF09XCJjb250cm9sXCI+PC9tYXQtZXJyb3I+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBTdHJpbmdNYXRlcmlhbENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgW25hbWVdPVwic2NoZW1hLmtleVwiXG4gICAgICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgICAgICAgIFthdHRyLm1pbkxlbmd0aF09XCJzY2hlbWEubWluTGVuZ3RoIHx8IG51bGxcIlxuICAgICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyKClcIlxuICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJ0aXRsZSh0cnVlKVwiPlxuICAgICAgPC90ZXh0YXJlYT5cbiAgICAgIDxtYXQtZXJyb3IgamYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvbWF0LWVycm9yPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgVGV4dGFyZWFNYXRlcmlhbENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcblxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1zZWxlY3RcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgIFthdHRyLm5hbWVdPVwic2NoZW1hLmtleVwiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiXG4gICAgICBwbGFjZWhvbGRlcj1cInt7dGl0bGUodHJ1ZSl9fVwiXG4gICAgPlxuICAgICAgPG1hdC1vcHRpb24gW2Rpc2FibGVkXT1cInRydWVcIj5cbiAgICAgICAgICB7e3BsYWNlaG9sZGVyKCl9fVxuICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGVuIG9mIHRoaXMuc2NoZW1hLmVudW07IGxldCBpID0gaW5kZXhcIiBbdmFsdWVdPVwiZW5cIj5cbiAgICAgICAgICB7e2VudW1OYW1lcyhpKX19XG4gICAgICA8L21hdC1vcHRpb24+XG4gICAgPC9tYXQtc2VsZWN0PlxuICAgIDxtYXQtZXJyb3IgamYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvbWF0LWVycm9yPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0TWF0ZXJpYWxDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge31cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsIFthdHRyLmNsYXNzXT1cInNjaGVtYS5rZXlcIiBbbmdDbGFzc109XCJ7J21hcmdpbi1ib3R0b20tLWhhbGYnOiB0cnVlLCByZXF1aXJlZDogaXNSZXF1aXJlZCgpfVwiPlxuICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cInRpdGxlKHRydWUpXCI+PC9zcGFuPjxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+PC9sYWJlbD5cblxuICAgICAgPG1hdC1yYWRpby1ncm91cCBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiICpuZ0Zvcj1cImxldCBlbnVtIG9mIHRoaXMuc2NoZW1hLmVudW07IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b25cbiAgICAgICAgICBbY2hlY2tlZF09XCJjb250cm9sLnZhbHVlID09PSBlbnVtLnRvU3RyaW5nKClcIlxuICAgICAgICAgIFt2YWx1ZV09XCJlbnVtLnRvU3RyaW5nKClcIlxuICAgICAgICA+XG4gICAgICAgICAge3tlbnVtTmFtZXMoaSl9fVxuICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XG4gICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb2dyb3VwTWF0ZXJpYWxDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsIFthdHRyLmNsYXNzXT1cInNjaGVtYS5rZXlcIiBbbmdDbGFzc109XCJ7cmVxdWlyZWQ6IGlzUmVxdWlyZWQoKX1cIj5cbiAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwidGl0bGUodHJ1ZSlcIj48L3NwYW4+XG4gICAgPC9sYWJlbD5cbiAgICA8ZGl2ICpuZ0lmPVwicHJldmlld1NyY0V4aXN0cygpOyBlbHNlIGFkZEltYWdlXCIgY2xhc3M9XCJwaG90by1wcmV2aWV3XCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzPVwicGhvdG8tYWRkXCJcbiAgICAgICAgbWF0LWJ1dHRvblxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1pbWFnZV09XCJtYWtlVHJ1c3RlZEltYWdlKHBob3RvRGF0YSlcIlxuICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1zaXplXT1cIidjb3ZlcidcIlxuICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1yZXBlYXRdPVwiJ25vLXJlcGVhdCdcIlxuICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IGZpbGVJbnB1dC5jbGljaygpO1wiXG4gICAgICA+XG4gICAgICAgIDxtYXQtaWNvbj5hZGRfYV9waG90bzwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3M9XCJwaG90by1yZW1vdmVcIlxuICAgICAgICBtYXQtbWluaS1mYWJcbiAgICAgICAgY29sb3I9XCJ3YXJuXCJcbiAgICAgICAgKGNsaWNrKT1cImNsZWFyUGhvdG8oKVwiXG4gICAgICA+XG4gICAgICAgIDxtYXQtaWNvbj5jbG9zZTwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8bmctdGVtcGxhdGUgI2FkZEltYWdlPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzcz1cInBob3RvLWFkZFwiXG4gICAgICAgIG1hdC1idXR0b25cbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgKGNsaWNrKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBmaWxlSW5wdXQuY2xpY2soKTtcIlxuICAgICAgPlxuICAgICAgICA8bWF0LWljb24+YWRkX2FfcGhvdG88L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8aW5wdXQgI2ZpbGVJbnB1dCB0eXBlPVwiZmlsZVwiIFtuYW1lXT1cInNjaGVtYS5rZXlcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIi8+XG4gICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBbbmFtZV09XCJzY2hlbWEua2V5XCIgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIi8+XG4gICAgPGRpdiBjbGFzcz1cIm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyXCIgKm5nSWY9XCJlcnJvclwiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiPlxuICAgICAgPG1hdC1lcnJvciBjbGFzcz1cIm1hdC1lcnJvclwiPlBsZWFzZSB1cGxvYWQgYSB2YWxpZCBwaG90byBmb3JtYXQgKEpQRywgUE5HKTwvbWF0LWVycm9yPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8amYtZXJyb3IgW2NvbnRyb2xdPVwiY29udHJvbFwiPjwvamYtZXJyb3I+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgUGhvdG9NYXRlcmlhbENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIHBob3RvRGF0YTogc3RyaW5nO1xuICBlcnJvciA9IGZhbHNlO1xuXG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvY2Vzc0ZpbGUocmVhZGVyLnJlc3VsdCwgZmlsZS50eXBlKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnBob3RvRGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodGhpcy5waG90b0RhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZihmaWxlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH1cbiAgfVxuXG4gIHByZXZpZXdTcmNFeGlzdHMoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiAodGhpcy5waG90b0RhdGEpID09PSAnc3RyaW5nJztcbiAgfVxuXG4gIGNsZWFyUGhvdG8oKSB7XG4gICAgdGhpcy5waG90b0RhdGEgPSBudWxsO1xuICAgIHRoaXMuY29udHJvbC5yZXNldCgpO1xuICB9XG5cbiAgcHJvY2Vzc0ZpbGUoZGF0YVVSTCwgZmlsZVR5cGUpIHtcbiAgICBjb25zdCBtYXhXaWR0aCA9IDEwMjQ7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gMTAyNDtcblxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gZGF0YVVSTDtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gaW1hZ2Uud2lkdGg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGltYWdlLmhlaWdodDtcbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzaXplID0gKHdpZHRoID4gbWF4V2lkdGgpIHx8IChoZWlnaHQgPiBtYXhIZWlnaHQpO1xuXG4gICAgICAgIGlmICghc2hvdWxkUmVzaXplKSB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhVVJMKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBuZXdXaWR0aDtcbiAgICAgICAgbGV0IG5ld0hlaWdodDtcblxuICAgICAgICBpZiAod2lkdGggPiBoZWlnaHQpIHtcbiAgICAgICAgICBuZXdIZWlnaHQgPSBoZWlnaHQgKiAobWF4V2lkdGggLyB3aWR0aCk7XG4gICAgICAgICAgbmV3V2lkdGggPSBtYXhXaWR0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdXaWR0aCA9IHdpZHRoICogKG1heEhlaWdodCAvIGhlaWdodCk7XG4gICAgICAgICAgbmV3SGVpZ2h0ID0gbWF4SGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IG5ld1dpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBuZXdXaWR0aCwgbmV3SGVpZ2h0KTtcblxuICAgICAgICByZXNvbHZlKGNhbnZhcy50b0RhdGFVUkwoZmlsZVR5cGUpKTtcbiAgICAgIH07XG5cbiAgICAgIGltYWdlLm9uZXJyb3IgPSAoZXJyKSA9PiByZWplY3QoZXJyKTtcbiAgICB9KTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPGlucHV0XG4gICAgICAgIG1hdElucHV0XG4gICAgICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxuICAgICAgICBbYXR0ci50eXBlXT1cIidudW1iZXInXCJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlcigpXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInRpdGxlKHRydWUpXCJcbiAgICAgIC8+XG4gICAgICA8bWF0LWVycm9yIGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L21hdC1lcnJvcj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlck1hdGVyaWFsQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIiBuYW1lPVwibmFtZVwiIG11bHRpcGxlPlxuICAgICAgPG1hdC1vcHRpb25cbiAgICAgICAgKm5nRm9yPVwibGV0IGVuIG9mIHNjaGVtYS5lbnVtOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgW3ZhbHVlXT1cImVuXCI+XG4gICAgICAgIHt7ZW51bU5hbWVzKGkpfX1cbiAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1zZWxlY3Q+XG4gICAgPG1hdC1lcnJvciBqZi1lcnJvciBbY29udHJvbF09XCJjb250cm9sXCI+PC9tYXQtZXJyb3I+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlzZWxlY3RNYXRlcmlhbENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIGVudW1OYW1lcyhpbmRleCkge1xuICAgIHJldHVybiB0eXBlb2YodGhpcy5zY2hlbWEuZW51bU5hbWVzKSA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gdGhpcy5zY2hlbWEuZW51bVtpbmRleF1cbiAgICAgIDogdGhpcy5zY2hlbWEuZW51bU5hbWVzW2luZGV4XTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtY2hlY2tib3hcbiAgICAqbmdGb3I9XCJsZXQgY2hpbGQgb2YgdGhpcy5jb250cm9sWydjb250cm9scyddOyBsZXQgaSA9IGluZGV4XCJcbiAgICBbYXR0ci5pZF09XCJnZXRJZChpLCBzY2hlbWEuZW51bVtpXSlcIlxuICAgIFtjaGVja2VkXT1cImNoaWxkLnZhbHVlID09PSBzY2hlbWEuZW51bVtpXVwiXG4gICAgW25hbWVdPVwic2NoZW1hLmtleVwiXG4gICAgW2Zvcm1Db250cm9sXT1cImNoaWxkXCJcbiAgICAoY2hhbmdlKT1cInNldFZhbHVlKCRldmVudCwgaSlcIlxuICAgIFt2YWx1ZV09XCJzY2hlbWEuZW51bVtpXVwiXG4gICAgPlxuICAgICAgICB7e2VudW1OYW1lcyhpKX19XG4gICAgPC9tYXQtY2hlY2tib3g+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hncm91cE1hdGVyaWFsQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHtcbiAgY2hlY2tib3hHcm91cFZhbHVlcyA9IFtdO1xuICByYW5kb21TdWZmaXggPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XG5cbiAgc2V0VmFsdWUoZXZlbnQsIGluZGV4KSB7XG4gICAgaWYgKHRoaXMuY2hlY2tib3hHcm91cFZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuY2hlY2tib3hHcm91cFZhbHVlcyA9IG5ldyBBcnJheSh0aGlzLmNvbnRyb2xbJ2NvbnRyb2xzJ10ubGVuZ3RoKS5maWxsKG51bGwpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNoZWNrYm94R3JvdXBWYWx1ZXNbaW5kZXhdID09PSBudWxsKSB7XG4gICAgICBldmVudC50YXJnZXQudmFsdWUgPSB0aGlzLnNjaGVtYS5lbnVtW2luZGV4XTtcbiAgICAgIHRoaXMuY2hlY2tib3hHcm91cFZhbHVlc1tpbmRleF0gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hlY2tib3hHcm91cFZhbHVlc1tpbmRleF0gPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh0aGlzLmNoZWNrYm94R3JvdXBWYWx1ZXMpO1xuICB9XG5cbiAgZ2V0SWQoaSwgdmFsKSB7XG4gICAgcmV0dXJuIGAke2l9LSR7dmFsLnJlcGxhY2UoL1tcXFdfXSsvZywgJycpfSske3RoaXMucmFuZG9tU3VmZml4fWA7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwic2xpZGUtY29udGFpbmVyXCI+XG4gICAgICA8bWF0LXNsaWRlLXRvZ2dsZVxuICAgICAgW2lkXT1cInNjaGVtYS5rZXlcIlxuICAgICAgW25hbWVdPVwic2NoZW1hLmtleVwiXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIj57e3RpdGxlKHRydWUpfX08L21hdC1zbGlkZS10b2dnbGU+XG4gICAgPC9kaXY+XG4gICAgPGpmLWVycm9yIFtjb250cm9sXT1cImNvbnRyb2xcIj48L2pmLWVycm9yPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEJvb2xlYW5NYXRlcmlhbENvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbmNvbnN0IE1ZX0ZPUk1BVFMgPSB7XG4gIHBhcnNlOiB7XG4gICAgZGF0ZUlucHV0OiAnTEwnLFxuICB9LFxuICBkaXNwbGF5OiB7XG4gICAgZGF0ZUlucHV0OiAnTEwnLFxuICAgIG1vbnRoWWVhckxhYmVsOiAnTU1NIFlZWVknLFxuICAgIGRhdGVBMTF5TGFiZWw6ICdMTCcsXG4gICAgbW9udGhZZWFyQTExeUxhYmVsOiAnTU1NTSBZWVlZJyxcbiAgfSxcbn07XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBtYXRJbnB1dFxuICAgICAgICBbbWF0RGF0ZXBpY2tlcl09J215RGF0ZXBpY2tlcidcbiAgICAgICAgKGNsaWNrKT1cIm15RGF0ZXBpY2tlci5vcGVuKClcIlxuICAgICAgICBbZm9ybUNvbnRyb2xdPSdjb250cm9sJ1xuICAgICAgICBbcGxhY2Vob2xkZXJdPSd0aXRsZSh0cnVlKSdcbiAgICAgICAgW21pbl09XCJtaW5EYXRlKClcIlxuICAgICAgICBbbWF4XT1cIm1heERhdGUoKVwiXG4gICAgICA+XG4gICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT0nbXlEYXRlcGlja2VyJz48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICAgIDxtYXQtZGF0ZXBpY2tlciAjbXlEYXRlcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG4gICAgICA8bWF0LWVycm9yIGpmLWVycm9yIFtjb250cm9sXT0nY29udHJvbCc+PC9tYXQtZXJyb3I+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlTWF0ZXJpYWxDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICBtaW5EYXRlKCkge1xuICAgIHJldHVybiBpc05hTihuZXcgRGF0ZSh0aGlzLnNjaGVtYS5taW5pbXVtKS5nZXREYXRlKCkpID8gbnVsbCA6IG5ldyBEYXRlKHRoaXMuc2NoZW1hLm1pbmltdW0pO1xuICB9XG5cbiAgbWF4RGF0ZSgpIHtcbiAgICByZXR1cm4gaXNOYU4obmV3IERhdGUodGhpcy5zY2hlbWEubWF4aW11bSkuZ2V0RGF0ZSgpKSA/IG51bGwgOiBuZXcgRGF0ZSh0aGlzLnNjaGVtYS5tYXhpbXVtKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL2J1dHRvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdqZi1idXR0b24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b25cbiAgICAgIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICBbY29sb3JdPVwiY29sb3JcIlxuICAgICAgKm5nSWY9XCJpc1Zpc2libGVcIlxuICAgICAgW3R5cGVdPVwidHlwZVwiXG4gICAgICBbbmdDbGFzc109XCJjbGFzc1wiXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgKGNsaWNrKT1cImhhbmRsZUNsaWNrKCRldmVudClcIj5cbiAgICAgIHt7bGFiZWx9fVxuICAgIDwvYnV0dG9uPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbk1hdGVyaWFsQ29tcG9uZW50IGV4dGVuZHMgQnV0dG9uQ29tcG9uZW50IHt9XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXJyYXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9mcmFtZXdvcmsvc2hhcmVkL2NvbXBvbmVudHMvYXJyYXkvYXJyYXkuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPG1hdC1jYXJkIFtuZ0NsYXNzXT1cIlsnb2JqZWN0JywgY29udHJvbC5zY2hlbWEua2V5XVwiPlxuICAgICAgPGg2ICpuZ0lmPVwiZ2V0TGVnZW5kKGNvbnRyb2wpLmxlbmd0aFwiPnt7Z2V0TGVnZW5kKGNvbnRyb2wpfX08L2g2PlxuICAgICAgPGRpdiBjbGFzcz1cImFycmF5LWl0ZW1zXCI+XG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGFyckNvbnRyb2wgb2YgZ2V0RW5hYmxlZENvbnRyb2xzKGNvbnRyb2wpOyBsZXQgaSA9IGluZGV4O1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgamYtY29tcG9uZW50LWNob29zZXIgW2Zvcm1dPVwiYXJyQ29udHJvbFwiPjwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBtYXQtYnV0dG9uXG4gICAgICAgICAgICAgICpuZ0lmPVwiY29udHJvbC5jb250cm9scy5sZW5ndGggPiAxXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpOyByZW1vdmVDb250cm9sKGNvbnRyb2wsIGkpXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ3YXJuXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJyZW1vdmVcIlxuICAgICAgICAgICAgPlJlbW92ZTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBhZGRDb250cm9sKGNvbnRyb2wpXCI+QWRkPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L21hdC1jYXJkPlxuICBgXG59KVxuXG5leHBvcnQgY2xhc3MgQXJyYXlNYXRlcmlhbENvbXBvbmVudCBleHRlbmRzIEFycmF5Q29tcG9uZW50IHt9XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdHJpbmdNYXRlcmlhbENvbXBvbmVudH0gZnJvbSAnLi4vLi4vZmllbGRzL3N0cmluZy9zdHJpbmcubWF0ZXJpYWwuY29tcG9uZW50JztcbmltcG9ydCB7SnNvbkZvcm1GaWVsZHNTZXJ2aWNlfSBmcm9tICcuLi9qc29uLWZvcm0tZmllbGRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGV4dGFyZWFNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy90ZXh0YXJlYS90ZXh0YXJlYS5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0TWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvc2VsZWN0L3NlbGVjdC5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmFkaW9ncm91cE1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3JhZGlvZ3JvdXAvcmFkaW9ncm91cC5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGhvdG9NYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9waG90by9waG90by5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVtYmVyTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbnVtYmVyL251bWJlci5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXVsdGlzZWxlY3RNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9tdWx0aXNlbGVjdC9tdWx0aXNlbGVjdC5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tib3hncm91cE1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2NoZWNrYm94Z3JvdXAvY2hlY2tib3hncm91cC5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQm9vbGVhbk1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2Jvb2xlYW4vYm9vbGVhbi5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZU1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2RhdGUvZGF0ZS5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtCdXR0b25NYXRlcmlhbENvbXBvbmVudH0gZnJvbSAnLi4vLi4vZmllbGRzL2J1dHRvbi9idXR0b24ubWF0ZXJpYWwuY29tcG9uZW50JztcbmltcG9ydCB7IE1vbmV5Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL21vbmV5L21vbmV5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPYmplY3RDb21wb25lbnQgfSBmcm9tICcuLi9zaGFyZWQvY29tcG9uZW50cy9vYmplY3Qvb2JqZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcnJheU1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2FycmF5L2FycmF5Lm1hdGVyaWFsLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKc29uRm9ybU1hdGVyaWFsIGV4dGVuZHMgSnNvbkZvcm1GaWVsZHNTZXJ2aWNlIHtcbiAgZmllbGRUeXBlcyA9IHtcbiAgICBzdHJpbmc6IFN0cmluZ01hdGVyaWFsQ29tcG9uZW50LFxuICAgIHNlbGVjdDogU2VsZWN0TWF0ZXJpYWxDb21wb25lbnQsXG4gICAgbnVtYmVyOiBOdW1iZXJNYXRlcmlhbENvbXBvbmVudCxcbiAgICBib29sZWFuOiBCb29sZWFuTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgcGhvdG86IFBob3RvTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgdGV4dGFyZWE6IFRleHRhcmVhTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgb2JqZWN0OiBPYmplY3RDb21wb25lbnQsXG4gICAgYXJyYXk6IEFycmF5TWF0ZXJpYWxDb21wb25lbnQsXG4gICAgZGF0ZTogRGF0ZU1hdGVyaWFsQ29tcG9uZW50LFxuICAgIHJhZGlvZ3JvdXA6IFJhZGlvZ3JvdXBNYXRlcmlhbENvbXBvbmVudCxcbiAgICBjaGVja2JveGdyb3VwOiBDaGVja2JveGdyb3VwTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgbXVsdGlzZWxlY3Q6IE11bHRpc2VsZWN0TWF0ZXJpYWxDb21wb25lbnQsXG4gICAgbW9uZXk6IE1vbmV5Q29tcG9uZW50LFxuICAgIGJ1dHRvbjogQnV0dG9uTWF0ZXJpYWxDb21wb25lbnRcbiAgfTtcbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pmLWVycm9yLCBbamYtZXJyb3JdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5pbnZhbGlkICYmIChjb250cm9sLmRpcnR5IHx8IGNvbnRyb2wudG91Y2hlZClcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1sncmVxdWlyZWQnXVwiPlxuICAgICAgICBUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ3BhdHRlcm4nXVwiPlxuICAgICAgICBJbnB1dCB2YWx1ZSBpcyBpbnZhbGlkLlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ21pbmxlbmd0aCddXCI+XG4gICAgICAgIElucHV0IGhhcyB0byBiZSBhIG1pbmltdW0gb2Yge3tjb250cm9sLmVycm9yc1snbWlubGVuZ3RoJ11bJ3JlcXVpcmVkTGVuZ3RoJ119fSBjaGFyYWN0ZXJzLlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbC5lcnJvcnMgJiYgY29udHJvbC5lcnJvcnNbJ21heGxlbmd0aCddXCI+XG4gICAgICAgIElucHV0IGNhbiBjb250YWluIGEgbWF4aW11bSBvZiB7e2NvbnRyb2wuZXJyb3JzWydtYXhsZW5ndGgnXVsncmVxdWlyZWRMZW5ndGgnXX19IGNoYXJhY3RlcnMuXG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1snbWluJ11cIj5cbiAgICAgICAgRW50ZXIgYSB2YWx1ZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8ge3tjb250cm9sLmVycm9yc1snbWluJ11bJ21pbiddfX0uXG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1snbWF4J11cIj5cbiAgICAgICAgRW50ZXIgYSB2YWx1ZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8ge3tjb250cm9sLmVycm9yc1snbWF4J11bJ21heCddfX0uXG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1snY3VzdG9tRXJyb3InXVwiPlxuICAgICAgICB7e2NvbnRyb2wuZXJyb3JzWydjdXN0b21FcnJvciddfX1cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yTWF0ZXJpYWxDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICBASW5wdXQoKSBjb250cm9sO1xufVxuIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVGV4dE1hc2tNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi10ZXh0LW1hc2snO1xuaW1wb3J0IHtcbiAgTWF0QnV0dG9uTW9kdWxlLFxuICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gIE1hdElucHV0TW9kdWxlLFxuICBNYXRTZWxlY3RNb2R1bGUsXG4gIE1hdFJhZGlvTW9kdWxlLFxuICBNYXRDaGVja2JveE1vZHVsZSxcbiAgTWF0SWNvbk1vZHVsZSxcbiAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gIE1hdERhdGVwaWNrZXJNb2R1bGUsIE1hdE5hdGl2ZURhdGVNb2R1bGUsIE1hdENhcmRNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgU3RyaW5nTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvc3RyaW5nL3N0cmluZy5tYXRlcmlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSnNvbkZvcm1NYXRlcmlhbH0gZnJvbSAnLi9qc29uLWZvcm0tbWF0ZXJpYWwnO1xuaW1wb3J0IHsgSnNvbkZvcm1GaWVsZHNTZXJ2aWNlIH0gZnJvbSAnLi4vanNvbi1mb3JtLWZpZWxkcy5zZXJ2aWNlJztcbmltcG9ydCB7IFRleHRhcmVhTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvdGV4dGFyZWEvdGV4dGFyZWEubWF0ZXJpYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdE1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL3NlbGVjdC9zZWxlY3QubWF0ZXJpYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFJhZGlvZ3JvdXBNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9yYWRpb2dyb3VwL3JhZGlvZ3JvdXAubWF0ZXJpYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFBob3RvTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvcGhvdG8vcGhvdG8ubWF0ZXJpYWwuY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrYm94Z3JvdXBNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9jaGVja2JveGdyb3VwL2NoZWNrYm94Z3JvdXAubWF0ZXJpYWwuY29tcG9uZW50JztcbmltcG9ydCB7IE51bWJlck1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL251bWJlci9udW1iZXIubWF0ZXJpYWwuY29tcG9uZW50JztcbmltcG9ydCB7IE11bHRpc2VsZWN0TWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3QubWF0ZXJpYWwuY29tcG9uZW50JztcbmltcG9ydCB7IEJvb2xlYW5NYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9ib29sZWFuL2Jvb2xlYW4ubWF0ZXJpYWwuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9kYXRlL2RhdGUubWF0ZXJpYWwuY29tcG9uZW50JztcbmltcG9ydCB7IEVycm9yTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZHMvZXJyb3IvZXJyb3IubWF0ZXJpYWwuY29tcG9uZW50JztcbmltcG9ydCB7IEJ1dHRvbk1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGRzL2J1dHRvbi9idXR0b24ubWF0ZXJpYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZX0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQXJyYXlNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9hcnJheS9hcnJheS5tYXRlcmlhbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgVGV4dE1hc2tNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU3RyaW5nTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgVGV4dGFyZWFNYXRlcmlhbENvbXBvbmVudCxcbiAgICBTZWxlY3RNYXRlcmlhbENvbXBvbmVudCxcbiAgICBSYWRpb2dyb3VwTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgUGhvdG9NYXRlcmlhbENvbXBvbmVudCxcbiAgICBOdW1iZXJNYXRlcmlhbENvbXBvbmVudCxcbiAgICBNdWx0aXNlbGVjdE1hdGVyaWFsQ29tcG9uZW50LFxuICAgIENoZWNrYm94Z3JvdXBNYXRlcmlhbENvbXBvbmVudCxcbiAgICBCb29sZWFuTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgRGF0ZU1hdGVyaWFsQ29tcG9uZW50LFxuICAgIEVycm9yTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgQnV0dG9uTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgQXJyYXlNYXRlcmlhbENvbXBvbmVudFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBTdHJpbmdNYXRlcmlhbENvbXBvbmVudCxcbiAgICBUZXh0YXJlYU1hdGVyaWFsQ29tcG9uZW50LFxuICAgIFNlbGVjdE1hdGVyaWFsQ29tcG9uZW50LFxuICAgIFJhZGlvZ3JvdXBNYXRlcmlhbENvbXBvbmVudCxcbiAgICBQaG90b01hdGVyaWFsQ29tcG9uZW50LFxuICAgIE51bWJlck1hdGVyaWFsQ29tcG9uZW50LFxuICAgIE11bHRpc2VsZWN0TWF0ZXJpYWxDb21wb25lbnQsXG4gICAgQ2hlY2tib3hncm91cE1hdGVyaWFsQ29tcG9uZW50LFxuICAgIEJvb2xlYW5NYXRlcmlhbENvbXBvbmVudCxcbiAgICBEYXRlTWF0ZXJpYWxDb21wb25lbnQsXG4gICAgRXJyb3JNYXRlcmlhbENvbXBvbmVudCxcbiAgICBCdXR0b25NYXRlcmlhbENvbXBvbmVudCxcbiAgICBBcnJheU1hdGVyaWFsQ29tcG9uZW50XG4gIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBKc29uRm9ybU1hdGVyaWFsTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBKc29uRm9ybU1hdGVyaWFsTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBKc29uRm9ybUZpZWxkc1NlcnZpY2UsXG4gICAgICAgICAgdXNlQ2xhc3M6IEpzb25Gb3JtTWF0ZXJpYWwsXG4gICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsIl8uZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQWFFLHlCQUNTLFdBQ0E7UUFEQSxjQUFTLEdBQVQsU0FBUztRQUNULE9BQUUsR0FBRixFQUFFO0tBQ1A7Ozs7SUFFSix5Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3pCOzs7O0lBRUQsb0NBQVU7OztJQUFWOztRQUVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0tBQ25FOzs7OztJQUVELCtCQUFLOzs7O0lBQUwsVUFBTSxRQUFnQjtRQUFoQix5QkFBQSxFQUFBLGdCQUFnQjtRQUNwQixxQkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLFFBQVEsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQzFELE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLFdBQVc7Y0FDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQztLQUMxRTs7Ozs7SUFFRCx3Q0FBYzs7OztJQUFkLFVBQWUs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

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
                    },
                    do_not_contact: {
                        type: 'boolean'
                    }
                },
                required: ['year', 'make', 'model', 'vin_number', 'description', 'effective_date']
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

module.exports = __webpack_require__(/*! /Users/boris/Documents/trufla/ngx-tru-forms-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map