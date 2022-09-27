var udp = require('dgram');
// -------------------- udp client ----------------

var buffer = require('buffer');

// creating a client socket
var client = udp.createSocket('udp4');

//buffer msg
var data = Buffer.from('siddheshrane');

client.on('message',function(msg,info){
  console.log('Data received from server : ' + msg.toString());
  console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);
});

//sending msg
client.send(data,8111,'127.0.0.1',function(error){
  if(error){
    client.close();
  }else{
    console.log('Data sent !!!');
  }
});

var data1 = Buffer.from('hello');
var data2 = Buffer.from('world');

//sending multiple msg
client.send([data1,data2],8111,'127.0.0.1',function(error){
  if(error){
    client.close();
  }else{
    console.log('Data sent !!!');
  }
});

var data3 = Buffer.from('Luan');

client.send(data3,8111,'127.0.0.1',function(error){
  if(error){
    client.close();
  }else{
    console.log('Data sent !!!');
  }
});

var data4 = Buffer.from('ABCD');

client.send(data4,8111,'127.0.0.1',function(error){
  if(error){
    client.close();
  }else{
    console.log('Data sent !!!');
  }
});