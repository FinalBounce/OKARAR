import {Euler,Quaternion,Vector3,Box3} from 'three';
import {smoother} from './motion.js';

const intakeOrientation=new Quaternion().setFromEuler(new Euler(-1.13,0,0));

// Conservative envelope, including the tail: fit the *folded*, rotated
// animal inside an inset ellipse, not merely between the lip anchors.
export function captureEnvelope(bounds,{fold,flow,pulse,rotation}){
  const extent=Math.max(Math.abs(bounds.min.x),Math.abs(bounds.max.x));
  const wave=(Math.pow(extent,1.65)*(.11+flow*.15+pulse*.09)+.02)*(1-fold*.96);
  const box=bounds.clone();
  box.min.x*=1-fold*.52;box.max.x*=1-fold*.52;
  box.min.z-=wave;box.max.z+=wave+extent*fold*.46;
  const points=[];
  for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z])points.push(new Vector3(x,y,z).applyQuaternion(rotation));
  return points;
}

export function fitMantaToAperture(points,{aperture,rotation,scale},baseScale,tightness=1,minimumScale=0){
  const up=new Vector3(-aperture.normal.y,aperture.normal.x,0).applyQuaternion(rotation);
  const right=new Vector3(0,0,1).applyQuaternion(rotation);
  const forward=aperture.normal.clone().applyQuaternion(rotation);
  const box=new Box3().setFromPoints(points.map(p=>new Vector3(p.dot(right),p.dot(up),p.dot(forward))));
  const center=box.getCenter(new Vector3());
  // Inset the corridor from the teeth and the narrowing oral cavity.
  const rx=aperture.width*scale*.36,ry=aperture.height*scale*.30;
  const radius=Math.hypot((box.max.x-box.min.x)/2/rx,(box.max.y-box.min.y)/2/ry);
  const fittedScale=Math.max(minimumScale,Math.min(baseScale,1/Math.max(radius,1e-6))*tightness);
  const offset=right.multiplyScalar(center.x).addScaledVector(up,center.y).multiplyScalar(-fittedScale);
  // The shark's camera aim is high in its mouth (.20). Prey uses the
  // recessed opening, independently of the unchanged shark trajectory.
  if(aperture.upper&&aperture.lower){
    const midpoint=aperture.upper.clone().lerp(aperture.lower,.40).sub(aperture.center).multiplyScalar(scale).applyQuaternion(rotation);
    midpoint.addScaledVector(forward,-midpoint.dot(forward));offset.add(midpoint);
  }
  return {scale:fittedScale,offset,forward,near:box.min.z};
}

// The teeth are an entrance, not a cut plane. Retain the prey through the
// visible cavity; any remaining geometry is retired only under full blackout.
export const mantaVisibleDuringCapture=({active,progress=0,veil=0})=>!active||(progress<1&&veil<1);
export function placeThroatPlane(plane,mouth,forward,apertureWidth,scale,preyDepth=0){
  const depth=Math.max(apertureWidth*scale*1.5,preyDepth+apertureWidth*scale*.25);
  plane.setFromNormalAndCoplanarPoint(forward,mouth.clone().addScaledVector(forward,-depth));
  return depth;
}

// Recession continues through the whole visible fade (.59 → .69), instead
// of finishing before it. The shark's lunge supplies the initial capture.
export const captureRecession=progress=>smoother(.40,.78,progress);

// Always start from this frame's fully posed animal (pointer, swim, scroll
// and optional barrel roll), never from the chapter's neutral Euler angles.
export class MantaCapture {
  constructor(bounds=null){this.orientation=null;this.anchor=null;this.scale=null;this.bounds=bounds;}
  mouthScale(nominal,baseScale,progress,aperture,rotation){
    if(!this.bounds)return nominal;
    // Size the predator to the folded animal, rather than miniaturising the
    // prey. Growth is exclusive to this first bite and gone under blackout.
    const points=captureEnvelope(this.bounds,{fold:1,flow:1,pulse:1,rotation:intakeOrientation});
    const fit=fitMantaToAperture(points,{aperture,rotation,scale:1},100);
    const required=(this.scale??baseScale)*.94/fit.scale*1.04;
    const blend=smoother(.18,.38,progress)*(1-smoother(.72,.80,progress));
    return nominal+(Math.max(nominal,required)-nominal)*blend;
  }
  apply(root,creature,progress,mouth=null){
    const fold=smoother(.16,.38,progress);
    // Swim freely until actual capture. Once the jaw catches the wings, keep
    // one continuous orientation path, even across a barrel roll's half-turn.
    if(fold>0&&!this.orientation){this.orientation=creature.quaternion.clone();this.anchor=root.position.clone();this.scale=creature.scale.x;}
    if(this.orientation)creature.quaternion.slerpQuaternions(this.orientation,intakeOrientation,fold);
    if(this.bounds&&mouth&&progress>.16){
      const fit=smoother(.16,.31,progress);
      const recession=captureRecession(progress);
      const points=captureEnvelope(this.bounds,{fold:mouth.fold,flow:mouth.flow,pulse:mouth.pulse,rotation:creature.quaternion});
      // Retain 92–100% of the capture-time body size. Folding, depth and the
      // predator's forward movement do the work, not a drastic scale tween.
      const targetScale=this.scale*(1-fold*.06-recession*.02);
      const size=creature.scale.x+(targetScale-creature.scale.x)*fit;
      const pose=fitMantaToAperture(points,mouth,size,1,size);
      creature.scale.setScalar(size);
      root.position.lerp(this.anchor,smoother(.16,.36,progress));
      // Align only across the aperture. Never tow the ray backwards to the
      // advancing mouth, or push it ahead on a moving dental clearance plane.
      const across=mouth.center.clone().add(pose.offset).sub(root.position);
      across.addScaledVector(pose.forward,-across.dot(pose.forward));
      root.position.addScaledVector(across,smoother(.20,.31,progress));
      // After the jaws overtake it, continue deeper while the screen fades.
      // This is world-space recession, not a fixed distance from the lips.
      root.position.addScaledVector(pose.forward,-mouth.aperture.width*3.4*.55*recession);
      const depth=mouth.center.clone().sub(root.position).dot(pose.forward);
      const deepest=depth-pose.near*creature.scale.x;
      // The predator waits behind the wing envelope until it fits. Correct
      // the shark's approach, never shove the prey ahead of its teeth.
      const retreat=Math.max(0,.18+deepest)*(1-smoother(.38,.44,progress));
      return {depth:depth-retreat,deepest:deepest-retreat,retreat,recession};
    }
    return null;
  }
}
