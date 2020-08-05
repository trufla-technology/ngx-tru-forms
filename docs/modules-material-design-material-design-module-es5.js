function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-material-design-material-design-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/material-design/material-design.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/material-design/material-design.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesMaterialDesignMaterialDesignComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<jf-form\n  [schema]=\"schema\"\n  (handleSubmit)=\"handleSubmit($event)\"\n  [submit]=\"'submit'\"\n></jf-form>\n";
    /***/
  },

  /***/
  "./src/app/modules/material-design/material-design.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/material-design/material-design.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesMaterialDesignMaterialDesignComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWF0ZXJpYWwtZGVzaWduL21hdGVyaWFsLWRlc2lnbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/material-design/material-design.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/material-design/material-design.component.ts ***!
    \**********************************************************************/

  /*! exports provided: MaterialDesignComponent */

  /***/
  function srcAppModulesMaterialDesignMaterialDesignComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialDesignComponent", function () {
      return MaterialDesignComponent;
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

    var MaterialDesignComponent = /*#__PURE__*/function () {
      function MaterialDesignComponent(schemaListenerService, dataService) {
        _classCallCheck(this, MaterialDesignComponent);

        this.schemaListenerService = schemaListenerService;
        this.dataService = dataService;
      }

      _createClass(MaterialDesignComponent, [{
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

      return MaterialDesignComponent;
    }();

    MaterialDesignComponent.ctorParameters = function () {
      return [{
        type: _services_schema_listener_service__WEBPACK_IMPORTED_MODULE_1__["SchemaListenerService"]
      }, {
        type: _services_data_listener_service__WEBPACK_IMPORTED_MODULE_2__["DataListenerService"]
      }];
    };

    MaterialDesignComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-material-design',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./material-design.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/material-design/material-design.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./material-design.component.css */
      "./src/app/modules/material-design/material-design.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_schema_listener_service__WEBPACK_IMPORTED_MODULE_1__["SchemaListenerService"], _services_data_listener_service__WEBPACK_IMPORTED_MODULE_2__["DataListenerService"]])], MaterialDesignComponent);
    /***/
  },

  /***/
  "./src/app/modules/material-design/material-design.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/modules/material-design/material-design.module.ts ***!
    \*******************************************************************/

  /*! exports provided: MaterialDesignModule */

  /***/
  function srcAppModulesMaterialDesignMaterialDesignModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialDesignModule", function () {
      return MaterialDesignModule;
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


    var _material_design_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./material-design.component */
    "./src/app/modules/material-design/material-design.component.ts");
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
      component: _material_design_component__WEBPACK_IMPORTED_MODULE_2__["MaterialDesignComponent"]
    }];

    var MaterialDesignModule = function MaterialDesignModule() {
      _classCallCheck(this, MaterialDesignModule);
    };

    MaterialDesignModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_material_design_component__WEBPACK_IMPORTED_MODULE_2__["MaterialDesignComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_3__["JsonFormMaterialModule"], {
        ngModule: _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_3__["JsonFormModule"],
        providers: [{
          provide: _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_3__["JsonFormFieldsService"],
          useClass: _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_3__["JsonFormMaterialModule"],
          multi: true
        }]
      } // JsonFormModule.forRoot(JsonFormMaterialModule),
      ]
    })], MaterialDesignModule);
    /***/
  }
}]);
//# sourceMappingURL=modules-material-design-material-design-module-es5.js.map