import{_ as l,o as p,c as d,b as a,w as s,a as e,d as t,r as n}from"./app.87509b5a.js";const c={},m=e("h1",{id:"my-apps",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#my-apps","aria-hidden":"true"},"#"),t(),e("code",null,"my/apps")],-1),u=e("p",null,"Credential required.",-1),f=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),h=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),_=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),t(" Errors")],-1);function y(b,x){const i=n("MkApiConsole"),r=n("ClientOnly"),o=n("MkSchemaViewer");return p(),d("div",null,[m,u,a(r,null,{default:s(()=>[a(i,{name:"my/apps",def:{summary:"",description:"",tags:["account"],requireCredential:!0,req:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},offset:{type:"integer",default:0}},required:[]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"App",$ref:"misskey://App"}},errors:{}}})]),_:1}),f,a(r,null,{default:s(()=>[a(o,{schema:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},offset:{type:"integer",default:0}},required:[]}})]),_:1}),h,a(r,null,{default:s(()=>[a(o,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"App",$ref:"misskey://App"}}})]),_:1}),_])}var C=l(c,[["render",y],["__file","apps.html.vue"]]);export{C as default};
