(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(4),a=c.n(r),j=(c(9),c(2)),i=(c(10),c(0));function l(e){var t=e.CAplus,c=e.x_,n=e.x_2,s=e.sumFD,r=e.FreXD,a=e.D_,j=e.A_,l=e.sumFixi,u=e.frequencyTotal,d=e.PercentageFrequency,b=e.RelativeFrequency,O=e.frequencyDensity,h=e.freXmid,o=e.classRange,x=e.lcf,m=e.hcf,f=e.highClass,p=e.lowClass,v=e.frequency,g=e.classes,y=e.midPoints;return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("table",{id:"customers",children:Object(i.jsxs)("tbody",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("strong",{children:"Class"})}),Object(i.jsx)("td",{children:Object(i.jsx)("strong",{children:"Frequency (fi)"})}),Object(i.jsx)("td",{children:Object(i.jsx)("strong",{children:"Less Than Cumulative Frequency (L.c.f)"})}),Object(i.jsx)("td",{children:Object(i.jsx)("strong",{children:"Greater Than Cumulative Frequency (M.c.f)"})}),Object(i.jsx)("td",{children:Object(i.jsx)("strong",{children:"Upper Class Limit (u/h)"})}),Object(i.jsx)("td",{children:Object(i.jsx)("strong",{children:"Lower Class Limit (s/L)"})}),Object(i.jsx)("td",{children:Object(i.jsx)("strong",{children:"Middle Points (xi)"})}),Object(i.jsx)("td",{children:Object(i.jsx)("strong",{children:"Class Range (c)"})}),Object(i.jsx)("td",{children:Object(i.jsx)("strong",{children:"Frequency Density (fi/c)"})}),Object(i.jsx)("td",{children:Object(i.jsx)("strong",{children:"Relative Frequency (fi/N)"})}),Object(i.jsx)("td",{children:Object(i.jsx)("strong",{children:"Percentage Frequency (fi/N)*100%"})}),t?Object(i.jsx)("td",{children:Object(i.jsxs)("strong",{children:["d=(x-",j,")/range"]})}):Object(i.jsx)("td",{children:Object(i.jsxs)("strong",{children:["d=(x-",j,")"]})}),Object(i.jsx)("td",{children:Object(i.jsx)("strong",{children:"Frequency * d"})}),Object(i.jsx)("td",{children:Object(i.jsx)("strong",{children:"Frequency * Mid Points (fixi)"})})]}),g.map((function(e,t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e}),Object(i.jsx)("td",{children:v[t]}),Object(i.jsx)("td",{children:x[t]}),Object(i.jsx)("td",{children:m[t]}),Object(i.jsx)("td",{children:p[t]}),Object(i.jsx)("td",{children:f[t]}),Object(i.jsx)("td",{children:y[t]}),Object(i.jsx)("td",{children:o[t]}),Object(i.jsx)("td",{children:O[t]}),Object(i.jsx)("td",{children:b[t]}),Object(i.jsx)("td",{children:d[t]}),Object(i.jsx)("td",{children:a[t]}),Object(i.jsx)("td",{children:r[t]}),Object(i.jsx)("td",{children:h[t]})]},t)}))]})}),Object(i.jsxs)("div",{className:"answers",children:[t?Object(i.jsxs)("div",{className:"",children:[Object(i.jsx)("strong",{className:"",children:" Range (C): "})," ",o[0],"  "]}):null,Object(i.jsxs)("div",{className:"",children:[Object(i.jsx)("strong",{className:"",children:" A : "})," ",j,"  "]}),Object(i.jsxs)("div",{className:"",children:[Object(i.jsx)("strong",{className:"",children:"Sum of Frequency (N) : "})," ",u,"  "]}),Object(i.jsxs)("div",{className:"",children:[Object(i.jsx)("strong",{className:"",children:" Sum of Frequency & d (x) : "})," ",s,"  "]}),Object(i.jsxs)("div",{className:"",children:[Object(i.jsx)("strong",{className:"",children:" Sum of Frequency & midPoints (x) (sum fixi) : "})," ",l,"  "]}),Object(i.jsxs)("div",{className:"",children:[Object(i.jsx)("strong",{className:"",children:" x_ (sortMethod) : "})," ",c,"  "]}),Object(i.jsxs)("div",{className:"",children:[Object(i.jsx)("strong",{className:"",children:" x_ (MainMethod) : "})," ",n," "]})]})]})}c(12);function u(e){var t=e.clearAll,c=e.frequency,n=e.classes,s=e.setStateC,r=e.setStateF,a=e.send;return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h3",{className:"header",children:"Making Statistics Math App"}),Object(i.jsx)("button",{onClick:function(){t()},className:"btn-clear",children:"  Clear "}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(i.jsxs)("h3",{className:"header small",children:["Please Enter your ",Object(i.jsx)("strong",{children:"classes"})]}),Object(i.jsxs)("div",{className:"inputs-area",children:[" ",Object(i.jsx)("textarea",{value:n,onChange:function(e){s(e.target.value)},className:"input",placeholder:"10-20,20-30...."})," "]}),Object(i.jsxs)("h3",{className:"header small",children:["Please Enter your ",Object(i.jsx)("strong",{children:"Frequency"})," "]}),Object(i.jsxs)("div",{className:"inputs-area",children:[" ",Object(i.jsx)("textarea",{value:c,onChange:function(e){r(e.target.value)},className:"input",placeholder:"5,8,7,10,2,1,3...."})," "]}),Object(i.jsx)("button",{onClick:function(){a()},className:"btn-send",children:"Send"})]})]})}var d=function(){var e=Object(n.useState)("10-20,20-30,30-40,40-50,50-60,60-70,70-200"),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),a=Object(j.a)(r,2),d=a[0],b=a[1],O=Object(n.useState)(""),h=Object(j.a)(O,2),o=h[0],x=h[1],m=Object(n.useState)("15,12,13,18,17,27,10"),f=Object(j.a)(m,2),p=f[0],v=f[1],g=Object(n.useState)(""),y=Object(j.a)(g,2),S=y[0],N=y[1],F=Object(n.useState)(""),q=Object(j.a)(F,2),C=q[0],D=q[1],P=Object(n.useState)(""),_=Object(j.a)(P,2),M=_[0],A=_[1],R=Object(n.useState)(""),w=Object(j.a)(R,2),L=w[0],k=w[1],I=Object(n.useState)(""),T=Object(j.a)(I,2),X=T[0],E=T[1],J=Object(n.useState)(""),B=Object(j.a)(J,2),G=B[0],U=B[1],z=Object(n.useState)(""),H=Object(j.a)(z,2),K=H[0],Q=H[1],V=Object(n.useState)(""),W=Object(j.a)(V,2),Y=W[0],Z=W[1],$=Object(n.useState)(""),ee=Object(j.a)($,2),te=ee[0],ce=ee[1],ne=Object(n.useState)(""),se=Object(j.a)(ne,2),re=se[0],ae=se[1],je=Object(n.useState)(""),ie=Object(j.a)(je,2),le=ie[0],ue=ie[1],de=Object(n.useState)(""),be=Object(j.a)(de,2),Oe=be[0],he=be[1],oe=Object(n.useState)(""),xe=Object(j.a)(oe,2),me=xe[0],fe=xe[1],pe=Object(n.useState)(""),ve=Object(j.a)(pe,2),ge=ve[0],ye=ve[1],Se=Object(n.useState)(""),Ne=Object(j.a)(Se,2),Fe=Ne[0],qe=Ne[1],Ce=Object(n.useState)(""),De=Object(j.a)(Ce,2),Pe=De[0],_e=De[1],Me=Object(n.useState)(""),Ae=Object(j.a)(Me,2),Re=Ae[0],we=Ae[1],Le=Object(n.useState)(!1),ke=Object(j.a)(Le,2),Ie=ke[0],Te=ke[1];return Object(i.jsxs)("div",{className:"",children:[Object(i.jsx)(u,{frequency:p,classes:c,setStateF:function(e){v((function(){return e})),Te(!1)},setStateC:function(e){s((function(){return e})),Te(!1)},send:function(){var e=c.split(",");s(e);var t=e.map((function(e){return e.split("-")[0]}));t=t.map((function(e){return parseInt(e)})),x(t);var n=e.map((function(e){return e.split("-")[1]}));n=n.map((function(e){return parseInt(e)})),b(n);var r=t.map((function(e,t){return(e+n[t])/2}));E((function(){return r}));var a=p.split(",");a=a.map((function(e){return parseInt(e)})),v((function(){return a}));var j=0;a.map((function(e){return j+=e})),fe(j);var i=t.map((function(e,t){return n[t]-e}));ue(i);var l=[];a.map((function(e,t){return 0===t?(l.push(e),e):(l.push(l[l.length-1]+e),l[l.length-1]+e)})),Q(l);var u=[];(a=a.reverse()).map((function(e,t){return 0===t?(u.push(e),e):(u.push(u[u.length-1]+e),u[u.length-1]+e)})),u=u.reverse(),Z(u);var d=(a=a.reverse()).map((function(e,t){return(e/i[t]).toFixed(3)}));ce((function(){return d}));var O=a.map((function(e){return(e/j).toFixed(3)}));ae(O);var h=O.map((function(e){return(100*e).toFixed(2)+"%"}));he(h);var o=r[parseInt(r.length/2)];D(o);var m=0;i.map((function(e,t){return m+=e}));var f=m/i.length,g=!0;g=f===i[0],k(g);var y=r.map((function(e){return g?(e-o)/i[0]:e-o}));N(y);var S=y.map((function(e,t){return a[t]*e}));A(S);var F=a.map((function(e,t){return e*r[t]}));U(F);var q=0;F.map((function(e){return q+=e})),ye(q);var C,P=0;S.map((function(e){return P+=e})),qe(P),C=g?o+P/j*i[0]:o+P/j,_e(C),we(q/j),Te(!0)},clearAll:function(){s(""),b(""),x(""),v(""),N(""),D(""),A(""),k(""),E(""),U(""),Q(""),Z(""),ce(""),ae(""),ue(""),he(""),fe(""),ye(""),qe(""),_e(""),we(""),Te(!1)}}),Ie?Object(i.jsx)(l,{lcf:K,hcf:Y,classRange:le,freXmid:G,frequencyDensity:te,RelativeFrequency:re,PercentageFrequency:Oe,CAplus:L,D_:S,A_:C,FreXD:M,highClass:d,lowClass:o,frequency:p,classes:c,midPoints:X,frequencyTotal:me,sumFixi:ge,sumFD:Fe,x_:Pe,x_2:Re}):0]})};function b(){return Object(i.jsx)("div",{children:Object(i.jsx)(d,{})})}a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.b64a7a10.chunk.js.map