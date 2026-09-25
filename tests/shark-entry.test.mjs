import test from 'node:test';
import assert from 'node:assert/strict';
import {Box3,Vector3,Quaternion,Euler,PerspectiveCamera} from 'three';
import {source} from './import-source.mjs';
const {offscreenEntryOffset,entryWeight,ENTRY_JOIN,measureEntryBounds}=await source('shark-entry.js');
const {createShark}=await source('shark.js');

test('the entire entry envelope starts outside the right edge on every aspect and pointer tilt',()=>{
  const bounds=new Box3(new Vector3(-4,-2,-2),new Vector3(3,2,2));
  for(const [w,h,z,scale] of [[1280,720,8.8,1.38],[1777,1119,8.8,1.38],[3440,1440,8.8,1.38],[390,844,14.3,1.08],[320,740,14.3,1.08],[844,390,8.8,1.38]]){
    for(const px of [-1,0,1])for(const py of [-1,0,1])for(const anchorX of [-2.2,0,2.3]){
      const camera=new PerspectiveCamera(35,w/h,.1,100);camera.position.set(px*.22,py*.14,z);camera.lookAt(0,0,0);camera.updateMatrixWorld();
      const mouth=new Vector3(2.5,-.1,0),target=new Vector3(anchorX+Math.tan(Math.PI*35/360)*z*w/h*.60,.57,-8);
      const rotation=new Quaternion().setFromEuler(new Euler(0,-Math.PI/2-.38,.08));
      const offset=offscreenEntryOffset(camera,bounds,mouth,target,rotation,scale);
      for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z]){
        const point=new Vector3(x,y,z).sub(mouth).multiplyScalar(scale).applyQuaternion(rotation).add(target).add(offset).project(camera);
        assert.ok(point.x>1,`${w}x${h}: projected x ${point.x}`);
      }
    }
  }
});
test('entry offset is smooth and has no influence once the jaw starts pulling the manta',()=>{
  assert.equal(ENTRY_JOIN,.18);assert.equal(entryWeight(0),1);
  assert.ok(Math.abs(entryWeight(1e-5)-1)<1e-9);
  assert.ok(entryWeight(ENTRY_JOIN-1e-5)<1e-9);
  for(const t of [.18,.29,.69,.8,1,2])assert.equal(entryWeight(t),0);
  let previous=1;
  for(let i=1;i<=1000;i++){const weight=entryWeight(i/1000);assert.ok(weight<=previous);assert.ok(previous-weight<.011);previous=weight;}
});
test('the local procedural fallback also supplies a finite padded entry envelope',()=>{
  const shark=createShark({mobile:true,loadModel:false});
  const bounds=measureEntryBounds(shark.group);
  assert.equal(bounds.isEmpty(),false);
  assert.ok([...bounds.min.toArray(),...bounds.max.toArray()].every(Number.isFinite));
  assert.ok(bounds.getSize(new Vector3()).x>6);
});
