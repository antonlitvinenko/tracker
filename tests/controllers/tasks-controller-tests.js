
var assert = require('assert');

(function shouldNotHaveTasksInTheBeginning() {
    var tasks = require('../../controllers/tasks-controller');
    assert.equal(tasks.getAll().length, 0);
})();

(function shouldHaveOneTaskAfterAddition() {
    var tasks = require('../../controllers/tasks-controller');
    tasks.add('title');

    assert.equal(tasks.getAll().length, 1)
    assert.equal(tasks.getAll()[0].title, 'title');
    assert.equal(tasks.getAll()[0].completed, false);
})();

(function getTaskshouldReturnExistingTask() {
    var tasks = require('../../controllers/tasks-controller');
    tasks.add('title');

    assert.equal(tasks.getAll().length, 1)
})();
