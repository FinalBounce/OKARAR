import test from 'node:test';
import assert from 'node:assert/strict';
import {source} from './import-source.mjs';
const {MantaResponse}=await source('manta-response.js');
const {phaseAt,wingDisplacement}=await source('rhythm.js');

test('the measured first-snare FFT step used to enlarge the ray and reverse its rising wing',()=>{
  const before={t:18.019689333321413,energy:.5134375},after={t:18.03622466665773,energy:1};
  const wing=p=>wingDisplacement(3.15,.15,phaseAt(p.t),.6,p.energy*.3);
  assert.ok(wing(after)<wing(before),'reproduce the unwanted downward kick');
  assert.ok((1+after.energy*.022)/(1+before.energy*.022)>1.01,'over 1% enlargement in a single frame');
});
test('the same measured impact no longer reverses the rising wing or pops the body scale',()=>{
  const response=new MantaResponse();
  for(let i=0;i<180;i++)response.update(.671875,1/60);
  let previous=null;
  const samples=[[17.960967,.671875],[17.977811,.6184375],[18.003256,.5665625],[18.019689,.5134375],[18.036225,1],[18.052881,1],[18.077410,1],[18.094998,1],[18.111498,1],[18.127844,1]];
  for(const [t,raw] of samples){
    const dt=previous?t-previous.t:1/60,energy=response.update(raw,dt);
    const wing=wingDisplacement(3.15,.15,phaseAt(t),.6,energy*.3),scale=1+energy*.022;
    if(previous){
      if(t>18.0033)assert.ok(wing>previous.wing,'the upstroke continues through the snare');
      assert.ok(Math.abs(scale-previous.scale)<.001,'less than a tenth of one percent per sampled frame');
    }
    previous={t,wing,scale};
  }
});
test('reaction is continuous at the onset, has no overshoot and matches at 30/60/120 fps',()=>{
  const endings=[];
  for(const fps of [30,60,120]){
    const response=new MantaResponse();let last=0;
    for(let i=0;i<fps;i++){
      const value=response.update(1,1/fps);
      assert.ok(value>=last&&value<=1);last=value;
      if(i===0)assert.ok(value<.06,'no first-frame step');
    }
    endings.push(response.value);
  }
  assert.ok(Math.max(...endings)-Math.min(...endings)<1e-12);
  const tiny=new MantaResponse();assert.ok(tiny.update(1,1e-7)<1e-10);
});
test('silence and rapid accents stay bounded; pause preserves both value and velocity',()=>{
  const response=new MantaResponse();
  for(let i=0;i<1000;i++){
    const value=response.update(i%23<5?1:0,1/60);assert.ok(value>=0&&value<=1);
    const velocity=response.velocity;
    assert.equal(response.update(1,.5,true),value);assert.equal(response.velocity,velocity);
    assert.equal(response.update(0,0),value);
  }
  for(let i=0;i<300;i++)response.update(0,1/60);
  assert.ok(response.value<1e-10);
});
