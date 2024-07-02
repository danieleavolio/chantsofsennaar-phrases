import{n as X,h as Xe,r as et,i as tt,s as pe,y as U,f as ve,o as lt,e as ge,z as Ve}from"../chunks/scheduler.qUOb8npH.js";import{y as st,z as nt,A as it,B as rt,t as Q,a as $,S as me,i as ye,e as C,s as V,c as w,d as B,C as L,h as A,g as D,o as y,j as J,k as v,q as de,n as _e,D as Y,E as ie,b as ae,f as ce,l as oe,F as he,G as Ae,u as Me,v as Be,w as Se,x as He}from"../chunks/index.LGmkCgDF.js";function Ye(l,e,t,r){if(!e)return X;const o=l.getBoundingClientRect();if(e.left===o.left&&e.right===o.right&&e.top===o.top&&e.bottom===o.bottom)return X;const{delay:i=0,duration:a=300,easing:u=Xe,start:g=st()+i,end:_=g+a,tick:f=X,css:k}=t(l,{from:e,to:o},r);let c=!0,s=!1,p;function S(){k&&(p=it(l,0,1,a,i,u,k)),i||(s=!0)}function M(){k&&rt(l,p),c=!1}return nt(q=>{if(!s&&q>=g&&(s=!0),s&&q>=_&&(f(1,0),M()),!c)return!1;if(s){const E=q-g,m=0+1*u(E/a);f(m,1-m)}return!0}),S(),f(0,1),M}function Ze(l){const e=getComputedStyle(l);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:r}=e,o=l.getBoundingClientRect();l.style.position="absolute",l.style.width=t,l.style.height=r,ke(l,o)}}function ke(l,e){const t=l.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const r=getComputedStyle(l),o=r.transform==="none"?"":r.transform;l.style.transform=`${o} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}function F(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function at(l,e){$(l,1,1,()=>{e.delete(l.key)})}function Pe(l,e){l.f(),at(l,e)}function qe(l,e,t,r,o,i,a,u,g,_,f,k){let c=l.length,s=i.length,p=c;const S={};for(;p--;)S[l[p].key]=p;const M=[],q=new Map,E=new Map,m=[];for(p=s;p--;){const I=k(o,i,p),P=t(I);let W=a.get(P);W?r&&m.push(()=>W.p(I,e)):(W=_(P,I),W.c()),q.set(P,M[p]=W),P in S&&E.set(P,Math.abs(p-S[P]))}const h=new Set,b=new Set;function K(I){Q(I,1),I.m(u,f),a.set(I.key,I),f=I.first,s--}for(;c&&s;){const I=M[s-1],P=l[c-1],W=I.key,j=P.key;I===P?(f=I.first,c--,s--):q.has(j)?!a.has(W)||h.has(W)?K(I):b.has(j)?c--:E.get(W)>E.get(j)?(b.add(W),K(I)):(h.add(j),c--):(g(P,a),c--)}for(;c--;){const I=l[c];q.has(I.key)||g(I,a)}for(;s;)K(M[s-1]);return et(m),M}function ct(l){const e=l-1;return e*e*e+1}function $e(l,{from:e,to:t},r={}){const o=getComputedStyle(l),i=o.transform==="none"?"":o.transform,[a,u]=o.transformOrigin.split(" ").map(parseFloat),g=e.left+e.width*a/t.width-(t.left+a),_=e.top+e.height*u/t.height-(t.top+u),{delay:f=0,duration:k=s=>Math.sqrt(s)*120,easing:c=ct}=r;return{delay:f,duration:tt(k)?k(Math.sqrt(g*g+_*_)):k,easing:c,css:(s,p)=>{const S=p*g,M=p*_,q=s+p*e.width/t.width,E=s+p*e.height/t.height;return`transform: ${i} translate(${S}px, ${M}px) scale(${q}, ${E});`}}}function re(l,{delay:e=0,duration:t=400,easing:r=Xe}={}){const o=+getComputedStyle(l).opacity;return{delay:e,duration:t,easing:r,css:i=>`opacity: ${i*o}`}}function Ge(l,e,t){const r=l.slice();return r[5]=e[t],r[7]=t,r}function Ne(l,e,t){const r=l.slice();return r[8]=e[t],r[7]=t,r}function Re(l,e){let t,r,o,i,a,u,g=X,_,f,k;function c(){return e[3](e[7])}return{key:l,first:null,c(){t=C("div"),r=C("img"),i=V(),this.h()},l(s){t=w(s,"DIV",{class:!0});var p=B(t);r=w(p,"IMG",{src:!0}),i=A(p),p.forEach(D),this.h()},h(){U(r.src,o=e[8].path)||y(r,"src",o),y(t,"class","image-container svelte-xip404"),this.first=t},m(s,p){J(s,t,p),v(t,r),v(t,i),_=!0,f||(k=Y(t,"click",c),f=!0)},p(s,p){e=s,(!_||p&1&&!U(r.src,o=e[8].path))&&y(r,"src",o)},r(){u=t.getBoundingClientRect()},f(){Ze(t),g(),ke(t,u)},a(){g(),g=Ye(t,u,$e,{})},i(s){_||(s&&ve(()=>{_&&(a||(a=ie(t,re,{},!0)),a.run(1))}),_=!0)},o(s){s&&(a||(a=ie(t,re,{},!1)),a.run(0)),_=!1},d(s){s&&D(t),s&&a&&a.end(),f=!1,k()}}}function Oe(l,e){let t,r=e[5].text+"",o,i,a,u,g=X,_;return{key:l,first:null,c(){t=C("div"),o=ae(r),i=V(),this.h()},l(f){t=w(f,"DIV",{class:!0});var k=B(t);o=ce(k,r),i=A(k),k.forEach(D),this.h()},h(){y(t,"class","symbol"),this.first=t},m(f,k){J(f,t,k),v(t,o),v(t,i),_=!0},p(f,k){e=f,(!_||k&2)&&r!==(r=e[5].text+"")&&oe(o,r)},r(){u=t.getBoundingClientRect()},f(){Ze(t),g(),ke(t,u)},a(){g(),g=Ye(t,u,$e,{})},i(f){_||(f&&ve(()=>{_&&(a||(a=ie(t,re,{},!0)),a.run(1))}),_=!0)},o(f){f&&(a||(a=ie(t,re,{},!1)),a.run(0)),_=!1},d(f){f&&D(t),f&&a&&a.end()}}}function Te(l){let e,t="Clear",r,o,i,a;return{c(){e=C("button"),e.textContent=t,this.h()},l(u){e=w(u,"BUTTON",{class:!0,"data-svelte-h":!0}),L(e)!=="svelte-1wk4hxw"&&(e.textContent=t),this.h()},h(){y(e,"class","svelte-xip404")},m(u,g){J(u,e,g),o=!0,i||(a=Y(e,"click",l[4]),i=!0)},p:X,i(u){o||(u&&ve(()=>{o&&(r||(r=ie(e,re,{delay:200,duration:500},!0)),r.run(1))}),o=!0)},o(u){u&&(r||(r=ie(e,re,{delay:200,duration:500},!1)),r.run(0)),o=!1},d(u){u&&D(e),u&&r&&r.end(),i=!1,a()}}}function ot(l){let e,t,r="CHANTS OF SENNAAR: THE BOARD",o,i,a=[],u=new Map,g,_,f=[],k=new Map,c,s,p=F(l[0]);const S=m=>m[7];for(let m=0;m<p.length;m+=1){let h=Ne(l,p,m),b=S(h);u.set(b,a[m]=Re(b,h))}let M=F(l[1]);const q=m=>m[7];for(let m=0;m<M.length;m+=1){let h=Ge(l,M,m),b=q(h);k.set(b,f[m]=Oe(b,h))}let E=l[1].length&&Te(l);return{c(){e=C("div"),t=C("h1"),t.textContent=r,o=V(),i=C("div");for(let m=0;m<a.length;m+=1)a[m].c();g=V(),_=C("p");for(let m=0;m<f.length;m+=1)f[m].c();c=V(),E&&E.c(),this.h()},l(m){e=w(m,"DIV",{class:!0});var h=B(e);t=w(h,"H1",{class:!0,"data-svelte-h":!0}),L(t)!=="svelte-1wi1zrn"&&(t.textContent=r),o=A(h),i=w(h,"DIV",{class:!0});var b=B(i);for(let I=0;I<a.length;I+=1)a[I].l(b);b.forEach(D),g=A(h),_=w(h,"P",{class:!0});var K=B(_);for(let I=0;I<f.length;I+=1)f[I].l(K);K.forEach(D),c=A(h),E&&E.l(h),h.forEach(D),this.h()},h(){y(t,"class","svelte-xip404"),y(i,"class","container svelte-xip404"),y(_,"class","phrase svelte-xip404"),y(e,"class","board svelte-xip404")},m(m,h){J(m,e,h),v(e,t),v(e,o),v(e,i);for(let b=0;b<a.length;b+=1)a[b]&&a[b].m(i,null);v(e,g),v(e,_);for(let b=0;b<f.length;b+=1)f[b]&&f[b].m(_,null);v(e,c),E&&E.m(e,null),s=!0},p(m,[h]){if(h&5){p=F(m[0]),de();for(let b=0;b<a.length;b+=1)a[b].r();a=qe(a,h,S,1,m,p,u,i,Pe,Re,null,Ne);for(let b=0;b<a.length;b+=1)a[b].a();_e()}if(h&2){M=F(m[1]),de();for(let b=0;b<f.length;b+=1)f[b].r();f=qe(f,h,q,1,m,M,k,_,Pe,Oe,null,Ge);for(let b=0;b<f.length;b+=1)f[b].a();_e()}m[1].length?E?(E.p(m,h),h&2&&Q(E,1)):(E=Te(m),E.c(),Q(E,1),E.m(e,null)):E&&(de(),$(E,1,1,()=>{E=null}),_e())},i(m){if(!s){for(let h=0;h<p.length;h+=1)Q(a[h]);for(let h=0;h<M.length;h+=1)Q(f[h]);Q(E),s=!0}},o(m){for(let h=0;h<a.length;h+=1)$(a[h]);for(let h=0;h<f.length;h+=1)$(f[h]);$(E),s=!1},d(m){m&&D(e);for(let h=0;h<a.length;h+=1)a[h].d();for(let h=0;h<f.length;h+=1)f[h].d();E&&E.d()}}}function ht(l,e,t){let r,{phrases:o=[]}=e;const i=g=>{console.log(g),t(0,o=o.filter((_,f)=>f!==g))},a=g=>i(g),u=()=>t(0,o=[]);return l.$$set=g=>{"phrases"in g&&t(0,o=g.phrases)},l.$$.update=()=>{l.$$.dirty&1&&t(1,r=o)},[o,r,i,a,u]}class ft extends me{constructor(e){super(),ye(this,e,ht,ot,pe,{phrases:0})}}function xe(l,e,t){const r=l.slice();return r[17]=e[t],r}function ze(l,e,t){const r=l.slice();return r[17]=e[t],r}function We(l,e,t){const r=l.slice();return r[17]=e[t],r}function Fe(l,e,t){const r=l.slice();return r[17]=e[t],r}function je(l,e,t){const r=l.slice();return r[17]=e[t],r}function Ue(l){let e,t,r,o,i,a=l[17].text+"",u,g,_,f;function k(){return l[10](l[17])}return{c(){e=C("div"),t=C("img"),o=V(),i=C("p"),u=ae(a),g=V(),this.h()},l(c){e=w(c,"DIV",{class:!0});var s=B(e);t=w(s,"IMG",{src:!0,alt:!0}),o=A(s),i=w(s,"P",{class:!0});var p=B(i);u=ce(p,a),p.forEach(D),g=A(s),s.forEach(D),this.h()},h(){U(t.src,r=l[17].path)||y(t,"src",r),y(t,"alt","Devotee"),y(i,"class","name svelte-1elsuy9"),y(e,"class","image-container svelte-1elsuy9")},m(c,s){J(c,e,s),v(e,t),v(e,o),v(e,i),v(i,u),v(e,g),_||(f=Y(e,"click",k),_=!0)},p(c,s){l=c,s&1&&!U(t.src,r=l[17].path)&&y(t,"src",r),s&1&&a!==(a=l[17].text+"")&&oe(u,a)},d(c){c&&D(e),_=!1,f()}}}function Je(l){let e,t,r,o,i,a=l[17].text+"",u,g,_,f;function k(){return l[11](l[17])}return{c(){e=C("div"),t=C("img"),o=V(),i=C("p"),u=ae(a),g=V(),this.h()},l(c){e=w(c,"DIV",{class:!0});var s=B(e);t=w(s,"IMG",{src:!0,alt:!0}),o=A(s),i=w(s,"P",{class:!0});var p=B(i);u=ce(p,a),p.forEach(D),g=A(s),s.forEach(D),this.h()},h(){U(t.src,r=l[17].path)||y(t,"src",r),y(t,"alt","Warrior"),y(i,"class","name svelte-1elsuy9"),y(e,"class","image-container svelte-1elsuy9")},m(c,s){J(c,e,s),v(e,t),v(e,o),v(e,i),v(i,u),v(e,g),_||(f=Y(e,"click",k),_=!0)},p(c,s){l=c,s&2&&!U(t.src,r=l[17].path)&&y(t,"src",r),s&2&&a!==(a=l[17].text+"")&&oe(u,a)},d(c){c&&D(e),_=!1,f()}}}function Ke(l){let e,t,r,o,i,a=l[17].text+"",u,g,_,f;function k(){return l[12](l[17])}return{c(){e=C("div"),t=C("img"),o=V(),i=C("p"),u=ae(a),g=V(),this.h()},l(c){e=w(c,"DIV",{class:!0});var s=B(e);t=w(s,"IMG",{src:!0,alt:!0}),o=A(s),i=w(s,"P",{class:!0});var p=B(i);u=ce(p,a),p.forEach(D),g=A(s),s.forEach(D),this.h()},h(){U(t.src,r=l[17].path)||y(t,"src",r),y(t,"alt","Bard"),y(i,"class","name svelte-1elsuy9"),y(e,"class","image-container svelte-1elsuy9")},m(c,s){J(c,e,s),v(e,t),v(e,o),v(e,i),v(i,u),v(e,g),_||(f=Y(e,"click",k),_=!0)},p(c,s){l=c,s&4&&!U(t.src,r=l[17].path)&&y(t,"src",r),s&4&&a!==(a=l[17].text+"")&&oe(u,a)},d(c){c&&D(e),_=!1,f()}}}function Le(l){let e,t,r,o,i,a=l[17].text+"",u,g,_,f;function k(){return l[13](l[17])}return{c(){e=C("div"),t=C("img"),o=V(),i=C("p"),u=ae(a),g=V(),this.h()},l(c){e=w(c,"DIV",{class:!0});var s=B(e);t=w(s,"IMG",{src:!0,alt:!0}),o=A(s),i=w(s,"P",{class:!0});var p=B(i);u=ce(p,a),p.forEach(D),g=A(s),s.forEach(D),this.h()},h(){U(t.src,r=l[17].path)||y(t,"src",r),y(t,"alt","Alchemist"),y(i,"class","name svelte-1elsuy9"),y(e,"class","image-container svelte-1elsuy9")},m(c,s){J(c,e,s),v(e,t),v(e,o),v(e,i),v(i,u),v(e,g),_||(f=Y(e,"click",k),_=!0)},p(c,s){l=c,s&16&&!U(t.src,r=l[17].path)&&y(t,"src",r),s&16&&a!==(a=l[17].text+"")&&oe(u,a)},d(c){c&&D(e),_=!1,f()}}}function Qe(l){let e,t,r,o,i,a=l[17].text+"",u,g,_,f;function k(){return l[14](l[17])}return{c(){e=C("div"),t=C("img"),o=V(),i=C("p"),u=ae(a),g=V(),this.h()},l(c){e=w(c,"DIV",{class:!0});var s=B(e);t=w(s,"IMG",{src:!0,alt:!0}),o=A(s),i=w(s,"P",{class:!0});var p=B(i);u=ce(p,a),p.forEach(D),g=A(s),s.forEach(D),this.h()},h(){U(t.src,r=l[17].path)||y(t,"src",r),y(t,"alt","Anchorite"),y(i,"class","name svelte-1elsuy9"),y(e,"class","image-container svelte-1elsuy9")},m(c,s){J(c,e,s),v(e,t),v(e,o),v(e,i),v(i,u),v(e,g),_||(f=Y(e,"click",k),_=!0)},p(c,s){l=c,s&8&&!U(t.src,r=l[17].path)&&y(t,"src",r),s&8&&a!==(a=l[17].text+"")&&oe(u,a)},d(c){c&&D(e),_=!1,f()}}}function ut(l){let e,t,r="apps",o,i,a,u="Devotee",g,_,f,k,c="Warriors",s,p,S,M,q="Bards",E,m,h,b,K="Alchemists",I,P,W,j,be="Anchorites",fe,Z,ue,Ce,ee=F(l[0]),G=[];for(let d=0;d<ee.length;d+=1)G[d]=Ue(je(l,ee,d));let te=F(l[1]),N=[];for(let d=0;d<te.length;d+=1)N[d]=Je(Fe(l,te,d));let le=F(l[2]),R=[];for(let d=0;d<le.length;d+=1)R[d]=Ke(We(l,le,d));let se=F(l[4]),O=[];for(let d=0;d<se.length;d+=1)O[d]=Le(ze(l,se,d));let ne=F(l[3]),T=[];for(let d=0;d<ne.length;d+=1)T[d]=Qe(xe(l,ne,d));return{c(){e=C("div"),t=C("span"),t.textContent=r,o=V(),i=C("div"),a=C("h2"),a.textContent=u,g=V(),_=C("div");for(let d=0;d<G.length;d+=1)G[d].c();f=V(),k=C("h2"),k.textContent=c,s=V(),p=C("div");for(let d=0;d<N.length;d+=1)N[d].c();S=V(),M=C("h2"),M.textContent=q,E=V(),m=C("div");for(let d=0;d<R.length;d+=1)R[d].c();h=V(),b=C("h2"),b.textContent=K,I=V(),P=C("div");for(let d=0;d<O.length;d+=1)O[d].c();W=V(),j=C("h2"),j.textContent=be,fe=V(),Z=C("div");for(let d=0;d<T.length;d+=1)T[d].c();this.h()},l(d){e=w(d,"DIV",{class:!0});var x=B(e);t=w(x,"SPAN",{class:!0,"data-svelte-h":!0}),L(t)!=="svelte-1ftw9wh"&&(t.textContent=r),o=A(x),i=w(x,"DIV",{class:!0});var n=B(i);a=w(n,"H2",{class:!0,"data-svelte-h":!0}),L(a)!=="svelte-c98ul"&&(a.textContent=u),g=A(n),_=w(n,"DIV",{class:!0});var z=B(_);for(let H=0;H<G.length;H+=1)G[H].l(z);z.forEach(D),f=A(n),k=w(n,"H2",{class:!0,"data-svelte-h":!0}),L(k)!=="svelte-q9lkmt"&&(k.textContent=c),s=A(n),p=w(n,"DIV",{class:!0});var we=B(p);for(let H=0;H<N.length;H+=1)N[H].l(we);we.forEach(D),S=A(n),M=w(n,"H2",{class:!0,"data-svelte-h":!0}),L(M)!=="svelte-1sg38yt"&&(M.textContent=q),E=A(n),m=w(n,"DIV",{class:!0});var Ee=B(m);for(let H=0;H<R.length;H+=1)R[H].l(Ee);Ee.forEach(D),h=A(n),b=w(n,"H2",{class:!0,"data-svelte-h":!0}),L(b)!=="svelte-1abgt7h"&&(b.textContent=K),I=A(n),P=w(n,"DIV",{class:!0});var De=B(P);for(let H=0;H<O.length;H+=1)O[H].l(De);De.forEach(D),W=A(n),j=w(n,"H2",{class:!0,"data-svelte-h":!0}),L(j)!=="svelte-hhzuat"&&(j.textContent=be),fe=A(n),Z=w(n,"DIV",{class:!0});var Ie=B(Z);for(let H=0;H<T.length;H+=1)T[H].l(Ie);Ie.forEach(D),n.forEach(D),x.forEach(D),this.h()},h(){y(t,"class","material-symbols-outlined open svelte-1elsuy9"),y(a,"class","Devotee svelte-1elsuy9"),y(_,"class","container devotee svelte-1elsuy9"),y(k,"class","Warriors svelte-1elsuy9"),y(p,"class","container warriors svelte-1elsuy9"),y(M,"class","Bards svelte-1elsuy9"),y(m,"class","container bards svelte-1elsuy9"),y(b,"class","Alchemists svelte-1elsuy9"),y(P,"class","container alchemists svelte-1elsuy9"),y(j,"class","Anchorites svelte-1elsuy9"),y(Z,"class","container anchorites svelte-1elsuy9"),y(i,"class","scrollings svelte-1elsuy9"),y(e,"class","diary svelte-1elsuy9")},m(d,x){J(d,e,x),v(e,t),v(e,o),v(e,i),v(i,a),v(i,g),v(i,_);for(let n=0;n<G.length;n+=1)G[n]&&G[n].m(_,null);v(i,f),v(i,k),v(i,s),v(i,p);for(let n=0;n<N.length;n+=1)N[n]&&N[n].m(p,null);v(i,S),v(i,M),v(i,E),v(i,m);for(let n=0;n<R.length;n+=1)R[n]&&R[n].m(m,null);v(i,h),v(i,b),v(i,I),v(i,P);for(let n=0;n<O.length;n+=1)O[n]&&O[n].m(P,null);v(i,W),v(i,j),v(i,fe),v(i,Z);for(let n=0;n<T.length;n+=1)T[n]&&T[n].m(Z,null);l[15](e),ue||(Ce=Y(t,"click",l[6]),ue=!0)},p(d,[x]){if(x&129){ee=F(d[0]);let n;for(n=0;n<ee.length;n+=1){const z=je(d,ee,n);G[n]?G[n].p(z,x):(G[n]=Ue(z),G[n].c(),G[n].m(_,null))}for(;n<G.length;n+=1)G[n].d(1);G.length=ee.length}if(x&130){te=F(d[1]);let n;for(n=0;n<te.length;n+=1){const z=Fe(d,te,n);N[n]?N[n].p(z,x):(N[n]=Je(z),N[n].c(),N[n].m(p,null))}for(;n<N.length;n+=1)N[n].d(1);N.length=te.length}if(x&132){le=F(d[2]);let n;for(n=0;n<le.length;n+=1){const z=We(d,le,n);R[n]?R[n].p(z,x):(R[n]=Ke(z),R[n].c(),R[n].m(m,null))}for(;n<R.length;n+=1)R[n].d(1);R.length=le.length}if(x&144){se=F(d[4]);let n;for(n=0;n<se.length;n+=1){const z=ze(d,se,n);O[n]?O[n].p(z,x):(O[n]=Le(z),O[n].c(),O[n].m(P,null))}for(;n<O.length;n+=1)O[n].d(1);O.length=se.length}if(x&136){ne=F(d[3]);let n;for(n=0;n<ne.length;n+=1){const z=xe(d,ne,n);T[n]?T[n].p(z,x):(T[n]=Qe(z),T[n].c(),T[n].m(Z,null))}for(;n<T.length;n+=1)T[n].d(1);T.length=ne.length}},i:X,o:X,d(d){d&&D(e),he(G,d),he(N,d),he(R,d),he(O,d),he(T,d),l[15](null),ue=!1,Ce()}}}function dt(l,e,t){let{images:r}=e,o=[],i=[],a=[],u=[],g=[];lt(async()=>{r.forEach(h=>{switch(h.type){case"Devotee":t(0,o=[...o,h]);break;case"Warriors":t(1,i=[...i,h]);break;case"Bards":t(2,a=[...a,h]);break;case"Anchorites":t(3,u=[...u,h]);break;case"Alchemists":t(4,g=[...g,h]);break;default:console.log("No type found");break}})});let _=!1,f=null;const k=()=>{_=!_,_?(t(5,f.style.height="50vh",f),setTimeout(()=>{scroll(0,document.body.scrollHeight)},500)):t(5,f.style.height="0",f)};let{phrase:c}=e;const s=h=>{t(8,c=[...c,h]),setTimeout(()=>{scroll(0,document.body.scrollHeight)},20)},p=h=>s(h),S=h=>s(h),M=h=>s(h),q=h=>s(h),E=h=>s(h);function m(h){ge[h?"unshift":"push"](()=>{f=h,t(5,f)})}return l.$$set=h=>{"images"in h&&t(9,r=h.images),"phrase"in h&&t(8,c=h.phrase)},[o,i,a,u,g,f,k,s,c,r,p,S,M,q,E,m]}class _t extends me{constructor(e){super(),ye(this,e,dt,ut,pe,{images:9,phrase:8})}}function gt(l){let e,t,r,o,i,a,u;function g(c){l[2](c)}let _={};l[1]!==void 0&&(_.phrases=l[1]),t=new ft({props:_}),ge.push(()=>Ae(t,"phrases",g));function f(c){l[3](c)}let k={images:l[0].images};return l[1]!==void 0&&(k.phrase=l[1]),i=new _t({props:k}),ge.push(()=>Ae(i,"phrase",f)),{c(){e=C("main"),Me(t.$$.fragment),o=V(),Me(i.$$.fragment),this.h()},l(c){e=w(c,"MAIN",{class:!0});var s=B(e);Be(t.$$.fragment,s),o=A(s),Be(i.$$.fragment,s),s.forEach(D),this.h()},h(){y(e,"class","svelte-wlh8q")},m(c,s){J(c,e,s),Se(t,e,null),v(e,o),Se(i,e,null),u=!0},p(c,[s]){const p={};!r&&s&2&&(r=!0,p.phrases=c[1],Ve(()=>r=!1)),t.$set(p);const S={};s&1&&(S.images=c[0].images),!a&&s&2&&(a=!0,S.phrase=c[1],Ve(()=>a=!1)),i.$set(S)},i(c){u||(Q(t.$$.fragment,c),Q(i.$$.fragment,c),u=!0)},o(c){$(t.$$.fragment,c),$(i.$$.fragment,c),u=!1},d(c){c&&D(e),He(t),He(i)}}}function pt(l,e,t){let{data:r}=e,o=[];function i(u){o=u,t(1,o)}function a(u){o=u,t(1,o)}return l.$$set=u=>{"data"in u&&t(0,r=u.data)},[r,o,i,a]}class yt extends me{constructor(e){super(),ye(this,e,pt,gt,pe,{data:0})}}export{yt as component};
