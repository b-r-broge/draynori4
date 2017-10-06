const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const operatorSchema = new Schema({

number: {
  type: Number,
},
text: {
  type: String,
},


})

const Operator = mongoose.model('operator', operatorSchema);

module.exports = Operator;
