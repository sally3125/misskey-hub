import{_ as o,o as d,c,b as t,w as i,a as e,d as a,r as s}from"./app.87509b5a.js";const m={},h=e("h1",{id:"channels-timeline",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#channels-timeline","aria-hidden":"true"},"#"),a(),e("code",null,"channels/timeline")],-1),p=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),f=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),u=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1),_=e("h3",{id:"no-such-channel",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-channel","aria-hidden":"true"},"#"),a(" NO_SUCH_CHANNEL")],-1),y=e("p",null,[a("ID: "),e("code",null,"4d0eeeba-a02c-4c3c-9966-ef60d38d2e7f")],-1);function b(k,g){const l=s("MkApiConsole"),n=s("ClientOnly"),r=s("MkSchemaViewer");return d(),c("div",null,[h,t(n,null,{default:i(()=>[t(l,{name:"channels/timeline",def:{summary:"",description:"",tags:["notes"],requireCredential:!1,req:{type:"object",properties:{channelId:{type:"string",format:"misskey:id"},limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"},sinceDate:{type:"integer"},untilDate:{type:"integer"}},required:["channelId"]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"}},errors:{"4d0eeeba-a02c-4c3c-9966-ef60d38d2e7f":{id:"4d0eeeba-a02c-4c3c-9966-ef60d38d2e7f",code:"NO_SUCH_CHANNEL",description:""}}}})]),_:1}),p,t(n,null,{default:i(()=>[t(r,{schema:{type:"object",properties:{channelId:{type:"string",format:"misskey:id"},limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"},sinceDate:{type:"integer"},untilDate:{type:"integer"}},required:["channelId"]}})]),_:1}),f,t(n,null,{default:i(()=>[t(r,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"}}})]),_:1}),u,_,y])}var x=o(m,[["render",b],["__file","timeline.html.vue"]]);export{x as default};
