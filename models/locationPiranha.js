const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const piranhaSchema = new Schema({

piranha: {
  type: String,
},
user: {
  type: String,
  ref: 'User',
},
})

const Piranha = mongoose.model('piranha', piranhaSchema);

module.exports = Piranha;
