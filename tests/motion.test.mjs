import {test} from 'node:test';
import assert from 'node:assert/strict';
import {source} from './import-source.mjs';
const {JawMotion,REST_GAPE,smoother}=await source('motion.js');
const {PredatorRhythm,phaseAt}=await source('rhythm.js');
const distance=(a,b)=>Math.abs(Math.atan2(Math.sin(a-b),Math.cos(a-b)));
test('jaw is slightly open at rest and never snaps shut',()=>{
  const jaw=new JawMotion();assert.equal(jaw.value,REST_GAPE);
  let previous=jaw.value;
  for(let i=0;i<120;i++){const v=jaw.update(i<40?1:0,1/60);assert.ok(Math.abs(v-previous)<.20);assert.ok(v>=REST_GAPE-1e-12);previous=v;}
  assert.ok(Math.abs(jaw.value-REST_GAPE)<1e-10);
});
test('jaw damping is frame-rate independent and pause holds state and velocity',()=>{
  const a=new JawMotion(),b=new JawMotion();
  for(let i=0;i<12;i++)a.update(1,1/60);for(let i=0;i<6;i++)b.update(1,1/30);
  assert.ok(Math.abs(a.value-b.value)<1e-12);const value=a.value,velocity=a.velocity;
  a.update(.13,0);assert.equal(a.value,value);assert.equal(a.velocity,velocity);
});
test('quintic movement has stationary starts and ends',()=>{
  assert.equal(smoother(0,1,0),0);assert.equal(smoother(0,1,1),1);
  assert.ok(smoother(0,1,.001)<1e-7);assert.ok(1-smoother(0,1,.999)<1e-7);
});
test('predator stays at 50 cycles per minute, even with legacy attack flag',()=>{
  for(const attacking of [false,true]){
    const r=new PredatorRhythm();
    for(let i=1;i<=600;i++)r.update(1/60,i/60,false,attacking);
    assert.ok(distance(r.phase,phaseAt(10))<.001);
    const before=r.phase;r.update(.2,20,true,!attacking);assert.equal(before,r.phase);
  }
});
test('attack flag cannot cause a phase jump or acceleration',()=>{
  const r=new PredatorRhythm();r.update(.016,17);
  for(let i=0;i<120;i++){const p=r.phase;r.update(1/60,17+i/60,false,i<60);assert.ok(distance(p,r.phase)<.5);}
});
