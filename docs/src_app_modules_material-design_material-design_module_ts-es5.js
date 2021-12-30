(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkngx_tru_forms_app"] = self["webpackChunkngx_tru_forms_app"] || []).push([["src_app_modules_material-design_material-design_module_ts"], {
    /***/
    41139:
    /*!**********************************************************************!*\
      !*** ./src/app/modules/material-design/material-design.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaterialDesignComponent": function MaterialDesignComponent() {
          return (
            /* binding */
            _MaterialDesignComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _json_schema_examples_input_colour_input_colour_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../json-schema-examples/input-colour/input-colour.component */
      5505);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services_schema_listener_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/schema-listener.service */
      66338);
      /* harmony import */


      var _services_data_listener_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/data-listener.service */
      19648);
      /* harmony import */


      var _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @trufla/ngx-tru-forms */
      80988);

      var _MaterialDesignComponent = /*#__PURE__*/function () {
        function _MaterialDesignComponent(schemaListenerService, dataService) {
          _classCallCheck(this, _MaterialDesignComponent);

          this.schemaListenerService = schemaListenerService;
          this.dataService = dataService;
        }

        _createClass(_MaterialDesignComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.fields = {
              'colour': _json_schema_examples_input_colour_input_colour_component__WEBPACK_IMPORTED_MODULE_0__.InputColourComponent
            };
            this.schemaListenerService.schema.subscribe(function (d) {
              return _this.schema = d;
            });
          }
        }, {
          key: "handleSubmit",
          value: function handleSubmit(e) {
            this.dataService.data = e;
            this.btnDisabled = true;
          }
        }]);

        return _MaterialDesignComponent;
      }();

      _MaterialDesignComponent.ɵfac = function MaterialDesignComponent_Factory(t) {
        return new (t || _MaterialDesignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_schema_listener_service__WEBPACK_IMPORTED_MODULE_1__.SchemaListenerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_data_listener_service__WEBPACK_IMPORTED_MODULE_2__.DataListenerService));
      };

      _MaterialDesignComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _MaterialDesignComponent,
        selectors: [["app-material-design"]],
        decls: 1,
        vars: 3,
        consts: [[3, "schema", "fields", "submit", "handleSubmit"]],
        template: function MaterialDesignComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "jf-form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("handleSubmit", function MaterialDesignComponent_Template_jf_form_handleSubmit_0_listener($event) {
              return ctx.handleSubmit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("schema", ctx.schema)("fields", ctx.fields)("submit", "submit");
          }
        },
        directives: [_trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_3__.JsonFormComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXRlcmlhbC1kZXNpZ24uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    5482:
    /*!*******************************************************************!*\
      !*** ./src/app/modules/material-design/material-design.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaterialDesignModule": function MaterialDesignModule() {
          return (
            /* binding */
            _MaterialDesignModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _material_design_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./material-design.component */
      41139);
      /* harmony import */


      var _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @trufla/ngx-tru-forms */
      80988);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _material_design_component__WEBPACK_IMPORTED_MODULE_0__.MaterialDesignComponent
      }];

      var _MaterialDesignModule = /*#__PURE__*/_createClass(function _MaterialDesignModule() {
        _classCallCheck(this, _MaterialDesignModule);
      });

      _MaterialDesignModule.ɵfac = function MaterialDesignModule_Factory(t) {
        return new (t || _MaterialDesignModule)();
      };

      _MaterialDesignModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _MaterialDesignModule
      });
      _MaterialDesignModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__.JsonFormMaterialModule, {
          ngModule: _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__.JsonFormModule,
          providers: [{
            provide: _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__.JsonFormFieldsService,
            useClass: _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__.JsonFormMaterial,
            multi: true
          }]
        }]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_MaterialDesignModule, {
          declarations: [_material_design_component__WEBPACK_IMPORTED_MODULE_0__.MaterialDesignComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__.JsonFormMaterialModule, _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__.JsonFormModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_modules_material-design_material-design_module_ts-es5.js.map