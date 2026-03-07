const WebSocket = require("ws");
const tests = [
  {requestId:"t1", command:"retrieve", service:"/entertainmentcontrol", path:"/targets", body:{autosubscribe:true, search:{type:"MAIN"}}},
  {requestId:"t2", command:"retrieve", service:"/usermanagement", path:"/settings", body:{autosubscribe:true}},
  {requestId:"t3", command:"retrieve", service:"/mcpdisplaymanager", path:"/displays", body:{autosubscribe:true}},
  {requestId:"t4", command:"retrieve", service:"/MCP_Displaymanager", path:"/displays", body:{autosubscribe:true}},
  {requestId:"t5", command:"retrieve", service:"/mcppopupmanager", path:"/Driver_Display", body:{autosubscribe:true}},
  {requestId:"t6", command:"retrieve", service:"/MCP_Popups", path:"/Driver_Display", body:{autosubscribe:true}}
];
const ws = new WebSocket("ws://127.0.0.1:14713/");
ws.on('open', ()=>tests.forEach((msg)=>ws.send(JSON.stringify(msg))));
ws.on('message', (buf)=>{ console.log(String(buf)); });
setTimeout(()=>{ ws.close(); process.exit(0); }, 2200);
