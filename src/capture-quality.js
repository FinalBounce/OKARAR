// A performance downgrade can happen on any frame, especially during the
// expensive close-up. Resolution may drop immediately, but glass appearance
// must not switch while the prey remains visible in the predator's mouth.
export class CaptureQuality {
  constructor(initial=false){this.requested=initial;this.applied=initial;this.locked=false;}
  request(value){this.requested=!!value;return this.flush();}
  update({active=false,progress=0,veil=0}){
    this.locked=active&&progress<1&&veil<1;
    return this.flush();
  }
  flush(){
    if(this.locked||this.requested===this.applied)return null;
    this.applied=this.requested;
    return this.applied;
  }
}
