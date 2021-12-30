"use strict";
(self["webpackChunkngx_tru_forms_app"] = self["webpackChunkngx_tru_forms_app"] || []).push([["src_app_modules_tru-ui_tru-ui_module_ts"],{

/***/ 41880:
/*!****************************************************!*\
  !*** ./src/app/modules/tru-ui/tru-ui.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TruUiComponent": function() { return /* binding */ TruUiComponent; }
/* harmony export */ });
/* harmony import */ var _json_schema_examples_input_colour_input_colour_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../json-schema-examples/input-colour/input-colour.component */ 5505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_schema_listener_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/schema-listener.service */ 66338);
/* harmony import */ var src_app_services_data_listener_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-listener.service */ 19648);
/* harmony import */ var _json_schema_examples_json_schema_examples_samples__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../json-schema-examples/json-schema-examples.samples */ 66454);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @trufla/ngx-tru-forms */ 80988);







const _c0 = ["truForms"];
class TruUiComponent {
    constructor(schemaListenerService, dataService, jsonSchemaSamples) {
        this.schemaListenerService = schemaListenerService;
        this.dataService = dataService;
        this.jsonSchemaSamples = jsonSchemaSamples;
    }
    ngOnInit() {
        this.fields = {
            'colour': _json_schema_examples_input_colour_input_colour_component__WEBPACK_IMPORTED_MODULE_0__.InputColourComponent
        };
        this.viewOnly = localStorage.getItem('viewOnly') ? localStorage.getItem('viewOnly') === 'true' : false;
        this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'en';
        this.data = this.viewOnly ? this.jsonSchemaSamples.data : null;
        this.schemaListenerService.schema.subscribe((d) => {
            this.schema = d;
        });
    }
    ngAfterViewInit() {
        // tslint:disable-next-line
        this.truForms.setHeader('you can change header with <code style="background-color:#161b22;color:#fff;padding:2px;border-radius:3px">  setHeader(value: string)</code> method and pass any string inside it, be aware that any scripts will get sanitized <br> any other html code will get rendered  ');
        // tslint:disable-next-line
        this.truForms.setFooter('you can change footer with <code style="background-color:#161b22;color:#fff;padding:2px;border-radius:3px">  setFooter(value: string)</code> method and pass any string inside it, be aware that any scripts will get sanitized <br> any other html code will get rendered  ');
    }
    handleSubmit(e) {
        this.dataService.data = e;
    }
    handleCancel(e) {
        this.truForms.data = {};
        this.truForms.constructForm();
    }
    changeLanguage(lang) {
        localStorage.setItem('language', lang);
        this.language = lang;
    }
    isArray(array) {
        return Array.isArray(array);
    }
    toggleViewonly(e) {
        localStorage.setItem('viewOnly', e);
        window.location.href = '/';
    }
    toggleData(e) {
        this.data = e === 'true' ? this.jsonSchemaSamples.data : null;
    }
}
TruUiComponent.ɵfac = function TruUiComponent_Factory(t) { return new (t || TruUiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_schema_listener_service__WEBPACK_IMPORTED_MODULE_1__.SchemaListenerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_data_listener_service__WEBPACK_IMPORTED_MODULE_2__.DataListenerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_json_schema_examples_json_schema_examples_samples__WEBPACK_IMPORTED_MODULE_3__.JsonSchemaExamplesSamples)); };
TruUiComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TruUiComponent, selectors: [["app-tru-ui"]], viewQuery: function TruUiComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.truForms = _t.first);
    } }, decls: 31, vars: 13, consts: [[2, "display", "flex", "flex-direction", "row", "justify-content", "center", "align-items", "center"], [2, "width", "100%"], [1, "demo_input", 3, "change"], ["value", "en", 3, "selected"], ["value", "fr", 3, "selected"], ["disabled", ""], ["value", "true", 3, "selected"], ["value", "false", 3, "selected"], [3, "schema", "language", "viewOnly", "data", "fields", "submit", "cancel", "handleSubmit", "handleCancel"], ["truForms", ""]], template: function TruUiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function TruUiComponent_Template_select_change_4_listener($event) { return ctx.changeLanguage($event.target.value); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function TruUiComponent_Template_select_change_12_listener($event) { return ctx.toggleViewonly($event.target.value); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function TruUiComponent_Template_select_change_22_listener($event) { return ctx.toggleData($event.target.value); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "jf-form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("handleSubmit", function TruUiComponent_Template_jf_form_handleSubmit_29_listener($event) { return ctx.handleSubmit($event); })("handleCancel", function TruUiComponent_Template_jf_form_handleCancel_29_listener($event) { return ctx.handleCancel($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("schema", ctx.schema)("language", ctx.language || "en")("viewOnly", ctx.viewOnly)("data", ctx.data)("fields", ctx.fields)("submit", "submit")("cancel", "cancel");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__.JsonFormComponent], styles: ["p {\n        display: flex;\n        flex-direction: column;    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRydS11aS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO1FBQ1EsYUFBYTtRQUNiLHNCQUFzQjtBQUM5QiIsImZpbGUiOiJ0cnUtdWkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBwIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICAgXG59Il19 */"] });


/***/ }),

/***/ 57033:
/*!*************************************************!*\
  !*** ./src/app/modules/tru-ui/tru-ui.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TruUiModuleExample": function() { return /* binding */ TruUiModuleExample; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _tru_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tru-ui.component */ 41880);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trufla/ngx-tru-forms */ 80988);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);







const routes = [
    {
        path: '',
        redirectTo: 'tru-ui'
    },
    {
        path: 'tru-ui',
        component: _tru_ui_component__WEBPACK_IMPORTED_MODULE_0__.TruUiComponent,
    }
];
class TruUiModuleExample {
}
TruUiModuleExample.ɵfac = function TruUiModuleExample_Factory(t) { return new (t || TruUiModuleExample)(); };
TruUiModuleExample.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TruUiModuleExample });
TruUiModuleExample.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__.JsonFormModule,
            _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__.TruUiModule,
            {
                ngModule: _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__.JsonFormModule,
                providers: [
                    {
                        provide: _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__.JsonFormFieldsService,
                        useClass: _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__.TruUi,
                        multi: true
                    }
                ]
            }
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TruUiModuleExample, { declarations: [_tru_ui_component__WEBPACK_IMPORTED_MODULE_0__.TruUiComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__.JsonFormModule,
        _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__.TruUiModule, _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_1__.JsonFormModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_tru-ui_tru-ui_module_ts-es2015.js.map