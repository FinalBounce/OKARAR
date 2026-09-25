// Cues confirmed by OKARAR, measured from the untouched intro's beginning.
export const SNARE_OFFSET = .1;
export const KICK_OFFSET = 1.3;
export const DARKEN_SECONDS = KICK_OFFSET - SNARE_OFFSET;
export const ATTACK_SECONDS = 3;
export const RETURN_SECONDS = 2.4;
export const clamp01 = value => Math.max(0, Math.min(1, value));
export const smooth = (from, to, value) => {
  const t = clamp01((value - from) / (to - from));
  return t * t * (3 - 2 * t);
};

// Monotonic, visit-local state. The repeating buffer position must never
// replay the attack, even when it wraps back to the start of the loop.
export class Takeover {
  constructor(introSeconds) { this.introSeconds = introSeconds; this.active = false; this.progress = 0; this.elapsed = 0; }
  update(audioPosition, entered, instant = false) {
    if (entered && audioPosition !== null && audioPosition >= this.introSeconds + SNARE_OFFSET) {
      this.active = true;
      this.elapsed = Math.max(this.elapsed, audioPosition - this.introSeconds - SNARE_OFFSET);
      this.progress = clamp01(this.elapsed / ATTACK_SECONDS);
    }
    if (this.active && instant) { this.elapsed = Math.max(this.elapsed, ATTACK_SECONDS + RETURN_SECONDS); this.progress = 1; }
    return this.snapshot();
  }
  snapshot() {
    return { active: this.active, progress: this.progress,
      dark: this.active ? smooth(0, DARKEN_SECONDS, this.elapsed) : 0,
      returning: this.active ? clamp01((this.elapsed - ATTACK_SECONDS) / RETURN_SECONDS) : 0,
      swallowed: this.active ? smooth(.27, .63, this.progress) : 0 };
  }
}

// The original V4 scroll-driven word aspiration, restored verbatim.
export function consumptionAt(position, chapter, index, count) {
  const passage = clamp01((position - chapter - .12) / .58);
  const start = count <= 1 ? 0 : index / (count - 1) * .78;
  return smooth(start, start + .22, passage);
}
