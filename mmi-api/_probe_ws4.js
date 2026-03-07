const WebSocket = require("ws");
const ws = new WebSocket("ws://127.0.0.1:14713/");
ws.on('open', ()=>{
  console.log('OPEN');
  ws.send(JSON.stringify({ type:'actionRequest', service:'/registry', payload:{ requestId:11, command:'retrieve', path:'/MCP_Displaymanager', body:{ autosubscribe:true } } }));
  ws.send(JSON.stringify({ type:'actionRequest', service:'/registry', payload:{ requestId:12, command:'retrieve', path:'/MCP_Popups', body:{ autosubscribe:true } } }));
  ws.send(JSON.stringify({ type:'actionRequest', service:'/registry', payload:{ requestId:13, command:'retrieve', path:'/entertainmentcontrol', body:{ autosubscribe:true } } }));
});
ws.on('message', (buf)=>console.log('MSG', String(buf)));
ws.on('error', (err)=>console.log('ERR', err.message));
ws.on('close', (code,reason)=>console.log('CLOSE', code, String(reason)));
setTimeout(()=>{ console.log('DONE'); ws.close(); process.exit(0); }, 3500);
