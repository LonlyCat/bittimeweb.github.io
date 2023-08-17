self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={tT:function tT(d,e){this.a=d
this.b=e},tU:function tU(){},
aEg(d,e,f){var x,w,v,u,t
if(f<=C.c.gJ(e))return C.c.gJ(d)
if(f>=C.c.gS(e))return C.c.gS(d)
x=C.c.ajU(e,new A.arw(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=B.C(w,u,(f-t)/(e[v]-t))
t.toString
return t},
aTm(d,e,f,g,h){var x,w,v=E.QU(null,null,y.b)
v.K(0,e)
v.K(0,g)
x=B.a9(v,!1,v.$ti.c)
w=B.a7(x).h("a_<1,l>")
return new A.akr(B.a9(new B.a_(x,new A.aqV(d,e,f,g,h),w),!1,w.h("b0.E")),x)},
aAs(d,e,f){var x,w,v,u
if(d==e)return d
if(d==null)return e.bb(0,f)
if(e==null)return d.bb(0,1-f)
x=A.aTm(d.a,d.Cr(),e.a,e.Cr(),f)
w=B.tV(d.d,e.d,f)
w.toString
v=B.tV(d.e,e.e,f)
v.toString
u=f<0.5?d.f:e.f
return new A.jF(w,v,u,x.a,x.b,null)},
akr:function akr(d,e){this.a=d
this.b=e},
arw:function arw(d){this.a=d},
aqV:function aqV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7s:function a7s(){},
jF:function jF(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
a9q:function a9q(d){this.a=d},
aON(d,e,f){return f},
Ag:function Ag(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wr:function Wr(d,e,f){this.b=d
this.c=e
this.a=f},
Oz:function Oz(d){this.a=d},
QQ:function QQ(d){this.a=d},
xc:function xc(d,e){this.a=d
this.b=e},
q2:function q2(){},
fy(d,e,f,g){var x=null
return new E.kG(A.aON(x,x,f!=null?new A.Ag(d,f,x,x):new E.fR(d,x,x)),x,x,g,e,x,C.c2,x,C.t,F.bJ,!1,!1,!1,x)}},D,E,C,F,B,J
A=a.updateHolder(c[14],A)
D=c[27]
E=c[18]
C=c[2]
F=c[28]
B=c[0]
J=c[1]
A.tT.prototype={
G(){return"AdaptiveBreakpointType."+this.b}}
A.tU.prototype={
H(d){switch(d.az(y.g).f.a){case 0:return this.lu(d)
case 1:return this.Eg(d)
case 2:return this.iG(d)}},
lu(d){return D.vM},
Eg(d){return E.azD(C.t,this.iG(d),C.J,F.jM)},
iG(d){return D.vM}}
A.akr.prototype={}
A.a7s.prototype={
Cr(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
if(u>4294967295)B.a2(B.bJ(u,0,4294967295,"length",null))
w=J.qP(new Array(u),y.b)
for(v=0;v<u;++v)w[v]=v*x
return w}}
A.jF.prototype={
Ra(d,e,f){var x=this,w=x.d.a7(f).Vb(e),v=x.e.a7(f).Vb(e),u=x.Cr()
return B.v3(w,v,x.a,u,x.f,null)},
bb(d,e){var x=this,w=x.a,v=B.a7(w).h("a_<1,l>")
return new A.jF(x.d,x.e,x.f,B.a9(new B.a_(w,new A.a9q(e),v),!0,v.h("b0.E")),x.b,null)},
da(d,e){var x=A.aAs(d,this,e)
return x},
dc(d,e){var x=A.aAs(this,d,e)
return x},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.T(e)!==B.x(x))return!1
return e instanceof A.jF&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&B.cW(e.a,x.a)&&B.cW(e.b,x.b)},
gq(d){var x=this,w=B.cj(x.a),v=x.b
v=v==null?null:B.cj(v)
return B.R(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this,w=B.a(["begin: "+x.d.j(0),"end: "+x.e.j(0),"colors: "+B.j(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+B.j(v))
w.push("tileMode: "+x.f.j(0))
return"LinearGradient("+C.c.bB(w,", ")+")"}}
A.Ag.prototype={
gdH(){return this.a},
q5(d){var x=d.a
if(x==null)x=$.kj()
return new B.bh(new E.hq(x,this.gdH(),this.b),y.p)},
k(d,e){if(e==null)return!1
if(J.T(e)!==B.x(this))return!1
return e instanceof A.Ag&&e.gdH()===this.gdH()&&e.b===this.b&&!0},
gq(d){return B.R(this.gdH(),this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'ExactAssetImage(name: "'+this.gdH()+'", scale: '+this.b+", bundle: "+B.j(this.c)+")"}}
A.Wr.prototype={
aw(d,e){var x,w,v,u=$.a3(),t=u.ah()
t.sT(0,this.b)
t.sbS(0,C.X)
t.seq(this.c)
x=0+e.a
w=0+e.b
v=u.b3()
v.lq(new B.u(0,0,x,w))
u=y.o
v.Q5(B.a([new B.i(x,0),new B.i(0,w)],u),!1)
v.Q5(B.a([new B.i(0,0),new B.i(x,w)],u),!1)
d.c9(v,t)},
ep(d){return!d.b.k(0,this.b)||d.c!==this.c},
u6(d){return!1}}
A.Oz.prototype={
H(d){var x=null
return B.aAq(B.nX(x,x,x,new A.Wr(D.Bm,2,x),C.wX),400,400)}}
A.QQ.prototype={
H(d){return E.o8(C.a4,1)}}
A.xc.prototype={}
A.q2.prototype={}
var z=a.updateTypes([])
A.arw.prototype={
$1(d){return d<=this.a},
$S:413}
A.aqV.prototype={
$1(d){var x=this,w=B.C(A.aEg(x.a,x.b,d),A.aEg(x.c,x.d,d),x.e)
w.toString
return w},
$S:414}
A.a9q.prototype={
$1(d){var x=B.C(null,d,this.a)
x.toString
return x},
$S:49};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.tT,B.hf)
w(B.af,[A.tU,A.Oz,A.QQ])
w(B.r,[A.akr,A.a7s,A.q2])
w(B.e2,[A.arw,A.aqV,A.a9q])
x(A.jF,A.a7s)
x(A.Ag,E.yU)
x(A.Wr,B.nY)
x(A.xc,A.q2)})()
B.eM(b.typeUniverse,JSON.parse('{"nD":{"aZ":[],"aV":[],"f":[]},"tT":{"J":[]},"tU":{"af":[],"f":[]},"Ag":{"ek":["hq"],"ek.T":"hq"},"Wr":{"ak":[]},"Oz":{"af":[],"f":[]},"QQ":{"af":[],"f":[]},"xc":{"q2":[]}}'))
var y={g:B.H("nD"),o:B.H("o<i>"),h:B.H("o<k>"),p:B.H("bh<hq>"),b:B.H("E")};(function constants(){D.yl=new A.tT(0,"small")
D.ym=new A.tT(1,"medium")
D.yn=new A.tT(2,"large")
D.Bm=new B.l(4282735204)
D.vM=new A.Oz(null)
D.iJ=new B.dZ(null,30,null,null)
D.iK=new B.dZ(null,40,null,null)
D.iM=new A.QQ(null)
D.Tb=new A.xc(1260,null)})()}
$__dart_deferred_initializers__["Q+DFmU6WcdTAp8PoOMarRt3uiKk="] = $__dart_deferred_initializers__.current
