import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {JawMotion,REST_GAPE} from './motion.js';

// Licensed, authored anatomy and skin weights; original stage choreography,
// optical material, phase locking and expression blending are applied here.
export async function loadAnatomicalShark(){
  const gltf=await new GLTFLoader().loadAsync('./assets/shark-anatomical.glb');
  return createAnatomicalRig(gltf);
}

export function createAnatomicalRig(gltf){
  const group=new THREE.Group();group.name='anatomical-glass-shark';
  const model=gltf.scene;model.updateMatrixWorld(true);
  const box=new THREE.Box3().setFromObject(model),size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3());
  const head=model.getObjectByName('Head5');if(head)center.y=head.getWorldPosition(new THREE.Vector3()).y;
  const frame=new THREE.Group();frame.rotation.y=Math.PI/2;frame.scale.setScalar(6.49/size.z);frame.position.x=-.555;
  model.position.sub(center);frame.add(model);group.add(frame);
  const materials=[],bones=[];
  model.traverse(o=>{
    if(o.isBone)bones.push({bone:o,rest:o.quaternion.clone()});
    if(!o.isMesh)return;
    const old=o.material;
    const material=new THREE.MeshPhysicalMaterial({map:old.map,normalMap:old.normalMap,normalScale:new THREE.Vector2(.36,.36),
      color:'#d9edee',metalness:0,roughness:.075,transmission:.96,thickness:.28,ior:1.37,
      clearcoat:.45,clearcoatRoughness:.08,iridescence:.38,iridescenceIOR:1.30,iridescenceThicknessRange:[200,410],
      dispersion:.14,attenuationColor:'#9abfc6',attenuationDistance:5,envMapIntensity:.9,side:THREE.FrontSide});
    // Retain anatomical markings and dark eyes, but lift the skin albedo into
    // translucent smoked crystal instead of coating the animal in grey skin.
    material.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
      #ifdef USE_MAP
        float albedoLuma=dot(sampledDiffuseColor.rgb,vec3(.2126,.7152,.0722));
        float eyeMask=smoothstep(.018,.12,albedoLuma);
        vec3 crystal=vec3(.70,.89,.93)+vec3(.23,.10,.07)*sqrt(albedoLuma);
        diffuseColor.rgb=diffuse*mix(vec3(.025,.055,.065),crystal,eyeMask);
      #endif`);};
    material.customProgramCacheKey=()=> 'okarar-anatomical-crystal-v7';
    materials.push(material);o.material=material;o.frustumCulled=false;
  });
  const mixer=new THREE.AnimationMixer(model),swim=gltf.animations.find(a=>a.name==='swimming');
  mixer.clipAction(swim).play();
  const face=gltf.animations.find(a=>a.name==='bite').tracks.filter(t=>/^(Jaw|[LR]_upper_Lip|Center_upper_Lip|Upper_Teeth)/.test(t.name)).map(t=>{
    const [name,property]=t.name.split('.'),bone=model.getObjectByName(name);
    const native=swim.tracks.find(track=>track.name===t.name)?.createInterpolant();
    return {bone,property,native,rest:bone[property].toArray(),value:Array.from(t.createInterpolant().evaluate(.45))};
  });
  const teeth=model.getObjectByName('Upper_Teeth12'),jaw=model.getObjectByName('Jaw6'),motion=new JawMotion();let gape=REST_GAPE;
  group.updateWorldMatrix(true,true);
  const lowerTip=jaw.worldToLocal(teeth.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0,-.28,.4).multiplyScalar(6.49/size.z).applyAxisAngle(new THREE.Vector3(0,1,0),Math.PI/2)));
  const q=new THREE.Quaternion(),v=new THREE.Vector3();
  function animate({phase,amplitude=.6,jawOpen=REST_GAPE,engulf=0,dt=1/60,instant=false}){
    const unit=((phase%(Math.PI*2))+Math.PI*2)%(Math.PI*2)/(Math.PI*2);
    mixer.setTime(unit*swim.duration);
    for(const {bone,rest} of bones)if(/Spine|BackFin|DorsalFin|[LR]_Fin/.test(bone.name))bone.quaternion.slerpQuaternions(rest,bone.quaternion.clone(),.35+amplitude*1.05);
    gape=motion.update(jawOpen,dt,instant);const blend=Math.max(0,(gape-REST_GAPE)/(1-REST_GAPE));
    for(const pose of face){
      if(!pose.bone)continue;
      // Sampling explicitly prevents the facial override accumulating when a
      // paused/repeated phase makes AnimationMixer skip an unchanged property.
      pose.bone[pose.property].fromArray(pose.native?pose.native.evaluate(unit*swim.duration):pose.rest);
      if(pose.property==='quaternion')pose.bone.quaternion.slerp(q.fromArray(pose.value),blend*(pose.bone===jaw?1+engulf*.30:1));
      else pose.bone[pose.property].lerp(v.fromArray(pose.value),blend);
    }
    group.updateWorldMatrix(true,true);
  }
  function localMouth(){
    group.updateWorldMatrix(true,true);const world=teeth.getWorldPosition(new THREE.Vector3());
    return group.worldToLocal(world).add(new THREE.Vector3(.05,-.07-gape*.12,0));
  }
  function aperture(){
    group.updateWorldMatrix(true,true);
    const upper=group.worldToLocal(teeth.getWorldPosition(new THREE.Vector3()));
    const lower=group.worldToLocal(jaw.localToWorld(lowerTip.clone()));
    // Aim through the recessed opening, above the long lower jaw/floor.
    const center=upper.clone().lerp(lower,.20);
    const normal=new THREE.Vector3(upper.y-lower.y,lower.x-upper.x,0).normalize();
    center.addScaledVector(normal,.035);
    return {center,upper,lower,normal,width:.96,height:Math.max(.14,upper.distanceTo(lower))};
  }
  function mouth(camera,width,height){
    const local=localMouth(),p=group.localToWorld(local.clone()).project(camera);
    const x=(p.x+1)*width/2,y=(1-p.y)*height/2;
    const rim=[];for(const sy of [-1,1])for(const sz of [-1,1])rim.push(group.localToWorld(local.clone().add(new THREE.Vector3(0,sy*(.10+gape*.20),sz*.43))).project(camera));
    return {x,y,left:Math.min(...rim.map(p=>(p.x+1)*width/2)),right:Math.max(...rim.map(p=>(p.x+1)*width/2)),top:Math.min(...rim.map(p=>(1-p.y)*height/2)),bottom:Math.max(...rim.map(p=>(1-p.y)*height/2))};
  }
  return {group,animate,localMouth,mouth,aperture,get jawOpen(){return gape;},
    setLight(light){for(const m of materials)m.normalScale.setScalar(light?.25:.36);},
    setFinish(value){for(const m of materials){m.roughness=.16-value*.12;m.transmission=.86+value*.14;}},
    setColor(name){const palette={pearl:['#d9edee','#9abfc6'],iris:['#e8def3','#a991bc'],ember:['#f3e3ce','#c1a581']};const c=palette[name]||palette.pearl;for(const m of materials){m.color.set(c[0]);m.attenuationColor.set(c[1]);}}
  };
}
