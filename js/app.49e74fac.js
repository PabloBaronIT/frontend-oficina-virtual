(function(){"use strict";var e={8844:function(e,t,n){var o=n(9242),a=n(3396);const r={class:"main-container"},i=(0,a.uE)('<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" data-v-bddd21f2><div class="modal-dialog modal-dialog-centered" data-v-bddd21f2><div class="modal-content" data-v-bddd21f2><div class="modal-header" data-v-bddd21f2><h1 class="modal-title fs-5" id="staticBackdropLabel" data-v-bddd21f2> Modal title </h1><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" data-v-bddd21f2></button></div><div class="modal-body" data-v-bddd21f2>...</div><div class="modal-footer" data-v-bddd21f2><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-v-bddd21f2> Close </button><button type="button" class="btn btn-primary" data-v-bddd21f2>Understood</button></div></div></div></div>',1);function l(e,t,n,o,l,u){const s=(0,a.up)("NavComponent"),c=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",r,[""!=this.role&&void 0!=this.role&&"MUNI_ROLE"!=this.role?((0,a.wg)(),(0,a.j4)(s,{key:0})):(0,a.kq)("",!0),i,(0,a.Wm)(c)])}var u=n(7139),s=n(2157);const c=e=>((0,a.dD)("data-v-7273434a"),e=e(),(0,a.Cn)(),e),d={class:"nav-container"},f=c((()=>(0,a._)("img",{class:"logo scale-up-center",src:"https://github.com/PabloBaronIT/frontend-oficina-virtual/blob/main/src/assets/muni-en-linea-logo.png?raw=true",alt:""},null,-1))),m={class:"usuario"},p=c((()=>(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"86",height:"86",fill:"currentColor",class:"bi bi-person-circle scale-up-center",viewBox:"0 0 16 16"},[(0,a._)("path",{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}),(0,a._)("path",{"fill-rule":"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"})],-1))),b={class:"usuario-details"},h={class:"datos"},g=c((()=>(0,a._)("img",{class:"svg",src:s,alt:"comunicaciones"},null,-1))),v=c((()=>(0,a._)("br",null,null,-1))),y=c((()=>(0,a._)("br",null,null,-1))),w={key:0,id:"sidebarMenu",class:"btn-container scale-up-center"},k={key:1,id:"sidebarMenu",class:"btn-container"};function _(e,t,n,r,i,l){const s=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",d,[(0,a.Wm)(s,{to:"/munienlinea"},{default:(0,a.w5)((()=>[f])),_:1}),(0,a._)("div",m,[p,(0,a._)("div",b,[(0,a._)("div",h,[(0,a.wy)((0,a.Wm)(s,{to:"/micuenta"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Mi cuenta ")])),_:1},512),[[o.F8,i.permission]]),g]),(0,a._)("strong",null,[(0,a.Uk)((0,u.zw)(this.usuario)+",",1),v,(0,a.Uk)(" "+(0,u.zw)(this.apellido),1),y]),(0,a._)("p",null,"CUIL: "+(0,u.zw)(this.dni),1)])]),"MUNI_ROLE"!==this.role?((0,a.wg)(),(0,a.iD)("nav",w,[(0,a.wy)((0,a.Wm)(s,{to:"/munienlinea",class:"bn3"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Inicio ")])),_:1},512),[[o.F8,i.permission]]),(0,a.wy)((0,a.Wm)(s,{to:"/tramites",class:"bn3"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Mis tramites ")])),_:1},512),[[o.F8,i.permission]]),(0,a._)("input",{onClick:t[0]||(t[0]=(...e)=>l.logOf&&l.logOf(...e)),class:"bn3",type:"button",value:"Cerrar Sesion"})])):(0,a.kq)("",!0),"MUNI_ROLE"==this.role?((0,a.wg)(),(0,a.iD)("nav",k,[(0,a.wy)((0,a.Wm)(s,{to:"/muni",class:"bn3"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Back ")])),_:1},512),[[o.F8,i.permission]]),(0,a._)("input",{onClick:t[1]||(t[1]=(...e)=>l.logOf&&l.logOf(...e)),class:"bn3",type:"button",value:"Cerrar Sesion"})])):(0,a.kq)("",!0)])}n(7658);var O={name:"NavComponent",data(){return{ruta:this.$router.currentRoute.value.fullPath,usuario:localStorage.getItem("name"),apellido:localStorage.getItem("lastname"),dni:localStorage.getItem("cuil"),permission:!0,user_id:localStorage.getItem("id"),role:localStorage.getItem("role")}},created(){this.role=localStorage.getItem("role")},watch:{},methods:{logOf(){localStorage.clear(),location.reload(),this.$router.push("login"),window.dispatchEvent(new CustomEvent("token-localstorage-changed",{detail:{storage:localStorage.getItem("token")}}))}}},I=n(89);const C=(0,I.Z)(O,[["render",_],["__scopeId","data-v-7273434a"]]);var P=C,S={data(){return{role:""}},created(){window.addEventListener("token-localstorage-changed",(e=>{this.role=e.detail.storage}))},watch:{$route(){this.role=localStorage.getItem("role")}},components:{NavComponent:P}};const A=(0,I.Z)(S,[["render",l],["__scopeId","data-v-bddd21f2"]]);var E=A,j=n(1120),q=n(65),M=(0,q.MT)({state:{loggedIn:!1,name:"joa",lastname:"",cuil:11,token:localStorage.getItem("token"),procedure:[]},getters:{},mutations:{loggedIn(e,t,n){e.loggedIn=!0,console.log("Estado de ingreso: ",e.loggedIn),e.name=t,e.lastname=n},saveProcedure(e,t){console.log("Vuex: "+t),console.log(t);let n=JSON.parse(t);console.log(n),e.procedure.push(n)},cleanStore(e,t){e.procedure=[],console.log(t)}},actions:{mockLogin(e){e.commit("loggedIn")},saveP(e){e.commit("saveProcedure")}},modules:{}}),N=(n(2166),n(9770)),L=n.n(N),T=n(4810),x=n(1119);L().vfs=T.I.vfs,(0,o.ri)(E).use(x.BA,x.u_).use(M).use(j.Z).mount("#app")},1120:function(e,t,n){var o=n(2483);const a=[{path:"/",redirect:"/login",component:()=>Promise.all([n.e(70),n.e(443)]).then(n.bind(n,82))},{path:"/login",name:"login",component:()=>Promise.all([n.e(70),n.e(443)]).then(n.bind(n,82))},{path:"/munienlinea",name:"munienlinea",component:()=>Promise.all([n.e(70),n.e(149)]).then(n.bind(n,2572)),meta:{requiresAuth:!0}},{path:"/sector/:sectorTitle/:sectorId",name:"sector",component:()=>Promise.all([n.e(70),n.e(328)]).then(n.bind(n,3143)),meta:{requiresAuth:!0}},{path:"/tramites",name:"tramites",component:()=>Promise.all([n.e(70),n.e(905)]).then(n.bind(n,8138)),meta:{requiresAuth:!0}},{path:"/notificaciones",name:"notificaciones",component:()=>Promise.all([n.e(70),n.e(933)]).then(n.bind(n,7933)),meta:{requiresAuth:!0}},{path:"/prueba",name:"prueba",component:()=>n.e(286).then(n.bind(n,5948)),meta:{requiresAuth:!0}},{path:"/muni",name:"muni",component:()=>Promise.all([n.e(70),n.e(553)]).then(n.bind(n,1887)),meta:{requiresAuth:!0}},{path:"/formulario/:categoriaId/:formularioTitle/:formularioId",name:"formulario",component:()=>Promise.all([n.e(70),n.e(105)]).then(n.bind(n,4105)),meta:{requiresAuth:!0}},{path:"/micuenta",name:"micuenta",component:()=>Promise.all([n.e(70),n.e(438)]).then(n.bind(n,3120)),meta:{requiresAuth:!0}},{path:"/comunicaciones",name:"comunicaciones",component:()=>n.e(161).then(n.bind(n,9161)),meta:{requiresAuth:!0}},{path:"/auth/reset-password/:token",name:"reset-password",component:()=>Promise.all([n.e(70),n.e(813)]).then(n.bind(n,4813)),meta:{requiresAuth:!1}}],r=(0,o.p7)({history:(0,o.r5)(),routes:a});r.beforeEach(((e,t,n)=>{let o=localStorage.getItem("token");e.matched.some((e=>e.meta.requiresAuth))?null!=o?n():n("/login"):n()})),t["Z"]=r},2157:function(e,t,n){e.exports=n.p+"img/comunicacion.69606830.svg"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],r=e[c][2];for(var l=!0,u=0;u<o.length;u++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(l=!1,r<i&&(i=r));if(l){e.splice(c--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,a){if(1&a&&(o=this(o)),8&a)return o;if("object"===typeof o&&o){if(4&a&&o.__esModule)return o;if(16&a&&"function"===typeof o.then)return o}var r=Object.create(null);n.r(r);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&o;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((function(e){i[e]=function(){return o[e]}}));return i["default"]=function(){return o},n.d(r,i),r}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(443===e?"about":e)+"."+{70:"ac6df568",105:"fd5ccca4",128:"a9f80684",149:"a70fff51",161:"5794d479",269:"5dd55271",286:"5521b4d1",328:"626c6dee",438:"2bd032f9",443:"db2619b1",553:"d7024015",617:"7afa8228",813:"20e1d41d",905:"7b115ea0",933:"a4dc5e16"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+(443===e?"about":e)+"."+{105:"5b629f0e",149:"de5a84c6",286:"55d798be",328:"5af3d011",438:"ee475268",443:"c26b96d8",553:"9e228473",813:"d1298196",905:"76f35bfe",933:"b5c1b79b"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="oficina-vue:";n.l=function(o,a,r,i){if(e[o])e[o].push(a);else{var l,u;if(void 0!==r)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){l=d;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+r),l.src=o),e[o]=[a];var f=function(t,n){l.onerror=l.onload=null,clearTimeout(m);var a=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),u&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/frontend-oficina-virtual/"}(),function(){var e=function(e,t,n,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var r=function(r){if(a.onerror=a.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=l,a.parentNode.removeChild(a),o(u)}};return a.onerror=a.onload=r,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],r=a.getAttribute("data-href");if(r===e||r===t)return a}},o=function(o){return new Promise((function(a,r){var i=n.miniCssF(o),l=n.p+i;if(t(i,l))return a();e(o,l,a,r)}))},a={143:0};n.f.miniCss=function(e,t){var n={105:1,149:1,286:1,328:1,438:1,443:1,553:1,813:1,905:1,933:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=r);var i=n.p+n.u(t),l=new Error,u=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,a[1](l)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],l=o[1],u=o[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(u)var c=u(n)}for(t&&t(o);s<i.length;s++)r=i[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunkoficina_vue"]=self["webpackChunkoficina_vue"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8844)}));o=n.O(o)})();
//# sourceMappingURL=app.49e74fac.js.map