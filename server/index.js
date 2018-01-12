const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mysql');
const cors = require('cors');
const path = require('path');

let app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/api/userinfo/:id', (req, res) => {
  db.userInfo(Number(req.params.id), (err, results) => {
		err ? res.send(err) : res.send(results);
	});
});

app.get('/api/search', (req, res) => {
  // TODO: receive somehow loggedUserId to be able to tell if the users are being followed or not by this user
  let loggedUserId = 1; // hardcoded
  db.searchUsers(req.query.q, loggedUserId, (err, results) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(results);
  });
});

app.post('/api/writepost', (req, res) => {
	console.log(req.body)
  db.writePost(req.body, (err, results) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send();
  });
});

app.put('/api/follow', (req, res) => {
  db.followUser(req.body.follower_id, req.body.followed_id, (err, results) => {
    res.status(201).send('Follow successful');
  });
});

app.put('/api/unfollow', (req, res) => {
  db.unfollowUser(req.body.follower_id, req.body.followed_id, (err, results) => {
    res.status(201).send('Unfollow successful');
  });
});

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, '..', 'react-client', 'dist', 'index.html'));
});

// If we are being run directly, run the server
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
};
