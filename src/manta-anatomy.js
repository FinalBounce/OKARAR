import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {smoother} from './motion.js';

// Original geometry, not a downloaded animal. +Y is forward, +Z is dorsal.
// Reference anatomy: Florida Museum / Manta Trust (links in README).
export const MANTA_SPAN=6.7;
const mix=THREE.MathUtils.lerp;
const signedPow=(x,n)=>Math.sign(x)*Math.pow(Math.abs(x),n);

// The cephalic fins are part of the leading edge itself, not shells perched
// on the head. Broad roots unfurl into shallow scoops with rounded tips.
export function mantaOutline(x){
  const a=Math.abs(x)/(MANTA_SPAN/2),ax=Math.abs(x);
  const wingFront=1.12-.99*Math.pow(a,1.72)+.12*Math.sin(a*Math.PI);
  const mouthFront=1.225-.18*Math.pow(Math.min(1,ax/.66),2);
  const t=THREE.MathUtils.clamp((ax-.66)/.48,0,1);
  const lobe=smoother(0,.40,t)*(1-smoother(.60,1,t));
  return {front:mix(mouthFront,wingFront,smoother(.205,.30,a))+.49*lobe,
    back:-1.67+1.80*Math.pow(a,.72)-.16*Math.sin(a*Math.PI),lobe};
}

export function mantaPoint(u,v,side=1){
  const a=Math.abs(u),x=u*MANTA_SPAN/2;
  // Rounded shoulders and a swept, concave trailing edge, not a flat kite.
  const {front,back,lobe}=mantaOutline(x);
  const y=mix(front,back,v),chord=Math.max(0,Math.sin(Math.PI*v));
  const camber=.13*(1-a)*chord;
  const root=.05*Math.exp(-Math.pow(a/.23,2));
  const foil=(.08*Math.pow(1-a,1.6)+root)*Math.pow(chord,.68);
  const leadingShoulder=.04*Math.pow(1-a,2)*Math.sin(Math.PI*Math.min(1,v*2));
  let z=camber+side*foil*(side>0?1:.61)+leadingShoulder;
  const section=bodySection(y),ratio=Math.abs(x)/section.width;
  if(ratio<1){
    const body=.03+side*section.height*Math.pow(1-Math.pow(ratio,2/.82),.86/2)*(side>0?1:.71);
    const a=z*side,b=body*side,k=.055,h=Math.max(k-Math.abs(a-b),0)/k;
    z=side*(Math.max(a,b)+h*h*k*.25);
  }
  if(Math.abs(x)<.66){
    const lip=.03+side*.17*Math.pow(1-Math.pow(Math.abs(x)/.66,2/.82),.86/2)*(side>0?1:.71);
    z=mix(lip,z,smoother(0,.16,v));
  }
  // Continuous skin from cheek to cephalic tip. No duplicated lobe material
  // or intersecting root. Flatten the leading edge into a soft rolled scoop.
  const lipBlend=1-smoother(0,.16,v);
  if(Math.abs(x)>=.66){
    const edge=.03+.04*lobe-.12*lobe*Math.sin(Math.PI*THREE.MathUtils.clamp((Math.abs(x)-.66)/.48,0,1));
    z=mix(z,edge,lipBlend);
  }
  z-=.14*lobe*Math.sin(Math.PI*Math.min(1,v/.28))*(1-smoother(.18,.32,v));
  z+=.0035*Math.sin(v*55+a*27)*chord*a*(1-a);
  const curledX=x-Math.sign(x)*.08*lobe*(1-smoother(0,.18,v));
  return new THREE.Vector3(curledX,y,z);
}

export function pigment(p,side){
  if(side<0){
    const edge=smoother(1.9,3.3,Math.abs(p.x));
    const spots=Math.max(0,Math.sin(p.x*23+p.y*12)*Math.sin(p.y*29-p.x*5)-.65)*(1-smoother(-.6,.1,p.y));
    return new THREE.Color('#f0f2e9').lerp(new THREE.Color('#78949b'),edge*.6+spots*.7);
  }
  // Broad pale shoulder patches let the back read even in transparent glass.
  const ax=Math.abs(p.x),shoulder=Math.exp(-Math.pow((ax-.79)/.43,4)-Math.pow((p.y-.66+ax*.15)/.32,4));
  const midline=Math.exp(-Math.pow(p.x/.28,2));
  return new THREE.Color('#789aa2').lerp(new THREE.Color('#e9efe5'),shoulder*.90)
    .multiplyScalar(1-midline*.12);
}

