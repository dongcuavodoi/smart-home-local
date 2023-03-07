'use strict';
const { networkInterfaces } = require('os');
const nets = networkInterfaces();
const results = Object.create(null); 

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
        if (net.family === familyV4Value && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
}
console.log(results);
var ip = require("ip");
var a = ip.address();
console.log("private ip address", a);
// const {execSync} = require("child_process");

// const cmd = `curl -s http://checkip.amazonaws.com || printf "0.0.0.0"`;
// const pubIp = execSync(cmd).toString().trim();

// console.log(`My public IP address is: ${pubIp}`);
// var app = require("express")();

// app.get("/", function (req, res) {
//   console.log(req.socket.remoteAddress);
//   console.log(req.ip);
//   res.send("your IP is: " + req.ip);
// });
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log("server running on port: " + PORT);
// });