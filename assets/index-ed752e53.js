import{L as M,J as ee,M as te,K as ne}from"./IconifyIcon-a624bcfa.js";import{h as $,r as z,ag as y,a3 as u,j as f,k as h,B as D,D as l,C as S,w as K,I as oe,v as g,x as _,z as B,A as Y,a as C,l as v,ah as W,ai as j,aK as U,X as q,F as I,aL as P,n as N,o as se,u as O,G as ae}from"./_plugin-vue_export-helper-33be20d1.js";import{W as ie,bE as re,bk as X,aj as ce,ak as le,bq as de,br as ue,bh as _e,bc as fe,a7 as pe,bj as me,bx as he,bp as H,by as ve,bF as ge}from"./index-b2e15df3.js";const we=$({setup(){return{fullYear:z(new Date().getFullYear())}}});const be={class:"layout-footer-container"};function $e(t,e,n,s,a,c){const o=u("svg-icon");return f(),h("div",be,[D(" Copyright "),l(o,{name:"copyright",size:"16px",color:"rgba(0, 0, 0, 0.45)"}),D(" "+S(t.fullYear)+" yuth ",1)])}const ye=y(we,[["render",$e],["__scopeId","data-v-d5da759e"]]),Ve=$({setup(){const t=M(),e=z(!0);return K(()=>t.refresh,()=>{e.value=!1,oe(()=>{e.value=!0})}),{isShow:e}}});const Ce={class:"app-mian-height"};function ke(t,e,n,s,a,c){const o=u("router-view");return f(),h("section",Ce,[t.isShow?(f(),g(o,{key:0},{default:_(({Component:i,route:d})=>[l(ie,{appear:"",name:"fade-transform",mode:"out-in"},{default:_(()=>[(f(),g(B(i),{key:d.path}))]),_:2},1024)]),_:1})):Y("",!0)])}const xe=y(Ve,[["render",ke],["__scopeId","data-v-2c5023dd"]]),Ae=$({setup(){const t=M();return{collapse:C(()=>t.collapse)}}}),Le=""+new URL("../tower.svg",import.meta.url).href;const Te=t=>(W("data-v-fb58eb78"),t=t(),j(),t),Se={class:"logo-container flex-center"},Be={href:"/"},Fe=Te(()=>v("img",{class:"logo",alt:"logo",src:Le},null,-1)),De={key:0,class:"title"};function Me(t,e,n,s,a,c){return f(),h("div",Se,[v("a",Be,[Fe,t.collapse?Y("",!0):(f(),h("h1",De,"灯塔管理"))])])}const Re=y(Ae,[["render",Me],["__scopeId","data-v-fb58eb78"]]),ze=$({name:"SubMenu",props:{menuList:{type:re.MenuOptions,default:()=>[]}},setup(){const t=U();function e(n){if(n.meta.isLink)return window.open(n.meta.isLink,"_blank");t.push(n.path)}return{handleClickMenu:e}}}),Ee={key:0},Ie={key:1},Ue={key:0},Pe={key:1},Oe={key:0},Ne={key:1};function Ye(t,e,n,s,a,c){const o=u("el-icon"),i=u("svg-icon"),d=u("sub-menu"),p=u("el-sub-menu"),m=u("el-menu-item");return f(!0),h(I,null,q(t.menuList,r=>(f(),h(I,{key:r.path},[r.children&&r.children.length>1?(f(),g(p,{key:0,index:r.path},{title:_(()=>[r.meta.icon?(f(),h("div",Ee,[l(o,null,{default:_(()=>[(f(),g(B(r.meta.icon)))]),_:2},1024)])):(f(),h("div",Ie,[l(i,{name:r.meta.customIcon},null,8,["name"])])),v("span",null,S(r.meta.title),1)]),default:_(()=>[l(d,{menuList:r.children},null,8,["menuList"])]),_:2},1032,["index"])):r.children&&r.children.length==1?(f(),g(m,{key:1,index:r.children[0].path,onClick:b=>t.handleClickMenu(r.children[0])},{title:_(()=>[v("span",null,S(r.children[0].meta.title),1)]),default:_(()=>[r.children[0].meta.icon?(f(),h("div",Ue,[l(o,null,{default:_(()=>[(f(),g(B(r.children[0].meta.icon)))]),_:2},1024)])):(f(),h("div",Pe,[l(i,{name:r.children[0].meta.customIcon},null,8,["name"])]))]),_:2},1032,["index","onClick"])):(f(),g(m,{key:2,index:r.path,onClick:b=>t.handleClickMenu(r)},{title:_(()=>[v("span",null,S(r.meta.title),1)]),default:_(()=>[r.meta.icon?(f(),h("div",Oe,[l(o,null,{default:_(()=>[(f(),g(B(r.meta.icon)))]),_:2},1024)])):(f(),h("div",Ne,[l(i,{name:r.meta.customIcon},null,8,["name"])]))]),_:2},1032,["index","onClick"]))],64))),128)}const We=y(ze,[["render",Ye]]),je=$({components:{Logo:Re,SubMenu:We},setup(){const t=M(),e=X(),n=P(),s=C(()=>t.collapse),a=C(()=>t.themeConfig),c=C(()=>e.authMenuList),o=C(()=>n.meta.activeMenu?n.meta.activeMenu:n.path);return{menuList:c,collapse:s,activeMenu:o,themeConfig:a}}});function qe(t,e,n,s,a,c){const o=u("Logo"),i=u("sub-menu"),d=u("el-menu"),p=u("el-scrollbar");return f(),h("div",{class:N(["layout-sidebar-container",{"is-collapse":t.collapse}])},[l(o),l(p,null,{default:_(()=>[l(d,{"background-color":"#001529","text-color":"hsla(0,0%,100%,.65)","active-text-color":"#fff",defaultActive:t.activeMenu,collapse:t.collapse,"unique-opened":!0},{default:_(()=>[l(i,{menuList:t.menuList},null,8,["menuList"])]),_:1},8,["defaultActive","collapse"])]),_:1})],2)}const Ge=y(je,[["render",qe],["__scopeId","data-v-4b3138a3"]]),He=$({components:{ArrowUp:ce,ArrowDown:le},setup(){const t=U(),e=P(),n=de(),{name:s,avatar:a}=n.userInfo||{},c=z(!1);function o(p){c.value=p}function i(p){p==="logout"&&d()}function d(){ee.confirm("您确定要退出吗？","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(async()=>{await n.Logout(),t.push({path:ue,query:{redirect:e.fullPath}}),_e.success("退出登录成功！")})}return{name:s,avatar:a,visible:c,onChange:o,handleCommand:i}}});const Je=t=>(W("data-v-40bdf1e3"),t=t(),j(),t),Ke={class:"avatar-dropdown"},Xe=["src"],Qe={class:"user-name"},Ze=Je(()=>v("span",null,"退出登录",-1));function et(t,e,n,s,a,c){const o=u("el-icon"),i=u("svg-icon"),d=u("el-dropdown-item"),p=u("el-dropdown-menu"),m=u("el-dropdown");return f(),g(m,{onVisibleChange:t.onChange,onCommand:t.handleCommand},{dropdown:_(()=>[l(p,null,{default:_(()=>[l(d,{command:"logout"},{default:_(()=>[l(i,{name:"logout",size:"16px"}),Ze]),_:1})]),_:1})]),default:_(()=>[v("div",Ke,[v("img",{class:"user-avatar",src:t.avatar,alt:""},null,8,Xe),v("div",Qe,S(t.name),1),l(o,{class:"up-down"},{default:_(()=>[(f(),g(B(t.visible?"ArrowUp":"ArrowDown")))]),_:1})])]),_:1},8,["onVisibleChange","onCommand"])}const tt=y(He,[["render",et],["__scopeId","data-v-40bdf1e3"]]),nt=$({setup(){const t=P(),e=U(),n=a=>{e.push({path:a.path})},s=C(()=>t.matched.filter(a=>a.meta&&a.meta.title&&a.meta.breadcrumb!==!1&&a.children.length!==1));return{handleLink:n,matched:s}}});const ot={key:0,class:"no-redirect"},st=["onClick"];function at(t,e,n,s,a,c){const o=u("el-icon"),i=u("el-breadcrumb-item"),d=u("el-breadcrumb");return f(),g(d,{class:"app-breadcrumb","separator-icon":"ArrowRight"},{default:_(()=>[l(fe,{name:"breadcrumb",mode:"out-in"},{default:_(()=>[(f(!0),h(I,null,q(t.matched,(p,m)=>(f(),g(i,{key:p.path},{default:_(()=>[l(o,{size:"14"},{default:_(()=>[(f(),g(B(p.meta.icon)))]),_:2},1024),p.redirect==="noRedirect"||m==t.matched.length-1?(f(),h("span",ot,S(p.meta.title),1)):(f(),h("a",{key:1,onClick:pe(r=>t.handleLink(p),["prevent"])},S(p.meta.title),9,st))]),_:2},1024))),128))]),_:1})]),_:1})}const it=y(nt,[["render",at],["__scopeId","data-v-b6efcfc5"]]),rt=$({components:{IconifyIcon:te},setup(){const t=M();return{onRefresh:()=>{t.setRefresh()}}}});const ct={class:"btn"};function lt(t,e,n,s,a,c){const o=u("IconifyIcon"),i=u("el-button"),d=u("el-tooltip");return f(),h("div",ct,[l(d,{content:"刷新"},{default:_(()=>[l(i,{circle:"",onClick:t.onRefresh},{default:_(()=>[l(o,{icon:"ri:refresh-line",height:"16"})]),_:1},8,["onClick"])]),_:1})])}const dt=y(rt,[["render",lt],["__scopeId","data-v-70502d94"]]),ut=$({setup(){const{toggle:t,isFullscreen:e}=me();return{toggle:t,isFullscreen:e}}});const _t={class:"m-screenful"};function ft(t,e,n,s,a,c){const o=u("IconifyIcon"),i=u("el-button"),d=u("el-tooltip");return f(),h("div",_t,[l(d,{effect:"dark",content:t.isFullscreen?"收起":"全屏",placement:"bottom"},{default:_(()=>[l(i,{circle:"",onClick:t.toggle},{default:_(()=>[t.isFullscreen?(f(),g(o,{key:1,icon:"fluent:full-screen-minimize-24-filled",height:"18"})):(f(),g(o,{key:0,icon:"fluent:full-screen-maximize-24-filled",height:"16"}))]),_:1},8,["onClick"])]),_:1},8,["content"])])}const pt=y(ut,[["render",ft],["__scopeId","data-v-c59a4b3c"]]);function mt(t){return{all:t=t||new Map,on:function(e,n){var s=t.get(e);s?s.push(n):t.set(e,[n])},off:function(e,n){var s=t.get(e);s&&(n?s.splice(s.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var s=t.get(e);s&&s.slice().map(function(a){a(n)}),(s=t.get("*"))&&s.slice().map(function(a){a(e,n)})}}}const ht=mt(),Q=ht,vt=$({setup(){return{onSetting:()=>{Q.emit("openThemeDrawer")}}}});const gt={class:"btn"};function wt(t,e,n,s,a,c){const o=u("IconifyIcon"),i=u("el-button"),d=u("el-tooltip");return f(),h("div",gt,[l(d,{effect:"dark",content:"系统设置"},{default:_(()=>[l(i,{circle:"",onClick:t.onSetting},{default:_(()=>[l(o,{icon:"ep:setting",height:"16"})]),_:1},8,["onClick"])]),_:1})])}const bt=y(vt,[["render",wt],["__scopeId","data-v-2f3e76ea"]]),$t=$({components:{Refresh:dt,User:tt,ScreenFull:pt,Breadcrumb:it,Settings:bt},setup(){const t=M(),e=C(()=>t.collapse);function n(){t.changeCollapse()}return{collapse:e,handleCollapse:n}}});const yt={class:"nav-bar-container"},Vt={class:"left-panel"},Ct={class:"right-panel"};function kt(t,e,n,s,a,c){const o=u("el-icon"),i=u("Breadcrumb"),d=u("el-col"),p=u("Refresh"),m=u("ScreenFull"),r=u("Settings"),b=u("User"),F=u("el-row");return f(),h("div",yt,[l(F,{gutter:15},{default:_(()=>[l(d,{sm:12,md:12,lg:12,xl:12},{default:_(()=>[v("div",Vt,[l(o,{class:"fold-unfold",onClick:t.handleCollapse},{default:_(()=>[(f(),g(B(t.collapse?"Expand":"Fold")))]),_:1},8,["onClick"]),l(i)])]),_:1}),l(d,{sm:12,md:12,lg:12,xl:12},{default:_(()=>[v("div",Ct,[l(p),l(m),l(r),l(b)])]),_:1})]),_:1})])}const xt=y($t,[["render",kt],["__scopeId","data-v-ecc4c53a"]]),At=he({id:"app-tabsBar",state:()=>({activeTabsValue:"/index",visitedViews:[],cachedViews:[]}),getters:{},actions:{setTabsMenuValue(t){this.activeTabsValue=t},addView(t){this.addVisitedView(t)},removeView(t){return new Promise(e=>{this.visitedViews=this.visitedViews.filter(n=>!t.includes(n.path)),e(null)})},addVisitedView(t){this.setTabsMenuValue(t.path),!(this.visitedViews.some(e=>e.path===t.path)||!t.meta)&&(this.visitedViews.push(Object.assign({},t,{title:t.meta.title||"no-name"})),t.meta.keepAlive&&t.name&&this.cachedViews.push(t.name))},delView(t){return new Promise(e=>{this.delVisitedView(t),this.delCachedView(t),e({visitedViews:[...this.visitedViews],cachedViews:[...this.cachedViews]})})},toLastView(t){const e=this.visitedViews.findIndex(s=>s.path===t),n=this.visitedViews[e+1]||this.visitedViews[e-1];n&&(H.push(n.path),this.addVisitedView(n))},delVisitedView(t){return new Promise(e=>{this.visitedViews=this.visitedViews.filter(n=>{if(n.meta)return n.path!==t||n.meta.affix}),this.cachedViews=this.cachedViews.filter(n=>n.path!==t||n.meta.affix),e([...this.visitedViews])})},delCachedView(t){return new Promise(e=>{const n=this.cachedViews.indexOf(t.name);n>-1&&this.cachedViews.splice(n,1),e([...this.cachedViews])})},clearVisitedView(){this.delAllViews()},delAllViews(){this.visitedViews=this.visitedViews.filter(t=>t.meta&&t.meta.affix),this.cachedViews=this.visitedViews.filter(t=>t.meta&&t.meta.affix)},delOtherViews(t){this.visitedViews=this.visitedViews.filter(e=>e.path===t||e.meta&&e.meta.affix),this.cachedViews=this.visitedViews.filter(e=>e.path===t||e.meta&&e.meta.affix)},goHome(){this.activeTabsValue="/index",H.push({path:"/index"})},updateVisitedView(t){for(let e of this.visitedViews)if(e.path===t.path){e=Object.assign(e,t);break}}}});function A(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function J(t,e){for(var n="",s=0,a=-1,c=0,o,i=0;i<=t.length;++i){if(i<t.length)o=t.charCodeAt(i);else{if(o===47)break;o=47}if(o===47){if(!(a===i-1||c===1))if(a!==i-1&&c===2){if(n.length<2||s!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){var d=n.lastIndexOf("/");if(d!==n.length-1){d===-1?(n="",s=0):(n=n.slice(0,d),s=n.length-1-n.lastIndexOf("/")),a=i,c=0;continue}}else if(n.length===2||n.length===1){n="",s=0,a=i,c=0;continue}}e&&(n.length>0?n+="/..":n="..",s=2)}else n.length>0?n+="/"+t.slice(a+1,i):n=t.slice(a+1,i),s=i-a-1;a=i,c=0}else o===46&&c!==-1?++c:c=-1}return n}function Lt(t,e){var n=e.dir||e.root,s=e.base||(e.name||"")+(e.ext||"");return n?n===e.root?n+s:n+t+s:s}var R={resolve:function(){for(var e="",n=!1,s,a=arguments.length-1;a>=-1&&!n;a--){var c;a>=0?c=arguments[a]:(s===void 0&&(s=process.cwd()),c=s),A(c),c.length!==0&&(e=c+"/"+e,n=c.charCodeAt(0)===47)}return e=J(e,!n),n?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(A(e),e.length===0)return".";var n=e.charCodeAt(0)===47,s=e.charCodeAt(e.length-1)===47;return e=J(e,!n),e.length===0&&!n&&(e="."),e.length>0&&s&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return A(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,n=0;n<arguments.length;++n){var s=arguments[n];A(s),s.length>0&&(e===void 0?e=s:e+="/"+s)}return e===void 0?".":R.normalize(e)},relative:function(e,n){if(A(e),A(n),e===n||(e=R.resolve(e),n=R.resolve(n),e===n))return"";for(var s=1;s<e.length&&e.charCodeAt(s)===47;++s);for(var a=e.length,c=a-s,o=1;o<n.length&&n.charCodeAt(o)===47;++o);for(var i=n.length,d=i-o,p=c<d?c:d,m=-1,r=0;r<=p;++r){if(r===p){if(d>p){if(n.charCodeAt(o+r)===47)return n.slice(o+r+1);if(r===0)return n.slice(o+r)}else c>p&&(e.charCodeAt(s+r)===47?m=r:r===0&&(m=0));break}var b=e.charCodeAt(s+r),F=n.charCodeAt(o+r);if(b!==F)break;b===47&&(m=r)}var L="";for(r=s+m+1;r<=a;++r)(r===a||e.charCodeAt(r)===47)&&(L.length===0?L+="..":L+="/..");return L.length>0?L+n.slice(o+m):(o+=m,n.charCodeAt(o)===47&&++o,n.slice(o))},_makeLong:function(e){return e},dirname:function(e){if(A(e),e.length===0)return".";for(var n=e.charCodeAt(0),s=n===47,a=-1,c=!0,o=e.length-1;o>=1;--o)if(n=e.charCodeAt(o),n===47){if(!c){a=o;break}}else c=!1;return a===-1?s?"/":".":s&&a===1?"//":e.slice(0,a)},basename:function(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');A(e);var s=0,a=-1,c=!0,o;if(n!==void 0&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var i=n.length-1,d=-1;for(o=e.length-1;o>=0;--o){var p=e.charCodeAt(o);if(p===47){if(!c){s=o+1;break}}else d===-1&&(c=!1,d=o+1),i>=0&&(p===n.charCodeAt(i)?--i===-1&&(a=o):(i=-1,a=d))}return s===a?a=d:a===-1&&(a=e.length),e.slice(s,a)}else{for(o=e.length-1;o>=0;--o)if(e.charCodeAt(o)===47){if(!c){s=o+1;break}}else a===-1&&(c=!1,a=o+1);return a===-1?"":e.slice(s,a)}},extname:function(e){A(e);for(var n=-1,s=0,a=-1,c=!0,o=0,i=e.length-1;i>=0;--i){var d=e.charCodeAt(i);if(d===47){if(!c){s=i+1;break}continue}a===-1&&(c=!1,a=i+1),d===46?n===-1?n=i:o!==1&&(o=1):n!==-1&&(o=-1)}return n===-1||a===-1||o===0||o===1&&n===a-1&&n===s+1?"":e.slice(n,a)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return Lt("/",e)},parse:function(e){A(e);var n={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return n;var s=e.charCodeAt(0),a=s===47,c;a?(n.root="/",c=1):c=0;for(var o=-1,i=0,d=-1,p=!0,m=e.length-1,r=0;m>=c;--m){if(s=e.charCodeAt(m),s===47){if(!p){i=m+1;break}continue}d===-1&&(p=!1,d=m+1),s===46?o===-1?o=m:r!==1&&(r=1):o!==-1&&(r=-1)}return o===-1||d===-1||r===0||r===1&&o===d-1&&o===i+1?d!==-1&&(i===0&&a?n.base=n.name=e.slice(1,d):n.base=n.name=e.slice(i,d)):(i===0&&a?(n.name=e.slice(1,o),n.base=e.slice(1,d)):(n.name=e.slice(i,o),n.base=e.slice(i,d)),n.ext=e.slice(o,d)),i>0?n.dir=e.slice(0,i-1):a&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};R.posix=R;var Tt=R;const St=$({setup(){const t=At(),e=X(),n=C(()=>e.authMenuList),s=C(()=>t.visitedViews),a=P(),c=U();let o=z([]);const i=()=>{const{name:w}=a;if(w!=="Login")return w&&t.addView(a),!1};function d(w,T="/"){let k=[];return w.forEach(x=>{if(x.meta&&x.meta.affix){const E=Tt.resolve(T,x.path);k.push({fullPath:E,path:E,name:x.name,meta:{...x.meta}})}if(x.children){const E=d(x.children,x.path);E.length>=1&&(k=[...k,...E])}}),k}const p=()=>{let w=n.value,T=o.value=d(w);for(const k of T)k.name&&t.addVisitedView(k)};se(()=>{p(),i()}),K(a,()=>{i()});const m=C({get:()=>t.activeTabsValue,set:w=>{t.setTabsMenuValue(w)}});function r(w){let T=s.value.findIndex(x=>x.path===w);const k=s.value[T+1]||s.value[T-1];k&&(c.push(k.path),t.addVisitedView(k))}const b=w=>{let T=w.props.name;c.push(T)},F=w=>w===a.path;return{activeTabsValue:m,tabClick:b,removeTab:async w=>{F(w)&&r(w),await t.delView(w)},visitedViews:s,closeCurrentTab:()=>{t.toLastView(a.path),t.delView(a.path)},closeOtherTab:()=>{t.delOtherViews(a.path)},closeAllTab:async()=>{t.delAllViews(),t.goHome()}}}});const Bt={class:"tabs-bar-container"},Ft={class:"tabs-content"},Dt={class:"tabs-action"};function Mt(t,e,n,s,a,c){const o=u("el-icon"),i=u("el-tab-pane"),d=u("el-tabs"),p=u("Menu"),m=u("FolderRemove"),r=u("el-dropdown-item"),b=u("Close"),F=u("FolderDelete"),L=u("el-dropdown-menu"),G=u("el-dropdown");return f(),h("div",Bt,[v("div",Ft,[l(d,{type:"card",modelValue:t.activeTabsValue,"onUpdate:modelValue":e[0]||(e[0]=V=>t.activeTabsValue=V),onTabClick:t.tabClick,onTabRemove:t.removeTab},{default:_(()=>[(f(!0),h(I,null,q(t.visitedViews,V=>(f(),g(i,{type:"card",key:V.path,path:V.path,label:V.title,name:V.path,closable:!(V.meta&&V.meta.affix)},{label:_(()=>[V.meta&&V.meta.icon?(f(),g(o,{key:0,size:"16",class:"tabs-icon"},{default:_(()=>[(f(),g(B(V.meta.icon)))]),_:2},1024)):Y("",!0),D(" "+S(V.title),1)]),_:2},1032,["path","label","name","closable"]))),128))]),_:1},8,["modelValue","onTabClick","onTabRemove"])]),v("div",Dt,[l(G,{trigger:"hover"},{dropdown:_(()=>[l(L,null,{default:_(()=>[l(r,{onClick:t.closeCurrentTab},{default:_(()=>[l(o,{size:14},{default:_(()=>[l(m)]),_:1}),D(" 关闭当前 ")]),_:1},8,["onClick"]),l(r,{onClick:t.closeOtherTab},{default:_(()=>[l(o,{size:14},{default:_(()=>[l(b)]),_:1}),D(" 关闭其他 ")]),_:1},8,["onClick"]),l(r,{onClick:t.closeAllTab},{default:_(()=>[l(o,{size:14},{default:_(()=>[l(F)]),_:1}),D(" 关闭所有 ")]),_:1},8,["onClick"])]),_:1})]),default:_(()=>[l(o,{color:"rgba(0, 0, 0, 0.65)",size:20},{default:_(()=>[l(p)]),_:1})]),_:1})])])}const Rt=y(St,[["render",Mt],["__scopeId","data-v-2d8547a0"]]),Z=t=>(W("data-v-ea3373c3"),t=t(),j(),t),zt={class:"theme-item"},Et=Z(()=>v("span",null,"主题颜色",-1)),It={class:"theme-item"},Ut=Z(()=>v("span",null,"暗黑模式",-1)),Pt=$({__name:"index",setup(t){const{changePrimary:e}=ne(),n=[ve,"#DAA96E","#0C819F","#722ed1","#27ae60","#ff5c93","#e74c3c","#fd726d","#f39c12","#9b59b6"],s=M(),a=C(()=>s.themeConfig),c=z(!1);return Q.on("openThemeDrawer",()=>{c.value=!0}),(o,i)=>{const d=u("el-divider"),p=u("el-color-picker"),m=u("SwitchDark"),r=u("el-drawer");return f(),g(r,{title:"主题设置",modelValue:c.value,"onUpdate:modelValue":i[1]||(i[1]=b=>c.value=b),size:"300px"},{default:_(()=>[l(d,{class:"divider","content-position":"center"},{default:_(()=>[D("全局主题")]),_:1}),v("div",zt,[Et,l(p,{modelValue:O(a).primary,"onUpdate:modelValue":i[0]||(i[0]=b=>O(a).primary=b),predefine:n,onChange:O(e)},null,8,["modelValue","onChange"])]),v("div",It,[Ut,l(m)])]),_:1},8,["modelValue"])}}});const Ot=y(Pt,[["__scopeId","data-v-ea3373c3"]]),Nt=$({components:{LayoutFooter:ye,LayoutMain:xe,LayoutSideBar:Ge,LayoutNavBar:xt,LayoutTabsBar:Rt,ThemeDrawer:Ot},setup(){const t=M(),e=C(()=>t.collapse),n=z(0),s=ge(()=>{n.value=document.body.clientWidth,!e.value&&n.value<1200&&t.changeCollapse(),e.value&&n.value>1200&&t.changeCollapse()},100);return window.addEventListener("resize",s,!1),ae(()=>{window.removeEventListener("resize",s)}),{collapse:e}}});const Yt={class:"layout-admin-wrapper"},Wt={class:"layout-container-vertical fixed"},jt={class:"app-main-container"};function qt(t,e,n,s,a,c){const o=u("LayoutSideBar"),i=u("LayoutNavBar"),d=u("LayoutTabsBar"),p=u("LayoutMain"),m=u("LayoutFooter"),r=u("ThemeDrawer");return f(),h("div",Yt,[v("div",Wt,[l(o),v("div",{class:N(["layout-main",{"is-collapse":t.collapse}])},[v("div",{class:N(["layout-header fixed-header",{"is-collapse":t.collapse}])},[l(i),l(d)],2),v("div",jt,[l(p),l(m)])],2)]),l(r)])}const Xt=y(Nt,[["render",qt],["__scopeId","data-v-40762e6d"]]);export{Xt as default};
