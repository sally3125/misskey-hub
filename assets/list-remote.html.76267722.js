import{_ as o,o as u,c as p,b as l,w as s,a as e,d as t,r}from"./app.87509b5a.js";const d={},m=e("h1",{id:"admin-emoji-list-remote",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-emoji-list-remote","aria-hidden":"true"},"#"),t(),e("code",null,"admin/emoji/list-remote")],-1),c=e("p",null,"Credential required.",-1),f=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),h=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),y=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),t(" Errors")],-1);function b(_,g){const i=r("MkApiConsole"),a=r("ClientOnly"),n=r("MkSchemaViewer");return u(),p("div",null,[m,c,l(a,null,{default:s(()=>[l(i,{name:"admin/emoji/list-remote",def:{summary:"",description:"",tags:["admin"],requireCredential:!0,req:{type:"object",properties:{query:{type:"string",nullable:!0,default:null},host:{type:"string",nullable:!0,default:null,description:"Use `null` to represent the local host."},limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"}},required:[]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,properties:{id:{type:"string",optional:!1,nullable:!1,format:"id"},aliases:{type:"array",optional:!1,nullable:!1,items:{type:"string",optional:!1,nullable:!1}},name:{type:"string",optional:!1,nullable:!1},category:{type:"string",optional:!1,nullable:!0},host:{type:"string",optional:!1,nullable:!0,description:"The local host is represented with `null`."},url:{type:"string",optional:!1,nullable:!1}},required:["id","aliases","name","category","host","url"]}},errors:{}}},null,8,["def"])]),_:1}),f,l(a,null,{default:s(()=>[l(n,{schema:{type:"object",properties:{query:{type:"string",nullable:!0,default:null},host:{type:"string",nullable:!0,default:null,description:"Use `null` to represent the local host."},limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"}},required:[]}},null,8,["schema"])]),_:1}),h,l(a,null,{default:s(()=>[l(n,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,properties:{id:{type:"string",optional:!1,nullable:!1,format:"id"},aliases:{type:"array",optional:!1,nullable:!1,items:{type:"string",optional:!1,nullable:!1}},name:{type:"string",optional:!1,nullable:!1},category:{type:"string",optional:!1,nullable:!0},host:{type:"string",optional:!1,nullable:!0,description:"The local host is represented with `null`."},url:{type:"string",optional:!1,nullable:!1}},required:["id","aliases","name","category","host","url"]}}},null,8,["schema"])]),_:1}),y])}var k=o(d,[["render",b],["__file","list-remote.html.vue"]]);export{k as default};
