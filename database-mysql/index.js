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

let searchUsers = function(searchQuery, loggedUserId, cb) {
  connection.query(`SELECT users.*, IF(follows.follower_id = ${loggedUserId}, 1, 0) AS is_followed FROM users LEFT JOIN follows ON followed_id = users.id WHERE users.username LIKE '%${searchQuery}%' OR users.display_name LIKE '%${searchQuery}%'`, (err, results) => {
    err ? cb(err) : cb(null, results);
  });
};

let writePost = function(squeak, cb) {
  connection.query(`INSERT INTO squeaks (user_id, text) VALUES (${squeak.userId}, '${squeak.text}')`, (err, results) => {
    err ? cb(err) : cb(null, results);
  });
};

let userInfo = function(id, cb) {
  connection.query(`SELECT * FROM users WHERE id = ${id}`, (err, results) => {
    err ? cb(err) : cb(null, results);
  });
};

let userInfoByUsername = function(username, cb) {
	connection.query(`SELECT * FROM users WHERE username = '${username}'`, (err, results) => {
		err ? cb(err) : cb(null, results);
	});
};

let userSqueaks = function(id, cb) {
  connection.query(`SELECT * FROM squeaks WHERE user_id = ${id}`, (err, results) => {
    err ? cb(err) : cb(null, results);
  });
}

// TODO: Update id to not be hardcoded when login functionality is ready
let userCounts = function(id, cb) {
  let finalResults = {};
  connection.query(`SELECT COUNT (text) FROM squeaks WHERE user_id = ${id}`, (err, results) => {
    if (err) cb(err);
    finalResults.squeakCount = results[0]['COUNT (text)'];
    userFollowers(1, (err, results) => {
      if (err) return cb(err);
      finalResults.followers = results.length;
      userFollowing(1, (err, results) => {
        if (err) return cb(err);
        finalResults.following = results.length;
        cb(null, finalResults);
      })
    })
  });
}

let userFollowers = function(id, cb) {
  connection.query(`SELECT users.* FROM users, follows WHERE users.id = follows.follower_id AND follows.followed_id = ${id}`, (err, results) => {
    err ? cb(err) : cb(null, results);
  });
}

let userFollowing = function(id, cb) {
  connection.query(`SELECT users.* FROM users, follows WHERE users.id = follows.followed_id AND follows.follower_id = ${id}`, (err, results) => {
    err ? cb(err) : cb(null, results);
  });
}

// TODO: refactor to Promises to avoid callback hell
let fullUserInfo = function(username, cb) {
  let finalResults = {};
  userInfoByUsername(username, (err, results) => {
    if (err) return cb(err);
    if (results.length === 0) return cb(err);
    finalResults = results[0];
    userSqueaks(finalResults.id, (err, results) => {
      if (err) return cb(err);
      finalResults.squeaks = results;
      userFollowers(finalResults.id, (err, results) => {
        if (err) return cb(err);
        finalResults.followers = results;
        userFollowing(finalResults.id, (err, results) => {
          if (err) return cb(err);
          finalResults.following = results;
          cb(null, finalResults);
        })
      })
    });
  });
};

// should eventually grab all squeaks of current user and those being 'followed'
// until follow functionality is built all squeaks will be returned
let allSqueaks = function(id, cb) {
  connection.query(`SELECT squeaks.id, squeaks.text, squeaks.created_at, users.username, users.display_name, users.profile_img_url 
                    FROM squeaks INNER JOIN users 
                    WHERE squeaks.user_id = users.id
                    ORDER BY squeaks.created_at DESC`, (err, results) => {
      err ? cb(err) : cb(null, results);
    });
};

let createUser = function(username, pw, cb) {
  
};

let logIn = function(username, pw, cb) {
  
};

let followUser = function(followerId, followedId, cb) {
  connection.query(`INSERT INTO follows (follower_id, followed_id) VALUES (${followerId}, ${followedId})`, (err, results) => {
    err ? cb(err) : cb(null, results);
  });
};

let unfollowUser = function(followerId, followedId, cb) {
  connection.query(`DELETE FROM follows WHERE follower_id = ${followerId} AND followed_id = ${followedId}`, (err, results) => {
    err ? cb(err) : cb(null, results);
  });
};

let topFollowed = function(cb) {
  connection.query(`SELECT followed_id, users.*, COUNT(followed_id) AS followers_count
                    FROM follows, users
                    WHERE users.id = follows.followed_id
                    GROUP BY followed_id
                    ORDER BY followers_count DESC
                    LIMIT 5`, 
                    (err, results) => err ? cb(err) : cb(null, results));
};

module.exports.searchUsers = searchUsers;
module.exports.writePost = writePost;
module.exports.userInfo = userInfo;
module.exports.allSqueaks = allSqueaks;
module.exports.followUser = followUser;
module.exports.unfollowUser = unfollowUser;
module.exports.topFollowed = topFollowed;
module.exports.fullUserInfo = fullUserInfo;
module.exports.userCounts = userCounts;
module.exports.createUser = createUser;
module.exports.logIn = logIn;
