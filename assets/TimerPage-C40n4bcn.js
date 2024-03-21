import{d as g,r as i,l as n,a as e,y as v,F as b,m as h,q as x,z as _,A as k,B as y,o as a,v as C,t as M}from"./index-D8UX7SlQ.js";const B={class:"p-4 border-2 border-slate-300 rounded-lg m-2 flex max-w-fit"},j={id:"timer",class:"relative rounded-full h-48 min-h-48 w-48 min-w-48 border-8 border-slate-600 bg-white"},$=e("div",{id:"knob",class:"absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full border-4 border-black bg-white"},null,-1),H={class:"ml-4"},T={class:"grid grid-cols-3 gap-2 mt-4"},V=["onClick"],A={class:"flex justify-center gap-2 mt-4"},Z=["disabled"],I=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"})],-1),z=[I],D=["disabled"],F=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5"},[e("path",{"fill-rule":"evenodd",d:"M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z","clip-rule":"evenodd"})],-1),K=[F],L=["disabled"],N=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5"},[e("path",{"fill-rule":"evenodd",d:"M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z","clip-rule":"evenodd"})],-1),S=[N],q={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},E=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"},null,-1),P=[E],U={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},G=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"},null,-1),J=[G],W=g({__name:"TimerPage",setup(O){const s=i(0),o=i(),d=i(!1),r=i(void 0),p=()=>{o.value=setInterval(f,1e3)},u=()=>{clearInterval(o.value),o.value=void 0},m=()=>{u(),s.value=0},f=()=>{s.value-=1e3,s.value===0&&(u(),d.value||new Audio("https://freesfx.co.uk/sound/14777_1460060679.mp3").play())},w=c=>{s.value=c*6e4};return(c,l)=>(a(),n(b,null,[e("div",B,[e("div",j,[e("div",{id:"shade",class:"absolute rounded-full h-48 w-48 -translate-x-2 -translate-y-2 scale-95",style:v(`background: conic-gradient(white calc(360deg - ${s.value/60/1e3*6}deg), red 0)`)},null,4),(a(),n(b,null,h(60,t=>e("div",{id:"ticks",key:t,class:C(["absolute w-1 h-1/2 border-slate-600 left-1/2 bottom-1/2 origin-bottom-left -translate-x-0.5",{"border-t-8 border-opacity-60":t%5!==0,"border-t-[16px]":t%5===0}]),style:v(`rotate: ${t*6}deg`)},null,6)),64)),e("div",{id:"hand",class:"absolute w-1 h-1/2 border-black rounded-full left-1/2 bottom-1/2 origin-bottom-left border-l-4 -translate-x-0.5",style:v(`rotate: -${s.value/60/1e3*6}deg`)},null,4),$]),e("div",H,[e("div",null,[x(" Minutes: "),_(e("input",{type:"text",pattern:"[0-9\\s]",maxlength:"2",class:"w-10 border border-black rounded-lg text-xs text-center px-2 py-1","onUpdate:modelValue":l[0]||(l[0]=t=>r.value=t),onKeyup:l[1]||(l[1]=y(()=>{w(r.value||0),r.value=void 0},["enter"]))},null,544),[[k,r.value]])]),e("div",T,[(a(),n(b,null,h([1,2,3,5,7,10],t=>e("button",{key:t,onClick:Q=>w(t),class:"h-10 w-10 rounded-full bg-slate-600 text-white"},M(t),9,V)),64))]),e("div",A,[e("button",{id:"reset",onClick:l[2]||(l[2]=t=>m()),disabled:!!o.value||s.value===0,class:"flex justify-center items-center h-10 w-10 rounded-full bg-sky-300 text-slate-600 disabled:bg-opacity-40 disabled:text-opacity-40"},z,8,Z),e("button",{id:"start",onClick:l[3]||(l[3]=t=>p()),disabled:!!o.value||s.value===0,class:"flex justify-center items-center h-10 w-10 rounded-full bg-emerald-400 text-slate-600 disabled:bg-opacity-40 disabled:text-opacity-40"},K,8,D),e("button",{id:"stop",onClick:l[4]||(l[4]=t=>u()),disabled:!o.value,class:"flex justify-center items-center h-10 w-10 rounded-full bg-yellow-400 text-slate-600 disabled:bg-opacity-40 disabled:text-opacity-40"},S,8,L)])])]),e("button",{class:"absolute flex justify-center items-center h-6 w-6 rounded-full bg-slate-300 text-slate-700 top-5 left-5",onClick:l[5]||(l[5]=t=>d.value=!d.value)},[d.value?(a(),n("svg",q,P)):(a(),n("svg",U,J))])],64))}});export{W as default};
