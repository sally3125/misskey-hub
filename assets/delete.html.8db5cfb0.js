import{_ as n,o as i,c as h,b as a,w as d,a as e,d as t,e as l,r as s}from"./app.87509b5a.js";const p={},_=e("h1",{id:"pages-delete",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pages-delete","aria-hidden":"true"},"#"),t(),e("code",null,"pages/delete")],-1),u=e("p",null,"Credential required.",-1),m=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),f=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),b=l('<h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><h3 id="no-such-page" tabindex="-1"><a class="header-anchor" href="#no-such-page" aria-hidden="true">#</a> NO_SUCH_PAGE</h3><p>ID: <code>eb0c6e1d-d519-4764-9486-52a7e1c6392a</code></p><h3 id="access-denied" tabindex="-1"><a class="header-anchor" href="#access-denied" aria-hidden="true">#</a> ACCESS_DENIED</h3><p>ID: <code>8b741b3e-2c22-44b3-a15f-29949aa1601e</code></p>',5);function g(C,x){const o=s("MkApiConsole"),r=s("ClientOnly"),c=s("MkSchemaViewer");return i(),h("div",null,[_,u,a(r,null,{default:d(()=>[a(o,{name:"pages/delete",def:{summary:"",description:"",tags:["pages"],requireCredential:!0,req:{type:"object",properties:{pageId:{type:"string",format:"misskey:id"}},required:["pageId"]},res:{},errors:{"eb0c6e1d-d519-4764-9486-52a7e1c6392a":{id:"eb0c6e1d-d519-4764-9486-52a7e1c6392a",code:"NO_SUCH_PAGE",description:""},"8b741b3e-2c22-44b3-a15f-29949aa1601e":{id:"8b741b3e-2c22-44b3-a15f-29949aa1601e",code:"ACCESS_DENIED",description:""}}}})]),_:1}),m,a(r,null,{default:d(()=>[a(c,{schema:{type:"object",properties:{pageId:{type:"string",format:"misskey:id"}},required:["pageId"]}})]),_:1}),f,a(r,null,{default:d(()=>[a(c,{schema:{}})]),_:1}),b])}var y=n(p,[["render",g],["__file","delete.html.vue"]]);export{y as default};
