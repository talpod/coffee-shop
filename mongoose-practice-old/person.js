var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var addressSchema = new Schema({
  City: String,
  Street: String,
  Apartment: Number
});

console.log(Schema)
