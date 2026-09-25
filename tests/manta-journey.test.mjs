import test from 'node:test';
import assert from 'node:assert/strict';
import {Vector3,Euler,Quaternion} from 'three';
import {readFile} from 'node:fs/promises';
import {source} from './import-source.mjs';
const {mantaJourneyPose,MantaJourneyCues}=await source('manta-journey.js');
const {MantaFlourish,flourishPose,DIVE_SECONDS,FLOURISH_SECONDS}=await source('manta-flourish.js');
const {wingDisplacement}=await source('rhythm.js');
const q=p=>new Quaternion().setFromEuler(new Euler(p.rx,p.ry,p.rz));

test('all four established opening poses are preserved at their section landmarks',()=>{
  const poses=[[0,.35,8.8,.30,-.25,-.35,1],[2,-.1,7.5,.6,-.6,.65,1.12],[2.3,.05,6.3,-.28,.30,-.75,1],[-2.2,.1,8.6,1,-.4,.3,1.3]];
  for(const [i,[x,y,z,rx,ry,rz,s]] of poses.entries()){
    const p=mantaJourneyPose(i);
    assert.deepEqual([p.x,p.y,p.z,p.s],[x,y,z,s]);assert.ok(p.q.angleTo(q({rx,ry,rz}))<1e-7);
  }
});
test('later sections show the underside and turn the head down instead of only upwards',()=>{
  const instagram=mantaJourneyPose(4),contact=mantaJourneyPose(5);
  assert.ok(new Vector3(0,0,1).applyQuaternion(instagram.q).z<-.7);
  for(const p of [instagram,contact])assert.ok(new Vector3(0,1,0).applyQuaternion(p.q).y<-.4);
  assert.ok(new Vector3(0,0,1).applyQuaternion(contact.q).z<.5,'descending profile');
});
test('rotation and camera interpolation stay continuous in both scroll directions and layouts',()=>{
  for(const small of [false,true]){
    let last=null;
    for(let i=0;i<=1000;i++){
      const p=mantaJourneyPose(i/200,{small});
      assert.ok(Math.abs(p.q.length()-1)<1e-9);
      if(last){assert.ok(p.q.angleTo(last.q)<.04);assert.ok(Math.abs(p.z-last.z)<.04);}
      last=p;
    }
    for(const boundary of [1,2,3,4]){
      const a=mantaJourneyPose(boundary-1e-6,{small}),b=mantaJourneyPose(boundary+1e-6,{small});
      assert.ok(a.q.angleTo(b.q)<1e-6);assert.ok(Math.abs(a.x-b.x)<1e-8);
    }
  }
});
test('entry greeting belongs to the shared consent handler, never to audio playback',async()=>{
  const code=await readFile(new URL('../src/main.js',import.meta.url),'utf8');
  const enter=code.slice(code.indexOf('function enter('),code.indexOf("$('#enter-sound').addEventListener"));
  assert.match(enter,/if\(entered\)return/);assert.match(enter,/flourish\.start\(.*!paused.*!reduced/);
  assert.match(code,/enter\(true\)/);assert.match(code,/enter\(false\)/);
  assert.equal((enter.match(/flourish\.start/g)||[]).length,1);
});
test('new full-body mobile views fit narrow phones without changing the opening landmarks',()=>{
  for(const aspect of [319/1120,320/740,390/844,430/932]){
    for(const chapter of [4,5]){
      const p=mantaJourneyPose(chapter,{small:true,aspect});
      assert.equal(p.x,0);assert.ok(p.s*6.7<=2*Math.tan(35*Math.PI/360)*p.z*aspect*.900001);
    }
    for(const chapter of [0,1,2,3])assert.equal(mantaJourneyPose(chapter,{small:true,aspect}).s,mantaJourneyPose(chapter,{small:true}).s);
  }
});
test('the descending spiral is distinct, slower and joins its resting pose seamlessly',()=>{
  assert.ok(DIVE_SECONDS>FLOURISH_SECONDS);
  const p=flourishPose(.5,'dive');assert.ok(p.y<-.6&&p.z<-.9);assert.equal(p.ry,-Math.PI);
  for(const t of [0,1,1e-6,1-1e-6]){
    const p=flourishPose(t,'dive');assert.ok(q(p).angleTo(new Quaternion())<1e-6);
    assert.ok(Math.abs(p.y)<1e-8);
  }
  for(let i=0;i<=200;i++){
    const p=flourishPose(i/200,'dive');assert.ok(p.scale>=.88&&p.scale<=1);
    assert.ok(p.y<=0&&p.z<=0);
  }
});
test('the additional figure waits between turns and plays only once on the later section',()=>{
  const director=new MantaJourneyCues(),move=new MantaFlourish();move.start();
  director.update(move,{position:0,delta:.1});move.update(FLOURISH_SECONDS);
  assert.equal(director.update(move,{position:4,delta:1}),false);
  assert.equal(director.update(move,{position:4,delta:1.4}),true);
  assert.equal(move.kind,'dive');assert.equal(director.divePlayed,true);
  move.update(DIVE_SECONDS);
  for(const position of [3,4,3.9,4,0,4])assert.equal(director.update(move,{position,delta:10}),false);
});
test('deep-link entry does not stack two greeting figures; skipped sections do not trigger',()=>{
  const director=new MantaJourneyCues(),move=new MantaFlourish();
  assert.equal(director.update(move,{position:4,delta:20}),false);
  director.update(move,{position:0,delta:20});
  assert.equal(director.update(move,{position:4,target:5,delta:20}),false);
  assert.equal(director.divePlayed,false);
});
test('the shark, pause, fallback and reduced motion can all inhibit automatic choreography',()=>{
  const director=new MantaJourneyCues(),move=new MantaFlourish();
  director.update(move,{position:0,delta:3});
  assert.equal(director.update(move,{position:4,allowed:false,delta:10}),false);
  assert.equal(move.active,false);assert.equal(director.divePlayed,false);
  move.start(true,'dive');move.update(1);const before={...move.pose};
  assert.deepEqual(move.update(3,{paused:true}),before);
  move.update(.1,{reduced:true});assert.equal(move.active,false);
});
test('both figure variants are frame-rate independent',()=>{
  for(const kind of ['roll','dive']){
    const a=new MantaFlourish(),b=new MantaFlourish();a.start(true,kind);b.start(true,kind);
    for(let i=0;i<144;i++){
      a.update(1/30);b.update(1/60);b.update(1/60);
      assert.ok(q(a.pose).angleTo(q(b.pose))<1e-7);assert.ok(Math.abs(a.pose.y-b.pose.y)<1e-8);
    }
  }
});
test('swimming holds the head steady while the outer wings keep their musical amplitude',()=>{
  for(const phase of [0,.3,1,2,4,6])for(const y of [-.5,.5,1.3]){
    assert.equal(wingDisplacement(.3,y,phase,1,1),0);
    assert.ok(Math.abs(wingDisplacement(.7,y,phase,1,1))<.10);
  }
  assert.ok(Math.abs(wingDisplacement(3.35,.11,0,.6,0))>1.4);
  assert.equal(wingDisplacement(3.35,.11,0,.6,0),wingDisplacement(3.35,.11,Math.PI*2,.6,0));
});
