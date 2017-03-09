var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beers');
var Beer = require("./BeerModel");

// var Beer = require('./models/')
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/', function(req, res) {
    res.send('Testing Server')
})

app.get('/beers', function(req, res, next) {
    Beer.find(function(error, beers) {
        if (error) {
            console.error(error)
            return next(error);
        } else {
            res.send(beers);
        }
    });
});

app.listen('8000', function() {
    console.log("yo yo yo, on 8000 bro");
});
app.post('/beers', function(req, res, next) {
    res.send('POST!');
});
