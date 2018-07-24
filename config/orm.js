var connection = require('./connection.js');

var orm = {

    selectAll: function () {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        })
    },
    insertOne: function () {
        var queryString = "INSERT INTO ? VAULES (?)";
        connection.query(queryString, [tableName, newValue], function (err, result) {
            if (err) throw err;
            console.log(result);
        })
    },
    updateOne: function () {
        var queryString = "UPDATE ? SET ?? = ?? WHERE ??";
        connection.query(queryString, [tableName, columnToUpdate, newValue, condition], function (err, result) {
            if (err) throw err;
            console.log(result)
        })
    }
}

module.export = orm;