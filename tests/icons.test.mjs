import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const read=name=>readFile(new URL(`../${name}`,import.meta.url),'utf8');
const [home,credits,main,css]=await Promise.all(['index.html','credits.html','src/main.js','icons.css'].map(read));
const arrows=/[\u2190-\u21ff\u27f0-\u27ff\u2900-\u297f\u2b00-\u2b0d\u2794\u27a1]/u;

test('all page arrows use SVG rather than platform-dependent text glyphs',()=>{
  for(const html of [home,credits]){
    assert.doesNotMatch(html,arrows);
    assert.match(html,/<link rel="stylesheet" href="\.\/icons\.css">/);
    const icons=[...html.matchAll(/<svg\b([^>]*class="ui-arrow"[^>]*)>([\s\S]*?)<\/svg>/g)];
    assert.ok(icons.length>0);
    for(const [,attributes,contents] of icons){
      assert.match(attributes,/viewBox="0 0 24 24"/);
      assert.match(attributes,/aria-hidden="true"/);
      assert.match(attributes,/focusable="false"/);
      assert.match(contents,/<path d="[^"]+"\/>/);
      assert.doesNotMatch(contents,/<text\b/);
    }
  }
});

test('vector arrows inherit both theme colors and existing icon sizes',()=>{
  assert.match(css,/width:1em;height:1em/);
  assert.match(css,/fill:none;stroke:currentColor/);
  assert.match(css,/pointer-events:none/);
  assert.doesNotMatch(css,/font-family/);
});

test('dynamic ready and scroll labels preserve vector icons, including back up',()=>{
  assert.doesNotMatch(main,arrows);
  assert.match(main,/\$\('\.ready-label'\)\.textContent='READY TO EXPLORE'/);
  assert.match(main,/\$\('\.ready-state \.ui-arrow'\)\.removeAttribute\('hidden'\)/);
  assert.match(main,/\$\('\.scroll-label'\)\.textContent=current===5\?'BACK UP':'SCROLL'/);
  assert.match(main,/\$\('\.scroll-direction \.ui-arrow path'\)\.setAttribute\('d',current===5\?/);
  assert.doesNotMatch(main,/\$\('\.(?:ready-state|scroll-direction)'\)\.textContent\s*=/);
});
