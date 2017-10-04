const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const jsonSchema = new Schema({

number: {
  type: Number,
},
text: {
  type: String,
},


})

const Json = mongoose.model('json', jsonSchema);

module.exports = Json;
