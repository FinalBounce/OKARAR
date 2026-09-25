import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { FLAP_BPM, wingDisplacement } from './rhythm.js';
import { createShark } from './shark.js';
import { mantaPoint as point, mantaMembrane, mantaDetails, mergeMantaDetails } from './manta-anatomy.js';
import { smooth } from './takeover.js';
import { REST_GAPE, smoother } from './motion.js';
import { WORDMARK_WIDTH, WORDMARK_HEIGHT, WORDMARK_VIEWPORT_WIDTH } from './wordmark.js';
import { engulfPose, ENGULF_APPROACH_Z, ENGULF_READY_Z, ENGULF_EXIT_ROTATION, NIGHT_ENVIRONMENT_AT, backgroundHandoff } from './engulf.js';
import { MantaCapture,placeThroatPlane,mantaVisibleDuringCapture } from './manta-capture.js';
import { renderWithHiddenActor } from './prewarm.js';
import { offscreenEntryOffset,entryWeight } from './shark-entry.js';
import { finishMusicExit,outsideCamera } from './music-exit.js';
import { SharkArrival,sharkIdlePose,instagramPose,instagramApproach,instagramPassScale } from './shark-arrival.js';
import { mantaJourneyPose } from './manta-journey.js';
import { createMantaTail } from './manta-tail.js';
import { SharkTransit } from './shark-transit.js';
import { MantaResponse } from './manta-response.js';
import { CaptureQuality } from './capture-quality.js';
import { homeFlybyCurve } from './home-flyby.js';

const clamp = THREE.MathUtils.clamp;
const mix = THREE.MathUtils.lerp;
const uniforms = { uPhase: { value: 0 }, uFlow: { value: .6 }, uPulse: { value: 0 }, uCapture: { value: 0 } };

const waveCode = `
uniform float uPhase; uniform float uFlow; uniform float uPulse; uniform float uCapture;
float flap(vec3 p) {
  float a = abs(p.x);
  float lag = (3.35 - a) * .55 + (p.y - .11) * .52;
  float swim = -cos(uPhase + lag) * pow(a,1.65) * (.11 + uFlow*.15 + uPulse*.09)
    + sin(p.y * 4. + uPhase * 2.) * a * (1. - a / 3.35) * .018;
  return swim * smoothstep(.4,1.2,a) * (1. - uCapture * .96) + a * uCapture * .46;
}`;
function animateMaterial(material) {
  material.onBeforeCompile = shader => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader.replace('#include <common>', '#include <common>\n' + waveCode);
    shader.vertexShader = shader.vertexShader.replace('#include <beginnormal_vertex>', `
      #include <beginnormal_vertex>
      float dx = (flap(position + vec3(.01,0.,0.)) - flap(position - vec3(.01,0.,0.))) / .02;
      float dy = (flap(position + vec3(0.,.01,0.)) - flap(position - vec3(0.,.01,0.))) / .02;
      objectNormal = normalize(vec3(objectNormal.x - dx*objectNormal.z, objectNormal.y - dy*objectNormal.z, objectNormal.z));
      objectNormal.x /= 1. - uCapture * .52;
    `);
    shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n transformed.z += flap(position); transformed.x *= 1. - uCapture * .52;');
    if(material.vertexColors){
      // More optical depth in the torso, lighter glass at the wingtips. This
      // keeps the underside from reading as a set of marks on the back.
      shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 vMantaSurface;');
      shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvMantaSurface=position;');
      shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nvarying vec3 vMantaSurface;');
      shader.fragmentShader=shader.fragmentShader.replace('#include <transmission_fragment>',THREE.ShaderChunk.transmission_fragment
        .replace('material.transmission = transmission;',`float torso=(1.-smoothstep(.42,.95,abs(vMantaSurface.x)))*smoothstep(-1.65,-.9,vMantaSurface.y);
        material.transmission=transmission*(1.-torso*.43);`)
        .replace('material.thickness = thickness;','material.thickness=thickness*(1.+torso*1.8);'));
      shader.fragmentShader=shader.fragmentShader.replace('#include <roughnessmap_fragment>',`#include <roughnessmap_fragment>
        float grain=sin(vMantaSurface.x*137.+sin(vMantaSurface.y*83.))*sin(vMantaSurface.y*119.);
        roughnessFactor+=.009*grain*grain;`);
    }
  };
  material.customProgramCacheKey = () => 'okarar-manta-continuous-cephalic-v10';
  return material;
}

