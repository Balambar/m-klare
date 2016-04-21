module.exports = function(mongoose){

  // Create a new mongoose schema
  var SellerSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true}
    // a relation
    // doneBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  });

  // Return the model
  return mongoose.model("Seller", SellerSchema);
};