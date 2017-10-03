const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const gold73Schema = new Schema({

gold73: {
  type: Number,
},
user: {
  type: String,
  ref: 'User',
},
})

const Gold73 = mongoose.model('gold73', gold73Schema);

module.exports = Gold73;
