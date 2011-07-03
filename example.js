var http = require('http');

http.createServer(
    function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});


        if (req.url == '/add' && req.method == 'POST') {
            req.addListener("data",function(chunk){
                console.log(chunk);
            });
            console.log("%o",req.data);
            //var title = require('url').parse(req) // req.getParameter("title");
            //console.log(title);
            console.log('Yeah baba! sha dobavim task');
        }

        res.end('Hello World\n');
    }).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');
