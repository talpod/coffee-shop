var express = require('express');
var app = express();
app.use(express.static('public'));
app.use(express.static(__dirname + '/node_modules'));

app.listen(8000);


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
