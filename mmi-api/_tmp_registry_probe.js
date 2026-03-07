const WebSocket = require('ws');
(async()=>{
 const ws=new WebSocket('ws://127.0.0.1:14713/');
 await new Promise((r,e)=>{ws.once('open',r); ws.once('error',e);});
 const cases=[
  {requestId:31, service:'/registry', path:'/maintenance'},
  {requestId:32, service:'/registry', path:'/perceivablecontext'},
  {requestId:33, service:'/registry', path:'/mcpdisplaymanager'},
  {requestId:34, service:'/registry', path:'/mcppopupmanager'},
  {requestId:35, service:'/registry', path:'/mcpinputmanager'}
 ];
 for(const c of cases){
  await new Promise((resolve)=>{
    const msgs=[];
    function onMessage(buf){ const m=JSON.parse(buf.toString()); if(String(m.requestId)===String(c.requestId)) msgs.push(m); }
    ws.on('message', onMessage);
    ws.send(JSON.stringify({type:'actionRequest', command:'retrieve', requestId:c.requestId, service:c.service, path:c.path, body:{autosubscribe:true}}));
    setTimeout(()=>{ ws.off('message', onMessage); console.log('CASE', c.requestId, JSON.stringify(msgs)); resolve(); }, 700);
  });
 }
 ws.close();
})();
