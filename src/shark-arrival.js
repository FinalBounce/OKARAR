import {Vector3,Quaternion,Euler,Matrix4,CatmullRomCurve3} from 'three';
import {smoother} from './motion.js';
import {ENGULF_EXIT_ROTATION,returnTurnBlend} from './engulf.js';
import {RETURN_SECONDS} from './takeover.js';

const up=new Vector3(0,1,0),axis=new Quaternion().setFromAxisAngle(up,-Math.PI/2);
const forward=q=>new Vector3(1,0,0).applyQuaternion(q);
const facing=(direction,bank=0)=>new Quaternion().setFromRotationMatrix(new Matrix4().lookAt(direction,new Vector3(),up)).multiply(axis).multiply(new Quaternion().setFromAxisAngle(new Vector3(1,0,0),bank));
const copyPose=pose=>({v:pose.v.clone(),q:pose.q.clone(),s:pose.s});

export function instagramPose({small,halfWidth}){
  // The anatomical model is 6.49 units long. At z=-2 the mobile camera's
  // visible width is 18/16 times the width measured at z=0. Keep an inset
  // around the complete silhouette on narrow/tall phones, not just the nose.
  const s=small?Math.min(.78*.9,halfWidth*2*(18/16)*.86/6.49):1.28*.9;
  return {v:new Vector3(small?.51*s:-halfWidth-1.8,-1.1,-2),
    q:new Quaternion().setFromEuler(new Euler(-.02,-.42,.12)),s};
}
export function instagramApproach({small,halfWidth}){
  if(!small)return new Vector3(-halfWidth*.3,-.9,2.8);
  const landing=instagramPose({small,halfWidth});
  return landing.v.clone().addScaledVector(forward(landing.q),-3);
}
export function instagramPassScale(scale,layout,progress){
  // Match standby on every layout before releasing the authored pass.
  // A desktop-only size mismatch otherwise starts an unnecessary exit/return.
  return scale+(instagramPose(layout).s-scale)*smoother(.65,1,progress);
}

// Shared with normal standby: arrival and idle use the same position, scale,
// orientation and living drift. No second repositioning is needed on landing.
export function sharkIdlePose({chapter,small,halfWidth,time,reduced=false}){
  const scale=small?.78:1.28,side=halfWidth*(small?.87:.73);
  const pose=[
    {v:new Vector3(small?0:.20,small?.6:.12,-.6),q:new Quaternion().setFromEuler(new Euler(.015,-Math.PI/2+.08,-.025)),s:scale},
    {v:new Vector3(-halfWidth-9,2,-5),q:facing(new Vector3(-1,.1,-.3)),s:scale},
    {v:new Vector3(side,-.1,-1.8),q:new Quaternion().setFromEuler(new Euler(.06,3.50,-.08)),s:scale*.89},
    {v:new Vector3(halfWidth+10,3,-9),q:facing(new Vector3(1,.2,-.7)),s:scale},
    instagramPose({small,halfWidth}),
    {v:new Vector3(side,-1.4,-2.2),q:new Quaternion().setFromEuler(new Euler(.02,3.65,.06)),s:scale*.78}
  ][chapter];
  if(!reduced){
    pose.v.y+=Math.sin(time*.34+.8)*.11;pose.v.z+=Math.sin(time*.23)*.18;
    pose.q.multiply(new Quaternion().setFromEuler(new Euler(Math.sin(time*.31)*.025,Math.sin(time*.23)*.045,Math.sin(time*.28+.5)*.035)));
  }
  return pose;
}

function bezier(points,t){
  const work=points.map(p=>p.clone());
  for(let size=work.length-1;size>0;size--)for(let i=0;i<size;i++)work[i].lerp(work[i+1],t);
  return work[0];
}
function derivative(points,t){return bezier(points.slice(1).map((p,i)=>p.clone().sub(points[i]).multiplyScalar(points.length-1)),t);}

