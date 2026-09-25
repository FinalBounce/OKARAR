import test from 'node:test';
import assert from 'node:assert/strict';
import {Group,Vector3,Euler,Quaternion,Plane,Box3} from 'three';
import {source} from './import-source.mjs';
const {MantaCapture,placeThroatPlane,mantaVisibleDuringCapture,captureEnvelope,fitMantaToAperture,captureRecession}=await source('manta-capture.js');
const {wingDisplacement}=await source('rhythm.js');
const {smoother}=await source('motion.js');
const {engulfPose,ENGULF_APPROACH_Z,ENGULF_READY_Z}=await source('engulf.js');
const {flourishPose,FLOURISH_SECONDS,DIVE_SECONDS}=await source('manta-flourish.js');
const orientation=new Quaternion().setFromEuler(new Euler(-1.13,0,0));

test('the snare preserves pointer tilt instead of dropping 6+ degrees in one frame',()=>{
  for(const px of [-1,0,1])for(const py of [-1,0,1]){
    const root=new Group(),manta=new Group(),capture=new MantaCapture();
    manta.rotation.set(.30+py*.1,-.25+px*.14,-.35);
    root.position.set(.1,.35,-.05);
    const q=manta.quaternion.clone(),p=root.position.clone();
    for(const progress of [0,.0001,.01,.1,.16]){
      capture.apply(root,manta,progress);
      assert.ok(q.angleTo(manta.quaternion)<1e-7);
      assert.ok(p.distanceTo(root.position)<1e-9);
    }
  }
});
test('ongoing scroll, swim and pointer motion remain live until actual capture',()=>{
  const root=new Group(),manta=new Group(),capture=new MantaCapture();
  for(let i=0;i<30;i++){
    const t=i/30;
    root.position.set(t*2,.3-Math.cos(t*3)*.08,0);manta.rotation.set(.3+t*.1,-.25+t*.14,-.35);
    const q=manta.quaternion.clone(),p=root.position.clone();
    capture.apply(root,manta,t*.16);
    assert.ok(q.angleTo(manta.quaternion)<1e-7);assert.ok(p.distanceTo(root.position)<1e-9);
  }
});
test('the manta folds into alignment without translating itself toward the mouth',()=>{
  for(const angle of [0,.4,Math.PI,-2,5.9]){
    const root=new Group(),manta=new Group(),capture=new MantaCapture();
    root.position.set(3,.6,-1);manta.rotation.set(.4,angle,-.35);
    const origin=root.position.clone();
    capture.apply(root,manta,.16+1e-8);
    capture.apply(root,manta,.38);
    assert.ok(manta.quaternion.angleTo(orientation)<1e-7);
    assert.ok(root.position.distanceTo(origin)<1e-9);
  }
});
test('capture stays continuous for an in-flight barrel roll at 30 and 60 fps',()=>{
  for(const kind of ['roll','dive'])for(const fps of [30,60])for(const start of [0,.15,.30,.46,.50,.67,.85]){
    const root=new Group(),manta=new Group(),capture=new MantaCapture();let last=null;
    for(let frame=0;frame<=Math.ceil(1.2*fps);frame++){
      const t=frame/fps,pose=flourishPose(start+t/(kind==='dive'?DIVE_SECONDS:FLOURISH_SECONDS),kind);
      root.position.set(pose.x,pose.y,pose.z);
      manta.rotation.set(.30,-.25,-.35);
      manta.quaternion.multiply(new Quaternion().setFromEuler(new Euler(pose.rx,pose.ry,pose.rz)));
      capture.apply(root,manta,t/3);
      if(last)assert.ok(last.angleTo(manta.quaternion)<.32,'no hemisphere snap or reset');
      last=manta.quaternion.clone();
    }
  }
});
test('the manta crosses the teeth and remains visible inside the mouth, not cut at its entrance',()=>{
  for(const scale of [1.08,1.38,3.4,4.3])for(const angle of [0,.4,1.2]){
    const mouth=new Vector3(.4,.7,3),forward=new Vector3(0,0,1).applyEuler(new Euler(angle,-.3,0));
    const plane=new Plane(),depth=placeThroatPlane(plane,mouth,forward,.96,scale);
    assert.ok(depth>.96*scale);
    for(const fraction of [0,.2,.5,.9]){
      const point=mouth.clone().addScaledVector(forward,-depth*fraction);
      assert.ok(plane.distanceToPoint(point)>0,'entry and cavity stay on the retained side');
    }
    assert.ok(Math.abs(plane.distanceToPoint(mouth.clone().addScaledVector(forward,-depth)))<1e-9);
    assert.ok(plane.distanceToPoint(mouth.clone().addScaledVector(forward,-depth-.1))<0);
  }
});
test('the old early cutoff is gone; retirement waits for fully opaque blackout',()=>{
  assert.equal(mantaVisibleDuringCapture({active:false}),true);
  for(const progress of [.38,.48,.59,.63,.66,.689]){
    const {veil}=engulfPose(progress);
    assert.ok(veil<1);
    assert.equal(mantaVisibleDuringCapture({active:true,progress,veil}),true);
  }
  assert.equal(mantaVisibleDuringCapture({active:true,progress:.69,veil:engulfPose(.69).veil}),false);
});
test('the swallowed manta cannot reappear as the blackout clears during the return',()=>{
  for(const returning of [0,.04,.2,.34,.7,1]){
    assert.equal(mantaVisibleDuringCapture({active:true,progress:1,veil:engulfPose(1,returning).veil}),false);
  }
});

