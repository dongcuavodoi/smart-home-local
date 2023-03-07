var udp = require('dgram');
var buffer = require('buffer');

var client = udp.createSocket('udp4');

var data = Buffer.from('siddheshrane');

client.on('message',function(msg,info){
  console.log('Data received from server : ' + msg.toString());
  console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);
});

client.send(data,8888,'192.168.2.18',function(error){
  if(error){
    client.close();
  }else{
    console.log('Data sent !!!');
  }
});

var data1 = Buffer.from('hello');
var data2 = Buffer.from('world');

client.send([data1,data2],8888,'192.168.2.18',function(error){
  if(error){
    client.close();
  }else{
    console.log('Data sent !!!');
  }
});