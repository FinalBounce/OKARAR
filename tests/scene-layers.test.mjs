import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const css=await readFile(new URL('../style.css',import.meta.url),'utf8');
function declaration(selector){
  const escaped=selector.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const match=css.match(new RegExp(`(?:^|[}\\n])${escaped}\\{([^}]*)\\}`));
  assert.ok(match,`missing ${selector}`);return match[1];
}
const layer=selector=>Number(declaration(selector).match(/(?:^|;)z-index:(\d+)/)?.[1]);

test('the night vignette never moves in front of the shark when a pass ends',()=>{
  const vignette=layer('body:after');
  for(const selector of ['#world','.is-passing #world','.is-engulfing #world']){
    assert.ok(vignette<layer(selector),`${selector} must remain above the dark overlay`);
  }
  assert.ok(layer('.atmosphere')<vignette,'retain the dark background treatment');
  assert.match(declaration('body:after'),/pointer-events:none/);
});
test('fixing the vignette preserves text, navigation and engulfing layer order',()=>{
  assert.ok(layer('#world')<layer('.panel'),'text stays in front at rest');
  assert.ok(layer('.panel')<layer('.is-passing #world'),'the fly-by can still pass over text');
  assert.ok(layer('.is-passing #world')<layer('.hud'),'normal fly-bys leave controls accessible');
  assert.ok(layer('.is-engulfing #world')<layer('.engulf-veil'),'the blackout still covers the first attack');
});
