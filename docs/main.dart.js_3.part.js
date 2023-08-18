self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={ur:function ur(d,e){this.a=d
this.b=e},us:function us(){},
aD3(d,e,f,g,h){return new A.BV(e,f,h,d,g,null)},
BV:function BV(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
a0T:function a0T(d){var _=this
_.d=$
_.a=null
_.b=d
_.c=null},
atK:function atK(){},
atH:function atH(d){this.a=d},
atG:function atG(d){this.a=d},
atI:function atI(d){this.a=d},
atJ:function atJ(d){this.a=d},
atF:function atF(d){this.a=d},
aN_(d,e,f){var x,w,v,u,t
if(f<=C.c.gK(e))return C.c.gK(d)
if(f>=C.c.gX(e))return C.c.gX(d)
x=C.c.alA(e,new A.azL(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=B.D(w,u,(f-t)/(e[v]-t))
t.toString
return t},
b1K(d,e,f,g,h){var x,w,v=E.W0(null,null,y.b)
v.O(0,e)
v.O(0,g)
x=B.ag(v,!1,v.$ti.c)
w=B.ae(x).h("a3<1,n>")
return new A.as9(B.ag(new B.a3(x,new A.az9(d,e,f,g,h),w),!1,w.h("bb.E")),x)},
aJ1(d,e,f){var x,w,v,u
if(d==e)return d
if(d==null)return e.bq(0,f)
if(e==null)return d.bq(0,1-f)
x=A.b1K(d.a,d.Dm(),e.a,e.Dm(),f)
w=B.ut(d.d,e.d,f)
w.toString
v=B.ut(d.e,e.e,f)
v.toString
u=f<0.5?d.f:e.f
return new A.mI(w,v,u,x.a,x.b,null)},
as9:function as9(d,e){this.a=d
this.b=e},
azL:function azL(d){this.a=d},
az9:function az9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aeK:function aeK(){},
mI:function mI(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
agJ:function agJ(d){this.a=d},
aY_(d,e,f){return f},
vq:function vq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2s:function a2s(d,e,f){this.b=d
this.c=e
this.a=f},
TN:function TN(d){this.a=d},
VX:function VX(d){this.a=d},
y3:function y3(d,e){this.a=d
this.b=e},
qB:function qB(){},
fN(d,e,f,g){var x=null
return new E.kW(A.aY_(x,x,f!=null?new A.vq(d,f,x,x):new E.hE(d,x,x)),x,x,g,e,x,C.cH,x,C.y,F.cf,!1,!1,!1,x)}},D,E,C,F,B,G,J
A=a.updateHolder(c[15],A)
D=c[29]
E=c[18]
C=c[2]
F=c[30]
B=c[0]
G=c[19]
J=c[1]
A.ur.prototype={
H(){return"AdaptiveBreakpointType."+this.b}}
A.us.prototype={
G(d){switch(d.aH(y.g).f.a){case 0:return this.jJ(d)
case 1:return this.Fe(d)
case 2:return this.hV(d)}},
jJ(d){return D.D6},
Fe(d){return E.aIg(C.y,this.hV(d),C.N,F.lI)},
hV(d){return D.D6}}
A.BV.prototype={
ao(){return new A.a0T(C.k)}}
A.a0T.prototype={
aR(){this.d=B.ep(!1)
this.b3()},
n(){var x=this.d
x===$&&B.b()
x.au$=$.b9()
x.Z$=0
this.aW()},
b2(d){var x
this.bc(d)
x=this.a
if(d.d!==x.d&&!d.c.oG(0,x.c))this.aO(new A.atK())},
G(d){var x=this,w=null,v=x.a.w,u=x.d
u===$&&B.b()
return B.aD9(!1,w,!0,G.aEg(new A.atF(x),u,y.e),!1,w,!0,!1,w,w,C.E,C.iz,C.E,w,w,w,w,w,new A.atG(x),w,w,w,w,w,v,new A.atH(x),new A.atI(x),new A.atJ(x),w,w,C.E,w,w)}}
A.as9.prototype={}
A.aeK.prototype={
Dm(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
if(u>4294967295)B.a0(B.bT(u,0,4294967295,"length",null))
w=J.ro(new Array(u),y.b)
for(v=0;v<u;++v)w[v]=v*x
return w}}
A.mI.prototype={
Sg(d,e,f){var x=this,w=x.d.ac(f).Wl(e),v=x.e.ac(f).Wl(e),u=x.Dm()
return B.vG(w,v,x.a,u,x.f,null)},
bq(d,e){var x=this,w=x.a,v=B.ae(w).h("a3<1,n>")
return new A.mI(x.d,x.e,x.f,B.ag(new B.a3(w,new A.agJ(e),v),!0,v.h("bb.E")),x.b,null)},
dD(d,e){var x=A.aJ1(d,this,e)
return x},
dE(d,e){var x=A.aJ1(this,d,e)
return x},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.Y(e)!==B.y(x))return!1
return e instanceof A.mI&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&B.cX(e.a,x.a)&&B.cX(e.b,x.b)},
gq(d){var x=this,w=B.cq(x.a),v=x.b
v=v==null?null:B.cq(v)
return B.T(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this,w=B.a(["begin: "+x.d.j(0),"end: "+x.e.j(0),"colors: "+B.k(x.a)],y.x),v=x.b
if(v!=null)w.push("stops: "+B.k(v))
w.push("tileMode: "+x.f.j(0))
return"LinearGradient("+C.c.bR(w,", ")+")"}}
A.vq.prototype={
ge2(){return this.a},
qE(d){var x=d.a
if(x==null)x=$.kB()
return new B.bh(new E.hD(x,this.ge2(),this.b),y.F)},
k(d,e){if(e==null)return!1
if(J.Y(e)!==B.y(this))return!1
return e instanceof A.vq&&e.ge2()===this.ge2()&&e.b===this.b&&!0},
gq(d){return B.T(this.ge2(),this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'ExactAssetImage(name: "'+this.ge2()+'", scale: '+this.b+", bundle: "+B.k(this.c)+")"}}
A.a2s.prototype={
aL(d,e){var x,w,v,u=$.a9(),t=u.aq()
t.sW(0,this.b)
t.sc9(0,C.a7)
t.seS(this.c)
x=0+e.a
w=0+e.b
v=u.bj()
v.lT(new B.t(0,0,x,w))
u=y.o
v.Rb(B.a([new B.i(x,0),new B.i(0,w)],u),!1)
v.Rb(B.a([new B.i(0,0),new B.i(x,w)],u),!1)
d.cs(v,t)},
eR(d){return!d.b.k(0,this.b)||d.c!==this.c},
uW(d){return!1}}
A.TN.prototype={
G(d){var x=null
return B.aJ_(B.om(x,x,x,new A.a2s(D.IZ,2,x),C.Ej),400,400)}}
A.VX.prototype={
G(d){return E.mt(C.ai,1)}}
A.y3.prototype={}
A.qB.prototype={}
var z=a.updateTypes([])
A.atK.prototype={
$0(){},
$S:0}
A.atH.prototype={
$0(){var x=this.a,w=x.d
w===$&&B.b()
w.sl(0,!1)
x.a.toString},
$S:0}
A.atG.prototype={
$1(d){var x=this.a.d
x===$&&B.b()
x.sl(0,d)},
$S:17}
A.atI.prototype={
$1(d){var x
if(d.b===C.a8){x=this.a.d
x===$&&B.b()
x.sl(0,!0)}},
$S:38}
A.atJ.prototype={
$1(d){var x
if(d.c===C.a8){x=this.a.d
x===$&&B.b()
x.sl(0,!1)}},
$S:46}
A.atF.prototype={
$3(d,e,f){var x=this.a.a,w=x.e,v=e?w:C.E,u=e?x.d:0
return B.aGU(!0,x.r,x.c,C.N,C.E,C.T,C.ap,u,v,C.am)},
$S:448}
A.azL.prototype={
$1(d){return d<=this.a},
$S:449}
A.az9.prototype={
$1(d){var x=this,w=B.D(A.aN_(x.a,x.b,d),A.aN_(x.c,x.d,d),x.e)
w.toString
return w},
$S:450}
A.agJ.prototype={
$1(d){var x=B.D(null,d,this.a)
x.toString
return x},
$S:63};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.ur,B.fY)
w(B.ai,[A.us,A.TN,A.VX])
x(A.BV,B.V)
x(A.a0T,B.a7)
w(B.eK,[A.atK,A.atH])
w(B.e1,[A.atG,A.atI,A.atJ,A.atF,A.azL,A.az9,A.agJ])
w(B.r,[A.as9,A.aeK,A.qB])
x(A.mI,A.aeK)
x(A.vq,E.zQ)
x(A.a2s,B.on)
x(A.y3,A.qB)})()
B.eW(b.typeUniverse,JSON.parse('{"o1":{"b7":[],"b2":[],"e":[]},"ur":{"J":[]},"us":{"ai":[],"e":[]},"BV":{"V":[],"e":[]},"a0T":{"a7":["BV"]},"vq":{"ev":["hD"],"ev.T":"hD"},"a2s":{"am":[]},"TN":{"ai":[],"e":[]},"VX":{"ai":[],"e":[]},"y3":{"qB":[]}}'))
var y={g:B.M("o1"),o:B.M("o<i>"),x:B.M("o<j>"),F:B.M("bh<hD>"),e:B.M("u"),b:B.M("C")};(function constants(){D.FP=new A.ur(0,"small")
D.FQ=new A.ur(1,"medium")
D.FR=new A.ur(2,"large")
D.IZ=new B.n(4282735204)
D.D6=new A.TN(null)
D.hX=new B.dj(null,30,null,null)
D.Em=new B.dj(null,40,null,null)
D.kF=new A.VX(null)
D.aaI=new A.y3(1260,null)})()}
$__dart_deferred_initializers__["1YKvIRH2Z/qrQqoKs/CejUoauLA="] = $__dart_deferred_initializers__.current
