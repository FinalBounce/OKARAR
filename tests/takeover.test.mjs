import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const code=await readFile(new URL('../src/takeover.js',import.meta.url),'utf8');
const {Takeover,ATTACK_SECONDS}=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));

test('no attack before consent, while loading or during the intro',()=>{
  const scene=new Takeover(18);
  assert.equal(scene.update(null,false).active,false);
  assert.equal(scene.update(20,false).active,false);
  assert.equal(scene.update(null,true).active,false);
  assert.equal(scene.update(17.999,true).active,false);
  assert.equal(scene.update(18,true).active,false);
  assert.equal(scene.update(18.099,true).active,false);
  assert.equal(scene.update(18.1,true).active,true);
});
test('snare starts a visible 3-second attack; darkness reaches the kick independently',()=>{
  const scene=new Takeover(18);assert.equal(ATTACK_SECONDS,3);
  const mid=scene.update(18.7,true);assert.ok(Math.abs(mid.progress-.2)<1e-9);assert.ok(mid.dark>.49&&mid.dark<.51);
  const kick=scene.update(19.3,true);assert.ok(kick.progress<1);assert.equal(kick.dark,1);
  const end=scene.update(21.1,true);assert.equal(end.progress,1);assert.equal(end.swallowed,1);assert.ok(end.returning<1e-12);
  assert.ok(Math.abs(scene.update(22.3,true).returning-.5)<1e-9);
  assert.ok(scene.update(23.5,true).returning>.99999);
});
test('loop wrap and subsequent loops never replay the cinematic',()=>{
  const scene=new Takeover(18);scene.update(30,true);
  for(let i=0;i<5;i++)for(const t of [56.39,18,18.2,19,25])assert.equal(scene.update(t,true).progress,1);
});
test('mute freezes an in-progress attack and resume continues it',()=>{
  const scene=new Takeover(18),mid=scene.update(18.5,true);
  assert.deepEqual(scene.update(null,true),mid);
  assert.ok(scene.update(18.8,true).progress>mid.progress);
});
test('reduced motion or a paused animation switches directly without a lunge',()=>{
  const scene=new Takeover(18);assert.equal(scene.update(17,true,true).active,false);
  const after=scene.update(18.1,true,true);assert.equal(after.progress,1);assert.equal(after.dark,1);assert.equal(after.swallowed,1);
});
test('attack progress cannot rewind and a new visit starts with the manta',()=>{
  const scene=new Takeover(18),a=scene.update(18.5,true);
  assert.equal(scene.update(18.4,true).progress,a.progress);
  assert.equal(new Takeover(18).snapshot().active,false);
});
