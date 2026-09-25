import test from 'node:test';
import assert from 'node:assert/strict';
import {Scene,Group,Mesh,BoxGeometry,MeshBasicMaterial,PerspectiveCamera,Vector3} from 'three';
import {source} from './import-source.mjs';
const {renderWithHiddenActor}=await source('prewarm.js');
test('warmup draws in the real scene behind the camera and restores actor state',()=>{
  for(const fail of [false,true]){
    const scene=new Scene(),actor=new Group(),camera=new PerspectiveCamera(35,1,.1,100);
    const mesh=new Mesh(new BoxGeometry(),new MeshBasicMaterial());actor.add(mesh);scene.add(actor);
    actor.position.set(2,3,4);actor.visible=false;camera.position.set(.2,-.1,8.8);camera.lookAt(0,0,0);
    let draws=0;
    const renderer={render(s,c){
      draws++;assert.equal(s,scene);assert.equal(c,camera);
      assert.equal(actor.visible,true);assert.equal(mesh.frustumCulled,false);
      const p=camera.worldToLocal(actor.getWorldPosition(new Vector3()));
      assert.ok(p.z>20); // Behind the camera's near plane, no visible fragments.
      if(fail)throw Error('simulated render failure');
    }};
    if(fail)assert.throws(()=>renderWithHiddenActor(renderer,scene,camera,actor),/simulated/);
    else renderWithHiddenActor(renderer,scene,camera,actor);
    assert.equal(draws,1);assert.equal(actor.visible,false);assert.equal(mesh.frustumCulled,true);
    assert.deepEqual(actor.position.toArray(),[2,3,4]);
    mesh.geometry.dispose();mesh.material.dispose();
  }
});
