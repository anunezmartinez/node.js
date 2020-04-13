var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function(req, res){

    var query = url.parse(req.url, true);
    var filename = "." + query.pathname;
    fs.readFile(filename, function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });

}).listen(8080);