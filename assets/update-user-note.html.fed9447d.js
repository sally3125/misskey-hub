import{_ as i,o as c,c as u,b as r,w as s,a as e,d as t,r as n}from"./app.87509b5a.js";const l={},h=e("h1",{id:"admin-update-user-note",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-update-user-note","aria-hidden":"true"},"#"),t(),e("code",null,"admin/update-user-note")],-1),p=e("p",null,"Credential required.",-1),_=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),m=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),f=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),t(" Errors")],-1);function x(y,k){const d=n("MkApiConsole"),a=n("ClientOnly"),o=n("MkSchemaViewer");return c(),u("div",null,[h,p,r(a,null,{default:s(()=>[r(d,{name:"admin/update-user-note",def:{summary:"",description:"",tags:["admin"],requireCredential:!0,req:{type:"object",properties:{userId:{type:"string",format:"misskey:id"},text:{type:"string"}},required:["userId","text"]},res:{},errors:{}}})]),_:1}),_,r(a,null,{default:s(()=>[r(o,{schema:{type:"object",properties:{userId:{type:"string",format:"misskey:id"},text:{type:"string"}},required:["userId","text"]}})]),_:1}),m,r(a,null,{default:s(()=>[r(o,{schema:{}})]),_:1}),f])}var b=i(l,[["render",x],["__file","update-user-note.html.vue"]]);export{b as default};
