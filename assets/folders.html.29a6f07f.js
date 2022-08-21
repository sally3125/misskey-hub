import{_ as n,o as d,c as m,b as r,w as s,a as e,d as t,r as i}from"./app.87509b5a.js";const c={},f=e("h1",{id:"drive-folders",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#drive-folders","aria-hidden":"true"},"#"),t(),e("code",null,"drive/folders")],-1),u=e("p",null,"Credential required.",-1),p=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),h=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),_=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),t(" Errors")],-1);function y(b,k){const o=i("MkApiConsole"),a=i("ClientOnly"),l=i("MkSchemaViewer");return d(),m("div",null,[f,u,r(a,null,{default:s(()=>[r(o,{name:"drive/folders",def:{summary:"",description:"",tags:["drive"],requireCredential:!0,req:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"},folderId:{type:"string",format:"misskey:id",nullable:!0,default:null}},required:[]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"DriveFolder",$ref:"misskey://DriveFolder"}},errors:{}}})]),_:1}),p,r(a,null,{default:s(()=>[r(l,{schema:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"},folderId:{type:"string",format:"misskey:id",nullable:!0,default:null}},required:[]}})]),_:1}),h,r(a,null,{default:s(()=>[r(l,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"DriveFolder",$ref:"misskey://DriveFolder"}}})]),_:1}),_])}var x=n(c,[["render",y],["__file","folders.html.vue"]]);export{x as default};
