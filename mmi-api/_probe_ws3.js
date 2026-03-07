const WebSocket = require("ws");
const ws = new WebSocket("ws://127.0.0.1:14713/");
ws.on('open', ()=>{
  console.log('OPEN');
  ws.send(JSON.stringify({
    type:'actionRequest',
    service:'/entertainmentcontrol',
    payload:{ requestId:1, command:'retrieve', path:'/targets', body:{ autosubscribe:true, search:{ type:'MAIN' } } }
  }));
  ws.send(JSON.stringify({
    type:'actionRequest',
    service:'/usermanagement',
    payload:{ requestId:2, command:'retrieve', path:'/settings', body:{ autosubscribe:true } }
  }));
  ws.send(JSON.stringify({
    type:'actionRequest',
    service:'/MCP_Displaymanager',
    payload:{ requestId:3, command:'retrieve', path:'/displays', body:{ autosubscribe:true } }
  }));
  ws.send(JSON.stringify({
    type:'actionRequest',
    service:'/MCP_Popups',
    payload:{ requestId:4, command:'retrieve', path:'/Driver_Display', body:{ autosubscribe:true } }
  }));
});
ws.on('message', (buf)=>console.log('MSG', String(buf)));
ws.on('error', (err)=>console.log('ERR', err.message));
ws.on('close', (code,reason)=>console.log('CLOSE', code, String(reason)));
setTimeout(()=>{ console.log('DONE'); ws.close(); process.exit(0); }, 3500);
