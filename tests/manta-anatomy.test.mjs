import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {source} from './import-source.mjs';
const {mantaPoint,mantaMembrane,mantaDetails,mergeMantaDetails,mouthContour,mantaOutline,mantaSurfaceAt,pigment,MANTA_SPAN}=await source('manta-anatomy.js');

test('anatomical disc keeps the existing 6.7-unit span and bilateral symmetry',()=>{
  assert.equal(MANTA_SPAN,6.7);
  for(let i=0;i<=40;i++)for(let j=0;j<=20;j++){
    const a=mantaPoint(i/40,j/20),b=mantaPoint(-i/40,j/20);
    assert.ok(Math.abs(a.x+b.x)<1e-10);assert.ok(Math.abs(a.y-b.y)<1e-10);assert.ok(Math.abs(a.z-b.z)<1e-10);
  }
});
test('body and wings form one continuous volume with distinct dorsal and ventral surfaces',()=>{
  for(let i=0;i<40;i++)for(let j=1;j<20;j++){
    const top=mantaPoint(i/40,j/20,1),bottom=mantaPoint(i/40,j/20,-1);
    assert.ok(top.z>=bottom.z);assert.ok(Number.isFinite(top.z));
  }
  assert.ok(mantaPoint(0,.3,1).z-mantaPoint(0,.3,-1).z>.35);
});
test('curved terminal mouth is continuous with the front of the body',()=>{
  for(let i=1;i<32;i++){
    const t=i/64,p=mouthContour(t),top=mantaPoint(p.x/(MANTA_SPAN/2),0,1);
    assert.ok(p.distanceTo(top)<1e-6);
  }
  assert.ok(mouthContour(.25).y-mouthContour(0).y>.15);
});
test('the model has recessed eyes, integrated lobes and exactly five ventral gills per side',()=>{
  const parts=mantaDetails();
  assert.equal(parts.filter(p=>p.name.startsWith('manta-inset-eye')).length,2);
  assert.equal(parts.filter(p=>p.name.startsWith('manta-cephalic-lobe')).length,0,'no detached ribbon shells');
  const gills=parts.filter(p=>p.name.startsWith('manta-ventral-gill'));
  assert.equal(gills.length,10);
  for(const g of gills){const p=g.geometry.attributes.position,n=g.geometry.attributes.normal;
    for(let i=0;i<p.count;i++)assert.ok(p.getZ(i)<0);
    assert.ok(Array.from({length:n.count},(_,i)=>n.getZ(i)).reduce((a,b)=>a+b,0)<0);
  }
  assert.ok(parts.some(p=>p.name==='manta-recessed-mouth'));
  assert.equal(parts.some(p=>/antenna|orb/.test(p.name)),false);
});
test('cephalic scoops are continuous extensions of the body with a closed soft leading edge',()=>{
  for(const sign of [-1,1])for(let x=.67;x<=1.13;x+=.01){
    const top=mantaPoint(sign*x/(MANTA_SPAN/2),0,1),bottom=mantaPoint(sign*x/(MANTA_SPAN/2),0,-1);
    assert.ok(top.distanceTo(bottom)<1e-10);
    assert.ok(mantaPoint(sign*x/(MANTA_SPAN/2),.01,1).distanceTo(top)<.12);
  }
  assert.ok(mantaOutline(.90).front>1.5);
  assert.ok(mantaOutline(.90).front-mantaOutline(.66).front<.85,'short broad lobes, not stalks');
});
test('ventral gills follow the body surface and pigmentation distinguishes both sides',()=>{
  for(const p of mantaDetails().filter(p=>p.name.startsWith('manta-ventral-gill'))){
    const v=p.geometry.attributes.position;
    for(let n=0;n<v.count;n++)assert.ok(Math.abs(v.getZ(n)-(mantaSurfaceAt(v.getX(n),v.getY(n),-1).z-.006))<1e-6);
  }
  const p=mantaPoint(.1,.5);assert.ok(pigment(p,1).r<pigment(p,-1).r*.65);
});
test('desktop and mobile anatomical meshes have finite positions, normals and valid indices',()=>{
  for(const mobile of [false,true]){
    const parts=[{geometry:mantaMembrane(mobile?80:144,mobile?36:64)},...mantaDetails({mobile})];
    let vertices=0;
    for(const {geometry:g} of parts){
      vertices+=g.attributes.position.count;
      for(const name of ['position','normal','uv'])for(const x of g.attributes[name].array)assert.ok(Number.isFinite(x));
      for(const idx of g.index.array)assert.ok(idx<g.attributes.position.count);
    }
    if(mobile)assert.ok(vertices<20000);else assert.ok(vertices>19000&&vertices<45000);
  }
});
test('anatomical details batch by material without losing vertices or part metadata',()=>{
  const parts=mantaDetails(),count=parts.reduce((n,p)=>n+p.geometry.attributes.position.count,0);
  const batched=mergeMantaDetails(parts);
  assert.ok(batched.length<=7);assert.equal(batched.reduce((n,p)=>n+p.geometry.attributes.position.count,0),count);
  assert.equal(batched.flatMap(p=>p.geometry.userData.parts).length,parts.length);
});
test('all anatomical detail materials keep the shared wing deformation and mouth clipping',async()=>{
  const code=await readFile(new URL('../src/creature.js',import.meta.url),'utf8');
  assert.match(code,/for\(const part of mergeMantaDetails/);
  assert.match(code,/root\.traverse\(part=>\{if\(part\.material\)/);
  assert.match(code,/mat\.clippingPlanes=\[swallowPlane\]/);
  assert.match(code,/uCapture \* \.52/);
});
