import test from 'node:test';
import assert from 'node:assert/strict';
import {Group,Vector3,Box3,PerspectiveCamera,Quaternion,Euler} from 'three';
import {source} from './import-source.mjs';
const {SharkTransit}=await source('shark-transit.js');
const {sharkIdlePose}=await source('shark-arrival.js');
const {outsideCamera}=await source('music-exit.js');
const bounds=new Box3(new Vector3(-4.8,-2.8,-2.8),new Vector3(3.8,2.8,2.8));
function scene(w,h,from,to){
  const small=w<=800,camera=new PerspectiveCamera(35,w/h,.1,100);
  camera.position.z=small?16:11.8;camera.lookAt(0,0,0);camera.updateMatrixWorld();
  const halfWidth=Math.tan(35*Math.PI/360)*camera.position.z*w/h;
  const idle=chapter=>sharkIdlePose({chapter,small,halfWidth,time:0,reduced:true});
  const start=idle(from),group=new Group();group.position.copy(start.v);group.quaternion.copy(start.q);group.scale.setScalar(start.s);
  return {group,idle:idle(to),chapter:to,camera,bounds,small,halfWidth,dt:1/60};
}
function run(args,{change=null,fps=60}={}){
  const transit=new SharkTransit();transit.observe(args.group,0);
  let complete=false,maxTurn=0,minimumForward=1,maxStep=0;
  for(let frame=0;frame<fps*20;frame++){
    if(change)change(args,frame/fps,transit);
    const before={v:args.group.position.clone(),q:args.group.quaternion.clone(),s:args.group.scale.x,relocations:transit.relocations};
    args.dt=1/fps;transit.update(args);
    const after=args.group,move=after.position.clone().sub(before.v),distance=move.length();
    if(transit.relocations!==before.relocations){
      assert.ok(outsideCamera(args.camera,bounds,before.v,before.q,before.s),'no relocation before the tail clears');
      assert.ok(outsideCamera(args.camera,bounds,after.position,after.quaternion,after.scale.x),'every new staging position is fully outside');
    }else{
      maxStep=Math.max(maxStep,distance);
      maxTurn=Math.max(maxTurn,before.q.angleTo(after.quaternion));
      if(distance>1e-5){
        const alignment=move.normalize().dot(new Vector3(1,0,0).applyQuaternion(after.quaternion));
        minimumForward=Math.min(minimumForward,alignment);
        assert.ok(alignment>.90,'the body follows the nose, never slides backwards: '+alignment);
      }
      assert.ok(before.q.angleTo(after.quaternion)<.16,'no sudden turn: '+before.q.angleTo(after.quaternion));
      assert.ok(distance<18/fps,'bounded visible speed: '+distance);
    }
    assert.ok([...after.position.toArray(),...after.quaternion.toArray(),after.scale.x].every(Number.isFinite));
    transit.observe(args.group,args.dt);
    if(!transit.active){complete=true;break;}
  }
  assert.equal(complete,true,'route settles within twenty seconds');
  assert.ok(args.group.position.distanceTo(args.idle.v)<1e-8);
  assert.ok(args.group.quaternion.angleTo(args.idle.q)<1e-7);
  assert.equal(args.group.scale.x,args.idle.s);
  return {maxTurn,minimumForward,maxStep};
}
test('all thirty section-to-section connectors swim nose-first and reach the exact destination',()=>{
  for(const [w,h] of [[1280,720],[1777,1119],[3440,1440],[390,844],[319,1120]])for(let from=0;from<6;from++)for(let to=0;to<6;to++){
    if(from===to)continue;
    for(const fps of [30,60])run(scene(w,h,from,to),{fps});
  }
});
test('a new destination during the return never resets a visible animal',()=>{
  for(const [w,h] of [[1280,720],[390,844]])for(const next of [0,2,4,5])for(const at of [.2,1.5,3]){
    const args=scene(w,h,5,0);let changed=false;
    run(args,{change:(state,time)=>{
      if(!changed&&time>=at){changed=true;state.chapter=next;state.idle=sharkIdlePose({chapter:next,small:state.small,halfWidth:state.halfWidth,time:0,reduced:true});}
    }});
  }
});
test('an interrupted fly-by continues in its current heading before the new approach',()=>{
  for(const [w,h] of [[1280,720],[390,844]])for(const to of [0,2,4,5])for(const rotation of [[0,-Math.PI/2,0],[.2,Math.PI,.1],[.1,.6,-.12],[.6,1.7,.2]]){
    const args=scene(w,h,2,to);args.group.position.set(.2,.3,1.5);args.group.quaternion.setFromEuler(new Euler(...rotation));
    run(args);
  }
});
test('pause freezes both connector phases; reduced motion lands directly',()=>{
  const args=scene(1280,720,5,0),transit=new SharkTransit();
  for(let frame=0;frame<400;frame++){
    transit.update(args);
    const p=args.group.position.clone(),q=args.group.quaternion.clone(),stage=transit.stage;
    for(let i=0;i<3;i++)transit.update({...args,dt:0});
    assert.deepEqual(args.group.position,p);assert.deepEqual(args.group.quaternion.toArray(),q.toArray());assert.equal(transit.stage,stage);
    if(!transit.active)break;
  }
  transit.update({...args,...{idle:sharkIdlePose({chapter:2,small:false,halfWidth:args.halfWidth,time:0}),chapter:2},dt:0,instant:true});
  assert.equal(transit.active,false);
});
test('viewport change during an approach is treated as a continuous redirection',()=>{
  const args=scene(1280,720,5,0);let changed=false;
  run(args,{change:(state,time)=>{
    if(!changed&&time>2){
      changed=true;const next=scene(390,844,5,0);
      Object.assign(state,{camera:next.camera,idle:next.idle,small:next.small,halfWidth:next.halfWidth});
    }
  }});
});
