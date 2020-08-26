function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-tru-ui-tru-ui-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tru-ui/tru-ui.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tru-ui/tru-ui.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTruUiTruUiComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isArray(schema.title)\">\n<h6>Language</h6>\n<select  class=\"demo_input\" (change)=\"changeLanguage($event.target.value)\">\n  <option value=\"en\">English</option>\n  <option value=\"fr\">Frensh</option>\n</select>\n</div>\n<jf-form\n  [schema]=\"schema\"\n  (handleSubmit)=\"handleSubmit($event)\"\n  [language]=\"language\"\n  [submit]=\"'submit'\"\n></jf-form>";
    /***/
  },

  /***/
  "./src/app/modules/tru-ui/tru-ui.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/modules/tru-ui/tru-ui.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTruUiTruUiComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdHJ1LXVpL3RydS11aS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/tru-ui/tru-ui.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/modules/tru-ui/tru-ui.component.ts ***!
    \****************************************************/

  /*! exports provided: TruUiComponent */

  /***/
  function srcAppModulesTruUiTruUiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TruUiComponent", function () {
      return TruUiComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_data_listener_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/data-listener.service */
    "./src/app/services/data-listener.service.ts");
    /* harmony import */


    var src_app_services_schema_listener_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/schema-listener.service */
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

    var TruUiComponent = /*#__PURE__*/function () {
      function TruUiComponent(schemaListenerService, dataService) {
        _classCallCheck(this, TruUiComponent);

        this.schemaListenerService = schemaListenerService;
        this.dataService = dataService;
      }

      _createClass(TruUiComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.schemaListenerService.schema.subscribe(function (d) {
            return _this.schema = d;
          });
        }
      }, {
        key: "handleSubmit",
        value: function handleSubmit(e) {
          this.dataService.data = e;
        }
      }, {
        key: "changeLanguage",
        value: function changeLanguage(lang) {
          this.language = lang;
        }
      }, {
        key: "isArray",
        value: function isArray(array) {
          return Array.isArray(array);
        }
      }]);

      return TruUiComponent;
    }();

    TruUiComponent.ctorParameters = function () {
      return [{
        type: src_app_services_schema_listener_service__WEBPACK_IMPORTED_MODULE_2__["SchemaListenerService"]
      }, {
        type: src_app_services_data_listener_service__WEBPACK_IMPORTED_MODULE_1__["DataListenerService"]
      }];
    };

    TruUiComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-tru-ui',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./tru-ui.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tru-ui/tru-ui.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./tru-ui.component.css */
      "./src/app/modules/tru-ui/tru-ui.component.css"))["default"]]
    }), __metadata("design:paramtypes", [src_app_services_schema_listener_service__WEBPACK_IMPORTED_MODULE_2__["SchemaListenerService"], src_app_services_data_listener_service__WEBPACK_IMPORTED_MODULE_1__["DataListenerService"]])], TruUiComponent);
    /***/
  },

  /***/
  "./src/app/modules/tru-ui/tru-ui.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/modules/tru-ui/tru-ui.module.ts ***!
    \*************************************************/

  /*! exports provided: TruUiModuleExample */

  /***/
  function srcAppModulesTruUiTruUiModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TruUiModuleExample", function () {
      return TruUiModuleExample;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _tru_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tru-ui.component */
    "./src/app/modules/tru-ui/tru-ui.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

    var routes = [{
      path: '',
      component: _tru_ui_component__WEBPACK_IMPORTED_MODULE_2__["TruUiComponent"]
    }];

    var TruUiModuleExample = function TruUiModuleExample() {
      _classCallCheck(this, TruUiModuleExample);
    };

    TruUiModuleExample = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_tru_ui_component__WEBPACK_IMPORTED_MODULE_2__["TruUiComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__["TruUiModule"], {
        ngModule: _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__["JsonFormModule"],
        providers: [{
          provide: _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__["JsonFormFieldsService"],
          useClass: _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__["TruUi"],
          multi: true
        }]
      }]
    })], TruUiModuleExample);
    /***/
  }
}]);
//# sourceMappingURL=modules-tru-ui-tru-ui-module-es5.js.map