import{_ as n,o as d,c as l,b as s,w as o,a as e,d as r,r as t}from"./app.87509b5a.js";const h={},p=e("h1",{id:"clips-show",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#clips-show","aria-hidden":"true"},"#"),r(),e("code",null,"clips/show")],-1),_=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),r(" Parameters")],-1),f=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),r(" Response")],-1),u=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),r(" Errors")],-1),m=e("h3",{id:"no-such-clip",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-clip","aria-hidden":"true"},"#"),r(" NO_SUCH_CLIP")],-1),C=e("p",null,[r("ID: "),e("code",null,"c3c5fe33-d62c-44d2-9ea5-d997703f5c20")],-1);function y(b,k){const i=t("MkApiConsole"),a=t("ClientOnly"),c=t("MkSchemaViewer");return d(),l("div",null,[p,s(a,null,{default:o(()=>[s(i,{name:"clips/show",def:{summary:"",description:"",tags:["clips"],requireCredential:!1,req:{type:"object",properties:{clipId:{type:"string",format:"misskey:id"}},required:["clipId"]},res:{type:"object",optional:!1,nullable:!1,ref:"Clip",$ref:"misskey://Clip"},errors:{"c3c5fe33-d62c-44d2-9ea5-d997703f5c20":{id:"c3c5fe33-d62c-44d2-9ea5-d997703f5c20",code:"NO_SUCH_CLIP",description:""}}}})]),_:1}),_,s(a,null,{default:o(()=>[s(c,{schema:{type:"object",properties:{clipId:{type:"string",format:"misskey:id"}},required:["clipId"]}})]),_:1}),f,s(a,null,{default:o(()=>[s(c,{schema:{type:"object",optional:!1,nullable:!1,ref:"Clip",$ref:"misskey://Clip"}})]),_:1}),u,m,C])}var x=n(h,[["render",y],["__file","show.html.vue"]]);export{x as default};
