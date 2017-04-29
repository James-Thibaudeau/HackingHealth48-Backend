var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MLAB);


var app = express();

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//static files
app.use('/static', express.static(path.join(__dirname, 'static')));

//routes
app.use('/api', require('./server/routes.js'));

//route is * to handle browser refresh, when I find a better way this will change
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//server start
app.listen(process.env.PORT, process.env.IP, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at: ' + process.env.IP + ':' + process.env.PORT);
});

