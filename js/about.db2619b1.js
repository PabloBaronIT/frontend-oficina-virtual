"use strict";(self["webpackChunkoficina_vue"]=self["webpackChunkoficina_vue"]||[]).push([[443],{1986:function(e,a,t){var o=t(70);const l=o.ZP.create({baseURL:"https://oficina-virtual-pablo-baron.up.railway.app/",withCredentials:!1,headers:{"auth-header":localStorage.getItem("token")}}),s=o.ZP.create({baseURL:"https://oficina-virtual-pablo-baron.up.railway.app/",withCredentials:!1,headers:{"auth-header":localStorage.getItem("token")}});a["Z"]={postCreateUser(e){return l.post("/auth/signUp",{firstname:e.name,lastname:e.lastname,password:e.password,email:e.email,cuil:e.cuil,adress:e.adress})},postLoginUser(e){return l.post("/auth/signin",{cuil:e.cuil,password:e.password})},postLoginMunicipal(e){return l.post("/auth/signinMunicipales",{cuil:e.cuil,password:e.password})},getAllCategories(){return s.get("/oficina/categories/categories")},getCategorieById(e){return l.get("/oficina/categories/categories/"+e)},getQuestions(e){return l.get("/oficina/categories/getQuestions/"+e)},getTramites(e){return l.get("/oficina/categories/category/procedure/"+e)},getHistorialTramites(){return l.get("/oficina/procedures/history")},getMunicipal(e){return l.get("/municipales/munis/"+e)},getUser(e){return l.get("/oficina/users/"+e)},postProcedure(e){return l.post("/oficina/procedures/submit-procedure",{userId:e.userId,categoryId:e.categoryId,statusId:e.statusId,questions:e.questions})}}},82:function(e,a,t){t.r(a),t.d(a,{default:function(){return q}});var o=t(3396);const l={class:"form-container"};function s(e,a,t,s,r,n){const i=(0,o.up)("LoginComponent"),c=(0,o.up)("LoginMunicipal");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",null,[(0,o.Wm)(i),(0,o.Wm)(c)])])}var r=t(9242),n=t(7139);const i=e=>((0,o.dD)("data-v-464f8fba"),e=e(),(0,o.Cn)(),e),c={class:"login-container"},u=i((()=>(0,o._)("img",{class:"w-50",src:"https://github.com/PabloBaronIT/frontend-oficina-virtual/blob/main/src/assets/muni-en-linea-logo.png?raw=true",alt:""},null,-1))),d={class:"loading-container text-grey"},g={key:0,class:"spinner-border loading",role:"status"},m=i((()=>(0,o._)("span",{class:"sr-only"},null,-1))),p=[m],h={class:"error"};function w(e,a,t,l,s,i){const m=(0,o.up)("FormKit");return(0,o.wg)(),(0,o.iD)("div",c,[(0,o._)("form",null,[u,(0,o.Wm)(m,{type:"form",id:"registration-example",actions:!1,"incomplete-message":"Aun no has completado todos los campos."},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{modelValue:s.cuil,"onUpdate:modelValue":a[0]||(a[0]=e=>s.cuil=e),type:"number",name:"cuil",label:"CUIL",placeholder:"cuil",validation:"required|length:11,11|number","validation-messages":{required:"Ingresa el CUIL sin simbolos ni espacios",number:"Ingresar solo nùmeros",length:"El CUIL debe tener 11 caracteres"}},null,8,["modelValue"]),(0,o.Wm)(m,{modelValue:s.password,"onUpdate:modelValue":a[1]||(a[1]=e=>s.password=e),type:"password",name:"password",label:"Clave",placeholder:"clave",onKeyup:(0,r.D2)(i.log,["enter"])},null,8,["modelValue","onKeyup"]),(0,o._)("input",{class:"btn log-btn",type:"button",value:"Ingresar",onClick:a[2]||(a[2]=(...e)=>i.log&&i.log(...e))})])),_:1}),(0,o._)("div",d,[this.loading?((0,o.wg)(),(0,o.iD)("div",g,p)):(0,o.kq)("",!0)]),(0,o._)("p",h,(0,n.zw)(this.msj),1)])])}t(7658);var v=t(65),I=t(1986),f={name:"LoginComponent",data(){return{cuil:null,password:"",validacion:null,msj:"",loading:!1}},created(){localStorage.clear()},beforeRouteLeave(e,a,t){localStorage.clear(),t()},beforeRouteEnter(e,a,t){localStorage.clear(),t()},methods:{...(0,v.nv)(["mockLogin"]),log(){this.loading=!0,I.Z.postLoginUser({password:this.password,cuil:this.cuil}).then((e=>{localStorage.removeItem("token"),this.validacion=!0,this.mockLogin(),localStorage.clear(),localStorage.setItem("name",e.data.firstname),localStorage.setItem("lastname",e.data.lastname),localStorage.setItem("cuil",e.data.cuil),localStorage.setItem("adress",e.data.adress),localStorage.setItem("email",e.data.email),localStorage.setItem("id",e.data.id),localStorage.setItem("fecha-creacion",e.data.created_at),console.log(e.data),localStorage.setItem("token",e.data.token),localStorage.setItem("role",e.data.role),this.$router.push("munienlinea")})).catch((e=>{console.log(e),this.validacion=!1,this.msj="Usuario incorrecto",this.loading=!1,console.log(this.msj)})).finally((()=>{this.loading=!1}))}}},b=t(89);const S=(0,b.Z)(f,[["render",w],["__scopeId","data-v-464f8fba"]]);var k=S;const y=e=>((0,o.dD)("data-v-7b45dc48"),e=e(),(0,o.Cn)(),e),C={class:"login-container"},_={action:""},L=y((()=>(0,o._)("h1",null,"Login Municipal",-1))),U={style:{color:"red"}};function V(e,a,t,l,s,r){const i=(0,o.up)("FormKit");return(0,o.wg)(),(0,o.iD)("div",C,[(0,o._)("form",_,[L,(0,o.Wm)(i,{type:"text",name:"Cuil",id:"Cuil",label:"Cuil",help:"Your full name",placeholder:"“Jon Doe”",modelValue:this.cuil,"onUpdate:modelValue":a[0]||(a[0]=e=>this.cuil=e)},null,8,["modelValue"]),(0,o.Wm)(i,{type:"password",name:"password",id:"password",label:"Password",help:"Your password",placeholder:"********",modelValue:this.password,"onUpdate:modelValue":a[1]||(a[1]=e=>this.password=e)},null,8,["modelValue"]),(0,o._)("p",U,(0,n.zw)(this.msj),1),(0,o._)("input",{onClick:a[2]||(a[2]=e=>r.login()),class:"btn btn-primary",type:"button",value:"Ingresar"})])])}var D={data(){return{cuil:null,password:"",msj:""}},methods:{...(0,v.nv)(["mockLogin"]),login(){let e={cuil:this.cuil,password:this.password};I.Z.postLoginMunicipal(e).then((e=>{200==e.status&&(localStorage.removeItem("token"),this.validacion=!0,this.mockLogin(),localStorage.clear(),localStorage.setItem("name",e.data.firstname),localStorage.setItem("lastname",e.data.lastname),localStorage.setItem("cuil",e.data.cuil),localStorage.setItem("adress",e.data.adress),localStorage.setItem("email",e.data.email),localStorage.setItem("id",e.data.id),localStorage.setItem("fecha-creacion",e.data.created_at),localStorage.setItem("role",e.data.role),localStorage.setItem("token",e.data.token),this.$router.push("muni"))})).catch((e=>{console.log(e),this.msj="Usuario incorrecto"}))}}};const Z=(0,b.Z)(D,[["render",V],["__scopeId","data-v-7b45dc48"]]);var j=Z,M={name:"LoginView",components:{LoginComponent:k,LoginMunicipal:j},created(){localStorage.clear(),window.dispatchEvent(new CustomEvent("token-localstorage-changed",{detail:{storage:localStorage.getItem("token")}}))}};const W=(0,b.Z)(M,[["render",s],["__scopeId","data-v-e7c5e956"]]);var q=W}}]);
//# sourceMappingURL=about.db2619b1.js.map