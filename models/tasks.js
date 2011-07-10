exports.tasks = function() {
    var datastore = [];

    return {
        add: function(title) {
            datastore.push({id: datastore.length, title: title, completed: false});
            return datastore.length - 1;
        },

        getAll: function() {
            return datastore;
        }
    }
}