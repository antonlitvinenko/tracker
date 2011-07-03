/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer();

var datastore = [];

// Configuration

app.configure(function() {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function() {
    app.use(express.errorHandler());
});

// Routes

app.get('/', function(req, res) {
    res.render('index', {
        title: 'Express'
    });
});

app.use(express.bodyParser());

app.post('/tasks', function(req, res) {
    datastore.push(req.body.title);
    okWithJSON(res, datastore.length-1);
});

app.get('/tasks', function(req, res) {
    okWithJSON(res, datastore);
});

app.put('/tasks/:id', function(req, res) {
    okWithJSON(res, {});
});

function okWithJSON(res, data) {
    res.writeHead(200, {'Content-type':'application/json'});
    res.end(JSON.stringify(data));
}

app.listen(1337);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
