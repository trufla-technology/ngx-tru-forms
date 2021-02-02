function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./dist/ngx-tru-forms/fesm2015/trufla-ngx-tru-forms.js":
  /*!*************************************************************!*\
    !*** ./dist/ngx-tru-forms/fesm2015/trufla-ngx-tru-forms.js ***!
    \*************************************************************/

  /*! exports provided: CommonComponent, JsonFormBootstrap4, JsonFormBootstrap4Module, JsonFormComponent, JsonFormDefaultsService, JsonFormFieldsService, JsonFormMaterial, JsonFormMaterialModule, JsonFormModule, JsonFormValidatorsService, MomentUtcDateAdapter, TruUi, TruUiModule, ɵa, ɵb, ɵba, ɵbb, ɵbc, ɵbd, ɵbe, ɵbf, ɵbg, ɵbh, ɵbi, ɵbj, ɵbk, ɵbl, ɵbm, ɵbn, ɵbo, ɵbp, ɵbq, ɵbr, ɵbs, ɵbt, ɵbu, ɵbv, ɵbw, ɵbx, ɵby, ɵbz, ɵc, ɵca, ɵcb, ɵcc, ɵcd, ɵce, ɵcf, ɵcg, ɵch, ɵci, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx, ɵy, ɵz */

  /***/
  function distNgxTruFormsFesm2015TruflaNgxTruFormsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonComponent", function () {
      return CommonComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonFormBootstrap4", function () {
      return JsonFormBootstrap4;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonFormBootstrap4Module", function () {
      return JsonFormBootstrap4Module;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonFormComponent", function () {
      return JsonFormComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonFormDefaultsService", function () {
      return JsonFormDefaultsService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonFormFieldsService", function () {
      return JsonFormFieldsService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonFormMaterial", function () {
      return JsonFormMaterial;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonFormMaterialModule", function () {
      return JsonFormMaterialModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonFormModule", function () {
      return JsonFormModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonFormValidatorsService", function () {
      return JsonFormValidatorsService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MomentUtcDateAdapter", function () {
      return MomentUtcDateAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TruUi", function () {
      return TruUi;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TruUiModule", function () {
      return TruUiModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return SharedModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return ValidationFeedbackTranslation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵba", function () {
      return MoneyComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbb", function () {
      return NumberComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbc", function () {
      return BooleanComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbd", function () {
      return ButtonComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbe", function () {
      return CheckboxgroupComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbf", function () {
      return MultiselectComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbg", function () {
      return PhotoComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbh", function () {
      return RadiogroupComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbi", function () {
      return StringMaterialComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbj", function () {
      return TextareaMaterialComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbk", function () {
      return SelectMaterialComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbl", function () {
      return RadiogroupMaterialComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbm", function () {
      return PhotoMaterialComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbn", function () {
      return NumberMaterialComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbo", function () {
      return MultiselectMaterialComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbp", function () {
      return CheckboxgroupMaterialComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbq", function () {
      return BooleanMaterialComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbr", function () {
      return DateMaterialComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbs", function () {
      return ErrorMaterialComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbt", function () {
      return ButtonMaterialComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbu", function () {
      return ArrayMaterialComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbv", function () {
      return TruUiButtonComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbw", function () {
      return TruUiStringComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbx", function () {
      return TruUiErrorComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵby", function () {
      return TruUiPhotoComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbz", function () {
      return TruUiTextareaComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return ChooserComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵca", function () {
      return TruUiBooleanComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵcb", function () {
      return TruUiDateComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵcc", function () {
      return TruUiSelectComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵcd", function () {
      return TruUiNumberComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵce", function () {
      return TruUiRadigroupComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵcf", function () {
      return TruUiCheckboxgroupComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵcg", function () {
      return TruUiMultiselectComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵch", function () {
      return TruUiArrayComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵci", function () {
      return TruUiAutocompleteComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return FieldComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return FormButtonComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return InfoButtonComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return StringViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return SelectViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi", function () {
      return NumberViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj", function () {
      return BooleanViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵk", function () {
      return PhotoViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵl", function () {
      return TextareaViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵm", function () {
      return DateViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵn", function () {
      return RadiogroupViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵo", function () {
      return CheckboxgroupViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵp", function () {
      return MultiselectViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵq", function () {
      return MoneyViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵr", function () {
      return ObjectComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵs", function () {
      return ArrayComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵt", function () {
      return ArrayViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵu", function () {
      return DragAndDropDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵv", function () {
      return StringComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵw", function () {
      return SelectComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵx", function () {
      return DateComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵy", function () {
      return TextareaComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵz", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material-moment-adapter */
    "./node_modules/@angular/material-moment-adapter/esm2015/material-moment-adapter.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap/datepicker */
    "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
    /* harmony import */


    var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/chronos */
    "./node_modules/ngx-bootstrap/chronos/fesm2015/ngx-bootstrap-chronos.js");
    /* harmony import */


    var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-bootstrap/locale */
    "./node_modules/ngx-bootstrap/locale/fesm2015/ngx-bootstrap-locale.js");
    /* harmony import */


    var ngx_image_compress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-image-compress */
    "./node_modules/ngx-image-compress/fesm2015/ngx-image-compress.js");
    /* harmony import */


    var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! text-mask-addons/dist/createNumberMask */
    "./node_modules/text-mask-addons/dist/createNumberMask.js");
    /* harmony import */


    var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var angular2_text_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! angular2-text-mask */
    "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
    /* harmony import */


    var angular2_text_mask__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ngx-bootstrap/typeahead */
    "./node_modules/ngx-bootstrap/typeahead/fesm2015/ngx-bootstrap-typeahead.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/moment-utc-adapter.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MomentUtcDateAdapter = /*#__PURE__*/function (_angular_material_mom) {
      _inherits(MomentUtcDateAdapter, _angular_material_mom);

      var _super = _createSuper(MomentUtcDateAdapter);

      /**
       * @param {?} dateLocale
       */
      function MomentUtcDateAdapter(dateLocale) {
        _classCallCheck(this, MomentUtcDateAdapter);

        return _super.call(this, dateLocale);
      }
      /**
       * @param {?} year
       * @param {?} month
       * @param {?} date
       * @return {?}
       */


      _createClass(MomentUtcDateAdapter, [{
        key: "createDate",
        value: function createDate(year, month, date) {
          // Moment.js will create an invalid date if any of the components are out of bounds, but we
          // explicitly check each case so we can throw more descriptive errors.
          if (month < 0 || month > 11) {
            throw Error("Invalid month index \"".concat(month, "\". Month index has to be between 0 and 11."));
          }

          if (date < 1) {
            throw Error("Invalid date \"".concat(date, "\". Date has to be greater than 0."));
          }
          /** @type {?} */


          var result = Object(moment__WEBPACK_IMPORTED_MODULE_3__["utc"])({
            year: year,
            month: month,
            date: date
          }).locale(this.locale); // If the result isn't valid, the date must have been out of bounds for this month.

          if (!result.isValid()) {
            throw Error("Invalid date \"".concat(date, "\" for month with index \"").concat(month, "\"."));
          }

          return result;
        }
      }]);

      return MomentUtcDateAdapter;
    }(_angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__["MomentDateAdapter"]);

    MomentUtcDateAdapter.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    MomentUtcDateAdapter.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_LOCALE"]]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/models/schema-form-control.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var SchemaFormControl = /*#__PURE__*/function (_angular_forms__WEBPA) {
      _inherits(SchemaFormControl, _angular_forms__WEBPA);

      var _super2 = _createSuper(SchemaFormControl);

      function SchemaFormControl() {
        _classCallCheck(this, SchemaFormControl);

        return _super2.apply(this, arguments);
      }

      return SchemaFormControl;
    }(_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/error/validation-feedback-translation.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ValidationFeedbackTranslation = function ValidationFeedbackTranslation() {
      _classCallCheck(this, ValidationFeedbackTranslation);

      this.validation = {
        en: {
          confirm: 'Confirm',
          required: 'This field is required',
          invalid: 'Input value is invalid',
          email_invalid: 'Email is invalid',
          minimum_invalid: 'Input has to be a minimum of',
          maximum_invalid: 'Input can contain a maximum of',
          characters: 'characters',
          greater_than: 'Enter a value greater than or equal to',
          less_than: 'Enter a value less than or equal to ',
          not_in_menu: ' Select from the dropdown list',
          is_match: 'Value not matching',
          max_size: 'File exceeded the allowed size',
          allowed_format: 'allowed format'
        },
        fr: {
          confirm: 'Confirmer',
          required: 'Ce champ est obligatoire',
          invalid: 'La valeur d’entrée est invalide',
          email_invalid: 'Le courriel est invalide',
          minimum_invalid: 'La contribution doit être un minimum de',
          maximum_invalid: 'L’entrée peut contenir un maximum de',
          characters: 'Caractères',
          greater_than: 'Entrez une valeur supérieure ou égale à',
          less_than: 'Entrez une valeur inférieure ou égale à',
          not_in_menu: ' Sélectionner dans la liste déroulante',
          is_match: 'valeur nesutampa',
          max_size: 'Le fichier a dépassé la taille autorisée',
          allowed_format: 'fichiers autorisés'
        }
      };
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/common/common.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CommonComponent = /*#__PURE__*/function () {
      /**
       * @param {?} sanitizer
       * @param {?} cd
       * @param {?=} localeService
       * @param {?=} validationFeedbackTranslation
       * @param {?=} imageCompress
       */
      function CommonComponent(sanitizer, cd, localeService, validationFeedbackTranslation, imageCompress) {
        _classCallCheck(this, CommonComponent);

        this.sanitizer = sanitizer;
        this.cd = cd;
        this.localeService = localeService;
        this.validationFeedbackTranslation = validationFeedbackTranslation;
        this.imageCompress = imageCompress;
        this.confirmInput = new SchemaFormControl('');
        this.disabled = false;
        this.isWebView = false;
        this.fileSize = null;

        if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())) {
          this.isWebView = true;
        }

        Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_8__["defineLocale"])('fr', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_9__["deLocale"]);
        this.localeService.use(this.language);
      }
      /**
       * @return {?}
       */


      _createClass(CommonComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.schema && this.schema.format === 'photo' && this.control.value) {
            this.getImageFromUrl(this.control.value);
          }

          this.localeService.use(this.language);
          this.cd.detectChanges();
        }
        /**
         * @return {?}
         */

      }, {
        key: "isRequired",
        value: function isRequired() {
          // some controls like datepicker add validator without being required
          return this.control.validator !== null && this.control.isRequired;
        }
        /**
         * @param {?=} material
         * @return {?}
         */

      }, {
        key: "title",
        value: function title() {
          var material = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          /** @type {?} */
          var required = this.isRequired() && material ? '*' : '';
          return (typeof this.schema.title === 'undefined' ? this.strToUpperCase(this.schema.key) : this.getTranslation(this.schema.title)) + required;
        }
        /**
         * @param {?} str
         * @return {?}
         */

      }, {
        key: "strToUpperCase",
        value: function strToUpperCase(str) {
          return Object(lodash__WEBPACK_IMPORTED_MODULE_6__["startCase"])(str);
        }
        /**
         * @return {?}
         */

      }, {
        key: "placeholder",
        value: function placeholder() {
          /** @type {?} */
          var key = this.strToUpperCase(this.schema.key).replace(/<.*?>/g, '');
          return typeof this.schema.title === 'undefined' ? key : this.getTranslation(this.schema.title) ? this.getTranslation(this.schema.title) : key;
        }
        /**
         * @return {?}
         */

      }, {
        key: "type",
        value: function type() {
          /** @type {?} */
          var format = this.schema.format || 'text';

          switch (format) {
            case 'photo':
              format = 'file';
          }

          return format;
        }
        /**
         * @param {?=} i
         * @return {?}
         */

      }, {
        key: "id",
        value: function id(i) {
          return this.schema.key + '-' + Math.random().toString(36).substring(7) + '-' + i;
        }
        /**
         * @param {?=} defaultClass
         * @return {?}
         */

      }, {
        key: "getClass",
        value: function getClass(defaultClass) {
          return this.style && this.style.hasOwnProperty('default') ? this.style['default'] : defaultClass || '';
        }
        /**
         * @return {?}
         */

      }, {
        key: "getMask",
        value: function getMask() {
          if (this.schema.hasOwnProperty('mask')) {
            /** @type {?} */
            var mask = [];
            this.schema.mask.forEach(
            /**
            * @param {?} el
            * @return {?}
            */
            function (el) {
              mask.push(/^\/.*\/$/.test(el) ? new RegExp(el.replace(/^\/|\/$/g, '')) : el);
            });
            return mask;
          }

          return false;
        }
        /**
         * @param {?} image
         * @return {?}
         */

      }, {
        key: "makeTrustedImage",
        value: function makeTrustedImage(image) {
          /** @type {?} */
          var imageString = JSON.stringify(image).replace(/\\n/g, '');
          /** @type {?} */

          var style = 'url(' + imageString + ')';
          return this.sanitizer.bypassSecurityTrustStyle(style);
        }
        /**
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "enumNames",
        value: function enumNames(index) {
          return typeof this.schema.enumNames === 'undefined' ? this.schema["enum"][index] : this.getTranslation(this.schema.enumNames[index]);
        }
        /**
         * @return {?}
         */

      }, {
        key: "getSelectedEnumName",
        value: function getSelectedEnumName() {
          var _this = this;

          /** @type {?} */
          var index;
          this.schema["enum"].map(
          /**
          * @param {?} e
          * @param {?} i
          * @return {?}
          */
          function (e, i) {
            if (e.toString().toLowerCase() === _this.control.value.toString().toLowerCase()) {
              index = i;
            }
          });
          return this.schema.enumNames && this.schema.enumNames.length && typeof index !== 'undefined' ? this.getTranslation(this.schema.enumNames[index]) : this.control.value;
        }
        /**
         * @param {?} titleArray
         * @return {?}
         */

      }, {
        key: "getTranslation",
        value: function getTranslation(titleArray) {
          var _this2 = this;

          if (Array.isArray(titleArray)) {
            /** @type {?} */
            var translatedTitle = titleArray.filter(
            /**
            * @param {?} val
            * @return {?}
            */
            function (val) {
              return val.language === _this2.language;
            });
            return translatedTitle[0] ? this.strToUpperCase(translatedTitle[0].value.replace(/<.*?>/g, '')) : false;
          } else {
            return titleArray;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "getLanguage",
        value: function getLanguage() {
          this.language = this.language ? this.language : 'en';
          return this.validationFeedbackTranslation.validation[this.language];
        }
        /**
         * @return {?}
         */

      }, {
        key: "getControlValue",
        value: function getControlValue() {
          return this.control && this.control.value ? this.control.value : '';
        }
        /**
         * @return {?}
         */

      }, {
        key: "getFilename",
        value: function getFilename() {
          if (this.getControlValue().length) {
            return this.getControlValue().substring('data:image/'.length, this.getControlValue().indexOf(';base64')) || '';
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "isMatch",
        value: function isMatch() {
          if (this.schema.verify) {
            /** @type {?} */
            var input = this.control.value;
            /** @type {?} */

            var confirmInput = this.confirmInput.value;
            /** @type {?} */

            var error = this.control.errors && Object.keys(this.control.errors).length > 0 ? this.control.errors : null;

            if (error && Object.keys(this.control.errors).length > 0) {
              delete error.isMatch;

              if (Object.keys(error).length === 0) {
                error = null;
              }
            }

            return input.toString() === confirmInput.toString() ? this.control.setErrors(error) : this.control.setErrors(Object.assign({}, this.control.errors, {
              isMatch: true
            }));
          }
        }
        /**
         * @param {?} str
         * @return {?}
         */

      }, {
        key: "validURL",
        value: function validURL(str) {
          /** @type {?} */
          var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
          '(\\#[-a-z\\d_]*)?$', 'i');
          return !!pattern.test(str);
        }
        /**
         * @param {?} url
         * @return {?}
         */

      }, {
        key: "getImageFromUrl",
        value: function getImageFromUrl(url) {
          var _this3 = this;

          fetch(url).then(
          /**
          * @param {?} r
          * @return {?}
          */
          function (r) {
            return r.blob().then(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return _this3.fileSize = s.size;
            })["catch"](
            /**
            * @return {?}
            */
            function () {
              return _this3.fileSize = null;
            });
          })["catch"](
          /**
          * @return {?}
          */
          function () {
            return _this3.fileSize = null;
          });
        }
        /**
         * @param {?} file
         * @param {?=} size
         * @return {?}
         */

      }, {
        key: "compressFile",
        value: function compressFile(file, size) {
          /** @type {?} */
          var quality = size < 0.300 ? 80 : size < 0.900 ? 50 : 35;
          return this.imageCompress.compressFile(file, -2, quality, quality);
        }
      }]);

      return CommonComponent;
    }();

    CommonComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-component',
        template: ''
      }]
    }];
    /** @nocollapse */

    CommonComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"]
      }, {
        type: ValidationFeedbackTranslation
      }, {
        type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_10__["NgxImageCompressService"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/string/string.view.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var StringViewComponent = /*#__PURE__*/function (_CommonComponent) {
      _inherits(StringViewComponent, _CommonComponent);

      var _super3 = _createSuper(StringViewComponent);

      function StringViewComponent() {
        _classCallCheck(this, StringViewComponent);

        return _super3.apply(this, arguments);
      }

      return StringViewComponent;
    }(CommonComponent);

    StringViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n  <p><span>{{placeholder()}}</span> <span>{{control.value}}</span></p>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/select/select.view.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var SelectViewComponent = /*#__PURE__*/function (_CommonComponent2) {
      _inherits(SelectViewComponent, _CommonComponent2);

      var _super4 = _createSuper(SelectViewComponent);

      function SelectViewComponent() {
        _classCallCheck(this, SelectViewComponent);

        return _super4.apply(this, arguments);
      }

      return SelectViewComponent;
    }(CommonComponent);

    SelectViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <p><span>{{placeholder()}}</span>\n     <span>{{getSelectedEnumName()}}</span></p>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/number/number.view.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NumberViewComponent = /*#__PURE__*/function (_CommonComponent3) {
      _inherits(NumberViewComponent, _CommonComponent3);

      var _super5 = _createSuper(NumberViewComponent);

      function NumberViewComponent() {
        _classCallCheck(this, NumberViewComponent);

        return _super5.apply(this, arguments);
      }

      return NumberViewComponent;
    }(CommonComponent);

    NumberViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <p><span>{{placeholder()}}</span> <span>{{control.value}}</span></p>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/boolean/boolean.view.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var BooleanViewComponent = /*#__PURE__*/function (_CommonComponent4) {
      _inherits(BooleanViewComponent, _CommonComponent4);

      var _super6 = _createSuper(BooleanViewComponent);

      function BooleanViewComponent() {
        _classCallCheck(this, BooleanViewComponent);

        return _super6.apply(this, arguments);
      }

      return BooleanViewComponent;
    }(CommonComponent);

    BooleanViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n  <p><span>{{placeholder()}}</span> <span>{{control.value}}</span></p>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/photo/photo.view.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var PhotoViewComponent = /*#__PURE__*/function (_CommonComponent5) {
      _inherits(PhotoViewComponent, _CommonComponent5);

      var _super7 = _createSuper(PhotoViewComponent);

      function PhotoViewComponent() {
        _classCallCheck(this, PhotoViewComponent);

        return _super7.apply(this, arguments);
      }

      return PhotoViewComponent;
    }(CommonComponent);

    PhotoViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <p>{{placeholder()}}</p>\n    <img src=\"{{control.value}}\" class=\"img-thumbnail\" />\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/textarea/textarea.view.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var TextareaViewComponent = /*#__PURE__*/function (_CommonComponent6) {
      _inherits(TextareaViewComponent, _CommonComponent6);

      var _super8 = _createSuper(TextareaViewComponent);

      function TextareaViewComponent() {
        _classCallCheck(this, TextareaViewComponent);

        return _super8.apply(this, arguments);
      }

      _createClass(TextareaViewComponent, [{
        key: "formatString",

        /**
         * @param {?} str
         * @return {?}
         */
        value: function formatString(str) {
          // handle how android app sends line breaks in the text area...
          return str.replace(/&lt;br&gt;/g, '\n');
        }
      }]);

      return TextareaViewComponent;
    }(CommonComponent);

    TextareaViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n  <p><span>{{placeholder()}}</span> <span style=\"white-space: pre-wrap;\">{{ formatString(control.value) }}</span></p>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/date/date.view.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var DateViewComponent = /*#__PURE__*/function (_CommonComponent7) {
      _inherits(DateViewComponent, _CommonComponent7);

      var _super9 = _createSuper(DateViewComponent);

      function DateViewComponent() {
        var _this4;

        _classCallCheck(this, DateViewComponent);

        _this4 = _super9.apply(this, arguments);
        _this4.numberMask = text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_11___default()({
          allowDecimal: false,
          prefix: ''
        });
        return _this4;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      _createClass(DateViewComponent, [{
        key: "cleanMask",
        value: function cleanMask(value) {
          this.control.setValue(value.replace(/\D/g, ''));
        }
      }]);

      return DateViewComponent;
    }(CommonComponent);

    DateViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n  <p><span>{{placeholder()}}</span> <span>{{control.value}}</span></p>\n  "
      }]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/radiogroup/radiogroup.view.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var RadiogroupViewComponent = /*#__PURE__*/function (_CommonComponent8) {
      _inherits(RadiogroupViewComponent, _CommonComponent8);

      var _super10 = _createSuper(RadiogroupViewComponent);

      function RadiogroupViewComponent() {
        _classCallCheck(this, RadiogroupViewComponent);

        return _super10.apply(this, arguments);
      }

      return RadiogroupViewComponent;
    }(CommonComponent);

    RadiogroupViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n  <p><span>{{placeholder()}}</span> <span>{{getSelectedEnumName()}}</span></p>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/checkboxgroup/checkboxgroup.view.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var CheckboxgroupViewComponent = /*#__PURE__*/function (_CommonComponent9) {
      _inherits(CheckboxgroupViewComponent, _CommonComponent9);

      var _super11 = _createSuper(CheckboxgroupViewComponent);

      function CheckboxgroupViewComponent() {
        _classCallCheck(this, CheckboxgroupViewComponent);

        return _super11.apply(this, arguments);
      }

      return CheckboxgroupViewComponent;
    }(CommonComponent);

    CheckboxgroupViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <p>{{placeholder()}}</p>\n    <ul *ngFor=\"let selected of control.value\">\n      <li>{{selected}}</li>\n    </ul>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/multiselect/multiselect.view.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MultiselectViewComponent = /*#__PURE__*/function (_CommonComponent10) {
      _inherits(MultiselectViewComponent, _CommonComponent10);

      var _super12 = _createSuper(MultiselectViewComponent);

      function MultiselectViewComponent() {
        _classCallCheck(this, MultiselectViewComponent);

        return _super12.apply(this, arguments);
      }

      _createClass(MultiselectViewComponent, [{
        key: "enumNames",

        /**
         * @param {?} index
         * @return {?}
         */
        value: function enumNames(index) {
          return typeof this.schema.enumNames === 'undefined' ? this.schema["enum"][index] : this.schema.enumNames[index];
        }
      }]);

      return MultiselectViewComponent;
    }(CommonComponent);

    MultiselectViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <p>{{placeholder()}}</p>\n    <ul *ngFor=\"let selected of control.value\">\n      <li>{{selected}}</li>\n    </ul>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/money/money.view.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MoneyViewComponent = /*#__PURE__*/function (_CommonComponent11) {
      _inherits(MoneyViewComponent, _CommonComponent11);

      var _super13 = _createSuper(MoneyViewComponent);

      function MoneyViewComponent() {
        var _this5;

        _classCallCheck(this, MoneyViewComponent);

        _this5 = _super13.apply(this, arguments);
        _this5.numberMask = text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_11___default()({
          allowDecimal: false,
          prefix: ''
        });
        return _this5;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      _createClass(MoneyViewComponent, [{
        key: "cleanMask",
        value: function cleanMask(value) {
          this.control.setValue(value.replace(/\D/g, ''));
        }
      }]);

      return MoneyViewComponent;
    }(CommonComponent);

    MoneyViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n  <p><span>{{placeholder()}}</span> <span>{{control.value}}</span></p>\n  "
      }]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/framework/shared/components/object/object.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ObjectComponent = function ObjectComponent() {
      _classCallCheck(this, ObjectComponent);
    };

    ObjectComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <div [ngClass]=\"['object', control.schema.key]\"\n      jf-component-chooser\n      [form]=\"control\"\n      [schema]=\"control.schema\"\n      [language]= \"language\"\n      [nested]=\"true\">\n    </div>"
      }]
    }];
    ObjectComponent.propDecorators = {
      control: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      language: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/models/schema-form-array.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var SchemaFormArray = /*#__PURE__*/function (_angular_forms__WEBPA2) {
      _inherits(SchemaFormArray, _angular_forms__WEBPA2);

      var _super14 = _createSuper(SchemaFormArray);

      function SchemaFormArray() {
        _classCallCheck(this, SchemaFormArray);

        return _super14.apply(this, arguments);
      }

      return SchemaFormArray;
    }(_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/models/schema-form-group.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var SchemaFormGroup = /*#__PURE__*/function (_angular_forms__WEBPA3) {
      _inherits(SchemaFormGroup, _angular_forms__WEBPA3);

      var _super15 = _createSuper(SchemaFormGroup);

      function SchemaFormGroup() {
        _classCallCheck(this, SchemaFormGroup);

        return _super15.apply(this, arguments);
      }

      return SchemaFormGroup;
    }(_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/framework/shared/components/array/array.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ArrayComponent = /*#__PURE__*/function () {
      function ArrayComponent() {
        _classCallCheck(this, ArrayComponent);
      }

      _createClass(ArrayComponent, [{
        key: "getLegend",

        /**
         * @param {?} control
         * @return {?}
         */
        value: function getLegend(control) {
          // return (control && control.schema && control.schema.key) ? startCase(control.schema.key) : '';
          // tslint:disable-next-line: max-line-length
          return typeof control.schema.title === 'undefined' ? control.schema.key : this.getTranslation(control.schema.title) ? this.getTranslation(control.schema.title) : Object(lodash__WEBPACK_IMPORTED_MODULE_6__["startCase"])(control.schema.key);
        }
        /**
         * @param {?} titleArray
         * @return {?}
         */

      }, {
        key: "getTranslation",
        value: function getTranslation(titleArray) {
          var _this6 = this;

          if (Array.isArray(titleArray)) {
            /** @type {?} */
            var translatedTitle = titleArray.filter(
            /**
            * @param {?} val
            * @return {?}
            */
            function (val) {
              return val.language === _this6.language;
            });
            return translatedTitle[0] ? this.strToUpperCase(translatedTitle[0].value.replace(/<.*?>/g, '')) : false;
          } else {
            return titleArray;
          }
        }
        /**
         * @param {?} str
         * @return {?}
         */

      }, {
        key: "strToUpperCase",
        value: function strToUpperCase(str) {
          return str.toLowerCase().replace(/_/g, ' ').split(' ').map(
          /**
          * @param {?} word
          * @return {?}
          */
          function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
          }).join(' ');
        }
        /**
         * @param {?} control
         * @return {?}
         */

      }, {
        key: "getEnabledControls",
        value: function getEnabledControls(control) {
          if (Array.isArray(control.controls)) {
            return control.controls.filter(
            /**
            * @param {?} c
            * @return {?}
            */
            function (c) {
              return c.enabled;
            });
          }

          return control;
        }
        /**
         * @param {?} control
         * @return {?}
         */

      }, {
        key: "cloneControl",
        value: function cloneControl(control) {
          var _this7 = this;

          /** @type {?} */
          var newControl;

          if (control instanceof SchemaFormGroup) {
            /** @type {?} */
            var formGroup = new SchemaFormGroup({}, control.validator, control.asyncValidator);
            /** @type {?} */

            var controls = control.controls;
            formGroup.schema = control.schema;
            Object.keys(controls).forEach(
            /**
            * @param {?} key
            * @return {?}
            */
            function (key) {
              formGroup.addControl(key, _this7.cloneControl(controls[key]));
            });
            newControl = formGroup;
          } else if (control instanceof SchemaFormArray) {
            /** @type {?} */
            var formArray = new SchemaFormArray([], control.validator, control.asyncValidator);
            control.controls.forEach(
            /**
            * @param {?} formControl
            * @return {?}
            */
            function (formControl) {
              formArray.push(_this7.cloneControl(formControl));
              return formArray;
            });
            newControl = formArray;

            /** @type {?} */
            newControl.schema = control.schema;
          } else if (control instanceof SchemaFormControl) {
            newControl = new SchemaFormControl(control.value, control.validator, control.asyncValidator);

            /** @type {?} */
            newControl.schema = control.schema;
          } else {
            throw new Error('Error: unexpected control value');
          }

          if (control.disabled) {
            newControl.disable({
              emitEvent: false
            });
          }

          newControl.reset();
          return newControl;
        }
        /**
         * @param {?} formArray
         * @return {?}
         */

      }, {
        key: "addControl",
        value: function addControl(formArray) {
          formArray.push(this.cloneControl(formArray.controls[0]));
        }
        /**
         * @param {?} formArray
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "removeControl",
        value: function removeControl(formArray, index) {
          if (formArray.length === 1) {
            formArray.controls[0].reset();
            formArray.controls[0].disable();
          } else {
            formArray.removeAt(index);
          }
        }
      }]);

      return ArrayComponent;
    }();

    ArrayComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <div [ngClass]=\"['array', control.schema.key]\">\n      <h6 *ngIf=\"getLegend(control).length\" style=\"color:#8c8c8c;;margin-top: 20px;font-size: 14px;\">{{getLegend(control)}}</h6>\n      <div *ngFor=\"let arrControl of getEnabledControls(control); let i = index;\">\n        <div class=\"row\">\n          <div class=\"control\" jf-component-chooser [form]=\"arrControl\" [language]= \"language\"></div>\n          <div class=\"remove\" *ngIf=\"control.controls.length > 1\">\n            <input type=\"button\" (click)=\"removeControl(control, i)\" class=\"btn btn-success btn-sm\" value=\"Remove\"/>\n          </div>\n        </div>\n      </div>\n      <div class=\"row add\">\n        <div class=\"col-12\">\n          <input type=\"button\" (click)=\"addControl(control)\" class=\"btn btn-success btn-sm\" value=\"Add\"/>\n        </div>\n      </div>\n    </div>\n  "
      }]
    }];
    ArrayComponent.propDecorators = {
      control: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      language: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/framework/shared/components/array/array.view.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ArrayViewComponent = /*#__PURE__*/function (_ArrayComponent) {
      _inherits(ArrayViewComponent, _ArrayComponent);

      var _super16 = _createSuper(ArrayViewComponent);

      function ArrayViewComponent() {
        _classCallCheck(this, ArrayViewComponent);

        return _super16.apply(this, arguments);
      }

      return ArrayViewComponent;
    }(ArrayComponent);

    ArrayViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <div [ngClass]=\"['array', control.schema.key]\">\n      <h6 *ngIf=\"getLegend(control).length\">{{getLegend(control)}}</h6>\n      <div *ngFor=\"let arrControl of getEnabledControls(control); let i = index;\">\n        <div class=\"row\">\n          <div class=\"control\" jf-component-chooser [form]=\"arrControl\" [language]= \"language\"></div>\n        </div>\n      </div>\n    </div>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/framework/json-form-fields.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var JsonFormFieldsService = /*#__PURE__*/function () {
      /**
       * @param {?} componentFactoryResolver
       */
      function JsonFormFieldsService(componentFactoryResolver) {
        _classCallCheck(this, JsonFormFieldsService);

        this.componentFactoryResolver = componentFactoryResolver;
        this.fieldTypes = {};
        this.viewOnly = false;
        this.disabled = false;
        this.viewTypes = {
          string: StringViewComponent,
          select: SelectViewComponent,
          number: NumberViewComponent,
          "boolean": BooleanViewComponent,
          photo: PhotoViewComponent,
          textarea: TextareaViewComponent,
          object: ObjectComponent,
          array: ArrayViewComponent,
          date: DateViewComponent,
          radiogroup: RadiogroupViewComponent,
          checkboxgroup: CheckboxgroupViewComponent,
          multiselect: MultiselectViewComponent,
          money: MoneyViewComponent,
          autocomplete: StringViewComponent
        };
      }
      /**
       * @param {?} viewContainerRef
       * @return {?}
       */


      _createClass(JsonFormFieldsService, [{
        key: "setRootViewContainerRef",
        value: function setRootViewContainerRef(viewContainerRef) {
          this.rootViewContainer = viewContainerRef;
        }
        /**
         * @param {?} control
         * @param {?=} lang
         * @return {?}
         */

      }, {
        key: "addDynamicComponent",
        value: function addDynamicComponent(control, lang) {
          /** @type {?} */
          var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.get(control));
          /** @type {?} */

          var componentRef = this.rootViewContainer.createComponent(componentFactory);
          componentRef.instance.control = control;
          componentRef.instance.schema = control.schema;
          componentRef.instance.style = control.style;
          componentRef.instance.disabled = this.disabled;
          componentRef.instance.language = lang || 'en';
        }
        /**
         * @param {?} type
         * @return {?}
         */

      }, {
        key: "has",
        value: function has(type) {
          return this.fieldTypes.hasOwnProperty(type) || this.viewTypes.hasOwnProperty(type);
        }
        /**
         * @param {?} type
         * @param {?} field
         * @return {?}
         */

      }, {
        key: "register",
        value: function register(type, field) {
          this.fieldTypes[type] = field;
          this.viewTypes[type] = field;
        }
        /**
         * @param {?} control
         * @return {?}
         */

      }, {
        key: "get",
        value: function get(control) {
          /** @type {?} */
          var types = this.viewOnly ? this.viewTypes : this.fieldTypes;

          if (typeof control === 'string' && this.has(control)) {
            return this.fieldTypes[control];
          } // check if a field is getting overridden by format


          if (typeof control.schema.format !== 'undefined' && this.has(control.schema.format)) {
            return types[control.schema.format];
          }

          if (typeof control.schema["enum"] !== 'undefined' && control.schema.type === 'array') {
            return types['checkboxgroup'];
          } else if (typeof control.schema["enum"] !== 'undefined') {
            return types['select'];
          } else if (this.has(control.schema.format)) {
            return types[control.schema.format];
          } else if (this.has(control.schema.type)) {
            return types[control.schema.type];
          }

          return types['string'];
        }
      }]);

      return JsonFormFieldsService;
    }();

    JsonFormFieldsService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    JsonFormFieldsService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/validators.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var JsonFormValidatorsService = /*#__PURE__*/function () {
      function JsonFormValidatorsService() {
        _classCallCheck(this, JsonFormValidatorsService);

        this.validators = [];
      }
      /**
       * @param {?} prop
       * @param {?} schema
       * @param {?} path
       * @param {?} lan
       * @return {?}
       */


      _createClass(JsonFormValidatorsService, [{
        key: "get",
        value: function get(prop, schema, path, lan) {
          /** @type {?} */
          var dateValidator =
          /**
          * @param {?} control
          * @return {?}
          */
          function ageRangeValidator(control) {
            if (control.value === null || control.value !== null && isNaN(new Date(control.value).getDate())) {
              return {
                customError: lan === 'en' ? 'Please enter a valid date' : 'Veuillez entrer une date valide'
              };
            }

            return null;
          };
          /** @type {?} */


          var emailValidator =
          /**
          * @param {?} control
          * @return {?}
          */
          function emailValidator(control) {
            /* tslint:disable-next-line:max-line-length */

            /** @type {?} */
            var mailRegex = "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";

            if (!control.value || RegExp(mailRegex).test(control.value)) {
              return null;
            }

            return {
              customError: lan === 'en' ? 'Please enter a valid email address' : 'Veuillez saisir une adresse e-mail valide'
            };
          };
          /** @type {?} */


          var phoneNumberValidator =
          /**
          * @param {?} control
          * @return {?}
          */
          function phoneNumberValidator(control) {
            /** @type {?} */
            var phoneNumberRegex = RegExp('^[+]*([(]+[0-9]{2,4}[)]+)?[-0-9]{8,}$');

            if (!control.value || phoneNumberRegex.test(control.value)) {
              return null;
            } // tslint:disable-next-line: max-line-length


            return {
              customError: lan === 'en' ? 'Please enter a valid phone or mobile number' : 'Veuillez entrer un numéro de téléphone ou mobile valide'
            };
          };
          /** @type {?} */


          var required = schema.required || [];
          /** @type {?} */

          var field = schema.properties[prop];
          /** @type {?} */

          var varPath = [].concat(path, prop).join('.');

          if (schema.properties[prop].type === 'boolean' && required.indexOf(prop) > -1) {
            return _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].requiredTrue;
          }

          return _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose(this.validators.concat([this.has(varPath) ? this.validators[varPath] : null, required.indexOf(prop) > -1 ? _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required : null, field.hasOwnProperty('minLength') ? _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(field.minLength) : null, field.hasOwnProperty('maxLength') ? _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(field.maxLength) : null, field.hasOwnProperty('format') && field.format === 'email' ? emailValidator : null, field.hasOwnProperty('minimum') ? _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(field.minimum) : null, field.hasOwnProperty('maximum') ? _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(field.maximum) : null, field.format && field.format === 'date' ? dateValidator : null, field.hasOwnProperty('format') && field.format === 'tel' ? phoneNumberValidator : null, field.pattern ? _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(field.pattern) : null]));
        }
        /**
         * @param {?} field
         * @param {?} validator
         * @return {?}
         */

      }, {
        key: "register",
        value: function register(field, validator) {
          this.validators[field] = validator;
        }
        /**
         * @param {?} str
         * @return {?}
         */

      }, {
        key: "has",
        value: function has(str) {
          return this.validators.hasOwnProperty(str);
        }
      }]);

      return JsonFormValidatorsService;
    }();

    JsonFormValidatorsService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    JsonFormValidatorsService.ctorParameters = function () {
      return [];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/defaults.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var JsonFormDefaultsService = /*#__PURE__*/function () {
      function JsonFormDefaultsService() {
        _classCallCheck(this, JsonFormDefaultsService);

        this.defaultTypes = this.defaultTypes || {};
      }
      /**
       * @param {?} prop
       * @param {?} schema
       * @param {?} data
       * @return {?}
       */


      _createClass(JsonFormDefaultsService, [{
        key: "get",
        value: function get(prop, schema, data) {
          /** @type {?} */
          var defaultString = prop.hasOwnProperty('format') && prop.format === 'multiselect' ? [] : '';
          /** @type {?} */

          var defaultValue = schema.properties[prop]["default"] || defaultString;

          if (this.has(schema.properties[prop]["default"])) {
            defaultValue = this.eval(schema.properties[prop]["default"])();
          } // data override defaults


          if (data && data.hasOwnProperty(prop)) {
            defaultValue = data[prop];
          }

          if (prop.hasOwnProperty('format') && prop.format === 'date' && defaultValue.length > 0) {
            defaultValue = new Date(defaultValue);
          }

          return defaultValue;
        }
        /**
         * @private
         * @param {?} str
         * @return {?}
         */

      }, {
        key: "eval",
        value: function _eval(str) {
          return this.defaultTypes[str];
        }
        /**
         * @param {?} str
         * @return {?}
         */

      }, {
        key: "has",
        value: function has(str) {
          return this.defaultTypes.hasOwnProperty(str);
        }
        /**
         * @param {?} str
         * @param {?} callback
         * @return {?}
         */

      }, {
        key: "register",
        value: function register(str, callback) {
          this.defaultTypes[str] = callback;
        }
      }]);

      return JsonFormDefaultsService;
    }();

    JsonFormDefaultsService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    JsonFormDefaultsService.ctorParameters = function () {
      return [];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/json-form.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var JsonFormComponent = /*#__PURE__*/function () {
      /**
       * @param {?} fb
       * @param {?} vl
       * @param {?} df
       * @param {?} jf
       */
      function JsonFormComponent(fb, vl, df, jf) {
        _classCallCheck(this, JsonFormComponent);

        this.fb = fb;
        this.vl = vl;
        this.df = df;
        this.jf = jf;
        this.data = {};
        this.style = {};
        this["continue"] = 'Continue';
        this.isWorking = false;
        this.isMultiStep = false;
        this.activeStep = null;
        this.state = false;
        this.id = '';
        this.fields = {};
        this.viewOnly = false;
        this.disabled = null;
        this.btnDisabled = false;
        this.handleStep = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.handleSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.handleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.handleCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.control = {
          key: '',
          value: '',
          isPartOf: false
        };
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


      _createClass(JsonFormComponent, [{
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.changeDetected = false;

          if (!this.language) {
            this.language = 'en';
          } else if (this.language !== this.oldLanguage) {
            this.oldLanguage = this.language;
            this.changeDetected = true;
          }

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
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.form) {
            this.form.valueChanges.unsubscribe();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "appendFields",
        value: function appendFields() {
          var _this8 = this;

          Object.keys(this.fields).forEach(
          /**
          * @param {?} f
          * @return {?}
          */
          function (f) {
            _this8.jf[0].register(f, _this8.fields[f]);
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "constructForm",
        value: function constructForm() {
          var _this9 = this;

          this.model = {};

          if (this.isValidSchema()) {
            this.activeSchema = this.schema;
            this.activeStyle = this.style; // emit the initial step for the event

            if (this.steps.length === 0 && this.isMultiStep) {
              this.steps = this.getSteps(this.schema, this.activeStep);
              this.handleStep.emit({
                id: this.id,
                data: null,
                steps: this.steps
              });
            }

            if (this.steps.length > 0 && this.isMultiStep) {
              /** @type {?} */
              var visibleStepName = this.activeStep > 0 ? this.activeStep : this.steps.find(
              /**
              * @param {?} s
              * @return {?}
              */
              function (s) {
                return s.visible;
              }).name;
              this.activeSchema = this.schema.properties[visibleStepName];
              this.activeStyle = this.style.hasOwnProperty(visibleStepName) ? this.style[visibleStepName] : {};
              this.data = this.state && this.multiStepData.hasOwnProperty(visibleStepName) ? this.multiStepData[visibleStepName] : this.data;
            }

            this.activeSchema = this.subRefs(this.activeSchema);
            this.model = this.generateForm(this.activeSchema, {}, this.data, this.activeStyle);
            this.form = this.fb.group(this.model);
            this.form.valueChanges.subscribe(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              if (_this9.control.isPartOf) {
                _this9.data = data;

                _this9.constructForm();
              }

              _this9.handleChange.emit({
                id: _this9.id,
                control: _this9.control,
                data: data
              });
            });
          }
        }
        /**
         * @param {?} schema
         * @param {?} activeStep
         * @return {?}
         */

      }, {
        key: "getSteps",
        value: function getSteps(schema, activeStep) {
          var _this10 = this;

          return Object.keys(schema.properties).map(
          /**
          * @param {?} name
          * @param {?} index
          * @return {?}
          */
          function (name, index) {
            /** @type {?} */
            var type = 'step';

            if (index === 0) {
              _this10.activeStep = _this10.activeStep || name;
              type = 'first';
            } else if (index === Object.keys(schema.properties).length - 1) {
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
        }
        /**
         * @return {?}
         */

      }, {
        key: "isValidSchema",
        value: function isValidSchema() {
          return typeof this.schema === 'object' && Object.keys(this.schema).length > 0;
        }
        /**
         * @private
         * @param {?} schema
         * @param {?=} group
         * @param {?=} data
         * @param {?=} style
         * @param {?=} path
         * @return {?}
         */

      }, {
        key: "generateForm",
        value: function generateForm(schema, group, data, style, path) {
          var _this11 = this;

          if (!this.isVisible(schema)) {
            return group;
          }

          if (!path) {
            path = [];
          }

          Object.keys(schema.properties).forEach(
          /**
          * @param {?} prop
          * @return {?}
          */
          function (prop) {
            if (_this11.isOneOf(schema, prop, path)) {
              return;
            }

            if (schema.properties[prop].type === 'object') {
              /** @type {?} */
              var groupData = data && data.hasOwnProperty(prop) ? data[prop] : {};
              /** @type {?} */

              var groupStyle = style && style.hasOwnProperty(prop) ? style[prop] : {};
              group[prop] = new SchemaFormGroup(_this11.generateForm(schema.properties[prop], {}, groupData, groupStyle, [].concat(path, prop)));
              group[prop].schema = schema.properties[prop];
              group[prop].schema.key = prop;
              group[prop].schema.id = _this11.id;
              group[prop].style = groupStyle;
            } else if (schema.properties[prop].type === 'array' && !_this11.isFormat(schema.properties[prop], 'multiselect')) {
              path.push(prop);
              /** @type {?} */

              var arrayData = data && data.hasOwnProperty(prop) ? data[prop] : [{}];
              /** @type {?} */

              var arrayStyle = style && style.hasOwnProperty(prop) ? style[prop] : {};
              /** @type {?} */

              var fbArray = [];

              if (schema.properties[prop]["enum"]) {
                fbArray = schema.properties[prop]["enum"].map(
                /**
                * @param {?} e
                * @return {?}
                */
                function (e) {
                  /** @type {?} */
                  var control = new SchemaFormControl();
                  control.schema = Object.assign({}, schema.properties[prop]);
                  control.schema.key = prop;
                  control.schema.id = _this11.id;
                  control.valueChanges.subscribe(
                  /**
                  * @param {?} event
                  * @return {?}
                  */
                  function (event) {
                    return _this11.handleOnChange(prop, event);
                  });
                  control.isRequired = schema.hasOwnProperty('required') && schema.required.indexOf(prop) > -1;

                  if (control.isRequired) {
                    _this11.requiredFields++;
                  }

                  return control;
                });
              } else {
                fbArray = arrayData.map(
                /**
                * @param {?} dataAtIndex
                * @return {?}
                */
                function (dataAtIndex) {
                  /** @type {?} */
                  var g = new SchemaFormGroup(_this11.generateForm(schema.properties[prop].items, {}, dataAtIndex, {}, [].concat(path, prop)));
                  g.schema = schema.properties[prop];
                  return g;
                });
              }

              group[prop] = new SchemaFormArray(fbArray);
              group[prop].schema = schema.properties[prop];
              group[prop].schema.key = prop;
              group[prop].schema.id = _this11.id;
              group[prop].style = arrayStyle;
            } else if (_this11.isVisible(schema.properties[prop])) {
              /** @type {?} */
              var control = new SchemaFormControl(_this11.df.get(prop, schema, data), _this11.vl.get(prop, schema, path, _this11.language));
              control.schema = Object.assign({}, schema.properties[prop]);
              control.schema.key = prop;
              control.schema.id = _this11.id;
              control.data = _this11.df.get(prop, schema, data);
              control.style = style && style.hasOwnProperty(prop) ? style[prop] : {};
              control.valueChanges.subscribe(
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                return _this11.handleOnChange(prop, event, _this11.inOneOf(schema, prop));
              });
              control.isRequired = schema.hasOwnProperty('required') && schema.required.indexOf(prop) > -1;

              if (control.isRequired) {
                _this11.requiredFields++;
              }

              group[prop] = control;
            }
          });
          return group;
        }
        /**
         * @param {?} schema
         * @param {?} key
         * @param {?} path
         * @return {?}
         */

      }, {
        key: "isOneOf",
        value: function isOneOf(schema, key, path) {
          var _this12 = this;

          if (!schema.oneOf) {
            return false;
          }

          return schema.oneOf.filter(
          /**
          * @param {?} p
          * @return {?}
          */
          function (p) {
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_6__["get"])(p, 'required', []).includes(key)) {
              /** @type {?} */
              var parent = Object.keys(p.properties)[0];
              /** @type {?} */

              var dataPath = path.concat(parent).join('.');
              /** @type {?} */

              var value = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["get"])(_this12.data, dataPath, null);

              if (schema.properties[parent].type === 'boolean') {
                value = String(value) === 'true'; // material preserves string & bootstrap doesn't
              } else if (schema.properties[parent].type === 'number') {
                value = +value;
              } // when returns true it will not display field, otherwise it will


              return value === null || Object(lodash__WEBPACK_IMPORTED_MODULE_6__["get"])(p.properties[parent], 'enum', []).indexOf(value) === -1;
            }

            return false;
          }).length > 0;
        }
        /**
         * @param {?} schema
         * @param {?} prop
         * @return {?}
         */

      }, {
        key: "inOneOf",
        value: function inOneOf(schema, prop) {
          if (typeof schema.oneOf !== 'undefined') {
            return schema.oneOf.filter(
            /**
            * @param {?} p
            * @return {?}
            */
            function (p) {
              /** @type {?} */
              var key = Object.keys(p.properties)[0];
              return key === prop;
            }).length > 0;
          }

          return false;
        }
        /**
         * @param {?} prop
         * @return {?}
         */

      }, {
        key: "isVisible",
        value: function isVisible(prop) {
          return prop.hasOwnProperty('visible') === false || prop.hasOwnProperty('visible') && prop.visible === true;
        }
        /**
         * @param {?} prop
         * @param {?} format
         * @return {?}
         */

      }, {
        key: "isFormat",
        value: function isFormat(prop, format) {
          return prop.hasOwnProperty('format') && prop.format === format;
        }
        /**
         * @return {?}
         */

      }, {
        key: "handleOnSubmit",
        value: function handleOnSubmit() {
          var _this13 = this;

          this.touchAll(this.form.controls);

          if (this.form.valid && this.isMultiStep) {
            /** @type {?} */
            var prev = this.steps.findIndex(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.visible;
            });
            this.multiStepData[this.activeStep] = this.form.value;
            /** @type {?} */

            var current = this.steps.findIndex(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.name === _this13.activeStep;
            });
            /** @type {?} */

            var next = current + 1;

            if (typeof this.steps[next] !== 'undefined') {
              this.steps[prev].visible = false;
              this.steps[next].visible = true;
              this.activeStep = this.steps[next].name;
              this.handleStep.emit({
                dir: 'next',
                id: this.id,
                data: _defineProperty({}, this.steps[prev].name, this.multiStepData[this.steps[prev].name]),
                steps: this.steps
              });
              this.constructForm();
            } else {
              this.handleSubmit.emit(this.multiStepData);
            }
          } else if (this.form.valid) {
            this.handleSubmit.emit(this.form.value);
          }
        }
        /**
         * @param {?} key
         * @param {?} value
         * @param {?=} isPartOf
         * @return {?}
         */

      }, {
        key: "handleOnChange",
        value: function handleOnChange(key, value) {
          var isPartOf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          this.control = {
            key: key,
            value: value,
            isPartOf: isPartOf
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "handleOnCancel",
        value: function handleOnCancel() {
          var _this14 = this;

          if (this.isMultiStep) {
            /** @type {?} */
            var prev = this.steps.findIndex(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.visible;
            });
            this.steps[prev].visible = false;
            /** @type {?} */

            var current = this.steps.findIndex(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.name === _this14.activeStep;
            });
            /** @type {?} */

            var next = current - 1;

            if (typeof this.steps[next] !== 'undefined') {
              this.steps[next].visible = true;
              this.activeStep = this.steps[next].name;
              this.handleStep.emit({
                dir: 'prev',
                id: this.id,
                data: _defineProperty({}, this.steps[current].name, this.multiStepData[this.steps[prev].name]),
                steps: this.steps
              });
              this.constructForm();
            } else {
              this.handleCancel.emit(this.form.value);
            }
          } else {
            this.handleCancel.emit(this.form.value);
          }
        }
        /**
         * @param {?} controls
         * @return {?}
         */

      }, {
        key: "touchAll",
        value: function touchAll(controls) {
          var _this15 = this;

          Object.keys(controls).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            if (controls[key].hasOwnProperty('controls')) {
              _this15.touchAll(controls[key].controls);
            }

            controls[key].markAsTouched();
          });
        }
        /**
         * @param {?} schema
         * @return {?}
         */

      }, {
        key: "subRefs",
        value: function subRefs(schema) {
          var _this16 = this;

          Object.keys(schema.properties).forEach(
          /**
          * @param {?} prop
          * @return {?}
          */
          function (prop) {
            if (schema.properties[prop].hasOwnProperty('$ref')) {
              schema.properties[prop] = _this16.schema.definitions[schema.properties[prop]['$ref'].replace('#/definitions/', '')];
            }
          });
          return schema;
        }
        /**
         * API: external method for ensuring the form is valid
         * @return {?}
         */

      }, {
        key: "isValid",
        value: function isValid() {
          return this.form.valid;
        }
        /**
         * API: trigger external submission
         * @return {?}
         */

      }, {
        key: "submitForm",
        value: function submitForm() {
          this.userForm.ngSubmit.emit();
        }
        /**
         * API: set header of the form
         * @param {?} val
         * @return {?}
         */

      }, {
        key: "setHeader",
        value: function setHeader(val) {
          if (this.header) {
            this.header.nativeElement.innerHTML = val;
          }
        }
        /**
         * API: set footer of the form
         * @param {?} val
         * @return {?}
         */

      }, {
        key: "setFooter",
        value: function setFooter(val) {
          if (this.footer) {
            this.footer.nativeElement.innerHTML = val;
          }
        }
        /**
         * API: get required fields count
         * @return {?}
         */

      }, {
        key: "getRequiredFieldCount",
        value: function getRequiredFieldCount() {
          return this.requiredFields;
        }
      }]);

      return JsonFormComponent;
    }();

    JsonFormComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-form, tru-form',
        template: "<form\n  #userForm=\"ngForm\"\n  [formGroup]=\"form\"\n  (ngSubmit)=\"handleOnSubmit()\"\n  *ngIf=\"isValidSchema()\"\n  [ngClass]=\"{ 'view-only': viewOnly }\"\n  [id]=\"id\"\n>\n  <div #header></div>\n  <div\n    jf-component-chooser\n    [ngClass]=\"[outerClass || '', this.activeStyle['default'] ? this.activeStyle['default'] : '']\"\n    [form]=\"form\"\n    [language]=\"language\"\n    [schema]=\"activeSchema\">\n  </div>\n  <div #container>\n    <ng-content></ng-content>\n  </div>\n  <div #footer></div>\n  <div\n    #buttons\n    *ngIf=\"container.children.length == 0 && (submit || cancel)\"\n    [ngClass]=\"{ 'margin-top--double': true, 'page-actions--edges': (cancel && submit), 'page-actions--center': (!cancel || !submit)}\">\n    <jf-form-button\n      *ngIf=\"cancel\"\n      [cancel]=\"cancel\"\n      [steps]=\"steps\"\n      [isMultiStep]=\"isMultiStep\"\n      [isWorking]=\"isWorking\"\n      (handleClick)=\"handleOnCancel()\"\n      [submitClass]=\"submitClass\"\n      [cancelClass]=\"cancelClass\">\n    </jf-form-button>\n    <jf-form-button\n      *ngIf=\"submit\"\n      [isDisabled]=\"form.invalid || btnDisabled\"\n      [submitClass]=\"submitClass\"\n      [cancelClass]=\"cancelClass\"\n      [submit]=\"submit\"\n      [steps]=\"steps\"\n      [continue]=\"continue\"\n      [isMultiStep]=\"isMultiStep\"\n      [isWorking]=\"isWorking\"\n      [isFormValid]=\"this.form.valid\">\n    </jf-form-button>\n  </div>\n</form>\n"
      }]
    }];
    /** @nocollapse */

    JsonFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: JsonFormValidatorsService
      }, {
        type: JsonFormDefaultsService
      }, {
        type: JsonFormFieldsService
      }];
    };

    JsonFormComponent.propDecorators = {
      schema: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      style: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      "continue": [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      submit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cancel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      submitClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cancelClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      outerClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isWorking: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isMultiStep: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      activeStep: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      state: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fields: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      viewOnly: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      btnDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      handleStep: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      handleSubmit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      handleChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      handleCancel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      language: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      userForm: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['userForm', {
          "static": false
        }]
      }],
      header: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['header', {
          "static": false
        }]
      }],
      footer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['footer', {
          "static": false
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/checkboxgroup/checkboxgroup.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CheckboxgroupComponent = /*#__PURE__*/function (_CommonComponent12) {
      _inherits(CheckboxgroupComponent, _CommonComponent12);

      var _super17 = _createSuper(CheckboxgroupComponent);

      function CheckboxgroupComponent() {
        var _this17;

        _classCallCheck(this, CheckboxgroupComponent);

        _this17 = _super17.apply(this, arguments);
        _this17.checkboxGroupValues = [];
        return _this17;
      }
      /**
       * @param {?} event
       * @param {?} index
       * @return {?}
       */


      _createClass(CheckboxgroupComponent, [{
        key: "setValue",
        value: function setValue(event, index) {
          if (this.checkboxGroupValues.length === 0) {
            this.checkboxGroupValues = new Array(this.control['controls'].length).fill(null);
          }

          if (this.checkboxGroupValues[index] === null) {
            event.target.value = this.schema["enum"][index];
            this.checkboxGroupValues[index] = event.target.value;
          } else {
            this.checkboxGroupValues[index] = null;
          }

          this.control.setValue(this.checkboxGroupValues);
        }
        /**
         * @param {?} key
         * @param {?} val
         * @return {?}
         */

      }, {
        key: "getId",
        value: function getId(key, val) {
          return "".concat(key, "-").concat(val.toString());
        }
      }]);

      return CheckboxgroupComponent;
    }(CommonComponent);

    CheckboxgroupComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <label [attr.class]=\"schema.key\" [ngClass]=\"{'margin-bottom--half': true, required: isRequired()}\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup></label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <div [class]=\"getClass('checkbox-group')\">\n      <div *ngFor=\"let child of this.control['controls']; let i = index\"\n           [ngClass]=\"{'checkbox-container': true, 'checked': child.value === schema.enum[i]}\">\n        <input\n          type=\"checkbox\"\n          [attr.id]=\"getId(schema.key, schema.enum[i])\"\n          [attr.disabled]=\"disabled\"\n          [checked]=\"child.value === schema.enum[i]\"\n          [name]=\"schema.key\"\n          [formControl]=\"child\"\n          (change)=\"setValue($event, i)\"\n          [value]=\"schema.enum[i]\" />\n        <label\n          [attr.for]=\"getId(i, schema.enum[i])\"\n          [attr.class]=\"schema.key\">\n          {{enumNames(i)}}\n        </label>\n      </div>\n    </div>\n    <jf-error [control]=\"control\"></jf-error>\n  "
      }]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/multiselect/multiselect.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MultiselectComponent = /*#__PURE__*/function (_CommonComponent13) {
      _inherits(MultiselectComponent, _CommonComponent13);

      var _super18 = _createSuper(MultiselectComponent);

      function MultiselectComponent() {
        _classCallCheck(this, MultiselectComponent);

        return _super18.apply(this, arguments);
      }

      _createClass(MultiselectComponent, [{
        key: "enumNames",

        /**
         * @param {?} index
         * @return {?}
         */
        value: function enumNames(index) {
          return typeof this.schema.enumNames === 'undefined' ? this.schema["enum"][index] : this.schema.enumNames[index];
        }
      }]);

      return MultiselectComponent;
    }(CommonComponent);

    MultiselectComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <label [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <button type=\"button\" *ngIf=\"schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <select\n      class=\"form-control\"\n      name=\"name\"\n      [formControl]=\"control\"\n      multiple=\"multiple\"\n      [attr.disabled]=\"disabled\"\n    >\n      <option\n        *ngFor=\"let en of schema.enum; let i = index\"\n        [selected]=\"control.value === en\"\n        [ngValue]=\"en\">\n        {{enumNames(i)}}\n      </option>\n    </select>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/textarea/textarea.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var TextareaComponent = /*#__PURE__*/function (_CommonComponent14) {
      _inherits(TextareaComponent, _CommonComponent14);

      var _super19 = _createSuper(TextareaComponent);

      function TextareaComponent() {
        var _this18;

        _classCallCheck(this, TextareaComponent);

        _this18 = _super19.apply(this, arguments);
        _this18.randomSuffix = Math.random().toString(36).substring(7);
        return _this18;
      }
      /**
       * @param {?} i
       * @param {?} val
       * @return {?}
       */


      _createClass(TextareaComponent, [{
        key: "getId",
        value: function getId(i, val) {
          return "".concat(i, "-").concat(val.toString().replace(/[\W_]+/g, ''), "+").concat(this.randomSuffix);
        }
        /**
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "getName",
        value: function getName(key) {
          return "".concat(key, "-").concat(this.randomSuffix);
        }
      }]);

      return TextareaComponent;
    }(CommonComponent);

    TextareaComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <label\n      [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <textarea\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [formControl]=\"control\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.minLength]=\"schema.minLength || null\"\n      [attr.placeholder]=\"placeholder()\"\n      [attr.disabled]=\"disabled\"\n    ></textarea>\n    <jf-error [control]=\"control\"></jf-error>\n  "
      }]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/select/select.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var SelectComponent = /*#__PURE__*/function (_CommonComponent15) {
      _inherits(SelectComponent, _CommonComponent15);

      var _super20 = _createSuper(SelectComponent);

      function SelectComponent() {
        _classCallCheck(this, SelectComponent);

        return _super20.apply(this, arguments);
      }

      return SelectComponent;
    }(CommonComponent);

    SelectComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <div class=\"select-container\">\n      <label\n        [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n        <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n      </label>\n      <button type=\"button\" *ngIf=\"schema.description\" [attr.class]=\"'info'\" [attr.title]=\"schema.description\">Info</button>\n      <select\n        class=\"form-control\"\n        [attr.name]=\"schema.key\"\n        [formControl]=\"control\"\n        [attr.disabled]=\"disabled\"\n      >\n        <option value=\"\" [selected]=\"control.value === ''\" [disabled]=\"true\">\n          {{placeholder()}}\n        </option>\n        <option\n          *ngFor=\"let en of schema.enum; let i = index\"\n          [selected]=\"control.value === en\"\n          [ngValue]=\"en\">\n          {{enumNames(i)}}\n        </option>\n      </select>\n    </div>\n    <jf-error [control]=\"control\"></jf-error>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/boolean/boolean.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var BooleanComponent = /*#__PURE__*/function (_CommonComponent16) {
      _inherits(BooleanComponent, _CommonComponent16);

      var _super21 = _createSuper(BooleanComponent);

      function BooleanComponent() {
        _classCallCheck(this, BooleanComponent);

        return _super21.apply(this, arguments);
      }

      return BooleanComponent;
    }(CommonComponent);

    BooleanComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <div [class]=\"getClass('checkbox-group')\">\n      <div class=\"checkbox-container\">\n        <input\n          [id]=\"schema.key\"\n          [name]=\"schema.key\"\n          type=\"checkbox\"\n          [formControl]=\"control\"\n          [attr.disabled]=\"disabled\"\n        />\n        <label [attr.for]=\"schema.key\" [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n          <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n        </label>\n      </div>\n    </div>\n    <jf-error [control]=\"control\"></jf-error>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/number/number.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NumberComponent = /*#__PURE__*/function (_CommonComponent17) {
      _inherits(NumberComponent, _CommonComponent17);

      var _super22 = _createSuper(NumberComponent);

      function NumberComponent() {
        _classCallCheck(this, NumberComponent);

        return _super22.apply(this, arguments);
      }

      return NumberComponent;
    }(CommonComponent);

    NumberComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <label [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\" *ngIf=\"type() !== 'hidden'\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <input\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [attr.type]=\"'number'\"\n      [formControl]=\"control\"\n      [attr.placeholder]=\"placeholder()\"\n      [attr.disabled]=\"disabled\"\n    />\n    <jf-error [control]=\"control\"></jf-error>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/photo/photo.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var PhotoComponent = /*#__PURE__*/function (_CommonComponent18) {
      _inherits(PhotoComponent, _CommonComponent18);

      var _super23 = _createSuper(PhotoComponent);

      function PhotoComponent() {
        _classCallCheck(this, PhotoComponent);

        return _super23.apply(this, arguments);
      }

      _createClass(PhotoComponent, [{
        key: "onChange",

        /**
         * @param {?} event
         * @return {?}
         */
        value: function onChange(event) {
          var _this19 = this;

          /** @type {?} */
          var file = event.target.files[0];
          /** @type {?} */

          var reader = new FileReader();

          reader.onloadend =
          /**
          * @return {?}
          */
          function () {
            _this19.processFile(reader.result, file.type).then(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              _this19.photoData = data.toString();

              _this19.control.setValue(_this19.photoData);
            });
          };

          reader.onerror =
          /**
          * @return {?}
          */
          function () {
            console.log('There was an error reading the file!');
          };

          if (typeof file !== 'undefined') {
            reader.readAsDataURL(file);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "previewSrcExists",
        value: function previewSrcExists() {
          return typeof this.photoData === 'string';
        }
        /**
         * @return {?}
         */

      }, {
        key: "clearPhoto",
        value: function clearPhoto() {
          this.photoData = null;
          this.control.reset();
        }
        /**
         * @param {?} dataURL
         * @param {?} fileType
         * @return {?}
         */

      }, {
        key: "processFile",
        value: function processFile(dataURL, fileType) {
          /** @type {?} */
          var maxWidth = 800;
          /** @type {?} */

          var maxHeight = 800;
          /** @type {?} */

          var image = new Image();
          image.src = dataURL;
          return new Promise(
          /**
          * @param {?} resolve
          * @param {?} reject
          * @return {?}
          */
          function (resolve, reject) {
            image.onload =
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var width = image.width;
              /** @type {?} */

              var height = image.height;
              /** @type {?} */

              var shouldResize = width > maxWidth || height > maxHeight;

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
              } else {
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
            };

            image.onerror =
            /**
            * @param {?} err
            * @return {?}
            */
            function (err) {
              return reject(err);
            };
          });
        }
      }]);

      return PhotoComponent;
    }(CommonComponent);

    PhotoComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <label [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <div *ngIf=\"previewSrcExists()\" class=\"photo-preview\">\n      <img [attr.src]=\"photoData\" />\n      <span href=\"#\" style=\"cursor: pointer;\" (click)=\"clearPhoto()\">\n        <i class=\"la la-close\"></i>\n      </span>\n    </div>\n    <div>\n      <input\n        *ngIf=\"!previewSrcExists()\"\n        type=\"file\"\n        (change)=\"onChange($event)\"\n        [disabled]=\"disabled\"\n      />\n      <input type=\"hidden\" [name]=\"schema.key\" [formControl]=\"control\" />\n    </div>\n    <div>\n      <jf-error [control]=\"control\"></jf-error>\n    </div>\n  "
      }]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/radiogroup/radiogroup.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var RadiogroupComponent = /*#__PURE__*/function (_CommonComponent19) {
      _inherits(RadiogroupComponent, _CommonComponent19);

      var _super24 = _createSuper(RadiogroupComponent);

      function RadiogroupComponent() {
        var _this20;

        _classCallCheck(this, RadiogroupComponent);

        _this20 = _super24.apply(this, arguments);
        _this20.randomSuffix = Math.random().toString(36).substring(7);
        return _this20;
      }
      /**
       * @param {?} key
       * @param {?} val
       * @param {?} formId
       * @return {?}
       */


      _createClass(RadiogroupComponent, [{
        key: "getId",
        value: function getId(key, val, formId) {
          return [formId, key, val.toString()].filter(
          /**
          * @param {?} f
          * @return {?}
          */
          function (f) {
            return f.length;
          }).join('-');
        }
        /**
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "getName",
        value: function getName(key) {
          return "".concat(key, "-").concat(this.randomSuffix);
        }
      }]);

      return RadiogroupComponent;
    }(CommonComponent);

    RadiogroupComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <label\n      [ngClass]=\"['margin-bottom--half', 'jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup></label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <div [class]=\"getClass('radio-group')\">\n      <div *ngFor=\"let en of this.schema.enum; let i = index\"\n           [ngClass]=\"{'radio-container': true, 'checked': control.value === en}\">\n        <input\n          type=\"radio\"\n          [attr.id]=\"getId(schema.key, en, schema.id)\"\n          [checked]=\"control.value === en\"\n          [name]=\"getName(schema.key)\"\n          [formControl]=\"control\"\n          [attr.disabled]=\"disabled\"\n          [value]=\"en\" />\n        <label\n          [attr.for]=\"getId(schema.key, en, schema.id)\"\n          [attr.class]=\"schema.key\">\n           {{enumNames(i)}}\n        </label>\n      </div>\n    </div>\n    <jf-error [control]=\"control\"></jf-error>\n  "
      }]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/string/string.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var StringComponent = /*#__PURE__*/function (_CommonComponent20) {
      _inherits(StringComponent, _CommonComponent20);

      var _super25 = _createSuper(StringComponent);

      function StringComponent() {
        _classCallCheck(this, StringComponent);

        return _super25.apply(this, arguments);
      }

      return StringComponent;
    }(CommonComponent);

    StringComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <label\n      [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\" *ngIf=\"type() !== 'hidden'\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <input\n      class=\"form-control\"\n      [attr.name]=\"schema.key\"\n      [attr.type]=\"type()\"\n      [formControl]=\"control\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.minLength]=\"schema.minLength || null\"\n      [attr.placeholder]=\"placeholder()\"\n      [attr.disabled]=\"disabled\"\n      [textMask]=\"{ mask: getMask() }\"\n      (change)=\"isMatch()\"\n    />\n    <div *ngIf=\"schema.verify\" style=\"margin-top: 1rem\">\n    <label\n    [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\" *ngIf=\"type() !== 'hidden'\">\n    <span > {{ getLanguage().confirm}} {{title()}}</span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <input\n    class=\"form-control\"\n    [attr.type]=\"type()\"\n    [formControl]=\"confirmInput\"\n    [attr.maxLength]=\"schema.maxLength || null\"\n    [attr.minLength]=\"schema.minLength || null\"\n    [attr.disabled]=\"disabled\"\n    [attr.placeholder]=\"placeholder()\"\n    [textMask]=\"{ mask: getMask() }\"\n    (change)=\"isMatch()\"\n    />\n    </div>\n    <jf-error [control]=\"control\"></jf-error>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/date/date.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var DateComponent = /*#__PURE__*/function (_CommonComponent21) {
      _inherits(DateComponent, _CommonComponent21);

      var _super26 = _createSuper(DateComponent);

      function DateComponent() {
        _classCallCheck(this, DateComponent);

        return _super26.apply(this, arguments);
      }

      return DateComponent;
    }(CommonComponent);

    DateComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <label [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <input\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [formControl]=\"control\"\n      [placeholder]=\"placeholder()\"\n      [bsConfig]=\"{ containerClass: 'theme-default', dateInputFormat: 'MM/DD/YYYY' }\"\n      bsDatepicker\n      [attr.disabled]=\"disabled\"\n    />\n    <jf-error [control]=\"control\"></jf-error>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/button/button.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var ButtonComponent = /*#__PURE__*/function () {
      function ButtonComponent() {
        _classCallCheck(this, ButtonComponent);

        this.color = '';
        this.handleButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @param {?} event
       * @return {?}
       */


      _createClass(ButtonComponent, [{
        key: "handleClick",
        value: function handleClick(event) {
          this.handleButtonClick.emit(event);
        }
      }]);

      return ButtonComponent;
    }();

    ButtonComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-button',
        template: "\n    <button\n      *ngIf=\"isVisible\"\n      [type]=\"type\"\n      [ngClass]=\"class\"\n      [disabled]=\"disabled\"\n      (click)=\"handleClick($event)\">\n      {{label}}\n    </button>\n  "
      }]
    }];
    ButtonComponent.propDecorators = {
      isVisible: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      "class": [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isWorking: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      submit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      handleButtonClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/money/money.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MoneyComponent = /*#__PURE__*/function (_CommonComponent22) {
      _inherits(MoneyComponent, _CommonComponent22);

      var _super27 = _createSuper(MoneyComponent);

      function MoneyComponent() {
        var _this21;

        _classCallCheck(this, MoneyComponent);

        _this21 = _super27.apply(this, arguments);
        _this21.numberMask = text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_11___default()({
          allowDecimal: false,
          prefix: ''
        });
        return _this21;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      _createClass(MoneyComponent, [{
        key: "cleanMask",
        value: function cleanMask(value) {
          this.control.setValue(value.replace(/\D/g, ''));
        }
      }]);

      return MoneyComponent;
    }(CommonComponent);

    MoneyComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <label [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n      <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <input\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [attr.type]=\"'text'\"\n      [formControl]=\"control\"\n      [placeholder]=\"placeholder()\"\n      [textMask]=\"{ mask: numberMask}\"\n      (input)=cleanMask($event.target.value)\n      [attr.disabled]=\"disabled\"\n    />\n    <jf-error [control]=\"control\"></jf-error>\n  "
      }]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/framework/bootstrap4/json-form-bootstrap4.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var JsonFormBootstrap4 = /*#__PURE__*/function (_JsonFormFieldsServic) {
      _inherits(JsonFormBootstrap4, _JsonFormFieldsServic);

      var _super28 = _createSuper(JsonFormBootstrap4);

      function JsonFormBootstrap4() {
        var _this22;

        _classCallCheck(this, JsonFormBootstrap4);

        _this22 = _super28.apply(this, arguments);
        _this22.fieldTypes = {
          string: StringComponent,
          select: SelectComponent,
          number: NumberComponent,
          "boolean": BooleanComponent,
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
        return _this22;
      }

      return JsonFormBootstrap4;
    }(JsonFormFieldsService);

    JsonFormBootstrap4.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/framework/shared/components/chooser/chooser.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ChooserComponent = /*#__PURE__*/function () {
      function ChooserComponent() {
        _classCallCheck(this, ChooserComponent);

        this.nested = false;
        this.keys = Object.keys;
      }
      /**
       * @param {?} titleArray
       * @return {?}
       */


      _createClass(ChooserComponent, [{
        key: "getTranslation",
        value: function getTranslation(titleArray) {
          var _this23 = this;

          if (Array.isArray(titleArray)) {
            /** @type {?} */
            var translatedTitle = titleArray.filter(
            /**
            * @param {?} val
            * @return {?}
            */
            function (val) {
              return val.language === _this23.language;
            });
            return translatedTitle[0] && translatedTitle[0].value ? Object(lodash__WEBPACK_IMPORTED_MODULE_6__["startCase"])(translatedTitle[0].value.replace(/<.*?>/g, '')) : titleArray[0].value;
          } else {
            return titleArray;
          }
        }
      }]);

      return ChooserComponent;
    }();

    ChooserComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-component-chooser, [jf-component-chooser]',
        template: "\n  <div style=\"margin-bottom: 20px\">\n    <h2 style=\"color: #8C8C8C;font-size:16px\" *ngIf=\"schema && schema.hasOwnProperty('title') && !nested\">\n      {{getTranslation(schema.title)}}\n    </h2>\n    <h4 style=\"color: #8C8C8C;font-size:14px\" *ngIf=\"schema && schema.hasOwnProperty('title') && nested\" class=\"tru-ui-object-title\">\n      {{getTranslation(schema.title)}}\n    </h4>\n    <div style=\"color: #8C8C8C;font-size:14px\" class=\"description\"\n    *ngIf=\"schema && schema.hasOwnProperty('description')\" [innerHTML]=\"getTranslation(schema.description)\"></div>\n    </div>\n    <div [ngClass]=\"['form-container']\">\n      <div *ngFor=\"let control of keys(form.controls)\" jf-field [control]=\"form.get(control)\" [language]=\"language\"></div>\n    </div>\n  "
      }]
    }];
    ChooserComponent.propDecorators = {
      form: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      schema: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nested: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      language: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/framework/shared/components/field/field.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FieldComponent = /*#__PURE__*/function () {
      /**
       * @param {?} jsonFormFieldsService
       * @param {?} el
       */
      function FieldComponent(jsonFormFieldsService, el) {
        _classCallCheck(this, FieldComponent);

        this.jsonFormFieldsService = jsonFormFieldsService;
        this.el = el;
        this.patterns = {};
      }
      /**
       * @return {?}
       */


      _createClass(FieldComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.generateField();
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.generateField();
        }
        /**
         * @return {?}
         */

      }, {
        key: "generateField",
        value: function generateField() {
          this.container.clear();
          this.jsonFormFieldsService[0].setRootViewContainerRef(this.container);
          this.jsonFormFieldsService[0].addDynamicComponent(this.control, this.language);
          this.el.nativeElement.className = "field margin-bottom ".concat(this.getClass(), " form-group");
        }
        /**
         * @param {?=} defaultClass
         * @return {?}
         */

      }, {
        key: "getClass",
        value: function getClass() {
          var defaultClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

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

          if (this.control.style && this.control.style["default"] && ['radiogroup', 'checkboxgroup'].indexOf(this.control.schema.format) === -1) {
            fieldClass.push(this.control.style["default"]);
          }

          return fieldClass.filter(
          /**
          * @param {?} d
          * @return {?}
          */
          function (d) {
            return d;
          }).join(' ');
        }
      }]);

      return FieldComponent;
    }();

    FieldComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-field, [jf-field]',
        template: "\n    <ng-content></ng-content>\n    <ng-container #container></ng-container>\n  "
      }]
    }];
    /** @nocollapse */

    FieldComponent.ctorParameters = function () {
      return [{
        type: JsonFormFieldsService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    FieldComponent.propDecorators = {
      container: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['container', {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
          "static": true
        }]
      }],
      control: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      language: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/framework/shared/components/form-button/form-button.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FormButtonComponent = /*#__PURE__*/function () {
      /**
       * @param {?} componentFactoryResolver
       * @param {?} jsonFormFieldsService
       */
      function FormButtonComponent(componentFactoryResolver, jsonFormFieldsService) {
        _classCallCheck(this, FormButtonComponent);

        this.componentFactoryResolver = componentFactoryResolver;
        this.jsonFormFieldsService = jsonFormFieldsService;
        this.isDisabled = false;
        this.isFormValid = true;
        this.label = '';
        this.isMultiStep = false;
        this.steps = [];
        this.submit = '';
        this["continue"] = '';
        this.cancel = '';
        this.isWorking = false;
        this.handleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(FormButtonComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.drawButton();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.drawButton();
        }
        /**
         * @return {?}
         */

      }, {
        key: "drawButton",
        value: function drawButton() {
          var _this24 = this;

          this.button.clear();
          /** @type {?} */

          var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.jsonFormFieldsService[0].get('button'));
          /** @type {?} */

          var componentRef = this.button.createComponent(componentFactory);

          /** @type {?} */
          componentRef.instance.type = this.getType();

          /** @type {?} */
          componentRef.instance.isVisible = this.isVisible();

          /** @type {?} */
          componentRef.instance["class"] = this.getClass();

          /** @type {?} */
          componentRef.instance.disabled = this.isDisabled;

          /** @type {?} */
          componentRef.instance.isWorking = this.isWorking;

          /** @type {?} */
          componentRef.instance.label = this.getLabel();

          /** @type {?} */
          componentRef.instance.handleButtonClick.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            if (_this24.cancel.length > 0) {
              _this24.handleClick.emit(event);
            }
          });

          /** @type {?} */
          componentRef.instance.color = this.submit ? 'primary' : '';
        }
        /**
         * @return {?}
         */

      }, {
        key: "getClass",
        value: function getClass() {
          return this.cancel.length > 0 ? ['btn btn-default button', this.cancelClass || ''] : ['btn btn-primary button button--accept', this.submitClass || '', this.isFormValid ? 'valid' : 'invalid'];
        }
        /**
         * @return {?}
         */

      }, {
        key: "isVisible",
        value: function isVisible() {
          /** @type {?} */
          var step = this.steps.findIndex(
          /**
          * @param {?} s
          * @return {?}
          */
          function (s) {
            return s.visible;
          });

          if (this.isMultiStep && this.cancel.length > 0 && this.steps[step]) {
            return this.steps[step].type !== 'first';
          }

          return true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getLabel",
        value: function getLabel() {
          if (this.isMultiStep && this.cancel.length > 0) {
            /** @type {?} */
            var step = this.steps.findIndex(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.visible;
            });

            if (this.steps[step] && this.steps[step].type !== 'first') {
              return this.cancel;
            }
          } else if (this.isMultiStep) {
            /** @type {?} */
            var _step = this.steps.findIndex(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.visible;
            });

            if (this.steps[_step] && this.steps[_step].type !== 'last') {
              return this["continue"];
            }

            return this.submit;
          } else if (this.cancel.length > 0) {
            return this.cancel;
          }

          return this.submit;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getType",
        value: function getType() {
          if (this.cancel) {
            return 'button';
          }

          return 'submit';
        }
      }]);

      return FormButtonComponent;
    }();

    FormButtonComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-form-button',
        template: "\n    <ng-container #button></ng-container>\n  "
      }]
    }];
    /** @nocollapse */

    FormButtonComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
      }, {
        type: JsonFormFieldsService
      }];
    };

    FormButtonComponent.propDecorators = {
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isFormValid: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isMultiStep: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      steps: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      submit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      "continue": [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cancel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      submitClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cancelClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isWorking: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      handleClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      button: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['button', {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
          "static": true
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/framework/shared/components/info-button/info-button.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var InfoButtonComponent = function InfoButtonComponent() {
      _classCallCheck(this, InfoButtonComponent);
    };

    InfoButtonComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-info-button',
        template: "\n    <a\n      [attr.href]=\"'javascript:void(0)'\"\n      *ngIf=\"title\"\n      [attr.class]=\"'btn btn-link info'\" [attr.title]=\"title\">Info</a>\n  "
      }]
    }];
    InfoButtonComponent.propDecorators = {
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/framework/shared/directive/drag-and-drop.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DragAndDropDirective = /*#__PURE__*/function () {
      function DragAndDropDirective() {
        _classCallCheck(this, DragAndDropDirective);

        this.filesDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filesHovered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @param {?} $event
       * @return {?}
       */


      _createClass(DragAndDropDirective, [{
        key: "onDragOver",
        value: function onDragOver($event) {
          $event.preventDefault();
          this.filesHovered.emit(true);
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "onDragLeave",
        value: function onDragLeave($event) {
          $event.preventDefault();
          this.filesHovered.emit(false);
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "onDrop",
        value: function onDrop($event) {
          $event.preventDefault();
          this.filesDropped.emit($event.dataTransfer.files);
          this.filesHovered.emit(false);
        }
      }]);

      return DragAndDropDirective;
    }();

    DragAndDropDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[jfDragAndDrop]'
      }]
    }];
    /** @nocollapse */

    DragAndDropDirective.ctorParameters = function () {
      return [];
    };

    DragAndDropDirective.propDecorators = {
      filesDropped: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      filesHovered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onDragOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['dragover', ['$event']]
      }],
      onDragLeave: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['drageleave', ['$event']]
      }],
      onDrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['drop', ['$event']]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/framework/shared/shared.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_13__["TextMaskModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
        declarations: [JsonFormComponent, CommonComponent, ChooserComponent, FieldComponent, FormButtonComponent, InfoButtonComponent, StringViewComponent, SelectViewComponent, NumberViewComponent, BooleanViewComponent, PhotoViewComponent, TextareaViewComponent, DateViewComponent, RadiogroupViewComponent, CheckboxgroupViewComponent, MultiselectViewComponent, MoneyViewComponent, ObjectComponent, ArrayComponent, ArrayViewComponent, DragAndDropDirective],
        entryComponents: [JsonFormComponent, CommonComponent, ChooserComponent, FieldComponent, FormButtonComponent, InfoButtonComponent, StringViewComponent, SelectViewComponent, NumberViewComponent, BooleanViewComponent, PhotoViewComponent, TextareaViewComponent, DateViewComponent, RadiogroupViewComponent, CheckboxgroupViewComponent, MultiselectViewComponent, MoneyViewComponent, ObjectComponent, ArrayComponent, ArrayViewComponent],
        exports: [ChooserComponent, FieldComponent, FormButtonComponent, InfoButtonComponent, JsonFormComponent, CommonComponent, ArrayComponent, ObjectComponent, DragAndDropDirective]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/json-form.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var JsonFormModule = /*#__PURE__*/function () {
      function JsonFormModule() {
        _classCallCheck(this, JsonFormModule);
      }

      _createClass(JsonFormModule, null, [{
        key: "forRoot",

        /**
         * @param {...?} frameworks
         * @return {?}
         */
        value: function forRoot() {
          for (var _len = arguments.length, frameworks = new Array(_len), _key = 0; _key < _len; _key++) {
            frameworks[_key] = arguments[_key];
          }

          /** @type {?} */
          var loadFramework = frameworks.length ? frameworks.map(
          /**
          * @param {?} framework
          * @return {?}
          */
          function (framework) {
            return framework.forRoot().providers[0];
          }) : [{
            provide: JsonFormFieldsService,
            useClass: JsonFormBootstrap4,
            multi: true
          }];
          return {
            ngModule: JsonFormModule,
            providers: [JsonFormDefaultsService, JsonFormValidatorsService].concat(_toConsumableArray(loadFramework))
          };
        }
      }]);

      return JsonFormModule;
    }();

    JsonFormModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], SharedModule],
        exports: [CommonComponent, JsonFormComponent],
        entryComponents: [JsonFormComponent],
        providers: [JsonFormDefaultsService, JsonFormValidatorsService, ValidationFeedbackTranslation, ngx_image_compress__WEBPACK_IMPORTED_MODULE_10__["NgxImageCompressService"]],
        declarations: []
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/error/error.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var ErrorComponent = /*#__PURE__*/function (_CommonComponent23) {
      _inherits(ErrorComponent, _CommonComponent23);

      var _super29 = _createSuper(ErrorComponent);

      function ErrorComponent() {
        _classCallCheck(this, ErrorComponent);

        return _super29.apply(this, arguments);
      }

      return ErrorComponent;
    }(CommonComponent);

    ErrorComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-error, [jf-error]',
        template: "\n    <div *ngIf=\"control.invalid && (control.dirty || control.touched)\" class=\"invalid-feedback\" style=\"display: block !important\">\n      <ng-container *ngIf=\"control.errors && control.errors['required']\">\n        This field is required\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['pattern']\">\n        Input value is invalid\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['email']\">\n        Email is invalid.\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['minlength']\">\n        Input has to be a minimum of {{control.errors['minlength']['requiredLength']}} characters\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['maxlength']\">\n        Input can contain a maximum of {{control.errors['maxlength']['requiredLength']}} characters\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['min']\">\n        Enter a value greater than or equal to {{control.errors['min']['min']}}\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['max']\">\n        Enter a value less than or equal to {{control.errors['max']['max']}}\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['customError']\">\n        {{control.errors['customError']}}\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['isMatch']\">\n      {{getLanguage().is_match}}\n    </ng-container>\n    </div>\n  "
      }]
    }];
    ErrorComponent.propDecorators = {
      control: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/framework/bootstrap4/json-form-bootstrap4.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var JsonFormBootstrap4Module = /*#__PURE__*/function () {
      function JsonFormBootstrap4Module() {
        _classCallCheck(this, JsonFormBootstrap4Module);
      }

      _createClass(JsonFormBootstrap4Module, null, [{
        key: "forRoot",

        /**
         * @return {?}
         */
        value: function forRoot() {
          return {
            ngModule: JsonFormBootstrap4Module,
            providers: [{
              provide: JsonFormFieldsService,
              useClass: JsonFormBootstrap4,
              multi: true
            }]
          };
        }
      }]);

      return JsonFormBootstrap4Module;
    }();

    JsonFormBootstrap4Module.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_13__["TextMaskModule"], SharedModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot()],
        declarations: [StringComponent, SelectComponent, DateComponent, TextareaComponent, ErrorComponent, MoneyComponent, NumberComponent, BooleanComponent, ButtonComponent, CheckboxgroupComponent, MultiselectComponent, PhotoComponent, RadiogroupComponent],
        entryComponents: [StringComponent, SelectComponent, DateComponent, TextareaComponent, ErrorComponent, MoneyComponent, NumberComponent, BooleanComponent, ButtonComponent, CheckboxgroupComponent, MultiselectComponent, PhotoComponent, RadiogroupComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/string/string.material.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var StringMaterialComponent = /*#__PURE__*/function (_CommonComponent24) {
      _inherits(StringMaterialComponent, _CommonComponent24);

      var _super30 = _createSuper(StringMaterialComponent);

      function StringMaterialComponent() {
        _classCallCheck(this, StringMaterialComponent);

        return _super30.apply(this, arguments);
      }

      return StringMaterialComponent;
    }(CommonComponent);

    StringMaterialComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <mat-form-field>\n      <input\n        matInput\n        [attr.name]=\"schema.key\"\n        [attr.type]=\"type()\"\n        [formControl]=\"control\"\n        [attr.maxLength]=\"schema.maxLength || null\"\n        [attr.minLength]=\"schema.minLength || null\"\n        [attr.placeholder]=\"placeholder()\"\n        [textMask]=\"{ mask: getMask() }\"\n        [placeholder]=\"title(true)\"\n        [disabled]=\"disabled\"\n        (change)=\"isMatch()\"\n\n      />\n      <mat-error jf-error [control]=\"control\"></mat-error>\n    </mat-form-field>\n    <div *ngIf=\"schema.verify\" style=\"margin-top: 1rem\">\n    <mat-form-field>\n          <input\n          matInput\n          [attr.type]=\"type()\"\n          [formControl]=\"confirmInput\"\n          [attr.maxLength]=\"schema.maxLength || null\"\n          [attr.minLength]=\"schema.minLength || null\"\n          [attr.disabled]=\"disabled\"\n          [attr.placeholder]=\"placeholder()\"\n          [placeholder]=\"getLanguage().confirm + title(true)\"\n          [textMask]=\"{ mask: getMask() }\"\n          [disabled]=\"disabled\"\n          (change)=\"isMatch()\"\n          />\n     <mat-error jf-error [control]=\"control\"></mat-error>\n    </mat-form-field>\n    </div>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/textarea/textarea.material.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var TextareaMaterialComponent = /*#__PURE__*/function (_CommonComponent25) {
      _inherits(TextareaMaterialComponent, _CommonComponent25);

      var _super31 = _createSuper(TextareaMaterialComponent);

      function TextareaMaterialComponent() {
        _classCallCheck(this, TextareaMaterialComponent);

        return _super31.apply(this, arguments);
      }

      return TextareaMaterialComponent;
    }(CommonComponent);

    TextareaMaterialComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <mat-form-field class=\"example-full-width\">\n      <textarea\n          matInput\n          [name]=\"schema.key\"\n          [formControl]=\"control\"\n          [attr.maxLength]=\"schema.maxLength || null\"\n          [attr.minLength]=\"schema.minLength || null\"\n          [attr.placeholder]=\"placeholder()\"\n          [disabled]=\"disabled\"\n          [placeholder]=\"title(true)\">\n      </textarea>\n      <mat-error jf-error [control]=\"control\"></mat-error>\n    </mat-form-field>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/select/select.material.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var SelectMaterialComponent = /*#__PURE__*/function (_CommonComponent26) {
      _inherits(SelectMaterialComponent, _CommonComponent26);

      var _super32 = _createSuper(SelectMaterialComponent);

      function SelectMaterialComponent() {
        _classCallCheck(this, SelectMaterialComponent);

        return _super32.apply(this, arguments);
      }

      return SelectMaterialComponent;
    }(CommonComponent);

    SelectMaterialComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n\n  <mat-form-field>\n    <mat-select\n      class=\"form-control\"\n      [attr.name]=\"schema.key\"\n      [formControl]=\"control\"\n      placeholder=\"{{title(true)}}\"\n      [disabled]=\"disabled\"\n    >\n      <mat-option [disabled]=\"true\">\n          {{placeholder()}}\n      </mat-option>\n      <mat-option *ngFor=\"let en of this.schema.enum; let i = index\" [value]=\"en\">\n          {{enumNames(i)}}\n      </mat-option>\n    </mat-select>\n    <mat-error jf-error [control]=\"control\"></mat-error>\n  </mat-form-field>\n\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/radiogroup/radiogroup.material.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var RadiogroupMaterialComponent = /*#__PURE__*/function (_CommonComponent27) {
      _inherits(RadiogroupMaterialComponent, _CommonComponent27);

      var _super33 = _createSuper(RadiogroupMaterialComponent);

      function RadiogroupMaterialComponent() {
        _classCallCheck(this, RadiogroupMaterialComponent);

        return _super33.apply(this, arguments);
      }

      return RadiogroupMaterialComponent;
    }(CommonComponent);

    RadiogroupMaterialComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <div>\n      <label [attr.class]=\"schema.key\" [ngClass]=\"{'margin-bottom--half': true, required: isRequired()}\">\n        <span [innerHTML]=\"title(true)\"></span><sup *ngIf=\"isRequired()\">*</sup></label>\n\n      <mat-radio-group [formControl]=\"control\" *ngFor=\"let en of this.schema.enum; let i = index\">\n        <mat-radio-button\n          [checked]=\"control.value === en.toString()\"\n          [value]=\"en.toString()\"\n          [disabled]=\"disabled\"\n        >\n          {{enumNames(i)}}\n        </mat-radio-button>\n      </mat-radio-group>\n    </div>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/photo/photo.material.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var PhotoMaterialComponent = /*#__PURE__*/function (_CommonComponent28) {
      _inherits(PhotoMaterialComponent, _CommonComponent28);

      var _super34 = _createSuper(PhotoMaterialComponent);

      function PhotoMaterialComponent() {
        var _this25;

        _classCallCheck(this, PhotoMaterialComponent);

        _this25 = _super34.apply(this, arguments);
        _this25.error = false;
        return _this25;
      }
      /**
       * @return {?}
       */


      _createClass(PhotoMaterialComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.control.data) {
            this.photoData = this.control.data;
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onChange",
        value: function onChange(event) {
          var _this26 = this;

          /** @type {?} */
          var file = event.target.files[0];
          /** @type {?} */

          var reader = new FileReader();

          reader.onloadend =
          /**
          * @return {?}
          */
          function () {
            _this26.processFile(reader.result, file.type).then(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              _this26.error = false;
              _this26.photoData = data.toString();

              _this26.control.setValue(_this26.photoData);
            })["catch"](
            /**
            * @param {?} err
            * @return {?}
            */
            function (err) {
              _this26.error = true;
            });
          };

          reader.onerror =
          /**
          * @return {?}
          */
          function () {
            _this26.error = true;
          };

          if (typeof file !== 'undefined') {
            reader.readAsDataURL(file);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "previewSrcExists",
        value: function previewSrcExists() {
          return typeof this.photoData === 'string';
        }
        /**
         * @return {?}
         */

      }, {
        key: "clearPhoto",
        value: function clearPhoto() {
          this.photoData = null;
          this.control.reset();
        }
        /**
         * @param {?} dataURL
         * @param {?} fileType
         * @return {?}
         */

      }, {
        key: "processFile",
        value: function processFile(dataURL, fileType) {
          /** @type {?} */
          var maxWidth = 1024;
          /** @type {?} */

          var maxHeight = 1024;
          /** @type {?} */

          var image = new Image();
          image.src = dataURL;
          return new Promise(
          /**
          * @param {?} resolve
          * @param {?} reject
          * @return {?}
          */
          function (resolve, reject) {
            image.onload =
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var width = image.width;
              /** @type {?} */

              var height = image.height;
              /** @type {?} */

              var shouldResize = width > maxWidth || height > maxHeight;

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
              } else {
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
            };

            image.onerror =
            /**
            * @param {?} err
            * @return {?}
            */
            function (err) {
              return reject(err);
            };
          });
        }
      }]);

      return PhotoMaterialComponent;
    }(CommonComponent);

    PhotoMaterialComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <label [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n      <span [innerHTML]=\"title(true)\"></span>\n    </label>\n    <div *ngIf=\"previewSrcExists(); else addImage\" class=\"photo-preview\">\n      <a\n        class=\"photo-add\"\n        mat-button\n        color=\"primary\"\n        [style.background-image]=\"makeTrustedImage(photoData)\"\n        [style.background-size]=\"'cover'\"\n        [style.background-repeat]=\"'no-repeat'\"\n        (click)=\"$event.preventDefault(); fileInput.click()\"\n        [disabled]=\"disabled\"\n      >\n        <mat-icon>add_a_photo</mat-icon>\n      </a>\n      <a\n        class=\"photo-remove\"\n        mat-mini-fab\n        color=\"warn\"\n        (click)=\"clearPhoto()\"\n      >\n        <mat-icon>close</mat-icon>\n      </a>\n    </div>\n    <ng-template #addImage>\n      <a\n        class=\"photo-add\"\n        mat-button\n        color=\"primary\"\n        (click)=\"$event.preventDefault(); fileInput.click(fileInput.value = null);  \"\n      >\n        <mat-icon>add_a_photo</mat-icon>\n      </a>\n    </ng-template>\n    <input #fileInput type=\"file\" accept=\"image/*\" [name]=\"schema.key\" (change)=\"onChange($event)\" style=\"display:none;\"/>\n    <input type=\"hidden\" [name]=\"schema.key\" [formControl]=\"control\"/>\n    <div class=\"mat-form-field-subscript-wrapper\" *ngIf=\"error\" style=\"position: relative;\">\n      <mat-error class=\"mat-error\">Please upload a valid photo format (JPG, PNG)</mat-error>\n    </div>\n    <div>\n      <jf-error [control]=\"control\"></jf-error>\n    </div>\n  "
      }]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/number/number.material.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NumberMaterialComponent = /*#__PURE__*/function (_CommonComponent29) {
      _inherits(NumberMaterialComponent, _CommonComponent29);

      var _super35 = _createSuper(NumberMaterialComponent);

      function NumberMaterialComponent() {
        _classCallCheck(this, NumberMaterialComponent);

        return _super35.apply(this, arguments);
      }

      return NumberMaterialComponent;
    }(CommonComponent);

    NumberMaterialComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <mat-form-field>\n      <input\n        matInput\n        [name]=\"schema.key\"\n        [attr.type]=\"'number'\"\n        [formControl]=\"control\"\n        [attr.placeholder]=\"placeholder()\"\n        [placeholder]=\"title(true)\"\n        [disabled]=\"disabled\"\n      />\n      <mat-error jf-error [control]=\"control\"></mat-error>\n    </mat-form-field>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/multiselect/multiselect.material.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MultiselectMaterialComponent = /*#__PURE__*/function (_CommonComponent30) {
      _inherits(MultiselectMaterialComponent, _CommonComponent30);

      var _super36 = _createSuper(MultiselectMaterialComponent);

      function MultiselectMaterialComponent() {
        _classCallCheck(this, MultiselectMaterialComponent);

        return _super36.apply(this, arguments);
      }

      _createClass(MultiselectMaterialComponent, [{
        key: "enumNames",

        /**
         * @param {?} index
         * @return {?}
         */
        value: function enumNames(index) {
          return typeof this.schema.enumNames === 'undefined' ? this.schema["enum"][index] : this.schema.enumNames[index];
        }
      }]);

      return MultiselectMaterialComponent;
    }(CommonComponent);

    MultiselectMaterialComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n  <mat-form-field>\n    <mat-select\n      [formControl]=\"control\"\n      name=\"name\"\n      [disabled]=\"disabled\"\n      multiple>\n      <mat-option\n        *ngFor=\"let en of schema.enum; let i = index\"\n        [value]=\"en\">\n        {{enumNames(i)}}\n      </mat-option>\n    </mat-select>\n    <mat-error jf-error [control]=\"control\"></mat-error>\n  </mat-form-field>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/checkboxgroup/checkboxgroup.material.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var CheckboxgroupMaterialComponent = /*#__PURE__*/function (_CommonComponent31) {
      _inherits(CheckboxgroupMaterialComponent, _CommonComponent31);

      var _super37 = _createSuper(CheckboxgroupMaterialComponent);

      function CheckboxgroupMaterialComponent() {
        var _this27;

        _classCallCheck(this, CheckboxgroupMaterialComponent);

        _this27 = _super37.apply(this, arguments);
        _this27.checkboxGroupValues = [];
        _this27.randomSuffix = Math.random().toString(36).substring(7);
        return _this27;
      }
      /**
       * @param {?} event
       * @param {?} index
       * @return {?}
       */


      _createClass(CheckboxgroupMaterialComponent, [{
        key: "setValue",
        value: function setValue(event, index) {
          if (this.checkboxGroupValues.length === 0) {
            this.checkboxGroupValues = new Array(this.control['controls'].length).fill(null);
          }

          if (this.checkboxGroupValues[index] === null) {
            event.target.value = this.schema["enum"][index];
            this.checkboxGroupValues[index] = event.target.value;
          } else {
            this.checkboxGroupValues[index] = null;
          }

          this.control.setValue(this.checkboxGroupValues);
        }
        /**
         * @param {?} i
         * @param {?} val
         * @return {?}
         */

      }, {
        key: "getId",
        value: function getId(i, val) {
          return "".concat(i, "-").concat(val.replace(/[\W_]+/g, ''), "+").concat(this.randomSuffix);
        }
      }]);

      return CheckboxgroupMaterialComponent;
    }(CommonComponent);

    CheckboxgroupMaterialComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <mat-checkbox\n    *ngFor=\"let child of this.control['controls']; let i = index\"\n    [attr.id]=\"getId(i, schema.enum[i])\"\n    [checked]=\"child.value === schema.enum[i]\"\n    [name]=\"schema.key\"\n    [formControl]=\"child\"\n    (change)=\"setValue($event, i)\"\n    [value]=\"schema.enum[i]\"\n    [disabled]=\"disabled\"\n    >\n        {{enumNames(i)}}\n    </mat-checkbox>\n  "
      }]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/boolean/boolean.material.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BooleanMaterialComponent = /*#__PURE__*/function (_CommonComponent32) {
      _inherits(BooleanMaterialComponent, _CommonComponent32);

      var _super38 = _createSuper(BooleanMaterialComponent);

      function BooleanMaterialComponent() {
        _classCallCheck(this, BooleanMaterialComponent);

        return _super38.apply(this, arguments);
      }

      return BooleanMaterialComponent;
    }(CommonComponent);

    BooleanMaterialComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <div class=\"slide-container\">\n      <mat-slide-toggle\n      [id]=\"schema.key\"\n      [name]=\"schema.key\"\n      color=\"primary\"\n      [disabled]=\"disabled\"\n      [formControl]=\"control\">{{title(true)}}</mat-slide-toggle>\n    </div>\n    <jf-error [control]=\"control\"></jf-error>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/date/date.material.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var MY_FORMATS = {
      parse: {
        dateInput: 'LL'
      },
      display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
      }
    };

    var DateMaterialComponent = /*#__PURE__*/function (_CommonComponent33) {
      _inherits(DateMaterialComponent, _CommonComponent33);

      var _super39 = _createSuper(DateMaterialComponent);

      function DateMaterialComponent() {
        _classCallCheck(this, DateMaterialComponent);

        return _super39.apply(this, arguments);
      }

      _createClass(DateMaterialComponent, [{
        key: "isMobile",

        /**
         * @return {?}
         */
        value: function isMobile() {
          return window.innerWidth <= 800;
        }
        /**
         * @return {?}
         */

      }, {
        key: "minDate",
        value: function minDate() {
          return isNaN(new Date(this.schema.minimum).getDate()) ? null : new Date(this.schema.minimum);
        }
        /**
         * @return {?}
         */

      }, {
        key: "maxDate",
        value: function maxDate() {
          return isNaN(new Date(this.schema.maximum).getDate()) ? null : new Date(this.schema.maximum);
        }
      }]);

      return DateMaterialComponent;
    }(CommonComponent);

    DateMaterialComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <mat-form-field color=\"primary\">\n      <input\n        matInput\n        [matDatepicker]='myDatepicker'\n        (click)=\"myDatepicker.open()\"\n        [formControl]='control'\n        [placeholder]='title(true)'\n        [min]=\"minDate()\"\n        [max]=\"maxDate()\"\n        [disabled]=\"disabled\"\n        readonly\n      >\n      <mat-datepicker-toggle matSuffix [for]='myDatepicker'></mat-datepicker-toggle>\n      <mat-datepicker #myDatepicker [touchUi]=\"isMobile()\" color=\"primary\"></mat-datepicker>\n      <mat-error jf-error [control]='control'></mat-error>\n    </mat-form-field>\n  ",
        providers: [{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"],
          useClass: MomentUtcDateAdapter
        }]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/button/button.material.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var ButtonMaterialComponent = /*#__PURE__*/function (_ButtonComponent) {
      _inherits(ButtonMaterialComponent, _ButtonComponent);

      var _super40 = _createSuper(ButtonMaterialComponent);

      function ButtonMaterialComponent() {
        _classCallCheck(this, ButtonMaterialComponent);

        return _super40.apply(this, arguments);
      }

      return ButtonMaterialComponent;
    }(ButtonComponent);

    ButtonMaterialComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-button',
        template: "\n    <button\n      mat-raised-button\n      [color]=\"color\"\n      *ngIf=\"isVisible\"\n      [type]=\"type\"\n      [ngClass]=\"class\"\n      [disabled]=\"disabled\"\n      (click)=\"handleClick($event)\">\n      {{label}}\n    </button>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/array/array.material.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var ArrayMaterialComponent = /*#__PURE__*/function (_ArrayComponent2) {
      _inherits(ArrayMaterialComponent, _ArrayComponent2);

      var _super41 = _createSuper(ArrayMaterialComponent);

      function ArrayMaterialComponent() {
        _classCallCheck(this, ArrayMaterialComponent);

        return _super41.apply(this, arguments);
      }

      return ArrayMaterialComponent;
    }(ArrayComponent);

    ArrayMaterialComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        template: "\n    <mat-card [ngClass]=\"['object', control.schema.key]\">\n      <h6 *ngIf=\"getLegend(control).length\">{{getLegend(control)}}</h6>\n      <div class=\"array-items\">\n        <div *ngFor=\"let arrControl of getEnabledControls(control); let i = index;\">\n          <div class=\"row\">\n            <div jf-component-chooser [form]=\"arrControl\"></div>\n            <button\n              mat-button\n              *ngIf=\"control.controls.length > 1\"\n              (click)=\"$event.preventDefault(); removeControl(control, i)\"\n              color=\"warn\"\n              class=\"remove\"\n            >Remove</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <button mat-button color=\"primary\" (click)=\"$event.preventDefault(); addControl(control)\">Add</button>\n      </div>\n    </mat-card>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/framework/material/json-form-material.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var JsonFormMaterial = /*#__PURE__*/function (_JsonFormFieldsServic2) {
      _inherits(JsonFormMaterial, _JsonFormFieldsServic2);

      var _super42 = _createSuper(JsonFormMaterial);

      function JsonFormMaterial() {
        var _this28;

        _classCallCheck(this, JsonFormMaterial);

        _this28 = _super42.apply(this, arguments);
        _this28.fieldTypes = {
          string: StringMaterialComponent,
          select: SelectMaterialComponent,
          number: NumberMaterialComponent,
          "boolean": BooleanMaterialComponent,
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
        return _this28;
      }

      return JsonFormMaterial;
    }(JsonFormFieldsService);

    JsonFormMaterial.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/error/error.material.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ErrorMaterialComponent = /*#__PURE__*/function (_CommonComponent34) {
      _inherits(ErrorMaterialComponent, _CommonComponent34);

      var _super43 = _createSuper(ErrorMaterialComponent);

      function ErrorMaterialComponent() {
        _classCallCheck(this, ErrorMaterialComponent);

        return _super43.apply(this, arguments);
      }

      return ErrorMaterialComponent;
    }(CommonComponent);

    ErrorMaterialComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-error, [jf-error]',
        template: "\n    <ng-container *ngIf=\"control.invalid && (control.dirty || control.touched)\">\n      <ng-container *ngIf=\"control.errors && control.errors['required']\">\n        This field is required\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['pattern']\">\n        Input value is invalid\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['email']\">\n        Email is invalid\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['minlength']\">\n        Input has to be a minimum of {{control.errors['minlength']['requiredLength']}} characters\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['maxlength']\">\n        Input can contain a maximum of {{control.errors['maxlength']['requiredLength']}} characters\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['min']\">\n        Enter a value greater than or equal to {{control.errors['min']['min']}}\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['max']\">\n        Enter a value less than or equal to {{control.errors['max']['max']}}\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['customError']\">\n        {{control.errors['customError']}}\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['matDatepickerMin']\">\n        Date should be greater than or equal {{ control.errors['matDatepickerMin'].min.format('DD MMM, YYYY') }}\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['matDatepickerMax']\">\n        Date should be less than or equal {{ control.errors['matDatepickerMax'].max.format('DD MMM, YYYY') }}\n      </ng-container>\n      <ng-container *ngIf=\"control.errors && control.errors['isMatch']\">\n      {{getLanguage().is_match}}\n    </ng-container>\n    </ng-container>\n  "
      }]
    }];
    ErrorMaterialComponent.propDecorators = {
      control: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/framework/material/json-form-material.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var JsonFormMaterialModule = /*#__PURE__*/function () {
      function JsonFormMaterialModule() {
        _classCallCheck(this, JsonFormMaterialModule);
      }

      _createClass(JsonFormMaterialModule, null, [{
        key: "forRoot",

        /**
         * @return {?}
         */
        value: function forRoot() {
          return {
            ngModule: JsonFormMaterialModule,
            providers: [{
              provide: JsonFormFieldsService,
              useClass: JsonFormMaterial,
              multi: true
            }]
          };
        }
      }]);

      return JsonFormMaterialModule;
    }();

    JsonFormMaterialModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_13__["TextMaskModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__["MatMomentDateModule"], SharedModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot()],
        declarations: [StringMaterialComponent, TextareaMaterialComponent, SelectMaterialComponent, RadiogroupMaterialComponent, PhotoMaterialComponent, NumberMaterialComponent, MultiselectMaterialComponent, CheckboxgroupMaterialComponent, BooleanMaterialComponent, DateMaterialComponent, ErrorMaterialComponent, ButtonMaterialComponent, ArrayMaterialComponent],
        entryComponents: [StringMaterialComponent, TextareaMaterialComponent, SelectMaterialComponent, RadiogroupMaterialComponent, PhotoMaterialComponent, NumberMaterialComponent, MultiselectMaterialComponent, CheckboxgroupMaterialComponent, BooleanMaterialComponent, DateMaterialComponent, ErrorMaterialComponent, ButtonMaterialComponent, ArrayMaterialComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/string/tru-ui-string/tru-ui-string.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var TruUiStringComponent = /*#__PURE__*/function (_CommonComponent35) {
      _inherits(TruUiStringComponent, _CommonComponent35);

      var _super44 = _createSuper(TruUiStringComponent);

      function TruUiStringComponent() {
        _classCallCheck(this, TruUiStringComponent);

        return _super44.apply(this, arguments);
      }

      return TruUiStringComponent;
    }(CommonComponent);

    TruUiStringComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-tru-ui-string',
        template: "<div class=\"tru-ui-input-container\">\n<label  class=\"tru-ui-label\"\n[ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\" *ngIf=\"type() !== 'hidden'\">\n<span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n</label>\n<button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\" class=\"tru-ui-button\">Info</button>\n<input\nclass=\"tru-ui-input-control\"\n[attr.name]=\"schema.key\"\n[attr.type]=\"type()\"\n[formControl]=\"control\"\n[attr.maxLength]=\"schema.maxLength || null\"\n[attr.minLength]=\"schema.minLength || null\"\n[attr.disabled]=\"disabled\"\n[textMask]=\"{ mask: getMask() }\"\n[ngClass]=\"{'empty': control.value === '' && !isRequired()}\"\n(change)=\"isMatch()\"\n/>\n<div *ngIf=\"schema.verify\" style=\"margin-top: 1rem\">\n    <label  class=\"tru-ui-label\"\n    [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\" *ngIf=\"type() !== 'hidden'\">\n    <span > {{ getLanguage()?.confirm}} {{title()}}</span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <input\n    class=\"tru-ui-input-control\"\n    [attr.type]=\"type()\"\n    [formControl]=\"confirmInput\"\n    [attr.maxLength]=\"schema.maxLength || null\"\n    [attr.minLength]=\"schema.minLength || null\"\n    [attr.disabled]=\"disabled\"\n    [textMask]=\"{ mask: getMask() }\"\n    (change)=\"isMatch()\"\n    />\n</div>\n<jf-tru-ui-error [control]=\"control\" [language]=\"language || 'en'\"></jf-tru-ui-error>\n</div>",
        styles: [".tru-ui-label{font-size:14px;color:#8c8c8c;margin-bottom:6px;padding:0}.tru-ui-input-container{margin-bottom:8px;position:relative}.tru-ui-input-control.empty{border-color:#d8d8d8!important}.tru-ui-input-control{height:32px;padding:6px;width:100%;font-size:12px;background-color:#fff;border:1px solid #d8d8d8;border-radius:6px;color:#959595!important}.tru-ui-input-control:focus{outline:0!important}::ng-deep .ng-invalid.ng-touched{border-color:#f75a5a!important}textarea.tru-ui-input-control{height:120px}.tru-ui-date{background-position:calc(100% - 6px);background-repeat:no-repeat;background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='14px' height='16px' viewBox='0 0 14 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Full-Admin' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='All-form-inputs' transform='translate(-870.000000, -1088.000000)' fill='%238C8C8C' fill-rule='nonzero'%3E%3Cg id='Group-44-Copy' transform='translate(631.000000, 1056.000000)'%3E%3Cg id='Group-31' transform='translate(0.000000, 24.000000)'%3E%3Cpath d='M252.625,13 L239.375,13 C239.16875,13 239,12.83125 239,12.625 L239,11.5 C239,10.671875 239.671875,10 240.5,10 L242,10 L242,8.375 C242,8.16875 242.16875,8 242.375,8 L243.625,8 C243.83125,8 244,8.16875 244,8.375 L244,10 L248,10 L248,8.375 C248,8.16875 248.16875,8 248.375,8 L249.625,8 C249.83125,8 250,8.16875 250,8.375 L250,10 L251.5,10 C252.328125,10 253,10.671875 253,11.5 L253,12.625 C253,12.83125 252.83125,13 252.625,13 Z M239.375,14 L252.625,14 C252.83125,14 253,14.16875 253,14.375 L253,22.5 C253,23.328125 252.328125,24 251.5,24 L240.5,24 C239.671875,24 239,23.328125 239,22.5 L239,14.375 C239,14.16875 239.16875,14 239.375,14 Z M243,20.375 C243,20.16875 242.83125,20 242.625,20 L241.375,20 C241.16875,20 241,20.16875 241,20.375 L241,21.625 C241,21.83125 241.16875,22 241.375,22 L242.625,22 C242.83125,22 243,21.83125 243,21.625 L243,20.375 Z M243,16.375 C243,16.16875 242.83125,16 242.625,16 L241.375,16 C241.16875,16 241,16.16875 241,16.375 L241,17.625 C241,17.83125 241.16875,18 241.375,18 L242.625,18 C242.83125,18 243,17.83125 243,17.625 L243,16.375 Z M247,20.375 C247,20.16875 246.83125,20 246.625,20 L245.375,20 C245.16875,20 245,20.16875 245,20.375 L245,21.625 C245,21.83125 245.16875,22 245.375,22 L246.625,22 C246.83125,22 247,21.83125 247,21.625 L247,20.375 Z M247,16.375 C247,16.16875 246.83125,16 246.625,16 L245.375,16 C245.16875,16 245,16.16875 245,16.375 L245,17.625 C245,17.83125 245.16875,18 245.375,18 L246.625,18 C246.83125,18 247,17.83125 247,17.625 L247,16.375 Z M251,20.375 C251,20.16875 250.83125,20 250.625,20 L249.375,20 C249.16875,20 249,20.16875 249,20.375 L249,21.625 C249,21.83125 249.16875,22 249.375,22 L250.625,22 C250.83125,22 251,21.83125 251,21.625 L251,20.375 Z M251,16.375 C251,16.16875 250.83125,16 250.625,16 L249.375,16 C249.16875,16 249,16.16875 249,16.375 L249,17.625 C249,17.83125 249.16875,18 249.375,18 L250.625,18 C250.83125,18 251,17.83125 251,17.625 L251,16.375 Z' id='calendar-alt'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}.tru-ui-select{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 129 129' enable-background='new 0 0 129 129' width='512px' height='512px'%3E%3Cg%3E%3Cpath d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='%23959595'/%3E%3C/g%3E%3C/svg%3E%0A\");background-position:calc(100% - 6px);background-repeat:no-repeat;-moz-appearance:none;-webkit-appearance:none;appearance:none;background-size:14px}.tru-ui-number{-moz-appearance:none;-webkit-appearance:none;appearance:none}.container,.container-radio-button{display:block;position:relative;padding-left:18px;margin-bottom:12px;cursor:pointer;font-size:14px;margin-top:12px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container input,.container-radio-button input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{position:absolute;top:3px;left:0;height:15px;width:15px;background-color:#fff;border-radius:3px;border:1px solid rgba(0,0,0,.3)}.container:hover input~.checkmark{background-color:#fff;border-radius:3px;border:1px solid rgba(0,0,0,.3)}.container-radio-button input~.checkmark{border-radius:50%;background-color:#fff;border:1px solid rgba(0,0,0,.3)}.container input:checked~.checkmark,.container-radio-button input:checked~.checkmark{background-color:#2196f3}.checkmark:after{content:\"\";position:absolute;display:none}.container input:checked~.checkmark:after,.container-radio-button input:checked~.checkmark:after{display:block}.container .checkmark:after{left:4px;top:1px;width:5px;height:10px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}.container-radio-button .checkmark:after{border-radius:50%;width:7px;height:7px;top:3px;background-color:#fff;left:3px}::ng-deep typeahead-container{background-color:#fff;border-radius:6px;width:100%;box-shadow:10px 10px 20px 0 rgba(30,30,30,.05)}::ng-deep .dropdown-menu{list-style:none;padding:0;width:100%}::ng-deep .dropdown-menu li a{text-decoration:none;font-size:14px;color:#8c8c8c;display:block;width:100%}::ng-deep .dropdown-menu li{padding:4px 6px}::ng-deep .dropdown-menu li:hover{background-color:rgba(0,0,0,.05)}.dropdown-menu>li>a>span>strong,::ng-deep .dropdown-menu>li>a>span>strong{color:#b7d581!important}"]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/button/tru-ui-button/tru-ui-button.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var TruUiButtonComponent = /*#__PURE__*/function () {
      function TruUiButtonComponent() {
        _classCallCheck(this, TruUiButtonComponent);

        this.color = '';
        this.handleButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @param {?} event
       * @return {?}
       */


      _createClass(TruUiButtonComponent, [{
        key: "handleClick",
        value: function handleClick(event) {
          this.handleButtonClick.emit(event);
        }
      }]);

      return TruUiButtonComponent;
    }();

    TruUiButtonComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-tru-ui-button',
        template: "<button\n      class=\"tru-ui-button\"\n      *ngIf=\"isVisible\"\n      [type]=\"type\"\n      [ngClass]=\"class\"\n      [disabled]=\"disabled\"\n      (click)=\"handleClick($event)\">\n      {{label}}\n    </button>",
        styles: [".tru-ui-button{border-radius:6px;font-size:14px;padding:6px 24px;margin:6px;width:auto;height:32px;border:none}.tru-ui-button:not([disabled]):hover{opacity:.8}.tru-ui-button:disabled{background-color:#d8d8de;color:#959595}::ng-deep .secondary-bg{background-color:#8e8e8e;color:#fff}"]
      }]
    }];
    TruUiButtonComponent.propDecorators = {
      isVisible: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      "class": [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isWorking: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      submit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      handleButtonClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/photo/tru-ui-photo/tru-ui-photo.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TruUiPhotoComponent = /*#__PURE__*/function (_CommonComponent36) {
      _inherits(TruUiPhotoComponent, _CommonComponent36);

      var _super45 = _createSuper(TruUiPhotoComponent);

      function TruUiPhotoComponent() {
        var _this29;

        _classCallCheck(this, TruUiPhotoComponent);

        _this29 = _super45.apply(this, arguments);
        _this29.selectFile = false;
        _this29.busy = false;
        return _this29;
      }
      /**
       * @return {?}
       */


      _createClass(TruUiPhotoComponent, [{
        key: "resetUpload",
        value: function resetUpload() {
          this.file = {};
          this.selectFile = false;
          this.fileSize = null;
          this.photoData = null;
          this.busy = false;
          this.control.reset();
        }
        /**
         * @param {?} files
         * @return {?}
         */

      }, {
        key: "handleDrop",
        value: function handleDrop(files) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_24__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.processFile(files);

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
        /**
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "shortenSize",
        value: function shortenSize(data) {
          return data.toString().substring(0, 5);
        }
        /**
         * @param {?} files
         * @return {?}
         */

      }, {
        key: "dragAndDrop",
        value: function dragAndDrop(files) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_24__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.processFile(files.target.files);

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
        /**
         * @param {?} file
         * @return {?}
         */

      }, {
        key: "toBase64",
        value: function toBase64(file) {
          return new Promise(
          /**
          * @param {?} resolve
          * @param {?} reject
          * @return {?}
          */
          function (resolve, reject) {
            /** @type {?} */
            var reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload =
            /**
            * @return {?}
            */
            function () {
              return resolve(reader.result);
            };

            reader.onerror =
            /**
            * @param {?} error
            * @return {?}
            */
            function (error) {
              return reject(error);
            };
          });
        }
        /**
         * @param {?} files
         * @return {?}
         */

      }, {
        key: "processFile",
        value: function processFile(files) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_24__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this30 = this;

            var name, file, lastDot, ext;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    /** @type {?} */
                    name = files[0].name;
                    /** @type {?} */

                    _context3.next = 3;
                    return this.toBase64(files[0]);

                  case 3:
                    file = _context3.sent;

                    /** @type {?} */
                    lastDot = name.lastIndexOf('.');
                    /** @type {?} */

                    ext = name.substring(lastDot + 1);

                    if (!(this.schema.maxSize && +this.schema.maxSize < +files[0].size / 1024 / 1024 || this.schema.imageFormat && _toConsumableArray(this.schema.imageFormat).indexOf(ext.toLowerCase()) === -1)) {
                      _context3.next = 14;
                      break;
                    }

                    this.fileSize = null;
                    this.busy = false;
                    this.schema.maxSize && +this.schema.maxSize < +files[0].size / 1024 / 1024 ? this.control.setErrors({
                      maxSize: true
                    }) : this.control.setErrors({
                      invalidFormat: true
                    });
                    this.control.markAsTouched();
                    return _context3.abrupt("return");

                  case 14:
                    this.busy = true;
                    this.file = files[0];
                    this.fileSize = null;
                    this.selectFile = true;

                    if (['png', 'jpeg', 'jpg', 'jpeg', 'gif'].indexOf(ext.toLowerCase()) !== -1) {
                      this.compressFile(file.toString(), +files[0].size / 1024 / 1024).then(
                      /**
                      * @param {?} res
                      * @return {?}
                      */
                      function (res) {
                        _this30.getImageFromUrl(res);

                        _this30.photoData = res;
                        _this30.busy = false;

                        _this30.control.setValue(_this30.photoData);
                      },
                      /**
                      * @param {?} err
                      * @return {?}
                      */
                      function (err) {
                        _this30.fileSize = null;
                        _this30.busy = false;

                        _this30.control.setErrors({
                          invalid: true
                        });

                        _this30.control.markAsTouched();

                        _this30.busy = false;
                      })["catch"](
                      /**
                      * @param {?} err
                      * @return {?}
                      */
                      function (err) {
                        _this30.fileSize = null;
                        _this30.busy = false;

                        _this30.control.setErrors({
                          invalid: true
                        });

                        _this30.control.markAsTouched();

                        _this30.busy = false;
                      });
                    } else {
                      this.photoData = file.toString();
                      this.getImageFromUrl(file.toString());
                      this.busy = false;
                      this.control.setValue(this.photoData);
                    }

                  case 19:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return TruUiPhotoComponent;
    }(CommonComponent);

    TruUiPhotoComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-tru-ui-photo',
        template: "<label [attr.class]=\"schema.key\" [ngClass]=\"{'required': isRequired()}\" style=\"margin-bottom: 6px;\">\n    <span class=\"tru-ui-lable\" [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n</label>\n<div class=\"tru-form-group\" jfDragAndDrop (filesDropped)=\"handleDrop($event);fileInput.value = null\">\n  \n    <label [ngClass]=\"{'d-none': getControlValue().length > 0}\"  style=\"margin-bottom: 0 !important;\">\n      <div class=\"tru-drag-and-drop\" [ngClass]=\"{'invalid-upload': control.invalid && (control.touched || control.dirty), 'busy': busy}\">\n        <span *ngIf=\"language === 'en'; else french\">Drop your file here or <strong class=\"primary-color browse-btn\">Browse</strong></span>\n        <ng-template #french><span>D\xE9posez votre fichier ici ou <strong class=\"primary-color browse-btn\">naviguez</strong></span></ng-template>\n        <div style=\"line-height: 1;font-size: 12px;\"> <small *ngIf=\"schema.maxSize\" style=\"color: #bfbfbf\">Maximum {{schema.maxSize}} MB<span *ngIf=\"schema.imageFormat\">, </span></small> <small *ngIf=\"schema.imageFormat\" style=\"color: #bfbfbf\"> {{getLanguage()?.allowed_format}}  <span *ngFor=\"let format of schema.imageFormat\"> {{ format }} </span></small></div>\n      </div>\n    <input #fileInput\n      style=\"display: none\" class=\"tru-input\" type=\"file\" (change)=\"dragAndDrop($event)\"  />\n    </label>\n    <div class=\"file-preview-container\"  [ngClass]=\"{'d-none': !getControlValue().length}\">\n      <div style=\"max-width: 165px;text-overflow: ellipsis;overflow: hidden;display: block;\"><small >{{file?.name || title()}}</small></div>\n      <div>\n        <!-- <small style=\"color: #212121;font-size: 12px\" *ngIf=\"file && file.size\" >{{shortenSize(file?.size/1024/1024)}} MB</small> -->\n        <small style=\"color: #212121;font-size: 12px\" *ngIf=\"fileSize\" > {{shortenSize(fileSize/1024/1024)}} MB</small>\n        <button class=\"btn-remove\" style=\"cursor: pointer\" type=\"button\" (click)=\"resetUpload();fileInput.value = null\">\n            <svg width=\"12px\" height=\"12px\" viewBox=\"0 0 12 12\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <g id=\"Full-Admin\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                    <g id=\"My-Documents-listing-add-sidebar-Progress\" transform=\"translate(-1402.000000, -196.000000)\" fill=\"#FFFFFF\" fill-rule=\"nonzero\">\n                        <g id=\"Group-32\" transform=\"translate(1140.000000, 60.000000)\">\n                            <g id=\"Group-27\">\n                                <g id=\"Group-26\">\n                                    <g id=\"Group-11\" transform=\"translate(20.000000, 130.000000)\">\n                                        <g id=\"Group-10\">\n                                            <g id=\"Group-21\" transform=\"translate(1.000000, 0.000000)\">\n                                                <g id=\"Group-33\">\n                                                    <g id=\"Group-24\">\n                                                        <g id=\"Group-7-Copy\" transform=\"translate(235.000000, 0.000000)\">\n                                                            <g id=\"Group-13\">\n                                                                <path d=\"M6.75,7.96875 L6.75,7.3125 C6.75,7.00078125 7.0186942,6.75 7.35267857,6.75 L10.1651786,6.75 L10.4012277,6.31171875 C10.5016741,6.11953125 10.7101004,6 10.9386161,6 L13.8088728,6 C14.0373884,6 14.2458147,6.11953125 14.3487723,6.31171875 L14.5848214,6.75 L17.3973214,6.75 C17.7313058,6.75 18,7.00078125 18,7.3125 L18,7.96875 C18,8.1234375 17.8643973,8.25 17.6986607,8.25 L7.05133929,8.25 C6.88560268,8.25 6.75,8.1234375 6.75,7.96875 Z M17.1964286,9.28125 L17.1964286,16.875 C17.1964286,17.4960938 16.656529,18 15.9910714,18 L8.75892857,18 C8.09347098,18 7.55357143,17.4960938 7.55357143,16.875 L7.55357143,9.28125 C7.55357143,9.1265625 7.68917411,9 7.85491071,9 L16.8950893,9 C17.0608259,9 17.1964286,9.1265625 17.1964286,9.28125 Z M10.3660714,10.875 C10.3660714,10.66875 10.1852679,10.5 9.96428571,10.5 C9.74330357,10.5 9.5625,10.66875 9.5625,10.875 L9.5625,16.125 C9.5625,16.33125 9.74330357,16.5 9.96428571,16.5 C10.1852679,16.5 10.3660714,16.33125 10.3660714,16.125 L10.3660714,10.875 Z M12.7767857,10.875 C12.7767857,10.66875 12.5959821,10.5 12.375,10.5 C12.1540179,10.5 11.9732143,10.66875 11.9732143,10.875 L11.9732143,16.125 C11.9732143,16.33125 12.1540179,16.5 12.375,16.5 C12.5959821,16.5 12.7767857,16.33125 12.7767857,16.125 L12.7767857,10.875 Z M15.1875,10.875 C15.1875,10.66875 15.0066964,10.5 14.7857143,10.5 C14.5647321,10.5 14.3839286,10.66875 14.3839286,10.875 L14.3839286,16.125 C14.3839286,16.33125 14.5647321,16.5 14.7857143,16.5 C15.0066964,16.5 15.1875,16.33125 15.1875,16.125 L15.1875,10.875 Z\" id=\"trash-alt\"></path>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </svg>        \n         </button>\n      </div>\n    </div>\n  </div>\n  <jf-tru-ui-error [control]=\"control\" [language]=\"language || 'en'\"></jf-tru-ui-error>",
        styles: [".tru-ui-lable{font-size:14px;color:#8c8c8c;margin-bottom:6px;padding:0}.tru-drag-and-drop{text-align:center;padding:30px!important;background-color:#fafafa;border:1px dashed #bfbfbf;border-radius:6px}.tru-drag-and-drop>span{font-size:12px;color:#bfbfbf}.browse-btn:hover{cursor:pointer;text-decoration:underline}.tru-form-actions{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;margin-top:30px;margin-left:23px}.file-preview-container{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.reset-btn{width:24px;height:24px;margin-left:3px;border-radius:3px;border-style:none}.d-none{display:none}.btn-remove{background-color:#f75757;width:24px;height:24px;margin-left:3px;border-radius:3px;border-style:none}.invalid-upload{border-color:#f75757!important}.tru-drag-and-drop.busy{min-width:200px;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:linear-gradient(to right,#d8d8de 8%,#f1f1f1 38%,#d8d8de 54%);background-size:1000px 640px;position:relative}.tru-drag-and-drop.busy>*{opacity:0}@-webkit-keyframes placeHolderShimmer{0%{background-position:-468px 0}100%{background-position:468px 0}}@keyframes placeHolderShimmer{0%{background-position:-468px 0}100%{background-position:468px 0}}"]
      }]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/textarea/tru-ui-textarea/tru-ui-textarea.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TruUiTextareaComponent = /*#__PURE__*/function (_CommonComponent37) {
      _inherits(TruUiTextareaComponent, _CommonComponent37);

      var _super46 = _createSuper(TruUiTextareaComponent);

      function TruUiTextareaComponent() {
        var _this31;

        _classCallCheck(this, TruUiTextareaComponent);

        _this31 = _super46.apply(this, arguments);
        _this31.randomSuffix = Math.random().toString(36).substring(7);
        return _this31;
      }
      /**
       * @param {?} i
       * @param {?} val
       * @return {?}
       */


      _createClass(TruUiTextareaComponent, [{
        key: "getId",
        value: function getId(i, val) {
          return "".concat(i, "-").concat(val.toString().replace(/[\W_]+/g, ''), "+").concat(this.randomSuffix);
        }
        /**
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "getName",
        value: function getName(key) {
          return "".concat(key, "-").concat(this.randomSuffix);
        }
      }]);

      return TruUiTextareaComponent;
    }(CommonComponent);

    TruUiTextareaComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-tru-ui-textarea',
        template: "<div class=\"tru-ui-input-container\">\n<label class=\"tru-ui-label\"\n[ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n<span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n</label>\n<button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n<textarea\nclass=\"tru-ui-input-control\"\n[name]=\"schema.key\"\n[formControl]=\"control\"\n[attr.maxLength]=\"schema.maxLength || null\"\n[attr.minLength]=\"schema.minLength || null\"\n[attr.disabled]=\"disabled\"\n[ngClass]=\"{'empty': control.value === '' && !isRequired()}\"\n></textarea>\n<jf-tru-ui-error [control]=\"control\" [language]=\"language || 'en'\"></jf-tru-ui-error>\n</div>",
        styles: [".tru-ui-label{font-size:14px;color:#8c8c8c;margin-bottom:6px;padding:0}.tru-ui-input-container{margin-bottom:8px;position:relative}.tru-ui-input-control.empty{border-color:#d8d8d8!important}.tru-ui-input-control{height:32px;padding:6px;width:100%;font-size:12px;background-color:#fff;border:1px solid #d8d8d8;border-radius:6px;color:#959595!important}.tru-ui-input-control:focus{outline:0!important}::ng-deep .ng-invalid.ng-touched{border-color:#f75a5a!important}textarea.tru-ui-input-control{height:120px}.tru-ui-date{background-position:calc(100% - 6px);background-repeat:no-repeat;background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='14px' height='16px' viewBox='0 0 14 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Full-Admin' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='All-form-inputs' transform='translate(-870.000000, -1088.000000)' fill='%238C8C8C' fill-rule='nonzero'%3E%3Cg id='Group-44-Copy' transform='translate(631.000000, 1056.000000)'%3E%3Cg id='Group-31' transform='translate(0.000000, 24.000000)'%3E%3Cpath d='M252.625,13 L239.375,13 C239.16875,13 239,12.83125 239,12.625 L239,11.5 C239,10.671875 239.671875,10 240.5,10 L242,10 L242,8.375 C242,8.16875 242.16875,8 242.375,8 L243.625,8 C243.83125,8 244,8.16875 244,8.375 L244,10 L248,10 L248,8.375 C248,8.16875 248.16875,8 248.375,8 L249.625,8 C249.83125,8 250,8.16875 250,8.375 L250,10 L251.5,10 C252.328125,10 253,10.671875 253,11.5 L253,12.625 C253,12.83125 252.83125,13 252.625,13 Z M239.375,14 L252.625,14 C252.83125,14 253,14.16875 253,14.375 L253,22.5 C253,23.328125 252.328125,24 251.5,24 L240.5,24 C239.671875,24 239,23.328125 239,22.5 L239,14.375 C239,14.16875 239.16875,14 239.375,14 Z M243,20.375 C243,20.16875 242.83125,20 242.625,20 L241.375,20 C241.16875,20 241,20.16875 241,20.375 L241,21.625 C241,21.83125 241.16875,22 241.375,22 L242.625,22 C242.83125,22 243,21.83125 243,21.625 L243,20.375 Z M243,16.375 C243,16.16875 242.83125,16 242.625,16 L241.375,16 C241.16875,16 241,16.16875 241,16.375 L241,17.625 C241,17.83125 241.16875,18 241.375,18 L242.625,18 C242.83125,18 243,17.83125 243,17.625 L243,16.375 Z M247,20.375 C247,20.16875 246.83125,20 246.625,20 L245.375,20 C245.16875,20 245,20.16875 245,20.375 L245,21.625 C245,21.83125 245.16875,22 245.375,22 L246.625,22 C246.83125,22 247,21.83125 247,21.625 L247,20.375 Z M247,16.375 C247,16.16875 246.83125,16 246.625,16 L245.375,16 C245.16875,16 245,16.16875 245,16.375 L245,17.625 C245,17.83125 245.16875,18 245.375,18 L246.625,18 C246.83125,18 247,17.83125 247,17.625 L247,16.375 Z M251,20.375 C251,20.16875 250.83125,20 250.625,20 L249.375,20 C249.16875,20 249,20.16875 249,20.375 L249,21.625 C249,21.83125 249.16875,22 249.375,22 L250.625,22 C250.83125,22 251,21.83125 251,21.625 L251,20.375 Z M251,16.375 C251,16.16875 250.83125,16 250.625,16 L249.375,16 C249.16875,16 249,16.16875 249,16.375 L249,17.625 C249,17.83125 249.16875,18 249.375,18 L250.625,18 C250.83125,18 251,17.83125 251,17.625 L251,16.375 Z' id='calendar-alt'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}.tru-ui-select{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 129 129' enable-background='new 0 0 129 129' width='512px' height='512px'%3E%3Cg%3E%3Cpath d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='%23959595'/%3E%3C/g%3E%3C/svg%3E%0A\");background-position:calc(100% - 6px);background-repeat:no-repeat;-moz-appearance:none;-webkit-appearance:none;appearance:none;background-size:14px}.tru-ui-number{-moz-appearance:none;-webkit-appearance:none;appearance:none}.container,.container-radio-button{display:block;position:relative;padding-left:18px;margin-bottom:12px;cursor:pointer;font-size:14px;margin-top:12px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container input,.container-radio-button input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{position:absolute;top:3px;left:0;height:15px;width:15px;background-color:#fff;border-radius:3px;border:1px solid rgba(0,0,0,.3)}.container:hover input~.checkmark{background-color:#fff;border-radius:3px;border:1px solid rgba(0,0,0,.3)}.container-radio-button input~.checkmark{border-radius:50%;background-color:#fff;border:1px solid rgba(0,0,0,.3)}.container input:checked~.checkmark,.container-radio-button input:checked~.checkmark{background-color:#2196f3}.checkmark:after{content:\"\";position:absolute;display:none}.container input:checked~.checkmark:after,.container-radio-button input:checked~.checkmark:after{display:block}.container .checkmark:after{left:4px;top:1px;width:5px;height:10px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}.container-radio-button .checkmark:after{border-radius:50%;width:7px;height:7px;top:3px;background-color:#fff;left:3px}::ng-deep typeahead-container{background-color:#fff;border-radius:6px;width:100%;box-shadow:10px 10px 20px 0 rgba(30,30,30,.05)}::ng-deep .dropdown-menu{list-style:none;padding:0;width:100%}::ng-deep .dropdown-menu li a{text-decoration:none;font-size:14px;color:#8c8c8c;display:block;width:100%}::ng-deep .dropdown-menu li{padding:4px 6px}::ng-deep .dropdown-menu li:hover{background-color:rgba(0,0,0,.05)}.dropdown-menu>li>a>span>strong,::ng-deep .dropdown-menu>li>a>span>strong{color:#b7d581!important}"]
      }]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/boolean/tru-ui-boolean/tru-ui-boolean.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TruUiBooleanComponent = /*#__PURE__*/function (_CommonComponent38) {
      _inherits(TruUiBooleanComponent, _CommonComponent38);

      var _super47 = _createSuper(TruUiBooleanComponent);

      function TruUiBooleanComponent() {
        _classCallCheck(this, TruUiBooleanComponent);

        return _super47.apply(this, arguments);
      }

      return TruUiBooleanComponent;
    }(CommonComponent);

    TruUiBooleanComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-tru-ui-boolean',
        template: "<div class=\"tru-ui-input-container\">\n  <div [class]=\"getClass('checkbox-group')\">\n    <label class=\"container\">\n      <span  class=\"tru-ui-label\"  [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n      <input \n      [id]=\"schema.key\"\n      [name]=\"schema.key\"\n      type=\"checkbox\"\n      [formControl]=\"control\"\n      [attr.disabled]=\"disabled\">\n      <span class=\"checkmark\"></span>\n    </label>\n  </div>\n  <jf-tru-ui-error [control]=\"control\" [language]=\"language || 'en'\"></jf-tru-ui-error>\n\n  </div>",
        styles: [".tru-ui-label{font-size:14px;color:#8c8c8c;margin-bottom:6px;padding:0}.tru-ui-input-container{margin-bottom:8px;position:relative}.tru-ui-input-control.empty{border-color:#d8d8d8!important}.tru-ui-input-control{height:32px;padding:6px;width:100%;font-size:12px;background-color:#fff;border:1px solid #d8d8d8;border-radius:6px;color:#959595!important}.tru-ui-input-control:focus{outline:0!important}::ng-deep .ng-invalid.ng-touched{border-color:#f75a5a!important}textarea.tru-ui-input-control{height:120px}.tru-ui-date{background-position:calc(100% - 6px);background-repeat:no-repeat;background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='14px' height='16px' viewBox='0 0 14 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Full-Admin' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='All-form-inputs' transform='translate(-870.000000, -1088.000000)' fill='%238C8C8C' fill-rule='nonzero'%3E%3Cg id='Group-44-Copy' transform='translate(631.000000, 1056.000000)'%3E%3Cg id='Group-31' transform='translate(0.000000, 24.000000)'%3E%3Cpath d='M252.625,13 L239.375,13 C239.16875,13 239,12.83125 239,12.625 L239,11.5 C239,10.671875 239.671875,10 240.5,10 L242,10 L242,8.375 C242,8.16875 242.16875,8 242.375,8 L243.625,8 C243.83125,8 244,8.16875 244,8.375 L244,10 L248,10 L248,8.375 C248,8.16875 248.16875,8 248.375,8 L249.625,8 C249.83125,8 250,8.16875 250,8.375 L250,10 L251.5,10 C252.328125,10 253,10.671875 253,11.5 L253,12.625 C253,12.83125 252.83125,13 252.625,13 Z M239.375,14 L252.625,14 C252.83125,14 253,14.16875 253,14.375 L253,22.5 C253,23.328125 252.328125,24 251.5,24 L240.5,24 C239.671875,24 239,23.328125 239,22.5 L239,14.375 C239,14.16875 239.16875,14 239.375,14 Z M243,20.375 C243,20.16875 242.83125,20 242.625,20 L241.375,20 C241.16875,20 241,20.16875 241,20.375 L241,21.625 C241,21.83125 241.16875,22 241.375,22 L242.625,22 C242.83125,22 243,21.83125 243,21.625 L243,20.375 Z M243,16.375 C243,16.16875 242.83125,16 242.625,16 L241.375,16 C241.16875,16 241,16.16875 241,16.375 L241,17.625 C241,17.83125 241.16875,18 241.375,18 L242.625,18 C242.83125,18 243,17.83125 243,17.625 L243,16.375 Z M247,20.375 C247,20.16875 246.83125,20 246.625,20 L245.375,20 C245.16875,20 245,20.16875 245,20.375 L245,21.625 C245,21.83125 245.16875,22 245.375,22 L246.625,22 C246.83125,22 247,21.83125 247,21.625 L247,20.375 Z M247,16.375 C247,16.16875 246.83125,16 246.625,16 L245.375,16 C245.16875,16 245,16.16875 245,16.375 L245,17.625 C245,17.83125 245.16875,18 245.375,18 L246.625,18 C246.83125,18 247,17.83125 247,17.625 L247,16.375 Z M251,20.375 C251,20.16875 250.83125,20 250.625,20 L249.375,20 C249.16875,20 249,20.16875 249,20.375 L249,21.625 C249,21.83125 249.16875,22 249.375,22 L250.625,22 C250.83125,22 251,21.83125 251,21.625 L251,20.375 Z M251,16.375 C251,16.16875 250.83125,16 250.625,16 L249.375,16 C249.16875,16 249,16.16875 249,16.375 L249,17.625 C249,17.83125 249.16875,18 249.375,18 L250.625,18 C250.83125,18 251,17.83125 251,17.625 L251,16.375 Z' id='calendar-alt'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}.tru-ui-select{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 129 129' enable-background='new 0 0 129 129' width='512px' height='512px'%3E%3Cg%3E%3Cpath d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='%23959595'/%3E%3C/g%3E%3C/svg%3E%0A\");background-position:calc(100% - 6px);background-repeat:no-repeat;-moz-appearance:none;-webkit-appearance:none;appearance:none;background-size:14px}.tru-ui-number{-moz-appearance:none;-webkit-appearance:none;appearance:none}.container,.container-radio-button{display:block;position:relative;padding-left:18px;margin-bottom:12px;cursor:pointer;font-size:14px;margin-top:12px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container input,.container-radio-button input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{position:absolute;top:3px;left:0;height:15px;width:15px;background-color:#fff;border-radius:3px;border:1px solid rgba(0,0,0,.3)}.container:hover input~.checkmark{background-color:#fff;border-radius:3px;border:1px solid rgba(0,0,0,.3)}.container-radio-button input~.checkmark{border-radius:50%;background-color:#fff;border:1px solid rgba(0,0,0,.3)}.container input:checked~.checkmark,.container-radio-button input:checked~.checkmark{background-color:#2196f3}.checkmark:after{content:\"\";position:absolute;display:none}.container input:checked~.checkmark:after,.container-radio-button input:checked~.checkmark:after{display:block}.container .checkmark:after{left:4px;top:1px;width:5px;height:10px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}.container-radio-button .checkmark:after{border-radius:50%;width:7px;height:7px;top:3px;background-color:#fff;left:3px}::ng-deep typeahead-container{background-color:#fff;border-radius:6px;width:100%;box-shadow:10px 10px 20px 0 rgba(30,30,30,.05)}::ng-deep .dropdown-menu{list-style:none;padding:0;width:100%}::ng-deep .dropdown-menu li a{text-decoration:none;font-size:14px;color:#8c8c8c;display:block;width:100%}::ng-deep .dropdown-menu li{padding:4px 6px}::ng-deep .dropdown-menu li:hover{background-color:rgba(0,0,0,.05)}.dropdown-menu>li>a>span>strong,::ng-deep .dropdown-menu>li>a>span>strong{color:#b7d581!important}"]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/date/tru-ui-date/tru-ui-date.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var TruUiDateComponent = /*#__PURE__*/function (_CommonComponent39) {
      _inherits(TruUiDateComponent, _CommonComponent39);

      var _super48 = _createSuper(TruUiDateComponent);

      function TruUiDateComponent() {
        _classCallCheck(this, TruUiDateComponent);

        return _super48.apply(this, arguments);
      }

      _createClass(TruUiDateComponent, [{
        key: "isMobile",

        /**
         * @return {?}
         */
        value: function isMobile() {
          return window.innerWidth <= 800;
        }
        /**
         * @return {?}
         */

      }, {
        key: "minDate",
        value: function minDate() {
          return isNaN(new Date(this.schema.minimum).getDate()) ? null : new Date(this.schema.minimum);
        }
        /**
         * @return {?}
         */

      }, {
        key: "maxDate",
        value: function maxDate() {
          return isNaN(new Date(this.schema.maximum).getDate()) ? null : new Date(this.schema.maximum);
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "onDateInput",
        value: function onDateInput(e) {
          /** @type {?} */
          var date = Object(moment__WEBPACK_IMPORTED_MODULE_3__["utc"])(e).format('YYYY-MM-DD');

          if (e && date !== this.oldValue) {
            /** @type {?} */
            var newDate = new Date("".concat(Object(moment__WEBPACK_IMPORTED_MODULE_3__["utc"])(e).format('YYYY-MM-DD'), "T00:00:00.000Z"));
            this.oldValue = Object(moment__WEBPACK_IMPORTED_MODULE_3__["utc"])(e).format('YYYY-MM-DD');
            this.control.setValue(newDate);
          }
        }
      }]);

      return TruUiDateComponent;
    }(CommonComponent);

    TruUiDateComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-tru-ui-date',
        template: "<div class=\"tru-ui-input-container\">\n<label class=\"tru-ui-label\" [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n    <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n  </label>\n  <input\n    *ngIf=\"isWebView; else desktop\"\n    type=\"text\"\n    class=\"tru-ui-input-control tru-ui-date\"\n    [name]=\"schema.key\"\n    (bsValueChange)=\"onDateInput($event)\"\n    [formControl]=\"control\"\n    [bsConfig]=\"{ containerClass: 'theme-default', dateInputFormat: 'DD/MM/YYYY', showWeekNumbers: false }\"\n    bsDatepicker\n    readonly\n    #dp=\"bsDatepicker\"\n    readonly=\"readonly\"\n    placement=\"bottom\"\n    (hover)=\"dp.show()\"\n    [attr.disabled]=\"disabled\"\n  />\n  <ng-template #desktop>\n    <input\n    type=\"text\"\n    class=\"tru-ui-input-control tru-ui-date\"\n    [name]=\"schema.key\"\n    (bsValueChange)=\"onDateInput($event)\"\n    [formControl]=\"control\"\n    [bsConfig]=\"{ containerClass: 'theme-default', dateInputFormat: 'DD/MM/YYYY', showWeekNumbers: false }\"\n    bsDatepicker\n    readonly\n    readonly=\"readonly\"\n    placement=\"bottom\"\n    triggers=\"click\"\n    [attr.disabled]=\"disabled\"\n    /> \n   </ng-template>\n  <jf-tru-ui-error [control]=\"control\" [language]=\"language || 'en'\"></jf-tru-ui-error>\n\n</div>",
        providers: [{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"],
          useClass: MomentUtcDateAdapter
        }],
        styles: [".tru-ui-label{font-size:14px;color:#8c8c8c;margin-bottom:6px;padding:0}.tru-ui-input-container{margin-bottom:8px;position:relative}.tru-ui-input-control.empty{border-color:#d8d8d8!important}.tru-ui-input-control{height:32px;padding:6px;width:100%;font-size:12px;background-color:#fff;border:1px solid #d8d8d8;border-radius:6px;color:#959595!important}.tru-ui-input-control:focus{outline:0!important}::ng-deep .ng-invalid.ng-touched{border-color:#f75a5a!important}textarea.tru-ui-input-control{height:120px}.tru-ui-date{background-position:calc(100% - 6px);background-repeat:no-repeat;background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='14px' height='16px' viewBox='0 0 14 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Full-Admin' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='All-form-inputs' transform='translate(-870.000000, -1088.000000)' fill='%238C8C8C' fill-rule='nonzero'%3E%3Cg id='Group-44-Copy' transform='translate(631.000000, 1056.000000)'%3E%3Cg id='Group-31' transform='translate(0.000000, 24.000000)'%3E%3Cpath d='M252.625,13 L239.375,13 C239.16875,13 239,12.83125 239,12.625 L239,11.5 C239,10.671875 239.671875,10 240.5,10 L242,10 L242,8.375 C242,8.16875 242.16875,8 242.375,8 L243.625,8 C243.83125,8 244,8.16875 244,8.375 L244,10 L248,10 L248,8.375 C248,8.16875 248.16875,8 248.375,8 L249.625,8 C249.83125,8 250,8.16875 250,8.375 L250,10 L251.5,10 C252.328125,10 253,10.671875 253,11.5 L253,12.625 C253,12.83125 252.83125,13 252.625,13 Z M239.375,14 L252.625,14 C252.83125,14 253,14.16875 253,14.375 L253,22.5 C253,23.328125 252.328125,24 251.5,24 L240.5,24 C239.671875,24 239,23.328125 239,22.5 L239,14.375 C239,14.16875 239.16875,14 239.375,14 Z M243,20.375 C243,20.16875 242.83125,20 242.625,20 L241.375,20 C241.16875,20 241,20.16875 241,20.375 L241,21.625 C241,21.83125 241.16875,22 241.375,22 L242.625,22 C242.83125,22 243,21.83125 243,21.625 L243,20.375 Z M243,16.375 C243,16.16875 242.83125,16 242.625,16 L241.375,16 C241.16875,16 241,16.16875 241,16.375 L241,17.625 C241,17.83125 241.16875,18 241.375,18 L242.625,18 C242.83125,18 243,17.83125 243,17.625 L243,16.375 Z M247,20.375 C247,20.16875 246.83125,20 246.625,20 L245.375,20 C245.16875,20 245,20.16875 245,20.375 L245,21.625 C245,21.83125 245.16875,22 245.375,22 L246.625,22 C246.83125,22 247,21.83125 247,21.625 L247,20.375 Z M247,16.375 C247,16.16875 246.83125,16 246.625,16 L245.375,16 C245.16875,16 245,16.16875 245,16.375 L245,17.625 C245,17.83125 245.16875,18 245.375,18 L246.625,18 C246.83125,18 247,17.83125 247,17.625 L247,16.375 Z M251,20.375 C251,20.16875 250.83125,20 250.625,20 L249.375,20 C249.16875,20 249,20.16875 249,20.375 L249,21.625 C249,21.83125 249.16875,22 249.375,22 L250.625,22 C250.83125,22 251,21.83125 251,21.625 L251,20.375 Z M251,16.375 C251,16.16875 250.83125,16 250.625,16 L249.375,16 C249.16875,16 249,16.16875 249,16.375 L249,17.625 C249,17.83125 249.16875,18 249.375,18 L250.625,18 C250.83125,18 251,17.83125 251,17.625 L251,16.375 Z' id='calendar-alt'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}.tru-ui-select{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 129 129' enable-background='new 0 0 129 129' width='512px' height='512px'%3E%3Cg%3E%3Cpath d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='%23959595'/%3E%3C/g%3E%3C/svg%3E%0A\");background-position:calc(100% - 6px);background-repeat:no-repeat;-moz-appearance:none;-webkit-appearance:none;appearance:none;background-size:14px}.tru-ui-number{-moz-appearance:none;-webkit-appearance:none;appearance:none}.container,.container-radio-button{display:block;position:relative;padding-left:18px;margin-bottom:12px;cursor:pointer;font-size:14px;margin-top:12px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container input,.container-radio-button input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{position:absolute;top:3px;left:0;height:15px;width:15px;background-color:#fff;border-radius:3px;border:1px solid rgba(0,0,0,.3)}.container:hover input~.checkmark{background-color:#fff;border-radius:3px;border:1px solid rgba(0,0,0,.3)}.container-radio-button input~.checkmark{border-radius:50%;background-color:#fff;border:1px solid rgba(0,0,0,.3)}.container input:checked~.checkmark,.container-radio-button input:checked~.checkmark{background-color:#2196f3}.checkmark:after{content:\"\";position:absolute;display:none}.container input:checked~.checkmark:after,.container-radio-button input:checked~.checkmark:after{display:block}.container .checkmark:after{left:4px;top:1px;width:5px;height:10px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}.container-radio-button .checkmark:after{border-radius:50%;width:7px;height:7px;top:3px;background-color:#fff;left:3px}::ng-deep typeahead-container{background-color:#fff;border-radius:6px;width:100%;box-shadow:10px 10px 20px 0 rgba(30,30,30,.05)}::ng-deep .dropdown-menu{list-style:none;padding:0;width:100%}::ng-deep .dropdown-menu li a{text-decoration:none;font-size:14px;color:#8c8c8c;display:block;width:100%}::ng-deep .dropdown-menu li{padding:4px 6px}::ng-deep .dropdown-menu li:hover{background-color:rgba(0,0,0,.05)}.dropdown-menu>li>a>span>strong,::ng-deep .dropdown-menu>li>a>span>strong{color:#b7d581!important}"]
      }]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/select/tru-ui-select/tru-ui-select.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TruUiSelectComponent = /*#__PURE__*/function (_CommonComponent40) {
      _inherits(TruUiSelectComponent, _CommonComponent40);

      var _super49 = _createSuper(TruUiSelectComponent);

      function TruUiSelectComponent() {
        _classCallCheck(this, TruUiSelectComponent);

        return _super49.apply(this, arguments);
      }

      return TruUiSelectComponent;
    }(CommonComponent);

    TruUiSelectComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-tru-ui-select',
        template: "<div class=\"tru-ui-input-container\">\n    <label class=\"tru-ui-label\"\n      [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n      <span class=\"tru-ui-label\" [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <button type=\"button\" *ngIf=\"schema.description\" [attr.class]=\"'info'\" [attr.title]=\"schema.description\">Info</button>\n    <select\n      class=\"tru-ui-input-control tru-ui-select\"\n      [attr.name]=\"schema.key\"\n      [formControl]=\"control\"\n      [attr.disabled]=\"disabled\"\n    >\n      <option value=\"\" [selected]=\"control.value === ''\" [disabled]=\"true\">\n        {{placeholder()}}\n      </option>\n      <option\n        *ngFor=\"let en of schema.enum; let i = index\"\n        [selected]=\"control.value === en\"\n        [ngValue]=\"en\">\n        {{enumNames(i)}}\n      </option>\n    </select> \n  <jf-tru-ui-error [control]=\"control\" [language]=\"language || 'en'\"></jf-tru-ui-error>\n</div>\n",
        styles: [".tru-ui-label{font-size:14px;color:#8c8c8c;margin-bottom:6px;padding:0}.tru-ui-input-container{margin-bottom:8px;position:relative}.tru-ui-input-control.empty{border-color:#d8d8d8!important}.tru-ui-input-control{height:32px;padding:6px;width:100%;font-size:12px;background-color:#fff;border:1px solid #d8d8d8;border-radius:6px;color:#959595!important}.tru-ui-input-control:focus{outline:0!important}::ng-deep .ng-invalid.ng-touched{border-color:#f75a5a!important}textarea.tru-ui-input-control{height:120px}.tru-ui-date{background-position:calc(100% - 6px);background-repeat:no-repeat;background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='14px' height='16px' viewBox='0 0 14 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Full-Admin' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='All-form-inputs' transform='translate(-870.000000, -1088.000000)' fill='%238C8C8C' fill-rule='nonzero'%3E%3Cg id='Group-44-Copy' transform='translate(631.000000, 1056.000000)'%3E%3Cg id='Group-31' transform='translate(0.000000, 24.000000)'%3E%3Cpath d='M252.625,13 L239.375,13 C239.16875,13 239,12.83125 239,12.625 L239,11.5 C239,10.671875 239.671875,10 240.5,10 L242,10 L242,8.375 C242,8.16875 242.16875,8 242.375,8 L243.625,8 C243.83125,8 244,8.16875 244,8.375 L244,10 L248,10 L248,8.375 C248,8.16875 248.16875,8 248.375,8 L249.625,8 C249.83125,8 250,8.16875 250,8.375 L250,10 L251.5,10 C252.328125,10 253,10.671875 253,11.5 L253,12.625 C253,12.83125 252.83125,13 252.625,13 Z M239.375,14 L252.625,14 C252.83125,14 253,14.16875 253,14.375 L253,22.5 C253,23.328125 252.328125,24 251.5,24 L240.5,24 C239.671875,24 239,23.328125 239,22.5 L239,14.375 C239,14.16875 239.16875,14 239.375,14 Z M243,20.375 C243,20.16875 242.83125,20 242.625,20 L241.375,20 C241.16875,20 241,20.16875 241,20.375 L241,21.625 C241,21.83125 241.16875,22 241.375,22 L242.625,22 C242.83125,22 243,21.83125 243,21.625 L243,20.375 Z M243,16.375 C243,16.16875 242.83125,16 242.625,16 L241.375,16 C241.16875,16 241,16.16875 241,16.375 L241,17.625 C241,17.83125 241.16875,18 241.375,18 L242.625,18 C242.83125,18 243,17.83125 243,17.625 L243,16.375 Z M247,20.375 C247,20.16875 246.83125,20 246.625,20 L245.375,20 C245.16875,20 245,20.16875 245,20.375 L245,21.625 C245,21.83125 245.16875,22 245.375,22 L246.625,22 C246.83125,22 247,21.83125 247,21.625 L247,20.375 Z M247,16.375 C247,16.16875 246.83125,16 246.625,16 L245.375,16 C245.16875,16 245,16.16875 245,16.375 L245,17.625 C245,17.83125 245.16875,18 245.375,18 L246.625,18 C246.83125,18 247,17.83125 247,17.625 L247,16.375 Z M251,20.375 C251,20.16875 250.83125,20 250.625,20 L249.375,20 C249.16875,20 249,20.16875 249,20.375 L249,21.625 C249,21.83125 249.16875,22 249.375,22 L250.625,22 C250.83125,22 251,21.83125 251,21.625 L251,20.375 Z M251,16.375 C251,16.16875 250.83125,16 250.625,16 L249.375,16 C249.16875,16 249,16.16875 249,16.375 L249,17.625 C249,17.83125 249.16875,18 249.375,18 L250.625,18 C250.83125,18 251,17.83125 251,17.625 L251,16.375 Z' id='calendar-alt'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}.tru-ui-select{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 129 129' enable-background='new 0 0 129 129' width='512px' height='512px'%3E%3Cg%3E%3Cpath d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='%23959595'/%3E%3C/g%3E%3C/svg%3E%0A\");background-position:calc(100% - 6px);background-repeat:no-repeat;-moz-appearance:none;-webkit-appearance:none;appearance:none;background-size:14px}.tru-ui-number{-moz-appearance:none;-webkit-appearance:none;appearance:none}.container,.container-radio-button{display:block;position:relative;padding-left:18px;margin-bottom:12px;cursor:pointer;font-size:14px;margin-top:12px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container input,.container-radio-button input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{position:absolute;top:3px;left:0;height:15px;width:15px;background-color:#fff;border-radius:3px;border:1px solid rgba(0,0,0,.3)}.container:hover input~.checkmark{background-color:#fff;border-radius:3px;border:1px solid rgba(0,0,0,.3)}.container-radio-button input~.checkmark{border-radius:50%;background-color:#fff;border:1px solid rgba(0,0,0,.3)}.container input:checked~.checkmark,.container-radio-button input:checked~.checkmark{background-color:#2196f3}.checkmark:after{content:\"\";position:absolute;display:none}.container input:checked~.checkmark:after,.container-radio-button input:checked~.checkmark:after{display:block}.container .checkmark:after{left:4px;top:1px;width:5px;height:10px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}.container-radio-button .checkmark:after{border-radius:50%;width:7px;height:7px;top:3px;background-color:#fff;left:3px}::ng-deep typeahead-container{background-color:#fff;border-radius:6px;width:100%;box-shadow:10px 10px 20px 0 rgba(30,30,30,.05)}::ng-deep .dropdown-menu{list-style:none;padding:0;width:100%}::ng-deep .dropdown-menu li a{text-decoration:none;font-size:14px;color:#8c8c8c;display:block;width:100%}::ng-deep .dropdown-menu li{padding:4px 6px}::ng-deep .dropdown-menu li:hover{background-color:rgba(0,0,0,.05)}.dropdown-menu>li>a>span>strong,::ng-deep .dropdown-menu>li>a>span>strong{color:#b7d581!important}"]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/number/tru-ui-number/tru-ui-number.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var TruUiNumberComponent = /*#__PURE__*/function (_CommonComponent41) {
      _inherits(TruUiNumberComponent, _CommonComponent41);

      var _super50 = _createSuper(TruUiNumberComponent);

      function TruUiNumberComponent() {
        _classCallCheck(this, TruUiNumberComponent);

        return _super50.apply(this, arguments);
      }

      return TruUiNumberComponent;
    }(CommonComponent);

    TruUiNumberComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-tru-ui-number',
        template: "<div class=\"tru-ui-input-container\">\n<label class=\"tru-ui-label\" [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\" *ngIf=\"type() !== 'hidden'\">\n    <span  class=\"tru-ui-label\" [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n  </label>\n  <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n  <input\n    class=\"tru-ui-input-control tru-ui-number\"\n    [name]=\"schema.key\"\n    [attr.type]=\"'number'\"\n    [formControl]=\"control\"\n    [attr.disabled]=\"disabled\"\n    [ngClass]=\"{'empty': control.value === '' && !isRequired()}\"\n  />\n  <jf-tru-ui-error [control]=\"control\" [language]=\"language || 'en'\"></jf-tru-ui-error>\n  </div>",
        styles: [".tru-ui-label{font-size:14px;color:#8c8c8c;margin-bottom:6px;padding:0}.tru-ui-input-container{margin-bottom:8px;position:relative}.tru-ui-input-control.empty{border-color:#d8d8d8!important}.tru-ui-input-control{height:32px;padding:6px;width:100%;font-size:12px;background-color:#fff;border:1px solid #d8d8d8;border-radius:6px;color:#959595!important}.tru-ui-input-control:focus{outline:0!important}::ng-deep .ng-invalid.ng-touched{border-color:#f75a5a!important}textarea.tru-ui-input-control{height:120px}.tru-ui-date{background-position:calc(100% - 6px);background-repeat:no-repeat;background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='14px' height='16px' viewBox='0 0 14 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Full-Admin' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='All-form-inputs' transform='translate(-870.000000, -1088.000000)' fill='%238C8C8C' fill-rule='nonzero'%3E%3Cg id='Group-44-Copy' transform='translate(631.000000, 1056.000000)'%3E%3Cg id='Group-31' transform='translate(0.000000, 24.000000)'%3E%3Cpath d='M252.625,13 L239.375,13 C239.16875,13 239,12.83125 239,12.625 L239,11.5 C239,10.671875 239.671875,10 240.5,10 L242,10 L242,8.375 C242,8.16875 242.16875,8 242.375,8 L243.625,8 C243.83125,8 244,8.16875 244,8.375 L244,10 L248,10 L248,8.375 C248,8.16875 248.16875,8 248.375,8 L249.625,8 C249.83125,8 250,8.16875 250,8.375 L250,10 L251.5,10 C252.328125,10 253,10.671875 253,11.5 L253,12.625 C253,12.83125 252.83125,13 252.625,13 Z M239.375,14 L252.625,14 C252.83125,14 253,14.16875 253,14.375 L253,22.5 C253,23.328125 252.328125,24 251.5,24 L240.5,24 C239.671875,24 239,23.328125 239,22.5 L239,14.375 C239,14.16875 239.16875,14 239.375,14 Z M243,20.375 C243,20.16875 242.83125,20 242.625,20 L241.375,20 C241.16875,20 241,20.16875 241,20.375 L241,21.625 C241,21.83125 241.16875,22 241.375,22 L242.625,22 C242.83125,22 243,21.83125 243,21.625 L243,20.375 Z M243,16.375 C243,16.16875 242.83125,16 242.625,16 L241.375,16 C241.16875,16 241,16.16875 241,16.375 L241,17.625 C241,17.83125 241.16875,18 241.375,18 L242.625,18 C242.83125,18 243,17.83125 243,17.625 L243,16.375 Z M247,20.375 C247,20.16875 246.83125,20 246.625,20 L245.375,20 C245.16875,20 245,20.16875 245,20.375 L245,21.625 C245,21.83125 245.16875,22 245.375,22 L246.625,22 C246.83125,22 247,21.83125 247,21.625 L247,20.375 Z M247,16.375 C247,16.16875 246.83125,16 246.625,16 L245.375,16 C245.16875,16 245,16.16875 245,16.375 L245,17.625 C245,17.83125 245.16875,18 245.375,18 L246.625,18 C246.83125,18 247,17.83125 247,17.625 L247,16.375 Z M251,20.375 C251,20.16875 250.83125,20 250.625,20 L249.375,20 C249.16875,20 249,20.16875 249,20.375 L249,21.625 C249,21.83125 249.16875,22 249.375,22 L250.625,22 C250.83125,22 251,21.83125 251,21.625 L251,20.375 Z M251,16.375 C251,16.16875 250.83125,16 250.625,16 L249.375,16 C249.16875,16 249,16.16875 249,16.375 L249,17.625 C249,17.83125 249.16875,18 249.375,18 L250.625,18 C250.83125,18 251,17.83125 251,17.625 L251,16.375 Z' id='calendar-alt'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}.tru-ui-select{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 129 129' enable-background='new 0 0 129 129' width='512px' height='512px'%3E%3Cg%3E%3Cpath d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='%23959595'/%3E%3C/g%3E%3C/svg%3E%0A\");background-position:calc(100% - 6px);background-repeat:no-repeat;-moz-appearance:none;-webkit-appearance:none;appearance:none;background-size:14px}.tru-ui-number{-moz-appearance:none;-webkit-appearance:none;appearance:none}.container,.container-radio-button{display:block;position:relative;padding-left:18px;margin-bottom:12px;cursor:pointer;font-size:14px;margin-top:12px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container input,.container-radio-button input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{position:absolute;top:3px;left:0;height:15px;width:15px;background-color:#fff;border-radius:3px;border:1px solid rgba(0,0,0,.3)}.container:hover input~.checkmark{background-color:#fff;border-radius:3px;border:1px solid rgba(0,0,0,.3)}.container-radio-button input~.checkmark{border-radius:50%;background-color:#fff;border:1px solid rgba(0,0,0,.3)}.container input:checked~.checkmark,.container-radio-button input:checked~.checkmark{background-color:#2196f3}.checkmark:after{content:\"\";position:absolute;display:none}.container input:checked~.checkmark:after,.container-radio-button input:checked~.checkmark:after{display:block}.container .checkmark:after{left:4px;top:1px;width:5px;height:10px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}.container-radio-button .checkmark:after{border-radius:50%;width:7px;height:7px;top:3px;background-color:#fff;left:3px}::ng-deep typeahead-container{background-color:#fff;border-radius:6px;width:100%;box-shadow:10px 10px 20px 0 rgba(30,30,30,.05)}::ng-deep .dropdown-menu{list-style:none;padding:0;width:100%}::ng-deep .dropdown-menu li a{text-decoration:none;font-size:14px;color:#8c8c8c;display:block;width:100%}::ng-deep .dropdown-menu li{padding:4px 6px}::ng-deep .dropdown-menu li:hover{background-color:rgba(0,0,0,.05)}.dropdown-menu>li>a>span>strong,::ng-deep .dropdown-menu>li>a>span>strong{color:#b7d581!important}"]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/radiogroup/tru-ui-radigroup/tru-ui-radigroup.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var TruUiRadigroupComponent = /*#__PURE__*/function (_CommonComponent42) {
      _inherits(TruUiRadigroupComponent, _CommonComponent42);

      var _super51 = _createSuper(TruUiRadigroupComponent);

      function TruUiRadigroupComponent() {
        var _this32;

        _classCallCheck(this, TruUiRadigroupComponent);

        _this32 = _super51.apply(this, arguments);
        _this32.randomSuffix = Math.random().toString(36).substring(7);
        return _this32;
      }
      /**
       * @param {?} key
       * @param {?} val
       * @param {?} formId
       * @return {?}
       */


      _createClass(TruUiRadigroupComponent, [{
        key: "getId",
        value: function getId(key, val, formId) {
          return [formId, key, val.toString()].filter(
          /**
          * @param {?} f
          * @return {?}
          */
          function (f) {
            return f.length;
          }).join('-');
        }
        /**
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "getName",
        value: function getName(key) {
          return "".concat(key, "-").concat(this.randomSuffix);
        }
      }]);

      return TruUiRadigroupComponent;
    }(CommonComponent);

    TruUiRadigroupComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-tru-ui-radigroup',
        template: "<div class=\"tru-ui-input-container\">\n\n<label\n[ngClass]=\"['margin-bottom--half', 'jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n<span  class=\"tru-ui-label\" [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup></label>\n<button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n<div [class]=\"getClass('radio-group')\">\n<div *ngFor=\"let en of this.schema.enum; let i = index\"\n     [ngClass]=\"{'radio-container': true, 'checked': control.value === en}\">\n  <div [class]=\"getClass('checkbox-group')\">\n    <label class=\"container-radio-button\"  [attr.for]=\"getId(schema.key, en, schema.id)\">\n      <span  class=\"tru-ui-label\"> {{enumNames(i)}}</span>    \n      <input\n      type=\"radio\"\n      [attr.id]=\"getId(schema.key, en, schema.id)\"\n      [checked]=\"control.value === en\"\n      [name]=\"getName(schema.key)\"\n      [formControl]=\"control\"\n      [attr.disabled]=\"disabled\"\n      [value]=\"en\" />\n      <span class=\"checkmark\"></span>\n    </label>\n  </div>\n</div>\n</div>\n<jf-tru-ui-error [control]=\"control\" [language]=\"language || 'en'\"></jf-tru-ui-error>\n</div>",
        styles: [".tru-ui-label{font-size:14px;color:#8c8c8c;margin-bottom:6px;padding:0}.tru-ui-input-container{margin-bottom:8px;position:relative}.tru-ui-input-control.empty{border-color:#d8d8d8!important}.tru-ui-input-control{height:32px;padding:6px;width:100%;font-size:12px;background-color:#fff;border:1px solid #d8d8d8;border-radius:6px;color:#959595!important}.tru-ui-input-control:focus{outline:0!important}::ng-deep .ng-invalid.ng-touched{border-color:#f75a5a!important}textarea.tru-ui-input-control{height:120px}.tru-ui-date{background-position:calc(100% - 6px);background-repeat:no-repeat;background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='14px' height='16px' viewBox='0 0 14 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Full-Admin' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='All-form-inputs' transform='translate(-870.000000, -1088.000000)' fill='%238C8C8C' fill-rule='nonzero'%3E%3Cg id='Group-44-Copy' transform='translate(631.000000, 1056.000000)'%3E%3Cg id='Group-31' transform='translate(0.000000, 24.000000)'%3E%3Cpath d='M252.625,13 L239.375,13 C239.16875,13 239,12.83125 239,12.625 L239,11.5 C239,10.671875 239.671875,10 240.5,10 L242,10 L242,8.375 C242,8.16875 242.16875,8 242.375,8 L243.625,8 C243.83125,8 244,8.16875 244,8.375 L244,10 L248,10 L248,8.375 C248,8.16875 248.16875,8 248.375,8 L249.625,8 C249.83125,8 250,8.16875 250,8.375 L250,10 L251.5,10 C252.328125,10 253,10.671875 253,11.5 L253,12.625 C253,12.83125 252.83125,13 252.625,13 Z M239.375,14 L252.625,14 C252.83125,14 253,14.16875 253,14.375 L253,22.5 C253,23.328125 252.328125,24 251.5,24 L240.5,24 C239.671875,24 239,23.328125 239,22.5 L239,14.375 C239,14.16875 239.16875,14 239.375,14 Z M243,20.375 C243,20.16875 242.83125,20 242.625,20 L241.375,20 C241.16875,20 241,20.16875 241,20.375 L241,21.625 C241,21.83125 241.16875,22 241.375,22 L242.625,22 C242.83125,22 243,21.83125 243,21.625 L243,20.375 Z M243,16.375 C243,16.16875 242.83125,16 242.625,16 L241.375,16 C241.16875,16 241,16.16875 241,16.375 L241,17.625 C241,17.83125 241.16875,18 241.375,18 L242.625,18 C242.83125,18 243,17.83125 243,17.625 L243,16.375 Z M247,20.375 C247,20.16875 246.83125,20 246.625,20 L245.375,20 C245.16875,20 245,20.16875 245,20.375 L245,21.625 C245,21.83125 245.16875,22 245.375,22 L246.625,22 C246.83125,22 247,21.83125 247,21.625 L247,20.375 Z M247,16.375 C247,16.16875 246.83125,16 246.625,16 L245.375,16 C245.16875,16 245,16.16875 245,16.375 L245,17.625 C245,17.83125 245.16875,18 245.375,18 L246.625,18 C246.83125,18 247,17.83125 247,17.625 L247,16.375 Z M251,20.375 C251,20.16875 250.83125,20 250.625,20 L249.375,20 C249.16875,20 249,20.16875 249,20.375 L249,21.625 C249,21.83125 249.16875,22 249.375,22 L250.625,22 C250.83125,22 251,21.83125 251,21.625 L251,20.375 Z M251,16.375 C251,16.16875 250.83125,16 250.625,16 L249.375,16 C249.16875,16 249,16.16875 249,16.375 L249,17.625 C249,17.83125 249.16875,18 249.375,18 L250.625,18 C250.83125,18 251,17.83125 251,17.625 L251,16.375 Z' id='calendar-alt'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}.tru-ui-select{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 129 129' enable-background='new 0 0 129 129' width='512px' height='512px'%3E%3Cg%3E%3Cpath d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='%23959595'/%3E%3C/g%3E%3C/svg%3E%0A\");background-position:calc(100% - 6px);background-repeat:no-repeat;-moz-appearance:none;-webkit-appearance:none;appearance:none;background-size:14px}.tru-ui-number{-moz-appearance:none;-webkit-appearance:none;appearance:none}.container,.container-radio-button{display:block;position:relative;padding-left:18px;margin-bottom:12px;cursor:pointer;font-size:14px;margin-top:12px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container input,.container-radio-button input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{position:absolute;top:3px;left:0;height:15px;width:15px;background-color:#fff;border-radius:3px;border:1px solid rgba(0,0,0,.3)}.container:hover input~.checkmark{background-color:#fff;border-radius:3px;border:1px solid rgba(0,0,0,.3)}.container-radio-button input~.checkmark{border-radius:50%;background-color:#fff;border:1px solid rgba(0,0,0,.3)}.container input:checked~.checkmark,.container-radio-button input:checked~.checkmark{background-color:#2196f3}.checkmark:after{content:\"\";position:absolute;display:none}.container input:checked~.checkmark:after,.container-radio-button input:checked~.checkmark:after{display:block}.container .checkmark:after{left:4px;top:1px;width:5px;height:10px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}.container-radio-button .checkmark:after{border-radius:50%;width:7px;height:7px;top:3px;background-color:#fff;left:3px}::ng-deep typeahead-container{background-color:#fff;border-radius:6px;width:100%;box-shadow:10px 10px 20px 0 rgba(30,30,30,.05)}::ng-deep .dropdown-menu{list-style:none;padding:0;width:100%}::ng-deep .dropdown-menu li a{text-decoration:none;font-size:14px;color:#8c8c8c;display:block;width:100%}::ng-deep .dropdown-menu li{padding:4px 6px}::ng-deep .dropdown-menu li:hover{background-color:rgba(0,0,0,.05)}.dropdown-menu>li>a>span>strong,::ng-deep .dropdown-menu>li>a>span>strong{color:#b7d581!important}"]
      }]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/checkboxgroup/tru-ui-checkboxgroup/tru-ui-checkboxgroup.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TruUiCheckboxgroupComponent = /*#__PURE__*/function (_CommonComponent43) {
      _inherits(TruUiCheckboxgroupComponent, _CommonComponent43);

      var _super52 = _createSuper(TruUiCheckboxgroupComponent);

      function TruUiCheckboxgroupComponent() {
        var _this33;

        _classCallCheck(this, TruUiCheckboxgroupComponent);

        _this33 = _super52.apply(this, arguments);
        _this33.checkboxGroupValues = [];
        return _this33;
      }
      /**
       * @param {?} event
       * @param {?} index
       * @return {?}
       */


      _createClass(TruUiCheckboxgroupComponent, [{
        key: "setValue",
        value: function setValue(event, index) {
          if (this.checkboxGroupValues.length === 0) {
            this.checkboxGroupValues = new Array(this.control['controls'].length).fill(null);
          }

          if (this.checkboxGroupValues[index] === null) {
            event.target.value = this.schema["enum"][index];
            this.checkboxGroupValues[index] = event.target.value;
          } else {
            this.checkboxGroupValues[index] = null;
          }

          this.control.setValue(this.checkboxGroupValues);
        }
        /**
         * @param {?} key
         * @param {?} val
         * @return {?}
         */

      }, {
        key: "getId",
        value: function getId(key, val) {
          return "".concat(key, "-").concat(val.toString());
        }
      }]);

      return TruUiCheckboxgroupComponent;
    }(CommonComponent);

    TruUiCheckboxgroupComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-tru-ui-checkboxgroup',
        template: "<!-- <label [attr.class]=\"schema.key\" [ngClass]=\"{'margin-bottom--half': true, required: isRequired()}\">\n    <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup></label>\n  <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n  <div [class]=\"getClass('checkbox-group')\">\n    <div *ngFor=\"let child of this.control['controls']; let i = index\"\n         [ngClass]=\"{'checkbox-container': true, 'checked': child.value === schema.enum[i]}\">\n      <input\n        type=\"checkbox\"\n        [attr.id]=\"getId(schema.key, schema.enum[i])\"\n        [attr.disabled]=\"disabled\"\n        [checked]=\"child.value === schema.enum[i]\"\n        [name]=\"schema.key\"\n        [formControl]=\"child\"\n        (change)=\"setValue($event, i)\"\n        [value]=\"schema.enum[i]\" />\n      <label\n        [attr.for]=\"getId(i, schema.enum[i])\"\n        [attr.class]=\"schema.key\">\n        {{enumNames(i)}}\n      </label>\n    </div>\n  </div>\n  <jf-tru-ui-error [control]=\"control\"></jf-tru-ui-error>\n -->\n\n  <div class=\"tru-ui-input-container\">\n\n    <label\n    [ngClass]=\"['margin-bottom--half', 'jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n    <span  class=\"tru-ui-label\" [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup></label>\n    <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n    <div [class]=\"getClass('radio-group')\">\n    <div  *ngFor=\"let child of this.control['controls']; let i = index\"\n    [ngClass]=\"{'checkbox-container': true, 'checked': child.value === schema.enum[i]}\">\n      <div [class]=\"getClass('checkbox-group')\">\n        <label class=\"container\"  [attr.for]=\"getId(i, schema.enum[i])\">\n          <span  class=\"tru-ui-label\"> {{enumNames(i)}}</span>    \n          <input\n          type=\"checkbox\"\n          [attr.id]=\"getId(i, schema.enum[i])\"\n          [attr.disabled]=\"disabled\"\n          [checked]=\"child.value === schema.enum[i]\"\n          [name]=\"schema.key\"\n          [formControl]=\"child\"\n          (change)=\"setValue($event, i)\"\n          [value]=\"schema.enum[i]\"  />\n          <span class=\"checkmark\"></span>\n        </label>\n      </div>\n    </div>\n    </div>\n    <jf-tru-ui-error [control]=\"control\" [language]=\"language || 'en'\"></jf-tru-ui-error>\n\n    </div>",
        styles: [".tru-ui-label{font-size:14px;color:#8c8c8c;margin-bottom:6px;padding:0}.tru-ui-input-container{margin-bottom:8px;position:relative}.tru-ui-input-control.empty{border-color:#d8d8d8!important}.tru-ui-input-control{height:32px;padding:6px;width:100%;font-size:12px;background-color:#fff;border:1px solid #d8d8d8;border-radius:6px;color:#959595!important}.tru-ui-input-control:focus{outline:0!important}::ng-deep .ng-invalid.ng-touched{border-color:#f75a5a!important}textarea.tru-ui-input-control{height:120px}.tru-ui-date{background-position:calc(100% - 6px);background-repeat:no-repeat;background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='14px' height='16px' viewBox='0 0 14 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Full-Admin' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='All-form-inputs' transform='translate(-870.000000, -1088.000000)' fill='%238C8C8C' fill-rule='nonzero'%3E%3Cg id='Group-44-Copy' transform='translate(631.000000, 1056.000000)'%3E%3Cg id='Group-31' transform='translate(0.000000, 24.000000)'%3E%3Cpath d='M252.625,13 L239.375,13 C239.16875,13 239,12.83125 239,12.625 L239,11.5 C239,10.671875 239.671875,10 240.5,10 L242,10 L242,8.375 C242,8.16875 242.16875,8 242.375,8 L243.625,8 C243.83125,8 244,8.16875 244,8.375 L244,10 L248,10 L248,8.375 C248,8.16875 248.16875,8 248.375,8 L249.625,8 C249.83125,8 250,8.16875 250,8.375 L250,10 L251.5,10 C252.328125,10 253,10.671875 253,11.5 L253,12.625 C253,12.83125 252.83125,13 252.625,13 Z M239.375,14 L252.625,14 C252.83125,14 253,14.16875 253,14.375 L253,22.5 C253,23.328125 252.328125,24 251.5,24 L240.5,24 C239.671875,24 239,23.328125 239,22.5 L239,14.375 C239,14.16875 239.16875,14 239.375,14 Z M243,20.375 C243,20.16875 242.83125,20 242.625,20 L241.375,20 C241.16875,20 241,20.16875 241,20.375 L241,21.625 C241,21.83125 241.16875,22 241.375,22 L242.625,22 C242.83125,22 243,21.83125 243,21.625 L243,20.375 Z M243,16.375 C243,16.16875 242.83125,16 242.625,16 L241.375,16 C241.16875,16 241,16.16875 241,16.375 L241,17.625 C241,17.83125 241.16875,18 241.375,18 L242.625,18 C242.83125,18 243,17.83125 243,17.625 L243,16.375 Z M247,20.375 C247,20.16875 246.83125,20 246.625,20 L245.375,20 C245.16875,20 245,20.16875 245,20.375 L245,21.625 C245,21.83125 245.16875,22 245.375,22 L246.625,22 C246.83125,22 247,21.83125 247,21.625 L247,20.375 Z M247,16.375 C247,16.16875 246.83125,16 246.625,16 L245.375,16 C245.16875,16 245,16.16875 245,16.375 L245,17.625 C245,17.83125 245.16875,18 245.375,18 L246.625,18 C246.83125,18 247,17.83125 247,17.625 L247,16.375 Z M251,20.375 C251,20.16875 250.83125,20 250.625,20 L249.375,20 C249.16875,20 249,20.16875 249,20.375 L249,21.625 C249,21.83125 249.16875,22 249.375,22 L250.625,22 C250.83125,22 251,21.83125 251,21.625 L251,20.375 Z M251,16.375 C251,16.16875 250.83125,16 250.625,16 L249.375,16 C249.16875,16 249,16.16875 249,16.375 L249,17.625 C249,17.83125 249.16875,18 249.375,18 L250.625,18 C250.83125,18 251,17.83125 251,17.625 L251,16.375 Z' id='calendar-alt'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}.tru-ui-select{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 129 129' enable-background='new 0 0 129 129' width='512px' height='512px'%3E%3Cg%3E%3Cpath d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='%23959595'/%3E%3C/g%3E%3C/svg%3E%0A\");background-position:calc(100% - 6px);background-repeat:no-repeat;-moz-appearance:none;-webkit-appearance:none;appearance:none;background-size:14px}.tru-ui-number{-moz-appearance:none;-webkit-appearance:none;appearance:none}.container,.container-radio-button{display:block;position:relative;padding-left:18px;margin-bottom:12px;cursor:pointer;font-size:14px;margin-top:12px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container input,.container-radio-button input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{position:absolute;top:3px;left:0;height:15px;width:15px;background-color:#fff;border-radius:3px;border:1px solid rgba(0,0,0,.3)}.container:hover input~.checkmark{background-color:#fff;border-radius:3px;border:1px solid rgba(0,0,0,.3)}.container-radio-button input~.checkmark{border-radius:50%;background-color:#fff;border:1px solid rgba(0,0,0,.3)}.container input:checked~.checkmark,.container-radio-button input:checked~.checkmark{background-color:#2196f3}.checkmark:after{content:\"\";position:absolute;display:none}.container input:checked~.checkmark:after,.container-radio-button input:checked~.checkmark:after{display:block}.container .checkmark:after{left:4px;top:1px;width:5px;height:10px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}.container-radio-button .checkmark:after{border-radius:50%;width:7px;height:7px;top:3px;background-color:#fff;left:3px}::ng-deep typeahead-container{background-color:#fff;border-radius:6px;width:100%;box-shadow:10px 10px 20px 0 rgba(30,30,30,.05)}::ng-deep .dropdown-menu{list-style:none;padding:0;width:100%}::ng-deep .dropdown-menu li a{text-decoration:none;font-size:14px;color:#8c8c8c;display:block;width:100%}::ng-deep .dropdown-menu li{padding:4px 6px}::ng-deep .dropdown-menu li:hover{background-color:rgba(0,0,0,.05)}.dropdown-menu>li>a>span>strong,::ng-deep .dropdown-menu>li>a>span>strong{color:#b7d581!important}"]
      }]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/multiselect/tru-ui-multiselect/tru-ui-multiselect.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TruUiMultiselectComponent = /*#__PURE__*/function (_CommonComponent44) {
      _inherits(TruUiMultiselectComponent, _CommonComponent44);

      var _super53 = _createSuper(TruUiMultiselectComponent);

      function TruUiMultiselectComponent() {
        _classCallCheck(this, TruUiMultiselectComponent);

        return _super53.apply(this, arguments);
      }

      _createClass(TruUiMultiselectComponent, [{
        key: "enumNames",

        /**
         * @param {?} index
         * @return {?}
         */
        value: function enumNames(index) {
          return typeof this.schema.enumNames === 'undefined' ? this.schema["enum"][index] : this.schema.enumNames[index];
        }
      }]);

      return TruUiMultiselectComponent;
    }(CommonComponent);

    TruUiMultiselectComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-tru-ui-multiselect',
        template: "<div class=\"tru-ui-input-container\">\n\n<label [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n    <span class=\"tru-ui-label\"  [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n  </label>\n  <button type=\"button\" *ngIf=\"schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n  <select\n    class=\"tru-ui-select\"\n    name=\"name\"\n    [formControl]=\"control\"\n    multiple=\"multiple\"\n    [attr.disabled]=\"disabled\"\n  >\n    <option\n      *ngFor=\"let en of schema.enum; let i = index\"\n      [selected]=\"control.value === en\"\n      [ngValue]=\"en\">\n      {{enumNames(i)}}\n    </option>\n  </select>\n  <jf-tru-ui-error [control]=\"control\" [language]=\"language || 'en'\"></jf-tru-ui-error>\n\n  </div>",
        styles: [".tru-ui-label{font-size:14px;color:#8c8c8c;margin-bottom:6px;padding:0}.tru-ui-input-container{margin-bottom:8px;position:relative}.tru-ui-input-control.empty{border-color:#d8d8d8!important}.tru-ui-input-control{height:32px;padding:6px;width:100%;font-size:12px;background-color:#fff;border:1px solid #d8d8d8;border-radius:6px;color:#959595!important}.tru-ui-input-control:focus{outline:0!important}::ng-deep .ng-invalid.ng-touched{border-color:#f75a5a!important}textarea.tru-ui-input-control{height:120px}.tru-ui-date{background-position:calc(100% - 6px);background-repeat:no-repeat;background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='14px' height='16px' viewBox='0 0 14 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Full-Admin' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='All-form-inputs' transform='translate(-870.000000, -1088.000000)' fill='%238C8C8C' fill-rule='nonzero'%3E%3Cg id='Group-44-Copy' transform='translate(631.000000, 1056.000000)'%3E%3Cg id='Group-31' transform='translate(0.000000, 24.000000)'%3E%3Cpath d='M252.625,13 L239.375,13 C239.16875,13 239,12.83125 239,12.625 L239,11.5 C239,10.671875 239.671875,10 240.5,10 L242,10 L242,8.375 C242,8.16875 242.16875,8 242.375,8 L243.625,8 C243.83125,8 244,8.16875 244,8.375 L244,10 L248,10 L248,8.375 C248,8.16875 248.16875,8 248.375,8 L249.625,8 C249.83125,8 250,8.16875 250,8.375 L250,10 L251.5,10 C252.328125,10 253,10.671875 253,11.5 L253,12.625 C253,12.83125 252.83125,13 252.625,13 Z M239.375,14 L252.625,14 C252.83125,14 253,14.16875 253,14.375 L253,22.5 C253,23.328125 252.328125,24 251.5,24 L240.5,24 C239.671875,24 239,23.328125 239,22.5 L239,14.375 C239,14.16875 239.16875,14 239.375,14 Z M243,20.375 C243,20.16875 242.83125,20 242.625,20 L241.375,20 C241.16875,20 241,20.16875 241,20.375 L241,21.625 C241,21.83125 241.16875,22 241.375,22 L242.625,22 C242.83125,22 243,21.83125 243,21.625 L243,20.375 Z M243,16.375 C243,16.16875 242.83125,16 242.625,16 L241.375,16 C241.16875,16 241,16.16875 241,16.375 L241,17.625 C241,17.83125 241.16875,18 241.375,18 L242.625,18 C242.83125,18 243,17.83125 243,17.625 L243,16.375 Z M247,20.375 C247,20.16875 246.83125,20 246.625,20 L245.375,20 C245.16875,20 245,20.16875 245,20.375 L245,21.625 C245,21.83125 245.16875,22 245.375,22 L246.625,22 C246.83125,22 247,21.83125 247,21.625 L247,20.375 Z M247,16.375 C247,16.16875 246.83125,16 246.625,16 L245.375,16 C245.16875,16 245,16.16875 245,16.375 L245,17.625 C245,17.83125 245.16875,18 245.375,18 L246.625,18 C246.83125,18 247,17.83125 247,17.625 L247,16.375 Z M251,20.375 C251,20.16875 250.83125,20 250.625,20 L249.375,20 C249.16875,20 249,20.16875 249,20.375 L249,21.625 C249,21.83125 249.16875,22 249.375,22 L250.625,22 C250.83125,22 251,21.83125 251,21.625 L251,20.375 Z M251,16.375 C251,16.16875 250.83125,16 250.625,16 L249.375,16 C249.16875,16 249,16.16875 249,16.375 L249,17.625 C249,17.83125 249.16875,18 249.375,18 L250.625,18 C250.83125,18 251,17.83125 251,17.625 L251,16.375 Z' id='calendar-alt'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}.tru-ui-select{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 129 129' enable-background='new 0 0 129 129' width='512px' height='512px'%3E%3Cg%3E%3Cpath d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='%23959595'/%3E%3C/g%3E%3C/svg%3E%0A\");background-position:calc(100% - 6px);background-repeat:no-repeat;-moz-appearance:none;-webkit-appearance:none;appearance:none;background-size:14px}.tru-ui-number{-moz-appearance:none;-webkit-appearance:none;appearance:none}.container,.container-radio-button{display:block;position:relative;padding-left:18px;margin-bottom:12px;cursor:pointer;font-size:14px;margin-top:12px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container input,.container-radio-button input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{position:absolute;top:3px;left:0;height:15px;width:15px;background-color:#fff;border-radius:3px;border:1px solid rgba(0,0,0,.3)}.container:hover input~.checkmark{background-color:#fff;border-radius:3px;border:1px solid rgba(0,0,0,.3)}.container-radio-button input~.checkmark{border-radius:50%;background-color:#fff;border:1px solid rgba(0,0,0,.3)}.container input:checked~.checkmark,.container-radio-button input:checked~.checkmark{background-color:#2196f3}.checkmark:after{content:\"\";position:absolute;display:none}.container input:checked~.checkmark:after,.container-radio-button input:checked~.checkmark:after{display:block}.container .checkmark:after{left:4px;top:1px;width:5px;height:10px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}.container-radio-button .checkmark:after{border-radius:50%;width:7px;height:7px;top:3px;background-color:#fff;left:3px}::ng-deep typeahead-container{background-color:#fff;border-radius:6px;width:100%;box-shadow:10px 10px 20px 0 rgba(30,30,30,.05)}::ng-deep .dropdown-menu{list-style:none;padding:0;width:100%}::ng-deep .dropdown-menu li a{text-decoration:none;font-size:14px;color:#8c8c8c;display:block;width:100%}::ng-deep .dropdown-menu li{padding:4px 6px}::ng-deep .dropdown-menu li:hover{background-color:rgba(0,0,0,.05)}.dropdown-menu>li>a>span>strong,::ng-deep .dropdown-menu>li>a>span>strong{color:#b7d581!important}"]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/framework/shared/components/array/tru-ui-array/tru-ui-array.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var TruUiArrayComponent = /*#__PURE__*/function () {
      function TruUiArrayComponent() {
        _classCallCheck(this, TruUiArrayComponent);
      }

      _createClass(TruUiArrayComponent, [{
        key: "getLegend",

        /**
         * @param {?} control
         * @return {?}
         */
        value: function getLegend(control) {
          // return (control && control.schema && control.schema.key) ? startCase(control.schema.key) : '';
          // tslint:disable-next-line: max-line-length
          return typeof control.schema.title === 'undefined' ? control.schema.key : this.getTranslation(control.schema.title) ? this.getTranslation(control.schema.title) : Object(lodash__WEBPACK_IMPORTED_MODULE_6__["startCase"])(control.schema.key);
        }
        /**
         * @param {?} titleArray
         * @return {?}
         */

      }, {
        key: "getTranslation",
        value: function getTranslation(titleArray) {
          var _this34 = this;

          if (Array.isArray(titleArray)) {
            /** @type {?} */
            var translatedTitle = titleArray.filter(
            /**
            * @param {?} val
            * @return {?}
            */
            function (val) {
              return val.language === _this34.language;
            });
            return translatedTitle[0] ? this.strToUpperCase(translatedTitle[0].value.replace(/<.*?>/g, '')) : false;
          } else {
            return titleArray;
          }
        }
        /**
         * @param {?} str
         * @return {?}
         */

      }, {
        key: "strToUpperCase",
        value: function strToUpperCase(str) {
          return str.toLowerCase().replace(/_/g, ' ').split(' ').map(
          /**
          * @param {?} word
          * @return {?}
          */
          function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
          }).join(' ');
        }
        /**
         * @param {?} control
         * @return {?}
         */

      }, {
        key: "getEnabledControls",
        value: function getEnabledControls(control) {
          if (Array.isArray(control.controls)) {
            return control.controls.filter(
            /**
            * @param {?} c
            * @return {?}
            */
            function (c) {
              return c.enabled;
            });
          }

          return control;
        }
        /**
         * @param {?} control
         * @return {?}
         */

      }, {
        key: "cloneControl",
        value: function cloneControl(control) {
          var _this35 = this;

          /** @type {?} */
          var newControl;

          if (control instanceof SchemaFormGroup) {
            /** @type {?} */
            var formGroup = new SchemaFormGroup({}, control.validator, control.asyncValidator);
            /** @type {?} */

            var controls = control.controls;
            formGroup.schema = control.schema;
            Object.keys(controls).forEach(
            /**
            * @param {?} key
            * @return {?}
            */
            function (key) {
              formGroup.addControl(key, _this35.cloneControl(controls[key]));
            });
            newControl = formGroup;
          } else if (control instanceof SchemaFormArray) {
            /** @type {?} */
            var formArray = new SchemaFormArray([], control.validator, control.asyncValidator);
            control.controls.forEach(
            /**
            * @param {?} formControl
            * @return {?}
            */
            function (formControl) {
              formArray.push(_this35.cloneControl(formControl));
              return formArray;
            });
            newControl = formArray;

            /** @type {?} */
            newControl.schema = control.schema;
          } else if (control instanceof SchemaFormControl) {
            newControl = new SchemaFormControl(control.value, control.validator, control.asyncValidator);

            /** @type {?} */
            newControl.schema = control.schema;
          } else {
            throw new Error('Error: unexpected control value');
          }

          if (control.disabled) {
            newControl.disable({
              emitEvent: false
            });
          }

          newControl.reset();
          return newControl;
        }
        /**
         * @param {?} formArray
         * @return {?}
         */

      }, {
        key: "addControl",
        value: function addControl(formArray) {
          formArray.push(this.cloneControl(formArray.controls[0]));
        }
        /**
         * @param {?} formArray
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "removeControl",
        value: function removeControl(formArray, index) {
          if (formArray.length === 1) {
            formArray.controls[0].reset();
            formArray.controls[0].disable();
          } else {
            formArray.removeAt(index);
          }
        }
      }]);

      return TruUiArrayComponent;
    }();

    TruUiArrayComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-tru-ui-array',
        template: "<div [ngClass]=\"['array', control.schema.key]\">\n    <h6 *ngIf=\"getLegend(control).length\" style=\"color:#8c8c8c;;margin-top: 20px;font-size: 14px;\" class=\"tru-ui-array-title\">{{getLegend(control)}}</h6>\n    <div *ngFor=\"let arrControl of getEnabledControls(control); let i = index;let last = last; let first = first\">\n      <div style=\"display: flex;flex-direction: row;align-items: flex-end;\">\n        <div class=\"control\" \n        jf-component-chooser \n        [form]=\"arrControl\" \n        [language]= \"language\"\n        style=\"display: flex;flex-direction: row;\"></div>\n        <div class=\"remove\" >\n          <button class=\"btn-remove\" *ngIf=\"control.controls.length > 1\" type=\"button\" (click)=\"removeControl(control, i)\"> \n            <svg width=\"14px\" height=\"14px\" viewBox=\"0 0 14 14\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <g id=\"Full-Admin\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                    <g id=\"Settings-/-Branches-Add-Map-have-data\" transform=\"translate(-961.000000, -519.000000)\" fill=\"#FFFFFF\">\n                        <g id=\"Group-50\" transform=\"translate(664.000000, 492.000000)\">\n                            <g id=\"Group-35-Copy-2\">\n                                <g id=\"Group-34\">\n                                    <g id=\"Group-33\" transform=\"translate(288.000000, 18.000000)\">\n                                        <g id=\"Group-36\">\n                                            <path d=\"M23.5172415,17.2672414 C23.5172415,17.6228449 23.2262932,17.9137932 22.8706897,17.9137932 L17.9137932,17.9137932 L17.9137932,22.8706897 C17.9137932,23.2262932 17.6228449,23.5172415 17.2672414,23.5172415 L14.25,23.5172415 C13.8943966,23.5172415 13.6034483,23.2262932 13.6034483,22.8706897 L13.6034483,17.9137932 L8.64655173,17.9137932 C8.29094828,17.9137932 8,17.6228449 8,17.2672414 L8,14.25 C8,13.8943966 8.29094828,13.6034483 8.64655173,13.6034483 L13.6034483,13.6034483 L13.6034483,8.64655173 C13.6034483,8.29094828 13.8943966,8 14.25,8 L17.2672414,8 C17.6228449,8 17.9137932,8.29094828 17.9137932,8.64655173 L17.9137932,13.6034483 L22.8706897,13.6034483 C23.2262932,13.6034483 23.5172415,13.8943966 23.5172415,14.25\" id=\"Path\" transform=\"translate(15.758621, 15.758621) rotate(-315.000000) translate(-15.758621, -15.758621) \"></path>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </svg>\n          </button>\n          <button  *ngIf=\"last\"  type=\"button\" (click)=\"addControl(control)\" class=\"btn-add\">\n            <svg width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <g id=\"Full-Admin\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                    <g id=\"Settings-/-Branches-Add-Map-have-data\" transform=\"translate(-960.000000, -580.000000)\" fill=\"#FFFFFF\">\n                        <g id=\"Group-35\" transform=\"translate(952.000000, 572.000000)\">\n                            <g id=\"Group-34\">\n                                <g id=\"Group-33\">\n                                    <g id=\"Group-36\">\n                                        <path d=\"M23.5172415,17.2672414 C23.5172415,17.6228449 23.2262932,17.9137932 22.8706897,17.9137932 L17.9137932,17.9137932 L17.9137932,22.8706897 C17.9137932,23.2262932 17.6228449,23.5172415 17.2672414,23.5172415 L14.25,23.5172415 C13.8943966,23.5172415 13.6034483,23.2262932 13.6034483,22.8706897 L13.6034483,17.9137932 L8.64655173,17.9137932 C8.29094828,17.9137932 8,17.6228449 8,17.2672414 L8,14.25 C8,13.8943966 8.29094828,13.6034483 8.64655173,13.6034483 L13.6034483,13.6034483 L13.6034483,8.64655173 C13.6034483,8.29094828 13.8943966,8 14.25,8 L17.2672414,8 C17.6228449,8 17.9137932,8.29094828 17.9137932,8.64655173 L17.9137932,13.6034483 L22.8706897,13.6034483 C23.2262932,13.6034483 23.5172415,13.8943966 23.5172415,14.25\" id=\"Path\"></path>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </svg>              </button>\n\n        </div>\n      </div>\n    </div>\n  </div>",
        styles: [".btn-remove{margin-bottom:16px;margin-left:5px;height:32px;border:none;width:32px;background-color:#f75757!important;color:#fff;font-weight:700;border-radius:4px}.btn-add{margin-bottom:16px;margin-left:5px;height:32px;border:none;width:32px;background-color:#959595!important;color:#fff;font-weight:700;border-radius:4px}"]
      }]
    }];
    TruUiArrayComponent.propDecorators = {
      control: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      language: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/autocomplete/tru-ui-autocomplete/tru-ui-autocomplete.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TruUiAutocompleteComponent = /*#__PURE__*/function (_CommonComponent45) {
      _inherits(TruUiAutocompleteComponent, _CommonComponent45);

      var _super54 = _createSuper(TruUiAutocompleteComponent);

      function TruUiAutocompleteComponent() {
        var _this36;

        _classCallCheck(this, TruUiAutocompleteComponent);

        _this36 = _super54.apply(this, arguments);
        _this36.selectedValue = '';
        _this36.values = [];
        return _this36;
      }
      /**
       * @return {?}
       */


      _createClass(TruUiAutocompleteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this37 = this;

          if (this.schema.enumNames) {
            this.values = [];
            this.schema["enum"].map(
            /**
            * @param {?} enm
            * @param {?} i
            * @return {?}
            */
            function (enm, i) {
              if (Array.isArray(_this37.schema.enumNames[i])) {
                _this37.values.push({
                  "enum": enm,
                  enumName: _this37.getTranslation(_this37.schema.enumNames[i])
                });
              } else {
                _this37.values.push({
                  "enum": enm,
                  enumName: _this37.schema.enumNames[i]
                });
              }
            });
          } else {
            this.values = [];
            this.schema["enum"].map(
            /**
            * @param {?} enm
            * @return {?}
            */
            function (enm) {
              _this37.values.push({
                "enum": enm,
                enumName: enm
              });
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "typeaheadNoResults",
        value: function typeaheadNoResults() {
          var _this38 = this;

          if (this.selectedValue !== '') {
            /** @type {?} */
            var searchValue = [];
            searchValue = this.schema.enumNames ? this.values.filter(
            /**
            * @param {?} en
            * @return {?}
            */
            function (en) {
              return en.enumName === _this38.selectedValue;
            }) : this.values.filter(
            /**
            * @param {?} en
            * @return {?}
            */
            function (en) {
              return en["enum"] === _this38.selectedValue;
            });
            searchValue.length ? this.setValue(searchValue[0]["enum"]) : this.control.setErrors({
              notInMenu: 'invalid'
            });
          } else {
            this.control.setErrors(null);
            this.control.setValue('');
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onSelect",
        value: function onSelect(event) {
          this.typeaheadNoResults();
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setValue",
        value: function setValue(value) {
          this.control.setValue(value);
          this.control.setErrors(null);
        }
      }]);

      return TruUiAutocompleteComponent;
    }(CommonComponent);

    TruUiAutocompleteComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-tru-ui-autocomplete',
        template: "<div class=\"tru-ui-input-container\">\n    <label  class=\"tru-ui-label\"\n    [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\" *ngIf=\"type() !== 'hidden'\">\n    <span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n<input [(ngModel)]=\"selectedValue\"\n       [typeahead]=\"values\"\n       typeaheadOptionField=\"enumName\"\n       [typeaheadMinLength]=\"0\"\n       [attr.disabled]=\"disabled\"\n       (typeaheadOnSelect)=\"onSelect($event)\"\n       (focusout)=\"typeaheadNoResults()\"\n       [ngClass]=\"{'empty': control.value === '' && !isRequired(), 'ng-invalid': !control.valid}\"\n       class=\"tru-ui-input-control tru-ui-select\" />\n\n       <input style=\"display: none;\" [formControl]=\"control\">\n       <jf-tru-ui-error [control]=\"control\" [language]=\"language || 'en'\"></jf-tru-ui-error>\n\n</div>",
        styles: [".tru-ui-label{font-size:14px;color:#8c8c8c;margin-bottom:6px;padding:0}.tru-ui-input-container{margin-bottom:8px;position:relative}.tru-ui-input-control.empty{border-color:#d8d8d8!important}.tru-ui-input-control{height:32px;padding:6px;width:100%;font-size:12px;background-color:#fff;border:1px solid #d8d8d8;border-radius:6px;color:#959595!important}.tru-ui-input-control:focus{outline:0!important}::ng-deep .ng-invalid.ng-touched{border-color:#f75a5a!important}textarea.tru-ui-input-control{height:120px}.tru-ui-date{background-position:calc(100% - 6px);background-repeat:no-repeat;background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='14px' height='16px' viewBox='0 0 14 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Full-Admin' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='All-form-inputs' transform='translate(-870.000000, -1088.000000)' fill='%238C8C8C' fill-rule='nonzero'%3E%3Cg id='Group-44-Copy' transform='translate(631.000000, 1056.000000)'%3E%3Cg id='Group-31' transform='translate(0.000000, 24.000000)'%3E%3Cpath d='M252.625,13 L239.375,13 C239.16875,13 239,12.83125 239,12.625 L239,11.5 C239,10.671875 239.671875,10 240.5,10 L242,10 L242,8.375 C242,8.16875 242.16875,8 242.375,8 L243.625,8 C243.83125,8 244,8.16875 244,8.375 L244,10 L248,10 L248,8.375 C248,8.16875 248.16875,8 248.375,8 L249.625,8 C249.83125,8 250,8.16875 250,8.375 L250,10 L251.5,10 C252.328125,10 253,10.671875 253,11.5 L253,12.625 C253,12.83125 252.83125,13 252.625,13 Z M239.375,14 L252.625,14 C252.83125,14 253,14.16875 253,14.375 L253,22.5 C253,23.328125 252.328125,24 251.5,24 L240.5,24 C239.671875,24 239,23.328125 239,22.5 L239,14.375 C239,14.16875 239.16875,14 239.375,14 Z M243,20.375 C243,20.16875 242.83125,20 242.625,20 L241.375,20 C241.16875,20 241,20.16875 241,20.375 L241,21.625 C241,21.83125 241.16875,22 241.375,22 L242.625,22 C242.83125,22 243,21.83125 243,21.625 L243,20.375 Z M243,16.375 C243,16.16875 242.83125,16 242.625,16 L241.375,16 C241.16875,16 241,16.16875 241,16.375 L241,17.625 C241,17.83125 241.16875,18 241.375,18 L242.625,18 C242.83125,18 243,17.83125 243,17.625 L243,16.375 Z M247,20.375 C247,20.16875 246.83125,20 246.625,20 L245.375,20 C245.16875,20 245,20.16875 245,20.375 L245,21.625 C245,21.83125 245.16875,22 245.375,22 L246.625,22 C246.83125,22 247,21.83125 247,21.625 L247,20.375 Z M247,16.375 C247,16.16875 246.83125,16 246.625,16 L245.375,16 C245.16875,16 245,16.16875 245,16.375 L245,17.625 C245,17.83125 245.16875,18 245.375,18 L246.625,18 C246.83125,18 247,17.83125 247,17.625 L247,16.375 Z M251,20.375 C251,20.16875 250.83125,20 250.625,20 L249.375,20 C249.16875,20 249,20.16875 249,20.375 L249,21.625 C249,21.83125 249.16875,22 249.375,22 L250.625,22 C250.83125,22 251,21.83125 251,21.625 L251,20.375 Z M251,16.375 C251,16.16875 250.83125,16 250.625,16 L249.375,16 C249.16875,16 249,16.16875 249,16.375 L249,17.625 C249,17.83125 249.16875,18 249.375,18 L250.625,18 C250.83125,18 251,17.83125 251,17.625 L251,16.375 Z' id='calendar-alt'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}.tru-ui-select{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 129 129' enable-background='new 0 0 129 129' width='512px' height='512px'%3E%3Cg%3E%3Cpath d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='%23959595'/%3E%3C/g%3E%3C/svg%3E%0A\");background-position:calc(100% - 6px);background-repeat:no-repeat;-moz-appearance:none;-webkit-appearance:none;appearance:none;background-size:14px}.tru-ui-number{-moz-appearance:none;-webkit-appearance:none;appearance:none}.container,.container-radio-button{display:block;position:relative;padding-left:18px;margin-bottom:12px;cursor:pointer;font-size:14px;margin-top:12px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container input,.container-radio-button input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{position:absolute;top:3px;left:0;height:15px;width:15px;background-color:#fff;border-radius:3px;border:1px solid rgba(0,0,0,.3)}.container:hover input~.checkmark{background-color:#fff;border-radius:3px;border:1px solid rgba(0,0,0,.3)}.container-radio-button input~.checkmark{border-radius:50%;background-color:#fff;border:1px solid rgba(0,0,0,.3)}.container input:checked~.checkmark,.container-radio-button input:checked~.checkmark{background-color:#2196f3}.checkmark:after{content:\"\";position:absolute;display:none}.container input:checked~.checkmark:after,.container-radio-button input:checked~.checkmark:after{display:block}.container .checkmark:after{left:4px;top:1px;width:5px;height:10px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}.container-radio-button .checkmark:after{border-radius:50%;width:7px;height:7px;top:3px;background-color:#fff;left:3px}::ng-deep typeahead-container{background-color:#fff;border-radius:6px;width:100%;box-shadow:10px 10px 20px 0 rgba(30,30,30,.05)}::ng-deep .dropdown-menu{list-style:none;padding:0;width:100%}::ng-deep .dropdown-menu li a{text-decoration:none;font-size:14px;color:#8c8c8c;display:block;width:100%}::ng-deep .dropdown-menu li{padding:4px 6px}::ng-deep .dropdown-menu li:hover{background-color:rgba(0,0,0,.05)}.dropdown-menu>li>a>span>strong,::ng-deep .dropdown-menu>li>a>span>strong{color:#b7d581!important}"]
      }]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/framework/tru-ui/tru-ui.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TruUi = /*#__PURE__*/function (_JsonFormFieldsServic3) {
      _inherits(TruUi, _JsonFormFieldsServic3);

      var _super55 = _createSuper(TruUi);

      function TruUi() {
        var _this39;

        _classCallCheck(this, TruUi);

        _this39 = _super55.apply(this, arguments);
        _this39.fieldTypes = {
          string: TruUiStringComponent,
          select: TruUiSelectComponent,
          number: TruUiNumberComponent,
          "boolean": TruUiBooleanComponent,
          photo: TruUiPhotoComponent,
          textarea: TruUiTextareaComponent,
          object: ObjectComponent,
          array: TruUiArrayComponent,
          date: TruUiDateComponent,
          radiogroup: TruUiRadigroupComponent,
          checkboxgroup: TruUiCheckboxgroupComponent,
          multiselect: TruUiMultiselectComponent,
          button: TruUiButtonComponent,
          autocomplete: TruUiAutocompleteComponent
        };
        return _this39;
      }

      return TruUi;
    }(JsonFormFieldsService);

    TruUi.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/fields/error/tru-ui-error/tru-ui-error.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TruUiErrorComponent = /*#__PURE__*/function (_CommonComponent46) {
      _inherits(TruUiErrorComponent, _CommonComponent46);

      var _super56 = _createSuper(TruUiErrorComponent);

      function TruUiErrorComponent() {
        _classCallCheck(this, TruUiErrorComponent);

        return _super56.apply(this, arguments);
      }

      return TruUiErrorComponent;
    }(CommonComponent);

    TruUiErrorComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-tru-ui-error',
        template: "<div *ngIf=\"control.invalid && (control.dirty || control.touched)\" class=\"invalid-feedback tru-ui-feedback\">\n    <ng-container *ngIf=\"control.errors && control.errors['required']\">\n      {{getLanguage().required}}\n    </ng-container>\n    <ng-container *ngIf=\"control.errors && control.errors['pattern']\">\n      {{getLanguage()?.invalid}}\n    </ng-container>\n    <ng-container *ngIf=\"control.errors && control.errors['isMatch']\">\n      {{getLanguage()?.is_match}}\n    </ng-container>\n    <ng-container *ngIf=\"control.errors && control.errors['email']\">\n      {{getLanguage()?.email_invalid}}\n    </ng-container>\n    <ng-container *ngIf=\"control.errors && control.errors['minlength']\">\n      {{getLanguage()?.minimum_invalid}} {{control.errors['minlength']['requiredLength']}} {{getLanguage()?.characters}}\n    </ng-container>\n    <ng-container *ngIf=\"control.errors && control.errors['maxlength']\">\n      {{getLanguage()?.maximum_invalid}} {{control.errors['maxlength']['requiredLength']}}  {{getLanguage()?.characters}}\n    </ng-container>\n    <ng-container *ngIf=\"control.errors && control.errors['min']\">\n      {{getLanguage()?.greater_than}} {{control.errors['min']['min']}}\n    </ng-container>\n    <ng-container *ngIf=\"control.errors && control.errors['max']\">\n      {{getLanguage()?.less_than}}  {{control.errors['max']['max']}}\n    </ng-container>\n    <ng-container *ngIf=\"control.errors && control.errors['notInMenu']\">\n      {{getLanguage()?.not_in_menu}}\n    </ng-container>\n    <ng-container *ngIf=\"control.errors && control.errors['customError']\">\n      {{getLanguage()?.invalid}}\n      {{control.errors['customError']}} \n    </ng-container>\n    <ng-container *ngIf=\"control.errors && control.errors['maxSize']\">\n      {{getLanguage()?.invalid}}\n      {{getLanguage()?.max_size }}, maximum {{control.schema.maxSize}} MB\n    </ng-container>\n    <ng-container *ngIf=\"control.errors && control.errors['invalidFormat']\">\n      {{getLanguage()?.invalid}},\n      {{getLanguage()?.allowed_format }}<span *ngFor=\"let format of control.schema.imageFormat\"> {{ format }} </span>\n    </ng-container>\n  </div>",
        styles: [".tru-ui-feedback{color:#f75a5a;font-size:12px;margin-bottom:6px}.invalid-feedback{display:block!important}"]
      }]
    }];
    TruUiErrorComponent.propDecorators = {
      control: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      language: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/framework/tru-ui/tru-ui.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TruUiModule = /*#__PURE__*/function () {
      function TruUiModule() {
        _classCallCheck(this, TruUiModule);
      }

      _createClass(TruUiModule, null, [{
        key: "forRoot",

        /**
         * @return {?}
         */
        value: function forRoot() {
          return {
            ngModule: TruUiModule,
            providers: [{
              provide: JsonFormFieldsService,
              useClass: TruUi,
              multi: true
            }]
          };
        }
      }]);

      return TruUiModule;
    }();

    TruUiModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [TruUiButtonComponent, TruUiStringComponent, TruUiErrorComponent, TruUiPhotoComponent, TruUiTextareaComponent, TruUiBooleanComponent, TruUiDateComponent, TruUiSelectComponent, TruUiNumberComponent, TruUiRadigroupComponent, TruUiCheckboxgroupComponent, TruUiMultiselectComponent, TruUiArrayComponent, TruUiAutocompleteComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], SharedModule, angular2_text_mask__WEBPACK_IMPORTED_MODULE_13__["TextMaskModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(), // BrowserAnimationsModule,
        ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_25__["TypeaheadModule"].forRoot()],
        entryComponents: [TruUiButtonComponent, TruUiStringComponent, TruUiErrorComponent, TruUiPhotoComponent, TruUiTextareaComponent, TruUiBooleanComponent, TruUiDateComponent, TruUiSelectComponent, TruUiNumberComponent, TruUiRadigroupComponent, TruUiCheckboxgroupComponent, TruUiMultiselectComponent, TruUiArrayComponent, TruUiAutocompleteComponent],
        exports: [TruUiButtonComponent, TruUiStringComponent, TruUiErrorComponent, TruUiPhotoComponent, TruUiTextareaComponent, TruUiBooleanComponent, TruUiDateComponent, TruUiSelectComponent, TruUiNumberComponent, TruUiRadigroupComponent, TruUiCheckboxgroupComponent, TruUiMultiselectComponent, TruUiArrayComponent, TruUiAutocompleteComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: trufla-ngx-tru-forms.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=trufla-ngx-tru-forms.js.map

    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
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
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
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
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
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
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
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
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
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
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
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
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-json-schema-examples></app-json-schema-examples> -->\n<div class=\"display-flex-row\">\n  <div class=\"w-50\">\n    <app-schema-dropdown [schemas]=\"allSchemaTitles\" (selectedSchemaChanged)=\"handleSelectedSchemaChanged($event)\"></app-schema-dropdown>\n    <app-schema-editor [schema]=\"schema\" (schemaHasChanged)=\"handleSchemaHasChanged($event)\"></app-schema-editor>\n  </div>\n  <div class=\"w-50\">\n    <app-framework-dropdown (frameworkChanged)=\"handleFrameWorkChanged($event)\"></app-framework-dropdown>\n    <router-outlet></router-outlet>\n    <app-submitted-data></app-submitted-data>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/framework-dropdown/framework-dropdown.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/framework-dropdown/framework-dropdown.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFrameworkDropdownFrameworkDropdownComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<select [value]=\"value\" class=\"demo_input\" (change)=\"handleFrameworkChange($event)\" name=\"\" id=\"\">\n  <option *ngFor=\"let framework of frameworks\" [value]=\"framework\">{{ startCase(framework) }}</option>\n</select>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/schema-dropdown/schema-dropdown.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/schema-dropdown/schema-dropdown.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSchemaDropdownSchemaDropdownComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<select class=\"demo_input\" (change)=\"handleSelectedSchemaChange($event)\">\n  <option *ngFor=\"let schema of schemas\" [value]=\"schema\">{{ startCase(schema) }}</option>\n</select>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/schema-editor/schema-editor.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/schema-editor/schema-editor.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSchemaEditorSchemaEditorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ngx-monaco-editor\n  class=\"template-editor\"\n  [options]=\"options\"\n  [model]=\"model\"\n  (ngModelChange)=\"handleSchemaChange($event)\"\n  [(ngModel)]=\"schema\"\n  ></ngx-monaco-editor>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/submitted-data/submitted-data.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/submitted-data/submitted-data.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSubmittedDataSubmittedDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"data\" class=\"form_data_result\">\n  <h5>Out put form data as JSON</h5>\n<!--  <ngx-monaco-editor [model]=\"model\" [options]=\"options\"></ngx-monaco-editor>-->\n  <pre>{{data}}</pre>\n</div>\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-container{\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.header{\n  width: 100%;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #e18c15;\n}\n\n.logo{\n  display: flex;\n  height: 100%;\n  align-items: center;\n  padding: 10px;\n}\n\n.logo img{\n  width: auto;\n  height: 60px;\n}\n\n.right-side{\n  display: flex;\n  justify-content: space-between;\n  width: 8%;\n  font-size: 20px;\n  height: 100%;\n  align-items: center;\n  margin: 0 20px;\n}\n\n.right-side p{\n  margin: 0;\n  color: #FFF;\n}\n\n.right-side i{\n  color: #FFF;\n  font-size: 35px;\n}\n\n.content, .intro{\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.intro img{\n  max-width: 300px;\n  margin: 50px 0;\n}\n\n.intro h4{\n  font-weight: bold;\n  color: #404040;\n  font-size: 2em;\n}\n\n.intro h1{\n  text-transform: uppercase;\n}\n\n.action-btns{\n  display: flex;\n  width: 35%;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.action-btns .btn{\n  min-width: 150px;\n  background-color: #e08d33;\n  color: #FFF;\n  text-transform: uppercase;\n  border-radius: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlcntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTE4YzE1O1xufVxuXG4ubG9nb3tcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubG9nbyBpbWd7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5yaWdodC1zaWRle1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA4JTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuXG4ucmlnaHQtc2lkZSBwe1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4ucmlnaHQtc2lkZSBpe1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4uY29udGVudCwgLmludHJve1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbnRybyBpbWd7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogNTBweCAwO1xufVxuXG4uaW50cm8gaDR7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzQwNDA0MDtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbi5pbnRybyBoMXtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmFjdGlvbi1idG5ze1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMzUlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFjdGlvbi1idG5zIC5idG57XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDhkMzM7XG4gIGNvbG9yOiAjRkZGO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _json_schema_examples_json_schema_examples_samples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./json-schema-examples/json-schema-examples.samples */
    "./src/app/json-schema-examples/json-schema-examples.samples.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _services_schema_listener_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/schema-listener.service */
    "./src/app/services/schema-listener.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(jsonSchemaSamples, schemaListenerService) {
        _classCallCheck(this, AppComponent);

        this.jsonSchemaSamples = jsonSchemaSamples;
        this.schemaListenerService = schemaListenerService;
        this.title = 'app';
        this.selectedSchemaTitle = 'simple_input';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.allSchemaTitles = this.getSchemasTitles();
          this.getSchema(this.selectedSchemaTitle); // this.framework = localStorage.getItem('framework') || 'material';

          this.schemaListenerService.schema = this.generateFormSchema;
        }
      }, {
        key: "getSchemasTitles",
        value: function getSchemasTitles() {
          return lodash__WEBPACK_IMPORTED_MODULE_2__["keys"](this.jsonSchemaSamples.json);
        }
      }, {
        key: "handleSelectedSchemaChanged",
        value: function handleSelectedSchemaChanged(e) {
          this.selectedSchemaTitle = e;
          this.getSchema(this.selectedSchemaTitle);
        }
      }, {
        key: "getSchema",
        value: function getSchema(title) {
          this.schema = this.jsonSchemaSamples.json[title];
          this.generateFormSchema = this.schema;
        }
      }, {
        key: "handleSchemaHasChanged",
        value: function handleSchemaHasChanged(e) {
          try {
            this.generateFormSchema = JSON.parse(e);
          } catch (e) {
            console.log(e.message);
          }

          this.schemaListenerService.schema = this.generateFormSchema;
        }
      }, {
        key: "format",
        value: function format(json) {
          return JSON.stringify(json, null, 2);
        }
      }, {
        key: "handleFrameWorkChanged",
        value: function handleFrameWorkChanged(e) {
          this.framework = e; // localStorage.setItem('framework', this.framework);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _json_schema_examples_json_schema_examples_samples__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaExamplesSamples"]
      }, {
        type: _services_schema_listener_service__WEBPACK_IMPORTED_MODULE_3__["SchemaListenerService"]
      }];
    };

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_json_schema_examples_json_schema_examples_samples__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaExamplesSamples"], _services_schema_listener_service__WEBPACK_IMPORTED_MODULE_3__["SchemaListenerService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _components_schema_editor_schema_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/schema-editor/schema-editor.component */
    "./src/app/components/schema-editor/schema-editor.component.ts");
    /* harmony import */


    var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-monaco-editor */
    "./node_modules/ngx-monaco-editor/fesm2015/ngx-monaco-editor.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_schema_dropdown_schema_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/schema-dropdown/schema-dropdown.component */
    "./src/app/components/schema-dropdown/schema-dropdown.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_framework_dropdown_framework_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/framework-dropdown/framework-dropdown.component */
    "./src/app/components/framework-dropdown/framework-dropdown.component.ts");
    /* harmony import */


    var _json_schema_examples_json_schema_examples_samples__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./json-schema-examples/json-schema-examples.samples */
    "./src/app/json-schema-examples/json-schema-examples.samples.ts");
    /* harmony import */


    var _components_submitted_data_submitted_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/submitted-data/submitted-data.component */
    "./src/app/components/submitted-data/submitted-data.component.ts");
    /* harmony import */


    var _json_schema_examples_input_colour_input_colour_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./json-schema-examples/input-colour/input-colour.component */
    "./src/app/json-schema-examples/input-colour/input-colour.component.ts");
    /* harmony import */


    var ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-color-picker */
    "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modules-tru-ui-tru-ui-module */
        "modules-tru-ui-tru-ui-module").then(__webpack_require__.bind(null,
        /*! ./modules/tru-ui/tru-ui.module */
        "./src/app/modules/tru-ui/tru-ui.module.ts")).then(function (m) {
          return m.TruUiModuleExample;
        });
      }
    }, {
      path: 'bootstrap',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modules-bootstrap-bootstrap-module */
        "modules-bootstrap-bootstrap-module").then(__webpack_require__.bind(null,
        /*! ./modules/bootstrap/bootstrap.module */
        "./src/app/modules/bootstrap/bootstrap.module.ts")).then(function (m) {
          return m.BootstrapModule;
        });
      }
    }, {
      path: 'material',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modules-material-design-material-design-module */
        "modules-material-design-material-design-module").then(__webpack_require__.bind(null,
        /*! ./modules/material-design/material-design.module */
        "./src/app/modules/material-design/material-design.module.ts")).then(function (m) {
          return m.MaterialDesignModule;
        });
      }
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _components_schema_editor_schema_editor_component__WEBPACK_IMPORTED_MODULE_3__["SchemaEditorComponent"], _components_schema_dropdown_schema_dropdown_component__WEBPACK_IMPORTED_MODULE_6__["SchemaDropdownComponent"], _components_framework_dropdown_framework_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["FrameworkDropdownComponent"], _components_submitted_data_submitted_data_component__WEBPACK_IMPORTED_MODULE_10__["SubmittedDataComponent"], _json_schema_examples_input_colour_input_colour_component__WEBPACK_IMPORTED_MODULE_11__["InputColourComponent"]],
      imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes), ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__["MonacoEditorModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__["ColorPickerModule"]],
      providers: [_json_schema_examples_json_schema_examples_samples__WEBPACK_IMPORTED_MODULE_9__["JsonSchemaExamplesSamples"]],
      entryComponents: [_json_schema_examples_input_colour_input_colour_component__WEBPACK_IMPORTED_MODULE_11__["InputColourComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/framework-dropdown/framework-dropdown.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/components/framework-dropdown/framework-dropdown.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFrameworkDropdownFrameworkDropdownComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZnJhbWV3b3JrLWRyb3Bkb3duL2ZyYW1ld29yay1kcm9wZG93bi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/framework-dropdown/framework-dropdown.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/framework-dropdown/framework-dropdown.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: FrameworkDropdownComponent */

  /***/
  function srcAppComponentsFrameworkDropdownFrameworkDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FrameworkDropdownComponent", function () {
      return FrameworkDropdownComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FrameworkDropdownComponent = /*#__PURE__*/function () {
      function FrameworkDropdownComponent(router, activatedRoute, location) {
        _classCallCheck(this, FrameworkDropdownComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.frameworks = ['material', 'bootstrap', 'tru-ui'];
        this.frameworkChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FrameworkDropdownComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this40 = this;

          if (this.location.path()) {
            this.value = this.frameworks.find(function (f) {
              return _this40.location.path().indexOf(f) > -1;
            });
          } else {
            this.value = 'tru-ui';
          } // this.value = this.location.path() && this.location.path().indexOf('bootstrap') > -1 ? 'bootstrap' : 'material';

        }
      }, {
        key: "startCase",
        value: function startCase(value) {
          return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["startCase"])(value);
        }
      }, {
        key: "handleFrameworkChange",
        value: function handleFrameworkChange(e) {
          var framework = e.target.value;
          this.frameworkChanged.emit(framework);

          switch (framework) {
            case 'material':
              this.router.navigate(['material']);
              break;

            case 'bootstrap':
              this.router.navigate(['bootstrap']);
              break;

            case 'tru-ui':
              this.router.navigate(['']);
          }
        }
      }]);

      return FrameworkDropdownComponent;
    }();

    FrameworkDropdownComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], FrameworkDropdownComponent.prototype, "frameworkChanged", void 0);

    FrameworkDropdownComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-framework-dropdown',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./framework-dropdown.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/framework-dropdown/framework-dropdown.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./framework-dropdown.component.css */
      "./src/app/components/framework-dropdown/framework-dropdown.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])], FrameworkDropdownComponent);
    /***/
  },

  /***/
  "./src/app/components/schema-dropdown/schema-dropdown.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/components/schema-dropdown/schema-dropdown.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSchemaDropdownSchemaDropdownComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2NoZW1hLWRyb3Bkb3duL3NjaGVtYS1kcm9wZG93bi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/schema-dropdown/schema-dropdown.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/schema-dropdown/schema-dropdown.component.ts ***!
    \*************************************************************************/

  /*! exports provided: SchemaDropdownComponent */

  /***/
  function srcAppComponentsSchemaDropdownSchemaDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchemaDropdownComponent", function () {
      return SchemaDropdownComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SchemaDropdownComponent = /*#__PURE__*/function () {
      function SchemaDropdownComponent() {
        _classCallCheck(this, SchemaDropdownComponent);

        this.selectedSchemaChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SchemaDropdownComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "startCase",
        value: function startCase(value) {
          return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["startCase"])(value);
        }
      }, {
        key: "handleSelectedSchemaChange",
        value: function handleSelectedSchemaChange(e) {
          var selectedSchema = e.target.value;
          this.selectedSchemaChanged.emit(selectedSchema);
        }
      }]);

      return SchemaDropdownComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], SchemaDropdownComponent.prototype, "schemas", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], SchemaDropdownComponent.prototype, "selectedSchemaChanged", void 0);

    SchemaDropdownComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-schema-dropdown',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./schema-dropdown.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/schema-dropdown/schema-dropdown.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./schema-dropdown.component.css */
      "./src/app/components/schema-dropdown/schema-dropdown.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], SchemaDropdownComponent);
    /***/
  },

  /***/
  "./src/app/components/schema-editor/schema-editor.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/schema-editor/schema-editor.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSchemaEditorSchemaEditorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".template-editor {\n  height: 80vh;\n  /*width: 600px;*/\n  width: 90%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zY2hlbWEtZWRpdG9yL3NjaGVtYS1lZGl0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zY2hlbWEtZWRpdG9yL3NjaGVtYS1lZGl0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZW1wbGF0ZS1lZGl0b3Ige1xuICBoZWlnaHQ6IDgwdmg7XG4gIC8qd2lkdGg6IDYwMHB4OyovXG4gIHdpZHRoOiA5MCU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/schema-editor/schema-editor.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/schema-editor/schema-editor.component.ts ***!
    \*********************************************************************/

  /*! exports provided: SchemaEditorComponent */

  /***/
  function srcAppComponentsSchemaEditorSchemaEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchemaEditorComponent", function () {
      return SchemaEditorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_json_schema_examples_json_schema_examples_samples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/json-schema-examples/json-schema-examples.samples */
    "./src/app/json-schema-examples/json-schema-examples.samples.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SchemaEditorComponent = /*#__PURE__*/function () {
      function SchemaEditorComponent(jsonSchemaExamplesSamples) {
        _classCallCheck(this, SchemaEditorComponent);

        this.jsonSchemaExamplesSamples = jsonSchemaExamplesSamples;
        this.schemaHasChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.options = {
          theme: 'vs-dark',
          wordWrap: 'on'
        };
      }

      _createClass(SchemaEditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.schema = JSON.stringify(this.schema, null, 2);
          this.model = {
            value: this.schema,
            language: 'json'
          };
        }
      }, {
        key: "handleSchemaChange",
        value: function handleSchemaChange(e) {
          this.schemaHasChanged.emit(e);
        }
      }]);

      return SchemaEditorComponent;
    }();

    SchemaEditorComponent.ctorParameters = function () {
      return [{
        type: src_app_json_schema_examples_json_schema_examples_samples__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaExamplesSamples"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], SchemaEditorComponent.prototype, "schema", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], SchemaEditorComponent.prototype, "schemaHasChanged", void 0);

    SchemaEditorComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-schema-editor',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./schema-editor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/schema-editor/schema-editor.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./schema-editor.component.css */
      "./src/app/components/schema-editor/schema-editor.component.css"))["default"]]
    }), __metadata("design:paramtypes", [src_app_json_schema_examples_json_schema_examples_samples__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaExamplesSamples"]])], SchemaEditorComponent);
    /***/
  },

  /***/
  "./src/app/components/submitted-data/submitted-data.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/submitted-data/submitted-data.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSubmittedDataSubmittedDataComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form_data_result {\n  margin-top: 50px;\n}\n.form_data_result pre {\n  background: #1e1e1e;\n  color: #ce9178;\n  padding: 10px;\n  border-radius: 4px;\n  font-family: \"Droid Sans Mono\", monospace, monospace, \"Droid Sans Fallback\";\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 19px;\n  letter-spacing: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdWJtaXR0ZWQtZGF0YS9zdWJtaXR0ZWQtZGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMkVBQTJFO0VBQzNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VibWl0dGVkLWRhdGEvc3VibWl0dGVkLWRhdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtX2RhdGFfcmVzdWx0IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5mb3JtX2RhdGFfcmVzdWx0IHByZSB7XG4gIGJhY2tncm91bmQ6ICMxZTFlMWU7XG4gIGNvbG9yOiAjY2U5MTc4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkRyb2lkIFNhbnMgTW9ub1wiLCBtb25vc3BhY2UsIG1vbm9zcGFjZSwgXCJEcm9pZCBTYW5zIEZhbGxiYWNrXCI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/submitted-data/submitted-data.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/submitted-data/submitted-data.component.ts ***!
    \***********************************************************************/

  /*! exports provided: SubmittedDataComponent */

  /***/
  function srcAppComponentsSubmittedDataSubmittedDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubmittedDataComponent", function () {
      return SubmittedDataComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_data_listener_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/data-listener.service */
    "./src/app/services/data-listener.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SubmittedDataComponent = /*#__PURE__*/function () {
      function SubmittedDataComponent(dataservice) {
        _classCallCheck(this, SubmittedDataComponent);

        this.dataservice = dataservice;
      }

      _createClass(SubmittedDataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this41 = this;

          this.options = {
            readOnly: true
          };
          this.model = {
            value: this.data,
            language: 'json'
          };
          this.dataservice.data.subscribe(function (d) {
            if (d) {
              _this41.data = JSON.stringify(d, null, 2);
              _this41.model = {
                value: _this41.data,
                language: 'json'
              };
            }
          });
        }
      }]);

      return SubmittedDataComponent;
    }();

    SubmittedDataComponent.ctorParameters = function () {
      return [{
        type: _services_data_listener_service__WEBPACK_IMPORTED_MODULE_1__["DataListenerService"]
      }];
    };

    SubmittedDataComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-submitted-data',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./submitted-data.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/submitted-data/submitted-data.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./submitted-data.component.css */
      "./src/app/components/submitted-data/submitted-data.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_data_listener_service__WEBPACK_IMPORTED_MODULE_1__["DataListenerService"]])], SubmittedDataComponent);
    /***/
  },

  /***/
  "./src/app/json-schema-examples/input-colour/input-colour.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/json-schema-examples/input-colour/input-colour.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: InputColourComponent */

  /***/
  function srcAppJsonSchemaExamplesInputColourInputColourComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputColourComponent", function () {
      return InputColourComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @trufla/ngx-tru-forms */
    "./dist/ngx-tru-forms/fesm2015/trufla-ngx-tru-forms.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var InputColourComponent = /*#__PURE__*/function (_trufla_ngx_tru_forms) {
      _inherits(InputColourComponent, _trufla_ngx_tru_forms);

      var _super57 = _createSuper(InputColourComponent);

      function InputColourComponent() {
        _classCallCheck(this, InputColourComponent);

        return _super57.apply(this, arguments);
      }

      _createClass(InputColourComponent, [{
        key: "handleColorPickerChange",
        value: function handleColorPickerChange(val) {
          this.control.setValue(val);
        }
      }]);

      return InputColourComponent;
    }(_trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__["CommonComponent"]);

    InputColourComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      template: "\n    <label [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\">\n      {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <input\n      class=\"form-control\"\n      [name]=\"schema.key\"\n      [attr.type]=\"type()\"\n      [formControl]=\"control\"\n      [(colorPicker)]=\"color\"\n      [style.background]=\"color\"\n      [style.color]=\"color\"\n      [style.width]=\"'40px'\"\n      (colorPickerChange)=\"handleColorPickerChange($event)\"\n    />\n  "
    })], InputColourComponent);
    /***/
  },

  /***/
  "./src/app/json-schema-examples/json-schema-examples.samples.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/json-schema-examples/json-schema-examples.samples.ts ***!
    \**********************************************************************/

  /*! exports provided: JsonSchemaExamplesSamples */

  /***/
  function srcAppJsonSchemaExamplesJsonSchemaExamplesSamplesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonSchemaExamplesSamples", function () {
      return JsonSchemaExamplesSamples;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var JsonSchemaExamplesSamples = function JsonSchemaExamplesSamples() {
      _classCallCheck(this, JsonSchemaExamplesSamples);

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
              type: 'string',
              verify: 'true',
              format: 'email'
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
        localization: {
          title: [{
            language: 'en',
            value: 'login form'
          }, {
            language: 'fr',
            value: 'Formulaire de connexion'
          }],
          description: [{
            language: 'en',
            value: 'login form'
          }, {
            language: 'fr',
            value: 'Formulaire de connexion'
          }],
          type: 'object',
          'properties': {
            'first_name': {
              type: 'string',
              format: 'email',
              title: [{
                language: 'en',
                value: 'first_name'
              }, {
                language: 'fr',
                value: 'leprénom'
              }]
            },
            'last_name': {
              type: 'string',
              title: [{
                language: 'en',
                value: 'last_name'
              }, {
                language: 'fr',
                value: 'lenom de famille'
              }]
            }
          },
          required: ['first_name', 'last_name']
        },
        auto_complete: {
          title: 'Auto complete example',
          description: 'complete are common to forms',
          type: 'object',
          properties: {
            auto_complete: {
              type: 'string',
              format: 'autocomplete',
              "enum": ['1', '2', '3'],
              enumNames: [[{
                "language": "en",
                "value": "Hot Dog"
              }, {
                "language": "fr",
                "value": "Dešrainis"
              }], [{
                "language": "en",
                "value": "Pizza"
              }, {
                "language": "fr",
                "value": "pica"
              }], [{
                "language": "en",
                "value": "Mexican chicken"
              }, {
                "language": "fr",
                "value": "Mexican chicken"
              }]]
            }
          }
        },
        photo_example: {
          title: 'Photo example',
          description: 'Photos are common to forms',
          type: 'object',
          properties: {
            test_photo: {
              type: 'string',
              format: 'photo',
              maxSize: '2'
            }
          },
          required: ['test_photo']
        },
        photo_url: {
          title: 'Photo Url',
          type: 'object',
          properties: {
            photo_base64: {
              type: 'string',
              format: 'photo',
              imageFormat: ['png', 'gif'],
              maxSize: '5'
            },
            photo_url: {
              type: 'string',
              format: 'photo',
              maxSize: '4'
            }
          },
          required: ['photo_base64']
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
                },
                required: ['first_name', 'last_name']
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
              "enum": ['one', 'two', 'three'],
              format: 'multiselect'
            },
            gender: {
              type: 'string',
              "enum": ['male', 'female'],
              enumNames: ['Male', 'Female'],
              format: 'radiogroup'
            },
            insurance_duration: {
              type: 'number',
              "enum": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            },
            number_of_conviction: {
              type: 'number',
              "enum": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            },
            number_of_accidents: {
              type: 'number',
              "enum": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
          },
          required: ['first_name', 'last_name', 'driver_license_no', 'insurance_duration', 'number_of_conviction', 'number_of_accidents', 'effective_date']
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
              type: 'string'
            },
            last_name: {
              type: 'string'
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
                  "enum": ['Hot Dog', 'Pizza', 'Hamburger']
                },
                drink: {
                  type: 'string',
                  "enum": ['Pepsi', 'Coke', 'Sprite']
                }
              },
              oneOf: [{
                properties: {
                  food_like: {
                    "enum": ['Hamburger']
                  }
                },
                required: ['drink']
              }, {
                properties: {
                  'food_like': {
                    "enum": ['Pizza']
                  }
                }
              }, {
                properties: {
                  'food_like': {
                    "enum": ['Hot Dog']
                  }
                }
              }]
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
              "enum": ['js', 'sql', 'api'],
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
          type: 'object',
          'properties': {
            'photo': {
              type: 'string',
              'format': 'photo'
            },
            'accident_photos': {
              type: 'array',
              'items': {
                type: 'object',
                'properties': {
                  'photo': {
                    type: 'string',
                    'format': 'photo',
                    maximum: '1'
                  }
                }
              }
            },
            'billing_address': {
              type: 'boolean'
            },
            'full_name': {
              type: 'string',
              'default': 'now'
            },
            'dob': {
              type: 'string',
              'format': 'date'
            },
            'email': {
              type: 'string',
              'format': 'email'
            },
            'address': {
              type: 'object',
              'properties': {
                'street_1': {
                  type: 'string'
                },
                'street_2': {
                  type: 'string'
                },
                'city': {
                  type: 'string'
                },
                'state': {
                  type: 'string',
                  'enum': ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY']
                },
                'zip_code': {
                  type: 'string'
                }
              }
            },
            'birthday': {
              type: 'string'
            },
            'notes': {
              type: 'string'
            },
            'phone_numbers': {
              type: 'array',
              'items': {
                type: 'object',
                'properties': {
                  type: {
                    type: 'string',
                    'enum': ['cell', 'home', 'work'],
                    'enumNames': ['Cell', 'Home', 'Work']
                  },
                  'number': {
                    type: 'string'
                  }
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
              "enum": ['Hot Dog', 'Pizza', 'Hamburger']
            },
            pizza_type: {
              type: 'string',
              "enum": ['Marinara', 'Margherita', 'Vegetarian']
            },
            hamburger_meat: {
              type: 'string',
              "enum": ['Chicken', 'Beef', 'Lamb', 'Vegetarian']
            }
          },
          required: ['food_like'],
          oneOf: [{
            properties: {
              food_like: {
                "enum": ['Pizza']
              }
            },
            required: ['pizza_type']
          }, {
            properties: {
              food_like: {
                "enum": ['Hamburger']
              }
            },
            required: ['hamburger_meat']
          }, {
            properties: {
              food_like: {
                "enum": ['Hot Dog']
              }
            }
          }]
        },
        multiple_conditional_control: {
          title: 'Multiple Conditional Control',
          description: 'Add multiple conditional controls',
          type: 'object',
          properties: {
            food_like: {
              type: 'string',
              "enum": ['Hot Dog', 'Pizza', 'Hamburger']
            },
            pizza_type: {
              type: 'string',
              "enum": ['Marinara', 'Margherita', 'Vegetarian']
            },
            hamburger_meat: {
              type: 'string',
              "enum": ['Chicken', 'Beef', 'Lamb', 'Vegetarian']
            },
            vegetable_choice: {
              type: 'string',
              "enum": ['yes', 'no'],
              enumNames: ['Yes', 'No'],
              format: 'radiogroup'
            },
            vegetables: {
              type: 'string',
              "enum": ['Mushrooms', 'Tomatoes', 'Lettuce']
            }
          },
          required: ['food_like', 'vegetable_choice'],
          oneOf: [{
            properties: {
              food_like: {
                "enum": ['Pizza'],
                required: ['pizza_type']
              }
            }
          }, {
            properties: {
              food_like: {
                "enum": ['Hamburger'],
                required: ['hamburger_meat']
              }
            }
          }, {
            properties: {
              vegetable_choice: {
                "enum": ['yes'],
                required: ['vegetables']
              }
            }
          }]
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
              "enum": ['one', 'two', 'three'],
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
        }
      };
      this.data = {
        first_name: 'John',
        last_name: 'dave',
        photo_url: 'https://www.trufla.com/wp-content/uploads/2020/10/truLeads-car-insurance-workflow-ec.png',
        photo_base64: 'data:image/png;base64,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'
      };
    };

    JsonSchemaExamplesSamples = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], JsonSchemaExamplesSamples);
    /***/
  },

  /***/
  "./src/app/services/data-listener.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/data-listener.service.ts ***!
    \***************************************************/

  /*! exports provided: DataListenerService */

  /***/
  function srcAppServicesDataListenerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataListenerService", function () {
      return DataListenerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var DataListenerService = /*#__PURE__*/function () {
      function DataListenerService() {
        _classCallCheck(this, DataListenerService);

        this.myData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
      }

      _createClass(DataListenerService, [{
        key: "data",
        set: function set(data) {
          this.myData.next(data);
        },
        get: function get() {
          return this.myData;
        }
      }]);

      return DataListenerService;
    }();

    DataListenerService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [])], DataListenerService);
    /***/
  },

  /***/
  "./src/app/services/schema-listener.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/schema-listener.service.ts ***!
    \*****************************************************/

  /*! exports provided: SchemaListenerService */

  /***/
  function srcAppServicesSchemaListenerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchemaListenerService", function () {
      return SchemaListenerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SchemaListenerService = /*#__PURE__*/function () {
      function SchemaListenerService() {
        _classCallCheck(this, SchemaListenerService);

        this.mySchema = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
      }

      _createClass(SchemaListenerService, [{
        key: "schema",
        get: function get() {
          return this.mySchema;
        },
        set: function set(schema) {
          this.mySchema.next(schema);
        }
      }]);

      return SchemaListenerService;
    }();

    SchemaListenerService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [])], SchemaListenerService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/abdelhameed/Desktop/ngx-tru-forms/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map