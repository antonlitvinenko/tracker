var http = require('http');
var datastore = [];

http.createServer(
    function (req, res) {
        if (req.url == '/tasks' && req.method == 'POST') {
            req.addListener("data", function(data) {
                var p = data.toString().split('=');
                if (p[0] == "title") {
                    datastore.push(p[1]);
                }
            });

            req.addListener("end", function(data) {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end();
            });
        } else if (req.url == '/tasks' && req.method == 'GET') {
            res.writeHead(200, {'Content-type':'application/json'});
            res.end(JSON.stringify(datastore));
        } else if (req.url == '/tasks' && req.method == 'PUT') {
            res.writeHead(200, {'Content-type':'application/json'});
            res.end(JSON.stringify(datastore));
        }
    }).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');
