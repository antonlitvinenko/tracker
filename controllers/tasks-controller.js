var tasks = exports;

var datastore = [];

tasks.add = function (title) {
    datastore.push({id: datastore.length, title: title, completed: false});
    return datastore.length - 1;
}

tasks.getAll = function() {
    return datastore;
}
