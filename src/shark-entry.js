import {Box3,Frustum,Matrix4,Vector3} from 'three';
import {smoother} from './motion.js';

// Join the established trajectory before the manta is pulled into the jaw.
export const ENTRY_JOIN=.18;
export const entryWeight=progress=>1-smoother(0,ENTRY_JOIN,progress);

export function measureEntryBounds(group){
  group.updateWorldMatrix(true,true);
  // Match the renderer's hierarchy update before sampling skinned vertices.
  // updateWorldMatrix does not refresh SkinnedMesh.bindMatrixInverse after
  // the imported rig has been scaled/rotated into our actor. Stale inverses
  // shrink the measured body and let a visible tail be relocated too early.
  group.updateMatrixWorld(true);
  const inverse=group.matrixWorld.clone().invert(),bounds=new Box3(),point=new Vector3();
  group.traverse(object=>{
    if(!object.isMesh)return;
    for(let i=0;i<object.geometry.attributes.position.count;i++){
      object.getVertexPosition(i,point).applyMatrix4(object.matrixWorld).applyMatrix4(inverse);
      bounds.expandByPoint(point);
    }
  });
  // Padding includes the tail/fin excursion between swim phases (and the
  // procedural fallback's vertex-shader deformation), not just a rigid hull.
  return bounds.expandByScalar(.8);
}

export function offscreenEntryOffset(camera,bounds,mouth,mouthTarget,rotation,scale){
  camera.updateMatrixWorld();
  const frustum=new Frustum().setFromProjectionMatrix(new Matrix4().multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse));
  const rightPlane=frustum.planes[0];
  const right=new Vector3(1,0,0).applyQuaternion(camera.quaternion);
  let inside=-Infinity;
  for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z]){
    const corner=new Vector3(x,y,z).sub(mouth).multiplyScalar(scale).applyQuaternion(rotation).add(mouthTarget);
    inside=Math.max(inside,rightPlane.distanceToPoint(corner));
  }
  // Every padded corner must lie outside the camera's right plane. This also
  // accounts for depth, portrait screens, ultrawide screens and pointer tilt.
  return right.multiplyScalar(Math.max(0,(inside+.35)/-rightPlane.normal.dot(right)));
}
