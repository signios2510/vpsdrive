System.register(["./index-legacy-525baae1.js","./index-legacy-1cd78d63.js"],(function(e,t){"use strict";var r,n,o,l,i,a,s,c,u,d,g,p,h,f,m,w,v,$,b,C,x,y,_,k,I,S,G,j,z,E,U,D,M,P,R,T,q,K,L,N,Y;return{setters:[e=>{r=e.ao,n=e.b3,o=e.bp,l=e.a4,i=e.J,a=e.f,s=e.Y,c=e.aq,u=e.E,d=e.u,g=e.ar,p=e.ah,h=e.bl,f=e.bq,m=e.b6,w=e.bh,v=e.br,$=e.bs,b=e.bt,C=e.d,x=e.t,y=e.e,_=e.bu,k=e.a,I=e.W,S=e.bg,G=e.ae,j=e.bf,z=e.m,E=e.I,U=e.bv,D=e.bc,M=e.a0,P=e.B,R=e.aX,T=e.aY,q=e.aj,K=e.h,L=e.n},e=>{N=e.p,Y=e.c}],execute:function(){const t=l('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="896" width="967.8852157128662"><defs><path id="path-2" opacity="1" fill-rule="evenodd" d="M896,448 C1142.6325445712241,465.5747656464056 695.2579309733121,896 448,896 C200.74206902668806,896 5.684341886080802e-14,695.2579309733121 0,448.0000000000001 C0,200.74206902668806 200.74206902668791,5.684341886080802e-14 447.99999999999994,0 C695.2579309733121,0 475,418 896,448Z"></path><linearGradient id="linearGradient-3" x1="0.5" y1="0" x2="0.5" y2="1"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-2" fill="url(#linearGradient-3)" fill-opacity="1"></use></g></svg>'),Z=e=>{const l=r({startColor:"#28aff0",endColor:"#120fc4"},e);return(()=>{const e=t.cloneNode(!0),r=e.firstChild.firstChild.nextSibling.firstChild,i=r.nextSibling;return n((e=>{const t=l.startColor,n=l.endColor;return t!==e._v$&&o(r,"stop-color",e._v$=t),n!==e._v$2&&o(i,"stop-color",e._v$2=n),e}),{_v$:void 0,_v$2:void 0}),e})()},B=l('<svg height="1337" width="1337"><defs><path id="path-1" opacity="1" fill-rule="evenodd" d="M1337,668.5 C1337,1037.455193874239 1037.455193874239,1337 668.5,1337 C523.6725684305388,1337 337,1236 370.50000000000006,1094 C434.03835568300906,824.6732385973953 6.906089672974592e-14,892.6277623047779 0,668.5000000000001 C0,299.5448061257611 299.5448061257609,1.1368683772161603e-13 668.4999999999999,0 C1037.455193874239,0 1337,299.544806125761 1337,668.5Z"></path><linearGradient id="linearGradient-2" x1="0.79" y1="0.62" x2="0.21" y2="0.86"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-1" fill="url(#linearGradient-2)" fill-opacity="1"></use></g></svg>'),J=e=>{const t=r({startColor:"#28aff0",endColor:"#120fc4"},e);return(()=>{const e=B.cloneNode(!0),r=e.firstChild.firstChild.nextSibling.firstChild,l=r.nextSibling;return n((e=>{const n=t.startColor,i=t.endColor;return n!==e._v$&&o(r,"stop-color",e._v$=n),i!==e._v$2&&o(l,"stop-color",e._v$2=i),e}),{_v$:void 0,_v$2:void 0}),e})()},W=()=>{const e=i("#a9c6ff","#062b74");return a(s,{get bgColor(){return e()},pos:"fixed",top:"0",left:"0",overflow:"hidden",zIndex:"-1",w:"100vw",h:"100vh",get children(){return[a(s,{pos:"absolute",right:{"@initial":"-100px","@sm":"-300px"},top:{"@initial":"-1170px","@sm":"-900px"},get children(){return a(J,{})}}),a(s,{pos:"absolute",left:{"@initial":"-100px","@sm":"-200px"},bottom:{"@initial":"-760px","@sm":"-400px"},get children(){return a(Z,{})}})]}})},X=()=>{const e=c("sso_login_enabled"),t=u("sso_login_platform"),{searchParams:r,to:n}=d();function o(e){const t=e.data;t.token&&(h(t.token),n(decodeURIComponent(r.redirect||f||"/"),!0))}if(window.addEventListener("message",o),g((()=>{window.removeEventListener("message",o)})),e){const e=()=>{const e=m.getUri()+"/auth/sso?method=sso_get_token";window.open(e,"authPopup","width=500,height=600")};let r;switch(t){case"Github":r=b;break;case"Microsoft":r=N;break;case"Google":r=$;break;case"Dingtalk":r=v;break;default:r=w}return a(p,{cursor:"pointer",boxSize:"$8",as:r,p:"$0_5",onclick:e})}};e("default",(()=>{const e=u("logo").split("\n"),t=i(e[0],e.pop()),r=C(),n=x((()=>`${r("login.login_to")} ${u("site_title")}`));Y(n);const o=i("white","$neutral1"),[l,s]=y(localStorage.getItem("username")||""),[c,g]=y(localStorage.getItem("password")||""),[p,w]=y(""),[v,$]=_("remember-pwd","false"),[b,N]=k((()=>m.post("/auth/login",{username:l(),password:c(),otp_code:p()}))),{searchParams:Z,to:B}=d(),J=async()=>{"true"===v()?(localStorage.setItem("username",l()),localStorage.setItem("password",c())):(localStorage.removeItem("username"),localStorage.removeItem("password"));const e=await N();K(e,(e=>{L.success(r("login.success")),h(e.token),B(decodeURIComponent(Z.redirect||f||"/"),!0)}),((e,t)=>{A()||402!==t?L.error(e):F(!0)}))},[A,F]=y(!1);return a(q,{zIndex:"1",w:"$full",h:"100vh",get children(){return[a(I,{get bgColor(){return o()},rounded:"$xl",p:"24px",w:{"@initial":"90%","@sm":"364px"},spacing:"$4",get children(){return[a(S,{alignItems:"center",justifyContent:"space-around",get children(){return[a(G,{mr:"$2",boxSize:"$12",get src(){return t()}}),a(j,{color:"$info9",fontSize:"$2xl",get children(){return n()}})]}}),a(z,{get when(){return!A()},get fallback(){return a(E,{id:"totp",name:"otp",get placeholder(){return r("login.otp-tips")},get value(){return p()},onChange:e=>w(e.currentTarget.value),onKeyDown:e=>{"Enter"===e.key&&J()}})},get children(){return[a(E,{name:"username",get placeholder(){return r("login.username-tips")},get value(){return l()},onInput:e=>s(e.currentTarget.value)}),a(E,{name:"password",get placeholder(){return r("login.password-tips")},type:"password",get value(){return c()},onInput:e=>g(e.currentTarget.value),onKeyDown:e=>{"Enter"===e.key&&J()}}),a(S,{px:"$1",w:"$full",fontSize:"$sm",color:"$neutral10",justifyContent:"space-between",alignItems:"center",get children(){return[a(U,{get checked(){return"true"===v()},onChange:()=>$("true"===v()?"false":"true"),get children(){return r("login.remember")}}),a(D,{as:"a",target:"_blank",get href(){return r("login.forget_url")},get children(){return r("login.forget")}})]}})]}}),a(M,{w:"$full",spacing:"$2",get children(){return[a(P,{colorScheme:"primary",w:"$full",onClick:()=>{A()?w(""):(s(""),g(""))},get children(){return r("login.clear")}}),a(P,{w:"$full",get loading(){return b()},onClick:J,get children(){return r("login.login")}})]}}),a(P,{w:"$full",colorScheme:"accent",onClick:()=>{h(),B(decodeURIComponent(Z.redirect||f||"/"),!0)},get children(){return r("login.use_guest")}}),a(S,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return[a(R,{}),a(T,{})]}}),a(S,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return a(X,{})}})]}}),a(W,{})]}})}))}}}));
