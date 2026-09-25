// Keep a 60 Hz presentation deadline without discarding elapsed time on
// 90/120 Hz displays or accumulating timer drift after an expensive frame.
export class FrameClock {
  constructor(fps=60){this.interval=1000/fps;this.reset();}
  reset(){this.last=null;this.next=0;}
  take(now){
    if(this.last===null){this.last=now;this.next=now+this.interval;return this.interval;}
    if(now+.75<this.next)return null;
    const elapsed=now-this.last;this.last=now;
    // Use the same tolerance on both sides of the deadline. Otherwise a
    // rounded exact multiple (e.g. 50 ms) can leave next in the past.
    this.next+=Math.max(1,Math.floor((now+.75-this.next)/this.interval)+1)*this.interval;
    return elapsed;
  }
}

// Resolution is independent of material appearance and animation rate. Small
// sustained steps, with slower recovery, avoid quality pumping on each swipe.
export class RenderBudget {
  constructor({ceiling=1.5,dpr=1}={}){this.dpr=dpr;this.setCeiling(ceiling);}
  setCeiling(ceiling){
    this.ceiling=Math.min(this.dpr,ceiling);this.floor=Math.min(1,this.ceiling);
    this.ratio=this.ceiling;this.age=0;this.changed=0;this.healthy=0;this.resetWindow();
    return this.ratio;
  }
  resetWindow(){this.ms=0;this.frames=0;this.slow=0;}
  sample(elapsed,{hold=false}={}){
    if(elapsed<=0||elapsed>250){this.resetWindow();return null;}
    this.age+=elapsed;
    if(hold||this.age<3000){this.resetWindow();return null;}
    this.ms+=elapsed;this.frames++;if(elapsed>24)this.slow++;
    if(this.ms<2000)return null;
    const fps=this.frames*1000/this.ms,bad=fps<50&&this.slow/this.frames>.18;
    this.healthy=fps>57?this.healthy+this.ms:0;
    let next=this.ratio;
    if(bad&&this.age-this.changed>=3000)next=Math.max(this.floor,this.ratio-.15);
    else if(this.healthy>=10000&&this.age-this.changed>=10000)next=Math.min(this.ceiling,this.ratio+.10);
    this.resetWindow();next=Math.round(next*100)/100;
    if(Math.abs(next-this.ratio)<.01)return null;
    this.ratio=next;this.changed=this.age;this.healthy=0;return next;
  }
}
