const mysql = require('mysql');
const mysqlConfig = require('./config.js');

var connection;
if (process.env.JAWSDB_URL) {
  //Heroku deployment
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
  connection = mysql.createConnection(mysqlConfig);
}

let searchUsers = function(searchQuery, cb) {
  connection.query(`SELECT * FROM users WHERE username LIKE '%${searchQuery}%' OR display_name LIKE '%${searchQuery}%'`, (err, results) => {
    err ? cb(err, null) : cb(null, results);
  });
}

module.exports.searchUsers = searchUsers;