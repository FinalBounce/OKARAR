import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const read=name=>readFile(new URL(`../${name}`,import.meta.url),'utf8');
const [home,main,snap,style]=await Promise.all(['index.html','src/main.js','snap.css','style.css'].map(read));

test('all six existing chapter anchors share native snap stops in either theme',()=>{
  assert.deepEqual([...home.matchAll(/<section id="([^"]+)" class="chapter"/g)].map(m=>m[1]),
    ['top','artiste','musique','label','instagram','contact']);
  assert.match(home,/<link rel="stylesheet" href="\.\/snap\.css">/);
  assert.match(snap,/html\.journey-snap\{scroll-snap-type:y mandatory;scroll-padding-block:0\}/);
  assert.match(snap,/\.journey-snap #journey>\.chapter::before/);
  assert.doesNotMatch(snap,/is-abyss|@media|scroll-snap-stop:always/);
});

test('snap markers cannot leave an oversized chapter partially scrolled at rest',()=>{
  assert.match(snap,/position:absolute;top:0;left:0;width:1px;height:1px/);
  assert.match(snap,/scroll-snap-align:start;scroll-snap-stop:normal;pointer-events:none/);
  // Keep the original choreography distances; do not shorten chapters to 100vh.
  assert.match(style,/\.chapter\{height:135svh/);
  assert.match(style,/\.chapter\{height:125svh/);
});

test('snapping starts only after entry and preserves native navigation and motion preferences',()=>{
  assert.doesNotMatch(home,/<html[^>]*class="[^"]*journey-snap/);
  const enter=main.slice(main.indexOf('function enter('),main.indexOf("$('#enter-sound').addEventListener"));
  assert.match(enter,/document\.documentElement\.classList\.add\('journey-snap'\)/);
  assert.ok(enter.indexOf('destination.offsetTop')<enter.indexOf("classList.add('journey-snap')"));
  assert.match(main,/addEventListener\('scroll',updateScroll,\{passive:true\}\)/);
  assert.doesNotMatch(main,/addEventListener\('(?:wheel|touchmove)'/);
  assert.match(style,/@media\(prefers-reduced-motion:reduce\)\{html\{scroll-behavior:auto\}/);
  assert.match(style,/html:has\(body\.reduced-motion\)\{scroll-behavior:auto\}/);
});
