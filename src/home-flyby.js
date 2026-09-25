import {CatmullRomCurve3,Vector3} from 'three';

// This authored arc clears the viewer above the lens. Scroll redirections
// must wait for its endpoint, not substitute a frontal exit midway through.
export function homeFlybyCurve(start,cameraZ){
  return new CatmullRomCurve3([start.clone(),new Vector3(.1,.2,2),
    new Vector3(.15,1.5,cameraZ-3),new Vector3(1,7,cameraZ+12)]);
}
