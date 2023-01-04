var PORT = 8888;
var BROADCAST_ADDR = "192.168.1.255";
// var BROADCAST_ADDR = "255.255.255.255";
var dgram = require('dgram');
var server = dgram.createSocket("udp4");

server.bind(function() {
    server.setBroadcast(true);
    setInterval(broadcastNew, 3000);
});
server.on("message", function (msg, rinfo) {
    console.log("server got: " + msg + " from " +
      rinfo.address + ":" + rinfo.port);
});

function broadcastNew() {
    var message = Buffer.from("Broadcast message!");
    server.send(message, 0, message.length, PORT, BROADCAST_ADDR, function() {
        console.log("Sent '" + message + "'");
    });
}

