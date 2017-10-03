const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const gold200Schema = new Schema({

gold200: {
  type: Number,
},
user: {
  type: String,
  ref: 'User',
},
})

const Gold200 = mongoose.model('gold200', gold200Schema);

module.exports = Gold200;
