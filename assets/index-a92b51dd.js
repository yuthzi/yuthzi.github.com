import{bn as C,bh as I}from"./index-b2e15df3.js";import{h,J as N,r as u,a3 as p,j as V,v as P,x as a,D as l,B as v,l as L,u as k,ag as E,k as U}from"./_plugin-vue_export-helper-33be20d1.js";import{E as B,A as R}from"./index-30c958c6.js";import{u as q}from"./useHandleData-fc19fefe.js";import{g as F,a as K}from"./permission-d741be8f.js";import"./IconifyIcon-a624bcfa.js";import"./SvgIcon-7c92118d.js";import"./index-955e1b5c.js";function A(m){return C.post("/admin/acl/role/list",m)}function H(m){return C.delete(`/admin/acl/role/remove/${m}`)}function M(m){return C.post("/admin/acl/role/add",m)}function S(m){return C.put("/admin/acl/role/modify",m)}const j=h({name:"RoleDialog"}),z=h({...j,setup(m,{expose:w}){const i=N({roleName:[{required:!0,message:"请填写角色名称"},{min:2,message:"角色名不能小于2位"}]}),r=u(!1),f=u(!1),n=u({title:""}),b=t=>{n.value=t,r.value=!0},_=u(),g=()=>{_.value.validate(async t=>{if(t)try{f.value=!0,await n.value.api(n.value.rowData),I.success({message:`${n.value.title}用户成功！`}),n.value.getTableList(),r.value=!1,f.value=!1}catch(o){f.value=!1,console.log(o)}})};return w({acceptParams:b}),(t,o)=>{const d=p("el-input"),c=p("el-form-item"),e=p("el-form"),s=p("el-button"),D=p("el-dialog");return V(),P(D,{modelValue:r.value,"onUpdate:modelValue":o[2]||(o[2]=y=>r.value=y),title:n.value.title,"destroy-on-close":!0,width:"580px"},{footer:a(()=>[l(s,{onClick:o[1]||(o[1]=y=>r.value=!1)},{default:a(()=>[v("取消")]),_:1}),l(s,{type:"primary",onClick:g,loading:f.value},{default:a(()=>[v(" 确定 ")]),_:1},8,["loading"])]),default:a(()=>[l(e,{ref_key:"ruleFormRef",ref:_,"label-width":"100px","label-suffix":" :",rules:i,model:n.value.rowData},{default:a(()=>[l(c,{label:"角色名称",prop:"roleName"},{default:a(()=>[l(d,{modelValue:n.value.rowData.roleName,"onUpdate:modelValue":o[0]||(o[0]=y=>n.value.rowData.roleName=y),placeholder:"请填写角色名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])]),_:1},8,["modelValue","title"])}}}),J={class:"tree-border"},G=h({name:"UserDrawer"}),O=h({...G,setup(m,{expose:w}){const i=u(!1),r=u({title:""}),f={children:"children",label:"menuName"},n=u([]),b=u([]),_=u(!1),g=u(),t=c=>{const{list:e}=c;r.value=c,i.value=!0,n.value=e.data,b.value=o(e.data)},o=(c,e=[])=>(c.forEach(s=>{s.select&&e.push(s.menuId),s.children&&o(s.children,e)}),e),d=async()=>{var c;try{const e=((c=g.value)==null?void 0:c.getCheckedKeys())||[],s={roleId:r.value.rowData.roleId,menuIdList:e};_.value=!0,await r.value.api(s),I.success({message:`${r.value.title}成功！`}),r.value.getTableList(),i.value=!1,window.location.reload(),_.value=!1}catch(e){_.value=!0,console.log(e)}};return w({acceptParams:t}),(c,e)=>{const s=p("el-input"),D=p("el-form-item"),y=p("el-form"),$=p("el-button"),T=p("el-drawer");return V(),P(T,{modelValue:i.value,"onUpdate:modelValue":e[2]||(e[2]=x=>i.value=x),"destroy-on-close":!0,size:"450px",title:`${r.value.title}`},{footer:a(()=>[l($,{onClick:e[1]||(e[1]=x=>i.value=!1)},{default:a(()=>[v("取消")]),_:1}),l($,{type:"primary",onClick:d,loading:_.value},{default:a(()=>[v(" 确定 ")]),_:1},8,["loading"])]),default:a(()=>[l(y,{"label-width":"100px","label-suffix":" :"},{default:a(()=>[l(D,{label:"角色名称"},{default:a(()=>[l(s,{disabled:"",modelValue:r.value.rowData.roleName,"onUpdate:modelValue":e[0]||(e[0]=x=>r.value.rowData.roleName=x),placeholder:"请填写角色名称",clearable:""},null,8,["modelValue"])]),_:1}),l(D,{label:"权限列表",prop:"permissionId"},{default:a(()=>[L("div",J,[l(k(B),{ref_key:"treeRef",ref:g,"node-key":"menuId","show-checkbox":"","default-expand-all":"","default-checked-keys":b.value,data:n.value,props:f},null,8,["default-checked-keys","data"])])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])}}});const Q=E(O,[["__scopeId","data-v-10f9d434"]]),oe=h({__name:"index",setup(m){const w=[{type:"index",label:"#",width:80},{prop:"roleId",label:"id"},{prop:"roleName",label:"角色名称",search:{el:"input",props:{placeholder:"输入角色名称"}}},{prop:"gmtCreate",label:"创建时间",sortable:!0},{prop:"gmtModified",label:"更新时间",sortable:!0},{prop:"operation",label:"操作",fixed:"right",width:280}],i=u(),r=t=>({list:t==null?void 0:t.records,total:t==null?void 0:t.total}),f=u(),n=(t,o={})=>{const d={title:t,rowData:{...o},api:t==="新增"?M:S,getTableList:i.value.getTableList};f.value.acceptParams(d)},b=u(),_=async(t,o)=>{const d={title:t,rowData:o,list:await F(o.roleId),api:K,getTableList:i.value.getTableList};b.value.acceptParams(d)},g=async t=>{await q(H,t.roleId,`删除${t.roleName}角色`),i.value.getTableList()};return(t,o)=>{const d=p("el-button"),c=p("ProTable");return V(),U("div",null,[l(c,{ref_key:"proTable",ref:i,selectId:"roleId",columns:w,requestApi:k(A),dataCallback:r},{tableHeader:a(()=>[l(k(R),{value:["btn.Role.add"]},{default:a(()=>[l(d,{type:"primary",icon:"Plus",onClick:o[0]||(o[0]=e=>n("新增"))},{default:a(()=>[v(" 添加 ")]),_:1})]),_:1},8,["value"])]),operation:a(e=>[l(k(R),{value:["btn.Role.assgin"]},{default:a(()=>[l(d,{type:"primary",link:"",icon:"UserFilled",onClick:s=>_("分配权限",e.row)},{default:a(()=>[v(" 分配权限 ")]),_:2},1032,["onClick"])]),_:2},1032,["value"]),l(k(R),{value:["btn.Role.update"]},{default:a(()=>[l(d,{type:"primary",link:"",icon:"Edit",onClick:s=>n("编辑",e.row)},{default:a(()=>[v(" 编辑 ")]),_:2},1032,["onClick"])]),_:2},1032,["value"]),l(k(R),{value:["btn.Role.remove"]},{default:a(()=>[l(d,{type:"primary",link:"",icon:"Delete",onClick:s=>g(e.row)},{default:a(()=>[v(" 删除 ")]),_:2},1032,["onClick"])]),_:2},1032,["value"])]),_:1},8,["requestApi"]),l(z,{ref_key:"DialogRef",ref:f},null,512),l(Q,{ref_key:"DrawerRef",ref:b},null,512)])}}});export{oe as default};
