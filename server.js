var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
var http = require('http');

var port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
// app.get('/', function (req, res) {
//   res.render("main");
// });

app.listen(port);
console.log("App listening on port " + port);
