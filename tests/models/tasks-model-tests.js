
var assert = require('assert');
var taskModel = require('../../models/tasks').tasks;

(function shouldNotHaveTasksInTheBeginning() {
    var tasks = taskModel();
    assert.equal(tasks.getAll().length, 0);
})();

(function shouldHaveOneTaskAfterAddition() {
    var tasks = taskModel();
    tasks.create('title');

    assert.equal(tasks.getAll().length, 1)
    assert.equal(tasks.getAll()[0].title, 'title');
    assert.equal(tasks.getAll()[0].completed, false);
})();

(function getTaskshouldReturnExistingTask() {
    var tasks = taskModel();
    tasks.create('title');

    assert.equal(tasks.getAll().length, 1)
})();