export function mantaSurfaceAt(x,y,side=1){
  const {front,back}=mantaOutline(x);
  return mantaPoint(x/(MANTA_SPAN/2),THREE.MathUtils.clamp((front-y)/(front-back),0,1),side);
}

export function surfaceGrid(sample,nx,ny,{reverse=false,color=null}={}){
  const positions=[],indices=[],uvs=[],colors=[];
  for(let i=0;i<=nx;i++)for(let j=0;j<=ny;j++){
    const p=sample(i/nx,j/ny);positions.push(p.x,p.y,p.z);uvs.push(i/nx,j/ny);
    if(color){const c=color(p,i/nx,j/ny);colors.push(c.r,c.g,c.b);}
  }
  for(let i=0;i<nx;i++)for(let j=0;j<ny;j++){
    const a=i*(ny+1)+j,b=a+1,c=a+ny+1,d=c+1;
    indices.push(...(reverse?[a,b,c,b,d,c]:[a,c,b,b,c,d]));
  }
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
  g.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));g.setIndex(indices);
  if(color)g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
  g.computeVertexNormals();return g;
}

export function mantaMembrane(nx,ny){
  const positions=[],uvs=[],indices=[],colors=[];
  for(let s=0;s<2;s++){
    const side=s?-1:1,offset=s*(nx+1)*(ny+1);
    for(let j=0;j<=ny;j++)for(let i=0;i<=nx;i++){
      const p=mantaPoint(i/nx*2-1,j/ny,side),c=pigment(p,side);
      positions.push(...p.toArray());uvs.push(i/nx,j/ny);colors.push(c.r,c.g,c.b);
    }
    for(let j=0;j<ny;j++)for(let i=0;i<nx;i++){
      const a=offset+j*(nx+1)+i,b=a+1,c=a+nx+1,d=c+1;
      indices.push(...(s?[a,b,c,b,d,c]:[a,c,b,b,c,d]));
    }
  }
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
  g.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
  g.setIndex(indices);g.computeVertexNormals();g.addGroup(0,nx*ny*6,0);g.addGroup(nx*ny*6,nx*ny*6,1);
  // Share the shading normal along the closed cephalic/wing leading edge.
  // Colour/material groups stay separate so dorsal and ventral skin differ.
  const normals=g.attributes.normal,layer=(nx+1)*(ny+1);
  for(let i=0;i<=nx;i++)if(Math.abs((i/nx*2-1)*MANTA_SPAN/2)>=.66){
    const n=new THREE.Vector3().fromBufferAttribute(normals,i).add(new THREE.Vector3().fromBufferAttribute(normals,i+layer)).normalize();
    normals.setXYZ(i,n.x,n.y,n.z);normals.setXYZ(i+layer,n.x,n.y,n.z);
  }
  return g;
}

const bodySections=[
  [-1.67,.055,.05],[-1.40,.20,.12],[-.9,.42,.24],[-.25,.61,.32],
  [.40,.70,.33],[.83,.74,.28],[1.225,.66,.17]
];
export function bodySection(y){
  let i=0;while(i<bodySections.length-2&&y>bodySections[i+1][0])i++;
  const a=bodySections[i],b=bodySections[i+1],t=smoother(a[0],b[0],y);
  return {width:mix(a[1],b[1],t),height:mix(a[2],b[2],t)};
}

export function mouthContour(t){
  const a=t*Math.PI*2;
  const x=.66*signedPow(Math.cos(a),.82);
  return new THREE.Vector3(x,1.225-.18*Math.pow(x/.66,2),.03+.17*signedPow(Math.sin(a),.86)*(Math.sin(a)<0?.71:1));
}

function tube(points,radius,segments=40,sides=7){
  return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),segments,radius,sides,false);
}

