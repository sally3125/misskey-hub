import{_ as o,o as l,c,b as t,w as r,a as e,d as n,e as p,r as i}from"./app.87509b5a.js";const u={},b=e("h1",{id:"notes-create",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes-create","aria-hidden":"true"},"#"),n(),e("code",null,"notes/create")],-1),f=e("p",null,"\u30CE\u30FC\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u8FD4\u4FE1\u3084Renote\u3082\u3053\u306EAPI\u3067\u884C\u3044\u307E\u3059\u3002",-1),m=e("p",null,"Credential required.",-1),h=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),n(" Parameters")],-1),y=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),n(" Response")],-1),_=p('<h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><h3 id="no-such-renote-target" tabindex="-1"><a class="header-anchor" href="#no-such-renote-target" aria-hidden="true">#</a> NO_SUCH_RENOTE_TARGET</h3><p>ID: <code>b5c90186-4ab0-49c8-9bba-a1f76c282ba4</code></p><p>Renote\u306B\u6307\u5B9A\u3055\u308C\u305F\u30CE\u30FC\u30C8\u304C\u5B58\u5728\u3057\u306A\u3044\u304B\u3001\u30A2\u30AF\u30BB\u30B9\u304C\u8A31\u53EF\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002</p><h3 id="cannot-renote-to-a-pure-renote" tabindex="-1"><a class="header-anchor" href="#cannot-renote-to-a-pure-renote" aria-hidden="true">#</a> CANNOT_RENOTE_TO_A_PURE_RENOTE</h3><p>ID: <code>fd4cc33e-2a37-48dd-99cc-9b806eb2031a</code></p><p>\u5358\u7D14\u306ARenote\u3092\u518D\u5EA6Renote\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002</p><h3 id="no-such-reply-target" tabindex="-1"><a class="header-anchor" href="#no-such-reply-target" aria-hidden="true">#</a> NO_SUCH_REPLY_TARGET</h3><p>ID: <code>749ee0f6-d3da-459a-bf02-282e2da4292c</code></p><p>\u8FD4\u4FE1\u5148\u306B\u6307\u5B9A\u3055\u308C\u305F\u30CE\u30FC\u30C8\u304C\u5B58\u5728\u3057\u306A\u3044\u304B\u3001\u30A2\u30AF\u30BB\u30B9\u304C\u8A31\u53EF\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002</p><h3 id="cannot-reply-to-a-pure-renote" tabindex="-1"><a class="header-anchor" href="#cannot-reply-to-a-pure-renote" aria-hidden="true">#</a> CANNOT_REPLY_TO_A_PURE_RENOTE</h3><p>ID: <code>3ac74a84-8fd5-4bb0-870f-01804f82ce15</code></p><p>\u5358\u7D14\u306ARenote\u3092\u306B\u8FD4\u4FE1\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002</p><h3 id="cannot-create-already-expired-poll" tabindex="-1"><a class="header-anchor" href="#cannot-create-already-expired-poll" aria-hidden="true">#</a> CANNOT_CREATE_ALREADY_EXPIRED_POLL</h3><p>ID: <code>04da457d-b083-4055-9082-955525eda5a5</code></p><p>\u30A2\u30F3\u30B1\u30FC\u30C8\u306E\u671F\u9650\u306E\u6307\u5B9A\u304C\u8AA4\u3063\u3066\u3044\u307E\u3059\u3002</p><h3 id="no-such-channel" tabindex="-1"><a class="header-anchor" href="#no-such-channel" aria-hidden="true">#</a> NO_SUCH_CHANNEL</h3><p>ID: <code>b1653923-5453-4edc-b786-7c4f39bb0bbb</code></p><p>\u6307\u5B9A\u3055\u308C\u305F\u30C1\u30E3\u30F3\u30CD\u30EB\u304C\u5B58\u5728\u3057\u306A\u3044\u304B\u3001\u30A2\u30AF\u30BB\u30B9\u304C\u8A31\u53EF\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002</p><h3 id="you-have-been-blocked" tabindex="-1"><a class="header-anchor" href="#you-have-been-blocked" aria-hidden="true">#</a> YOU_HAVE_BEEN_BLOCKED</h3><p>ID: <code>b390d7e1-8a5e-46ed-b625-06271cafd3d3</code></p><p>\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u30E6\u30FC\u30B6\u30FC\u306E\u30CE\u30FC\u30C8\u306B\u5BFE\u3057\u3066\u8FD4\u4FE1\u3084Renote\u306F\u884C\u3048\u307E\u305B\u3093\u3002</p>',22);function E(I,x){const d=i("MkApiConsole"),a=i("ClientOnly"),s=i("MkSchemaViewer");return l(),c("div",null,[b,f,m,t(a,null,{default:r(()=>[t(d,{name:"notes/create",def:{summary:"\u30CE\u30FC\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002",description:"\u30CE\u30FC\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u8FD4\u4FE1\u3084Renote\u3082\u3053\u306EAPI\u3067\u884C\u3044\u307E\u3059\u3002",tags:["notes"],requireCredential:!0,req:{type:"object",properties:{visibility:{type:"string",enum:["public","home","followers","specified"],default:"public"},visibleUserIds:{type:"array",uniqueItems:!0,items:{type:"string",format:"misskey:id"}},text:{type:"string",maxLength:3e3,nullable:!0},cw:{type:"string",nullable:!0,maxLength:100},localOnly:{type:"boolean",default:!1},noExtractMentions:{type:"boolean",default:!1},noExtractHashtags:{type:"boolean",default:!1},noExtractEmojis:{type:"boolean",default:!1},fileIds:{type:"array",uniqueItems:!0,minItems:1,maxItems:16,items:{type:"string",format:"misskey:id"}},mediaIds:{deprecated:!0,description:"Use `fileIds` instead. If both are specified, this property is discarded.",type:"array",uniqueItems:!0,minItems:1,maxItems:16,items:{type:"string",format:"misskey:id"}},replyId:{type:"string",format:"misskey:id",nullable:!0},renoteId:{type:"string",format:"misskey:id",nullable:!0},channelId:{type:"string",format:"misskey:id",nullable:!0},poll:{type:"object",nullable:!0,properties:{choices:{type:"array",uniqueItems:!0,minItems:2,maxItems:10,items:{type:"string",minLength:1,maxLength:50}},multiple:{type:"boolean",default:!1},expiresAt:{type:"integer",nullable:!0},expiredAfter:{type:"integer",nullable:!0,minimum:1}},required:["choices"]}},anyOf:[{properties:{text:{type:"string",minLength:1,maxLength:3e3,nullable:!1}},required:["text"]},{required:["fileIds"]},{required:["mediaIds"]},{properties:{poll:{type:"object",nullable:!1}},required:["poll"]},{required:["renoteId"]}]},res:{type:"object",optional:!1,nullable:!1,properties:{createdNote:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note",description:"\u4F5C\u6210\u3055\u308C\u305F\u30CE\u30FC\u30C8"}},required:["createdNote"]},errors:{"b5c90186-4ab0-49c8-9bba-a1f76c282ba4":{id:"b5c90186-4ab0-49c8-9bba-a1f76c282ba4",code:"NO_SUCH_RENOTE_TARGET",description:"Renote\u306B\u6307\u5B9A\u3055\u308C\u305F\u30CE\u30FC\u30C8\u304C\u5B58\u5728\u3057\u306A\u3044\u304B\u3001\u30A2\u30AF\u30BB\u30B9\u304C\u8A31\u53EF\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"},"fd4cc33e-2a37-48dd-99cc-9b806eb2031a":{id:"fd4cc33e-2a37-48dd-99cc-9b806eb2031a",code:"CANNOT_RENOTE_TO_A_PURE_RENOTE",description:"\u5358\u7D14\u306ARenote\u3092\u518D\u5EA6Renote\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"},"749ee0f6-d3da-459a-bf02-282e2da4292c":{id:"749ee0f6-d3da-459a-bf02-282e2da4292c",code:"NO_SUCH_REPLY_TARGET",description:"\u8FD4\u4FE1\u5148\u306B\u6307\u5B9A\u3055\u308C\u305F\u30CE\u30FC\u30C8\u304C\u5B58\u5728\u3057\u306A\u3044\u304B\u3001\u30A2\u30AF\u30BB\u30B9\u304C\u8A31\u53EF\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"},"3ac74a84-8fd5-4bb0-870f-01804f82ce15":{id:"3ac74a84-8fd5-4bb0-870f-01804f82ce15",code:"CANNOT_REPLY_TO_A_PURE_RENOTE",description:"\u5358\u7D14\u306ARenote\u3092\u306B\u8FD4\u4FE1\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"},"04da457d-b083-4055-9082-955525eda5a5":{id:"04da457d-b083-4055-9082-955525eda5a5",code:"CANNOT_CREATE_ALREADY_EXPIRED_POLL",description:"\u30A2\u30F3\u30B1\u30FC\u30C8\u306E\u671F\u9650\u306E\u6307\u5B9A\u304C\u8AA4\u3063\u3066\u3044\u307E\u3059\u3002"},"b1653923-5453-4edc-b786-7c4f39bb0bbb":{id:"b1653923-5453-4edc-b786-7c4f39bb0bbb",code:"NO_SUCH_CHANNEL",description:"\u6307\u5B9A\u3055\u308C\u305F\u30C1\u30E3\u30F3\u30CD\u30EB\u304C\u5B58\u5728\u3057\u306A\u3044\u304B\u3001\u30A2\u30AF\u30BB\u30B9\u304C\u8A31\u53EF\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"},"b390d7e1-8a5e-46ed-b625-06271cafd3d3":{id:"b390d7e1-8a5e-46ed-b625-06271cafd3d3",code:"YOU_HAVE_BEEN_BLOCKED",description:"\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u30E6\u30FC\u30B6\u30FC\u306E\u30CE\u30FC\u30C8\u306B\u5BFE\u3057\u3066\u8FD4\u4FE1\u3084Renote\u306F\u884C\u3048\u307E\u305B\u3093\u3002"}}}},null,8,["def"])]),_:1}),h,t(a,null,{default:r(()=>[t(s,{schema:{type:"object",properties:{visibility:{type:"string",enum:["public","home","followers","specified"],default:"public"},visibleUserIds:{type:"array",uniqueItems:!0,items:{type:"string",format:"misskey:id"}},text:{type:"string",maxLength:3e3,nullable:!0},cw:{type:"string",nullable:!0,maxLength:100},localOnly:{type:"boolean",default:!1},noExtractMentions:{type:"boolean",default:!1},noExtractHashtags:{type:"boolean",default:!1},noExtractEmojis:{type:"boolean",default:!1},fileIds:{type:"array",uniqueItems:!0,minItems:1,maxItems:16,items:{type:"string",format:"misskey:id"}},mediaIds:{deprecated:!0,description:"Use `fileIds` instead. If both are specified, this property is discarded.",type:"array",uniqueItems:!0,minItems:1,maxItems:16,items:{type:"string",format:"misskey:id"}},replyId:{type:"string",format:"misskey:id",nullable:!0},renoteId:{type:"string",format:"misskey:id",nullable:!0},channelId:{type:"string",format:"misskey:id",nullable:!0},poll:{type:"object",nullable:!0,properties:{choices:{type:"array",uniqueItems:!0,minItems:2,maxItems:10,items:{type:"string",minLength:1,maxLength:50}},multiple:{type:"boolean",default:!1},expiresAt:{type:"integer",nullable:!0},expiredAfter:{type:"integer",nullable:!0,minimum:1}},required:["choices"]}},anyOf:[{properties:{text:{type:"string",minLength:1,maxLength:3e3,nullable:!1}},required:["text"]},{required:["fileIds"]},{required:["mediaIds"]},{properties:{poll:{type:"object",nullable:!1}},required:["poll"]},{required:["renoteId"]}]}},null,8,["schema"])]),_:1}),y,t(a,null,{default:r(()=>[t(s,{schema:{type:"object",optional:!1,nullable:!1,properties:{createdNote:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note",description:"\u4F5C\u6210\u3055\u308C\u305F\u30CE\u30FC\u30C8"}},required:["createdNote"]}})]),_:1}),_])}var N=o(u,[["render",E],["__file","create.html.vue"]]);export{N as default};
