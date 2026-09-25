// Repeated style/attribute writes can dirty compositing even when a section
// has not moved. The nodes are stable for this single-page experience.
const values=new WeakMap();
function changed(node,key,value){
  let previous=values.get(node);if(!previous){previous=new Map();values.set(node,previous);}
  if(previous.get(key)===value)return false;
  previous.set(key,value);return true;
}
export function style(node,key,value){if(changed(node,'s:'+key,value))node.style[key]=value;}
export function property(node,key,value){if(changed(node,'p:'+key,value))node[key]=value;}
export function attribute(node,key,value){if(changed(node,'a:'+key,value))node.setAttribute(key,value);}
export function cssVariable(node,key,value){if(changed(node,'v:'+key,value))node.style.setProperty(key,value);}
export function classState(node,key,value){if(changed(node,'c:'+key,value))node.classList.toggle(key,value);}
