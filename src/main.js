import { createWorld } from './creature.js';
import { Sound, INTRO_SECONDS } from './sound.js';
import { MantaRhythm } from './rhythm.js';
import { MantaFlourish, flourishPose } from './manta-flourish.js';
import { Takeover, ATTACK_SECONDS, RETURN_SECONDS } from './takeover.js';
import { TextFeast } from './feast.js';
import { PassDirector } from './passes.js';
import { createWordmark } from './wordmark.js';
import { sceneUiReady } from './engulf.js';
import { MantaJourneyCues } from './manta-journey.js';

const $=selector=>document.querySelector(selector);
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const ease=v=>v*v*(3-2*v);
const reducedQuery=matchMedia('(prefers-reduced-motion: reduce)');
const params=new URLSearchParams(location.search);
const rhythm=new MantaRhythm(),passes=new PassDirector(),rhythmDebug=params.has('debug-rhythm');
const flourish=new MantaFlourish();
const mantaCues=new MantaJourneyCues();
if(rhythmDebug)$('#world').dataset.rhythmDebug='';
let reduced=reducedQuery.matches||params.has('reduced'),paused=reduced;
let entered=false,entryBlend=0,currentPosition=0,targetPosition=0,time=0,pulse=0,activeChapter=-1;
let raf=0,lastTime=0,lastDraw=0,dirty=true,slowFrames=0,frameSamples=0;
const chapters=[...document.querySelectorAll('.chapter')],panels=chapters.map(ch=>ch.querySelector('.panel'));
const takeover=new Takeover(INTRO_SECONDS),feast=new TextFeast(panels);
let sceneState=takeover.snapshot(),sceneAnnounced=false;
const labels=['HOME','ARTIST','LISTEN','FINAL BOUNCE','INSTAGRAM','CONTACT'];
let offsets=[];const pointer={x:0,y:0},targetPointer={x:0,y:0};
const entry=$('.entry'),entryButtons=[$('#enter-sound'),$('#enter-quiet')];
$('.nav').inert=true;$('#journey').inert=true;
let toastTimer;
function toast(message){$('.status-message').textContent=message;$('.status-message').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('.status-message').classList.remove('visible'),5000);}
function soundState(value,loading=false){
  document.body.classList.toggle('sound-on',value);$('#sound-toggle').setAttribute('aria-pressed',String(value));$('#sound-toggle').setAttribute('aria-busy',String(loading));$('#sound-toggle').setAttribute('aria-label',loading?'Cancel audio loading':value?'Mute sound':'Enable sound');$('.sound-label').textContent=loading?'LOADING…':value?'SOUND ON':'SOUND OFF';
}
const sound=new Sound(soundState,toast);
function showReadyState(){$('.ready-label').textContent='READY TO EXPLORE';$('.ready-state .ui-arrow').removeAttribute('hidden');}
function fallback(){document.body.classList.add('no-webgl');$('#world').dataset.renderer='fallback';showReadyState();}
const wordmarkArt=createWordmark($('.wordmark'),()=>{dirty=true;});
let world=null;
if(params.has('fallback'))fallback();else{
  try{world=createWorld($('#world'),{mobile:innerWidth<=800||navigator.connection?.saveData,onFallback:fallback,wordmarkArt});}catch(error){console.warn('Manta fallback:',error);fallback();}
}
showReadyState();
world?.ready.then(()=>{dirty=true;});
if(world?.light)$('#light-mode').setAttribute('aria-pressed','true');
$('#light-mode span').textContent=world?.light?'ON':'OFF';
function geometry(){
  const preserve=entered&&offsets.length>0,position=targetPosition;
  offsets=chapters.map(ch=>ch.offsetTop);world?.resize();
  if(preserve){const i=Math.min(4,Math.floor(position));scrollTo({top:offsets[i]+(offsets[i+1]-offsets[i])*(position-i),behavior:'instant'});}
  updateScroll();feast.measure();dirty=true;
}
function updateScroll(){
  let idx=0;while(idx<5&&scrollY>=offsets[idx+1])idx++;
  targetPosition=Math.min(5,idx+(idx<5?(scrollY-offsets[idx])/(offsets[idx+1]-offsets[idx]):0));
  if(reduced||paused)currentPosition=targetPosition;
  dirty=true;
}
function closeIndex(focus=false){$('#index-panel').hidden=true;$('.index-toggle').setAttribute('aria-expanded','false');if(focus)$('.index-toggle').focus();}
function closeCustomizer(focus=false){$('#customizer').hidden=true;$('#customize-toggle').setAttribute('aria-expanded','false');if(focus)$('#customize-toggle').focus();}
function enter(withSound){
  if(entered)return;
  entered=true;if(withSound)sound.enable();entry.classList.add('is-closed');entry.inert=true;
  entry.setAttribute('aria-hidden','true');document.body.classList.remove('awaiting-entry');$('.nav').inert=false;$('#journey').inert=false;$('.hud').inert=false;
  geometry();const legacy={'#production':'#label','#projets':'#instagram'};const hash=legacy[location.hash]||location.hash;const destination=chapters.find(ch=>'#'+ch.id===hash)||chapters[0];scrollTo({top:destination.offsetTop,behavior:'instant'});updateScroll();currentPosition=targetPosition;if(reduced)entryBlend=1;
  // Both consent choices share the same greeting, independently of audio load.
  flourish.start(!!world&&!document.body.classList.contains('no-webgl')&&!paused&&!reduced);
  $('#sound-toggle').focus({preventScroll:true});dirty=true;
}
$('#enter-sound').addEventListener('click',()=>enter(true));$('#enter-quiet').addEventListener('click',()=>enter(false));
entry.addEventListener('keydown',e=>{if(e.key==='Tab'){e.preventDefault();entryButtons[document.activeElement===entryButtons[0]?1:0].focus();}});
entryButtons[0].focus({preventScroll:true});
function toggleSound(){sound.enabled||sound.pending?sound.disable():sound.enable();}
$('#sound-toggle').addEventListener('click',toggleSound);
$('#text-toggle').addEventListener('click',()=>{feast.held=!feast.held;$('#text-toggle').setAttribute('aria-pressed',String(feast.held));$('#text-toggle').setAttribute('aria-label',feast.held?'Restore word aspiration':'Keep all text visible');$('#text-toggle').textContent=feast.held?'TEXT HELD':'KEEP TEXT';dirty=true;});
// Leave the experience quiet when following a music-service link.
document.querySelectorAll('.platform-links a').forEach(link=>link.addEventListener('click',()=>sound.disable()));
function impulse(){if(!entered)return;pulse=1;dirty=true;}
$('#pulse').addEventListener('click',()=>{
  const allowed=entered&&!!world&&!document.body.classList.contains('no-webgl')&&!sceneState.active&&!paused&&!reduced;
  if(flourish.start(allowed))dirty=true;
});
let pointerDown;
$('#world').addEventListener('pointerdown',e=>{pointerDown={x:e.clientX,y:e.clientY};});
$('#world').addEventListener('pointerup',e=>{if(pointerDown&&Math.hypot(e.clientX-pointerDown.x,e.clientY-pointerDown.y)<12)impulse();pointerDown=null;});
$('#world').addEventListener('pointercancel',()=>pointerDown=null);
addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;targetPointer.x=(e.clientX/innerWidth-.5)*2;targetPointer.y=-(e.clientY/innerHeight-.5)*2;const orbit=$('.cursor-orbit');orbit.style.left=e.clientX-21+'px';orbit.style.top=e.clientY-21+'px';orbit.style.opacity=entered&&e.target===$('#world')&&!reduced?'1':'0';dirty=true;},{passive:true});
document.addEventListener('pointerleave',()=>{targetPointer.x=targetPointer.y=0;$('.cursor-orbit').style.opacity=0;});
$('.index-toggle').addEventListener('click',()=>{const isOpen=!$('#index-panel').hidden;closeCustomizer();$('#index-panel').hidden=isOpen;$('.index-toggle').setAttribute('aria-expanded',String(!isOpen));});
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>{closeIndex();closeCustomizer();if(!entered)enter(false);}));
$('#customize-toggle').addEventListener('click',()=>{const isOpen=!$('#customizer').hidden;closeIndex();$('#customizer').hidden=isOpen;$('#customize-toggle').setAttribute('aria-expanded',String(!isOpen));});
$('#customize-close').addEventListener('click',()=>closeCustomizer(true));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeIndex();closeCustomizer();}});
document.addEventListener('click',e=>{if(!e.target.closest('.index-panel,.index-toggle'))closeIndex();if(!e.target.closest('.customizer,#customize-toggle'))closeCustomizer();});
document.querySelectorAll('[data-color]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-color]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));world?.setColor(button.dataset.color);$('.fallback-creature').style.filter=button.dataset.color==='iris'?'hue-rotate(75deg)':button.dataset.color==='ember'?'hue-rotate(185deg)':'none';dirty=true;impulse();}));
$('#fluidity').addEventListener('input',e=>{world?.setAmplitude(Number(e.target.value)/100);$('#fluidity-value').textContent=e.target.value+'%';dirty=true;});
$('#glass').addEventListener('input',e=>{world?.setTransparency(Number(e.target.value)/100);$('#glass-value').textContent=e.target.value+'%';dirty=true;});
function lightMode(value,automatic=false){world?.setLight(value);$('#light-mode').setAttribute('aria-pressed',String(value));$('#light-mode span').textContent=value?'ON':'OFF';dirty=true;if(automatic)toast('Switched to lightweight mode to keep things fluid.');}
$('#light-mode').addEventListener('click',()=>lightMode(!world?.light));
function updatePause(){lastDraw=performance.now();document.body.classList.toggle('is-paused',paused);document.body.classList.toggle('reduced-motion',reduced);$('#motion-toggle').setAttribute('aria-pressed',String(paused));$('#motion-toggle').setAttribute('aria-label',paused?'Resume animation':'Pause animation');$('#motion-toggle').textContent=paused?'▷':'Ⅱ';dirty=true;}
$('#motion-toggle').addEventListener('click',()=>{paused=!paused;updatePause();});
reducedQuery.addEventListener('change',e=>{reduced=e.matches;paused=reduced;updatePause();});updatePause();

function layout(position){
  const i=Math.min(4,Math.floor(position));const f=position-i;const cross=ease(clamp((f-.52)/.43));
  const weights=panels.map((_,n)=>n===i?1-cross:n===i+1?cross:0);
  const current=position>=4.95?5:(cross>.5?i+1:i);
  panels.forEach((panel,n)=>{const value=entered?weights[n]*entryBlend:0;panel.style.opacity=value.toFixed(3);panel.style.visibility=value>.01?'visible':'hidden';panel.style.transform=reduced?'none':`translateY(${(1-value)*(n<=i?-18:22)}px)`;chapters[n].inert=!entered||n!==current;chapters[n].setAttribute('aria-hidden',String(!entered||n!==current));});
  if(current!==activeChapter){activeChapter=current;$('#chapter-label').textContent=String(current).padStart(2,'0')+' / '+labels[current];$('.scroll-next').href='#'+chapters[Math.min(5,current+1)].id;$('.scroll-label').textContent=current===5?'BACK UP':'SCROLL';$('.scroll-direction .ui-arrow path').setAttribute('d',current===5?'M12 21V3m-7 7 7-7 7 7':'M12 3v18m-7-7 7 7 7-7');if(current===5)$('.scroll-next').href='#top';}
  $('.scroll-line i').style.width=clamp(position/5)*100+'%';
  if(!world){$('.wordmark').style.opacity=(1-clamp(position*1.7))*entryBlend*.8;$('.fallback-creature').style.transform=`translate(-50%, -50%) rotate(${position*8-8}deg) scale(${.85+Math.sin(position)*.1})`;}
}
function frame(now){
  raf=requestAnimationFrame(frame);const dt=Math.min(.05,(now-lastTime)/1000||.016);lastTime=now;
  const fps=world?.light?30:60;if(now-lastDraw<1000/fps-1)return;
  const audioPosition=sound.audiblePosition(now),previous=sceneState;
  sceneState=takeover.update(audioPosition,entered,reduced||paused);
  // Deterministic, silent scene inspection; never used by the normal journey.
if(entered&&entryBlend>.995&&params.has('preview-takeover')){const p=Number(params.get('preview-takeover'));if(Number.isFinite(p)){takeover.active=true;takeover.progress=clamp(p);takeover.elapsed=p<1?clamp(p)*ATTACK_SECONDS:ATTACK_SECONDS+clamp(Number(params.get('preview-return')??1))*RETURN_SECONDS;sceneState=takeover.snapshot();}}
  if(previous.active!==sceneState.active||previous.progress!==sceneState.progress)dirty=true;
  // Reveal the new controls only after the shark has crossed the screen and
  // the blackout has fully cleared. Their layout space already exists.
  if(sceneUiReady(sceneState)&&!sceneAnnounced){
    sceneAnnounced=true;
    document.body.classList.add('shark-ui-ready');
    $('meta[name="theme-color"]').content='#090c10';
    $('#text-toggle').disabled=false;$('#text-toggle').inert=false;$('#text-toggle').removeAttribute('aria-hidden');
    $('.specimen-note span').textContent='SHARK / 002';$('.customizer-top>span').textContent='YOUR SHARK';
    $('label[for="glass"]').firstChild.textContent='Surface sheen ';
    $('#customizer').setAttribute('aria-label','Shape the shark');
    $('#scene-announcement').textContent='The shark takes over. Listening links and navigation remain available. Use Keep text to preserve all editorial text.';
  }
  document.body.classList.toggle('is-abyss',sceneState.dark>.48);
  document.body.style.setProperty('--abyss-progress',String(sceneState.dark));
  const isShark=sceneState.active&&sceneState.swallowed>=.99;
  const animal=isShark?'shark':'manta';
  if($('#world').dataset.animal!==animal){$('#world').dataset.animal=animal;$('#world').setAttribute('aria-label',isShark?'An animated glass shark, OKARAR’s nocturnal totem':'An animated glass manta ray, OKARAR’s totem');$('.fallback-creature').src=`./assets/${animal}-fallback.svg`;$('.fallback-creature').alt=isShark?'A glass shark in dark water':'Translucent manta ray';}
  document.body.dataset.scene=sceneState.active?(sceneState.progress<1?'attack':'shark'):'manta';
  $('#pulse').hidden=sceneState.active||paused||reduced;
  if(rhythmDebug)$('#world').dataset.takeoverProgress=String(sceneState.progress);
  const settled=Math.abs(currentPosition-targetPosition)<.001&&(!entered||entryBlend>.999);
  if((paused||reduced)&&!dirty&&settled)return;
  const elapsed=lastDraw?now-lastDraw:16;lastDraw=now;
  if(!paused&&!reduced)time+=elapsed/1000;
  const lerp=1-Math.exp(-dt*8);currentPosition+=(targetPosition-currentPosition)*(reduced?1:lerp);
  entryBlend+=(Number(entered)-entryBlend)*(reduced?1:lerp);
  pointer.x+=(targetPointer.x-pointer.x)*lerp;pointer.y+=(targetPointer.y-pointer.y)*lerp;
  if(!paused&&!reduced)pulse*=.94;
  const energy=sound.energy();
  const phase=rhythm.update(elapsed/1000,audioPosition,paused||reduced);
  mantaCues.update(flourish,{position:currentPosition,target:targetPosition,delta:elapsed/1000,allowed:entered&&!!world&&!document.body.classList.contains('no-webgl')&&!sceneState.active&&!paused&&!reduced});
  let flourishState=flourish.update(elapsed/1000,{paused,reduced});
  // Silent pose inspection for visual QA; never starts sound or a real turn.
  if(entered&&!sceneState.active&&!paused&&!reduced&&params.has('preview-flourish')){
    const preview=Number(params.get('preview-flourish'));
    if(Number.isFinite(preview))flourishState=flourishPose(preview,params.get('preview-figure')||'roll');
  }
  $('#pulse').disabled=flourish.active;
  $('#pulse').setAttribute('aria-busy',String(flourish.active));
  if(rhythmDebug){$('#world').dataset.flourishProgress=String(flourish.progress);$('#world').dataset.flourishActive=String(flourish.active);$('#world').dataset.flourishKind=flourish.kind;$('#world').dataset.divePlayed=String(mantaCues.divePlayed);}
  if(rhythmDebug){$('#world').dataset.audioPosition=audioPosition===null?'silent':String(audioPosition);$('#world').dataset.motionFrozen=String(paused||reduced);}
  const canMove=!!world&&!document.body.classList.contains('no-webgl');
  const ready=sceneState.active&&sceneState.returning>=1&&canMove;
  feast.prepare(currentPosition,ready,{still:reduced||!canMove});
  let pass=passes.update(currentPosition,elapsed/1000,{active:ready&&world.arrivalReady,paused,reduced,target:targetPosition,busy:world?.navigationBusy});
  if(ready&&world.arrivalReady&&!reduced&&params.has('preview-pass'))pass={id:'preview',chapter:Math.min(4,Math.floor(currentPosition)),t:clamp(Number(params.get('preview-pass')))};
  layout(currentPosition);
  if(rhythmDebug)$('#world').dataset.sharkBpm='50';
  document.body.classList.toggle('is-passing',!!pass);
  document.body.classList.toggle('is-engulfing',canMove&&!reduced&&sceneState.active&&sceneState.progress>=.4&&sceneState.progress<1);
  const rendered=world?.render({time:reduced?1.1:time,phase,sharkPhase:phase,dt:paused||reduced?0:elapsed/1000,position:currentPosition,targetPosition,redirecting:passes.redirecting,displayChapter:activeChapter,entered:entryBlend,pointer:reduced?{x:0,y:0}:pointer,pulse,energy,reduced:reduced||paused,paused,takeover:sceneState,pass,flourish:flourishState,audioPosition});
  const faded=feast.render(rendered?.mouth,reduced||!canMove);
  document.body.style.setProperty('--engulf-veil',String(reduced?0:rendered?.engulfVeil||0));
  if(rhythmDebug){$('#world').dataset.eatenWords=String(faded);$('#world').dataset.pass=pass?String(pass.chapter):'idle';$('#world').dataset.passProgress=String(pass?.t??0);$('#world').dataset.mouth=JSON.stringify(rendered?.mouth);}
  if(!world?.light&&!paused&&!reduced&&entered){frameSamples++;if(elapsed>36)slowFrames++;if(frameSamples===150){if(slowFrames>65)lightMode(true,true);frameSamples=slowFrames=0;}}
  dirty=false;
}
addEventListener('scroll',updateScroll,{passive:true});addEventListener('resize',geometry,{passive:true});
document.addEventListener('visibilitychange',()=>{sound.visibility(document.hidden);if(document.hidden){cancelAnimationFrame(raf);raf=0;}else{lastTime=lastDraw=performance.now();dirty=true;if(!raf)raf=requestAnimationFrame(frame);}});
geometry();raf=requestAnimationFrame(frame);
document.fonts.ready.then(()=>{feast.measure();dirty=true;});
