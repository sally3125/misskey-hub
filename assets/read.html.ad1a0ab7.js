import{_ as i,o as c,c as h,b as a,w as t,a as e,d as s,r as n}from"./app.87509b5a.js";const l={},m=e("h1",{id:"messaging-messages-read",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#messaging-messages-read","aria-hidden":"true"},"#"),s(),e("code",null,"messaging/messages/read")],-1),_=e("p",null,"Credential required.",-1),f=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),s(" Parameters")],-1),u=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),s(" Response")],-1),p=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),s(" Errors")],-1),g=e("h3",{id:"no-such-message",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-message","aria-hidden":"true"},"#"),s(" NO_SUCH_MESSAGE")],-1),b=e("p",null,[s("ID: "),e("code",null,"86d56a2f-a9c3-4afb-b13c-3e9bfef9aa14")],-1);function x(C,y){const o=n("MkApiConsole"),r=n("ClientOnly"),d=n("MkSchemaViewer");return c(),h("div",null,[m,_,a(r,null,{default:t(()=>[a(o,{name:"messaging/messages/read",def:{summary:"",description:"",tags:["messaging"],requireCredential:!0,req:{type:"object",properties:{messageId:{type:"string",format:"misskey:id"}},required:["messageId"]},res:{},errors:{"86d56a2f-a9c3-4afb-b13c-3e9bfef9aa14":{id:"86d56a2f-a9c3-4afb-b13c-3e9bfef9aa14",code:"NO_SUCH_MESSAGE",description:""}}}})]),_:1}),f,a(r,null,{default:t(()=>[a(d,{schema:{type:"object",properties:{messageId:{type:"string",format:"misskey:id"}},required:["messageId"]}})]),_:1}),u,a(r,null,{default:t(()=>[a(d,{schema:{}})]),_:1}),p,g,b])}var S=i(l,[["render",x],["__file","read.html.vue"]]);export{S as default};
