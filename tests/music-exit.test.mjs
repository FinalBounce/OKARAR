import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {Box3,Group,Vector3,Quaternion,Euler,PerspectiveCamera,Matrix4} from 'three';
import {source} from './import-source.mjs';
const {finishMusicExit,outsideCamera,createMusicGlide,musicGlidePose}=await source('music-exit.js');
const bounds=new Box3(new Vector3(-4,-2,-2),new Vector3(3,2,2));
const up=new Vector3(0,1,0),axis=new Quaternion().setFromAxisAngle(up,-Math.PI/2);
const facing=direction=>new Quaternion().setFromRotationMatrix(new Matrix4().lookAt(direction,new Vector3(),up)).multiply(axis);
function scene(w=1280,h=720){
  const camera=new PerspectiveCamera(35,w/h,.1,100);camera.position.z=w<=800?16:11.8;camera.lookAt(0,0,0);camera.updateMatrixWorld();
  const halfWidth=Math.tan(35*Math.PI/360)*camera.position.z*w/h,group=new Group(),scale=w<=800?.78:1.28;
  group.scale.setScalar(scale);group.position.set(-halfWidth-10,5,0);group.quaternion.copy(facing(new Vector3(-1,.2,-.3)));
  const idle={v:new Vector3(halfWidth+10,3,-9),q:facing(new Vector3(1,.2,-.7)),s:scale};
  return {camera,group,bounds,idle,track:{chapter:2},chapter:3,dt:1/60,small:w<=800};
}
function finish(args){for(let frame=0;frame<1200&&!args.track.parked;frame++)finishMusicExit(args);assert.equal(args.track.parked,true);}
test('the old music-to-label reset was fast and backwards',()=>{
  const {group,idle}=scene(),delta=idle.v.clone().sub(group.position);
  const forward=new Vector3(1,0,0).applyQuaternion(group.quaternion);
  assert.ok(delta.clone().normalize().dot(forward)<-.75);
  assert.ok(delta.length()*(1-Math.exp(-2.5/60))*60>75);
});
test('the music exit resets only between two completely offscreen poses across viewports',()=>{
  for(const [w,h] of [[1280,720],[1777,1119],[3440,1440],[3840,1080],[390,844],[320,740],[844,390]]){
    for(const px of [-.22,0,.22])for(const py of [-.14,0,.14]){
      const args=scene(w,h);args.camera.position.x=px;args.camera.position.y=py;args.camera.lookAt(0,0,0);
      assert.equal(outsideCamera(args.camera,bounds,args.group.position,args.group.quaternion,args.group.scale.x),true);
      assert.equal(finishMusicExit(args),true);assert.ok(args.track.musicGlide);assert.equal(args.track.parked,undefined);
      assert.equal(outsideCamera(args.camera,bounds,args.group.position,args.group.quaternion,args.group.scale.x),true);
      while(!args.track.parked){
        const wasOutside=outsideCamera(args.camera,bounds,args.group.position,args.group.quaternion,args.group.scale.x);
        finishMusicExit(args);
        if(args.track.parked)assert.equal(wasOutside,true,'the tail clears again after the glimpse');
      }
      assert.equal(outsideCamera(args.camera,bounds,args.group.position,args.group.quaternion,args.group.scale.x),true);
      assert.ok(args.group.quaternion.angleTo(args.idle.q)<1e-7);
      assert.equal(args.group.scale.x,args.idle.s);
    }
  }
});
test('if any part is still in frame, the tail clears by swimming forward before parking',()=>{
  for(const fps of [30,60]){
    const args=scene();args.dt=1/fps;args.group.position.set(-4,1,0);args.group.quaternion.setFromEuler(new Euler(0,Math.PI,0));
    let steps=0;
    while(!args.track.parked&&steps++<fps*10){
      const before=args.group.position.clone(),q=args.group.quaternion.clone();
      const wasGliding=!!args.track.musicGlide;
      const wasOutside=outsideCamera(args.camera,bounds,before,q,args.group.scale.x);
      finishMusicExit(args);
      if(args.track.parked){assert.equal(wasOutside,true);assert.equal(outsideCamera(args.camera,bounds,args.group.position,args.group.quaternion,args.group.scale.x),true);}
      else if(!wasGliding&&args.track.musicGlide){assert.equal(wasOutside,true);assert.equal(outsideCamera(args.camera,bounds,args.group.position,args.group.quaternion,args.group.scale.x),true);}
      else{const move=args.group.position.clone().sub(before);assert.ok(move.normalize().dot(new Vector3(1,0,0).applyQuaternion(q))>.999);if(!wasGliding)assert.ok(q.angleTo(args.group.quaternion)<1e-7);}
    }
    assert.equal(args.track.parked,true);
  }
});
test('parking preserves the next entrance pose when it is already safely offscreen',()=>{
  const args=scene();args.idle.v.x+=5;finish(args);
  assert.ok(args.group.position.distanceTo(args.idle.v)<1e-9);
  // A camera/aspect change may expand the frustum; parked staging remains hidden.
  args.camera.aspect=32/9;args.camera.updateProjectionMatrix();finishMusicExit(args);
  assert.equal(outsideCamera(args.camera,bounds,args.group.position,args.group.quaternion,args.group.scale.x),true);
});
test('the restored glimpse is left-to-right, nose-first, quick and readable on all formats',()=>{
  for(const [w,h] of [[1280,720],[1777,1119],[3440,1440],[390,844],[319,1120]]){
    const args=scene(w,h),route=createMusicGlide(args);let last=null,visible=0;
    for(let frame=0;frame<=Math.ceil(route.duration*120);frame++){
      const pose=musicGlidePose(route,frame/(route.duration*120));
      if(last){
        const movement=pose.v.clone().sub(last.v);
        assert.ok(movement.x>=0,'never crosses backwards');
        if(movement.length()>1e-9)assert.ok(movement.normalize().dot(new Vector3(1,0,0).applyQuaternion(pose.q))>.999);
        assert.ok(last.q.angleTo(pose.q)<.01,'no sudden orientation change');
      }
      const projected=pose.v.clone().project(args.camera);
      if(Math.abs(projected.x)<1){visible++;assert.ok(projected.y>.15&&projected.y<.7,'glimpse is above centre, inside the screen');}
      last=pose;
    }
    assert.ok(visible/120>.8&&visible/120<1.15,'centre crosses the frame in about one second');
    assert.equal(outsideCamera(args.camera,bounds,last.v,last.q,last.s),true);
  }
});
test('a pending glimpse freezes on pause, does not restart, and cannot teleport on resize',()=>{
  const args=scene(390,844);finishMusicExit(args);
  for(let i=0;i<40;i++)finishMusicExit(args);
  const pose=args.group.position.clone(),elapsed=args.track.musicGlide.elapsed;
  for(let i=0;i<10;i++)finishMusicExit({...args,dt:0});
  assert.deepEqual(args.group.position,pose);assert.equal(args.track.musicGlide.elapsed,elapsed);
  args.camera.aspect=32/9;args.camera.updateProjectionMatrix();
  let count=0;
  while(!args.track.parked&&count++<1000){
    const outside=outsideCamera(args.camera,bounds,args.group.position,args.group.quaternion,args.group.scale.x);
    finishMusicExit(args);if(args.track.parked)assert.equal(outside,true);
  }
  assert.equal(args.track.parked,true);
  const route=args.track.musicGlide;
  for(let i=0;i<180;i++)finishMusicExit(args);
  assert.equal(args.track.musicGlide,route);assert.equal(route.elapsed,route.duration);
});
test('other passes, reverse navigation and pause are untouched',()=>{
  for(const track of [null,{chapter:0},{chapter:1},{chapter:3},{chapter:4}]){
    const args=scene();args.track=track;const before=args.group.position.clone();
    assert.equal(finishMusicExit(args),false);assert.deepEqual(args.group.position,before);
  }
  for(const chapter of [0,1,2,4,5]){
    const args=scene();args.chapter=chapter;const before=args.group.position.clone();
    assert.equal(finishMusicExit(args),false);assert.deepEqual(args.group.position,before);
  }
  const args=scene();args.dt=0;const before=args.group.position.clone();
  assert.equal(finishMusicExit(args),true);assert.equal(args.track.parked,undefined);assert.deepEqual(args.group.position,before);
});
test('the renderer keeps the music handoff owned when pause sets reduced=true and dt=0',async()=>{
  const code=await readFile(new URL('../src/creature.js',import.meta.url),'utf8');
  assert.match(code,/const musicExit=passTrack\?\.progress===1&&finishMusicExit\(/);
});
