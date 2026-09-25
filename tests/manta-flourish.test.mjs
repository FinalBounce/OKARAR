import test from 'node:test';
import assert from 'node:assert/strict';
import {Quaternion,Euler} from 'three';
import {source} from './import-source.mjs';
const {MantaFlourish,flourishPose,FLOURISH_SECONDS}=await source('manta-flourish.js');
const {FLAP_SECONDS,MantaRhythm}=await source('rhythm.js');
const q=p=>new Quaternion().setFromEuler(new Euler(p.rx,p.ry,p.rz));
const rest=flourishPose(0);
const near=(a,b,eps=1e-9)=>assert.ok(Math.abs(a-b)<eps,`${a} != ${b}`);

test('flourish is opt-in, lasts three wing cycles and cannot stack',()=>{
  const move=new MantaFlourish();
  assert.deepEqual(move.update(20),rest);assert.equal(move.start(false),false);
  near(FLOURISH_SECONDS,3*FLAP_SECONDS);
  assert.equal(move.start(),true);move.update(1);
  assert.equal(move.start(),false);near(move.elapsed,1);
  move.update(FLOURISH_SECONDS);assert.equal(move.active,false);
  assert.deepEqual(move.pose,rest);assert.equal(move.start(),true);
});
test('full barrel roll is seamless and has zero endpoint speed',()=>{
  assert.deepEqual(flourishPose(1),rest);
  near(flourishPose(.5).ry,Math.PI);
  for(const t of [1e-5,1-1e-5]){
    const pose=flourishPose(t);
    assert.ok(q(pose).angleTo(q(rest))<1e-6);
    near(pose.x,0,1e-8);near(pose.y,0,1e-8);near(pose.z,0,1e-8);near(pose.scale,1,1e-8);
  }
});
test('a bounded 3D arc keeps the animal readable instead of scaling it up',()=>{
  for(let i=0;i<=360;i++){
    const pose=flourishPose(i/360);
    for(const v of Object.values(pose))assert.ok(Number.isFinite(v));
    assert.ok(Math.abs(pose.x)<=.45&&pose.y<=.48&&pose.y>=0);
    assert.ok(pose.z<=0&&pose.z>=-.65&&pose.scale>=.92&&pose.scale<=1);
  }
});
test('30 and 60 fps follow the same pose and finish at the same instant',()=>{
  const a=new MantaFlourish(),b=new MantaFlourish();a.start();b.start();
  for(let i=0;i<108;i++){
    a.update(1/30);b.update(1/60);b.update(1/60);
    for(const key of Object.keys(rest))near(a.pose[key],b.pose[key],1e-8);
  }
  assert.equal(a.active,false);assert.equal(b.active,false);
});
test('pause freezes the turn and resume continues it; reduced motion cancels it',()=>{
  const move=new MantaFlourish();move.start();move.update(1.2);
  const pose={...move.pose};assert.deepEqual(move.update(30,{paused:true}),pose);
  move.update(.1);assert.notDeepEqual(move.pose,pose);
  assert.deepEqual(move.update(.1,{reduced:true}),rest);assert.equal(move.active,false);
});
test('flourish does not alter the independent 50-cycle musical phase',()=>{
  const moving=new MantaRhythm(),control=new MantaRhythm(),move=new MantaFlourish();move.start();
  for(let i=0;i<300;i++){
    move.update(1/60);near(moving.update(1/60,i/60),control.update(1/60,i/60));
  }
});
