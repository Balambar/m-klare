module.exports = function(mongoose){

  // Create a new mongoose schema
  var HomeSchema = mongoose.Schema({
    address: {type: String, required: true},
    area: {type: String, required: true},
    type: {type: String, required: true},
    size: {type: Number, required: true},
    price: {type: Number, required: true},
    shown: {type: Boolean, required: true},
    img: [
      {type: String, required: false},
      {type: String, required: false},
      {type: String, required: false},
      {type: String, required: false},
      ],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Owner',
      required: true
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seller',
      required: true
    }
  });

  // Return the model
  return mongoose.model("Home", HomeSchema);
};