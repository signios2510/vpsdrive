System.register(["./index-legacy-525baae1.js","./index-legacy-4aac5e6e.js","./item_type-legacy-401bb746.js","./index-legacy-899e752b.js"],(function(e,r){"use strict";var t,n,u,g,l,a,i,c,d,h,s,o,y,b,f,p,k,v,m,C,w,x,D,O,T,E,R,$;return{setters:[e=>{t=e.d,n=e.f,u=e.m,g=e.a_,l=e.t,a=e.ah,i=e.R,c=e.aj,d=e.U,h=e.I,s=e.bQ,o=e.T,y=e.bR,b=e.bS,f=e.bT,p=e.bU,k=e.bV,v=e.bW,m=e.bX,C=e.v,w=e.bY,x=e.bZ,D=e.b_,O=e.F,T=e.b0},e=>{E=e.F},e=>{R=e.T},e=>{$=e.m}],execute:function(){e("I",(e=>{const r=t();return n(T,{get w(){return e.w??"100%"},display:"flex",flexDirection:"column",get children(){return[n(u,{get when(){return!e.hideLabel},get children(){return n(g,{get for(){return e.key},display:"flex",alignItems:"center",get children(){return[l((()=>r(`settings.${e.key}`))),n(u,{get when(){return e.flag===E.DEPRECATED},get children(){return n(a,{ml:"$2",as:$,boxSize:"$5",color:"$danger9",verticalAlign:"middle",cursor:"pointer",onClick:()=>{e.onDelete?.()}})}})]}})}}),n(i,{get fallback(){return n(c,{get children(){return r("settings_other.unknown_type")}})},get children(){return[n(d,{get when(){return[R.String,R.Number].includes(e.type)},get children(){return n(h,{get type(){return e.type===R.Number?"number":""},get id(){return e.key},get value(){return e.value},onInput:r=>e.onChange?.(r.currentTarget.value),get readOnly(){return e.flag===E.READONLY}})}}),n(d,{get when(){return e.type===R.Bool},get children(){return n(s,{get id(){return e.key},get defaultChecked(){return"true"===e.value},onChange:r=>e.onChange?.(r.currentTarget.checked?"true":"false"),get readOnly(){return e.flag===E.READONLY}})}}),n(d,{get when(){return e.type===R.Text},get children(){return n(o,{get id(){return e.key},get value(){return e.value},onChange:r=>e.onChange?.(r.currentTarget.value),get readOnly(){return e.flag===E.READONLY}})}}),n(d,{get when(){return e.type===R.Select},get children(){return n(y,{get id(){return e.key},get defaultValue(){return e.value},onChange:r=>e.onChange?.(r),get readOnly(){return e.flag===E.READONLY},get children(){return[n(b,{get children(){return[n(f,{get children(){return r("global.choose")}}),n(p,{}),n(k,{})]}}),n(v,{get children(){return n(m,{get children(){return n(C,{get each(){return e.options?.split(",")},children:t=>n(w,{value:t,get children(){return[n(x,{get children(){return r(`settings.${e.key}s.${t}`)}}),n(D,{})]}})})}})}})]}})}})]}}),n(O,{get children(){return l((()=>!!e.help))()?r(`settings.${e.key}-tips`):""}})]}})}))}}}));
