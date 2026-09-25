export const WORDMARK_WIDTH=2048;
export const WORDMARK_HEIGHT=512;
export const WORDMARK_VIEWPORT_WIDTH=.94;

// Center the visible glyphs, not their advance width or the font's line box.
// This includes the asymmetric side bearings and negative letter spacing.
export function centeredInk(metrics,width=WORDMARK_WIDTH,height=WORDMARK_HEIGHT){
  const left=metrics.actualBoundingBoxLeft,right=metrics.actualBoundingBoxRight;
  const ascent=metrics.actualBoundingBoxAscent,descent=metrics.actualBoundingBoxDescent;
  const scale=Math.min(width*.90/(left+right),height*.84/(ascent+descent));
  return {scale,x:width/2-(right-left)*scale/2,y:height/2+(ascent-descent)*scale/2};
}

export function createWordmark(element,onDraw=()=>{}){
  const canvas=document.createElement('canvas');canvas.width=WORDMARK_WIDTH;canvas.height=WORDMARK_HEIGHT;
  const ctx=canvas.getContext('2d');
  function draw(){
    ctx.resetTransform();ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.font='800 430px Manrope, Arial';ctx.letterSpacing='-34px';ctx.textAlign='left';ctx.textBaseline='alphabetic';
    const metrics=ctx.measureText('OKARAR'),{scale,x,y}=centeredInk(metrics);
    ctx.setTransform(scale,0,0,scale,x,y);ctx.fillStyle='#ffffff';ctx.fillText('OKARAR',0,0);
    // The CSS layer and the refracted WebGL layer use the exact same artwork.
    const mask=`url("${canvas.toDataURL()}")`;
    element.style.maskImage=mask;element.style.webkitMaskImage=mask;
    element.classList.add('wordmark-ready');
    onDraw();
  }
  draw();const ready=document.fonts.ready.then(draw);
  return {canvas,ready};
}
