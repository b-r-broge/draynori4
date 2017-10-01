const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const gold24Schema = new Schema({

gold24: {
  type: Number,
},
user: {
  type: String,
  ref: 'User',
},
})

const Gold24 = mongoose.model('gold24', gold24Schema);

module.exports = Gold24;
