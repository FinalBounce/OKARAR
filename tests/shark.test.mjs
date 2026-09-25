import { test } from 'node:test';
import assert from 'node:assert/strict';
import { source } from './import-source.mjs';
const threeURL=new URL('../node_modules/three/build/three.module.js',import.meta.url).href;
const THREE=await import(threeURL);
const {createProceduralShark:createShark}=await source('shark.js');
test('desktop and mobile meshes contain finite positions and normals',()=>{
  const counts=[];
  for(const mobile of [false,true]){
    const shark=createShark({mobile});let vertices=0;
    shark.group.traverse(mesh=>{
      if(!mesh.geometry)return;
      vertices+=mesh.geometry.attributes.position.count;
      for(const name of ['position','normal'])if(mesh.geometry.attributes[name])assert.ok([...mesh.geometry.attributes[name].array].every(Number.isFinite),name);
    });
    assert.ok(vertices>5000);assert.ok(shark.group.getObjectByName('mouth-floor'));counts.push(vertices);
  }
  assert.ok(counts[1]<counts[0],'mobile geometry is lighter');
});
test('glass body uses physical transmission, not opaque metallic skin',()=>{
  const s=createShark(),material=s.group.children[0].material;
  assert.equal(material.isMeshPhysicalMaterial,true);assert.equal(material.metalness,0);assert.equal(material.transmission,1);
  s.setLight(true);assert.ok(material.transmission>=.9);
  s.setFinish(1);assert.ok(material.roughness<.05);assert.equal(material.transmission,1);
});
test('mouth projection follows the animal and is periodic with swimming phase',()=>{
  const s=createShark(),camera=new THREE.PerspectiveCamera(35,1280/720,.1,100);camera.position.z=10;camera.lookAt(0,0,0);camera.updateMatrixWorld();
  s.group.rotation.y=-Math.PI/2;
  s.animate({phase:.2,jawOpen:.8,instant:true});const a=s.mouth(camera,1280,720);
  assert.ok(Object.values(a).every(Number.isFinite));assert.ok(a.left<a.right&&a.top<a.bottom);
  s.animate({phase:.2+2*Math.PI,jawOpen:.8,instant:true});const b=s.mouth(camera,1280,720);
  for(const key of Object.keys(a))assert.ok(Math.abs(a[key]-b[key])<1e-8);
  s.group.position.x=2;assert.ok(s.mouth(camera,1280,720).x>a.x);
});
test('closing the real jaw reduces its projected contact area',()=>{
  const s=createShark(),camera=new THREE.PerspectiveCamera(35,1280/720,.1,100);camera.position.z=10;camera.lookAt(0,0,0);camera.updateMatrixWorld();s.group.rotation.y=-Math.PI/2;
  s.animate({phase:0,jawOpen:1,instant:true});const open=s.mouth(camera,1280,720);
  s.animate({phase:0,jawOpen:0,instant:true});const closed=s.mouth(camera,1280,720);
  assert.ok(open.bottom-open.top>closed.bottom-closed.top);
});
test('mouth contains recessed surfaces, flexible cheeks and two rows per jaw, not an orb',()=>{
  const s=createShark();
  for(const name of ['recessed-palate','mouth-floor','flexible-mouth-corner','upper-teeth-two-rows','lower-teeth-two-rows'])assert.ok(s.group.getObjectByName(name));
  assert.equal(s.group.getObjectByName('throat'),undefined);
  s.animate({phase:0,jawOpen:0,instant:true});assert.equal(s.jawOpen,.13);
});
