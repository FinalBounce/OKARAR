import test from 'node:test';
import assert from 'node:assert/strict';
import {Vector3,Group} from 'three';
import {readFile} from 'node:fs/promises';
import {source} from './import-source.mjs';
const {tailCenter,createMantaTail}=await source('manta-tail.js');
const {bodySection}=await source('manta-anatomy.js');

test('the tail root is fixed inside the peduncle throughout every swim and capture phase',()=>{
  for(const mobile of [false,true]){
    const tail=createMantaTail({mobile}),reference=tail.geometry.attributes.position.array.slice(0,(mobile?7:9)*3);
    for(const phase of [0,.7,2,3.8,5.9])for(const flow of [0,.6,1])for(const capture of [0,.5,1]){
      tail.update({phase,flow,capture});
      const p=tail.geometry.attributes.position;
      assert.deepEqual(p.array.slice(0,reference.length),reference);
      for(let i=0;i<reference.length/3;i++){
        const section=bodySection(p.getY(i));
        assert.ok(Math.abs(p.getX(i))<section.width*.5);
        assert.ok(p.getZ(i)<.03+section.height&&p.getZ(i)>.03-section.height*.71);
      }
    }
  }
});
test('only the free end trails the music, periodically and without a hinge at the root',()=>{
  for(const phase of [0,1,3,5]){
    for(const t of [0,.08,.16])assert.ok(tailCenter(t,{phase}).distanceTo(tailCenter(t,{phase:0}))<1e-12);
    for(let t=0;t<=1;t+=.05)assert.ok(tailCenter(t,{phase}).distanceTo(tailCenter(t,{phase:phase+Math.PI*2}))<1e-12);
    assert.ok(tailCenter(.16001,{phase}).sub(tailCenter(.16,{phase})).x<1e-8);
  }
  assert.ok(tailCenter(1,{phase:0}).distanceTo(tailCenter(1,{phase:Math.PI}))>.10);
});
test('tail surface stays finite, tapered, correctly lit and inside its culling bounds',()=>{
  const point=new Vector3(),normal=new Vector3();
  for(const mobile of [false,true]){
    const tail=createMantaTail({mobile});
    for(const phase of [0,.5,2,4,6])for(const capture of [0,.5,1]){
      tail.update({phase,capture,flow:1});
      const {position:p,normal:n}=tail.geometry.attributes;
      for(let i=0;i<p.count;i++){
        point.fromBufferAttribute(p,i);normal.fromBufferAttribute(n,i);
        assert.ok(point.toArray().every(Number.isFinite));
        assert.ok(Math.abs(normal.length()-1)<1e-6);
        assert.ok(tail.geometry.boundingSphere.containsPoint(point));
      }
      assert.ok(p.count<900,'small CPU-deformed mesh on both layouts');
    }
  }
});
test('rolls and scroll poses transform the tail and its attachment as one animal',()=>{
  const body=new Group(),tail=new Group();body.add(tail);
  for(const angle of [0,.7,Math.PI,4,6.1]){
    body.rotation.set(angle,.7,-.2);body.position.set(2,-1,.6);body.scale.setScalar(.9);
    body.updateMatrixWorld(true);
    const root=tailCenter(0,{phase:angle});
    assert.ok(body.localToWorld(root.clone()).distanceTo(tail.localToWorld(root.clone()))<1e-9);
  }
});
test('tail vertices have one deformation path, with no second wing shader or independent transform',async()=>{
  const code=await readFile(new URL('../src/creature.js',import.meta.url),'utf8');
  assert.match(code,/tailMaterial\.onBeforeCompile=\(\)=>\{\}/);
  assert.match(code,/creature\.add\(tail\)/);
  assert.match(code,/tailRig\.update\(\{phase,flow:amplitude,capture:uniforms\.uCapture\.value\}\)/);
  assert.doesNotMatch(code,/tail\.(position|rotation|quaternion|scale)\./);
});
