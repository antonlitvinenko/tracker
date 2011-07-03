var http = require('http');
var datastore = [];

http.createServer(
    function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});


        if (req.url == '/tasks' && req.method == 'POST') {
            req.addListener("data",function(data){
                var p = data.toString().split('=');
                if (p[0] == "title") {
                    //console.log(p[1]);
                    datastore.push(p[1]);
                    console.log("ds size: %d; last: %s", datastore.length, datastore[datastore.length-1]);
                }

            });
            //console.log("%o",req.data);
            //var title = require('url').parse(req) // req.getParameter("title");
            //console.log(title);
            //console.log('Yeah baba! sha dobavim task');
        } else if (req.url == '/tasks' && req.method == 'GET') {
            res.writeHead(200, {'Content-type':'application/json'});
            res.end(JSON.stringify(datastore));


        }

        res.end('Hello World\n');
    }).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');