const bounds=new Box3(new Vector3(-3.8,-4.4,-.55),new Vector3(3.8,1.9,.85));
test('the capture envelope contains the moving wings and tail rather than just the torso',()=>{
  for(const fold of [0,.3,.7,1])for(const phase of [0,.7,2,4,5.8]){
    const rotation=new Quaternion().setFromEuler(new Euler(-1.13,.3,-.2));
    const envelope=new Box3().setFromPoints(captureEnvelope(bounds,{fold,flow:1,pulse:1,rotation:new Quaternion()}));
    for(let x=-3.8;x<=3.8;x+=.19)for(let y=-4.4;y<=1.9;y+=.21)for(const z of [-.55,.85]){
      const p=new Vector3(x*(1-fold*.52),y,z+wingDisplacement(x,y,phase,1,1,fold));
      assert.ok(envelope.containsPoint(p),'all phases remain inside the conservative envelope');
    }
    assert.ok(captureEnvelope(bounds,{fold,flow:1,pulse:1,rotation}).every(p=>p.toArray().every(Number.isFinite)));
  }
});
test('the folded manta fits inside the dental margin at every base scale and intake angle',()=>{
  const aperture={width:.96,height:1.3,normal:new Vector3(1,0,0),upper:new Vector3(0,.26,0),lower:new Vector3(0,-1.04,0),center:new Vector3()};
  for(const baseScale of [.595,.70,1,1.3,1.55])for(const angle of [-.4,0,.4])for(const sharkScale of [1.08,1.38,3.4,4.3]){
    const rotation=new Quaternion().setFromEuler(new Euler(0,-Math.PI/2,angle));
    const points=captureEnvelope(bounds,{fold:1,flow:1,pulse:1,rotation:orientation});
    const fit=fitMantaToAperture(points,{aperture,rotation,scale:sharkScale},baseScale);
    const inverse=rotation.clone().invert();
    for(const p of points){
      const local=p.clone().multiplyScalar(fit.scale).add(fit.offset).applyQuaternion(inverse).divideScalar(sharkScale);
      assert.ok(local.y<aperture.upper.y-aperture.height*.099);
      assert.ok(local.y>aperture.lower.y+aperture.height*.299);
      assert.ok(Math.abs(local.z)<aperture.width*.361);
    }
    assert.ok(fit.scale<=baseScale&&fit.scale>0);
  }
});
test('the shark overtakes a stationary ray; it does not fly to a moving clearance plane',()=>{
  const aperture={width:.96,height:1.3,normal:new Vector3(1,0,0),center:new Vector3()};
  const rotation=new Quaternion().setFromEuler(new Euler(0,-Math.PI/2,0)),forward=new Vector3(0,0,1);
  for(const baseScale of [.7,1.3,1.55]){
    const capture=new MantaCapture(bounds),root=new Group(),manta=new Group();
    let nearAtEnd;
    for(let n=0;n<=48;n++){
      const progress=.16+n/100,fold=smoother(.15,.32,progress);
      root.position.set(0,.35,0);manta.rotation.set(.3,-.25,-.35);manta.scale.setScalar(baseScale);
      const {approach,surge}=engulfPose(progress);
      const mouth=new Vector3(0,0,(ENGULF_APPROACH_Z+(ENGULF_READY_Z-ENGULF_APPROACH_Z)*approach)*(1-surge)+8*surge);
      const scale=capture.mouthScale(3.4,baseScale,progress,aperture,rotation);
      const captured=capture.apply(root,manta,progress,{aperture,rotation,scale,center:mouth,fold,flow:1,pulse:1});
      if(captured)mouth.addScaledVector(forward,-captured.retreat);
      assert.ok(manta.scale.x>=baseScale*.919999);
      const points=captureEnvelope(bounds,{fold,flow:1,pulse:1,rotation:manta.quaternion});
      const near=Math.min(...points.map(p=>p.multiplyScalar(manta.scale.x).add(root.position).sub(mouth).dot(forward)));
      if(progress>=.23&&progress<=.32)assert.ok(near>=.179999,`fit clearance at ${progress}, base ${baseScale}: ${near}`);
      if(progress<=.40)assert.ok(Math.abs(root.position.z)<1e-9,'no axial launch toward the mouth');
      assert.ok(root.position.z<=1e-9,'the ray never rides forward with the shark');
      nearAtEnd=near;
    }
    assert.ok(nearAtEnd<-3,'the ray travels deep inside, without fading at the teeth');
  }
});
test('fallback aperture without anatomical anchors still produces a finite safe fit',()=>{
  const points=captureEnvelope(bounds,{fold:1,flow:1,pulse:0,rotation:orientation});
  const fit=fitMantaToAperture(points,{aperture:{normal:new Vector3(1,0,0),width:1.1,height:.95},rotation:new Quaternion(),scale:3.4},1.3);
  assert.ok(fit.scale>0&&fit.scale<1.3);assert.ok(fit.offset.toArray().every(Number.isFinite));
});
test('only the first bite grows to fit a full-sized folded ray and rejoins normal size under blackout',()=>{
  const aperture={width:.96,height:1.3,normal:new Vector3(1,0,0),center:new Vector3()};
  const rotation=new Quaternion().setFromEuler(new Euler(0,-Math.PI/2,0));
  for(const baseScale of [.595,.7,1,1.3,1.55]){
    const capture=new MantaCapture(bounds);
    for(const p of [0,.10,.18,.80,.9,1])assert.equal(capture.mouthScale(3.4,baseScale,p,aperture,rotation),3.4);
    for(const p of [.38,.45,.59,.69]){
      const scale=capture.mouthScale(3.4,baseScale,p,aperture,rotation);
      const fit=fitMantaToAperture(captureEnvelope(bounds,{fold:1,flow:1,pulse:1,rotation:orientation}),{aperture,rotation,scale},baseScale);
      assert.ok(fit.scale>=baseScale*.94,'the opening fits the near-full-size prey');
    }
    for(const p of [.18,.38,.72,.80])assert.ok(Math.abs(capture.mouthScale(3.4,baseScale,p-1e-7,aperture,rotation)-capture.mouthScale(3.4,baseScale,p+1e-7,aperture,rotation))<1e-6);
  }
});
test('fold, lateral alignment and recession join without a position or scale discontinuity',()=>{
  const aperture={width:.96,height:1.3,normal:new Vector3(1,0,0),center:new Vector3()};
  const rotation=new Quaternion().setFromEuler(new Euler(0,-Math.PI/2,0));
  const frame=(progress,baseScale)=>{
    const root=new Group(),manta=new Group(),capture=new MantaCapture(bounds);
    const reset=()=>{root.position.set(1,.35,0);manta.rotation.set(.3,-.25,-.35);manta.scale.setScalar(baseScale);};
    reset();capture.apply(root,manta,.160001);
    reset();const fold=smoother(.15,.32,progress);
    capture.apply(root,manta,progress,{aperture,rotation,scale:3.4,center:new Vector3(0,0,-2),fold,flow:1,pulse:1});
    return {p:root.position,s:manta.scale.x,q:manta.quaternion};
  };
  for(const baseScale of [.595,1,1.55])for(const progress of [.16,.20,.32,.36,.38,.40,.59,.69]){
    const a=frame(progress-1e-7,baseScale),b=frame(progress+1e-7,baseScale);
    assert.ok(a.p.distanceTo(b.p)<.0001);assert.ok(Math.abs(a.s-b.s)<.0001);assert.ok(a.q.angleTo(b.q)<.0001);
  }
});

