function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
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


    __webpack_exports__["default"] = "<!-- <app-json-schema-examples></app-json-schema-examples> -->\n<div class=\"display-flex-row\">\n  <div class=\"w-50\">\n    <app-schema-dropdown [schemas]=\"allSchemaTitles\" (selectedSchemaChanged)=\"handleSelectedSchemaChanged($event)\"></app-schema-dropdown>\n    <app-schema-editor [schema]=\"schema\" (schemaHasChanged)=\"handleSchemaHasChanged($event)\"></app-schema-editor>\n  </div>\n  <div class=\"w-50\">\n    <app-framework-dropdown (frameworkChanged)=\"handleFrameWorkChanged($event)\"></app-framework-dropdown>\n<!--    <ng-container [ngSwitch]=\"framework\">-->\n<!--      <app-material-design *ngSwitchCase=\"'material'\" [schema]=\"generateFormSchema\"></app-material-design>-->\n<!--      <app-bootstrap *ngSwitchCase=\"'bootstrap'\" [schema]=\"generateFormSchema\"></app-bootstrap>-->\n<!--    </ng-container>-->\n    <router-outlet></router-outlet>\n    <app-submitted-data></app-submitted-data>\n  </div>\n</div>\n";
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
    }; // import { JsonSchemaExamplesModule } from './json-schema-examples/json-schema-examples.module';


    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | modules-material-design-material-design-module */
        [__webpack_require__.e("default~modules-bootstrap-bootstrap-module~modules-material-design-material-design-module"), __webpack_require__.e("modules-material-design-material-design-module")]).then(__webpack_require__.bind(null,
        /*! ./modules/material-design/material-design.module */
        "./src/app/modules/material-design/material-design.module.ts")).then(function (m) {
          return m.MaterialDesignModule;
        });
      }
    }, {
      path: 'bootstrap-example',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | modules-bootstrap-bootstrap-module */
        [__webpack_require__.e("default~modules-bootstrap-bootstrap-module~modules-material-design-material-design-module"), __webpack_require__.e("modules-bootstrap-bootstrap-module")]).then(__webpack_require__.bind(null,
        /*! ./modules/bootstrap/bootstrap.module */
        "./src/app/modules/bootstrap/bootstrap.module.ts")).then(function (m) {
          return m.BootstrapModule;
        });
      }
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _components_schema_editor_schema_editor_component__WEBPACK_IMPORTED_MODULE_3__["SchemaEditorComponent"], _components_schema_dropdown_schema_dropdown_component__WEBPACK_IMPORTED_MODULE_6__["SchemaDropdownComponent"], _components_framework_dropdown_framework_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["FrameworkDropdownComponent"], _components_submitted_data_submitted_data_component__WEBPACK_IMPORTED_MODULE_10__["SubmittedDataComponent"]],
      imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], // JsonSchemaExamplesModule,
      _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes), ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__["MonacoEditorModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
      providers: [_json_schema_examples_json_schema_examples_samples__WEBPACK_IMPORTED_MODULE_9__["JsonSchemaExamplesSamples"]],
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
        this.frameworks = ['material', 'bootstrap'];
        this.frameworkChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FrameworkDropdownComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.value = this.location.path() && this.location.path().indexOf('bootstrap') > -1 ? 'bootstrap' : 'material';
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
              this.router.navigate(['']);
              break;

            case 'bootstrap':
              this.router.navigate(['bootstrap-example']);
              break;
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

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('schemas'), __metadata("design:type", Object)], SchemaDropdownComponent.prototype, "schemas", void 0);

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

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('schema'), __metadata("design:type", Object)], SchemaEditorComponent.prototype, "schema", void 0);

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
          var _this = this;

          this.options = {
            readOnly: true
          };
          this.model = {
            value: this.data,
            language: 'json'
          };
          this.dataservice.data.subscribe(function (d) {
            if (d) {
              _this.data = JSON.stringify(d, null, 2);
              _this.model = {
                value: _this.data,
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
            },
            do_not_contact: {
              type: 'boolean'
            }
          },
          required: ['year', 'effective_date']
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
                }
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
                  'food_like': {
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
          'type': 'object',
          'properties': {
            'photo': {
              'type': 'string',
              'format': 'photo'
            },
            'accident_photos': {
              'type': 'array',
              'items': {
                'type': 'object',
                'properties': {
                  'photo': {
                    'type': 'string',
                    'format': 'photo'
                  }
                }
              }
            },
            'billing_address': {
              'type': 'boolean'
            },
            'full_name': {
              'type': 'string',
              'default': 'now'
            },
            'dob': {
              'type': 'string',
              'format': 'date'
            },
            'email': {
              'type': 'string',
              'format': 'email'
            },
            'address': {
              'type': 'object',
              'properties': {
                'street_1': {
                  'type': 'string'
                },
                'street_2': {
                  'type': 'string'
                },
                'city': {
                  'type': 'string'
                },
                'state': {
                  'type': 'string',
                  'enum': ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY']
                },
                'zip_code': {
                  'type': 'string'
                }
              }
            },
            'birthday': {
              'type': 'string'
            },
            'notes': {
              'type': 'string'
            },
            'phone_numbers': {
              'type': 'array',
              'items': {
                'type': 'object',
                'properties': {
                  'type': {
                    'type': 'string',
                    'enum': ['cell', 'home', 'work'],
                    'enumNames': ['Cell', 'Home', 'Work']
                  },
                  'number': {
                    'type': 'string'
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
    /*! /home/george/projects/trufla/ngx-tru-forms/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map