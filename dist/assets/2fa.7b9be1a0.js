import{u as b,a as c,b6 as u,d as v,e as i,f as t,m as w,W as x,bf as I,ae as S,I as $,B as k,Z as _,a3 as d,n as C,bd as D,aN as F,c5 as L}from"./index.af08b204.js";const T=()=>{const{back:r}=b(),[g,l]=c(()=>u.post("/auth/2fa/generate")),a=v(),[n,p]=i(),f=async()=>{if(d().otp){C.warning(a("users.2fa_already_enabled")),r();return}const e=await l();D(e,p)},[s,h]=i("");f();const[y,m]=c(()=>{var e;return u.post("/auth/2fa/verify",{code:s(),secret:(e=n())==null?void 0:e.secret})}),o=async()=>{const e=await m();F(e,()=>{L({...d(),otp:!0}),r()})};return t(_,{get loading(){return g()},get children(){return t(w,{get when(){return n()},get children(){return t(x,{spacing:"$2",alignItems:"start",get children(){return[t(I,{get children(){return a("users.scan_qr")}}),t(S,{boxSize:"$xs",rounded:"$lg",get src(){var e;return(e=n())==null?void 0:e.qr}}),t($,{maxW:"$xs",get placeholder(){return a("users.input_code")},get value(){return s()},onInput:e=>h(e.currentTarget.value),onKeyDown:e=>{e.key==="Enter"&&o()}}),t(k,{get loading(){return y()},onClick:o,get children(){return a("users.verify")}})]}})}})}})};export{T as default};
