export const TRACK_BPM = 100;
export const FLAP_BPM = TRACK_BPM / 2;
export const FLAP_SECONDS = 60 / FLAP_BPM;
export const TAU = 2 * Math.PI;
const wrap = phase => ((phase % TAU) + TAU) % TAU;

// A complete down → up → down cycle takes two musical beats (1.2 seconds).
// Phase zero is the low wingtip; phase PI is the high wingtip.
export function phaseAt(seconds) {
  return wrap((seconds % FLAP_SECONDS) / FLAP_SECONDS * TAU);
}

export class MantaRhythm {
  constructor() { this.phase = 0; }

  update(deltaSeconds, audioSeconds = null, frozen = false) {
    if (frozen) return this.phase;
    const delta = Math.max(0, deltaSeconds);
    const predicted = wrap(this.phase + delta / FLAP_SECONDS * TAU);
    if (audioSeconds === null) return this.phase = predicted;
    const target = phaseAt(audioSeconds);
    const difference = wrap(target - predicted + Math.PI) - Math.PI;
    // Briefly settle onto the beat after consent or animation resume, rather
    // than snapping the wings. Once locked, use the audio phase exactly.
    this.phase = Math.abs(difference) < .001 ? target
      : wrap(predicted + difference * (1 - Math.exp(-delta / .09)));
    return this.phase;
  }
}

// Compatibility export: the shark now follows the manta's normal beat grid.
export class PredatorRhythm extends MantaRhythm {}

// CPU rays and GPU membrane use the same travelling wave. The outer tips
// reverse on the musical beats; the inner membrane follows with a soft lag.
export function wingDisplacement(x, y, phase, flow, pulse, capture = 0) {
  const a = Math.abs(x);
  const h=Math.max(0,Math.min(1,(a-.4)/.8)),hinge=h*h*(3-2*h);
  const lag = (3.35 - a) * .55 + (y - .11) * .52;
  const swim=-Math.cos(phase + lag) * Math.pow(a, 1.65) * (.11 + flow * .15 + pulse * .09)
    + Math.sin(y * 4 + phase * 2) * a * (1 - a / 3.35) * .018;
  // The head stays steady as the stroke grows from the shoulders outwards.
  // During capture the stroke gives way to the compact tooth-safe fold.
  return swim*hinge*(1-capture*.96)+a*capture*.46;
}
