var mysql = require('mysql2')

var pool = mysql.createPool({
    host: "18.188.58.38",
    user: "zizhen",
    password: "Hazelnut@4926",
    insecureAuth : true
});

exports.testConnection = function() {
    var r = "test";
    pool.query("select * from geoguessr.countries;", function(err, results, fields) {
        if (err) throw err;
        console.log(results);
        r = results;
    });
    return r;
}