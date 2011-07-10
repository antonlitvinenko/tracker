var mongoose = require('mongoose');

var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var Task = new Schema({
    id: ObjectId,
    title: String
});

mongoose.model('Task', Task);


exports.tasks = function() {
    var datastore = [];

    return {
        create: function(title, callback) {
            var Task = mongoose.model('Task');
            var task = new Task();
            task.title = title;
            task.save(callback);
        },

        getAll: function() {
            return datastore;
        }
    }
};

