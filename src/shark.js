import * as THREE from 'three';
import { measureEntryBounds } from './shark-entry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { JawMotion, REST_GAPE } from './motion.js';
import { loadAnatomicalShark } from './anatomical-shark.js';

// One continuous glass animal, in model coordinates (+X forward, +Y dorsal).
// Every anatomical part uses the same travelling spine deformation, including
// its normals. Fins are curved, tapered two-sided foils, never extruded plates.
const PI=Math.PI,clamp=THREE.MathUtils.clamp;
const JAW_PIVOT=new THREE.Vector3(1.03,-.13,0);
const MOUTH_START=1.03,MOUTH_END=2.43;
const profileCurve=new THREE.CatmullRomCurve3([
  [-2.83,.075,.075],[-2.50,.12,.10],[-2.12,.22,.19],[-1.65,.39,.32],
  [-1.0,.58,.46],[-.30,.70,.61],[.35,.73,.70],[.85,.67,.73],
  [1.30,.64,.73],[1.72,.59,.71],[2.07,.50,.64],[2.32,.39,.52],
  [2.48,.29,.40],[2.62,.14,.22],[2.69,.004,.004]
].map(p=>new THREE.Vector3(...p)));
const profile=profileCurve.getPoints(600);
function section(x){
  let lo=0,hi=profile.length-1;
  while(hi-lo>1){const mid=(lo+hi)>>1;if(profile[mid].x<x)lo=mid;else hi=mid;}
  const a=profile[lo],b=profile[hi],t=clamp((x-a.x)/(b.x-a.x),0,1);
  return {ry:THREE.MathUtils.lerp(a.y,b.y,t),rz:THREE.MathUtils.lerp(a.z,b.z,t),cy:.02};
}
function openingAngle(x){
  if(x<MOUTH_START||x>=MOUTH_END)return PI/2;
  const t=(x-MOUTH_START)/(MOUTH_END-MOUTH_START);
  // Commissures sit above the broad, low central lip: no pointed smile.
  const s=section(x),y=THREE.MathUtils.lerp(-.13,s.cy-s.ry,t*t*(3-2*t));
  const lip=Math.asin(clamp((s.cy-y)/s.ry,0,1));
  return THREE.MathUtils.lerp(PI/2,lip,THREE.MathUtils.smoothstep(t,0,.13));
}
function surface(x,theta){
  const s=section(x),y=s.cy+s.ry*Math.sin(theta);
  const orbit=.035*Math.exp(-Math.pow((x-1.72)/.19,2)-Math.pow((y-.26)/.12,2));
  return new THREE.Vector3(x,y,(s.rz-orbit)*Math.cos(theta));
}
function geometryFromGrid(sample,nu,nv,reverse=false){
  const positions=[],indices=[];
  for(let i=0;i<=nu;i++)for(let j=0;j<=nv;j++){const p=sample(i/nu,j/nv);positions.push(p.x,p.y,p.z);}
  for(let i=0;i<nu;i++)for(let j=0;j<nv;j++){
    const a=i*(nv+1)+j,b=a+1,c=a+nv+1,d=c+1;
    indices.push(...(reverse?[a,b,c,b,d,c]:[a,c,b,b,c,d]));
  }
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setIndex(indices);g.computeVertexNormals();g.computeBoundingSphere();return g;
}
function cubic(points){return new THREE.CubicBezierCurve3(...points.map(p=>new THREE.Vector3(...p)));}
function foil(leading,trailing,normal,thickness,segments){
  const lead=cubic(leading),trail=cubic(trailing),axis=new THREE.Vector3(...normal),parts=[];
  for(const sign of [1,-1])parts.push(geometryFromGrid((u,v)=>{
    const p=lead.getPoint(u).lerp(trail.getPoint(u),v);
    const volume=Math.pow(Math.sin(PI*v),.72)*Math.pow(1-u,.75)*thickness;
    p.addScaledVector(axis,sign*volume);return p;
  },segments,16,sign<0));
  // Return both shells: welded-looking roots, paper-thin trailing edges.
  return parts;
}

const deformCode=`
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
}`;

