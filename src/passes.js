import { clamp01 } from './takeover.js';
export const PASS_SECONDS=3.6;

// One cinematic swim per downward section crossing. No mouth targeting or
// bites: typography has its own reversible V4 scroll choreography.
export class PassDirector {
  constructor(){this.position=0;this.target=0;this.reverseDistance=0;this.redirecting=false;this.quiet=0;this.done=new Set();this.pass=null;this.serial=0;}
  update(position,dt,{active=true,paused=false,reduced=false,target=position,busy=false}={}){
    const delta=position-this.position,chapter=Math.min(4,Math.floor(position)),fraction=position-chapter;
    const movement=target-this.target;
    if(movement<-.001){for(const n of this.done)if(n>=chapter)this.done.delete(n);}
    if(!active||reduced){this.pass=null;this.position=position;this.target=target;this.reverseDistance=0;this.redirecting=false;return null;}
    if(paused)return this.pass?{...this.pass}:null;
    // The home fly-by is also the safe way past the lens. Never replace it
    // mid-flight with a straight, nose-first connector: a snap-back, reversal
    // or multi-chapter flick could otherwise steer the body through the viewer.
    // Trigger from the departure, not the eased destination (a fast jump may
    // already put `position` in chapter 1). Navigation keeps moving normally;
    // the renderer joins its latest destination after this exact endpoint.
    const leavingHome=!this.pass&&!busy&&this.position<.14&&!this.done.has(0)&&delta>1e-5&&target>=.14;
    if(this.pass?.chapter===0||leavingHome){
      this.redirecting=false;this.reverseDistance=0;this.quiet=0;
      if(leavingHome&&position<.14){this.position=position;this.target=target;return null;}
      this.done.add(0);
      if(leavingHome)this.pass={id:++this.serial,chapter:0,t:0};
      else if(this.pass.t<1)this.pass.t=clamp01(this.pass.t+Math.max(0,Math.min(dt,.1))/PASS_SECONDS);
      else{
        this.pass=null;
        if(target<.14)this.done.delete(0);
        this.redirecting=target<.14||target>=1.735;
      }
      this.position=position;this.target=target;
      return this.pass?{...this.pass}:null;
    }
    this.reverseDistance=movement<0?this.reverseDistance-movement:movement>.001?0:this.reverseDistance;
    // Other passes still yield to a new destination without queueing swims
    // for the intermediate chapters crossed by a large scroll gesture.
    const redirect=this.reverseDistance>.08||Math.abs(movement)>1.1||Math.abs(target-position)>1.25||
      (this.pass&&target>this.pass.chapter+1.10);
    if(redirect||busy){this.pass=null;this.redirecting=true;this.quiet=0;this.reverseDistance=0;}
    if(this.redirecting){
      this.done.add(chapter);
      this.quiet=busy||Math.abs(movement)>.001||Math.abs(position-target)>.01?0:this.quiet+Math.min(dt,.1);
      if(this.quiet>.18){this.redirecting=false;if(fraction<.14)this.done.delete(chapter);}
      this.position=position;this.target=target;return null;
    }
    if(!paused){
      // Deliver the exact end pose for one frame before handing off.
      if(this.pass){if(this.pass.t>=1)this.pass=null;else this.pass.t=clamp01(this.pass.t+Math.max(0,Math.min(dt,.1))/PASS_SECONDS);}
      // Easing can leave positive floating-point residue long after the
      // user's gesture stops. It must not launch the following section pass.
      if(!this.pass&&delta>1e-5&&fraction>=.14&&fraction<.84&&!this.done.has(chapter)){
        this.done.add(chapter);this.pass={id:++this.serial,chapter,t:0};
      }
    }
    this.position=position;this.target=target;
    return this.pass?{...this.pass}:null;
  }
}
