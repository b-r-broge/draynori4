const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const gold156Schema = new Schema({

gold156: {
  type: Number,
},
user: {
  type: String,
  ref: 'User',
},
})

const Gold156 = mongoose.model('gold156', gold156Schema);

module.exports = Gold156;
