function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"L+Q6":function(e,t,n){"use strict";n.r(t),n.d(t,"MaterialDesignModule",(function(){return p}));var i,s,r=n("SVse"),a=n("PiBQ"),c=n("oxFV"),o=n("pLrv"),l=n("8Y7J"),u=n("5RE5"),d=((i=function(){function e(t,n){_classCallCheck(this,e),this.schemaListenerService=t,this.dataService=n}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.fields={colour:o.a},this.schemaListenerService.schema.subscribe((function(t){return e.schema=t}))}},{key:"handleSubmit",value:function(e){this.dataService.data=e,this.btnDisabled=!0}}]),e}()).\u0275fac=function(e){return new(e||i)(l["\u0275\u0275directiveInject"](a.a),l["\u0275\u0275directiveInject"](c.a))},i.\u0275cmp=l["\u0275\u0275defineComponent"]({type:i,selectors:[["app-material-design"]],decls:1,vars:3,consts:[[3,"schema","fields","submit","handleSubmit"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"jf-form",0),l["\u0275\u0275listener"]("handleSubmit",(function(e){return t.handleSubmit(e)})),l["\u0275\u0275elementEnd"]()),2&e&&l["\u0275\u0275property"]("schema",t.schema)("fields",t.fields)("submit","submit")},directives:[u.d],styles:[""]}),i),f=n("iInd"),h=n("s7LF"),m=[{path:"",component:d}],p=((s=function e(){_classCallCheck(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:s}),s.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||s)},imports:[[r.c,f.c.forChild(m),h.ReactiveFormsModule,u.g,{ngModule:u.h,providers:[{provide:u.e,useClass:u.f,multi:!0}]}]]}),s)}}]);