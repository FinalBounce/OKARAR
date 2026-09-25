import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {source} from './import-source.mjs';
const {instagramPose,instagramPassScale,sharkIdlePose}=await source('shark-arrival.js');
const {smoother}=await source('motion.js');
const formats=[[1280,720],[1777,1119],[3440,1440],[844,390],[390,844],[319,1120]];
function layout(w,h){
  const small=w<=800;
  return {small,halfWidth:Math.tan(35*Math.PI/360)*(small?16:11.8)*w/h};
}
test('Instagram ends at standby scale on desktop and mobile, without a second departure',()=>{
  for(const [w,h] of formats){
    const size=layout(w,h),base=size.small?.78:1.28,pose=instagramPose(size);
    pose.s=instagramPassScale(base,size,1);
    for(let time=0;time<60;time+=1/30){
      const idle=sharkIdlePose({...size,chapter:4,time});
      // The same tolerances used by the live idle/connector handoff. Include
      // every phase of the living drift, not just a motionless endpoint.
      assert.ok(pose.v.distanceTo(idle.v)<.45,`${w}x${h}: position`);
      assert.ok(pose.q.angleTo(idle.q)<.22,`${w}x${h}: orientation`);
      assert.ok(Math.abs(pose.s-idle.s)<.08,`${w}x${h}: scale must not trigger transit`);
      assert.equal(pose.s,idle.s);
    }
    if(!size.small)assert.ok(Math.abs(base-pose.s)>.08,'reproduces the old desktop handoff failure');
  }
});
test('only the last part of the Instagram pass settles, smoothly, with mobile behavior preserved',()=>{
  for(const [w,h] of formats){
    const size=layout(w,h),base=size.small?.78:1.28,end=instagramPose(size).s;
    for(const t of [0,.1,.3,.5,.65])assert.equal(instagramPassScale(base,size,t),base);
    for(const fps of [30,60,120]){
      let previous=base;
      for(let frame=0;frame<=Math.ceil(3.6*fps);frame++){
        const t=Math.min(1,frame/(3.6*fps)),s=instagramPassScale(base,size,t);
        assert.ok(s<=previous+1e-12&&s>=end-1e-12);
        assert.ok(Math.abs(s-previous)<.025,'no size jump');
        if(size.small)assert.equal(s,base+(end-base)*smoother(.65,1,t));
        previous=s;
      }
      assert.equal(previous,end);
    }
    const epsilon=1e-4;
    assert.ok(Math.abs(instagramPassScale(base,size,.65+epsilon)-base)/epsilon<1e-5);
    assert.ok(Math.abs(end-instagramPassScale(base,size,1-epsilon))/epsilon<1e-5);
  }
});
test('the renderer applies this handoff only to the Instagram pass, on every layout',async()=>{
  const code=await readFile(new URL('../src/creature.js',import.meta.url),'utf8');
  assert.match(code,/if\(pass\.chapter===3\)shark\.group\.scale\.setScalar\(instagramPassScale\(shark\.group\.scale\.x,\{small,halfWidth\},pass\.t\)\)/);
});
