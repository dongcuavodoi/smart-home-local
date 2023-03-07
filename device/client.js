var PORT = 8888;
var dgram = require('dgram');
var client = dgram.createSocket('udp4');
var data = Buffer.from('Hello');
client.on('listening', function () {
    var address = client.address();
    console.log('UDP Client listening on ' + address.address + ":" + address.port);
    client.setBroadcast(true);
});

client.on('message', function (message, rinfo) {
    console.log('Message from: ' + rinfo.address + ':' + rinfo.port +' - ' + message);
    broadcastResponse(rinfo);
});
function broadcastResponse(rinfo){
  client.send(data,rinfo.port,rinfo.address,function(error){
    if(error){
      client.close();
    }else{
      console.log('Data sent !!!');
    }
  });
}

client.bind(PORT);