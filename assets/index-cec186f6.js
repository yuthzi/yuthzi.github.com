import{bn as h}from"./index-b2e15df3.js";import{h as k,r as u,a3 as n,ad as T,j as i,k as x,D as r,x as s,y as w,v as y,B as o,u as C,F as c}from"./_plugin-vue_export-helper-33be20d1.js";function D(t){return h.get(`/admin/order/orderRefundInfo/${t.pageNum}/${t.pageSize}`)}const A=k({__name:"index",setup(t){const d=[{type:"index",label:"#",width:80},{prop:"id",label:"id"},{prop:"outTradeNo",label:"订单号"},{prop:"imgUrl",label:"商品图片",render:({row:e})=>r(c,null,[r(n("el-image"),{src:e.imgUrl,style:"width: 100px; height: 100px"},null)])},{prop:"detail",label:"商品详情",render:({row:e})=>r(c,null,[r("div",null,[e.skuName]),r("div",null,[o("退款数量："),e.refundNum]),r("div",null,[o("退款金额："),e.refundAmount])])},{prop:"refundReasonTypeString",label:"退款原因"},{prop:"refundTypeString",label:"退款类型"},{prop:"refundStatusString",label:"退款状态"},{prop:"approveRemark",label:"退款备注"},{prop:"approveTime",label:"申请时间",sortable:!0,width:110},{prop:"operation",label:"操作",fixed:"right",width:100}],a=u(),m=e=>({list:e==null?void 0:e.records,total:e==null?void 0:e.total}),b=u(),f=async(e,p={})=>{let l={title:e,rowData:{...p},api:"",getTableList:a.value.getTableList};b.value.acceptParams(l)};return(e,p)=>{const l=n("el-button"),_=n("ProTable"),g=T("auth");return i(),x("div",null,[r(_,{ref_key:"proTable",ref:a,dataCallback:m,columns:d,requestApi:C(D)},{operation:s(v=>[w((i(),y(l,{type:"primary",link:"",icon:"View",onClick:F=>f("编辑",v.row)},{default:s(()=>[o(" 查看 ")]),_:2},1032,["onClick"])),[[g,["btn.User.update"]]])]),_:1},8,["requestApi"])])}}});export{A as default};
