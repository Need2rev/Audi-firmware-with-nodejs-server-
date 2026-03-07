const WebSocket = require("ws");
const ws = new WebSocket("ws://127.0.0.1:14713/");
ws.on('open', ()=>{
  ws.send(JSON.stringify({ type:'actionRequest', service:'/usermanagement', payload:{ requestId:1, command:'retrieve', path:'/activities', body:{ autosubscribe:false } } }));
});
ws.on('message', buf => console.log(String(buf)));
setTimeout(()=>{ ws.close(); process.exit(0); }, 1800);
