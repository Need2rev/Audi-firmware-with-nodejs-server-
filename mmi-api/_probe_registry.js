const WebSocket = require('ws');
const ws = new WebSocket('ws://127.0.0.1:14713/');
ws.on('open', () => {
  const reqs = [
    { type:'actionRequest', service:'/registry', requestId:1, command:'retrieve', path:'/MCP_Displaymanager' },
    { type:'actionRequest', service:'/registry', requestId:2, command:'retrieve', path:'/MCP_Popups' },
    { type:'actionRequest', service:'/registry', requestId:3, command:'retrieve', path:'/system' },
    { type:'actionRequest', service:'/registry', requestId:4, command:'retrieve', path:'/' },
  ];
  for (const r of reqs) ws.send(JSON.stringify(r));
});
ws.on('message', (buf) => {
  const msg = JSON.parse(buf.toString());
  console.log(JSON.stringify(msg));
});
setTimeout(() => process.exit(0), 4000);