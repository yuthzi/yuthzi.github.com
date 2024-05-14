import{bn as k}from"./index-b2e15df3.js";import{u as v}from"./useHandleData-fc19fefe.js";import{h as C,r as g,a3 as l,ad as w,j as n,k as x,D as a,x as s,y as d,v as b,B as m,u as T,F as U}from"./plugin-vue_export-helper-33be20d1.js";import"./IconifyIcon-a624bcfa.js";function $(t){return k.post("/admin/customer/list",t)}function B(t){return k.get(`/admin/user/lock/${t.id}/${t.status}`)}const A=C({__name:"index",setup(t){const _=[{type:"index",label:"#",width:80},{prop:"id",label:"id"},{prop:"nickName",label:"昵称",search:{el:"input",key:"keyword"}},{prop:"name",label:"姓名"},{prop:"phoneNum",label:"手机号"},{prop:"address",label:"地址",_children:[{prop:"province",label:"省份"},{prop:"city",label:"城市"},{prop:"county",label:"区"}]},{prop:"status",label:"状态",render:({row:e})=>a(U,null,[a(l("el-tag"),{type:e.status?"success":"danger"},{default:()=>[e.status?"启用":"禁用"]})])},{prop:"status",label:"会员等级"},{prop:"createTime",label:"创建时间",sortable:!0,width:110},{prop:"operation",label:"操作",fixed:"right",width:100}],i=g(),f=e=>({list:e==null?void 0:e.records,total:e==null?void 0:e.total}),c=async e=>{const o=e.status?0:1;await v(B,{id:e.id,status:o},`${o?"启用":"封禁"}`),i.value.getTableList()};return(e,o)=>{const p=l("el-button"),h=l("ProTable"),u=w("auth");return n(),x("div",null,[a(h,{ref_key:"proTable",ref:i,dataCallback:f,columns:_,requestApi:T($)},{operation:s(r=>[r.row.status?d((n(),b(p,{key:0,type:"danger",link:"",icon:"Lock",onClick:y=>c(r.row)},{default:s(()=>[m(" 封禁 ")]),_:2},1032,["onClick"])),[[u,["btn.User.update"]]]):d((n(),b(p,{key:1,type:"primary",link:"",icon:"Unlock",onClick:y=>c(r.row)},{default:s(()=>[m(" 启用 ")]),_:2},1032,["onClick"])),[[u,["btn.User.update"]]])]),_:1},8,["requestApi"])])}}});export{A as default};
