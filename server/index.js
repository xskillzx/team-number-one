var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mysql');


var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/', function (req, res) {
  res.send('Hello, World!');
});


var port = process.env.PORT || 3000;
app.listen(port);
