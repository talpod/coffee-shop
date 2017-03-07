var fs = require('fs');

var data = { name: "Hadas", job: "queen" };

fs.writeFile('test.txt', JSON.stringify(data), function (err) {
  if (err) throw err;
  else console.log('Data saved to file!');
});

fs.readFile("test.txt", 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});
var app = require('express')();

var listener = app.listen(3000, function(){
    console.log('Listening on port ' + listener.address().port); 
});
