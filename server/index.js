const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mysql');
const cors = require('cors');
const path = require('path');


let app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(cors());

// usage from client /api/search?q=[actual query]
app.get('/api/search', (req, res) => {
  // TODO: Database select query for users with that name/username
  // actual query will live in --->  req.query.q
  res.status(200).json([{display_name: 'Feli Caca', username: 'fecatania'}, {display_name: 'Chicken Chesnutt', username: 'henhen'}]);
});

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, '..', 'react-client', 'dist', 'index.html'));
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('listening on port ' + port);
});
