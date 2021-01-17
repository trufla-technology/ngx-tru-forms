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


    var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! text-mask-addons/dist/createNumberMask */
    "./node_modules/text-mask-addons/dist/createNumberMask.js");
    /* harmony import */


    var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! angular2-text-mask */
    "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
    /* harmony import */


    var angular2_text_mask__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
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
          is_match: 'Value not matching'
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
          is_match: 'valeur nesutampa'
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
       */
      function CommonComponent(sanitizer, cd, localeService, validationFeedbackTranslation) {
        _classCallCheck(this, CommonComponent);

        this.sanitizer = sanitizer;
        this.cd = cd;
        this.localeService = localeService;
        this.validationFeedbackTranslation = validationFeedbackTranslation;
        this.confirmInput = new SchemaFormControl('');
        this.disabled = false;
        this.isWebView = false;

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
          return this.validationFeedbackTranslation.validation[this.language || 'en'];
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
        var _this3;

        _classCallCheck(this, DateViewComponent);

        _this3 = _super9.apply(this, arguments);
        _this3.numberMask = text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_10___default()({
          allowDecimal: false,
          prefix: ''
        });
        return _this3;
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
        var _this4;

        _classCallCheck(this, MoneyViewComponent);

        _this4 = _super13.apply(this, arguments);
        _this4.numberMask = text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_10___default()({
          allowDecimal: false,
          prefix: ''
        });
        return _this4;
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
          var _this5 = this;

          if (Array.isArray(titleArray)) {
            /** @type {?} */
            var translatedTitle = titleArray.filter(
            /**
            * @param {?} val
            * @return {?}
            */
            function (val) {
              return val.language === _this5.language;
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
          var _this6 = this;

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
              formGroup.addControl(key, _this6.cloneControl(controls[key]));
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
              formArray.push(_this6.cloneControl(formControl));
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
          var _this7 = this;

          Object.keys(this.fields).forEach(
          /**
          * @param {?} f
          * @return {?}
          */
          function (f) {
            _this7.jf[0].register(f, _this7.fields[f]);
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "constructForm",
        value: function constructForm() {
          var _this8 = this;

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
              if (_this8.control.isPartOf) {
                _this8.data = data;

                _this8.constructForm();
              }

              _this8.handleChange.emit({
                id: _this8.id,
                control: _this8.control,
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
          var _this9 = this;

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
              _this9.activeStep = _this9.activeStep || name;
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
          var _this10 = this;

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
            if (_this10.isOneOf(schema, prop, path)) {
              return;
            }

            if (schema.properties[prop].type === 'object') {
              /** @type {?} */
              var groupData = data && data.hasOwnProperty(prop) ? data[prop] : {};
              /** @type {?} */

              var groupStyle = style && style.hasOwnProperty(prop) ? style[prop] : {};
              group[prop] = new SchemaFormGroup(_this10.generateForm(schema.properties[prop], {}, groupData, groupStyle, [].concat(path, prop)));
              group[prop].schema = schema.properties[prop];
              group[prop].schema.key = prop;
              group[prop].schema.id = _this10.id;
              group[prop].style = groupStyle;
            } else if (schema.properties[prop].type === 'array' && !_this10.isFormat(schema.properties[prop], 'multiselect')) {
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
                  control.schema.id = _this10.id;
                  control.valueChanges.subscribe(
                  /**
                  * @param {?} event
                  * @return {?}
                  */
                  function (event) {
                    return _this10.handleOnChange(prop, event);
                  });
                  control.isRequired = schema.hasOwnProperty('required') && schema.required.indexOf(prop) > -1;

                  if (control.isRequired) {
                    _this10.requiredFields++;
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
                  var g = new SchemaFormGroup(_this10.generateForm(schema.properties[prop].items, {}, dataAtIndex, {}, [].concat(path, prop)));
                  g.schema = schema.properties[prop];
                  return g;
                });
              }

              group[prop] = new SchemaFormArray(fbArray);
              group[prop].schema = schema.properties[prop];
              group[prop].schema.key = prop;
              group[prop].schema.id = _this10.id;
              group[prop].style = arrayStyle;
            } else if (_this10.isVisible(schema.properties[prop])) {
              /** @type {?} */
              var control = new SchemaFormControl(_this10.df.get(prop, schema, data), _this10.vl.get(prop, schema, path, _this10.language));
              control.schema = Object.assign({}, schema.properties[prop]);
              control.schema.key = prop;
              control.schema.id = _this10.id;
              control.data = _this10.df.get(prop, schema, data);
              control.style = style && style.hasOwnProperty(prop) ? style[prop] : {};
              control.valueChanges.subscribe(
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                return _this10.handleOnChange(prop, event, _this10.inOneOf(schema, prop));
              });
              control.isRequired = schema.hasOwnProperty('required') && schema.required.indexOf(prop) > -1;

              if (control.isRequired) {
                _this10.requiredFields++;
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
          var _this11 = this;

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

              var value = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["get"])(_this11.data, dataPath, null);

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
          var _this12 = this;

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
              return s.name === _this12.activeStep;
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
          var _this13 = this;

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
              return s.name === _this13.activeStep;
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
          var _this14 = this;

          Object.keys(controls).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            if (controls[key].hasOwnProperty('controls')) {
              _this14.touchAll(controls[key].controls);
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
          var _this15 = this;

          Object.keys(schema.properties).forEach(
          /**
          * @param {?} prop
          * @return {?}
          */
          function (prop) {
            if (schema.properties[prop].hasOwnProperty('$ref')) {
              schema.properties[prop] = _this15.schema.definitions[schema.properties[prop]['$ref'].replace('#/definitions/', '')];
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
        var _this16;

        _classCallCheck(this, CheckboxgroupComponent);

        _this16 = _super17.apply(this, arguments);
        _this16.checkboxGroupValues = [];
        return _this16;
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
        var _this17;

        _classCallCheck(this, TextareaComponent);

        _this17 = _super19.apply(this, arguments);
        _this17.randomSuffix = Math.random().toString(36).substring(7);
        return _this17;
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
          var _this18 = this;

          /** @type {?} */
          var file = event.target.files[0];
          /** @type {?} */

          var reader = new FileReader();

          reader.onloadend =
          /**
          * @return {?}
          */
          function () {
            _this18.processFile(reader.result, file.type).then(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              _this18.photoData = data.toString();

              _this18.control.setValue(_this18.photoData);
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
        var _this19;

        _classCallCheck(this, RadiogroupComponent);

        _this19 = _super24.apply(this, arguments);
        _this19.randomSuffix = Math.random().toString(36).substring(7);
        return _this19;
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
        var _this20;

        _classCallCheck(this, MoneyComponent);

        _this20 = _super27.apply(this, arguments);
        _this20.numberMask = text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_10___default()({
          allowDecimal: false,
          prefix: ''
        });
        return _this20;
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
        var _this21;

        _classCallCheck(this, JsonFormBootstrap4);

        _this21 = _super28.apply(this, arguments);
        _this21.fieldTypes = {
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
        return _this21;
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
          var _this22 = this;

          if (Array.isArray(titleArray)) {
            /** @type {?} */
            var translatedTitle = titleArray.filter(
            /**
            * @param {?} val
            * @return {?}
            */
            function (val) {
              return val.language === _this22.language;
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
          var _this23 = this;

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
            if (_this23.cancel.length > 0) {
              _this23.handleClick.emit(event);
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
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__["TextMaskModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
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
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], SharedModule],
        exports: [CommonComponent, JsonFormComponent],
        entryComponents: [JsonFormComponent],
        providers: [JsonFormDefaultsService, JsonFormValidatorsService, ValidationFeedbackTranslation],
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
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__["TextMaskModule"], SharedModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot()],
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
        var _this24;

        _classCallCheck(this, PhotoMaterialComponent);

        _this24 = _super34.apply(this, arguments);
        _this24.error = false;
        return _this24;
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
          var _this25 = this;

          /** @type {?} */
          var file = event.target.files[0];
          /** @type {?} */

          var reader = new FileReader();

          reader.onloadend =
          /**
          * @return {?}
          */
          function () {
            _this25.processFile(reader.result, file.type).then(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              _this25.error = false;
              _this25.photoData = data.toString();

              _this25.control.setValue(_this25.photoData);
            })["catch"](
            /**
            * @param {?} err
            * @return {?}
            */
            function (err) {
              _this25.error = true;
            });
          };

          reader.onerror =
          /**
          * @return {?}
          */
          function () {
            _this25.error = true;
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
        var _this26;

        _classCallCheck(this, CheckboxgroupMaterialComponent);

        _this26 = _super37.apply(this, arguments);
        _this26.checkboxGroupValues = [];
        _this26.randomSuffix = Math.random().toString(36).substring(7);
        return _this26;
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
        var _this27;

        _classCallCheck(this, JsonFormMaterial);

        _this27 = _super42.apply(this, arguments);
        _this27.fieldTypes = {
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
        return _this27;
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
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__["TextMaskModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__["MatMomentDateModule"], SharedModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot()],
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
        template: "<div class=\"tru-ui-input-container\">\n<label  class=\"tru-ui-label\"\n[ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\" *ngIf=\"type() !== 'hidden'\">\n<span [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n</label>\n<button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\" class=\"tru-ui-button\">Info</button>\n<input\nclass=\"tru-ui-input-control\"\n[attr.name]=\"schema.key\"\n[attr.type]=\"type()\"\n[formControl]=\"control\"\n[attr.maxLength]=\"schema.maxLength || null\"\n[attr.minLength]=\"schema.minLength || null\"\n[attr.disabled]=\"disabled\"\n[textMask]=\"{ mask: getMask() }\"\n[ngClass]=\"{'empty': control.value === '' && !isRequired()}\"\n(change)=\"isMatch()\"\n/>\n<div *ngIf=\"schema.verify\" style=\"margin-top: 1rem\">\n    <label  class=\"tru-ui-label\"\n    [ngClass]=\"['jf-label', schema.key, (isRequired() ? 'required' : '')]\" *ngIf=\"type() !== 'hidden'\">\n    <span > {{ getLanguage().confirm}} {{title()}}</span><sup *ngIf=\"isRequired()\">*</sup>\n    </label>\n    <input\n    class=\"tru-ui-input-control\"\n    [attr.type]=\"type()\"\n    [formControl]=\"confirmInput\"\n    [attr.maxLength]=\"schema.maxLength || null\"\n    [attr.minLength]=\"schema.minLength || null\"\n    [attr.disabled]=\"disabled\"\n    [textMask]=\"{ mask: getMask() }\"\n    (change)=\"isMatch()\"\n    />\n</div>\n<jf-tru-ui-error [control]=\"control\" [language]=\"language || 'en'\"></jf-tru-ui-error>\n</div>",
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
        var _this28;

        _classCallCheck(this, TruUiPhotoComponent);

        _this28 = _super45.apply(this, arguments);
        _this28.selectFile = false;
        return _this28;
      }
      /**
       * @return {?}
       */


      _createClass(TruUiPhotoComponent, [{
        key: "resetUpload",
        value: function resetUpload() {
          this.file = {};
          this.selectFile = false;
          this.control.reset();
        }
        /**
         * @param {?} files
         * @return {?}
         */

      }, {
        key: "handleDrop",
        value: function handleDrop(files) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_23__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var file;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.file = files[0];
                    this.selectFile = true;
                    /** @type {?} */

                    _context.next = 4;
                    return this.toBase64(this.file);

                  case 4:
                    file = _context.sent;
                    this.photoData = file.toString();
                    this.control.setValue(this.photoData);

                  case 7:
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
          return data.toString().substring(0, 4);
        }
        /**
         * @param {?} files
         * @return {?}
         */

      }, {
        key: "dragAndDrop",
        value: function dragAndDrop(files) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_23__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var file;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.file = files.target.files[0];
                    this.selectFile = true;
                    /** @type {?} */

                    _context2.next = 4;
                    return this.toBase64(this.file);

                  case 4:
                    file = _context2.sent;
                    this.photoData = file.toString();
                    this.control.setValue(this.photoData);

                  case 7:
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
      }]);

      return TruUiPhotoComponent;
    }(CommonComponent);

    TruUiPhotoComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'jf-tru-ui-photo',
        template: "<label [attr.class]=\"schema.key\" [ngClass]=\"{'required': isRequired()}\" style=\"margin-bottom: 6px;\">\n    <span class=\"tru-ui-lable\" [innerHTML]=\"title()\"></span><sup *ngIf=\"isRequired()\">*</sup>\n</label>\n<div class=\"tru-form-group\" jfDragAndDrop (filesDropped)=\"handleDrop($event);fileInput.value = null\">\n  \n    <label [ngClass]=\"{'d-none': getControlValue().length > 0}\"  style=\"margin-bottom: 0 !important;\">\n      <div class=\"tru-drag-and-drop\">\n        <span *ngIf=\"language === 'en'; else french\">Drop your file here or <span class=\"primary-color browse-btn\">Browse</span></span>\n        <ng-template #french><span>D\xE9posez votre fichier ici ou <span class=\"primary-color browse-btn\">naviguez</span></span></ng-template>\n      </div>\n    <input #fileInput\n      style=\"display: none\" class=\"tru-input\" type=\"file\" (change)=\"dragAndDrop($event);fileInput.value = null\"  />\n    </label>\n    <div class=\"file-preview-container\"  [ngClass]=\"{'d-none': !getControlValue().length}\">\n      <div style=\"max-width: 165px;text-overflow: ellipsis;overflow: hidden;display: block;\"><small >{{file?.name || title()}}</small></div>\n      <div>\n        <small style=\"color: #212121;font-size: 12px\" *ngIf=\"file && file.size\" >{{shortenSize(file?.size/1024/1024)}}MB</small>\n        <button class=\"btn-remove\" style=\"cursor: pointer\" type=\"button\" (click)=\"resetUpload()\">\n            <svg width=\"12px\" height=\"12px\" viewBox=\"0 0 12 12\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <g id=\"Full-Admin\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                    <g id=\"My-Documents-listing-add-sidebar-Progress\" transform=\"translate(-1402.000000, -196.000000)\" fill=\"#FFFFFF\" fill-rule=\"nonzero\">\n                        <g id=\"Group-32\" transform=\"translate(1140.000000, 60.000000)\">\n                            <g id=\"Group-27\">\n                                <g id=\"Group-26\">\n                                    <g id=\"Group-11\" transform=\"translate(20.000000, 130.000000)\">\n                                        <g id=\"Group-10\">\n                                            <g id=\"Group-21\" transform=\"translate(1.000000, 0.000000)\">\n                                                <g id=\"Group-33\">\n                                                    <g id=\"Group-24\">\n                                                        <g id=\"Group-7-Copy\" transform=\"translate(235.000000, 0.000000)\">\n                                                            <g id=\"Group-13\">\n                                                                <path d=\"M6.75,7.96875 L6.75,7.3125 C6.75,7.00078125 7.0186942,6.75 7.35267857,6.75 L10.1651786,6.75 L10.4012277,6.31171875 C10.5016741,6.11953125 10.7101004,6 10.9386161,6 L13.8088728,6 C14.0373884,6 14.2458147,6.11953125 14.3487723,6.31171875 L14.5848214,6.75 L17.3973214,6.75 C17.7313058,6.75 18,7.00078125 18,7.3125 L18,7.96875 C18,8.1234375 17.8643973,8.25 17.6986607,8.25 L7.05133929,8.25 C6.88560268,8.25 6.75,8.1234375 6.75,7.96875 Z M17.1964286,9.28125 L17.1964286,16.875 C17.1964286,17.4960938 16.656529,18 15.9910714,18 L8.75892857,18 C8.09347098,18 7.55357143,17.4960938 7.55357143,16.875 L7.55357143,9.28125 C7.55357143,9.1265625 7.68917411,9 7.85491071,9 L16.8950893,9 C17.0608259,9 17.1964286,9.1265625 17.1964286,9.28125 Z M10.3660714,10.875 C10.3660714,10.66875 10.1852679,10.5 9.96428571,10.5 C9.74330357,10.5 9.5625,10.66875 9.5625,10.875 L9.5625,16.125 C9.5625,16.33125 9.74330357,16.5 9.96428571,16.5 C10.1852679,16.5 10.3660714,16.33125 10.3660714,16.125 L10.3660714,10.875 Z M12.7767857,10.875 C12.7767857,10.66875 12.5959821,10.5 12.375,10.5 C12.1540179,10.5 11.9732143,10.66875 11.9732143,10.875 L11.9732143,16.125 C11.9732143,16.33125 12.1540179,16.5 12.375,16.5 C12.5959821,16.5 12.7767857,16.33125 12.7767857,16.125 L12.7767857,10.875 Z M15.1875,10.875 C15.1875,10.66875 15.0066964,10.5 14.7857143,10.5 C14.5647321,10.5 14.3839286,10.66875 14.3839286,10.875 L14.3839286,16.125 C14.3839286,16.33125 14.5647321,16.5 14.7857143,16.5 C15.0066964,16.5 15.1875,16.33125 15.1875,16.125 L15.1875,10.875 Z\" id=\"trash-alt\"></path>\n                                                            </g>\n                                                        </g>\n                                                    </g>\n                                                </g>\n                                            </g>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </svg>        \n         </button>\n      </div>\n    </div>\n<jf-tru-ui-error [control]=\"control\" [language]=\"language || 'en'\"></jf-tru-ui-error>\n  </div>",
        styles: [".tru-ui-lable{font-size:14px;color:#8c8c8c;margin-bottom:6px;padding:0}.tru-drag-and-drop{text-align:center;padding:30px!important;background-color:#fafafa;border:1px dashed #bfbfbf;border-radius:6px}.tru-drag-and-drop>span{font-size:12px;color:#bfbfbf}.browse-btn:hover{cursor:pointer;text-decoration:underline}.tru-form-actions{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;margin-top:30px;margin-left:23px}.file-preview-container{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.reset-btn{width:24px;height:24px;margin-left:3px;border-radius:3px;border-style:none}.d-none{display:none}.btn-remove{background-color:#f75757;width:24px;height:24px;margin-left:3px;border-radius:3px;border-style:none}"]
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
        var _this29;

        _classCallCheck(this, TruUiTextareaComponent);

        _this29 = _super46.apply(this, arguments);
        _this29.randomSuffix = Math.random().toString(36).substring(7);
        return _this29;
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
        var _this30;

        _classCallCheck(this, TruUiRadigroupComponent);

        _this30 = _super51.apply(this, arguments);
        _this30.randomSuffix = Math.random().toString(36).substring(7);
        return _this30;
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
        var _this31;

        _classCallCheck(this, TruUiCheckboxgroupComponent);

        _this31 = _super52.apply(this, arguments);
        _this31.checkboxGroupValues = [];
        return _this31;
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
          var _this32 = this;

          if (Array.isArray(titleArray)) {
            /** @type {?} */
            var translatedTitle = titleArray.filter(
            /**
            * @param {?} val
            * @return {?}
            */
            function (val) {
              return val.language === _this32.language;
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
          var _this33 = this;

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
              formGroup.addControl(key, _this33.cloneControl(controls[key]));
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
              formArray.push(_this33.cloneControl(formControl));
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
        var _this34;

        _classCallCheck(this, TruUiAutocompleteComponent);

        _this34 = _super54.apply(this, arguments);
        _this34.selectedValue = '';
        _this34.values = [];
        return _this34;
      }
      /**
       * @return {?}
       */


      _createClass(TruUiAutocompleteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this35 = this;

          if (this.schema.enumNames) {
            this.values = [];
            this.schema["enum"].map(
            /**
            * @param {?} enm
            * @param {?} i
            * @return {?}
            */
            function (enm, i) {
              _this35.values.push({
                "enum": enm,
                enumName: _this35.schema.enumNames[i]
              });
            });
          } else {
            this.values = [];
            this.schema["enum"].map(
            /**
            * @param {?} enm
            * @return {?}
            */
            function (enm) {
              _this35.values.push({
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
          var _this36 = this;

          if (this.selectedValue !== '') {
            /** @type {?} */
            var searchValue = [];
            searchValue = this.schema.enumNames ? this.values.filter(
            /**
            * @param {?} en
            * @return {?}
            */
            function (en) {
              return en.enumName === _this36.selectedValue;
            }) : this.values.filter(
            /**
            * @param {?} en
            * @return {?}
            */
            function (en) {
              return en["enum"] === _this36.selectedValue;
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
        var _this37;

        _classCallCheck(this, TruUi);

        _this37 = _super55.apply(this, arguments);
        _this37.fieldTypes = {
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
        return _this37;
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
        template: "<div *ngIf=\"control.invalid && (control.dirty || control.touched)\" class=\"invalid-feedback tru-ui-feedback\">\n    <ng-container *ngIf=\"control.errors && control.errors['required']\">\n      {{getLanguage().required}}\n    </ng-container>\n    <ng-container *ngIf=\"control.errors && control.errors['pattern']\">\n      {{getLanguage().invalid}}\n    </ng-container>\n    <ng-container *ngIf=\"control.errors && control.errors['isMatch']\">\n      {{getLanguage().is_match}}\n    </ng-container>\n    <ng-container *ngIf=\"control.errors && control.errors['email']\">\n      {{getLanguage().email_invalid}}\n    </ng-container>\n    <ng-container *ngIf=\"control.errors && control.errors['minlength']\">\n      {{getLanguage().minimum_invalid}} {{control.errors['minlength']['requiredLength']}} {{getLanguage().characters}}\n    </ng-container>\n    <ng-container *ngIf=\"control.errors && control.errors['maxlength']\">\n      {{getLanguage().maximum_invalid}} {{control.errors['maxlength']['requiredLength']}}  {{getLanguage().characters}}\n    </ng-container>\n    <ng-container *ngIf=\"control.errors && control.errors['min']\">\n      {{getLanguage().greater_than}} {{control.errors['min']['min']}}\n    </ng-container>\n    <ng-container *ngIf=\"control.errors && control.errors['max']\">\n      {{getLanguage().less_than}}  {{control.errors['max']['max']}}\n    </ng-container>\n    <ng-container *ngIf=\"control.errors && control.errors['notInMenu']\">\n      {{getLanguage().not_in_menu}}\n    </ng-container>\n    <ng-container *ngIf=\"control.errors && control.errors['customError']\">\n      {{getLanguage().invalid}}\n      {{control.errors['customError']}} \n    </ng-container>\n  </div>",
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
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], SharedModule, angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__["TextMaskModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(), // BrowserAnimationsModule,
        ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_24__["TypeaheadModule"].forRoot()],
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
          var _this38 = this;

          if (this.location.path()) {
            this.value = this.frameworks.find(function (f) {
              return _this38.location.path().indexOf(f) > -1;
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
          var _this39 = this;

          this.options = {
            readOnly: true
          };
          this.model = {
            value: this.data,
            language: 'json'
          };
          this.dataservice.data.subscribe(function (d) {
            if (d) {
              _this39.data = JSON.stringify(d, null, 2);
              _this39.model = {
                value: _this39.data,
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
          title: 'Photo example',
          description: 'Photos are common to forms',
          type: 'object',
          properties: {
            auto_complete: {
              type: 'string',
              format: 'autocomplete',
              "enum": ['1', '2', '3'],
              enumNames: ['js', 'sql', 'api']
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
                    'format': 'photo'
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
        last_name: 'dave'
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