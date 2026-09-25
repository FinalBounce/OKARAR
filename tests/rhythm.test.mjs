import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const code = await readFile(new URL('../src/rhythm.js', import.meta.url), 'utf8');
const { TRACK_BPM, FLAP_BPM, FLAP_SECONDS, TAU, phaseAt, MantaRhythm, wingDisplacement } = await import('data:text/javascript;base64,' + Buffer.from(code).toString('base64'));
const distance = (a, b) => Math.abs(Math.atan2(Math.sin(a - b), Math.cos(a - b)));
const near = (a, b, tolerance = 1e-9) => assert.ok(Math.abs(a - b) < tolerance, `${a} ≠ ${b}`);

test('100 musical beats produce 50 complete wing cycles per minute', () => {
  assert.equal(TRACK_BPM, 100);assert.equal(FLAP_BPM, 50);assert.equal(FLAP_SECONDS, 1.2);
  near(phaseAt(0), 0);near(phaseAt(.6), Math.PI);
  near(distance(phaseAt(1.2), 0), 0);near(distance(phaseAt(60), 0), 0);
});

test('both wingtips rise for one musical beat and fall for the next', () => {
  for (const sign of [-1, 1]) {
    const height = seconds => wingDisplacement(sign * 3.35, .11, phaseAt(seconds), .6, 0);
    assert.ok(height(0) < 0);assert.ok(height(.6) > 0);near(height(1.2), height(0));
    for (let n = 1; n <= 60; n++) {
      assert.ok(height(n / 100) > height((n - 1) / 100));
      assert.ok(height(.6 + n / 100) < height(.6 + (n - 1) / 100));
    }
  }
});

test('the full membrane wave repeats exactly every 1.2 seconds', () => {
  for (const x of [-3.35, -1.5, 0, .2, 2.8, 3.35]) for (const y of [-1, .11, 1]) {
    near(wingDisplacement(x, y, .7, .6, .3), wingDisplacement(x, y, .7 + TAU, .6, .3));
  }
});

test('intro and loop lengths both contain an integer number of wing cycles', () => {
  assert.equal(18 / FLAP_SECONDS, 15);assert.equal(38.4 / FLAP_SECONDS, 32);
  for (const time of [18, 56.4, 56.4 + 38.4 * 200]) near(distance(phaseAt(time), 0), 0);
  near(distance(phaseAt(56.4 - .001), phaseAt(18 + .001)), .002 / FLAP_SECONDS * TAU);
});

test('silence preserves 50 BPM at desktop, mobile and irregular frame rates', () => {
  for (const steps of [[1 / 60], [1 / 30], [.016, .050, .033, .100]]) {
    const rhythm = new MantaRhythm();let seconds = 0;
    for (let n = 0; n < 3600; n++) {const dt = steps[n % steps.length];seconds += dt;rhythm.update(dt);}
    near(distance(rhythm.phase, phaseAt(seconds)), 0, 1e-8);
  }
});

test('audio lock settles smoothly then follows the native clock without drift', () => {
  const rhythm = new MantaRhythm();rhythm.phase = Math.PI;
  let seconds = 0;
  for (let n = 0; n < 36000; n++) {
    const dt = [.016, .033, .050][n % 3];seconds += dt;
    const position = seconds < 18 ? seconds : 18 + (seconds - 18) % 38.4;
    rhythm.update(dt, position);
    if (seconds > 1) near(distance(rhythm.phase, phaseAt(position)), 0, .001);
  }
});

test('animation pause and reduced motion freeze the phase while sound advances', () => {
  const rhythm = new MantaRhythm();const phase = rhythm.update(.1, 7);
  assert.equal(rhythm.update(20, 27, true), phase);
  assert.equal(rhythm.update(20, 47, true), phase);
  for (let n = 1; n <= 60; n++) rhythm.update(1 / 60, 47 + n / 60);
  near(distance(rhythm.phase, phaseAt(48)), 0, .001);
});

test('muting continues the motion and re-enabling reacquires the saved audio beat', () => {
  const rhythm = new MantaRhythm();rhythm.phase = phaseAt(23);
  const before = rhythm.phase;rhythm.update(.1, null);
  near(distance(rhythm.phase, before), .1 / FLAP_SECONDS * TAU);
  for (let n = 1; n <= 60; n++) rhythm.update(1 / 60, 23 + n / 60);
  near(distance(rhythm.phase, phaseAt(24)), 0, .001);
});
