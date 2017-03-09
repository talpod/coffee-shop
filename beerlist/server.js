var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.listen(8000, function() {
  console.log("Fullstack project. Listening on 8000.")

});

app.get('/beers', function (req, res, next) {
  res.json({beers: [
    { name: '512 IPA', style: 'IPA', image_url: 'http://bit.ly/1XtmB4d', abv: 5 },
    { name: '512 Pecan Porter', style: 'Porter', image_url: 'http://bit.ly/1Vk5xj4', abv: 4 }
  ]});
});
