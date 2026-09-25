import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {Vector3} from 'three';
import {source} from './import-source.mjs';
const {FrameClock,RenderBudget}=await source('render-budget.js');
const {lineBatch}=await source('line-batch.js');
const dom=await source('dom-cache.js');
const {TextFeast}=await source('feast.js');

test('60/90/120 Hz presentations keep 60 fps and account for skipped RAF time',()=>{
  for(const hz of [60,90,120])for(const jitter of [0,.15]){
    const clock=new FrameClock(),samples=[];let presentedAt=0;
    for(let i=0;i<=hz*10;i++){
      const now=i*1000/hz+Math.sin(i*.7)*jitter,dt=clock.take(now);
      if(dt!==null){samples.push(dt);presentedAt=now;}
    }
    assert.ok(Math.abs(samples.length-601)<=1,`${hz} Hz: ${samples.length} frames`);
    const elapsed=samples.slice(1).reduce((a,b)=>a+b,0);
    assert.ok(Math.abs(elapsed-presentedAt)<1e-6,'skipped frames must still advance motion time');
    assert.ok(samples.every(dt=>dt>0&&dt<26));
  }
});
test('frame deadline recovers after dropped frames and resets after visibility changes',()=>{
  const clock=new FrameClock();clock.take(0);
  assert.equal(clock.take(8),null);assert.equal(clock.take(50),50);
  assert.equal(clock.take(58),null);assert.ok(clock.take(67)>0);
  clock.reset();assert.equal(clock.take(90000),1000/60);
  assert.equal(clock.take(90008),null);
});
function runBudget(budget,frames,dt,options){
  const changes=[];for(let i=0;i<frames;i++){const v=budget.sample(dt,options);if(v!==null)changes.push(v);}return changes;
}
test('resolution budget holds detail at 60 fps and lowers only on sustained load',()=>{
  const b=new RenderBudget({dpr:3,ceiling:1.5});
  assert.deepEqual(runBudget(b,600,1000/60),[]);
  assert.deepEqual(runBudget(b,10,40),[],'a brief hitch must not change quality');
  assert.deepEqual(runBudget(b,600,1000/60),[]);
  const changes=runBudget(b,600,1000/30);
  assert.deepEqual(changes,[1.35,1.2,1.05,1]);assert.equal(b.ratio,1);
});
test('resolution recovers slowly, stays inside DPR limits and freezes during capture',()=>{
  const b=new RenderBudget({dpr:3,ceiling:1.5});
  runBudget(b,600,1000/30);assert.equal(b.ratio,1);
  assert.deepEqual(runBudget(b,300,1000/60),[],'no rapid up/down pumping');
  const changes=runBudget(b,4000,1000/60);
  assert.deepEqual(changes,[1.1,1.2,1.3,1.4,1.5]);
  assert.deepEqual(runBudget(b,600,40,{hold:true}),[]);assert.equal(b.ratio,1.5);
  const low=new RenderBudget({dpr:1,ceiling:1.5});
  assert.deepEqual(runBudget(low,600,40),[]);assert.equal(low.ratio,1);
  assert.equal(b.sample(5000),null,'a suspended tab is not a GPU benchmark');
  assert.equal(b.setCeiling(1.65),1.65);
});
test('batching preserves independent contour segments without linking adjacent rays',()=>{
  const lines=[[new Vector3(0,1,2),new Vector3(3,4,5),new Vector3(6,7,8)],
    [new Vector3(20,21,22),new Vector3(23,24,25)]];
  const g=lineBatch(lines);
  assert.deepEqual([...g.attributes.position.array],[0,1,2,3,4,5,3,4,5,6,7,8,20,21,22,23,24,25]);
  assert.equal(g.attributes.position.count,6);
});
test('DOM cache skips stable style, class, property and accessibility writes',()=>{
  let writes=0;const node={style:new Proxy({setProperty(){writes++;}},{set(o,k,v){writes++;o[k]=v;return true;}}),setAttribute(){writes++;},classList:{toggle(){writes++;}}};
  Object.defineProperty(node,'inert',{set(){writes++;}});
  for(let i=0;i<60;i++){
    dom.style(node,'opacity','1');dom.property(node,'inert',true);dom.attribute(node,'aria-hidden','true');dom.cssVariable(node,'--abyss-progress','0');dom.classState(node,'is-passing',false);
  }
  assert.equal(writes,5);dom.style(node,'opacity','.5');assert.equal(writes,6);
});
test('mobile aspiration keeps its trajectory without per-word blur or idle style writes',()=>{
  let writes=0;const el={style:new Proxy({},{set(o,k,v){writes++;o[k]=v;return true;}})};
  const f=Object.create(TextFeast.prototype);f.blur=false;f.words=[{el,amount:.5,index:0,x:10,y:20}];
  f.render({x:110,y:220});assert.equal(el.style.filter,'none');
  assert.equal(el.style.transform,'translate(50px,100px) rotate(-13deg) scale(0.5349999999999999)');
  const initial=writes;f.render({x:110,y:220});assert.equal(writes,initial);
  f.words[0].amount=0;f.render(null);const stable=writes;
  for(let i=0;i<120;i++)f.render(null);assert.equal(writes,stable);
});
test('mobile resize/render policy preserves native scrolling, 60 fps and anatomical shaders',async()=>{
  const main=await readFile(new URL('../src/main.js',import.meta.url),'utf8');
  const creature=await readFile(new URL('../src/creature.js',import.meta.url),'utf8');
  const css=await readFile(new URL('../style.css',import.meta.url),'utf8');
  assert.match(main,/new FrameClock\(60\)/);assert.doesNotMatch(main,/light\?30|slowFrames/);
  assert.match(main,/if\(preserve&&changed\)/);assert.match(main,/sceneState.active&&sceneState.progress<1/);
  assert.match(creature,/animateMaterial\(new THREE.LineBasicMaterial/g);
  assert.match(creature,/new THREE.LineSegments\(lineBatch/);assert.doesNotMatch(creature,/for\(const \{line,base\} of lines\)/);
  assert.match(creature,/fwidth\(vMantaSurface.x\)/);assert.match(creature,/w===renderWidth&&h===renderHeight/);
  assert.match(css,/#world\{height:100lvh\}/);
});
