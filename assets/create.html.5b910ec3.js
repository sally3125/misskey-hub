import{_ as c,o as l,c as h,b as t,w as o,a as e,d as r,r as a}from"./app.87509b5a.js";const d={},m=e("h1",{id:"i-webhooks-create",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#i-webhooks-create","aria-hidden":"true"},"#"),r(),e("code",null,"i/webhooks/create")],-1),p=e("p",null,"Credential required.",-1),u=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),r(" Parameters")],-1),_=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),r(" Response")],-1),f=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),r(" Errors")],-1);function g(y,w){const i=a("MkApiConsole"),n=a("ClientOnly"),s=a("MkSchemaViewer");return l(),h("div",null,[m,p,t(n,null,{default:o(()=>[t(i,{name:"i/webhooks/create",def:{summary:"",description:"",tags:["webhooks"],requireCredential:!0,req:{type:"object",properties:{name:{type:"string",minLength:1,maxLength:100},url:{type:"string",minLength:1,maxLength:1024},secret:{type:"string",minLength:1,maxLength:1024},on:{type:"array",items:{type:"string",enum:["mention","unfollow","follow","followed","note","reply","renote","reaction"]}}},required:["name","url","secret","on"]},res:{},errors:{}}})]),_:1}),u,t(n,null,{default:o(()=>[t(s,{schema:{type:"object",properties:{name:{type:"string",minLength:1,maxLength:100},url:{type:"string",minLength:1,maxLength:1024},secret:{type:"string",minLength:1,maxLength:1024},on:{type:"array",items:{type:"string",enum:["mention","unfollow","follow","followed","note","reply","renote","reaction"]}}},required:["name","url","secret","on"]}})]),_:1}),_,t(n,null,{default:o(()=>[t(s,{schema:{}})]),_:1}),f])}var b=c(d,[["render",g],["__file","create.html.vue"]]);export{b as default};
