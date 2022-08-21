import{_ as i,o as p,c as f,b as l,w as s,a as e,d as a,r as o}from"./app.87509b5a.js";const u={},d=e("h1",{id:"admin-server-info",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-server-info","aria-hidden":"true"},"#"),a(),e("code",null,"admin/server-info")],-1),c=e("p",null,"Credential required.",-1),b=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),m=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),y=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1);function h(_,q){const r=o("MkApiConsole"),t=o("ClientOnly"),n=o("MkSchemaViewer");return p(),f("div",null,[d,c,l(t,null,{default:s(()=>[l(r,{name:"admin/server-info",def:{summary:"",description:"",tags:["admin"],requireCredential:!0,req:{type:"object",properties:{},required:[]},res:{type:"object",optional:!1,nullable:!1,properties:{machine:{type:"string",optional:!1,nullable:!1},os:{type:"string",optional:!1,nullable:!1,example:"linux"},node:{type:"string",optional:!1,nullable:!1},psql:{type:"string",optional:!1,nullable:!1},cpu:{type:"object",optional:!1,nullable:!1,properties:{model:{type:"string",optional:!1,nullable:!1},cores:{type:"number",optional:!1,nullable:!1}},required:["model","cores"]},mem:{type:"object",optional:!1,nullable:!1,properties:{total:{type:"number",optional:!1,nullable:!1,format:"bytes"}},required:["total"]},fs:{type:"object",optional:!1,nullable:!1,properties:{total:{type:"number",optional:!1,nullable:!1,format:"bytes"},used:{type:"number",optional:!1,nullable:!1,format:"bytes"}},required:["total","used"]},net:{type:"object",optional:!1,nullable:!1,properties:{interface:{type:"string",optional:!1,nullable:!1,example:"eth0"}},required:["interface"]}},required:["machine","os","node","psql","cpu","mem","fs","net"]},errors:{}}})]),_:1}),b,l(t,null,{default:s(()=>[l(n,{schema:{type:"object",properties:{},required:[]}})]),_:1}),m,l(t,null,{default:s(()=>[l(n,{schema:{type:"object",optional:!1,nullable:!1,properties:{machine:{type:"string",optional:!1,nullable:!1},os:{type:"string",optional:!1,nullable:!1,example:"linux"},node:{type:"string",optional:!1,nullable:!1},psql:{type:"string",optional:!1,nullable:!1},cpu:{type:"object",optional:!1,nullable:!1,properties:{model:{type:"string",optional:!1,nullable:!1},cores:{type:"number",optional:!1,nullable:!1}},required:["model","cores"]},mem:{type:"object",optional:!1,nullable:!1,properties:{total:{type:"number",optional:!1,nullable:!1,format:"bytes"}},required:["total"]},fs:{type:"object",optional:!1,nullable:!1,properties:{total:{type:"number",optional:!1,nullable:!1,format:"bytes"},used:{type:"number",optional:!1,nullable:!1,format:"bytes"}},required:["total","used"]},net:{type:"object",optional:!1,nullable:!1,properties:{interface:{type:"string",optional:!1,nullable:!1,example:"eth0"}},required:["interface"]}},required:["machine","os","node","psql","cpu","mem","fs","net"]}})]),_:1}),y])}var g=i(u,[["render",h],["__file","server-info.html.vue"]]);export{g as default};
