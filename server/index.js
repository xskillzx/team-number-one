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
  // TODO: nice to have also search for squeaks or tags or whatever other entity
  db.searchUsers(req.query.q, (err, results) => {
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

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, '..', 'react-client', 'dist', 'index.html'));
});

// If we are being run directly, run the server
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
};
