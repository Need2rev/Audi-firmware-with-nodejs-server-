const WebSocket = require("ws");
const ws = new WebSocket("ws://127.0.0.1:14713/");
ws.on('open', ()=>{ console.log('OPEN'); ws.send(JSON.stringify({requestId:'t1',command:'retrieve',service:'/entertainmentcontrol',path:'/targets',body:{autosubscribe:true,search:{type:'MAIN'}}})); });
ws.on('message', (buf)=>console.log('MSG', String(buf)));
ws.on('error', (err)=>console.log('ERR', err.message));
ws.on('close', (code,reason)=>console.log('CLOSE', code, String(reason)));
setTimeout(()=>{ console.log('DONE'); ws.close(); process.exit(0); }, 3500);
