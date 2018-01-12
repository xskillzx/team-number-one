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

let userInfo = function(id, cb) {
	connection.query(`SELECT * FROM users WHERE id = ${id}`, (err, results) => {
		err ? cb(err) : cb(null, results);
	});
};

let followUser = function(followerId, followedId, cb) {
  connection.query(`INSERT INTO follows (follower_id, followed_id) VALUES (${followerId}, ${followedId})`, (err, results) => {
    err ? cb(err, null) : cb(null, results);
  });
};

let unfollowUser = function(followerId, followedId, cb) {
  connection.query(`DELETE FROM follows WHERE follower_id = ${followerId} AND followed_id = ${followedId}`, (err, results) => {
    err ? cb(err, null) : cb(null, results);
  });
};

module.exports.userInfo = userInfo;
module.exports.searchUsers = searchUsers;
module.exports.followUser = followUser;
module.exports.unfollowUser = unfollowUser;
