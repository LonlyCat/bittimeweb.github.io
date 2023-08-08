self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={tX:function tX(d,e){this.a=d
this.b=e},yH:function yH(){},
aED(d,e,f){var x,w,v,u,t
if(f<=C.c.gJ(e))return C.c.gJ(d)
if(f>=C.c.gT(e))return C.c.gT(d)
x=C.c.ajU(e,new A.arT(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=B.C(w,u,(f-t)/(e[v]-t))
t.toString
return t},
aTN(d,e,f,g,h){var x,w,v=E.R3(null,null,y.b)
v.K(0,e)
v.K(0,g)
x=B.a8(v,!1,v.$ti.c)
w=B.a7(x).h("Z<1,l>")
return new A.akB(B.a8(new B.Z(x,new A.arh(d,e,f,g,h),w),!1,w.h("b0.E")),x)},
aAT(d,e,f){var x,w,v,u
if(d==e)return d
if(d==null)return e.bb(0,f)
if(e==null)return d.bb(0,1-f)
x=A.aTN(d.a,d.Cr(),e.a,e.Cr(),f)
w=B.tY(d.d,e.d,f)
w.toString
v=B.tY(d.e,e.e,f)
v.toString
u=f<0.5?d.f:e.f
return new A.iT(w,v,u,x.a,x.b,null)},
akB:function akB(d,e){this.a=d
this.b=e},
arT:function arT(d){this.a=d},
arh:function arh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7z:function a7z(){},
iT:function iT(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
a9v:function a9v(d){this.a=d},
aPb(d,e,f){return f},
Am:function Am(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WC:function WC(d,e,f){this.b=d
this.c=e
this.a=f},
OK:function OK(d){this.a=d},
R_:function R_(d){this.a=d},
xi:function xi(d,e){this.a=d
this.b=e},
q7:function q7(){},
kJ(d,e,f){var x=null
return new E.mi(A.aPb(x,x,new A.Am(d,f,x,x)),x,x,x,x,x,C.cz,x,C.t,F.c5,!1,!1,!1,e)}},D,E,C,F,B,J
A=a.updateHolder(c[7],A)
D=c[18]
E=c[12]
C=c[2]
F=c[23]
B=c[0]
J=c[1]
A.tX.prototype={
H(){return"AdaptiveBreakpointType."+this.b}}
A.yH.prototype={
G(d){switch(d.az(y.g).f.a){case 0:return this.jn(d)
case 1:return this.Qt(d)
case 2:return this.i6(d)}},
jn(d){return D.vP},
Qt(d){return E.auW(C.t,this.i6(d),C.G,F.fM)},
i6(d){return D.vP}}
A.akB.prototype={}
A.a7z.prototype={
Cr(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
if(u>4294967295)B.a2(B.bK(u,0,4294967295,"length",null))
w=J.qU(new Array(u),y.b)
for(v=0;v<u;++v)w[v]=v*x
return w}}
A.iT.prototype={
Ra(d,e,f){var x=this,w=x.d.a6(f).Vc(e),v=x.e.a6(f).Vc(e),u=x.Cr()
return B.v6(w,v,x.a,u,x.f,null)},
bb(d,e){var x=this,w=x.a,v=B.a7(w).h("Z<1,l>")
return new A.iT(x.d,x.e,x.f,B.a8(new B.Z(w,new A.a9v(e),v),!0,v.h("b0.E")),x.b,null)},
d9(d,e){var x=A.aAT(d,this,e)
return x},
da(d,e){var x=A.aAT(this,d,e)
return x},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.U(e)!==B.x(x))return!1
return e instanceof A.iT&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&B.cX(e.a,x.a)&&B.cX(e.b,x.b)},
gq(d){var x=this,w=B.cl(x.a),v=x.b
v=v==null?null:B.cl(v)
return B.R(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this,w=B.a(["begin: "+x.d.j(0),"end: "+x.e.j(0),"colors: "+B.j(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+B.j(v))
w.push("tileMode: "+x.f.j(0))
return"LinearGradient("+C.c.bB(w,", ")+")"}}
A.Am.prototype={
gdG(){return this.a},
q1(d){var x=d.a
if(x==null)x=$.km()
return new B.bl(new E.hl(x,this.gdG(),this.b),y.p)},
k(d,e){if(e==null)return!1
if(J.U(e)!==B.x(this))return!1
return e instanceof A.Am&&e.gdG()===this.gdG()&&e.b===this.b&&!0},
gq(d){return B.R(this.gdG(),this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'ExactAssetImage(name: "'+this.gdG()+'", scale: '+this.b+", bundle: "+B.j(this.c)+")"}}
A.WC.prototype={
aw(d,e){var x,w,v,u=$.a3(),t=u.ai()
t.sU(0,this.b)
t.sbS(0,C.Z)
t.seq(this.c)
x=0+e.a
w=0+e.b
v=u.b3()
v.lq(new B.w(0,0,x,w))
u=y.o
v.Q3(B.a([new B.i(x,0),new B.i(0,w)],u),!1)
v.Q3(B.a([new B.i(0,0),new B.i(x,w)],u),!1)
d.ca(v,t)},
ep(d){return!d.b.k(0,this.b)||d.c!==this.c},
u5(d){return!1}}
A.OK.prototype={
G(d){var x=null
return B.aAR(B.o0(x,x,x,new A.WC(D.Bo,2,x),C.x_),400,400)}}
A.R_.prototype={
G(d){return E.kA(C.a8,1)}}
A.xi.prototype={}
A.q7.prototype={}
var z=a.updateTypes([])
A.arT.prototype={
$1(d){return d<=this.a},
$S:422}
A.arh.prototype={
$1(d){var x=this,w=B.C(A.aED(x.a,x.b,d),A.aED(x.c,x.d,d),x.e)
w.toString
return w},
$S:423}
A.a9v.prototype={
$1(d){var x=B.C(null,d,this.a)
x.toString
return x},
$S:53};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.tX,B.hM)
w(B.af,[A.yH,A.OK,A.R_])
w(B.r,[A.akB,A.a7z,A.q7])
w(B.ex,[A.arT,A.arh,A.a9v])
x(A.iT,A.a7z)
x(A.Am,E.z0)
x(A.WC,B.o1)
x(A.xi,A.q7)})()
B.hQ(b.typeUniverse,JSON.parse('{"nG":{"b_":[],"aV":[],"f":[]},"tX":{"H":[]},"yH":{"af":[],"f":[]},"Am":{"ek":["hl"],"ek.T":"hl"},"WC":{"aj":[]},"OK":{"af":[],"f":[]},"R_":{"af":[],"f":[]},"xi":{"q7":[]}}'))
var y={g:B.L("nG"),o:B.L("o<i>"),h:B.L("o<k>"),p:B.L("bl<hl>"),b:B.L("E")};(function constants(){D.yn=new A.tX(0,"small")
D.yo=new A.tX(1,"medium")
D.yp=new A.tX(2,"large")
D.Bo=new B.l(4282735204)
D.vP=new A.OK(null)
D.iL=new B.dn(40,null,null,null)
D.iN=new B.dn(null,30,null,null)
D.ff=new B.dn(null,40,null,null)
D.iP=new A.R_(null)
D.Tp=new A.xi(1260,null)})()}
$__dart_deferred_initializers__["EGaEyxj9dHT1NE+43BkOn68cXyQ="] = $__dart_deferred_initializers__.current
