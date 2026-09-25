import {BufferGeometry,Float32BufferAttribute,Vector3} from 'three';
import {wingDisplacement} from './rhythm.js';

// The first 16% is embedded in the peduncle and cannot sway independently.
// Only the free tip trails the same musical phase as the rest of the animal.
export function tailCenter(t,{phase=0,flow=.6,capture=0}={}){
  const bend=Math.max(0,(t-.16)/.84),weight=bend*bend;
  const strength=(.65+flow*.35)*(1-capture*.75);
  const x=weight*(.10*Math.sin(t*2)+.14*strength*Math.sin(phase-bend*2.3));
  const y=-1.45-t*2.87;
  const z=.03+weight*(.025-.05*strength*Math.cos(phase-bend*1.6));
  return new Vector3(x*(1-capture*.52),y,z+wingDisplacement(x,y,phase,flow,0,capture));
}

export function createMantaTail({mobile=false}={}){
  const segments=mobile?56:90,sides=mobile?6:8,stride=sides+1;
  const geometry=new BufferGeometry(),indices=[],uv=[];
  const positions=new Float32Array((segments+1)*stride*3),normals=positions.slice();
  for(let i=0;i<=segments;i++)for(let j=0;j<=sides;j++){
    uv.push(i/segments,j/sides);
    if(i<segments&&j<sides){const a=i*stride+j,b=a+1,c=a+stride,d=c+1;indices.push(a,b,c,b,d,c);}
  }
  geometry.setAttribute('position',new Float32BufferAttribute(positions,3));
  geometry.setAttribute('normal',new Float32BufferAttribute(normals,3));
  geometry.setAttribute('uv',new Float32BufferAttribute(uv,2));geometry.setIndex(indices);
  const up=new Vector3(0,0,1);
  function update(state={}){
    const p=geometry.attributes.position,n=geometry.attributes.normal;
    for(let i=0;i<=segments;i++){
      const t=i/segments,center=tailCenter(t,state),lo=Math.max(0,t-.001),hi=Math.min(1,t+.001);
      const derivative=tailCenter(hi,state).sub(tailCenter(lo,state)).divideScalar(hi-lo),speed=derivative.length(),tangent=derivative.normalize();
      const right=new Vector3().crossVectors(up,tangent).normalize(),vertical=new Vector3().crossVectors(tangent,right);
      const radius=.045*Math.pow(1-t,1.3)+.0015,slope=-.045*1.3*Math.pow(1-t,.3)/speed;
      for(let j=0;j<=sides;j++){
        const angle=j/sides*Math.PI*2,radial=right.clone().multiplyScalar(Math.cos(angle)).addScaledVector(vertical,Math.sin(angle)*.72);
        const normal=right.clone().multiplyScalar(Math.cos(angle)).addScaledVector(vertical,Math.sin(angle)/.72).addScaledVector(tangent,-slope).normalize(),v=center.clone().addScaledVector(radial,radius),idx=i*stride+j;
        p.setXYZ(idx,v.x,v.y,v.z);n.setXYZ(idx,normal.x,normal.y,normal.z);
      }
    }
    p.needsUpdate=n.needsUpdate=true;
  }
  update();geometry.computeBoundingSphere();
  // The conservative sphere covers the complete small trailing movement.
  geometry.boundingSphere.radius+=.3;
  return {geometry,update};
}
