var http = require('http');
var urllib = require('url');
var datastore = [];


function okWithJSON(res, data) {
    res.writeHead(200, {'Content-type':'application/json'});
    res.end(JSON.stringify(data));
}
http.createServer(
    function (req, res) {
        var url = urllib.parse(req.url);
        if (req.url == '/tasks' && req.method == 'POST') {
            req.addListener("data", function(data) {
                var p = data.toString().split('=');
                if (p[0] == "title") {
                    datastore.push(p[1]);
                }
            });

            req.addListener("end", function(data) {
                okWithJSON(res, {})
            });
        } else if (req.url == '/tasks' && req.method == 'GET') {
            okWithJSON(res, datastore);

        } else if (url.pathname == '/tasks' && req.method == 'PUT') {
            url.query
            okWithJSON(res, datastore);
        }   //sdf
    }).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');
