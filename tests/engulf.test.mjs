import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {source} from './import-source.mjs';
const {engulfPose,ENGULF_EXIT_ROTATION,NIGHT_ENVIRONMENT_AT,returnTurnBlend,backgroundHandoff,sceneUiReady,SCENE_UI_RETURN_AT}=await source('engulf.js');
test('mouth opens fully before swallowing starts and stays open through capture',()=>{
  assert.equal(engulfPose(0).capture,0);assert.equal(engulfPose(.22).jaw,1);
  for(const t of [.30,.40,.50,.60,.70])assert.equal(engulfPose(t).jaw,1);
  assert.ok(engulfPose(.4).capture>0&&engulfPose(.4).capture<1);
  assert.equal(engulfPose(.59).capture,1);
});
test('screen occlusion only happens after the frontal lunge, never as a flash',()=>{
  assert.equal(engulfPose(.58).veil,0);
  assert.equal(engulfPose(.69).veil,1);
  assert.equal(engulfPose(.85).veil,1);
  assert.equal(engulfPose(1).veil,1);
  for(let i=1;i<1000;i++)assert.ok(Math.abs(engulfPose(i/1000).veil-engulfPose((i-1)/1000).veil)<.025);
});
test('the first attack leaves at its old endpoint and has no effect after the reveal',()=>{
  const final=engulfPose(1,1);assert.equal(final.exit,1);assert.equal(final.jaw,.13);assert.equal(final.engulf,0);assert.equal(final.veil,0);
});
test('the retreat stays covered and the reveal crosses the attack/return boundary continuously',()=>{
  for(const t of [.8,.87,.94,.999,1])assert.equal(engulfPose(t,0).veil,1);
  assert.equal(engulfPose(1,.04).veil,1);
  assert.equal(engulfPose(1,.34).veil,0);
  assert.ok(Math.abs(engulfPose(.99999).veil-engulfPose(1,.00001).veil)<1e-9);
  let previous=1;
  for(let i=0;i<=1000;i++){const veil=engulfPose(1,i/1000).veil;assert.ok(veil<=previous);assert.ok(previous-veil<.007);previous=veil;}
});
test('desktop, tablet and phone return rotations have no hard cut and preserve the later path',()=>{
  const exit=new THREE.Quaternion().setFromEuler(new THREE.Euler(...ENGULF_EXIT_ROTATION));
  for(const [width,height,z] of [[1641,882,11.8],[1024,768,11.8],[390,844,16],[844,390,11.8]]){
    const halfWidth=Math.tan(Math.PI*35/360)*z*width/height;
    const curve=new THREE.CatmullRomCurve3([
      new THREE.Vector3(-halfWidth-9,.74,-5),new THREE.Vector3(-halfWidth-2,1.1,-15),
      new THREE.Vector3(-.8,.5,-9),new THREE.Vector3(.2,.12,-.6)]);
    const facing=new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().lookAt(curve.getTangent(0),new THREE.Vector3(),new THREE.Vector3(0,1,0))).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),-Math.PI/2));
    assert.ok(exit.angleTo(facing)>2.5,'reproduce the former ~149° discontinuity');
    assert.ok(exit.angleTo(exit.clone().slerp(facing,returnTurnBlend(0)))<1e-7);
    assert.ok(exit.angleTo(exit.clone().slerp(facing,returnTurnBlend(.00001)))<1e-7);
    assert.ok(facing.angleTo(exit.clone().slerp(facing,returnTurnBlend(.2)))<1e-7);
  }
});
test('the background crossfades rather than switching at the kick',()=>{
  assert.equal(backgroundHandoff(.24),0);assert.equal(backgroundHandoff(.4),1);
  let last=0;for(let i=240;i<=400;i++){const a=backgroundHandoff(i/1000);assert.ok(a>=last&&a-last<.012);last=a;}
  assert.ok(1-backgroundHandoff(.39999)<1e-9);
});
test('the night reflection-map switch is fully hidden before and after its boundary',()=>{
  for(const delta of [-1/90,0,1/90])assert.equal(engulfPose(NIGHT_ENVIRONMENT_AT+delta).veil,1);
});
test('new UI stays absent throughout the lunge and the covered retreat',()=>{
  assert.equal(sceneUiReady({active:false,progress:1,returning:1}),false);
  for(const progress of [0,.01,.4,.69,.99])assert.equal(sceneUiReady({active:true,progress,returning:0}),false);
  for(const returning of [0,.04,.2,SCENE_UI_RETURN_AT-1e-5])assert.equal(sceneUiReady({active:true,progress:1,returning}),false);
});
test('new UI arrives only once the first passage and the blackout are over',()=>{
  for(const returning of [SCENE_UI_RETURN_AT,.5,1]){
    assert.equal(sceneUiReady({active:true,progress:1,returning}),true);
    assert.equal(engulfPose(1,returning).veil,0);
  }
});
test('UI reveal follows the audio timeline and remains ready through mute and loop wrap',async()=>{
  const {Takeover}=await source('takeover.js');
  const scene=new Takeover(18);
  assert.equal(sceneUiReady(scene.update(18.1,true)),false);
  assert.equal(sceneUiReady(scene.update(21.8,true)),false);
  assert.equal(sceneUiReady(scene.update(null,true)),false);
  assert.equal(sceneUiReady(scene.update(21.92,true)),true);
  assert.equal(sceneUiReady(scene.update(null,true)),true);
  scene.update(40,true);
  assert.equal(sceneUiReady(scene.update(18,true)),true);
  assert.equal(sceneUiReady(new Takeover(18).update(18.1,true,true)),true);
});
