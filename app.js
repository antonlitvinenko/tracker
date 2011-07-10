/**
 * Module dependencies.
 */

var express = require('express');
var resource = require('express-resource');

var tasks = require('./models/tasks').tasks();

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/tracker');

var app = module.exports = express.createServer();

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


app.post('/tasks', function(req, res) {
    tasks.create(req.body.title, function(taskId){
        okWithJSON(res, taskId);
    });
});

app.get('/tasks', function(req, res) {
    okWithJSON(res, tasks.getAll());
});

app.get('/tasks/:id', function(req, res) {
    okWithJSON(res, tasks.getAll()[req.params.id]);
});

app.put('/tasks/:id/completed', function(req, res) {
    tasks.getAll()[req.params.id].completed = true;
    okWithJSON(res, {});
});

function okWithJSON(res, data) {
    res.writeHead(200, {'Content-type':'application/json'});
    res.end(JSON.stringify(data));
}

app.listen(1337);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
