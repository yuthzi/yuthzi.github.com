import{bn as h}from"./index-b2e15df3.js";import{h as k,r as s,a3 as o,ad as w,j as i,k as g,D as a,x as p,y as v,v as x,B as D,u as T,F as y}from"./plugin-vue_export-helper-33be20d1.js";function C(t){return h.get(`/admin/product/list/${t.pageNum}/${t.pageSize}`)}const P=k({__name:"index",setup(t){const c=[{type:"index",label:"#",width:50},{prop:"id",label:"id",width:50},{prop:"skuName",label:"商品名称"},{prop:"skuDesc",label:"商品描述"},{prop:"skuDefaultImg",label:"商品图片",render:({row:e})=>a(y,null,[a(o("el-image"),{src:e.skuDefaultImg,style:"height: 100px; width: 100px;",fit:"cover"},null)])},{prop:"price",label:"商品价格（¥）",width:120},{prop:"createTime",label:"创建时间",sortable:!0,width:110},{prop:"operation",label:"操作",fixed:"right",width:100}],l=s(),u=e=>({list:e==null?void 0:e.records,total:e==null?void 0:e.total}),m=s(),b=async(e,n={})=>{let r={title:e,rowData:{...n},api:"",getTableList:l.value.getTableList};m.value.acceptParams(r)};return(e,n)=>{const r=o("el-button"),d=o("ProTable"),_=w("auth");return i(),g("div",null,[a(d,{ref_key:"proTable",ref:l,dataCallback:u,columns:c,requestApi:T(C)},{operation:p(f=>[v((i(),x(r,{type:"primary",link:"",icon:"View",onClick:B=>b("编辑",f.row)},{default:p(()=>[D(" 查看 ")]),_:2},1032,["onClick"])),[[_,["btn.User.update"]]])]),_:1},8,["requestApi"])])}}});export{P as default};
