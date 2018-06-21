var express = require("express");
var port = 8090;
var host = "127.0.0.1";
var app = express();

app.get("/api/:name", function(req, res){
    res.send("Hello " + req.params.name);
});

app.listen(port, host);

