var tasks = require('../controllers/tasks');

var assert = require('assert');

tasks.add('title');

assert.equal(tasks.getAll()[0].title, 'title');
assert.equal(tasks.getAll()[0].completed, false);
