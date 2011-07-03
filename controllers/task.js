//var Task = require('../models/task');
var tasks = [];

// Read all
exports.index = function(q, r){
  console.log('tasks');
  r.send(tasks);
};

// ???
/*exports.new = function(q, r){
  console.log('new task');
  r.send('new task');
};*/

// create
exports.create = function(q, r){
  console.log('create task %s', q.body.title);
  tasks.push({id: tasks.length, title: q.body.title, completed: false});
  r.send({task:tasks.length-1});
};

// Read 1
exports.show = function(q, r){
  console.log('show task %s', q.params.task);
  r.send(tasks[q.params.task]);
};

// ???
/*exports.edit = function(q, r){
  console.log('edit task %s', q.params.task);
  r.send('edit task ' + q.params.task);
};
*/

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
