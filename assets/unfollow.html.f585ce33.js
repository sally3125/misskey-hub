import{_ as d,o as l,c as i,b as n,w as o,a as e,d as a,r as s}from"./app.87509b5a.js";const h={},_=e("h1",{id:"channels-unfollow",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#channels-unfollow","aria-hidden":"true"},"#"),a(),e("code",null,"channels/unfollow")],-1),u=e("p",null,"Credential required.",-1),p=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),f=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),m=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1),b=e("h3",{id:"no-such-channel",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-channel","aria-hidden":"true"},"#"),a(" NO_SUCH_CHANNEL")],-1),C=e("p",null,[a("ID: "),e("code",null,"19959ee9-0153-4c51-bbd9-a98c49dc59d6")],-1);function w(x,y){const c=s("MkApiConsole"),r=s("ClientOnly"),t=s("MkSchemaViewer");return l(),i("div",null,[_,u,n(r,null,{default:o(()=>[n(c,{name:"channels/unfollow",def:{summary:"",description:"",tags:["channels"],requireCredential:!0,req:{type:"object",properties:{channelId:{type:"string",format:"misskey:id"}},required:["channelId"]},res:{},errors:{"19959ee9-0153-4c51-bbd9-a98c49dc59d6":{id:"19959ee9-0153-4c51-bbd9-a98c49dc59d6",code:"NO_SUCH_CHANNEL",description:""}}}})]),_:1}),p,n(r,null,{default:o(()=>[n(t,{schema:{type:"object",properties:{channelId:{type:"string",format:"misskey:id"}},required:["channelId"]}})]),_:1}),f,n(r,null,{default:o(()=>[n(t,{schema:{}})]),_:1}),m,b,C])}var k=d(h,[["render",w],["__file","unfollow.html.vue"]]);export{k as default};
