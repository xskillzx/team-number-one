const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mysql');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcrypt');
const saltRounds = 10;

let app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/api/userinfo/:id/squeaks/all', (req, res) => {
  db.allSqueaks(Number(req.params.id), (err, results) => {
    err ? res.send(err) : res.send(results);
  });
});

app.get('/api/userinfo/:id/counts', (req, res) => {
  db.userCounts(Number(req.params.id), (err, results) => {
    err ? res.send(err) : res.send(results);
  });
});

app.get('/api/userinfo/:id', (req, res) => {
  db.userInfo(Number(req.params.id), (err, results) => {
		err ? res.send(err) : res.send(results);
	});
});

app.get('/api/fulluserinfo/:username', (req, res) => {
  db.fullUserInfo(req.params.username, (err, results) => {
    err ? res.send(err) : res.send(results);
  })
});

app.get('/api/:id/search', (req, res) => {
  let loggedUserId = req.params.id;
  db.searchUsers(req.query.q, loggedUserId, (err, results) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(results);
  });
});

app.get('/api/topfollowed', (req, res) => {
  db.topFollowed((err, results) => err ? res.send(err) : res.send(results));
});

app.post('/api/writepost', (req, res) => {
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

app.post('/api/sign-up', (req, res) => {
  db.checkUserExists(req.body.username, (err, results) => {
    if (results[0]['count(*)'] === 0) {
      bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        db.createUser(req.body.username, hash, (err, results) => {
          res.status(201).send('Created');
        });
      });
    } else {
      res.status(400).send('Username exists');
    }
  });
});

app.post('/api/sign-in', (req, res) => {
  db.logIn(req.body.username, (err, results) => {
    bcrypt.compare(req.body.password, results[0].hw, function(err, resCrypt) {
      if (resCrypt === true) {
        db.fullUserInfo(req.body.username, (err, resUserInfo) => {
          res.status(200).send(resUserInfo);
        });
      }
      if (resCrypt === false) {
        res.status(401).end();
      }
    });
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
