module.exports = function(mongoose){

  // Create a new mongoose schema
  var SellerSchema = mongoose.Schema({
    name: {type: String, required: true},
    telefon: {type: Number, required: true},
    email: {type: String, required: true},
    img: {type: String, required: false}
  });

  // Return the model
  return mongoose.model("Seller", SellerSchema);
};