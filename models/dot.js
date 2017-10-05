const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const dotSchema = new Schema({

number: {
  type: Number,
},
text: {
  type: String,
},


})

const Dot = mongoose.model('dot', dotSchema);

module.exports = Dot;
