import{_ as i,o as c,c as h,b as t,w as n,a as e,d as r,r as o}from"./app.87509b5a.js";const l={},_=e("h1",{id:"notes-thread-muting-create",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes-thread-muting-create","aria-hidden":"true"},"#"),r(),e("code",null,"notes/thread-muting/create")],-1),u=e("p",null,"Credential required.",-1),m=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),r(" Parameters")],-1),p=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),r(" Response")],-1),f=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),r(" Errors")],-1),b=e("h3",{id:"no-such-note",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-note","aria-hidden":"true"},"#"),r(" NO_SUCH_NOTE")],-1),x=e("p",null,[r("ID: "),e("code",null,"5ff67ada-ed3b-2e71-8e87-a1a421e177d2")],-1);function C(y,k){const d=o("MkApiConsole"),a=o("ClientOnly"),s=o("MkSchemaViewer");return c(),h("div",null,[_,u,t(a,null,{default:n(()=>[t(d,{name:"notes/thread-muting/create",def:{summary:"",description:"",tags:["notes"],requireCredential:!0,req:{type:"object",properties:{noteId:{type:"string",format:"misskey:id"}},required:["noteId"]},res:{},errors:{"5ff67ada-ed3b-2e71-8e87-a1a421e177d2":{id:"5ff67ada-ed3b-2e71-8e87-a1a421e177d2",code:"NO_SUCH_NOTE",description:""}}}})]),_:1}),m,t(a,null,{default:n(()=>[t(s,{schema:{type:"object",properties:{noteId:{type:"string",format:"misskey:id"}},required:["noteId"]}})]),_:1}),p,t(a,null,{default:n(()=>[t(s,{schema:{}})]),_:1}),f,b,x])}var N=i(l,[["render",C],["__file","create.html.vue"]]);export{N as default};
