// One PCM timeline: the intro plays once, then only the selected loop repeats.
// A separate web master repairs the export's silent startup tail. The source
// exports and their original concatenation remain available unchanged.
export const AUDIO_URL = './assets/please-lord-seamless.wav';
export const INTRO_SECONDS = 18;
export const LOOP_SECONDS = 38.4;
const LEVEL = 0.5;

export class Sound {
  constructor(onChange, onError) {
    this.onChange = onChange;
    this.onError = onError;
    this.enabled = false;
    this.pending = false;
    this.hidden = document.hidden;
    this.token = 0;
    this.offset = 0;
    this.voice = null;
  }

  init() {
    if (this.context) return;
    const Context = window.AudioContext || window.webkitAudioContext;
    if (!Context) throw new Error('Audio is not supported');
    this.context = new Context({ latencyHint: 'playback' });
    this.analyser = this.context.createAnalyser();
    this.analyser.fftSize = 256;
    this.analyser.connect(this.context.destination);
    this.data = new Uint8Array(this.analyser.frequencyBinCount);
  }

  async loadBuffer() {
    if (this.buffer) return this.buffer;
    if (!this.loading) {
      this.loading = (async () => {
        const response = await fetch(AUDIO_URL);
        if (!response.ok) throw new Error('Audio loop is unavailable');
        const buffer = await this.context.decodeAudioData(await response.arrayBuffer());
        if (!buffer.length || Math.abs(buffer.duration - INTRO_SECONDS - LOOP_SECONDS) > 1 / buffer.sampleRate) {
          throw new Error('Unexpected soundtrack duration');
        }
        this.buffer = buffer;
        return buffer;
      })().finally(() => { this.loading = null; });
    }
    return this.loading;
  }

  startPlayback() {
    if (this.voice) return;
    const source = this.context.createBufferSource();
    const gain = this.context.createGain();
    source.buffer = this.buffer;
    // Starting at offset 0 plays the intro. At loopEnd, the audio rendering
    // clock wraps to 18s, never to 0. No JS timer or onended handoff can drift.
    source.loop = true;
    source.loopStart = INTRO_SECONDS;
    source.loopEnd = this.buffer.duration;
    source.connect(gain).connect(this.analyser);
    const now = this.context.currentTime;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(LEVEL, now + 0.15);
    this.voice = { source, gain, startedAt: now, offset: this.offset };
    source.onended = () => { source.disconnect(); gain.disconnect(); };
    source.start(now, this.offset);
  }

  playbackPosition(at = this.context?.currentTime ?? 0) {
    const position = this.voice
      ? this.voice.offset + Math.max(0, at - this.voice.startedAt)
      : this.offset;
    if (position < INTRO_SECONDS) return position;
    const length = this.buffer.duration - INTRO_SECONDS;
    return INTRO_SECONDS + (position - INTRO_SECONDS) % length;
  }

  audiblePosition(now = performance.now()) {
    if (!this.enabled || !this.voice) return null;
    const context = this.context;
    let at = context.currentTime;
    if (context.state === 'running') {
      // The rendered audio clock can lead the speakers. Prefer the browser's
      // output timestamp so the wings follow the sound being heard.
      const stamp = context.getOutputTimestamp?.();
      if (stamp?.contextTime > 0 && stamp?.performanceTime > 0) {
        at = Math.min(at, stamp.contextTime + Math.max(0, now - stamp.performanceTime) / 1000);
      } else {
        at -= Math.max(0, context.outputLatency ?? context.baseLatency ?? 0);
      }
    }
    return this.playbackPosition(Math.max(this.voice.startedAt, at));
  }

  stopPlayback() {
    const voice = this.voice;
    if (!voice) return;
    const now = this.context.currentTime;
    const fade = this.context.state === 'running' ? 0.04 : 0;
    // Save the phase actually heard, including the short mute ramp. Even a
    // mute across the intro boundary must never restart the completed intro.
    this.offset = this.playbackPosition(now + fade);
    this.voice = null;
    const param = voice.gain.gain;
    if (param.cancelAndHoldAtTime) param.cancelAndHoldAtTime(now);
    else { param.cancelScheduledValues(now); param.setValueAtTime(param.value, now); }
    param.linearRampToValueAtTime(0, now + fade);
    voice.source.stop(now + fade);
  }

  async enable() {
    if (this.enabled || this.pending) return this.enabled;
    const token = ++this.token;
    this.pending = true;
    this.onChange(false, true);
    try {
      this.init();
      // Resume within the actual user gesture, before the network/decode await.
      await Promise.all([this.context.resume(), this.loadBuffer()]);
      if (token !== this.token) return false;
      if (this.hidden) await this.context.suspend();
      else if (this.context.state !== 'running') await this.context.resume();
      if (token !== this.token) return false;
      this.startPlayback();
      this.pending = false;
      this.enabled = true;
      this.onChange(true, false);
      return true;
    } catch {
      if (token !== this.token) return false;
      this.disable();
      this.onError('The soundtrack could not start. Try again or explore in silence.');
      return false;
    }
  }

  disable() {
    ++this.token;
    this.pending = false;
    this.enabled = false;
    this.stopPlayback();
    this.onChange(false, false);
  }

  energy() {
    if (!this.enabled || !this.analyser || this.hidden) return 0;
    this.analyser.getByteFrequencyData(this.data);
    let sum = 0;
    for (let i = 0; i < 32; i++) sum += this.data[i];
    return Math.min(1, sum / (32 * 100));
  }

  async visibility(hidden) {
    this.hidden = hidden;
    if (!this.context) return;
    try {
      if (hidden) await this.context.suspend();
      else if (this.enabled) await this.context.resume();
    } catch {
      if (this.enabled) this.disable();
    }
  }
}
