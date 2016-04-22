module.exports = function(mongoose){

  // Create a new mongoose schema
  var OwnerSchema = mongoose.Schema({
    name: {type: String, required: true},
    telefon: {type: Number, required: true},
    email: {type: String, required: true},
    // a relation
    // doneBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  });

  // Return the model
  return mongoose.model("Owner", OwnerSchema);
};