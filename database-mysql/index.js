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
};

let writePost = function(squeak, cb) {
  let createdAt = (new Date()).toISOString().substring(0, 19).replace('T', ' ');
  connection.query(`INSERT INTO squeaks (user_id, text, created_at) VALUES (${squeak.userId}, '${squeak.text}', '${createdAt}')`, (err, results) => {
    err ? cb(err, null) : cb(null, results);
  });
};

let userInfo = function(id, cb) {
	connection.query(`SELECT * FROM users WHERE id = ${id}`, (err, results) => {
		err ? cb(err) : cb(null, results);
	});
};

// should eventually grab all squeaks of current user and those being 'followed'
// until follow functionality is built all squeaks will be returned
let allSqueaks = function(id, cb) {
  connection.query(`SELECT * FROM squeaks INNER JOIN users WHERE squeaks.user_id = users.id`, (err, results) => {
    err ? cb(err) : cb(null, results);
  });
};

module.exports.userInfo = userInfo;
module.exports.searchUsers = searchUsers;
module.exports.writePost = writePost;
module.exports.allSqueaks = allSqueaks;
