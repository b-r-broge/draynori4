const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const mineSchema = new Schema({

mine: {
  type: String,
},
user: {
  type: String,
  ref: 'User',
},
})

const Mine = mongoose.model('mine', mineSchema);

module.exports = Mine;
