import { consumptionAt } from './takeover.js';
import { style } from './dom-cache.js';

export class TextFeast {
  constructor(panels,{blur=true}={}) {
    this.words=[];this.held=false;this.blur=blur;
    panels.forEach((panel,chapter)=>{
      const words=[];
      for(const node of panel.querySelectorAll('h2,.body-copy,.margin-note')){
        const walker=document.createTreeWalker(node,NodeFilter.SHOW_TEXT),textNodes=[];
        while(walker.nextNode())if(!walker.currentNode.parentElement.closest('a,button'))textNodes.push(walker.currentNode);
        for(const text of textNodes){
          const fragment=document.createDocumentFragment();
          for(const token of text.textContent.split(/(\s+)/)){
            if(!token)continue;
            if(/^\s+$/.test(token)){fragment.append(document.createTextNode(token));continue;}
            const span=document.createElement('span');span.className='edible-word';span.textContent=token;fragment.append(span);
            words.push({el:span,chapter,amount:0,x:0,y:0});
          }
          text.replaceWith(fragment);
        }
      }
      words.forEach((word,index)=>{word.index=index;word.count=words.length;this.words.push(word);});
    });
    this.measure();
  }
  measure() {
    for(const word of this.words)style(word.el,'transform','none');
    for(const word of this.words){const r=word.el.getBoundingClientRect();word.x=r.x+r.width/2;word.y=r.y+r.height/2;}
  }
  prepare(position,active,{still=false}={}) {
    for(const word of this.words)word.amount=active&&!this.held&&!still?consumptionAt(position,word.chapter,word.index,word.count):0;
  }
  render(mouth,still=false) {
    let faded=0;
    for(const word of this.words){
      const a=mouth&&!still?word.amount:0;
      style(word.el,'opacity',String(1-a));
      style(word.el,'transform',still||a===0||a===1?'none':`translate(${(mouth.x-word.x)*a}px,${(mouth.y-word.y)*a}px) rotate(${(word.index%2?1:-1)*a*26}deg) scale(${1-a*.93})`);
      style(word.el,'filter',this.blur===false||still||a===0||a===1?'none':`blur(${a*1.1}px)`);
      if(a===1)faded++;
    }
    return faded;
  }
}
