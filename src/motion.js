export const smoother=(a,b,x)=>{const t=Math.max(0,Math.min(1,(x-a)/(b-a)));return t*t*t*(t*(t*6-15)+10);};
export const REST_GAPE=.13;

// Exact critically damped solution: no frame-dependent lerp and no snap at
// the change from opening to closing. The lips never clamp completely shut.
export class JawMotion {
  constructor(){this.value=REST_GAPE;this.velocity=0;}
  update(target,dt=1/60,instant=false){
    target=Math.max(REST_GAPE,Math.min(1,target));
    if(instant){this.velocity=0;return this.value=target;}
    const d=Math.max(0,Math.min(.1,dt)),omega=34,offset=this.value-target;
    const e=Math.exp(-omega*d),temp=(this.velocity+omega*offset)*d;
    this.value=target+(offset+temp)*e;this.velocity=(this.velocity-omega*temp)*e;
    return this.value;
  }
}
