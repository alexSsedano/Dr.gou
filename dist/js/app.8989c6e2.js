(function(e){function t(t){for(var a,r,o=t[0],l=t[1],c=t[2],d=0,u=[];d<o.length;d++)r=o[d],i[r]&&u.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);m&&m(t);while(u.length)u.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,r=1;r<s.length;r++){var o=s[r];0!==i[o]&&(a=!1)}a&&(n.splice(t--,1),e=l(l.s=s[0]))}return e}var a={},r={app:0},i={app:0},n=[];function o(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-76ea5a88":"7e60a6f0"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.e=function(e){var t=[],s={"chunk-76ea5a88":1};r[e]?t.push(r[e]):0!==r[e]&&s[e]&&t.push(r[e]=new Promise(function(t,s){for(var a="css/"+({}[e]||e)+"."+{"chunk-76ea5a88":"c9f68f8a"}[e]+".css",i=l.p+a,n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var c=n[o],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===a||d===i))return t()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){c=u[o],d=c.getAttribute("data-href");if(d===a||d===i)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||i,n=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=a,delete r[e],m.parentNode.removeChild(m),s(n)},m.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(m)}).then(function(){r[e]=0}));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise(function(t,s){a=i[e]=[t,s]});t.push(a[2]=n);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=o(e),c=function(t){d.onerror=d.onload=null,clearTimeout(u);var s=i[e];if(0!==s){if(s){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,n=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");n.type=a,n.request=r,s[1](n)}i[e]=void 0}};var u=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,s){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(s,a,function(t){return e[t]}.bind(null,a));return s},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var m=d;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),r=s("8aa5"),i=s.n(r),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[],l={components:{}},c=l,d=s("2877"),u=Object(d["a"])(c,n,o,!1,null,null,null),m=u.exports,p=s("8c4f"),g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("Header"),s("HomeBody"),s("Footer"),s("notifications",{attrs:{group:"foo"}}),s("router-view")],1)},v=[],f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[s("a",{staticClass:"navbar-brand",attrs:{href:"home"}},[e._v("Dr.gou")]),s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})]),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor01"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item active"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[e._v("Inicio")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"foro"}},[e._v("Foro")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[e._v("Eventos")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[e._v("Chats")])])])])])}],y={name:"header",methods:{}},C=y,b=Object(d["a"])(C,f,h,!1,null,null,null),x=b.exports,w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"homebody  ",staticStyle:{"background-color":"white"}},[s("div",{staticClass:"img-fluid  d-block d-sm-none extrasmall",staticStyle:{height:"150px"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-sm-4 align-self-center",staticStyle:{"margin-top":"10%","border-radius":"10px"}}),s("div",{staticClass:"col-sm-4 align-self-center"},[s("h2",{staticClass:"text-center rounded  "},[s("strong",[s("span",{staticClass:"text-primary "},[e._v("DR")]),e._v(".GOU")])])]),s("div",{staticClass:"col-sm-4 align-self-center"})])])]),s("div",{staticClass:"img-fluid  d-none d-sm-block d-md-none small ",staticStyle:{height:"200px"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-sm-4 align-self-center",staticStyle:{"margin-top":"35%","border-radius":"10px"}}),s("div",{staticClass:"col-sm-4 align-self-center"},[s("h2",{staticClass:"text-center rounded  "},[s("strong",[s("span",{staticClass:"text-primary "},[e._v("DR")]),e._v(".GOU")])])]),s("div",{staticClass:"col-sm-4 align-self-center"})])])]),s("div",{staticClass:"img-fluid  d-none d-md-block d-lg-none medium ",staticStyle:{height:"250px"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-sm-4 align-self-center",staticStyle:{"margin-top":"30%","border-radius":"10px"}}),s("div",{staticClass:"col-sm-4 align-self-center"},[s("h2",{staticClass:"text-center rounded  "},[s("strong",[s("span",{staticClass:"text-primary "},[e._v("DR")]),e._v(".GOU")])])]),s("div",{staticClass:"col-sm-4 align-self-center"})])])]),s("div",{staticClass:"img-fluid  d-none d-lg-block d-xl-none large ",staticStyle:{height:"250px"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-sm-4 align-self-center",staticStyle:{"margin-top":"30%","border-radius":"10px"}}),s("div",{staticClass:"col-sm-4 align-self-center"},[s("h2",{staticClass:"text-center rounded  "},[s("strong",[s("span",{staticClass:"text-primary "},[e._v("DR")]),e._v(".GOU")])])]),s("div",{staticClass:"col-sm-4 align-self-center"})])])]),s("div",{staticClass:"img-fluid  d-none d-xl-block extralarge ",staticStyle:{height:"250px"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-sm-4 align-self-center",staticStyle:{"margin-top":"20%","border-radius":"10px"}}),s("div",{staticClass:"col-sm-4 align-self-center"},[s("h2",{staticClass:"text-center rounded  "},[s("strong",[s("span",{staticClass:"text-primary "},[e._v("DR")]),e._v(".GOU")])])]),s("div",{staticClass:"col-sm-4 align-self-center"})])])]),s("div",[s("div",{staticClass:"row ",staticStyle:{"margin-top":"100px"}},[s("div",{staticClass:"  col-sm-4 "},[s("h2",{staticClass:"text-center",staticStyle:{margin:"10px"}},[s("strong",[e._v("¿ Cómo surge DR.GOU ?")])]),s("p",{staticClass:"text-center",staticStyle:{margin:"10px"}},[e._v("La idea de crear este grupo surge como respuesta a las diversas necesidades y demandas que el alumnado plantea a lo largo de los diferentes cursos académicos y de las distintas promociones que van pasando por la Universidad. Estas necesidades y demandas están presentes de forma general en este alumnado, tanto al comenzar su andadura universitaria como al finalizarla, y hacen que sea más complicado su proceso de adaptación a la Universidad.")])]),s("div",{staticClass:"  col-sm-4 "},[s("h2",{staticClass:"text-center",staticStyle:{margin:"10px"}},[s("strong",[e._v("¿ Que es DR.GOU ?")])]),s("p",{staticClass:"text-center",staticStyle:{margin:"10px"}},[e._v("El GOU es un Grupo de Orientación Universitaria formado por un equipo de profesores/as, voluntarios/as y alumnos/as de diversas Facultades de la Universidad Málaga, que trabajan con el objetivo de ejercer una labor informativa y formativa en su alumnado durante todo el período académico.")])]),s("div",{staticClass:"  col-sm-4 "},[s("h2",{staticClass:"text-center",staticStyle:{margin:"10px"}},[s("strong",[e._v("¿ A quien atiende DR.GOU ?")])]),s("p",{staticClass:"text-center",staticStyle:{margin:"10px"}},[e._v("Cada facultad atendemos al su alumnado en particular, especialmente al alumnado de nueva entrada y a los que se encuentren en los últimos cursos de la formación universitaria.No obstante, el GOU está disponible para responder cuestiones de carácter general que puedan surgir a cualquier alumno/a de otras facultades de la UMA, ya que existen determinadas cuestiones que son de interés para el conjunto del alumnado universitario.")])])]),s("h2",{staticClass:"text-center",staticStyle:{margin:"100px"}},[s("strong",[e._v("¿ Donde puedes encontrarnos ?")])]),s("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.308949404649!2d-4.47983668486812!3d36.7151406801831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f74b9f3606f1%3A0x9fa32cc2e6b0bbf9!2sE.T.S.+Ingenier%C3%ADa+Inform%C3%A1tica.+Universidad+de+M%C3%A1laga!5e0!3m2!1ses!2ses!4v1557700216191!5m2!1ses!2ses",width:"100%",height:"300",frameborder:"0",allowfullscreen:""}}),s("div",{staticClass:"row "},[s("div",{staticClass:"col-sm-12"},[s("h2",{staticClass:"text-center",staticStyle:{margin:"100px"}},[s("strong",[e._v("Facultades colaboradoras con DR.GOU")])])])]),s("div",{staticClass:"row "},[s("div",{staticClass:"col-sm-12"},[s("ul",[s("li",[s("p",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[s("strong",[e._v("Facultad de Psicología")])])]),s("li",[s("p",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[s("strong",[e._v("Facultad de Ciencias de la Educación")])])]),s("li",[s("p",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[s("strong",[e._v("Facultad de Telecomunicaciones")])])]),s("li",[s("p",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[s("strong",[e._v("FEST")])])]),s("li",[s("p",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[s("strong",[e._v("Facultad de Derecho")])])])])])])])])}],U={name:"homeBody"},S=U,E=(s("df10"),Object(d["a"])(S,w,_,!1,null,null,null)),P=E.exports,I=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},N=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark "},[s("div",{staticClass:"row justify-content-between align-items-center",staticStyle:{width:"100%"}},[s("div",{staticClass:"col-sm-5 col-md-5 "},[s("p",{staticStyle:{color:"white","text-align":"center"}},[e._v("creater by Alejandro Sedano Sanchez")])]),s("div",{staticClass:"col-sm-5 col-md-5 align-items-center"},[s("p",{staticStyle:{color:"white","text-align":"center"}},[e._v("copyright")])])])])}],T={name:"footer"},k=T,j=Object(d["a"])(k,I,N,!1,null,null,null),O=j.exports,B={name:"home",components:{Header:x,HomeBody:P,Footer:O}},D=B,$=(s("cccb"),Object(d["a"])(D,g,v,!1,null,null,null)),q=$.exports,A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"login"}},[s("login"),s("notifications",{attrs:{group:"foo"}}),s("router-view")],1)},F=[],H=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container loginPosition"},[s("div",{staticClass:"row justify-content-between "},[s("div",{staticClass:"col-sm-4"},[s("h2",{staticClass:"textcolour marginTop"},[e._v("Bienvenido a Dr.gou")]),s("br"),s("h5",{staticClass:"textcolour"},[e._v("Somos una organizacion sin animo de lucro creada para ayudarte.")]),s("button",{staticClass:"  btn btn-outline-primary marginBot buttonColorWhite",attrs:{type:"button"},on:{click:function(t){return e.registerButton()}}},[e._v("Registrate")])]),e.register?s("div",{staticClass:"col-sm-4  backgroundWhite "},[s("form",[s("fieldset",[s("div",{staticClass:"form-group marginTop "},[s("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Correo electronico")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.loginUser,expression:"loginUser"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:e.loginUser},on:{input:function(t){t.target.composing||(e.loginUser=t.target.value)}}}),s("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[e._v("No comparetiremos tu correo con nadie.")])]),s("div",{staticClass:"form-group "},[s("label",{attrs:{for:"exampleInputPassword1"}},[e._v("Contraseña")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.loginPassword,expression:"loginPassword"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"},domProps:{value:e.loginPassword},on:{input:function(t){t.target.composing||(e.loginPassword=t.target.value)}}})]),s("button",{staticClass:"btn btn-outline-primary marginBot",attrs:{type:"button"},on:{click:e.login}},[e._v("Login")])])])]):e._e(),e.register?e._e():s("div",{staticClass:"col-sm-4  backgroundWhite "},[s("form",[s("fieldset",[s("div",{staticClass:"form-group marginTop "},[s("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Correo electronico")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerEmail,expression:"registerEmail"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:e.registerEmail},on:{input:function(t){t.target.composing||(e.registerEmail=t.target.value)}}}),s("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[e._v("No comparetiremos tu correo con nadie.")])]),s("div",{staticClass:"form-group marginTop "},[s("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Nombre de usuario")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerUserName,expression:"registerUserName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nombre usuario"},domProps:{value:e.registerUserName},on:{input:function(t){t.target.composing||(e.registerUserName=t.target.value)}}}),s("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[e._v("No comparetiremos tu correo con nadie.")])]),s("div",{staticClass:"form-group "},[s("label",{attrs:{for:"exampleInputPassword1"}},[e._v("Introduce tu contraseña")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerPassword,expression:"registerPassword"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"},domProps:{value:e.registerPassword},on:{input:function(t){t.target.composing||(e.registerPassword=t.target.value)}}})]),s("div",{staticClass:"form-group "},[s("label",{attrs:{for:"exampleInputPassword1"}},[e._v("Vuelve a introducir tu contraseña")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerPassword2,expression:"registerPassword2"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"},domProps:{value:e.registerPassword2},on:{input:function(t){t.target.composing||(e.registerPassword2=t.target.value)}}})]),s("button",{staticClass:"btn btn-outline-primary marginBot",attrs:{type:"button"},on:{click:e.signUp}},[e._v("Register")])])])])])])},G=[],R=(s("6b54"),{name:"login",data:function(){return{registeredUsers:[],register:!1,registerEmail:"",registerPassword:"",registerPassword2:"",registerUserName:"",coincidencesName:0,coincidencesEmail:0,loginUser:"",loginPassword:""}},methods:{signUp:function(){var e=this;if(this.coincidencesName=0,this.coincidencesEmail=0,this.registerPassword==this.registerPassword2){for(var t=0;t<this.registeredUsers.length;t++)this.registerUserName==this.registeredUsers[t].username&&(this.coincidencesName++,t=this.registeredUsers.length-1),this.registerEmail==this.registeredUsers[t].email&&(this.coincidencesEmail++,t=this.registeredUsers.length-1);this.coincidencesName>0?this.$notify({group:"foo",title:"Este usuario ya existe.",type:"error",position:"top left"}):this.coincidencesEmail>0?this.$notify({group:"foo",title:"Este email ya existe.",type:"error",position:"top left"}):i.a.database().ref("users/"+this.registerUserName).set({username:this.registerUserName,email:this.registerEmail,password:this.registerPassword,userType:"user",userId:""}).then(function(){e.registerSuccess(),e.register=!0})}else this.$notify({group:"foo",title:"Las contraseñas no coinciden.",type:"error",position:"top left"})},removeUserId:function(){for(var e=0;e<this.registeredUsers.length;e++){var t=localStorage.getItem("userId");if(t==this.registeredUsers[e].userId){var s="users/"+this.registeredUsers[e].username;i.a.database().ref(s).set({username:this.registeredUsers[e].username,email:this.registeredUsers[e].email,password:this.registeredUsers[e].password,userType:"user",userId:""})}}localStorage.removeItem("userId")},loadUsers:function(e){for(var t in this.registeredUsers=[],e)this.registeredUsers.push({username:e[t].username,email:e[t].email,password:e[t].password,userType:e[t].userType,userId:e[t].userId})},login:function(){for(var e=0;e<this.registeredUsers.length;e++)if(this.loginUser==this.registeredUsers[e].username&&this.loginPassword==this.registeredUsers[e].password){this.iduniq=function(){return Math.random().toString(36).substr(2,27)};var t="users/"+this.loginUser,s=""+this.iduniq()+this.iduniq()+this.iduniq();localStorage.setItem("userId",s),localStorage.setItem("userName",this.registeredUsers[e].username),i.a.database().ref(t).set({username:this.registeredUsers[e].username,email:this.registeredUsers[e].email,password:this.registeredUsers[e].password,userType:this.registeredUsers[e].userType,userId:s}),e=this.registeredUsers.length-1,this.$router.push("Home")}else this.$notify({group:"foo",title:"Nmbre o contraseña incorrecto",type:"error",position:"top left"})},registerButton:function(){1==this.register?this.register=!1:this.register=!0},registerSuccess:function(){this.$notify({group:"foo",title:"Te has registrado con exito.",type:"success",position:"top left"})}},created:function(){window.addEventListener("onunload",this.removeUserId)},mounted:function(){var e=this;i.a.database().ref("users/").on("value",function(t){return e.loadUsers(t.val())})}}),L=R,M=Object(d["a"])(L,H,G,!1,null,null,null),z=M.exports,W={name:"loginview",components:{login:z}},J=W,Q=Object(d["a"])(J,A,F,!1,null,null,null),V=Q.exports,K=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"foroBody"},[s("Header"),s("ForoBody"),s("Footer"),s("notifications",{attrs:{group:"foo"}}),s("router-view")],1)},Z=[],X=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"homeBody container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12"},[s("div",{staticClass:"row justify-content-center",staticStyle:{"padding-top":"16px"}},[s("div",{staticClass:"col-sm-7"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.msg,expression:"msg"}],staticClass:"form-control",attrs:{type:"text",placeholder:"¿ Que esta ocurriendo ?"},domProps:{value:e.msg},on:{input:function(t){t.target.composing||(e.msg=t.target.value)}}})]),s("div",{staticClass:"col-sm-2"},[s("button",{staticClass:"btn btn-primary",staticStyle:{width:"100%"},attrs:{type:"button"},on:{click:e.addPost}},[e._v("Publicar")])])]),e._l(this.foro,function(t){return s("div",{key:t.id,staticClass:"row justify-content-center"},[s("div",{staticClass:"col-sm-11",staticStyle:{"padding-top":"16px"}},[s("div",{staticClass:"card border-secondary mb-3",staticStyle:{"border-radius":"10px"}},[s("div",{staticClass:"card-header"},[s("div",{staticClass:"row justify-content-between"},[s("div",{staticClass:"col-sm-2"},[s("p",[e._v(e._s(t.username))])]),s("div",{staticClass:"col-sm-2"},[s("p",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.date))])])])]),s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-text"},[e._v(e._s(t.msg))])])])])])})],2)])])},Y=[],ee={name:"homeBody",data:function(){return{foro:[],userName:"",msg:"",registeredUsers:[]}},methods:{addPost:function(){var e=new Date;i.a.database().ref("post/").push({date:e.toLocaleDateString("es-ES")+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds(),userName:this.userName,msg:this.msg}),this.msg=""},loadUsers:function(e){for(var t in this.registeredUsers=[],e)this.registeredUsers.push({userType:e[t].userType,userId:e[t].userId,username:e[t].username})}},created:function(){this.userName=localStorage.getItem("userName")},mounted:function(){var e=[];i.a.database().ref("post/").on("value",function(t){var s=t.val();for(var a in s)e.push({id:Math.random().toString(36).substr(2,27),username:s[a].userName,date:s[a].date,msg:s[a].msg});e.reverse()}),this.foro=e}},te=ee,se=Object(d["a"])(te,X,Y,!1,null,null,null),ae=se.exports,re={name:"foro",components:{Header:x,ForoBody:ae,Footer:O}},ie=re,ne=(s("bae5"),Object(d["a"])(ie,K,Z,!1,null,null,null)),oe=ne.exports,le=[];a["default"].use(p["a"]);var ce=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"login",component:V},{path:"/home",name:"home",component:q,beforeEnter:function(e,t,s){var a=localStorage.getItem("userId");if(a){var r=i.a.database().ref("users/");r.once("value").then(function(e){for(var t in le=[],e.val())le.push({userType:e.val()[t].userType,userId:e.val()[t].userId,username:e.val()[t].username});for(var r=0;r<=le.length;r++)if(a==le[r].userId)return"user"==le[r].userType||"admin"==le[r].userType||"superAdmin"==le[r].userType?s():s("/")})}}},{path:"/foro",name:"foro",component:oe,beforeEnter:function(e,t,s){var a=localStorage.getItem("userId");if(a){var r=i.a.database().ref("users/");r.once("value").then(function(e){for(var t in le=[],e.val())le.push({userType:e.val()[t].userType,userId:e.val()[t].userId,username:e.val()[t].username});for(var r=0;r<=le.length;r++)if(a==le[r].userId)return"user"==le[r].userType||"admin"==le[r].userType||"superAdmin"==le[r].userType?s():s("/")})}}}]}),de=ce,ue=s("ee98"),me=s.n(ue);s.e("chunk-76ea5a88").then(s.t.bind(null,"f33e",7)),a["default"].use(me.a),a["default"].config.productionTip=!1;var pe={apiKey:"AIzaSyB9PZmQ2n97iUVplqWdEjjUzrktEVhWJgA",authDomain:"dr-gou.firebaseapp.com",databaseURL:"https://dr-gou.firebaseio.com",projectId:"dr-gou",storageBucket:"dr-gou.appspot.com",messagingSenderId:"679764000533"};i.a.initializeApp(pe),new a["default"]({router:de,render:function(e){return e(m)}}).$mount("#app")},"6b56":function(e,t,s){},bae5:function(e,t,s){"use strict";var a=s("6b56"),r=s.n(a);r.a},cccb:function(e,t,s){"use strict";var a=s("d563"),r=s.n(a);r.a},cef7:function(e,t,s){},d563:function(e,t,s){},df10:function(e,t,s){"use strict";var a=s("cef7"),r=s.n(a);r.a}});
//# sourceMappingURL=app.8989c6e2.js.map