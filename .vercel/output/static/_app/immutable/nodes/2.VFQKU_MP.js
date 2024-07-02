import{n as j,h as Qe,r as et,i as tt,s as he,y as U,f as Ce,o as lt,e as we,z as Ve}from"../chunks/scheduler.qUOb8npH.js";import{y as st,z as nt,A as it,B as rt,t as Q,a as X,S as fe,i as _e,e as A,s as S,c as M,d as H,C as J,h as T,g as k,o as d,j as $,k as b,q as be,n as ke,D as Y,E as ie,b as ae,f as oe,l as ce,F as ue,G as xe,u as de,v as me,w as pe,x as ge}from"../chunks/index.LGmkCgDF.js";function Xe(l,e,t,s){if(!e)return j;const o=l.getBoundingClientRect();if(e.left===o.left&&e.right===o.right&&e.top===o.top&&e.bottom===o.bottom)return j;const{delay:i=0,duration:a=300,easing:u=Qe,start:m=st()+i,end:_=m+a,tick:c=j,css:w}=t(l,{from:e,to:o},s);let f=!0,n=!1,y;function B(){w&&(y=it(l,0,1,a,i,u,w)),i||(n=!0)}function C(){w&&rt(l,y),f=!1}return nt(I=>{if(!n&&I>=m&&(n=!0),n&&I>=_&&(c(1,0),C()),!f)return!1;if(n){const D=I-m,g=0+1*u(D/a);c(g,1-g)}return!0}),B(),c(0,1),C}function Ye(l){const e=getComputedStyle(l);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:s}=e,o=l.getBoundingClientRect();l.style.position="absolute",l.style.width=t,l.style.height=s,Ee(l,o)}}function Ee(l,e){const t=l.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const s=getComputedStyle(l),o=s.transform==="none"?"":s.transform;l.style.transform=`${o} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}function W(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function at(l,e){X(l,1,1,()=>{e.delete(l.key)})}function $e(l,e){l.f(),at(l,e)}function Be(l,e,t,s,o,i,a,u,m,_,c,w){let f=l.length,n=i.length,y=f;const B={};for(;y--;)B[l[y].key]=y;const C=[],I=new Map,D=new Map,g=[];for(y=n;y--;){const x=w(o,i,y),P=t(x);let v=a.get(P);v?s&&g.push(()=>v.p(x,e)):(v=_(P,x),v.c()),I.set(P,C[y]=v),P in B&&D.set(P,Math.abs(y-B[P]))}const h=new Set,E=new Set;function K(x){Q(x,1),x.m(u,c),a.set(x.key,x),c=x.first,n--}for(;f&&n;){const x=C[n-1],P=l[f-1],v=x.key,V=P.key;x===P?(c=x.first,f--,n--):I.has(V)?!a.has(v)||h.has(v)?K(x):E.has(V)?f--:D.get(v)>D.get(V)?(E.add(v),K(x)):(h.add(V),f--):(m(P,a),f--)}for(;f--;){const x=l[f];I.has(x.key)||m(x,a)}for(;n;)K(C[n-1]);return et(g),C}function ot(l){const e=l-1;return e*e*e+1}function Ze(l,{from:e,to:t},s={}){const o=getComputedStyle(l),i=o.transform==="none"?"":o.transform,[a,u]=o.transformOrigin.split(" ").map(parseFloat),m=e.left+e.width*a/t.width-(t.left+a),_=e.top+e.height*u/t.height-(t.top+u),{delay:c=0,duration:w=n=>Math.sqrt(n)*120,easing:f=ot}=s;return{delay:c,duration:tt(w)?w(Math.sqrt(m*m+_*_)):w,easing:f,css:(n,y)=>{const B=y*m,C=y*_,I=n+y*e.width/t.width,D=n+y*e.height/t.height;return`transform: ${i} translate(${B}px, ${C}px) scale(${I}, ${D});`}}}function re(l,{delay:e=0,duration:t=400,easing:s=Qe}={}){const o=+getComputedStyle(l).opacity;return{delay:e,duration:t,easing:s,css:i=>`opacity: ${i*o}`}}function Pe(l,e,t){const s=l.slice();return s[5]=e[t],s[7]=t,s}function He(l,e,t){const s=l.slice();return s[8]=e[t],s[7]=t,s}function Oe(l,e){let t,s,o,i,a,u,m=j,_,c,w;function f(){return e[3](e[7])}return{key:l,first:null,c(){t=A("div"),s=A("img"),i=S(),this.h()},l(n){t=M(n,"DIV",{class:!0});var y=H(t);s=M(y,"IMG",{src:!0}),i=T(y),y.forEach(k),this.h()},h(){U(s.src,o=e[8].path)||d(s,"src",o),d(t,"class","image-container svelte-xip404"),this.first=t},m(n,y){$(n,t,y),b(t,s),b(t,i),_=!0,c||(w=Y(t,"click",f),c=!0)},p(n,y){e=n,(!_||y&1&&!U(s.src,o=e[8].path))&&d(s,"src",o)},r(){u=t.getBoundingClientRect()},f(){Ye(t),m(),Ee(t,u)},a(){m(),m=Xe(t,u,Ze,{})},i(n){_||(n&&Ce(()=>{_&&(a||(a=ie(t,re,{},!0)),a.run(1))}),_=!0)},o(n){n&&(a||(a=ie(t,re,{},!1)),a.run(0)),_=!1},d(n){n&&k(t),n&&a&&a.end(),c=!1,w()}}}function Ge(l,e){let t,s=e[5].text+"",o,i,a,u,m=j,_;return{key:l,first:null,c(){t=A("div"),o=ae(s),i=S(),this.h()},l(c){t=M(c,"DIV",{class:!0});var w=H(t);o=oe(w,s),i=T(w),w.forEach(k),this.h()},h(){d(t,"class","symbol"),this.first=t},m(c,w){$(c,t,w),b(t,o),b(t,i),_=!0},p(c,w){e=c,(!_||w&2)&&s!==(s=e[5].text+"")&&ce(o,s)},r(){u=t.getBoundingClientRect()},f(){Ye(t),m(),Ee(t,u)},a(){m(),m=Xe(t,u,Ze,{})},i(c){_||(c&&Ce(()=>{_&&(a||(a=ie(t,re,{},!0)),a.run(1))}),_=!0)},o(c){c&&(a||(a=ie(t,re,{},!1)),a.run(0)),_=!1},d(c){c&&k(t),c&&a&&a.end()}}}function Re(l){let e,t="Clear",s,o,i,a;return{c(){e=A("button"),e.textContent=t,this.h()},l(u){e=M(u,"BUTTON",{class:!0,"data-svelte-h":!0}),J(e)!=="svelte-1wk4hxw"&&(e.textContent=t),this.h()},h(){d(e,"class","svelte-xip404")},m(u,m){$(u,e,m),o=!0,i||(a=Y(e,"click",l[4]),i=!0)},p:j,i(u){o||(u&&Ce(()=>{o&&(s||(s=ie(e,re,{delay:200,duration:500},!0)),s.run(1))}),o=!0)},o(u){u&&(s||(s=ie(e,re,{delay:200,duration:500},!1)),s.run(0)),o=!1},d(u){u&&k(e),u&&s&&s.end(),i=!1,a()}}}function ct(l){let e,t,s="CHANTS OF SENNAAR: THE BOARD",o,i,a=[],u=new Map,m,_,c=[],w=new Map,f,n,y=W(l[0]);const B=g=>g[7];for(let g=0;g<y.length;g+=1){let h=He(l,y,g),E=B(h);u.set(E,a[g]=Oe(E,h))}let C=W(l[1]);const I=g=>g[7];for(let g=0;g<C.length;g+=1){let h=Pe(l,C,g),E=I(h);w.set(E,c[g]=Ge(E,h))}let D=l[1].length&&Re(l);return{c(){e=A("div"),t=A("h1"),t.textContent=s,o=S(),i=A("div");for(let g=0;g<a.length;g+=1)a[g].c();m=S(),_=A("p");for(let g=0;g<c.length;g+=1)c[g].c();f=S(),D&&D.c(),this.h()},l(g){e=M(g,"DIV",{class:!0});var h=H(e);t=M(h,"H1",{class:!0,"data-svelte-h":!0}),J(t)!=="svelte-1wi1zrn"&&(t.textContent=s),o=T(h),i=M(h,"DIV",{class:!0});var E=H(i);for(let x=0;x<a.length;x+=1)a[x].l(E);E.forEach(k),m=T(h),_=M(h,"P",{class:!0});var K=H(_);for(let x=0;x<c.length;x+=1)c[x].l(K);K.forEach(k),f=T(h),D&&D.l(h),h.forEach(k),this.h()},h(){d(t,"class","svelte-xip404"),d(i,"class","container svelte-xip404"),d(_,"class","phrase svelte-xip404"),d(e,"class","board svelte-xip404")},m(g,h){$(g,e,h),b(e,t),b(e,o),b(e,i);for(let E=0;E<a.length;E+=1)a[E]&&a[E].m(i,null);b(e,m),b(e,_);for(let E=0;E<c.length;E+=1)c[E]&&c[E].m(_,null);b(e,f),D&&D.m(e,null),n=!0},p(g,[h]){if(h&5){y=W(g[0]),be();for(let E=0;E<a.length;E+=1)a[E].r();a=Be(a,h,B,1,g,y,u,i,$e,Oe,null,He);for(let E=0;E<a.length;E+=1)a[E].a();ke()}if(h&2){C=W(g[1]),be();for(let E=0;E<c.length;E+=1)c[E].r();c=Be(c,h,I,1,g,C,w,_,$e,Ge,null,Pe);for(let E=0;E<c.length;E+=1)c[E].a();ke()}g[1].length?D?(D.p(g,h),h&2&&Q(D,1)):(D=Re(g),D.c(),Q(D,1),D.m(e,null)):D&&(be(),X(D,1,1,()=>{D=null}),ke())},i(g){if(!n){for(let h=0;h<y.length;h+=1)Q(a[h]);for(let h=0;h<C.length;h+=1)Q(c[h]);Q(D),n=!0}},o(g){for(let h=0;h<a.length;h+=1)X(a[h]);for(let h=0;h<c.length;h+=1)X(c[h]);X(D),n=!1},d(g){g&&k(e);for(let h=0;h<a.length;h+=1)a[h].d();for(let h=0;h<c.length;h+=1)c[h].d();D&&D.d()}}}function ut(l,e,t){let s,{phrases:o=[]}=e;const i=m=>{console.log(m),t(0,o=o.filter((_,c)=>c!==m))},a=m=>i(m),u=()=>t(0,o=[]);return l.$$set=m=>{"phrases"in m&&t(0,o=m.phrases)},l.$$.update=()=>{l.$$.dirty&1&&t(1,s=o)},[o,s,i,a,u]}class ht extends fe{constructor(e){super(),_e(this,e,ut,ct,he,{phrases:0})}}function Ne(l,e,t){const s=l.slice();return s[17]=e[t],s}function qe(l,e,t){const s=l.slice();return s[17]=e[t],s}function Fe(l,e,t){const s=l.slice();return s[17]=e[t],s}function ze(l,e,t){const s=l.slice();return s[17]=e[t],s}function Le(l,e,t){const s=l.slice();return s[17]=e[t],s}function We(l){let e,t,s,o,i,a=l[17].text+"",u,m,_,c;function w(){return l[10](l[17])}return{c(){e=A("div"),t=A("img"),o=S(),i=A("p"),u=ae(a),m=S(),this.h()},l(f){e=M(f,"DIV",{class:!0});var n=H(e);t=M(n,"IMG",{src:!0,alt:!0}),o=T(n),i=M(n,"P",{class:!0});var y=H(i);u=oe(y,a),y.forEach(k),m=T(n),n.forEach(k),this.h()},h(){U(t.src,s=l[17].path)||d(t,"src",s),d(t,"alt","Devotee"),d(i,"class","name svelte-1elsuy9"),d(e,"class","image-container svelte-1elsuy9")},m(f,n){$(f,e,n),b(e,t),b(e,o),b(e,i),b(i,u),b(e,m),_||(c=Y(e,"click",w),_=!0)},p(f,n){l=f,n&1&&!U(t.src,s=l[17].path)&&d(t,"src",s),n&1&&a!==(a=l[17].text+"")&&ce(u,a)},d(f){f&&k(e),_=!1,c()}}}function je(l){let e,t,s,o,i,a=l[17].text+"",u,m,_,c;function w(){return l[11](l[17])}return{c(){e=A("div"),t=A("img"),o=S(),i=A("p"),u=ae(a),m=S(),this.h()},l(f){e=M(f,"DIV",{class:!0});var n=H(e);t=M(n,"IMG",{src:!0,alt:!0}),o=T(n),i=M(n,"P",{class:!0});var y=H(i);u=oe(y,a),y.forEach(k),m=T(n),n.forEach(k),this.h()},h(){U(t.src,s=l[17].path)||d(t,"src",s),d(t,"alt","Warrior"),d(i,"class","name svelte-1elsuy9"),d(e,"class","image-container svelte-1elsuy9")},m(f,n){$(f,e,n),b(e,t),b(e,o),b(e,i),b(i,u),b(e,m),_||(c=Y(e,"click",w),_=!0)},p(f,n){l=f,n&2&&!U(t.src,s=l[17].path)&&d(t,"src",s),n&2&&a!==(a=l[17].text+"")&&ce(u,a)},d(f){f&&k(e),_=!1,c()}}}function Ke(l){let e,t,s,o,i,a=l[17].text+"",u,m,_,c;function w(){return l[12](l[17])}return{c(){e=A("div"),t=A("img"),o=S(),i=A("p"),u=ae(a),m=S(),this.h()},l(f){e=M(f,"DIV",{class:!0});var n=H(e);t=M(n,"IMG",{src:!0,alt:!0}),o=T(n),i=M(n,"P",{class:!0});var y=H(i);u=oe(y,a),y.forEach(k),m=T(n),n.forEach(k),this.h()},h(){U(t.src,s=l[17].path)||d(t,"src",s),d(t,"alt","Bard"),d(i,"class","name svelte-1elsuy9"),d(e,"class","image-container svelte-1elsuy9")},m(f,n){$(f,e,n),b(e,t),b(e,o),b(e,i),b(i,u),b(e,m),_||(c=Y(e,"click",w),_=!0)},p(f,n){l=f,n&4&&!U(t.src,s=l[17].path)&&d(t,"src",s),n&4&&a!==(a=l[17].text+"")&&ce(u,a)},d(f){f&&k(e),_=!1,c()}}}function Ue(l){let e,t,s,o,i,a=l[17].text+"",u,m,_,c;function w(){return l[13](l[17])}return{c(){e=A("div"),t=A("img"),o=S(),i=A("p"),u=ae(a),m=S(),this.h()},l(f){e=M(f,"DIV",{class:!0});var n=H(e);t=M(n,"IMG",{src:!0,alt:!0}),o=T(n),i=M(n,"P",{class:!0});var y=H(i);u=oe(y,a),y.forEach(k),m=T(n),n.forEach(k),this.h()},h(){U(t.src,s=l[17].path)||d(t,"src",s),d(t,"alt","Alchemist"),d(i,"class","name svelte-1elsuy9"),d(e,"class","image-container svelte-1elsuy9")},m(f,n){$(f,e,n),b(e,t),b(e,o),b(e,i),b(i,u),b(e,m),_||(c=Y(e,"click",w),_=!0)},p(f,n){l=f,n&16&&!U(t.src,s=l[17].path)&&d(t,"src",s),n&16&&a!==(a=l[17].text+"")&&ce(u,a)},d(f){f&&k(e),_=!1,c()}}}function Je(l){let e,t,s,o,i,a=l[17].text+"",u,m,_,c;function w(){return l[14](l[17])}return{c(){e=A("div"),t=A("img"),o=S(),i=A("p"),u=ae(a),m=S(),this.h()},l(f){e=M(f,"DIV",{class:!0});var n=H(e);t=M(n,"IMG",{src:!0,alt:!0}),o=T(n),i=M(n,"P",{class:!0});var y=H(i);u=oe(y,a),y.forEach(k),m=T(n),n.forEach(k),this.h()},h(){U(t.src,s=l[17].path)||d(t,"src",s),d(t,"alt","Anchorite"),d(i,"class","name svelte-1elsuy9"),d(e,"class","image-container svelte-1elsuy9")},m(f,n){$(f,e,n),b(e,t),b(e,o),b(e,i),b(i,u),b(e,m),_||(c=Y(e,"click",w),_=!0)},p(f,n){l=f,n&8&&!U(t.src,s=l[17].path)&&d(t,"src",s),n&8&&a!==(a=l[17].text+"")&&ce(u,a)},d(f){f&&k(e),_=!1,c()}}}function ft(l){let e,t,s="apps",o,i,a,u="Devotee",m,_,c,w,f="Warriors",n,y,B,C,I="Bards",D,g,h,E,K="Alchemists",x,P,v,V,Ae="Anchorites",ve,Z,ye,Me,ee=W(l[0]),G=[];for(let p=0;p<ee.length;p+=1)G[p]=We(Le(l,ee,p));let te=W(l[1]),R=[];for(let p=0;p<te.length;p+=1)R[p]=je(ze(l,te,p));let le=W(l[2]),N=[];for(let p=0;p<le.length;p+=1)N[p]=Ke(Fe(l,le,p));let se=W(l[4]),q=[];for(let p=0;p<se.length;p+=1)q[p]=Ue(qe(l,se,p));let ne=W(l[3]),F=[];for(let p=0;p<ne.length;p+=1)F[p]=Je(Ne(l,ne,p));return{c(){e=A("div"),t=A("span"),t.textContent=s,o=S(),i=A("div"),a=A("h2"),a.textContent=u,m=S(),_=A("div");for(let p=0;p<G.length;p+=1)G[p].c();c=S(),w=A("h2"),w.textContent=f,n=S(),y=A("div");for(let p=0;p<R.length;p+=1)R[p].c();B=S(),C=A("h2"),C.textContent=I,D=S(),g=A("div");for(let p=0;p<N.length;p+=1)N[p].c();h=S(),E=A("h2"),E.textContent=K,x=S(),P=A("div");for(let p=0;p<q.length;p+=1)q[p].c();v=S(),V=A("h2"),V.textContent=Ae,ve=S(),Z=A("div");for(let p=0;p<F.length;p+=1)F[p].c();this.h()},l(p){e=M(p,"DIV",{class:!0});var z=H(e);t=M(z,"SPAN",{class:!0,"data-svelte-h":!0}),J(t)!=="svelte-1ftw9wh"&&(t.textContent=s),o=T(z),i=M(z,"DIV",{class:!0});var r=H(i);a=M(r,"H2",{class:!0,"data-svelte-h":!0}),J(a)!=="svelte-c98ul"&&(a.textContent=u),m=T(r),_=M(r,"DIV",{class:!0});var L=H(_);for(let O=0;O<G.length;O+=1)G[O].l(L);L.forEach(k),c=T(r),w=M(r,"H2",{class:!0,"data-svelte-h":!0}),J(w)!=="svelte-q9lkmt"&&(w.textContent=f),n=T(r),y=M(r,"DIV",{class:!0});var De=H(y);for(let O=0;O<R.length;O+=1)R[O].l(De);De.forEach(k),B=T(r),C=M(r,"H2",{class:!0,"data-svelte-h":!0}),J(C)!=="svelte-1sg38yt"&&(C.textContent=I),D=T(r),g=M(r,"DIV",{class:!0});var Ie=H(g);for(let O=0;O<N.length;O+=1)N[O].l(Ie);Ie.forEach(k),h=T(r),E=M(r,"H2",{class:!0,"data-svelte-h":!0}),J(E)!=="svelte-1abgt7h"&&(E.textContent=K),x=T(r),P=M(r,"DIV",{class:!0});var Se=H(P);for(let O=0;O<q.length;O+=1)q[O].l(Se);Se.forEach(k),v=T(r),V=M(r,"H2",{class:!0,"data-svelte-h":!0}),J(V)!=="svelte-hhzuat"&&(V.textContent=Ae),ve=T(r),Z=M(r,"DIV",{class:!0});var Te=H(Z);for(let O=0;O<F.length;O+=1)F[O].l(Te);Te.forEach(k),r.forEach(k),z.forEach(k),this.h()},h(){d(t,"class","material-symbols-outlined open svelte-1elsuy9"),d(a,"class","Devotee svelte-1elsuy9"),d(_,"class","container devotee svelte-1elsuy9"),d(w,"class","Warriors svelte-1elsuy9"),d(y,"class","container warriors svelte-1elsuy9"),d(C,"class","Bards svelte-1elsuy9"),d(g,"class","container bards svelte-1elsuy9"),d(E,"class","Alchemists svelte-1elsuy9"),d(P,"class","container alchemists svelte-1elsuy9"),d(V,"class","Anchorites svelte-1elsuy9"),d(Z,"class","container anchorites svelte-1elsuy9"),d(i,"class","scrollings svelte-1elsuy9"),d(e,"class","diary svelte-1elsuy9")},m(p,z){$(p,e,z),b(e,t),b(e,o),b(e,i),b(i,a),b(i,m),b(i,_);for(let r=0;r<G.length;r+=1)G[r]&&G[r].m(_,null);b(i,c),b(i,w),b(i,n),b(i,y);for(let r=0;r<R.length;r+=1)R[r]&&R[r].m(y,null);b(i,B),b(i,C),b(i,D),b(i,g);for(let r=0;r<N.length;r+=1)N[r]&&N[r].m(g,null);b(i,h),b(i,E),b(i,x),b(i,P);for(let r=0;r<q.length;r+=1)q[r]&&q[r].m(P,null);b(i,v),b(i,V),b(i,ve),b(i,Z);for(let r=0;r<F.length;r+=1)F[r]&&F[r].m(Z,null);l[15](e),ye||(Me=Y(t,"click",l[6]),ye=!0)},p(p,[z]){if(z&129){ee=W(p[0]);let r;for(r=0;r<ee.length;r+=1){const L=Le(p,ee,r);G[r]?G[r].p(L,z):(G[r]=We(L),G[r].c(),G[r].m(_,null))}for(;r<G.length;r+=1)G[r].d(1);G.length=ee.length}if(z&130){te=W(p[1]);let r;for(r=0;r<te.length;r+=1){const L=ze(p,te,r);R[r]?R[r].p(L,z):(R[r]=je(L),R[r].c(),R[r].m(y,null))}for(;r<R.length;r+=1)R[r].d(1);R.length=te.length}if(z&132){le=W(p[2]);let r;for(r=0;r<le.length;r+=1){const L=Fe(p,le,r);N[r]?N[r].p(L,z):(N[r]=Ke(L),N[r].c(),N[r].m(g,null))}for(;r<N.length;r+=1)N[r].d(1);N.length=le.length}if(z&144){se=W(p[4]);let r;for(r=0;r<se.length;r+=1){const L=qe(p,se,r);q[r]?q[r].p(L,z):(q[r]=Ue(L),q[r].c(),q[r].m(P,null))}for(;r<q.length;r+=1)q[r].d(1);q.length=se.length}if(z&136){ne=W(p[3]);let r;for(r=0;r<ne.length;r+=1){const L=Ne(p,ne,r);F[r]?F[r].p(L,z):(F[r]=Je(L),F[r].c(),F[r].m(Z,null))}for(;r<F.length;r+=1)F[r].d(1);F.length=ne.length}},i:j,o:j,d(p){p&&k(e),ue(G,p),ue(R,p),ue(N,p),ue(q,p),ue(F,p),l[15](null),ye=!1,Me()}}}function _t(l,e,t){let{images:s}=e,o=[],i=[],a=[],u=[],m=[];lt(async()=>{s.forEach(h=>{switch(h.type){case"Devotee":t(0,o=[...o,h]);break;case"Warriors":t(1,i=[...i,h]);break;case"Bards":t(2,a=[...a,h]);break;case"Anchorites":t(3,u=[...u,h]);break;case"Alchemists":t(4,m=[...m,h]);break;default:console.log("No type found");break}})});let _=!1,c=null;const w=()=>{_=!_,_?(t(5,c.style.height="50vh",c),setTimeout(()=>{scroll(0,document.body.scrollHeight)},500)):t(5,c.style.height="0",c)};let{phrase:f}=e;const n=h=>{t(8,f=[...f,h]),setTimeout(()=>{scroll(0,document.body.scrollHeight)},20)},y=h=>n(h),B=h=>n(h),C=h=>n(h),I=h=>n(h),D=h=>n(h);function g(h){we[h?"unshift":"push"](()=>{c=h,t(5,c)})}return l.$$set=h=>{"images"in h&&t(9,s=h.images),"phrase"in h&&t(8,f=h.phrase)},[o,i,a,u,m,c,w,n,f,s,y,B,C,I,D,g]}class dt extends fe{constructor(e){super(),_e(this,e,_t,ft,he,{images:9,phrase:8})}}function mt(l){let e,t='Made with ❤️ by <a target="_blank" href="https://www.danieleavolio.it" class="svelte-1ynwsus">Daniele Avolio</a>. Buy <b>Chants Of Sennaar</b> on <a target="_blank" href="https://store.steampowered.com/app/1931770/Chants_of_Sennaar/" class="svelte-1ynwsus">Steam</a>.';return{c(){e=A("footer"),e.innerHTML=t,this.h()},l(s){e=M(s,"FOOTER",{class:!0,"data-svelte-h":!0}),J(e)!=="svelte-y8jfvu"&&(e.innerHTML=t),this.h()},h(){d(e,"class","svelte-1ynwsus")},m(s,o){$(s,e,o)},p:j,i:j,o:j,d(s){s&&k(e)}}}class pt extends fe{constructor(e){super(),_e(this,e,null,mt,he,{})}}function gt(l){let e,t,s,o,i,a,u,m,_,c,w,f,n,y,B,C,I,D,g,h,E,K="Chants of Sennaar Phrases",x,P;return{c(){e=A("meta"),t=S(),s=A("meta"),o=S(),i=A("meta"),a=S(),u=A("meta"),m=S(),_=A("meta"),c=S(),w=A("meta"),f=S(),n=A("meta"),y=S(),B=A("meta"),C=S(),I=A("meta"),D=S(),g=A("meta"),h=S(),E=A("title"),E.textContent=K,x=S(),P=A("link"),this.h()},l(v){e=M(v,"META",{name:!0,content:!0}),t=T(v),s=M(v,"META",{name:!0,content:!0}),o=T(v),i=M(v,"META",{name:!0,content:!0}),a=T(v),u=M(v,"META",{name:!0,content:!0}),m=T(v),_=M(v,"META",{name:!0,content:!0}),c=T(v),w=M(v,"META",{name:!0,content:!0}),f=T(v),n=M(v,"META",{property:!0,content:!0}),y=T(v),B=M(v,"META",{property:!0,content:!0}),C=T(v),I=M(v,"META",{property:!0,content:!0}),D=T(v),g=M(v,"META",{property:!0,content:!0}),h=T(v),E=M(v,"TITLE",{"data-svelte-h":!0}),J(E)!=="svelte-16y4m2o"&&(E.textContent=K),x=T(v),P=M(v,"LINK",{rel:!0,type:!0,href:!0}),this.h()},h(){d(e,"name","description"),d(e,"content",`Chants of Sennaar Phrases is a web app that makes you generate\r
    phrases using glyphs from the game Chants of Sennaar. Remember to support the game on Steam!`),d(s,"name","keywords"),d(s,"content","Chants of Sennaar, Phrases, Generator, Game, Steam, Daniele Avolio"),d(i,"name","author"),d(i,"content","Daniele Avolio"),d(u,"name","viewport"),d(u,"content","width=device-width, initial-scale=1.0"),d(_,"name","robots"),d(_,"content","index, follow"),d(w,"name","googlebot"),d(w,"content","index, follow"),d(n,"property","og:image"),d(n,"content","banner.png"),d(B,"property","og:image:width"),d(B,"content","1200"),d(I,"property","og:image:height"),d(I,"content","630"),d(g,"property","og:image:alt"),d(g,"content","Chants of Sennaar Phrases"),d(P,"rel","icon"),d(P,"type","image/png"),d(P,"href","favicon.png")},m(v,V){$(v,e,V),$(v,t,V),$(v,s,V),$(v,o,V),$(v,i,V),$(v,a,V),$(v,u,V),$(v,m,V),$(v,_,V),$(v,c,V),$(v,w,V),$(v,f,V),$(v,n,V),$(v,y,V),$(v,B,V),$(v,C,V),$(v,I,V),$(v,D,V),$(v,g,V),$(v,h,V),$(v,E,V),$(v,x,V),$(v,P,V)},p:j,i:j,o:j,d(v){v&&(k(e),k(t),k(s),k(o),k(i),k(a),k(u),k(m),k(_),k(c),k(w),k(f),k(n),k(y),k(B),k(C),k(I),k(D),k(g),k(h),k(E),k(x),k(P))}}}class vt extends fe{constructor(e){super(),_e(this,e,null,gt,he,{})}}function yt(l){let e,t,s,o,i,a,u,m,_,c,w;t=new vt({});function f(C){l[2](C)}let n={};l[1]!==void 0&&(n.phrases=l[1]),o=new ht({props:n}),we.push(()=>xe(o,"phrases",f));function y(C){l[3](C)}let B={images:l[0].images};return l[1]!==void 0&&(B.phrase=l[1]),u=new dt({props:B}),we.push(()=>xe(u,"phrase",y)),c=new pt({}),{c(){e=A("main"),de(t.$$.fragment),s=S(),de(o.$$.fragment),a=S(),de(u.$$.fragment),_=S(),de(c.$$.fragment),this.h()},l(C){e=M(C,"MAIN",{class:!0});var I=H(e);me(t.$$.fragment,I),s=T(I),me(o.$$.fragment,I),a=T(I),me(u.$$.fragment,I),_=T(I),me(c.$$.fragment,I),I.forEach(k),this.h()},h(){d(e,"class","svelte-wlh8q")},m(C,I){$(C,e,I),pe(t,e,null),b(e,s),pe(o,e,null),b(e,a),pe(u,e,null),b(e,_),pe(c,e,null),w=!0},p(C,[I]){const D={};!i&&I&2&&(i=!0,D.phrases=C[1],Ve(()=>i=!1)),o.$set(D);const g={};I&1&&(g.images=C[0].images),!m&&I&2&&(m=!0,g.phrase=C[1],Ve(()=>m=!1)),u.$set(g)},i(C){w||(Q(t.$$.fragment,C),Q(o.$$.fragment,C),Q(u.$$.fragment,C),Q(c.$$.fragment,C),w=!0)},o(C){X(t.$$.fragment,C),X(o.$$.fragment,C),X(u.$$.fragment,C),X(c.$$.fragment,C),w=!1},d(C){C&&k(e),ge(t),ge(o),ge(u),ge(c)}}}function bt(l,e,t){let{data:s}=e,o=[];function i(u){o=u,t(1,o)}function a(u){o=u,t(1,o)}return l.$$set=u=>{"data"in u&&t(0,s=u.data)},[s,o,i,a]}class Ct extends fe{constructor(e){super(),_e(this,e,bt,yt,he,{data:0})}}export{Ct as component};
