const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mysql');
const cors = require('cors');
const path = require('path');

let app = express();

// set what we are listening on
app.set('port', process.env.PORT || 3000);

app.use(cors());

// parsing
app.use(bodyParser.json());

// server client files
app.use(express.static(__dirname + '/../react-client/dist'));

// usage from client /api/search?q=[actual query]
app.get('/api/search', (req, res) => {
  // TODO: Database select query for users with that name/username
  // actual query will live in --->  req.query.q
  res.status(200).json([{display_name: 'Feli Caca', username: 'fecatania'}, {display_name: 'Chicken Chesnutt', username: 'henhen'}]);
});

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, '..', 'react-client', 'dist', 'index.html'));
});

// If we are being run directly, run the server
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
};