export function createProceduralShark({mobile=false}={}){
  const group=new THREE.Group();group.visible=false;group.name='glass-shark';
  const common={uSwimPhase:{value:0},uSwimFlow:{value:.6},uJawOpen:{value:0}};
  const materials=[];
  function rig(material,{jaw=false,fin=false,web=false,skin=false}={}){
    material.onBeforeCompile=shader=>{
      Object.assign(shader.uniforms,common,{uIsJaw:{value:Number(jaw)},uIsFin:{value:Number(fin)}});
      shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\n'+(web?'#define JAW_WEB\n':'')+deformCode+(skin?'\nvarying vec3 vAnatomy;':''));
      shader.vertexShader=shader.vertexShader.replace('#include <beginnormal_vertex>',`
        #include <beginnormal_vertex>
        vec3 n=normalize(objectNormal);
        vec3 t1=normalize(cross(n,abs(n.y)<.9?vec3(0.,1.,0.):vec3(1.,0.,0.)));
        vec3 t2=cross(n,t1);
        objectNormal=normalize(cross(swim(position+t1*.002)-swim(position-t1*.002),swim(position+t2*.002)-swim(position-t2*.002)));
      `);
      shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','vec3 transformed=swim(position);'+(skin?'vAnatomy=position;':''));
      if(skin){
        shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nvarying vec3 vAnatomy;');
        shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
          float seam=-.08+.022*sin(vAnatomy.x*13.)+.014*sin(vAnatomy.x*31.+vAnatomy.z*9.);
          float dorsal=smoothstep(seam-.035,seam+.055,vAnatomy.y);
          diffuseColor.rgb*=mix(vec3(.96,1.,.98),vec3(.42,.56,.61),dorsal*.62);
        `);
        shader.fragmentShader=shader.fragmentShader.replace('#include <roughnessmap_fragment>',`#include <roughnessmap_fragment>
          float grain=sin(vAnatomy.x*285.+sin(vAnatomy.z*130.))*sin(vAnatomy.y*240.);
          roughnessFactor+=grain*.006;
        `);
      }
    };
    material.customProgramCacheKey=()=>`glass-shark-v6-${Number(jaw)}-${Number(fin)}-${Number(web)}-${Number(skin)}`;
    return material;
  }
  function glass(options={}){
    const m=rig(new THREE.MeshPhysicalMaterial({color:'#e4f3f0',metalness:0,roughness:.065,transmission:mobile?.94:1,thickness:.65,ior:1.42,dispersion:.35,clearcoat:.5,clearcoatRoughness:.045,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[180,500],attenuationColor:'#9cc6cb',attenuationDistance:5,envMapIntensity:1.05,side:THREE.FrontSide}),{skin:true,...options});
    materials.push(m);return m;
  }
  const bodyMat=glass(),jawMat=glass({jaw:true}),finMat=glass({fin:true});finMat.thickness=.14;jawMat.side=THREE.DoubleSide;
  const lipMat=rig(new THREE.MeshPhysicalMaterial({color:'#7c9ea3',roughness:.20,transmission:.8,thickness:.10,metalness:0,clearcoat:.3,iridescence:.5}));
  const lowerLipMat=lipMat.clone();rig(lowerLipMat,{jaw:true});
  const nx=mobile?104:180,nv=mobile?40:68;
  const body=geometryFromGrid((u,v)=>{const x=-2.83+u*5.52,a=openingAngle(x);return surface(x,-a+v*(PI+2*a));},nx,nv);
  const bodyMesh=new THREE.Mesh(body,bodyMat);bodyMesh.name='great-white-body';group.add(bodyMesh);
  const lower=geometryFromGrid((u,v)=>{const x=MOUTH_START+u*(MOUTH_END-MOUTH_START),a=openingAngle(x);return surface(x,PI+a+v*(PI-2*a));},mobile?40:68,mobile?20:32);
  const lowerMesh=new THREE.Mesh(lower,jawMat);lowerMesh.name='articulated-chin';group.add(lowerMesh);
  // Curved lips follow the actual opening in the continuous body surface.
  const upperRim=[],lowerRim=[];
  for(const side of [1,-1])for(let k=side===1?0:1;k<=40;k++){
    const u=.13+.87*(side===1?k/40:1-k/40),x=MOUTH_START+u*(MOUTH_END-MOUTH_START),a=openingAngle(x);
    const p=surface(x,side===1?-a:PI+a);upperRim.push(p);lowerRim.push(p.clone());
  }
  const rimGeometry=new THREE.TubeGeometry(new THREE.CatmullRomCurve3(upperRim,false),128,.018,8,false);
  group.add(new THREE.Mesh(rimGeometry,lipMat),new THREE.Mesh(rimGeometry.clone(),lowerLipMat));
  // Concave palate/floor, connected to the lips and recessed into the neck.
  // There is no throat sphere, disk or cone floating inside the mouth.
  const lipCurve=new THREE.CatmullRomCurve3(upperRim,false);
  for(const low of [false,true]){
    const lining=geometryFromGrid((u,v)=>{
      const rim=lipCurve.getPoint(u),back=new THREE.Vector3(.30,-.30,rim.z*.05);
      const p=rim.clone().lerp(back,v);p.x-=Math.sin(v*PI)*.12;
      p.y+=(low?-.08:.12)*Math.sin(v*PI);return p;
    },80,22,low);
    const material=rig(new THREE.MeshBasicMaterial({color:low?'#101a20':'#060d12',side:THREE.DoubleSide}),{jaw:low});
    const mesh=new THREE.Mesh(lining,material);mesh.name=low?'mouth-floor':'recessed-palate';group.add(mesh);
  }
  const cheekMat=glass({web:true});cheekMat.transmission=.7;cheekMat.thickness=.08;cheekMat.side=THREE.DoubleSide;
  for(const side of [-1,1]){
    const web=geometryFromGrid((u,v)=>{const x=MOUTH_START+u*.62,a=openingAngle(x);const p=surface(x,side>0?-a:PI+a);p.y-=v*.025;p.z*=.97;return p;},24,12,side<0);
    const weights=[];for(let i=0;i<=24;i++)for(let j=0;j<=12;j++)weights.push(j/12);
    web.setAttribute('aJawBlend',new THREE.Float32BufferAttribute(weights,1));
    const mesh=new THREE.Mesh(web,cheekMat);mesh.name='flexible-mouth-corner';group.add(mesh);
  }
  // Broad flattened triangular crowns with fine, actual serrated edges.
  const toothShape=new THREE.Shape();toothShape.moveTo(-.045,0);toothShape.lineTo(.045,0);
  for(let i=1;i<=12;i++){const t=i/12;toothShape.lineTo(.045*(1-t)+(i%2?.0028:0),-.115*t);}
  for(let i=11;i>=0;i--){const t=i/12;toothShape.lineTo(-.045*(1-t)-(i%2?.0028:0),-.115*t);}
  toothShape.closePath();
  const toothGeometry=new THREE.ExtrudeGeometry(toothShape,{depth:.010,bevelEnabled:true,bevelThickness:.0015,bevelSize:.001,bevelSegments:1,steps:1});
  toothGeometry.translate(0,0,-.005);toothGeometry.deleteAttribute('uv');
  const toothMat=rig(new THREE.MeshPhysicalMaterial({color:'#e4f1e9',roughness:.14,metalness:.08,transmission:.35,thickness:.035,clearcoat:1}));
  const lowerToothMat=toothMat.clone();lowerToothMat.side=THREE.DoubleSide;rig(lowerToothMat,{jaw:true});
  const dentition=[[],[]];
  for(const row of [0,1])for(const side of [1,-1])for(let k=0;k<14;k++){
    const u=.18+k/13*.78,x=MOUTH_START+u*(MOUTH_END-MOUTH_START),a=openingAngle(x),theta=side===1?-a:PI+a;
    const p=surface(x,theta),next=surface(x+.01,side===1?-openingAngle(x+.01):PI+openingAngle(x+.01));
    const tangent=next.sub(p).normalize();tangent.y=0;tangent.normalize();
    const normal=new THREE.Vector3().crossVectors(tangent,new THREE.Vector3(0,1,0)).normalize();
    const basis=new THREE.Matrix4().makeBasis(tangent,new THREE.Vector3(0,1,0),normal);
    for(const low of [false,true]){
      const g=toothGeometry.clone();
      const size=(.8+.45*Math.sin(u*PI))*(row?.65:1);
      g.scale((low?.85:1.3)*size,(low?-1.15:1.50)*size,size);g.applyMatrix4(basis);
      g.translate(p.x-row*.035,p.y+(low?-.022:.025),p.z*(row?.82:.93));
      dentition[Number(low)].push(g);
    }
  }
  for(const low of [false,true]){const mesh=new THREE.Mesh(mergeGeometries(dentition[Number(low)]),low?lowerToothMat:toothMat);mesh.name=low?'lower-teeth-two-rows':'upper-teeth-two-rows';group.add(mesh);}
  const darkMat=rig(new THREE.MeshPhysicalMaterial({color:'#050a0e',roughness:.22,metalness:0,clearcoat:.3}));
  const gillMat=rig(new THREE.MeshBasicMaterial({color:'#233e48',transparent:true,opacity:.78}));
  for(const side of [-1,1]){
    const eyep=surface(1.82,.33);eyep.z=side*(Math.abs(eyep.z)+.01);
    const eyeGeometry=new THREE.SphereGeometry(.063,28,18);eyeGeometry.scale(1,.84,.40);eyeGeometry.rotateY(side*.38);eyeGeometry.translate(eyep.x,eyep.y,eyep.z);group.add(new THREE.Mesh(eyeGeometry,darkMat));
    const eyelid=[];for(let k=0;k<=28;k++){const a=k/28*2*PI;eyelid.push(new THREE.Vector3(eyep.x+Math.cos(a)*.081,eyep.y+Math.sin(a)*.061,eyep.z));}
    group.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(eyelid,true),30,.004,5,true),bodyMat));
    const nostril=[];for(let k=0;k<=12;k++){const t=k/12,x=2.24+t*.13,p=surface(x,-.03-Math.sin(t*PI)*.04);p.z*=side;nostril.push(p);}
    group.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(nostril),10,.009,5,false),darkMat));
    for(let k=0;k<5;k++){
      const pts=[];for(let j=0;j<=20;j++){const t=j/20,x=.87-k*.19-.11*Math.sin(t*PI),s=section(x),a=.69-t*(1.25-k*.03);pts.push(new THREE.Vector3(x,s.cy+s.ry*Math.sin(a),side*(s.rz*Math.cos(a)+.004)));}
      group.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),28,.012,6,false),gillMat));
      const edge=pts.map(p=>new THREE.Vector3(p.x-.025,p.y,p.z));group.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(edge),28,.004,5,false),lipMat));
    }
  }
  const pores=[];
  for(const side of [-1,1])for(let i=0;i<36;i++){
    const x=2.08+(i%9)*.054,theta=-.16+Math.floor(i/9)*.19+.028*Math.sin(i*2.4),p=surface(x,theta);p.z*=side;pores.push(p.x,p.y,p.z);
  }
  const poresGeo=new THREE.BufferGeometry();poresGeo.setAttribute('position',new THREE.Float32BufferAttribute(pores,3));
  const poresMat=rig(new THREE.PointsMaterial({color:'#35515a',size:.008,transparent:true,opacity:.48}));group.add(new THREE.Points(poresGeo,poresMat));
  const fins=[];
  function addFin(a,b,n,thickness=.055){for(const g of foil(a,b,n,thickness,mobile?26:42)){const m=new THREE.Mesh(g,finMat);group.add(m);fins.push(m);}}
  addFin([[.43,.66,0],[.22,1.13,0],[-.27,1.77,0],[-.48,1.80,0]],[[-1.04,.48,0],[-.65,.83,0],[-.60,1.46,0],[-.48,1.80,0]],[0,0,1],.07);
  addFin([[-1.66,.31,0],[-1.75,.52,0],[-1.88,.75,0],[-2.02,.74,0]],[[-2.20,.15,0],[-1.93,.29,0],[-2.05,.61,0],[-2.02,.74,0]],[0,0,1],.028);
  for(const s of [-1,1]){
    addFin([[.48,-.25,s*.45],[.20,-.31,s*.93],[-.63,-.47,s*1.92],[-1.16,-.57,s*2.12]],[[-.30,-.42,s*.44],[-.72,-.37,s*.99],[-1.17,-.53,s*1.94],[-1.16,-.57,s*2.12]],[0,1,0],.05);
    addFin([[-1.24,-.32,s*.24],[-1.40,-.38,s*.49],[-1.65,-.43,s*.77],[-1.87,-.47,s*.89]],[[-1.80,-.24,s*.19],[-1.80,-.29,s*.46],[-1.95,-.43,s*.79],[-1.87,-.47,s*.89]],[0,1,0],.03);
    addFin([[-2.14,.01,s*.15],[-2.35,.02,s*.27],[-2.66,.015,s*.25],[-2.78,0,s*.09]],[[-2.14,-.045,s*.15],[-2.35,-.04,s*.24],[-2.66,-.025,s*.20],[-2.78,0,s*.09]],[0,1,0],.018);
  }
  addFin([[-2.63,.07,0],[-2.80,.65,0],[-3.57,1.53,0],[-3.80,1.58,0]],[[-3.09,-.01,0],[-3.04,.52,0],[-3.55,1.17,0],[-3.80,1.58,0]],[0,0,1],.035);
  addFin([[-2.63,-.07,0],[-2.98,-.42,0],[-3.47,-.98,0],[-3.73,-1.07,0]],[[-3.09,.01,0],[-3.10,-.27,0],[-3.55,-.78,0],[-3.73,-1.07,0]],[0,0,1],.03);
  addFin([[-1.94,-.18,0],[-2.04,-.35,0],[-2.14,-.54,0],[-2.25,-.52,0]],[[-2.40,-.11,0],[-2.29,-.18,0],[-2.34,-.39,0],[-2.25,-.52,0]],[0,0,1],.022);

  let phase=0,flow=.6,jawOpen=REST_GAPE;const jawMotion=new JawMotion();
  function deformCPU(point,isJaw=false){
    const p=point.clone();
    const weight=(isJaw?1:0)*THREE.MathUtils.smoothstep(p.x,1.03,1.55);
    p.sub(JAW_PIVOT).applyAxisAngle(new THREE.Vector3(0,0,1),-jawOpen*.37*weight).add(JAW_PIVOT);p.x+=jawOpen*.085*weight;
    const upper=(1-weight)*THREE.MathUtils.smoothstep(p.x,1,2.5);p.x+=upper*jawOpen*.055;p.y+=upper*jawOpen*.04;
    const spine=x=>{const t=clamp((1.55-x)/5.35,0,1);return Math.sin(phase-t*2.15)*(.012+.48*t*t)*(.55+flow*.75);};
    const t=clamp((1.55-p.x)/5.35,0,1),slope=(spine(p.x+.01)-spine(p.x-.01))/.02,a=-Math.atan(slope),z=p.z;
    p.x+=Math.sin(a)*z;p.z=Math.cos(a)*z+spine(p.x);p.y+=Math.sin(phase-t*1.8)*t*t*.055;return p;
  }
  function animate({phase:p,amplitude=.6,jawOpen:j=REST_GAPE,dt=1/60,instant=false}){phase=p;flow=amplitude;jawOpen=jawMotion.update(j,dt,instant);common.uSwimPhase.value=p;common.uSwimFlow.value=amplitude;common.uJawOpen.value=jawOpen;}
  function localMouth(){return deformCPU(new THREE.Vector3(1.95,-.27-jawOpen*.27,0));}
  function mouth(camera,width,height){
    group.updateWorldMatrix(true,false);
    const project=p=>{const q=p.applyMatrix4(group.matrixWorld).project(camera);return {x:(q.x+1)*width/2,y:(1-q.y)*height/2};};
    const center=project(localMouth()),points=[];
    for(let k=3;k<upperRim.length;k+=5){points.push(project(deformCPU(upperRim[k])),project(deformCPU(lowerRim[k],true)));}
    const xs=points.map(p=>p.x),ys=points.map(p=>p.y);
    return {...center,left:Math.min(...xs),right:Math.max(...xs),top:Math.min(...ys),bottom:Math.max(...ys)};
  }
  function setLight(light){for(const m of materials)m.transmission=light?.94:1;}
  return {group,animate,mouth,localMouth,setLight,get jawOpen(){return jawOpen;},
    setFinish(v){for(const m of materials){m.roughness=.15-v*.13;m.transmission=.88+v*.12;}},
    setColor(name){const colors={pearl:['#d8eeeb','#7caeb7'],iris:['#e9dff4','#a28ab9'],ember:['#f6e6d5','#be996f']};const c=colors[name]||colors.pearl;for(const m of materials){m.color.set(c[0]);m.attenuationColor.set(c[1]);}}
  };
}

export function createShark({mobile=false,loadModel=typeof document!=='undefined'}={}){
  const group=new THREE.Group();group.name='shark-actor';group.visible=false;
  let rig=createProceduralShark({mobile}),last={phase:0},light=mobile,finish=.75,color='pearl',model='procedural-fallback';
  rig.group.visible=true;group.add(rig.group);
  let entryBounds=measureEntryBounds(group);
  const ready=(loadModel?loadAnatomicalShark().then(next=>{
    const previous=rig.group;group.remove(previous);
    const oldMaterials=new Set();previous.traverse(o=>{if(o.geometry)o.geometry.dispose();if(o.material)oldMaterials.add(o.material);});for(const material of oldMaterials)material.dispose();
    rig=next;group.add(rig.group);rig.setLight(light);rig.setFinish(finish);rig.setColor(color);rig.animate({...last,instant:true});model='anatomical';
  }).catch(error=>{console.warn('Anatomical shark unavailable; using the local procedural fallback.',error);model='procedural-fallback';}):Promise.resolve()).then(()=>{entryBounds=measureEntryBounds(group);});
  return {group,ready,get entryBounds(){return entryBounds;},get model(){return model;},get jawOpen(){return rig.jawOpen;},
    animate(params){last=params;rig.animate(params);},mouth:(...args)=>rig.mouth(...args),localMouth:()=>rig.localMouth(),
    aperture:()=>rig.aperture?rig.aperture():{center:rig.localMouth(),normal:new THREE.Vector3(1,0,0),width:1.1,height:.3+rig.jawOpen*.65},
    setLight(v){light=v;rig.setLight(v);},setFinish(v){finish=v;rig.setFinish(v);},setColor(v){color=v;rig.setColor(v);}
  };
}
