var beerSchema = new Schema({
  name: { type: String },
  style: { type: String },
  image_url: { type: String },
  rating: {type: Number},
  abv: { type: Number }
});

var Beer = mongoose.model("Beer", beerSchema);
module.exports = Beer;
