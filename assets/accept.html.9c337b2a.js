import{_ as c,o as d,c as h,b as t,w as s,a as e,d as r,r as i}from"./app.87509b5a.js";const l={},_=e("h1",{id:"users-groups-invitations-accept",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#users-groups-invitations-accept","aria-hidden":"true"},"#"),r(),e("code",null,"users/groups/invitations/accept")],-1),p=e("p",null,"Credential required.",-1),u=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),r(" Parameters")],-1),m=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),r(" Response")],-1),f=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),r(" Errors")],-1),b=e("h3",{id:"no-such-invitation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-invitation","aria-hidden":"true"},"#"),r(" NO_SUCH_INVITATION")],-1),v=e("p",null,[r("ID: "),e("code",null,"98c11eca-c890-4f42-9806-c8c8303ebb5e")],-1);function I(x,C){const o=i("MkApiConsole"),a=i("ClientOnly"),n=i("MkSchemaViewer");return d(),h("div",null,[_,p,t(a,null,{default:s(()=>[t(o,{name:"users/groups/invitations/accept",def:{summary:"",description:"",tags:["groups"],requireCredential:!0,req:{type:"object",properties:{invitationId:{type:"string",format:"misskey:id"}},required:["invitationId"]},res:{},errors:{"98c11eca-c890-4f42-9806-c8c8303ebb5e":{id:"98c11eca-c890-4f42-9806-c8c8303ebb5e",code:"NO_SUCH_INVITATION",description:""}}}})]),_:1}),u,t(a,null,{default:s(()=>[t(n,{schema:{type:"object",properties:{invitationId:{type:"string",format:"misskey:id"}},required:["invitationId"]}})]),_:1}),m,t(a,null,{default:s(()=>[t(n,{schema:{}})]),_:1}),f,b,v])}var N=c(l,[["render",I],["__file","accept.html.vue"]]);export{N as default};
