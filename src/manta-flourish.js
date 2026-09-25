import { FLAP_SECONDS, TAU } from './rhythm.js';
import { smoother } from './motion.js';

// Three complete wing cycles. This layer never changes the musical phase.
export const FLOURISH_SECONDS = FLAP_SECONDS * 3;
export const DIVE_SECONDS = FLAP_SECONDS * 4;
const rest = () => ({x:0,y:0,z:0,rx:0,ry:0,rz:0,scale:1});

export function flourishPose(progress,kind='roll') {
  const t=Math.max(0,Math.min(1,progress));
  if(t===0||t===1)return rest();
  const turn=smoother(0,1,t),arc=Math.sin(Math.PI*turn)**2;
  if(kind==='dive')return {
    x:-.50*Math.sin(TAU*turn)*arc,y:-.68*arc,z:-.95*arc,
    rx:-.38*Math.sin(TAU*turn)*arc,ry:-TAU*turn,
    rz:.36*Math.sin(Math.PI*turn)*arc,scale:1-.12*arc
  };
  return {
    x:.45*Math.sin(TAU*turn)*arc,
    y:.48*arc,
    z:-.65*arc,
    rx:.24*Math.sin(TAU*turn)*arc,
    ry:TAU*turn,
    rz:-.22*Math.sin(Math.PI*turn)*arc,
    scale:1-.08*arc
  };
}

export class MantaFlourish {
  constructor(){this.elapsed=null;this.pose=rest();this.kind='roll';}
  get active(){return this.elapsed!==null;}
  get duration(){return this.kind==='dive'?DIVE_SECONDS:FLOURISH_SECONDS;}
  get progress(){return this.active?Math.min(1,this.elapsed/this.duration):0;}
  start(allowed=true,kind='roll'){
    if(!allowed||this.active)return false;
    this.kind=kind==='dive'?'dive':'roll';this.elapsed=0;this.pose=rest();return true;
  }
  reset(){this.elapsed=null;return this.pose=rest();}
  update(delta,{paused=false,reduced=false}={}){
    if(reduced)return this.reset();
    if(paused||!this.active)return this.pose;
    const dt=Math.max(0,Number.isFinite(delta)?delta:0);
    this.elapsed+=dt;
    if(this.elapsed>=this.duration-1e-9)return this.reset();
    return this.pose=flourishPose(this.progress,this.kind);
  }
}
