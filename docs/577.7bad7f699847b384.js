"use strict";(self.webpackChunkngx_tru_forms_app=self.webpackChunkngx_tru_forms_app||[]).push([[577],{9577:(y,g,o)=>{o.r(g),o.d(g,{BootstrapModule:()=>S});var m=o(6895),c=o(5505),e=o(4650),d=o(6338),p=o(9648),h=o(6454),u=o(4006),s=o(2100);let v=(()=>{class n{constructor(t,a,i){this.schemaListenerService=t,this.dataService=a,this.jsonSchemaSamples=i,this.language="en",this.viewOnly=!!localStorage.getItem("viewOnly")&&"true"===localStorage.getItem("viewOnly"),this.language=localStorage.getItem("language")?localStorage.getItem("language"):"en"}ngOnInit(){this.fields={colour:c.E},this.schemaListenerService.schema.subscribe(t=>this.schema=t),this.data=this.viewOnly?this.jsonSchemaSamples.data:null}toggleViewonly(t){localStorage.setItem("viewOnly",t),this.viewOnly=t,window.location.reload()}handleSubmit(t){this.dataService.data=t}changeLanguage(t){localStorage.setItem("language",t),this.language=t}toggleData(t){this.data="true"===t?this.jsonSchemaSamples.data:null}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.X),e.Y36(p.M),e.Y36(h.I))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-bootstrap"]],decls:30,vars:12,consts:[[2,"display","flex","flex-direction","row","justify-content","center","align-items","center"],[2,"width","100%"],[1,"demo_input",3,"change"],["value","en",3,"selected"],["value","fr",3,"selected"],["disabled",""],["value","true",3,"selected"],["value","false",3,"selected"],[3,"schema","fields","submit","language","viewOnly","data","handleSubmit"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label"),e._uU(3,"Language"),e.qZA(),e.TgZ(4,"select",2),e.NdJ("change",function(l){return a.changeLanguage(l.target.value)}),e.TgZ(5,"option",3),e._uU(6,"English"),e.qZA(),e.TgZ(7,"option",4),e._uU(8,"Frensh"),e.qZA()()(),e.TgZ(9,"div",1)(10,"label"),e._uU(11,"View only"),e.qZA(),e.TgZ(12,"select",2),e.NdJ("change",function(l){return a.toggleViewonly(l.target.value)}),e.TgZ(13,"option",5),e._uU(14,"select mode"),e.qZA(),e.TgZ(15,"option",6),e._uU(16,"on"),e.qZA(),e.TgZ(17,"option",7),e._uU(18,"off"),e.qZA()()(),e.TgZ(19,"div",1)(20,"label"),e._uU(21,"Data preview"),e.qZA(),e.TgZ(22,"select",2),e.NdJ("change",function(l){return a.toggleData(l.target.value)}),e.TgZ(23,"option",5),e._uU(24," select preview "),e.qZA(),e.TgZ(25,"option",6),e._uU(26,"on"),e.qZA(),e.TgZ(27,"option",7),e._uU(28,"off"),e.qZA()()()(),e.TgZ(29,"jf-form",8),e.NdJ("handleSubmit",function(l){return a.handleSubmit(l)}),e.qZA()),2&t&&(e.xp6(5),e.Q6J("selected","en"===a.language),e.xp6(2),e.Q6J("selected","fr"===a.language),e.xp6(8),e.Q6J("selected",a.viewOnly),e.xp6(2),e.Q6J("selected",!a.viewOnly),e.xp6(8),e.Q6J("selected",a.data),e.xp6(2),e.Q6J("selected",!a.data),e.xp6(2),e.Q6J("schema",a.schema)("fields",a.fields)("submit","submit")("language",a.language||"en")("viewOnly",a.viewOnly)("data",a.data))},dependencies:[u.YN,u.Kr,s.u4]}),n})();var f=o(5390);const Z=[{path:"",component:v}];let S=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.ez,s.p$,f.Bz.forChild(Z),u.UX,{ngModule:s.CJ,providers:[{provide:s.h8,useClass:s.uK,multi:!0}]}]}),n})()}}]);