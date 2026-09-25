import {BufferGeometry,Float32BufferAttribute} from 'three';

// Pair adjacent vertices so many independent polylines share one draw call,
// without connecting the end of one anatomical ray to the next.
export function lineBatch(polylines){
  const positions=[];
  for(const points of polylines)for(let i=1;i<points.length;i++){
    positions.push(...points[i-1].toArray(),...points[i].toArray());
  }
  return new BufferGeometry().setAttribute('position',new Float32BufferAttribute(positions,3));
}
