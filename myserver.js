http = require("http"); //The require
tm = require('./myevent.js');


var MyServer = http.createServer(function(request, response) {
    response.setHeader("Set-Cookie", ["type=ninja", "language=javascript"]);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hello World!");
    response.write(request.httpVersion);
    response.write(request.socket.localAddress+":"+request.socket.localPort);
    response.end();
});

MyServer.listen(3000);

console.log("Server running at http://localhost:3000/"); //Printing to the console only
