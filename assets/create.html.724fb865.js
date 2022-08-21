import{_ as o,o as d,c as p,b as t,w as n,a as e,d as a,r}from"./app.87509b5a.js";const c={},m=e("h1",{id:"admin-announcements-create",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-announcements-create","aria-hidden":"true"},"#"),a(),e("code",null,"admin/announcements/create")],-1),u=e("p",null,"Credential required.",-1),f=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),h=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),x=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1);function g(_,b){const s=r("MkApiConsole"),l=r("ClientOnly"),i=r("MkSchemaViewer");return d(),p("div",null,[m,u,t(l,null,{default:n(()=>[t(s,{name:"admin/announcements/create",def:{summary:"",description:"",tags:["admin"],requireCredential:!0,req:{type:"object",properties:{title:{type:"string",minLength:1},text:{type:"string",minLength:1},imageUrl:{type:"string",nullable:!0,minLength:1}},required:["title","text","imageUrl"]},res:{type:"object",optional:!1,nullable:!1,properties:{id:{type:"string",optional:!1,nullable:!1,format:"id",example:"xxxxxxxxxx"},createdAt:{type:"string",optional:!1,nullable:!1,format:"date-time"},updatedAt:{type:"string",optional:!1,nullable:!0,format:"date-time"},title:{type:"string",optional:!1,nullable:!1},text:{type:"string",optional:!1,nullable:!1},imageUrl:{type:"string",optional:!1,nullable:!0}},required:["id","createdAt","updatedAt","title","text","imageUrl"]},errors:{}}})]),_:1}),f,t(l,null,{default:n(()=>[t(i,{schema:{type:"object",properties:{title:{type:"string",minLength:1},text:{type:"string",minLength:1},imageUrl:{type:"string",nullable:!0,minLength:1}},required:["title","text","imageUrl"]}})]),_:1}),h,t(l,null,{default:n(()=>[t(i,{schema:{type:"object",optional:!1,nullable:!1,properties:{id:{type:"string",optional:!1,nullable:!1,format:"id",example:"xxxxxxxxxx"},createdAt:{type:"string",optional:!1,nullable:!1,format:"date-time"},updatedAt:{type:"string",optional:!1,nullable:!0,format:"date-time"},title:{type:"string",optional:!1,nullable:!1},text:{type:"string",optional:!1,nullable:!1},imageUrl:{type:"string",optional:!1,nullable:!0}},required:["id","createdAt","updatedAt","title","text","imageUrl"]}})]),_:1}),x])}var A=o(c,[["render",g],["__file","create.html.vue"]]);export{A as default};
