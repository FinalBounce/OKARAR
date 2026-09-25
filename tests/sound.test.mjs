import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const code = await readFile(new URL('../src/sound.js', import.meta.url), 'utf8');
const { Sound, INTRO_SECONDS, LOOP_SECONDS } = await import('data:text/javascript;base64,' + Buffer.from(code).toString('base64'));
let contexts, requests;
const parameter = () => ({ value: 0, setValueAtTime(){}, linearRampToValueAtTime(){}, cancelAndHoldAtTime(){} });
class Context {
  constructor(){this.currentTime=0;this.state='suspended';this.sources=[];contexts.push(this);}
  createAnalyser(){return {fftSize:256,frequencyBinCount:128,connect(){},getByteFrequencyData(a){a.fill(40);}};}
  createGain(){return {gain:parameter(),connect(n){return n;},disconnect(){}};}
  createBufferSource(){const node={connect(n){return n;},disconnect(){},start(...a){this.started=a;},stop(...a){this.stopped=a;}};this.sources.push(node);return node;}
  async decodeAudioData(){return {duration:INTRO_SECONDS+LOOP_SECONDS,length:2707200,sampleRate:48000};}
  async resume(){this.state='running';}
  async suspend(){this.state='suspended';}
}
beforeEach(()=>{
  contexts=[];requests=0;
  globalThis.window={AudioContext:Context};globalThis.document={hidden:false};
  globalThis.fetch=async()=>{requests++;return {ok:true,arrayBuffer:async()=>new ArrayBuffer(8)};};
});
const create=()=>{const states=[],errors=[];return {sound:new Sound((...s)=>states.push(s),e=>errors.push(e)),states,errors};};

