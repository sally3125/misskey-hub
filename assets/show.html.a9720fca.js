import{_ as i,o as c,c as l,b as n,w as s,a as e,d as a,r}from"./app.87509b5a.js";const h={},_=e("h1",{id:"antennas-show",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#antennas-show","aria-hidden":"true"},"#"),a(),e("code",null,"antennas/show")],-1),f=e("p",null,"Credential required.",-1),p=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),u=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),m=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1),b=e("h3",{id:"no-such-antenna",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-antenna","aria-hidden":"true"},"#"),a(" NO_SUCH_ANTENNA")],-1),y=e("p",null,[a("ID: "),e("code",null,"c06569fb-b025-4f23-b22d-1fcd20d2816b")],-1);function N(k,w){const d=r("MkApiConsole"),t=r("ClientOnly"),o=r("MkSchemaViewer");return c(),l("div",null,[_,f,n(t,null,{default:s(()=>[n(d,{name:"antennas/show",def:{summary:"",description:"",tags:["antennas"],requireCredential:!0,req:{type:"object",properties:{antennaId:{type:"string",format:"misskey:id"}},required:["antennaId"]},res:{type:"object",optional:!1,nullable:!1,ref:"Antenna",$ref:"misskey://Antenna"},errors:{"c06569fb-b025-4f23-b22d-1fcd20d2816b":{id:"c06569fb-b025-4f23-b22d-1fcd20d2816b",code:"NO_SUCH_ANTENNA",description:""}}}})]),_:1}),p,n(t,null,{default:s(()=>[n(o,{schema:{type:"object",properties:{antennaId:{type:"string",format:"misskey:id"}},required:["antennaId"]}})]),_:1}),u,n(t,null,{default:s(()=>[n(o,{schema:{type:"object",optional:!1,nullable:!1,ref:"Antenna",$ref:"misskey://Antenna"}})]),_:1}),m,b,y])}var A=i(h,[["render",N],["__file","show.html.vue"]]);export{A as default};
