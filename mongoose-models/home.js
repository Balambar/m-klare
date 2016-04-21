module.exports = function(mongoose){

  // Create a new mongoose schema
  var HomeSchema = mongoose.Schema({
    address: {type: String, required: true},
    city: {type: String, required: true},
    type: {type: String, required: true},
    size: {type: Number, required: true},
    price: {type: Number, required: true},
    seller: {type: String, required: true}, // vi måste anpassa det till den andra colleccion.
    // a relation
    // doneBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  });

  // Return the model
  return mongoose.model("Home", HomeSchema);
};