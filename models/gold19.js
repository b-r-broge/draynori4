const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const gold19Schema = new Schema({

gold19: {
  type: Number,
},
user: {
  type: String,
  ref: 'User',
},
})

const Gold19 = mongoose.model('gold19', gold19Schema);

module.exports = Gold19;
