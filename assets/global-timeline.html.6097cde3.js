import{_ as o,o as d,c,b as t,w as s,a as e,d as a,r as n}from"./app.87509b5a.js";const f={},m=e("h1",{id:"notes-global-timeline",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes-global-timeline","aria-hidden":"true"},"#"),a(),e("code",null,"notes/global-timeline")],-1),h=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),p=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),u=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1),_=e("h3",{id:"gtl-disabled",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gtl-disabled","aria-hidden":"true"},"#"),a(" GTL_DISABLED")],-1),y=e("p",null,[a("ID: "),e("code",null,"0332fc13-6ab2-4427-ae80-a9fadffd1a6b")],-1);function b(g,k){const r=n("MkApiConsole"),i=n("ClientOnly"),l=n("MkSchemaViewer");return d(),c("div",null,[m,t(i,null,{default:s(()=>[t(r,{name:"notes/global-timeline",def:{summary:"",description:"",tags:["notes"],requireCredential:!1,req:{type:"object",properties:{withFiles:{type:"boolean",default:!1,description:"Only show notes that have attached files."},limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"},sinceDate:{type:"integer"},untilDate:{type:"integer"}},required:[]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"}},errors:{"0332fc13-6ab2-4427-ae80-a9fadffd1a6b":{id:"0332fc13-6ab2-4427-ae80-a9fadffd1a6b",code:"GTL_DISABLED",description:""}}}},null,8,["def"])]),_:1}),h,t(i,null,{default:s(()=>[t(l,{schema:{type:"object",properties:{withFiles:{type:"boolean",default:!1,description:"Only show notes that have attached files."},limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"},sinceDate:{type:"integer"},untilDate:{type:"integer"}},required:[]}},null,8,["schema"])]),_:1}),p,t(i,null,{default:s(()=>[t(l,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"}}})]),_:1}),u,_,y])}var D=o(f,[["render",b],["__file","global-timeline.html.vue"]]);export{D as default};
