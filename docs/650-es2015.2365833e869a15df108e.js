"use strict";(self.webpackChunkngx_tru_forms_app=self.webpackChunkngx_tru_forms_app||[]).push([[650],{13650:function(e,t,a){a.r(t),a.d(t,{TruUiModuleExample:function(){return f}});var n=a(60793),l=a(12057),r=a(5505),i=a(66338),o=a(19648),s=a(66454);const c=["truForms"];let u=(()=>{class e{constructor(e,t,a){this.schemaListenerService=e,this.dataService=t,this.jsonSchemaSamples=a}ngOnInit(){this.fields={colour:r.E},this.viewOnly=!!localStorage.getItem("viewOnly")&&"true"===localStorage.getItem("viewOnly"),this.language=localStorage.getItem("language")?localStorage.getItem("language"):"en",this.data=this.viewOnly?this.jsonSchemaSamples.data:null,this.schemaListenerService.schema.subscribe(e=>{this.schema=e})}ngAfterViewInit(){this.truForms.setHeader('you can change header with <code style="background-color:#161b22;color:#fff;padding:2px;border-radius:3px">  setHeader(value: string)</code> method and pass any string inside it, be aware that any scripts will get sanitized <br> any other html code will get rendered  '),this.truForms.setFooter('you can change footer with <code style="background-color:#161b22;color:#fff;padding:2px;border-radius:3px">  setFooter(value: string)</code> method and pass any string inside it, be aware that any scripts will get sanitized <br> any other html code will get rendered  ')}handleSubmit(e){this.dataService.data=e}handleCancel(e){this.truForms.data={},this.truForms.constructForm()}changeLanguage(e){localStorage.setItem("language",e),this.language=e}isArray(e){return Array.isArray(e)}toggleViewonly(e){localStorage.setItem("viewOnly",e),window.location.href="/"}toggleData(e){this.data="true"===e?this.jsonSchemaSamples.data:null}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(i.X),n.Y36(o.M),n.Y36(s.I))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-tru-ui"]],viewQuery:function(e,t){if(1&e&&n.Gf(c,5),2&e){let e;n.iGM(e=n.CRH())&&(t.truForms=e.first)}},decls:31,vars:13,consts:[[2,"display","flex","flex-direction","row","justify-content","center","align-items","center"],[2,"width","100%"],[1,"demo_input",3,"change"],["value","en",3,"selected"],["value","fr",3,"selected"],["disabled",""],["value","true",3,"selected"],["value","false",3,"selected"],[3,"schema","language","viewOnly","data","fields","submit","cancel","handleSubmit","handleCancel"],["truForms",""]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"label"),n._uU(3,"Language"),n.qZA(),n.TgZ(4,"select",2),n.NdJ("change",function(e){return t.changeLanguage(e.target.value)}),n.TgZ(5,"option",3),n._uU(6,"English"),n.qZA(),n.TgZ(7,"option",4),n._uU(8,"Frensh"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(9,"div",1),n.TgZ(10,"label"),n._uU(11,"View only"),n.qZA(),n.TgZ(12,"select",2),n.NdJ("change",function(e){return t.toggleViewonly(e.target.value)}),n.TgZ(13,"option",5),n._uU(14,"select mode"),n.qZA(),n.TgZ(15,"option",6),n._uU(16,"on"),n.qZA(),n.TgZ(17,"option",7),n._uU(18,"off"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(19,"div",1),n.TgZ(20,"label"),n._uU(21,"Data preview"),n.qZA(),n.TgZ(22,"select",2),n.NdJ("change",function(e){return t.toggleData(e.target.value)}),n.TgZ(23,"option",5),n._uU(24," select preview "),n.qZA(),n.TgZ(25,"option",6),n._uU(26,"on"),n.qZA(),n.TgZ(27,"option",7),n._uU(28,"off"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(29,"jf-form",8,9),n.NdJ("handleSubmit",function(e){return t.handleSubmit(e)})("handleCancel",function(e){return t.handleCancel(e)}),n.qZA()),2&e&&(n.xp6(5),n.Q6J("selected","en"===t.language),n.xp6(2),n.Q6J("selected","fr"===t.language),n.xp6(8),n.Q6J("selected",t.viewOnly),n.xp6(2),n.Q6J("selected",!t.viewOnly),n.xp6(8),n.Q6J("selected",t.data),n.xp6(2),n.Q6J("selected",!t.data),n.xp6(2),n.Q6J("schema",t.schema)("language",t.language||"en")("viewOnly",t.viewOnly)("data",t.data)("fields",t.fields)("submit","submit")("cancel","cancel"))},styles:["p{display:flex;flex-direction:column}"]}),e})();var d=a(36320),g=a(18950),h=a(23738);const p=[{path:"",redirectTo:"tru-ui"},{path:"tru-ui",component:u}];let f=class{};f=function(e,t,a,n){var l,r=arguments.length,i=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var o=e.length-1;o>=0;o--)(l=e[o])&&(i=(r<3?l(i):r>3?l(t,a,i):l(t,a))||i);return r>3&&i&&Object.defineProperty(t,a,i),i}([(0,n.LVF)({declarations:[u],imports:[l.ez,d.Bz.forChild(p),h.UX,g.CJ,g.V$,{ngModule:g.CJ,providers:[{provide:g.h8,useClass:g.W5,multi:!0}]}],entryComponents:[]})],f)}}]);