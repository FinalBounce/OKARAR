import {smoother,REST_GAPE} from './motion.js';

export const SCENE_UI_RETURN_AT=.34;
// Give the predator room to overtake the full ray instead of launching the
// prey towards jaws that have already entered its wing envelope.
export const ENGULF_APPROACH_Z=-20;
export const ENGULF_READY_Z=-7;
export const sceneUiReady=({active,progress,returning=0})=>active&&progress>=1&&returning>=SCENE_UI_RETURN_AT;

// Only the visit's first attack uses this pose. All later swimming paths and
// their phase, jaws and timing deliberately remain independent of it.
export function engulfPose(progress,returning=0){
  const approach=smoother(0,.34,progress),surge=smoother(.30,.69,progress);
  const capture=smoother(.27,.59,progress),exit=smoother(.80,1,progress);
  const open=smoother(.015,.22,progress)*(1-smoother(.72,.91,progress));
  return {approach,surge,capture,exit,
    jaw:REST_GAPE+(1-REST_GAPE)*open,
    engulf:open,
    // Keep the retreat behind the mouth blackout. Reveal only once the
    // return is moving in depth, not while the huge jaw is turning away.
    veil:smoother(.59,.69,progress)*(1-smoother(.04,SCENE_UI_RETURN_AT,returning))};
}

export const ENGULF_EXIT_ROTATION=[.06,Math.PI+.42,-.17];
export const NIGHT_ENVIRONMENT_AT=.72;
export const returnTurnBlend=returning=>smoother(0,.20,returning);
export const backgroundHandoff=progress=>smoother(.24,.40,progress);
