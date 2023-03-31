import{u as E,Q as _,a as U,b as Q,c as z,d as x,e as A,f as b,g as R,h as L}from"./QForm.93d0181c.js";import{Q as M}from"./QPage.17328ebd.js";import{Q as p}from"./QBtn.1864e20c.js";import{c as O}from"./render.e562bc2c.js";import{h as G,V as J,_ as H,r as h,W as j,X as k,S as K,G as d,H as v,I as n,K as r,Y as l,Z as P,c as V,J as w,$ as C,a0 as y,A as W,L as B,a1 as S,a2 as I,a3 as X}from"./index.1c000e60.js";import"./use-timeout.c9562223.js";const Y=G("div",{class:"q-space"});var q=O({name:"QSpace",setup(){return()=>Y}});const F=J("useTareasStore",{state:()=>({tareas:[{id:"1",titulo:"Tarea 3",descripcion:"Analisis de informacion",participantes:["159","237"],estado:"porHacer"},{id:"2",titulo:"Tarea 2",descripcion:"Analisis de informacion",participantes:["262","305"],estado:"enProgreso"},{id:"3",titulo:"Tarea 4",descripcion:"Analisis de informacion",participantes:["262","356","375"],estado:"porHacer"},{id:"4",titulo:"Tarea 5",descripcion:"Analisis de informacion",participantes:["305"],estado:"porHacer"},{id:"5",titulo:"Tarea 6",descripcion:"Analisis de informacion",participantes:["3920000","4989000","4520000"],estado:"porHacer"},{id:"6",titulo:"Tarea 1",descripcion:"Analisis de informacion",participantes:["4080000","4989000","3982000"],estado:"terminada"}],tarea:{}}),getters:{getTareasByTipo(){return o=>this.tareas.filter(e=>e.estado===o)},getTareaById(){return o=>{const e=this.tareas.findIndex(s=>s.id===o);if(e>=0)return this.tareas[e]}}},actions:{crearTarea(o){this.tareas.unshift(o),console.log(this.tareas)},listarTareas(){},eliminarTarea(o){const e=this.tareas.findIndex(s=>s.id===o);e>=0&&(this.tareas.splice(e,1),console.log(this.tareas))},editarTarea(o){const e=this.tareas.findIndex(s=>s.id===o.id);e>=0&&(this.tareas[e]={...o},console.log(this.tareas[e]))},cambiarEstado(o,e){const s=this.tareas.findIndex(a=>a.id===o);s>=0&&(this.tareas[s].estado=e,console.log(this.tareas[s].estado))}}}),Z={emits:["cerrarFormulario"],props:{crearProp:{type:Boolean},idProp:{type:String}},setup(o,{emit:e}){const s=h({}),{crearTarea:a,editarTarea:i}=F(),{getTareaById:m}=j(F()),{participantes:t}=j(E()),c=k(o,"crearProp"),f=k(o,"idProp"),g=()=>{e("cerrarFormulario",!0)};K(()=>{c.value?s.value={id:"",titulo:"",descripcion:"",participantes:[],estado:"porHacer"}:s.value=m.value(f.value)});const u=()=>{s.value={id:"",titulo:"",descripcion:"",participantes:[],estado:"porHacer"}},T=()=>{c.value?(a(s.value),g()):(i(s.value),g())};return{tarea:s,esCrear:c,expanded:h(!1),procesarFormulario:T,cerrarForm:g,limpiarForm:u,participantes:t}},components:{}},$={class:"row items-center no-wrap"},aa=l("div",{class:"col"},[l("div",{class:"text-h6"},"Nueva Tarea")],-1),ea={class:"col-auto"},ra={class:"col-12 col-sm-12 q-gutter-y-md",align:"right"};function oa(o,e,s,a,i,m){return d(),v(b,{flat:"",class:"text-white my-card"},{default:n(()=>[r(_,null,{default:n(()=>[l("div",$,[aa,l("div",ea,[r(p,{color:"grey-7",round:"",flat:"",icon:"mdi-close",onClick:a.cerrarForm},null,8,["onClick"])])])]),_:1}),r(_,null,{default:n(()=>[r(U,{onSubmit:a.procesarFormulario,onReset:a.limpiarForm,class:"row q-col-gutter-md"},{default:n(()=>[r(Q,{filled:"",dense:"",modelValue:a.tarea.id,"onUpdate:modelValue":e[0]||(e[0]=t=>a.tarea.id=t),label:"C\xF3digo *",hint:"C\xF3digo de la tarea","lazy-rules":"",rules:[t=>t&&t.length>0||"Por favor complete el campo"],class:"col-12 col-sm-6"},null,8,["modelValue","rules"]),r(Q,{filled:"",dense:"",modelValue:a.tarea.titulo,"onUpdate:modelValue":e[1]||(e[1]=t=>a.tarea.titulo=t),label:"Titulo *",hint:"Titulo para la tarea","lazy-rules":"",rules:[t=>t&&t.length>0||"Por favor complete el campo"],class:"col-12 col-sm-6"},null,8,["modelValue","rules"]),r(Q,{filled:"",autogrow:"",dense:"",modelValue:a.tarea.descripcion,"onUpdate:modelValue":e[2]||(e[2]=t=>a.tarea.descripcion=t),label:"Descripci\xF3n *",hint:"Descripci\xF3n para la tarea","lazy-rules":"",rules:[t=>t&&t.length>0||"Por favor complete el campo"],class:"col-12 col-sm-12"},null,8,["modelValue","rules"]),r(z,{filled:"",modelValue:a.tarea.participantes,"onUpdate:modelValue":e[3]||(e[3]=t=>a.tarea.participantes=t),multiple:"",options:a.participantes,"option-value":"id","option-label":"nombre","use-chips":"","stack-label":"","emit-value":"","map-options":"",label:"Multiple selection",class:"col-12 col-sm-12"},null,8,["modelValue","options"]),r(x,{dark:"",inset:""}),l("div",ra,[a.esCrear?(d(),v(p,{key:0,flat:"",color:"grey",title:"Limpiar",type:"reset",icon:"mdi-broom"})):P("",!0),r(p,{flat:"",color:"grey",titale:"Crear",type:"submit",icon:"mdi-check-bold"})])]),_:1},8,["onSubmit","onReset"])]),_:1}),r(A,null,{default:n(()=>[r(q)]),_:1})]),_:1})}var D=H(Z,[["render",oa]]);const ta={props:{info:{type:Object,default(){return{id:"",titulo:"",descripcion:"",participantes:"",estado:"porHacer"}}}},setup(o){const{cambiarEstado:e,eliminarTarea:s}=F(),{getParticipanteById:a}=j(E()),i=k(o,"info"),m=h(!1),t=V(()=>{let u=[];for(let T=0;T<i.value.participantes.length;T++){const N=i.value.participantes[T];window.console.info("part:",i.value.participantes[T]),u.push(a.value(N))}return u}),c=()=>{m.value=!1},f=u=>{u==="porHacer"&&e(i.value.id,"enProgreso"),u==="enProgreso"&&e(i.value.id,"terminada")},g=u=>{u==="enProgreso"&&e(i.value.id,"porHacer"),u==="terminada"&&e(i.value.id,"enProgreso")};return{datosTarjeta:i,expanded:h(!1),editar:m,cerrarFormulario:c,siguienteEstado:f,anteriorEstado:g,eliminarTarea:s,participantes:t}},components:{TarjetaForm:D}},sa={class:"row items-center no-wrap"},ia={class:"col"},na={class:"text-h6"},la={class:"col-auto"},ca={class:"col-auto"},da={class:"text-caption"};function ua(o,e,s,a,i,m){const t=w("TarjetaForm");return d(),C(S,null,[r(b,{class:"text-white bg-grey-9 my-card q-pa-sm"},{default:n(()=>[r(_,null,{default:n(()=>[l("div",sa,[l("div",ia,[l("div",na,y(a.datosTarjeta.titulo),1)]),l("div",la,[r(p,{flat:"",size:"md",color:"grey-7",round:"",dense:"",icon:"mdi-pencil",onClick:e[0]||(e[0]=c=>a.editar=!0)})]),l("div",ca,[r(p,{color:"grey-7",round:"",flat:"",icon:"mdi-delete",onClick:e[1]||(e[1]=c=>a.eliminarTarea(a.datosTarjeta.id))})])])]),_:1}),r(x,{dark:"",inset:""}),r(A,null,{default:n(()=>[a.datosTarjeta.estado!=="porHacer"?(d(),v(p,{key:0,flat:"",color:"grey",title:"anterior",icon:"mdi-page-previous",onClick:e[2]||(e[2]=c=>a.anteriorEstado(a.datosTarjeta.estado))})):P("",!0),a.datosTarjeta.estado!=="terminada"?(d(),v(p,{key:1,flat:"",color:"grey",titale:"siguiente",icon:"mdi-page-next",onClick:e[3]||(e[3]=c=>a.siguienteEstado(a.datosTarjeta.estado))})):P("",!0),r(q),r(p,{color:"grey",round:"",flat:"",dense:"",icon:a.expanded?"keyboard_arrow_up":"keyboard_arrow_down",onClick:e[4]||(e[4]=c=>a.expanded=!a.expanded)},null,8,["icon"])]),_:1}),r(R,null,{default:n(()=>[W(l("div",null,[r(x,{dark:""}),r(_,{class:"text-subitle2"},{default:n(()=>[B(y(a.datosTarjeta.descripcion),1)]),_:1}),r(x,{dark:""}),r(_,{class:"text-subitle2"},{default:n(()=>[l("div",da,[B("A Cargo de "),(d(!0),C(S,null,I(a.participantes,(c,f)=>(d(),C("span",{key:f},[l("div",null,y("| "+c.nombre+" | "),1)]))),128))])]),_:1})],512),[[X,a.expanded]])]),_:1})]),_:1}),r(L,{modelValue:a.editar,"onUpdate:modelValue":e[5]||(e[5]=c=>a.editar=c)},{default:n(()=>[r(b,null,{default:n(()=>[r(_,{style:{"max-height":"90vh"},class:"scroll"},{default:n(()=>[r(t,{onCerrarFormulario:a.cerrarFormulario,crearProp:!1,idProp:a.datosTarjeta.id},null,8,["onCerrarFormulario","idProp"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var ma=H(ta,[["render",ua]]);const pa={props:{info:{type:Object},lista:{type:Array}},setup(o){const e=k(o,"info"),s=k(o,"lista"),a=h(!1),i=h(!1);return{cerrarFormulario:()=>{a.value=!1,i.value=!1},infoColumna:e,listaTareas:s,crear:a,editar:i}},components:{TarjetaComp:ma,TarjetaForm:D}},fa={class:"q-pa-sm"},_a={class:"row items-center no-wrap"},va={class:"col"},ga={class:"text-overline text-grey-7"},Ta={class:"text-subtitle2 text-caption"},ya={class:"col-auto"},ha={class:"q-gutter-md"};function xa(o,e,s,a,i,m){const t=w("TarjetaForm"),c=w("TarjetaComp");return d(),C("div",fa,[r(b,{flat:"",bordered:"",class:"my-card"},{default:n(()=>[r(_,null,{default:n(()=>[l("div",_a,[l("div",va,[l("div",ga,y(a.infoColumna.nombre),1),l("div",Ta,y(a.listaTareas.length)+" "+y(a.listaTareas.length===1?"tarea":"tareas"),1)]),l("div",ya,[a.infoColumna.tipo==="porHacer"?(d(),v(p,{key:0,color:"grey-7",round:"",flat:"",icon:"mdi-plus",onClick:e[0]||(e[0]=f=>a.crear=!0)})):P("",!0)])])]),_:1}),r(x),r(_,{class:""},{default:n(()=>[l("div",ha,[a.crear?(d(),v(t,{key:0,onCerrarFormulario:a.cerrarFormulario,crearProp:!0},null,8,["onCerrarFormulario"])):P("",!0),(d(!0),C(S,null,I(a.listaTareas,(f,g)=>(d(),v(c,{key:g,info:f},null,8,["info"]))),128))])]),_:1})]),_:1})])}var Ca=H(pa,[["render",xa]]);const ba={setup(){const{getTareasByTipo:o}=j(F()),{cambiarEstado:e}=F(),s=V(()=>o.value("porHacer")),a=V(()=>o.value("enProgreso")),i=V(()=>o.value("terminada"));return{tareasPorHacer:s,tareasEnProgreso:a,tareasTerminadas:i,cambiarEstado:e}},components:{ColumnaTareas:Ca}};function ka(o,e,s,a,i,m){const t=w("ColumnaTareas");return d(),v(M,{padding:""},{default:n(()=>[r(b,{flat:"",class:"row my-card q-pa-sm"},{default:n(()=>[r(t,{class:"col-12 col-sm-4",info:{nombre:"Por Hacer",tipo:"porHacer"},lista:a.tareasPorHacer},null,8,["lista"]),r(t,{class:"col-12 col-sm-4",info:{nombre:"En progreso",tipo:"enProgreso"},lista:a.tareasEnProgreso},null,8,["lista"]),r(t,{class:"col-12 col-sm-4",info:{nombre:"Terminado",tipo:"terminado"},lista:a.tareasTerminadas},null,8,["lista"])]),_:1})]),_:1})}var Qa=H(ba,[["render",ka]]);export{Qa as default};
