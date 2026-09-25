import test from 'node:test';
import assert from 'node:assert/strict';
import {Vector3,Quaternion,Euler,CatmullRomCurve3} from 'three';
import {source} from './import-source.mjs';
const {SharkArrival,sharkIdlePose,instagramPose,instagramApproach}=await source('shark-arrival.js');
const {ENGULF_EXIT_ROTATION}=await source('engulf.js');
const {smoother}=await source('motion.js');
const configurations=[[1280,720],[1777,1119],[3440,1440],[390,844],[320,740],[844,390]];
test('Instagram reframing is mobile-only and shares exactly the arrival/standby pose',()=>{
  for(const halfWidth of [1.4,2.3,6.6,9]){
    const desktop=instagramPose({small:false,halfWidth});
    assert.deepEqual(desktop.v.toArray(),[-halfWidth-1.8,-1.1,-2]);assert.equal(desktop.s,1.28*.9);
    assert.ok(desktop.q.angleTo(new Quaternion().setFromEuler(new Euler(-.02,-.42,.12)))<1e-7);
    const mobile=instagramPose({small:true,halfWidth}),idle=sharkIdlePose({chapter:4,small:true,halfWidth,time:0,reduced:true});
    assert.ok(mobile.v.distanceTo(idle.v)<1e-9);assert.equal(mobile.s,idle.s);assert.ok(mobile.q.angleTo(idle.q)<1e-7);
    assert.ok(mobile.s<=.78*.9);
  }
});
test('the mobile Instagram landing approaches nose-first; the desktop curve is unchanged',()=>{
  for(const halfWidth of [1.4,2.3,6.6,9]){
    assert.deepEqual(instagramApproach({small:false,halfWidth}).toArray(),[-halfWidth*.3,-.9,2.8]);
    const landing=instagramPose({small:true,halfWidth}),approach=instagramApproach({small:true,halfWidth});
    const curve=new CatmullRomCurve3([new Vector3(halfWidth+10,3,-9),new Vector3(halfWidth*.5,-.6,1.5),approach,landing.v]);
    assert.ok(curve.getPoint(1).distanceTo(landing.v)<1e-9);
    assert.ok(curve.getTangent(1).dot(new Vector3(1,0,0).applyQuaternion(landing.q))>.999);
  }
});
function options(w,h,chapter=0,time=0){
  const small=w<=800,halfWidth=Math.tan(35*Math.PI/360)*(small?16:11.8)*w/h;
  return {chapter,halfWidth,small,anchorY:.35,dt:1/60,idle:sharkIdlePose({chapter,halfWidth,small,time})};
}
test('all six sections arrive directly at their exact living idle pose, on desktop and mobile',()=>{
  for(const [w,h] of configurations)for(let chapter=0;chapter<=5;chapter++)for(const fps of [30,60]){
    const arrival=new SharkArrival();let pose,args;
    for(let frame=0;frame<=2.4*fps;frame++){
      const t=frame/fps;args=options(w,h,chapter,t);args.dt=1/fps;
      pose=arrival.update({...args,returning:Math.min(1,t/2.4)});
      assert.ok([...pose.v.toArray(),...pose.q.toArray(),pose.s].every(Number.isFinite));
    }
    assert.equal(arrival.complete,true,`${w}x${h}, section ${chapter}`);
    assert.ok(pose.v.distanceTo(args.idle.v)<1e-9);assert.ok(pose.q.angleTo(args.idle.q)<1e-7);assert.equal(pose.s,args.idle.s);
    assert.equal(arrival.update({...args,returning:1}),null,'normal passes take control only after a matching handoff');
  }
});
test('the attack exit joins continuously and non-home arrivals swim nose-first after the reveal',()=>{
  const exitQ=new Quaternion().setFromEuler(new Euler(...ENGULF_EXIT_ROTATION));
  for(const [w,h] of configurations)for(let chapter=0;chapter<=5;chapter++){
    const a=new SharkArrival(),args=options(w,h,chapter);let pose=a.update({...args,returning:0});
    assert.ok(pose.v.distanceTo(new Vector3(-args.halfWidth-9,.74,-5))<1e-9);assert.ok(pose.q.angleTo(exitQ)<1e-7);
    let previous=pose;
    for(let frame=1;frame<=144;frame++){
      const u=frame/144;pose=a.update({...args,returning:u});
      if(chapter>0&&u>.34&&u<.995){
        const movement=pose.v.clone().sub(previous.v).normalize(),forward=new Vector3(1,0,0).applyQuaternion(pose.q);
        assert.ok(movement.dot(forward)>.5,`section ${chapter}, ${w}x${h}, progress ${u}: ${movement.dot(forward)}`);
      }
      if(u>.34&&chapter>0)assert.ok(previous.q.angleTo(pose.q)<.2,'no abrupt visible turn');
      previous=pose;
    }
  }
});
test('the home return retains its established curve before the final idle drift',()=>{
  const args=options(1280,720),a=new SharkArrival();a.update({...args,returning:0});
  const curve=new CatmullRomCurve3([new Vector3(-args.halfWidth-9,.74,-5),new Vector3(-args.halfWidth-2,1.1,-15),new Vector3(-.8,.5,-9),new Vector3(.2,.12,-.6)]);
  for(const u of [.1,.2,.34,.5]){
    const pose=a.update({...args,returning:u});
    assert.ok(pose.v.distanceTo(curve.getPoint(smoother(0,1,u)))<1e-9);
  }
});
test('changing section during the return replans from the current pose and settles without a home reset',()=>{
  for(const [w,h] of [[1280,720],[390,844]])for(const changeAt of [.35,.72,.97]){
    const a=new SharkArrival();let previous=null,changed=false;
    for(let frame=0;frame<900&&!a.complete;frame++){
      const time=frame/60,u=Math.min(1,time/2.4),chapter=u<changeAt?2:5;
      const pose=a.update({...options(w,h,chapter,time),returning:u});
      if(previous){
        assert.ok(pose.v.distanceTo(previous.v)<.6,'no position jump');
        if(u>.34)assert.ok(pose.q.angleTo(previous.q)<.23,'no orientation reset');
      }
      if(a.route.chapter===5)changed=true;
      previous=pose;
    }
    assert.equal(changed,true);assert.equal(a.complete,true);assert.equal(a.route.chapter,5);
  }
});
test('mute/pause freezes a pending return and reduced motion or skipped playback lands directly',()=>{
  const args=options(1280,720,4),a=new SharkArrival();const initial=a.update({...args,returning:.4});
  for(let i=0;i<10;i++)assert.equal(a.update({...args,returning:.4}),initial);
  assert.equal(a.update({...args,returning:.5,dt:0}),initial);
  for(const mode of [{instant:true,returning:.3},{returning:1}]){
    const b=new SharkArrival(),pose=b.update({...args,...mode});
    assert.equal(b.complete,true);assert.ok(pose.v.distanceTo(args.idle.v)<1e-9);assert.ok(pose.q.angleTo(args.idle.q)<1e-7);
  }
});
test('a resize during arrival replans without teleporting and finishes at the new layout',()=>{
  const a=new SharkArrival();let previous=null,last;
  for(let frame=0;frame<900&&!a.complete;frame++){
    const time=frame/60,small=time>1.7,args=options(small?390:1280,small?844:720,3,time);
    last=a.update({...args,returning:Math.min(1,time/2.4)});
    if(previous)assert.ok(last.v.distanceTo(previous.v)<.8);
    previous=last;
  }
  assert.equal(a.complete,true);assert.equal(a.route.small,true);
});
test('all section changes during the return keep a bounded turn and eventually settle',()=>{
  for(const [w,h] of [[1280,720],[390,844]])for(let from=0;from<6;from++)for(let to=0;to<6;to++)for(const at of [.35,.7,.96]){
    const a=new SharkArrival();let previous;
    for(let frame=0;frame<1200&&!a.complete;frame++){
      const time=frame/60,returning=Math.min(1,time/2.4),chapter=returning<at?from:to;
      const pose=a.update({...options(w,h,chapter,time),returning});
      if(previous&&!a.route.initial)assert.ok(pose.q.angleTo(previous.q)<=2.8/60+1e-7);
      previous=pose;
    }
    assert.equal(a.complete,true,`${from} → ${to}, ${w}x${h}`);assert.equal(a.route.chapter,to);
  }
});
