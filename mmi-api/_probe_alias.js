const WebSocket = require("ws");
const reqs = [
  {id:1, service:'/targets', path:'/', body:{autosubscribe:true, search:{type:'MAIN'}}},
  {id:2, service:'/persistenceentries', path:'/', body:{autosubscribe:true}}
];
const ws = new WebSocket('ws://127.0.0.1:14996/');
ws.on('open', ()=>{ for (const r of reqs) ws.send(JSON.stringify({type:'actionRequest', service:r.service, payload:{requestId:r.id, command:'retrieve', path:r.path, body:r.body}})); });
ws.on('message', (buf)=>console.log(String(buf)));
ws.on('error', (err)=>console.log('ERR', err.message));
setTimeout(()=>{ ws.close(); process.exit(0); }, 2000);
