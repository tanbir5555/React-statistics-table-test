(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(4),a=c.n(r),j=(c(9),c(2)),l=(c(10),c(0));function i(e){var t=e.CAplus,c=e.x_,s=e.x_2,n=e.sumFD,r=e.FreXD,a=e.D_,j=e.A_,i=e.sumFixi,d=e.frequencyTotal,u=e.PercentageFrequency,o=e.RelativeFrequency,b=e.frequencyDensity,O=e.freXmid,h=e.classRange,x=e.lcf,m=e.hcf,g=e.highClass,f=e.lowClass,v=e.frequency,p=e.classes,y=e.midPoints;return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("table",{id:"customers",children:Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("strong",{children:"classes"})}),Object(l.jsx)("td",{children:Object(l.jsx)("strong",{children:"frequency"})}),Object(l.jsx)("td",{children:Object(l.jsx)("strong",{children:"Less Than  Cumulative Frequency "})}),Object(l.jsx)("td",{children:Object(l.jsx)("strong",{children:"Greater Than  Cumulative Frequency"})}),Object(l.jsx)("td",{children:Object(l.jsx)("strong",{children:"highClass"})}),Object(l.jsx)("td",{children:Object(l.jsx)("strong",{children:"lowClass"})}),Object(l.jsx)("td",{children:Object(l.jsx)("strong",{children:"midPoints"})}),Object(l.jsx)("td",{children:Object(l.jsx)("strong",{children:"classRange"})}),Object(l.jsx)("td",{children:Object(l.jsx)("strong",{children:"fixi"})}),Object(l.jsx)("td",{children:Object(l.jsx)("strong",{children:"frequencyDensity"})}),Object(l.jsx)("td",{children:Object(l.jsx)("strong",{children:"RelativeFrequency"})}),Object(l.jsx)("td",{children:Object(l.jsx)("strong",{children:"PercentageFrequency"})}),t?Object(l.jsx)("td",{children:Object(l.jsxs)("strong",{children:["d=(x-",j,")/range"]})}):Object(l.jsx)("td",{children:Object(l.jsxs)("strong",{children:["d=(x-",j,")"]})}),Object(l.jsx)("td",{children:Object(l.jsx)("strong",{children:"Frequency*d"})}),Object(l.jsx)("td",{children:Object(l.jsx)("strong",{children:"Frequency*middlePoint"})})]}),p.map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e}),Object(l.jsx)("td",{children:v[t]}),Object(l.jsx)("td",{children:x[t]}),Object(l.jsx)("td",{children:m[t]}),Object(l.jsx)("td",{children:f[t]}),Object(l.jsx)("td",{children:g[t]}),Object(l.jsx)("td",{children:y[t]}),Object(l.jsx)("td",{children:h[t]}),Object(l.jsx)("td",{children:O[t]}),Object(l.jsx)("td",{children:b[t]}),Object(l.jsx)("td",{children:o[t]}),Object(l.jsx)("td",{children:u[t]}),Object(l.jsx)("td",{children:a[t]}),Object(l.jsx)("td",{children:r[t]}),Object(l.jsx)("td",{children:O[t]})]},t)}))]})}),Object(l.jsxs)("div",{className:"answers",children:[t?Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)("strong",{className:"",children:" Range (C): "})," ",h[0],"  "]}):null,Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)("strong",{className:"",children:" A : "})," ",j,"  "]}),Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)("strong",{className:"",children:"Sum of Frequency (N) : "})," ",d,"  "]}),Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)("strong",{className:"",children:" Sum of Frequency & d (x) : "})," ",n,"  "]}),Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)("strong",{className:"",children:" Sum of Frequency & midPoints (x) (sum fixi) : "})," ",i,"  "]}),Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)("strong",{className:"",children:" x_ (sortMethod) : "})," ",c,"  "]}),Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)("strong",{className:"",children:" x_ (MainMethod) : "})," ",s," "]})]})]})}c(12);function d(e){var t=e.frequency,c=e.classes,s=e.setStateC,n=e.setStateF,r=e.send;return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h3",{className:"header",children:"Making Statistics Math App"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(l.jsxs)("h3",{className:"header small",children:["Please Enter your ",Object(l.jsx)("strong",{children:"classes"})]}),Object(l.jsxs)("div",{className:"inputs-area",children:[" ",Object(l.jsx)("textarea",{value:c,onChange:function(e){s(e.target.value)},className:"input",placeholder:"10-20,20-30...."})," "]}),Object(l.jsxs)("h3",{className:"header small",children:["Please Enter your ",Object(l.jsx)("strong",{children:"Frequency"})," "]}),Object(l.jsxs)("div",{className:"inputs-area",children:[" ",Object(l.jsx)("textarea",{value:t,onChange:function(e){n(e.target.value)},className:"input",placeholder:"5,8,7,10,2,1,3...."})," "]}),Object(l.jsx)("button",{onClick:function(){r()},className:"btn-send",children:"Send"})]})]})}var u=function(){var e=Object(s.useState)("10-20,20-30,30-40,40-50,50-60,60-70,70-200"),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(""),a=Object(j.a)(r,2),u=a[0],o=a[1],b=Object(s.useState)(""),O=Object(j.a)(b,2),h=O[0],x=O[1],m=Object(s.useState)("15,12,13,18,17,27,10"),g=Object(j.a)(m,2),f=g[0],v=g[1],p=Object(s.useState)(""),y=Object(j.a)(p,2),S=y[0],F=y[1],N=Object(s.useState)(""),q=Object(j.a)(N,2),C=q[0],P=q[1],D=Object(s.useState)(""),_=Object(j.a)(D,2),T=_[0],R=_[1],w=Object(s.useState)(""),A=Object(j.a)(w,2),M=A[0],I=A[1],k=Object(s.useState)(""),X=Object(j.a)(k,2),E=X[0],J=X[1],B=Object(s.useState)(""),G=Object(j.a)(B,2),L=G[0],z=G[1],H=Object(s.useState)(""),K=Object(j.a)(H,2),Q=K[0],U=K[1],V=Object(s.useState)(""),W=Object(j.a)(V,2),Y=W[0],Z=W[1],$=Object(s.useState)(""),ee=Object(j.a)($,2),te=ee[0],ce=ee[1],se=Object(s.useState)(""),ne=Object(j.a)(se,2),re=ne[0],ae=ne[1],je=Object(s.useState)(""),le=Object(j.a)(je,2),ie=le[0],de=le[1],ue=Object(s.useState)(""),oe=Object(j.a)(ue,2),be=oe[0],Oe=oe[1],he=Object(s.useState)(""),xe=Object(j.a)(he,2),me=xe[0],ge=xe[1],fe=Object(s.useState)(""),ve=Object(j.a)(fe,2),pe=ve[0],ye=ve[1],Se=Object(s.useState)(""),Fe=Object(j.a)(Se,2),Ne=Fe[0],qe=Fe[1],Ce=Object(s.useState)(""),Pe=Object(j.a)(Ce,2),De=Pe[0],_e=Pe[1],Te=Object(s.useState)(""),Re=Object(j.a)(Te,2),we=Re[0],Ae=Re[1],Me=Object(s.useState)(!1),Ie=Object(j.a)(Me,2),ke=Ie[0],Xe=Ie[1];return Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)(d,{frequency:f,classes:c,setStateF:function(e){v((function(){return e})),Xe(!1)},setStateC:function(e){n((function(){return e})),Xe(!1)},send:function(){console.log(c),console.log(f);var e=c.split(",");n(e);var t=e.map((function(e){return e.split("-")[0]}));t=t.map((function(e){return parseInt(e)})),x(t);var s=e.map((function(e){return e.split("-")[1]}));s=s.map((function(e){return parseInt(e)})),o(s);var r=t.map((function(e,t){return(e+s[t])/2}));console.log(r),J((function(){return r}));var a=f.split(",");a=a.map((function(e){return parseInt(e)})),v((function(){return a}));var j=0;a.map((function(e){return j+=e})),ge(j),console.log("frequencyTotal : ",j);var l=t.map((function(e,t){return s[t]-e}));de(l);var i=[];a.map((function(e,t){return 0===t?(i.push(e),e):(i.push(i[i.length-1]+e),i[i.length-1]+e)})),U(i),console.log("lessThanCF :",i);var d=[];(a=a.reverse()).map((function(e,t){return 0===t?(d.push(e),e):(d.push(d[d.length-1]+e),d[d.length-1]+e)})),d=d.reverse(),Z(d),console.log("greaterThanCF :",d);var u=(a=a.reverse()).map((function(e,t){return e/l[t]}));ce((function(){return u})),console.log("setFrequencyDensity : ",u);var b=a.map((function(e){return(e/j).toFixed(3)}));ae(b),console.log("RelativeF :",b);var O=b.map((function(e){return(100*e).toFixed(2)+"%"}));Oe(O),console.log("setPercentageFrequency :",O);var h=r[parseInt(r.length/2)];P(h);var m=0;l.map((function(e,t){return m+=e}));var g=m/l.length,p=!0;p=g===l[0],I(p);var y=r.map((function(e){return p?(console.log("same distance range"),(e-h)/l[0]):(console.log("NOT same distance range"),e-h)}));F(y);var S=y.map((function(e,t){return a[t]*e}));R(S);var N=a.map((function(e,t){return e*r[t]}));z(N);var q=0;N.map((function(e){return q+=e})),ye(q);var C,D=0;S.map((function(e){return D+=e})),qe(D),p?(C=h+D/j*l[0],console.log("CPlus : True")):(C=h+D/j,console.log("CPlus : false")),_e(C),console.log(C),Ae(q/j),Xe(!0)}}),ke?Object(l.jsx)(i,{lcf:Q,hcf:Y,classRange:ie,freXmid:L,frequencyDensity:te,RelativeFrequency:re,PercentageFrequency:be,CAplus:M,D_:S,A_:C,FreXD:T,highClass:u,lowClass:h,frequency:f,classes:c,midPoints:E,frequencyTotal:me,sumFixi:pe,sumFD:Ne,x_:De,x_2:we}):0]})};function o(){return Object(l.jsx)("div",{children:Object(l.jsx)(u,{})})}a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(o,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.82e0e31b.chunk.js.map