import{_ as o,o as c,c as l,b as r,w as i,a as e,d as a,r as d}from"./app.87509b5a.js";const h={},p=e("h1",{id:"admin-drive-capacity-override",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-drive-capacity-override","aria-hidden":"true"},"#"),a(),e("code",null,"admin/drive-capacity-override")],-1),u=e("p",null,"Credential required.",-1),m=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),_=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),v=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1);function f(y,b){const n=d("MkApiConsole"),t=d("ClientOnly"),s=d("MkSchemaViewer");return c(),l("div",null,[p,u,r(t,null,{default:i(()=>[r(n,{name:"admin/drive-capacity-override",def:{summary:"",description:"",tags:["admin"],requireCredential:!0,req:{type:"object",properties:{userId:{type:"string",format:"misskey:id"},overrideMb:{type:"number",nullable:!0}},required:["userId","overrideMb"]},res:{},errors:{}}})]),_:1}),m,r(t,null,{default:i(()=>[r(s,{schema:{type:"object",properties:{userId:{type:"string",format:"misskey:id"},overrideMb:{type:"number",nullable:!0}},required:["userId","overrideMb"]}})]),_:1}),_,r(t,null,{default:i(()=>[r(s,{schema:{}})]),_:1}),v])}var C=o(h,[["render",f],["__file","drive-capacity-override.html.vue"]]);export{C as default};
