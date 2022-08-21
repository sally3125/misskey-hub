import{_ as i,o as n,c as l,b as a,w as d,a as e,d as t,e as h,r as s}from"./app.87509b5a.js";const f={},p=e("h1",{id:"gallery-posts-like",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gallery-posts-like","aria-hidden":"true"},"#"),t(),e("code",null,"gallery/posts/like")],-1),_=e("p",null,"Credential required.",-1),u=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),m=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),b=h('<h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><h3 id="no-such-post" tabindex="-1"><a class="header-anchor" href="#no-such-post" aria-hidden="true">#</a> NO_SUCH_POST</h3><p>ID: <code>56c06af3-1287-442f-9701-c93f7c4a62ff</code></p><h3 id="your-post" tabindex="-1"><a class="header-anchor" href="#your-post" aria-hidden="true">#</a> YOUR_POST</h3><p>ID: <code>f78f1511-5ebc-4478-a888-1198d752da68</code></p><h3 id="already-liked" tabindex="-1"><a class="header-anchor" href="#already-liked" aria-hidden="true">#</a> ALREADY_LIKED</h3><p>ID: <code>40e9ed56-a59c-473a-bf3f-f289c54fb5a7</code></p>',7);function y(k,x){const c=s("MkApiConsole"),r=s("ClientOnly"),o=s("MkSchemaViewer");return n(),l("div",null,[p,_,a(r,null,{default:d(()=>[a(c,{name:"gallery/posts/like",def:{summary:"",description:"",tags:["gallery"],requireCredential:!0,req:{type:"object",properties:{postId:{type:"string",format:"misskey:id"}},required:["postId"]},res:{},errors:{"56c06af3-1287-442f-9701-c93f7c4a62ff":{id:"56c06af3-1287-442f-9701-c93f7c4a62ff",code:"NO_SUCH_POST",description:""},"f78f1511-5ebc-4478-a888-1198d752da68":{id:"f78f1511-5ebc-4478-a888-1198d752da68",code:"YOUR_POST",description:""},"40e9ed56-a59c-473a-bf3f-f289c54fb5a7":{id:"40e9ed56-a59c-473a-bf3f-f289c54fb5a7",code:"ALREADY_LIKED",description:""}}}})]),_:1}),u,a(r,null,{default:d(()=>[a(o,{schema:{type:"object",properties:{postId:{type:"string",format:"misskey:id"}},required:["postId"]}})]),_:1}),m,a(r,null,{default:d(()=>[a(o,{schema:{}})]),_:1}),b])}var O=i(f,[["render",y],["__file","like.html.vue"]]);export{O as default};
