import{_ as i,o as c,c as l,b as r,w as d,a as e,d as o,e as f,r as t}from"./app.87509b5a.js";const h={},p=e("h1",{id:"drive-folders-update",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#drive-folders-update","aria-hidden":"true"},"#"),o(),e("code",null,"drive/folders/update")],-1),u=e("p",null,"Credential required.",-1),_=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),o(" Parameters")],-1),m=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),o(" Response")],-1),b=f('<h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><h3 id="no-such-folder" tabindex="-1"><a class="header-anchor" href="#no-such-folder" aria-hidden="true">#</a> NO_SUCH_FOLDER</h3><p>ID: <code>f7974dac-2c0d-4a27-926e-23583b28e98e</code></p><h3 id="no-such-parent-folder" tabindex="-1"><a class="header-anchor" href="#no-such-parent-folder" aria-hidden="true">#</a> NO_SUCH_PARENT_FOLDER</h3><p>ID: <code>ce104e3a-faaf-49d5-b459-10ff0cbbcaa1</code></p>',5);function y(v,x){const n=t("MkApiConsole"),a=t("ClientOnly"),s=t("MkSchemaViewer");return c(),l("div",null,[p,u,r(a,null,{default:d(()=>[r(n,{name:"drive/folders/update",def:{summary:"",description:"",tags:["drive"],requireCredential:!0,req:{type:"object",properties:{folderId:{type:"string",format:"misskey:id"},name:{type:"string",maxLength:200},parentId:{type:"string",format:"misskey:id",nullable:!0}},required:["folderId"]},res:{type:"object",optional:!1,nullable:!1,ref:"DriveFolder",$ref:"misskey://DriveFolder"},errors:{"f7974dac-2c0d-4a27-926e-23583b28e98e":{id:"f7974dac-2c0d-4a27-926e-23583b28e98e",code:"NO_SUCH_FOLDER",description:""},"ce104e3a-faaf-49d5-b459-10ff0cbbcaa1":{id:"ce104e3a-faaf-49d5-b459-10ff0cbbcaa1",code:"NO_SUCH_PARENT_FOLDER",description:""}}}})]),_:1}),_,r(a,null,{default:d(()=>[r(s,{schema:{type:"object",properties:{folderId:{type:"string",format:"misskey:id"},name:{type:"string",maxLength:200},parentId:{type:"string",format:"misskey:id",nullable:!0}},required:["folderId"]}})]),_:1}),m,r(a,null,{default:d(()=>[r(s,{schema:{type:"object",optional:!1,nullable:!1,ref:"DriveFolder",$ref:"misskey://DriveFolder"}})]),_:1}),b])}var C=i(h,[["render",y],["__file","update.html.vue"]]);export{C as default};
