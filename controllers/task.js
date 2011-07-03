/*
GET     /tasks              ->  index
GET     /tasks/new          ->  new
POST    /tasks              ->  create
GET     /tasks/:task       ->  show
GET     /tasks/:task/edit  ->  edit
PUT     /tasks/:task       ->  update
DELETE  /tasks/:task       ->  destroy
*/

//var Task = require('../models/task');
var tasks = [];

// Read all
exports.index = function(q, r){
  console.log('tasks');
  r.send(tasks);
};

// Read 1
exports.show = function(q, r){
  console.log('show task %s', q.params.task);
  r.send(tasks[q.params.task]);
};

// Create
exports.create = function(q, r){
  console.log('create task %s', q.body.title);
  tasks.push({id: tasks.length, title: q.body.title, completed: false});
  r.send({task:tasks.length-1});
};

// Update
exports.update = function(q, r){
  console.log('update task', q.params.task);
  tasks[q.params.task].completed = true;
  r.send({});
};

// Destroy
exports.destroy = function(q, r){
  console.log('destroy task %s', q.params.task);
  //tasks.splice(q.params.task,1);
  delete tasks[q.params.task]; // keeping empty array element for debugging
  r.send({});
};
