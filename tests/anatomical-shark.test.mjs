import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {source} from './import-source.mjs';
const {createAnatomicalRig}=await source('anatomical-shark.js');
const input=await readFile(new URL('../assets/shark-anatomical.glb',import.meta.url));
const n=input.readUInt32LE(12),j=JSON.parse(input.toString('utf8',20,20+n));
// Node has no image decoder. Keep the real mesh, skin weights and animation;
// browser QA covers the actual texture/material decoding and rendered result.
j.images=[];j.textures=[];j.materials=[{pbrMetallicRoughness:{}}];
const json=Buffer.from(JSON.stringify(j)),p=Buffer.concat([json,Buffer.alloc((4-json.length%4)%4,32)]),b=input.subarray(28+n),h=Buffer.alloc(28);
h.writeUInt32LE(0x46546c67);h.writeUInt32LE(2,4);h.writeUInt32LE(28+p.length+b.length,8);h.writeUInt32LE(p.length,12);h.writeUInt32LE(0x4e4f534a,16);h.writeUInt32LE(b.length,20);h.writeUInt32LE(0x004e4942,24);
const packed=Buffer.concat([h.subarray(0,20),p,h.subarray(20),b]);
const gltf=await new GLTFLoader().parseAsync(packed.buffer.slice(packed.byteOffset,packed.byteOffset+packed.byteLength),'');
const rig=createAnatomicalRig(gltf);
const camera=new THREE.PerspectiveCamera(35,1280/720,.1,100);camera.position.z=11.8;camera.lookAt(0,0,0);camera.updateMatrixWorld();rig.group.rotation.y=-Math.PI/2;
test('credited anatomical asset has articulated head, jaw, eyes and caudal fin',()=>{
  assert.match(j.asset.copyright,/CC BY 4.0/);
  for(const name of ['Head5','Jaw6','Upper_Teeth12','L_Eye7','R_Eye8','Spine719'])assert.ok(rig.group.getObjectByName(name),name);
  let vertices=0;rig.group.traverse(o=>{if(o.isMesh){vertices+=o.geometry.attributes.position.count;assert.ok(o.isSkinnedMesh);assert.ok(o.material.transmission>.9);}});assert.ok(vertices>25000);
});
test('anatomical rig repeats the same pose at 50 cycles/min without drift',()=>{
  rig.animate({phase:.4,instant:true});const a=rig.localMouth().clone();
  rig.animate({phase:.4+2*Math.PI,instant:true});assert.ok(a.distanceTo(rig.localMouth())<1e-6);
});
test('only facial pose blends for eating; no throat orb and resting gape remains',()=>{
  rig.animate({phase:1,jawOpen:.13,instant:true});const q=rig.group.getObjectByName('Jaw6').quaternion.clone();
  rig.animate({phase:1,jawOpen:1,instant:true});assert.ok(q.angleTo(rig.group.getObjectByName('Jaw6').quaternion)>.2);
  assert.ok(Object.values(rig.mouth(camera,1280,720)).every(Number.isFinite));
  rig.animate({phase:1,jawOpen:0,instant:true});assert.equal(rig.jawOpen,.13);assert.equal(rig.group.getObjectByName('throat'),undefined);
});
test('screen-engulf jaw opens wider, then restores the exact normal swimming pose',()=>{
  rig.animate({phase:1,jawOpen:1,instant:true});const normal=rig.group.getObjectByName('Jaw6').quaternion.clone();
  rig.animate({phase:1,jawOpen:1,engulf:1,instant:true});assert.ok(normal.angleTo(rig.group.getObjectByName('Jaw6').quaternion)>.15);
  const opening=rig.aperture();assert.ok(opening.height>.3);assert.ok(opening.width>0);
  assert.ok(Math.abs(opening.normal.length()-1)<1e-9);assert.ok(opening.center.toArray().every(Number.isFinite));
  rig.animate({phase:1,jawOpen:1,engulf:0,instant:true});assert.ok(normal.angleTo(rig.group.getObjectByName('Jaw6').quaternion)<1e-7);
});
test('screen-engulf expression is stable when the music phase is repeated',()=>{
  rig.animate({phase:.8,jawOpen:1,engulf:1,instant:true});
  const q=rig.group.getObjectByName('Jaw6').quaternion.clone(),center=rig.aperture().center;
  for(let i=0;i<20;i++)rig.animate({phase:.8,jawOpen:1,engulf:1,instant:true});
  assert.ok(q.angleTo(rig.group.getObjectByName('Jaw6').quaternion)<1e-7);
  assert.ok(center.distanceTo(rig.aperture().center)<1e-6);
});
test('capture fits inside the moving anatomical opening with space for both tooth rows',async()=>{
  const {captureEnvelope,fitMantaToAperture}=await source('manta-capture.js');
  const bounds=new THREE.Box3(new THREE.Vector3(-3.8,-4.4,-.55),new THREE.Vector3(3.8,1.9,.85));
  for(const phase of [0,.5,1.7,3,4.7,6])for(const baseScale of [.595,.7,1,1.3,1.55]){
    rig.animate({phase,jawOpen:1,engulf:1,amplitude:1,instant:true});
    const aperture=rig.aperture(),q=new THREE.Quaternion().setFromEuler(new THREE.Euler(0,-Math.PI/2,.3));
    const points=captureEnvelope(bounds,{fold:1,flow:1,pulse:1,rotation:new THREE.Quaternion().setFromEuler(new THREE.Euler(-1.13,0,0))});
    const fit=fitMantaToAperture(points,{aperture,rotation:q,scale:3.4},baseScale);
    const down=aperture.lower.clone().sub(aperture.upper).normalize();
    for(const point of points){
      const local=point.clone().multiplyScalar(fit.scale).add(fit.offset).applyQuaternion(q.clone().invert()).divideScalar(3.4).add(aperture.center);
      const gap=local.clone().sub(aperture.upper).dot(down)/aperture.height;
      assert.ok(gap>=.099999&&gap<=.700001,'the complete folded envelope clears both tooth anchors');
      assert.ok(Math.abs(local.z-aperture.center.z)<=aperture.width*.360001);
    }
  }
});
test('the overtaking jaws retain dental clearance across all six chapters and both layouts',async()=>{
  const {MantaCapture,captureEnvelope}=await source('manta-capture.js');
  const {engulfPose,ENGULF_APPROACH_Z,ENGULF_READY_Z}=await source('engulf.js'),{smoother}=await source('motion.js');
  const {mantaJourneyPose,MANTA_POSES}=await source('manta-journey.js');
  const bounds=new THREE.Box3(new THREE.Vector3(-3.8,-4.4,-.55),new THREE.Vector3(3.8,1.9,.85));
  for(const small of [false,true])for(const chapter of MANTA_POSES.keys()){
    const {x,y,z,s,q}=mantaJourneyPose(chapter,{small}),aspect=small?390/844:1280/720;
    const root=new THREE.Group(),manta=new THREE.Group(),capture=new MantaCapture(bounds);
    let lastMouthZ=null;
    for(let frame=0;frame<=124;frame++){
      const progress=frame/180,phase=(18.1+progress*3)/1.2*Math.PI*2,{approach,surge,jaw,engulf}=engulfPose(progress);
      rig.animate({phase,jawOpen:jaw,engulf,amplitude:1,dt:1/60});
      const aperture=rig.aperture(),nominal=THREE.MathUtils.lerp(THREE.MathUtils.lerp(small?1.08:1.38,3.4,approach),4.3,surge);
      const rotation=new THREE.Quaternion().setFromEuler(new THREE.Euler(0,-Math.PI/2-.38*(1-approach),Math.atan2(-aperture.normal.y,aperture.normal.x)));
      const scale=capture.mouthScale(nominal,s*1.1,progress,aperture,rotation);
      const tan=Math.tan(35*Math.PI/360),halfWidth=tan*z*aspect,closeGap=Math.min(aperture.width*scale/(2*tan*aspect),aperture.height*scale/(2*tan))*.32;
      const center=new THREE.Vector3((x+halfWidth*.60*(1-approach))*(1-surge),(y+.22)*(1-surge),THREE.MathUtils.lerp(THREE.MathUtils.lerp(ENGULF_APPROACH_Z,ENGULF_READY_Z,approach),z-Math.max(.4,closeGap),surge));
      const fold=smoother(.15,.32,progress),forward=aperture.normal.clone().applyQuaternion(rotation);
      root.position.set(x,y-Math.cos(phase)*.08,0);manta.quaternion.copy(q);manta.scale.setScalar(s*1.1);
      const captured=capture.apply(root,manta,progress,{aperture,rotation,scale,center,fold,flow:1,pulse:1});
      assert.ok(manta.scale.x>=s*1.1*.919999,'the ray must not be miniaturised');
      if(captured)center.addScaledVector(forward,-captured.retreat);
      if(lastMouthZ!==null)assert.ok(center.z>=lastMouthZ-1e-6,`chapter ${chapter}, mobile ${small}, p ${progress}: predator must keep advancing (${lastMouthZ} → ${center.z}, scale ${scale})`);
      lastMouthZ=center.z;
      if(progress<.20)continue; // entry is still outside the camera and not aimed at the prey.
      const points=captureEnvelope(bounds,{fold,flow:1,pulse:1,rotation:manta.quaternion}).map(p=>p.multiplyScalar(manta.scale.x).add(root.position).sub(center));
      // If the dental plane intersects the envelope, the entire transverse
      // envelope must already clear the tooth anchors with a visible margin.
      if(Math.min(...points.map(p=>p.dot(forward)))>.08)continue;
      const down=aperture.lower.clone().sub(aperture.upper).normalize(),inverse=rotation.clone().invert();
      for(const point of points){
        const local=point.applyQuaternion(inverse).divideScalar(scale).add(aperture.center),gap=local.clone().sub(aperture.upper).dot(down)/aperture.height;
        assert.ok(gap>.05&&gap<.78,`chapter ${chapter}, mobile ${small}, p ${progress}: vertical margin ${gap}`);
        assert.ok(Math.abs(local.z-aperture.center.z)<aperture.width*.40,`chapter ${chapter}, mobile ${small}, p ${progress}: lateral margin`);
      }
    }
  }
});
test('padded entry bounds contain the real skinned shark throughout its initial swim phases',async()=>{
  const {measureEntryBounds}=await source('shark-entry.js');
  rig.group.quaternion.identity();rig.animate({phase:0,jawOpen:.13,amplitude:.6,instant:true});
  const bounds=measureEntryBounds(rig.group),point=new THREE.Vector3();
  assert.ok(bounds.getSize(new THREE.Vector3()).x>6.49,'the envelope must cover the full-length shark, not stale skin bind transforms');
  for(const phase of [0,Math.PI/2,Math.PI,Math.PI*1.5]){
    rig.animate({phase,jawOpen:.13,amplitude:1,instant:true});
    // Match WebGLRenderer's update, which refreshes SkinnedMesh bind inverses.
    // updateWorldMatrix alone does not dispatch that overridden method.
    rig.group.updateMatrixWorld(true);
    const inverse=rig.group.matrixWorld.clone().invert();
    rig.group.traverse(mesh=>{
      if(!mesh.isMesh)return;
      for(let i=0;i<mesh.geometry.attributes.position.count;i++){
        mesh.getVertexPosition(i,point).applyMatrix4(mesh.matrixWorld).applyMatrix4(inverse);
        assert.ok(bounds.containsPoint(point),'fin/tail remain inside the entry envelope');
      }
    });
  }
});
test('Instagram mobile framing keeps the entire swimming shark inside narrow and tall viewports',async()=>{
  const {sharkIdlePose}=await source('shark-arrival.js'),point=new THREE.Vector3();
  for(const [width,height] of [[319,1120],[320,740],[390,844],[430,932],[768,1024]]){
    const view=new THREE.PerspectiveCamera(35,width/height,.1,100),halfWidth=Math.tan(35*Math.PI/360)*16*width/height;
    for(const time of [0,5,10])for(const phase of [0,Math.PI/2,Math.PI,Math.PI*1.5]){
      const pose=sharkIdlePose({chapter:4,small:true,halfWidth,time});
      view.position.set(Math.sin(time)*.22,Math.cos(time)*.14,16);view.lookAt(0,0,0);view.updateMatrixWorld();
      rig.group.position.copy(pose.v);rig.group.quaternion.copy(pose.q);rig.group.scale.setScalar(pose.s);
      rig.animate({phase,jawOpen:.13,amplitude:1,instant:true});rig.group.updateMatrixWorld(true);
      let min=Infinity,max=-Infinity;
      rig.group.traverse(mesh=>{
        if(!mesh.isMesh)return;
        for(let i=0;i<mesh.geometry.attributes.position.count;i++){
          mesh.getVertexPosition(i,point).applyMatrix4(mesh.matrixWorld).project(view);min=Math.min(min,point.x);max=Math.max(max,point.x);
        }
      });
      assert.ok(min>-.98&&max<.98,`${width}x${height}: ${min}..${max}`);
      assert.ok(max-min>.7,'the framed shark stays large enough to read');
    }
  }
});
test('the former Instagram reverse-scroll removal point still contains visible shark vertices',async()=>{
  const {measureEntryBounds}=await source('shark-entry.js'),{outsideCamera}=await source('music-exit.js');
  rig.group.position.set(0,0,0);rig.group.quaternion.identity();rig.group.scale.setScalar(1);
  rig.animate({phase:0,jawOpen:.13,amplitude:.6,instant:true});
  const bounds=measureEntryBounds(rig.group),view=new THREE.PerspectiveCamera(35,1424/1120,.1,100);
  view.position.z=11.8;view.lookAt(0,0,0);view.updateMatrixWorld();
  // Last pre-relocation pose recorded in the browser before the correction.
  rig.group.position.set(5.664565514765023,1.0968417800341932,3.637217044049293);
  rig.group.quaternion.set(-.017536200346823707,-.2167728156433908,.07870327123684834,.9728863362037992);
  rig.group.scale.setScalar(1.152);
  assert.equal(outsideCamera(view,bounds,rig.group.position,rig.group.quaternion,1.152),false);
  rig.animate({phase:1.3,jawOpen:.13,amplitude:.6,instant:true});rig.group.updateMatrixWorld(true);
  const frustum=new THREE.Frustum().setFromProjectionMatrix(new THREE.Matrix4().multiplyMatrices(view.projectionMatrix,view.matrixWorldInverse));
  const point=new THREE.Vector3();let visible=0;
  rig.group.traverse(mesh=>{
    if(!mesh.isMesh)return;
    for(let i=0;i<mesh.geometry.attributes.position.count;i++){
      mesh.getVertexPosition(i,point).applyMatrix4(mesh.matrixWorld);
      if(frustum.containsPoint(point))visible++;
    }
  });
  assert.ok(visible>0,'this was an early removal, not merely a conservative bounding-box overlap');
});
test('reverse-scroll relocation waits for the real animated tail and fins to leave on every layout',async()=>{
  const {measureEntryBounds}=await source('shark-entry.js'),{SharkTransit}=await source('shark-transit.js');
  const {sharkIdlePose}=await source('shark-arrival.js');
  rig.group.position.set(0,0,0);rig.group.quaternion.identity();rig.group.scale.setScalar(1);
  rig.animate({phase:0,jawOpen:.13,amplitude:.6,instant:true});
  const bounds=measureEntryBounds(rig.group),point=new THREE.Vector3();
  for(const [w,h] of [[1424,1120],[1777,1119],[3440,1440],[390,844],[319,1120]])for(const fps of [30,60]){
    const small=w<=800,view=new THREE.PerspectiveCamera(35,w/h,.1,100);
    view.position.set(.22,-.14,small?16:11.8);view.lookAt(0,0,0);view.updateMatrixWorld();
    const halfWidth=Math.tan(35*Math.PI/360)*view.position.z*w/h,group=new THREE.Group();
    const pose=sharkIdlePose({small,halfWidth,chapter:4,time:2});
    group.position.copy(pose.v);group.quaternion.copy(pose.q);group.scale.setScalar(pose.s);
    const transit=new SharkTransit();let relocated=false;
    const frustum=new THREE.Frustum().setFromProjectionMatrix(new THREE.Matrix4().multiplyMatrices(view.projectionMatrix,view.matrixWorldInverse));
    for(let frame=0;frame<fps*10;frame++){
      const time=2+frame/fps,before={v:group.position.clone(),q:group.quaternion.clone(),s:group.scale.x};
      transit.update({group,idle:sharkIdlePose({small,halfWidth,chapter:3,time}),chapter:3,camera:view,bounds,small,halfWidth,dt:1/fps});
      transit.observe(group,1/fps);
      if(!transit.relocations)continue;
      // Check the actual skin at several swim phases, independently of the
      // conservative box used to decide when a hidden relocation is safe.
      for(const phase of [0,Math.PI/2,Math.PI,Math.PI*1.5]){
        rig.group.position.copy(before.v);rig.group.quaternion.copy(before.q);rig.group.scale.setScalar(before.s);
        rig.animate({phase,jawOpen:.13,amplitude:1,instant:true});rig.group.updateMatrixWorld(true);
        rig.group.traverse(mesh=>{
          if(!mesh.isMesh)return;
          for(let i=0;i<mesh.geometry.attributes.position.count;i++){
            mesh.getVertexPosition(i,point).applyMatrix4(mesh.matrixWorld);
            assert.equal(frustum.containsPoint(point),false,`${w}x${h}, ${fps} fps: no visible vertex may disappear`);
          }
        });
      }
      relocated=true;break;
    }
    assert.equal(relocated,true,'the complete body clears within ten seconds');
  }
});
test('the preserved first fly-by carries the real skin above the lens, never through it',async()=>{
  const {smoother}=await source('motion.js'),{sharkIdlePose}=await source('shark-arrival.js');
  const {homeFlybyCurve}=await source('home-flyby.js');
  const point=new THREE.Vector3(),up=new THREE.Vector3(0,1,0),axis=new THREE.Quaternion().setFromAxisAngle(up,-Math.PI/2);
  for(const small of [false,true]){
    const z=small?16:11.8,scale=small?.78:1.28;
    const idle=sharkIdlePose({small,chapter:0,halfWidth:4,time:0,reduced:true});
    const curve=homeFlybyCurve(idle.v,z);
    let crossed=0;
    for(let frame=0;frame<=180;frame++){
      const t=frame/180,u=smoother(0,1,t),direction=curve.getTangent(u);
      const q=new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().lookAt(direction,new THREE.Vector3(),up)).multiply(axis)
        .multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),Math.sin(t*Math.PI*2)*.17));
      rig.group.position.copy(curve.getPoint(u));rig.group.quaternion.copy(idle.q).slerp(q,smoother(0,.20,t));rig.group.scale.setScalar(scale);
      rig.animate({phase:t*3.6/1.2*Math.PI*2,amplitude:1,jawOpen:.13,instant:true});rig.group.updateMatrixWorld(true);
      rig.group.traverse(mesh=>{
        if(!mesh.isMesh)return;
        for(let i=0;i<mesh.geometry.attributes.position.count;i++){
          mesh.getVertexPosition(i,point).applyMatrix4(mesh.matrixWorld);
          if(Math.abs(point.z-z)<.35){crossed++;assert.ok(point.y>.5,'skin stays above the camera including pointer movement and near-plane margin');}
        }
      });
    }
    assert.ok(crossed>100,'the complete shark really crosses the lens plane');
  }
});
test('home overflight triangles clear the near plane with live idle drift and camera parallax',async()=>{
  const {homeFlybyCurve}=await source('home-flyby.js'),{smoother}=await source('motion.js');
  const {sharkIdlePose}=await source('shark-arrival.js');
  const up=new THREE.Vector3(0,1,0),axis=new THREE.Quaternion().setFromAxisAngle(up,-Math.PI/2);
  const meshes=[];rig.group.traverse(mesh=>{if(mesh.isMesh)meshes.push(mesh);});
  let intersections=0;
  for(const small of [false,true])for(const idleTime of [0,5,13]){
    const z=small?16:11.8,view=new THREE.PerspectiveCamera(35,small?390/844:1280/720,.1,100);
    // Highest viewer position, with lateral parallax and its corresponding tilt.
    view.position.set(.22,.14,z);view.lookAt(0,0,0);view.updateMatrixWorld();
    const idle=sharkIdlePose({small,chapter:0,halfWidth:4,time:idleTime}),curve=homeFlybyCurve(idle.v,z);
    for(let frame=50;frame<=130;frame++){
      const t=frame/180,u=smoother(0,1,t),direction=curve.getTangent(u);
      const q=new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().lookAt(direction,new THREE.Vector3(),up)).multiply(axis)
        .multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),Math.sin(t*Math.PI*2)*.17));
      rig.group.position.copy(curve.getPoint(u));rig.group.quaternion.copy(idle.q).slerp(q,smoother(0,.20,t));rig.group.scale.setScalar(idle.s);
      rig.animate({phase:(idleTime+t*3.6)/1.2*Math.PI*2,amplitude:1,jawOpen:.13,instant:true});rig.group.updateMatrixWorld(true);
      for(const mesh of meshes){
        const points=[];
        for(let i=0;i<mesh.geometry.attributes.position.count;i++)points.push(mesh.getVertexPosition(i,new THREE.Vector3()).applyMatrix4(mesh.matrixWorld).applyMatrix4(view.matrixWorldInverse));
        const index=mesh.geometry.index;
        for(let i=0;i<(index?.count??points.length);i+=3){
          const tri=[0,1,2].map(j=>points[index?index.getX(i+j):i+j]);
          for(let j=0;j<3;j++){
            const a=tri[j],b=tri[(j+1)%3],plane=-view.near;
            if((a.z-plane)*(b.z-plane)>0||Math.abs(a.z-b.z)<1e-9)continue;
            const f=(plane-a.z)/(b.z-a.z),y=a.y+(b.y-a.y)*f;
            assert.ok(y>Math.tan(view.fov*Math.PI/360)*view.near+.10,'the clipped skin stays above the entire viewport, not around or inside the lens');
            intersections++;
          }
        }
      }
    }
  }
  assert.ok(intersections>1000,'tested real triangle/near-plane intersections through the close-up');
});
