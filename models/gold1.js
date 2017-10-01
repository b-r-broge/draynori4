const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const gold1Schema = new Schema({

gold1: {
  type: Number,
},
user: {
  type: String,
  ref: 'User',
},
})

const Gold1 = mongoose.model('gold1', gold1Schema);

module.exports = Gold1;
