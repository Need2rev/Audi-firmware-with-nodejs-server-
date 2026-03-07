const WebSocket = require('ws');
const tests = ['/displayables','/displays','/targets','/persistenceentries','/activities','/MCP_Popups'];
(async () => {
 for (const path of tests) {
   await new Promise((resolve) => {
    const ws = new WebSocket('ws://127.0.0.1:14713' + path);
    let done = false;
    ws.on('open', () => ws.send(JSON.stringify({ type:'actionRequest', requestId:1, command:'retrieve', path:'/'})));
    ws.on('message', (buf) => {
      if (done) return;
      done = true;
      console.log('PATH=' + path + ' MSG=' + buf.toString());
      try { ws.close(); } catch {}
      resolve();
    });
    ws.on('error', (err) => { if (!done) { done = true; console.log('PATH=' + path + ' ERROR=' + err.message); resolve(); } });
    setTimeout(() => { if (!done) { done = true; console.log('PATH=' + path + ' TIMEOUT'); try { ws.close(); } catch {} resolve(); } }, 1500);
   });
 }
 process.exit(0);
})();