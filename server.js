'use strict';

const express = require('express');
const SocketServer = require('ws').Server;
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log('[S]  Listening on ' + PORT ));

const wss = new SocketServer({ server });

wss.on('connection', (sock) => {
  //var annonimusId = '[C]-' + (wss.clients.lenght + 1);
  console.log('[S] ---> Client '); // + annonimusId +' connected');
  sock.on('message', (sock) => {
    console.log(sock);
    var sock = Object.create(JSON.parse(sock));
    if(sock.data.towho == "server"){
    }else{
      console.log( sock.who + ' ---> ' + sock.towho + ' |:| ' + sock.data );
    }
  });
  
  sock.on('close', (sock) => {
    sock = JSON.parse(sock);
    console.log('[S] ' + annonimusId+"@"+sock.who + ' disconnected');
  });
});

setInterval(() => {
  wss.clients.forEach((client) => {
    client.send(wss.clients.toString());
  });
}, 1000);
