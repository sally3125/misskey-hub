import{_ as i,o as c,c as h,b as a,w as d,a as e,d as o,e as l,r as t}from"./app.87509b5a.js";const _={},f=e("h1",{id:"notes-favorites-create",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes-favorites-create","aria-hidden":"true"},"#"),o(),e("code",null,"notes/favorites/create")],-1),p=e("p",null,"Credential required.",-1),u=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),o(" Parameters")],-1),m=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),o(" Response")],-1),b=l('<h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><h3 id="no-such-note" tabindex="-1"><a class="header-anchor" href="#no-such-note" aria-hidden="true">#</a> NO_SUCH_NOTE</h3><p>ID: <code>6dd26674-e060-4816-909a-45ba3f4da458</code></p><h3 id="already-favorited" tabindex="-1"><a class="header-anchor" href="#already-favorited" aria-hidden="true">#</a> ALREADY_FAVORITED</h3><p>ID: <code>a402c12b-34dd-41d2-97d8-4d2ffd96a1a6</code></p>',5);function x(y,v){const n=t("MkApiConsole"),r=t("ClientOnly"),s=t("MkSchemaViewer");return c(),h("div",null,[f,p,a(r,null,{default:d(()=>[a(n,{name:"notes/favorites/create",def:{summary:"",description:"",tags:["notes"],requireCredential:!0,req:{type:"object",properties:{noteId:{type:"string",format:"misskey:id"}},required:["noteId"]},res:{},errors:{"6dd26674-e060-4816-909a-45ba3f4da458":{id:"6dd26674-e060-4816-909a-45ba3f4da458",code:"NO_SUCH_NOTE",description:""},"a402c12b-34dd-41d2-97d8-4d2ffd96a1a6":{id:"a402c12b-34dd-41d2-97d8-4d2ffd96a1a6",code:"ALREADY_FAVORITED",description:""}}}})]),_:1}),u,a(r,null,{default:d(()=>[a(s,{schema:{type:"object",properties:{noteId:{type:"string",format:"misskey:id"}},required:["noteId"]}})]),_:1}),m,a(r,null,{default:d(()=>[a(s,{schema:{}})]),_:1}),b])}var k=i(_,[["render",x],["__file","create.html.vue"]]);export{k as default};
