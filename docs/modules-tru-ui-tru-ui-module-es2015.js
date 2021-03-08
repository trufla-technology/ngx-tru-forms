(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-tru-ui-tru-ui-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tru-ui/tru-ui.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tru-ui/tru-ui.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"display: flex; flex-direction: row;justify-content: center;align-items: center;\">\n<div style=\"width: 100%;\" >\n  <h6>Language</h6>\n  <select  class=\"demo_input\" (change)=\"changeLanguage($event.target.value)\">\n    <option value=\"en\" [selected]=\"language=== 'en'\">English</option>\n    <option value=\"fr\" [selected]=\"language=== 'fr'\">Frensh</option>\n  </select>\n  </div>\n  <div style=\"width: 100%;\" >\n    <h6>View only</h6>\n    <select  class=\"demo_input\" (change)=\"toggleViewonly($event.target.value)\">\n      <option disabled>select mode</option>\n      <option value=\"true\" [selected]=\"viewOnly\">on</option>\n      <option value=\"false\" [selected]=\"!viewOnly\">off</option>\n    </select>\n    </div>\n    <div style=\"width: 100%;\" >\n      <h6>Data preview</h6>\n      <select  class=\"demo_input\" (change)=\"toggleData($event.target.value)\">\n        <option disabled> select preview </option>\n        <option value=\"true\" [selected]=\"data\">on</option>\n        <option value=\"false\" [selected]=\"!data\">off</option>\n      </select>\n      </div>\n    </div>\n<jf-form\n  #truForms\n  [schema]=\"schema\"\n  (handleSubmit)=\"handleSubmit($event)\"\n  [language]=\"language || 'en'\"\n  [viewOnly]=\"viewOnly\"\n  [data]=\"data\"\n  [fields]=\"fields\"\n  (handleCancel)=\"handleCancel($event)\"\n  [submit]=\"'submit'\"\n  [cancel]=\"'cancel'\"\n></jf-form>");

/***/ }),

/***/ "./src/app/modules/tru-ui/tru-ui.component.css":
/*!*****************************************************!*\
  !*** ./src/app/modules/tru-ui/tru-ui.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep p {\n        display: flex;\n        flex-direction: column;    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90cnUtdWkvdHJ1LXVpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7UUFDUSxhQUFhO1FBQ2Isc0JBQXNCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy90cnUtdWkvdHJ1LXVpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgcCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgIFxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/tru-ui/tru-ui.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/tru-ui/tru-ui.component.ts ***!
  \****************************************************/
/*! exports provided: TruUiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruUiComponent", function() { return TruUiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_data_listener_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data-listener.service */ "./src/app/services/data-listener.service.ts");
/* harmony import */ var src_app_services_schema_listener_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/schema-listener.service */ "./src/app/services/schema-listener.service.ts");
/* harmony import */ var _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @trufla/ngx-tru-forms */ "./dist/ngx-tru-forms/fesm2015/trufla-ngx-tru-forms.js");
/* harmony import */ var _json_schema_examples_json_schema_examples_samples__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../json-schema-examples/json-schema-examples.samples */ "./src/app/json-schema-examples/json-schema-examples.samples.ts");
/* harmony import */ var _json_schema_examples_input_colour_input_colour_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../json-schema-examples/input-colour/input-colour.component */ "./src/app/json-schema-examples/input-colour/input-colour.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let TruUiComponent = class TruUiComponent {
    constructor(schemaListenerService, dataService, jsonSchemaSamples) {
        this.schemaListenerService = schemaListenerService;
        this.dataService = dataService;
        this.jsonSchemaSamples = jsonSchemaSamples;
    }
    ngOnInit() {
        this.fields = {
            'colour': _json_schema_examples_input_colour_input_colour_component__WEBPACK_IMPORTED_MODULE_5__["InputColourComponent"]
        };
        this.viewOnly = localStorage.getItem('viewOnly') ? localStorage.getItem('viewOnly') === 'true' : false;
        this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'en';
        this.data = this.viewOnly ? this.jsonSchemaSamples.data : null;
        this.schemaListenerService.schema.subscribe((d) => {
            this.schema = d;
        });
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
};
TruUiComponent.ctorParameters = () => [
    { type: src_app_services_schema_listener_service__WEBPACK_IMPORTED_MODULE_2__["SchemaListenerService"] },
    { type: src_app_services_data_listener_service__WEBPACK_IMPORTED_MODULE_1__["DataListenerService"] },
    { type: _json_schema_examples_json_schema_examples_samples__WEBPACK_IMPORTED_MODULE_4__["JsonSchemaExamplesSamples"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('truForms', { static: false }),
    __metadata("design:type", _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_3__["JsonFormComponent"])
], TruUiComponent.prototype, "truForms", void 0);
TruUiComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-tru-ui',
        template: __importDefault(__webpack_require__(/*! raw-loader!./tru-ui.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tru-ui/tru-ui.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./tru-ui.component.css */ "./src/app/modules/tru-ui/tru-ui.component.css")).default]
    }),
    __metadata("design:paramtypes", [src_app_services_schema_listener_service__WEBPACK_IMPORTED_MODULE_2__["SchemaListenerService"],
        src_app_services_data_listener_service__WEBPACK_IMPORTED_MODULE_1__["DataListenerService"],
        _json_schema_examples_json_schema_examples_samples__WEBPACK_IMPORTED_MODULE_4__["JsonSchemaExamplesSamples"]])
], TruUiComponent);



/***/ }),

/***/ "./src/app/modules/tru-ui/tru-ui.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/tru-ui/tru-ui.module.ts ***!
  \*************************************************/
/*! exports provided: TruUiModuleExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruUiModuleExample", function() { return TruUiModuleExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tru_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tru-ui.component */ "./src/app/modules/tru-ui/tru-ui.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @trufla/ngx-tru-forms */ "./dist/ngx-tru-forms/fesm2015/trufla-ngx-tru-forms.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






const routes = [
    {
        path: '',
        component: _tru_ui_component__WEBPACK_IMPORTED_MODULE_2__["TruUiComponent"]
    }
];
let TruUiModuleExample = class TruUiModuleExample {
};
TruUiModuleExample = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_tru_ui_component__WEBPACK_IMPORTED_MODULE_2__["TruUiComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__["JsonFormModule"],
            _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__["TruUiModule"],
            {
                ngModule: _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__["JsonFormModule"],
                providers: [
                    {
                        provide: _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__["JsonFormFieldsService"],
                        useClass: _trufla_ngx_tru_forms__WEBPACK_IMPORTED_MODULE_4__["TruUi"],
                        multi: true
                    }
                ]
            }
        ],
        entryComponents: []
    })
], TruUiModuleExample);



/***/ })

}]);
//# sourceMappingURL=modules-tru-ui-tru-ui-module-es2015.js.map