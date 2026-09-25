import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {source} from './import-source.mjs';
const {CaptureQuality}=await source('capture-quality.js');
const {engulfPose}=await source('engulf.js');

test('quality changes cannot whiten the visible manta anywhere in the first bite',()=>{
  for(const start of [.001,.16,.3,.4,.52,.59,.64,.68]){
    const quality=new CaptureQuality(false);
    quality.update({active:true,progress:start,veil:engulfPose(start).veil});
    assert.equal(quality.request(true),null);
    assert.equal(quality.requested,true,'resolution downgrade remains available immediately');
    for(let p=start;p<.69;p+=.001){
      assert.equal(quality.update({active:true,progress:p,veil:engulfPose(p).veil}),null);
      assert.equal(quality.applied,false,'keep the original optical material through the fade');
    }
    assert.equal(quality.update({active:true,progress:.69,veil:engulfPose(.69).veil}),true);
    assert.equal(quality.update({active:true,progress:.7,veil:1}),null,'apply only once, under full cover');
  }
});

test('both quality directions and a cancelled request preserve the captured look',()=>{
  const quality=new CaptureQuality(true);
  quality.update({active:true,progress:.5,veil:0});
  assert.equal(quality.request(false),null);
  assert.equal(quality.applied,true);
  assert.equal(quality.request(true),null);
  assert.equal(quality.update({active:true,progress:.7,veil:1}),null);
  assert.equal(quality.request(false),false);
});

test('normal swimming, later shark passes and reduced-motion skips keep quality controls available',()=>{
  for(const state of [{active:false,progress:0,veil:0},{active:true,progress:1,veil:0}]){
    const quality=new CaptureQuality(false);quality.update(state);
    assert.equal(quality.request(true),true);
    assert.equal(quality.request(false),false);
  }
  const quality=new CaptureQuality(false);
  quality.update({active:true,progress:.5,veil:0});quality.request(true);
  assert.equal(quality.update({active:true,progress:1,veil:0}),true);
});

test('a paused bite holds the material indefinitely and resumes through the same blackout',()=>{
  const quality=new CaptureQuality(false),state={active:true,progress:.62,veil:engulfPose(.62).veil};
  quality.update(state);quality.request(true);
  for(let i=0;i<500;i++){assert.equal(quality.update(state),null);assert.equal(quality.applied,false);}
  assert.equal(quality.update({active:true,progress:.69,veil:1}),true);
});

test('renderer keeps the resolution downgrade immediate and gates all quality appearance changes',async()=>{
  const scene=await readFile(new URL('../src/creature.js',import.meta.url),'utf8');
  assert.match(scene,/function setLight\(value\)\{isLight=value;renderer\.setPixelRatio\([^;]+;applyQualityAppearance\(captureQuality\.request\(value\)\);\}/);
  assert.match(scene,/captureQuality\.update\(\{active,progress,veil:engulf\.veil\}\)/);
  assert.match(scene,/function applyQualityAppearance\(value\)\{if\(value===null\)return;/);
});
