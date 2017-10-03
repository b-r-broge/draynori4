const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const gold74Schema = new Schema({

gold74: {
  type: Number,
},
user: {
  type: String,
  ref: 'User',
},
})

const Gold74 = mongoose.model('gold74', gold74Schema);

module.exports = Gold74;
