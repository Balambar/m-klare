module.exports = function(mongoose){

  // Create a new mongoose schema
  var ContactSchema = mongoose.Schema({
    name: {type: String, required: true},
    telefon: {type: Number, required: false},
    email: {type: String, required: true}
  });

  // Return the model
  return mongoose.model("Contact", ContactSchema);
};