export function mantaDetails({mobile=false}={}){
  const parts=[];
  const add=(name,geometry,material)=>parts.push({name,geometry,material});
  const rim=Array.from({length:65},(_,i)=>mouthContour(i/64));
  add('manta-soft-mouth-rim',tube(rim,.015,mobile?64:96),'rim');
  add('manta-recessed-mouth',surfaceGrid((u,v)=>{
    const p=mouthContour(v),scale=1-u*.62;
    return new THREE.Vector3(p.x*scale,p.y-u*.61,(p.z-.03)*scale+.03);
  },mobile?16:28,mobile?40:64),'interior');
  // Recessed lamellae, not teeth: restrained details inside the filter mouth.
  for(const sign of [-1,1])for(let k=0;k<4;k++){
    const pts=Array.from({length:13},(_,j)=>{
      const t=j/12;return new THREE.Vector3(sign*(.47-k*.055)*Math.sin(t*Math.PI),.95-k*.08,-.065+t*.17);
    });add('manta-filter-fold',tube(pts,.006,18,5),'fold');
  }
  for(const sign of [-1,1]){
    const eye=new THREE.SphereGeometry(1,mobile?16:28,mobile?12:20);
    eye.scale(.064,.045,.029);eye.rotateY(sign*(Math.PI/2-.18));eye.translate(sign*.708,.84,.12);
    add('manta-inset-eye-'+sign,eye,'eye');
    const brow=Array.from({length:25},(_,i)=>{
      const a=i/24*Math.PI*2;return new THREE.Vector3(sign*(.710+.011*Math.cos(a)),.84+.058*Math.cos(a),.12+.075*Math.sin(a));
    });add('manta-eye-fold-'+sign,tube(brow,.009,32),'back');
    const spiracle=Array.from({length:17},(_,i)=>new THREE.Vector3(sign*(.665+.012*Math.sin(i/16*Math.PI)),.66-i/16*.12,.155+.018*Math.sin(i/16*Math.PI)));
    add('manta-spiracle-'+sign,tube(spiracle,.009,20,5),'eye');
    // Five recessed apertures and raised lips on the underside only.
    for(let k=0;k<5;k++){
      const y=.44-k*.23;
      const sample=(u,v)=>{
        const x=sign*(.16+u*(.39-k*.025));
        const yy=y-u*.09+(v-.5)*.030*Math.sin(u*Math.PI);
        const z=mantaSurfaceAt(x,yy,-1).z-.006;
        return new THREE.Vector3(x,yy,z);
      };
      add('manta-ventral-gill-'+sign+'-'+k,surfaceGrid(sample,24,4,{reverse:sign>0}),'gill');
      const edge=Array.from({length:21},(_,i)=>sample(i/20,1));
      add('manta-gill-lip-'+sign+'-'+k,tube(edge,.006,24,5),'belly');
    }
    // Small paired pelvic fins at the tail root, flattened into the disc.
    add('manta-pelvic-fin-'+sign,surfaceGrid((u,v)=>{
      const width=Math.sin(u*Math.PI)*.105;
      return new THREE.Vector3(sign*(.13+u*.08+(v-.5)*width*2),-1.29-u*.51,-.035+Math.sin(v*Math.PI)*.024);
    },24,12,{reverse:sign<0,color:p=>pigment(p,-1)}),'belly');
  }
  // An actual raised, swept dorsal fin, rather than a crease in the membrane.
  for(const sign of [-1,1])add('manta-dorsal-fin-'+sign,surfaceGrid((u,v)=>{
    const height=Math.sin(Math.PI*u)*.36;
    return new THREE.Vector3(sign*Math.sin(v*Math.PI)*.025*Math.sin(u*Math.PI),-.79-u*.60-v*.11,.18+height*v);
  },28,12,{reverse:sign<0}),'back');
  return parts;
}

export function mergeMantaDetails(parts){
  const buckets=new Map();
  for(const part of parts){
    const geometry=part.geometry;
    if(!geometry.getAttribute('color'))geometry.setAttribute('color',new THREE.Float32BufferAttribute(new Float32Array(geometry.getAttribute('position').count*3).fill(1),3));
    if(!buckets.has(part.material))buckets.set(part.material,[]);
    buckets.get(part.material).push(part);
  }
  return [...buckets].map(([material,items])=>{
    const geometry=mergeGeometries(items.map(p=>p.geometry));
    geometry.userData.parts=items.map(p=>p.name);
    for(const p of items)p.geometry.dispose();
    return {name:'manta-detail-'+material,material,geometry};
  });
}
