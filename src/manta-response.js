// Audio energy is an accent, not the beat clock. A snare's instantaneous FFT
// peak must not resize the whole animal or kick its wings backwards.
// Exact critically damped response: continuous value AND velocity, independent
// of render cadence. Phase locking and the musical cue stay untouched.
export class MantaResponse {
  constructor(){this.value=0;this.velocity=0;}
  update(energy,dt,frozen=false){
    if(frozen||dt<=0)return this.value;
    const target=Math.max(0,Math.min(1,Number.isFinite(energy)?energy:0));
    const step=Math.min(dt,.1),omega=1/.09,offset=this.value-target;
    const tangent=this.velocity+omega*offset,decay=Math.exp(-omega*step);
    this.value=target+(offset+tangent*step)*decay;
    this.velocity=(this.velocity-omega*tangent*step)*decay;
    return this.value;
  }
}
