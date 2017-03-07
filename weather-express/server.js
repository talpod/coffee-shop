var express = require('express');
var app = express();
var request = require('request');

app.get('/', function(req, res) {
    res.send('Homepage');
});
app.get('/weather', function(req, res) {
    request('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=e5245cea3f8c281eecb19341258b68e1', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);

        }
    })
});

app.listen(8000);