export function createWorld(canvas, { mobile, onFallback, wordmarkArt }) {
  let renderer;
  try { renderer = new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'high-performance'}); }
  catch { onFallback(); return null; }
  renderer.setClearColor(0xe8eeea, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  renderer.localClippingEnabled=true;
  renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1.25 : 1.65));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, .1, 100);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const environment = new RoomEnvironment();
  const warm = new THREE.Mesh(new THREE.PlaneGeometry(8, 15), new THREE.MeshBasicMaterial({color:new THREE.Color(3.4,1.5,.65),side:THREE.DoubleSide}));
  warm.position.set(-6,1,0); warm.rotation.y = Math.PI/2; environment.add(warm);
  const cool = new THREE.Mesh(new THREE.PlaneGeometry(4, 12), new THREE.MeshBasicMaterial({color:new THREE.Color(.8,2.3,3.8),side:THREE.DoubleSide}));
  cool.position.set(5,2,1); cool.rotation.y = -Math.PI/2; environment.add(cool);
  const envTarget = pmrem.fromScene(environment,.025);
  const nightRoom=new RoomEnvironment(),nightTarget=pmrem.fromScene(nightRoom,.025);nightRoom.dispose();
  scene.environment = envTarget.texture; environment.dispose(); pmrem.dispose();
  const ambient=new THREE.HemisphereLight(0xffffff,0x69908f,1.8);scene.add(ambient);
  const key = new THREE.DirectionalLight(0xffede0,3.2); key.position.set(-3,5,6);scene.add(key);
  const rim = new THREE.DirectionalLight(0xa7e3ff,2.4); rim.position.set(3,-1,-2);scene.add(rim);

  // The wordmark lives inside the rendered scene so it can refract through glass.
  const textTexture=new THREE.CanvasTexture(wordmarkArt.canvas);textTexture.colorSpace=THREE.SRGBColorSpace;
  wordmarkArt.ready.then(()=>{textTexture.needsUpdate=true;});
  const backdropMaterial = new THREE.ShaderMaterial({
    depthWrite:false,
    uniforms:{uText:{value:textTexture},uWord:{value:0},uAspect:{value:1},uTint:{value:new THREE.Color('#d4e3e3')},uDark:{value:0},uAlpha:{value:1}},
    vertexShader:'varying vec2 vUv; varying vec4 vClip; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);vClip=gl_Position;}',
    fragmentShader:`uniform sampler2D uText;uniform float uWord;uniform float uAspect;uniform vec3 uTint;uniform float uDark;uniform float uAlpha;varying vec2 vUv;varying vec4 vClip;
    void main(){vec3 col=mix(vec3(.78,.84,.83),vec3(.925,.932,.90),vUv.y);float blue=exp(-length((vUv-vec2(.8,.5))*vec2(1.2,1.))*3.);col=mix(col,uTint,blue*.25);float warm=exp(-length((vUv-vec2(.1,.25))*vec2(2.,2.))*3.);col=mix(col,vec3(.91,.79,.69),warm*.17);float halo=exp(-length((vUv-vec2(.58,.52))*vec2(1.15,1.))*4.);vec3 night=mix(vec3(.012,.016,.022),vec3(.09,.106,.12),halo*.85);col=mix(col,night,uDark);
    vec2 screenUv=vClip.xy/vClip.w*.5+.5;
    float textWidth=${WORDMARK_VIEWPORT_WIDTH.toFixed(4)};float textHeight=uAspect*textWidth*${(WORDMARK_HEIGHT/WORDMARK_WIDTH).toFixed(4)};
    vec2 tuv=(screenUv-vec2(.5))/vec2(textWidth,textHeight)+vec2(.5);
    if(tuv.x>0.&&tuv.x<1.&&tuv.y>0.&&tuv.y<1.)col=mix(col,mix(vec3(.065,.125,.125),vec3(.17,.19,.21),uDark),texture2D(uText,tuv).a*uWord*mix(.88,.42,uDark));gl_FragColor=vec4(col*uAlpha,uAlpha);}`
  });
  const backdrop=new THREE.Mesh(new THREE.PlaneGeometry(1,1),backdropMaterial);backdrop.position.z=-12;backdrop.renderOrder=-10;scene.add(backdrop);
  let foregroundScene=0;
  // Retain the dark backdrop in the refraction buffer but leave final canvas
  // pixels transparent. This avoids Three's white clear in its alpha pass.
  backdrop.onBeforeRender=()=>{backdropMaterial.uniforms.uAlpha.value=!renderer.getRenderTarget()?1-foregroundScene:1;};
  document.querySelector('.wordmark').style.display='none';

  const root = new THREE.Group(); scene.add(root);
  const creature = new THREE.Group(); root.add(creature);
  const shell = animateMaterial(new THREE.MeshPhysicalMaterial({
    color:0xe0f1ed,metalness:0,roughness:.075,transmission:mobile?.85:.96,
    thickness:.65,ior:1.38,clearcoat:1,clearcoatRoughness:.04,
    iridescence:.40,iridescenceIOR:1.32,iridescenceThicknessRange:[200,410],
    attenuationColor:0x4e9298,attenuationDistance:2.8,envMapIntensity:1.3,side:THREE.DoubleSide
  }));
  const dorsal=animateMaterial(shell.clone()),ventral=animateMaterial(shell.clone());
  dorsal.vertexColors=ventral.vertexColors=true;
  dorsal.color.set('#eef3ef');dorsal.transmission=.91;dorsal.thickness=.44;dorsal.roughness=.095;
  ventral.color.set('#f5f3e8');ventral.transmission=.64;ventral.thickness=.34;ventral.roughness=.13;
  const wingMesh=new THREE.Mesh(mantaMembrane(mobile?80:144,mobile?36:64),[dorsal,ventral]);
  wingMesh.name='manta-anatomical-disc';creature.add(wingMesh);
  const detailMaterials={
    back:dorsal,belly:ventral,
    rim:animateMaterial(new THREE.MeshPhysicalMaterial({color:'#a0c6c9',roughness:.12,transmission:.7,thickness:.1,ior:1.37,clearcoat:.7})),
    interior:animateMaterial(new THREE.MeshPhysicalMaterial({color:'#183840',roughness:.27,transmission:.12,thickness:.12,side:THREE.DoubleSide})),
    fold:animateMaterial(new THREE.MeshPhysicalMaterial({color:'#779fa4',roughness:.28,transmission:.35,thickness:.06})),
    eye:animateMaterial(new THREE.MeshPhysicalMaterial({color:'#102a32',roughness:.065,metalness:.05,clearcoat:1})),
    gill:animateMaterial(new THREE.MeshPhysicalMaterial({color:'#25414a',roughness:.36,side:THREE.FrontSide}))
  };
  for(const part of mergeMantaDetails(mantaDetails({mobile}))){
    const mesh=new THREE.Mesh(part.geometry,detailMaterials[part.material]);mesh.name=part.name;creature.add(mesh);
  }

  // Fine anatomical rays inside the membrane, plus a luminous outer edge.
  const rayMat = new THREE.LineBasicMaterial({color:0x518d9d,transparent:true,opacity:.045,depthWrite:false});
  const pearlMat = new THREE.LineBasicMaterial({color:0xf9f2d8,transparent:true,opacity:.20,depthWrite:false});
  const lines=[];
  for(let sign of [-1,1]) for(let k=1;k<=26;k++){
    const a=k/27, points=[];
    for(let j=0;j<=36;j++){
      const t=j/36;
      const u=sign*(.07*(1-t)+a*t);
      const v=mix(.30, .20+a*.78, t);
      const p=point(u,v,1);p.z-=.014;points.push(p);
    }
    const geo=new THREE.BufferGeometry().setFromPoints(points),line=new THREE.Line(geo,rayMat);creature.add(line);lines.push({line,base:geo.attributes.position.array.slice()});
  }
  for(let boundary of [0,1]){
    const points=[];for(let i=0;i<=180;i++)points.push(point(i/90-1,boundary,1));
    const geo=new THREE.BufferGeometry().setFromPoints(points),line=new THREE.Line(geo,pearlMat);creature.add(line);lines.push({line,base:geo.attributes.position.array.slice()});
  }
  const tailRig=createMantaTail({mobile}),tailMaterial=shell.clone();
  // Already deformed once on the CPU: no second wing shader on the tail.
  tailMaterial.onBeforeCompile=()=>{};tailMaterial.customProgramCacheKey=()=> 'okarar-tail-attached';
  const tail=new THREE.Mesh(tailRig.geometry,tailMaterial);tail.name='manta-attached-tail';creature.add(tail);
  // Keep every manta surface through the entrance and into the oral cavity.
  // Far behind the scene outside this single attack: no effect on normal swim.
  const swallowPlane=new THREE.Plane(new THREE.Vector3(0,0,1),10000);
  root.traverse(part=>{if(part.material)for(const mat of Array.isArray(part.material)?part.material:[part.material])mat.clippingPlanes=[swallowPlane];});

  const shark=createShark({mobile});scene.add(shark.group);
  let attackAnchor=null,entryOffset=null,sharkWarmupPending=false;

  const ringGroup=new THREE.Group();scene.add(ringGroup);
  const rings=[];
  for(let i=0;i<3;i++){
    const ring=new THREE.Mesh(new THREE.TorusGeometry(3.4+i*.55,.015,8,150),new THREE.MeshPhysicalMaterial({color:0x9bb5b4,metalness:.55,roughness:.25,transparent:true,opacity:.30,depthWrite:false}));
    ring.rotation.set(.65+i*.45,.45+i*.18,-.2+i*.1);ring.position.z=-1.5-i*.4;ringGroup.add(ring);rings.push(ring);
  }
  const dustGeo=new THREE.BufferGeometry(),dustPositions=[];
  let seed=72;const rand=()=>{seed=(seed*16807)%2147483647;return(seed-1)/2147483646;};
  for(let i=0;i<(mobile?55:140);i++)dustPositions.push((rand()-.5)*22,(rand()-.5)*15,(rand()-.5)*12);
  dustGeo.setAttribute('position',new THREE.Float32BufferAttribute(dustPositions,3));
  const dust=new THREE.Points(dustGeo,new THREE.PointsMaterial({color:0x517b87,size:.018,transparent:true,opacity:.5,sizeAttenuation:true}));scene.add(dust);
  const shards=[];
  const shardMat=new THREE.MeshPhysicalMaterial({color:0xe1f0ec,metalness:.2,roughness:.06,transmission:mobile?0:.88,thickness:.18,ior:1.45,clearcoat:1});
  for(let i=0;i<(mobile?9:20);i++){
    const shard=new THREE.Mesh(new THREE.OctahedronGeometry(.10+rand()*.15,0),shardMat);shard.scale.set(.55+rand(),1.5+rand(),.38);const a=rand()*Math.PI*2;const r=3.5+rand()*3.3;
    shard.userData={a,r,z:(rand()-.5)*4,speed:.025+rand()*.04,scale:shard.scale.clone()};shard.rotation.set(rand()*3,rand()*3,rand()*3);scene.add(shard);shards.push(shard);
  }
  let isLight=mobile, amplitude=.6, transparency=.75, color='pearl';
  const captureQuality=new CaptureQuality(mobile);
  const palettes={pearl:[0xe0f1ed,0x4e9298,0x8eb7b5,0x518d9d,'#d4e3e3'],iris:[0xeee0fb,0x9278bf,0xa298c5,0x8a659f,'#dfd4e7'],ember:[0xffe7d3,0xb57541,0xc19b7c,0xa97858,'#e7d7c9']};
  function setColor(name){color=name;const p=palettes[name];shell.color.setHex(p[0]);shell.attenuationColor.setHex(p[1]);dorsal.color.setHex(p[0]);ventral.color.setHex(p[0]);rayMat.color.setHex(p[3]);backdropMaterial.uniforms.uTint.value.set(p[4]);shark.setColor(name);}
  function applyQualityAppearance(value){if(value===null)return;shell.transmission=value?.78:mix(.75,.99,transparency);dorsal.transmission=value?.81:.91;ventral.transmission=value?.60:.64;shardMat.transmission=value?0:.88;shards.forEach((s,i)=>s.visible=!value||i<7);shark.setLight(value);}
  function setLight(value){isLight=value;renderer.setPixelRatio(Math.min(devicePixelRatio,value?1:1.65));applyQualityAppearance(captureQuality.request(value));}
  function resize(){const w=innerWidth,h=innerHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();backdropMaterial.uniforms.uAspect.value=w/h;}
  resize();
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();onFallback();});
  canvas.addEventListener('webglcontextrestored',()=>location.reload());

  const idlePosition=new THREE.Vector3(),idleQuaternion=new THREE.Quaternion(),euler=new THREE.Euler();
  const facingMatrix=new THREE.Matrix4(),up=new THREE.Vector3(0,1,0),xAxis=new THREE.Vector3(1,0,0);
  const axisCorrection=new THREE.Quaternion().setFromAxisAngle(up,-Math.PI/2);
  const flourishRotation=new THREE.Quaternion(),flourishEuler=new THREE.Euler();
  // Tail sway remains inside this padded rest envelope. It is measured once,
  // not by visiting thousands of vertices on the attack's first frame.
  const captureBounds=new THREE.Box3().setFromObject(creature).expandByVector(new THREE.Vector3(.45,.02,.18));
  const mantaCapture=new MantaCapture(captureBounds);
  const arrival=new SharkArrival();
  const transit=new SharkTransit();
  const response=new MantaResponse();
  const cueTrace=[];
  let passTrace=null,navigationTrace=null;
  let passTrack=null,lastPassChapter=-1,impactTime=null;
  function facing(direction,bank=0){
    const q=new THREE.Quaternion().setFromRotationMatrix(facingMatrix.lookAt(direction,new THREE.Vector3(),up)).multiply(axisCorrection);
    return q.multiply(new THREE.Quaternion().setFromAxisAngle(xAxis,bank));
  }
  function render({time,phase,sharkPhase=phase,dt=1/60,position,targetPosition=position,redirecting=false,displayChapter=0,entered,pointer,pulse,energy,reduced,paused=false,takeover={active:false,progress:0,dark:0,swallowed:0,returning:0},pass=null,flourish=null,audioPosition=null}){
    const debug=canvas.hasAttribute('data-rhythm-debug'),renderStart=debug?performance.now():0;
    const rawEnergy=energy;energy=response.update(energy,dt,reduced||paused);
    const small=innerWidth<=800;
    const p=mantaJourneyPose(position,{small,entered,aspect:camera.aspect});
    const swimPose={...p};
    const {active,progress,dark,returning=0}=takeover;
    const firstAttack=active&&progress<1;
    const engulf=engulfPose(progress,returning);
    // Match the actual blackout, not a guessed depth or a timer. A quality
    // switch cannot whiten the disc, tail or details while they are visible.
    applyQualityAppearance(captureQuality.update({active,progress,veil:engulf.veil}));
    uniforms.uCapture.value=firstAttack?smoother(.15,.32,progress):0;
    swallowPlane.constant=10000;
    if(active&&!attackAnchor)attackAnchor={...p};
    if(active&&progress<1)Object.assign(p,attackAnchor);
    if(active)p.z=mix(p.z,small?16:11.8,smooth(.72,1,progress));
    backdropMaterial.uniforms.uDark.value=dark;
    // Reflection maps cannot crossfade like the lights. Switch them only
    // inside the fully covered part of the bite, never in a visible frame.
    scene.environment=active&&progress>=NIGHT_ENVIRONMENT_AT?nightTarget.texture:envTarget.texture;
    ambient.intensity=mix(1.8,.7,dark);key.intensity=mix(3.2,4.6,dark);rim.intensity=mix(2.4,4.2,dark);
    key.color.setRGB(mix(1,.90,dark),mix(.85,.95,dark),mix(.76,1,dark));
    renderer.toneMappingExposure=mix(1.08,.92,dark);
    camera.position.set(pointer.x*(reduced?0:.22),pointer.y*(reduced?0:.14),p.z);camera.lookAt(0,0,0);
    camera.updateMatrixWorld();
    foregroundScene=active?backgroundHandoff(progress):0;
    const wordmark=document.querySelector('.wordmark');wordmark.style.display=foregroundScene>0?'':'none';
    const bgHeight=2*Math.tan(THREE.MathUtils.degToRad(17.5))*(p.z+12)*1.12;backdrop.scale.set(bgHeight*camera.aspect,bgHeight,1);
    root.position.set(swimPose.x,swimPose.y+(reduced?0:-Math.cos(phase)*.08),0);
    creature.quaternion.copy(swimPose.q).multiply(flourishRotation.setFromEuler(flourishEuler.set(pointer.y*.1,pointer.x*.14,0)));
    creature.scale.setScalar(swimPose.s*(1+pulse*.018+energy*.022));
    root.visible=mantaVisibleDuringCapture({active,progress,veil:engulf.veil});
    if(root.visible&&flourish){
      // Keep the full live pose, including a turn already in flight, before
      // blending it into the mouth. No forced return on the snare.
      root.position.x+=flourish.x;root.position.y+=flourish.y;root.position.z+=flourish.z;
      flourishRotation.setFromEuler(flourishEuler.set(flourish.rx,flourish.ry,flourish.rz));
      creature.quaternion.multiply(flourishRotation);
      creature.scale.multiplyScalar(flourish.scale);
    }
    if(active){
      const attackScale=small?1.08:1.38;
      const halfWidth=Math.tan(Math.PI*35/360)*p.z*camera.aspect;
      const baseScale=small?.78:1.28;
      const chapter=clamp(displayChapter,0,5);
      const side=halfWidth*(small?.87:.73);
      const idle=sharkIdlePose({chapter,small,halfWidth,time,reduced});
      const destination=transit.active||redirecting?clamp(Math.floor(targetPosition+.265),0,5):chapter;
      const destinationIdle=sharkIdlePose({chapter:destination,small,halfWidth,time,reduced});
      const connection={group:shark.group,idle:destinationIdle,chapter:destination,camera,bounds:shark.entryBounds,small,halfWidth,dt,instant:reduced&&!paused};
      idlePosition.copy(idle.v);idleQuaternion.copy(idle.q);
      shark.group.visible=true;
      // Both animals share the exact 50-cycle/min phase, including attacks.
      shark.animate({phase:sharkPhase,amplitude,jawOpen:firstAttack?engulf.jaw:REST_GAPE,engulf:firstAttack?engulf.engulf:0,dt,instant:reduced});
      if(progress<1){
        const {approach,surge,exit}=engulf;
        const aperture=shark.aperture();
        const nominalScale=mix(mix(attackScale,3.4,approach),4.3,surge);
        const jawPitch=Math.atan2(-aperture.normal.y,aperture.normal.x);
        shark.group.quaternion.setFromEuler(euler.set(0,-Math.PI/2-.38*(1-approach),jawPitch));
        const scale=mantaCapture.mouthScale(nominalScale,creature.scale.x,progress,aperture,shark.group.quaternion);
        const tanHalfFov=Math.tan(Math.PI*35/360);
        // At peak size the open jaw exceeds both viewport axes, including
        // portrait screens. Aim from the mouth, not the model's body origin.
        const closeGap=Math.min(aperture.width*scale/(2*tanHalfFov*camera.aspect),aperture.height*scale/(2*tanHalfFov))*.32;
        const mouthTarget=new THREE.Vector3(
          mix(attackAnchor.x+halfWidth*.60,attackAnchor.x,approach)*(1-surge),
          mix(attackAnchor.y+.22,0,surge),
          mix(mix(ENGULF_APPROACH_Z,ENGULF_READY_Z,approach),p.z-Math.max(.40,closeGap),surge));
        if(!entryOffset){
          const startMouth=new THREE.Vector3(attackAnchor.x+halfWidth*.60,attackAnchor.y+.22,ENGULF_APPROACH_Z);
          const startRotation=new THREE.Quaternion().setFromEuler(new THREE.Euler(0,-Math.PI/2-.38,jawPitch));
          entryOffset=offscreenEntryOffset(camera,shark.entryBounds,aperture.center,startMouth,startRotation,attackScale);
        }
        mouthTarget.addScaledVector(entryOffset,entryWeight(progress));
        shark.group.scale.setScalar(scale);
        shark.group.position.copy(mouthTarget).sub(aperture.center.clone().multiplyScalar(scale).applyQuaternion(shark.group.quaternion));
        const forward=aperture.normal.clone().applyQuaternion(shark.group.quaternion);
        const captured=mantaCapture.apply(root,creature,progress,{aperture,rotation:shark.group.quaternion,scale,center:mouthTarget,fold:uniforms.uCapture.value,flow:amplitude,pulse:pulse+energy*.3});
        if(captured?.retreat){
          mouthTarget.addScaledVector(forward,-captured.retreat);
          shark.group.position.addScaledVector(forward,-captured.retreat);
        }
        const throatDepth=placeThroatPlane(swallowPlane,mouthTarget,forward,aperture.width,scale,captured?.deepest??0);
        if(debug)canvas.dataset.throatDepth=String(throatDepth);
        if(debug)canvas.dataset.captureFit=JSON.stringify({scale:creature.scale.x,position:root.position.toArray(),fold:uniforms.uCapture.value,depth:captured?.depth??0,recession:captured?.recession??0,mouth:mouthTarget.toArray()});
        // Leave via the old attack endpoint beneath the brief mouth blackout.
        // The destination-specific return starts from this same covered pose.
        shark.group.position.lerp(new THREE.Vector3(-halfWidth-9,attackAnchor.y+.39,-5),exit);
        shark.group.quaternion.slerp(new THREE.Quaternion().setFromEuler(euler.set(...ENGULF_EXIT_ROTATION)),exit);
        shark.group.scale.setScalar(mix(scale,attackScale,exit));
      }else if(!arrival.complete){
        const pose=arrival.update({returning,chapter,halfWidth,small,anchorY:attackAnchor.y,idle,dt,instant:reduced});
        shark.group.position.copy(pose.v);shark.group.quaternion.copy(pose.q);shark.group.scale.setScalar(pose.s);
      }else if(transit.active){
        transit.update(connection);passTrack=null;lastPassChapter=-1;
      }else if(pass){
        if(passTrack?.id!==pass.id){
          const start=shark.group.position.clone(),startQ=shark.group.quaternion.clone();
          let points;
          if(pass.chapter===0)points=null; // Shared, geometry-tested overhead arc.
          else if(pass.chapter===1)points=[start,new THREE.Vector3(-halfWidth*.6,-.5,1),new THREE.Vector3(.1,.7,2.2),new THREE.Vector3(side,-.1,-1.8)];
          else if(pass.chapter===2)points=[start,new THREE.Vector3(0,1.1,2.2),new THREE.Vector3(-halfWidth*.7,2.5,4),new THREE.Vector3(-halfWidth-10,5,0)];
          else if(pass.chapter===3)points=[start,new THREE.Vector3(halfWidth*.5,-.6,1.5),instagramApproach({small,halfWidth}),instagramPose({small,halfWidth}).v];
          else points=[start,new THREE.Vector3(-.5,.8,1),new THREE.Vector3(.4,2,p.z-2),new THREE.Vector3(halfWidth+9,5,p.z+8)];
          passTrack={id:pass.id,chapter:pass.chapter,curve:pass.chapter===0?homeFlybyCurve(start,p.z):new THREE.CatmullRomCurve3(points),startQ,startScale:shark.group.scale.x};
          lastPassChapter=pass.chapter;
          if(debug&&(pass.chapter===0||pass.chapter===2))passTrace={started:time,rows:[]};
        }
        const t=smoother(0,1,pass.t),curve=passTrack.curve,bank=Math.sin(pass.t*Math.PI*2)*.17;
        shark.group.position.copy(curve.getPoint(t));
        const direction=curve.getTangent(t),q=facing(direction,bank);
        shark.group.quaternion.copy(passTrack.startQ).slerp(q,smoother(0,.20,pass.t));
        if(pass.chapter===1)shark.group.quaternion.slerp(new THREE.Quaternion().setFromEuler(euler.set(.06,3.50,-.08)),smoother(.77,1,pass.t));
        if(pass.chapter===3)shark.group.quaternion.slerp(new THREE.Quaternion().setFromEuler(euler.set(-.02,-.42,.12)),smoother(.77,1,pass.t));
        shark.group.scale.setScalar(mix(passTrack.startScale,baseScale*(pass.chapter===1?.89:1),smoother(0,.3,pass.t)));
        if(pass.chapter===3)shark.group.scale.setScalar(instagramPassScale(shark.group.scale.x,{small,halfWidth},pass.t));
        passTrack.progress=pass.t;
      }else{
        // A completed fly-by stays out of the way until the next chapter.
        const hold=passTrack?.progress===1&&lastPassChapter===destination&&position>=destination+.14;
        // Keep the handoff owned while paused (dt=0), so resuming continues
        // the glimpse instead of discarding its route and starting a transit.
        const musicExit=passTrack?.progress===1&&finishMusicExit({track:passTrack,chapter:destination,group:shark.group,camera,bounds:shark.entryBounds,idle:destinationIdle,dt,small});
        if(!hold&&!musicExit){
          const near=shark.group.position.distanceTo(destinationIdle.v)<.45&&shark.group.quaternion.angleTo(destinationIdle.q)<.22&&Math.abs(shark.group.scale.x-destinationIdle.s)<.08;
          if(near&&!reduced){
            const blend=1-Math.exp(-Math.max(0,dt)*2.5);
            shark.group.position.lerp(destinationIdle.v,blend);shark.group.quaternion.slerp(destinationIdle.q,blend);
            shark.group.scale.lerp(new THREE.Vector3(destinationIdle.s,destinationIdle.s,destinationIdle.s),blend);
          }else transit.update(connection);
          passTrack=null;lastPassChapter=-1;
        }
      }
      transit.observe(shark.group,dt);
      if(debug){
        if(transit.active&&!navigationTrace)navigationTrace={rows:[]};
        if(navigationTrace){
          navigationTrace.rows.push({time,dt,stage:transit.stage,destination,pass:pass?.chapter??null,v:shark.group.position.toArray(),q:shark.group.quaternion.toArray(),s:shark.group.scale.x,outside:outsideCamera(camera,shark.entryBounds,shark.group.position,shark.group.quaternion,shark.group.scale.x),relocations:transit.relocations});
          if(!transit.active||navigationTrace.rows.length>=1200){canvas.dataset.navigationTrace=JSON.stringify(navigationTrace.rows);navigationTrace=null;}
        }
      }
    }
    if(debug&&passTrace){
      if(time-passTrace.started<9&&passTrace.rows.length<600){
        passTrace.rows.push({time,position,chapter:displayChapter,pass:pass?.chapter??null,t:pass?.t??1,v:shark.group.position.toArray(),q:shark.group.quaternion.toArray(),s:shark.group.scale.x,outside:outsideCamera(camera,shark.entryBounds,shark.group.position,shark.group.quaternion,shark.group.scale.x),parked:!!passTrack?.parked,glide:passTrack?.musicGlide?passTrack.musicGlide.elapsed/passTrack.musicGlide.duration:null});
      }else{canvas.dataset.passTrace=JSON.stringify(passTrace.rows);passTrace=null;}
    }
    if(root.visible){
      uniforms.uPhase.value=phase;uniforms.uFlow.value=amplitude;uniforms.uPulse.value=pulse+energy*.3;
      for(const {line,base} of lines){const arr=line.geometry.attributes.position.array;for(let n=0;n<arr.length;n+=3){arr[n]=base[n]*(1-uniforms.uCapture.value*.52);arr[n+2]=base[n+2]+wingDisplacement(base[n],base[n+1],phase,amplitude,pulse+energy*.3,uniforms.uCapture.value);}line.geometry.attributes.position.needsUpdate=true;}
      tailRig.update({phase,flow:amplitude,capture:uniforms.uCapture.value});
      tailMaterial.color.copy(shell.color);tailMaterial.attenuationColor.copy(shell.attenuationColor);
      tailMaterial.transmission=shell.transmission;tailMaterial.roughness=shell.roughness;
    }
    ringGroup.rotation.z=time*.025;ringGroup.position.y=-.1;
    const ringVisible=(.12+Math.sin(clamp(position,0,5)/5*Math.PI)*.25)*entered*mix(1,.12,dark);
    rings.forEach((ring,n)=>{ring.material.opacity=ringVisible;ring.rotation.x=.7+n*.45+position*.22;ring.scale.setScalar(1+Math.sin(position*1.6+n)*.16);});
    dust.rotation.z=time*.012;dust.position.y=Math.sin(time*.12)*.25;dust.material.color.setHex(dark>.5?0x9ba8b0:0x517b87);dust.material.opacity=mix(.5,.28,dark);
    shards.forEach((shard,n)=>{const d=shard.userData;const theta=d.a+time*d.speed;shard.position.set(Math.cos(theta)*d.r,Math.sin(theta)*d.r*.7,d.z+Math.sin(position*.8+n)*.7);shard.rotation.x=time*d.speed+n;shard.rotation.y=time*d.speed*.6;const suck=active&&progress<.75?smooth(.30,.70,progress):0;if(suck){shard.position.x=mix(shard.position.x,attackAnchor.x,suck);shard.position.y=mix(shard.position.y,attackAnchor.y,suck);shard.position.z*=1-suck;}shard.scale.copy(d.scale).multiplyScalar(mix(1,.42,dark)*(1-suck*.96));});
    if(active&&progress>=1&&impactTime===null)impactTime=time;
    const impact=impactTime===null?0:smoother(0,.28,returning)*Math.exp(-Math.max(0,time-impactTime)*2.3);
    const title=1-clamp(position*1.8,0,1);backdropMaterial.uniforms.uWord.value=title*entered;wordmark.style.opacity=String(foregroundScene*title*entered*(.26+impact*.18));
    if(sharkWarmupPending&&!active){
      renderWithHiddenActor(renderer,scene,camera,shark.group);
      sharkWarmupPending=false;canvas.dataset.sharkPrepared='true';
    }else renderer.render(scene,camera);
    if(debug&&audioPosition!==null&&audioPosition>=17.7&&audioPosition<19.1&&cueTrace.length<120){
      cueTrace.push({audio:audioPosition,dt,renderMs:performance.now()-renderStart,progress,phase,rawEnergy,energy,pulse,scale:creature.scale.x,fold:uniforms.uCapture.value,camera:camera.position.toArray(),wing:wingDisplacement(3.15,.15,phase,amplitude,pulse+energy*.3,uniforms.uCapture.value),position:root.position.toArray(),rotation:creature.quaternion.toArray(),programs:renderer.info.programs.length});
    }else if(debug&&audioPosition>=19.1&&cueTrace.length&&!canvas.dataset.cueTrace){canvas.dataset.cueTrace=JSON.stringify(cueTrace);}
    canvas.dataset.renderer='webgl';canvas.dataset.chapter=String(Math.round(position));canvas.dataset.sharkModel=shark.model;
    canvas.dataset.creature=active&&progress>=.63?'shark':active?'attack':'manta';
    if(debug){
      canvas.dataset.mantaRetained=String(root.visible);
      canvas.dataset.captureQuality=JSON.stringify({requested:captureQuality.requested,applied:captureQuality.applied,locked:captureQuality.locked,disc:dorsal.transmission,belly:ventral.transmission,tail:tailMaterial.transmission});
      canvas.dataset.mantaPose=JSON.stringify({v:root.position.toArray(),q:creature.quaternion.toArray(),s:creature.scale.x});
      canvas.dataset.arrival=JSON.stringify({complete:arrival.complete,chapter:arrival.route?.chapter??null,u:arrival.route?Math.min(1,arrival.route.elapsed/arrival.route.duration):null,v:shark.group.position.toArray(),q:shark.group.quaternion.toArray(),s:shark.group.scale.x});
      canvas.dataset.transit=JSON.stringify({active:transit.active,stage:transit.stage,chapter:transit.chapter,relocations:transit.relocations});
      canvas.dataset.musicGlide=passTrack?.parked?'parked':passTrack?.musicGlide?'glide':'idle';
      canvas.dataset.musicGlideProgress=String(passTrack?.musicGlide?passTrack.musicGlide.elapsed/passTrack.musicGlide.duration:0);
    }
    if(canvas.hasAttribute('data-rhythm-debug')){canvas.dataset.flapBpm=String(FLAP_BPM);canvas.dataset.flapPhase=String(phase);canvas.dataset.sharkPhase=String(sharkPhase);canvas.dataset.jaw=String(shark.jawOpen);canvas.dataset.dark=String(dark);canvas.dataset.sharkX=String(shark.group.position.x);canvas.dataset.sharkEntryWeight=String(firstAttack?entryWeight(progress):0);}
    const mouth=shark.mouth(camera,innerWidth,innerHeight);
    // When an animal swims behind the camera, projection flips. Keep the
    // original aspiration aimed at the last visible edge, never at infinity.
    mouth.x=clamp(mouth.x,-innerWidth*.5,innerWidth*1.5);mouth.y=clamp(mouth.y,-innerHeight*.5,innerHeight*1.5);
    return {mouth,engulfVeil:active?engulf.veil:0};
  }
  // Prepare the hidden shark during the intro, not on its first attack frame.
  const ready=shark.ready.then(()=>renderer.compileAsync(shark.group,camera,scene)).then(()=>{sharkWarmupPending=true;});
  return {render,resize,setColor,setLight,ready,get arrivalReady(){return arrival.complete;},get navigationBusy(){return transit.active;},setAmplitude:v=>{amplitude=v;},setTransparency:v=>{transparency=v;shell.transmission=isLight?mix(.3,.75,v):mix(.5,.99,v);shell.roughness=mix(.2,.045,v);dorsal.transmission=mix(.45,.92,v);ventral.transmission=mix(.38,.84,v);shark.setFinish(v);},get light(){return isLight;},renderer};
}
