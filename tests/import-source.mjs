import {build} from 'esbuild';
export async function source(name){
  const result=await build({entryPoints:[new URL('../src/'+name,import.meta.url).pathname],bundle:true,write:false,format:'esm',platform:'node'});
  return import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
}
