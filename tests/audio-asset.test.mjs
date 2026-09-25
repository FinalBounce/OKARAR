import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';

function wav(bytes){
  assert.equal(bytes.toString('ascii',0,4),'RIFF');assert.equal(bytes.toString('ascii',8,12),'WAVE');
  let format,pcm;
  for(let at=12;at+8<=bytes.length;){
    const id=bytes.toString('ascii',at,at+4),length=bytes.readUInt32LE(at+4),chunk=bytes.subarray(at+8,at+8+length);
    if(id==='fmt '){
      const encoding=chunk.readUInt16LE(0);
      format={encoding:encoding===65534?chunk.readUInt32LE(24):encoding,channels:chunk.readUInt16LE(2),rate:chunk.readUInt32LE(4),bits:chunk.readUInt16LE(14)};
    }
    if(id==='data')pcm=chunk;
    at+=8+length+(length%2);
  }
  assert.deepEqual(format,{encoding:1,channels:2,rate:48000,bits:24});assert.ok(pcm);
  return {pcm,frames:pcm.length/6,sample:(frame,channel)=>pcm.readIntLE(frame*6+channel*3,3)/8388608};
}
const originalBytes=await readFile(new URL('../assets/please-lord-sequence.wav',import.meta.url));
const original=wav(originalBytes),fixed=wav(await readFile(new URL('../assets/please-lord-seamless.wav',import.meta.url)));
const intro=864000,loop=1843200;

test('web repair leaves original exports, duration and tempo unchanged',()=>{
  assert.equal(createHash('sha256').update(originalBytes).digest('hex'),'e915553ca88f32e1be364d74cbb3c2656f415edb7c25009e8517f908ac715ca8');
  assert.equal(fixed.frames,intro+loop);assert.equal(fixed.frames,original.frames);
  assert.deepEqual(fixed.pcm.subarray(0,(intro-384)*6),original.pcm.subarray(0,(intro-384)*6));
  assert.deepEqual(fixed.pcm.subarray((intro+6000)*6),original.pcm.subarray((intro+6000)*6));
});
test('the 100 ms startup drop is gone, including each 10 ms block before the snare',()=>{
  for(let block=0;block<10;block++){
    let sum=0;
    for(let i=block*480;i<(block+1)*480;i++)for(let c=0;c<2;c++)sum+=fixed.sample(intro+i,c)**2;
    assert.ok(10*Math.log10(sum/960)>-40,`gap in block ${block}`);
  }
  assert.equal(original.sample(intro,0),0);assert.notEqual(fixed.sample(intro,0),0);
});
test('the first handoff and every loop wrap share a slope-continuous PCM seam',()=>{
  for(const end of [intro,fixed.frames])for(let c=0;c<2;c++){
    const previousStep=fixed.sample(end-1,c)-fixed.sample(end-2,c);
    const seamStep=fixed.sample(intro,c)-fixed.sample(end-1,c);
    assert.ok(Math.abs(previousStep-seamStep)<=2/8388608,'no DC step added at the seam');
    assert.ok(Math.abs(seamStep)<.01);
  }
});