// A section-aware return, with a tangent aligned to the final shark heading.
// Bezier controls preserve velocity if the user changes section mid-return.
export class SharkArrival {
  constructor(){this.started=false;this.complete=false;this.route=null;this.pose=null;this.previous=0;}
  plan({start,idle,chapter,halfWidth,small,duration,velocity=new Vector3(),initial=false}){
    const distance=start.v.distanceTo(idle.v),handle=Math.max(3,Math.min(9,distance*.4));
    const firstDirection=initial?new Vector3(chapter===1?-1:chapter===4?-.2:.5,0,-1).normalize():forward(start.q);
    let points=[start.v.clone(),start.v.clone().addScaledVector(velocity,duration/5),
      start.v.clone().addScaledVector(firstDirection,handle),
      idle.v.clone().addScaledVector(forward(idle.q),-handle),idle.v.clone(),idle.v.clone()];
    if(!initial){
      // Give a late turn real width in depth instead of making a tiny cusp
      // when the new destination is beside or behind the current heading.
      const bend=new Vector3().crossVectors(firstDirection,up).normalize();
      if(bend.z>0)bend.negate();
      const departure=start.v.clone().addScaledVector(firstDirection,handle);
      const approach=idle.v.clone().addScaledVector(forward(idle.q),-handle);
      points=[start.v.clone(),start.v.clone().addScaledVector(velocity,duration/7),departure,
        departure.clone().addScaledVector(bend,handle*1.4),approach.clone().addScaledVector(bend,handle*1.4),
        approach,idle.v.clone(),idle.v.clone()];
    }
    const home=initial&&chapter===0?new CatmullRomCurve3([
      start.v.clone(),new Vector3(-halfWidth-2,1.1,-15),new Vector3(-.8,.5,-9),
      new Vector3(small?0:.20,small?.6:.12,-.6)]):null;
    let frames=null,twist=0;
    if(!initial){
      // Transport the body frame around a turn. A world-up lookAt flips the
      // shark's roll by 180° when a retargeted curve briefly points upward.
      frames=[];let q=start.q.clone();
      for(let i=0;i<=128;i++){
        const tangent=derivative(points,Math.max(1e-4,Math.min(1-1e-4,i/128))).normalize();
        q.premultiply(new Quaternion().setFromUnitVectors(forward(q),tangent)).normalize();
        frames.push(q.clone());
      }
      const endDelta=frames[128].clone().invert().multiply(idle.q);
      twist=2*Math.atan2(endDelta.x,endDelta.w);
      if(twist>Math.PI)twist-=2*Math.PI;if(twist<-Math.PI)twist+=2*Math.PI;
    }
    this.route={start:copyPose(start),idle:copyPose(idle),chapter,halfWidth,small,duration,points,home,frames,twist,initial,elapsed:0};
  }
  sample(u,idle){
    const route=this.route,r=smoother(0,1,u),blend=smoother(.60,1,route.home?r:u);
    let v,tangent,velocity;
    if(route.home){
      v=route.home.getPoint(r);tangent=route.home.getTangent(r);
      const a=Math.max(0,u-1e-4),b=Math.min(1,u+1e-4);
      velocity=route.home.getPoint(smoother(0,1,b)).sub(route.home.getPoint(smoother(0,1,a))).multiplyScalar(1/((b-a)*route.duration));
      // Keep the established home curve, adding only the small final idle drift.
      v.addScaledVector(idle.v.clone().sub(route.home.getPoint(1)),blend);
    }else{
      v=bezier(route.points,u);velocity=derivative(route.points,u).multiplyScalar(1/route.duration);
      tangent=derivative(route.points,Math.max(1e-4,Math.min(1-1e-4,u))).normalize();
      v.addScaledVector(idle.v.clone().sub(route.idle.v),blend);
    }
    const bank=-Math.sin(r*Math.PI)*.13;
    let q;
    if(route.frames){
      const frame=u*128,index=Math.min(127,Math.floor(frame));
      q=route.frames[index].clone().slerp(route.frames[index+1],frame-index);
      q.premultiply(new Quaternion().setFromUnitVectors(forward(q),tangent));
      // A fixed unwrapped roll correction avoids a shortest-arc flip halfway
      // through a bank. The small live idle drift is applied separately.
      q.multiply(new Quaternion().setFromAxisAngle(new Vector3(1,0,0),route.twist*blend));
      q.multiply(new Quaternion().slerp(route.idle.q.clone().invert().multiply(idle.q),blend));
    }else q=facing(tangent,bank).slerp(idle.q,blend);
    q.copy(route.start.q.clone().slerp(q,returnTurnBlend(u)));
    return {v,q,s:route.start.s+(idle.s-route.start.s)*r,velocity};
  }
  update({returning,chapter,halfWidth,small,anchorY,idle,dt,instant=false}){
    if(this.complete)return null;
    let step=0;
    if(instant||(!this.started&&returning>=1)){
      this.started=this.complete=true;this.pose={...copyPose(idle),velocity:new Vector3()};return this.pose;
    }
    if(!this.started){
      this.started=true;
      const start={v:new Vector3(-halfWidth-9,anchorY+.39,-5),q:new Quaternion().setFromEuler(new Euler(...ENGULF_EXIT_ROTATION)),s:small?1.08:1.38};
      this.plan({start,idle,chapter,halfWidth,small,duration:RETURN_SECONDS,initial:true});
      this.route.elapsed=returning*RETURN_SECONDS;
    }else{
      const delta=dt<=0?0:this.previous>=1?dt:Math.max(0,returning-this.previous)*RETURN_SECONDS;
      if(delta===0&&this.pose)return this.pose;
      step=delta;
      const changed=chapter!==this.route.chapter||small!==this.route.small||Math.abs(halfWidth-this.route.halfWidth)>.05;
      if(changed){
        const start=this.pose,duration=Math.max(2.4,start.v.distanceTo(idle.v)/8);
        this.plan({start,idle,chapter,halfWidth,small,duration,velocity:start.velocity});
      }
      this.route.elapsed+=delta;
    }
    this.previous=returning;
    const u=this.route.elapsed>=this.route.duration-1e-9?1:this.route.elapsed/this.route.duration;
    const next=u>=1?{...copyPose(idle),velocity:new Vector3()}:this.sample(u,idle);
    // Even a late, opposite-section request must not flip the body in a
    // single frame. Allow the bank to settle before releasing normal passes.
    if(!this.route.initial&&this.pose)next.q=this.pose.q.clone().rotateTowards(next.q,step*2.8);
    this.pose=next;
    if(u>=1&&next.q.angleTo(idle.q)<1e-5)this.complete=true;
    return this.pose;
  }
}
