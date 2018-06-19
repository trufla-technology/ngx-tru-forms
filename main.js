(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-tru-forms/fesm5/trufla-ngx-tru-forms.js":
/*!**********************************************************!*\
  !*** ./dist/ngx-tru-forms/fesm5/trufla-ngx-tru-forms.js ***!
  \**********************************************************/
/*! exports provided: JsonFormModule, JsonFormComponent, JsonFormDefaultsService, JsonFormFieldsService, JsonFormValidatorsService, CommonComponent, ɵb, ɵd, ɵo, ɵp, ɵj, ɵf, ɵk, ɵn, ɵm, ɵe, ɵi, ɵg, ɵl, ɵa, ɵc, ɵh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonFormModule", function() { return JsonFormModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonFormComponent", function() { return JsonFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonFormDefaultsService", function() { return JsonFormDefaultsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonFormFieldsService", function() { return JsonFormFieldsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonFormValidatorsService", function() { return JsonFormValidatorsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonComponent", function() { return CommonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ChooserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return FieldComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return FormButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return WorkingSpinnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return ArrayComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return BooleanComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return CheckboxgroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return MoneyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return MultiselectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return NumberComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return ObjectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return PhotoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return RadiogroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return StringComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return TextareaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! text-mask-addons/dist/createNumberMask */ "./node_modules/text-mask-addons/dist/createNumberMask.js");
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_5__);







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
            return _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('true');
        }
        return _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose(this.validators.concat([
            (this.has(varPath) ? this.validators[varPath] : null),
            (required.indexOf(prop) > -1 ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required : null),
            (field.hasOwnProperty('minLength') ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(field.minLength) : null),
            (field.hasOwnProperty('maxLength') ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(field.maxLength) : null),
            (field.hasOwnProperty('format') && field.format === 'email' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email : null),
            (field.hasOwnProperty('minimum') ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(field.minimum) : null),
            (field.hasOwnProperty('maximum') ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(field.maximum) : null),
            (field.pattern ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(field.pattern) : null)
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
var SchemaFormControl = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(SchemaFormControl, _super);
    function SchemaFormControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SchemaFormControl;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]));

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
var SchemaFormGroup = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(SchemaFormGroup, _super);
    function SchemaFormGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SchemaFormGroup;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SchemaFormArray = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(SchemaFormArray, _super);
    function SchemaFormArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SchemaFormArray;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var JsonFormComponent = /** @class */ (function () {
    function JsonFormComponent(fb, vl, df) {
        this.fb = fb;
        this.vl = vl;
        this.df = df;
        this.data = {};
        this.style = {};
        this.continue = 'Continue';
        this.classes = { submit: '', cancel: '', outer: '' };
        this.isWorking = false;
        this.isMultiStep = false;
        this.activeStep = null;
        this.state = false;
        this.id = '';
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
            this.constructForm();
        }
    };
    /**
     * @return {?}
     */
    JsonFormComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.form.valueChanges.unsubscribe();
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
                    return _this.data.hasOwnProperty(key) === false || p.properties[key].enum.indexOf(_this.data[key]) === -1;
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
                    selector: 'jf-form',
                    template: "\n    <form\n      #userForm=\"ngForm\"\n      [formGroup]=\"form\"\n      (ngSubmit)=\"handleOnSubmit()\"\n      *ngIf=\"isValidSchema()\"\n    >\n      <div\n        jf-component-chooser\n        [ngClass]=\"[\n          classes.outer || '',\n          this.activeStyle['default'] ? this.activeStyle['default'] : ''\n          ]\"\n        [form]=\"form\"\n        [schema]=\"activeSchema\">\n      </div>\n      <div #ref>\n        <ng-content></ng-content>\n      </div>\n      <div\n        *ngIf=\"ref.children.length == 0\"\n        [ngClass]=\"{ 'margin-top--double': true, 'page-actions--edges': (cancel && submit), 'page-actions--center': (!cancel || !submit)}\">\n        <jf-form-button\n          *ngIf=\"cancel\"\n          [cancel]=\"cancel\"\n          [steps]=\"steps\"\n          [isMultiStep]=\"isMultiStep\"\n          [isWorking]=\"isWorking\"\n          (handleClick)=\"handleOnCancel()\"\n          [classes]=\"classes\"></jf-form-button>\n        <jf-form-button\n          *ngIf=\"submit\"\n          [classes]=\"classes\"\n          [submit]=\"submit\"\n          [steps]=\"steps\"\n          [continue]=\"continue\"\n          [isMultiStep]=\"isMultiStep\"\n          [isWorking]=\"isWorking\"\n          [isFormValid]=\"this.form.valid\"></jf-form-button>\n      </div>\n    </form>\n  "
                },] },
    ];
    /** @nocollapse */
    JsonFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], },
        { type: JsonFormValidatorsService, },
        { type: JsonFormDefaultsService, },
    ]; };
    JsonFormComponent.propDecorators = {
        "schema": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "data": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "style": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "continue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "submit": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "cancel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "classes": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isWorking": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isMultiStep": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "activeStep": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "state": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "handleStep": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "handleSubmit": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "handleChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "handleCancel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "userForm": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['userForm',] },],
    };
    return JsonFormComponent;
}());

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
                    template: "\n    <h2 *ngIf=\"schema && schema.hasOwnProperty('title') && !nested\">\n      {{schema.title}}\n    </h2>\n    <h4 *ngIf=\"schema && schema.hasOwnProperty('title') && nested\">\n      {{schema.title}}\n    </h4>\n    <div class=\"form-container\">\n      <div class=\"description\" *ngIf=\"schema && schema.hasOwnProperty('description')\" [innerHTML]=\"schema.description\"></div>\n      <div\n        *ngFor=\"let control of keys(form.controls)\"\n        jf-field\n        [control]=\"form.get(control)\"\n        [index]=\"index\"\n      ></div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    ChooserComponent.propDecorators = {
        "index": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
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
var CommonComponent = /** @class */ (function () {
    function CommonComponent() {
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
        return str.toLowerCase().replace(/_/g, ' ').split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
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
    CommonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'jf-component',
                    template: ''
                },] },
    ];
    return CommonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(SelectComponent, _super);
    function SelectComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    SelectComponent.prototype.enumNames = /**
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
    SelectComponent.prototype.emptyOption = /**
     * @return {?}
     */
    function () {
        return _super.prototype.title.call(this).replace(/[^A-Z0-9]+$/ig, '');
    };
    SelectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <div class=\"select-container\">\n      <label [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n        {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n      </label>\n      <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n      <select\n        class=\"form-control\"\n        name=\"name\"\n        [formControl]=\"control\"\n      >\n        <option value=\"\" [selected]=\"control.value === ''\" [disabled]=\"true\">\n          Select {{emptyOption()}}\n        </option>\n        <option\n          *ngFor=\"let en of this.schema.enum; let i = index\"\n          [selected]=\"control.value === en\"\n          [ngValue]=\"en\">\n          {{enumNames(i)}}\n        </option>\n      </select>\n    </div>\n  "
                },] },
    ];
    return SelectComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var StringComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(StringComponent, _super);
    function StringComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <label [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\" *ngIf=\"type() !== 'hidden'\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <input\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [attr.type]=\"type()\"\n      [formControl]=\"control\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.minLength]=\"schema.minLength || null\"\n      [attr.placeholder]=\"placeholder()\"\n      [textMask]=\"{ mask: getMask() }\"\n    />\n  "
                },] },
    ];
    return StringComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NumberComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(NumberComponent, _super);
    function NumberComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <label [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\" *ngIf=\"type() !== 'hidden'\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <input\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [attr.type]=\"'number'\"\n      [formControl]=\"control\"\n      [attr.placeholder]=\"placeholder()\"\n    />\n  "
                },] },
    ];
    return NumberComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BooleanComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(BooleanComponent, _super);
    function BooleanComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BooleanComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <div [class]=\"getClass('checkbox-group')\">\n      <div class=\"checkbox-container\">\n        <input\n          [id]=\"schema.key\"\n          [name]=\"schema.key\"\n          type=\"checkbox\"\n          [formControl]=\"control\"\n        />\n        <label [attr.for]=\"schema.key\" [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n          {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n        </label>\n      </div>\n    </div>\n  "
                },] },
    ];
    return BooleanComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PhotoComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(PhotoComponent, _super);
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
                    template: "\n    <label [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <div *ngIf=\"previewSrcExists()\" class=\"clearfix\">\n      <img [attr.src]=\"photoData\" style=\"width: 200px; float: left;\" class=\"img-thumbnail\" />\n      <span href=\"#\" style=\"cursor: pointer;\" (click)=\"clearPhoto()\">\n        <i class=\"la la-close\"></i>\n      </span>\n    </div>\n    <div>\n      <input\n        *ngIf=\"!previewSrcExists()\"\n        type=\"file\"\n        (change)=\"onChange($event)\"\n      />\n      <input type=\"hidden\" [name]=\"schema.key\" [formControl]=\"control\" />\n    </div>\n  "
                },] },
    ];
    return PhotoComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TextareaComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TextareaComponent, _super);
    function TextareaComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextareaComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <div [class]=\"getClass()\">\n      <label ngClass=\"{required: isRequired()}\">\n        {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n      </label>\n      <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n      <textarea\n        class=\"form-control\"\n        [name]=\"schema.key\"\n        [formControl]=\"control\"\n        [attr.maxLength]=\"schema.maxLength || null\"\n        [attr.minLength]=\"schema.minLength || null\"\n        [attr.placeholder]=\"placeholder()\"\n      ></textarea>\n    </div>\n  "
                },] },
    ];
    return TextareaComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ObjectComponent = /** @class */ (function () {
    function ObjectComponent() {
    }
    ObjectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "\n    <div\n      jf-component-chooser\n      [form]=\"control\"\n      [schema]=\"control.schema\"\n      [nested]=\"true\">\n    </div>"
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
     * @param {?} formArray
     * @return {?}
     */
    ArrayComponent.prototype.addControl = /**
     * @param {?} formArray
     * @return {?}
     */
    function (formArray) {
        var /** @type {?} */ newRow = Object.keys(formArray.controls[0]['controls']).reduce(function (prev, next) {
            var /** @type {?} */ formGroup = formArray.controls[0]['controls'];
            var /** @type {?} */ newControl = null;
            if (formGroup[next].controls) {
                newControl = new SchemaFormArray(formGroup[next].controls);
            }
            else {
                newControl = new SchemaFormControl('', formGroup[next].validator);
            }
            newControl.schema = formGroup[next].schema;
            newControl.key = formGroup[next].key;
            prev[next] = newControl;
            return prev;
        }, {});
        formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](newRow));
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
                    template: "\n    <div>\n      <h6 *ngIf=\"getLegend(control).length\">{{getLegend(control)}}</h6>\n      <div *ngFor=\"let arrControl of getEnabledControls(control); let i = index;\">\n        <div class=\"row\">\n          <div class=\"col-11\" jf-component-chooser [form]=\"arrControl\" [index]=\"i\"></div>\n          <div class=\"col-1\">\n            <span href=\"#\" style=\"cursor: pointer;\" (click)=\"removeControl(control, i)\">\n              <i class=\"la la-close\"></i>\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <input type=\"button\" (click)=\"addControl(control)\" class=\"btn btn-success btn-sm\" value=\"Add\" />\n        </div>\n      </div>\n    </div>\n  "
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
var RadiogroupComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(RadiogroupComponent, _super);
    function RadiogroupComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.randomSuffix = Math.random().toString(36).substring(7);
        return _this;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    RadiogroupComponent.prototype.enumNames = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return typeof (this.schema.enumNames) === 'undefined'
            ? this.schema.enum[index]
            : this.schema.enumNames[index];
    };
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
        return i + "-" + val.replace(/[\W_]+/g, '') + "+" + this.randomSuffix;
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
var CheckboxgroupComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(CheckboxgroupComponent, _super);
    function CheckboxgroupComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.checkboxGroupValues = [];
        _this.randomSuffix = Math.random().toString(36).substring(7);
        return _this;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    CheckboxgroupComponent.prototype.enumNames = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return typeof (this.schema.enumNames) === 'undefined'
            ? this.schema.enum[index]
            : this.schema.enumNames[index];
    };
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(MultiselectComponent, _super);
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
var MoneyComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(MoneyComponent, _super);
    function MoneyComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numberMask = text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_3___default()({ allowDecimal: false, prefix: '' });
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
                    template: "\n    <label [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <input\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [attr.type]=\"'text'\"\n      [formControl]=\"control\"\n      [placeholder]=\"placeholder()\"\n      [textMask]=\"{ mask: numberMask}\"\n      (input)=cleanMask($event.target.value)\n    />\n  "
                },] },
    ];
    return MoneyComponent;
}(CommonComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var JsonFormFieldsService = /** @class */ (function () {
    function JsonFormFieldsService(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.defaultFieldType = StringComponent;
        this.fieldTypes = {};
        this.register('string', StringComponent);
        this.register('select', SelectComponent);
        this.register('number', NumberComponent);
        this.register('boolean', BooleanComponent);
        this.register('photo', PhotoComponent);
        this.register('textarea', TextareaComponent);
        this.register('object', ObjectComponent);
        this.register('array', ArrayComponent);
        this.register('radiogroup', RadiogroupComponent);
        this.register('checkboxgroup', CheckboxgroupComponent);
        this.register('multiselect', MultiselectComponent);
        this.register('money', MoneyComponent);
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
     * @param {?} index
     * @return {?}
     */
    JsonFormFieldsService.prototype.addDynamicComponent = /**
     * @param {?} control
     * @param {?} index
     * @return {?}
     */
    function (control, index) {
        var /** @type {?} */ componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.get(control));
        var /** @type {?} */ componentRef = this.rootViewContainer.createComponent(componentFactory);
        componentRef.instance.control = control;
        componentRef.instance.schema = control.schema;
        componentRef.instance.style = control.style;
        componentRef.instance.index = index;
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
        // check if a field is getting overriden by format
        if (typeof (control.schema.format) !== 'undefined' && this.has(control.schema.format)) {
            return this.fieldTypes[control.schema.format];
        }
        if (typeof (control.schema.enum) !== 'undefined' && control.schema.type === 'array') {
            return this.fieldTypes['checkboxgroup'];
        }
        else if (typeof (control.schema.enum) !== 'undefined') {
            return this.fieldTypes['select'];
        }
        else if (this.has(control.schema.format)) {
            return this.fieldTypes[control.schema.format];
        }
        else if (this.has(control.schema.type)) {
            return this.fieldTypes[control.schema.type];
        }
        return this.defaultFieldType;
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
        this.jsonFormFieldsService.setRootViewContainerRef(this.container);
        this.jsonFormFieldsService.addDynamicComponent(this.control, this.index);
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
        if (this.control.style && this.control.style.default && ['radiogroup', 'checkboxgroup'].indexOf(this.control.schema.format) === -1) {
            fieldClass.push(this.control.style.default);
        }
        return fieldClass.filter(function (d) { return d; }).join(' ');
    };
    FieldComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'jf-field, [jf-field]',
                    template: "\n    <ng-content></ng-content>\n    <ng-container #container></ng-container>\n    <div *ngIf=\"control.invalid && (control.dirty || control.touched)\" class=\"has-danger\">\n      <div *ngIf=\"control.errors && control.errors['required']\">\n        This field is required.\n      </div>\n      <div *ngIf=\"control.errors && control.errors['pattern']\">\n        Input value is invalid.\n      </div>\n      <div *ngIf=\"control.errors && control.errors['minlength']\">\n        Input has to be a minimum of {{control.errors['minlength']['requiredLength']}} characters.\n      </div>\n      <div *ngIf=\"control.errors && control.errors['maxlength']\">\n        Input can contain a maximum of {{control.errors['maxlength']['requiredLength']}} characters.\n      </div>\n      <div *ngIf=\"control.errors && control.errors['min']\">\n        Enter a value greater than or equal to {{control.errors['min']['min']}}.\n      </div>\n      <div *ngIf=\"control.errors && control.errors['max']\">\n        Enter a value less than or equal to {{control.errors['max']['max']}}.\n      </div>\n      <div *ngIf=\"control.errors && control.errors['customError']\">\n        {{control.errors['customError']}}\n      </div>\n    </div>\n  "
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
        "index": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return FieldComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormButtonComponent = /** @class */ (function () {
    function FormButtonComponent() {
        this.isFormValid = true;
        this.label = '';
        this.isMultiStep = false;
        this.steps = [];
        this.submit = '';
        this.continue = '';
        this.cancel = '';
        this.classes = /** @type {?} */ ({});
        this.isWorking = false;
        this.handleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    FormButtonComponent.prototype.getClass = /**
     * @return {?}
     */
    function () {
        return (this.cancel.length > 0)
            ? ['btn btn-default button', this.classes.cancel || '']
            : ['btn btn-primary button button--accept', this.classes.submit || '', (this.isFormValid ? 'valid' : 'invalid')];
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
                    template: "\n    <button\n      *ngIf=\"isVisible()\"\n      [type]=\"getType()\"\n      [ngClass]=\"getClass()\"\n      [disabled]=\"isWorking\"\n      (click)=\"handleButtonClick()\">\n        <jf-working-spinner *ngIf=\"isWorking && submit\"></jf-working-spinner>\n        {{getLabel()}}\n    </button>\n  "
                },] },
    ];
    /** @nocollapse */
    FormButtonComponent.propDecorators = {
        "isFormValid": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "label": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isMultiStep": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "steps": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "submit": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "continue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "cancel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "classes": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isWorking": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "handleClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return FormButtonComponent;
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
    /** @nocollapse */
    WorkingSpinnerComponent.propDecorators = {
        "isWorking": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return WorkingSpinnerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var JsonFormModule = /** @class */ (function () {
    function JsonFormModule() {
    }
    JsonFormModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                        angular2_text_mask__WEBPACK_IMPORTED_MODULE_5__["TextMaskModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
                    ],
                    declarations: [
                        JsonFormComponent,
                        SelectComponent,
                        ChooserComponent,
                        StringComponent,
                        FieldComponent,
                        NumberComponent,
                        BooleanComponent,
                        PhotoComponent,
                        TextareaComponent,
                        ObjectComponent,
                        ArrayComponent,
                        CheckboxgroupComponent,
                        RadiogroupComponent,
                        CommonComponent,
                        MultiselectComponent,
                        MoneyComponent,
                        FormButtonComponent,
                        WorkingSpinnerComponent
                    ],
                    exports: [
                        JsonFormComponent,
                        CommonComponent
                    ],
                    entryComponents: [
                        StringComponent,
                        SelectComponent,
                        NumberComponent,
                        BooleanComponent,
                        PhotoComponent,
                        TextareaComponent,
                        ObjectComponent,
                        ArrayComponent,
                        RadiogroupComponent,
                        CheckboxgroupComponent,
                        JsonFormComponent,
                        MultiselectComponent,
                        MoneyComponent
                    ],
                    providers: [
                        JsonFormDefaultsService,
                        JsonFormFieldsService,
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1ZmxhLW5neC10cnUtZm9ybXMuanMubWFwIiwic291cmNlcyI6WyJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvc2VydmljZXMvdmFsaWRhdG9ycy5zZXJ2aWNlLnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL21vZGVscy9zY2hlbWEtZm9ybS1jb250cm9sLnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL3NlcnZpY2VzL2RlZmF1bHRzLnNlcnZpY2UudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvbW9kZWxzL3NjaGVtYS1mb3JtLWdyb3VwLnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL21vZGVscy9zY2hlbWEtZm9ybS1hcnJheS50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9qc29uLWZvcm0uY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2NvbXBvbmVudHMvY2hvb3Nlci9jaG9vc2VyLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvY29tbW9uL2NvbW1vbi5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9zdHJpbmcvc3RyaW5nLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvbnVtYmVyL251bWJlci5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL2Jvb2xlYW4vYm9vbGVhbi5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL3Bob3RvL3Bob3RvLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvdGV4dGFyZWEvdGV4dGFyZWEuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9vYmplY3Qvb2JqZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9maWVsZHMvYXJyYXkvYXJyYXkuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9yYWRpb2dyb3VwL3JhZGlvZ3JvdXAuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9jaGVja2JveGdyb3VwL2NoZWNrYm94Z3JvdXAuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2ZpZWxkcy9tdWx0aXNlbGVjdC9tdWx0aXNlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL0B0cnVmbGEvbmd4LXRydS1mb3Jtcy9saWIvZmllbGRzL21vbmV5L21vbmV5LmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9zZXJ2aWNlcy9maWVsZHMuc2VydmljZS50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9jb21wb25lbnRzL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9jb21wb25lbnRzL2Zvcm0tYnV0dG9uL2Zvcm0tYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vQHRydWZsYS9uZ3gtdHJ1LWZvcm1zL2xpYi9jb21wb25lbnRzL3dvcmtpbmctc3Bpbm5lci93b3JraW5nLXNwaW5uZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AdHJ1ZmxhL25neC10cnUtZm9ybXMvbGliL2pzb24tZm9ybS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmFsaWRhdG9yRm4sIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpzb25Gb3JtVmFsaWRhdG9yc1NlcnZpY2Uge1xuICB2YWxpZGF0b3JzOiBBcnJheTxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudmFsaWRhdG9ycyA9IFtdO1xuICB9XG5cbiAgcHVibGljIGdldChwcm9wLCBzY2hlbWEsIHBhdGgpIHtcbiAgICBjb25zdCByZXF1aXJlZCA9IHNjaGVtYS5yZXF1aXJlZCB8fCBbXTtcbiAgICBjb25zdCBmaWVsZCA9IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdO1xuICAgIGNvbnN0IHZhclBhdGggPSBbXS5jb25jYXQocGF0aCwgcHJvcCkuam9pbignLicpO1xuXG4gICAgaWYgKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLnR5cGUgPT09ICdib29sZWFuJyAmJiByZXF1aXJlZC5pbmRleE9mKHByb3ApID4gLTEpIHtcbiAgICAgIHJldHVybiBWYWxpZGF0b3JzLnBhdHRlcm4oJ3RydWUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gVmFsaWRhdG9ycy5jb21wb3NlKHRoaXMudmFsaWRhdG9ycy5jb25jYXQoW1xuICAgICAgKHRoaXMuaGFzKHZhclBhdGgpID8gdGhpcy52YWxpZGF0b3JzW3ZhclBhdGhdIDogbnVsbCksXG4gICAgICAocmVxdWlyZWQuaW5kZXhPZihwcm9wKSA+IC0xID8gVmFsaWRhdG9ycy5yZXF1aXJlZCA6IG51bGwpLFxuICAgICAgKGZpZWxkLmhhc093blByb3BlcnR5KCdtaW5MZW5ndGgnKSA/IFZhbGlkYXRvcnMubWluTGVuZ3RoKGZpZWxkLm1pbkxlbmd0aCkgOiBudWxsKSxcbiAgICAgIChmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnbWF4TGVuZ3RoJykgPyBWYWxpZGF0b3JzLm1heExlbmd0aChmaWVsZC5tYXhMZW5ndGgpIDogbnVsbCksXG4gICAgICAoZmllbGQuaGFzT3duUHJvcGVydHkoJ2Zvcm1hdCcpICYmIGZpZWxkLmZvcm1hdCA9PT0gJ2VtYWlsJyA/IFZhbGlkYXRvcnMuZW1haWwgOiBudWxsKSxcbiAgICAgIChmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnbWluaW11bScpID8gVmFsaWRhdG9ycy5taW4oZmllbGQubWluaW11bSkgOiBudWxsKSxcbiAgICAgIChmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnbWF4aW11bScpID8gVmFsaWRhdG9ycy5tYXgoZmllbGQubWF4aW11bSkgOiBudWxsKSxcbiAgICAgIChmaWVsZC5wYXR0ZXJuID8gVmFsaWRhdG9ycy5wYXR0ZXJuKGZpZWxkLnBhdHRlcm4pIDogbnVsbClcbiAgICBdKSk7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXIoZmllbGQ6IGFueSwgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbikge1xuICAgIHRoaXMudmFsaWRhdG9yc1tmaWVsZF0gPSB2YWxpZGF0b3I7XG4gIH1cblxuICBwdWJsaWMgaGFzKHN0cikge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcnMuaGFzT3duUHJvcGVydHkoc3RyKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFGb3JtQ29udHJvbCBleHRlbmRzIEZvcm1Db250cm9sIHtcbiAgcHVibGljIHNjaGVtYTogU2NoZW1hO1xuICBwdWJsaWMgc3R5bGU6IGFueTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpzb25Gb3JtRGVmYXVsdHNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkZWZhdWx0VHlwZXM6IHsgW3R5cGU6IHN0cmluZ106IGFueSB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGVmYXVsdFR5cGVzID0gdGhpcy5kZWZhdWx0VHlwZXMgfHwge307XG4gIH1cblxuICBwdWJsaWMgZ2V0KHByb3AsIHNjaGVtYSwgZGF0YSkge1xuICAgIGNvbnN0IGRlZmF1bHRTdHJpbmcgPSAocHJvcC5oYXNPd25Qcm9wZXJ0eSgnZm9ybWF0JykgJiYgcHJvcC5mb3JtYXQgPT09ICdtdWx0aXNlbGVjdCcpID8gW10gOiAnJztcbiAgICBsZXQgZGVmYXVsdFZhbHVlID0gc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0uZGVmYXVsdCB8fCBkZWZhdWx0U3RyaW5nO1xuICAgIGlmICh0aGlzLmhhcyhzY2hlbWEucHJvcGVydGllc1twcm9wXS5kZWZhdWx0KSkge1xuICAgICAgZGVmYXVsdFZhbHVlID0gdGhpcy5ldmFsKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLmRlZmF1bHQpKCk7XG4gICAgfVxuXG4gICAgLy8gZGF0YSBvdmVycmlkZSBkZWZhdWx0c1xuICAgIGlmIChkYXRhICYmIGRhdGEuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IGRhdGFbcHJvcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZXZhbChzdHIpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0VHlwZXNbc3RyXTtcbiAgfVxuXG4gIHB1YmxpYyBoYXMoc3RyKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFR5cGVzLmhhc093blByb3BlcnR5KHN0cik7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXIoc3RyOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgIHRoaXMuZGVmYXVsdFR5cGVzW3N0cl0gPSBjYWxsYmFjaztcbiAgfVxufVxuIiwiaW1wb3J0IHsgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFGb3JtR3JvdXAgZXh0ZW5kcyBGb3JtR3JvdXAge1xuICBwdWJsaWMgc2NoZW1hOiBTY2hlbWE7XG4gIHB1YmxpYyBzdHlsZTogYW55O1xufVxuIiwiaW1wb3J0IHsgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5leHBvcnQgY2xhc3MgU2NoZW1hRm9ybUFycmF5IGV4dGVuZHMgRm9ybUFycmF5IHtcbiAgcHVibGljIHNjaGVtYTogU2NoZW1hO1xuICBwdWJsaWMgc3R5bGU6IGFueTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRG9DaGVjaywgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIE5nRm9ybX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSnNvbkZvcm1WYWxpZGF0b3JzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdmFsaWRhdG9ycy5zZXJ2aWNlJztcbmltcG9ydCB7IFNjaGVtYUZvcm1Db250cm9sIH0gZnJvbSAnLi9tb2RlbHMvc2NoZW1hLWZvcm0tY29udHJvbCc7XG5pbXBvcnQgeyBKc29uRm9ybURlZmF1bHRzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGVmYXVsdHMuc2VydmljZSc7XG5pbXBvcnQgeyBTY2hlbWFGb3JtR3JvdXAgfSBmcm9tICcuL21vZGVscy9zY2hlbWEtZm9ybS1ncm91cCc7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQXJyYXkgfSBmcm9tICcuL21vZGVscy9zY2hlbWEtZm9ybS1hcnJheSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pmLWZvcm0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxmb3JtXG4gICAgICAjdXNlckZvcm09XCJuZ0Zvcm1cIlxuICAgICAgW2Zvcm1Hcm91cF09XCJmb3JtXCJcbiAgICAgIChuZ1N1Ym1pdCk9XCJoYW5kbGVPblN1Ym1pdCgpXCJcbiAgICAgICpuZ0lmPVwiaXNWYWxpZFNjaGVtYSgpXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGpmLWNvbXBvbmVudC1jaG9vc2VyXG4gICAgICAgIFtuZ0NsYXNzXT1cIltcbiAgICAgICAgICBjbGFzc2VzLm91dGVyIHx8ICcnLFxuICAgICAgICAgIHRoaXMuYWN0aXZlU3R5bGVbJ2RlZmF1bHQnXSA/IHRoaXMuYWN0aXZlU3R5bGVbJ2RlZmF1bHQnXSA6ICcnXG4gICAgICAgICAgXVwiXG4gICAgICAgIFtmb3JtXT1cImZvcm1cIlxuICAgICAgICBbc2NoZW1hXT1cImFjdGl2ZVNjaGVtYVwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2ICNyZWY+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICAqbmdJZj1cInJlZi5jaGlsZHJlbi5sZW5ndGggPT0gMFwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInsgJ21hcmdpbi10b3AtLWRvdWJsZSc6IHRydWUsICdwYWdlLWFjdGlvbnMtLWVkZ2VzJzogKGNhbmNlbCAmJiBzdWJtaXQpLCAncGFnZS1hY3Rpb25zLS1jZW50ZXInOiAoIWNhbmNlbCB8fCAhc3VibWl0KX1cIj5cbiAgICAgICAgPGpmLWZvcm0tYnV0dG9uXG4gICAgICAgICAgKm5nSWY9XCJjYW5jZWxcIlxuICAgICAgICAgIFtjYW5jZWxdPVwiY2FuY2VsXCJcbiAgICAgICAgICBbc3RlcHNdPVwic3RlcHNcIlxuICAgICAgICAgIFtpc011bHRpU3RlcF09XCJpc011bHRpU3RlcFwiXG4gICAgICAgICAgW2lzV29ya2luZ109XCJpc1dvcmtpbmdcIlxuICAgICAgICAgIChoYW5kbGVDbGljayk9XCJoYW5kbGVPbkNhbmNlbCgpXCJcbiAgICAgICAgICBbY2xhc3Nlc109XCJjbGFzc2VzXCI+PC9qZi1mb3JtLWJ1dHRvbj5cbiAgICAgICAgPGpmLWZvcm0tYnV0dG9uXG4gICAgICAgICAgKm5nSWY9XCJzdWJtaXRcIlxuICAgICAgICAgIFtjbGFzc2VzXT1cImNsYXNzZXNcIlxuICAgICAgICAgIFtzdWJtaXRdPVwic3VibWl0XCJcbiAgICAgICAgICBbc3RlcHNdPVwic3RlcHNcIlxuICAgICAgICAgIFtjb250aW51ZV09XCJjb250aW51ZVwiXG4gICAgICAgICAgW2lzTXVsdGlTdGVwXT1cImlzTXVsdGlTdGVwXCJcbiAgICAgICAgICBbaXNXb3JraW5nXT1cImlzV29ya2luZ1wiXG4gICAgICAgICAgW2lzRm9ybVZhbGlkXT1cInRoaXMuZm9ybS52YWxpZFwiPjwvamYtZm9ybS1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBzY2hlbWE7XG4gIEBJbnB1dCgpIGRhdGEgPSB7fTtcbiAgQElucHV0KCkgc3R5bGUgPSB7fTtcbiAgQElucHV0KCkgY29udGludWUgPSAnQ29udGludWUnO1xuICBASW5wdXQoKSBzdWJtaXQ6IHN0cmluZztcbiAgQElucHV0KCkgY2FuY2VsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsYXNzZXMgPSB7IHN1Ym1pdDogJycsIGNhbmNlbDogJycsIG91dGVyOiAnJyB9O1xuICBASW5wdXQoKSBpc1dvcmtpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgaXNNdWx0aVN0ZXAgPSBmYWxzZTtcbiAgQElucHV0KCkgYWN0aXZlU3RlcCA9IG51bGw7XG4gIEBJbnB1dCgpIHN0YXRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlkID0gJyc7XG4gIEBPdXRwdXQoKSBoYW5kbGVTdGVwID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaGFuZGxlU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaGFuZGxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaGFuZGxlQ2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAVmlld0NoaWxkKCd1c2VyRm9ybScpIHVzZXJGb3JtOiBOZ0Zvcm07XG5cbiAgcHVibGljIGZvcm07XG4gIHB1YmxpYyBtb2RlbDtcbiAgcHVibGljIGNvbnRyb2wgPSB7IGtleTogJycsIHZhbHVlOiAnJywgaXNQYXJ0T2Y6IGZhbHNlIH07XG4gIHB1YmxpYyBvbGRTY2hlbWE6IHN0cmluZztcbiAgcHVibGljIG9sZERhdGE6IHN0cmluZztcbiAgcHVibGljIGNoYW5nZURldGVjdGVkID0gZmFsc2U7XG4gIHB1YmxpYyBvbGRBY3RpdmVTdGVwID0gJyc7XG4gIHB1YmxpYyBzdGVwcyA9IFtdO1xuICBwdWJsaWMgbXVsdGlTdGVwRGF0YSA9IHt9O1xuICBwdWJsaWMgYWN0aXZlU2NoZW1hID0ge307XG4gIHB1YmxpYyBhY3RpdmVTdHlsZSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgdmw6IEpzb25Gb3JtVmFsaWRhdG9yc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBkZjogSnNvbkZvcm1EZWZhdWx0c1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZURldGVjdGVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5vbGRTY2hlbWEgIT09IEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hKSkge1xuICAgICAgdGhpcy5vbGRTY2hlbWEgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnNjaGVtYSk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vbGREYXRhICE9PSBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKSB7XG4gICAgICB0aGlzLm9sZERhdGEgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub2xkQWN0aXZlU3RlcCAhPT0gdGhpcy5hY3RpdmVTdGVwKSB7XG4gICAgICB0aGlzLm9sZEFjdGl2ZVN0ZXAgPSB0aGlzLmFjdGl2ZVN0ZXA7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jaGFuZ2VEZXRlY3RlZCkge1xuICAgICAgdGhpcy5jb25zdHJ1Y3RGb3JtKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdEZvcm0oKSB7XG4gICAgdGhpcy5tb2RlbCA9IHt9O1xuXG4gICAgaWYgKHRoaXMuaXNWYWxpZFNjaGVtYSgpKSB7XG4gICAgICB0aGlzLmFjdGl2ZVNjaGVtYSA9IHRoaXMuc2NoZW1hO1xuICAgICAgdGhpcy5hY3RpdmVTdHlsZSA9IHRoaXMuc3R5bGU7XG5cbiAgICAgIC8vIGVtaXQgdGhlIGluaXRpYWwgc3RlcCBmb3IgdGhlIGV2ZW50XG4gICAgICBpZiAodGhpcy5zdGVwcy5sZW5ndGggPT09IDAgJiYgdGhpcy5pc011bHRpU3RlcCkge1xuICAgICAgICB0aGlzLnN0ZXBzID0gdGhpcy5nZXRTdGVwcyh0aGlzLnNjaGVtYSwgdGhpcy5hY3RpdmVTdGVwKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdGVwLmVtaXQoeyBpZDogdGhpcy5pZCwgZGF0YTogbnVsbCwgc3RlcHM6IHRoaXMuc3RlcHMgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnN0ZXBzLmxlbmd0aCA+IDAgJiYgdGhpcy5pc011bHRpU3RlcCkge1xuICAgICAgICBjb25zdCB2aXNpYmxlU3RlcE5hbWUgPSB0aGlzLmFjdGl2ZVN0ZXAgPiAwID8gdGhpcy5hY3RpdmVTdGVwIDogdGhpcy5zdGVwcy5maW5kKChzKSA9PiBzLnZpc2libGUpLm5hbWU7XG4gICAgICAgIHRoaXMuYWN0aXZlU2NoZW1hID0gdGhpcy5zY2hlbWEucHJvcGVydGllc1t2aXNpYmxlU3RlcE5hbWVdO1xuICAgICAgICB0aGlzLmFjdGl2ZVN0eWxlID0gdGhpcy5zdHlsZS5oYXNPd25Qcm9wZXJ0eSh2aXNpYmxlU3RlcE5hbWUpID8gdGhpcy5zdHlsZVt2aXNpYmxlU3RlcE5hbWVdIDoge307XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuc3RhdGUgJiYgdGhpcy5tdWx0aVN0ZXBEYXRhLmhhc093blByb3BlcnR5KHZpc2libGVTdGVwTmFtZSlcbiAgICAgICAgICA/IHRoaXMubXVsdGlTdGVwRGF0YVt2aXNpYmxlU3RlcE5hbWVdIDogdGhpcy5kYXRhO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFjdGl2ZVNjaGVtYSA9IHRoaXMuc3ViUmVmcyh0aGlzLmFjdGl2ZVNjaGVtYSk7XG4gICAgICB0aGlzLm1vZGVsID0gdGhpcy5nZW5lcmF0ZUZvcm0odGhpcy5hY3RpdmVTY2hlbWEsIHt9LCB0aGlzLmRhdGEsIHRoaXMuYWN0aXZlU3R5bGUpO1xuICAgICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh0aGlzLm1vZGVsKTtcblxuICAgICAgdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY29udHJvbC5pc1BhcnRPZikge1xuICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3RGb3JtKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZS5lbWl0KHsgaWQ6IHRoaXMuaWQsIGNvbnRyb2w6IHRoaXMuY29udHJvbCwgZGF0YSB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRTdGVwcyhzY2hlbWEsIGFjdGl2ZVN0ZXApOiBBcnJheTxhbnk+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLm1hcCgobmFtZSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCB0eXBlID0gJ3N0ZXAnO1xuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlU3RlcCA9IHRoaXMuYWN0aXZlU3RlcCB8fCBuYW1lO1xuICAgICAgICB0eXBlID0gJ2ZpcnN0JztcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKS5sZW5ndGggLSAxKSB7XG4gICAgICAgIHR5cGUgPSAnbGFzdCc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluZGV4LFxuICAgICAgICBuYW1lLFxuICAgICAgICB2aXNpYmxlOiBhY3RpdmVTdGVwID8gYWN0aXZlU3RlcCA9PT0gbmFtZSA6IGluZGV4ID09PSAwLFxuICAgICAgICB0eXBlLFxuICAgICAgICB0aXRsZTogc2NoZW1hLnByb3BlcnRpZXNbbmFtZV0uaGFzT3duUHJvcGVydHkoJ3RpdGxlJykgPyBzY2hlbWEucHJvcGVydGllc1tuYW1lXS50aXRsZSA6IG5hbWVcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgaXNWYWxpZFNjaGVtYSgpIHtcbiAgICByZXR1cm4gdHlwZW9mICh0aGlzLnNjaGVtYSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUZvcm0gKHNjaGVtYSwgZ3JvdXA/OiB7fSwgZGF0YT86IHt9LCBzdHlsZT86IHt9LCBwYXRoPzogQXJyYXk8YW55Pikge1xuICAgIGlmICghdGhpcy5pc1Zpc2libGUoc2NoZW1hKSkge1xuICAgICAgcmV0dXJuIGdyb3VwO1xuICAgIH1cblxuICAgIGlmICghcGF0aCkge1xuICAgICAgcGF0aCA9IFtdO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICBpZiAoc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0udHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBEYXRhID0gZGF0YSAmJiBkYXRhLmhhc093blByb3BlcnR5KHByb3ApID8gZGF0YVtwcm9wXSA6IHt9O1xuICAgICAgICBjb25zdCBncm91cFN0eWxlID0gc3R5bGUgJiYgc3R5bGUuaGFzT3duUHJvcGVydHkocHJvcCkgPyBzdHlsZVtwcm9wXSA6IHt9O1xuICAgICAgICBncm91cFtwcm9wXSA9IG5ldyBTY2hlbWFGb3JtR3JvdXAodGhpcy5nZW5lcmF0ZUZvcm0oc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0sIHt9LCBncm91cERhdGEsIGdyb3VwU3R5bGUsIFtdLmNvbmNhdChwYXRoLCBwcm9wKSkpO1xuICAgICAgICBncm91cFtwcm9wXS5zY2hlbWEgPSBzY2hlbWEucHJvcGVydGllc1twcm9wXTtcbiAgICAgICAgZ3JvdXBbcHJvcF0uc3R5bGUgPSBncm91cFN0eWxlO1xuICAgICAgfSBlbHNlIGlmIChzY2hlbWEucHJvcGVydGllc1twcm9wXS50eXBlID09PSAnYXJyYXknICYmICF0aGlzLmlzRm9ybWF0KHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLCAnbXVsdGlzZWxlY3QnKSkge1xuICAgICAgICBwYXRoLnB1c2gocHJvcCk7XG4gICAgICAgIGNvbnN0IGFycmF5RGF0YSA9IGRhdGEgJiYgZGF0YS5oYXNPd25Qcm9wZXJ0eShwcm9wKSA/IGRhdGFbcHJvcF0gOiBbe31dO1xuICAgICAgICBjb25zdCBhcnJheVN0eWxlID0gc3R5bGUgJiYgc3R5bGUuaGFzT3duUHJvcGVydHkocHJvcCkgPyBzdHlsZVtwcm9wXSA6IHt9O1xuICAgICAgICBsZXQgZmJBcnJheSA9IFtdO1xuXG4gICAgICAgIGlmIChzY2hlbWEucHJvcGVydGllc1twcm9wXS5lbnVtKSB7XG4gICAgICAgICAgZmJBcnJheSA9IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLmVudW0ubWFwKChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250cm9sID0gbmV3IFNjaGVtYUZvcm1Db250cm9sKCk7XG4gICAgICAgICAgICBjb250cm9sLnNjaGVtYSA9IE9iamVjdC5hc3NpZ24oe30sIHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdKTtcbiAgICAgICAgICAgIGNvbnRyb2wuc2NoZW1hLmtleSA9IHByb3A7XG4gICAgICAgICAgICBjb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKGV2ZW50KSA9PiB0aGlzLmhhbmRsZU9uQ2hhbmdlKHByb3AsIGV2ZW50KSk7XG4gICAgICAgICAgICByZXR1cm4gY29udHJvbDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYkFycmF5ID0gYXJyYXlEYXRhLm1hcCgoZGF0YUF0SW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBuZXcgU2NoZW1hRm9ybUdyb3VwKHRoaXMuZ2VuZXJhdGVGb3JtKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLml0ZW1zLCB7fSwgZGF0YUF0SW5kZXgsIHt9LCBbXS5jb25jYXQocGF0aCwgcHJvcCkpKTtcbiAgICAgICAgICAgIGcuc2NoZW1hID0gc2NoZW1hLnByb3BlcnRpZXNbcHJvcF07XG4gICAgICAgICAgICByZXR1cm4gZztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyb3VwW3Byb3BdID0gbmV3IFNjaGVtYUZvcm1BcnJheShmYkFycmF5KTtcbiAgICAgICAgZ3JvdXBbcHJvcF0uc2NoZW1hID0gc2NoZW1hLnByb3BlcnRpZXNbcHJvcF07XG4gICAgICAgIGdyb3VwW3Byb3BdLnNjaGVtYS5rZXkgPSBwcm9wO1xuICAgICAgICBncm91cFtwcm9wXS5zdHlsZSA9IGFycmF5U3R5bGU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNWaXNpYmxlKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdKSkge1xuICAgICAgICBpZiAodGhpcy5pc09uZU9mKHNjaGVtYSwgcHJvcCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb250cm9sID0gbmV3IFNjaGVtYUZvcm1Db250cm9sKHRoaXMuZGYuZ2V0KHByb3AsIHNjaGVtYSwgZGF0YSksIHRoaXMudmwuZ2V0KHByb3AsIHNjaGVtYSwgcGF0aCkpO1xuICAgICAgICBjb250cm9sLnNjaGVtYSA9IE9iamVjdC5hc3NpZ24oe30sIHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdKTtcbiAgICAgICAgY29udHJvbC5zY2hlbWEua2V5ID0gcHJvcDtcbiAgICAgICAgY29udHJvbC5zdHlsZSA9IChzdHlsZSAmJiBzdHlsZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgPyBzdHlsZVtwcm9wXSA6IHt9O1xuICAgICAgICBjb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKGV2ZW50KSA9PiB0aGlzLmhhbmRsZU9uQ2hhbmdlKHByb3AsIGV2ZW50LCB0aGlzLmluT25lT2Yoc2NoZW1hLCBwcm9wKSkpO1xuICAgICAgICBncm91cFtwcm9wXSA9IGNvbnRyb2w7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZ3JvdXA7XG4gIH1cblxuICBpc09uZU9mKHNjaGVtYSwgcHJvcCkge1xuICAgIGlmICh0eXBlb2YgKHNjaGVtYS5vbmVPZikgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gc2NoZW1hLm9uZU9mLmZpbHRlcigocCkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhwLnByb3BlcnRpZXMpWzBdO1xuICAgICAgICBpZiAocC5wcm9wZXJ0aWVzW2tleV0ucmVxdWlyZWQuaW5kZXhPZihwcm9wKSA+IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpID09PSBmYWxzZSB8fCBwLnByb3BlcnRpZXNba2V5XS5lbnVtLmluZGV4T2YodGhpcy5kYXRhW2tleV0pID09PSAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaW5PbmVPZihzY2hlbWEsIHByb3ApIHtcbiAgICBpZiAodHlwZW9mIChzY2hlbWEub25lT2YpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHNjaGVtYS5vbmVPZi5maWx0ZXIoKHApID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMocC5wcm9wZXJ0aWVzKVswXTtcbiAgICAgICAgcmV0dXJuIGtleSA9PT0gcHJvcDtcbiAgICAgIH0pLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNWaXNpYmxlIChwcm9wKSB7XG4gICAgcmV0dXJuIHByb3AuaGFzT3duUHJvcGVydHkoJ3Zpc2libGUnKSA9PT0gZmFsc2UgfHwgKHByb3AuaGFzT3duUHJvcGVydHkoJ3Zpc2libGUnKSAmJiBwcm9wLnZpc2libGUgPT09IHRydWUpO1xuICB9XG5cbiAgaXNGb3JtYXQocHJvcCwgZm9ybWF0KSB7XG4gICAgcmV0dXJuIHByb3AuaGFzT3duUHJvcGVydHkoJ2Zvcm1hdCcpICYmIHByb3AuZm9ybWF0ID09PSBmb3JtYXQ7XG4gIH1cblxuICAvKipcbiAgICogRXh0ZXJuYWwgbWV0aG9kIGZvciBlbnN1cmluZyB0aGUgZm9ybSBpcyB2YWxpZFxuICAgKi9cbiAgaXNWYWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLnZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgZXh0ZXJuYWwgc3VibWlzc2lvblxuICAgKi9cbiAgc3VibWl0Rm9ybSgpIHtcbiAgICB0aGlzLnVzZXJGb3JtLm5nU3VibWl0LmVtaXQoKTtcbiAgfVxuXG4gIGhhbmRsZU9uU3VibWl0KCkge1xuICAgIHRoaXMudG91Y2hBbGwodGhpcy5mb3JtLmNvbnRyb2xzKTtcblxuICAgIGlmICh0aGlzLmZvcm0udmFsaWQgJiYgdGhpcy5pc011bHRpU3RlcCkge1xuICAgICAgY29uc3QgcHJldiA9IHRoaXMuc3RlcHMuZmluZEluZGV4KChzKSA9PiBzLnZpc2libGUpO1xuICAgICAgdGhpcy5tdWx0aVN0ZXBEYXRhW3RoaXMuYWN0aXZlU3RlcF0gPSB0aGlzLmZvcm0udmFsdWU7XG4gICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5zdGVwcy5maW5kSW5kZXgoKHMpID0+IHMubmFtZSA9PT0gdGhpcy5hY3RpdmVTdGVwKTtcbiAgICAgIGNvbnN0IG5leHQgPSBjdXJyZW50ICsgMTtcblxuICAgICAgaWYgKHR5cGVvZiAodGhpcy5zdGVwc1tuZXh0XSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuc3RlcHNbcHJldl0udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0ZXBzW25leHRdLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGl2ZVN0ZXAgPSB0aGlzLnN0ZXBzW25leHRdLm5hbWU7XG4gICAgICAgIHRoaXMuaGFuZGxlU3RlcC5lbWl0KHtcbiAgICAgICAgICBkaXI6ICduZXh0JyxcbiAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICBkYXRhOiB7IFt0aGlzLnN0ZXBzW3ByZXZdLm5hbWVdOiB0aGlzLm11bHRpU3RlcERhdGFbdGhpcy5zdGVwc1twcmV2XS5uYW1lXSB9LFxuICAgICAgICAgIHN0ZXBzOiB0aGlzLnN0ZXBzXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbnN0cnVjdEZvcm0oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0LmVtaXQodGhpcy5tdWx0aVN0ZXBEYXRhKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLmhhbmRsZVN1Ym1pdC5lbWl0KHRoaXMuZm9ybS52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlT25DaGFuZ2Uoa2V5LCB2YWx1ZSwgaXNQYXJ0T2YgPSBmYWxzZSkge1xuICAgIHRoaXMuY29udHJvbCA9IHsga2V5LCB2YWx1ZSwgaXNQYXJ0T2YgfTtcbiAgfVxuXG4gIGhhbmRsZU9uQ2FuY2VsKCkge1xuICAgIGlmICh0aGlzLmlzTXVsdGlTdGVwKSB7XG4gICAgICBjb25zdCBwcmV2ID0gdGhpcy5zdGVwcy5maW5kSW5kZXgoKHMpID0+IHMudmlzaWJsZSk7XG4gICAgICB0aGlzLnN0ZXBzW3ByZXZdLnZpc2libGUgPSBmYWxzZTtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLnN0ZXBzLmZpbmRJbmRleCgocykgPT4gcy5uYW1lID09PSB0aGlzLmFjdGl2ZVN0ZXApO1xuICAgICAgY29uc3QgbmV4dCA9IGN1cnJlbnQgLSAxO1xuXG4gICAgICBpZiAodHlwZW9mICh0aGlzLnN0ZXBzW25leHRdKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zdGVwc1tuZXh0XS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hY3RpdmVTdGVwID0gdGhpcy5zdGVwc1tuZXh0XS5uYW1lO1xuICAgICAgICB0aGlzLmhhbmRsZVN0ZXAuZW1pdCh7XG4gICAgICAgICAgZGlyOiAncHJldicsXG4gICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgZGF0YTogeyBbdGhpcy5zdGVwc1tjdXJyZW50XS5uYW1lXTogdGhpcy5tdWx0aVN0ZXBEYXRhW3RoaXMuc3RlcHNbcHJldl0ubmFtZV0gfSxcbiAgICAgICAgICBzdGVwczogdGhpcy5zdGVwc1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RGb3JtKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhbmRsZUNhbmNlbC5lbWl0KHRoaXMuZm9ybS52YWx1ZSk7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgdGhpcy5oYW5kbGVDYW5jZWwuZW1pdCh0aGlzLmZvcm0udmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHRvdWNoQWxsKGNvbnRyb2xzKSB7XG4gICAgT2JqZWN0LmtleXMoY29udHJvbHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGNvbnRyb2xzW2tleV0uaGFzT3duUHJvcGVydHkoJ2NvbnRyb2xzJykpIHtcbiAgICAgICAgdGhpcy50b3VjaEFsbChjb250cm9sc1trZXldLmNvbnRyb2xzKTtcbiAgICAgIH1cbiAgICAgIGNvbnRyb2xzW2tleV0ubWFya0FzVG91Y2hlZCgpO1xuICAgIH0pO1xuICB9XG5cbiAgc3ViUmVmcyhzY2hlbWEpIHtcbiAgICBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcykuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgaWYgKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLmhhc093blByb3BlcnR5KCckcmVmJykpIHtcbiAgICAgICAgc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0gPSB0aGlzLnNjaGVtYS5kZWZpbml0aW9uc1tzY2hlbWEucHJvcGVydGllc1twcm9wXVsnJHJlZiddLnJlcGxhY2UoJyMvZGVmaW5pdGlvbnMvJywgJycpXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzY2hlbWE7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNjaGVtYUZvcm1Hcm91cCB9IGZyb20gJy4uLy4uL21vZGVscy9zY2hlbWEtZm9ybS1ncm91cCc7XG5pbXBvcnQgeyBTY2hlbWEgfSBmcm9tICcuLi8uLi9tb2RlbHMvc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamYtY29tcG9uZW50LWNob29zZXIsIFtqZi1jb21wb25lbnQtY2hvb3Nlcl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoMiAqbmdJZj1cInNjaGVtYSAmJiBzY2hlbWEuaGFzT3duUHJvcGVydHkoJ3RpdGxlJykgJiYgIW5lc3RlZFwiPlxuICAgICAge3tzY2hlbWEudGl0bGV9fVxuICAgIDwvaDI+XG4gICAgPGg0ICpuZ0lmPVwic2NoZW1hICYmIHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgndGl0bGUnKSAmJiBuZXN0ZWRcIj5cbiAgICAgIHt7c2NoZW1hLnRpdGxlfX1cbiAgICA8L2g0PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgKm5nSWY9XCJzY2hlbWEgJiYgc2NoZW1hLmhhc093blByb3BlcnR5KCdkZXNjcmlwdGlvbicpXCIgW2lubmVySFRNTF09XCJzY2hlbWEuZGVzY3JpcHRpb25cIj48L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgKm5nRm9yPVwibGV0IGNvbnRyb2wgb2Yga2V5cyhmb3JtLmNvbnRyb2xzKVwiXG4gICAgICAgIGpmLWZpZWxkXG4gICAgICAgIFtjb250cm9sXT1cImZvcm0uZ2V0KGNvbnRyb2wpXCJcbiAgICAgICAgW2luZGV4XT1cImluZGV4XCJcbiAgICAgID48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDaG9vc2VyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgZm9ybTogU2NoZW1hRm9ybUdyb3VwO1xuICBASW5wdXQoKSBzY2hlbWE6IFNjaGVtYTtcbiAgQElucHV0KCkgbmVzdGVkID0gZmFsc2U7XG4gIGtleXMgPSBPYmplY3Qua2V5cztcbn1cbiIsImltcG9ydCB7IFNjaGVtYSB9IGZyb20gJy4uLy4uL21vZGVscy9zY2hlbWEnO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbnRyb2wgfSBmcm9tICcuLi8uLi9tb2RlbHMvc2NoZW1hLWZvcm0tY29udHJvbCc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamYtY29tcG9uZW50JyxcbiAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbkNvbXBvbmVudCB7XG4gIHB1YmxpYyBjb250cm9sOiBTY2hlbWFGb3JtQ29udHJvbDtcbiAgcHVibGljIHNjaGVtYTogU2NoZW1hO1xuICBwdWJsaWMgc3R5bGU6IHt9O1xuXG4gIHB1YmxpYyBpc1JlcXVpcmVkKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wudmFsaWRhdG9yICE9PSBudWxsO1xuICB9XG5cbiAgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnNjaGVtYS50aXRsZSA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gdGhpcy5zdHJUb1VwcGVyQ2FzZSh0aGlzLnNjaGVtYS5rZXkpIDogdGhpcy5zY2hlbWEudGl0bGU7XG4gIH1cblxuICBzdHJUb1VwcGVyQ2FzZShzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9fL2csICcgJykuc3BsaXQoJyAnKS5tYXAoKHdvcmQpID0+XG4gICAgICAod29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpXG4gICAgKS5qb2luKCcgJyk7XG4gIH1cblxuICBwbGFjZWhvbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEudGl0bGUgfHwgdGhpcy5zdHJUb1VwcGVyQ2FzZSh0aGlzLnNjaGVtYS5rZXkpO1xuICB9XG5cbiAgdHlwZSgpIHtcbiAgICBsZXQgZm9ybWF0ID0gdGhpcy5zY2hlbWEuZm9ybWF0IHx8ICd0ZXh0JztcblxuICAgIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgICBjYXNlICdwaG90byc6XG4gICAgICAgIGZvcm1hdCA9ICdmaWxlJztcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0O1xuICB9XG5cbiAgaWQoaT8pIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEua2V5ICsgJy0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpICsgJy0nICsgaTtcbiAgfVxuXG4gIGdldENsYXNzKGRlZmF1bHRDbGFzcz8pIHtcbiAgICByZXR1cm4gdGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgP1xuICAgICAgdGhpcy5zdHlsZVsnZGVmYXVsdCddIDogKGRlZmF1bHRDbGFzcyB8fCAnJyk7XG4gIH1cblxuICBnZXRNYXNrKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnbWFzaycpKSB7XG4gICAgICBjb25zdCBtYXNrOiBBcnJheTxzdHJpbmcgfCBSZWdFeHA+ID0gW107XG4gICAgICB0aGlzLnNjaGVtYS5tYXNrLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIG1hc2sucHVzaCgvXlxcLy4qXFwvJC8udGVzdChlbCkgPyBuZXcgUmVnRXhwKGVsLnJlcGxhY2UoL15cXC98XFwvJC9nLCAnJykpIDogZWwpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBtYXNrO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QtY29udGFpbmVyXCI+XG4gICAgICA8bGFiZWwgW2F0dHIuY2xhc3NdPVwic2NoZW1hLmtleVwiIFtuZ0NsYXNzXT1cIntyZXF1aXJlZDogaXNSZXF1aXJlZCgpfVwiPlxuICAgICAgICB7e3RpdGxlKCl9fTxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJ0aGlzLnNjaGVtYS5kZXNjcmlwdGlvblwiIFthdHRyLmNsYXNzXT1cIidpbmZvJ1wiIFthdHRyLnRpdGxlXT1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCI+SW5mbzwvYnV0dG9uPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgW3NlbGVjdGVkXT1cImNvbnRyb2wudmFsdWUgPT09ICcnXCIgW2Rpc2FibGVkXT1cInRydWVcIj5cbiAgICAgICAgICBTZWxlY3Qge3tlbXB0eU9wdGlvbigpfX1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb25cbiAgICAgICAgICAqbmdGb3I9XCJsZXQgZW4gb2YgdGhpcy5zY2hlbWEuZW51bTsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgW3NlbGVjdGVkXT1cImNvbnRyb2wudmFsdWUgPT09IGVuXCJcbiAgICAgICAgICBbbmdWYWx1ZV09XCJlblwiPlxuICAgICAgICAgIHt7ZW51bU5hbWVzKGkpfX1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICBlbnVtTmFtZXMoaW5kZXgpIHtcbiAgICByZXR1cm4gdHlwZW9mKHRoaXMuc2NoZW1hLmVudW1OYW1lcykgPT09ICd1bmRlZmluZWQnXG4gICAgICA/IHRoaXMuc2NoZW1hLmVudW1baW5kZXhdXG4gICAgICA6IHRoaXMuc2NoZW1hLmVudW1OYW1lc1tpbmRleF07XG4gIH1cblxuICBlbXB0eU9wdGlvbigpIHtcbiAgICByZXR1cm4gc3VwZXIudGl0bGUoKS5yZXBsYWNlKC9bXkEtWjAtOV0rJC9pZywgJycpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsIFtuZ0NsYXNzXT1cIlsnamYtbGFiZWwnLCBzY2hlbWEua2V5LCAoaXNSZXF1aXJlZCgpID8gJ3JlcXVpcmVkJyA6ICcnKV1cIiAqbmdJZj1cInR5cGUoKSAhPT0gJ2hpZGRlbidcIj5cbiAgICAgIHt7dGl0bGUoKX19PHN1cCAqbmdJZj1cImlzUmVxdWlyZWQoKVwiPio8L3N1cD5cbiAgICA8L2xhYmVsPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwidGhpcy5zY2hlbWEuZGVzY3JpcHRpb25cIiBbYXR0ci5jbGFzc109XCInaW5mbydcIiBbYXR0ci50aXRsZV09XCJ0aGlzLnNjaGVtYS5kZXNjcmlwdGlvblwiPkluZm88L2J1dHRvbj5cbiAgICA8aW5wdXRcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxuICAgICAgW2F0dHIudHlwZV09XCJ0eXBlKClcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgICBbYXR0ci5taW5MZW5ndGhdPVwic2NoZW1hLm1pbkxlbmd0aCB8fCBudWxsXCJcbiAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyKClcIlxuICAgICAgW3RleHRNYXNrXT1cInsgbWFzazogZ2V0TWFzaygpIH1cIlxuICAgIC8+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU3RyaW5nQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxsYWJlbCBbbmdDbGFzc109XCJbJ2pmLWxhYmVsJywgc2NoZW1hLmtleSwgKGlzUmVxdWlyZWQoKSA/ICdyZXF1aXJlZCcgOiAnJyldXCIgKm5nSWY9XCJ0eXBlKCkgIT09ICdoaWRkZW4nXCI+XG4gICAgICB7e3RpdGxlKCl9fTxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+XG4gICAgPC9sYWJlbD5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCIgW2F0dHIuY2xhc3NdPVwiJ2luZm8nXCIgW2F0dHIudGl0bGVdPVwidGhpcy5zY2hlbWEuZGVzY3JpcHRpb25cIj5JbmZvPC9idXR0b24+XG4gICAgPGlucHV0XG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICBbbmFtZV09XCJzY2hlbWEua2V5XCJcbiAgICAgIFthdHRyLnR5cGVdPVwiJ251bWJlcidcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIoKVwiXG4gICAgLz5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbY2xhc3NdPVwiZ2V0Q2xhc3MoJ2NoZWNrYm94LWdyb3VwJylcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveC1jb250YWluZXJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgW2lkXT1cInNjaGVtYS5rZXlcIlxuICAgICAgICAgIFtuYW1lXT1cInNjaGVtYS5rZXlcIlxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgW2F0dHIuZm9yXT1cInNjaGVtYS5rZXlcIiBbYXR0ci5jbGFzc109XCJzY2hlbWEua2V5XCIgW25nQ2xhc3NdPVwie3JlcXVpcmVkOiBpc1JlcXVpcmVkKCl9XCI+XG4gICAgICAgICAge3t0aXRsZSgpfX08c3VwICpuZ0lmPVwiaXNSZXF1aXJlZCgpXCI+Kjwvc3VwPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQm9vbGVhbkNvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7fVxuIiwiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsIFthdHRyLmNsYXNzXT1cInNjaGVtYS5rZXlcIiBbbmdDbGFzc109XCJ7cmVxdWlyZWQ6IGlzUmVxdWlyZWQoKX1cIj5cbiAgICAgIHt7dGl0bGUoKX19PHN1cCAqbmdJZj1cImlzUmVxdWlyZWQoKVwiPio8L3N1cD5cbiAgICA8L2xhYmVsPlxuICAgIDxkaXYgKm5nSWY9XCJwcmV2aWV3U3JjRXhpc3RzKClcIiBjbGFzcz1cImNsZWFyZml4XCI+XG4gICAgICA8aW1nIFthdHRyLnNyY109XCJwaG90b0RhdGFcIiBzdHlsZT1cIndpZHRoOiAyMDBweDsgZmxvYXQ6IGxlZnQ7XCIgY2xhc3M9XCJpbWctdGh1bWJuYWlsXCIgLz5cbiAgICAgIDxzcGFuIGhyZWY9XCIjXCIgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCIgKGNsaWNrKT1cImNsZWFyUGhvdG8oKVwiPlxuICAgICAgICA8aSBjbGFzcz1cImxhIGxhLWNsb3NlXCI+PC9pPlxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8aW5wdXRcbiAgICAgICAgKm5nSWY9XCIhcHJldmlld1NyY0V4aXN0cygpXCJcbiAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIlxuICAgICAgLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgW25hbWVdPVwic2NoZW1hLmtleVwiIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCIgLz5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBQaG90b0NvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIHB1YmxpYyBwaG90b0RhdGE6IHN0cmluZztcblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb2Nlc3NGaWxlKHJlYWRlci5yZXN1bHQsIGZpbGUudHlwZSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLnBob3RvRGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodGhpcy5waG90b0RhdGEpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIHJlYWRpbmcgdGhlIGZpbGUhJyk7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YoZmlsZSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICB9XG4gIH1cblxuICBwcmV2aWV3U3JjRXhpc3RzKCkge1xuICAgIHJldHVybiB0eXBlb2YgKHRoaXMucGhvdG9EYXRhKSA9PT0gJ3N0cmluZyc7XG4gIH1cblxuICBjbGVhclBob3RvKCkge1xuICAgIHRoaXMucGhvdG9EYXRhID0gbnVsbDtcbiAgICB0aGlzLmNvbnRyb2wucmVzZXQoKTtcbiAgfVxuXG4gIHByb2Nlc3NGaWxlKGRhdGFVUkwsIGZpbGVUeXBlKSB7XG4gICAgY29uc3QgbWF4V2lkdGggPSA4MDA7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gODAwO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBkYXRhVVJMO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBpbWFnZS53aWR0aDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xuICAgICAgICBjb25zdCBzaG91bGRSZXNpemUgPSAod2lkdGggPiBtYXhXaWR0aCkgfHwgKGhlaWdodCA+IG1heEhlaWdodCk7XG5cbiAgICAgICAgaWYgKCFzaG91bGRSZXNpemUpIHtcbiAgICAgICAgICByZXNvbHZlKGRhdGFVUkwpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld1dpZHRoO1xuICAgICAgICBsZXQgbmV3SGVpZ2h0O1xuXG4gICAgICAgIGlmICh3aWR0aCA+IGhlaWdodCkge1xuICAgICAgICAgIG5ld0hlaWdodCA9IGhlaWdodCAqIChtYXhXaWR0aCAvIHdpZHRoKTtcbiAgICAgICAgICBuZXdXaWR0aCA9IG1heFdpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1dpZHRoID0gd2lkdGggKiAobWF4SGVpZ2h0IC8gaGVpZ2h0KTtcbiAgICAgICAgICBuZXdIZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gbmV3V2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIG5ld1dpZHRoLCBuZXdIZWlnaHQpO1xuXG4gICAgICAgIHJlc29sdmUoY2FudmFzLnRvRGF0YVVSTChmaWxlVHlwZSkpO1xuICAgICAgfTtcblxuICAgICAgaW1hZ2Uub25lcnJvciA9IChlcnIpID0+IHJlamVjdChlcnIpO1xuICAgIH0pO1xuICB9XG59XG5cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtjbGFzc109XCJnZXRDbGFzcygpXCI+XG4gICAgICA8bGFiZWwgbmdDbGFzcz1cIntyZXF1aXJlZDogaXNSZXF1aXJlZCgpfVwiPlxuICAgICAgICB7e3RpdGxlKCl9fTxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJ0aGlzLnNjaGVtYS5kZXNjcmlwdGlvblwiIFthdHRyLmNsYXNzXT1cIidpbmZvJ1wiIFthdHRyLnRpdGxlXT1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCI+SW5mbzwvYnV0dG9uPlxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgW25hbWVdPVwic2NoZW1hLmtleVwiXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgICAgIFthdHRyLm1pbkxlbmd0aF09XCJzY2hlbWEubWluTGVuZ3RoIHx8IG51bGxcIlxuICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlcigpXCJcbiAgICAgID48L3RleHRhcmVhPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFRleHRhcmVhQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uQ29tcG9uZW50IHsgfVxuXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTY2hlbWFGb3JtQ29udHJvbH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NjaGVtYS1mb3JtLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBqZi1jb21wb25lbnQtY2hvb3NlclxuICAgICAgW2Zvcm1dPVwiY29udHJvbFwiXG4gICAgICBbc2NoZW1hXT1cImNvbnRyb2wuc2NoZW1hXCJcbiAgICAgIFtuZXN0ZWRdPVwidHJ1ZVwiPlxuICAgIDwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgT2JqZWN0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY29udHJvbDogU2NoZW1hRm9ybUNvbnRyb2w7XG59XG5cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTY2hlbWFGb3JtQ29udHJvbH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NjaGVtYS1mb3JtLWNvbnRyb2wnO1xuaW1wb3J0IHtGb3JtQXJyYXksIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtTY2hlbWFGb3JtQXJyYXl9IGZyb20gJy4uLy4uL21vZGVscy9zY2hlbWEtZm9ybS1hcnJheSc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXY+XG4gICAgICA8aDYgKm5nSWY9XCJnZXRMZWdlbmQoY29udHJvbCkubGVuZ3RoXCI+e3tnZXRMZWdlbmQoY29udHJvbCl9fTwvaDY+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBhcnJDb250cm9sIG9mIGdldEVuYWJsZWRDb250cm9scyhjb250cm9sKTsgbGV0IGkgPSBpbmRleDtcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTFcIiBqZi1jb21wb25lbnQtY2hvb3NlciBbZm9ybV09XCJhcnJDb250cm9sXCIgW2luZGV4XT1cImlcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj5cbiAgICAgICAgICAgIDxzcGFuIGhyZWY9XCIjXCIgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCIgKGNsaWNrKT1cInJlbW92ZUNvbnRyb2woY29udHJvbCwgaSlcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJsYSBsYS1jbG9zZVwiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImFkZENvbnRyb2woY29udHJvbClcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tc21cIiB2YWx1ZT1cIkFkZFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlDb21wb25lbnQge1xuICBASW5wdXQoKSBjb250cm9sOiBTY2hlbWFGb3JtQXJyYXk7XG5cbiAgZ2V0TGVnZW5kKGNvbnRyb2wpIHtcbiAgICByZXR1cm4gKGNvbnRyb2wgJiYgY29udHJvbC5zY2hlbWEgJiYgY29udHJvbC5zY2hlbWEua2V5KSA/XG4gICAgICB0aGlzLnN0clRvVXBwZXJDYXNlKGNvbnRyb2wuc2NoZW1hLmtleSkgOiAnJztcbiAgfVxuXG4gIHN0clRvVXBwZXJDYXNlKHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL18vZywgJyAnKS5zcGxpdCgnICcpLm1hcCgod29yZCkgPT5cbiAgICAgICh3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSlcbiAgICApLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGdldEVuYWJsZWRDb250cm9scyhjb250cm9sKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29udHJvbC5jb250cm9scykpIHtcbiAgICAgIHJldHVybiBjb250cm9sLmNvbnRyb2xzLmZpbHRlcigoYykgPT4gYy5lbmFibGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbDtcbiAgfVxuXG4gIGFkZENvbnRyb2woZm9ybUFycmF5OiBGb3JtQXJyYXkpIHtcbiAgICBjb25zdCBuZXdSb3cgPSBPYmplY3Qua2V5cyhmb3JtQXJyYXkuY29udHJvbHNbMF1bJ2NvbnRyb2xzJ10pLnJlZHVjZSgocHJldiwgbmV4dCkgPT4ge1xuICAgICAgY29uc3QgZm9ybUdyb3VwID0gZm9ybUFycmF5LmNvbnRyb2xzWzBdWydjb250cm9scyddO1xuICAgICAgbGV0IG5ld0NvbnRyb2wgPSBudWxsO1xuXG4gICAgICBpZiAoZm9ybUdyb3VwW25leHRdLmNvbnRyb2xzKSB7XG4gICAgICAgIG5ld0NvbnRyb2wgPSBuZXcgU2NoZW1hRm9ybUFycmF5KGZvcm1Hcm91cFtuZXh0XS5jb250cm9scyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdDb250cm9sID0gbmV3IFNjaGVtYUZvcm1Db250cm9sKCcnLCBmb3JtR3JvdXBbbmV4dF0udmFsaWRhdG9yKTtcbiAgICAgIH1cblxuICAgICAgbmV3Q29udHJvbC5zY2hlbWEgPSBmb3JtR3JvdXBbbmV4dF0uc2NoZW1hO1xuICAgICAgbmV3Q29udHJvbC5rZXkgPSBmb3JtR3JvdXBbbmV4dF0ua2V5O1xuICAgICAgcHJldltuZXh0XSA9IG5ld0NvbnRyb2w7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG5cbiAgICBmb3JtQXJyYXkucHVzaChuZXcgRm9ybUdyb3VwKG5ld1JvdykpO1xuICB9XG5cbiAgcmVtb3ZlQ29udHJvbChmb3JtQXJyYXk6IEZvcm1BcnJheSwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmIChmb3JtQXJyYXkubGVuZ3RoID09PSAxKSB7XG4gICAgICBmb3JtQXJyYXkuY29udHJvbHNbMF0ucmVzZXQoKTtcbiAgICAgIGZvcm1BcnJheS5jb250cm9sc1swXS5kaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1BcnJheS5yZW1vdmVBdChpbmRleCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsIFthdHRyLmNsYXNzXT1cInNjaGVtYS5rZXlcIiBbbmdDbGFzc109XCJ7J21hcmdpbi1ib3R0b20tLWhhbGYnOiB0cnVlLCByZXF1aXJlZDogaXNSZXF1aXJlZCgpfVwiPlxuICAgICAge3t0aXRsZSgpfX08c3VwICpuZ0lmPVwiaXNSZXF1aXJlZCgpXCI+Kjwvc3VwPjwvbGFiZWw+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJ0aGlzLnNjaGVtYS5kZXNjcmlwdGlvblwiIFthdHRyLmNsYXNzXT1cIidpbmZvJ1wiIFthdHRyLnRpdGxlXT1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCI+SW5mbzwvYnV0dG9uPlxuICAgIDxkaXYgW2NsYXNzXT1cImdldENsYXNzKCdyYWRpby1ncm91cCcpXCI+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlbnVtIG9mIHRoaXMuc2NoZW1hLmVudW07IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgICBbbmdDbGFzc109XCJ7J3JhZGlvLWNvbnRhaW5lcic6IHRydWUsICdjaGVja2VkJzogY29udHJvbC52YWx1ZSA9PT0gZW51bX1cIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICBbYXR0ci5pZF09XCJnZXRJZChpLCBlbnVtKVwiXG4gICAgICAgICAgW2NoZWNrZWRdPVwiY29udHJvbC52YWx1ZSA9PT0gZW51bVwiXG4gICAgICAgICAgW25hbWVdPVwiZ2V0TmFtZShzY2hlbWEua2V5KVwiXG4gICAgICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgICAgIFt2YWx1ZV09XCJlbnVtXCIgLz5cbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgW2F0dHIuZm9yXT1cImdldElkKGksIGVudW0pXCJcbiAgICAgICAgICBbYXR0ci5jbGFzc109XCJzY2hlbWEua2V5XCI+XG4gICAgICAgICAgIHt7ZW51bU5hbWVzKGkpfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvZ3JvdXBDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICByYW5kb21TdWZmaXggPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XG5cbiAgZW51bU5hbWVzKGluZGV4KSB7XG4gICAgcmV0dXJuIHR5cGVvZih0aGlzLnNjaGVtYS5lbnVtTmFtZXMpID09PSAndW5kZWZpbmVkJ1xuICAgICAgPyB0aGlzLnNjaGVtYS5lbnVtW2luZGV4XVxuICAgICAgOiB0aGlzLnNjaGVtYS5lbnVtTmFtZXNbaW5kZXhdO1xuICB9XG5cbiAgZ2V0SWQoaSwgdmFsKSB7XG4gICAgICByZXR1cm4gYCR7aX0tJHt2YWwucmVwbGFjZSgvW1xcV19dKy9nLCAnJyl9KyR7dGhpcy5yYW5kb21TdWZmaXh9YDtcbiAgfVxuXG4gIGdldE5hbWUoa2V5KSB7XG4gICAgcmV0dXJuIGAke2tleX0tJHt0aGlzLnJhbmRvbVN1ZmZpeH1gO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsIFthdHRyLmNsYXNzXT1cInNjaGVtYS5rZXlcIiBbbmdDbGFzc109XCJ7J21hcmdpbi1ib3R0b20tLWhhbGYnOiB0cnVlLCByZXF1aXJlZDogaXNSZXF1aXJlZCgpfVwiPlxuICAgICAge3t0aXRsZSgpfX08c3VwICpuZ0lmPVwiaXNSZXF1aXJlZCgpXCI+Kjwvc3VwPjwvbGFiZWw+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJ0aGlzLnNjaGVtYS5kZXNjcmlwdGlvblwiIFthdHRyLmNsYXNzXT1cIidpbmZvJ1wiIFthdHRyLnRpdGxlXT1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCI+SW5mbzwvYnV0dG9uPlxuICAgIDxkaXYgW2NsYXNzXT1cImdldENsYXNzKCdjaGVja2JveC1ncm91cCcpXCI+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjaGlsZCBvZiB0aGlzLmNvbnRyb2xbJ2NvbnRyb2xzJ107IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgICBbbmdDbGFzc109XCJ7J2NoZWNrYm94LWNvbnRhaW5lcic6IHRydWUsICdjaGVja2VkJzogY2hpbGQudmFsdWUgPT09IHNjaGVtYS5lbnVtW2ldfVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIFthdHRyLmlkXT1cImdldElkKGksIHNjaGVtYS5lbnVtW2ldKVwiXG4gICAgICAgICAgW2NoZWNrZWRdPVwiY2hpbGQudmFsdWUgPT09IHNjaGVtYS5lbnVtW2ldXCJcbiAgICAgICAgICBbbmFtZV09XCJzY2hlbWEua2V5XCJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiY2hpbGRcIlxuICAgICAgICAgIChjaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50LCBpKVwiXG4gICAgICAgICAgW3ZhbHVlXT1cInNjaGVtYS5lbnVtW2ldXCIgLz5cbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgW2F0dHIuZm9yXT1cImdldElkKGksIHNjaGVtYS5lbnVtW2ldKVwiXG4gICAgICAgICAgW2F0dHIuY2xhc3NdPVwic2NoZW1hLmtleVwiPlxuICAgICAgICAgIHt7ZW51bU5hbWVzKGkpfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94Z3JvdXBDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICBjaGVja2JveEdyb3VwVmFsdWVzID0gW107XG4gIHJhbmRvbVN1ZmZpeCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcblxuICBlbnVtTmFtZXMoaW5kZXgpIHtcbiAgICByZXR1cm4gdHlwZW9mKHRoaXMuc2NoZW1hLmVudW1OYW1lcykgPT09ICd1bmRlZmluZWQnXG4gICAgICA/IHRoaXMuc2NoZW1hLmVudW1baW5kZXhdXG4gICAgICA6IHRoaXMuc2NoZW1hLmVudW1OYW1lc1tpbmRleF07XG4gIH1cblxuICBzZXRWYWx1ZShldmVudCwgaW5kZXgpIHtcbiAgICBpZiAodGhpcy5jaGVja2JveEdyb3VwVmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5jaGVja2JveEdyb3VwVmFsdWVzID0gbmV3IEFycmF5KHRoaXMuY29udHJvbFsnY29udHJvbHMnXS5sZW5ndGgpLmZpbGwobnVsbCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2hlY2tib3hHcm91cFZhbHVlc1tpbmRleF0gPT09IG51bGwpIHtcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IHRoaXMuc2NoZW1hLmVudW1baW5kZXhdO1xuICAgICAgdGhpcy5jaGVja2JveEdyb3VwVmFsdWVzW2luZGV4XSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGVja2JveEdyb3VwVmFsdWVzW2luZGV4XSA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHRoaXMuY2hlY2tib3hHcm91cFZhbHVlcyk7XG4gIH1cblxuICBnZXRJZChpLCB2YWwpIHtcbiAgICByZXR1cm4gYCR7aX0tJHt2YWwucmVwbGFjZSgvW1xcV19dKy9nLCAnJyl9KyR7dGhpcy5yYW5kb21TdWZmaXh9YDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxsYWJlbCBbYXR0ci5jbGFzc109XCJzY2hlbWEua2V5XCIgW25nQ2xhc3NdPVwie3JlcXVpcmVkOiBpc1JlcXVpcmVkKCl9XCI+XG4gICAgICB7e3RpdGxlKCl9fTxzdXAgKm5nSWY9XCJpc1JlcXVpcmVkKClcIj4qPC9zdXA+XG4gICAgPC9sYWJlbD5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIFthdHRyLmNsYXNzXT1cIidpbmZvJ1wiIFthdHRyLnRpdGxlXT1cInRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uXCI+SW5mbzwvYnV0dG9uPlxuICAgIDxzZWxlY3RcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgIG11bHRpcGxlPVwibXVsdGlwbGVcIlxuICAgID5cbiAgICAgIDxvcHRpb25cbiAgICAgICAgKm5nRm9yPVwibGV0IGVuIG9mIHNjaGVtYS5lbnVtOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgW3NlbGVjdGVkXT1cImNvbnRyb2wudmFsdWUgPT09IGVuXCJcbiAgICAgICAgW25nVmFsdWVdPVwiZW5cIj5cbiAgICAgICAge3tlbnVtTmFtZXMoaSl9fVxuICAgICAgPC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlzZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBDb21tb25Db21wb25lbnQge1xuICBlbnVtTmFtZXMoaW5kZXgpIHtcbiAgICByZXR1cm4gdHlwZW9mKHRoaXMuc2NoZW1hLmVudW1OYW1lcykgPT09ICd1bmRlZmluZWQnXG4gICAgICA/IHRoaXMuc2NoZW1hLmVudW1baW5kZXhdXG4gICAgICA6IHRoaXMuc2NoZW1hLmVudW1OYW1lc1tpbmRleF07XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5jb21wb25lbnQnO1xuaW1wb3J0IGNyZWF0ZU51bWJlck1hc2sgZnJvbSAndGV4dC1tYXNrLWFkZG9ucy9kaXN0L2NyZWF0ZU51bWJlck1hc2snO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8bGFiZWwgW25nQ2xhc3NdPVwiWydqZi1sYWJlbCcsIHNjaGVtYS5rZXksIChpc1JlcXVpcmVkKCkgPyAncmVxdWlyZWQnIDogJycpXVwiPlxuICAgICAge3t0aXRsZSgpfX08c3VwICpuZ0lmPVwiaXNSZXF1aXJlZCgpXCI+Kjwvc3VwPlxuICAgIDwvbGFiZWw+XG4gICAgPGlucHV0XG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICBbbmFtZV09XCJzY2hlbWEua2V5XCJcbiAgICAgIFthdHRyLnR5cGVdPVwiJ3RleHQnXCJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlcigpXCJcbiAgICAgIFt0ZXh0TWFza109XCJ7IG1hc2s6IG51bWJlck1hc2t9XCJcbiAgICAgIChpbnB1dCk9Y2xlYW5NYXNrKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgLz5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBNb25leUNvbXBvbmVudCBleHRlbmRzIENvbW1vbkNvbXBvbmVudCB7XG4gIG51bWJlck1hc2sgPSBjcmVhdGVOdW1iZXJNYXNrKHsgYWxsb3dEZWNpbWFsOiBmYWxzZSwgcHJlZml4OiAnJyB9KTtcblxuICBjbGVhbk1hc2sodmFsdWUpIHtcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUucmVwbGFjZSgvXFxEL2csICcnKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RyaW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGRzL3N0cmluZy9zdHJpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IFNjaGVtYUZvcm1Db250cm9sIH0gZnJvbSAnLi4vbW9kZWxzL3NjaGVtYS1mb3JtLWNvbnRyb2wnO1xuaW1wb3J0IHsgU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IE51bWJlckNvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkcy9udW1iZXIvbnVtYmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb29sZWFuQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGRzL2Jvb2xlYW4vYm9vbGVhbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGhvdG9Db21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvcGhvdG8vcGhvdG8uY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRhcmVhQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGRzL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPYmplY3RDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvb2JqZWN0L29iamVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXJyYXlDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvYXJyYXkvYXJyYXkuY29tcG9uZW50JztcbmltcG9ydCB7IFJhZGlvZ3JvdXBDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvcmFkaW9ncm91cC9yYWRpb2dyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGVja2JveGdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGRzL2NoZWNrYm94Z3JvdXAvY2hlY2tib3hncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXVsdGlzZWxlY3RDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IE1vbmV5Q29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGRzL21vbmV5L21vbmV5LmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKc29uRm9ybUZpZWxkc1NlcnZpY2Uge1xuICBwdWJsaWMgcm9vdFZpZXdDb250YWluZXI7XG4gIHByaXZhdGUgZmllbGRUeXBlczogeyBbdHlwZTogc3RyaW5nXTogYW55IH07XG4gIHByaXZhdGUgZGVmYXVsdEZpZWxkVHlwZSA9IFN0cmluZ0NvbXBvbmVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG4gICAgdGhpcy5maWVsZFR5cGVzID0ge307XG4gICAgdGhpcy5yZWdpc3Rlcignc3RyaW5nJywgU3RyaW5nQ29tcG9uZW50KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdzZWxlY3QnLCBTZWxlY3RDb21wb25lbnQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ251bWJlcicsIE51bWJlckNvbXBvbmVudCk7XG4gICAgdGhpcy5yZWdpc3RlcignYm9vbGVhbicsIEJvb2xlYW5Db21wb25lbnQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3Bob3RvJywgUGhvdG9Db21wb25lbnQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3RleHRhcmVhJywgVGV4dGFyZWFDb21wb25lbnQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ29iamVjdCcsIE9iamVjdENvbXBvbmVudCk7XG4gICAgdGhpcy5yZWdpc3RlcignYXJyYXknLCBBcnJheUNvbXBvbmVudCk7XG4gICAgdGhpcy5yZWdpc3RlcigncmFkaW9ncm91cCcsIFJhZGlvZ3JvdXBDb21wb25lbnQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2NoZWNrYm94Z3JvdXAnLCBDaGVja2JveGdyb3VwQ29tcG9uZW50KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdtdWx0aXNlbGVjdCcsIE11bHRpc2VsZWN0Q29tcG9uZW50KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdtb25leScsIE1vbmV5Q29tcG9uZW50KTtcbiAgfVxuXG4gIHNldFJvb3RWaWV3Q29udGFpbmVyUmVmKHZpZXdDb250YWluZXJSZWYpIHtcbiAgICB0aGlzLnJvb3RWaWV3Q29udGFpbmVyID0gdmlld0NvbnRhaW5lclJlZjtcbiAgfVxuXG4gIGFkZER5bmFtaWNDb21wb25lbnQoY29udHJvbDogU2NoZW1hRm9ybUNvbnRyb2wsIGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5nZXQoY29udHJvbCkpO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMucm9vdFZpZXdDb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb250cm9sID0gY29udHJvbDtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2Uuc2NoZW1hID0gY29udHJvbC5zY2hlbWE7XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLnN0eWxlID0gY29udHJvbC5zdHlsZTtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGhhcyh0eXBlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZFR5cGVzLmhhc093blByb3BlcnR5KHR5cGUpO1xuICB9XG5cbiAgcmVnaXN0ZXIodHlwZTogc3RyaW5nLCBmaWVsZDogYW55KSB7XG4gICAgdGhpcy5maWVsZFR5cGVzW3R5cGVdID0gZmllbGQ7XG4gIH1cblxuICBnZXQoY29udHJvbCk6IGFueSB7XG4gICAgLy8gY2hlY2sgaWYgYSBmaWVsZCBpcyBnZXR0aW5nIG92ZXJyaWRlbiBieSBmb3JtYXRcbiAgICBpZiAodHlwZW9mKGNvbnRyb2wuc2NoZW1hLmZvcm1hdCkgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuaGFzKGNvbnRyb2wuc2NoZW1hLmZvcm1hdCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpZWxkVHlwZXNbY29udHJvbC5zY2hlbWEuZm9ybWF0XTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mKGNvbnRyb2wuc2NoZW1hLmVudW0pICE9PSAndW5kZWZpbmVkJyAmJiBjb250cm9sLnNjaGVtYS50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWVsZFR5cGVzWydjaGVja2JveGdyb3VwJ107XG4gICAgfSBlbHNlIGlmICh0eXBlb2YoY29udHJvbC5zY2hlbWEuZW51bSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWVsZFR5cGVzWydzZWxlY3QnXTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGFzKGNvbnRyb2wuc2NoZW1hLmZvcm1hdCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpZWxkVHlwZXNbY29udHJvbC5zY2hlbWEuZm9ybWF0XTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGFzKGNvbnRyb2wuc2NoZW1hLnR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWVsZFR5cGVzW2NvbnRyb2wuc2NoZW1hLnR5cGVdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0RmllbGRUeXBlO1xuICB9XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbnRyb2wgfSBmcm9tICcuLi8uLi9tb2RlbHMvc2NoZW1hLWZvcm0tY29udHJvbCc7XG5pbXBvcnQgeyBKc29uRm9ybUZpZWxkc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9maWVsZHMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pmLWZpZWxkLCBbamYtZmllbGRdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRhaW5lciAjY29udGFpbmVyPjwvbmctY29udGFpbmVyPlxuICAgIDxkaXYgKm5nSWY9XCJjb250cm9sLmludmFsaWQgJiYgKGNvbnRyb2wuZGlydHkgfHwgY29udHJvbC50b3VjaGVkKVwiIGNsYXNzPVwiaGFzLWRhbmdlclwiPlxuICAgICAgPGRpdiAqbmdJZj1cImNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzWydyZXF1aXJlZCddXCI+XG4gICAgICAgIFRoaXMgZmllbGQgaXMgcmVxdWlyZWQuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1sncGF0dGVybiddXCI+XG4gICAgICAgIElucHV0IHZhbHVlIGlzIGludmFsaWQuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1snbWlubGVuZ3RoJ11cIj5cbiAgICAgICAgSW5wdXQgaGFzIHRvIGJlIGEgbWluaW11bSBvZiB7e2NvbnRyb2wuZXJyb3JzWydtaW5sZW5ndGgnXVsncmVxdWlyZWRMZW5ndGgnXX19IGNoYXJhY3RlcnMuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgKm5nSWY9XCJjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9yc1snbWF4bGVuZ3RoJ11cIj5cbiAgICAgICAgSW5wdXQgY2FuIGNvbnRhaW4gYSBtYXhpbXVtIG9mIHt7Y29udHJvbC5lcnJvcnNbJ21heGxlbmd0aCddWydyZXF1aXJlZExlbmd0aCddfX0gY2hhcmFjdGVycy5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cImNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzWydtaW4nXVwiPlxuICAgICAgICBFbnRlciBhIHZhbHVlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB7e2NvbnRyb2wuZXJyb3JzWydtaW4nXVsnbWluJ119fS5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cImNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzWydtYXgnXVwiPlxuICAgICAgICBFbnRlciBhIHZhbHVlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB7e2NvbnRyb2wuZXJyb3JzWydtYXgnXVsnbWF4J119fS5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cImNvbnRyb2wuZXJyb3JzICYmIGNvbnRyb2wuZXJyb3JzWydjdXN0b21FcnJvciddXCI+XG4gICAgICAgIHt7Y29udHJvbC5lcnJvcnNbJ2N1c3RvbUVycm9yJ119fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG4gIEBJbnB1dCgpIGNvbnRyb2w6IFNjaGVtYUZvcm1Db250cm9sO1xuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuICBwdWJsaWMgcGF0dGVybnM7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGpzb25Gb3JtRmllbGRzU2VydmljZTogSnNvbkZvcm1GaWVsZHNTZXJ2aWNlLCBwdWJsaWMgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLnBhdHRlcm5zID0ge307XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdlbmVyYXRlRmllbGQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmdlbmVyYXRlRmllbGQoKTtcbiAgfVxuXG4gIGdlbmVyYXRlRmllbGQoKSB7XG4gICAgdGhpcy5jb250YWluZXIuY2xlYXIoKTtcbiAgICB0aGlzLmpzb25Gb3JtRmllbGRzU2VydmljZS5zZXRSb290Vmlld0NvbnRhaW5lclJlZih0aGlzLmNvbnRhaW5lcik7XG4gICAgdGhpcy5qc29uRm9ybUZpZWxkc1NlcnZpY2UuYWRkRHluYW1pY0NvbXBvbmVudCh0aGlzLmNvbnRyb2wsIHRoaXMuaW5kZXgpO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSBgZmllbGQgbWFyZ2luLWJvdHRvbSAke3RoaXMuZ2V0Q2xhc3MoKX0gZm9ybS1ncm91cGA7XG4gIH1cblxuICBnZXRDbGFzcyhkZWZhdWx0Q2xhc3MgPSAnJykge1xuICAgIGNvbnN0IGZpZWxkQ2xhc3MgPSBbZGVmYXVsdENsYXNzXTtcbiAgICBmaWVsZENsYXNzLnB1c2godGhpcy5jb250cm9sLnNjaGVtYS50eXBlKTtcbiAgICBmaWVsZENsYXNzLnB1c2godGhpcy5jb250cm9sLnNjaGVtYS5rZXkpO1xuXG4gICAgaWYgKHRoaXMuY29udHJvbC5zY2hlbWEuaGFzT3duUHJvcGVydHkoJ2Rlc2NyaXB0aW9uJykpIHtcbiAgICAgIGZpZWxkQ2xhc3MucHVzaCgnaGFzLWluZm8nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250cm9sLnN0eWxlICYmIHRoaXMuY29udHJvbC5zdHlsZS5kZWZhdWx0ICYmIFsncmFkaW9ncm91cCcsICdjaGVja2JveGdyb3VwJ10uaW5kZXhPZih0aGlzLmNvbnRyb2wuc2NoZW1hLmZvcm1hdCkgPT09IC0xKSB7XG4gICAgICBmaWVsZENsYXNzLnB1c2godGhpcy5jb250cm9sLnN0eWxlLmRlZmF1bHQpO1xuICAgIH1cblxuICAgIHJldHVybiBmaWVsZENsYXNzLmZpbHRlcigoZCkgPT4gZCkuam9pbignICcpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdqZi1mb3JtLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvblxuICAgICAgKm5nSWY9XCJpc1Zpc2libGUoKVwiXG4gICAgICBbdHlwZV09XCJnZXRUeXBlKClcIlxuICAgICAgW25nQ2xhc3NdPVwiZ2V0Q2xhc3MoKVwiXG4gICAgICBbZGlzYWJsZWRdPVwiaXNXb3JraW5nXCJcbiAgICAgIChjbGljayk9XCJoYW5kbGVCdXR0b25DbGljaygpXCI+XG4gICAgICAgIDxqZi13b3JraW5nLXNwaW5uZXIgKm5nSWY9XCJpc1dvcmtpbmcgJiYgc3VibWl0XCI+PC9qZi13b3JraW5nLXNwaW5uZXI+XG4gICAgICAgIHt7Z2V0TGFiZWwoKX19XG4gICAgPC9idXR0b24+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUJ1dHRvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGlzRm9ybVZhbGlkID0gdHJ1ZTtcbiAgQElucHV0KCkgbGFiZWwgPSAnJztcbiAgQElucHV0KCkgaXNNdWx0aVN0ZXAgPSBmYWxzZTtcbiAgQElucHV0KCkgc3RlcHMgPSBbXTtcbiAgQElucHV0KCkgc3VibWl0ID0gJyc7XG4gIEBJbnB1dCgpIGNvbnRpbnVlID0gJyc7XG4gIEBJbnB1dCgpIGNhbmNlbCA9ICcnO1xuICBASW5wdXQoKSBjbGFzc2VzID0gPGFueT57fTtcbiAgQElucHV0KCkgaXNXb3JraW5nID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBoYW5kbGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBnZXRDbGFzcygpIHtcbiAgICByZXR1cm4gKHRoaXMuY2FuY2VsLmxlbmd0aCA+IDApXG4gICAgICA/IFsnYnRuIGJ0bi1kZWZhdWx0IGJ1dHRvbicsIHRoaXMuY2xhc3Nlcy5jYW5jZWwgfHwgJyddXG4gICAgICA6IFsnYnRuIGJ0bi1wcmltYXJ5IGJ1dHRvbiBidXR0b24tLWFjY2VwdCcsIHRoaXMuY2xhc3Nlcy5zdWJtaXQgfHwgJycsICh0aGlzLmlzRm9ybVZhbGlkID8gJ3ZhbGlkJyA6ICdpbnZhbGlkJyldO1xuICB9XG5cbiAgaXNWaXNpYmxlKCkge1xuICAgIGNvbnN0IHN0ZXAgPSB0aGlzLnN0ZXBzLmZpbmRJbmRleCgocykgPT4gcy52aXNpYmxlKTtcbiAgICBpZiAodGhpcy5pc011bHRpU3RlcCAmJiB0aGlzLmNhbmNlbC5sZW5ndGggPiAwICYmIHRoaXMuc3RlcHNbc3RlcF0pIHtcbiAgICAgIHJldHVybiB0aGlzLnN0ZXBzW3N0ZXBdLnR5cGUgIT09ICdmaXJzdCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXRMYWJlbCgpIHtcbiAgICBpZiAodGhpcy5pc011bHRpU3RlcCAmJiB0aGlzLmNhbmNlbC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzdGVwID0gdGhpcy5zdGVwcy5maW5kSW5kZXgoKHMpID0+IHMudmlzaWJsZSk7XG4gICAgICBpZiAodGhpcy5zdGVwc1tzdGVwXSAmJiB0aGlzLnN0ZXBzW3N0ZXBdLnR5cGUgIT09ICdmaXJzdCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FuY2VsO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5pc011bHRpU3RlcCkge1xuICAgICAgY29uc3Qgc3RlcCA9IHRoaXMuc3RlcHMuZmluZEluZGV4KChzKSA9PiBzLnZpc2libGUpO1xuICAgICAgaWYgKHRoaXMuc3RlcHNbc3RlcF0gJiYgdGhpcy5zdGVwc1tzdGVwXS50eXBlICE9PSAnbGFzdCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnN1Ym1pdDtcbiAgICB9IGVsc2UgIGlmICh0aGlzLmNhbmNlbC5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYW5jZWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3VibWl0O1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBpZiAodGhpcy5jYW5jZWwpIHtcbiAgICAgIHJldHVybiAnYnV0dG9uJztcbiAgICB9XG5cbiAgICByZXR1cm4gJ3N1Ym1pdCc7XG4gIH1cblxuICBoYW5kbGVCdXR0b25DbGljaygpIHtcbiAgICBpZiAodGhpcy5jYW5jZWwubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5oYW5kbGVDbGljay5lbWl0KCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pmLXdvcmtpbmctc3Bpbm5lcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZyAqbmdJZj1cImlzV29ya2luZ1wiIHdpZHRoPVwiMzhcIiBoZWlnaHQ9XCIzOFwiIHZpZXdCb3g9XCIwIDAgMzggMzhcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgc3Ryb2tlPVwiI2ZmZlwiPlxuICAgICAgPGcgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxIDEpXCIgc3Ryb2tlLXdpZHRoPVwiMlwiPlxuICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLW9wYWNpdHk9XCIuNVwiIGN4PVwiMThcIiBjeT1cIjE4XCIgcj1cIjE4XCIvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMzYgMThjMC05Ljk0LTguMDYtMTgtMTgtMThcIj5cbiAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIlxuICAgICAgICAgICAgICB0eXBlPVwicm90YXRlXCJcbiAgICAgICAgICAgICAgZnJvbT1cIjAgMTggMThcIlxuICAgICAgICAgICAgICB0bz1cIjM2MCAxOCAxOFwiXG4gICAgICAgICAgICAgIGR1cj1cIjFzXCJcbiAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIvPlxuICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFdvcmtpbmdTcGlubmVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaXNXb3JraW5nID0gZmFsc2U7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEpzb25Gb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9qc29uLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDaG9vc2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Nob29zZXIvY2hvb3Nlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9maWVsZHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RyaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZHMvc3RyaW5nL3N0cmluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZHMvbnVtYmVyL251bWJlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQm9vbGVhbkNvbXBvbmVudCB9IGZyb20gJy4vZmllbGRzL2Jvb2xlYW4vYm9vbGVhbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQvZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IFBob3RvQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZHMvcGhvdG8vcGhvdG8uY29tcG9uZW50JztcbmltcG9ydCB7IEpzb25Gb3JtRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kZWZhdWx0cy5zZXJ2aWNlJztcbmltcG9ydCB7IEpzb25Gb3JtRmllbGRzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZmllbGRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgSnNvbkZvcm1WYWxpZGF0b3JzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdmFsaWRhdG9ycy5zZXJ2aWNlJztcbmltcG9ydCB7IFRleHRhcmVhQ29tcG9uZW50IH0gZnJvbSAnLi9maWVsZHMvdGV4dGFyZWEvdGV4dGFyZWEuY29tcG9uZW50JztcbmltcG9ydCB7IE9iamVjdENvbXBvbmVudCB9IGZyb20gJy4vZmllbGRzL29iamVjdC9vYmplY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEFycmF5Q29tcG9uZW50IH0gZnJvbSAnLi9maWVsZHMvYXJyYXkvYXJyYXkuY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrYm94Z3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkcy9jaGVja2JveGdyb3VwL2NoZWNrYm94Z3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IFJhZGlvZ3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkcy9yYWRpb2dyb3VwL3JhZGlvZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4vZmllbGRzL2NvbW1vbi9jb21tb24uY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRNYXNrTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdGV4dC1tYXNrJztcbmltcG9ydCB7IE11bHRpc2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9maWVsZHMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IE1vbmV5Q29tcG9uZW50IH0gZnJvbSAnLi9maWVsZHMvbW9uZXkvbW9uZXkuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS1idXR0b24vZm9ybS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IFdvcmtpbmdTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3dvcmtpbmctc3Bpbm5lci93b3JraW5nLXNwaW5uZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUZXh0TWFza01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEpzb25Gb3JtQ29tcG9uZW50LFxuICAgIFNlbGVjdENvbXBvbmVudCxcbiAgICBDaG9vc2VyQ29tcG9uZW50LFxuICAgIFN0cmluZ0NvbXBvbmVudCxcbiAgICBGaWVsZENvbXBvbmVudCxcbiAgICBOdW1iZXJDb21wb25lbnQsXG4gICAgQm9vbGVhbkNvbXBvbmVudCxcbiAgICBQaG90b0NvbXBvbmVudCxcbiAgICBUZXh0YXJlYUNvbXBvbmVudCxcbiAgICBPYmplY3RDb21wb25lbnQsXG4gICAgQXJyYXlDb21wb25lbnQsXG4gICAgQ2hlY2tib3hncm91cENvbXBvbmVudCxcbiAgICBSYWRpb2dyb3VwQ29tcG9uZW50LFxuICAgIENvbW1vbkNvbXBvbmVudCxcbiAgICBNdWx0aXNlbGVjdENvbXBvbmVudCxcbiAgICBNb25leUNvbXBvbmVudCxcbiAgICBGb3JtQnV0dG9uQ29tcG9uZW50LFxuICAgIFdvcmtpbmdTcGlubmVyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBKc29uRm9ybUNvbXBvbmVudCxcbiAgICBDb21tb25Db21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgU3RyaW5nQ29tcG9uZW50LFxuICAgIFNlbGVjdENvbXBvbmVudCxcbiAgICBOdW1iZXJDb21wb25lbnQsXG4gICAgQm9vbGVhbkNvbXBvbmVudCxcbiAgICBQaG90b0NvbXBvbmVudCxcbiAgICBUZXh0YXJlYUNvbXBvbmVudCxcbiAgICBPYmplY3RDb21wb25lbnQsXG4gICAgQXJyYXlDb21wb25lbnQsXG4gICAgUmFkaW9ncm91cENvbXBvbmVudCxcbiAgICBDaGVja2JveGdyb3VwQ29tcG9uZW50LFxuICAgIEpzb25Gb3JtQ29tcG9uZW50LFxuICAgIE11bHRpc2VsZWN0Q29tcG9uZW50LFxuICAgIE1vbmV5Q29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEpzb25Gb3JtRGVmYXVsdHNTZXJ2aWNlLFxuICAgIEpzb25Gb3JtRmllbGRzU2VydmljZSxcbiAgICBKc29uRm9ybVZhbGlkYXRvcnNTZXJ2aWNlXG4gIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBKc29uRm9ybU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8x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

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @trufla/ngx-tru-forms */ "./dist/ngx-tru-forms/fesm5/trufla-ngx-tru-forms.js");
/* harmony import */ var _json_schema_examples_json_schema_examples_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./json-schema-examples/json-schema-examples.module */ "./src/app/json-schema-examples/json-schema-examples.module.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_3__["JsonFormModule"],
                _json_schema_examples_json_schema_examples_module__WEBPACK_IMPORTED_MODULE_4__["JsonSchemaExamplesModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
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

module.exports = "<div class=\"container-fluid\">\n  <br />\n  <div class=\"row form-builder\">\n    <div class=\"col-md-6\">\n      <h6>Schema Samples:</h6>\n      <div class=\"form-group\">\n        <select class=\"form-control\" (change)=\"handleSchemaUpdate($event.target.value)\">\n          <option *ngFor=\"let schema of getSchemaSamples()\" [value]=\"schema\">\n            {{jsonSchemaExamplesSamples.json[schema].title}}\n          </option>\n        </select>\n      </div>\n      <h6>JSON Schema:\n        <span class=\"text-danger\" *ngIf=\"(schemaControl.touched || schemaControl.dirty) && schemaControl.invalid\">\n          {{schemaControl.errors['invalidJSON']}}\n        </span>\n        <a href=\"javascript:void(0)\" class=\"text-danger\"\n           *ngIf=\"(schemaControl.touched || schemaControl.dirty) && schemaControl.invalid\"\n           (click)=\"goToError(schemaControl.errors['invalidJSON'])\">\n          <i class=\"fa fa-exclamation-triangle\"></i>\n        </a>\n      </h6>\n      <form [formGroup]=\"form\">\n        <div class=\"form-group\" [ngClass]=\"{\n          'has-danger': schemaControl.invalid && (schemaControl.dirty || schemaControl.touched)\n          }\">\n          <textarea class=\"form-control\" style=\"height: 100%\" [formControl]=\"schemaControl\" (keyup)=\"handleSchemaUpdate()\"\n                    (keydown.Enter)=\"onEnterKey($event)\" (keydown.Tab)=\"onTabKey($event)\" #jsonSchema\n                    [ngClass]=\"{\n              'has-danger': schemaControl.invalid && (schemaControl.dirty || schemaControl.touched)\n            }\"></textarea>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-md-6\">\n      <h6>Form:</h6>\n      <jf-form\n        [id]=\"'exampleform'\"\n        [cancel]=\"cancel\"\n        [submit]=\"'Submit'\"\n        [schema]=\"schema\"\n        [isMultiStep]=\"isMultiStep\"\n        [state]=\"state\"\n        (handleChange)=\"handleChange($event)\"\n        (handleSubmit)=\"handleSubmit($event)\">\n      </jf-form>\n\n      <jf-form\n        *ngIf=\"this.selectedSchema === 'multiple_forms'\"\n        [id]=\"'exampleform'\"\n        [cancel]=\"cancel\"\n        [submit]=\"'Submit'\"\n        [schema]=\"schema\"\n        [isMultiStep]=\"isMultiStep\"\n        [state]=\"state\"\n        (handleSubmit)=\"handleSubmit($event)\">\n      </jf-form>\n      <p></p>\n      <h6>Data: (click Submit to preview form data)</h6>\n      <pre #formResponse>&#123;&#125;</pre>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @trufla/ngx-tru-forms */ "./dist/ngx-tru-forms/fesm5/trufla-ngx-tru-forms.js");
/* harmony import */ var _input_colour_input_colour_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-colour/input-colour.component */ "./src/app/json-schema-examples/input-colour/input-colour.component.ts");
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
    function JsonSchemaExamplesComponent(jsonSchemaExamplesSamples, jsonFormFieldsService) {
        this.jsonSchemaExamplesSamples = jsonSchemaExamplesSamples;
        this.jsonFormFieldsService = jsonFormFieldsService;
        this.isMultiStep = true;
        this.cancel = '';
        this.state = false;
        this.selectedSchema = 'conditional_multistep';
    }
    JsonSchemaExamplesComponent.prototype.ngOnInit = function () {
        this.jsonFormFieldsService.register('colour', _input_colour_input_colour_component__WEBPACK_IMPORTED_MODULE_4__["InputColourComponent"]);
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
        __metadata("design:paramtypes", [_json_schema_examples_samples__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaExamplesSamples"],
            _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_3__["JsonFormFieldsService"]])
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
                _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__["JsonFormModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_7__["ColorPickerModule"]
            ],
            declarations: [
                _json_schema_examples_component__WEBPACK_IMPORTED_MODULE_2__["JsonSchemaExamplesComponent"],
                _input_colour_input_colour_component__WEBPACK_IMPORTED_MODULE_6__["InputColourComponent"]
            ],
            providers: [
                _json_schema_examples_samples__WEBPACK_IMPORTED_MODULE_5__["JsonSchemaExamplesSamples"],
                _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__["JsonFormFieldsService"]
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

module.exports = __webpack_require__(/*! /Users/boris/Documents/projects/ngx-tru-forms-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map