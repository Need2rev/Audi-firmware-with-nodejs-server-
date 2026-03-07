const WebSocket = require('ws');
const ws = new WebSocket('ws://127.0.0.1:14713/registry');
ws.on('open', ()=>ws.send(JSON.stringify({type:'actionRequest', requestId:1, command:'retrieve', path:'/displayables'})));
ws.on('message', (buf)=>console.log(buf.toString()));
setTimeout(()=>process.exit(0),3000);