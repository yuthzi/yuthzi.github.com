import{bn as s}from"./index-b2e15df3.js";import{h as n,r as a,a3 as u,j as i,k as c,D as b,u as m}from"./plugin-vue_export-helper-33be20d1.js";function f(l){return s.post("/admin/log/login/list",l)}const h=n({__name:"index",setup(l){const o=[{type:"index",label:"#",width:80},{prop:"username",label:"username",search:{el:"input",props:{placeholder:"输入username"}}},{prop:"ip",label:"ip"},{prop:"location",label:"城市"},{prop:"browser",label:"浏览器"},{prop:"os",label:"操作系统"},{prop:"status",label:"状态",enum:[{label:"登录失败",value:0},{label:"登录成功",value:1}]},{prop:"msg",label:"消息"},{prop:"gmtCreate",label:"创建时间",sortable:!0},{prop:"gmtModified",label:"更新时间",sortable:!0}],r=a(),p=e=>({list:e==null?void 0:e.records,total:e==null?void 0:e.total});return(e,_)=>{const t=u("ProTable");return i(),c("div",null,[b(t,{ref_key:"proTable",ref:r,selectId:"logId",columns:o,requestApi:m(f),dataCallback:p},null,8,["requestApi"])])}}});export{h as default};
