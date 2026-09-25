import {Vector3} from 'three';

// Compile alone does not upload textures/skin buffers or necessarily select
// the exact clipping variant used by a real draw. Draw once behind the camera
// during the intro, in the normal scene/framebuffer, without visible pixels.
export function renderWithHiddenActor(renderer,scene,camera,actor){
  const position=actor.position.clone(),visible=actor.visible,culled=[];
  camera.updateWorldMatrix(true,false);
  const behind=camera.localToWorld(new Vector3(0,0,30));
  if(actor.parent)actor.parent.worldToLocal(behind);
  actor.position.copy(behind);actor.visible=true;
  actor.traverse(part=>{if(part.isMesh){culled.push([part,part.frustumCulled]);part.frustumCulled=false;}});
  try{renderer.render(scene,camera);}
  finally{
    actor.position.copy(position);actor.visible=visible;
    for(const [part,value] of culled)part.frustumCulled=value;
    actor.updateWorldMatrix(true,true);
  }
}
