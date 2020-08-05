function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-bootstrap-bootstrap-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/bootstrap/bootstrap.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/bootstrap/bootstrap.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesBootstrapBootstrapComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<jf-form\n  [schema]=\"schema\"\n  (handleSubmit)=\"handleSubmit($event)\"\n  [submit]=\"'submit'\"\n></jf-form>\n";
    /***/
  },

  /***/
  "./src/app/modules/bootstrap/bootstrap.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/modules/bootstrap/bootstrap.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesBootstrapBootstrapComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYm9vdHN0cmFwL2Jvb3RzdHJhcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/bootstrap/bootstrap.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/modules/bootstrap/bootstrap.component.ts ***!
    \**********************************************************/

  /*! exports provided: BootstrapComponent */

  /***/
  function srcAppModulesBootstrapBootstrapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BootstrapComponent", function () {
      return BootstrapComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_schema_listener_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/schema-listener.service */
    "./src/app/services/schema-listener.service.ts");
    /* harmony import */


    var _services_data_listener_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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

    var BootstrapComponent = /*#__PURE__*/function () {
      function BootstrapComponent(schemaListenerService, dataService) {
        _classCallCheck(this, BootstrapComponent);

        this.schemaListenerService = schemaListenerService;
        this.dataService = dataService;
      }

      _createClass(BootstrapComponent, [{
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
      }]);

      return BootstrapComponent;
    }();

    BootstrapComponent.ctorParameters = function () {
      return [{
        type: _services_schema_listener_service__WEBPACK_IMPORTED_MODULE_1__["SchemaListenerService"]
      }, {
        type: _services_data_listener_service__WEBPACK_IMPORTED_MODULE_2__["DataListenerService"]
      }];
    };

    BootstrapComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-bootstrap',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./bootstrap.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/bootstrap/bootstrap.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./bootstrap.component.css */
      "./src/app/modules/bootstrap/bootstrap.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_schema_listener_service__WEBPACK_IMPORTED_MODULE_1__["SchemaListenerService"], _services_data_listener_service__WEBPACK_IMPORTED_MODULE_2__["DataListenerService"]])], BootstrapComponent);
    /***/
  },

  /***/
  "./src/app/modules/bootstrap/bootstrap.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/bootstrap/bootstrap.module.ts ***!
    \*******************************************************/

  /*! exports provided: BootstrapModule */

  /***/
  function srcAppModulesBootstrapBootstrapModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BootstrapModule", function () {
      return BootstrapModule;
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


    var _bootstrap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bootstrap.component */
    "./src/app/modules/bootstrap/bootstrap.component.ts");
    /* harmony import */


    var _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @trufla/ngx-tru-forms */
    "./dist/ngx-tru-forms/fesm2015/trufla-ngx-tru-forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

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
      component: _bootstrap_component__WEBPACK_IMPORTED_MODULE_2__["BootstrapComponent"]
    }];

    var BootstrapModule = function BootstrapModule() {
      _classCallCheck(this, BootstrapModule);
    };

    BootstrapModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_bootstrap_component__WEBPACK_IMPORTED_MODULE_2__["BootstrapComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_3__["JsonFormBootstrap4Module"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), // JsonFormModule.forRoot(JsonFormBootstrap4Module),
      {
        ngModule: _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_3__["JsonFormModule"],
        providers: [{
          provide: _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_3__["JsonFormFieldsService"],
          useClass: _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_3__["JsonFormBootstrap4"],
          multi: true
        }]
      }],
      exports: [_bootstrap_component__WEBPACK_IMPORTED_MODULE_2__["BootstrapComponent"]]
    })], BootstrapModule);
    /***/
  }
}]);
//# sourceMappingURL=modules-bootstrap-bootstrap-module-es5.js.map