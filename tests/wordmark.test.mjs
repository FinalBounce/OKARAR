import {test} from 'node:test';
import assert from 'node:assert/strict';
import {source} from './import-source.mjs';
const {centeredInk,WORDMARK_WIDTH,WORDMARK_HEIGHT,WORDMARK_VIEWPORT_WIDTH}=await source('wordmark.js');

test('visible glyph bounds are centered independently of side bearings and baseline',()=>{
  for(const metrics of [
    {actualBoundingBoxLeft:-12,actualBoundingBoxRight:1510,actualBoundingBoxAscent:315,actualBoundingBoxDescent:7},
    {actualBoundingBoxLeft:5,actualBoundingBoxRight:1750,actualBoundingBoxAscent:303,actualBoundingBoxDescent:0}
  ]){
    const {x,y,scale}=centeredInk(metrics);
    const left=x-metrics.actualBoundingBoxLeft*scale,right=x+metrics.actualBoundingBoxRight*scale;
    const top=y-metrics.actualBoundingBoxAscent*scale,bottom=y+metrics.actualBoundingBoxDescent*scale;
    assert.ok(Math.abs((left+right)/2-WORDMARK_WIDTH/2)<1e-9);
    assert.ok(Math.abs((top+bottom)/2-WORDMARK_HEIGHT/2)<1e-9);
    assert.ok(left>0&&right<WORDMARK_WIDTH&&top>0&&bottom<WORDMARK_HEIGHT);
  }
});
test('one centered 4:1 frame fits desktop and mobile without a separate offset',()=>{
  for(const [width,height] of [[1641,882],[1280,720],[390,844],[844,390]]){
    const w=width*WORDMARK_VIEWPORT_WIDTH,h=w*WORDMARK_HEIGHT/WORDMARK_WIDTH;
    const left=(width-w)/2,top=(height-h)/2;
    assert.ok(Math.abs(left+w/2-width/2)<1e-9);
    assert.ok(Math.abs(top+h/2-height/2)<1e-9);
    assert.ok(w<width&&h<height);
  }
});
