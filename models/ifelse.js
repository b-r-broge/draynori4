const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const ifelseSchema = new Schema({

number: {
  type: Number,
},
text: {
  type: String,
},


})

const Ifelse = mongoose.model('ifelse', ifelseSchema);

module.exports = Ifelse;
