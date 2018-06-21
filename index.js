var http = require("http");
var router = require("./api");
var port = 8090;
var host = "127.0.0.1";
http.router = router;
http.createServer(function(request, response){
    response.write("Hello World!");
    response.end();
}).listen(port, host);



