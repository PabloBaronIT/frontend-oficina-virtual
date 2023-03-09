"use strict";(self["webpackChunkoficina_vue"]=self["webpackChunkoficina_vue"]||[]).push([[438],{1986:function(e,a,t){var r=t(70);const n=r.ZP.create({baseURL:"https://oficina-virtual-pablo-baron.up.railway.app/",withCredentials:!1,headers:{"auth-header":localStorage.getItem("token")}}),s=r.ZP.create({baseURL:"https://oficina-virtual-pablo-baron.up.railway.app/",withCredentials:!1,headers:{"auth-header":localStorage.getItem("token")}});a["Z"]={postCreateUser(e){return n.post("/auth/signUp",{firstname:e.name,lastname:e.lastname,password:e.password,email:e.email,cuil:e.cuil,adress:e.adress})},postLoginUser(e){return n.post("/auth/signin",{cuil:e.cuil,password:e.password})},postLoginMunicipal(e){return n.post("/auth/signinMunicipales",{cuil:e.cuil,password:e.password})},getAllCategories(){return s.get("/oficina/categories/categories")},getCategorieById(e){return n.get("/oficina/categories/categories/"+e)},getQuestions(e){return n.get("/oficina/categories/getQuestions/"+e)},getTramites(e){return n.get("/oficina/categories/category/procedure/"+e)},getHistorialTramites(){return n.get("/oficina/procedures/history")},getMunicipal(e){return n.get("/municipales/munis/"+e)},getUser(e){return n.get("/oficina/users/"+e)},postProcedure(e){return n.post("/oficina/procedures/submit-procedure",{userId:e.userId,categoryId:e.categoryId,statusId:e.statusId,questions:e.questions})}}},3120:function(e,a,t){t.r(a),t.d(a,{default:function(){return D}});var r=t(3396);const n={class:"cuenta-container"};function s(e,a,t,s,i,o){const c=(0,r.up)("Header"),l=(0,r.up)("Datos");return(0,r.wg)(),(0,r.iD)("div",n,[(0,r.Wm)(c),(0,r.Wm)(l)])}var i=t(7139);const o=e=>((0,r.dD)("data-v-493cf4cf"),e=e(),(0,r.Cn)(),e),c={class:"header-container"},l=o((()=>(0,r._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"86",height:"86",fill:"currentColor",class:"bi bi-person-circle",viewBox:"0 0 16 16"},[(0,r._)("path",{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}),(0,r._)("path",{"fill-rule":"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"})],-1)));function u(e,a,t,n,s,o){return(0,r.wg)(),(0,r.iD)("div",c,[l,(0,r._)("h1",null,(0,i.zw)(s.name)+" "+(0,i.zw)(s.lastname),1)])}var d={name:"HeaderComponent",data(){return{name:localStorage.getItem("name"),lastname:localStorage.getItem("lastname")}}},g=t(89);const p=(0,g.Z)(d,[["render",u],["__scopeId","data-v-493cf4cf"]]);var m=p,h=t.p+"img/edit.f0568287.svg";const f=e=>((0,r.dD)("data-v-3bc354b8"),e=e(),(0,r.Cn)(),e),w={class:"datos-container"},_=f((()=>(0,r._)("div",{class:"edit"},[(0,r._)("p",null,"Contraseña: *********"),(0,r._)("img",{src:h,alt:"edit"})],-1)));function v(e,a,t,n,s,o){return(0,r.wg)(),(0,r.iD)("div",w,[(0,r._)("p",null,[(0,r.Uk)(" Nombre completo: "),(0,r._)("b",null,(0,i.zw)(this.name)+" "+(0,i.zw)(this.lastname),1)]),(0,r._)("p",null,[(0,r.Uk)(" CUIL: "),(0,r._)("b",null,(0,i.zw)(this.cuil),1)]),_,(0,r._)("p",null,[(0,r.Uk)(" Email: "),(0,r._)("b",null,(0,i.zw)(this.email),1)]),(0,r._)("p",null,[(0,r.Uk)(" Dirección: "),(0,r._)("b",null,(0,i.zw)(this.adress),1)]),(0,r._)("p",null,[(0,r.Uk)(" Cuenta creada el "),(0,r._)("b",null,(0,i.zw)(o.fecha),1)])])}var b=t(1986),I={name:"DatosCompnent",data(){return{name:"",lastname:localStorage.getItem("lastname"),cuil:localStorage.getItem("cuil"),email:localStorage.getItem("email"),adress:localStorage.getItem("adress"),fecha_creacion:localStorage.getItem("fecha-creacion")}},created(){b.Z.getMunicipal(1).then((e=>{console.log(e.data);let a=e.data;this.name=a.firstname,this.lastname=a.lastname,this.cuil=a.cuil,this.email=a.email,this.fecha_creacion=a.created_at})).catch((e=>{console.log(e.response.data)}))},computed:{fecha(){let e=this.fecha_creacion,a=new Date(e);const t=a.getDate(),r=a.getMonth()+1,n=a.getFullYear();return`${t}/${r}/${n}`}}};const C=(0,g.Z)(I,[["render",v],["__scopeId","data-v-3bc354b8"]]);var U=C,k={name:"CuentaView",components:{Header:m,Datos:U}};const z=(0,g.Z)(k,[["render",s],["__scopeId","data-v-630bd6e4"]]);var D=z}}]);
//# sourceMappingURL=438.2bd032f9.js.map