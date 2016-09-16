var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var userCtrl = require('./controllers/userCtrl.js');
var profileCtrl = require('./controllers/profileCtrl.js');

var config = require('./config.js');

var app = express();

app.use(bodyParser.json());
app.use(session({ secret: config.sessionSecret}));


var corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));

app.post('/api/login', userCtrl.login);

app.get('/api/profiles', profileCtrl.getFriends);


app.listen(config.port, function() {
  console.log("listening to port " + config.port);

});
