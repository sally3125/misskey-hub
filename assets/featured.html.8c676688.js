import{_ as i,o as d,c,b as t,w as s,a as e,d as a,r as o}from"./app.87509b5a.js";const f={},m=e("h1",{id:"notes-featured",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes-featured","aria-hidden":"true"},"#"),a(),e("code",null,"notes/featured")],-1),u=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),p=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),h=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1);function _(y,b){const l=o("MkApiConsole"),r=o("ClientOnly"),n=o("MkSchemaViewer");return d(),c("div",null,[m,t(r,null,{default:s(()=>[t(l,{name:"notes/featured",def:{summary:"",description:"",tags:["notes"],requireCredential:!1,req:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},offset:{type:"integer",default:0}},required:[]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"}},errors:{}}})]),_:1}),u,t(r,null,{default:s(()=>[t(n,{schema:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},offset:{type:"integer",default:0}},required:[]}})]),_:1}),p,t(r,null,{default:s(()=>[t(n,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"}}})]),_:1}),h])}var k=i(f,[["render",_],["__file","featured.html.vue"]]);export{k as default};