test('the ray keeps receding and shrinking throughout the visible screen fade',()=>{
  const aperture={width:.96,height:1.3,normal:new Vector3(1,0,0),center:new Vector3()};
  const rotation=new Quaternion().setFromEuler(new Euler(0,-Math.PI/2,0));
  const root=new Group(),manta=new Group(),capture=new MantaCapture(bounds);
  let last=null;
  for(let n=0;n<=100;n++){
    const progress=.59+n*.001,center=new Vector3(0,0,7+n*.02);
    root.position.set(0,.35,0);manta.rotation.set(.3,-.25,-.35);manta.scale.setScalar(1.3);
    const state=capture.apply(root,manta,progress,{aperture,rotation,scale:4.3,center,fold:1,flow:.6,pulse:0});
    if(last){assert.ok(state.depth>last.depth);assert.ok(root.position.z<last.z);assert.ok(manta.scale.x<last.s);}
    last={depth:state.depth,z:root.position.z,s:manta.scale.x};
    assert.ok(captureRecession(progress)<1,'no plateau before full blackout');
    const plane=new Plane(),forward=new Vector3(0,0,1);
    placeThroatPlane(plane,center,forward,aperture.width,4.3,state.deepest);
    for(const point of captureEnvelope(bounds,{fold:1,flow:.6,pulse:0,rotation:manta.quaternion})){
      assert.ok(plane.distanceToPoint(point.multiplyScalar(manta.scale.x).add(root.position))>0,'deep prey is never clipped while the fade is still visible');
    }
  }
});
