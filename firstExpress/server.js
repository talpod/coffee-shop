var express = require('express');
var app = express();
app.use(express.static('public'));
app.use(express.static(__dirname + '/node_modules'));

var bodyParser = require('body-parser');   //add this line

app.use(bodyParser.urlencoded({ extended: false }));   //add this line
app.use(bodyParser.json());  //add this line
app.listen(8000);

app.post('/users', function(req, res) {
  console.log(req.body); //the data on a new book
  res.send("From server route");
});

// app.get('/books', function(request, response) {
//   var genretosearch = request.query.genre;
//   var authortosearch = request.query.author;
//   //let's pretend we have a function that queries our database and returns what it finds
//   console.log(genretosearch, authortosearch, function(err, results) {
//     response.send(results);
//   });
// });
// app.get('/:whattheuserwants', function(req, res){
//   var whattheuserwants == req.params.whattheuserwants;
//
//   if(whattheuserwants == "about"){
//     res.send({data: "We are cool"})
//   } else if(whattheuserwants == "help"){
//     res.send({message: "We are here to help you because we are cool"})
//   } else{
//     res.send({error: "Sorry, not understood- not cool!"});
//   }
// });
