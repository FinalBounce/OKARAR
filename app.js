(()=>{var zd=0,mh=1,kd=2;var gh=1,Hd=2,oi=3,Kt=0,jt=1,Pt=2,Ti=0,os=1,_h=2,xh=3,yh=4,Vd=5,Vi=100,Gd=101,Wd=102,Xd=103,qd=104,Yd=200,Kd=201,Zd=202,Jd=203,wa=204,Aa=205,$d=206,jd=207,Qd=208,ef=209,tf=210,nf=211,sf=212,rf=213,of=214,$a=0,ja=1,Qa=2,as=3,ec=4,tc=5,nc=6,ic=7,sc=0,af=1,cf=2,wi=0,lf=1,hf=2,uf=3,rc=4,df=5,ff=6,pf=7,sh="attached",mf="detached",vh=300,vs=301,Ms=302,oc=303,ac=304,Lo=306,Gi=1e3,Yn=1001,Zs=1002,Zt=1003,cc=1004;var Ss=1005;var un=1006,cr=1007;var Gn=1008;var Wn=1009,Mh=1010,Sh=1011,lr=1012,lc=1013,Yi=1014,Cn=1015,hr=1016,hc=1017,uc=1018,ur=1020,bh=35902,Eh=35899,Th=1021,wh=1022,bn=1023,Js=1026,dr=1027,dc=1028,fc=1029,Ah=1030,pc=1031;var mc=1033,Do=33776,No=33777,Uo=33778,Fo=33779,gc=35840,_c=35841,xc=35842,yc=35843,vc=36196,Mc=37492,Sc=37496,bc=37808,Ec=37809,Tc=37810,wc=37811,Ac=37812,Rc=37813,Cc=37814,Ic=37815,Pc=37816,Lc=37817,Dc=37818,Nc=37819,Uc=37820,Fc=37821,Oc=36492,Bc=36494,zc=36495,kc=36283,Hc=36284,Vc=36285,Gc=36286,gf=2200,_f=2201,xf=2202,cs=2300,ls=2301,Ta=2302,is=2400,ss=2401,Yr=2402,Wc=2500,yf=2501,Rh=0,Oo=1,fr=2,vf=3200,Mf=3201;var Xc=0,Sf=1,Ai="",Dt="srgb",Jt="srgb-linear",Kr="linear",vt="srgb";var ns=7680;var rh=519,bf=512,Ef=513,Tf=514,Ch=515,wf=516,Af=517,Rf=518,Cf=519,Ra=35044;var Ih="300 es",Hn=2e3,Zr=2001;var Zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qu=1234567,Gr=Math.PI/180,hs=180/Math.PI;function Rn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[s&255]+nn[s>>8&255]+nn[s>>16&255]+nn[s>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function st(s,e,t){return Math.max(e,Math.min(t,s))}function Ph(s,e){return(s%e+e)%e}function vm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Mm(s,e,t){return s!==e?(t-s)/(e-s):0}function Wr(s,e,t){return(1-t)*s+t*e}function Sm(s,e,t,n){return Wr(s,e,1-Math.exp(-t*n))}function bm(s,e=1){return e-Math.abs(Ph(s,e*2)-e)}function Em(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Tm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function wm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Am(s,e){return s+Math.random()*(e-s)}function Rm(s){return s*(.5-Math.random())}function Cm(s){s!==void 0&&(Qu=s);let e=Qu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Im(s){return s*Gr}function Pm(s){return s*hs}function Lm(s){return(s&s-1)===0&&s!==0}function Dm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Nm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Um(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*m,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*m,a*l);break;case"ZYZ":s.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function kn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function yt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var xt={DEG2RAD:Gr,RAD2DEG:hs,generateUUID:Rn,clamp:st,euclideanModulo:Ph,mapLinear:vm,inverseLerp:Mm,lerp:Wr,damp:Sm,pingpong:bm,smoothstep:Em,smootherstep:Tm,randInt:wm,randFloat:Am,randFloatSpread:Rm,seededRandom:Cm,degToRad:Im,radToDeg:Pm,isPowerOfTwo:Lm,ceilPowerOfTwo:Dm,floorPowerOfTwo:Nm,setQuaternionFromProperEuler:Um,normalize:yt,denormalize:kn},_e=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ze=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==m){let g=1-a,p=c*d+l*f+h*m+u*_,T=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let R=Math.sqrt(y),w=Math.atan2(R,p*T);g=Math.sin(g*w)/R,a=Math.sin(a*w)/R}let x=a*T;if(c=c*g+d*x,l=l*g+f*x,h=h*g+m*x,u=u*g+_*x,g===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-a*f,e[t+2]=l*m+h*f+a*d-c*u,e[t+3]=h*m-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ed.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ed.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rl.copy(this).projectOnVector(e),this.sub(Rl)}reflect(e){return this.sub(Rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rl=new S,ed=new ze,Qe=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],T=i[1],y=i[4],x=i[7],R=i[2],w=i[5],P=i[8];return r[0]=o*_+a*T+c*R,r[3]=o*g+a*y+c*w,r[6]=o*p+a*x+c*P,r[1]=l*_+h*T+u*R,r[4]=l*g+h*y+u*w,r[7]=l*p+h*x+u*P,r[2]=d*_+f*T+m*R,r[5]=d*g+f*y+m*w,r[8]=d*p+f*x+m*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Cl.makeScale(e,t)),this}rotate(e){return this.premultiply(Cl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Cl=new Qe;function Lh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function $s(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function If(){let s=$s("canvas");return s.style.display="block",s}var td={};function js(s){s in td||(td[s]=!0,console.warn(s))}function Pf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var nd=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),id=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fm(){let s={enabled:!0,workingColorSpace:Jt,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(i.r=_i(i.r),i.g=_i(i.g),i.b=_i(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(i.r=Ks(i.r),i.g=Ks(i.g),i.b=Ks(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ai?Kr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return js("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return js("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Jt]:{primaries:e,whitePoint:n,transfer:Kr,toXYZ:nd,fromXYZ:id,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:nd,fromXYZ:id,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),s}var ct=Fm();function _i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ns,Ca=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ns===void 0&&(Ns=$s("canvas")),Ns.width=e.width,Ns.height=e.height;let i=Ns.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ns}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$s("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=_i(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Om=0,Qs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Il(i[o].image)):r.push(Il(i[o]))}else r=Il(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Il(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ca.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Bm=0,Pl=new S,Ht=class s extends Zn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Yn,i=Yn,r=un,o=Gn,a=bn,c=Wn,l=s.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Rn(),this.name="",this.source=new Qs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pl).x}get height(){return this.source.getSize(Pl).y}get depth(){return this.source.getSize(Pl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gi:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Zs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gi:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Zs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=vh;Ht.DEFAULT_ANISOTROPY=1;var ft=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,x=(f+1)/2,R=(p+1)/2,w=(h+d)/4,P=(u+_)/4,I=(m+g)/4;return y>x&&y>R?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=P/n):x>R?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=w/i,r=I/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=P/r,i=I/r),this.set(n,i,r,t),this}let T=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(g-m)/T,this.y=(u-_)/T,this.z=(d-h)/T,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ia=class extends Zn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new Ht(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Qs(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jn=class extends Ia{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Jr=class extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pa=class extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ft=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jo.copy(n.boundingBox)),jo.applyMatrix4(e.matrixWorld),this.union(jo)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),Qo.subVectors(this.max,Nr),Us.subVectors(e.a,Nr),Fs.subVectors(e.b,Nr),Os.subVectors(e.c,Nr),Ui.subVectors(Fs,Us),Fi.subVectors(Os,Fs),ji.subVectors(Us,Os);let t=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-ji.z,ji.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,ji.z,0,-ji.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-ji.y,ji.x,0];return!Ll(t,Us,Fs,Os,Qo)||(t=[1,0,0,0,1,0,0,0,1],!Ll(t,Us,Fs,Os,Qo))?!1:(ea.crossVectors(Ui,Fi),t=[ea.x,ea.y,ea.z],Ll(t,Us,Fs,Os,Qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ui=[new S,new S,new S,new S,new S,new S,new S,new S],On=new S,jo=new Ft,Us=new S,Fs=new S,Os=new S,Ui=new S,Fi=new S,ji=new S,Nr=new S,Qo=new S,ea=new S,Qi=new S;function Ll(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Qi.fromArray(s,r);let a=i.x*Math.abs(Qi.x)+i.y*Math.abs(Qi.y)+i.z*Math.abs(Qi.z),c=e.dot(Qi),l=t.dot(Qi),h=n.dot(Qi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var zm=new Ft,Ur=new S,Dl=new S,mn=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):zm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);let t=Ur.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ur,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(Dl)),this.expandByPoint(Ur.copy(e.center).sub(Dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},di=new S,Nl=new S,ta=new S,Oi=new S,Ul=new S,na=new S,Fl=new S,us=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Nl.copy(e).add(t).multiplyScalar(.5),ta.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(Nl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ta),a=Oi.dot(this.direction),c=-Oi.dot(ta),l=Oi.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Nl).addScaledVector(ta,d),f}intersectSphere(e,t){di.subVectors(e.center,this.origin);let n=di.dot(this.direction),i=di.dot(di)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,i,r){Ul.subVectors(t,e),na.subVectors(n,e),Fl.crossVectors(Ul,na);let o=this.direction.dot(Fl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);let c=a*this.direction.dot(na.crossVectors(Oi,na));if(c<0)return null;let l=a*this.direction.dot(Ul.cross(Oi));if(l<0||c+l>o)return null;let h=-a*Oi.dot(Fl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},He=class s{constructor(e,t,n,i,r,o,a,c,l,h,u,d,f,m,_,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,f,m,_,g)}set(e,t,n,i,r,o,a,c,l,h,u,d,f,m,_,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Bs.setFromMatrixColumn(e,0).length(),r=1/Bs.setFromMatrixColumn(e,1).length(),o=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,m=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,m=l*h,_=l*u;t[0]=d+_*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,m=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,m=a*h,_=a*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(km,e,Hm)}lookAt(e,t,n){let i=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Bi.crossVectors(n,yn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Bi.crossVectors(n,yn)),Bi.normalize(),ia.crossVectors(yn,Bi),i[0]=Bi.x,i[4]=ia.x,i[8]=yn.x,i[1]=Bi.y,i[5]=ia.y,i[9]=yn.y,i[2]=Bi.z,i[6]=ia.z,i[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],T=n[3],y=n[7],x=n[11],R=n[15],w=i[0],P=i[4],I=i[8],b=i[12],M=i[1],L=i[5],H=i[9],Y=i[13],$=i[2],Z=i[6],z=i[10],se=i[14],K=i[3],G=i[7],de=i[11],we=i[15];return r[0]=o*w+a*M+c*$+l*K,r[4]=o*P+a*L+c*Z+l*G,r[8]=o*I+a*H+c*z+l*de,r[12]=o*b+a*Y+c*se+l*we,r[1]=h*w+u*M+d*$+f*K,r[5]=h*P+u*L+d*Z+f*G,r[9]=h*I+u*H+d*z+f*de,r[13]=h*b+u*Y+d*se+f*we,r[2]=m*w+_*M+g*$+p*K,r[6]=m*P+_*L+g*Z+p*G,r[10]=m*I+_*H+g*z+p*de,r[14]=m*b+_*Y+g*se+p*we,r[3]=T*w+y*M+x*$+R*K,r[7]=T*P+y*L+x*Z+R*G,r[11]=T*I+y*H+x*z+R*de,r[15]=T*b+y*Y+x*se+R*we,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+g*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],T=u*g*l-_*d*l+_*c*f-a*g*f-u*c*p+a*d*p,y=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,x=h*_*l-m*u*l+m*a*f-o*_*f-h*a*p+o*u*p,R=m*u*c-h*_*c-m*a*d+o*_*d+h*a*g-o*u*g,w=t*T+n*y+i*x+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/w;return e[0]=T*P,e[1]=(_*d*r-u*g*r-_*i*f+n*g*f+u*i*p-n*d*p)*P,e[2]=(a*g*r-_*c*r+_*i*l-n*g*l-a*i*p+n*c*p)*P,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*P,e[4]=y*P,e[5]=(h*g*r-m*d*r+m*i*f-t*g*f-h*i*p+t*d*p)*P,e[6]=(m*c*r-o*g*r-m*i*l+t*g*l+o*i*p-t*c*p)*P,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*f+t*c*f)*P,e[8]=x*P,e[9]=(m*u*r-h*_*r-m*n*f+t*_*f+h*n*p-t*u*p)*P,e[10]=(o*_*r-m*a*r+m*n*l-t*_*l-o*n*p+t*a*p)*P,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*P,e[12]=R*P,e[13]=(h*_*i-m*u*i+m*n*d-t*_*d-h*n*g+t*u*g)*P,e[14]=(m*a*i-o*_*i-m*n*c+t*_*c+o*n*g-t*a*g)*P,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*P,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,_=o*h,g=o*u,p=a*u,T=c*l,y=c*h,x=c*u,R=n.x,w=n.y,P=n.z;return i[0]=(1-(_+p))*R,i[1]=(f+x)*R,i[2]=(m-y)*R,i[3]=0,i[4]=(f-x)*w,i[5]=(1-(d+p))*w,i[6]=(g+T)*w,i[7]=0,i[8]=(m+y)*P,i[9]=(g-T)*P,i[10]=(1-(d+_))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Bs.set(i[0],i[1],i[2]).length(),o=Bs.set(i[4],i[5],i[6]).length(),a=Bs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Bn.copy(this);let l=1/r,h=1/o,u=1/a;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,t.setFromRotationMatrix(Bn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Hn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),m,_;if(c)m=r/(o-r),_=o*r/(o-r);else if(a===Hn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Zr)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Hn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),m,_;if(c)m=1/(o-r),_=o/(o-r);else if(a===Hn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Zr)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Bs=new S,Bn=new He,km=new S(0,0,0),Hm=new S(1,1,1),Bi=new S,ia=new S,yn=new S,sd=new He,rd=new ze,bt=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(st(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rd.setFromEuler(this),this.setFromQuaternion(rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bt.DEFAULT_ORDER="XYZ";var $r=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Vm=0,od=new S,zs=new ze,fi=new He,sa=new S,Fr=new S,Gm=new S,Wm=new ze,ad=new S(1,0,0),cd=new S(0,1,0),ld=new S(0,0,1),hd={type:"added"},Xm={type:"removed"},ks={type:"childadded",child:null},Ol={type:"childremoved",child:null},Et=class s extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new S,t=new bt,n=new ze,i=new S(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new Qe}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(ad,e)}rotateY(e){return this.rotateOnAxis(cd,e)}rotateZ(e){return this.rotateOnAxis(ld,e)}translateOnAxis(e,t){return od.copy(e).applyQuaternion(this.quaternion),this.position.add(od.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ad,e)}translateY(e){return this.translateOnAxis(cd,e)}translateZ(e){return this.translateOnAxis(ld,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sa.copy(e):sa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Fr,sa,this.up):fi.lookAt(sa,Fr,this.up),this.quaternion.setFromRotationMatrix(fi),i&&(fi.extractRotation(i.matrixWorld),zs.setFromRotationMatrix(fi),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hd),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xm),Ol.child=e,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hd),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,Gm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,Wm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Et.DEFAULT_UP=new S(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=new S,pi=new S,Bl=new S,mi=new S,Hs=new S,Vs=new S,ud=new S,zl=new S,kl=new S,Hl=new S,Vl=new ft,Gl=new ft,Wl=new ft,Hi=class s{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),zn.subVectors(e,t),i.cross(zn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){zn.subVectors(i,t),pi.subVectors(n,t),Bl.subVectors(e,t);let o=zn.dot(zn),a=zn.dot(pi),c=zn.dot(Bl),l=pi.dot(pi),h=pi.dot(Bl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mi.x),c.addScaledVector(o,mi.y),c.addScaledVector(a,mi.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return Vl.setScalar(0),Gl.setScalar(0),Wl.setScalar(0),Vl.fromBufferAttribute(e,t),Gl.fromBufferAttribute(e,n),Wl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Vl,r.x),o.addScaledVector(Gl,r.y),o.addScaledVector(Wl,r.z),o}static isFrontFacing(e,t,n,i){return zn.subVectors(n,t),pi.subVectors(e,t),zn.cross(pi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),zn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Hs.subVectors(i,n),Vs.subVectors(r,n),zl.subVectors(e,n);let c=Hs.dot(zl),l=Vs.dot(zl);if(c<=0&&l<=0)return t.copy(n);kl.subVectors(e,i);let h=Hs.dot(kl),u=Vs.dot(kl);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Hs,o);Hl.subVectors(e,r);let f=Hs.dot(Hl),m=Vs.dot(Hl);if(m>=0&&f<=m)return t.copy(r);let _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(Vs,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return ud.subVectors(r,i),a=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(ud,a);let p=1/(g+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Hs,o).addScaledVector(Vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},ra={h:0,s:0,l:0};function Xl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ct.workingColorSpace){if(e=Ph(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Xl(o,r,e+1/3),this.g=Xl(o,r,e),this.b=Xl(o,r,e-1/3)}return ct.colorSpaceToWorking(this,i),this}setStyle(e,t=Dt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){let n=Lf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return ct.workingToColorSpace(sn.copy(this),e),Math.round(st(sn.r*255,0,255))*65536+Math.round(st(sn.g*255,0,255))*256+Math.round(st(sn.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(sn.copy(this),t);let n=sn.r,i=sn.g,r=sn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Dt){ct.workingToColorSpace(sn.copy(this),e);let t=sn.r,n=sn.g,i=sn.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(ra);let n=Wr(zi.h,ra.h,t),i=Wr(zi.s,ra.s,t),r=Wr(zi.l,ra.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new Ue;Ue.NAMES=Lf;var qm=0,dn=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=os,this.side=Kt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=Aa,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==Kt&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Aa&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},$t=class extends dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bt,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var zt=new S,oa=new _e,Ym=0,Ut=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ym++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ra,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oa.fromBufferAttribute(this,t),oa.applyMatrix3(e),this.setXY(t,oa.x,oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ra&&(e.usage=this.usage),e}};var jr=class extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Qr=class extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},Km=0,wn=new He,ql=new Et,Gs=new S,vn=new Ft,Or=new Ft,Xt=new S,pt=class s extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lh(e)?Qr:jr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return ql.lookAt(e),ql.updateMatrix(),this.applyMatrix4(ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ft);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(e){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Or.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(vn.min,Or.min),vn.expandByPoint(Xt),Xt.addVectors(vn.max,Or.max),vn.expandByPoint(Xt)):(vn.expandByPoint(Or.min),vn.expandByPoint(Or.max))}vn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Xt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Xt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Xt.fromBufferAttribute(a,l),c&&(Gs.fromBufferAttribute(e,l),Xt.add(Gs)),i=Math.max(i,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new S,c[I]=new S;let l=new S,h=new S,u=new S,d=new _e,f=new _e,m=new _e,_=new S,g=new S;function p(I,b,M){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),a[I].add(_),a[b].add(_),a[M].add(_),c[I].add(g),c[b].add(g),c[M].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let I=0,b=T.length;I<b;++I){let M=T[I],L=M.start,H=M.count;for(let Y=L,$=L+H;Y<$;Y+=3)p(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}let y=new S,x=new S,R=new S,w=new S;function P(I){R.fromBufferAttribute(i,I),w.copy(R);let b=a[I];y.copy(b),y.sub(R.multiplyScalar(R.dot(b))).normalize(),x.crossVectors(w,b);let L=x.dot(c[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,L)}for(let I=0,b=T.length;I<b;++I){let M=T[I],L=M.start,H=M.count;for(let Y=L,$=L+H;Y<$;Y+=3)P(e.getX(Y+0)),P(e.getX(Y+1)),P(e.getX(Y+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new S,r=new S,o=new S,a=new S,c=new S,l=new S,h=new S,u=new S;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Ut(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},dd=new He,es=new us,aa=new mn,fd=new S,ca=new S,la=new S,ha=new S,Yl=new S,ua=new S,pd=new S,da=new S,Ke=class extends Et{constructor(e=new pt,t=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){ua.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Yl.fromBufferAttribute(u,e),o?ua.addScaledVector(Yl,h):ua.addScaledVector(Yl.sub(t),h))}t.add(ua)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(r),es.copy(e.ray).recast(e.near),!(aa.containsPoint(es.origin)===!1&&(es.intersectSphere(aa,fd)===null||es.origin.distanceToSquared(fd)>(e.far-e.near)**2))&&(dd.copy(r).invert(),es.copy(e.ray).applyMatrix4(dd),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],T=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=T,R=y;x<R;x+=3){let w=a.getX(x),P=a.getX(x+1),I=a.getX(x+2);i=fa(this,p,e,n,l,h,u,w,P,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let T=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);i=fa(this,o,e,n,l,h,u,T,y,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],T=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=T,R=y;x<R;x+=3){let w=x,P=x+1,I=x+2;i=fa(this,p,e,n,l,h,u,w,P,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let T=g,y=g+1,x=g+2;i=fa(this,o,e,n,l,h,u,T,y,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function Zm(s,e,t,n,i,r,o,a){let c;if(e.side===jt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Kt,a),c===null)return null;da.copy(a),da.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(da);return l<t.near||l>t.far?null:{distance:l,point:da.clone(),object:s}}function fa(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,ca),s.getVertexPosition(c,la),s.getVertexPosition(l,ha);let h=Zm(s,e,t,n,ca,la,ha,pd);if(h){let u=new S;Hi.getBarycoord(pd,ca,la,ha,u),i&&(h.uv=Hi.getInterpolatedAttribute(i,a,c,l,u,new _e)),r&&(h.uv1=Hi.getInterpolatedAttribute(r,a,c,l,u,new _e)),o&&(h.normal=Hi.getInterpolatedAttribute(o,a,c,l,u,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new S,materialIndex:0};Hi.getNormal(ca,la,ha,d.normal),h.face=d,h.barycoord=u}return h}var Wi=class s extends pt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(u,2));function m(_,g,p,T,y,x,R,w,P,I,b){let M=x/P,L=R/I,H=x/2,Y=R/2,$=w/2,Z=P+1,z=I+1,se=0,K=0,G=new S;for(let de=0;de<z;de++){let we=de*L-Y;for(let We=0;We<Z;We++){let tt=We*M-H;G[_]=tt*T,G[g]=we*y,G[p]=$,l.push(G.x,G.y,G.z),G[_]=0,G[g]=0,G[p]=w>0?1:-1,h.push(G.x,G.y,G.z),u.push(We/P),u.push(1-de/I),se+=1}}for(let de=0;de<I;de++)for(let we=0;we<P;we++){let We=d+we+Z*de,tt=d+we+Z*(de+1),lt=d+(we+1)+Z*(de+1),rt=d+(we+1)+Z*de;c.push(We,tt,rt),c.push(tt,lt,rt),K+=6}a.addGroup(f,K,b),f+=K,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function bs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function rn(s){let e={};for(let t=0;t<s.length;t++){let n=bs(s[t]);for(let i in n)e[i]=n[i]}return e}function Jm(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Dh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var Df={clone:bs,merge:rn},$m=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$m,this.fragmentShader=jm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=Jm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},eo=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ki=new S,md=new _e,gd=new _e,kt=class extends eo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,md,gd),t.subVectors(gd,md)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ws=-90,Xs=1,La=class extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new kt(Ws,Xs,e,t);i.layers=this.layers,this.add(i);let r=new kt(Ws,Xs,e,t);r.layers=this.layers,this.add(r);let o=new kt(Ws,Xs,e,t);o.layers=this.layers,this.add(o);let a=new kt(Ws,Xs,e,t);a.layers=this.layers,this.add(a);let c=new kt(Ws,Xs,e,t);c.layers=this.layers,this.add(c);let l=new kt(Ws,Xs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},to=class extends Ht{constructor(e=[],t=vs,n,i,r,o,a,c,l,h){super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Da=class extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new to(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Wi(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Ti});r.uniforms.tEquirect.value=t;let o=new Ke(i,r),a=t.minFilter;return t.minFilter===Gn&&(t.minFilter=un),new La(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Nt=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qm={type:"move"},er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qm)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ds=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bt,this.environmentIntensity=1,this.environmentRotation=new bt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},tr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ra,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},hn=new S,nr=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var _d=new S,xd=new ft,yd=new ft,eg=new S,vd=new He,pa=new S,Kl=new mn,Md=new He,Zl=new us,no=class extends Ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sh,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ft),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pa),this.boundingBox.expandByPoint(pa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pa),this.boundingSphere.expandByPoint(pa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kl.copy(this.boundingSphere),Kl.applyMatrix4(i),e.ray.intersectsSphere(Kl)!==!1&&(Md.copy(i).invert(),Zl.copy(e.ray).applyMatrix4(Md),!(this.boundingBox!==null&&Zl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ft,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===sh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===mf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;xd.fromBufferAttribute(i.attributes.skinIndex,e),yd.fromBufferAttribute(i.attributes.skinWeight,e),_d.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=yd.getComponent(r);if(o!==0){let a=xd.getComponent(r);vd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(eg.copy(_d).applyMatrix4(vd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},ir=class extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}},io=class extends Ht{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Zt,h=Zt,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Sd=new He,tg=new He,so=class s{constructor(e=[],t=[]){this.uuid=Rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:tg;Sd.multiplyMatrices(a,t[r]),Sd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new io(t,e,e,bn,Cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ir),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Xi=class extends Ut{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qs=new He,bd=new He,ma=[],Ed=new Ft,ng=new He,Br=new Ke,zr=new mn,fs=class extends Ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ng)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ft),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qs),Ed.copy(e.boundingBox).applyMatrix4(qs),this.boundingBox.union(Ed)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qs),zr.copy(e.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(n),e.ray.intersectsSphere(zr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,qs),bd.multiplyMatrices(n,qs),Br.matrixWorld=bd,Br.raycast(e,ma);for(let o=0,a=ma.length;o<a;o++){let c=ma[o];c.instanceId=r,c.object=this,t.push(c)}ma.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new io(new Float32Array(i*this.count),i,this.count,dc,Cn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Jl=new S,ig=new S,sg=new Qe,An=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Jl.subVectors(n,t).cross(ig.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Jl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sg.getNormalMatrix(e),i=this.coplanarPoint(Jl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ts=new mn,rg=new _e(.5,.5),ga=new S,$n=class{constructor(e=new An,t=new An,n=new An,i=new An,r=new An,o=new An){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],T=r[12],y=r[13],x=r[14],R=r[15];if(i[0].setComponents(l-o,f-h,p-m,R-T).normalize(),i[1].setComponents(l+o,f+h,p+m,R+T).normalize(),i[2].setComponents(l+a,f+u,p+_,R+y).normalize(),i[3].setComponents(l-a,f-u,p-_,R-y).normalize(),n)i[4].setComponents(c,d,g,x).normalize(),i[5].setComponents(l-c,f-d,p-g,R-x).normalize();else if(i[4].setComponents(l-c,f-d,p-g,R-x).normalize(),t===Hn)i[5].setComponents(l+c,f+d,p+g,R+x).normalize();else if(t===Zr)i[5].setComponents(c,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);let t=rg.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ga.x=i.normal.x>0?e.max.x:e.min.x,ga.y=i.normal.y>0?e.max.y:e.min.y,ga.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xi=class extends dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Na=new S,Ua=new S,Td=new He,kr=new us,_a=new mn,$l=new S,wd=new S,jn=class extends Et{constructor(e=new pt,t=new xi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Na.fromBufferAttribute(t,i-1),Ua.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Na.distanceTo(Ua);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(i),_a.radius+=r,e.ray.intersectsSphere(_a)===!1)return;Td.copy(i).invert(),kr.copy(e.ray).applyMatrix4(Td);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){let p=h.getX(_),T=h.getX(_+1),y=xa(this,e,kr,c,p,T,_);y&&t.push(y)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(f),p=xa(this,e,kr,c,_,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){let p=xa(this,e,kr,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=xa(this,e,kr,c,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xa(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(Na.fromBufferAttribute(a,i),Ua.fromBufferAttribute(a,r),t.distanceSqToSegment(Na,Ua,$l,wd)>n)return;$l.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo($l);if(!(l<e.near||l>e.far))return{distance:l,point:wd.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Ad=new S,Rd=new S,ro=class extends jn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ad.fromBufferAttribute(t,i),Rd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ad.distanceTo(Rd);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},oo=class extends jn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Qn=class extends dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cd=new He,oh=new us,ya=new mn,va=new S,yi=class extends Et{constructor(e=new pt,t=new Qn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(i),ya.radius+=r,e.ray.intersectsSphere(ya)===!1)return;Cd.copy(i).invert(),oh.copy(e.ray).applyMatrix4(Cd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,_=f;m<_;m++){let g=l.getX(m);va.fromBufferAttribute(u,g),Id(va,g,c,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,_=f;m<_;m++)va.fromBufferAttribute(u,m),Id(va,m,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Id(s,e,t,n,i,r,o){let a=oh.distanceSqToPoint(s);if(a<t){let c=new S;oh.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ao=class extends Ht{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},co=class extends Ht{constructor(e,t,n=Yi,i,r,o,a=Zt,c=Zt,l,h=Js,u=1){if(h!==Js&&h!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},lo=class extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Fa=class s extends pt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(r.slice(),3)),this.setAttribute("uv",new Je(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(T){let y=new S,x=new S,R=new S;for(let w=0;w<t.length;w+=3)f(t[w+0],y),f(t[w+1],x),f(t[w+2],R),c(y,x,R,T)}function c(T,y,x,R){let w=R+1,P=[];for(let I=0;I<=w;I++){P[I]=[];let b=T.clone().lerp(x,I/w),M=y.clone().lerp(x,I/w),L=w-I;for(let H=0;H<=L;H++)H===0&&I===w?P[I][H]=b:P[I][H]=b.clone().lerp(M,H/L)}for(let I=0;I<w;I++)for(let b=0;b<2*(w-I)-1;b++){let M=Math.floor(b/2);b%2===0?(d(P[I][M+1]),d(P[I+1][M]),d(P[I][M])):(d(P[I][M+1]),d(P[I+1][M+1]),d(P[I+1][M]))}}function l(T){let y=new S;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(T),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){let T=new S;for(let y=0;y<r.length;y+=3){T.x=r[y+0],T.y=r[y+1],T.z=r[y+2];let x=g(T)/2/Math.PI+.5,R=p(T)/Math.PI+.5;o.push(x,1-R)}m(),u()}function u(){for(let T=0;T<o.length;T+=6){let y=o[T+0],x=o[T+2],R=o[T+4],w=Math.max(y,x,R),P=Math.min(y,x,R);w>.9&&P<.1&&(y<.2&&(o[T+0]+=1),x<.2&&(o[T+2]+=1),R<.2&&(o[T+4]+=1))}}function d(T){r.push(T.x,T.y,T.z)}function f(T,y){let x=T*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function m(){let T=new S,y=new S,x=new S,R=new S,w=new _e,P=new _e,I=new _e;for(let b=0,M=0;b<r.length;b+=9,M+=6){T.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),w.set(o[M+0],o[M+1]),P.set(o[M+2],o[M+3]),I.set(o[M+4],o[M+5]),R.copy(T).add(y).add(x).divideScalar(3);let L=g(R);_(w,M+0,T,L),_(P,M+2,y,L),_(I,M+4,x,L)}}function _(T,y,x,R){R<0&&T.x===1&&(o[y]=T.x-1),x.x===0&&x.z===0&&(o[y]=R/2/Math.PI+.5)}function g(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var Sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new _e:new S);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new S,i=[],r=[],o=[],a=new S,c=new He;for(let f=0;f<=e;f++){let m=f/e;i[f]=this.getTangentAt(m,new S)}r[0]=new S,o[0]=new S;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(st(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(st(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},sr=class extends Sn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new _e){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Oa=class extends sr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Nh(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Ma=new S,jl=new Nh,Ql=new Nh,eh=new Nh,qt=class extends Sn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new S){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Ma.subVectors(i[0],i[1]).add(i[0]),l=Ma);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ma.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ma),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),jl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,_,g),Ql.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,_,g),eh.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(jl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ql.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),eh.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(jl.calc(c),Ql.calc(c),eh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new S().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Pd(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function og(s,e){let t=1-s;return t*t*e}function ag(s,e){return 2*(1-s)*s*e}function cg(s,e){return s*s*e}function Xr(s,e,t,n){return og(s,e)+ag(s,t)+cg(s,n)}function lg(s,e){let t=1-s;return t*t*t*e}function hg(s,e){let t=1-s;return 3*t*t*s*e}function ug(s,e){return 3*(1-s)*s*s*e}function dg(s,e){return s*s*s*e}function qr(s,e,t,n,i){return lg(s,e)+hg(s,t)+ug(s,n)+dg(s,i)}var ho=class extends Sn{constructor(e=new _e,t=new _e,n=new _e,i=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new _e){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qr(e,i.x,r.x,o.x,a.x),qr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ei=class extends Sn{constructor(e=new S,t=new S,n=new S,i=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new S){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qr(e,i.x,r.x,o.x,a.x),qr(e,i.y,r.y,o.y,a.y),qr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},uo=class extends Sn{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ba=class extends Sn{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fo=class extends Sn{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Xr(e,i.x,r.x,o.x),Xr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},po=class extends Sn{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Xr(e,i.x,r.x,o.x),Xr(e,i.y,r.y,o.y),Xr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mo=class extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Pd(a,c.x,l.x,h.x,u.x),Pd(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new _e().fromArray(i))}return this}},za=Object.freeze({__proto__:null,ArcCurve:Oa,CatmullRomCurve3:qt,CubicBezierCurve:ho,CubicBezierCurve3:ei,EllipseCurve:sr,LineCurve:uo,LineCurve3:Ba,QuadraticBezierCurve:fo,QuadraticBezierCurve3:po,SplineCurve:mo}),ka=class extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new za[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new za[i.type]().fromJSON(i))}return this}},go=class extends ka{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new uo(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new fo(this.currentPoint.clone(),new _e(e,t),new _e(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new ho(this.currentPoint.clone(),new _e(e,t),new _e(n,i),new _e(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new mo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){let l=new sr(e,t,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},rr=class extends go{constructor(e){super(e),this.uuid=Rn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new go().fromJSON(i))}return this}};function fg(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Nf(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=xg(s,e,r,t)),s.length>80*t){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=t;d<i;d+=t){let f=s[d],m=s[d+1];f<a&&(a=f),m<c&&(c=m),f>h&&(h=f),m>u&&(u=m)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return _o(r,o,t,a,c,l,0),o}function Nf(s,e,t,n,i){let r;if(i===Cg(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=Ld(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Ld(o/n|0,s[o],s[o+1],r);return r&&or(r,r.next)&&(yo(r),r=r.next),r}function ps(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(or(t,t.next)||Ct(t.prev,t,t.next)===0)){if(yo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function _o(s,e,t,n,i,r,o){if(!s)return;!o&&r&&bg(s,n,i,r);let a=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(r?mg(s,n,i,r):pg(s)){e.push(c.i,s.i,l.i),yo(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=gg(ps(s),e),_o(s,e,t,n,i,r,2)):o===2&&_g(s,e,t,n,i,r):_o(ps(s),e,t,n,i,r,1);break}}}function pg(s){let e=s.prev,t=s,n=s.next;if(Ct(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(i,r,o),u=Math.min(a,c,l),d=Math.max(i,r,o),f=Math.max(a,c,l),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Vr(i,a,r,c,o,l,m.x,m.y)&&Ct(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function mg(s,e,t,n){let i=s.prev,r=s,o=s.next;if(Ct(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=Math.min(a,c,l),m=Math.min(h,u,d),_=Math.max(a,c,l),g=Math.max(h,u,d),p=ah(f,m,e,t,n),T=ah(_,g,e,t,n),y=s.prevZ,x=s.nextZ;for(;y&&y.z>=p&&x&&x.z<=T;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Vr(a,h,c,u,l,d,y.x,y.y)&&Ct(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&Vr(a,h,c,u,l,d,x.x,x.y)&&Ct(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Vr(a,h,c,u,l,d,y.x,y.y)&&Ct(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=T;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&Vr(a,h,c,u,l,d,x.x,x.y)&&Ct(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function gg(s,e){let t=s;do{let n=t.prev,i=t.next.next;!or(n,i)&&Ff(n,t,t.next,i)&&xo(n,i)&&xo(i,n)&&(e.push(n.i,t.i,i.i),yo(t),yo(t.next),t=s=i),t=t.next}while(t!==s);return ps(t)}function _g(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&wg(o,a)){let c=Of(o,a);o=ps(o,o.next),c=ps(c,c.next),_o(o,e,t,n,i,r,0),_o(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function xg(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=Nf(s,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(Tg(l))}i.sort(yg);for(let r=0;r<i.length;r++)t=vg(i[r],t);return t}function yg(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function vg(s,e){let t=Mg(s,e);if(!t)return e;let n=Of(t,s);return ps(n,n.next),ps(t,t.next)}function Mg(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(or(s,t))return t;do{if(or(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Uf(i<l?n:r,i,c,l,i<l?r:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);xo(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Sg(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Sg(s,e){return Ct(s.prev,s,e.prev)<0&&Ct(e.next,s,s.next)<0}function bg(s,e,t,n){let i=s;do i.z===0&&(i.z=ah(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Eg(i)}function Eg(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function ah(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Tg(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Uf(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Vr(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&Uf(s,e,t,n,i,r,o,a)}function wg(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Ag(s,e)&&(xo(s,e)&&xo(e,s)&&Rg(s,e)&&(Ct(s.prev,s,e.prev)||Ct(s,e.prev,e))||or(s,e)&&Ct(s.prev,s,s.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function or(s,e){return s.x===e.x&&s.y===e.y}function Ff(s,e,t,n){let i=ba(Ct(s,e,t)),r=ba(Ct(s,e,n)),o=ba(Ct(t,n,s)),a=ba(Ct(t,n,e));return!!(i!==r&&o!==a||i===0&&Sa(s,t,e)||r===0&&Sa(s,n,e)||o===0&&Sa(t,s,n)||a===0&&Sa(t,e,n))}function Sa(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ba(s){return s>0?1:s<0?-1:0}function Ag(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Ff(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function xo(s,e){return Ct(s.prev,s,s.next)<0?Ct(s,e,s.next)>=0&&Ct(s,s.prev,e)>=0:Ct(s,e,s.prev)<0||Ct(s,s.next,e)<0}function Rg(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Of(s,e){let t=ch(s.i,s.x,s.y),n=ch(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ld(s,e,t,n){let i=ch(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function yo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ch(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cg(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var lh=class{static triangulate(e,t,n=2){return fg(e,t,n)}},rs=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Dd(e),Nd(n,e);let o=e.length;t.forEach(Dd);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Nd(n,t[c]);let a=lh.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Dd(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Nd(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var vo=class s extends pt{constructor(e=new rr([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new Je(i,3)),this.setAttribute("uv",new Je(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:Ig,y,x=!1,R,w,P,I;p&&(y=p.getSpacedPoints(h),x=!0,d=!1,R=p.computeFrenetFrames(h,!1),w=new S,P=new S,I=new S),d||(g=0,f=0,m=0,_=0);let b=a.extractPoints(l),M=b.shape,L=b.holes;if(!rs.isClockWise(M)){M=M.reverse();for(let ee=0,W=L.length;ee<W;ee++){let Q=L[ee];rs.isClockWise(Q)&&(L[ee]=Q.reverse())}}function Y(ee){let Q=10000000000000001e-36,te=ee[0];for(let fe=1;fe<=ee.length;fe++){let ae=fe%ee.length,me=ee[ae],Ye=me.x-te.x,Xe=me.y-te.y,A=Ye*Ye+Xe*Xe,v=Math.max(Math.abs(me.x),Math.abs(me.y),Math.abs(te.x),Math.abs(te.y)),O=Q*v*v;if(A<=O){ee.splice(ae,1),fe--;continue}te=me}}Y(M),L.forEach(Y);let $=L.length,Z=M;for(let ee=0;ee<$;ee++){let W=L[ee];M=M.concat(W)}function z(ee,W,Q){return W||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(W,Q)}let se=M.length;function K(ee,W,Q){let te,fe,ae,me=ee.x-W.x,Ye=ee.y-W.y,Xe=Q.x-ee.x,A=Q.y-ee.y,v=me*me+Ye*Ye,O=me*A-Ye*Xe;if(Math.abs(O)>Number.EPSILON){let J=Math.sqrt(v),oe=Math.sqrt(Xe*Xe+A*A),j=W.x-Ye/J,Le=W.y+me/J,ge=Q.x-A/oe,Ae=Q.y+Xe/oe,Se=((ge-j)*A-(Ae-Le)*Xe)/(me*A-Ye*Xe);te=j+me*Se-ee.x,fe=Le+Ye*Se-ee.y;let ue=te*te+fe*fe;if(ue<=2)return new _e(te,fe);ae=Math.sqrt(ue/2)}else{let J=!1;me>Number.EPSILON?Xe>Number.EPSILON&&(J=!0):me<-Number.EPSILON?Xe<-Number.EPSILON&&(J=!0):Math.sign(Ye)===Math.sign(A)&&(J=!0),J?(te=-Ye,fe=me,ae=Math.sqrt(v)):(te=me,fe=Ye,ae=Math.sqrt(v/2))}return new _e(te/ae,fe/ae)}let G=[];for(let ee=0,W=Z.length,Q=W-1,te=ee+1;ee<W;ee++,Q++,te++)Q===W&&(Q=0),te===W&&(te=0),G[ee]=K(Z[ee],Z[Q],Z[te]);let de=[],we,We=G.concat();for(let ee=0,W=$;ee<W;ee++){let Q=L[ee];we=[];for(let te=0,fe=Q.length,ae=fe-1,me=te+1;te<fe;te++,ae++,me++)ae===fe&&(ae=0),me===fe&&(me=0),we[te]=K(Q[te],Q[ae],Q[me]);de.push(we),We=We.concat(we)}let tt;if(g===0)tt=rs.triangulateShape(Z,L);else{let ee=[],W=[];for(let Q=0;Q<g;Q++){let te=Q/g,fe=f*Math.cos(te*Math.PI/2),ae=m*Math.sin(te*Math.PI/2)+_;for(let me=0,Ye=Z.length;me<Ye;me++){let Xe=z(Z[me],G[me],ae);ie(Xe.x,Xe.y,-fe),te===0&&ee.push(Xe)}for(let me=0,Ye=$;me<Ye;me++){let Xe=L[me];we=de[me];let A=[];for(let v=0,O=Xe.length;v<O;v++){let J=z(Xe[v],we[v],ae);ie(J.x,J.y,-fe),te===0&&A.push(J)}te===0&&W.push(A)}}tt=rs.triangulateShape(ee,W)}let lt=tt.length,rt=m+_;for(let ee=0;ee<se;ee++){let W=d?z(M[ee],We[ee],rt):M[ee];x?(P.copy(R.normals[0]).multiplyScalar(W.x),w.copy(R.binormals[0]).multiplyScalar(W.y),I.copy(y[0]).add(P).add(w),ie(I.x,I.y,I.z)):ie(W.x,W.y,0)}for(let ee=1;ee<=h;ee++)for(let W=0;W<se;W++){let Q=d?z(M[W],We[W],rt):M[W];x?(P.copy(R.normals[ee]).multiplyScalar(Q.x),w.copy(R.binormals[ee]).multiplyScalar(Q.y),I.copy(y[ee]).add(P).add(w),ie(I.x,I.y,I.z)):ie(Q.x,Q.y,u/h*ee)}for(let ee=g-1;ee>=0;ee--){let W=ee/g,Q=f*Math.cos(W*Math.PI/2),te=m*Math.sin(W*Math.PI/2)+_;for(let fe=0,ae=Z.length;fe<ae;fe++){let me=z(Z[fe],G[fe],te);ie(me.x,me.y,u+Q)}for(let fe=0,ae=L.length;fe<ae;fe++){let me=L[fe];we=de[fe];for(let Ye=0,Xe=me.length;Ye<Xe;Ye++){let A=z(me[Ye],we[Ye],te);x?ie(A.x,A.y+y[h-1].y,y[h-1].x+Q):ie(A.x,A.y,u+Q)}}}ne(),N();function ne(){let ee=i.length/3;if(d){let W=0,Q=se*W;for(let te=0;te<lt;te++){let fe=tt[te];re(fe[2]+Q,fe[1]+Q,fe[0]+Q)}W=h+g*2,Q=se*W;for(let te=0;te<lt;te++){let fe=tt[te];re(fe[0]+Q,fe[1]+Q,fe[2]+Q)}}else{for(let W=0;W<lt;W++){let Q=tt[W];re(Q[2],Q[1],Q[0])}for(let W=0;W<lt;W++){let Q=tt[W];re(Q[0]+se*h,Q[1]+se*h,Q[2]+se*h)}}n.addGroup(ee,i.length/3-ee,0)}function N(){let ee=i.length/3,W=0;X(Z,W),W+=Z.length;for(let Q=0,te=L.length;Q<te;Q++){let fe=L[Q];X(fe,W),W+=fe.length}n.addGroup(ee,i.length/3-ee,1)}function X(ee,W){let Q=ee.length;for(;--Q>=0;){let te=Q,fe=Q-1;fe<0&&(fe=ee.length-1);for(let ae=0,me=h+g*2;ae<me;ae++){let Ye=se*ae,Xe=se*(ae+1),A=W+te+Ye,v=W+fe+Ye,O=W+fe+Xe,J=W+te+Xe;ve(A,v,O,J)}}}function ie(ee,W,Q){c.push(ee),c.push(W),c.push(Q)}function re(ee,W,Q){xe(ee),xe(W),xe(Q);let te=i.length/3,fe=T.generateTopUV(n,i,te-3,te-2,te-1);C(fe[0]),C(fe[1]),C(fe[2])}function ve(ee,W,Q,te){xe(ee),xe(W),xe(te),xe(W),xe(Q),xe(te);let fe=i.length/3,ae=T.generateSideWallUV(n,i,fe-6,fe-3,fe-2,fe-1);C(ae[0]),C(ae[1]),C(ae[3]),C(ae[1]),C(ae[2]),C(ae[3])}function xe(ee){i.push(c[ee*3+0]),i.push(c[ee*3+1]),i.push(c[ee*3+2])}function C(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Pg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new za[i.type]().fromJSON(i)),new s(n,e.options)}},Ig={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new _e(r,o),new _e(a,c),new _e(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],_=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new _e(o,1-c),new _e(l,1-u),new _e(d,1-m),new _e(_,1-p)]:[new _e(a,1-c),new _e(h,1-u),new _e(f,1-m),new _e(g,1-p)]}};function Pg(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Mo=class s extends Fa{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},vi=class s extends pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let T=p*d-o;for(let y=0;y<l;y++){let x=y*u-r;m.push(x,-T,0),_.push(0,0,1),g.push(y/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){let y=T+l*p,x=T+l*(p+1),R=T+1+l*(p+1),w=T+1+l*p;f.push(y,x,w),f.push(x,R,w)}this.setIndex(f),this.setAttribute("position",new Je(m,3)),this.setAttribute("normal",new Je(_,3)),this.setAttribute("uv",new Je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var ms=class s extends pt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new S,d=new S,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let T=[],y=p/n,x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){let w=R/t;u.x=-e*Math.cos(i+w*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(i+w*r)*Math.sin(o+y*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(w+x,1-y),T.push(l++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){let y=h[p][T+1],x=h[p][T],R=h[p+1][T],w=h[p+1][T+1];(p!==0||o>0)&&f.push(y,x,w),(p!==n-1||c<Math.PI)&&f.push(x,R,w)}this.setIndex(f),this.setAttribute("position",new Je(m,3)),this.setAttribute("normal",new Je(_,3)),this.setAttribute("uv",new Je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var So=class s extends pt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new S,u=new S,d=new S;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){let _=m/i*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){let _=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,T=(i+1)*f+m;o.push(_,g,T),o.push(g,p,T)}this.setIndex(o),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Vn=class s extends pt{constructor(e=new po(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new S,c=new S,l=new _e,h=new S,u=[],d=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(f,2));function _(){for(let y=0;y<t;y++)g(y);g(r===!1?t:0),T(),p()}function g(y){h=e.getPointAt(y/t,h);let x=o.normals[y],R=o.binormals[y];for(let w=0;w<=i;w++){let P=w/i*Math.PI*2,I=Math.sin(P),b=-Math.cos(P);c.x=b*x.x+I*R.x,c.y=b*x.y+I*R.y,c.z=b*x.z+I*R.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let x=1;x<=i;x++){let R=(i+1)*(y-1)+(x-1),w=(i+1)*y+(x-1),P=(i+1)*y+x,I=(i+1)*(y-1)+x;m.push(R,w,I),m.push(w,P,I)}}function T(){for(let y=0;y<=t;y++)for(let x=0;x<=i;x++)l.x=y/t,l.y=x/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new za[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var ti=class extends dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xc,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_t=class extends ti{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var bo=class extends dn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xc,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bt,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ha=class extends dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Va=class extends dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ea(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Lg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Dg(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ud(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Bf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Mi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ga=class extends Mi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:is,endingEnd:is}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ss:r=e,a=2*t-n;break;case Yr:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ss:o=e,c=2*n-t;break;case Yr:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,T=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*_+.5*m,x=f*g-f*_;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+T*o[l+R]+y*o[c+R]+x*o[u+R];return r}},Eo=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Wa=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},gn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ea(t,this.TimeBufferType),this.values=Ea(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ea(e.times,Array),values:Ea(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ga(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case cs:t=this.InterpolantFactoryMethodDiscrete;break;case ls:t=this.InterpolantFactoryMethodLinear;break;case Ta:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cs;case this.InterpolantFactoryMethodLinear:return ls;case this.InterpolantFactoryMethodSmooth:return Ta}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Lg(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ta,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let _=t[u+m];if(_!==t[d+m]||_!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=ls;var Si=class extends gn{constructor(e,t,n){super(e,t,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=cs;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var To=class extends gn{constructor(e,t,n,i){super(e,t,n,i)}};To.prototype.ValueTypeName="color";var ni=class extends gn{constructor(e,t,n,i){super(e,t,n,i)}};ni.prototype.ValueTypeName="number";var Xa=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)ze.slerpFlat(r,0,o,l-a,o,l,c);return r}},ii=class extends gn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Xa(this.times,this.values,this.getValueSize(),e)}};ii.prototype.ValueTypeName="quaternion";ii.prototype.InterpolantFactoryMethodSmooth=void 0;var bi=class extends gn{constructor(e,t,n){super(e,t,n)}};bi.prototype.ValueTypeName="string";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=cs;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var si=class extends gn{constructor(e,t,n,i){super(e,t,n,i)}};si.prototype.ValueTypeName="vector";var gs=class{constructor(e="",t=-1,n=[],i=Wc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Rn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ug(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(gn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Dg(c);c=Ud(c,1,h),l=Ud(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ni(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,_){if(f.length!==0){let g=[],p=[];Bf(f,g,p,m),g.length!==0&&_.push(new u(d,g,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(let _ in f){let g=[],p=[];for(let T=0;T!==d[m].morphTargets.length;++T){let y=d[m];g.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new ni(".morphTargetInfluence["+_+"]",g,p))}c=f.length*o}else{let f=".bones["+t[u].name+"]";n(si,f+".position",d,"pos",i),n(ii,f+".quaternion",d,"rot",i),n(si,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Ng(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ni;case"vector":case"vector2":case"vector3":case"vector4":return si;case"color":return To;case"quaternion":return ii;case"bool":case"boolean":return Si;case"string":return bi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Ug(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Ng(s.type);if(s.times===void 0){let t=[],n=[];Bf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Kn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},qa=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},zf=new qa,ri=class{constructor(e){this.manager=e!==void 0?e:zf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ri.DEFAULT_MATERIAL_NAME="__DEFAULT";var gi={},hh=class extends Error{constructor(e,t){super(e),this.response=t}},ar=class extends ri{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Kn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(gi[e]!==void 0){gi[e].push({onLoad:t,onProgress:n,onError:i});return}gi[e]=[],gi[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=gi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,_=0,g=new ReadableStream({start(p){T();function T(){u.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;let R=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let w=0,P=h.length;w<P;w++){let I=h[w];I.onProgress&&I.onProgress(R)}p.enqueue(x),T()}},y=>{p.error(y)})}}});return new Response(g)}else throw new hh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Kn.add(`file:${e}`,l);let h=gi[e];delete gi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=gi[e];if(h===void 0)throw this.manager.itemError(e),l;delete gi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ys=new WeakMap,Ya=class extends ri{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Kn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Ys.get(o);u===void 0&&(u=[],Ys.set(o,u)),u.push({onLoad:t,onError:i})}return o}let a=$s("img");function c(){h(),t&&t(this);let u=Ys.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Ys.delete(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),Kn.remove(`image:${e}`);let d=Ys.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}Ys.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Kn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var wo=class extends ri{constructor(e){super(e)}load(e,t,n,i){let r=new Ht,o=new Ya(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},_s=class extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ao=class extends _s{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},th=new He,Fd=new S,Od=new S,Ro=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $n,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Fd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fd),Od.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Od),t.updateMatrixWorld(),th.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(th,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},uh=class extends Ro{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=hs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Co=class extends _s{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new uh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Bd=new He,Hr=new S,nh=new S,dh=class extends Ro{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Hr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hr),nh.copy(n.position),nh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(nh),n.updateMatrixWorld(),i.makeTranslation(-Hr.x,-Hr.y,-Hr.z),Bd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bd,n.coordinateSystem,n.reversedDepth)}},xs=class extends _s{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new dh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ys=class extends eo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},fh=class extends Ro{constructor(){super(new ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qi=class extends _s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new fh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ei=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ih=new WeakMap,Io=class extends ri{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Kn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{if(ih.has(o)===!0)i&&i(ih.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Kn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ih.set(c,l),Kn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Kn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ka=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Za=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){ze.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;ze.multiplyQuaternionsFlat(e,o,e,t,e,n),ze.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Uh="\\[\\]\\.:\\/",Fg=new RegExp("["+Uh+"]","g"),Fh="[^"+Uh+"]",Og="[^"+Uh.replace("\\.","")+"]",Bg=/((?:WC+[\/:])*)/.source.replace("WC",Fh),zg=/(WCOD+)?/.source.replace("WCOD",Og),kg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fh),Hg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fh),Vg=new RegExp("^"+Bg+zg+kg+Hg+"$"),Gg=["material","materials","bones","map"],ph=class{constructor(e,t,n){let i=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fg,"")}static parseTrackName(e){let t=Vg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Gg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=ph;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ja=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:is,endingEnd:is};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=_f,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case yf:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Wc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===xf;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===gf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=ss,i.endingEnd=ss):(e?i.endingStart=this.zeroSlopeAtStart?ss:is:i.endingStart=Yr,t?i.endingEnd=this.zeroSlopeAtEnd?ss:is:i.endingEnd=Yr)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},Wg=new Float32Array(1),Po=class extends Zn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=i[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}let _=t&&t._propertyBindings[u].binding.parsedPath;m=new Za(Mt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Eo(new Float32Array(2),new Float32Array(2),1,Wg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?gs.findByName(i,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Wc),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new Ja(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?gs.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};function Oh(s,e,t,n){let i=Xg(n);switch(t){case Th:return s*e;case dc:return s*e/i.components*i.byteLength;case fc:return s*e/i.components*i.byteLength;case Ah:return s*e*2/i.components*i.byteLength;case pc:return s*e*2/i.components*i.byteLength;case wh:return s*e*3/i.components*i.byteLength;case bn:return s*e*4/i.components*i.byteLength;case mc:return s*e*4/i.components*i.byteLength;case Do:case No:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Uo:case Fo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _c:case yc:return Math.max(s,16)*Math.max(e,8)/4;case gc:case xc:return Math.max(s,8)*Math.max(e,8)/2;case vc:case Mc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Sc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case wc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Uc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Oc:case Bc:case zc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case kc:case Hc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Vc:case Gc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xg(s){switch(s){case Wn:case Mh:return{byteLength:1,components:1};case lr:case Sh:case hr:return{byteLength:2,components:1};case hc:case uc:return{byteLength:2,components:4};case Yi:case lc:case Cn:return{byteLength:4,components:1};case bh:case Eh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function lp(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Yg(s){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let _=u[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$g=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,t0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,i0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,a0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,c0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,x0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,y0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E0="gl_FragColor = linearToOutputTexel( gl_FragColor );",T0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,A0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,R0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,P0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,F0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,k0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,H0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,q0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Y0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,i_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,h_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,d_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,f_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,g_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,__=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,b_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,I_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,P_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,L_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,D_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,U_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,O_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,H_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,V_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,G_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,W_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,q_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Y_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ex=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ox=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ax=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ux=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,px=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_x=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ex=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:Kg,alphahash_pars_fragment:Zg,alphamap_fragment:Jg,alphamap_pars_fragment:$g,alphatest_fragment:jg,alphatest_pars_fragment:Qg,aomap_fragment:e0,aomap_pars_fragment:t0,batching_pars_vertex:n0,batching_vertex:i0,begin_vertex:s0,beginnormal_vertex:r0,bsdfs:o0,iridescence_fragment:a0,bumpmap_pars_fragment:c0,clipping_planes_fragment:l0,clipping_planes_pars_fragment:h0,clipping_planes_pars_vertex:u0,clipping_planes_vertex:d0,color_fragment:f0,color_pars_fragment:p0,color_pars_vertex:m0,color_vertex:g0,common:_0,cube_uv_reflection_fragment:x0,defaultnormal_vertex:y0,displacementmap_pars_vertex:v0,displacementmap_vertex:M0,emissivemap_fragment:S0,emissivemap_pars_fragment:b0,colorspace_fragment:E0,colorspace_pars_fragment:T0,envmap_fragment:w0,envmap_common_pars_fragment:A0,envmap_pars_fragment:R0,envmap_pars_vertex:C0,envmap_physical_pars_fragment:k0,envmap_vertex:I0,fog_vertex:P0,fog_pars_vertex:L0,fog_fragment:D0,fog_pars_fragment:N0,gradientmap_pars_fragment:U0,lightmap_pars_fragment:F0,lights_lambert_fragment:O0,lights_lambert_pars_fragment:B0,lights_pars_begin:z0,lights_toon_fragment:H0,lights_toon_pars_fragment:V0,lights_phong_fragment:G0,lights_phong_pars_fragment:W0,lights_physical_fragment:X0,lights_physical_pars_fragment:q0,lights_fragment_begin:Y0,lights_fragment_maps:K0,lights_fragment_end:Z0,logdepthbuf_fragment:J0,logdepthbuf_pars_fragment:$0,logdepthbuf_pars_vertex:j0,logdepthbuf_vertex:Q0,map_fragment:e_,map_pars_fragment:t_,map_particle_fragment:n_,map_particle_pars_fragment:i_,metalnessmap_fragment:s_,metalnessmap_pars_fragment:r_,morphinstance_vertex:o_,morphcolor_vertex:a_,morphnormal_vertex:c_,morphtarget_pars_vertex:l_,morphtarget_vertex:h_,normal_fragment_begin:u_,normal_fragment_maps:d_,normal_pars_fragment:f_,normal_pars_vertex:p_,normal_vertex:m_,normalmap_pars_fragment:g_,clearcoat_normal_fragment_begin:__,clearcoat_normal_fragment_maps:x_,clearcoat_pars_fragment:y_,iridescence_pars_fragment:v_,opaque_fragment:M_,packing:S_,premultiplied_alpha_fragment:b_,project_vertex:E_,dithering_fragment:T_,dithering_pars_fragment:w_,roughnessmap_fragment:A_,roughnessmap_pars_fragment:R_,shadowmap_pars_fragment:C_,shadowmap_pars_vertex:I_,shadowmap_vertex:P_,shadowmask_pars_fragment:L_,skinbase_vertex:D_,skinning_pars_vertex:N_,skinning_vertex:U_,skinnormal_vertex:F_,specularmap_fragment:O_,specularmap_pars_fragment:B_,tonemapping_fragment:z_,tonemapping_pars_fragment:k_,transmission_fragment:H_,transmission_pars_fragment:V_,uv_pars_fragment:G_,uv_pars_vertex:W_,uv_vertex:X_,worldpos_vertex:q_,background_vert:Y_,background_frag:K_,backgroundCube_vert:Z_,backgroundCube_frag:J_,cube_vert:$_,cube_frag:j_,depth_vert:Q_,depth_frag:ex,distanceRGBA_vert:tx,distanceRGBA_frag:nx,equirect_vert:ix,equirect_frag:sx,linedashed_vert:rx,linedashed_frag:ox,meshbasic_vert:ax,meshbasic_frag:cx,meshlambert_vert:lx,meshlambert_frag:hx,meshmatcap_vert:ux,meshmatcap_frag:dx,meshnormal_vert:fx,meshnormal_frag:px,meshphong_vert:mx,meshphong_frag:gx,meshphysical_vert:_x,meshphysical_frag:xx,meshtoon_vert:yx,meshtoon_frag:vx,points_vert:Mx,points_frag:Sx,shadow_vert:bx,shadow_frag:Ex,sprite_vert:Tx,sprite_frag:wx},Ee={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},ai={basic:{uniforms:rn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:rn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ue(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:rn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:rn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:rn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ue(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:rn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:rn([Ee.points,Ee.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:rn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:rn([Ee.common,Ee.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:rn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:rn([Ee.sprite,Ee.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:rn([Ee.common,Ee.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:rn([Ee.lights,Ee.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ai.physical={uniforms:rn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var qc={r:0,b:0,g:0},Es=new bt,Ax=new He;function Rx(s,e,t,n,i,r,o){let a=new Ue(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1,R=m(y);R===null?p(a,c):R&&R.isColor&&(p(R,1),x=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(y,x){let R=m(x);R&&(R.isCubeTexture||R.mapping===Lo)?(h===void 0&&(h=new Ke(new Wi(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:bs(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Es.copy(x.backgroundRotation),Es.x*=-1,Es.y*=-1,Es.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(Es)),h.material.toneMapped=ct.getTransfer(R.colorSpace)!==vt,(u!==R||d!==R.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Ke(new vi(2,2),new Mn({name:"BackgroundMaterial",uniforms:bs(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ct.getTransfer(R.colorSpace)!==vt,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=R,d=R.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,x){y.getRGB(qc,Dh(s)),n.buffers.color.setClear(qc.r,qc.g,qc.b,x,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:g,dispose:T}}function Cx(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(M,L,H,Y,$){let Z=!1,z=u(Y,H,L);r!==z&&(r=z,l(r.object)),Z=f(M,Y,H,$),Z&&m(M,Y,H,$),$!==null&&e.update($,s.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(M,L,H,Y),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,L,H){let Y=H.wireframe===!0,$=n[M.id];$===void 0&&($={},n[M.id]=$);let Z=$[L.id];Z===void 0&&(Z={},$[L.id]=Z);let z=Z[Y];return z===void 0&&(z=d(c()),Z[Y]=z),z}function d(M){let L=[],H=[],Y=[];for(let $=0;$<t;$++)L[$]=0,H[$]=0,Y[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:Y,object:M,attributes:{},index:null}}function f(M,L,H,Y){let $=r.attributes,Z=L.attributes,z=0,se=H.getAttributes();for(let K in se)if(se[K].location>=0){let de=$[K],we=Z[K];if(we===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(we=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(we=M.instanceColor)),de===void 0||de.attribute!==we||we&&de.data!==we.data)return!0;z++}return r.attributesNum!==z||r.index!==Y}function m(M,L,H,Y){let $={},Z=L.attributes,z=0,se=H.getAttributes();for(let K in se)if(se[K].location>=0){let de=Z[K];de===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(de=M.instanceColor));let we={};we.attribute=de,de&&de.data&&(we.data=de.data),$[K]=we,z++}r.attributes=$,r.attributesNum=z,r.index=Y}function _(){let M=r.newAttributes;for(let L=0,H=M.length;L<H;L++)M[L]=0}function g(M){p(M,0)}function p(M,L){let H=r.newAttributes,Y=r.enabledAttributes,$=r.attributeDivisors;H[M]=1,Y[M]===0&&(s.enableVertexAttribArray(M),Y[M]=1),$[M]!==L&&(s.vertexAttribDivisor(M,L),$[M]=L)}function T(){let M=r.newAttributes,L=r.enabledAttributes;for(let H=0,Y=L.length;H<Y;H++)L[H]!==M[H]&&(s.disableVertexAttribArray(H),L[H]=0)}function y(M,L,H,Y,$,Z,z){z===!0?s.vertexAttribIPointer(M,L,H,$,Z):s.vertexAttribPointer(M,L,H,Y,$,Z)}function x(M,L,H,Y){_();let $=Y.attributes,Z=H.getAttributes(),z=L.defaultAttributeValues;for(let se in Z){let K=Z[se];if(K.location>=0){let G=$[se];if(G===void 0&&(se==="instanceMatrix"&&M.instanceMatrix&&(G=M.instanceMatrix),se==="instanceColor"&&M.instanceColor&&(G=M.instanceColor)),G!==void 0){let de=G.normalized,we=G.itemSize,We=e.get(G);if(We===void 0)continue;let tt=We.buffer,lt=We.type,rt=We.bytesPerElement,ne=lt===s.INT||lt===s.UNSIGNED_INT||G.gpuType===lc;if(G.isInterleavedBufferAttribute){let N=G.data,X=N.stride,ie=G.offset;if(N.isInstancedInterleavedBuffer){for(let re=0;re<K.locationSize;re++)p(K.location+re,N.meshPerAttribute);M.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let re=0;re<K.locationSize;re++)g(K.location+re);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let re=0;re<K.locationSize;re++)y(K.location+re,we/K.locationSize,lt,de,X*rt,(ie+we/K.locationSize*re)*rt,ne)}else{if(G.isInstancedBufferAttribute){for(let N=0;N<K.locationSize;N++)p(K.location+N,G.meshPerAttribute);M.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let N=0;N<K.locationSize;N++)g(K.location+N);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let N=0;N<K.locationSize;N++)y(K.location+N,we/K.locationSize,lt,de,we*rt,we/K.locationSize*N*rt,ne)}}else if(z!==void 0){let de=z[se];if(de!==void 0)switch(de.length){case 2:s.vertexAttrib2fv(K.location,de);break;case 3:s.vertexAttrib3fv(K.location,de);break;case 4:s.vertexAttrib4fv(K.location,de);break;default:s.vertexAttrib1fv(K.location,de)}}}}T()}function R(){I();for(let M in n){let L=n[M];for(let H in L){let Y=L[H];for(let $ in Y)h(Y[$].object),delete Y[$];delete L[H]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;let L=n[M.id];for(let H in L){let Y=L[H];for(let $ in Y)h(Y[$].object),delete Y[$];delete L[H]}delete n[M.id]}function P(M){for(let L in n){let H=n[L];if(H[M.id]===void 0)continue;let Y=H[M.id];for(let $ in Y)h(Y[$].object),delete Y[$];delete H[M.id]}}function I(){b(),o=!0,r!==i&&(r=i,l(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:T}}function Ix(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Px(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(P){return!(P!==bn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let I=P===hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Wn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Cn&&!I)}function c(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:R,maxSamples:w}}function Lx(s){let e=this,t=null,n=0,i=!1,r=!1,o=new An,a=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{let T=r?0:n,y=T*4,x=p.clippingState||null;c.value=x,x=h(m,d,y,f);for(let R=0;R!==y;++R)x[R]=t[R];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=c.value,m!==!0||g===null){let p=f+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(T,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Dx(s){let e=new WeakMap;function t(o,a){return a===oc?o.mapping=vs:a===ac&&(o.mapping=Ms),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===oc||a===ac)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Da(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var mr=4,kf=[.125,.215,.35,.446,.526,.582],As=20,Bh=new ys,Hf=new Ue,zh=null,kh=0,Hh=0,Vh=!1,ws=(1+Math.sqrt(5))/2,pr=1/ws,Vf=[new S(-ws,pr,0),new S(ws,pr,0),new S(-pr,0,ws),new S(pr,0,ws),new S(0,ws,-pr),new S(0,ws,pr),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],Nx=new S,_r=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=Nx}=r;zh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zh,kh,Hh),this._renderer.xr.enabled=Vh,e.scissorTest=!1,Yc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:hr,format:bn,colorSpace:Jt,depthBuffer:!1},i=Gf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ux(r)),this._blurMaterial=Fx(r,e,t)}return i}_compileMaterial(e){let t=new Ke(this._lodPlanes[0],e);this._renderer.compile(t,Bh)}_sceneToCubeUV(e,t,n,i,r){let c=new kt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Hf),u.toneMapping=wi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));let _=new $t({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new Ke(new Wi,_),p=!1,T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,p=!0):(_.color.copy(Hf),p=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):x===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));let R=this._cubeSize;Yc(i,x*R,y>2?R:0,R,R),u.setRenderTarget(i),p&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===vs||e.mapping===Ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wf());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Yc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Bh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Vf[(i-r-1)%Vf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ke(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*As-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):As;g>As&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${As}`);let p=[],T=0;for(let P=0;P<As;++P){let I=P/_,b=Math.exp(-I*I/2);p.push(b),P===0?T+=b:P<g&&(T+=2*b)}for(let P=0;P<p.length;P++)p[P]=p[P]/T;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;let x=this._sizeLods[i],R=3*x*(i>y-mr?i-y+mr:0),w=4*(this._cubeSize-x);Yc(t,R,w,3*x,2*x),c.setRenderTarget(t),c.render(u,Bh)}};function Ux(s){let e=[],t=[],n=[],i=s,r=s-mr+1+kf.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>s-mr?c=kf[o-s+mr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,T=new Float32Array(_*m*f),y=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let w=0;w<f;w++){let P=w%3*2/3-1,I=w>2?0:-1,b=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];T.set(b,_*m*w),y.set(d,g*m*w);let M=[w,w,w,w,w,w];x.set(M,p*m*w)}let R=new pt;R.setAttribute("position",new Ut(T,_)),R.setAttribute("uv",new Ut(y,g)),R.setAttribute("faceIndex",new Ut(x,p)),e.push(R),i>mr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gf(s,e,t){let n=new Jn(s,e,t);return n.texture.mapping=Lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yc(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Fx(s,e,t){let n=new Float32Array(As),i=new S(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Wf(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Xf(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function jh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ox(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===oc||c===ac,h=c===vs||c===Ms;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new _r(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new _r(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Bx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&js("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zx(s,e,t,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,m=u.attributes.position,_=0;if(f!==null){let T=f.array;_=f.version;for(let y=0,x=T.length;y<x;y+=3){let R=T[y+0],w=T[y+1],P=T[y+2];d.push(R,w,w,P,P,R)}}else if(m!==void 0){let T=m.array;_=m.version;for(let y=0,x=T.length/3-1;y<x;y+=3){let R=y+0,w=y+1,P=y+2;d.push(R,w,w,P,P,R)}}else return;let g=new(Lh(d)?Qr:jr)(d,1);g.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function kx(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*o,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,_){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let T=0;T<m;T++)p+=f[T]*_[T];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Hx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Vx(s,e,t){let n=new WeakMap,i=new ft;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let b=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],y=0;f===!0&&(y=1),m===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let w=new Float32Array(x*R*4*u),P=new Jr(w,x,R,u);P.type=Cn,P.needsUpdate=!0;let I=y*4;for(let M=0;M<u;M++){let L=g[M],H=p[M],Y=T[M],$=x*R*4*M;for(let Z=0;Z<L.count;Z++){let z=Z*I;f===!0&&(i.fromBufferAttribute(L,Z),w[$+z+0]=i.x,w[$+z+1]=i.y,w[$+z+2]=i.z,w[$+z+3]=0),m===!0&&(i.fromBufferAttribute(H,Z),w[$+z+4]=i.x,w[$+z+5]=i.y,w[$+z+6]=i.z,w[$+z+7]=0),_===!0&&(i.fromBufferAttribute(Y,Z),w[$+z+8]=i.x,w[$+z+9]=i.y,w[$+z+10]=i.z,w[$+z+11]=Y.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new _e(x,R)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Gx(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var hp=new Ht,qf=new co(1,1),up=new Jr,dp=new Pa,fp=new to,Yf=[],Kf=[],Zf=new Float32Array(16),Jf=new Float32Array(9),$f=new Float32Array(4);function xr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Yf[i];if(r===void 0&&(r=new Float32Array(i),Yf[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Vt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Gt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Jc(s,e){let t=Kf[e];t===void 0&&(t=new Int32Array(e),Kf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Wx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Xx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;s.uniform2fv(this.addr,e),Gt(t,e)}}function qx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;s.uniform3fv(this.addr,e),Gt(t,e)}}function Yx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;s.uniform4fv(this.addr,e),Gt(t,e)}}function Kx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;$f.set(n),s.uniformMatrix2fv(this.addr,!1,$f),Gt(t,n)}}function Zx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Jf.set(n),s.uniformMatrix3fv(this.addr,!1,Jf),Gt(t,n)}}function Jx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Zf.set(n),s.uniformMatrix4fv(this.addr,!1,Zf),Gt(t,n)}}function $x(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function jx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;s.uniform2iv(this.addr,e),Gt(t,e)}}function Qx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;s.uniform3iv(this.addr,e),Gt(t,e)}}function ey(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;s.uniform4iv(this.addr,e),Gt(t,e)}}function ty(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ny(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;s.uniform2uiv(this.addr,e),Gt(t,e)}}function iy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;s.uniform3uiv(this.addr,e),Gt(t,e)}}function sy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;s.uniform4uiv(this.addr,e),Gt(t,e)}}function ry(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(qf.compareFunction=Ch,r=qf):r=hp,t.setTexture2D(e||r,i)}function oy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||dp,i)}function ay(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||fp,i)}function cy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||up,i)}function ly(s){switch(s){case 5126:return Wx;case 35664:return Xx;case 35665:return qx;case 35666:return Yx;case 35674:return Kx;case 35675:return Zx;case 35676:return Jx;case 5124:case 35670:return $x;case 35667:case 35671:return jx;case 35668:case 35672:return Qx;case 35669:case 35673:return ey;case 5125:return ty;case 36294:return ny;case 36295:return iy;case 36296:return sy;case 35678:case 36198:case 36298:case 36306:case 35682:return ry;case 35679:case 36299:case 36307:return oy;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return cy}}function hy(s,e){s.uniform1fv(this.addr,e)}function uy(s,e){let t=xr(e,this.size,2);s.uniform2fv(this.addr,t)}function dy(s,e){let t=xr(e,this.size,3);s.uniform3fv(this.addr,t)}function fy(s,e){let t=xr(e,this.size,4);s.uniform4fv(this.addr,t)}function py(s,e){let t=xr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function my(s,e){let t=xr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function gy(s,e){let t=xr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function _y(s,e){s.uniform1iv(this.addr,e)}function xy(s,e){s.uniform2iv(this.addr,e)}function yy(s,e){s.uniform3iv(this.addr,e)}function vy(s,e){s.uniform4iv(this.addr,e)}function My(s,e){s.uniform1uiv(this.addr,e)}function Sy(s,e){s.uniform2uiv(this.addr,e)}function by(s,e){s.uniform3uiv(this.addr,e)}function Ey(s,e){s.uniform4uiv(this.addr,e)}function Ty(s,e,t){let n=this.cache,i=e.length,r=Jc(t,i);Vt(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||hp,r[o])}function wy(s,e,t){let n=this.cache,i=e.length,r=Jc(t,i);Vt(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||dp,r[o])}function Ay(s,e,t){let n=this.cache,i=e.length,r=Jc(t,i);Vt(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||fp,r[o])}function Ry(s,e,t){let n=this.cache,i=e.length,r=Jc(t,i);Vt(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||up,r[o])}function Cy(s){switch(s){case 5126:return hy;case 35664:return uy;case 35665:return dy;case 35666:return fy;case 35674:return py;case 35675:return my;case 35676:return gy;case 5124:case 35670:return _y;case 35667:case 35671:return xy;case 35668:case 35672:return yy;case 35669:case 35673:return vy;case 5125:return My;case 36294:return Sy;case 36295:return by;case 36296:return Ey;case 35678:case 36198:case 36298:case 36306:case 35682:return Ty;case 35679:case 36299:case 36307:return wy;case 35680:case 36300:case 36308:case 36293:return Ay;case 36289:case 36303:case 36311:case 36292:return Ry}}var Wh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ly(t.type)}},Xh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cy(t.type)}},qh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Gh=/(\w+)(\])?(\[|\.)?/g;function jf(s,e){s.seq.push(e),s.map[e.id]=e}function Iy(s,e,t){let n=s.name,i=n.length;for(Gh.lastIndex=0;;){let r=Gh.exec(n),o=Gh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){jf(t,l===void 0?new Wh(a,s,e):new Xh(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new qh(a),jf(t,u)),t=u}}}var gr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Iy(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Qf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Py=37297,Ly=0;function Dy(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var ep=new Qe;function Ny(s){ct._getMatrix(ep,ct.workingColorSpace,s);let e=`mat3( ${ep.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(s)){case Kr:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function tp(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Dy(s.getShaderSource(e),a)}else return r}function Uy(s,e){let t=Ny(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Fy(s,e){let t;switch(e){case lf:t="Linear";break;case hf:t="Reinhard";break;case uf:t="Cineon";break;case rc:t="ACESFilmic";break;case ff:t="AgX";break;case pf:t="Neutral";break;case df:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Kc=new S;function Oy(){ct.getLuminanceCoefficients(Kc);let s=Kc.x.toFixed(4),e=Kc.y.toFixed(4),t=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function By(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function zy(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ky(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Bo(s){return s!==""}function np(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ip(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Hy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yh(s){return s.replace(Hy,Gy)}var Vy=new Map;function Gy(s,e){let t=et[e];if(t===void 0){let n=Vy.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yh(t)}var Wy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sp(s){return s.replace(Wy,Xy)}function Xy(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function rp(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qy(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===gh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Hd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function Yy(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case vs:case Ms:e="ENVMAP_TYPE_CUBE";break;case Lo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ky(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function Zy(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case sc:e="ENVMAP_BLENDING_MULTIPLY";break;case af:e="ENVMAP_BLENDING_MIX";break;case cf:e="ENVMAP_BLENDING_ADD";break}return e}function Jy(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $y(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=qy(t),l=Yy(t),h=Ky(t),u=Zy(t),d=Jy(t),f=By(t),m=zy(r),_=i.createProgram(),g,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Bo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Bo).join(`
`),p.length>0&&(p+=`
`)):(g=[rp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),p=[rp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?et.tonemapping_pars_fragment:"",t.toneMapping!==wi?Fy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Uy("linearToOutputTexel",t.outputColorSpace),Oy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bo).join(`
`)),o=Yh(o),o=np(o,t),o=ip(o,t),a=Yh(a),a=np(a,t),a=ip(a,t),o=sp(o),a=sp(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=T+g+o,x=T+p+a,R=Qf(i,i.VERTEX_SHADER,y),w=Qf(i,i.FRAGMENT_SHADER,x);i.attachShader(_,R),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function P(L){if(s.debug.checkShaderErrors){let H=i.getProgramInfoLog(_)||"",Y=i.getShaderInfoLog(R)||"",$=i.getShaderInfoLog(w)||"",Z=H.trim(),z=Y.trim(),se=$.trim(),K=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,R,w);else{let de=tp(i,R,"vertex"),we=tp(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Z+`
`+de+`
`+we)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(z===""||se==="")&&(G=!1);G&&(L.diagnostics={runnable:K,programLog:Z,vertexShader:{log:z,prefix:g},fragmentShader:{log:se,prefix:p}})}i.deleteShader(R),i.deleteShader(w),I=new gr(i,_),b=ky(i,_)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Py)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ly++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}var jy=0,Kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Zh(e),t.set(e,n)),n}},Zh=class{constructor(e){this.id=jy++,this.code=e,this.usedTimes=0}};function Qy(s,e,t,n,i,r,o){let a=new $r,c=new Kh,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,M,L,H,Y){let $=H.fog,Z=Y.geometry,z=b.isMeshStandardMaterial?H.environment:null,se=(b.isMeshStandardMaterial?t:e).get(b.envMap||z),K=se&&se.mapping===Lo?se.image.height:null,G=m[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let de=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,we=de!==void 0?de.length:0,We=0;Z.morphAttributes.position!==void 0&&(We=1),Z.morphAttributes.normal!==void 0&&(We=2),Z.morphAttributes.color!==void 0&&(We=3);let tt,lt,rt,ne;if(G){let ht=ai[G];tt=ht.vertexShader,lt=ht.fragmentShader}else tt=b.vertexShader,lt=b.fragmentShader,c.update(b),rt=c.getVertexShaderID(b),ne=c.getFragmentShaderID(b);let N=s.getRenderTarget(),X=s.state.buffers.depth.getReversed(),ie=Y.isInstancedMesh===!0,re=Y.isBatchedMesh===!0,ve=!!b.map,xe=!!b.matcap,C=!!se,ee=!!b.aoMap,W=!!b.lightMap,Q=!!b.bumpMap,te=!!b.normalMap,fe=!!b.displacementMap,ae=!!b.emissiveMap,me=!!b.metalnessMap,Ye=!!b.roughnessMap,Xe=b.anisotropy>0,A=b.clearcoat>0,v=b.dispersion>0,O=b.iridescence>0,J=b.sheen>0,oe=b.transmission>0,j=Xe&&!!b.anisotropyMap,Le=A&&!!b.clearcoatMap,ge=A&&!!b.clearcoatNormalMap,Ae=A&&!!b.clearcoatRoughnessMap,Se=O&&!!b.iridescenceMap,ue=O&&!!b.iridescenceThicknessMap,Me=J&&!!b.sheenColorMap,Oe=J&&!!b.sheenRoughnessMap,Ce=!!b.specularMap,he=!!b.specularColorMap,Ze=!!b.specularIntensityMap,D=oe&&!!b.transmissionMap,pe=oe&&!!b.thicknessMap,ye=!!b.gradientMap,Ie=!!b.alphaMap,B=b.alphaTest>0,k=!!b.alphaHash,Te=!!b.extensions,De=wi;b.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(De=s.toneMapping);let $e={shaderID:G,shaderType:b.type,shaderName:b.name,vertexShader:tt,fragmentShader:lt,defines:b.defines,customVertexShaderID:rt,customFragmentShaderID:ne,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:re,batchingColor:re&&Y._colorsTexture!==null,instancing:ie,instancingColor:ie&&Y.instanceColor!==null,instancingMorph:ie&&Y.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:N===null?s.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Jt,alphaToCoverage:!!b.alphaToCoverage,map:ve,matcap:xe,envMap:C,envMapMode:C&&se.mapping,envMapCubeUVHeight:K,aoMap:ee,lightMap:W,bumpMap:Q,normalMap:te,displacementMap:d&&fe,emissiveMap:ae,normalMapObjectSpace:te&&b.normalMapType===Sf,normalMapTangentSpace:te&&b.normalMapType===Xc,metalnessMap:me,roughnessMap:Ye,anisotropy:Xe,anisotropyMap:j,clearcoat:A,clearcoatMap:Le,clearcoatNormalMap:ge,clearcoatRoughnessMap:Ae,dispersion:v,iridescence:O,iridescenceMap:Se,iridescenceThicknessMap:ue,sheen:J,sheenColorMap:Me,sheenRoughnessMap:Oe,specularMap:Ce,specularColorMap:he,specularIntensityMap:Ze,transmission:oe,transmissionMap:D,thicknessMap:pe,gradientMap:ye,opaque:b.transparent===!1&&b.blending===os&&b.alphaToCoverage===!1,alphaMap:Ie,alphaTest:B,alphaHash:k,combine:b.combine,mapUv:ve&&_(b.map.channel),aoMapUv:ee&&_(b.aoMap.channel),lightMapUv:W&&_(b.lightMap.channel),bumpMapUv:Q&&_(b.bumpMap.channel),normalMapUv:te&&_(b.normalMap.channel),displacementMapUv:fe&&_(b.displacementMap.channel),emissiveMapUv:ae&&_(b.emissiveMap.channel),metalnessMapUv:me&&_(b.metalnessMap.channel),roughnessMapUv:Ye&&_(b.roughnessMap.channel),anisotropyMapUv:j&&_(b.anisotropyMap.channel),clearcoatMapUv:Le&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ge&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(b.sheenRoughnessMap.channel),specularMapUv:Ce&&_(b.specularMap.channel),specularColorMapUv:he&&_(b.specularColorMap.channel),specularIntensityMapUv:Ze&&_(b.specularIntensityMap.channel),transmissionMapUv:D&&_(b.transmissionMap.channel),thicknessMapUv:pe&&_(b.thicknessMap.channel),alphaMapUv:Ie&&_(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(te||Xe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!Z.attributes.uv&&(ve||Ie),fog:!!$,useFog:b.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:X,skinning:Y.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:We,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:De,decodeVideoTexture:ve&&b.map.isVideoTexture===!0&&ct.getTransfer(b.map.colorSpace)===vt,decodeVideoTextureEmissive:ae&&b.emissiveMap.isVideoTexture===!0&&ct.getTransfer(b.emissiveMap.colorSpace)===vt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Pt,flipSided:b.side===jt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Te&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&b.extensions.multiDraw===!0||re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return $e.vertexUv1s=l.has(1),$e.vertexUv2s=l.has(2),$e.vertexUv3s=l.has(3),l.clear(),$e}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(T(M,b),y(M,b),M.push(s.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function T(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){let M=m[b.type],L;if(M){let H=ai[M];L=Df.clone(H.uniforms)}else L=b.uniforms;return L}function R(b,M){let L;for(let H=0,Y=h.length;H<Y;H++){let $=h[H];if($.cacheKey===M){L=$,++L.usedTimes;break}}return L===void 0&&(L=new $y(s,M,b,r),h.push(L)),L}function w(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function P(b){c.remove(b)}function I(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:w,releaseShaderCache:P,programs:h,dispose:I}}function ev(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function tv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function op(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ap(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,m,_,g){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),e++,p}function a(u,d,f,m,_,g){let p=o(u,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,m,_,g){let p=o(u,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||tv),n.length>1&&n.sort(d||op),i.length>1&&i.sort(d||op)}function h(){for(let u=e,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function nv(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new ap,s.set(n,[o])):i>=r.length?(o=new ap,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function iv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new Ue};break;case"SpotLight":t={position:new S,direction:new S,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new S,halfWidth:new S,halfHeight:new S};break}return s[e.id]=t,t}}}function sv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var rv=0;function ov(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function av(s){let e=new iv,t=sv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new S);let i=new S,r=new He,o=new He;function a(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,T=0,y=0,x=0,R=0,w=0,P=0;l.sort(ov);for(let b=0,M=l.length;b<M;b++){let L=l[b],H=L.color,Y=L.intensity,$=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=H.r*Y,u+=H.g*Y,d+=H.b*Y;else if(L.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(L.sh.coefficients[z],Y);P++}else if(L.isDirectionalLight){let z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let se=L.shadow,K=t.get(L);K.shadowIntensity=se.intensity,K.shadowBias=se.bias,K.shadowNormalBias=se.normalBias,K.shadowRadius=se.radius,K.shadowMapSize=se.mapSize,n.directionalShadow[f]=K,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=L.shadow.matrix,T++}n.directional[f]=z,f++}else if(L.isSpotLight){let z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(H).multiplyScalar(Y),z.distance=$,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,n.spot[_]=z;let se=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,se.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=se.matrix,L.castShadow){let K=t.get(L);K.shadowIntensity=se.intensity,K.shadowBias=se.bias,K.shadowNormalBias=se.normalBias,K.shadowRadius=se.radius,K.shadowMapSize=se.mapSize,n.spotShadow[_]=K,n.spotShadowMap[_]=Z,x++}_++}else if(L.isRectAreaLight){let z=e.get(L);z.color.copy(H).multiplyScalar(Y),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=z,g++}else if(L.isPointLight){let z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){let se=L.shadow,K=t.get(L);K.shadowIntensity=se.intensity,K.shadowBias=se.bias,K.shadowNormalBias=se.normalBias,K.shadowRadius=se.radius,K.shadowMapSize=se.mapSize,K.shadowCameraNear=se.camera.near,K.shadowCameraFar=se.camera.far,n.pointShadow[m]=K,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=L.shadow.matrix,y++}n.point[m]=z,m++}else if(L.isHemisphereLight){let z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(Y),z.groundColor.copy(L.groundColor).multiplyScalar(Y),n.hemi[p]=z,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==T||I.numPointShadows!==y||I.numSpotShadows!==x||I.numSpotMaps!==R||I.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,I.directionalLength=f,I.pointLength=m,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=T,I.numPointShadows=y,I.numSpotShadows=x,I.numSpotMaps=R,I.numLightProbes=P,n.version=rv++)}function c(l,h){let u=0,d=0,f=0,m=0,_=0,g=h.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){let y=l[p];if(y.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),u++}else if(y.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function cp(s){let e=new av(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function cv(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new cp(s),e.set(i,[a])):r>=o.length?(a=new cp(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var lv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function uv(s,e,t){let n=new $n,i=new _e,r=new _e,o=new ft,a=new Ha({depthPacking:Mf}),c=new Va,l={},h=t.maxTextureSize,u={[Kt]:jt,[jt]:Kt,[Pt]:Pt},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:lv,fragmentShader:hv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new pt;m.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ke(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gh;let p=this.type;this.render=function(w,P,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;let b=s.getRenderTarget(),M=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),H=s.state;H.setBlending(Ti),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let Y=p!==oi&&this.type===oi,$=p===oi&&this.type!==oi;for(let Z=0,z=w.length;Z<z;Z++){let se=w[Z],K=se.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);let G=K.getFrameExtents();if(i.multiply(G),r.copy(K.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/G.x),i.x=r.x*G.x,K.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/G.y),i.y=r.y*G.y,K.mapSize.y=r.y)),K.map===null||Y===!0||$===!0){let we=this.type!==oi?{minFilter:Zt,magFilter:Zt}:{};K.map!==null&&K.map.dispose(),K.map=new Jn(i.x,i.y,we),K.map.texture.name=se.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();let de=K.getViewportCount();for(let we=0;we<de;we++){let We=K.getViewport(we);o.set(r.x*We.x,r.y*We.y,r.x*We.z,r.y*We.w),H.viewport(o),K.updateMatrices(se,we),n=K.getFrustum(),x(P,I,K.camera,se,this.type)}K.isPointLightShadow!==!0&&this.type===oi&&T(K,I),K.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(b,M,L)};function T(w,P){let I=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Jn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(P,null,I,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(P,null,I,f,_,null)}function y(w,P,I,b){let M=null,L=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)M=L;else if(M=I.isPointLight===!0?c:a,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let H=M.uuid,Y=P.uuid,$=l[H];$===void 0&&($={},l[H]=$);let Z=$[Y];Z===void 0&&(Z=M.clone(),$[Y]=Z,P.addEventListener("dispose",R)),M=Z}if(M.visible=P.visible,M.wireframe=P.wireframe,b===oi?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let H=s.properties.get(M);H.light=I}return M}function x(w,P,I,b,M){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===oi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);let Y=e.update(w),$=w.material;if(Array.isArray($)){let Z=Y.groups;for(let z=0,se=Z.length;z<se;z++){let K=Z[z],G=$[K.materialIndex];if(G&&G.visible){let de=y(w,G,b,M);w.onBeforeShadow(s,w,P,I,Y,de,K),s.renderBufferDirect(I,null,Y,de,w,K),w.onAfterShadow(s,w,P,I,Y,de,K)}}}else if($.visible){let Z=y(w,$,b,M);w.onBeforeShadow(s,w,P,I,Y,Z,null),s.renderBufferDirect(I,null,Y,Z,w,null),w.onAfterShadow(s,w,P,I,Y,Z,null)}}let H=w.children;for(let Y=0,$=H.length;Y<$;Y++)x(H[Y],P,I,b,M)}function R(w){w.target.removeEventListener("dispose",R);for(let I in l){let b=l[I],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var dv={[$a]:ja,[Qa]:nc,[ec]:ic,[as]:tc,[ja]:$a,[nc]:Qa,[ic]:ec,[tc]:as};function fv(s,e){function t(){let D=!1,pe=new ft,ye=null,Ie=new ft(0,0,0,0);return{setMask:function(B){ye!==B&&!D&&(s.colorMask(B,B,B,B),ye=B)},setLocked:function(B){D=B},setClear:function(B,k,Te,De,$e){$e===!0&&(B*=De,k*=De,Te*=De),pe.set(B,k,Te,De),Ie.equals(pe)===!1&&(s.clearColor(B,k,Te,De),Ie.copy(pe))},reset:function(){D=!1,ye=null,Ie.set(-1,0,0,0)}}}function n(){let D=!1,pe=!1,ye=null,Ie=null,B=null;return{setReversed:function(k){if(pe!==k){let Te=e.get("EXT_clip_control");k?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),pe=k;let De=B;B=null,this.setClear(De)}},getReversed:function(){return pe},setTest:function(k){k?N(s.DEPTH_TEST):X(s.DEPTH_TEST)},setMask:function(k){ye!==k&&!D&&(s.depthMask(k),ye=k)},setFunc:function(k){if(pe&&(k=dv[k]),Ie!==k){switch(k){case $a:s.depthFunc(s.NEVER);break;case ja:s.depthFunc(s.ALWAYS);break;case Qa:s.depthFunc(s.LESS);break;case as:s.depthFunc(s.LEQUAL);break;case ec:s.depthFunc(s.EQUAL);break;case tc:s.depthFunc(s.GEQUAL);break;case nc:s.depthFunc(s.GREATER);break;case ic:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=k}},setLocked:function(k){D=k},setClear:function(k){B!==k&&(pe&&(k=1-k),s.clearDepth(k),B=k)},reset:function(){D=!1,ye=null,Ie=null,B=null,pe=!1}}}function i(){let D=!1,pe=null,ye=null,Ie=null,B=null,k=null,Te=null,De=null,$e=null;return{setTest:function(ht){D||(ht?N(s.STENCIL_TEST):X(s.STENCIL_TEST))},setMask:function(ht){pe!==ht&&!D&&(s.stencilMask(ht),pe=ht)},setFunc:function(ht,an,Yt){(ye!==ht||Ie!==an||B!==Yt)&&(s.stencilFunc(ht,an,Yt),ye=ht,Ie=an,B=Yt)},setOp:function(ht,an,Yt){(k!==ht||Te!==an||De!==Yt)&&(s.stencilOp(ht,an,Yt),k=ht,Te=an,De=Yt)},setLocked:function(ht){D=ht},setClear:function(ht){$e!==ht&&(s.clearStencil(ht),$e=ht)},reset:function(){D=!1,pe=null,ye=null,Ie=null,B=null,k=null,Te=null,De=null,$e=null}}}let r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,T=null,y=null,x=null,R=null,w=null,P=new Ue(0,0,0),I=0,b=!1,M=null,L=null,H=null,Y=null,$=null,Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,se=0,K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(K)[1]),z=se>=1):K.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),z=se>=2);let G=null,de={},we=s.getParameter(s.SCISSOR_BOX),We=s.getParameter(s.VIEWPORT),tt=new ft().fromArray(we),lt=new ft().fromArray(We);function rt(D,pe,ye,Ie){let B=new Uint8Array(4),k=s.createTexture();s.bindTexture(D,k),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Te=0;Te<ye;Te++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(pe,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,B):s.texImage2D(pe+Te,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,B);return k}let ne={};ne[s.TEXTURE_2D]=rt(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=rt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=rt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=rt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),N(s.DEPTH_TEST),o.setFunc(as),Q(!1),te(mh),N(s.CULL_FACE),ee(Ti);function N(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function X(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function ie(D,pe){return u[D]!==pe?(s.bindFramebuffer(D,pe),u[D]=pe,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=pe),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=pe),!0):!1}function re(D,pe){let ye=f,Ie=!1;if(D){ye=d.get(pe),ye===void 0&&(ye=[],d.set(pe,ye));let B=D.textures;if(ye.length!==B.length||ye[0]!==s.COLOR_ATTACHMENT0){for(let k=0,Te=B.length;k<Te;k++)ye[k]=s.COLOR_ATTACHMENT0+k;ye.length=B.length,Ie=!0}}else ye[0]!==s.BACK&&(ye[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(ye)}function ve(D){return m!==D?(s.useProgram(D),m=D,!0):!1}let xe={[Vi]:s.FUNC_ADD,[Gd]:s.FUNC_SUBTRACT,[Wd]:s.FUNC_REVERSE_SUBTRACT};xe[Xd]=s.MIN,xe[qd]=s.MAX;let C={[Yd]:s.ZERO,[Kd]:s.ONE,[Zd]:s.SRC_COLOR,[wa]:s.SRC_ALPHA,[tf]:s.SRC_ALPHA_SATURATE,[Qd]:s.DST_COLOR,[$d]:s.DST_ALPHA,[Jd]:s.ONE_MINUS_SRC_COLOR,[Aa]:s.ONE_MINUS_SRC_ALPHA,[ef]:s.ONE_MINUS_DST_COLOR,[jd]:s.ONE_MINUS_DST_ALPHA,[nf]:s.CONSTANT_COLOR,[sf]:s.ONE_MINUS_CONSTANT_COLOR,[rf]:s.CONSTANT_ALPHA,[of]:s.ONE_MINUS_CONSTANT_ALPHA};function ee(D,pe,ye,Ie,B,k,Te,De,$e,ht){if(D===Ti){_===!0&&(X(s.BLEND),_=!1);return}if(_===!1&&(N(s.BLEND),_=!0),D!==Vd){if(D!==g||ht!==b){if((p!==Vi||x!==Vi)&&(s.blendEquation(s.FUNC_ADD),p=Vi,x=Vi),ht)switch(D){case os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _h:s.blendFunc(s.ONE,s.ONE);break;case xh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _h:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case xh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,y=null,R=null,w=null,P.set(0,0,0),I=0,g=D,b=ht}return}B=B||pe,k=k||ye,Te=Te||Ie,(pe!==p||B!==x)&&(s.blendEquationSeparate(xe[pe],xe[B]),p=pe,x=B),(ye!==T||Ie!==y||k!==R||Te!==w)&&(s.blendFuncSeparate(C[ye],C[Ie],C[k],C[Te]),T=ye,y=Ie,R=k,w=Te),(De.equals(P)===!1||$e!==I)&&(s.blendColor(De.r,De.g,De.b,$e),P.copy(De),I=$e),g=D,b=!1}function W(D,pe){D.side===Pt?X(s.CULL_FACE):N(s.CULL_FACE);let ye=D.side===jt;pe&&(ye=!ye),Q(ye),D.blending===os&&D.transparent===!1?ee(Ti):ee(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let Ie=D.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ae(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?N(s.SAMPLE_ALPHA_TO_COVERAGE):X(s.SAMPLE_ALPHA_TO_COVERAGE)}function Q(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function te(D){D!==zd?(N(s.CULL_FACE),D!==L&&(D===mh?s.cullFace(s.BACK):D===kd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):X(s.CULL_FACE),L=D}function fe(D){D!==H&&(z&&s.lineWidth(D),H=D)}function ae(D,pe,ye){D?(N(s.POLYGON_OFFSET_FILL),(Y!==pe||$!==ye)&&(s.polygonOffset(pe,ye),Y=pe,$=ye)):X(s.POLYGON_OFFSET_FILL)}function me(D){D?N(s.SCISSOR_TEST):X(s.SCISSOR_TEST)}function Ye(D){D===void 0&&(D=s.TEXTURE0+Z-1),G!==D&&(s.activeTexture(D),G=D)}function Xe(D,pe,ye){ye===void 0&&(G===null?ye=s.TEXTURE0+Z-1:ye=G);let Ie=de[ye];Ie===void 0&&(Ie={type:void 0,texture:void 0},de[ye]=Ie),(Ie.type!==D||Ie.texture!==pe)&&(G!==ye&&(s.activeTexture(ye),G=ye),s.bindTexture(D,pe||ne[D]),Ie.type=D,Ie.texture=pe)}function A(){let D=de[G];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(D){tt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),tt.copy(D))}function Oe(D){lt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),lt.copy(D))}function Ce(D,pe){let ye=l.get(pe);ye===void 0&&(ye=new WeakMap,l.set(pe,ye));let Ie=ye.get(D);Ie===void 0&&(Ie=s.getUniformBlockIndex(pe,D.name),ye.set(D,Ie))}function he(D,pe){let Ie=l.get(pe).get(D);c.get(pe)!==Ie&&(s.uniformBlockBinding(pe,Ie,D.__bindingPointIndex),c.set(pe,Ie))}function Ze(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},G=null,de={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,T=null,y=null,x=null,R=null,w=null,P=new Ue(0,0,0),I=0,b=!1,M=null,L=null,H=null,Y=null,$=null,tt.set(0,0,s.canvas.width,s.canvas.height),lt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:N,disable:X,bindFramebuffer:ie,drawBuffers:re,useProgram:ve,setBlending:ee,setMaterial:W,setFlipSided:Q,setCullFace:te,setLineWidth:fe,setPolygonOffset:ae,setScissorTest:me,activeTexture:Ye,bindTexture:Xe,unbindTexture:A,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:Se,texImage3D:ue,updateUBOMapping:Ce,uniformBlockBinding:he,texStorage2D:ge,texStorage3D:Ae,texSubImage2D:J,texSubImage3D:oe,compressedTexSubImage2D:j,compressedTexSubImage3D:Le,scissor:Me,viewport:Oe,reset:Ze}}function pv(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _e,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,v){return f?new OffscreenCanvas(A,v):$s("canvas")}function _(A,v,O){let J=1,oe=Xe(A);if((oe.width>O||oe.height>O)&&(J=O/Math.max(oe.width,oe.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let j=Math.floor(J*oe.width),Le=Math.floor(J*oe.height);u===void 0&&(u=m(j,Le));let ge=v?m(j,Le):u;return ge.width=j,ge.height=Le,ge.getContext("2d").drawImage(A,0,0,j,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+j+"x"+Le+")."),ge}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(A,v,O,J,oe=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=v;if(v===s.RED&&(O===s.FLOAT&&(j=s.R32F),O===s.HALF_FLOAT&&(j=s.R16F),O===s.UNSIGNED_BYTE&&(j=s.R8)),v===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.R8UI),O===s.UNSIGNED_SHORT&&(j=s.R16UI),O===s.UNSIGNED_INT&&(j=s.R32UI),O===s.BYTE&&(j=s.R8I),O===s.SHORT&&(j=s.R16I),O===s.INT&&(j=s.R32I)),v===s.RG&&(O===s.FLOAT&&(j=s.RG32F),O===s.HALF_FLOAT&&(j=s.RG16F),O===s.UNSIGNED_BYTE&&(j=s.RG8)),v===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RG8UI),O===s.UNSIGNED_SHORT&&(j=s.RG16UI),O===s.UNSIGNED_INT&&(j=s.RG32UI),O===s.BYTE&&(j=s.RG8I),O===s.SHORT&&(j=s.RG16I),O===s.INT&&(j=s.RG32I)),v===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RGB8UI),O===s.UNSIGNED_SHORT&&(j=s.RGB16UI),O===s.UNSIGNED_INT&&(j=s.RGB32UI),O===s.BYTE&&(j=s.RGB8I),O===s.SHORT&&(j=s.RGB16I),O===s.INT&&(j=s.RGB32I)),v===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),O===s.UNSIGNED_INT&&(j=s.RGBA32UI),O===s.BYTE&&(j=s.RGBA8I),O===s.SHORT&&(j=s.RGBA16I),O===s.INT&&(j=s.RGBA32I)),v===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),v===s.RGBA){let Le=oe?Kr:ct.getTransfer(J);O===s.FLOAT&&(j=s.RGBA32F),O===s.HALF_FLOAT&&(j=s.RGBA16F),O===s.UNSIGNED_BYTE&&(j=Le===vt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(A,v){let O;return A?v===null||v===Yi||v===ur?O=s.DEPTH24_STENCIL8:v===Cn?O=s.DEPTH32F_STENCIL8:v===lr&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Yi||v===ur?O=s.DEPTH_COMPONENT24:v===Cn?O=s.DEPTH_COMPONENT32F:v===lr&&(O=s.DEPTH_COMPONENT16),O}function R(A,v){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Zt&&A.minFilter!==un?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function w(A){let v=A.target;v.removeEventListener("dispose",w),I(v),v.isVideoTexture&&h.delete(v)}function P(A){let v=A.target;v.removeEventListener("dispose",P),M(v)}function I(A){let v=n.get(A);if(v.__webglInit===void 0)return;let O=A.source,J=d.get(O);if(J){let oe=J[v.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&b(A),Object.keys(J).length===0&&d.delete(O)}n.remove(A)}function b(A){let v=n.get(A);s.deleteTexture(v.__webglTexture);let O=A.source,J=d.get(O);delete J[v.__cacheKey],o.memory.textures--}function M(A){let v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let oe=0;oe<v.__webglFramebuffer[J].length;oe++)s.deleteFramebuffer(v.__webglFramebuffer[J][oe]);else s.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)s.deleteFramebuffer(v.__webglFramebuffer[J]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=A.textures;for(let J=0,oe=O.length;J<oe;J++){let j=n.get(O[J]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(O[J])}n.remove(A)}let L=0;function H(){L=0}function Y(){let A=L;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),L+=1,A}function $(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function Z(A,v){let O=n.get(A);if(A.isVideoTexture&&me(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){let J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(O,A,v);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+v)}function z(A,v){let O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){ne(O,A,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+v)}function se(A,v){let O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){ne(O,A,v);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+v)}function K(A,v){let O=n.get(A);if(A.version>0&&O.__version!==A.version){N(O,A,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+v)}let G={[Gi]:s.REPEAT,[Yn]:s.CLAMP_TO_EDGE,[Zs]:s.MIRRORED_REPEAT},de={[Zt]:s.NEAREST,[cc]:s.NEAREST_MIPMAP_NEAREST,[Ss]:s.NEAREST_MIPMAP_LINEAR,[un]:s.LINEAR,[cr]:s.LINEAR_MIPMAP_NEAREST,[Gn]:s.LINEAR_MIPMAP_LINEAR},we={[bf]:s.NEVER,[Cf]:s.ALWAYS,[Ef]:s.LESS,[Ch]:s.LEQUAL,[Tf]:s.EQUAL,[Rf]:s.GEQUAL,[wf]:s.GREATER,[Af]:s.NOTEQUAL};function We(A,v){if(v.type===Cn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===un||v.magFilter===cr||v.magFilter===Ss||v.magFilter===Gn||v.minFilter===un||v.minFilter===cr||v.minFilter===Ss||v.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,G[v.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,G[v.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,G[v.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,de[v.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,de[v.minFilter]),v.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,we[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Zt||v.minFilter!==Ss&&v.minFilter!==Gn||v.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function tt(A,v){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",w));let J=v.source,oe=d.get(J);oe===void 0&&(oe={},d.set(J,oe));let j=$(v);if(j!==A.__cacheKey){oe[j]===void 0&&(oe[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),oe[j].usedTimes++;let Le=oe[A.__cacheKey];Le!==void 0&&(oe[A.__cacheKey].usedTimes--,Le.usedTimes===0&&b(v)),A.__cacheKey=j,A.__webglTexture=oe[j].texture}return O}function lt(A,v,O){return Math.floor(Math.floor(A/O)/v)}function rt(A,v,O,J){let j=A.updateRanges;if(j.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,O,J,v.data);else{j.sort((ue,Me)=>ue.start-Me.start);let Le=0;for(let ue=1;ue<j.length;ue++){let Me=j[Le],Oe=j[ue],Ce=Me.start+Me.count,he=lt(Oe.start,v.width,4),Ze=lt(Me.start,v.width,4);Oe.start<=Ce+1&&he===Ze&&lt(Oe.start+Oe.count-1,v.width,4)===he?Me.count=Math.max(Me.count,Oe.start+Oe.count-Me.start):(++Le,j[Le]=Oe)}j.length=Le+1;let ge=s.getParameter(s.UNPACK_ROW_LENGTH),Ae=s.getParameter(s.UNPACK_SKIP_PIXELS),Se=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let ue=0,Me=j.length;ue<Me;ue++){let Oe=j[ue],Ce=Math.floor(Oe.start/4),he=Math.ceil(Oe.count/4),Ze=Ce%v.width,D=Math.floor(Ce/v.width),pe=he,ye=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,D),t.texSubImage2D(s.TEXTURE_2D,0,Ze,D,pe,ye,O,J,v.data)}A.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ge),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ae),s.pixelStorei(s.UNPACK_SKIP_ROWS,Se)}}function ne(A,v,O){let J=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=s.TEXTURE_3D);let oe=tt(A,v),j=v.source;t.bindTexture(J,A.__webglTexture,s.TEXTURE0+O);let Le=n.get(j);if(j.version!==Le.__version||oe===!0){t.activeTexture(s.TEXTURE0+O);let ge=ct.getPrimaries(ct.workingColorSpace),Ae=v.colorSpace===Ai?null:ct.getPrimaries(v.colorSpace),Se=v.colorSpace===Ai||ge===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ue=_(v.image,!1,i.maxTextureSize);ue=Ye(v,ue);let Me=r.convert(v.format,v.colorSpace),Oe=r.convert(v.type),Ce=y(v.internalFormat,Me,Oe,v.colorSpace,v.isVideoTexture);We(J,v);let he,Ze=v.mipmaps,D=v.isVideoTexture!==!0,pe=Le.__version===void 0||oe===!0,ye=j.dataReady,Ie=R(v,ue);if(v.isDepthTexture)Ce=x(v.format===dr,v.type),pe&&(D?t.texStorage2D(s.TEXTURE_2D,1,Ce,ue.width,ue.height):t.texImage2D(s.TEXTURE_2D,0,Ce,ue.width,ue.height,0,Me,Oe,null));else if(v.isDataTexture)if(Ze.length>0){D&&pe&&t.texStorage2D(s.TEXTURE_2D,Ie,Ce,Ze[0].width,Ze[0].height);for(let B=0,k=Ze.length;B<k;B++)he=Ze[B],D?ye&&t.texSubImage2D(s.TEXTURE_2D,B,0,0,he.width,he.height,Me,Oe,he.data):t.texImage2D(s.TEXTURE_2D,B,Ce,he.width,he.height,0,Me,Oe,he.data);v.generateMipmaps=!1}else D?(pe&&t.texStorage2D(s.TEXTURE_2D,Ie,Ce,ue.width,ue.height),ye&&rt(v,ue,Me,Oe)):t.texImage2D(s.TEXTURE_2D,0,Ce,ue.width,ue.height,0,Me,Oe,ue.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Ce,Ze[0].width,Ze[0].height,ue.depth);for(let B=0,k=Ze.length;B<k;B++)if(he=Ze[B],v.format!==bn)if(Me!==null)if(D){if(ye)if(v.layerUpdates.size>0){let Te=Oh(he.width,he.height,v.format,v.type);for(let De of v.layerUpdates){let $e=he.data.subarray(De*Te/he.data.BYTES_PER_ELEMENT,(De+1)*Te/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,B,0,0,De,he.width,he.height,1,Me,$e)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,B,0,0,0,he.width,he.height,ue.depth,Me,he.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,B,Ce,he.width,he.height,ue.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ye&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,B,0,0,0,he.width,he.height,ue.depth,Me,Oe,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,B,Ce,he.width,he.height,ue.depth,0,Me,Oe,he.data)}else{D&&pe&&t.texStorage2D(s.TEXTURE_2D,Ie,Ce,Ze[0].width,Ze[0].height);for(let B=0,k=Ze.length;B<k;B++)he=Ze[B],v.format!==bn?Me!==null?D?ye&&t.compressedTexSubImage2D(s.TEXTURE_2D,B,0,0,he.width,he.height,Me,he.data):t.compressedTexImage2D(s.TEXTURE_2D,B,Ce,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ye&&t.texSubImage2D(s.TEXTURE_2D,B,0,0,he.width,he.height,Me,Oe,he.data):t.texImage2D(s.TEXTURE_2D,B,Ce,he.width,he.height,0,Me,Oe,he.data)}else if(v.isDataArrayTexture)if(D){if(pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Ce,ue.width,ue.height,ue.depth),ye)if(v.layerUpdates.size>0){let B=Oh(ue.width,ue.height,v.format,v.type);for(let k of v.layerUpdates){let Te=ue.data.subarray(k*B/ue.data.BYTES_PER_ELEMENT,(k+1)*B/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,k,ue.width,ue.height,1,Me,Oe,Te)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Me,Oe,ue.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,ue.width,ue.height,ue.depth,0,Me,Oe,ue.data);else if(v.isData3DTexture)D?(pe&&t.texStorage3D(s.TEXTURE_3D,Ie,Ce,ue.width,ue.height,ue.depth),ye&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Me,Oe,ue.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,ue.width,ue.height,ue.depth,0,Me,Oe,ue.data);else if(v.isFramebufferTexture){if(pe)if(D)t.texStorage2D(s.TEXTURE_2D,Ie,Ce,ue.width,ue.height);else{let B=ue.width,k=ue.height;for(let Te=0;Te<Ie;Te++)t.texImage2D(s.TEXTURE_2D,Te,Ce,B,k,0,Me,Oe,null),B>>=1,k>>=1}}else if(Ze.length>0){if(D&&pe){let B=Xe(Ze[0]);t.texStorage2D(s.TEXTURE_2D,Ie,Ce,B.width,B.height)}for(let B=0,k=Ze.length;B<k;B++)he=Ze[B],D?ye&&t.texSubImage2D(s.TEXTURE_2D,B,0,0,Me,Oe,he):t.texImage2D(s.TEXTURE_2D,B,Ce,Me,Oe,he);v.generateMipmaps=!1}else if(D){if(pe){let B=Xe(ue);t.texStorage2D(s.TEXTURE_2D,Ie,Ce,B.width,B.height)}ye&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me,Oe,ue)}else t.texImage2D(s.TEXTURE_2D,0,Ce,Me,Oe,ue);g(v)&&p(J),Le.__version=j.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function N(A,v,O){if(v.image.length!==6)return;let J=tt(A,v),oe=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+O);let j=n.get(oe);if(oe.version!==j.__version||J===!0){t.activeTexture(s.TEXTURE0+O);let Le=ct.getPrimaries(ct.workingColorSpace),ge=v.colorSpace===Ai?null:ct.getPrimaries(v.colorSpace),Ae=v.colorSpace===Ai||Le===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Se=v.isCompressedTexture||v.image[0].isCompressedTexture,ue=v.image[0]&&v.image[0].isDataTexture,Me=[];for(let k=0;k<6;k++)!Se&&!ue?Me[k]=_(v.image[k],!0,i.maxCubemapSize):Me[k]=ue?v.image[k].image:v.image[k],Me[k]=Ye(v,Me[k]);let Oe=Me[0],Ce=r.convert(v.format,v.colorSpace),he=r.convert(v.type),Ze=y(v.internalFormat,Ce,he,v.colorSpace),D=v.isVideoTexture!==!0,pe=j.__version===void 0||J===!0,ye=oe.dataReady,Ie=R(v,Oe);We(s.TEXTURE_CUBE_MAP,v);let B;if(Se){D&&pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,Ze,Oe.width,Oe.height);for(let k=0;k<6;k++){B=Me[k].mipmaps;for(let Te=0;Te<B.length;Te++){let De=B[Te];v.format!==bn?Ce!==null?D?ye&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te,0,0,De.width,De.height,Ce,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te,Ze,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te,0,0,De.width,De.height,Ce,he,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te,Ze,De.width,De.height,0,Ce,he,De.data)}}}else{if(B=v.mipmaps,D&&pe){B.length>0&&Ie++;let k=Xe(Me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,Ze,k.width,k.height)}for(let k=0;k<6;k++)if(ue){D?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Me[k].width,Me[k].height,Ce,he,Me[k].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Ze,Me[k].width,Me[k].height,0,Ce,he,Me[k].data);for(let Te=0;Te<B.length;Te++){let $e=B[Te].image[k].image;D?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te+1,0,0,$e.width,$e.height,Ce,he,$e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te+1,Ze,$e.width,$e.height,0,Ce,he,$e.data)}}else{D?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Ce,he,Me[k]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Ze,Ce,he,Me[k]);for(let Te=0;Te<B.length;Te++){let De=B[Te];D?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te+1,0,0,Ce,he,De.image[k]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te+1,Ze,Ce,he,De.image[k])}}}g(v)&&p(s.TEXTURE_CUBE_MAP),j.__version=oe.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function X(A,v,O,J,oe,j){let Le=r.convert(O.format,O.colorSpace),ge=r.convert(O.type),Ae=y(O.internalFormat,Le,ge,O.colorSpace),Se=n.get(v),ue=n.get(O);if(ue.__renderTarget=v,!Se.__hasExternalTextures){let Me=Math.max(1,v.width>>j),Oe=Math.max(1,v.height>>j);oe===s.TEXTURE_3D||oe===s.TEXTURE_2D_ARRAY?t.texImage3D(oe,j,Ae,Me,Oe,v.depth,0,Le,ge,null):t.texImage2D(oe,j,Ae,Me,Oe,0,Le,ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),ae(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,oe,ue.__webglTexture,0,fe(v)):(oe===s.TEXTURE_2D||oe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,oe,ue.__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(A,v,O){if(s.bindRenderbuffer(s.RENDERBUFFER,A),v.depthBuffer){let J=v.depthTexture,oe=J&&J.isDepthTexture?J.type:null,j=x(v.stencilBuffer,oe),Le=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=fe(v);ae(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ge,j,v.width,v.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,j,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,j,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Le,s.RENDERBUFFER,A)}else{let J=v.textures;for(let oe=0;oe<J.length;oe++){let j=J[oe],Le=r.convert(j.format,j.colorSpace),ge=r.convert(j.type),Ae=y(j.internalFormat,Le,ge,j.colorSpace),Se=fe(v);O&&ae(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,Ae,v.width,v.height):ae(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se,Ae,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function re(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(v.depthTexture);J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);let oe=J.__webglTexture,j=fe(v);if(v.depthTexture.format===Js)ae(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,oe,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,oe,0);else if(v.depthTexture.format===dr)ae(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,oe,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function ve(A){let v=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let J=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){let oe=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",oe)};J.addEventListener("dispose",oe),v.__depthDisposeCallback=oe}v.__boundDepthTexture=J}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let J=A.texture.mipmaps;J&&J.length>0?re(v.__webglFramebuffer[0],A):re(v.__webglFramebuffer,A)}else if(O){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=s.createRenderbuffer(),ie(v.__webglDepthbuffer[J],A,!1);else{let oe=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,j)}}else{let J=A.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),ie(v.__webglDepthbuffer,A,!1);else{let oe=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,j)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(A,v,O){let J=n.get(A);v!==void 0&&X(J.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&ve(A)}function C(A){let v=A.texture,O=n.get(A),J=n.get(v);A.addEventListener("dispose",P);let oe=A.textures,j=A.isWebGLCubeRenderTarget===!0,Le=oe.length>1;if(Le||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=v.version,o.memory.textures++),j){O.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ge]=[];for(let Ae=0;Ae<v.mipmaps.length;Ae++)O.__webglFramebuffer[ge][Ae]=s.createFramebuffer()}else O.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ge=0;ge<v.mipmaps.length;ge++)O.__webglFramebuffer[ge]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Le)for(let ge=0,Ae=oe.length;ge<Ae;ge++){let Se=n.get(oe[ge]);Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&ae(A)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ge=0;ge<oe.length;ge++){let Ae=oe[ge];O.__webglColorRenderbuffer[ge]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ge]);let Se=r.convert(Ae.format,Ae.colorSpace),ue=r.convert(Ae.type),Me=y(Ae.internalFormat,Se,ue,Ae.colorSpace,A.isXRRenderTarget===!0),Oe=fe(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,Me,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,O.__webglColorRenderbuffer[ge])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),ie(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),We(s.TEXTURE_CUBE_MAP,v);for(let ge=0;ge<6;ge++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ae=0;Ae<v.mipmaps.length;Ae++)X(O.__webglFramebuffer[ge][Ae],A,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ae);else X(O.__webglFramebuffer[ge],A,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(v)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let ge=0,Ae=oe.length;ge<Ae;ge++){let Se=oe[ge],ue=n.get(Se),Me=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Me=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Me,ue.__webglTexture),We(Me,Se),X(O.__webglFramebuffer,A,Se,s.COLOR_ATTACHMENT0+ge,Me,0),g(Se)&&p(Me)}t.unbindTexture()}else{let ge=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ge=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,J.__webglTexture),We(ge,v),v.mipmaps&&v.mipmaps.length>0)for(let Ae=0;Ae<v.mipmaps.length;Ae++)X(O.__webglFramebuffer[Ae],A,v,s.COLOR_ATTACHMENT0,ge,Ae);else X(O.__webglFramebuffer,A,v,s.COLOR_ATTACHMENT0,ge,0);g(v)&&p(ge),t.unbindTexture()}A.depthBuffer&&ve(A)}function ee(A){let v=A.textures;for(let O=0,J=v.length;O<J;O++){let oe=v[O];if(g(oe)){let j=T(A),Le=n.get(oe).__webglTexture;t.bindTexture(j,Le),p(j),t.unbindTexture()}}}let W=[],Q=[];function te(A){if(A.samples>0){if(ae(A)===!1){let v=A.textures,O=A.width,J=A.height,oe=s.COLOR_BUFFER_BIT,j=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=n.get(A),ge=v.length>1;if(ge)for(let Se=0;Se<v.length;Se++)t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);let Ae=A.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Se=0;Se<v.length;Se++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(oe|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(oe|=s.STENCIL_BUFFER_BIT)),ge){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Se]);let ue=n.get(v[Se]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ue,0)}s.blitFramebuffer(0,0,O,J,0,0,O,J,oe,s.NEAREST),c===!0&&(W.length=0,Q.length=0,W.push(s.COLOR_ATTACHMENT0+Se),A.depthBuffer&&A.resolveDepthBuffer===!1&&(W.push(j),Q.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Q)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,W))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ge)for(let Se=0;Se<v.length;Se++){t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Se]);let ue=n.get(v[Se]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,ue,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let v=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function fe(A){return Math.min(i.maxSamples,A.samples)}function ae(A){let v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function me(A){let v=o.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function Ye(A,v){let O=A.colorSpace,J=A.format,oe=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Jt&&O!==Ai&&(ct.getTransfer(O)===vt?(J!==bn||oe!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Xe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=H,this.setTexture2D=Z,this.setTexture2DArray=z,this.setTexture3D=se,this.setTextureCube=K,this.rebindTextures=xe,this.setupRenderTarget=C,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=X,this.useMultisampledRTT=ae}function mv(s,e){function t(n,i=Ai){let r,o=ct.getTransfer(i);if(n===Wn)return s.UNSIGNED_BYTE;if(n===hc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===uc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===bh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Eh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mh)return s.BYTE;if(n===Sh)return s.SHORT;if(n===lr)return s.UNSIGNED_SHORT;if(n===lc)return s.INT;if(n===Yi)return s.UNSIGNED_INT;if(n===Cn)return s.FLOAT;if(n===hr)return s.HALF_FLOAT;if(n===Th)return s.ALPHA;if(n===wh)return s.RGB;if(n===bn)return s.RGBA;if(n===Js)return s.DEPTH_COMPONENT;if(n===dr)return s.DEPTH_STENCIL;if(n===dc)return s.RED;if(n===fc)return s.RED_INTEGER;if(n===Ah)return s.RG;if(n===pc)return s.RG_INTEGER;if(n===mc)return s.RGBA_INTEGER;if(n===Do||n===No||n===Uo||n===Fo)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Do)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gc||n===_c||n===xc||n===yc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vc||n===Mc||n===Sc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vc||n===Mc)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bc||n===Ec||n===Tc||n===wc||n===Ac||n===Rc||n===Cc||n===Ic||n===Pc||n===Lc||n===Dc||n===Nc||n===Uc||n===Fc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ec)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ac)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ic)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oc||n===Bc||n===zc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Oc)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kc||n===Hc||n===Vc||n===Gc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===kc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var gv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_v=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Jh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new lo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Mn({vertexShader:gv,fragmentShader:_v,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$h=class extends Zn{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,_=typeof XRWebGLBinding<"u",g=new Jh,p={},T=t.getContextAttributes(),y=null,x=null,R=[],w=[],P=new _e,I=null,b=new kt;b.viewport=new ft;let M=new kt;M.viewport=new ft;let L=[b,M],H=new Ka,Y=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let N=R[ne];return N===void 0&&(N=new er,R[ne]=N),N.getTargetRaySpace()},this.getControllerGrip=function(ne){let N=R[ne];return N===void 0&&(N=new er,R[ne]=N),N.getGripSpace()},this.getHand=function(ne){let N=R[ne];return N===void 0&&(N=new er,R[ne]=N),N.getHandSpace()};function Z(ne){let N=w.indexOf(ne.inputSource);if(N===-1)return;let X=R[N];X!==void 0&&(X.update(ne.inputSource,ne.frame,l||o),X.dispatchEvent({type:ne.type,data:ne.inputSource}))}function z(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",se);for(let ne=0;ne<R.length;ne++){let N=w[ne];N!==null&&(w[ne]=null,R[ne].disconnect(N))}Y=null,$=null,g.reset();for(let ne in p)delete p[ne];e.setRenderTarget(y),f=null,d=null,u=null,i=null,x=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",z),i.addEventListener("inputsourceschange",se),T.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,ie=null,re=null;T.depth&&(re=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=T.stencil?dr:Js,ie=T.stencil?ur:Yi);let ve={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ve),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Jn(d.textureWidth,d.textureHeight,{format:bn,type:Wn,depthTexture:new co(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let X={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,X),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Jn(f.framebufferWidth,f.framebufferHeight,{format:bn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function se(ne){for(let N=0;N<ne.removed.length;N++){let X=ne.removed[N],ie=w.indexOf(X);ie>=0&&(w[ie]=null,R[ie].disconnect(X))}for(let N=0;N<ne.added.length;N++){let X=ne.added[N],ie=w.indexOf(X);if(ie===-1){for(let ve=0;ve<R.length;ve++)if(ve>=w.length){w.push(X),ie=ve;break}else if(w[ve]===null){w[ve]=X,ie=ve;break}if(ie===-1)break}let re=R[ie];re&&re.connect(X)}}let K=new S,G=new S;function de(ne,N,X){K.setFromMatrixPosition(N.matrixWorld),G.setFromMatrixPosition(X.matrixWorld);let ie=K.distanceTo(G),re=N.projectionMatrix.elements,ve=X.projectionMatrix.elements,xe=re[14]/(re[10]-1),C=re[14]/(re[10]+1),ee=(re[9]+1)/re[5],W=(re[9]-1)/re[5],Q=(re[8]-1)/re[0],te=(ve[8]+1)/ve[0],fe=xe*Q,ae=xe*te,me=ie/(-Q+te),Ye=me*-Q;if(N.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Ye),ne.translateZ(me),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),re[10]===-1)ne.projectionMatrix.copy(N.projectionMatrix),ne.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{let Xe=xe+me,A=C+me,v=fe-Ye,O=ae+(ie-Ye),J=ee*C/A*Xe,oe=W*C/A*Xe;ne.projectionMatrix.makePerspective(v,O,J,oe,Xe,A),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function we(ne,N){N===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(N.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;let N=ne.near,X=ne.far;g.texture!==null&&(g.depthNear>0&&(N=g.depthNear),g.depthFar>0&&(X=g.depthFar)),H.near=M.near=b.near=N,H.far=M.far=b.far=X,(Y!==H.near||$!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),Y=H.near,$=H.far),H.layers.mask=ne.layers.mask|6,b.layers.mask=H.layers.mask&3,M.layers.mask=H.layers.mask&5;let ie=ne.parent,re=H.cameras;we(H,ie);for(let ve=0;ve<re.length;ve++)we(re[ve],ie);re.length===2?de(H,b,M):H.projectionMatrix.copy(b.projectionMatrix),We(ne,H,ie)};function We(ne,N,X){X===null?ne.matrix.copy(N.matrixWorld):(ne.matrix.copy(X.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(N.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(N.projectionMatrix),ne.projectionMatrixInverse.copy(N.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=hs*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(ne){c=ne,d!==null&&(d.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(ne){return p[ne]};let tt=null;function lt(ne,N){if(h=N.getViewerPose(l||o),m=N,h!==null){let X=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ie=!1;X.length!==H.cameras.length&&(H.cameras.length=0,ie=!0);for(let C=0;C<X.length;C++){let ee=X[C],W=null;if(f!==null)W=f.getViewport(ee);else{let te=u.getViewSubImage(d,ee);W=te.viewport,C===0&&(e.setRenderTargetTextures(x,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(x))}let Q=L[C];Q===void 0&&(Q=new kt,Q.layers.enable(C),Q.viewport=new ft,L[C]=Q),Q.matrix.fromArray(ee.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(ee.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(W.x,W.y,W.width,W.height),C===0&&(H.matrix.copy(Q.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ie===!0&&H.cameras.push(Q)}let re=i.enabledFeatures;if(re&&re.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let C=u.getDepthInformation(X[0]);C&&C.isValid&&C.texture&&g.init(C,i.renderState)}if(re&&re.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let C=0;C<X.length;C++){let ee=X[C].camera;if(ee){let W=p[ee];W||(W=new lo,p[ee]=W);let Q=u.getCameraImage(ee);W.sourceTexture=Q}}}}for(let X=0;X<R.length;X++){let ie=w[X],re=R[X];ie!==null&&re!==void 0&&re.update(ie,N,l||o)}tt&&tt(ne,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),m=null}let rt=new lp;rt.setAnimationLoop(lt),this.setAnimationLoop=function(ne){tt=ne},this.dispose=function(){}}},Ts=new bt,xv=new He;function yv(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Dh(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,T,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,T,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===jt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===jt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let T=e.get(p),y=T.envMap,x=T.envMapRotation;y&&(g.envMap.value=y,Ts.copy(x),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),g.envMapRotation.value.setFromMatrix4(xv.makeRotationFromEuler(Ts)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,T,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*T,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,T){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let T=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vv(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,y){let x=y.program;n.uniformBlockBinding(T,x)}function l(T,y){let x=i[T.id];x===void 0&&(m(T),x=h(T),i[T.id]=x,T.addEventListener("dispose",g));let R=y.program;n.updateUBOMapping(T,R);let w=e.render.frame;r[T.id]!==w&&(d(T),r[T.id]=w)}function h(T){let y=u();T.__bindingPointIndex=y;let x=s.createBuffer(),R=T.__size,w=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,R,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let y=i[T.id],x=T.uniforms,R=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,P=x.length;w<P;w++){let I=Array.isArray(x[w])?x[w]:[x[w]];for(let b=0,M=I.length;b<M;b++){let L=I[b];if(f(L,w,b,R)===!0){let H=L.__offset,Y=Array.isArray(L.value)?L.value:[L.value],$=0;for(let Z=0;Z<Y.length;Z++){let z=Y[Z],se=_(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,H+$,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,$),$+=se.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(T,y,x,R){let w=T.value,P=y+"_"+x;if(R[P]===void 0)return typeof w=="number"||typeof w=="boolean"?R[P]=w:R[P]=w.clone(),!0;{let I=R[P];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return R[P]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function m(T){let y=T.uniforms,x=0,R=16;for(let P=0,I=y.length;P<I;P++){let b=Array.isArray(y[P])?y[P]:[y[P]];for(let M=0,L=b.length;M<L;M++){let H=b[M],Y=Array.isArray(H.value)?H.value:[H.value];for(let $=0,Z=Y.length;$<Z;$++){let z=Y[$],se=_(z),K=x%R,G=K%se.boundary,de=K+G;x+=G,de!==0&&R-de<se.storage&&(x+=R-de),H.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=se.storage}}}let w=x%R;return w>0&&(x+=R-w),T.__size=x,T.__cache={},this}function _(T){let y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function g(T){let y=T.target;y.removeEventListener("dispose",g);let x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(let T in i)s.deleteBuffer(i[T]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var Zc=class{constructor(e={}){let{canvas:t=If(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),_=new Int32Array(4),g=null,p=null,T=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,R=!1;this._outputColorSpace=Dt;let w=0,P=0,I=null,b=-1,M=null,L=new ft,H=new ft,Y=null,$=new Ue(0),Z=0,z=t.width,se=t.height,K=1,G=null,de=null,we=new ft(0,0,z,se),We=new ft(0,0,z,se),tt=!1,lt=new $n,rt=!1,ne=!1,N=new He,X=new S,ie=new ft,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function xe(){return I===null?K:1}let C=n;function ee(E,U){return t.getContext(E,U)}try{let E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",B,!1),C===null){let U="webgl2";if(C=ee(U,E),C===null)throw ee(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let W,Q,te,fe,ae,me,Ye,Xe,A,v,O,J,oe,j,Le,ge,Ae,Se,ue,Me,Oe,Ce,he,Ze;function D(){W=new Bx(C),W.init(),Ce=new mv(C,W),Q=new Px(C,W,e,Ce),te=new fv(C,W),Q.reversedDepthBuffer&&d&&te.buffers.depth.setReversed(!0),fe=new Hx(C),ae=new ev,me=new pv(C,W,te,ae,Q,Ce,fe),Ye=new Dx(x),Xe=new Ox(x),A=new Yg(C),he=new Cx(C,A),v=new zx(C,A,fe,he),O=new Gx(C,v,A,fe),ue=new Vx(C,Q,me),ge=new Lx(ae),J=new Qy(x,Ye,Xe,W,Q,he,ge),oe=new yv(x,ae),j=new nv,Le=new cv(W),Se=new Rx(x,Ye,Xe,te,O,f,c),Ae=new uv(x,O,Q),Ze=new vv(C,fe,Q,te),Me=new Ix(C,W,fe),Oe=new kx(C,W,fe),fe.programs=J.programs,x.capabilities=Q,x.extensions=W,x.properties=ae,x.renderLists=j,x.shadowMap=Ae,x.state=te,x.info=fe}D();let pe=new $h(x,C);this.xr=pe,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let E=W.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=W.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(z,se,!1))},this.getSize=function(E){return E.set(z,se)},this.setSize=function(E,U,V=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=E,se=U,t.width=Math.floor(E*K),t.height=Math.floor(U*K),V===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(z*K,se*K).floor()},this.setDrawingBufferSize=function(E,U,V){z=E,se=U,K=V,t.width=Math.floor(E*V),t.height=Math.floor(U*V),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(we)},this.setViewport=function(E,U,V,q){E.isVector4?we.set(E.x,E.y,E.z,E.w):we.set(E,U,V,q),te.viewport(L.copy(we).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(We)},this.setScissor=function(E,U,V,q){E.isVector4?We.set(E.x,E.y,E.z,E.w):We.set(E,U,V,q),te.scissor(H.copy(We).multiplyScalar(K).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(E){te.setScissorTest(tt=E)},this.setOpaqueSort=function(E){G=E},this.setTransparentSort=function(E){de=E},this.getClearColor=function(E){return E.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,V=!0){let q=0;if(E){let F=!1;if(I!==null){let le=I.texture.format;F=le===mc||le===pc||le===fc}if(F){let le=I.texture.type,be=le===Wn||le===Yi||le===lr||le===ur||le===hc||le===uc,Pe=Se.getClearColor(),Re=Se.getClearAlpha(),Ge=Pe.r,qe=Pe.g,Ne=Pe.b;be?(m[0]=Ge,m[1]=qe,m[2]=Ne,m[3]=Re,C.clearBufferuiv(C.COLOR,0,m)):(_[0]=Ge,_[1]=qe,_[2]=Ne,_[3]=Re,C.clearBufferiv(C.COLOR,0,_))}else q|=C.COLOR_BUFFER_BIT}U&&(q|=C.DEPTH_BUFFER_BIT),V&&(q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",B,!1),Se.dispose(),j.dispose(),Le.dispose(),ae.dispose(),Ye.dispose(),Xe.dispose(),O.dispose(),he.dispose(),Ze.dispose(),J.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Yt),pe.removeEventListener("sessionend",hi),fn.stop()};function ye(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let E=fe.autoReset,U=Ae.enabled,V=Ae.autoUpdate,q=Ae.needsUpdate,F=Ae.type;D(),fe.autoReset=E,Ae.enabled=U,Ae.autoUpdate=V,Ae.needsUpdate=q,Ae.type=F}function B(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function k(E){let U=E.target;U.removeEventListener("dispose",k),Te(U)}function Te(E){De(E),ae.remove(E)}function De(E){let U=ae.get(E).programs;U!==void 0&&(U.forEach(function(V){J.releaseProgram(V)}),E.isShaderMaterial&&J.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,V,q,F,le){U===null&&(U=re);let be=F.isMesh&&F.matrixWorld.determinant()<0,Pe=Fn(E,U,V,q,F);te.setMaterial(q,be);let Re=V.index,Ge=1;if(q.wireframe===!0){if(Re=v.getWireframeAttribute(V),Re===void 0)return;Ge=2}let qe=V.drawRange,Ne=V.attributes.position,Fe=qe.start*Ge,Be=(qe.start+qe.count)*Ge;le!==null&&(Fe=Math.max(Fe,le.start*Ge),Be=Math.min(Be,(le.start+le.count)*Ge)),Re!==null?(Fe=Math.max(Fe,0),Be=Math.min(Be,Re.count)):Ne!=null&&(Fe=Math.max(Fe,0),Be=Math.min(Be,Ne.count));let ot=Be-Fe;if(ot<0||ot===1/0)return;he.setup(F,q,Pe,V,Re);let nt,ut=Me;if(Re!==null&&(nt=A.get(Re),ut=Oe,ut.setIndex(nt)),F.isMesh)q.wireframe===!0?(te.setLineWidth(q.wireframeLinewidth*xe()),ut.setMode(C.LINES)):ut.setMode(C.TRIANGLES);else if(F.isLine){let ke=q.linewidth;ke===void 0&&(ke=1),te.setLineWidth(ke*xe()),F.isLineSegments?ut.setMode(C.LINES):F.isLineLoop?ut.setMode(C.LINE_LOOP):ut.setMode(C.LINE_STRIP)}else F.isPoints?ut.setMode(C.POINTS):F.isSprite&&ut.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)js("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(W.get("WEBGL_multi_draw"))ut.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let ke=F._multiDrawStarts,gt=F._multiDrawCounts,je=F._multiDrawCount,en=Re?A.get(Re).bytesPerElement:1,Bt=ae.get(q).currentProgram.getUniforms();for(let Rt=0;Rt<je;Rt++)Bt.setValue(C,"_gl_DrawID",Rt),ut.render(ke[Rt]/en,gt[Rt])}else if(F.isInstancedMesh)ut.renderInstances(Fe,ot,F.count);else if(V.isInstancedBufferGeometry){let ke=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,gt=Math.min(V.instanceCount,ke);ut.renderInstances(Fe,ot,gt)}else ut.render(Fe,ot)};function $e(E,U,V){E.transparent===!0&&E.side===Pt&&E.forceSinglePass===!1?(E.side=jt,E.needsUpdate=!0,mt(E,U,V),E.side=Kt,E.needsUpdate=!0,mt(E,U,V),E.side=Pt):mt(E,U,V)}this.compile=function(E,U,V=null){V===null&&(V=E),p=Le.get(V),p.init(U),y.push(p),V.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),E!==V&&E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let q=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let le=F.material;if(le)if(Array.isArray(le))for(let be=0;be<le.length;be++){let Pe=le[be];$e(Pe,V,F),q.add(Pe)}else $e(le,V,F),q.add(le)}),p=y.pop(),q},this.compileAsync=function(E,U,V=null){let q=this.compile(E,U,V);return new Promise(F=>{function le(){if(q.forEach(function(be){ae.get(be).currentProgram.isReady()&&q.delete(be)}),q.size===0){F(E);return}setTimeout(le,10)}W.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let ht=null;function an(E){ht&&ht(E)}function Yt(){fn.stop()}function hi(){fn.start()}let fn=new lp;fn.setAnimationLoop(an),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(E){ht=E,pe.setAnimationLoop(E),E===null?fn.stop():fn.start()},pe.addEventListener("sessionstart",Yt),pe.addEventListener("sessionend",hi),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(U),U=pe.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,I),p=Le.get(E,y.length),p.init(U),y.push(p),N.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),lt.setFromProjectionMatrix(N,Hn,U.reversedDepth),ne=this.localClippingEnabled,rt=ge.init(this.clippingPlanes,ne),g=j.get(E,T.length),g.init(),T.push(g),pe.enabled===!0&&pe.isPresenting===!0){let le=x.xr.getDepthSensingMesh();le!==null&&_n(le,U,-1/0,x.sortObjects)}_n(E,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(G,de),ve=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,ve&&Se.addToRenderList(g,E),this.info.render.frame++,rt===!0&&ge.beginShadows();let V=p.state.shadowsArray;Ae.render(V,E,U),rt===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=g.opaque,F=g.transmissive;if(p.setupLights(),U.isArrayCamera){let le=U.cameras;if(F.length>0)for(let be=0,Pe=le.length;be<Pe;be++){let Re=le[be];xn(q,F,E,Re)}ve&&Se.render(E);for(let be=0,Pe=le.length;be<Pe;be++){let Re=le[be];En(g,E,Re,Re.viewport)}}else F.length>0&&xn(q,F,E,U),ve&&Se.render(E),En(g,E,U);I!==null&&P===0&&(me.updateMultisampleRenderTarget(I),me.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(x,E,U),he.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],rt===!0&&ge.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?g=T[T.length-1]:g=null};function _n(E,U,V,q){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||lt.intersectsSprite(E)){q&&ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(N);let be=O.update(E),Pe=E.material;Pe.visible&&g.push(E,be,Pe,V,ie.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||lt.intersectsObject(E))){let be=O.update(E),Pe=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ie.copy(E.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ie.copy(be.boundingSphere.center)),ie.applyMatrix4(E.matrixWorld).applyMatrix4(N)),Array.isArray(Pe)){let Re=be.groups;for(let Ge=0,qe=Re.length;Ge<qe;Ge++){let Ne=Re[Ge],Fe=Pe[Ne.materialIndex];Fe&&Fe.visible&&g.push(E,be,Fe,V,ie.z,Ne)}}else Pe.visible&&g.push(E,be,Pe,V,ie.z,null)}}let le=E.children;for(let be=0,Pe=le.length;be<Pe;be++)_n(le[be],U,V,q)}function En(E,U,V,q){let F=E.opaque,le=E.transmissive,be=E.transparent;p.setupLightsView(V),rt===!0&&ge.setGlobalState(x.clippingPlanes,V),q&&te.viewport(L.copy(q)),F.length>0&&$i(F,U,V),le.length>0&&$i(le,U,V),be.length>0&&$i(be,U,V),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function xn(E,U,V,q){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Jn(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")||W.has("EXT_color_buffer_float")?hr:Wn,minFilter:Gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));let le=p.state.transmissionRenderTarget[q.id],be=q.viewport||L;le.setSize(be.z*x.transmissionResolutionScale,be.w*x.transmissionResolutionScale);let Pe=x.getRenderTarget(),Re=x.getActiveCubeFace(),Ge=x.getActiveMipmapLevel();x.setRenderTarget(le),x.getClearColor($),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),ve&&Se.render(V);let qe=x.toneMapping;x.toneMapping=wi;let Ne=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),rt===!0&&ge.setGlobalState(x.clippingPlanes,q),$i(E,V,q),me.updateMultisampleRenderTarget(le),me.updateRenderTargetMipmap(le),W.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Be=0,ot=U.length;Be<ot;Be++){let nt=U[Be],ut=nt.object,ke=nt.geometry,gt=nt.material,je=nt.group;if(gt.side===Pt&&ut.layers.test(q.layers)){let en=gt.side;gt.side=jt,gt.needsUpdate=!0,$o(ut,V,q,ke,gt,je),gt.side=en,gt.needsUpdate=!0,Fe=!0}}Fe===!0&&(me.updateMultisampleRenderTarget(le),me.updateRenderTargetMipmap(le))}x.setRenderTarget(Pe,Re,Ge),x.setClearColor($,Z),Ne!==void 0&&(q.viewport=Ne),x.toneMapping=qe}function $i(E,U,V){let q=U.isScene===!0?U.overrideMaterial:null;for(let F=0,le=E.length;F<le;F++){let be=E[F],Pe=be.object,Re=be.geometry,Ge=be.group,qe=be.material;qe.allowOverride===!0&&q!==null&&(qe=q),Pe.layers.test(V.layers)&&$o(Pe,U,V,Re,qe,Ge)}}function $o(E,U,V,q,F,le){E.onBeforeRender(x,U,V,q,F,le),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(x,U,V,q,E,le),F.transparent===!0&&F.side===Pt&&F.forceSinglePass===!1?(F.side=jt,F.needsUpdate=!0,x.renderBufferDirect(V,U,q,F,E,le),F.side=Kt,F.needsUpdate=!0,x.renderBufferDirect(V,U,q,F,E,le),F.side=Pt):x.renderBufferDirect(V,U,q,F,E,le),E.onAfterRender(x,U,V,q,F,le)}function mt(E,U,V){U.isScene!==!0&&(U=re);let q=ae.get(E),F=p.state.lights,le=p.state.shadowsArray,be=F.state.version,Pe=J.getParameters(E,F.state,le,U,V),Re=J.getProgramCacheKey(Pe),Ge=q.programs;q.environment=E.isMeshStandardMaterial?U.environment:null,q.fog=U.fog,q.envMap=(E.isMeshStandardMaterial?Xe:Ye).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ge===void 0&&(E.addEventListener("dispose",k),Ge=new Map,q.programs=Ge);let qe=Ge.get(Re);if(qe!==void 0){if(q.currentProgram===qe&&q.lightsStateVersion===be)return Ni(E,Pe),qe}else Pe.uniforms=J.getUniforms(E),E.onBeforeCompile(Pe,x),qe=J.acquireProgram(Pe,Re),Ge.set(Re,qe),q.uniforms=Pe.uniforms;let Ne=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ne.clippingPlanes=ge.uniform),Ni(E,Pe),q.needsLights=wl(E),q.lightsStateVersion=be,q.needsLights&&(Ne.ambientLightColor.value=F.state.ambient,Ne.lightProbe.value=F.state.probe,Ne.directionalLights.value=F.state.directional,Ne.directionalLightShadows.value=F.state.directionalShadow,Ne.spotLights.value=F.state.spot,Ne.spotLightShadows.value=F.state.spotShadow,Ne.rectAreaLights.value=F.state.rectArea,Ne.ltc_1.value=F.state.rectAreaLTC1,Ne.ltc_2.value=F.state.rectAreaLTC2,Ne.pointLights.value=F.state.point,Ne.pointLightShadows.value=F.state.pointShadow,Ne.hemisphereLights.value=F.state.hemi,Ne.directionalShadowMap.value=F.state.directionalShadowMap,Ne.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ne.spotShadowMap.value=F.state.spotShadowMap,Ne.spotLightMatrix.value=F.state.spotLightMatrix,Ne.spotLightMap.value=F.state.spotLightMap,Ne.pointShadowMap.value=F.state.pointShadowMap,Ne.pointShadowMatrix.value=F.state.pointShadowMatrix),q.currentProgram=qe,q.uniformsList=null,qe}function Un(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=gr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Ni(E,U){let V=ae.get(E);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Fn(E,U,V,q,F){U.isScene!==!0&&(U=re),me.resetTextureUnits();let le=U.fog,be=q.isMeshStandardMaterial?U.environment:null,Pe=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Jt,Re=(q.isMeshStandardMaterial?Xe:Ye).get(q.envMap||be),Ge=q.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,qe=!!V.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ne=!!V.morphAttributes.position,Fe=!!V.morphAttributes.normal,Be=!!V.morphAttributes.color,ot=wi;q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ot=x.toneMapping);let nt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ut=nt!==void 0?nt.length:0,ke=ae.get(q),gt=p.state.lights;if(rt===!0&&(ne===!0||E!==M)){let Tt=E===M&&q.id===b;ge.setState(q,E,Tt)}let je=!1;q.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==gt.state.version||ke.outputColorSpace!==Pe||F.isBatchedMesh&&ke.batching===!1||!F.isBatchedMesh&&ke.batching===!0||F.isBatchedMesh&&ke.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&ke.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&ke.instancing===!1||!F.isInstancedMesh&&ke.instancing===!0||F.isSkinnedMesh&&ke.skinning===!1||!F.isSkinnedMesh&&ke.skinning===!0||F.isInstancedMesh&&ke.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&ke.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&ke.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&ke.instancingMorph===!1&&F.morphTexture!==null||ke.envMap!==Re||q.fog===!0&&ke.fog!==le||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ge.numPlanes||ke.numIntersection!==ge.numIntersection)||ke.vertexAlphas!==Ge||ke.vertexTangents!==qe||ke.morphTargets!==Ne||ke.morphNormals!==Fe||ke.morphColors!==Be||ke.toneMapping!==ot||ke.morphTargetsCount!==ut)&&(je=!0):(je=!0,ke.__version=q.version);let en=ke.currentProgram;je===!0&&(en=mt(q,U,F));let Bt=!1,Rt=!1,Tn=!1,it=en.getUniforms(),tn=ke.uniforms;if(te.useProgram(en.program)&&(Bt=!0,Rt=!0,Tn=!0),q.id!==b&&(b=q.id,Rt=!0),Bt||M!==E){te.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),it.setValue(C,"projectionMatrix",E.projectionMatrix),it.setValue(C,"viewMatrix",E.matrixWorldInverse);let At=it.map.cameraPosition;At!==void 0&&At.setValue(C,X.setFromMatrixPosition(E.matrixWorld)),Q.logarithmicDepthBuffer&&it.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&it.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Rt=!0,Tn=!0)}if(F.isSkinnedMesh){it.setOptional(C,F,"bindMatrix"),it.setOptional(C,F,"bindMatrixInverse");let Tt=F.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),it.setValue(C,"boneTexture",Tt.boneTexture,me))}F.isBatchedMesh&&(it.setOptional(C,F,"batchingTexture"),it.setValue(C,"batchingTexture",F._matricesTexture,me),it.setOptional(C,F,"batchingIdTexture"),it.setValue(C,"batchingIdTexture",F._indirectTexture,me),it.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&it.setValue(C,"batchingColorTexture",F._colorsTexture,me));let Lt=V.morphAttributes;if((Lt.position!==void 0||Lt.normal!==void 0||Lt.color!==void 0)&&ue.update(F,V,en),(Rt||ke.receiveShadow!==F.receiveShadow)&&(ke.receiveShadow=F.receiveShadow,it.setValue(C,"receiveShadow",F.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(tn.envMap.value=Re,tn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&U.environment!==null&&(tn.envMapIntensity.value=U.environmentIntensity),Rt&&(it.setValue(C,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&Tl(tn,Tn),le&&q.fog===!0&&oe.refreshFogUniforms(tn,le),oe.refreshMaterialUniforms(tn,q,K,se,p.state.transmissionRenderTarget[E.id]),gr.upload(C,Un(ke),tn,me)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(gr.upload(C,Un(ke),tn,me),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&it.setValue(C,"center",F.center),it.setValue(C,"modelViewMatrix",F.modelViewMatrix),it.setValue(C,"normalMatrix",F.normalMatrix),it.setValue(C,"modelMatrix",F.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Tt=q.uniformsGroups;for(let At=0,Dr=Tt.length;At<Dr;At++){let pn=Tt[At];Ze.update(pn,en),Ze.bind(pn,en)}}return en}function Tl(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function wl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,U,V){let q=ae.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),ae.get(E.texture).__webglTexture=U,ae.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:V,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){let V=ae.get(E);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0};let cn=C.createFramebuffer();this.setRenderTarget=function(E,U=0,V=0){I=E,w=U,P=V;let q=!0,F=null,le=!1,be=!1;if(E){let Re=ae.get(E);if(Re.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(C.FRAMEBUFFER,null),q=!1;else if(Re.__webglFramebuffer===void 0)me.setupRenderTarget(E);else if(Re.__hasExternalTextures)me.rebindTextures(E,ae.get(E.texture).__webglTexture,ae.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ne=E.depthTexture;if(Re.__boundDepthTexture!==Ne){if(Ne!==null&&ae.has(Ne)&&(E.width!==Ne.image.width||E.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(E)}}let Ge=E.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(be=!0);let qe=ae.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qe[U])?F=qe[U][V]:F=qe[U],le=!0):E.samples>0&&me.useMultisampledRTT(E)===!1?F=ae.get(E).__webglMultisampledFramebuffer:Array.isArray(qe)?F=qe[V]:F=qe,L.copy(E.viewport),H.copy(E.scissor),Y=E.scissorTest}else L.copy(we).multiplyScalar(K).floor(),H.copy(We).multiplyScalar(K).floor(),Y=tt;if(V!==0&&(F=cn),te.bindFramebuffer(C.FRAMEBUFFER,F)&&q&&te.drawBuffers(E,F),te.viewport(L),te.scissor(H),te.setScissorTest(Y),le){let Re=ae.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,Re.__webglTexture,V)}else if(be){let Re=U;for(let Ge=0;Ge<E.textures.length;Ge++){let qe=ae.get(E.textures[Ge]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ge,qe.__webglTexture,V,Re)}}else if(E!==null&&V!==0){let Re=ae.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Re.__webglTexture,V)}b=-1},this.readRenderTargetPixels=function(E,U,V,q,F,le,be,Pe=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Re=Re[be]),Re){te.bindFramebuffer(C.FRAMEBUFFER,Re);try{let Ge=E.textures[Pe],qe=Ge.format,Ne=Ge.type;if(!Q.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-q&&V>=0&&V<=E.height-F&&(E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Pe),C.readPixels(U,V,q,F,Ce.convert(qe),Ce.convert(Ne),le))}finally{let Ge=I!==null?ae.get(I).__webglFramebuffer:null;te.bindFramebuffer(C.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(E,U,V,q,F,le,be,Pe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Re=Re[be]),Re)if(U>=0&&U<=E.width-q&&V>=0&&V<=E.height-F){te.bindFramebuffer(C.FRAMEBUFFER,Re);let Ge=E.textures[Pe],qe=Ge.format,Ne=Ge.type;if(!Q.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Fe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Fe),C.bufferData(C.PIXEL_PACK_BUFFER,le.byteLength,C.STREAM_READ),E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Pe),C.readPixels(U,V,q,F,Ce.convert(qe),Ce.convert(Ne),0);let Be=I!==null?ae.get(I).__webglFramebuffer:null;te.bindFramebuffer(C.FRAMEBUFFER,Be);let ot=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Pf(C,ot,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Fe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,le),C.deleteBuffer(Fe),C.deleteSync(ot),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,V=0){let q=Math.pow(2,-V),F=Math.floor(E.image.width*q),le=Math.floor(E.image.height*q),be=U!==null?U.x:0,Pe=U!==null?U.y:0;me.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,V,0,0,be,Pe,F,le),te.unbindTexture()};let ln=C.createFramebuffer(),Ls=C.createFramebuffer();this.copyTextureToTexture=function(E,U,V=null,q=null,F=0,le=null){le===null&&(F!==0?(js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=F,F=0):le=0);let be,Pe,Re,Ge,qe,Ne,Fe,Be,ot,nt=E.isCompressedTexture?E.mipmaps[le]:E.image;if(V!==null)be=V.max.x-V.min.x,Pe=V.max.y-V.min.y,Re=V.isBox3?V.max.z-V.min.z:1,Ge=V.min.x,qe=V.min.y,Ne=V.isBox3?V.min.z:0;else{let Lt=Math.pow(2,-F);be=Math.floor(nt.width*Lt),Pe=Math.floor(nt.height*Lt),E.isDataArrayTexture?Re=nt.depth:E.isData3DTexture?Re=Math.floor(nt.depth*Lt):Re=1,Ge=0,qe=0,Ne=0}q!==null?(Fe=q.x,Be=q.y,ot=q.z):(Fe=0,Be=0,ot=0);let ut=Ce.convert(U.format),ke=Ce.convert(U.type),gt;U.isData3DTexture?(me.setTexture3D(U,0),gt=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(me.setTexture2DArray(U,0),gt=C.TEXTURE_2D_ARRAY):(me.setTexture2D(U,0),gt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);let je=C.getParameter(C.UNPACK_ROW_LENGTH),en=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Bt=C.getParameter(C.UNPACK_SKIP_PIXELS),Rt=C.getParameter(C.UNPACK_SKIP_ROWS),Tn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,nt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,nt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ge),C.pixelStorei(C.UNPACK_SKIP_ROWS,qe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ne);let it=E.isDataArrayTexture||E.isData3DTexture,tn=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){let Lt=ae.get(E),Tt=ae.get(U),At=ae.get(Lt.__renderTarget),Dr=ae.get(Tt.__renderTarget);te.bindFramebuffer(C.READ_FRAMEBUFFER,At.__webglFramebuffer),te.bindFramebuffer(C.DRAW_FRAMEBUFFER,Dr.__webglFramebuffer);for(let pn=0;pn<Re;pn++)it&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ae.get(E).__webglTexture,F,Ne+pn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ae.get(U).__webglTexture,le,ot+pn)),C.blitFramebuffer(Ge,qe,be,Pe,Fe,Be,be,Pe,C.DEPTH_BUFFER_BIT,C.NEAREST);te.bindFramebuffer(C.READ_FRAMEBUFFER,null),te.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(F!==0||E.isRenderTargetTexture||ae.has(E)){let Lt=ae.get(E),Tt=ae.get(U);te.bindFramebuffer(C.READ_FRAMEBUFFER,ln),te.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ls);for(let At=0;At<Re;At++)it?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Lt.__webglTexture,F,Ne+At):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Lt.__webglTexture,F),tn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Tt.__webglTexture,le,ot+At):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Tt.__webglTexture,le),F!==0?C.blitFramebuffer(Ge,qe,be,Pe,Fe,Be,be,Pe,C.COLOR_BUFFER_BIT,C.NEAREST):tn?C.copyTexSubImage3D(gt,le,Fe,Be,ot+At,Ge,qe,be,Pe):C.copyTexSubImage2D(gt,le,Fe,Be,Ge,qe,be,Pe);te.bindFramebuffer(C.READ_FRAMEBUFFER,null),te.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else tn?E.isDataTexture||E.isData3DTexture?C.texSubImage3D(gt,le,Fe,Be,ot,be,Pe,Re,ut,ke,nt.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(gt,le,Fe,Be,ot,be,Pe,Re,ut,nt.data):C.texSubImage3D(gt,le,Fe,Be,ot,be,Pe,Re,ut,ke,nt):E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,le,Fe,Be,be,Pe,ut,ke,nt.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,le,Fe,Be,nt.width,nt.height,ut,nt.data):C.texSubImage2D(C.TEXTURE_2D,le,Fe,Be,be,Pe,ut,ke,nt);C.pixelStorei(C.UNPACK_ROW_LENGTH,je),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,en),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Bt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Rt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Tn),le===0&&U.generateMipmaps&&C.generateMipmap(gt),te.unbindTexture()},this.initRenderTarget=function(E){ae.get(E).__webglFramebuffer===void 0&&me.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?me.setTextureCube(E,0):E.isData3DTexture?me.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?me.setTexture2DArray(E,0):me.setTexture2D(E,0),te.unbindTexture()},this.resetState=function(){w=0,P=0,I=null,te.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var zo=class extends ds{constructor(){super();let e=new Wi;e.deleteAttribute("uv");let t=new ti({side:jt}),n=new ti,i=new xs(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Ke(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new fs(e,n,6),a=new Et;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new Ke(e,yr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new Ke(e,yr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new Ke(e,yr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Ke(e,yr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Ke(e,yr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Ke(e,yr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function yr(s){return new bo({color:0,emissive:16777215,emissiveIntensity:s})}var In=2*Math.PI,jc=s=>(s%In+In)%In;function Mv(s){return jc(s%1.2/1.2*In)}var Qc=class{constructor(){this.phase=0}update(e,t=null,n=!1){if(n)return this.phase;let i=Math.max(0,e),r=jc(this.phase+i/1.2*In);if(t===null)return this.phase=r;let o=Mv(t),a=jc(o-r+Math.PI)-Math.PI;return this.phase=Math.abs(a)<.001?o:jc(r+a*(1-Math.exp(-i/.09))),this.phase}};function ko(s,e,t,n,i,r=0){let o=Math.abs(s),a=Math.max(0,Math.min(1,(o-.4)/.8)),c=a*a*(3-2*a),l=(3.35-o)*.55+(e-.11)*.52;return(-Math.cos(t+l)*Math.pow(o,1.65)*(.11+n*.15+i*.09)+Math.sin(e*4+t*2)*o*(1-o/3.35)*.018)*c*(1-r*.96)+o*r*.46}var Ve=(s,e,t)=>{let n=Math.max(0,Math.min(1,(t-s)/(e-s)));return n*n*n*(n*(n*6-15)+10)};var vr=class{constructor(){this.value=.13,this.velocity=0}update(e,t=1/60,n=!1){if(e=Math.max(.13,Math.min(1,e)),n)return this.velocity=0,this.value=e;let i=Math.max(0,Math.min(.1,t)),r=34,o=this.value-e,a=Math.exp(-r*i),c=(this.velocity+r*o)*i;return this.value=e+(o+c)*a,this.velocity=(this.velocity-r*c)*a,this.value}};var Sv=.18,Qh=s=>1-Ve(0,Sv,s);function eu(s){s.updateWorldMatrix(!0,!0),s.updateMatrixWorld(!0);let e=s.matrixWorld.clone().invert(),t=new Ft,n=new S;return s.traverse(i=>{if(i.isMesh)for(let r=0;r<i.geometry.attributes.position.count;r++)i.getVertexPosition(r,n).applyMatrix4(i.matrixWorld).applyMatrix4(e),t.expandByPoint(n)}),t.expandByScalar(.8)}function el(s,e,t,n,i,r){s.updateMatrixWorld();let a=new $n().setFromProjectionMatrix(new He().multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse)).planes[0],c=new S(1,0,0).applyQuaternion(s.quaternion),l=-1/0;for(let h of[e.min.x,e.max.x])for(let u of[e.min.y,e.max.y])for(let d of[e.min.z,e.max.z]){let f=new S(h,u,d).sub(t).multiplyScalar(r).applyQuaternion(i).add(n);l=Math.max(l,a.distanceToPoint(f))}return c.multiplyScalar(Math.max(0,(l+.35)/-a.normal.dot(c)))}function tl(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new pt,l=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=pp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);let m=pp(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function pp(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Ut(o,t,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){let _=h.getComponent(d,m);a.setComponent(d+u,m,_)}}else o.set(h.array,c);c+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function tu(s,e){if(e===Rh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===fr||e===Oo){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===fr)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var nl=class extends ri{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new cu(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new Su(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Ei.extractUrlBase(e);o=Ei.resolveURL(l,this.path)}else o=Ei.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ar(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===yp){try{o[at.KHR_BINARY_GLTF]=new bu(e)}catch(u){i&&i(u);return}r=JSON.parse(o[at.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Iu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case at.KHR_MATERIALS_UNLIT:o[u]=new ou;break;case at.KHR_DRACO_MESH_COMPRESSION:o[u]=new Eu(r,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:o[u]=new Tu;break;case at.KHR_MESH_QUANTIZATION:o[u]=new wu;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function bv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ru=class{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ue(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Jt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new qi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new xs(h),l.distance=u;break;case"spot":l=new Co(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ci(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},ou=class{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return $t}extendParams(e,t,n){let i=[];e.color=new Ue(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Jt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Dt))}return Promise.all(i)}},au=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},cu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_t}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new _e(a,a)}return Promise.all(r)}},lu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_t}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},hu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_t}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},uu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_t}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Jt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Dt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},du=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_t}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},fu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_t}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(a[0],a[1],a[2],Jt),Promise.all(r)}},pu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_t}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},mu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_t}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(a[0],a[1],a[2],Jt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Dt)),Promise.all(r)}},gu=class{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_t}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},_u=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_t}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},xu=class{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},yu=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},vu=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Mu=class{constructor(e){this.name=at.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Su=class{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Pn.TRIANGLES&&l.mode!==Pn.TRIANGLE_STRIP&&l.mode!==Pn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let m of u){let _=new He,g=new S,p=new ze,T=new S(1,1,1),y=new fs(m.geometry,m.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&T.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,_.compose(g,p,T));for(let x in c)if(x==="_COLOR_0"){let R=c[x];y.instanceColor=new Xi(R.array,R.itemSize,R.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,c[x]);Et.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},yp="glTF",Ho=12,mp={JSON:1313821514,BIN:5130562},bu=class{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ho),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==yp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ho,r=new DataView(e,Ho),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===mp.JSON){let l=new Uint8Array(e,Ho+o,a);this.content=n.decode(l)}else if(c===mp.BIN){let l=Ho+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Eu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Ru[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Ru[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Mr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let m in f.attributes){let _=f.attributes[m],g=c[m];g!==void 0&&(_.normalized=g)}u(f)},a,l,Jt,d)})})}},Tu=class{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},wu=class{constructor(){this.name=at.KHR_MESH_QUANTIZATION}},il=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*l,_=m-l,g=-2*f+3*d,p=f-d,T=1-g,y=p-d+u;for(let x=0;x!==a;x++){let R=o[_+x+a],w=o[_+x+c]*h,P=o[m+x+a],I=o[m+x]*h;r[x]=T*R+y*w+g*P+p*I}return r}},Ev=new ze,Au=class extends il{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Ev.fromArray(r).normalize().toArray(r),r}},Pn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Mr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gp={9728:Zt,9729:un,9984:cc,9985:cr,9986:Ss,9987:Gn},_p={33071:Yn,33648:Zs,10497:Gi},nu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ru={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Tv={CUBICSPLINE:void 0,LINEAR:ls,STEP:cs},iu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function wv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ti({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kt})),s.DefaultMaterial}function Rs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ci(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Av(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Rv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Cv(s){let e,t=s.extensions&&s.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+su(t.attributes):e=s.indices+":"+su(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+su(s.targets[n]);return e}function su(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Cu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Iv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Pv=new He,Iu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new bv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new wo(this.options.manager):this.textureLoader=new Io(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ar(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Rs(r,a,i),ci(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Ei.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=nu[i.type],a=Mr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Ut(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=nu[i.type],l=Mr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,_,g;if(f&&f!==u){let p=Math.floor(d/f),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,y=t.cache.get(T);y||(_=new l(a,p*f,i.count*f/h),y=new tr(_,f/h),t.cache.add(T,y)),g=new nr(y,c,d%f/h,m)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),g=new Ut(_,c,m);if(i.sparse!==void 0){let p=nu.SCALAR,T=Mr[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,R=new T(o[1],y,i.sparse.count*p),w=new l(o[2],x,i.sparse.count*c);a!==null&&(g=new Ut(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let P=0,I=R.length;P<I;P++){let b=R[P];if(g.setX(b,w[P*c]),c>=2&&g.setY(b,w[P*c+1]),c>=3&&g.setZ(b,w[P*c+2]),c>=4&&g.setW(b,w[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=gp[d.magFilter]||un,h.minFilter=gp[d.minFilter]||Gn,h.wrapS=_p[d.wrapS]||Gi,h.wrapT=_p[d.wrapT]||Gi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Zt&&h.minFilter!==un,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(_){let g=new Ht(_);g.needsUpdate=!0,d(g)}),t.load(Ei.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),ci(u,o),u.userData.mimeType=o.mimeType||Iv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[at.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Qn,dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new xi,dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ti}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[at.KHR_MATERIALS_UNLIT]){let u=i[at.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ue(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Jt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Dt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Pt);let h=r.alphaMode||iu.OPAQUE;if(h===iu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===iu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==$t&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new _e(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==$t&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==$t){let u=r.emissiveFactor;a.emissive=new Ue().setRGB(u[0],u[1],u[2],Jt)}return r.emissiveTexture!==void 0&&o!==$t&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Dt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),ci(u,r),t.associations.set(u,{materials:e}),r.extensions&&Rs(i,u,r),u})}createUniqueName(e){let t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return xp(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=Cv(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[at.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=xp(new pt,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?wv(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let _=h[f],g=o[f],p,T=l[f];if(g.mode===Pn.TRIANGLES||g.mode===Pn.TRIANGLE_STRIP||g.mode===Pn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new no(_,T):new Ke(_,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Pn.TRIANGLE_STRIP?p.geometry=tu(p.geometry,Oo):g.mode===Pn.TRIANGLE_FAN&&(p.geometry=tu(p.geometry,fr));else if(g.mode===Pn.LINES)p=new ro(_,T);else if(g.mode===Pn.LINE_STRIP)p=new jn(_,T);else if(g.mode===Pn.LINE_LOOP)p=new oo(_,T);else if(g.mode===Pn.POINTS)p=new yi(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&Rv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ci(p,r),g.extensions&&Rs(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Rs(i,u[0],r),u[0];let d=new Nt;r.extensions&&Rs(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(xt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ys(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ci(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new He;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new so(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],m=i.samplers[f.sampler],_=f.target,g=_.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,T=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",T)),l.push(m),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],_=u[3],g=u[4],p=[];for(let y=0,x=d.length;y<x;y++){let R=d[y],w=f[y],P=m[y],I=_[y],b=g[y];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();let M=n._createAnimationTracks(R,w,P,I,b);if(M)for(let L=0;L<M.length;L++)p.push(M[L])}let T=new gs(r,void 0,p);return ci(T,i),T})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Pv)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new ir:l.length>1?h=new Nt:l.length===1?h=l[0]:h=new Et,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ci(h,r),r.extensions&&Rs(n,h,r),r.matrix!==void 0){let u=new He;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Nt;n.name&&(r.name=i.createUniqueName(n.name)),ci(r,n),n.extensions&&Rs(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof dn||d instanceof Ht)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];Ki[r.path]===Ki.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Ki[r.path]){case Ki.weights:l=ni;break;case Ki.rotation:l=ii;break;case Ki.translation:case Ki.scale:l=si;break;default:switch(n.itemSize){case 1:l=ni;break;case 2:case 3:default:l=si;break}break}let h=i.interpolation!==void 0?Tv[i.interpolation]:ls,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let m=new l(c[d]+"."+Ki[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Cu(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ii?Au:il;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Lv(s,e,t){let n=e.attributes,i=new Ft;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new S(c[0],c[1],c[2]),new S(l[0],l[1],l[2])),a.normalized){let h=Cu(Mr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new S,c=new S;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let _=Cu(Mr[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new mn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function xp(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=Ru[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ct.workingColorSpace!==Jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),ci(s,e),Lv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Av(s,e.targets,t):s})}async function vp(){let s=await new nl().loadAsync("./assets/shark-anatomical.glb");return Dv(s)}function Dv(s){let e=new Nt;e.name="anatomical-glass-shark";let t=s.scene;t.updateMatrixWorld(!0);let n=new Ft().setFromObject(t),i=n.getSize(new S),r=n.getCenter(new S),o=t.getObjectByName("Head5");o&&(r.y=o.getWorldPosition(new S).y);let a=new Nt;a.rotation.y=Math.PI/2,a.scale.setScalar(6.49/i.z),a.position.x=-.555,t.position.sub(r),a.add(t),e.add(a);let c=[],l=[];t.traverse(I=>{if(I.isBone&&l.push({bone:I,rest:I.quaternion.clone()}),!I.isMesh)return;let b=I.material,M=new _t({map:b.map,normalMap:b.normalMap,normalScale:new _e(.36,.36),color:"#d9edee",metalness:0,roughness:.075,transmission:.96,thickness:.28,ior:1.37,clearcoat:.45,clearcoatRoughness:.08,iridescence:.38,iridescenceIOR:1.3,iridescenceThicknessRange:[200,410],dispersion:.14,attenuationColor:"#9abfc6",attenuationDistance:5,envMapIntensity:.9,side:Kt});M.onBeforeCompile=L=>{L.fragmentShader=L.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
      #ifdef USE_MAP
        float albedoLuma=dot(sampledDiffuseColor.rgb,vec3(.2126,.7152,.0722));
        float eyeMask=smoothstep(.018,.12,albedoLuma);
        vec3 crystal=vec3(.70,.89,.93)+vec3(.23,.10,.07)*sqrt(albedoLuma);
        diffuseColor.rgb=diffuse*mix(vec3(.025,.055,.065),crystal,eyeMask);
      #endif`)},M.customProgramCacheKey=()=>"okarar-anatomical-crystal-v7",c.push(M),I.material=M,I.frustumCulled=!1});let h=new Po(t),u=s.animations.find(I=>I.name==="swimming");h.clipAction(u).play();let d=s.animations.find(I=>I.name==="bite").tracks.filter(I=>/^(Jaw|[LR]_upper_Lip|Center_upper_Lip|Upper_Teeth)/.test(I.name)).map(I=>{let[b,M]=I.name.split("."),L=t.getObjectByName(b),H=u.tracks.find(Y=>Y.name===I.name)?.createInterpolant();return{bone:L,property:M,native:H,rest:L[M].toArray(),value:Array.from(I.createInterpolant().evaluate(.45))}}),f=t.getObjectByName("Upper_Teeth12"),m=t.getObjectByName("Jaw6"),_=new vr,g=.13;e.updateWorldMatrix(!0,!0);let p=m.worldToLocal(f.getWorldPosition(new S).add(new S(0,-.28,.4).multiplyScalar(6.49/i.z).applyAxisAngle(new S(0,1,0),Math.PI/2))),T=new ze,y=new S;function x({phase:I,amplitude:b=.6,jawOpen:M=.13,engulf:L=0,dt:H=1/60,instant:Y=!1}){let $=(I%(Math.PI*2)+Math.PI*2)%(Math.PI*2)/(Math.PI*2);h.setTime($*u.duration);for(let{bone:z,rest:se}of l)/Spine|BackFin|DorsalFin|[LR]_Fin/.test(z.name)&&z.quaternion.slerpQuaternions(se,z.quaternion.clone(),.35+b*1.05);g=_.update(M,H,Y);let Z=Math.max(0,(g-.13)/(1-.13));for(let z of d)z.bone&&(z.bone[z.property].fromArray(z.native?z.native.evaluate($*u.duration):z.rest),z.property==="quaternion"?z.bone.quaternion.slerp(T.fromArray(z.value),Z*(z.bone===m?1+L*.3:1)):z.bone[z.property].lerp(y.fromArray(z.value),Z));e.updateWorldMatrix(!0,!0)}function R(){e.updateWorldMatrix(!0,!0);let I=f.getWorldPosition(new S);return e.worldToLocal(I).add(new S(.05,-.07-g*.12,0))}function w(){e.updateWorldMatrix(!0,!0);let I=e.worldToLocal(f.getWorldPosition(new S)),b=e.worldToLocal(m.localToWorld(p.clone())),M=I.clone().lerp(b,.2),L=new S(I.y-b.y,b.x-I.x,0).normalize();return M.addScaledVector(L,.035),{center:M,upper:I,lower:b,normal:L,width:.96,height:Math.max(.14,I.distanceTo(b))}}function P(I,b,M){let L=R(),H=e.localToWorld(L.clone()).project(I),Y=(H.x+1)*b/2,$=(1-H.y)*M/2,Z=[];for(let z of[-1,1])for(let se of[-1,1])Z.push(e.localToWorld(L.clone().add(new S(0,z*(.1+g*.2),se*.43))).project(I));return{x:Y,y:$,left:Math.min(...Z.map(z=>(z.x+1)*b/2)),right:Math.max(...Z.map(z=>(z.x+1)*b/2)),top:Math.min(...Z.map(z=>(1-z.y)*M/2)),bottom:Math.max(...Z.map(z=>(1-z.y)*M/2))}}return{group:e,animate:x,localMouth:R,mouth:P,aperture:w,get jawOpen(){return g},setLight(I){for(let b of c)b.normalScale.setScalar(I?.25:.36)},setFinish(I){for(let b of c)b.roughness=.16-I*.12,b.transmission=.86+I*.14},setColor(I){let b={pearl:["#d9edee","#9abfc6"],iris:["#e8def3","#a991bc"],ember:["#f3e3ce","#c1a581"]},M=b[I]||b.pearl;for(let L of c)L.color.set(M[0]),L.attenuationColor.set(M[1])}}}var on=Math.PI,rl=xt.clamp,Mp=new S(1.03,-.13,0),li=1.03,Go=2.43,Nv=new qt([[-2.83,.075,.075],[-2.5,.12,.1],[-2.12,.22,.19],[-1.65,.39,.32],[-1,.58,.46],[-.3,.7,.61],[.35,.73,.7],[.85,.67,.73],[1.3,.64,.73],[1.72,.59,.71],[2.07,.5,.64],[2.32,.39,.52],[2.48,.29,.4],[2.62,.14,.22],[2.69,.004,.004]].map(s=>new S(...s))),sl=Nv.getPoints(600);function Pu(s){let e=0,t=sl.length-1;for(;t-e>1;){let o=e+t>>1;sl[o].x<s?e=o:t=o}let n=sl[e],i=sl[t],r=rl((s-n.x)/(i.x-n.x),0,1);return{ry:xt.lerp(n.y,i.y,r),rz:xt.lerp(n.z,i.z,r),cy:.02}}function Cs(s){if(s<li||s>=Go)return on/2;let e=(s-li)/(Go-li),t=Pu(s),n=xt.lerp(-.13,t.cy-t.ry,e*e*(3-2*e)),i=Math.asin(rl((t.cy-n)/t.ry,0,1));return xt.lerp(on/2,i,xt.smoothstep(e,0,.13))}function Ri(s,e){let t=Pu(s),n=t.cy+t.ry*Math.sin(e),i=.035*Math.exp(-Math.pow((s-1.72)/.19,2)-Math.pow((n-.26)/.12,2));return new S(s,n,(t.rz-i)*Math.cos(e))}function Vo(s,e,t,n=!1){let i=[],r=[];for(let a=0;a<=e;a++)for(let c=0;c<=t;c++){let l=s(a/e,c/t);i.push(l.x,l.y,l.z)}for(let a=0;a<e;a++)for(let c=0;c<t;c++){let l=a*(t+1)+c,h=l+1,u=l+t+1,d=u+1;r.push(...n?[l,h,u,h,d,u]:[l,u,h,h,u,d])}let o=new pt;return o.setAttribute("position",new Je(i,3)),o.setIndex(r),o.computeVertexNormals(),o.computeBoundingSphere(),o}function Sp(s){return new ei(...s.map(e=>new S(...e)))}function Uv(s,e,t,n,i){let r=Sp(s),o=Sp(e),a=new S(...t),c=[];for(let l of[1,-1])c.push(Vo((h,u)=>{let d=r.getPoint(h).lerp(o.getPoint(h),u),f=Math.pow(Math.sin(on*u),.72)*Math.pow(1-h,.75)*n;return d.addScaledVector(a,l*f),d},i,16,l<0));return c}var Fv=`
uniform float uSwimPhase;uniform float uSwimFlow;uniform float uJawOpen;uniform float uIsJaw;uniform float uIsFin;
#ifdef JAW_WEB
attribute float aJawBlend;
#endif
vec3 jawPoint(vec3 p){
  float weight=uIsJaw;
  #ifdef JAW_WEB
  weight=aJawBlend;
  #endif
  weight*=smoothstep(1.03,1.55,p.x);
  vec3 q=p-vec3(1.03,-.13,0.);float a=-uJawOpen*.37*weight;
  q.xy=mat2(cos(a),sin(a),-sin(a),cos(a))*q.xy;
  p=q+vec3(1.03,-.13,0.);
  p.x+=uJawOpen*.085*weight;
  float upper=(1.-weight)*smoothstep(1.,2.5,p.x);
  p.x+=upper*uJawOpen*.055;p.y+=upper*uJawOpen*.04;
  return p;
}
float spine(float x){float t=clamp((1.55-x)/5.35,0.,1.);return sin(uSwimPhase-t*2.15)*(.012+.48*t*t)*(.55+uSwimFlow*.75);}
vec3 swim(vec3 p){
  p=jawPoint(p);
  float t=clamp((1.55-p.x)/5.35,0.,1.);
  float slope=(spine(p.x+.01)-spine(p.x-.01))/.02;
  float a=-atan(slope);float z=p.z;
  p.x+=sin(a)*z;p.z=cos(a)*z+spine(p.x);
  p.y+=sin(uSwimPhase-t*1.8)*t*t*.055;
  p.y+=uIsFin*sin(uSwimPhase-abs(z)*.8)*pow(abs(z)/2.2,2.)*.09;
  p.z+=uIsFin*sin(uSwimPhase-.9)*pow(max(p.y-.7,0.),2.)*.045;
  return p;
}`;function Ov({mobile:s=!1}={}){let e=new Nt;e.visible=!1,e.name="glass-shark";let t={uSwimPhase:{value:0},uSwimFlow:{value:.6},uJawOpen:{value:0}},n=[];function i(N,{jaw:X=!1,fin:ie=!1,web:re=!1,skin:ve=!1}={}){return N.onBeforeCompile=xe=>{Object.assign(xe.uniforms,t,{uIsJaw:{value:Number(X)},uIsFin:{value:Number(ie)}}),xe.vertexShader=xe.vertexShader.replace("#include <common>",`#include <common>
`+(re?`#define JAW_WEB
`:"")+Fv+(ve?`
varying vec3 vAnatomy;`:"")),xe.vertexShader=xe.vertexShader.replace("#include <beginnormal_vertex>",`
        #include <beginnormal_vertex>
        vec3 n=normalize(objectNormal);
        vec3 t1=normalize(cross(n,abs(n.y)<.9?vec3(0.,1.,0.):vec3(1.,0.,0.)));
        vec3 t2=cross(n,t1);
        objectNormal=normalize(cross(swim(position+t1*.002)-swim(position-t1*.002),swim(position+t2*.002)-swim(position-t2*.002)));
      `),xe.vertexShader=xe.vertexShader.replace("#include <begin_vertex>","vec3 transformed=swim(position);"+(ve?"vAnatomy=position;":"")),ve&&(xe.fragmentShader=xe.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vAnatomy;`),xe.fragmentShader=xe.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
          float seam=-.08+.022*sin(vAnatomy.x*13.)+.014*sin(vAnatomy.x*31.+vAnatomy.z*9.);
          float dorsal=smoothstep(seam-.035,seam+.055,vAnatomy.y);
          diffuseColor.rgb*=mix(vec3(.96,1.,.98),vec3(.42,.56,.61),dorsal*.62);
        `),xe.fragmentShader=xe.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
          float grain=sin(vAnatomy.x*285.+sin(vAnatomy.z*130.))*sin(vAnatomy.y*240.);
          roughnessFactor+=grain*.006;
        `))},N.customProgramCacheKey=()=>`glass-shark-v6-${Number(X)}-${Number(ie)}-${Number(re)}-${Number(ve)}`,N}function r(N={}){let X=i(new _t({color:"#e4f3f0",metalness:0,roughness:.065,transmission:s?.94:1,thickness:.65,ior:1.42,dispersion:.35,clearcoat:.5,clearcoatRoughness:.045,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[180,500],attenuationColor:"#9cc6cb",attenuationDistance:5,envMapIntensity:1.05,side:Kt}),{skin:!0,...N});return n.push(X),X}let o=r(),a=r({jaw:!0}),c=r({fin:!0});c.thickness=.14,a.side=Pt;let l=i(new _t({color:"#7c9ea3",roughness:.2,transmission:.8,thickness:.1,metalness:0,clearcoat:.3,iridescence:.5})),h=l.clone();i(h,{jaw:!0});let f=Vo((N,X)=>{let ie=-2.83+N*5.52,re=Cs(ie);return Ri(ie,-re+X*(on+2*re))},s?104:180,s?40:68),m=new Ke(f,o);m.name="great-white-body",e.add(m);let _=Vo((N,X)=>{let ie=li+N*(Go-li),re=Cs(ie);return Ri(ie,on+re+X*(on-2*re))},s?40:68,s?20:32),g=new Ke(_,a);g.name="articulated-chin",e.add(g);let p=[],T=[];for(let N of[1,-1])for(let X=N===1?0:1;X<=40;X++){let ie=.13+.87*(N===1?X/40:1-X/40),re=li+ie*(Go-li),ve=Cs(re),xe=Ri(re,N===1?-ve:on+ve);p.push(xe),T.push(xe.clone())}let y=new Vn(new qt(p,!1),128,.018,8,!1);e.add(new Ke(y,l),new Ke(y.clone(),h));let x=new qt(p,!1);for(let N of[!1,!0]){let X=Vo((ve,xe)=>{let C=x.getPoint(ve),ee=new S(.3,-.3,C.z*.05),W=C.clone().lerp(ee,xe);return W.x-=Math.sin(xe*on)*.12,W.y+=(N?-.08:.12)*Math.sin(xe*on),W},80,22,N),ie=i(new $t({color:N?"#101a20":"#060d12",side:Pt}),{jaw:N}),re=new Ke(X,ie);re.name=N?"mouth-floor":"recessed-palate",e.add(re)}let R=r({web:!0});R.transmission=.7,R.thickness=.08,R.side=Pt;for(let N of[-1,1]){let X=Vo((ve,xe)=>{let C=li+ve*.62,ee=Cs(C),W=Ri(C,N>0?-ee:on+ee);return W.y-=xe*.025,W.z*=.97,W},24,12,N<0),ie=[];for(let ve=0;ve<=24;ve++)for(let xe=0;xe<=12;xe++)ie.push(xe/12);X.setAttribute("aJawBlend",new Je(ie,1));let re=new Ke(X,R);re.name="flexible-mouth-corner",e.add(re)}let w=new rr;w.moveTo(-.045,0),w.lineTo(.045,0);for(let N=1;N<=12;N++){let X=N/12;w.lineTo(.045*(1-X)+(N%2?.0028:0),-.115*X)}for(let N=11;N>=0;N--){let X=N/12;w.lineTo(-.045*(1-X)-(N%2?.0028:0),-.115*X)}w.closePath();let P=new vo(w,{depth:.01,bevelEnabled:!0,bevelThickness:.0015,bevelSize:.001,bevelSegments:1,steps:1});P.translate(0,0,-.005),P.deleteAttribute("uv");let I=i(new _t({color:"#e4f1e9",roughness:.14,metalness:.08,transmission:.35,thickness:.035,clearcoat:1})),b=I.clone();b.side=Pt,i(b,{jaw:!0});let M=[[],[]];for(let N of[0,1])for(let X of[1,-1])for(let ie=0;ie<14;ie++){let re=.18+ie/13*.78,ve=li+re*(Go-li),xe=Cs(ve),C=X===1?-xe:on+xe,ee=Ri(ve,C),Q=Ri(ve+.01,X===1?-Cs(ve+.01):on+Cs(ve+.01)).sub(ee).normalize();Q.y=0,Q.normalize();let te=new S().crossVectors(Q,new S(0,1,0)).normalize(),fe=new He().makeBasis(Q,new S(0,1,0),te);for(let ae of[!1,!0]){let me=P.clone(),Ye=(.8+.45*Math.sin(re*on))*(N?.65:1);me.scale((ae?.85:1.3)*Ye,(ae?-1.15:1.5)*Ye,Ye),me.applyMatrix4(fe),me.translate(ee.x-N*.035,ee.y+(ae?-.022:.025),ee.z*(N?.82:.93)),M[Number(ae)].push(me)}}for(let N of[!1,!0]){let X=new Ke(tl(M[Number(N)]),N?b:I);X.name=N?"lower-teeth-two-rows":"upper-teeth-two-rows",e.add(X)}let L=i(new _t({color:"#050a0e",roughness:.22,metalness:0,clearcoat:.3})),H=i(new $t({color:"#233e48",transparent:!0,opacity:.78}));for(let N of[-1,1]){let X=Ri(1.82,.33);X.z=N*(Math.abs(X.z)+.01);let ie=new ms(.063,28,18);ie.scale(1,.84,.4),ie.rotateY(N*.38),ie.translate(X.x,X.y,X.z),e.add(new Ke(ie,L));let re=[];for(let xe=0;xe<=28;xe++){let C=xe/28*2*on;re.push(new S(X.x+Math.cos(C)*.081,X.y+Math.sin(C)*.061,X.z))}e.add(new Ke(new Vn(new qt(re,!0),30,.004,5,!0),o));let ve=[];for(let xe=0;xe<=12;xe++){let C=xe/12,ee=2.24+C*.13,W=Ri(ee,-.03-Math.sin(C*on)*.04);W.z*=N,ve.push(W)}e.add(new Ke(new Vn(new qt(ve),10,.009,5,!1),L));for(let xe=0;xe<5;xe++){let C=[];for(let W=0;W<=20;W++){let Q=W/20,te=.87-xe*.19-.11*Math.sin(Q*on),fe=Pu(te),ae=.69-Q*(1.25-xe*.03);C.push(new S(te,fe.cy+fe.ry*Math.sin(ae),N*(fe.rz*Math.cos(ae)+.004)))}e.add(new Ke(new Vn(new qt(C),28,.012,6,!1),H));let ee=C.map(W=>new S(W.x-.025,W.y,W.z));e.add(new Ke(new Vn(new qt(ee),28,.004,5,!1),l))}}let Y=[];for(let N of[-1,1])for(let X=0;X<36;X++){let ie=2.08+X%9*.054,re=-.16+Math.floor(X/9)*.19+.028*Math.sin(X*2.4),ve=Ri(ie,re);ve.z*=N,Y.push(ve.x,ve.y,ve.z)}let $=new pt;$.setAttribute("position",new Je(Y,3));let Z=i(new Qn({color:"#35515a",size:.008,transparent:!0,opacity:.48}));e.add(new yi($,Z));let z=[];function se(N,X,ie,re=.055){for(let ve of Uv(N,X,ie,re,s?26:42)){let xe=new Ke(ve,c);e.add(xe),z.push(xe)}}se([[.43,.66,0],[.22,1.13,0],[-.27,1.77,0],[-.48,1.8,0]],[[-1.04,.48,0],[-.65,.83,0],[-.6,1.46,0],[-.48,1.8,0]],[0,0,1],.07),se([[-1.66,.31,0],[-1.75,.52,0],[-1.88,.75,0],[-2.02,.74,0]],[[-2.2,.15,0],[-1.93,.29,0],[-2.05,.61,0],[-2.02,.74,0]],[0,0,1],.028);for(let N of[-1,1])se([[.48,-.25,N*.45],[.2,-.31,N*.93],[-.63,-.47,N*1.92],[-1.16,-.57,N*2.12]],[[-.3,-.42,N*.44],[-.72,-.37,N*.99],[-1.17,-.53,N*1.94],[-1.16,-.57,N*2.12]],[0,1,0],.05),se([[-1.24,-.32,N*.24],[-1.4,-.38,N*.49],[-1.65,-.43,N*.77],[-1.87,-.47,N*.89]],[[-1.8,-.24,N*.19],[-1.8,-.29,N*.46],[-1.95,-.43,N*.79],[-1.87,-.47,N*.89]],[0,1,0],.03),se([[-2.14,.01,N*.15],[-2.35,.02,N*.27],[-2.66,.015,N*.25],[-2.78,0,N*.09]],[[-2.14,-.045,N*.15],[-2.35,-.04,N*.24],[-2.66,-.025,N*.2],[-2.78,0,N*.09]],[0,1,0],.018);se([[-2.63,.07,0],[-2.8,.65,0],[-3.57,1.53,0],[-3.8,1.58,0]],[[-3.09,-.01,0],[-3.04,.52,0],[-3.55,1.17,0],[-3.8,1.58,0]],[0,0,1],.035),se([[-2.63,-.07,0],[-2.98,-.42,0],[-3.47,-.98,0],[-3.73,-1.07,0]],[[-3.09,.01,0],[-3.1,-.27,0],[-3.55,-.78,0],[-3.73,-1.07,0]],[0,0,1],.03),se([[-1.94,-.18,0],[-2.04,-.35,0],[-2.14,-.54,0],[-2.25,-.52,0]],[[-2.4,-.11,0],[-2.29,-.18,0],[-2.34,-.39,0],[-2.25,-.52,0]],[0,0,1],.022);let K=0,G=.6,de=.13,we=new vr;function We(N,X=!1){let ie=N.clone(),re=(X?1:0)*xt.smoothstep(ie.x,1.03,1.55);ie.sub(Mp).applyAxisAngle(new S(0,0,1),-de*.37*re).add(Mp),ie.x+=de*.085*re;let ve=(1-re)*xt.smoothstep(ie.x,1,2.5);ie.x+=ve*de*.055,ie.y+=ve*de*.04;let xe=te=>{let fe=rl((1.55-te)/5.35,0,1);return Math.sin(K-fe*2.15)*(.012+.48*fe*fe)*(.55+G*.75)},C=rl((1.55-ie.x)/5.35,0,1),ee=(xe(ie.x+.01)-xe(ie.x-.01))/.02,W=-Math.atan(ee),Q=ie.z;return ie.x+=Math.sin(W)*Q,ie.z=Math.cos(W)*Q+xe(ie.x),ie.y+=Math.sin(K-C*1.8)*C*C*.055,ie}function tt({phase:N,amplitude:X=.6,jawOpen:ie=.13,dt:re=1/60,instant:ve=!1}){K=N,G=X,de=we.update(ie,re,ve),t.uSwimPhase.value=N,t.uSwimFlow.value=X,t.uJawOpen.value=de}function lt(){return We(new S(1.95,-.27-de*.27,0))}function rt(N,X,ie){e.updateWorldMatrix(!0,!1);let re=W=>{let Q=W.applyMatrix4(e.matrixWorld).project(N);return{x:(Q.x+1)*X/2,y:(1-Q.y)*ie/2}},ve=re(lt()),xe=[];for(let W=3;W<p.length;W+=5)xe.push(re(We(p[W])),re(We(T[W],!0)));let C=xe.map(W=>W.x),ee=xe.map(W=>W.y);return{...ve,left:Math.min(...C),right:Math.max(...C),top:Math.min(...ee),bottom:Math.max(...ee)}}function ne(N){for(let X of n)X.transmission=N?.94:1}return{group:e,animate:tt,mouth:rt,localMouth:lt,setLight:ne,get jawOpen(){return de},setFinish(N){for(let X of n)X.roughness=.15-N*.13,X.transmission=.88+N*.12},setColor(N){let X={pearl:["#d8eeeb","#7caeb7"],iris:["#e9dff4","#a28ab9"],ember:["#f6e6d5","#be996f"]},ie=X[N]||X.pearl;for(let re of n)re.color.set(ie[0]),re.attenuationColor.set(ie[1])}}}function bp({mobile:s=!1,loadModel:e=typeof document<"u"}={}){let t=new Nt;t.name="shark-actor",t.visible=!1;let n=Ov({mobile:s}),i={phase:0},r=s,o=.75,a="pearl",c="procedural-fallback";n.group.visible=!0,t.add(n.group);let l=eu(t),h=(e?vp().then(u=>{let d=n.group;t.remove(d);let f=new Set;d.traverse(m=>{m.geometry&&m.geometry.dispose(),m.material&&f.add(m.material)});for(let m of f)m.dispose();n=u,t.add(n.group),n.setLight(r),n.setFinish(o),n.setColor(a),n.animate({...i,instant:!0}),c="anatomical"}).catch(u=>{console.warn("Anatomical shark unavailable; using the local procedural fallback.",u),c="procedural-fallback"}):Promise.resolve()).then(()=>{l=eu(t)});return{group:t,ready:h,get entryBounds(){return l},get model(){return c},get jawOpen(){return n.jawOpen},animate(u){i=u,n.animate(u)},mouth:(...u)=>n.mouth(...u),localMouth:()=>n.localMouth(),aperture:()=>n.aperture?n.aperture():{center:n.localMouth(),normal:new S(1,0,0),width:1.1,height:.3+n.jawOpen*.65},setLight(u){r=u,n.setLight(u)},setFinish(u){o=u,n.setFinish(u)},setColor(u){a=u,n.setColor(u)}}}var cl=6.7,Sr=xt.lerp,Ep=(s,e)=>Math.sign(s)*Math.pow(Math.abs(s),e);function wp(s){let e=Math.abs(s)/(cl/2),t=Math.abs(s),n=1.12-.99*Math.pow(e,1.72)+.12*Math.sin(e*Math.PI),i=1.225-.18*Math.pow(Math.min(1,t/.66),2),r=xt.clamp((t-.66)/.48,0,1),o=Ve(0,.4,r)*(1-Ve(.6,1,r));return{front:Sr(i,n,Ve(.205,.3,e))+.49*o,back:-1.67+1.8*Math.pow(e,.72)-.16*Math.sin(e*Math.PI),lobe:o}}function Xo(s,e,t=1){let n=Math.abs(s),i=s*cl/2,{front:r,back:o,lobe:a}=wp(i),c=Sr(r,o,e),l=Math.max(0,Math.sin(Math.PI*e)),h=.13*(1-n)*l,u=.05*Math.exp(-Math.pow(n/.23,2)),d=(.08*Math.pow(1-n,1.6)+u)*Math.pow(l,.68),f=.04*Math.pow(1-n,2)*Math.sin(Math.PI*Math.min(1,e*2)),m=h+t*d*(t>0?1:.61)+f,_=zv(c),g=Math.abs(i)/_.width;if(g<1){let y=.03+t*_.height*Math.pow(1-Math.pow(g,2.4390243902439024),.43)*(t>0?1:.71),x=m*t,R=y*t,w=.055,P=Math.max(w-Math.abs(x-R),0)/w;m=t*(Math.max(x,R)+P*P*w*.25)}if(Math.abs(i)<.66){let y=.03+t*.17*Math.pow(1-Math.pow(Math.abs(i)/.66,2.4390243902439024),.43)*(t>0?1:.71);m=Sr(y,m,Ve(0,.16,e))}let p=1-Ve(0,.16,e);if(Math.abs(i)>=.66){let y=.03+.04*a-.12*a*Math.sin(Math.PI*xt.clamp((Math.abs(i)-.66)/.48,0,1));m=Sr(m,y,p)}m-=.14*a*Math.sin(Math.PI*Math.min(1,e/.28))*(1-Ve(.18,.32,e)),m+=.0035*Math.sin(e*55+n*27)*l*n*(1-n);let T=i-Math.sign(i)*.08*a*(1-Ve(0,.18,e));return new S(T,c,m)}function Ap(s,e){if(e<0){let r=Ve(1.9,3.3,Math.abs(s.x)),o=Math.max(0,Math.sin(s.x*23+s.y*12)*Math.sin(s.y*29-s.x*5)-.65)*(1-Ve(-.6,.1,s.y));return new Ue("#f0f2e9").lerp(new Ue("#78949b"),r*.6+o*.7)}let t=Math.abs(s.x),n=Math.exp(-Math.pow((t-.79)/.43,4)-Math.pow((s.y-.66+t*.15)/.32,4)),i=Math.exp(-Math.pow(s.x/.28,2));return new Ue("#789aa2").lerp(new Ue("#e9efe5"),n*.9).multiplyScalar(1-i*.12)}function Bv(s,e,t=1){let{front:n,back:i}=wp(s);return Xo(s/(cl/2),xt.clamp((n-e)/(n-i),0,1),t)}function ol(s,e,t,{reverse:n=!1,color:i=null}={}){let r=[],o=[],a=[],c=[];for(let h=0;h<=e;h++)for(let u=0;u<=t;u++){let d=s(h/e,u/t);if(r.push(d.x,d.y,d.z),a.push(h/e,u/t),i){let f=i(d,h/e,u/t);c.push(f.r,f.g,f.b)}}for(let h=0;h<e;h++)for(let u=0;u<t;u++){let d=h*(t+1)+u,f=d+1,m=d+t+1,_=m+1;o.push(...n?[d,f,m,f,_,m]:[d,m,f,f,m,_])}let l=new pt;return l.setAttribute("position",new Je(r,3)),l.setAttribute("uv",new Je(a,2)),l.setIndex(o),i&&l.setAttribute("color",new Je(c,3)),l.computeVertexNormals(),l}function Rp(s,e){let t=[],n=[],i=[],r=[];for(let l=0;l<2;l++){let h=l?-1:1,u=l*(s+1)*(e+1);for(let d=0;d<=e;d++)for(let f=0;f<=s;f++){let m=Xo(f/s*2-1,d/e,h),_=Ap(m,h);t.push(...m.toArray()),n.push(f/s,d/e),r.push(_.r,_.g,_.b)}for(let d=0;d<e;d++)for(let f=0;f<s;f++){let m=u+d*(s+1)+f,_=m+1,g=m+s+1,p=g+1;i.push(...l?[m,_,g,_,p,g]:[m,g,_,_,g,p])}}let o=new pt;o.setAttribute("position",new Je(t,3)),o.setAttribute("uv",new Je(n,2)),o.setAttribute("color",new Je(r,3)),o.setIndex(i),o.computeVertexNormals(),o.addGroup(0,s*e*6,0),o.addGroup(s*e*6,s*e*6,1);let a=o.attributes.normal,c=(s+1)*(e+1);for(let l=0;l<=s;l++)if(Math.abs((l/s*2-1)*cl/2)>=.66){let h=new S().fromBufferAttribute(a,l).add(new S().fromBufferAttribute(a,l+c)).normalize();a.setXYZ(l,h.x,h.y,h.z),a.setXYZ(l+c,h.x,h.y,h.z)}return o}var al=[[-1.67,.055,.05],[-1.4,.2,.12],[-.9,.42,.24],[-.25,.61,.32],[.4,.7,.33],[.83,.74,.28],[1.225,.66,.17]];function zv(s){let e=0;for(;e<al.length-2&&s>al[e+1][0];)e++;let t=al[e],n=al[e+1],i=Ve(t[0],n[0],s);return{width:Sr(t[1],n[1],i),height:Sr(t[2],n[2],i)}}function Tp(s){let e=s*Math.PI*2,t=.66*Ep(Math.cos(e),.82);return new S(t,1.225-.18*Math.pow(t/.66,2),.03+.17*Ep(Math.sin(e),.86)*(Math.sin(e)<0?.71:1))}function Wo(s,e,t=40,n=7){return new Vn(new qt(s),t,e,n,!1)}function Cp({mobile:s=!1}={}){let e=[],t=(i,r,o)=>e.push({name:i,geometry:r,material:o}),n=Array.from({length:65},(i,r)=>Tp(r/64));t("manta-soft-mouth-rim",Wo(n,.015,s?64:96),"rim"),t("manta-recessed-mouth",ol((i,r)=>{let o=Tp(r),a=1-i*.62;return new S(o.x*a,o.y-i*.61,(o.z-.03)*a+.03)},s?16:28,s?40:64),"interior");for(let i of[-1,1])for(let r=0;r<4;r++){let o=Array.from({length:13},(a,c)=>{let l=c/12;return new S(i*(.47-r*.055)*Math.sin(l*Math.PI),.95-r*.08,-.065+l*.17)});t("manta-filter-fold",Wo(o,.006,18,5),"fold")}for(let i of[-1,1]){let r=new ms(1,s?16:28,s?12:20);r.scale(.064,.045,.029),r.rotateY(i*(Math.PI/2-.18)),r.translate(i*.708,.84,.12),t("manta-inset-eye-"+i,r,"eye");let o=Array.from({length:25},(c,l)=>{let h=l/24*Math.PI*2;return new S(i*(.71+.011*Math.cos(h)),.84+.058*Math.cos(h),.12+.075*Math.sin(h))});t("manta-eye-fold-"+i,Wo(o,.009,32),"back");let a=Array.from({length:17},(c,l)=>new S(i*(.665+.012*Math.sin(l/16*Math.PI)),.66-l/16*.12,.155+.018*Math.sin(l/16*Math.PI)));t("manta-spiracle-"+i,Wo(a,.009,20,5),"eye");for(let c=0;c<5;c++){let l=.44-c*.23,h=(d,f)=>{let m=i*(.16+d*(.39-c*.025)),_=l-d*.09+(f-.5)*.03*Math.sin(d*Math.PI),g=Bv(m,_,-1).z-.006;return new S(m,_,g)};t("manta-ventral-gill-"+i+"-"+c,ol(h,24,4,{reverse:i>0}),"gill");let u=Array.from({length:21},(d,f)=>h(f/20,1));t("manta-gill-lip-"+i+"-"+c,Wo(u,.006,24,5),"belly")}t("manta-pelvic-fin-"+i,ol((c,l)=>{let h=Math.sin(c*Math.PI)*.105;return new S(i*(.13+c*.08+(l-.5)*h*2),-1.29-c*.51,-.035+Math.sin(l*Math.PI)*.024)},24,12,{reverse:i<0,color:c=>Ap(c,-1)}),"belly")}for(let i of[-1,1])t("manta-dorsal-fin-"+i,ol((r,o)=>{let a=Math.sin(Math.PI*r)*.36;return new S(i*Math.sin(o*Math.PI)*.025*Math.sin(r*Math.PI),-.79-r*.6-o*.11,.18+a*o)},28,12,{reverse:i<0}),"back");return e}function Ip(s){let e=new Map;for(let t of s){let n=t.geometry;n.getAttribute("color")||n.setAttribute("color",new Je(new Float32Array(n.getAttribute("position").count*3).fill(1),3)),e.has(t.material)||e.set(t.material,[]),e.get(t.material).push(t)}return[...e].map(([t,n])=>{let i=tl(n.map(r=>r.geometry));i.userData.parts=n.map(r=>r.name);for(let r of n)r.geometry.dispose();return{name:"manta-detail-"+t,material:t,geometry:i}})}var br=s=>Math.max(0,Math.min(1,s)),Er=(s,e,t)=>{let n=br((t-s)/(e-s));return n*n*(3-2*n)},ll=class{constructor(e){this.introSeconds=e,this.active=!1,this.progress=0,this.elapsed=0}update(e,t,n=!1){return t&&e!==null&&e>=this.introSeconds+.1&&(this.active=!0,this.elapsed=Math.max(this.elapsed,e-this.introSeconds-.1),this.progress=br(this.elapsed/3)),this.active&&n&&(this.elapsed=Math.max(this.elapsed,3+2.4),this.progress=1),this.snapshot()}snapshot(){return{active:this.active,progress:this.progress,dark:this.active?Er(0,1.2,this.elapsed):0,returning:this.active?br((this.elapsed-3)/2.4):0,swallowed:this.active?Er(.27,.63,this.progress):0}}};function Pp(s,e,t,n){let i=br((s-e-.12)/.58),r=n<=1?0:t/(n-1)*.78;return Er(r,r+.22,i)}function kv(s,e=2048,t=512){let n=s.actualBoundingBoxLeft,i=s.actualBoundingBoxRight,r=s.actualBoundingBoxAscent,o=s.actualBoundingBoxDescent,a=Math.min(e*.9/(n+i),t*.84/(r+o));return{scale:a,x:e/2-(i-n)*a/2,y:t/2+(r-o)*a/2}}function Lp(s,e=()=>{}){let t=document.createElement("canvas");t.width=2048,t.height=512;let n=t.getContext("2d");function i(){n.resetTransform(),n.clearRect(0,0,t.width,t.height),n.font="800 430px Manrope, Arial",n.letterSpacing="-34px",n.textAlign="left",n.textBaseline="alphabetic";let o=n.measureText("OKARAR"),{scale:a,x:c,y:l}=kv(o);n.setTransform(a,0,0,a,c,l),n.fillStyle="#ffffff",n.fillText("OKARAR",0,0);let h=`url("${t.toDataURL()}")`;s.style.maskImage=h,s.style.webkitMaskImage=h,s.classList.add("wordmark-ready"),e()}i();let r=document.fonts.ready.then(i);return{canvas:t,ready:r}}var Dp=.34,Lu=-20,Np=-7,Up=({active:s,progress:e,returning:t=0})=>s&&e>=1&&t>=Dp;function Fp(s,e=0){let t=Ve(0,.34,s),n=Ve(.3,.69,s),i=Ve(.27,.59,s),r=Ve(.8,1,s),o=Ve(.015,.22,s)*(1-Ve(.72,.91,s));return{approach:t,surge:n,capture:i,exit:r,jaw:.13+(1-.13)*o,engulf:o,veil:Ve(.59,.69,s)*(1-Ve(.04,Dp,e))}}var hl=[.06,Math.PI+.42,-.17],Op=.72,Bp=s=>Ve(0,.2,s),zp=s=>Ve(.24,.4,s);var kp=new ze().setFromEuler(new bt(-1.13,0,0));function Hp(s,{fold:e,flow:t,pulse:n,rotation:i}){let r=Math.max(Math.abs(s.min.x),Math.abs(s.max.x)),o=(Math.pow(r,1.65)*(.11+t*.15+n*.09)+.02)*(1-e*.96),a=s.clone();a.min.x*=1-e*.52,a.max.x*=1-e*.52,a.min.z-=o,a.max.z+=o+r*e*.46;let c=[];for(let l of[a.min.x,a.max.x])for(let h of[a.min.y,a.max.y])for(let u of[a.min.z,a.max.z])c.push(new S(l,h,u).applyQuaternion(i));return c}function Vp(s,{aperture:e,rotation:t,scale:n},i,r=1,o=0){let a=new S(-e.normal.y,e.normal.x,0).applyQuaternion(t),c=new S(0,0,1).applyQuaternion(t),l=e.normal.clone().applyQuaternion(t),h=new Ft().setFromPoints(s.map(p=>new S(p.dot(c),p.dot(a),p.dot(l)))),u=h.getCenter(new S),d=e.width*n*.36,f=e.height*n*.3,m=Math.hypot((h.max.x-h.min.x)/2/d,(h.max.y-h.min.y)/2/f),_=Math.max(o,Math.min(i,1/Math.max(m,1e-6))*r),g=c.multiplyScalar(u.x).addScaledVector(a,u.y).multiplyScalar(-_);if(e.upper&&e.lower){let p=e.upper.clone().lerp(e.lower,.4).sub(e.center).multiplyScalar(n).applyQuaternion(t);p.addScaledVector(l,-p.dot(l)),g.add(p)}return{scale:_,offset:g,forward:l,near:h.min.z}}var Gp=({active:s,progress:e=0,veil:t=0})=>!s||e<1&&t<1;function Wp(s,e,t,n,i,r=0){let o=Math.max(n*i*1.5,r+n*i*.25);return s.setFromNormalAndCoplanarPoint(t,e.clone().addScaledVector(t,-o)),o}var Hv=s=>Ve(.4,.78,s),ul=class{constructor(e=null){this.orientation=null,this.anchor=null,this.scale=null,this.bounds=e}mouthScale(e,t,n,i,r){if(!this.bounds)return e;let o=Hp(this.bounds,{fold:1,flow:1,pulse:1,rotation:kp}),a=Vp(o,{aperture:i,rotation:r,scale:1},100),c=(this.scale??t)*.94/a.scale*1.04,l=Ve(.18,.38,n)*(1-Ve(.72,.8,n));return e+(Math.max(e,c)-e)*l}apply(e,t,n,i=null){let r=Ve(.16,.38,n);if(r>0&&!this.orientation&&(this.orientation=t.quaternion.clone(),this.anchor=e.position.clone(),this.scale=t.scale.x),this.orientation&&t.quaternion.slerpQuaternions(this.orientation,kp,r),this.bounds&&i&&n>.16){let o=Ve(.16,.31,n),a=Hv(n),c=Hp(this.bounds,{fold:i.fold,flow:i.flow,pulse:i.pulse,rotation:t.quaternion}),l=this.scale*(1-r*.06-a*.02),h=t.scale.x+(l-t.scale.x)*o,u=Vp(c,i,h,1,h);t.scale.setScalar(h),e.position.lerp(this.anchor,Ve(.16,.36,n));let d=i.center.clone().add(u.offset).sub(e.position);d.addScaledVector(u.forward,-d.dot(u.forward)),e.position.addScaledVector(d,Ve(.2,.31,n)),e.position.addScaledVector(u.forward,-i.aperture.width*3.4*.55*a);let f=i.center.clone().sub(e.position).dot(u.forward),m=f-u.near*t.scale.x,_=Math.max(0,.18+m)*(1-Ve(.38,.44,n));return{depth:f-_,deepest:m-_,retreat:_,recession:a}}return null}};function Xp(s,e,t,n){let i=n.position.clone(),r=n.visible,o=[];t.updateWorldMatrix(!0,!1);let a=t.localToWorld(new S(0,0,30));n.parent&&n.parent.worldToLocal(a),n.position.copy(a),n.visible=!0,n.traverse(c=>{c.isMesh&&(o.push([c,c.frustumCulled]),c.frustumCulled=!1)});try{s.render(e,t)}finally{n.position.copy(i),n.visible=r;for(let[c,l]of o)c.frustumCulled=l;n.updateWorldMatrix(!0,!0)}}var Kp=new S,Vv=new He,qp=new $n,Yp=new S(0,1,0),Gv=new S(1,0,0),Wv=s=>new ze().setFromRotationMatrix(new He().lookAt(s,Kp,Yp)).multiply(new ze().setFromAxisAngle(Yp,-Math.PI/2));function Dn(s,e,t,n,i){s.updateMatrixWorld(),qp.setFromProjectionMatrix(Vv.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse));let r=[];for(let o of[e.min.x,e.max.x])for(let a of[e.min.y,e.max.y])for(let c of[e.min.z,e.max.z])r.push(new S(o,a,c).multiplyScalar(i).applyQuaternion(n).add(t));return qp.planes.some(o=>r.every(a=>o.distanceToPoint(a)<-.05))}function Xv({camera:s,bounds:e,small:t}){let i=Math.tan(s.fov*Math.PI/360)*(s.position.z- -6.5),r=i*s.aspect,o=t?Math.min(.78*.82,r*2*.75/6.49):1.28*.82,a=r+e.getSize(new S).length()*o+1,c;for(let l=0;l<40;l++){let h=i*.38,u=new ei(new S(-a,h+.1,-6.5+.3),new S(-a*.35,h+.25,-6.5-.5),new S(a*.35,h-.25,-6.5-.9),new S(a,h-.35,-6.5-1)),d=r*2/.9;c={curve:u,scale:o,speed:d,duration:u.getLength()/d,elapsed:0};let f=dl(c,0),m=dl(c,1);if(Dn(s,e,f.v,f.q,o)&&Dn(s,e,m.v,m.q,o))return c;a+=2}return null}function dl(s,e){let t=Math.max(0,Math.min(1,e)),n=s.curve.getTangentAt(t);return{v:s.curve.getPointAt(t),q:Wv(n).multiply(new ze().setFromAxisAngle(Gv,-Math.sin(t*Math.PI)*.06)),s:s.scale}}function Zp({track:s,chapter:e,group:t,camera:n,bounds:i,idle:r,dt:o,small:a=!1}){if(s?.chapter!==2||e!==3)return!1;if(o<=0)return!0;if(!s.parked){if(!s.musicGlide){if(!Dn(n,i,t.position,t.quaternion,t.scale.x)){let u=new S(1,0,0).applyQuaternion(t.quaternion);return t.position.addScaledVector(u,6*Math.min(o,.1)),!0}if(s.musicGlide=Xv({camera:n,bounds:i,small:a}),!s.musicGlide)return!0;let h=dl(s.musicGlide,0);return t.position.copy(h.v),t.quaternion.copy(h.q),t.scale.setScalar(h.s),!0}let l=s.musicGlide;if(l.elapsed<l.duration){l.elapsed=Math.min(l.duration,l.elapsed+Math.min(o,.1));let h=dl(l,l.elapsed/l.duration);return t.position.copy(h.v),t.quaternion.copy(h.q),t.scale.setScalar(h.s),!0}if(!Dn(n,i,t.position,t.quaternion,t.scale.x))return t.position.addScaledVector(new S(1,0,0).applyQuaternion(t.quaternion),l.speed*Math.min(o,.1)),!0;s.parked=!0}let c=el(n,i,Kp,r.v,r.q,r.s);return t.position.copy(r.v).add(c),t.quaternion.copy(r.q),t.scale.setScalar(r.s),!0}var Uu=new S(0,1,0),qv=new ze().setFromAxisAngle(Uu,-Math.PI/2),Tr=s=>new S(1,0,0).applyQuaternion(s),Nu=(s,e=0)=>new ze().setFromRotationMatrix(new He().lookAt(s,new S,Uu)).multiply(qv).multiply(new ze().setFromAxisAngle(new S(1,0,0),e)),fl=s=>({v:s.v.clone(),q:s.q.clone(),s:s.s});function Yo({small:s,halfWidth:e}){let t=s?Math.min(.7020000000000001,e*2*1.125*.86/6.49):1.1520000000000001;return{v:new S(s?.51*t:-e-1.8,-1.1,-2),q:new ze().setFromEuler(new bt(-.02,-.42,.12)),s:t}}function Jp({small:s,halfWidth:e}){if(!s)return new S(-e*.3,-.9,2.8);let t=Yo({small:s,halfWidth:e});return t.v.clone().addScaledVector(Tr(t.q),-3)}function $p(s,e,t){return s+(Yo(e).s-s)*Ve(.65,1,t)}function Fu({chapter:s,small:e,halfWidth:t,time:n,reduced:i=!1}){let r=e?.78:1.28,o=t*(e?.87:.73),a=[{v:new S(e?0:.2,e?.6:.12,-.6),q:new ze().setFromEuler(new bt(.015,-Math.PI/2+.08,-.025)),s:r},{v:new S(-t-9,2,-5),q:Nu(new S(-1,.1,-.3)),s:r},{v:new S(o,-.1,-1.8),q:new ze().setFromEuler(new bt(.06,3.5,-.08)),s:r*.89},{v:new S(t+10,3,-9),q:Nu(new S(1,.2,-.7)),s:r},Yo({small:e,halfWidth:t}),{v:new S(o,-1.4,-2.2),q:new ze().setFromEuler(new bt(.02,3.65,.06)),s:r*.78}][s];return i||(a.v.y+=Math.sin(n*.34+.8)*.11,a.v.z+=Math.sin(n*.23)*.18,a.q.multiply(new ze().setFromEuler(new bt(Math.sin(n*.31)*.025,Math.sin(n*.23)*.045,Math.sin(n*.28+.5)*.035)))),a}function jp(s,e){let t=s.map(n=>n.clone());for(let n=t.length-1;n>0;n--)for(let i=0;i<n;i++)t[i].lerp(t[i+1],e);return t[0]}function Du(s,e){return jp(s.slice(1).map((t,n)=>t.clone().sub(s[n]).multiplyScalar(s.length-1)),e)}var pl=class{constructor(){this.started=!1,this.complete=!1,this.route=null,this.pose=null,this.previous=0}plan({start:e,idle:t,chapter:n,halfWidth:i,small:r,duration:o,velocity:a=new S,initial:c=!1}){let l=e.v.distanceTo(t.v),h=Math.max(3,Math.min(9,l*.4)),u=c?new S(n===1?-1:n===4?-.2:.5,0,-1).normalize():Tr(e.q),d=[e.v.clone(),e.v.clone().addScaledVector(a,o/5),e.v.clone().addScaledVector(u,h),t.v.clone().addScaledVector(Tr(t.q),-h),t.v.clone(),t.v.clone()];if(!c){let g=new S().crossVectors(u,Uu).normalize();g.z>0&&g.negate();let p=e.v.clone().addScaledVector(u,h),T=t.v.clone().addScaledVector(Tr(t.q),-h);d=[e.v.clone(),e.v.clone().addScaledVector(a,o/7),p,p.clone().addScaledVector(g,h*1.4),T.clone().addScaledVector(g,h*1.4),T,t.v.clone(),t.v.clone()]}let f=c&&n===0?new qt([e.v.clone(),new S(-i-2,1.1,-15),new S(-.8,.5,-9),new S(r?0:.2,r?.6:.12,-.6)]):null,m=null,_=0;if(!c){m=[];let g=e.q.clone();for(let T=0;T<=128;T++){let y=Du(d,Math.max(1e-4,Math.min(.9999,T/128))).normalize();g.premultiply(new ze().setFromUnitVectors(Tr(g),y)).normalize(),m.push(g.clone())}let p=m[128].clone().invert().multiply(t.q);_=2*Math.atan2(p.x,p.w),_>Math.PI&&(_-=2*Math.PI),_<-Math.PI&&(_+=2*Math.PI)}this.route={start:fl(e),idle:fl(t),chapter:n,halfWidth:i,small:r,duration:o,points:d,home:f,frames:m,twist:_,initial:c,elapsed:0}}sample(e,t){let n=this.route,i=Ve(0,1,e),r=Ve(.6,1,n.home?i:e),o,a,c;if(n.home){o=n.home.getPoint(i),a=n.home.getTangent(i);let u=Math.max(0,e-1e-4),d=Math.min(1,e+1e-4);c=n.home.getPoint(Ve(0,1,d)).sub(n.home.getPoint(Ve(0,1,u))).multiplyScalar(1/((d-u)*n.duration)),o.addScaledVector(t.v.clone().sub(n.home.getPoint(1)),r)}else o=jp(n.points,e),c=Du(n.points,e).multiplyScalar(1/n.duration),a=Du(n.points,Math.max(1e-4,Math.min(1-1e-4,e))).normalize(),o.addScaledVector(t.v.clone().sub(n.idle.v),r);let l=-Math.sin(i*Math.PI)*.13,h;if(n.frames){let u=e*128,d=Math.min(127,Math.floor(u));h=n.frames[d].clone().slerp(n.frames[d+1],u-d),h.premultiply(new ze().setFromUnitVectors(Tr(h),a)),h.multiply(new ze().setFromAxisAngle(new S(1,0,0),n.twist*r)),h.multiply(new ze().slerp(n.idle.q.clone().invert().multiply(t.q),r))}else h=Nu(a,l).slerp(t.q,r);return h.copy(n.start.q.clone().slerp(h,Bp(e))),{v:o,q:h,s:n.start.s+(t.s-n.start.s)*i,velocity:c}}update({returning:e,chapter:t,halfWidth:n,small:i,anchorY:r,idle:o,dt:a,instant:c=!1}){if(this.complete)return null;let l=0;if(c||!this.started&&e>=1)return this.started=this.complete=!0,this.pose={...fl(o),velocity:new S},this.pose;if(this.started){let d=a<=0?0:this.previous>=1?a:Math.max(0,e-this.previous)*2.4;if(d===0&&this.pose)return this.pose;if(l=d,t!==this.route.chapter||i!==this.route.small||Math.abs(n-this.route.halfWidth)>.05){let m=this.pose,_=Math.max(2.4,m.v.distanceTo(o.v)/8);this.plan({start:m,idle:o,chapter:t,halfWidth:n,small:i,duration:_,velocity:m.velocity})}this.route.elapsed+=d}else{this.started=!0;let d={v:new S(-n-9,r+.39,-5),q:new ze().setFromEuler(new bt(...hl)),s:i?1.08:1.38};this.plan({start:d,idle:o,chapter:t,halfWidth:n,small:i,duration:2.4,initial:!0}),this.route.elapsed=e*2.4}this.previous=e;let h=this.route.elapsed>=this.route.duration-1e-9?1:this.route.elapsed/this.route.duration,u=h>=1?{...fl(o),velocity:new S}:this.sample(h,o);return!this.route.initial&&this.pose&&(u.q=this.pose.q.clone().rotateTowards(u.q,l*2.8)),this.pose=u,h>=1&&u.q.angleTo(o.q)<1e-5&&(this.complete=!0),this.pose}};var Qp=[{x:0,y:.35,z:8.8,rx:.3,ry:-.25,rz:-.35,s:1},{x:2,y:-.1,z:7.5,rx:.6,ry:-.6,rz:.65,s:1.12},{x:2.3,y:.05,z:6.3,rx:-.28,ry:.3,rz:-.75,s:1},{x:-2.2,y:.1,z:8.6,rx:1,ry:-.4,rz:.3,s:1.3},{x:1,y:.15,z:10.7,rx:.28,ry:Math.PI-.28,rz:2.72,s:.92},{x:.4,y:-.25,z:11.5,rx:-.3,ry:1.14,rz:2.4,s:1.02}],Ou=s=>new ze().setFromEuler(new bt(s.rx,s.ry,s.rz));function em(s,{small:e=!1,entered:t=1,aspect:n=390/844}={}){let i=xt.clamp(s,0,5),r=Math.min(4,Math.floor(i)),o=i-r,a=o*o*(3-2*o),c=Qp[r],l=Qp[r+1],h={};for(let d of Object.keys(c))h[d]=xt.lerp(c[d],l[d],a);if(h.q=Ou(c).slerp(Ou(l),a),e){let d=[.55,.1,-.2,.2,.1,-.2];h.x*=.2,h.y=xt.lerp(d[r],d[r+1],a),h.s*=.7,h.z+=5.5;let f=xt.smoothstep(i,3,4)*t;h.x*=1-f;let m=2*Math.tan(35*Math.PI/360)*h.z*n*.9/6.7;h.s=xt.lerp(h.s,Math.min(h.s,m),f)}let u=1-t;return h.x=xt.lerp(h.x,e?.9:2.55,u),h.y=xt.lerp(h.y,e?2.6:.4,u),h.z=xt.lerp(h.z,e?14.8:10,u),h.q.slerp(Ou({...h,ry:-.24,rz:-.58}),u),h}var ml=class{constructor(){this.divePlayed=!1,this.armed=!1,this.quietTime=0}update(e,{position:t,target:n=t,allowed:i=!0,delta:r=0}){return!i||(t<3.3&&(this.armed=!0),this.quietTime=e.active?0:this.quietTime+Math.max(0,r),!this.armed||this.quietTime<2.4||this.divePlayed||e.active||t<3.65||t>4.3||n<3.7||n>4.5)||!e.start(!0,"dive")?!1:(this.divePlayed=!0,!0)}};function Bu(s,{phase:e=0,flow:t=.6,capture:n=0}={}){let i=Math.max(0,(s-.16)/.84),r=i*i,o=(.65+t*.35)*(1-n*.75),a=r*(.1*Math.sin(s*2)+.14*o*Math.sin(e-i*2.3)),c=-1.45-s*2.87,l=.03+r*(.025-.05*o*Math.cos(e-i*1.6));return new S(a*(1-n*.52),c,l+ko(a,c,e,t,0,n))}function tm({mobile:s=!1}={}){let e=s?56:90,t=s?6:8,n=t+1,i=new pt,r=[],o=[],a=new Float32Array((e+1)*n*3),c=a.slice();for(let u=0;u<=e;u++)for(let d=0;d<=t;d++)if(o.push(u/e,d/t),u<e&&d<t){let f=u*n+d,m=f+1,_=f+n,g=_+1;r.push(f,m,_,m,g,_)}i.setAttribute("position",new Je(a,3)),i.setAttribute("normal",new Je(c,3)),i.setAttribute("uv",new Je(o,2)),i.setIndex(r);let l=new S(0,0,1);function h(u={}){let d=i.attributes.position,f=i.attributes.normal;for(let m=0;m<=e;m++){let _=m/e,g=Bu(_,u),p=Math.max(0,_-.001),T=Math.min(1,_+.001),y=Bu(T,u).sub(Bu(p,u)).divideScalar(T-p),x=y.length(),R=y.normalize(),w=new S().crossVectors(l,R).normalize(),P=new S().crossVectors(R,w),I=.045*Math.pow(1-_,1.3)+.0015,b=-.045*1.3*Math.pow(1-_,.3)/x;for(let M=0;M<=t;M++){let L=M/t*Math.PI*2,H=w.clone().multiplyScalar(Math.cos(L)).addScaledVector(P,Math.sin(L)*.72),Y=w.clone().multiplyScalar(Math.cos(L)).addScaledVector(P,Math.sin(L)/.72).addScaledVector(R,-b).normalize(),$=g.clone().addScaledVector(H,I),Z=m*n+M;d.setXYZ(Z,$.x,$.y,$.z),f.setXYZ(Z,Y.x,Y.y,Y.z)}}d.needsUpdate=f.needsUpdate=!0}return h(),i.computeBoundingSphere(),i.boundingSphere.radius+=.3,{geometry:i,update:h}}var im=new S(1,0,0),sm=new S(0,1,0),Yv=new ze().setFromAxisAngle(sm,-Math.PI/2),Ko=s=>im.clone().applyQuaternion(s),nm=s=>new ze().setFromRotationMatrix(new He().lookAt(s,new S,sm)).multiply(Yv),gl=class{constructor(){this.active=!1,this.stage="idle",this.chapter=null,this.last=null,this.speed=0,this.relocations=0}observe(e,t){this.last&&t>0&&(this.speed=Math.min(40,e.position.distanceTo(this.last)/t)),this.last=e.position.clone()}begin(e){this.active=!0,this.stage="exit",this.route=null,this.exitSpeed=Math.max(2,Math.min(32,this.speed));let t=Ko(e.quaternion);this.exitDirection=t.z<-.35&&Math.abs(t.x)<.65?new S(Math.abs(t.x)>.08?Math.sign(t.x):e.position.x>=0?1:-1,t.y*.3,-.25).normalize():t}prepare({group:e,idle:t,chapter:n,camera:i,bounds:r,small:o,halfWidth:a}){if(Dn(i,r,t.v,t.q,t.s)){e.position.copy(t.v),e.quaternion.copy(t.q),e.scale.setScalar(t.s),this.active=!1,this.stage="idle",this.chapter=n,this.relocations++,this.last=e.position.clone();return}let c=Ko(t.q),l=Math.abs(c.x)>.25?-Math.sign(c.x):-1,h=Math.max(2.8,t.s*3.8),u=t.v.clone().addScaledVector(c,-h),d=new S(l*(a+9*t.s+4),t.v.y+.65,Math.min(-7,t.v.z-5)),f;for(let x=0;x<40&&(f=nm(u.clone().sub(d).normalize()),!Dn(i,r,d,f,t.s));x++)d.x+=l*2;if(!Dn(i,r,d,f,t.s))return;let m=d.clone().lerp(u,.46),_=new ei(d,m,u,t.v.clone()),g=[],p=f.clone();for(let x=0;x<=128;x++){let R=_.getTangentAt(x/128).normalize();p.premultiply(new ze().setFromUnitVectors(Ko(p),R)).normalize(),g.push(p.clone())}let T=g[128].clone().invert().multiply(t.q),y=2*Math.atan2(T.x,T.w);y>Math.PI&&(y-=2*Math.PI),y<-Math.PI&&(y+=2*Math.PI),this.route={curve:_,frames:g,twist:y,elapsed:0,duration:Math.max(2.4,_.getLength()/6.5),idle:{v:t.v.clone(),q:t.q.clone(),s:t.s},small:o,halfWidth:a},e.position.copy(d),e.quaternion.copy(f),e.scale.setScalar(t.s),this.chapter=n,this.stage="entry",this.relocations++,this.last=e.position.clone()}update({group:e,idle:t,chapter:n,camera:i,bounds:r,small:o,halfWidth:a,dt:c,instant:l=!1}){if(l){e.position.copy(t.v),e.quaternion.copy(t.q),e.scale.setScalar(t.s),this.active=!1,this.stage="idle",this.last=e.position.clone();return}if(c<=0)return;let h=Math.min(.05,c);if(this.active||this.begin(e),this.stage==="entry"&&(n!==this.chapter||o!==this.route.small||Math.abs(a-this.route.halfWidth)>.08)&&this.begin(e),this.stage==="exit")if(Dn(i,r,e.position,e.quaternion,e.scale.x))this.prepare({group:e,idle:t,chapter:n,camera:i,bounds:r,small:o,halfWidth:a});else{let u=nm(this.exitDirection),d=e.quaternion.clone();e.quaternion.rotateTowards(u,h*.9),this.exitSpeed+=Math.max(-h*8,Math.min(h*8,7-this.exitSpeed));let f=Ko(d.slerp(e.quaternion,.5));e.position.addScaledVector(f,this.exitSpeed*h)}else{let u=this.route;u.elapsed=Math.min(u.duration,u.elapsed+h);let d=u.elapsed/u.duration,f=Ve(0,1,d),m=Ve(.6,1,d),_=Math.min(127,Math.floor(f*128)),g=u.frames[_].clone().slerp(u.frames[_+1],f*128-_);g.premultiply(new ze().setFromUnitVectors(Ko(g),u.curve.getTangentAt(f).normalize())),g.multiply(new ze().setFromAxisAngle(im,u.twist*m)),g.multiply(new ze().slerp(u.idle.q.clone().invert().multiply(t.q),m)),e.position.copy(u.curve.getPointAt(f)).addScaledVector(t.v.clone().sub(u.idle.v),m),e.quaternion.copy(g),e.scale.setScalar(u.idle.s+(t.s-u.idle.s)*m),d>=1&&(e.position.copy(t.v),e.quaternion.copy(t.q),e.scale.setScalar(t.s),this.active=!1,this.stage="idle")}}};var _l=class{constructor(){this.value=0,this.velocity=0}update(e,t,n=!1){if(n||t<=0)return this.value;let i=Math.max(0,Math.min(1,Number.isFinite(e)?e:0)),r=Math.min(t,.1),o=1/.09,a=this.value-i,c=this.velocity+o*a,l=Math.exp(-o*r);return this.value=i+(a+c*r)*l,this.velocity=(this.velocity-o*c*r)*l,this.value}};var wr=xt.clamp,St=xt.lerp,Nn={uPhase:{value:0},uFlow:{value:.6},uPulse:{value:0},uCapture:{value:0}},jv=`
uniform float uPhase; uniform float uFlow; uniform float uPulse; uniform float uCapture;
float flap(vec3 p) {
  float a = abs(p.x);
  float lag = (3.35 - a) * .55 + (p.y - .11) * .52;
  float swim = -cos(uPhase + lag) * pow(a,1.65) * (.11 + uFlow*.15 + uPulse*.09)
    + sin(p.y * 4. + uPhase * 2.) * a * (1. - a / 3.35) * .018;
  return swim * smoothstep(.4,1.2,a) * (1. - uCapture * .96) + a * uCapture * .46;
}`;function Zi(s){return s.onBeforeCompile=e=>{Object.assign(e.uniforms,Nn),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
`+jv),e.vertexShader=e.vertexShader.replace("#include <beginnormal_vertex>",`
      #include <beginnormal_vertex>
      float dx = (flap(position + vec3(.01,0.,0.)) - flap(position - vec3(.01,0.,0.))) / .02;
      float dy = (flap(position + vec3(0.,.01,0.)) - flap(position - vec3(0.,.01,0.))) / .02;
      objectNormal = normalize(vec3(objectNormal.x - dx*objectNormal.z, objectNormal.y - dy*objectNormal.z, objectNormal.z));
      objectNormal.x /= 1. - uCapture * .52;
    `),e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.z += flap(position); transformed.x *= 1. - uCapture * .52;`),s.vertexColors&&(e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vMantaSurface;`),e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vMantaSurface=position;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vMantaSurface;`),e.fragmentShader=e.fragmentShader.replace("#include <transmission_fragment>",et.transmission_fragment.replace("material.transmission = transmission;",`float torso=(1.-smoothstep(.42,.95,abs(vMantaSurface.x)))*smoothstep(-1.65,-.9,vMantaSurface.y);
        material.transmission=transmission*(1.-torso*.43);`).replace("material.thickness = thickness;","material.thickness=thickness*(1.+torso*1.8);")),e.fragmentShader=e.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        float grain=sin(vMantaSurface.x*137.+sin(vMantaSurface.y*83.))*sin(vMantaSurface.y*119.);
        roughnessFactor+=.009*grain*grain;`))},s.customProgramCacheKey=()=>"okarar-manta-continuous-cephalic-v10",s}function rm(s,{mobile:e,onFallback:t,wordmarkArt:n}){let i;try{i=new Zc({canvas:s,alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch{return t(),null}i.setClearColor(15265514,0),i.toneMapping=rc,i.toneMappingExposure=1.08,i.localClippingEnabled=!0,i.setPixelRatio(Math.min(devicePixelRatio,e?1.25:1.65));let r=new ds,o=new kt(35,1,.1,100),a=new _r(i),c=new zo,l=new Ke(new vi(8,15),new $t({color:new Ue(3.4,1.5,.65),side:Pt}));l.position.set(-6,1,0),l.rotation.y=Math.PI/2,c.add(l);let h=new Ke(new vi(4,12),new $t({color:new Ue(.8,2.3,3.8),side:Pt}));h.position.set(5,2,1),h.rotation.y=-Math.PI/2,c.add(h);let u=a.fromScene(c,.025),d=new zo,f=a.fromScene(d,.025);d.dispose(),r.environment=u.texture,c.dispose(),a.dispose();let m=new Ao(16777215,6918287,1.8);r.add(m);let _=new qi(16772576,3.2);_.position.set(-3,5,6),r.add(_);let g=new qi(11002879,2.4);g.position.set(3,-1,-2),r.add(g);let p=new ao(n.canvas);p.colorSpace=Dt,n.ready.then(()=>{p.needsUpdate=!0});let T=new Mn({depthWrite:!1,uniforms:{uText:{value:p},uWord:{value:0},uAspect:{value:1},uTint:{value:new Ue("#d4e3e3")},uDark:{value:0},uAlpha:{value:1}},vertexShader:"varying vec2 vUv; varying vec4 vClip; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);vClip=gl_Position;}",fragmentShader:`uniform sampler2D uText;uniform float uWord;uniform float uAspect;uniform vec3 uTint;uniform float uDark;uniform float uAlpha;varying vec2 vUv;varying vec4 vClip;
    void main(){vec3 col=mix(vec3(.78,.84,.83),vec3(.925,.932,.90),vUv.y);float blue=exp(-length((vUv-vec2(.8,.5))*vec2(1.2,1.))*3.);col=mix(col,uTint,blue*.25);float warm=exp(-length((vUv-vec2(.1,.25))*vec2(2.,2.))*3.);col=mix(col,vec3(.91,.79,.69),warm*.17);float halo=exp(-length((vUv-vec2(.58,.52))*vec2(1.15,1.))*4.);vec3 night=mix(vec3(.012,.016,.022),vec3(.09,.106,.12),halo*.85);col=mix(col,night,uDark);
    vec2 screenUv=vClip.xy/vClip.w*.5+.5;
    float textWidth=${.94.toFixed(4)};float textHeight=uAspect*textWidth*${(512/2048).toFixed(4)};
    vec2 tuv=(screenUv-vec2(.5))/vec2(textWidth,textHeight)+vec2(.5);
    if(tuv.x>0.&&tuv.x<1.&&tuv.y>0.&&tuv.y<1.)col=mix(col,mix(vec3(.065,.125,.125),vec3(.17,.19,.21),uDark),texture2D(uText,tuv).a*uWord*mix(.88,.42,uDark));gl_FragColor=vec4(col*uAlpha,uAlpha);}`}),y=new Ke(new vi(1,1),T);y.position.z=-12,y.renderOrder=-10,r.add(y);let x=0;y.onBeforeRender=()=>{T.uniforms.uAlpha.value=i.getRenderTarget()?1:1-x},document.querySelector(".wordmark").style.display="none";let R=new Nt;r.add(R);let w=new Nt;R.add(w);let P=Zi(new _t({color:14741997,metalness:0,roughness:.075,transmission:e?.85:.96,thickness:.65,ior:1.38,clearcoat:1,clearcoatRoughness:.04,iridescence:.4,iridescenceIOR:1.32,iridescenceThicknessRange:[200,410],attenuationColor:5149336,attenuationDistance:2.8,envMapIntensity:1.3,side:Pt})),I=Zi(P.clone()),b=Zi(P.clone());I.vertexColors=b.vertexColors=!0,I.color.set("#eef3ef"),I.transmission=.91,I.thickness=.44,I.roughness=.095,b.color.set("#f5f3e8"),b.transmission=.64,b.thickness=.34,b.roughness=.13;let M=new Ke(Rp(e?80:144,e?36:64),[I,b]);M.name="manta-anatomical-disc",w.add(M);let L={back:I,belly:b,rim:Zi(new _t({color:"#a0c6c9",roughness:.12,transmission:.7,thickness:.1,ior:1.37,clearcoat:.7})),interior:Zi(new _t({color:"#183840",roughness:.27,transmission:.12,thickness:.12,side:Pt})),fold:Zi(new _t({color:"#779fa4",roughness:.28,transmission:.35,thickness:.06})),eye:Zi(new _t({color:"#102a32",roughness:.065,metalness:.05,clearcoat:1})),gill:Zi(new _t({color:"#25414a",roughness:.36,side:Kt}))};for(let B of Ip(Cp({mobile:e}))){let k=new Ke(B.geometry,L[B.material]);k.name=B.name,w.add(k)}let H=new xi({color:5344669,transparent:!0,opacity:.045,depthWrite:!1}),Y=new xi({color:16380632,transparent:!0,opacity:.2,depthWrite:!1}),$=[];for(let B of[-1,1])for(let k=1;k<=26;k++){let Te=k/27,De=[];for(let an=0;an<=36;an++){let Yt=an/36,hi=B*(.07*(1-Yt)+Te*Yt),fn=St(.3,.2+Te*.78,Yt),_n=Xo(hi,fn,1);_n.z-=.014,De.push(_n)}let $e=new pt().setFromPoints(De),ht=new jn($e,H);w.add(ht),$.push({line:ht,base:$e.attributes.position.array.slice()})}for(let B of[0,1]){let k=[];for(let $e=0;$e<=180;$e++)k.push(Xo($e/90-1,B,1));let Te=new pt().setFromPoints(k),De=new jn(Te,Y);w.add(De),$.push({line:De,base:Te.attributes.position.array.slice()})}let Z=tm({mobile:e}),z=P.clone();z.onBeforeCompile=()=>{},z.customProgramCacheKey=()=>"okarar-tail-attached";let se=new Ke(Z.geometry,z);se.name="manta-attached-tail",w.add(se);let K=new An(new S(0,0,1),1e4);R.traverse(B=>{if(B.material)for(let k of Array.isArray(B.material)?B.material:[B.material])k.clippingPlanes=[K]});let G=bp({mobile:e});r.add(G.group);let de=null,we=null,We=!1,tt=new Nt;r.add(tt);let lt=[];for(let B=0;B<3;B++){let k=new Ke(new So(3.4+B*.55,.015,8,150),new _t({color:10204596,metalness:.55,roughness:.25,transparent:!0,opacity:.3,depthWrite:!1}));k.rotation.set(.65+B*.45,.45+B*.18,-.2+B*.1),k.position.z=-1.5-B*.4,tt.add(k),lt.push(k)}let rt=new pt,ne=[],N=72,X=()=>(N=N*16807%2147483647,(N-1)/2147483646);for(let B=0;B<(e?55:140);B++)ne.push((X()-.5)*22,(X()-.5)*15,(X()-.5)*12);rt.setAttribute("position",new Je(ne,3));let ie=new yi(rt,new Qn({color:5340039,size:.018,transparent:!0,opacity:.5,sizeAttenuation:!0}));r.add(ie);let re=[],ve=new _t({color:14807276,metalness:.2,roughness:.06,transmission:e?0:.88,thickness:.18,ior:1.45,clearcoat:1});for(let B=0;B<(e?9:20);B++){let k=new Ke(new Mo(.1+X()*.15,0),ve);k.scale.set(.55+X(),1.5+X(),.38);let Te=X()*Math.PI*2,De=3.5+X()*3.3;k.userData={a:Te,r:De,z:(X()-.5)*4,speed:.025+X()*.04,scale:k.scale.clone()},k.rotation.set(X()*3,X()*3,X()*3),r.add(k),re.push(k)}let xe=e,C=.6,ee=.75,W="pearl",Q={pearl:[14741997,5149336,9353141,5344669,"#d4e3e3"],iris:[15655163,9599167,10655941,9069983,"#dfd4e7"],ember:[16771027,11892033,12688252,11106392,"#e7d7c9"]};function te(B){W=B;let k=Q[B];P.color.setHex(k[0]),P.attenuationColor.setHex(k[1]),I.color.setHex(k[0]),b.color.setHex(k[0]),H.color.setHex(k[3]),T.uniforms.uTint.value.set(k[4]),G.setColor(B)}function fe(B){xe=B,i.setPixelRatio(Math.min(devicePixelRatio,B?1:1.65)),P.transmission=B?.78:St(.75,.99,ee),I.transmission=B?.81:.91,b.transmission=B?.6:.64,ve.transmission=B?0:.88,re.forEach((k,Te)=>k.visible=!B||Te<7),G.setLight(B)}function ae(){let B=innerWidth,k=innerHeight;i.setSize(B,k,!1),o.aspect=B/k,o.updateProjectionMatrix(),T.uniforms.uAspect.value=B/k}ae(),s.addEventListener("webglcontextlost",B=>{B.preventDefault(),t()}),s.addEventListener("webglcontextrestored",()=>location.reload());let me=new S,Ye=new ze,Xe=new bt,A=new He,v=new S(0,1,0),O=new S(1,0,0),J=new ze().setFromAxisAngle(v,-Math.PI/2),oe=new ze,j=new bt,Le=new Ft().setFromObject(w).expandByVector(new S(.45,.02,.18)),ge=new ul(Le),Ae=new pl,Se=new gl,ue=new _l,Me=[],Oe=null,Ce=null,he=null,Ze=-1,D=null;function pe(B,k=0){return new ze().setFromRotationMatrix(A.lookAt(B,new S,v)).multiply(J).multiply(new ze().setFromAxisAngle(O,k))}function ye({time:B,phase:k,sharkPhase:Te=k,dt:De=1/60,position:$e,targetPosition:ht=$e,redirecting:an=!1,displayChapter:Yt=0,entered:hi,pointer:fn,pulse:_n,energy:En,reduced:xn,paused:$i=!1,takeover:$o={active:!1,progress:0,dark:0,swallowed:0,returning:0},pass:mt=null,flourish:Un=null,audioPosition:Ni=null}){let Fn=s.hasAttribute("data-rhythm-debug"),Tl=Fn?performance.now():0,wl=En;En=ue.update(En,De,xn||$i);let cn=innerWidth<=800,ln=em($e,{small:cn,entered:hi,aspect:o.aspect}),Ls={...ln},{active:E,progress:U,dark:V,returning:q=0}=$o,F=E&&U<1,le=Fp(U,q);Nn.uCapture.value=F?Ve(.15,.32,U):0,K.constant=1e4,E&&!de&&(de={...ln}),E&&U<1&&Object.assign(ln,de),E&&(ln.z=St(ln.z,cn?16:11.8,Er(.72,1,U))),T.uniforms.uDark.value=V,r.environment=E&&U>=Op?f.texture:u.texture,m.intensity=St(1.8,.7,V),_.intensity=St(3.2,4.6,V),g.intensity=St(2.4,4.2,V),_.color.setRGB(St(1,.9,V),St(.85,.95,V),St(.76,1,V)),i.toneMappingExposure=St(1.08,.92,V),o.position.set(fn.x*(xn?0:.22),fn.y*(xn?0:.14),ln.z),o.lookAt(0,0,0),o.updateMatrixWorld(),x=E?zp(U):0;let be=document.querySelector(".wordmark");be.style.display=x>0?"":"none";let Pe=2*Math.tan(xt.degToRad(17.5))*(ln.z+12)*1.12;if(y.scale.set(Pe*o.aspect,Pe,1),R.position.set(Ls.x,Ls.y+(xn?0:-Math.cos(k)*.08),0),w.quaternion.copy(Ls.q).multiply(oe.setFromEuler(j.set(fn.y*.1,fn.x*.14,0))),w.scale.setScalar(Ls.s*(1+_n*.018+En*.022)),R.visible=Gp({active:E,progress:U,veil:le.veil}),R.visible&&Un&&(R.position.x+=Un.x,R.position.y+=Un.y,R.position.z+=Un.z,oe.setFromEuler(j.set(Un.rx,Un.ry,Un.rz)),w.quaternion.multiply(oe),w.scale.multiplyScalar(Un.scale)),E){let Fe=cn?1.08:1.38,Be=Math.tan(Math.PI*35/360)*ln.z*o.aspect,ot=cn?.78:1.28,nt=wr(Yt,0,5),ut=Be*(cn?.87:.73),ke=Fu({chapter:nt,small:cn,halfWidth:Be,time:B,reduced:xn}),gt=Se.active||an?wr(Math.floor(ht+.265),0,5):nt,je=Fu({chapter:gt,small:cn,halfWidth:Be,time:B,reduced:xn}),en={group:G.group,idle:je,chapter:gt,camera:o,bounds:G.entryBounds,small:cn,halfWidth:Be,dt:De,instant:xn&&!$i};if(me.copy(ke.v),Ye.copy(ke.q),G.group.visible=!0,G.animate({phase:Te,amplitude:C,jawOpen:F?le.jaw:.13,engulf:F?le.engulf:0,dt:De,instant:xn}),U<1){let{approach:Bt,surge:Rt,exit:Tn}=le,it=G.aperture(),tn=St(St(Fe,3.4,Bt),4.3,Rt),Lt=Math.atan2(-it.normal.y,it.normal.x);G.group.quaternion.setFromEuler(Xe.set(0,-Math.PI/2-.38*(1-Bt),Lt));let Tt=ge.mouthScale(tn,w.scale.x,U,it,G.group.quaternion),At=Math.tan(Math.PI*35/360),Dr=Math.min(it.width*Tt/(2*At*o.aspect),it.height*Tt/(2*At))*.32,pn=new S(St(de.x+Be*.6,de.x,Bt)*(1-Rt),St(de.y+.22,0,Rt),St(St(Lu,Np,Bt),ln.z-Math.max(.4,Dr),Rt));if(!we){let xm=new S(de.x+Be*.6,de.y+.22,Lu),ym=new ze().setFromEuler(new bt(0,-Math.PI/2-.38,Lt));we=el(o,G.entryBounds,it.center,xm,ym,Fe)}pn.addScaledVector(we,Qh(U)),G.group.scale.setScalar(Tt),G.group.position.copy(pn).sub(it.center.clone().multiplyScalar(Tt).applyQuaternion(G.group.quaternion));let Al=it.normal.clone().applyQuaternion(G.group.quaternion),Ds=ge.apply(R,w,U,{aperture:it,rotation:G.group.quaternion,scale:Tt,center:pn,fold:Nn.uCapture.value,flow:C,pulse:_n+En*.3});Ds?.retreat&&(pn.addScaledVector(Al,-Ds.retreat),G.group.position.addScaledVector(Al,-Ds.retreat));let _m=Wp(K,pn,Al,it.width,Tt,Ds?.deepest??0);Fn&&(s.dataset.throatDepth=String(_m)),Fn&&(s.dataset.captureFit=JSON.stringify({scale:w.scale.x,position:R.position.toArray(),fold:Nn.uCapture.value,depth:Ds?.depth??0,recession:Ds?.recession??0,mouth:pn.toArray()})),G.group.position.lerp(new S(-Be-9,de.y+.39,-5),Tn),G.group.quaternion.slerp(new ze().setFromEuler(Xe.set(...hl)),Tn),G.group.scale.setScalar(St(Tt,Fe,Tn))}else if(Ae.complete)if(Se.active)Se.update(en),he=null,Ze=-1;else if(mt){if(he?.id!==mt.id){let Lt=G.group.position.clone(),Tt=G.group.quaternion.clone(),At;mt.chapter===0?At=[Lt,new S(.1,.2,2),new S(.15,1.5,ln.z-3),new S(1,7,ln.z+12)]:mt.chapter===1?At=[Lt,new S(-Be*.6,-.5,1),new S(.1,.7,2.2),new S(ut,-.1,-1.8)]:mt.chapter===2?At=[Lt,new S(0,1.1,2.2),new S(-Be*.7,2.5,4),new S(-Be-10,5,0)]:mt.chapter===3?At=[Lt,new S(Be*.5,-.6,1.5),Jp({small:cn,halfWidth:Be}),Yo({small:cn,halfWidth:Be}).v]:At=[Lt,new S(-.5,.8,1),new S(.4,2,ln.z-2),new S(Be+9,5,ln.z+8)],he={id:mt.id,chapter:mt.chapter,curve:new qt(At),startQ:Tt,startScale:G.group.scale.x},Ze=mt.chapter,Fn&&mt.chapter===2&&(Oe={started:B,rows:[]})}let Bt=Ve(0,1,mt.t),Rt=he.curve,Tn=Math.sin(mt.t*Math.PI*2)*.17;G.group.position.copy(Rt.getPoint(Bt));let it=Rt.getTangent(Bt),tn=pe(it,Tn);G.group.quaternion.copy(he.startQ).slerp(tn,Ve(0,.2,mt.t)),mt.chapter===1&&G.group.quaternion.slerp(new ze().setFromEuler(Xe.set(.06,3.5,-.08)),Ve(.77,1,mt.t)),mt.chapter===3&&G.group.quaternion.slerp(new ze().setFromEuler(Xe.set(-.02,-.42,.12)),Ve(.77,1,mt.t)),G.group.scale.setScalar(St(he.startScale,ot*(mt.chapter===1?.89:1),Ve(0,.3,mt.t))),mt.chapter===3&&G.group.scale.setScalar($p(G.group.scale.x,{small:cn,halfWidth:Be},mt.t)),he.progress=mt.t}else{let Bt=he?.progress===1&&Ze===gt&&$e>=gt+.14,Rt=he?.progress===1&&Zp({track:he,chapter:gt,group:G.group,camera:o,bounds:G.entryBounds,idle:je,dt:De,small:cn});if(!Bt&&!Rt){if(G.group.position.distanceTo(je.v)<.45&&G.group.quaternion.angleTo(je.q)<.22&&Math.abs(G.group.scale.x-je.s)<.08&&!xn){let it=1-Math.exp(-Math.max(0,De)*2.5);G.group.position.lerp(je.v,it),G.group.quaternion.slerp(je.q,it),G.group.scale.lerp(new S(je.s,je.s,je.s),it)}else Se.update(en);he=null,Ze=-1}}else{let Bt=Ae.update({returning:q,chapter:nt,halfWidth:Be,small:cn,anchorY:de.y,idle:ke,dt:De,instant:xn});G.group.position.copy(Bt.v),G.group.quaternion.copy(Bt.q),G.group.scale.setScalar(Bt.s)}Se.observe(G.group,De),Fn&&(Se.active&&!Ce&&(Ce={rows:[]}),Ce&&(Ce.rows.push({time:B,dt:De,stage:Se.stage,destination:gt,pass:mt?.chapter??null,v:G.group.position.toArray(),q:G.group.quaternion.toArray(),s:G.group.scale.x,outside:Dn(o,G.entryBounds,G.group.position,G.group.quaternion,G.group.scale.x),relocations:Se.relocations}),(!Se.active||Ce.rows.length>=1200)&&(s.dataset.navigationTrace=JSON.stringify(Ce.rows),Ce=null)))}if(Fn&&Oe&&(B-Oe.started<9&&Oe.rows.length<600?Oe.rows.push({time:B,position:$e,chapter:Yt,pass:mt?.chapter??null,t:mt?.t??1,v:G.group.position.toArray(),q:G.group.quaternion.toArray(),s:G.group.scale.x,outside:Dn(o,G.entryBounds,G.group.position,G.group.quaternion,G.group.scale.x),parked:!!he?.parked,glide:he?.musicGlide?he.musicGlide.elapsed/he.musicGlide.duration:null}):(s.dataset.passTrace=JSON.stringify(Oe.rows),Oe=null)),R.visible){Nn.uPhase.value=k,Nn.uFlow.value=C,Nn.uPulse.value=_n+En*.3;for(let{line:Fe,base:Be}of $){let ot=Fe.geometry.attributes.position.array;for(let nt=0;nt<ot.length;nt+=3)ot[nt]=Be[nt]*(1-Nn.uCapture.value*.52),ot[nt+2]=Be[nt+2]+ko(Be[nt],Be[nt+1],k,C,_n+En*.3,Nn.uCapture.value);Fe.geometry.attributes.position.needsUpdate=!0}Z.update({phase:k,flow:C,capture:Nn.uCapture.value}),z.color.copy(P.color),z.attenuationColor.copy(P.attenuationColor),z.transmission=P.transmission,z.roughness=P.roughness}tt.rotation.z=B*.025,tt.position.y=-.1;let Re=(.12+Math.sin(wr($e,0,5)/5*Math.PI)*.25)*hi*St(1,.12,V);lt.forEach((Fe,Be)=>{Fe.material.opacity=Re,Fe.rotation.x=.7+Be*.45+$e*.22,Fe.scale.setScalar(1+Math.sin($e*1.6+Be)*.16)}),ie.rotation.z=B*.012,ie.position.y=Math.sin(B*.12)*.25,ie.material.color.setHex(V>.5?10201264:5340039),ie.material.opacity=St(.5,.28,V),re.forEach((Fe,Be)=>{let ot=Fe.userData,nt=ot.a+B*ot.speed;Fe.position.set(Math.cos(nt)*ot.r,Math.sin(nt)*ot.r*.7,ot.z+Math.sin($e*.8+Be)*.7),Fe.rotation.x=B*ot.speed+Be,Fe.rotation.y=B*ot.speed*.6;let ut=E&&U<.75?Er(.3,.7,U):0;ut&&(Fe.position.x=St(Fe.position.x,de.x,ut),Fe.position.y=St(Fe.position.y,de.y,ut),Fe.position.z*=1-ut),Fe.scale.copy(ot.scale).multiplyScalar(St(1,.42,V)*(1-ut*.96))}),E&&U>=1&&D===null&&(D=B);let Ge=D===null?0:Ve(0,.28,q)*Math.exp(-Math.max(0,B-D)*2.3),qe=1-wr($e*1.8,0,1);T.uniforms.uWord.value=qe*hi,be.style.opacity=String(x*qe*hi*(.26+Ge*.18)),We&&!E?(Xp(i,r,o,G.group),We=!1,s.dataset.sharkPrepared="true"):i.render(r,o),Fn&&Ni!==null&&Ni>=17.7&&Ni<19.1&&Me.length<120?Me.push({audio:Ni,dt:De,renderMs:performance.now()-Tl,progress:U,phase:k,rawEnergy:wl,energy:En,pulse:_n,scale:w.scale.x,fold:Nn.uCapture.value,camera:o.position.toArray(),wing:ko(3.15,.15,k,C,_n+En*.3,Nn.uCapture.value),position:R.position.toArray(),rotation:w.quaternion.toArray(),programs:i.info.programs.length}):Fn&&Ni>=19.1&&Me.length&&!s.dataset.cueTrace&&(s.dataset.cueTrace=JSON.stringify(Me)),s.dataset.renderer="webgl",s.dataset.chapter=String(Math.round($e)),s.dataset.sharkModel=G.model,s.dataset.creature=E&&U>=.63?"shark":E?"attack":"manta",Fn&&(s.dataset.mantaRetained=String(R.visible),s.dataset.mantaPose=JSON.stringify({v:R.position.toArray(),q:w.quaternion.toArray(),s:w.scale.x}),s.dataset.arrival=JSON.stringify({complete:Ae.complete,chapter:Ae.route?.chapter??null,u:Ae.route?Math.min(1,Ae.route.elapsed/Ae.route.duration):null,v:G.group.position.toArray(),q:G.group.quaternion.toArray(),s:G.group.scale.x}),s.dataset.transit=JSON.stringify({active:Se.active,stage:Se.stage,chapter:Se.chapter,relocations:Se.relocations}),s.dataset.musicGlide=he?.parked?"parked":he?.musicGlide?"glide":"idle",s.dataset.musicGlideProgress=String(he?.musicGlide?he.musicGlide.elapsed/he.musicGlide.duration:0)),s.hasAttribute("data-rhythm-debug")&&(s.dataset.flapBpm=String(50),s.dataset.flapPhase=String(k),s.dataset.sharkPhase=String(Te),s.dataset.jaw=String(G.jawOpen),s.dataset.dark=String(V),s.dataset.sharkX=String(G.group.position.x),s.dataset.sharkEntryWeight=String(F?Qh(U):0));let Ne=G.mouth(o,innerWidth,innerHeight);return Ne.x=wr(Ne.x,-innerWidth*.5,innerWidth*1.5),Ne.y=wr(Ne.y,-innerHeight*.5,innerHeight*1.5),{mouth:Ne,engulfVeil:E?le.veil:0}}let Ie=G.ready.then(()=>i.compileAsync(G.group,o,r)).then(()=>{We=!0});return{render:ye,resize:ae,setColor:te,setLight:fe,ready:Ie,get arrivalReady(){return Ae.complete},get navigationBusy(){return Se.active},setAmplitude:B=>{C=B},setTransparency:B=>{ee=B,P.transmission=xe?St(.3,.75,B):St(.5,.99,B),P.roughness=St(.2,.045,B),I.transmission=St(.45,.92,B),b.transmission=St(.38,.84,B),G.setFinish(B)},get light(){return xe},renderer:i}}var Qv="./assets/please-lord-seamless.wav";var xl=class{constructor(e,t){this.onChange=e,this.onError=t,this.enabled=!1,this.pending=!1,this.hidden=document.hidden,this.token=0,this.offset=0,this.voice=null}init(){if(this.context)return;let e=window.AudioContext||window.webkitAudioContext;if(!e)throw new Error("Audio is not supported");this.context=new e({latencyHint:"playback"}),this.analyser=this.context.createAnalyser(),this.analyser.fftSize=256,this.analyser.connect(this.context.destination),this.data=new Uint8Array(this.analyser.frequencyBinCount)}async loadBuffer(){return this.buffer?this.buffer:(this.loading||(this.loading=(async()=>{let e=await fetch(Qv);if(!e.ok)throw new Error("Audio loop is unavailable");let t=await this.context.decodeAudioData(await e.arrayBuffer());if(!t.length||Math.abs(t.duration-18-38.4)>1/t.sampleRate)throw new Error("Unexpected soundtrack duration");return this.buffer=t,t})().finally(()=>{this.loading=null})),this.loading)}startPlayback(){if(this.voice)return;let e=this.context.createBufferSource(),t=this.context.createGain();e.buffer=this.buffer,e.loop=!0,e.loopStart=18,e.loopEnd=this.buffer.duration,e.connect(t).connect(this.analyser);let n=this.context.currentTime;t.gain.setValueAtTime(0,n),t.gain.linearRampToValueAtTime(.5,n+.15),this.voice={source:e,gain:t,startedAt:n,offset:this.offset},e.onended=()=>{e.disconnect(),t.disconnect()},e.start(n,this.offset)}playbackPosition(e=this.context?.currentTime??0){let t=this.voice?this.voice.offset+Math.max(0,e-this.voice.startedAt):this.offset;if(t<18)return t;let n=this.buffer.duration-18;return 18+(t-18)%n}audiblePosition(e=performance.now()){if(!this.enabled||!this.voice)return null;let t=this.context,n=t.currentTime;if(t.state==="running"){let i=t.getOutputTimestamp?.();i?.contextTime>0&&i?.performanceTime>0?n=Math.min(n,i.contextTime+Math.max(0,e-i.performanceTime)/1e3):n-=Math.max(0,t.outputLatency??t.baseLatency??0)}return this.playbackPosition(Math.max(this.voice.startedAt,n))}stopPlayback(){let e=this.voice;if(!e)return;let t=this.context.currentTime,n=this.context.state==="running"?.04:0;this.offset=this.playbackPosition(t+n),this.voice=null;let i=e.gain.gain;i.cancelAndHoldAtTime?i.cancelAndHoldAtTime(t):(i.cancelScheduledValues(t),i.setValueAtTime(i.value,t)),i.linearRampToValueAtTime(0,t+n),e.source.stop(t+n)}async enable(){if(this.enabled||this.pending)return this.enabled;let e=++this.token;this.pending=!0,this.onChange(!1,!0);try{return this.init(),await Promise.all([this.context.resume(),this.loadBuffer()]),e!==this.token||(this.hidden?await this.context.suspend():this.context.state!=="running"&&await this.context.resume(),e!==this.token)?!1:(this.startPlayback(),this.pending=!1,this.enabled=!0,this.onChange(!0,!1),!0)}catch{return e!==this.token||(this.disable(),this.onError("The soundtrack could not start. Try again or explore in silence.")),!1}}disable(){++this.token,this.pending=!1,this.enabled=!1,this.stopPlayback(),this.onChange(!1,!1)}energy(){if(!this.enabled||!this.analyser||this.hidden)return 0;this.analyser.getByteFrequencyData(this.data);let e=0;for(let t=0;t<32;t++)e+=this.data[t];return Math.min(1,e/3200)}async visibility(e){if(this.hidden=e,!!this.context)try{e?await this.context.suspend():this.enabled&&await this.context.resume()}catch{this.enabled&&this.disable()}}};var eM=1.2*3,tM=1.2*4,yl=()=>({x:0,y:0,z:0,rx:0,ry:0,rz:0,scale:1});function zu(s,e="roll"){let t=Math.max(0,Math.min(1,s));if(t===0||t===1)return yl();let n=Ve(0,1,t),i=Math.sin(Math.PI*n)**2;return e==="dive"?{x:-.5*Math.sin(In*n)*i,y:-.68*i,z:-.95*i,rx:-.38*Math.sin(In*n)*i,ry:-In*n,rz:.36*Math.sin(Math.PI*n)*i,scale:1-.12*i}:{x:.45*Math.sin(In*n)*i,y:.48*i,z:-.65*i,rx:.24*Math.sin(In*n)*i,ry:In*n,rz:-.22*Math.sin(Math.PI*n)*i,scale:1-.08*i}}var vl=class{constructor(){this.elapsed=null,this.pose=yl(),this.kind="roll"}get active(){return this.elapsed!==null}get duration(){return this.kind==="dive"?tM:eM}get progress(){return this.active?Math.min(1,this.elapsed/this.duration):0}start(e=!0,t="roll"){return!e||this.active?!1:(this.kind=t==="dive"?"dive":"roll",this.elapsed=0,this.pose=yl(),!0)}reset(){return this.elapsed=null,this.pose=yl()}update(e,{paused:t=!1,reduced:n=!1}={}){if(n)return this.reset();if(t||!this.active)return this.pose;let i=Math.max(0,Number.isFinite(e)?e:0);return this.elapsed+=i,this.elapsed>=this.duration-1e-9?this.reset():this.pose=zu(this.progress,this.kind)}};var Ml=class{constructor(e){this.words=[],this.held=!1,e.forEach((t,n)=>{let i=[];for(let r of t.querySelectorAll("h2,.body-copy,.margin-note")){let o=document.createTreeWalker(r,NodeFilter.SHOW_TEXT),a=[];for(;o.nextNode();)o.currentNode.parentElement.closest("a,button")||a.push(o.currentNode);for(let c of a){let l=document.createDocumentFragment();for(let h of c.textContent.split(/(\s+)/)){if(!h)continue;if(/^\s+$/.test(h)){l.append(document.createTextNode(h));continue}let u=document.createElement("span");u.className="edible-word",u.textContent=h,l.append(u),i.push({el:u,chapter:n,amount:0,x:0,y:0})}c.replaceWith(l)}}i.forEach((r,o)=>{r.index=o,r.count=i.length,this.words.push(r)})}),this.measure()}measure(){for(let e of this.words)e.el.style.transform="none";for(let e of this.words){let t=e.el.getBoundingClientRect();e.x=t.x+t.width/2,e.y=t.y+t.height/2}}prepare(e,t,{still:n=!1}={}){for(let i of this.words)i.amount=t&&!this.held&&!n?Pp(e,i.chapter,i.index,i.count):0}render(e,t=!1){let n=0;for(let i of this.words){let r=e&&!t?i.amount:0;i.el.style.opacity=String(1-r),i.el.style.transform=t||r===0||r===1?"none":`translate(${(e.x-i.x)*r}px,${(e.y-i.y)*r}px) rotate(${(i.index%2?1:-1)*r*26}deg) scale(${1-r*.93})`,i.el.style.filter=t||r===0||r===1?"none":`blur(${r*1.1}px)`,r===1&&n++}return n}};var nM=3.6,Sl=class{constructor(){this.position=0,this.target=0,this.reverseDistance=0,this.redirecting=!1,this.quiet=0,this.done=new Set,this.pass=null,this.serial=0}update(e,t,{active:n=!0,paused:i=!1,reduced:r=!1,target:o=e,busy:a=!1}={}){let c=e-this.position,l=Math.min(4,Math.floor(e)),h=e-l,u=o-this.target;if(u<-.001)for(let m of this.done)m>=l&&this.done.delete(m);if(!n||r)return this.pass=null,this.position=e,this.target=o,this.reverseDistance=0,this.redirecting=!1,null;if(i)return this.pass?{...this.pass}:null;this.reverseDistance=u<0?this.reverseDistance-u:u>.001?0:this.reverseDistance;let d=(this.pass?.chapter===0||!this.pass&&this.position<.14&&!this.done.has(0))&&u>=-.001&&o>=this.position&&o<1.735;return(this.reverseDistance>.08||!d&&(Math.abs(u)>1.1||Math.abs(o-e)>1.25||this.pass&&o>this.pass.chapter+1.1)||a)&&(this.pass=null,this.redirecting=!0,this.quiet=0,this.reverseDistance=0),this.redirecting?(this.done.add(l),this.quiet=a||Math.abs(u)>.001||Math.abs(e-o)>.01?0:this.quiet+Math.min(t,.1),this.quiet>.18&&(this.redirecting=!1,h<.14&&this.done.delete(l)),this.position=e,this.target=o,null):(i||(this.pass&&(this.pass.t>=1?this.pass=null:this.pass.t=br(this.pass.t+Math.max(0,Math.min(t,.1))/nM)),!this.pass&&c>1e-5&&h>=.14&&h<.84&&!this.done.has(l)&&(this.done.add(l),this.pass={id:++this.serial,chapter:l,t:0})),this.position=e,this.target=o,this.pass?{...this.pass}:null)}};var ce=s=>document.querySelector(s),Is=(s,e=0,t=1)=>Math.max(e,Math.min(t,s)),sM=s=>s*s*(3-2*s),fm=matchMedia("(prefers-reduced-motion: reduce)"),qn=new URLSearchParams(location.search),rM=new Qc,cm=new Sl,Ar=qn.has("debug-rhythm"),Ci=new vl,lm=new ml;Ar&&(ce("#world").dataset.rhythmDebug="");var dt=fm.matches||qn.has("reduced"),wt=dt,Qt=!1,Ji=0,Xn=0,Ii=0,hm=0,Gu=0,Wu=-1,Cr=0,Xu=0,Ir=0,Wt=!0,ku=0,Hu=0,Ps=[...document.querySelectorAll(".chapter")],qu=Ps.map(s=>s.querySelector(".panel")),Rr=new ll(18),Pi=new Ml(qu),It=Rr.snapshot(),um=!1,oM=["HOME","ARTIST","LISTEN","FINAL BOUNCE","INSTAGRAM","CONTACT"],Li=[],Zo={x:0,y:0},Lr={x:0,y:0},bl=ce(".entry"),Yu=[ce("#enter-sound"),ce("#enter-quiet")];ce(".nav").inert=!0;ce("#journey").inert=!0;var dm;function pm(s){ce(".status-message").textContent=s,ce(".status-message").classList.add("visible"),clearTimeout(dm),dm=setTimeout(()=>ce(".status-message").classList.remove("visible"),5e3)}function aM(s,e=!1){document.body.classList.toggle("sound-on",s),ce("#sound-toggle").setAttribute("aria-pressed",String(s)),ce("#sound-toggle").setAttribute("aria-busy",String(e)),ce("#sound-toggle").setAttribute("aria-label",e?"Cancel audio loading":s?"Mute sound":"Enable sound"),ce(".sound-label").textContent=e?"LOADING\u2026":s?"SOUND ON":"SOUND OFF"}var Di=new xl(aM,pm);function Vu(){document.body.classList.add("no-webgl"),ce("#world").dataset.renderer="fallback",ce(".ready-state").textContent="READY TO EXPLORE"}var cM=Lp(ce(".wordmark"),()=>{Wt=!0}),Ot=null;if(qn.has("fallback"))Vu();else try{Ot=rm(ce("#world"),{mobile:innerWidth<=800||navigator.connection?.saveData,onFallback:Vu,wordmarkArt:cM})}catch(s){console.warn("Manta fallback:",s),Vu()}ce(".ready-state").textContent="READY TO EXPLORE \u2197";Ot?.ready.then(()=>{Wt=!0});Ot?.light&&ce("#light-mode").setAttribute("aria-pressed","true");ce("#light-mode span").textContent=Ot?.light?"ON":"OFF";function Ku(){let s=Qt&&Li.length>0,e=Ii;if(Li=Ps.map(t=>t.offsetTop),Ot?.resize(),s){let t=Math.min(4,Math.floor(e));scrollTo({top:Li[t]+(Li[t+1]-Li[t])*(e-t),behavior:"instant"})}Zu(),Pi.measure(),Wt=!0}function Zu(){let s=0;for(;s<5&&scrollY>=Li[s+1];)s++;Ii=Math.min(5,s+(s<5?(scrollY-Li[s])/(Li[s+1]-Li[s]):0)),(dt||wt)&&(Xn=Ii),Wt=!0}function El(s=!1){ce("#index-panel").hidden=!0,ce(".index-toggle").setAttribute("aria-expanded","false"),s&&ce(".index-toggle").focus()}function Jo(s=!1){ce("#customizer").hidden=!0,ce("#customize-toggle").setAttribute("aria-expanded","false"),s&&ce("#customize-toggle").focus()}function Ju(s){if(Qt)return;Qt=!0,s&&Di.enable(),bl.classList.add("is-closed"),bl.inert=!0,bl.setAttribute("aria-hidden","true"),document.body.classList.remove("awaiting-entry"),ce(".nav").inert=!1,ce("#journey").inert=!1,ce(".hud").inert=!1,Ku();let t={"#production":"#label","#projets":"#instagram"}[location.hash]||location.hash,n=Ps.find(i=>"#"+i.id===t)||Ps[0];scrollTo({top:n.offsetTop,behavior:"instant"}),Zu(),Xn=Ii,dt&&(Ji=1),Ci.start(!!Ot&&!document.body.classList.contains("no-webgl")&&!wt&&!dt),ce("#sound-toggle").focus({preventScroll:!0}),Wt=!0}ce("#enter-sound").addEventListener("click",()=>Ju(!0));ce("#enter-quiet").addEventListener("click",()=>Ju(!1));bl.addEventListener("keydown",s=>{s.key==="Tab"&&(s.preventDefault(),Yu[document.activeElement===Yu[0]?1:0].focus())});Yu[0].focus({preventScroll:!0});function lM(){Di.enabled||Di.pending?Di.disable():Di.enable()}ce("#sound-toggle").addEventListener("click",lM);ce("#text-toggle").addEventListener("click",()=>{Pi.held=!Pi.held,ce("#text-toggle").setAttribute("aria-pressed",String(Pi.held)),ce("#text-toggle").setAttribute("aria-label",Pi.held?"Restore word aspiration":"Keep all text visible"),ce("#text-toggle").textContent=Pi.held?"TEXT HELD":"KEEP TEXT",Wt=!0});document.querySelectorAll(".platform-links a").forEach(s=>s.addEventListener("click",()=>Di.disable()));function mm(){Qt&&(Gu=1,Wt=!0)}ce("#pulse").addEventListener("click",()=>{let s=Qt&&!!Ot&&!document.body.classList.contains("no-webgl")&&!It.active&&!wt&&!dt;Ci.start(s)&&(Wt=!0)});var Pr;ce("#world").addEventListener("pointerdown",s=>{Pr={x:s.clientX,y:s.clientY}});ce("#world").addEventListener("pointerup",s=>{Pr&&Math.hypot(s.clientX-Pr.x,s.clientY-Pr.y)<12&&mm(),Pr=null});ce("#world").addEventListener("pointercancel",()=>Pr=null);addEventListener("pointermove",s=>{if(s.pointerType==="touch")return;Lr.x=(s.clientX/innerWidth-.5)*2,Lr.y=-(s.clientY/innerHeight-.5)*2;let e=ce(".cursor-orbit");e.style.left=s.clientX-21+"px",e.style.top=s.clientY-21+"px",e.style.opacity=Qt&&s.target===ce("#world")&&!dt?"1":"0",Wt=!0},{passive:!0});document.addEventListener("pointerleave",()=>{Lr.x=Lr.y=0,ce(".cursor-orbit").style.opacity=0});ce(".index-toggle").addEventListener("click",()=>{let s=!ce("#index-panel").hidden;Jo(),ce("#index-panel").hidden=s,ce(".index-toggle").setAttribute("aria-expanded",String(!s))});document.querySelectorAll('a[href^="#"]').forEach(s=>s.addEventListener("click",()=>{El(),Jo(),Qt||Ju(!1)}));ce("#customize-toggle").addEventListener("click",()=>{let s=!ce("#customizer").hidden;El(),ce("#customizer").hidden=s,ce("#customize-toggle").setAttribute("aria-expanded",String(!s))});ce("#customize-close").addEventListener("click",()=>Jo(!0));document.addEventListener("keydown",s=>{s.key==="Escape"&&(El(),Jo())});document.addEventListener("click",s=>{s.target.closest(".index-panel,.index-toggle")||El(),s.target.closest(".customizer,#customize-toggle")||Jo()});document.querySelectorAll("[data-color]").forEach(s=>s.addEventListener("click",()=>{document.querySelectorAll("[data-color]").forEach(e=>e.setAttribute("aria-pressed",String(e===s))),Ot?.setColor(s.dataset.color),ce(".fallback-creature").style.filter=s.dataset.color==="iris"?"hue-rotate(75deg)":s.dataset.color==="ember"?"hue-rotate(185deg)":"none",Wt=!0,mm()}));ce("#fluidity").addEventListener("input",s=>{Ot?.setAmplitude(Number(s.target.value)/100),ce("#fluidity-value").textContent=s.target.value+"%",Wt=!0});ce("#glass").addEventListener("input",s=>{Ot?.setTransparency(Number(s.target.value)/100),ce("#glass-value").textContent=s.target.value+"%",Wt=!0});function gm(s,e=!1){Ot?.setLight(s),ce("#light-mode").setAttribute("aria-pressed",String(s)),ce("#light-mode span").textContent=s?"ON":"OFF",Wt=!0,e&&pm("Switched to lightweight mode to keep things fluid.")}ce("#light-mode").addEventListener("click",()=>gm(!Ot?.light));function $u(){Ir=performance.now(),document.body.classList.toggle("is-paused",wt),document.body.classList.toggle("reduced-motion",dt),ce("#motion-toggle").setAttribute("aria-pressed",String(wt)),ce("#motion-toggle").setAttribute("aria-label",wt?"Resume animation":"Pause animation"),ce("#motion-toggle").textContent=wt?"\u25B7":"\u2161",Wt=!0}ce("#motion-toggle").addEventListener("click",()=>{wt=!wt,$u()});fm.addEventListener("change",s=>{dt=s.matches,wt=dt,$u()});$u();function hM(s){let e=Math.min(4,Math.floor(s)),t=s-e,n=sM(Is((t-.52)/.43)),i=qu.map((o,a)=>a===e?1-n:a===e+1?n:0),r=s>=4.95?5:n>.5?e+1:e;qu.forEach((o,a)=>{let c=Qt?i[a]*Ji:0;o.style.opacity=c.toFixed(3),o.style.visibility=c>.01?"visible":"hidden",o.style.transform=dt?"none":`translateY(${(1-c)*(a<=e?-18:22)}px)`,Ps[a].inert=!Qt||a!==r,Ps[a].setAttribute("aria-hidden",String(!Qt||a!==r))}),r!==Wu&&(Wu=r,ce("#chapter-label").textContent=String(r).padStart(2,"0")+" / "+oM[r],ce(".scroll-next").href="#"+Ps[Math.min(5,r+1)].id,ce(".scroll-direction").textContent=r===5?"BACK UP \u2191":"SCROLL \u2193",r===5&&(ce(".scroll-next").href="#top")),ce(".scroll-line i").style.width=Is(s/5)*100+"%",Ot||(ce(".wordmark").style.opacity=(1-Is(s*1.7))*Ji*.8,ce(".fallback-creature").style.transform=`translate(-50%, -50%) rotate(${s*8-8}deg) scale(${.85+Math.sin(s)*.1})`)}function ju(s){Cr=requestAnimationFrame(ju);let e=Math.min(.05,(s-Xu)/1e3||.016);Xu=s;let t=Ot?.light?30:60;if(s-Ir<1e3/t-1)return;let n=Di.audiblePosition(s),i=It;if(It=Rr.update(n,Qt,dt||wt),Qt&&Ji>.995&&qn.has("preview-takeover")){let T=Number(qn.get("preview-takeover"));Number.isFinite(T)&&(Rr.active=!0,Rr.progress=Is(T),Rr.elapsed=T<1?Is(T)*3:3+Is(Number(qn.get("preview-return")??1))*2.4,It=Rr.snapshot())}(i.active!==It.active||i.progress!==It.progress)&&(Wt=!0),Up(It)&&!um&&(um=!0,document.body.classList.add("shark-ui-ready"),ce('meta[name="theme-color"]').content="#090c10",ce("#text-toggle").disabled=!1,ce("#text-toggle").inert=!1,ce("#text-toggle").removeAttribute("aria-hidden"),ce(".specimen-note span").textContent="SHARK / 002",ce(".customizer-top>span").textContent="YOUR SHARK",ce('label[for="glass"]').firstChild.textContent="Surface sheen ",ce("#customizer").setAttribute("aria-label","Shape the shark"),ce("#scene-announcement").textContent="The shark takes over. Listening links and navigation remain available. Use Keep text to preserve all editorial text."),document.body.classList.toggle("is-abyss",It.dark>.48),document.body.style.setProperty("--abyss-progress",String(It.dark));let r=It.active&&It.swallowed>=.99,o=r?"shark":"manta";ce("#world").dataset.animal!==o&&(ce("#world").dataset.animal=o,ce("#world").setAttribute("aria-label",r?"An animated glass shark, OKARAR\u2019s nocturnal totem":"An animated glass manta ray, OKARAR\u2019s totem"),ce(".fallback-creature").src=`./assets/${o}-fallback.svg`,ce(".fallback-creature").alt=r?"A glass shark in dark water":"Translucent manta ray"),document.body.dataset.scene=It.active?It.progress<1?"attack":"shark":"manta",ce("#pulse").hidden=It.active||wt||dt,Ar&&(ce("#world").dataset.takeoverProgress=String(It.progress));let a=Math.abs(Xn-Ii)<.001&&(!Qt||Ji>.999);if((wt||dt)&&!Wt&&a)return;let c=Ir?s-Ir:16;Ir=s,!wt&&!dt&&(hm+=c/1e3);let l=1-Math.exp(-e*8);Xn+=(Ii-Xn)*(dt?1:l),Ji+=(Number(Qt)-Ji)*(dt?1:l),Zo.x+=(Lr.x-Zo.x)*l,Zo.y+=(Lr.y-Zo.y)*l,!wt&&!dt&&(Gu*=.94);let h=Di.energy(),u=rM.update(c/1e3,n,wt||dt);lm.update(Ci,{position:Xn,target:Ii,delta:c/1e3,allowed:Qt&&!!Ot&&!document.body.classList.contains("no-webgl")&&!It.active&&!wt&&!dt});let d=Ci.update(c/1e3,{paused:wt,reduced:dt});if(Qt&&!It.active&&!wt&&!dt&&qn.has("preview-flourish")){let T=Number(qn.get("preview-flourish"));Number.isFinite(T)&&(d=zu(T,qn.get("preview-figure")||"roll"))}ce("#pulse").disabled=Ci.active,ce("#pulse").setAttribute("aria-busy",String(Ci.active)),Ar&&(ce("#world").dataset.flourishProgress=String(Ci.progress),ce("#world").dataset.flourishActive=String(Ci.active),ce("#world").dataset.flourishKind=Ci.kind,ce("#world").dataset.divePlayed=String(lm.divePlayed)),Ar&&(ce("#world").dataset.audioPosition=n===null?"silent":String(n),ce("#world").dataset.motionFrozen=String(wt||dt));let f=!!Ot&&!document.body.classList.contains("no-webgl"),m=It.active&&It.returning>=1&&f;Pi.prepare(Xn,m,{still:dt||!f});let _=cm.update(Xn,c/1e3,{active:m&&Ot.arrivalReady,paused:wt,reduced:dt,target:Ii,busy:Ot?.navigationBusy});m&&Ot.arrivalReady&&!dt&&qn.has("preview-pass")&&(_={id:"preview",chapter:Math.min(4,Math.floor(Xn)),t:Is(Number(qn.get("preview-pass")))}),hM(Xn),Ar&&(ce("#world").dataset.sharkBpm="50"),document.body.classList.toggle("is-passing",!!_),document.body.classList.toggle("is-engulfing",f&&!dt&&It.active&&It.progress>=.4&&It.progress<1);let g=Ot?.render({time:dt?1.1:hm,phase:u,sharkPhase:u,dt:wt||dt?0:c/1e3,position:Xn,targetPosition:Ii,redirecting:cm.redirecting,displayChapter:Wu,entered:Ji,pointer:dt?{x:0,y:0}:Zo,pulse:Gu,energy:h,reduced:dt||wt,paused:wt,takeover:It,pass:_,flourish:d,audioPosition:n}),p=Pi.render(g?.mouth,dt||!f);document.body.style.setProperty("--engulf-veil",String(dt?0:g?.engulfVeil||0)),Ar&&(ce("#world").dataset.eatenWords=String(p),ce("#world").dataset.pass=_?String(_.chapter):"idle",ce("#world").dataset.passProgress=String(_?.t??0),ce("#world").dataset.mouth=JSON.stringify(g?.mouth)),!Ot?.light&&!wt&&!dt&&Qt&&(Hu++,c>36&&ku++,Hu===150&&(ku>65&&gm(!0,!0),Hu=ku=0)),Wt=!1}addEventListener("scroll",Zu,{passive:!0});addEventListener("resize",Ku,{passive:!0});document.addEventListener("visibilitychange",()=>{Di.visibility(document.hidden),document.hidden?(cancelAnimationFrame(Cr),Cr=0):(Xu=Ir=performance.now(),Wt=!0,Cr||(Cr=requestAnimationFrame(ju)))});Ku();Cr=requestAnimationFrame(ju);document.fonts.ready.then(()=>{Pi.measure(),Wt=!0});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
