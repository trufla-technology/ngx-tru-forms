function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{gLlf:function(e,t,n){"use strict";n.r(t),n.d(t,"TruUiModuleExample",(function(){return v}));var a,l,r=n("ofXK"),i=n("oxFV"),o=n("PiBQ"),c=n("iA1Z"),s=n("pLrv"),d=n("fXoL"),u=n("3Pt+"),m=n("5RE5"),g=["truForms"],f=((a=function(){function e(t,n,a){_classCallCheck(this,e),this.schemaListenerService=t,this.dataService=n,this.jsonSchemaSamples=a}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.fields={colour:s.a},this.viewOnly=!!localStorage.getItem("viewOnly")&&"true"===localStorage.getItem("viewOnly"),this.language=localStorage.getItem("language")?localStorage.getItem("language"):"en",this.data=this.viewOnly?this.jsonSchemaSamples.data:null,this.schemaListenerService.schema.subscribe((function(t){e.schema=t}))}},{key:"ngAfterViewInit",value:function(){this.truForms.setHeader('you can change header with <code style="background-color:#161b22;color:#fff;padding:2px;border-radius:3px">  setHeader(value: string)</code> method and pass any string inside it, be aware that any scripts will get sanitized <br> any other html code will get rendered  '),this.truForms.setFooter('you can change footer with <code style="background-color:#161b22;color:#fff;padding:2px;border-radius:3px">  setFooter(value: string)</code> method and pass any string inside it, be aware that any scripts will get sanitized <br> any other html code will get rendered  ')}},{key:"handleSubmit",value:function(e){this.dataService.data=e}},{key:"handleCancel",value:function(e){this.truForms.data={},this.truForms.constructForm()}},{key:"changeLanguage",value:function(e){localStorage.setItem("language",e),this.language=e}},{key:"isArray",value:function(e){return Array.isArray(e)}},{key:"toggleViewonly",value:function(e){localStorage.setItem("viewOnly",e),window.location.href="/"}},{key:"toggleData",value:function(e){this.data="true"===e?this.jsonSchemaSamples.data:null}}]),e}()).\u0275fac=function(e){return new(e||a)(d["\u0275\u0275directiveInject"](o.a),d["\u0275\u0275directiveInject"](i.a),d["\u0275\u0275directiveInject"](c.a))},a.\u0275cmp=d["\u0275\u0275defineComponent"]({type:a,selectors:[["app-tru-ui"]],viewQuery:function(e,t){var n;1&e&&d["\u0275\u0275viewQuery"](g,!0),2&e&&d["\u0275\u0275queryRefresh"](n=d["\u0275\u0275loadQuery"]())&&(t.truForms=n.first)},decls:31,vars:13,consts:[[2,"display","flex","flex-direction","row","justify-content","center","align-items","center"],[2,"width","100%"],[1,"demo_input",3,"change"],["value","en",3,"selected"],["value","fr",3,"selected"],["disabled",""],["value","true",3,"selected"],["value","false",3,"selected"],[3,"schema","language","viewOnly","data","fields","submit","cancel","handleSubmit","handleCancel"],["truForms",""]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275elementStart"](1,"div",1),d["\u0275\u0275elementStart"](2,"label"),d["\u0275\u0275text"](3,"Language"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"select",2),d["\u0275\u0275listener"]("change",(function(e){return t.changeLanguage(e.target.value)})),d["\u0275\u0275elementStart"](5,"option",3),d["\u0275\u0275text"](6,"English"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"option",4),d["\u0275\u0275text"](8,"Frensh"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"div",1),d["\u0275\u0275elementStart"](10,"label"),d["\u0275\u0275text"](11,"View only"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"select",2),d["\u0275\u0275listener"]("change",(function(e){return t.toggleViewonly(e.target.value)})),d["\u0275\u0275elementStart"](13,"option",5),d["\u0275\u0275text"](14,"select mode"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](15,"option",6),d["\u0275\u0275text"](16,"on"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](17,"option",7),d["\u0275\u0275text"](18,"off"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](19,"div",1),d["\u0275\u0275elementStart"](20,"label"),d["\u0275\u0275text"](21,"Data preview"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](22,"select",2),d["\u0275\u0275listener"]("change",(function(e){return t.toggleData(e.target.value)})),d["\u0275\u0275elementStart"](23,"option",5),d["\u0275\u0275text"](24," select preview "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](25,"option",6),d["\u0275\u0275text"](26,"on"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](27,"option",7),d["\u0275\u0275text"](28,"off"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](29,"jf-form",8,9),d["\u0275\u0275listener"]("handleSubmit",(function(e){return t.handleSubmit(e)}))("handleCancel",(function(e){return t.handleCancel(e)})),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("selected","en"===t.language),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("selected","fr"===t.language),d["\u0275\u0275advance"](8),d["\u0275\u0275property"]("selected",t.viewOnly),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("selected",!t.viewOnly),d["\u0275\u0275advance"](8),d["\u0275\u0275property"]("selected",t.data),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("selected",!t.data),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("schema",t.schema)("language",t.language||"en")("viewOnly",t.viewOnly)("data",t.data)("fields",t.fields)("submit","submit")("cancel","cancel"))},directives:[u.NgSelectOption,u["\u0275angular_packages_forms_forms_x"],m.d],styles:["p{display:flex;flex-direction:column}"]}),a),h=n("tyNb"),p=[{path:"",redirectTo:"tru-ui"},{path:"tru-ui",component:f}],v=((l=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:l}),l.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||l)},imports:[[r.c,h.c.forChild(p),u.ReactiveFormsModule,m.h,m.j,{ngModule:m.h,providers:[{provide:m.e,useClass:m.i,multi:!0}]}]]}),l)}}]);