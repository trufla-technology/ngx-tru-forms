"use strict";
(self["webpackChunkngx_tru_forms_app"] = self["webpackChunkngx_tru_forms_app"] || []).push([["src_app_modules_bootstrap_bootstrap_module_ts"],{

/***/ 11977:
/*!**********************************************************!*\
  !*** ./src/app/modules/bootstrap/bootstrap.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BootstrapComponent": function() { return /* binding */ BootstrapComponent; }
/* harmony export */ });
/* harmony import */ var _json_schema_examples_input_colour_input_colour_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../json-schema-examples/input-colour/input-colour.component */ 5505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_schema_listener_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/schema-listener.service */ 66338);
/* harmony import */ var _services_data_listener_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data-listener.service */ 19648);
/* harmony import */ var _json_schema_examples_json_schema_examples_samples__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../json-schema-examples/json-schema-examples.samples */ 66454);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @trufla/ngx-tru-forms */ 80988);







class BootstrapComponent {
    constructor(schemaListenerService, dataService, jsonSchemaSamples) {
        this.schemaListenerService = schemaListenerService;
        this.dataService = dataService;
        this.jsonSchemaSamples = jsonSchemaSamples;
        this.language = 'en';
        this.viewOnly = localStorage.getItem('viewOnly') ? localStorage.getItem('viewOnly') === 'true' : false;
        this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'en';
    }
    ngOnInit() {
        this.fields = {
            'colour': _json_schema_examples_input_colour_input_colour_component__WEBPACK_IMPORTED_MODULE_0__.InputColourComponent
        };
        this.schemaListenerService.schema.subscribe((d) => this.schema = d);
        this.data = this.viewOnly ? this.jsonSchemaSamples.data : null;
    }
    toggleViewonly(e) {
        localStorage.setItem('viewOnly', e);
        this.viewOnly = e;
        window.location.reload();
    }
    handleSubmit(e) {
        this.dataService.data = e;
    }
    changeLanguage(lang) {
        localStorage.setItem('language', lang);
        this.language = lang;
    }
    toggleData(e) {
        this.data = e === 'true' ? this.jsonSchemaSamples.data : null;
    }
}
BootstrapComponent.ɵfac = function BootstrapComponent_Factory(t) { return new (t || BootstrapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_schema_listener_service__WEBPACK_IMPORTED_MODULE_1__.SchemaListenerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_data_listener_service__WEBPACK_IMPORTED_MODULE_2__.DataListenerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_json_schema_examples_json_schema_examples_samples__WEBPACK_IMPORTED_MODULE_3__.JsonSchemaExamplesSamples)); };
BootstrapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: BootstrapComponent, selectors: [["app-bootstrap"]], decls: 30, vars: 12, consts: [[2, "display", "flex", "flex-direction", "row", "justify-content", "center", "align-items", "center"], [2, "width", "100%"], [1, "demo_input", 3, "change"], ["value", "en", 3, "selected"], ["value", "fr", 3, "selected"], ["disabled", ""], ["value", "true", 3, "selected"], ["value", "false", 3, "selected"], [3, "schema", "fields", "submit", "language", "viewOnly", "data", "handleSubmit"]], template: function BootstrapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function BootstrapComponent_Template_select_change_4_listener($event) { return ctx.changeLanguage($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Frensh");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "View only");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function BootstrapComponent_Template_select_change_12_listener($event) { return ctx.toggleViewonly($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "select mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "on");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "off");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Data preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function BootstrapComponent_Template_select_change_22_listener($event) { return ctx.toggleData($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " select preview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "on");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "off");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "jf-form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("handleSubmit", function BootstrapComponent_Template_jf_form_handleSubmit_29_listener($event) { return ctx.handleSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", ctx.language === "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", ctx.language === "fr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", ctx.viewOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", !ctx.viewOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", !ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("schema", ctx.schema)("fields", ctx.fields)("submit", "submit")("language", ctx.language || "en")("viewOnly", ctx.viewOnly)("data", ctx.data);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__.JsonFormComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib290c3RyYXAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 58697:
/*!*******************************************************!*\
  !*** ./src/app/modules/bootstrap/bootstrap.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BootstrapModule": function() { return /* binding */ BootstrapModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _bootstrap_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap.component */ 11977);
/* harmony import */ var _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trufla/ngx-tru-forms */ 80988);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);







const routes = [
    {
        path: '',
        component: _bootstrap_component__WEBPACK_IMPORTED_MODULE_0__.BootstrapComponent
    }
];
class BootstrapModule {
}
BootstrapModule.ɵfac = function BootstrapModule_Factory(t) { return new (t || BootstrapModule)(); };
BootstrapModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BootstrapModule });
BootstrapModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__.JsonFormBootstrap4Module,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            // JsonFormModule.forRoot(JsonFormBootstrap4Module),
            {
                ngModule: _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__.JsonFormModule,
                providers: [
                    {
                        provide: _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__.JsonFormFieldsService,
                        useClass: _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__.JsonFormBootstrap4,
                        multi: true
                    }
                ]
            }
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BootstrapModule, { declarations: [_bootstrap_component__WEBPACK_IMPORTED_MODULE_0__.BootstrapComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__.JsonFormBootstrap4Module, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__.JsonFormModule], exports: [_bootstrap_component__WEBPACK_IMPORTED_MODULE_0__.BootstrapComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_bootstrap_bootstrap_module_ts-es2015.js.map