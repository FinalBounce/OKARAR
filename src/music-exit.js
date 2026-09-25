import {Frustum,Matrix4,Vector3,Quaternion,CubicBezierCurve3} from 'three';
import {offscreenEntryOffset} from './shark-entry.js';

const origin=new Vector3(),matrix=new Matrix4(),frustum=new Frustum();
const up=new Vector3(0,1,0),xAxis=new Vector3(1,0,0);
const facing=direction=>new Quaternion().setFromRotationMatrix(new Matrix4().lookAt(direction,origin,up)).multiply(new Quaternion().setFromAxisAngle(up,-Math.PI/2));

export function outsideCamera(camera,bounds,position,rotation,scale){
  camera.updateMatrixWorld();
  frustum.setFromProjectionMatrix(matrix.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse));
  const corners=[];
  for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z]){
    corners.push(new Vector3(x,y,z).multiplyScalar(scale).applyQuaternion(rotation).add(position));
  }
  return frustum.planes.some(plane=>corners.every(point=>plane.distanceToPoint(point)<-.05));
}

// A brief, nose-first glimpse on the way from Listen to Final Bounce. A full
// viewport crosses in 0.9 s; constant arc-length speed avoids a slow hover in
// the middle. Both staging poses include the complete animated envelope.
export function createMusicGlide({camera,bounds,small}){
  const depth=-6.5,height=Math.tan(camera.fov*Math.PI/360)*(camera.position.z-depth);
  const halfWidth=height*camera.aspect,scale=small?Math.min(.78*.82,halfWidth*2*.75/6.49):1.28*.82;
  let reach=halfWidth+bounds.getSize(new Vector3()).length()*scale+1;
  let route;
  for(let n=0;n<40;n++){
    const y=height*.38;
    const curve=new CubicBezierCurve3(new Vector3(-reach,y+.1,depth+.3),new Vector3(-reach*.35,y+.25,depth-.5),new Vector3(reach*.35,y-.25,depth-.9),new Vector3(reach,y-.35,depth-1));
    const speed=halfWidth*2/.9;
    route={curve,scale,speed,duration:curve.getLength()/speed,elapsed:0};
    const start=musicGlidePose(route,0),end=musicGlidePose(route,1);
    if(outsideCamera(camera,bounds,start.v,start.q,scale)&&outsideCamera(camera,bounds,end.v,end.q,scale))return route;
    reach+=2;
  }
  return null;
}
export function musicGlidePose(route,progress){
  const t=Math.max(0,Math.min(1,progress)),direction=route.curve.getTangentAt(t);
  return {v:route.curve.getPointAt(t),q:facing(direction).multiply(new Quaternion().setFromAxisAngle(xAxis,-Math.sin(t*Math.PI)*.06)),s:route.scale};
}

// Keep the existing leftward exit; turn around only once fully hidden. Then
// make the fast left-to-right glimpse and clear the tail before parking.
// Only the completed 02 → 03 crossing uses this handoff.
export function finishMusicExit({track,chapter,group,camera,bounds,idle,dt,small=false}){
  if(track?.chapter!==2||chapter!==3)return false;
  if(dt<=0)return true;
  if(!track.parked){
    if(!track.musicGlide){
      if(!outsideCamera(camera,bounds,group.position,group.quaternion,group.scale.x)){
        const forward=new Vector3(1,0,0).applyQuaternion(group.quaternion);
        group.position.addScaledVector(forward,6*Math.min(dt,.1));
        return true;
      }
      track.musicGlide=createMusicGlide({camera,bounds,small});
      if(!track.musicGlide)return true;
      const pose=musicGlidePose(track.musicGlide,0);
      group.position.copy(pose.v);group.quaternion.copy(pose.q);group.scale.setScalar(pose.s);
      return true;
    }
    const route=track.musicGlide;
    if(route.elapsed<route.duration){
      route.elapsed=Math.min(route.duration,route.elapsed+Math.min(dt,.1));
      const pose=musicGlidePose(route,route.elapsed/route.duration);
      group.position.copy(pose.v);group.quaternion.copy(pose.q);group.scale.setScalar(pose.s);
      return true;
    }
    // A resize can widen the camera during the glimpse. Keep swimming until
    // the current frustum, not the original route's frustum, is clear.
    if(!outsideCamera(camera,bounds,group.position,group.quaternion,group.scale.x)){
      group.position.addScaledVector(new Vector3(1,0,0).applyQuaternion(group.quaternion),route.speed*Math.min(dt,.1));
      return true;
    }
    track.parked=true;
  }
  const offset=offscreenEntryOffset(camera,bounds,origin,idle.v,idle.q,idle.s);
  group.position.copy(idle.v).add(offset);
  group.quaternion.copy(idle.q);
  group.scale.setScalar(idle.s);
  return true;
}
