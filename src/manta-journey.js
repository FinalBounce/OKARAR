import {Euler,Quaternion,MathUtils} from 'three';

// Keep the four established opening poses. Later chapters reveal the pale
// underside, then a descending three-quarter profile instead of more of the back.
export const MANTA_POSES=[
  {x:0,y:.35,z:8.8,rx:.30,ry:-.25,rz:-.35,s:1},
  {x:2,y:-.1,z:7.5,rx:.6,ry:-.6,rz:.65,s:1.12},
  {x:2.3,y:.05,z:6.3,rx:-.28,ry:.30,rz:-.75,s:1},
  {x:-2.2,y:.1,z:8.6,rx:1,ry:-.4,rz:.3,s:1.3},
  {x:1,y:.15,z:10.7,rx:.28,ry:Math.PI-.28,rz:2.72,s:.92},
  {x:.4,y:-.25,z:11.5,rx:-.30,ry:1.14,rz:2.40,s:1.02}
];
const rotation=p=>new Quaternion().setFromEuler(new Euler(p.rx,p.ry,p.rz));

export function mantaJourneyPose(position,{small=false,entered=1,aspect=390/844}={}){
  const t=MathUtils.clamp(position,0,5),i=Math.min(4,Math.floor(t)),f=t-i,e=f*f*(3-2*f);
  const a=MANTA_POSES[i],b=MANTA_POSES[i+1],p={};
  for(const key of Object.keys(a))p[key]=MathUtils.lerp(a[key],b[key],e);
  p.q=rotation(a).slerp(rotation(b),e);
  if(small){
    const y=[.55,.1,-.2,.2,.1,-.2];
    p.x*=.2;p.y=MathUtils.lerp(y[i],y[i+1],e);p.s*=.70;p.z+=5.5;
    // Fit the new full-body views on very tall phones without changing the
    // four favourite opening poses or making a resize jump at a chapter edge.
    const later=MathUtils.smoothstep(t,3,4)*entered;
    p.x*=1-later;
    const fit=2*Math.tan(35*Math.PI/360)*p.z*aspect*.90/6.7;
    p.s=MathUtils.lerp(p.s,Math.min(p.s,fit),later);
  }
  const intro=1-entered;
  p.x=MathUtils.lerp(p.x,small?.9:2.55,intro);p.y=MathUtils.lerp(p.y,small?2.6:.4,intro);p.z=MathUtils.lerp(p.z,small?14.8:10,intro);
  p.q.slerp(rotation({...p,ry:-.24,rz:-.58}),intro);
  return p;
}

// A single additional figure, on arriving at Instagram. No random timer,
// no replay on little scroll reversals, no competing turn during the bite.
export class MantaJourneyCues{
  constructor(){this.divePlayed=false;this.armed=false;this.quietTime=0;}
  update(move,{position,target=position,allowed=true,delta=0}){
    if(!allowed)return false;
    if(position<3.3)this.armed=true;
    this.quietTime=move.active?0:this.quietTime+Math.max(0,delta);
    if(!this.armed||this.quietTime<2.4||this.divePlayed||move.active||position<3.65||position>4.3||target<3.7||target>4.5)return false;
    if(!move.start(true,'dive'))return false;
    this.divePlayed=true;return true;
  }
}