test('no audio context, request or playback before consent',()=>{
  const {sound}=create();assert.equal(sound.audiblePosition(0),null);assert.equal(contexts.length,0);assert.equal(requests,0);assert.equal(sound.enabled,false);
});
test('one native timeline starts at zero, with the intro outside the repeating region',async()=>{
  const {sound}=create();await sound.enable();await sound.enable();
  const context=contexts[0],node=context.sources[0];
  assert.equal(context.sources.length,1);assert.equal(node.loop,true);
  assert.equal(node.loopStart,18);assert.equal(node.loopEnd,56.4);assert.deepEqual(node.started,[0,0]);
  assert.equal(requests,1);
});
test('muting during the intro resumes at the saved position, without restarting it',async()=>{
  const {sound}=create();await sound.enable();const context=contexts[0];
  context.currentTime=5;sound.disable();assert.deepEqual(context.sources[0].stopped,[5.04]);
  assert.equal(sound.offset,5.04);context.currentTime=6;await sound.enable();
  assert.equal(context.sources[1].started[1],5.04);assert.equal(requests,1);
});
test('after several repetitions, resume stays in the loop and never in the intro',async()=>{
  const {sound}=create();await sound.enable();const context=contexts[0];
  context.currentTime=18+4*38.4+7.5;sound.disable();
  assert.ok(Math.abs(sound.offset-25.54)<1e-9);assert.ok(sound.offset>=18);
  await sound.enable();assert.equal(context.sources[1].started[1],sound.offset);assert.equal(requests,1);
});
test('a mute ramp crossing the intro endpoint still marks the intro as completed',async()=>{
  const {sound}=create();await sound.enable();contexts[0].currentTime=17.99;sound.disable();
  assert.ok(Math.abs(sound.offset-18.03)<1e-9);await sound.enable();
  assert.ok(contexts[0].sources[1].started[1]>=18);
});
test('the first transition and wrap use the configured endpoints',async()=>{
  const {sound}=create();await sound.enable();
  assert.equal(sound.playbackPosition(17),17);
  assert.equal(sound.playbackPosition(18),18);
  assert.equal(sound.playbackPosition(56.4),18);
  assert.ok(Math.abs(sound.playbackPosition(60)-21.6)<1e-9);
});
test('wrong audio duration is rejected instead of looping the wrong range',async()=>{
  const {sound,errors}=create();sound.init();sound.context.decodeAudioData=async()=>({duration:10,length:480000,sampleRate:48000});
  assert.equal(await sound.enable(),false);assert.equal(errors.length,1);assert.equal(contexts[0].sources.length,0);
});
test('muting while loading cancels late autoplay',async()=>{
  let resolve;globalThis.fetch=()=>new Promise(r=>{resolve=r;});
  const {sound}=create();const pending=sound.enable();assert.equal(sound.pending,true);sound.disable();
  resolve({ok:true,arrayBuffer:async()=>new ArrayBuffer(8)});await pending;
  assert.equal(sound.enabled,false);assert.equal(sound.pending,false);assert.equal(contexts[0].sources.length,0);
});
test('failed loading remains silent and can be retried',async()=>{
  globalThis.fetch=async()=>({ok:false});const {sound,errors}=create();
  assert.equal(await sound.enable(),false);assert.equal(errors.length,1);assert.equal(sound.enabled,false);
  globalThis.fetch=async()=>({ok:true,arrayBuffer:async()=>new ArrayBuffer(8)});
  assert.equal(await sound.enable(),true);
});
test('hidden tab suspends the clock; a muted tab never restarts on return',async()=>{
  const {sound}=create();await sound.enable();await sound.visibility(true);
  assert.equal(contexts[0].state,'suspended');assert.equal(sound.energy(),0);
  await sound.visibility(false);assert.equal(contexts[0].state,'running');assert.equal(contexts[0].sources.length,1);
  await sound.visibility(true);sound.disable();await sound.visibility(false);
  assert.equal(contexts[0].state,'suspended');assert.equal(sound.enabled,false);
});
test('a load completing in a hidden tab stays suspended',async()=>{
  let resolve;globalThis.fetch=()=>new Promise(r=>{resolve=r;});
  const {sound}=create();const pending=sound.enable();await sound.visibility(true);
  resolve({ok:true,arrayBuffer:async()=>new ArrayBuffer(8)});await pending;
  assert.equal(sound.enabled,true);assert.equal(contexts[0].state,'suspended');
});

test('visual timing follows the speaker timestamp, not the ahead-of-output clock',async()=>{
  const {sound}=create();await sound.enable();const context=contexts[0];context.currentTime=10;
  context.getOutputTimestamp=()=>({contextTime:9.8,performanceTime:1000});
  assert.ok(Math.abs(sound.audiblePosition(1050)-9.85)<1e-9);
  assert.equal(sound.audiblePosition(2000),10);
});
test('visual timing falls back to reported output latency and clamps the start',async()=>{
  const {sound}=create();await sound.enable();const context=contexts[0];context.outputLatency=.08;
  assert.equal(sound.audiblePosition(0),0);context.currentTime=10;assert.equal(sound.audiblePosition(0),9.92);
  context.getOutputTimestamp=()=>({contextTime:0,performanceTime:0});
  assert.equal(sound.audiblePosition(0),9.92);
  delete context.outputLatency;context.baseLatency=.03;assert.equal(sound.audiblePosition(0),9.97);
});
test('visual timing keeps the loop phase on resume and returns null when muted',async()=>{
  const {sound}=create();await sound.enable();const context=contexts[0];context.currentTime=60;
  assert.ok(Math.abs(sound.audiblePosition(0)-21.6)<1e-9);
  sound.disable();assert.equal(sound.audiblePosition(0),null);
  context.currentTime=100;await sound.enable();
  context.getOutputTimestamp=()=>({contextTime:99.9,performanceTime:1000});
  assert.equal(sound.audiblePosition(1000),sound.offset);
  context.currentTime=101;await sound.visibility(true);
  assert.equal(sound.audiblePosition(99999),sound.playbackPosition(101));
});
