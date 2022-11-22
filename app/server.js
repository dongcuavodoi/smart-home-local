var udp = require('dgram');

var server = udp.createSocket('udp4');

server.on('error',function(error){
  console.log('Error: ' + error);
  server.close();
});

server.on('message',function(msg,info){
  console.log('Data received from client : ' + msg.toString());
  console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);

server.send(msg,info.port,info.address,function(error){
  if(error){
    client.close();
  }else{
    console.log('Data sent !!!');
  }

});

});
server.on('listening',function(){
  var port = 8888;
  console.log('Server is listening at port: ' + port);
});

server.on('close',function(){
  console.log('Socket is closed !');
});

server.bind(8888);

setTimeout(function(){
server.close();
},68000);