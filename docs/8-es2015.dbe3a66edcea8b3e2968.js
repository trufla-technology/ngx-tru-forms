(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{gLlf:function(e,t,a){"use strict";a.r(t),a.d(t,"TruUiModuleExample",(function(){return m}));var n=a("ofXK"),i=a("oxFV"),l=a("PiBQ"),r=a("iA1Z"),c=a("pLrv"),o=a("fXoL"),s=a("3Pt+"),d=a("5RE5");const u=["truForms"];let b=(()=>{class e{constructor(e,t,a){this.schemaListenerService=e,this.dataService=t,this.jsonSchemaSamples=a}ngOnInit(){this.fields={colour:c.a},this.viewOnly=!!localStorage.getItem("viewOnly")&&"true"===localStorage.getItem("viewOnly"),this.language=localStorage.getItem("language")?localStorage.getItem("language"):"en",this.data=this.viewOnly?this.jsonSchemaSamples.data:null,this.schemaListenerService.schema.subscribe(e=>{this.schema=e})}ngAfterViewInit(){this.truForms.setHeader('you can change header with <code style="background-color:#161b22;color:#fff;padding:2px;border-radius:3px">  setHeader(value: string)</code> method and pass any string inside it, be aware that any scripts will get sanitized <br> any other html code will get rendered  '),this.truForms.setFooter('you can change footer with <code style="background-color:#161b22;color:#fff;padding:2px;border-radius:3px">  setFooter(value: string)</code> method and pass any string inside it, be aware that any scripts will get sanitized <br> any other html code will get rendered  ')}handleSubmit(e){this.dataService.data=e}handleCancel(e){this.truForms.data={},this.truForms.constructForm()}changeLanguage(e){localStorage.setItem("language",e),this.language=e}isArray(e){return Array.isArray(e)}toggleViewonly(e){localStorage.setItem("viewOnly",e),window.location.href="/"}toggleData(e){this.data="true"===e?this.jsonSchemaSamples.data:null}}return e.\u0275fac=function(t){return new(t||e)(o.Qb(l.a),o.Qb(i.a),o.Qb(r.a))},e.\u0275cmp=o.Kb({type:e,selectors:[["app-tru-ui"]],viewQuery:function(e,t){var a;1&e&&o.Oc(u,!0),2&e&&o.vc(a=o.fc())&&(t.truForms=a.first)},decls:31,vars:13,consts:[[2,"display","flex","flex-direction","row","justify-content","center","align-items","center"],[2,"width","100%"],[1,"demo_input",3,"change"],["value","en",3,"selected"],["value","fr",3,"selected"],["disabled",""],["value","true",3,"selected"],["value","false",3,"selected"],[3,"schema","language","viewOnly","data","fields","submit","cancel","handleSubmit","handleCancel"],["truForms",""]],template:function(e,t){1&e&&(o.Wb(0,"div",0),o.Wb(1,"div",1),o.Wb(2,"label"),o.Ic(3,"Language"),o.Vb(),o.Wb(4,"select",2),o.ec("change",(function(e){return t.changeLanguage(e.target.value)})),o.Wb(5,"option",3),o.Ic(6,"English"),o.Vb(),o.Wb(7,"option",4),o.Ic(8,"Frensh"),o.Vb(),o.Vb(),o.Vb(),o.Wb(9,"div",1),o.Wb(10,"label"),o.Ic(11,"View only"),o.Vb(),o.Wb(12,"select",2),o.ec("change",(function(e){return t.toggleViewonly(e.target.value)})),o.Wb(13,"option",5),o.Ic(14,"select mode"),o.Vb(),o.Wb(15,"option",6),o.Ic(16,"on"),o.Vb(),o.Wb(17,"option",7),o.Ic(18,"off"),o.Vb(),o.Vb(),o.Vb(),o.Wb(19,"div",1),o.Wb(20,"label"),o.Ic(21,"Data preview"),o.Vb(),o.Wb(22,"select",2),o.ec("change",(function(e){return t.toggleData(e.target.value)})),o.Wb(23,"option",5),o.Ic(24," select preview "),o.Vb(),o.Wb(25,"option",6),o.Ic(26,"on"),o.Vb(),o.Wb(27,"option",7),o.Ic(28,"off"),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Wb(29,"jf-form",8,9),o.ec("handleSubmit",(function(e){return t.handleSubmit(e)}))("handleCancel",(function(e){return t.handleCancel(e)})),o.Vb()),2&e&&(o.Cb(5),o.oc("selected","en"===t.language),o.Cb(2),o.oc("selected","fr"===t.language),o.Cb(8),o.oc("selected",t.viewOnly),o.Cb(2),o.oc("selected",!t.viewOnly),o.Cb(8),o.oc("selected",t.data),o.Cb(2),o.oc("selected",!t.data),o.Cb(2),o.oc("schema",t.schema)("language",t.language||"en")("viewOnly",t.viewOnly)("data",t.data)("fields",t.fields)("submit","submit")("cancel","cancel"))},directives:[s.r,s.x,d.d],styles:["p{display:flex;flex-direction:column}"]}),e})();var g=a("tyNb");const h=[{path:"",redirectTo:"tru-ui"},{path:"tru-ui",component:b}];let m=(()=>{class e{}return e.\u0275mod=o.Ob({type:e}),e.\u0275inj=o.Nb({factory:function(t){return new(t||e)},imports:[[n.c,g.c.forChild(h),s.t,d.h,d.j,{ngModule:d.h,providers:[{provide:d.e,useClass:d.i,multi:!0}]}]]}),e})()}}]);