import{_ as d,o as l,c,b as r,w as s,a as e,d as t,r as i}from"./app.87509b5a.js";const m={},h=e("h1",{id:"admin-emoji-delete-bulk",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-emoji-delete-bulk","aria-hidden":"true"},"#"),t(),e("code",null,"admin/emoji/delete-bulk")],-1),_=e("p",null,"Credential required.",-1),u=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),p=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),f=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),t(" Errors")],-1);function k(y,b){const o=i("MkApiConsole"),a=i("ClientOnly"),n=i("MkSchemaViewer");return l(),c("div",null,[h,_,r(a,null,{default:s(()=>[r(o,{name:"admin/emoji/delete-bulk",def:{summary:"",description:"",tags:["admin"],requireCredential:!0,req:{type:"object",properties:{ids:{type:"array",items:{type:"string",format:"misskey:id"}}},required:["ids"]},res:{},errors:{}}})]),_:1}),u,r(a,null,{default:s(()=>[r(n,{schema:{type:"object",properties:{ids:{type:"array",items:{type:"string",format:"misskey:id"}}},required:["ids"]}})]),_:1}),p,r(a,null,{default:s(()=>[r(n,{schema:{}})]),_:1}),f])}var C=d(m,[["render",k],["__file","delete-bulk.html.vue"]]);export{C as default};
