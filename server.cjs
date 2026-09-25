const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const types = { '.html':'text/html; charset=utf-8', '.js':'text/javascript', '.css':'text/css', '.svg':'image/svg+xml', '.mp3':'audio/mpeg', '.wav':'audio/wav', '.woff2':'font/woff2', '.glb':'model/gltf-binary' };
http.createServer((req,res) => {
  let name;
  try { name = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); } catch { res.writeHead(400).end(); return; }
  const target = path.resolve(root, '.' + (name.endsWith('/') ? name + 'index.html' : name));
  if (!target.startsWith(root + path.sep) || name.includes('node_modules')) { res.writeHead(403).end(); return; }
  fs.readFile(target,(error,data)=>{if(error){res.writeHead(404).end('Not found');return;}res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream','Cache-Control':'no-store'});res.end(data);});
}).listen(4174,'127.0.0.1',()=>console.log('OKARAR · http://127.0.0.1:4174'));
