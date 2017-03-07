var express = require('express');
var app = express();


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/test.html')
});

app.listen(8000);
