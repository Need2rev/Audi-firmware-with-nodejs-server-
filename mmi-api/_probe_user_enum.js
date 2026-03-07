const WebSocket = require("ws");
const ws = new WebSocket("ws://127.0.0.1:14713/");
ws.on('open', ()=>{
  ws.send(JSON.stringify({ type:'actionRequest', service:'/usermanagement', payload:{ requestId:1, command:'retrieve', path:'/users', body:{ autosubscribe:false, search:{ role:'PrimaryUser' } } } }));
  ws.send(JSON.stringify({ type:'actionRequest', service:'/usermanagement', payload:{ requestId:2, command:'retrieve', path:'/activities', body:{ autosubscribe:false, search:{ name:'ResetMainUser' } } } }));
  ws.send(JSON.stringify({ type:'actionRequest', service:'/usermanagement', payload:{ requestId:3, command:'retrieve', path:'/activities', body:{ autosubscribe:false, search:{ name:'resetMainUser' } } } }));
});
ws.on('message', buf => console.log(String(buf)));
setTimeout(()=>{ ws.close(); process.exit(0); }, 1500);
