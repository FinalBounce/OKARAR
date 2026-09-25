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
    this.reverseDistance=movement<0?this.reverseDistance-movement:movement>.001?0:this.reverseDistance;
    // Read the real scroll destination, not just the eased camera. Otherwise
    // a smooth five-section jump looks like many tiny ordinary scroll steps.
    // The first destination remains Artist until the next panel's midpoint
    // at 1.735 (.52 + .43/2). A wheel/touch gesture may overshoot its anchor
    // without requesting Music: keep the authored overhead fly-by in that
    // whole zone instead of replacing it with a straight-to-camera exit.
    const homeFlyby=(this.pass?.chapter===0||(!this.pass&&this.position<.14&&!this.done.has(0)))&&
      movement>=-.001&&target>=this.position&&target<1.735;
    const redirect=this.reverseDistance>.08||(!homeFlyby&&(Math.abs(movement)>1.1||Math.abs(target-position)>1.25||
      (this.pass&&target>this.pass.chapter+1.10)));
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
