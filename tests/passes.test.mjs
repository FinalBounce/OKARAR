import {test} from 'node:test';
import assert from 'node:assert/strict';
import {source} from './import-source.mjs';
const {PassDirector,PASS_SECONDS}=await source('passes.js');
const {consumptionAt}=await source('takeover.js');
const {TextFeast}=await source('feast.js');

test('normal swim pass lasts three 1.2-second cycles and does not bite',()=>{
  assert.ok(Math.abs(PASS_SECONDS-3.6)<1e-12);const d=new PassDirector();
  const pass=d.update(.2,1/60);assert.equal(pass.chapter,0);assert.equal(pass.jaw,undefined);
  for(let i=0;i<220;i++)d.update(.2,1/60);
  assert.equal(d.update(.4,1/60),null);
});
test('no pass during the intro or in reduced motion; pause freezes a pass',()=>{
  const d=new PassDirector();assert.equal(d.update(.2,.05,{active:false}),null);
  assert.equal(d.update(.3,.05,{reduced:true}),null);
  const p=d.update(.4,.05);assert.ok(p);
  assert.deepEqual(d.update(.4,.5,{paused:true}),p);
  assert.ok(d.update(.4,.05).t>p.t);
});
test('scrolling back allows another pass; large jumps still cancel non-home passes',()=>{
  const d=new PassDirector();const first=d.update(.2,.01);
  for(let i=0;i<40;i++)d.update(.2,.1);
  d.update(0,.1);for(let i=0;i<4;i++)d.update(0,.1);
  const next=d.update(.2,.1);assert.ok(next.id>first.id);
  for(let i=0;i<40;i++)d.update(.2,.1);
  d.update(1,.1);for(let i=0;i<4;i++)d.update(1,.1);
  assert.equal(d.update(1.3,.1).chapter,1);
  assert.equal(d.update(3,.1),null);
});
test('one-section forward scroll retains the authored pass and delivers its exact endpoint',()=>{
  const d=new PassDirector();let position=0,first=null,last=0;
  for(let frame=0;frame<300;frame++){
    position+=(1-position)*(1-Math.exp(-8/60));
    const pass=d.update(position,1/60,{target:1});
    if(pass){first??=pass.id;assert.equal(pass.id,first);assert.equal(pass.chapter,0);last=pass.t;}
  }
  assert.ok(first);assert.equal(last,1);
});
test('a little forward overscroll keeps the first overhead fly-by instead of a frontal connector',()=>{
  for(const fps of [30,60,120])for(const end of [1.05,1.12,1.25,1.5,1.7])for(const gesture of ['one-wheel','continued']){
    const d=new PassDirector();let position=0,first=null,last=0;
    for(let frame=0;frame<fps*6;frame++){
      const target=gesture==='continued'&&frame<fps/2?.85:end;
      position+=(target-position)*(1-Math.exp(-8/fps));
      const pass=d.update(position,1/fps,{target});
      assert.equal(d.redirecting,false,`${fps} fps, target ${end}, ${gesture}: do not cancel the overflight`);
      if(pass){first??=pass.id;assert.equal(pass.id,first,'do not chain an unrelated second pass from easing residue');assert.equal(pass.chapter,0);last=pass.t;}
    }
    assert.ok(first);assert.equal(last,1);
    // A later, deliberate scroll still triggers the following section's pass.
    let next=null;
    for(let frame=0;frame<fps&&!next;frame++){
      position+=(2-position)*(1-Math.exp(-8/fps));
      next=d.update(position,1/fps,{target:2});
    }
    assert.equal(next?.chapter,1);
  }
});
test('snap-back, reversal and skipped chapters cannot interrupt the safe home overflight',()=>{
  for(const fps of [30,60,120])for(const at of [.05,.2,.45,.65,.9])for(const target of [0,.08,.5,1,1.8,2,3,5]){
    const d=new PassDirector();let position=0,first=null,last=0,completed=false;
    for(let frame=0;frame<fps*5;frame++){
      const end=frame/fps<PASS_SECONDS*at?1:target;
      position+=(end-position)*(1-Math.exp(-8/fps));
      const pass=d.update(position,1/fps,{target:end});
      if(pass){
        first??=pass.id;assert.equal(pass.id,first);assert.equal(pass.chapter,0);
        assert.equal(d.redirecting,false);assert.ok(pass.t>=last);last=pass.t;
      }else if(first){assert.equal(last,1,'deliver the safe endpoint before handing off');completed=true;break;}
    }
    assert.ok(completed);
  }
});
test('a fast departure cannot skip the safe fly-by even if easing jumps past chapter zero',()=>{
  for(const target of [1.8,2,3,5])for(const position of [.2,.9,1.4,3,5]){
    const d=new PassDirector(),pass=d.update(position,1/30,{target});
    assert.equal(pass?.chapter,0);assert.equal(pass.t,0);assert.equal(d.redirecting,false);
  }
});
test('tiny gestures below the original departure threshold do not start a fly-by',()=>{
  const d=new PassDirector();
  assert.equal(d.update(.06,1/60,{target:1}),null);
  assert.equal(d.update(.13,1/60,{target:1}),null);
  assert.equal(d.update(.05,1/60,{target:0}),null);
  assert.equal(d.update(0,1/60,{target:0}),null);
});
test('an interrupted home fly-by finishes once and can play again after returning home',()=>{
  const d=new PassDirector(),first=d.update(.2,1/60,{target:1});
  let last=0;
  for(let frame=0;frame<300;frame++){
    const pass=d.update(0,1/60,{target:0});
    if(pass){assert.equal(pass.id,first.id);last=pass.t;}
  }
  assert.equal(last,1);assert.equal(d.pass,null);
  const next=d.update(.2,1/60,{target:1});
  assert.equal(next.chapter,0);assert.ok(next.id>first.id);
});
test('smoothed multi-section jumps do not queue passes for intermediate chapters',()=>{
  for(const end of [3,5]){
    const d=new PassDirector();d.update(1,1/60,{active:false});d.update(1.2,1/60);let position=1.2;
    for(let frame=0;frame<360;frame++){
      position+=(end-position)*(1-Math.exp(-8/60));
      assert.equal(d.update(position,1/60,{target:end,busy:frame<240}),null);
    }
  }
});
test('slow reverse scrolling cancels an obsolete pass too, not only a large one-frame delta',()=>{
  const d=new PassDirector();d.update(1,1/60,{active:false});d.update(1.4,1/60);
  for(let i=1;i<=12;i++)d.update(1.4-i*.01,1/60);
  assert.equal(d.pass,null);assert.equal(d.redirecting,true);
});
test('original aspiration moves consecutive words between .12 and .70 of a section',()=>{
  assert.ok(consumptionAt(1.12,1,0,4)<1e-12);
  assert.ok(consumptionAt(1.2,1,0,4)>0);assert.equal(consumptionAt(1.2,1,3,4),0);
  for(let i=0;i<4;i++)assert.ok(consumptionAt(1.7,1,i,4)>.999999);
  assert.equal(consumptionAt(1,1,2,4),0);
});
function feast(){const f=Object.create(TextFeast.prototype);f.held=false;f.words=[0,1,2,3].map(index=>({chapter:0,index,count:4,x:100,y:200,amount:0,el:{style:{}}}));return f;}
test('V4 transform contains full translation, alternating 26-degree turn, 93% shrink and blur',()=>{
  const f=feast();f.prepare(.36,true);f.render({x:600,y:100});
  const w=f.words.find(w=>w.amount>0&&w.amount<1),a=w.amount;
  assert.equal(w.el.style.transform,`translate(${500*a}px,${-100*a}px) rotate(${(w.index%2?1:-1)*a*26}deg) scale(${1-a*.93})`);
  assert.equal(w.el.style.opacity,String(1-a));assert.equal(w.el.style.filter,`blur(${a*1.1}px)`);
});
test('keep text, reverse scroll and fallback restore every word without deleting DOM',()=>{
  for(const mode of ['held','reverse','fallback','reduced']){
    const f=feast();f.prepare(.8,true);assert.equal(f.render({x:300,y:200}),4);
    if(mode==='held')f.held=true;
    f.prepare(mode==='reverse'?0:.8,true,{still:mode==='reduced'});
    f.render(mode==='fallback'?null:{x:300,y:200});
    for(const w of f.words){assert.equal(w.el.style.opacity,'1');assert.equal(w.el.style.transform,'none');assert.equal(w.el.style.filter,'none');}
  }
});
