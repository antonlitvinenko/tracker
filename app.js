/**
 * Module dependencies.
 */

var express = require('express'),
  Resource = require('express-resource');

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

app.resource(require('./controllers/root'));

app.resource('tasks',require('./controllers/task'));

/*
// this url? really?
app.put('/tasks/completed/:id', function(req, res) {  
  datastore[req.params.id].completed = true;
  res.send({});
});
*/

app.listen(1337);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
