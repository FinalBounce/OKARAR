import {Vector3,Quaternion,Matrix4,CubicBezierCurve3} from 'three';
import {outsideCamera} from './music-exit.js';
import {smoother} from './motion.js';

const xAxis=new Vector3(1,0,0),up=new Vector3(0,1,0);
const correction=new Quaternion().setFromAxisAngle(up,-Math.PI/2);
const forward=q=>xAxis.clone().applyQuaternion(q);
const facing=d=>new Quaternion().setFromRotationMatrix(new Matrix4().lookAt(d,new Vector3(),up)).multiply(correction);

// A connector, never a replacement for the five authored fly-bys.
// Continue nose-first out of frame; stage a new approach only when the
// complete padded body is hidden, then glide directly into the latest idle.
export class SharkTransit {
  constructor(){this.active=false;this.stage='idle';this.chapter=null;this.last=null;this.speed=0;this.relocations=0;}
  observe(group,dt){
    if(this.last&&dt>0)this.speed=Math.min(40,group.position.distanceTo(this.last)/dt);
    this.last=group.position.clone();
  }
  begin(group){
    this.active=true;this.stage='exit';this.route=null;
    this.exitSpeed=Math.max(2,Math.min(32,this.speed));
    const f=forward(group.quaternion);
    // Forward-facing sharks can pass the lens. Sharks heading into the
    // distance bank toward an edge instead of vanishing slowly at z=-100.
    this.exitDirection=f.z<-.35&&Math.abs(f.x)<.65?
      new Vector3(Math.abs(f.x)>.08?Math.sign(f.x):group.position.x>=0?1:-1,f.y*.3,-.25).normalize():f;
  }
  prepare({group,idle,chapter,camera,bounds,small,halfWidth}){
    // Caller guarantees the current body is fully outside before any reset.
    if(outsideCamera(camera,bounds,idle.v,idle.q,idle.s)){
      group.position.copy(idle.v);group.quaternion.copy(idle.q);group.scale.setScalar(idle.s);
      this.active=false;this.stage='idle';this.chapter=chapter;this.relocations++;this.last=group.position.clone();return;
    }
    const f=forward(idle.q),side=Math.abs(f.x)>.25?-Math.sign(f.x):-1;
    const handle=Math.max(2.8,idle.s*3.8),approach=idle.v.clone().addScaledVector(f,-handle);
    const start=new Vector3(side*(halfWidth+9*idle.s+4),idle.v.y+.65,Math.min(-7,idle.v.z-5));
    let q;
    for(let n=0;n<40;n++){
      q=facing(approach.clone().sub(start).normalize());
      if(outsideCamera(camera,bounds,start,q,idle.s))break;
      start.x+=side*2;
    }
    if(!outsideCamera(camera,bounds,start,q,idle.s))return;
    const control=start.clone().lerp(approach,.46);
    const curve=new CubicBezierCurve3(start,control,approach,idle.v.clone());
    const frames=[];let frame=q.clone();
    for(let i=0;i<=128;i++){
      const tangent=curve.getTangentAt(i/128).normalize();
      frame.premultiply(new Quaternion().setFromUnitVectors(forward(frame),tangent)).normalize();
      frames.push(frame.clone());
    }
    const delta=frames[128].clone().invert().multiply(idle.q);
    let twist=2*Math.atan2(delta.x,delta.w);
    if(twist>Math.PI)twist-=2*Math.PI;if(twist<-Math.PI)twist+=2*Math.PI;
    this.route={curve,frames,twist,elapsed:0,duration:Math.max(2.4,curve.getLength()/6.5),idle:{v:idle.v.clone(),q:idle.q.clone(),s:idle.s},small,halfWidth};
    group.position.copy(start);group.quaternion.copy(q);group.scale.setScalar(idle.s);
    this.chapter=chapter;this.stage='entry';this.relocations++;this.last=group.position.clone();
  }
  update({group,idle,chapter,camera,bounds,small,halfWidth,dt,instant=false}){
    if(instant){group.position.copy(idle.v);group.quaternion.copy(idle.q);group.scale.setScalar(idle.s);this.active=false;this.stage='idle';this.last=group.position.clone();return;}
    if(dt<=0)return;
    const step=Math.min(.05,dt);
    if(!this.active)this.begin(group);
    if(this.stage==='entry'&&(chapter!==this.chapter||small!==this.route.small||Math.abs(halfWidth-this.route.halfWidth)>.08))this.begin(group);
    if(this.stage==='exit'){
      if(outsideCamera(camera,bounds,group.position,group.quaternion,group.scale.x)){
        this.prepare({group,idle,chapter,camera,bounds,small,halfWidth});
      }else{
        const desired=facing(this.exitDirection),old=group.quaternion.clone();
        group.quaternion.rotateTowards(desired,step*.9);
        this.exitSpeed+=Math.max(-step*8,Math.min(step*8,7-this.exitSpeed));
        const direction=forward(old.slerp(group.quaternion,.5));
        group.position.addScaledVector(direction,this.exitSpeed*step);
      }
    }else{
      const route=this.route;route.elapsed=Math.min(route.duration,route.elapsed+step);
      const u=route.elapsed/route.duration,t=smoother(0,1,u),blend=smoother(.6,1,u);
      const index=Math.min(127,Math.floor(t*128)),q=route.frames[index].clone().slerp(route.frames[index+1],t*128-index);
      q.premultiply(new Quaternion().setFromUnitVectors(forward(q),route.curve.getTangentAt(t).normalize()));
      q.multiply(new Quaternion().setFromAxisAngle(xAxis,route.twist*blend));
      q.multiply(new Quaternion().slerp(route.idle.q.clone().invert().multiply(idle.q),blend));
      group.position.copy(route.curve.getPointAt(t)).addScaledVector(idle.v.clone().sub(route.idle.v),blend);
      group.quaternion.copy(q);group.scale.setScalar(route.idle.s+(idle.s-route.idle.s)*blend);
      if(u>=1){group.position.copy(idle.v);group.quaternion.copy(idle.q);group.scale.setScalar(idle.s);this.active=false;this.stage='idle';}
    }
  }
}
